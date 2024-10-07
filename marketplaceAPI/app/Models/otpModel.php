<?php

namespace App\Models;
use CodeIgniter\Model;

class OtpModel extends Model
{
    protected $table      = 'otp';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'otp', 'email', 'frontweburl', 'recovery_code', 'user_type'];
}

