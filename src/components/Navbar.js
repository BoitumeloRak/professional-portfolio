import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const links = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" }
];

export default function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="Navbar">
            <div className="nav-brand">
                Boitumelo Rakgole
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                {links.map(function(link, index) {
                    return (
                        <li key={index}> 
                            <Link 
                                to={link.path} 
                                className={location.pathname === link.path ? "active" : ""}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>

                        </li>
                    );
                })}
            </ul>
        </nav>
    );

}