const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/quiz-platform').then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Connection Error:', err));

// Use routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Basic route to test if server is running
app.get('/', (req, res) => {
    res.send('Server is running ✅');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));