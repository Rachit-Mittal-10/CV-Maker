import {useExperienceState} from "../experience.state";

export default function ExperienceDisplay(){
    const [experience] = useExperienceState();
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