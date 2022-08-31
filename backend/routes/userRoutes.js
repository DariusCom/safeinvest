const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUserInfo,
  getUserInfo,
} = require("../controllers/userController");
const { getSymbols } = require("../controllers/symbolsController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/update", protect, updateUserInfo);
router.get("/update", protect, getUserInfo);
router.get("/symbols", protect, getSymbols);

module.exports = router;
