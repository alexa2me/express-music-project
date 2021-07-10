import { CustomError } from "../../error/CustomError";
import { GenreInputDTO } from "../../model/Genre";

export class GenreValidations {
  private validateIfEmptyFields({ name }: GenreInputDTO) {
    if (!name) {
      throw new CustomError("'Name' field can't be empty", 422);
    }
  }

  protected validateGenre(name: GenreInputDTO) {
    this.validateIfEmptyFields(name);
  }
}
