import {usePersonalInfoState} from "../personalInfo.state";
import { Date } from "../../../Shared/Date/Date";
import {Input} from "../../../Shared/Input/Input";

export function PersonalInfoForm(){
    const {personalInfo, handleInputChange} = usePersonalInfoState();
    return (
        <>
            <Input type="text" label="name" text="Name" value={personalInfo.name} handler={handleInputChange} />
            <Input type="number" label="age" text="Age" value={personalInfo.age} handler={handleInputChange} />
            <Date label="dob" text="DOB" value={personalInfo.dob} handler={handleInputChange} />
            <Input label="contactNumber" text="Contact Number" value={personalInfo.contactNumber} handler={handleInputChange} type="number" />
            <Input label="email" text="Email" value={personalInfo.email} handler={handleInputChange} type="email" />
        </>
    );
}