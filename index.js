import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import photosRoutes from "./routes/photos.js";
import tagsRoutes from "./routes/tags.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("THE API IS RUNNING!!!!");
});

// ROUTES
app.use("/photos", photosRoutes);
app.use("/tags", tagsRoutes);

// SERVER LISTENING
app.listen(PORT, () => {
  console.log(`Server Started on http://localhost:${PORT}`);
  console.log("Press CTRL + C to stop server");
});