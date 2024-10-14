<?php

namespace App\Models;
use CodeIgniter\Model;

class ResumePhase2Model extends Model
{
    protected $table      = 'candidate_details_phase2';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'edu_level', 'degree', 'branch', 'institution', 'period_from', 'period_to', 'cgpa_sgpa', 'mejorproject', 'certification'];
}

