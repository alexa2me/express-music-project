# Add Song

Used for adding a new song.

**URL** : `http://ec2-52-91-118-16.compute-1.amazonaws.com/music/create/`

**Method** : `POST`

```json
{
  "Authorization": "token"
}
```

**Input**

```json
{
  "title": "Song name",
  "author": "user id",
  "date": "song release date",
  "file": "song file",
  "genre": ["genre id"],
  "album": "album name"
}
```

**Example**

```json
{
  "title": "Funk do Zulinhus",
  "author": "user id",
  "date": "22/01/2000",
  "file": "backend-funk.mp3",
  "genre": ["genre id", "another genre id"],
  "album": "Nerd First"
}
```

---

## Success Response

**Code** : `200 OK`

**Output**

```json
{
  "message": "Song created successfully"
}
```

---

## Error Response

**Condition** : If some field is missing.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "All fields must be filled: 'title', 'author', 'date', 'file', 'genre' and 'album'"
}
```
