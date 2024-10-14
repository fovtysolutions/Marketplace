<?php

namespace App\Models;
use CodeIgniter\Model;

class BlogModel extends Model
{
    protected $table      = 'blogs';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType     = 'array';
    protected $allowedFields = ['title', 'subtitle', 'cover', 'short_content', 'content', 'status', 'extra_field', 'created_at' ,'updated_at'];
}