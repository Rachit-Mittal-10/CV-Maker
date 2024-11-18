import { useState } from "react";

export function usePersonalInfoState(){
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        age: '',
        dob: '1900-01-01',
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