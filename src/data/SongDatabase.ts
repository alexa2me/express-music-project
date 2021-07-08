import { SongDataDTO } from "../model/Song";
import { BaseDatabase } from "./BaseDatabase";

export interface ISongDatabase {
  createSong(data: SongDataDTO): Promise<void>;
}

export class SongDatabase extends BaseDatabase implements ISongDatabase {
  private static TABLE_NAME = "songs_fullstack";

  public async createSong(data: SongDataDTO): Promise<void> {
    try {
      await this.getConnection().insert(data).into(SongDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new SongDatabase();
