import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

router.get("/", (req, res) => {
    Movie.findAll().then((movies) => {
        res.render("movies", {
            movies: movies,
        });
    })
});

router.post("/movies/new", (req, res) => {
  const title = req.body.title;
  const genre = req.body.genre;
  const duration = req.body.duration;

  Movie.create({
    title: title,
    genre: genre,
    duration: duration,
  }).then(() => {
      res.redirect("/");
    }).catch((error) => {
      console.log(error);
    });
});

router.get("/movies/delete/:id", (req, res) =>{
    const id = req.params.id
    Movie.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/")
    }).catch(error => {
        console.log(error);
    });
})

export default router;
