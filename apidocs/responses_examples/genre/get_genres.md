# Get all genres

Used for getting all genres.

**URL** : `http://ec2-52-91-118-16.compute-1.amazonaws.com/music/genres/get/`

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
  "genres": [
    {
      "id": "genre id",
      "name": "Pop"
    },
    {
      "id": "genre id",
      "name": "Rock"
    }
  ]
}
```
