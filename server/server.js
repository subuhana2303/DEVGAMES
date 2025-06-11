const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const matchRoutes = require('./routes/matchRoutes');
const problemRoutes = require('./routes/problemRoutes'); // ✅ Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Route bindings
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/problems', problemRoutes); // ✅ Add this line too

// Health check route
app.get('/', (req, res) => {
  res.send('DevGames Server is running 🎯');
});

// Start the server
app.listen(PORT, () =>
  console.log(`✅ Server started on http://localhost:${PORT}`)
);
