<?php

namespace App\Notifications;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;

class NewNotification extends Notification implements ShouldBroadcast
{
    use Queueable, Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($message)
    {
        $this->message = $message;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['broadcast'];
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

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'appointment_id' => 1,
            "appointment" => [],
            "message" => $this->message,
            "title" => "Titulo",
            "icon" => null,
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
            'title' => "Hola mensaje",
            'message' => $this->message
        ];
    }

    public function broadcastAs()
    {
        return 'appointments';
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage(['appointment_id' => 1, 'patient' => 'Cesar Chab']);
    }
}
