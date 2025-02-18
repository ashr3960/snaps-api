import React, { useState } from "react";
import "./navbar.css";
import FilterIcon from "../../assets/images/Filter.svg";
import tagsData from "../../data/tags.json";

function Navbar({ onFilterChange, setIsModalOpen }) {
    const [isModalOpen, setIsModalOpenState] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);  

    const toggleModal = () => {
        const newState = !isModalOpen;
        setIsModalOpenState(newState);
        setIsModalOpen(newState);
    };

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            const newSelectedTags = selectedTags.filter((t) => t !== tag);
            setSelectedTags(newSelectedTags);
            onFilterChange(tag);  
        } else {
            const newSelectedTags = [...selectedTags, tag];
            setSelectedTags(newSelectedTags);
            onFilterChange(tag);  
        }
    };

    return (
        <nav className={`navbar ${isModalOpen ? "modal-open" : ""}`}>
            <div className="container">
                <h1 className="title">Snaps</h1>
                <div
                    className={`cta ${isModalOpen ? "active" : ""}`}
                    onClick={toggleModal}
                >
                    <p className="cta-title">Filters</p>
                    <img src={FilterIcon} alt="Filter" className="icon" />
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h className="modal-title">Filters</h>
                        <div className="tags-container">
                            {tagsData.map((tag, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleTagClick(tag)}
                                    className={`cta tag-item ${selectedTags.includes(tag) ? "selected" : ""}`}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
