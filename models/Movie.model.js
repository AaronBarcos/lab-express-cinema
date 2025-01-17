const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true,
  }
);

const MovieModel = mongoose.model("Movie", movieSchema);

module.exports = MovieModel;
