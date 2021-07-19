# Get songs by id

Used for getting songs by id.

**URL** : `http://ec2-52-91-118-16.compute-1.amazonaws.com/music/:id/`

**Method** : `GET`

```json
{
  "Authorization": "token"
}
```

---

## Success Response

**Status Code** : `200 OK`

**Output**

```json
{
  "songs": {
    "id": "song id",
    "title": "A new day has come",
    "author": "Hulk",
    "date": "22/01/2000",
    "file": "https://www.youtube.com/watch?v=NaGLVS5b_ZY&list=RDNaGLVS5b_ZY&start_radio=1&ab_channel=CelineDionVEVO",
    "genre": ["American Funk", "Pop"],
    "album": "Album Test"
  }
}
```

---

## Error Response

**Condition** : If `id` is invalid.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "Song not found"
}
```
