import {useEducationState} from "../education.state";

export default function EducationForm(){
    const [education, handleInputChange] = useEducationState();
    return (
        <>
            <label htmlFor="degree">Degree:{ }</label>
            <input id="degree" name="degree" type="text" value={education.degree} onChange={handleInputChange}/>
            <label htmlFor="college">College:{ }</label>
            <input id="college" name="college" type="text" value={education.college} onChange={handleInputChange}/>
            <label htmlFor="fromDate">From Date:{ }</label>
            <input id="fromDate" name="fromDate" type="date" value={education.fromDate} onChange={handleInputChange}/>
            <label htmlFor="toDate">To Date:{ }</label>
            <input id="toDate" name="toDate" type="date" value={education.toDate} onChange={handleInputChange}/>
        </>
    );
};