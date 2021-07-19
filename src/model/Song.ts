export class Song {
  constructor(
    private id: string,
    private title: string,
    private author: string,
    private date: string,
    private file: string,
    private genre: string[],
    private album: string
  ) {}

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getDate() {
    return this.date;
  }

  getFile() {
    return this.file;
  }

  getGenre() {
    return this.genre;
  }

  getAlbum() {
    return this.album;
  }

  setId(id: string) {
    this.id = id;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setAuthor(author: string) {
    this.author = author;
  }

  setDate(date: string) {
    this.date = date;
  }

  setFile(file: string) {
    this.file = file;
  }

  setGenre(genre: string[]) {
    this.genre = genre;
  }

  setAlbum(album: string) {
    this.album = album;
  }

  static toSongModel(song: any): Song {
    return new Song(
      song.id,
      song.title,
      song.author,
      song.date,
      song.file,
      song.genre,
      song.album
    );
  }

  public songToDatabase(): SongDataDTO {
    return {
      data: {
        id: this.id,
        title: this.title,
        author: this.author,
        date: this.date,
        file: this.file,
        album: this.album,
      },
      genre: this.genre,
    };
  }
}

export interface SongInputDTO {
  title: string;
  date: string;
  file: string;
  genre: string[];
  album: string;
}

export interface SongDataDTO {
  data: Omit<SongData, "genre">;
  genre: string[];
}

export interface SongData extends SongInputDTO {
  id: string;
  author: string;
}
