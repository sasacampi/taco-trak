const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();
const Food = require("./models/Food");

async function importData() {
  try {
    const rawData = fs.readFileSync("./data/taco.json");
    const foods = JSON.parse(rawData);

    await mongoose.connect(process.env.MONGODB_URI);
    await Food.deleteMany();
    await Food.insertMany(foods);

    console.log(`${foods.length} alimentos importados!`);
  } catch (error) {
    console.error("Erro:", error);
  } finally {
    mongoose.disconnect();
  }
}

importData();
