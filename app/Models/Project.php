<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'project_leader',
        'project_name',
        'client',
        'start_date',
        'end_date',
        'progress'
    ];

    protected $with = ['leader'];

    public function leader()
    {
        return $this->belongsTo(User::class, 'project_leader', 'id');
    }
}
