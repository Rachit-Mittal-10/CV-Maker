import {useEducationState} from "../education.state";
import { Date } from "../../../Shared/Date/Date";
import { Input } from "../../../Shared/Input/Input";

export function EducationForm(){
    const {education, handleInputChange} = useEducationState();
    return (
        <>
            <Input label="degree" text="Degree" value={education.degree} handler={handleInputChange}/>
            <Input label="college" text="College" value={education.college} handler={handleInputChange}/>
            <Date label="from-date" value={education.fromDate} handler={handleInputChange} text="From Date"/>
            <Date label="to-date" value={education.toDate} handler={handleInputChange} text="To Date"/>
        </>
    );
};