import { IAuthenticator } from "../../../src/services/Authenticator";

export class TokenGeneratorMock implements IAuthenticator {
  public generateToken = (input: string): string => {
    return "token_mock";
  };

  public getTokenData(token: string) {
    return "token_data_mock";
  }
}

export default new TokenGeneratorMock();
