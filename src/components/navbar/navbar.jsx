import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="title">Snaps</h1>
                <div className="cta">
                    <p className="cta-title">Filters</p>
                    <FontAwesomeIcon icon={faBars} className="icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

