import React from "react";
import './Projects.css';

const projects = [
    {
        title: "Emergency Hospital Management System",
        year: "2026",
        description: [
            "Engineered a distributed system to manage real-time hospital triage events and patient processing",
            "Containerized the entire application suite using Docker and Docker-compose for consistent deployment and scaling",
            "Implemented asynchronous messaging using ActiveMQ to decouple the triage service from patient management, ensuring high availability"
        ],
        tags: ["Java", "ActiveMQ", "Docker", "SQL", "JSON"],
        github: "https://github.com/BoitumeloRak/Emergency-Hospital-Management-System",
        demo: null
    },
    {
        title: "Dictionary Search Engine",
        year: "2026",
        description: [
            "Built a dictionary app that fetches word definitions, phonetics, and synonyms from an external API",
            "Integrated image search to display related photos for each searched word",
            "Deployed on Netlify with continuous deployment from GitHub"
        ],
        tags: ["React", "Axios", "SheCodes API", "CSS"],
        github: "https://github.com/BoitumeloRak/dictionary-search-engine",
        demo: "https://dictsearch.netlify.app/"
    },
    {
        title: "Weather App",
        year: "2026",
        description: [
            "Built a weather app using React that shows real-time weather data by city",
            "Integrated with SheCodes Weather API for live forecasts"
        ],
        tags: ["React", "Axios", "SheCodes API", "CSS"],
        github: "https://github.com/BoitumeloRak/rreact-weatherr",
        demo: "https://rreactweatherr.netlify.app/"
    }
];

export default function Projects() {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map(function(project, index) {
                    return (
                        <div className="project-card" key={index}>
                            <div className="project-card-header">
                                <div className="project-title-row">
                                    <h3>{project.title}</h3>
                                    <span className="project-year">{project.year}</span>
                                </div>
                                <div className="project-tags">
                                    {project.tags.map(function(tag, i) {
                                        return <span className="tag" key={i}>{tag}</span>;
                                    })}
                                </div>
                            </div>
                            <div className="project-description">
                                {project.description.map(function(point, i) {
                                    return <p key={i}>{point}</p>;
                                })}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="link-btn link-github">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn link-demo">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}