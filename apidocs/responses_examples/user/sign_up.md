# Sign up

Used for creating a new user.

Notice that password must contain at least **6 characters** with at least **one lowercase letter**, **one uppercase letter**, **one number** and **one special character**, that's a strong password, isn't it? :D

**URL** : `/users/signup/`

**Method** : `POST`

**Input**

```json
{
  "name": "username",
  "nickname": "user nickname",
  "email": "valid email",
  "password": "valid password"
}
```

**Example**

```json
{
  "name": "Hulk",
  "nickname": "hulkinho",
  "email": "hulk@avengers.com",
  "password": "123Hulk@"
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

**Condition** : If some field is empty.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "All fields must be filled: 'email', 'name', 'nickname' and 'password'"
}
```

---

**Condition** : Email is invalid.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "Invalid email"
}
```

---

**Condition** : Password is invalid.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "Password must have at least six characters with at least one lowercase letter, one uppercase letter, one number and one special character"
}
```

---

**Condition** : Email is already registered.

**Status Code** : `400 BAD REQUEST`

**Output** :

```json
{
  "error": "Something got wrong, try again later or try another email"
}
```
