const express = require("express");
const connectDB = require("./config/db");
const newsRoutes = require('./routes/newsRoutes');
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const path = require("path");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/news', newsRoutes);
app.use("/api/auth", authRoutes);

// Serve frontend (React build)
app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;   // ✅ use Render's PORT
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
