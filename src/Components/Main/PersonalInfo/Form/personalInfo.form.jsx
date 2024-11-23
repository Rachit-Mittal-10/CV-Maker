import {Date} from "../../../Shared/Date/Date";
import {Input} from "../../../Shared/Input/Input";
import PropTypes from "prop-types";

PersonalInfoForm.propTypes = {
    resumeData: PropTypes.object.isRequired,
    setResumeData: PropTypes.func.isRequired,
};

export function PersonalInfoForm(props){
    const resumeData = props.resumeData;
    const setResumeData = props.setResumeData;
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setResumeData({
            ...resumeData,
            personalInfo: {
                ...resumeData.personalInfo,
                [name]:value
            },
        });
    };
    return (
        <>
            <Input type="text" label="name" text="Name" value={resumeData.personalInfo.name} onChange={handleInputChange} />
            <Input type="number" label="age" text="Age" value={resumeData.personalInfo.age} onChange={handleInputChange} />
            <Date label="dob" text="DOB" value={resumeData.personalInfo.dob} onChange={handleInputChange} />
            <Input label="contactNumber" text="Contact Number" value={resumeData.personalInfo.contactNumber} onChange={handleInputChange} type="number" />
            <Input label="email" text="Email" value={resumeData.personalInfo.email} onChange={handleInputChange} type="email" />
            <Input label="location" text="Location" type="text" value={resumeData.personalInfo.location} onChange={handleInputChange} />
        </>
    );
}