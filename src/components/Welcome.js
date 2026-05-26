import React, { useEffect, useState } from "react";
import './Welcome.css';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function ScrambleText({ text }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayed(
                text.split("").map((letter, index) => {
                    if (index < iteration) return letter;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            iteration += 0.5;
            if (iteration >= text.length) clearInterval(interval);
        }, 40);
        return () => clearInterval(interval);
    }, [text]);
    return <span>{displayed}</span>;
}

export default function Welcome() {
    return (
        <div className="Welcome">
            <div className="welcome-text">
                <p className="greeting">Hi there, I'm</p>
                <h1><ScrambleText text="Boitumelo Rakgole" /></h1>
                <h2 className="role">
                    Software Engineer | Frontend Developer | Aspiring Systems Architect    
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