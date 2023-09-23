<?php

namespace App\Notifications;

use App\Models\Appointment;
use Benwilkins\FCM\FcmMessage;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class AppointmentNotification extends Notification implements ShouldBroadcast
{
    use Queueable, Dispatchable, InteractsWithSockets, SerializesModels;

    private $appointment;
    public $message;
    public $title;
    public $icon;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Appointment $appointment)
    {
        $this->appointment = $appointment;

        // Define un mapeo de estados a cadenas de título
        $stateTitles = [
            'pending'   => __('lang.scheduled_appointment_pending'),
            'confirmed' => __('lang.scheduled_appointment_confirmed'),
            'canceled'  => __('lang.scheduled_appointment_canceled'),
        ];

        // Obtén el título según el estado
        $this->title = $stateTitles[$this->appointment->state] . " " . __('lang.appointment_of_patient') . " " . $this->appointment->patient->full_name;
        $this->message = __("lang.date") . ": " . formatDate($this->appointment->date) . " Folio:" . $this->appointment->id;
        $this->icon = $this->appointment->patient->has_media ? $this->appointment->patient->avatar : null;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'fcm', 'broadcast'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    public function toFcm($notifiable)
    {
        $message = new FcmMessage();
        $notification = [
            'title'        => $this->title,
            'body'         => $this->message,
            'icon'         => $this->icon,
            'click_action' => "FLUTTER_NOTIFICATION_CLICK",
            'id' => '1',
            'status' => 'done',
        ];
        $message->content($notification)->data($notification)->priority(FcmMessage::PRIORITY_HIGH);

        return $message;
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'id' => $this->appointment->id,
            "data" => $this->appointment,
            "message" => $this->message,
            "title" => $this->title,
            "icon" => $this->icon,
        ];
    }

    /**
     * The event's broadcast name.
     *
     * @return array
     */
    public function broadcastWith(): array
    {
        return [
            'title' => $this->title,
            'message' => $this->message
        ];
    }

    public function broadcastAs()
    {
        return 'appointments';
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    // public function broadcastOn() : Channel
    // {
    //     return new Channel('message-appointments');
    // }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage(['id' => $this->appointment->id, 'name' => $this->appointment->patient->full_name,]);
    }
}
