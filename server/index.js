// server.js

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


// Define item schema
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

app.use(cors());
app.use(express.json());

// API endpoints

// Get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new item
app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit an existing item
app.put('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an item
app.delete('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/" , (req, res)=> {
  res.send("welcome to my DISCUSSION BOARD !")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
