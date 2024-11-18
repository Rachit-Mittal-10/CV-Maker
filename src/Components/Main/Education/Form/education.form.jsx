import {useEducationState} from "../education.state";

export function EducationForm(){
    const {education, handleInputChange} = useEducationState();
    return (
        <>
            <div className="degree-container">
                <label htmlFor="degree">Degree:{ }</label>
                <input id="degree" name="degree" type="text" value={education.degree} onChange={handleInputChange}/>
            </div>
            <div className="college-container">
                <label htmlFor="college">College:{ }</label>
                <input id="college" name="college" type="text" value={education.college} onChange={handleInputChange}/>
            </div>
            <div className="from-date">
                <label htmlFor="fromDate">From Date:{ }</label>
                <input id="fromDate" name="fromDate" type="date" value={education.fromDate} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="toDate">To Date:{ }</label>
                <input id="toDate" name="toDate" type="date" value={education.toDate} onChange={handleInputChange}/>
            </div>
        </>
    );
};