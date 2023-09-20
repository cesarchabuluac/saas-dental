<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, SoftDeletes;

    public $guard_name = 'web';

    protected $with = ['schedules'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'email_verified_at',
        'account_role',
        'is_active',
        'slug',
        'phone',
        'address',
        'biography',
        'device_token',
        'settings',
        'stripe_id',
        'pm_type',
        'pm_last_four',
        'trial_ends_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'settings' => 'json',
    ];

    /**
     * New Attributes
     *
     * @var array
     */
    protected $appends = [
        'has_media',
    ];

    public function getAllPermissionsAttribute()
    {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if (Auth::user()->can($permission->name)) {
                $permissions[] = $permission->name;
            }
        }
        return $permissions;
    }

    /**
     * Add Media to api results
     * @return bool
     */
    public function getHasMediaAttribute()
    {
        return $this->avatar ? true : false;
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function budgets(): HasMany
    {
        return $this->hasMany(Budget::class, 'user_id');
    }

    public function actionPayments(): HasMany
    {
        return $this->hasMany(ActionPayment::class, 'professional_id');
    }

    public function medicalHistories(): HasMany
    {
        return $this->hasMany(MedicalHistory::class, 'user_id', 'id');
    }

    public function schedules(): HasMany
    {
        return $this->hasMany(UserSchedule::class);
    }

    public function isAvailableAt(Carbon $dateTime)
    {
        // Obtén el día de la semana (0 para domingo, 1 para lunes, etc.)
        $dayOfWeek = $dateTime->dayOfWeek;

        // Busca el horario de trabajo del usuario para ese día de la semana
        $workSchedule = $this->schedules()->where('day_of_week', $dayOfWeek)->first();

        if (!$workSchedule) {
            return false; // El usuario no trabaja en este día
        }

        // Verifica si la hora seleccionada está dentro del horario de trabajo
        $startTime = Carbon::parse($workSchedule->start_time);
        $endTime = Carbon::parse($workSchedule->end_time);

        return $dateTime->between($startTime, $endTime);
    }
}
