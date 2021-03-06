# Login

Used for authenticating users.

**URL** : `http://ec2-52-91-118-16.compute-1.amazonaws.com/users/login/`

**Method** : `POST`

**Input**

```json
{
  "email": "a valid email",
  "password": "a valid password"
}
```

**Example**

```json
{
  "email": "ravioli@mail.com",
  "password": "123Fish!"
}
```

---

## Success Response

**Status Code** : `200 OK`

**Output**

```json
{
  "token": "token"
}
```

---

## Error Response

**Condition** : If email or password is incorrect.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "Invalid credentials"
}
```
