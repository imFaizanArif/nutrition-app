const express = require('express');
const app = express();
const port = 3001;
const queryController = require('./controllers/queryController');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.post('/api/set-query', queryController.setQuery);
app.get('/api/get-queries', queryController.getQueries);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
