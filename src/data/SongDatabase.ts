import { Song, SongData, SongDataDTO } from "../model/Song";
import { BaseDatabase } from "./BaseDatabase";

export interface ISongDatabase {
  createSong(data: SongDataDTO): Promise<void>;
  getSongs(id: string): Promise<Song[]>;
  getSongById(id: string): Promise<Song>;
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

  public async getSongs(id: string): Promise<Song[]> {
    try {
      const result = await this.getConnection()
        .select(
          "songs.id as id",
          "title",
          "users.name as author",
          "date",
          "file",
          "album",
          "genres.name as genre"
        )
        .from(`${SongDatabase.TABLE_NAME} as songs`)
        .join("users_fullstack as users", "author", "users.id")
        .join("songs_genres_fullstack as songs_genres", "song_id", "songs.id")
        .join(
          "genres_fullstack as genres",
          "genres.id",
          "songs_genres.genre_id"
        )
        .where("author", id);

      const data = this.transformData(result);

      return data.map((item) => {
        return Song.toSongModel(item);
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getSongById(id: string): Promise<Song> {
    try {
      const result = await this.getConnection()
        .select(
          "songs.id as id",
          "title",
          "users.name as author",
          "date",
          "file",
          "album",
          "genres.name as genre"
        )
        .from(`${SongDatabase.TABLE_NAME} as songs`)
        .join("users_fullstack as users", "author", "users.id")
        .join("songs_genres_fullstack as songs_genres", "song_id", "songs.id")
        .join(
          "genres_fullstack as genres",
          "genres.id",
          "songs_genres.genre_id"
        )
        .where("songs.id", id);

      const [data] = this.transformData(result);
      if (!data) {
        throw new Error("Song not found");
      }

      return data;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  private transformData(data: any): any[] {
    const transformedData: any[] = [];
    for (const firstValue of data) {
      if (!transformedData.find((value) => value.id === firstValue.id)) {
        transformedData.push(firstValue);
      }

      for (const secondValue of transformedData) {
        if (
          firstValue.id === secondValue.id &&
          firstValue.genre !== secondValue.genre
        ) {
          secondValue.genre = [secondValue.genre, firstValue.genre];
        }
      }
    }

    return transformedData;
  }
}

export default new SongDatabase();
