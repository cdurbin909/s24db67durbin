const mongoose = require("mongoose");
const gameSchema = mongoose.Schema({
  title: String,
  game_size: Number,
  game_style: String,
  rating: Number,
});
module.exports = mongoose.model("Game", gameSchema);
