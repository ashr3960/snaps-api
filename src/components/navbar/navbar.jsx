import React, { useState, useEffect } from "react";
import "./navbar.css";
import FilterIcon from "../../assets/images/Filter.svg";
import axios from "axios";

const API_URL = "http://localhost:8000";

function Navbar({ onFilterChange, setIsModalOpen }) {
    const [isModalOpen, setIsModalOpenState] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]); 
    const [tags, setTags] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(`${API_URL}/tags`);
                setTags(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching tags:", err);
                setError("Failed to load tags");
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                            {tags.map((tag, index) => (
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
