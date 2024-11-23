import PropTypes from "prop-types";

ExperienceDisplay.propTypes = {
    resumeData: PropTypes.object,
}

export function ExperienceDisplay(props){
    const experience = props.resumeData.experience;
    return (
        <div className="experience">
            <p>Role: {experience.role}</p>
            <p>Company: {experience.company}</p>
            <p>From Date: {experience.fromDate}</p>
            <p>To Date: {experience.toDate}</p>
            <p>Description: {experience.description}</p>
        </div>
    );
}