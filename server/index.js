const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/projects", (req, res) => {
    res.json([
      {
        title: "MantiHevan",
        description: "A full-stack web application designed to support mental well-being, featuring structured UI components and scalable frontend architecture using React.",
        tech: ["React", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/Rithwick08/mental-health-app",
        live: ""
      },
      {
        title: "Online Retail Cart",
        description: "A full-stack MERN-based retail cart system with product management, order handling, and responsive frontend design.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/Rithwick08/optimized_online_retail_cart_web_version",
        live: ""
      },
      {
        title: "Smart Parking System",
        description: "A parking management system developed in C with efficient logic for vehicle tracking and structured data handling.",
        tech: ["C"],
        github: "https://github.com/Rithwick08/Smart_parking_C",
        live: ""
      }
    ]);
  });

// ADD THIS ROUTE
app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from backend",
    status: "success"
  });
});

const PORT = 5000;

app.listen(PORT, "127.0.0.1", () => {
  console.log("Server running on http://127.0.0.1:" + PORT);
});