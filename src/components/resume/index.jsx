import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

import './style.css'

export default function ResumeBuilder({name ='Purushotham Puram', skills, education, experience}) {
    return (
        <div className="container">
            <div className="name-heading">
                <h3>{name}</h3>
            </div>
            <div className="bodyContent">
            <Experience experience= {experience}></Experience>
            <Skills skills={skills}></Skills>
            <Education education={education}></Education>
            </div>
        </div>
    )
}