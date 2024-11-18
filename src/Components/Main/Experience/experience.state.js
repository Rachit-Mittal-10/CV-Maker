import { useState } from "react";

export function useExperienceState(){
    const [experience, setExperience] = useState({
        role: '',
        company: '',
        fromDate: '',
        toDate: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setExperience((prev)=>{
            return {
                ...prev,
                [name]:value,
            };
        });
    };
    return {
        experience,
        handleInputChange
    };
};