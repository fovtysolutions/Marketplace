<?php

namespace App\Controllers;
use App\Models\canuserModel;
use App\Models\empuserModel;
use App\Models\otpModel;

class Home extends BaseController
{
    public function index()
    {
        return view('main');
    }

    public function login()
    {
        if($this->request->getMethod() === "GET"){
            return view('Auth/login');
        }elseif($this->request->getMethod() === "POST"){
            $validation = \Config\Services::validation();
            $validation->setRules([
                "email"=>"required|valid_email",
                "password"=>"required|min_length[5]|max_length[20]",
            ]);

            if ($validation->withRequest($this->request)->run() === FALSE) {
                return $this->response->setJSON([
                    'status' => 'error',
                    'errors' => $validation->getErrors()
                ]);
            }
            $session = session();
            $email = $this->request->getVar('email');
            $password = md5($this->request->getVar('password'));
            $userface = $this->request->getVar('userface');
            $remember = 1;
            if($userface == "candidate"){
                $model = new CanuserModel();
                $userroute = "candidate/dashboard";
            }elseif($userface == "employer"){
                $model = new EmpuserModel();
                $userroute = "employer/dashboard";
            }
            $user = $model->where('email', $email)->first();
            if ($user) {
                if ($password == $user['password']) {
                    $session->set([
                        'id' => $user['id'],
                        'uid' => $user['uid'],
                        'email' => $user['email'],
                        'logged_in' => true,
                    ]);
                    if($remember  == 0){
                        set_cookies([
                            "uid" => encrypt_encode($user['uid'])
                        ], 2592000);
                    }
                    return $this->response->setJSON([
                        'status' => 'success',
                        'route' => $userroute,
                        'uid' => $user['uid'],
                        'data' => "You are logged in successfuly!!"
                    ]);
                } else {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'route' => 1,
                        'data' => "Invalid password or email!!"
                    ]);
                }
            } else {
                return $this->response->setJSON([
                    'status' => 'error',
                    'route' => 2,
                    'data' => "User is not found!!"
                ]);
            }
        }
    }

    public function candidate_register()
    {
        if($this->request->getMethod() === "GET"){
            return view('Auth/candidate_register');
        }elseif($this->request->getMethod() === "POST"){
            $validation = \Config\Services::validation();
            $validation->setRules([
                "username"=>"required",
                "email"=>"required|valid_email",
                "password"=>"required|min_length[5]|max_length[20]",
                "cpassword"=>"matches[password]"
            ]);

            if ($validation->withRequest($this->request)->run() === FALSE) {
                return $this->response->setJSON([
                    'status' => 'error',
                    'errors' => $validation->getErrors()
                ]);
            }
                $username = $this->request->getVar("username");
                $email = $this->request->getVar("email");
                $mobile = $this->request->getVar("mobile");
                $password = md5($this->request->getVar("password"));
                $uid = bin2hex(random_bytes(8));
                $data = [
                    "username"=>$username,
                    "email"=>$email,
                    "mobile"=>$mobile,
                    "password"=>$password,
                    "uid"=>$uid
                ];
                $model = new CanuserModel;
                $useremail = $model->where('email', $email)->first();
                $usermobile = $model->where('mobile', $mobile)->first();
                if ($useremail) {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'data' => "This email is already exist!!"
                    ]);
                }
                if ($usermobile) {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'data' => "This mobile is already exist!!"
                    ]);
                }
                $model->insert($data);

                $session = session();
                $session->set("success");
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => "Saved data successfully!!"
                ]);
        }
    }

    public function employer_register()
    {
        if($this->request->getMethod() === "GET"){
            return view('Auth/employer_register');
        }elseif($this->request->getMethod() === "POST"){
            $validation = \Config\Services::validation();
            $validation->setRules([
                "username"=>"required",
                "weburl"=>"required",
                "email"=>"required|valid_email",
                "password"=>"required|min_length[5]|max_length[20]",
                "cpassword"=>"matches[password]"
            ]);

            if ($validation->withRequest($this->request)->run() === FALSE) {
                return $this->response->setJSON([
                    'status' => 'error',
                    'errors' => $validation->getErrors()
                ]);
            }
                $username = $this->request->getVar("username");
                $email = $this->request->getVar("email");
                $mobile = $this->request->getVar("mobile");
                $password = md5($this->request->getVar("password"));
                $weburl = $this->request->getVar("weburl");
                $uid = bin2hex(random_bytes(8));
                $data = [
                    "username"=>$username,
                    "email"=>$email,
                    "mobile"=>$mobile,
                    "weburl"=>$weburl,
                    "password"=>$password,
                    "uid"=>$uid
                ];
                $model = new EmpuserModel;
                $useremail = $model->where('email', $email)->first();
                $usermobile = $model->where('mobile', $mobile)->first();
                if ($useremail) {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'data' => "This email is already exist!!"
                    ]);
                }
                if ($usermobile) {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'data' => "This mobile is already exist!!"
                    ]);
                }
                $model->insert($data);

                $session = session();
                $session->set("success");
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => "Saved data successfully!!"
                ]);
        }
    }

    public function forgot()
    {
        if($this->request->getMethod() === "GET"){
            return view('Auth/forgot');
        }elseif($this->request->getMethod() === "POST"){
            $validation = \Config\Services::validation();
            $validation->setRules([
                "email"=>"required|valid_email",
            ]);

            if ($validation->withRequest($this->request)->run() === FALSE) {
                return $this->response->setJSON([
                    'status' => 'error',
                    'errors' => $validation->getErrors()
                ]);
            }
            $session = session();
            $email = $this->request->getVar('email');
            $fronturl = $this->request->getVar('fronturl');
            $recovery_code = bin2hex(random_bytes(8));
            $otp = random_int(100000, 999999);
            $modelcan = new CanuserModel();
            $modelemp = new EmpuserModel();
            $modelotp = new OtpModel();
            
            $usercan = $modelcan->where('email', $email)->first();
            $useremp = $modelemp->where('email', $email)->first();
            if ($usercan || $useremp) {
                if($usercan !== null){
                    $user_type = 'candidate';
                    $data = [
                        "uid"=>$usercan['uid'],
                        "email"=>$usercan['email'],
                        "frontweburl"=>$fronturl,
                        "otp"=>$otp,
                        "recovery_code"=>$recovery_code,
                        "user_type"=>$user_type
                    ];
                }
                if($useremp !== null){
                    $user_type = 'employer';
                    $data = [
                        "uid"=>$useremp['uid'],
                        "email"=>$useremp['email'],
                        "frontweburl"=>$fronturl,
                        "otp"=>$otp,
                        "recovery_code"=>$recovery_code,
                        "user_type"=>$user_type
                    ];
                }
                $session = session();
                $session->set([
                    'reset_in' => true,
                ]);
                $modelotp->insert($data);
                $recovery_link = base_URL()."recovery_password/".$recovery_code;
                // here make email send code for sending this $recovery_link to user mail..

                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => "We have sent you to a link click on link and verify you account!!"
                ]);
            } else {
                return $this->response->setJSON([
                    'status' => 'error',
                    'data' => "User is not found!!"
                ]);
            }
        }
    }

    public function recovery_password($recovery_code) 
    {
        $otpModel = new OtpModel;
        $recover = $otpModel->where('recovery_code', $recovery_code)->first();
        if ($this->request->isAJAX()) {
            if ($recover) {
                $otpModel->delete($recover['id']);
                return $this->response->setJSON([
                    'status' => 'success',
                    'fronturl' => $recover['frontweburl']."reset",
                    'redirect' => '/reset'
                ]);
            } else {
                return $this->response->setJSON([
                    'status' => 'error',
                    'fronturl' => $recover['frontweburl']."forgot",
                    'redirect' => '/forgot'
                ]);
            }
        } else {
            if ($recover) {
                return view('auth/recovery_password');
            } else {
                return view('auth/forgot');
            }
        }
    }   

    public function reset() 
    {
        if($this->request->getMethod() === "GET"){
            return view('Auth/reset');
        }elseif($this->request->getMethod() === "POST"){
            $validation = \Config\Services::validation();
            $validation->setRules([
                "email"=>"required|valid_email",
                "password"=>"required|min_length[5]|max_length[20]",
                "cpassword"=>"matches[password]"
            ]);

            if ($validation->withRequest($this->request)->run() === FALSE) {
                return $this->response->setJSON([
                    'status' => 'error',
                    'errors' => $validation->getErrors()
                ]);
            }
            $email = $this->request->getVar("email");
            $password = md5($this->request->getVar("password"));
            $modelcan = new CanuserModel();
            $modelemp = new EmpuserModel();
            $usercan = $modelcan->where('email', $email)->first();
            $useremp = $modelemp->where('email', $email)->first();
            if($usercan || $useremp){
                if($usercan !== null){
                    $data = ['password' => $password];
                    $id = $usercan['id'];
                    $modelcan->update($id, $data);
                }
                if($useremp !== null){
                    $data = ['password' => $password];
                    $id = $useremp['id'];
                    $modelemp->update($id, $data);
                }
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => "Saved data successfully!!"
                ]);
            }else{
                return $this->response->setJSON([
                    'status' => 'error',
                    'data' => "User is not found!!"
                ]);
            }
        }
    }

    public function logout() 
    {
        $session = session();
        session_unset();
        session_destroy();
        return $this->response->setJSON([
            'status' => 'success',
            'data' => "Logged out successfully!!"
        ]);
    }
}
