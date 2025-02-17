import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Card from "./components/card/card"; 
import photoData from "./data/photos.json"; 
import "./App.css";  

function App() {
  return (
    <div>
      <Navbar />

      <div className="card-container">
        {photoData.map((photo) => (
          <Card 
            key={photo.id} 
            photo={photo.photo} 
            photographer={photo.photographer} 
            tags={photo.tags} 
          />
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default App;
