import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useHandleSubmit = () => {
    const [showSuccess, setErrHandle] = useState('');
    const [showError, setShowError] = useState(false);
    const [phaseCount, setphaseCount] = useState(false);
    const navigate = useNavigate();

    const hookHandleSubmit = async (formData,url,pagelocation = '',changeSuccess) => {
        if(changeSuccess === 'setupagain') {setShowError(false);}
        if(formData){
            try {
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (response.data.status === 'success') {
                    setErrHandle(response.data.status);
                    setShowError('success');
                    setphaseCount(response.data.count);
                    setTimeout(() => {
                        navigate(pagelocation);
                    }, 5000);
                } else if (response.data.status === 'error') {
                    setShowError(true);
                    setErrHandle(response.data.errors);
                }
            } catch (error) {
                setShowError(true);
                setErrHandle("Something went wrong");
            }

            setTimeout(() => {
                setErrHandle("");
            }, 5000);
        }
    };

    return { hookHandleSubmit, showSuccess, showError, phaseCount };
};

export default useHandleSubmit;
