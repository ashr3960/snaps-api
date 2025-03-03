import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/tags.json");

// Function to retrieve tag data
const getTags = () => JSON.parse(fs.readFileSync(dataPath));

// ROUTES
router.get("/", (req, res) => {
  res.json(getTags());
});

export default router;