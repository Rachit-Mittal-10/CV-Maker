import PropTypes from "prop-types";

PersonalInfoDisplay.propTypes = {
    resumeData: PropTypes.object.isRequired,
}

export function PersonalInfoDisplay(props){
    const personalInfo = props.resumeData.personalInfo;
    return (
        <div className="personal-info">
            <p>Name: {personalInfo.name}</p>
            <p>Age: {personalInfo.age}</p>
            <p>DOB: {personalInfo.dob}</p>
            <p>Contact Number: {personalInfo.contactNumber}</p>
            <p>Email: {personalInfo.email}</p>
            <p>Location: {personalInfo.location}</p>
        </div>
    );
};