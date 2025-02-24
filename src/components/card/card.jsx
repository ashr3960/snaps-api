import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card({ id, photo, photographer, tags }) {
  return (
    <Link to={`/card/${id}`} className="card__link">
      <div className="card">
        <div className="image-container">
          <img src={photo} alt="Photograph" className="card__image" />
          <p className="card__name">{photographer}</p>
        </div>

        <div className="card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Card;
