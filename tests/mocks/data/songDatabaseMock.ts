import { ISongDatabase } from "../../../src/data/SongDatabase";
import { SongDataDTO } from "../../../src/model/Song";

export class SongDatabaseMock implements ISongDatabase {
  public async createSong(data: SongDataDTO): Promise<any> {}
}

export default new SongDatabaseMock();
