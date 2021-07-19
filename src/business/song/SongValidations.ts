import { CustomError } from "../../error/CustomError";
import { SongInputDTO } from "../../model/Song";

export class SongValidations {
  private validateIfEmptyFields({
    title,
    date,
    file,
    genre,
    album,
  }: SongInputDTO) {
    if (!title || !date || !file || !genre || !album) {
      throw new CustomError(
        "All fields must be filled: 'title', 'date', 'file', 'genre' and 'album'",
        422
      );
    }
  }

  protected validateSong(data: SongInputDTO) {
    this.validateIfEmptyFields(data);
  }
}
