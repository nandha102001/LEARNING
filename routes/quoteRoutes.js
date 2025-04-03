const express = require("express");
const router = express.Router();
const quoteController = require("../controllers/quoteController");

router.post("/", quoteController.addQuotes);
router.put("/:id", quoteController.updateQuote);
router.delete("/:id", quoteController.deleteQuote);
router.get("/search", quoteController.searchQuotes);

module.exports = router;
