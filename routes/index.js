const express = require("express");
const router = express.Router();
const MoviesModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MoviesModel.find()
    .then((response) => {
      res.render("moviesViews/movies.hbs", {
        moviesArr: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  MoviesModel.findById(req.params.id)
    .then((response) => {
      res.render("moviesViews/see-more.hbs", {
        singleMovie: response,
      });
      console.log(response);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
