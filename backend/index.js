const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());



// CORS middleware (optional, based on your setup)
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
