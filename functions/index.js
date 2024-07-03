const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
const MONGODB_URI = "mongodb+srv://Mawi:Mawi21@cluster0.twni9tv.mongodb.net/Hatid?retryWrites=true&w=majority&appName=Cluster0";

const dbLocalUrl = 'mongodb://localhost:27017/Hatid'

mongoose
  .connect(MONGODB_URI || dbLocalUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Routes
app.use("/.netlify/functions/users", userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
