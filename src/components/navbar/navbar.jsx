import React from "react";
import "./navbar.css";
import FilterIcon from "../../assets/images/Filter.svg";

function Navbar () {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="title">Snaps</h1>
                <div className="cta">
                    <p className="cta-title">Filters</p>
                    <a href="#"><img src={FilterIcon} alt="Filter" className="icon" /></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

