<?php

namespace App\Models;
use CodeIgniter\Model;

class ResumePhase3Model extends Model
{
    protected $table      = 'candidate_details_phase3';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'job_title', 'department', 'company', 'period_from', 'period_to', 'rol_responsibility', 'location', 'skills'];
}

