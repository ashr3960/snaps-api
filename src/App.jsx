import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Card from "./components/card/card";
import "./App.css";  

const API_URL = "https://unit-3-project-c5faaab51857.herokuapp.com";
const API_KEY = "d5463767-a03a-4bce-aae0-bf9c42d7d708";

function App() {
  const [photos, setPhotos] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos?api_key=${API_KEY}`);
        console.log(response.data);
        setPhotos(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError("Failed to load photos");
        setLoading(false);
      }
    };
  
    fetchPhotos();
  }, []);
  

  const handleFilterChange = (tag) => {
    setFilteredTags((prevTags) => 
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredPhotos = filteredTags.length
    ? photos.filter((photo) => filteredTags.some(tag => photo.tags.includes(tag)))
    : photos;

  return (
    <div> 
      <Navbar onFilterChange={handleFilterChange} setIsModalOpen={setIsModalOpen} />

      <div className={`web-content ${isModalOpen ? "shifted" : ""}`}>
        <p className="hero-title">Our mission:</p>
        <div className="hero-description">
          <span>Provide photographers a space</span>
          <span>to share photos of the</span>
          <span>neighborhoods they cherish,</span>
          <span>expressed in their unique style.</span>
        </div>


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
