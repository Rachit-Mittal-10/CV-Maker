import {useExperienceState} from "../experience.state";
import {Date} from "../../../Shared/Date/Date";

export function ExperienceForm(){
    const {experience,handleInputChange} = useExperienceState();
    return (
        <>
            <label htmlFor="role">Role:{ }</label>
            <input id="role" name="role" type="text" value={experience.role} onChange={handleInputChange}/>
            <label htmlFor="company">Company:{ }</label>
            <input id="company" name="company" type="text" value={experience.company} onChange={handleInputChange}/>
            <Date label="from-date" text="From Date" value={experience.fromDate} handler={handleInputChange}/>
            <Date label="to-date" text="To Date" value={experience.toDate} handler={handleInputChange}/>
            <label htmlFor="description">Description:{ }</label>
            <textarea id="description" name="description" value={experience.description} onChange={handleInputChange}></textarea>
        </>
    );
};