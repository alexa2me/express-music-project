import express from "express";
import { SongController } from "../controller/SongController";
import { AppRoutes } from "../app";

const userRouter = express.Router();

const songController = new SongController();

userRouter.post("/create", songController.createSong);

const userHandle: AppRoutes = {
  path: "/music",
  handle: userRouter,
};

export default userHandle;
