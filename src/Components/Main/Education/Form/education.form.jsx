import {useEducationState} from "../education.state";
import { Date } from "../../../Shared/Date/Date";
import { Input } from "../../../Shared/Input/Input";

export function EducationForm(){
    const {education, handleInputChange} = useEducationState();
    return (
        <>
            <Input label="degree" text="Degree" value={education.degree} onChange={handleInputChange} type="text"/>
            <Input label="college" text="College" value={education.college} onChange={handleInputChange} type="text"/>
            <Date label="from-date" value={education.fromDate} onChange={handleInputChange} text="From Date"/>
            <Date label="to-date" value={education.toDate} onChange={handleInputChange} text="To Date"/>
        </>
    );
};