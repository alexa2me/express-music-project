import songDatabase, { ISongDatabase } from "../../data/SongDatabase";
import { CustomError } from "../../error/CustomError";
import { Song, SongInputDTO } from "../../model/Song";
import authenticator, { IAuthenticator } from "../../services/Authenticator";
import idGenerator, { IIdGenerator } from "../../services/IdGenerator";
import dateWithoutTime from "../../utils/formatData";
import { SongValidations } from "./SongValidations";

export class SongBusiness extends SongValidations {
  constructor(
    private authenticator: IAuthenticator,
    private idGenerator: IIdGenerator,
    private songDatabase: ISongDatabase
  ) {
    super();
  }

  async createSong(song: SongInputDTO, token: string | undefined) {
    const author = this.validateToken(token);

    this.validateSong(song);

    const id = this.idGenerator.generate();

    const date = this.formatInputData(song.date);

    const newSong = new Song(
      id,
      song.title,
      author,
      date,
      song.file,
      song.genre,
      song.album
    );

    await this.songDatabase.createSong(newSong.songToDatabase());

    return "Song created successfully!";
  }

  async getSongs(token: string | undefined) {
    const id = this.validateToken(token);

    const songs = await this.songDatabase.getSongs(id);

    return songs.map((item) => {
      return {
        ...item,
        date: dateWithoutTime(item.getDate()),
      };
    });
  }

  async getSongById(id: string, token: string | undefined) {
    this.validateToken(token);

    const song = await this.songDatabase.getSongById(id);

    return { ...song, date: dateWithoutTime(song.getDate()) };
  }

  private validateToken(token: string | undefined): string {
    if (!token) {
      throw new CustomError("Unauthorized", 401);
    }

    return this.authenticator.getTokenData(token);
  }

  private formatInputData(data: string): string {
    let splitDate = data.split(/\D/);
    return splitDate.reverse().join("-");
  }
}

export default new SongBusiness(authenticator, idGenerator, songDatabase);
