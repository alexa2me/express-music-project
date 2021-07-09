import { Request, Response } from "express";
import { SongInputDTO } from "../model/Song";
import songBusiness from "../business/song/SongBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class SongController {
  async createSong(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const input: SongInputDTO = {
        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        file: req.body.file,
        genre: req.body.genre,
        album: req.body.album,
      };

      const message = await songBusiness.createSong(input, token);

      res.status(200).send({ message });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
