<h1 align="center">Music Drive</h1>

<p align="center">

  <img src="https://img.shields.io/badge/Node.js-43853D?style=&logo=node-dot-js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=&logo=amazon-aws&logoColor=white" />
  <img src="http://img.shields.io/static/v1?label=license&message=MIT&color=blue&style="/>
  <img src="http://img.shields.io/static/v1?label=status&message=finished&color=green&style="/>

### Table of Contents

:small_blue_diamond: [What is this project about?](#page_with_curl-what-is-this-project-about)

:small_blue_diamond: [Requirements](#hammer_and_wrench-requirements)

:small_blue_diamond: [How to run the application](#arrow_forward-how-to-run-the-application)

:small_blue_diamond: [Endpoints](#triangular_flag_on_post-endpoints)

- Sign up
- Login
- Add genre
- Get genres
- Add song
- Get all songs
- Get song by id

:small_blue_diamond: [License](#license)

## :page_with_curl: What is this project about?

<p align="justify">
  This project is about an <strong>Application Programming Interface (API)</strong> developed to serve a <strong>music drive</strong> in which users can <strong>sign up</strong>, <strong>login</strong>, <strong>add genres</strong>, <strong>get genres</strong>, <strong>add songs</strong>, <strong>get all songs</strong> and <strong>get songs by id</strong>.
</p>

## :hammer_and_wrench: Requirements

#### Runtime environment

<a href="https://nodejs.org/en/">:small_blue_diamond: NodeJS</a>

#### Language

<a href="https://www.typescriptlang.org/
">:small_blue_diamond: Typescript</a>

#### Database Service (you can use another one)

<a href="https://www.mysql.com/">:small_blue_diamond: MySQL</a>

#### Framework

<a href="https://expressjs.com/pt-br/">:small_blue_diamond: Express.js</a>

#### Libraries

<a href="http://knexjs.org/">:small_blue_diamond: Knex.js</a>
<a href="https://www.npmjs.com/package/bcryptjs">:small_blue_diamond: bcryptjs</a>
<a href="https://www.npmjs.com/package/cors">:small_blue_diamond: cors</a>
<a href="https://www.npmjs.com/package/dotenv">:small_blue_diamond: dotenv</a>
<a href="https://www.npmjs.com/package/jsonwebtoken">:small_blue_diamond: jsonwebtoken</a>
<a href="https://www.npmjs.com/package/uuid">:small_blue_diamond: uuid</a>

## :arrow_forward: How to run the application

1.  Clone this repository in your machine.

2.  In your command line, run:

    `npm install`

3.  The file `.env.sample` is used for setting up all **environment variables** you'll need, as the informations about your **database**, a **jwt key** (any keyword you want) and an **"access token expires in"** in which you can choose for how long your token will be valid, also remember to rename this file just as `.env` (not obligatory, but... you know, keep it simple):

        DB_HOST =
        DB_USER =
        DB_PASSWORD =
        DB_DATABASE_NAME =
        JWT_KEY =
        PORT =
        ACCESS_TOKEN_EXPIRES_IN =

4.  The file `tables.sql` has all tables used in this project if you want to create them easily.

5.  All set? Now you can choose a **client REST** as **Postman** or **Insomnia** and test all endpoints.

6.  Run `npm run start` in your command line and go to your client REST to see the magic happening!

## :triangular_flag_on_post: Endpoints

### :unlock: Open endpoints

In open endpoints authentication isn't necessary.

#### :metal: User related

:small_blue_diamond: [Sign up](apidocs/responses_examples/user/sign_up.md): `POST /users/signup`<br>
:small_blue_diamond: [Login](apidocs/responses_examples/user/login.md): `POST /users/login`

### :closed_lock_with_key: Authenticated endpoints

In authenticated endpoints a valid token is necessary in the header of the request and it can be acquired by doing login in the above endpoint Login.

#### 👯 Genre related

:small_blue_diamond: [Add genre](apidocs/responses_examples/genre/add_genre.md): `POST /music/genre/create/`<br>
:small_blue_diamond: [Get genres](apidocs/responses_examples/genre/get_genres.md): `GET /music/genres/get/`<br>

#### 🎶 Song related

:small_blue_diamond: [Add songs](apidocs/responses_examples/song/add_song.md): `POST /music/create/`<br>
:small_blue_diamond: [Get all songs](apidocs/responses_examples/song/get_all_songs.md): `GET /music/`<br>

## :rocket: Developer :octocat:

<table>
  <tr>
    <td align="center"><a href="https://github.com/alexa2me">
    <img src="https://avatars.githubusercontent.com/u/63327969?s=460&v=4" width="100px" alt="Imagem do perfil da Alexandra"/>
    <br />
    <sub><b>Alexandra Alcantara</b></sub><br />:snowflake::snowman::snowflake:</td>
</table>

## License

The [MIT License](https://choosealicense.com/licenses/mit/) (MIT)

Copyright :copyright: 2021 - Music Drive
