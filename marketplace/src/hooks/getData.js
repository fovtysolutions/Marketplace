import { useState } from 'react';
import axios from 'axios';

const dataHandle = () => {
    const [fetchData, setErrHandle] = useState([]);
    const [showError, setShowError] = useState(false);
    const hookHandleData = async (formData,url) => {
        try {
            const response = await axios.post(url, formData);
            if (response.data.status === 'success') {
                setErrHandle(response.data.data);
                setShowError('success');
            } else if (response.data.status === 'error') {
                setShowError('nothing');
                setErrHandle(response.data.data);
            }
        } catch (error) {
            setShowError('nothing');
            setErrHandle("Something went wrong");
        }
    };
    const loader =  `<div>Loading...</div>`;
    return { hookHandleData, fetchData, showError, loader };
};

export default dataHandle;
