import { useState } from 'react';
import axios from 'axios';

const dataHandle2 = () => {
    const [fetchData2, setErrHandle2] = useState([]);
    const [showError2, setShowError2] = useState(false);
    const hookHandleData2 = async (formData,url) => {
        try {
            const response = await axios.post(url, formData);
            if (response.data.status === 'success') {
                setErrHandle2(response.data.data);
                setShowError2('success');
            } else if (response.data.status === 'error') {
                setShowError2('nothing');
                setErrHandle2(response.data.data);
            }
        } catch (error) {
            setShowError2('nothing');
            setErrHandle2("Something went wrong");
        }
    };
    const loader2 =  `<div>Loading...</div>`;
    return { hookHandleData2, fetchData2, showError2, loader2 };
};

export default dataHandle2;
