import React from "react";
import './CVDownload.css';

export default function CVDownload() {
    return (
        <a
            href="/Boitumelo_Rakgole_Resume.pdf"
            download="Boitumelo_Rakgole_Resume.pdf"
            className="cv-download-btn"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
        </a>
    );
}