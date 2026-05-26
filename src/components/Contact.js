import React from "react";
import "./Contact.css";

const contacts = [
    {
        platform: "Email",
        display: "bmakhosazana26@gmail.com",
        url: "mailto:bmakhosazana26@gmail.com"
    },
    {
        platform: "LinkedIn",
        display: "Boitumelo Rakgole",
        url: "https://www.linkedin.com/in/boitumelorakgole/"
    },
    {
        platform: "GitHub",
        display: "BoitumeloRak",
        url: "https://github.com/BoitumeloRak"
    },
]

export default function Contact() {
    return (
        <div className="Contact">
            <h2>Get in Touch</h2>
            <p className="contact-intro">Feel free to reach out - I'd love to connect</p>
            <div className="contact-list">
                {contacts.map(function(contact, index) {
                    return (
                        <a 
                            href={contact.url}
                            target="_blank"
                            rel="noreferrer"
                            className="contact-item"
                            key={index}
                        >
                            <span className="platform">{contact.platform}</span>
                            <span className="display">{contact.display}</span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}