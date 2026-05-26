import React from "react";
import './Skills.css';

const skillGroups = [
    {
        category: "Languages",
        skills: ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS"]
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React", "Node.js", "Bootstrap", "JUnit"]
    },
    {
        category: "Tools & Technologies",
        skills: ["Git", "Docker", "ActiveMQ", "VS Code", "IntelliJ IDEA", "GitLab", "npm"]
    },
    {
        category: "Concepts",
        skills: ["OOP", "Microservices", "Event-Driven Architecture", "REST API", "Unit Testing", "Responsive Design", "FastAPI"]
    }
];
    

export default function Skills() {
    return (
        <div className="Skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skillGroups.map(function(group, index) {
                    return (
                        <div className={`skill-group ${group.wide ? "skill-group--wide" : ""}`} key={index}>
                            <h3 className="skill-category">{group.category}</h3>
                            <div className="skill-tags">
                                {group.skills.map(function(skill, i) {
                                    return (
                                        <span className="skill-tag" key={i}>{skill}</span>
                                    );
                                })}
                            </div>
                        </div>
                    );
                    // return <span className="skill-tag" key={index}>{skill}</span>;
                })}
            </div> 
        </div>
    );
}