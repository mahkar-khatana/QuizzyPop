const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Placeholder response for quizRoutes');
});

module.exports = router;
