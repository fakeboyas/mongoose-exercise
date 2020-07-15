const { Movie } = require("../../models");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const result = await Movie.find();

      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
  uploadMovies: async (req, res) => {
    const { title, release_date, rating, image_url, genre } = req.body;

    try {
      const result = await Movie.create({
        title,
        release_date,
        rating,
        image_url,
        genre,
      });
      res.send({
        message: "upload success",
        result: result,
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  deleteMovies: async (req, res) => {
    const title = req.params.title;
    try {
      const result = await Movie.findOneAndDelete(title);
      res.send({
        message: "movie berhasil di hapus",
        result: result,
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  updateMovies: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Movie.findByIdAndUpdate(
        { _id: id },
        { $set: { ...req.body } }
      );
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },

  getMovieFilterbyGenre: async (req, res) => {
    const genre = req.params;
    try {
      const result = await Movie.find(genre);
      res.send({
        message: `Filter by genre`,
        result,
      });
    } catch (error) {
      res.send(error);
    }
  },
};
