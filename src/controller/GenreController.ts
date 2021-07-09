import { Request, Response } from "express";
import genreBusiness from "../business/genre/GenreBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { GenreInputDTO } from "../model/Genre";

export class GenreController {
  async createGenre(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;

      const input: GenreInputDTO = {
        name: req.body.name,
      };

      const message = await genreBusiness.createGenre(input, token);

      res.status(200).send({ message });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
