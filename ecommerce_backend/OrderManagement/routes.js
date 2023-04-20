const express = require("express");
const router = express.Router();
const Order = require("./order");

// Routes
router.get("/getorderhistory", (req, res) => {
  res.send("getorderhistory");
});

router.post("/placeorder", (req, res) => {
  res.send("placeorder");
});

router.patch("/cancelorder", (req, res) => {
  res.send("cancelorder");
});

module.exports = router;
