import Styles from "./Main.module.scss";
import {EducationForm} from "./Education/Form/education.form";
import {ExperienceForm} from "./Experience/Form/experience.form";
import {PersonalInfoForm} from "./PersonalInfo/Form/personalInfo.form";
import {EducationDisplay} from "./Education/Display/education.display";
import {ExperienceDisplay} from "./Experience/Display/experience.display";
import {PersonalInfoDisplay} from "./PersonalInfo/Display/personalInfo.display";

import {Date} from "../Shared/Date/Date";

export function Main(){
    return (
        <main className={Styles.main}>
            <div>
                <h3>Personal Information</h3>
                <PersonalInfoForm />
                <h3>Education</h3>
                <EducationForm />
                <h3>Experience</h3>
                <ExperienceForm />
            </div>
            <div>
                <PersonalInfoDisplay />
                <EducationDisplay />
                <ExperienceDisplay />
            </div>
        </main>
    );
}