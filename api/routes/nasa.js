const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

router.get("/", async (req, res) => {
  const API_KEY = process.env.API_KEY;
  const API_BASE_URL = "https://api.nasa.gov";

  const date = req.query.date;
  const response = await axios.get(`${API_BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${date}`);
  if (response && Object.keys(response.data).includes("hdurl")) {
    res.json(response.data);
  } else {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
