import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/photos.json");

// Function to retrieve photo data
const getPhotos = () => JSON.parse(fs.readFileSync(dataPath));

// ROUTES
router.get("/", (req, res) => {
  res.json(getPhotos());
});

export default router;