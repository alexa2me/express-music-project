import express from "express";
import { GenreController } from "../controller/GenreController";
import { AppRoutes } from "../app";

const genreRouter = express.Router();

const genreController = new GenreController();

genreRouter.post("/genre/create", genreController.createGenre);
genreRouter.get("/genres/get", genreController.getGenres);

const genreHandle: AppRoutes = {
  path: "/music",
  handle: genreRouter,
};

export default genreHandle;
