import { SongDataDTO } from "../model/Song";
import { BaseDatabase } from "./BaseDatabase";

export interface ISongDatabase {
  createSong(data: SongDataDTO): Promise<void>;
}

export class SongDatabase extends BaseDatabase implements ISongDatabase {
  private static TABLE_NAME = "songs_fullstack";
  private static TABLE_RELATIONSHIP = "songs_genres_fullstack";

  public async createSong(song: SongDataDTO): Promise<void> {
    try {
      await this.getConnection()
        .insert(song.data)
        .into(SongDatabase.TABLE_NAME);

      await Promise.all(
        song.genre.map(async (item) => {
          return await this.getConnection()
            .insert({
              song_id: song.data.id,
              genre_id: item,
            })
            .into(SongDatabase.TABLE_RELATIONSHIP);
        })
      );
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new SongDatabase();
