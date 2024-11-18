import {usePersonalInfoState} from "../personalInfo.state";

export function PersonalInfoForm(){
    const {personalInfo, handleInputChange} = usePersonalInfoState();
    return (
        <>
            <label htmlFor="name">Name:{ }</label>
            <input id="name" name="name" type="text" value={personalInfo.name} onChange={handleInputChange}/>
            <label htmlFor="age">Age:{ }</label>
            <input id="age" name="age" type="number" value={personalInfo.age} onChange={handleInputChange}/>
            <label htmlFor="dob">DOB:{ }</label>
            <input id="dob" name="dob" type="date" value={personalInfo.dob} onChange={handleInputChange}/>
            <label htmlFor="contactNumber">Contact Number:{ }</label>
            <input id="contactNumber" name="contactNumber" type="number" value={personalInfo.contactNumber} onChange={handleInputChange}/>
            <label htmlFor="email">E-Mail:{ }</label>
            <input id="email" name="email" type="email" value={personalInfo.email} onChange={handleInputChange}/>
        </>
    );
}