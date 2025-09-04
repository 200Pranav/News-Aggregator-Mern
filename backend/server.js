const express = require("express");
const connectDB = require("./config/db");
const newsRoutes = require('./routes/newsRoutes'); // ✅ import routes
const cors = require("cors"); 
const authRoutes = require("./routes/authRoutes");


const app = express();

// Connect to MongoDB
connectDB();


// Middleware
app.use(cors());  // ✅ allow cross-origin requests
app.use(express.json());

// Use news routes
app.use('/api/news', newsRoutes);  // ✅ add this here
app.use("/api/auth", authRoutes);
// Default route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
