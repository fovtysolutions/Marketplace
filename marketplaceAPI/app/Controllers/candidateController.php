<?php 
namespace App\Controllers;
use App\Models\resumePhase2Model;
use App\Models\ResumePhase3Model;
use App\Models\ResumePhase4Model;
use App\Models\ResumePhase5Model;
use App\Models\canuserModel;
use App\Models\resumePhaseAllModel;

class candidateController extends BaseController
{
    public function phaseAlldetails($uid)
    {
        $model = new ResumePhaseAllModel();
        $combinedDetails = $model->getCombinedDetailsByUid($uid);
        if ($combinedDetails) {
            return $this->response->setJSON([
                'status' => 'success',
                'data' => $combinedDetails
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'message' => 'No data found for this UID.'
            ]);
        }
    }

    public function uploadResume()
    {
        $validation = \Config\Services::validation();
        if ($this->request->getVar('uploaded')) {
            $rules = [
                "uploaded" => "required"
            ];
        }
        if (isset($_FILES['uploaded']) && $_FILES['uploaded']['error'] !== UPLOAD_ERR_NO_FILE) {
            $rules['uploaded'] = [
                'uploaded[uploaded]',
                'mime_in[uploaded,image/jpg,image/jpeg,image/gif,image/png]',
                'max_size[uploaded,4096]' // Max file size is 4MB
            ];
        }
        $validation->setRules($rules);

        if ($validation->withRequest($this->request)->run() === FALSE) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }
        if ($this->request->getFile('uploaded')) {
            $file = $this->request->getFile('uploaded');
            if ($file->isValid() && !$file->hasMoved()) {
                $uploadPath = 'uploads/resume/';
                $file->move(FCPATH . $uploadPath);
                $filename = 'uploads/resume/'.$file->getName();
            }
        }
        if ($this->request->getVar('uploaded')) {
            $filename = $this->request->getVar('uploaded');
        }
        $uid = $this->request->getVar('uid');
        $uploadResumeFile = [
            "uploaded"=>$filename,
        ];
        $canModel = new CanuserModel;
        $usercan = $canModel->where('uid', $uid)->first();
        if($usercan){
            $id = $usercan['id'];
            $canModel->update($id, $uploadResumeFile);
            return $this->response->setJSON([
                'status' => 'success',
                'data' => "Saved data successfully!!",
                'count' => $id
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error', 
                'data' => "User is not found!!"
            ]);
        }
    }

    public function phase1()
    {
        $validation = \Config\Services::validation();
        $rules = [
            "prilanguage" => "required",
            "dob" => "required",
            "address" => "required",
            "country" => "required",
            "state" => "required",
            "city" => "required",
            "zipcode" => "required"
        ];
        if (isset($_FILES['profileimg']) && $_FILES['profileimg']['error'] !== UPLOAD_ERR_NO_FILE) {
            $rules['profileimg'] = [
                'uploaded[profileimg]',
                'mime_in[profileimg,image/jpg,image/jpeg,image/gif,image/png]',
                'max_size[profileimg,4096]' // Max file size is 4MB
            ];
        }
        $validation->setRules($rules);

        if ($validation->withRequest($this->request)->run() === FALSE) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        $uid = $this->request->getVar("candidate_user_uid");
        $username = $this->request->getVar("username");
        $lastname = $this->request->getVar("lastname");
        // $email = $this->request->getVar("email");
        $mobile = $this->request->getVar("mobile");
        $prilanguage = $this->request->getVar("prilanguage");
        $seclanguage = $this->request->getVar("seclanguage");
        $dob = $this->request->getVar("dob");
        $address = $this->request->getVar("address");
        $landmark = $this->request->getVar("landmark");
        $country = $this->request->getVar("country");
        $state = $this->request->getVar("state");
        $city = $this->request->getVar("city");
        $zipcode = $this->request->getVar("zipcode");
        $description = $this->request->getVar("description");

        // Convert it to 'YYYY-MM-DD'
        // $date_obj = \DateTime::createFromFormat('m/d/Y', $dob);
        // $dob = $date_obj->format('Y-m-d');
        if ($this->request->getFile('profileimg')) {
            $file = $this->request->getFile('profileimg');
            if ($file->isValid() && !$file->hasMoved()) {
                $uploadPath = 'uploads/profileimg/';
                $file->move(FCPATH . $uploadPath);
                $filename = 'uploads/profileimg/'.$file->getName();
            }
        }
        if ($this->request->getVar('profileimg')) {
            $filename = $this->request->getVar('profileimg');
        }

        $dataPhase1 = [
            "username"=>$username,
            "lastname"=>$lastname,
            "mobile"=>$mobile,
            "prilanguage"=>$prilanguage,
            "seclanguage"=>$seclanguage,
            "profileimg"=>$filename,
            "dob"=>$dob,
            "address"=>$address,
            "landmark"=>$landmark,
            "country"=>$country,
            "state"=>$state,
            "city"=>$city,
            "zipcode"=>$zipcode,
            "description"=>$description
        ];
        $canModel = new CanuserModel;
        $phase2Model = new ResumePhase2Model;
        $usercan = $canModel->where('uid', $uid)->first();
        $phase2can = $phase2Model->where('uid', $uid)->first();
        if($usercan){
            $id = $usercan['id'];
            $canModel->update($id, $dataPhase1);
            if (!$phase2can) {
                $dataPhase2 = [
                    "uid" => $uid,
                ];
                $phase2Model->insert($dataPhase2);
            }
            return $this->response->setJSON([
                'status' => 'success',
                'data' => "Saved data successfully!!",
                'count' => $id
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error', 
                'data' => "User is not found!!"
            ]);
        }
    }

    public function phase2($id)
    {
        $validation = \Config\Services::validation();
        $rules = [
            "edu_level" => "required|not_in_list[null,'']",
            "degree" => "required|not_in_list[null,'']",
            "branch" => "required|not_in_list[null,'']",
            "institution" => "required|not_in_list[null,'']",
            "period_from" => "required|not_in_list[null,'']",
            "period_to" => "required|not_in_list[null,'']",
            "cgpa_sgpa" => "required|not_in_list[null,'']"
        ];
        $validation->setRules($rules);

        if ($validation->withRequest($this->request)->run() === FALSE) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        $uid = $this->request->getVar("uid");
        $edu_level = $this->request->getVar("edu_level");
        $degree = $this->request->getVar("degree");
        $branch = $this->request->getVar("branch");
        $institution = $this->request->getVar("institution");
        $period_from = $this->request->getVar("period_from");
        $period_to = $this->request->getVar("period_to");
        $cgpa_sgpa = $this->request->getVar("cgpa_sgpa");

        $dataPhase2 = [
            "edu_level"=>$edu_level,
            "degree"=>$degree,
            "branch"=>$branch,
            "institution"=>$institution,
            "period_from"=>$period_from,
            "period_to"=>$period_to,
            "cgpa_sgpa"=>$cgpa_sgpa
        ];
        $phase2Model = new ResumePhase2Model;
        $phase3Model = new ResumePhase3Model;
        $phase2can = $phase2Model->where('id', $id)->first();
        if($phase2can){
            $id = $phase2can['id'];
            $uid = $phase2can['uid'];
            $phase3can = $phase3Model->where('uid', $uid)->first();
            $phase2Model->update($id, $dataPhase2);
            if (!$phase3can) {
                $dataPhase3 = [
                    "uid" => $uid,
                ];
                $phase3Model->insert($dataPhase3);
            }
            return $this->response->setJSON([
                'status' => 'success',
                'data' => "Saved data successfully!!",
                'count' => $id
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error', 
                'data' => "User is not found!!"
            ]);
        }
    }

    public function phase2add($id) 
    {
        $phase2Model = new ResumePhase2Model();
        $phase2Details = $phase2Model->where('uid', $id)->findAll();
        if ($phase2Details) {
            if ($this->request->getVar('addRow')) {
                $dataPhase2 = [
                    "uid" => $id,
                ];
                $phase2Model->insert($dataPhase2);
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => $phase2Details
                ]);
            }
            if ($this->request->getVar('deleteRow')) {
                $mainid = $this->request->getVar('deleteRow');
                if ($mainid > 0) { 
                    $phase2Model->delete($mainid);
                    return $this->response->setJSON([
                        'status' => 'success',
                        'data' => $phase2Details
                    ]);
                } else {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'data' => 'Invalid ID'
                    ]);
                }
            }
            if ($this->request->getVar('refreshRow')) {
                $refresh = $this->request->getVar('refreshRow');
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => $phase2Details
                ]);
            }
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "notavailable"
            ]);
        }
    } 

    public function phase2multifile($id) 
    {
        $phase2Model = new ResumePhase2Model();
        $phase2Details = $phase2Model->where('id', $id)->first();
        $validation = \Config\Services::validation();
        if ($phase2Details) {
            if ($files = $this->request->getFiles()) {
                $rules = [
                    'files' => [
                        'label' => 'Files',
                        'rules' => 'uploaded[files]|max_size[files,2048]|ext_in[files,jpg,jpeg,png,pdf]',
                    ],
                ];
                $validation->setRules($rules);
                if ($validation->withRequest($this->request)->run() === FALSE) {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'errors' => $validation->getErrors()
                    ]);
                }

                helper(['form', 'url']);
                $files = $this->request->getFiles(); 
                $fileData = [];
                if ($files) {
                    foreach ($files['files'] as $file) {
                        if ($file->isValid() && !$file->hasMoved()) {
                            $fileName = $file->getName();
                            $uploadPath = FCPATH . 'uploads/major_project/'; 
                            $file->move($uploadPath, $fileName); 
                            $fileData[] = $fileName; 
                        }
                    }
                    $fileJSON = json_encode($fileData);
                    $dataPhase2 = [
                        "mejorproject" => $fileJSON,
                    ];
                    $phase2Model->update($id, $dataPhase2);
                }
            }
            if ($this->request->getVar("majorFile")) {
                $jsonFile = $this->request->getVar("majorFile");
                $dataPhase2 = [
                    "mejorproject" => $jsonFile,
                ];
                $phase2Model->update($id, $dataPhase2);
                $fileJSON = $phase2Details['mejorproject'];
            }
            if ($this->request->getVar("returnss")) {
                $fileJSON = $phase2Details['mejorproject'];
            }
            return $this->response->setJSON([
                'status' => 'success', 
                'data' => $fileJSON
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "No files uploaded"
            ]);
        }
    } 

    public function phase2Certificate($id) 
    {
        $phase2Model = new ResumePhase2Model();
        $phase2Details = $phase2Model->where('id', $id)->first();
        if ($phase2Details) {
            $certificate = $this->request->getVar('certificate');
                $dataPhase2 = [
                    "certification" => $certificate,
                ];
                $phase2Model->update($id, $dataPhase2);
            return $this->response->setJSON([
                'status' => 'success',
                'data' => 'makeit'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "notavailable"
            ]);
        }
    } 
    
    public function phase3($id)
    {
        $validation = \Config\Services::validation();
        $rules = [
            "job_title" => "required",
            "department" => "required",
            "company" => "required",
            "rol_responsibility" => "required",
            "period_from" => "required",
            "period_to" => "required",
            "location" => "required"
        ];
        $validation->setRules($rules);

        if ($validation->withRequest($this->request)->run() === FALSE) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        $uid = $this->request->getVar("uid");
        $job_title = $this->request->getVar("job_title");
        $department = $this->request->getVar("department");
        $company = $this->request->getVar("company");
        $rol_responsibility = $this->request->getVar("rol_responsibility");
        $period_from = $this->request->getVar("period_from");
        $period_to = $this->request->getVar("period_to");
        $location = $this->request->getVar("location");

        $dataPhase3 = [
            "job_title"=>$job_title,
            "department"=>$department,
            "company"=>$company,
            "rol_responsibility"=>$rol_responsibility,
            "period_from"=>$period_from,
            "period_to"=>$period_to,
            "location"=>$location
        ];
        $phase3Model = new ResumePhase3Model;
        $phase4Model = new ResumePhase4Model;
        $phase3can = $phase3Model->where('id', $id)->first();
        if($phase3can){
            $id = $phase3can['id'];
            $uid = $phase3can['uid'];
            $phase3Model->update($id, $dataPhase3);
            $phase4can = $phase4Model->where('uid', $uid)->first();
            if (!$phase4can) {
                $dataPhase4 = [
                    "uid" => $uid,
                ];
                $phase4Model->insert($dataPhase4);
            }
            return $this->response->setJSON([
                'status' => 'success',
                'data' => "Saved data successfully!!",
                'count' => 4
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error', 
                'data' => "User is not found!!"
            ]);
        }
    }

    public function phase3add($id) 
    {
        $phase3Model = new ResumePhase3Model();
        $phase3Details = $phase3Model->where('uid', $id)->findAll();
        if ($phase3Details) {
            if ($this->request->getVar('addRow')) {
                $dataPhase3 = [
                    "uid" => $id,
                ];
                $phase3Model->insert($dataPhase3);
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => $phase3Details
                ]);
            }
            if ($this->request->getVar('deleteRow')) {
                $mainid = $this->request->getVar('deleteRow');
                if ($mainid > 0) { 
                    $phase3Model->delete($mainid);
                    return $this->response->setJSON([
                        'status' => 'success',
                        'data' => $phase3Details
                    ]);
                } else {
                    return $this->response->setJSON([
                        'status' => 'error',
                        'data' => 'Invalid ID'
                    ]);
                }
            }
            if ($this->request->getVar('refreshRow')) {
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => $phase3Details
                ]);
            }
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "notavailable"
            ]);
        }
    }

    public function phase2Skills($id) 
    {
        $phase3Model = new ResumePhase3Model();
        $phase3Details = $phase3Model->where('id', $id)->first();
        if ($phase3Details) {
            $allSkills = $this->request->getVar('allSkills');
                $dataPhase3 = [
                    "skills" => $allSkills,
                ];
                $phase3Model->update($id, $dataPhase3);
            return $this->response->setJSON([
                'status' => 'success',
                'data' => 'makeit'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "notavailable"
            ]);
        }
    } 

    public function phase4()
    {
        $validation = \Config\Services::validation();
        $uid = $this->request->getVar("uid");
        $linkedin = $this->request->getVar("linkedin");
        $github = $this->request->getVar("github");
        $youtube = $this->request->getVar("youtube");
        $blog_portf = $this->request->getVar("blog_portf");
        $other = $this->request->getVar("other");

        $rules = [
            "linkedin" => [
                "label" => "LinkedIn",
                "rules" => "required|valid_url",
                "errors" => [
                    "required" => "The LinkedIn link is required.",
                    "valid_url" => "Please provide a valid LinkedIn URL."
                ]
            ]
        ];
        if ($github !== '') {
            $rules['github'] = [
                "label" => "GitHub",
                "rules" => "valid_url",
                "errors" => [
                    "valid_url" => "Please provide a valid GitHub URL."
                ]
            ];
        }
        
        if ($youtube !== '') {
            $rules['youtube'] = [
                "label" => "YouTube",
                "rules" => "valid_url",
                "errors" => [
                    "valid_url" => "Please provide a valid GitHub URL."
                ]
            ];
        }
        
        if ($blog_portf !== '') {
            $rules['blog_portf'] = [
                "label" => "Blog or Portfolio",
                "rules" => "valid_url",
                "errors" => [
                    "valid_url" => "Please provide a valid GitHub URL."
                ]
            ];
        }
        
        if ($other !== '') {
            $rules['other'] = [
                "label" => "Other Link",
                "rules" => "valid_url",
                "errors" => [
                    "valid_url" => "Please provide a valid GitHub URL."
                ]
            ];
        }
        $validation->setRules($rules);

        if ($validation->withRequest($this->request)->run() === FALSE) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        $dataPhase2 = [
            "linkedin"=>$linkedin,
            "github"=>$github,
            "youtube"=>$youtube,
            "blog_portf"=>$blog_portf,
            "other"=>$other,
        ];
        $phase4Model = new ResumePhase4Model;
        $phase5Model = new ResumePhase5Model;
        $phase4can = $phase4Model->where('uid', $uid)->first();
        if($phase4can){
            $id = $phase4can['id'];
            $phase4Model->update($id, $dataPhase2);
            $phase5can = $phase5Model->where('uid', $uid)->first();
            if (!$phase5can) {
                $dataPhase5 = [
                    "uid" => $uid,
                ];
                $phase5Model->insert($dataPhase5);
            }
            return $this->response->setJSON([
                'status' => 'success',
                'data' => "Saved data successfully!!",
                'count' => 5
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error', 
                'data' => "User is not found!!"
            ]);
        }
    }

    public function phase5()
    {
        $validation = \Config\Services::validation();
        $uid = $this->request->getVar("uid");
        $department = $this->request->getVar("department");
        $work_mode = $this->request->getVar("work_mode");
        $shift_from = $this->request->getVar("shift_from");
        $shift_to = $this->request->getVar("shift_to");
        $notice_period = $this->request->getVar("notice_period");
        $current_salary = $this->request->getVar("current_salary");
        $expected_salary = $this->request->getVar("expected_salary");
        $salary_mode = $this->request->getVar("salary_mode");
        $experience = $this->request->getVar("experience");
        $acceptation = $this->request->getVar("acceptation");

        $rules = [
            "department" => [
                "rules" => "required",
                "errors" => ["required" => "The Department is required.",]
            ],
            "work_mode" => [
                "rules" => "required",
                "errors" => ["required" => "The Work mode is required.",]
            ],
            "notice_period" => [
                "rules" => "required",
                "errors" => ["required" => "The Notice period is required.",]
            ],
            "expected_salary" => [
                "rules" => "required",
                "errors" => ["required" => "The Expected Salary is required.",]
            ],
            "experience" => [
                "rules" => "required",
                "errors" => ["required" => "The Experience is required.",]
            ],
            "salary_mode" => [
                "rules" => "required",
                "errors" => ["required" => "The Salary mode is required.",]
            ],
            "acceptation" => [
                "rules" => "required",
                "errors" => ["required" => "The Accept it.",]
            ]
        ];
        $validation->setRules($rules);

        if ($validation->withRequest($this->request)->run() === FALSE) {
            return $this->response->setJSON([
                'status' => 'error',
                'errors' => $validation->getErrors()
            ]);
        }

        $dataPhase5 = [
            "department"=>$department,
            "work_mode"=>$work_mode,
            "shift_from"=>$shift_from,
            "shift_to"=>$shift_to,
            "notice_period"=>$notice_period,
            "current_salary"=>$current_salary,
            "expected_salary"=>$expected_salary,
            "salary_mode"=>$salary_mode,
            "experience"=>$experience,
            "acceptation"=>'Accept',
        ];
        $phase5Model = new ResumePhase5Model;
        $phase5can = $phase5Model->where('uid', $uid)->first();
        if($phase5can){
            $id = $phase5can['id'];
            $phase5Model->update($id, $dataPhase5);
            return $this->response->setJSON([
                'status' => 'success',
                'data' => "Saved data successfully!!",
                'count' => 5
            ]);
        }else{
            return $this->response->setJSON([
                'status' => 'error', 
                'data' => "User is not found!!"
            ]);
        }
    }

    public function phase5location($uid) 
    {
        $phase5Model = new ResumePhase5Model();
        $phase5Details = $phase5Model->where('uid', $uid)->first();
        $id = $phase5Details['id'];
        if ($phase5Details) {
            $alllocation = $this->request->getVar('alllocation');
                $dataPhase5 = [
                    "location" => $alllocation,
                ];
                $phase5Model->update($id, $dataPhase5);
            return $this->response->setJSON([
                'status' => 'success',
                'data' => 'makeit'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "notavailable"
            ]);
        }
    } 

}