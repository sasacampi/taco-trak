const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  code: { type: Number, unique: true },
  name: { type: String, required: true },
  category: { type: String },
  energy: { kcal: { type: Number } },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number },
});

module.exports = mongoose.model("Food", FoodSchema);
