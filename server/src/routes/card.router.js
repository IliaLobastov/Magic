const express = require("express");
const { Card } = require("../../db/models");

const cardRouter = express.Router();

cardRouter.get("/", async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

module.exports = cardRouter;
