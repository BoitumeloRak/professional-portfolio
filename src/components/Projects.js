import React from "react";
import './Projects.css';

const projects = [
    {
        title: "Emergency Hospital Management System",
        tech: "Java, ActiveMQ, Docker, SQL, JSON",
        year: "2026",
        bullets: [
            "Engineered a distributed system to manage real-time hospital triage events and patient processing",
            "Containerized the entire application suite using Docker and Docker-compose for consistent deployment and scaling",
            "Designed robust data schemas using JSON for seamless event-driven communication between services",
            "Implemented asynchronous messaging using ActiveMQ to decouple the triage service from patient management, ensuring high availability"
        ],
        github: "https://github.com/BoitumeloRak/Emergency-Hospital-Management-System",
        netlify: null
    },
    {
         title: "Dictionary Search Engine",
        tech: "React, Axios, SheCodes API, CSS",
        year: "2026",
        bullets: [
           "Built a dictionary app that fetches word definitions, phonetics, and synonyms from an external API",
            "Integrated image search to display related photos for each searched word",
            "Deployed on Netlify with continuous deployment from GitHub"
        ],
        github: "https://github.com/BoitumeloRak/dictionary-search-engine",
        netlify: "https://dictsearch.netlify.app/"

    },
    {
        title: "Weather App",
        tech: "React, Axios, SheCodes API, CSS",
        year: "2026",
        bullets: [
            "Built a weather app using React"
        ],
        github: "https://github.com/BoitumeloRak/rreact-weatherr",
        netlify: "https://rreactweatherr.netlify.app/"
    }
];

export default function Projects() {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            {projects.map(function(project, index) {
                return (
                    <div className="project-item" key={index}>
                        <div className="project-header">
                            <div>
                                <h3>{project.title}</h3>
                                <span className="tech">{project.tech}</span>  
                            </div>
                            <span className="year">{project.year}</span>
                        </div>
                        <ul>
                            {project.bullets.map(function(bullets, i) {
                                return <li key={i}>{bullets}</li>;
                            })}
                        </ul>
                        <div className="project-links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                            )}
                            {project.netlify && (
                                <a href={project.netlify} target="_blank" rel="noreferrer">Live Demo</a>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}