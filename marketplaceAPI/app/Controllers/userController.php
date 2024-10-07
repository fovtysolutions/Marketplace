<?php 
namespace App\Controllers;
use App\Models\canuserModel;
use App\Models\empuserModel;

class userController extends BaseController
{
    public function singleUser()
    {
        $userName = $this->request->getVar("userName");
        $uid = $this->request->getVar("uid");
        $modelcan = new CanuserModel();
        $modelemp = new EmpuserModel();
        $usercan = $modelcan->where('uid', $uid)->first();
        $useremp = $modelemp->where('uid', $uid)->first();
        if($usercan || $useremp){
            if($userName == 'candidate'){
                $userData = $usercan;
            }
            if($userName == 'employer'){
                $userData = $useremp;
            }
            return $this->response->setJSON([
                'status' => 'success',
                'data' => $userData
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "User is not found!!"
            ]);
        }
    }
}