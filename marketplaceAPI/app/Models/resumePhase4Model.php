<?php

namespace App\Models;
use CodeIgniter\Model;

class ResumePhase4Model extends Model
{
    protected $table      = 'candidate_details_phase4';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'linkedin', 'github', 'youtube', 'blog_portf', 'other'];
}

