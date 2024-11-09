const express = require('express');
const app = express();
const PORT = 3000;

// Sample video metadata
const videoData = {
    title: "Soccer Highlights",
    duration: "90 minutes",
    highlights: [
        { time: 15, description: "Goal by Player A" },
        { time: 45, description: "Goal by Player B" },
    ]
};

// Endpoint for video metadata
app.get('/api/video', (req, res) => {
    res.json(videoData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});