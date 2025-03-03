import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid"; // generating random num

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/photos.json");

// Function to retrieve photo data
const getPhotos = () => JSON.parse(fs.readFileSync(dataPath));

// Function to save the updated photo data
const savePhotos = (photos) => fs.writeFileSync(dataPath, JSON.stringify(photos, null, 2));

// ROUTES
router.get("/", (req, res) => {
  res.json(getPhotos());
});

// ROUTE: Get a specific photo by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;  
  const photos = getPhotos();  
  const photo = photos.find(photo => photo.id === id);  

  if (photo) {
    res.json(photo); 
  } else {
    res.status(404).json({ message: "Photo not found" });  
  }
});

// ROUTE: Get comments for a specific photo
router.get("/:id/comments", (req, res) => {
  const { id } = req.params;  
  const photos = getPhotos();  
  const photo = photos.find(photo => photo.id === id);  

  if (photo) {
    res.json(photo.comments || []); 
  } else {
    res.status(404).json({ message: "Photo not found" });
  }
});

// ROUTE: Add a comment to a specific photo
router.post("/:id/comments", (req, res) => {
  const { id } = req.params;
  const { name, comment } = req.body; 
  const timestamp = new Date().toISOString();
  
  if (!name || !comment) {
    return res.status(400).json({ message: "Name and comment are required" });
  }

  const photos = getPhotos();
  const photo = photos.find(photo => photo.id === id);

  if (photo) {
    const newComment = {
      id: uuidv4(), 
      name,
      comment,
      timestamp
    };

    // Add the new comment 
    photo.comments = photo.comments ? [...photo.comments, newComment] : [newComment];

    // Save
    savePhotos(photos);

    res.status(201).json(newComment);
  } else {
    res.status(404).json({ message: "Photo not found" });
  }
});

export default router;
