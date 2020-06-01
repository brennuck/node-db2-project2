const express = require("express");
const knex = require("knex");

const knexfile = require("../knexfile.js");

const db = knex(knexfile.development);

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Failed to retrieve cars",
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then((car) => {
      res.json(car);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Failed to retrieve car",
      });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((newCarEntry) => {
      res.status(201).json(newCarEntry);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Failed to store data",
      });
    });
});

module.exports = router;
