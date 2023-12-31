<?php

namespace App\Notifications;

use App\Models\Task;
use Benwilkins\FCM\FcmMessage;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;

class TaskNotification extends Notification
{
    use Queueable, Dispatchable, InteractsWithSockets, SerializesModels;

    private $task;
    public $message;
    public $title;
    public $icon;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Task $task)
    {
        $this->task = $task;
        $this->title = "Tarea asignada con prioridad: " . __("lang.todos.todo_tags_{$task->tags}");
        $this->message = "Descripción: " . $this->task->description;
        $this->icon = null;
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
            'icon'         => null, //$this->task->user->getFirstMediaUrl('image', 'thumb'),
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
            'id' => $this->task->id,
            "data" => $this->task,
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
        return 'tasks';
    }

    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage(['id' => $this->task->id, 'name' => $this->task->user->name]);
    }
}
