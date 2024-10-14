<?php

namespace App\Controllers;
use App\Models\blogModel;

class Pages extends BaseController
{
    public function aboutus()
    {
        return view('Pages/aboutus');
    }

    public function blog()
    {
        if($this->request->getMethod() === "GET"){
            return view('Pages/blog');
        }elseif($this->request->getMethod() === "POST"){
            $blogsmodel = new BlogModel();
            $blogs = $blogsmodel->findAll();
            if($blogs){
                return $this->response->setJSON([
                    'status' => 'success',
                    'data' => $blogs
                ]);
            }else{
                return $this->response->setJSON([
                    'status' => 'error',
                    'data' => "Blogs is not found!!"
                ]);
            }
        }
    }

    public function blogdetails($id) 
    {
        $BlogModel = new BlogModel;
        $blogDetails = $BlogModel->where('id', $id)->first();
        if ($blogDetails) {
            return $this->response->setJSON([
                'status' => 'success',
                'data' => $blogDetails
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 'error',
                'data' => "Blog is not found!!"
            ]);
        }
    }  

    public function contactus()
    {
        return view('Pages/contactus');
    }

    public function pricing()
    {
        return view('Pages/pricing');
    }

    public function privacypolicy()
    {
        return view('Pages/privacy-policy');
    }

    public function refundcancellation()
    {
        return view('Pages/refundandcancellation');
    }

    public function termcondition()
    {
        return view('Pages/termandconditions');
    }
}
