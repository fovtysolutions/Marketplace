<?php

namespace App\Models;
use CodeIgniter\Model;

class SelectOptionModel extends Model
{
    protected $table      = 'select_option';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['code', 'type', 'name'];
}

