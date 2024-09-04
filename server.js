const express = require('express');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/email');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the email routes
app.use('/api', emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
