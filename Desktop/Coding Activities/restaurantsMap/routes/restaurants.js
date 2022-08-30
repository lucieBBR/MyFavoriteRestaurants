var express = require("express");
var router = express.Router();
const db = require("../model/helper");


// GET all restaurants
router.get("/", async (req, res) => {
  try {
      let results = await db('SELECT * FROM favRestaurants');
      let restaurants = results.data;
      res.send(restaurants);
  } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

module.exports = router