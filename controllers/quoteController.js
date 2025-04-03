const Quote = require("../models/quoteModel");

exports.addQuotes = (req, res) => {
    Quote.addQuotes(req.body, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.status(201).json({ message: "Quotes added", results });
    });
};

exports.updateQuote = (req, res) => {
    Quote.updateQuote(req.params.id, req.body, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ message: "Quote updated", results });
    });
};

exports.deleteQuote = (req, res) => {
    Quote.deleteQuote(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json({ message: "Quote deleted", results });
    });
};

exports.searchQuotes = (req, res) => {
    Quote.searchQuotes(req.query, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json(results);
    });
};
