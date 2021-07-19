# Get all songs

Used for getting all songs.

**URL** : `http://ec2-52-91-118-16.compute-1.amazonaws.com/music/`

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
  "songs": [
    {
      "id": "song id",
      "title": "A new day has come",
      "author": "Hulk",
      "date": "22/01/2000",
      "file": "https://www.youtube.com/watch?v=NaGLVS5b_ZY&list=RDNaGLVS5b_ZY&start_radio=1&ab_channel=CelineDionVEVO",
      "genre": ["American Funk", "Pop"],
      "album": "Album Test"
    },
    {
      "id": "song id",
      "title": "Zulinhus funk",
      "author": "Zulinhus",
      "date": "03/0/2015",
      "file": "https://www.youtube.com/watch?v=Ou73PD7dyY8&ab_channel=FabioAnton",
      "genre": "American Funk",
      "album": "Album Test"
    }
  ]
}
```
