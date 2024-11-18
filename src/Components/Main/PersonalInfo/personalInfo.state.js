import { useState } from "react";

export function usePersonalInfoState(){
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        age: '',
        dob: '',
        contactNumber: '',
        email: '',
        location: ''
    });

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setPersonalInfo((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })        
    };
    return {
        personalInfo,
        handleInputChange
    };
};