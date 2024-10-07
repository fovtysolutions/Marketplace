<?php

namespace App\Models;
use CodeIgniter\Model;

class EmpuserModel extends Model
{
    protected $table      = 'employer_users';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'username', 'email', 'mobile', 'weburl', 'password'];
}

