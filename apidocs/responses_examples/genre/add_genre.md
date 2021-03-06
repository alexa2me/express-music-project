# Add Genre

Used for adding a new genre.

**URL** : `http://ec2-52-91-118-16.compute-1.amazonaws.com/music/genre/create/`

**Method** : `POST`

```json
{
  "Authorization": "token"
}
```

**Input**

```json
{
  "name": "genre name"
}
```

**Example**

```json
{
  "name": "Rock"
}
```

---

## Success Response

**Code** : `200 CREATED`

**Retorno**

```json
{
  "message": "Genre created successfully!"
}
```

---

## Error Response

**Condition** : If `name` field is empty.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "'Name' field can't be empty"
}
```
