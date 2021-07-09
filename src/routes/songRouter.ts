import express from "express";
import { SongController } from "../controller/SongController";
import { AppRoutes } from "../app";

const songRouter = express.Router();

const songController = new SongController();

songRouter.post("/create", songController.createSong);

const songHandle: AppRoutes = {
  path: "/music",
  handle: songRouter,
};

export default songHandle;
