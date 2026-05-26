import React from "react";
import './Education.css';

const education = [
    {
        degree: "NQF 6 Occupational Certificate in Software Engineering",
        institution: "WeThinkCode_",
        location: "Rosebank, Gauteng",
        period: "Sep. 2024 – 2025"
    },
    {
        degree: "Diploma in Frontend Development",
        institution: "SheCodes",
        location: "Online",
        period: "May 2026"
    }
];

const certifications = [
    {
        title: "SheCodes Junior Developer",
        issuer: "SheCodes",
        year: "2026"
    },
    {
        title: "SheCodes Foundation Web Development Certificate",
        issuer: "SheCodes",
        year: "2026"
    },
    {
        title: "Full Stack Development Certificate",
        issuer: "FNB App Academy",
        year: "2025"
    },
    {
        title: "Generative AI for Software Engineering",
        issuer: "WeThinkCode_",
        year: "2025"
    }
    
];

export default function Education() {
    return (
        <div className="Education">
            <h2>Education</h2>
            {education.map(function(edu, index) {
                return (
                    <div className="education-iten" key={index}>
                        <div className="education-header">
                            <div className="education-left">
                                <h3>{edu.degree}</h3>
                                <span className="institution">{edu.institution}</span>
                            </div>
                            <div className="education-meta">
                                <span className="period">{edu.period}</span>
                                <span className="location">{edu.location}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            
            <h2 className="cert-heading">Certifications</h2>
            <div className="certifications-list">
                {certifications.map(function(cert, index) {
                    return (
                        <div className="cert-item" key={index}>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <span className="issuer">{cert.issuer}</span>
                            </div>
                            <span className="cert-year">{cert.year}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}