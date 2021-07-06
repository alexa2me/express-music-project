import { User } from "../../../src/model/User";
import { userMock } from "../userMock";
import { IUserDatabase } from "../../../src/data/UserDatabase";

export class UserDatabaseMock implements IUserDatabase {
  public async createUser(
    id: string,
    email: string,
    name: string,
    nickname: string,
    password: string
  ): Promise<void> {}

  public async getUserByEmail(email: string): Promise<User | undefined> {
    if (email === "ravi@mail.com") {
      return userMock;
    }
  }

  public async getUserByNickname(nickname: string): Promise<User | undefined> {
    if (nickname === "ravi") {
      return userMock;
    }
  }
}

export default new UserDatabaseMock();
