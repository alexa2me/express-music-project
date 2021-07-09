import express from "express";
import { GenreController } from "../controller/GenreController";
import { AppRoutes } from "../app";

const genreRouter = express.Router();

const genreController = new GenreController();

genreRouter.post("/genre", genreController.createGenre);

const genreHandle: AppRoutes = {
  path: "/music",
  handle: genreRouter,
};

export default genreHandle;
