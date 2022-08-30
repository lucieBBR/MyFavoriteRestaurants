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

//GET one restaurant
router.delete("/:id", async (req, res) => {
  let restaurantId = req.params.id;

  try {
      let results = await db(`SELECT * FROM favRestaurants WHERE restaurant_id = ${recipeId}`);
      let restaurant = result.data;
      res.send(restaurant);
      } catch (err) {
      res.status(500).send({ error: err.message });
  }
});

module.exports = router