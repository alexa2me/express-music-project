import { UserInputDTO, LoginInputDTO } from "../../model/User";
import userDatabase, { IUserDatabase } from "../../data/UserDatabase";
import idGenerator, { IIdGenerator } from "../../services/IdGenerator";
import authenticator, { IAuthenticator } from "../../services/Authenticator";
import hashGenerator, { IHashManager } from "../../services/HashManager";
import { CustomError } from "../../error/CustomError";
import { UserValidations } from "./UserValidations";

export class UserBusiness extends UserValidations {
  constructor(
    private authenticator: IAuthenticator,
    private hashManager: IHashManager,
    private idGenerator: IIdGenerator,
    private userDatabase: IUserDatabase
  ) {
    super();
  }

  async signUp(user: UserInputDTO) {
    this.validateData(user);

    const userEmailFromDB = await this.userDatabase.getUserByEmail(user.email);
    if (userEmailFromDB) {
      throw new CustomError(
        "Something got wrong, try again later or try another email",
        422
      );
    }

    const userNicknameFromDB = await this.userDatabase.getUserByNickname(
      user.nickname
    );
    if (userNicknameFromDB) {
      throw new CustomError("Nickname is not available", 422);
    }

    const id = this.idGenerator.generate();

    const hashPassword = this.hashManager.hash(user.password);

    await this.userDatabase.createUser(
      id,
      user.email,
      user.name,
      user.nickname,
      hashPassword
    );

    const accessToken = this.authenticator.generateToken(id);

    return accessToken;
  }

  async login(user: LoginInputDTO) {
    const userFromDB = await this.userDatabase.getUserByEmail(user.email);
    if (!userFromDB) {
      throw new CustomError("Invalid credentials", 401);
    }

    const hashCompare = this.hashManager.compare(
      user.password,
      userFromDB.getPassword()
    );

    if (!hashCompare) {
      throw new CustomError("Invalid credentials", 401);
    }

    const accessToken = this.authenticator.generateToken(userFromDB.getId());

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }

    return accessToken;
  }
}

export default new UserBusiness(
  authenticator,
  hashGenerator,
  idGenerator,
  userDatabase
);
