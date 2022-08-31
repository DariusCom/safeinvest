const express = require("express");
const router = express.Router();
const { getSymbols } = require("../controllers/symbolsController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getSymbols);

module.exports = router;
