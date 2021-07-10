# Get all genres

Used for getting all genres.

**URL** : `/music/genres/get/`

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
