<?php

namespace App\Models;
use CodeIgniter\Model;

class ResumePhase5Model extends Model
{
    protected $table      = 'candidate_details_phase5';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'department', 'location', 'work_mode', 'shift_from', 'shift_to', 'notice_period', 'current_salary', 'expected_salary', 'experience', 'salary_mode', 'acceptation'];
}