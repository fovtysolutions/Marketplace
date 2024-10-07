<?php

namespace App\Models;
use CodeIgniter\Model;

class CanuserModel extends Model
{
    protected $table      = 'candidate_users';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['uid', 'username', 'lastname', 'email', 'mobile', 'password', 'uploaded', 'prilanguage', 'seclanguage', 'profileimg', 'dob', 'address', 'landmark', 'country', 'state', 'city', 'zipcode', 'description'];
}

