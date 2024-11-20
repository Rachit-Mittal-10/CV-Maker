import {usePersonalInfoState} from "../personalInfo.state";
import { Date } from "../../../Shared/Date/Date";


export function PersonalInfoForm(){
    const {personalInfo, handleInputChange} = usePersonalInfoState();
    return (
        <>
            <label htmlFor="name">Name:{ }</label>
            <input id="name" name="name" type="text" value={personalInfo.name} onInput={handleInputChange}/>
            <label htmlFor="age">Age:{ }</label>
            <input id="age" name="age" type="number" value={personalInfo.age} onChange={handleInputChange}/>
            <Date label="dob" text="DOB" value={personalInfo.dob} handler={handleInputChange} />
            <label htmlFor="contactNumber">Contact Number:{ }</label>
            <input id="contactNumber" name="contactNumber" type="number" value={personalInfo.contactNumber} onChange={handleInputChange}/>
            <label htmlFor="email">E-Mail:{ }</label>
            <input id="email" name="email" type="email" value={personalInfo.email} onChange={handleInputChange}/>
        </>
    );
}