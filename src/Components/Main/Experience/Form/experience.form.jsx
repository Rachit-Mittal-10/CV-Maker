import {useExperienceState} from "../experience.state";

export function ExperienceForm(){
    const {experience,handleInputChange} = useExperienceState();
    return (
        <>
            <label htmlFor="role">Role:{ }</label>
            <input id="role" name="role" type="text" value={experience.role} onChange={handleInputChange}/>
            <label htmlFor="company">Company:{ }</label>
            <input id="company" name="company" type="text" value={experience.company} onChange={handleInputChange}/>
            <label htmlFor="fromDate">From Date:{ }</label>
            <input id="fromDate" name="fromDate" type="date" value={experience.fromDate} onChange={handleInputChange}/>
            <label htmlFor="toDate">To Date:{ }</label>
            <input id="toDate" name="toDate" type="date" value={experience.toDate} onChange={handleInputChange}/>
            <label htmlFor="description">Description:{ }</label>
            <textarea id="description" name="description" value={experience.description} onChange={handleInputChange}></textarea>
        </>
    );
};