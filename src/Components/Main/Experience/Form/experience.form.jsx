import {useExperienceState} from "../experience.state";
import {Date} from "../../../Shared/Date/Date";
import { Input } from "../../../Shared/Input/Input";
import { TextArea} from "../../../Shared/TextArea/TextArea";
export function ExperienceForm(){
    const {experience,handleInputChange} = useExperienceState();
    return (
        <>
            <Input type="text" label="role" text="Role" value={experience.role} handler={handleInputChange} />
            <Input type="text" label="company" text="Company" value={experience.company} handler={handleInputChange} />
            <Date label="from-date" text="From Date" value={experience.fromDate} handler={handleInputChange}/>
            <Date label="to-date" text="To Date" value={experience.toDate} handler={handleInputChange}/>
            <TextArea label="description" text="Description" value={experience.description} handler={experience.handleInputChange} />
        </>
    );
};