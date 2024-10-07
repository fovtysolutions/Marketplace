import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useHandleSubmit = () => {
    const [passwordMatchErr, setErrHandle] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [phaseCount, setphaseCount] = useState(false);
    const navigate = useNavigate();

    const hookHandleSubmit = async (formData,url,pagelocation = '') => {
        if (formData.password !== formData.cpassword && formData.cpassword) {
            setShowError(true);
            setErrHandle("Password not matched!!");
            return;
        }
        try {
            const response = await axios.post(url, formData);
            if (response.data.status === 'success') {
                setErrHandle(response.data.uid);
                setShowError('success');
                if(response.data){
                    setShowSuccess(response.data.uid);
                    setphaseCount(response.data.count);
                }else{
                    setShowSuccess(false);
                }
                setTimeout(() => {
                    navigate(pagelocation);
                }, 2000);
            } else if (response.data.status === 'error') {
                setShowError(true);
                setErrHandle(response.data.data);
            }
        } catch (error) {
            setShowError(true);
            setErrHandle("Something went wrong");
        }

        setTimeout(() => {
            setShowError(false);
            setErrHandle("");
        }, 2000);
    };

    return { hookHandleSubmit, passwordMatchErr, showError, showSuccess, phaseCount };
};

export default useHandleSubmit;
