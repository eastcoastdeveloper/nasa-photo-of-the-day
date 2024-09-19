const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;
const API_BASE_URL = "https://api.nasa.gov";

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/planetary/apod?api_key=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
