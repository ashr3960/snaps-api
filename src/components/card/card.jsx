import React from "react";
import "./card.css";


function Card({photo, photographer, tags}) {
  return (
    <div className="card">
        <div className="container">
            <img src={photo} alt="Photograph" className="card__image" />
            <p className="card__name">{photographer}</p>
            <div className="card__tags">
                {tags.map((tag, index) => (
                <span key={index} className="card__tag">
                    {tag}
                </span>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Card;
