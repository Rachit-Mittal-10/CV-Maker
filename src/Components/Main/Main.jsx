import Styles from "./Main.module.scss";
// import {EducationForm} from "./Education/Form/education.form";
import {ExperienceForm} from "./Experience/Form/experience.form";
import {PersonalInfoForm} from "./PersonalInfo/Form/personalInfo.form";
// import {ProjectForm} from "./Project/Form/project.form";
// import {SkillsForm} from "./Skills/Form/skills.form";

// import {EducationDisplay} from "./Education/Display/education.display";
import {ExperienceDisplay} from "./Experience/Display/experience.display";
import {PersonalInfoDisplay} from "./PersonalInfo/Display/personalInfo.display";
// import {ProjectDisplay} from "./Project/Display/project.display";
// import {SkillsDisplay} from "./Skills/Display/skills.display";

import { useState } from "react";

export function Main(){
    const [resumeData, setResumeData] = useState({
        personalInfo:{},
        experience:[],
        projects: [],
        education:[],
        skills: []
    });

    return (
        <main className={Styles.main}>
            <div>
                <h3>Personal Information</h3>
                <PersonalInfoForm resumeData={resumeData} setResumeData={setResumeData} />
                <h3>Experience</h3>
                <ExperienceForm resumeData={resumeData} setResumeData={setResumeData} />
                {/*<h3>Projects</h3>
                <ProjectForm resumeData={resumeData} setResumeData={setResumeData} />
                <h3>Education</h3>
                <EducationForm resumeData={resumeData} setResumeData={setResumeData} />
                <h3>Skills</h3>
                <SkillsForm resumeData={resumeData} setResumeData={setResumeData} /> */}
            </div>
            <div>
                <PersonalInfoDisplay resumeData={resumeData} /> 
                <ExperienceDisplay resumeData={resumeData} />
                {/*<ProjectDisplay resumeData={resumeData} />
                <EducationDisplay resumeData={resumeData} />
                <SkillsDisplay resumeData={resumeData} /> */}
            </div>
        </main>
    );
}