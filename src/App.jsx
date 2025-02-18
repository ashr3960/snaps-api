import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Card from "./components/card/card"; 
import photoData from "./data/photos.json"; 
import "./App.css";  

function App() {
  const [filteredTags, setFilteredTags] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleFilterChange = (tag) => {
    setFilteredTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const filteredPhotos = filteredTags.length
    ? photoData.filter((photo) => filteredTags.some(tag => photo.tags.includes(tag)))
    : photoData;  

  return (
    <div> 
      <Navbar onFilterChange={handleFilterChange} setIsModalOpen={setIsModalOpen} />

      <div className={`web-content ${isModalOpen ? "shifted" : ""}`}>
        <div className="card-container">
          {filteredPhotos.map((photo) => (
            <Card 
              key={photo.id} 
              photo={photo.photo} 
              photographer={photo.photographer} 
              tags={photo.tags} 
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
