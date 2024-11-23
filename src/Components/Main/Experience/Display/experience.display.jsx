import PropTypes from "prop-types";

ExperienceDisplay.propTypes = {
    resumeData: PropTypes.object,
}

ExperienceEntry.propTypes = {
    exp: PropTypes.object,
}

function ExperienceEntry(props){
    const { exp } = props;
    return (
        <div className="entry">
            <p>Role: {exp.role}</p>
            <p>Company: {exp.company}</p>
            <p>From Date: {exp.fromDate}</p>
            <p>To Date: {exp.toDate}</p>
            <p>Description: {exp.description}</p>
        </div>
    );
}

export function ExperienceDisplay(props){
    const experience = props.resumeData.experience;
    return (
        <div className="experience">
            {
                experience.map((exp,index)=><ExperienceEntry key={index} exp={exp} />)
            }
        </div>
    );
};