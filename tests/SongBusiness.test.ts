import { SongBusiness } from "../src/business/song/SongBusiness";
import { SongInputDTO } from "../src/model/Song";
import idGeneratorMock from "./mocks/services/idGeneratorMock";
import songDatabaseMock from "./mocks/data/songDatabaseMock";
import tokenGeneratorMock from "./mocks/services/tokenGeneratorMock";

const songBusinessMock = new SongBusiness(
  tokenGeneratorMock,
  idGeneratorMock,
  songDatabaseMock
);

describe("SongBusiness", () => {
  describe("createSong", () => {
    test("Should catch error when token is empty", async () => {
      expect.assertions(2);

      try {
        const input: SongInputDTO = {
          title: "A new day has come",
          author: "Ale",
          date: "30/06/2021",
          file: "song.mp3",
          genre: "Pop",
          album: "Just an album",
        };

        await songBusinessMock.createSong(input, undefined);
      } catch (error) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Unauthorized");
      }
    });

    test("Should catch error when some field is empty", async () => {
      expect.assertions(2);

      try {
        const input: SongInputDTO = {
          title: "",
          author: "Ale",
          date: "30/06/2000",
          file: "song.mp3",
          genre: "Pop",
          album: "Just an album",
        };

        await songBusinessMock.createSong(input, "token");
      } catch (error) {
        expect(error.message).toBe(
          "All fields must be filled: 'title', 'author', 'date', 'file', 'genre' and 'album'"
        );
        expect(error.statusCode).toBe(422);
      }
    });

    test("Should return successful message", async () => {
      expect.assertions(1);

      try {
        const input: SongInputDTO = {
          title: "A new day has come",
          author: "Ale",
          date: "20/05/2000",
          file: "song.mp3",
          genre: "pop",
          album: "just an album",
        };

        const result = await songBusinessMock.createSong(input, "token");

        expect(result).toBe("Song created successfully!");
      } catch (error) {
        console.log(error);
      }
    });
  });
});
