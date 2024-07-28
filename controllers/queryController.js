const Query = require('../models');

// Controller to handle POST /api/set-query
exports.setQuery = async (req, res) => {
    try {
        const { query, email } = req.body;
        if (!query) {
            return res.status(400).json({ message: 'Query is required.' });
        }

        const newQuery = await Query.create({ query, email });
        res.json({ message: 'Query saved successfully', query: newQuery });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

// Controller to handle GET /api/get-queries
exports.getQueries = async (req, res) => {
    try {
        const queries = await Query.findAll();
        res.json({ queries });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};
