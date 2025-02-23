const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar alimentos" });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const food = await Food.findOne({ code: req.params.code });
    food
      ? res.json(food)
      : res.status(404).json({ error: "Alimento não encontrado" });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
});

module.exports = router;
