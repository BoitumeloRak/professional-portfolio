import React from "react";
import './Experience.css';

const experiences = [
    {
        title: "Placement Facilitator",
        company: "WeThinkCode_",
        period: "Oct. 2025 - Present",
        location: "Johannesburg, Gauteng",
        bullet: [
            "Prepared students for the transition from academic training into the professional workplace",
            "Conducted mock interviews and interview preparation sessions",
            "Coached students on CV writing, LinkedIn profile optimization, and personal branding",
            "Assisted students in building confidence for technical and behavioural interviews"
        ]
    },
    {
        title: "Peer Mentor",
        company: "WeThinkCode_",
        period: "Mar. 2025 - Apr. 2025",
        location: "Johannesburg, Gauteng",
        bullet: [
            "Guided peers through Java and object-oriented programming concepts",
            "Assisted with debugging and resolving syntax and logical errors",
            "Supported peers in meeting academic deadlines and coursework requirements"
        ]

    }
];

export default function Experience() {
    return (
        <div className="Experience">
            <h2>Experience & Leadership</h2>
            {experiences.map(function(exp, index) {
                return (
                    <div className="experience-item" key={index}>
                        <div className="experience-header">
                            <div className="experience-left">
                                <h3>{exp.title}</h3>                                
                                <span className="company">{exp.company}</span>
                            </div>
                            <div className="experience-meta">
                                <span className="period">{exp.period}</span>
                                <span className="location">{exp.location}</span>
                            </div>
                        </div>
                        <ul className="experience-bullets">
                            {exp.bullet.map(function(bullet, i) {
                                return <li key={i}>{bullet}</li>
                            })}
                        </ul>
                    </div>
                );
            })}

        </div>
    );
}