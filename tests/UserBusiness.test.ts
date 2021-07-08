import { UserBusiness } from "../src/business/user/UserBusiness";
import idGeneratorMock from "./mocks/services/idGeneratorMock";
import hashGeneratorMock from "./mocks/services/hashGeneratorMock";
import tokenGeneratorMock from "./mocks/services/tokenGeneratorMock";
import userDatabaseMock from "../tests/mocks/data/userDatabaseMock";
import { LoginInputDTO, UserInputDTO } from "../src/model/User";

const userBusinessMock = new UserBusiness(
  tokenGeneratorMock,
  hashGeneratorMock,
  idGeneratorMock,
  userDatabaseMock
);

describe("UserBusiness", () => {
  describe("signUp", () => {
    test("Should catch error when name is empty", async () => {
      expect.assertions(2);

      try {
        const data: UserInputDTO = {
          email: "ravi@mail.com",
          name: "",
          nickname: "ravi",
          password: "Ravioli123@",
        };

        await userBusinessMock.signUp(data);
      } catch (error) {
        expect(error.message).toBe(
          "All fields must be filled: 'email', 'name', 'nickname' and 'password'"
        );
        expect(error.statusCode).toBe(422);
      }
    });

    test("Should catch error when email is invalid", async () => {
      expect.assertions(2);

      try {
        const data: UserInputDTO = {
          email: "ravi.com",
          name: "ravioli",
          nickname: "ravi",
          password: "Ravioli123@",
        };

        await userBusinessMock.signUp(data);
      } catch (error) {
        expect(error.message).toBe("Invalid email");
        expect(error.statusCode).toBe(422);
      }
    });

    test("Should catch error when password is invalid", async () => {
      expect.assertions(2);

      try {
        const data: UserInputDTO = {
          email: "ravi@mail.com",
          name: "ravioli",
          nickname: "ravi",
          password: "Ravioli",
        };

        await userBusinessMock.signUp(data);
      } catch (error) {
        expect(error.message).toBe(
          "The password must have at least six characters with at least one lowercase letter, one uppercase letter, one number and one special character"
        );
        expect(error.statusCode).toBe(422);
      }
    });

    test("Should catch error when email is already registered", async () => {
      expect.assertions(2);

      try {
        const data: UserInputDTO = {
          email: "ravi@mail.com",
          name: "ravi",
          nickname: "rav",
          password: "Ravioli123@",
        };

        await userBusinessMock.signUp(data);
      } catch (error) {
        expect(error.message).toBe(
          "Something got wrong, try again later or try another email"
        );
        expect(error.statusCode).toBe(422);
      }
    });

    test("Should catch error when nickname is not available", async () => {
      expect.assertions(2);

      try {
        const data: UserInputDTO = {
          email: "ravi2@mail.com",
          name: "ravi",
          nickname: "ravi",
          password: "Ravioli123@",
        };

        await userBusinessMock.signUp(data);
      } catch (error) {
        expect(error.message).toBe("Nickname is not available");
        expect(error.statusCode).toBe(422);
      }
    });

    test("Should return access token on sucessful signup", async () => {
      expect.assertions(1);

      try {
        const data: UserInputDTO = {
          email: "amelie@mail.com",
          name: "amelie",
          nickname: "meli",
          password: "Amelie123@",
        };

        const accessToken = await userBusinessMock.signUp(data);

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });

  describe("login", () => {
    test("Should catch error when email is not registered", async () => {
      expect.assertions(2);

      try {
        const data: LoginInputDTO = {
          email: "amelie@mail.com",
          password: "Amelie123@",
        };
        await userBusinessMock.login(data);
      } catch (error) {
        expect(error.message).toBe("Invalid credentials");
        expect(error.statusCode).toBe(401);
      }
    });

    test("Should catch error when password is incorrect", async () => {
      expect.assertions(2);

      try {
        const data: LoginInputDTO = {
          email: "ravi@mail.com",
          password: "ravioli12",
        };

        await userBusinessMock.login(data);
      } catch (error) {
        expect(error.message).toBe("Invalid credentials");
        expect(error.statusCode).toBe(401);
      }
    });

    test("Should return access token on sucessful login", async () => {
      expect.assertions(1);

      try {
        const data: LoginInputDTO = {
          email: "ravi@mail.com",
          password: "Ravioli123@",
        };
        const accessToken = await userBusinessMock.login(data);

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });
});
