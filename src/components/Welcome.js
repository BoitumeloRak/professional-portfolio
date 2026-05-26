import React, { useEffect, useState } from "react";
import './Welcome.css';

const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Aspiring Systems Architect"
]

export default function Welcome() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect( () => {
        let timeout;
        const role = roles[currentRole];

        if (typing) {
            if (displayed.length < role.length) {
                timeout = setTimeout(() => {
                    setDisplayed(role.slice(0, displayed.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setTyping(false), 1500);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1));
                }, 40);
            } else {
                setCurrentRole((currentRole + 1) % roles.length);
                setTyping(true);
            }
        }
        return() => clearTimeout(timeout);
    }, [displayed, typing, currentRole]);

    return (
        <div className="Welcome">
            <div className="welcome-text">
                <p className="greeting">Hi there, I'm</p>
                <h1>Hi, I'm Boitumelo</h1>
                <h2 className="typewriter">
                    <span>{displayed}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="bio"> 
                    A passionate software engineer based in Johannesburg, Gauteng. 
                    I love building beautiful, functional web apps and solving real-world problems through code.
                </p>
            </div>
            <div className="welcome-photo">
                <img src="/Gemini_Generated_Image_.png" alt="Boitumelo Rakgole" />
            </div>
        </div>
    );
}