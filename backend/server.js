const express = require("express");
const connectDB = require("./config/db");
const newsRoutes = require('./routes/newsRoutes'); // ✅ import routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Use news routes
app.use('/api/news', newsRoutes);  // ✅ add this here

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
