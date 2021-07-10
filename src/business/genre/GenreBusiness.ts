import genreDatabase, { IGenreDatabase } from "../../data/GenreDatabase";
import { CustomError } from "../../error/CustomError";
import { Genre, GenreInputDTO } from "../../model/Genre";
import authenticator, { IAuthenticator } from "../../services/Authenticator";
import idGenerator, { IIdGenerator } from "../../services/IdGenerator";
import { GenreValidations } from "./GenreValidations";

export class GenreBusiness extends GenreValidations {
  constructor(
    private authenticator: IAuthenticator,
    private idGenerator: IIdGenerator,
    private genreDatabase: IGenreDatabase
  ) {
    super();
  }

  async createGenre(genre: GenreInputDTO, token: string | undefined) {
    this.validateToken(token);

    this.validateGenre(genre);

    const id = this.idGenerator.generate();

    const newGenre = new Genre(id, genre.name);

    await this.genreDatabase.createGenre(newGenre.genreToDatabase());

    return "Genre created successfully!";
  }

  async getGenres(token: string | undefined) {
    this.validateToken(token);

    const genres = await this.genreDatabase.getGenres();

    return genres;
  }

  private validateToken(token: string | undefined) {
    if (!token) {
      throw new CustomError("Unauthorized", 401);
    }

    this.authenticator.getTokenData(token);
  }
}

export default new GenreBusiness(authenticator, idGenerator, genreDatabase);
