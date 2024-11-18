import { useState } from "react";

export function useEducationState(){
    const [education, setEducation] = useState({
        degree: '',
        college: '',
        toDate: '',
        fromDate: ''
    });
    
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setEducation((prev)=>{
            return{
                ...prev,
                [name]:value,
            };
        });
    };
    
    return {
        education,
        handleInputChange,
    };
};