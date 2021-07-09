import songDatabase, { ISongDatabase } from "../../data/SongDatabase";
import { CustomError } from "../../error/CustomError";
import { Song, SongInputDTO } from "../../model/Song";
import authenticator, { IAuthenticator } from "../../services/Authenticator";
import idGenerator, { IIdGenerator } from "../../services/IdGenerator";
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
    this.validateToken(token);

    this.validateSong(song);

    const id = this.idGenerator.generate();

    const date = this.formatInputData(song.date);

    const newSong = new Song(
      id,
      song.title,
      song.author,
      date,
      song.file,
      song.genre,
      song.album
    );

    await this.songDatabase.createSong(newSong.songToDatabase());

    return "Song created successfully!";
  }

  private validateToken(token: string | undefined) {
    if (!token) {
      throw new CustomError("Unauthorized", 401);
    }

    this.authenticator.getTokenData(token);
  }

  private formatInputData(data: string): string {
    let splitDate = data.split(/\D/);
    return splitDate.reverse().join("-");
  }
}

export default new SongBusiness(authenticator, idGenerator, songDatabase);
