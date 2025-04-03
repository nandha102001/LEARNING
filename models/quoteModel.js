const pool = require("../config/db");

const Quote = {
    addQuotes: (quotes, callback) => {
        const values = quotes.map(q => [q.author, JSON.stringify(q.tags), q.quote]);
        const sql = "INSERT INTO quotes (author, tags, quote) VALUES ?";
        pool.query(sql, [values], callback);
    },

    updateQuote: (id, updatedQuote, callback) => {
        const sql = "UPDATE quotes SET author = ?, tags = ?, quote = ? WHERE id = ?";
        pool.query(sql, [updatedQuote.author, JSON.stringify(updatedQuote.tags), updatedQuote.quote, id], callback);
    },

    deleteQuote: (id, callback) => {
        const sql = "DELETE FROM quotes WHERE id = ?";
        pool.query(sql, [id], callback);
    },

    searchQuotes: (query, callback) => {
        let sql = "SELECT * FROM quotes WHERE 1=1";
        const values = [];

        if (query.author) {
            sql += " AND author LIKE ?";
            values.push(`%${query.author}%`);
        }
        if (query.tags) {
            sql += " AND JSON_CONTAINS(tags, ?)";
            values.push(JSON.stringify(query.tags));
        }
        if (query.quote) {
            sql += " AND quote LIKE ?";
            values.push(`%${query.quote}%`);
        }

        pool.query(sql, values, callback);
    }
};

module.exports = Quote;
