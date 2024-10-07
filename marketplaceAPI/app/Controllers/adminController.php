<?php 
namespace App\Controllers;
use App\Models\selectOptionModel;

class adminController extends BaseController
{
    public function selectoption()
    {
        $selectModel = new SelectOptionModel();
        $optionselect = $selectModel->findAll();
        if($optionselect){
            return $this->response->setJSON([
                'status' => 'success',
                'data' => $optionselect
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "User is not found!!"
            ]);
        }
    }
}