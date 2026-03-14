const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// 1. Import the Models
const Lead = require('./models/Lead');
const Post = require('./models/Post'); 

const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Database Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => console.log("MongoDB Database connected successfully!"))
  .catch(err => console.log("Database connection error: ", err));

// 4. Test Route
app.get('/', (req, res) => {
  res.send('The Financial Firm Server is ALIVE and connected!');
});

// ==========================================
// 5. LEAD ROUTES (Contact Form Management)
// ==========================================

// Save a new lead
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newLead = new Lead({ name, email, subject, message });
    await newLead.save();
    res.status(201).json({ message: "Lead saved successfully!" });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error, try again later." });
  }
});

// Fetch all leads for Admin
app.get('/api/leads', async (req, res) => {
  try {
    const allLeads = await Lead.find().sort({ date: -1 }); 
    res.json(allLeads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads" });
  }
});

// Delete a lead
app.delete('/api/leads/:id', async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting lead" });
  }
});

// ==========================================
// 6. BLOG ROUTES (Insights Management)
// ==========================================

// Fetch all blog posts for the frontend
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

// Create a new blog post from Admin
app.post('/api/posts', async (req, res) => {
  try {
    const { title, category, excerpt } = req.body;
    const newPost = new Post({ title, category, excerpt });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Post Error:", err);
    res.status(500).json({ message: "Error saving post" });
  }
});

// DELETE a blog post (NEW ROUTE)
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Delete Post Error:", err);
    res.status(500).json({ message: "Error deleting post" });
  }
});

// ==========================================
// 7. Start the Engine
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});