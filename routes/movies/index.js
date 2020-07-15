const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  uploadMovies,
  deleteMovies,
  updateMovies,
  getMovieFilterbyGenre,
} = require("./controller");

router.get("/all", getAllMovies);
router.post("/upload", uploadMovies);
router.delete("/delete/:title", deleteMovies);
router.put("/update/:id", updateMovies);
router.post("/genre/:genre", getMovieFilterbyGenre);

module.exports = router;
