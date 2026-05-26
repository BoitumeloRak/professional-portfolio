import React from "react";
import './Skills.css';

const skill = ["Java", "Python", "JavaScript", "React", "HTML", "CSS", "GitHub", "Git", "Docker", "ActiveMQ"];

export default function skills() {
    return (
        <div className="Skills">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map(function(skill, index) {
                    return <span className="skill-tag" key={index}>{skill}</span>;
                })}
            </div> 
        </div>
    );
}