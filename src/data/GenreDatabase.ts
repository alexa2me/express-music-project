import { GenreDataDTO } from "../model/Genre";
import { BaseDatabase } from "./BaseDatabase";

export interface IGenreDatabase {
  createGenre(data: GenreDataDTO): Promise<void>;
  getGenres(): Promise<void>;
}

export class GenreDatabase extends BaseDatabase implements IGenreDatabase {
  private static TABLE_NAME = "genres_fullstack";

  public async createGenre(data: GenreDataDTO): Promise<void> {
    try {
      await this.getConnection().insert(data).into(GenreDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getGenres(): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(GenreDatabase.TABLE_NAME);

      return result;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new GenreDatabase();
