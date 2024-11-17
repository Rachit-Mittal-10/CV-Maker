import {useEducationState} from "../education.state";

export default function EducationDisplay(){
    const [education] = useEducationState();
    return (
        <div className="education-display">
            <p>Degree: {education.degree}</p>
            <p>College: {education.college}</p>
            <p>From Date: {education.fromDate}</p>
            <p>To Date: {education.toDate}</p>
        </div>
    );
};