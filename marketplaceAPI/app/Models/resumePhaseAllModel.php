<?php

namespace App\Models;
use CodeIgniter\Model;

class ResumePhaseAllModel extends Model
{
    public function getCombinedDetailsByUid($uid)
    {
        $builder = $this->db->table('candidate_users');
        $builder->where('uid', $uid);
        $candidateMain = $builder->get()->getRowArray(); 
        
        $builder = $this->db->table('candidate_details_phase2');
        $builder->where('uid', $uid);
        $Phase1 = $builder->get()->getResultArray(); 

        $builder = $this->db->table('candidate_details_phase3');
        $builder->where('uid', $uid);
        $Phase2 = $builder->get()->getResultArray(); 

        $builder = $this->db->table('candidate_details_phase4');
        $builder->where('uid', $uid);
        $Phase3 = $builder->get()->getRowArray(); 

        $builder = $this->db->table('candidate_details_phase5');
        $builder->where('uid', $uid);
        $Phase4 = $builder->get()->getRowArray(); 

        $combinedData = [
            'canUser' => $candidateMain,   
            'phaseOne' => $Phase1,     
            'phaseTwo' => $Phase2,     
            'phaseThree' => $Phase3,     
            'phaseFour' => $Phase4     
        ];
        return $combinedData;
    }

    public function updateMajorProject($id, $fileJSON)
    {
         return $this->db->table('candidate_details_phase2')
         ->where('id', $id) 
         ->update(['mejorproject' => $fileJSON]);
    }
}

