import { CustomError } from "../../error/CustomError";
import { UserInputDTO } from "../../model/User";

export class UserValidations {
  private validateIfEmptyFields({
    email,
    name,
    nickname,
    password,
  }: UserInputDTO) {
    if (!email || !name || !nickname || !password) {
      throw new CustomError(
        "All fields must be filled: 'email', 'name', 'nickname' and 'password'",
        422
      );
    }
  }

  private validateIfEmailValid(email: string) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      throw new CustomError("Invalid email", 422);
    }
  }

  private validatePassword(password: string) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])[0-9a-zA-Z$*&@#!]{6,}$/;
    if (!passwordRegex.test(password)) {
      throw new CustomError(
        "Password must have at least six characters with at least one lowercase letter, one uppercase letter, one number and one special character",
        422
      );
    }
  }

  protected validateData(data: UserInputDTO) {
    this.validateIfEmptyFields(data);
    this.validateIfEmailValid(data.email);
    this.validatePassword(data.password);
  }
}
