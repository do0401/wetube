# Youtube Clone Coding

이 프로젝트는 [Nomad Coders](https://academy.nomadcoders.co/)의 니콜라스님 강의를 토대로 진행했습니다.

## `시작하기`

### #0.2 The State of Fullstack

- 프론트엔드와 백엔드의 경계는 점점 흐려지고 있다.
- 풀스택 개발자가 된다면 모든 것을 혼자서 만들어 볼 수 있다.
- 앞으로 당분간 은 풀스택 수요는 높을 것이다.(자바스크립트 덕분에)
- 하지만 이것저것 집중하지 못하고 모든 분야의 초보자가 될 수 있다.

### #0.3 Websites vs Webapps

- 이 프로젝트를 위해서 이해해야하는 두 가지 컨셉이 있다.
- 그것은 웹 사이트와 웹 애플리케이션이다.
- 컨텐츠를 생산하는 것이 아니라 단순히 소비하는 경우, 인터랙티브한 요소가 거의 없는 경우, 그것은 웹 사이트이다.
- 하지만 웹 애플리케이션의 경우, 내가 움직이고 클릭하고 발견하고 검색하고 등등 다양한 인터렉티브 요소가 있다.
- 바닐라 JS는 웹 애플리케이션에는 그다지 좋지 않지만, 웹 사이트 빌드에는 탁월하고, 특히 작은 인터랙티브 요소를 추가하는 것에 좋다.

## `1일차`

## #1 NodeJS Theory

### #1.0 What is NodeJS

- 자바스크립트는 브라우저에 내장되어있다.
- NodeJS는 자바스크립트를 브라우저 밖으로 가지고 나와서 유저가 사용할 수 있게 한다.
- 즉, 브라우저 밖의 자바스크립트가 되는 것이다.
- 자바스크립트는 그동안 브라우저에 종속되어있었지만 NodeJS로 인해 가능성이 무한해졌다.

### #1.1 Use Cases for NodeJS

- NodeJS를 쓰는 첫번째 이유는 자바스크립트이기때문이다.
- 그리고 모든 것을 다 customize할 수 있는 능력이 있다면 NodeJS를 선택할 것이다.
- 왜냐하면 NodeJS는 아무 것도 없는 상태에서 작은 블럭들을 쌓아서 성을 짓는 것과 같기 때문이다. 어떤 사람들은 그런 점을 좋아하기도 하지만 반면에 어떤 사람들은 싫어하기도 한다.
- 만약 Django를 선택한다면, Django는 마치 큰 성과 같아서 사용하는 법을 배워야 한다.
- 이러한 점이 NodeJS와 Django의 가장 큰 차이점이다.
- NodeJS를 선택하는 좋은 케이스는 많은 데이터를 움직여야 할 때이다.
- 데이터베이스 생성, 삭제, 사용자에게 전송, 저장 등과 같이 NodeJS는 데이터를 다루는 성능이 매우 좋다.(많은 유저에게 메시지를 전송하고, 메시지를 받고, 알림을 하고, 실시간 처리를 하는 등)
- 하지만 이미지를 압축하거나 이미지를 crop 하고 filter를 적용하고 저장하는 등 컴퓨터의 하드웨어, 하드코어한 처리를 하려고 한다면 NodeJS가 아닌 다른 언어를 선택해야 한다.

### #1.2 Who Uses NodeJS

- 우버, 넷플릭스, 페이팔 모두 NodeJS로 만들어진 사이트이다.
- NodeJS는 수없이 검증되었고 많은 회사가 사용 중이며 많은 회사들이 신뢰하고 있다.

### #1.3 Installing NodeJS

`https://nodejs.org/ko/`

- (윈도우) nodejs를 다운로드 후 설치한다.<br>

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`<br>
`brew install node`

- (macOS) Homebrew 설치 후 nodejs를 설치한다.

## #2 ExpressJS

### #2.0 What is a Server

- 서버란, 인터넷에 연결된 컴퓨터이다.
- 물리적으로는 항상 켜져있는 컴퓨터이고, 소프트웨어적으로는 인터넷에 연결되어 접속 요청에 응답하는 것이 바로 '서버'이다.

### #2.1 What is Express

- ExpressJS는 프레임워크이다.
- nodejs로 서버를 만들기 위해서는 몇 가지 기본적으로 해야할 작업이 있고, 이런 것을 대신 해주는 프레임워크가 'ExpressJS' 이다.
- ExpressJS는 매우 안정적이다.

### #2.2 Installing Express with NPM

- NPM : Node Package Manager<br>
  `npm init`<br>
  `npm install express`
- npm init 후 express를 설치한다.
- 참고적으로, package.json을 갖는 건 매우 좋은 것이다. 누군가와 협업 시 코드 파일(\*.js)과 package.json 파일만 건네주고 npm install을 한다면 dependencies에 있는 내용을 자동으로 다운로드 받는다.

### #2.3 Your First Express Server

`git init`

- git 저장소를 생성한다.
- 그리고 자신의 github 페이지로 이동하여 repository를 추가한다.
- .gitignore 에 [Node.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) 내용을 추가한다.

`git remote add origin https://github.com/do0401/wetube`

- 새로운 원격 저장소를 추가한다. (URL은 위에서 추가한 repository 주소이다.)

`git add .`<br>
`git commit -m "Initial Commit"`

- 파일 add 후 "Initial Commit" 커밋 메시지와 함께 커밋한다.

`git push origin master`

- 로컬 저장소의 내용을 원격 저장소로 push 한다.

```javascript
const express = require("express");
const app = express();

app.listen(4000);
```

- expressjs를 사용하기 위해서는 위와 같은 코드가 필요하다.
- express를 불러와서 app에 express를 실행해서 담는다.
- 그리고 4000번 포트를 listen 한다.

`node index.js`

- index.js를 실행하고 localhost:4000 으로 접속하면 에러 메시지를 확인할 수 있다.
- 즉, 서버에 접속이 되었으나 root(/)에 아무 것도 표시할 것이 없어서 에러를 받은 것이다.

```javascript
const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
```

- 위 코드를 콜백(callback)으로 바꿔준다.
- 4000번 포트를 listen하고, listen을 시작할 때 handleListening 함수를 실행한다.
- 그리고 위에서 서버를 실행할 때 사용했던 명령을 더 간단히 바꿔보자.

```javascript
"scripts": {
    "start": "node index.js"
},
```

- package.json에 위 내용을 추가한다.
- 앞으로는 'node index.js' 라는 명령을 하지 않고 'npm start' 라고만 입력하면 서버가 실행될 것이다.

### #2.4 Handling Routes with Express

- GET / POST

```javascript
function handleHome(req, res) {
  res.send("Hello from home"); // handleHome 에 request가 오면 responese로 'Hello from home' 메시지 전달
}

function handleProfile(req, res) {
  res.send("You are on my profile"); // handleProfile 에 request가 오면 responese로 'You are on my profile' 메시지 전달
}

app.get("/", handleHome); // root(/)에 접근하면 handleHome에 get request 발생(이것이 route)

app.get("/profile", handleProfile); // /profile에 접근하면 handleProfile에 get request 발생(이것이 route)
```

- 위에서 서버가 웹 사이트 서버처럼 작동하길 바란다면 메시지 대신 html, css 파일을 send 해줘야 한다.

### #2.5 ES6 on NodeJS using Babel

- Babel은 최신의 자바스크립트 코드를 무난한 예전의 자바스크립트 코드로 변환해준다.

`npm install @babel/node`<br>
`npm install @babel/preset-env`<br>
`npm install @babel/core`

- babel/node를 설치하고 -env 프리셋과 babel/core를 설치한다.

- 그리고 .babelrc 파일을 생성한다.
- .babelrc는 babel을 설정하는 곳이다. babel이 실행되기 전에 이 파일을 찾아보고 여기 설정해둔 preset을 읽고 이해하게 된다.

```javascript
// .babelrc
{
    "presets": ["@babel/preset-env"]
}

// index.js
import express from "express";  // 이전 코드 const express = require('express'); 를 수정

// package.json
"scripts": {
    "start": "babel-node index.js"  // 이전 코드 "node index.js" 를 수정
},
```

- 위와 같이 코드를 수정하고, npm start 실행 후 localhost:4000 접속하면 정상적으로 접속 가능한 것을 볼 수 있다.
- 코드를 수정할 때마다 서버를 끄고 다시 키는 것은 불편하다.
- 그래서 nodemon 이라는 것을 설치한다.

`npm install nodemon -D`

```javascript
// package.json
"scripts": {
    "start": "nodemon --exec babel-node index.js"  // 이전 코드 "babel-node index.js" 를 수정
},
```

- nodemon을 설치하고 package.json을 위와 같이 수정하면 이제 코드를 수정하고 저장할 때마다 서버를 자동으로 재실행한다.
- 마지막으로 nodemon을 설치할 때 마지막 '-D' 는, 프로젝트의 실행과 관련이 없고 개발자에게 도움이 될만한 package를 설치할 때 사용한다. 이렇게 설치된 package는 package.json에 devDependencies에 포함되며, npm install 시 --production 옵션을 붙이면 devDependencies는 설치되지 않는다.

### #2.6 Express Core: Middlewares

- Middleware를 공부하기 전, 이전 코드 중 수정할 사항이 있다.
- 현재 코드를 저장하면 서버가 재실행되고 그 다음 babel이 코드의 변화를 감지하고 서버를 또 재시작한다.

```javascript
// package.json
"scripts": {
    "start": "nodemon --exec babel-node index.js --delay 2"  // delay 2초 추가
},
```

- 그래서 2초의 delay를 주면 저장할 때마다 2초를 기다렸다가 서버를 시작하게 되며, 이렇게 하면 babel이 변환을 완료할 때까지 기다려줄 수 있는 것이다.
- express에서 middleware는 처리가 끝날 때까지 연결되어있는 것이다.(아래 설명 참조)

```javascript
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
```

- 먼저 웹 사이트에 접속하려고 하면 index파일을 실행하고 app은 route가 존재하는지 살펴본다.
- home(root)에 접속한다면 '/'를 찾아서 handleHome 함수를 실행하고 응답을 전송한다.
- 하지만 보통 연결의 흐름은 이렇게 간단하지 않다.
- 유저와 마지막 응답 사이에 뭔가가 존재하게 되는데 그것을 middleware라고 한다.

```javascript
const handleHome = (req, res) => res.send("Hello from home");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next(); // middleware 는 실행이 끝나면 next를 통해 다음 함수(handleHome)를 호출한다.
};

app.get("/", betweenHome, handleHome); // home(/) 요청이 오면 betweenHome(middleware)를 실행한다.
```

- betweenHome 함수는 middleware 이다. home(/) 요청과 handleHome 사이에 있다.
- express에서 connection을 다루는 것들은 request, response, next를 가지고 있다.
- middleware는 next를 통해 다음 함수룰 호출한다. 그리고 마지막 함수는 유저에게 무언가를 return한다.
- middleware는 다양한 용도로 개발자를 편하게 해준다. 유저의 로그인 여부를 체크할 수도 있고 파일을 전송할 때 중간에 가로챌 수도 있다.
- 위에 작성된 middleware는 하나의 route에만 사용되었다.

```javascript
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome); // 모든 route에 대해 실행되는 middleware
```

- 위와 같이 모든 route에 대해 실행되도록 할 수도 있다.

### #2.7 Express Core: Middlewares part Two

`npm install morgan`

- logging에 도움을 주는 'Morgan' 이라는 middleware를 설치해보자.

```javascript
import morgan from "morgan";

app.use(morgan("dev"));
```

- morgan에는 combined, common, dev, short, tiny 옵션이 있다.
- 위와 같이 코드 작성 후 저장, 웹 페이지 리로딩하면 터미널창에서 아래와 같은 로그를 확인할 수 있다.

```
GET / 304 3.316 ms - -
```

`npm install helmet`

- 보안에 도움을 주는 'Helmet' 이라는 middleware도 설치해보자.
- 참고로 middleware가 next 함수 대신에 res.send 함수를 사용하면 연결을 끊을 수 있다. 즉, 마지막 함수가 실행되지 않는다.

`npm install body-parser`<br>
`npm install cookie-parser`

- body-parser와 cookie-parser middleware를 설치한다.
- body-parser는 body로부터 정보를 얻을 수 있게 해주고, cookie-parser는 session을 다루기 위해 cookie에 유저 정보를 저장한다.

```javascript
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

- body-parser에는 정의해야 할 옵션이 있다. 우리 서버는 우리가 무엇을 전송하는지 알 수 있어야 한다.
- json을 전송한다면 서버는 json을 이해해야 하고, 일반적인 html form을 전송한다면 서버는 urlencoded 라는 것을 이해해야 한다.

## `2일차`

### #2.8 Express Core: Routing

- 먼저 index.js를 app.js와 init.js로 분리한다.

```javascript
// app.js
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

export default app; // app object를 넘겨준다.

// init.js
import app from "./app"; // app 을 가져온다.

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
```

- routing 모듈화는 router들의 복잡함을 쪼개주는데 사용할 수 있다.

```javascript
// router.js
import express from "express";

export const userRouter = express.Router();     // default로 export한 것이 아니라 userRouter만 export 했다.

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));

// app.js
import { userRouter } from "./router";      // router.js의 userRouter를 불러온다.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      // userRouter만 export했으므로 { } 를 사용한다.
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use('/user', userRouter);               // /user 에 접속하면 userRouter 를 사용한다.
```

- 위와 같이 원하는만큼 쉽게 router를 만들 수 있다.
- express는 이렇게 모든 것을 작은 파일들로 쪼개서 사용할 수 있게 해준다.(이것이 매우 섹시한 점이다!)
- express는 기본적으로 아주 간단하다. 무엇인가를 만들고 만들어진 것을 사용한다. 많은 것을 담고 있지 않다.
- 하지만 router, middleware 등 그것들을 조합하면 꽤 커지게 된다.

### #2.9 MVC Pattern part One

- MVC: Model: 데이터 / View: 데이터의 모양 / Controller: 데이터를 찾는 함수
- MVC는 패턴이다. 일종의 멋진 구조(structure)같은 것이다.
- 이제 예시로 작성했던 router를 삭제하고 router를 URL별로 분리한다.

```javascript
// userRouter.js (router.js를 userRouter.js로 변경)
import express from "express";

const userRouter = express.Router();

export default userRouter;

// videoRouter.js
import express from "express";

const videoRouter = express.Router();

export default videoRouter;

// globalRouter.js
import express from "express";

const globalRouter = express.Router();

export default globalRouter;

// app.js
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express()

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

export default app;
```

- URL별로 분리하여 3개의 router를 사용한다.(userRouter, videoRouter, globalRouter)
- 이 방법이 유일하게 독점적으로 URL를 다루는 방법이다. 이것은 나중에 우리가 볼 다른 함수들과는 아무 상관이 없는 것이다.

### #2.10 MVC Pattern part Two

- router의 URL을 하나의 파일에서 관리하기 위해 routes.js 파일을 생성한다.

```javascript
// routes.js
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; // express는 :id 의 형태의 URL을 보면 이 값이 변하는 값이라는 것을 안다.
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;
```

- 각각의 URL을 관련있는 router js파일에 작성하지 않는 이유는 나중에 다른 곳에서 사용하려고 할 때 그 구조를 외우고 있어야 하기 때문이다.
- 그런 것보다는 하나의 URL 파일을 가지고 있으면 어디서든 하나의 파일로 모든 URL을 불러다 쓸 수 있다.

```javascript
// globalRouter.js
import routes from "../routes";

globalRouter.get(routes.home, (req, res) => res.send("Home"));
globalRouter.get(routes.join, (req, res) => res.send("Join"));
globalRouter.get(routes.login, (req, res) => res.send("Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Logout"));
globalRouter.get(routes.search, (req, res) => res.send("Search"));
```

- 위와 같은 형태로 URL을 사용할 수 있다. 전체 URL 구조를 기억할 필요가 없는 것이다.

### #2.11 MVC Pattern part Three

- 이제 controller를 만들어보자.
- 대게 프로젝트에 있는 각 모델마다 controller를 만들게 된다. 우리는 video와 user에 관한 것들만 있으므로 두 개의 controller를 만든다.

```javascript
// userController.js
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password");

// videoController.js
export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");

// globalRouter.js (userRouter.js와 videoRouter.js도 마찬가지로 변경)
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

globalRouter.get(routes.home, home); // get의 두번째 인자 함수를 controller로 변경했다.
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
```

- 위와 같이 get의 두번째 인자였던 함수를 controller로 변경했고, 코드가 훨씬 보기 좋아졌다.

### #2.12 Recap

- init.js에는 app.js에서 import한 app이 있다.
- app 관련 코드들은 모두 app.js에 담겨 있다.
- express를 import했고, express를 실행한 결과를 app 상수로 만들었다. 그리고 middleware들을 추가했다.
- middlewares: cookieParser / bodyParser / helmet / morgan
- 그리고 3개의 router를 사용했다.
- router: globalRouter / userRouter / videoRouter
- 이렇게 MVC 에서 C 부분을 작업했다.

### #2.13 Installing Pug

- Pug를 설치해보자.
- Pug는 express에서 View를 다루는 방식 중 하나이다(view 엔진). HTML을 보여줄 수 있다.

`npm install pug`

- npm으로 Pug를 설치한다.

```javascript
// app.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const app = express()

app.set("view engine", "pug");  // view engine을 pug로 설정한다.
app.use(cookieParser());
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

- express에는 view engine에 대한 기본 설정값이 undefined이며, 이 설정값을 pug로 변경한다.
- 그리고 view 파일들에 대한 기본 경로가 있으며, 작업 디렉토리 + '/views' 이다. views 폴더를 생성한다.

```javascript
export const home = (req, res) => res.render("home");
```

- views 폴더에는 view 파일들(템플릿)을 추가하고(템플릿의 확장자는 html이 아닌 pug 이다.), 이 템플릿을 웹 사이트에서 보여주기 위해서는 res.send 대신 res.render를 사용한다.
- render 함수의 첫번째 인자로, 보여주고자 하는 pug 파일 이름을 입력해준다.

### #2.14 Layout with Pug

- pug 를 사용하면 HTML을 생성하게 하는 자바스크립트의 강력한 기능을 사용할 수 있다.
- views 폴더 아래에 layouts 폴더를 만든다. 그리고 main.pug를 생성한다.

```pug
doctype html
html
    head
        title Wetube
    body
        header
            h1 WeTube
        main
            block content
            //- 이 부분에 템플릿 내용이 들어간다.
        footer
            span &copy; WeTube
```

- pug 는 < > 을 사용하지 않고 들여쓰기(탭 한칸 or 스페이스 4칸)를 사용하며, 들여쓰기는 children 태그를 의미한다.
- main 에는 공통되는 코드들을 넣어준다. 그리고 실제 내용들(ex. home.pug 등)은 content라는 block에 들어가게 된다.

```pug
extends layouts/main

block content
    p Hello
```

- main 레이아웃을 사용하는 모든 템플릿에서 extends로 layouts/main 을 확장한다.
- extends 는 레이아웃을 템플릿에서 확장하겠다는 뜻이다. 즉, main 코드를 사용하고, 거기에 추가적인 것을 더한다는 것이다.
- 그리고 block content 밑에 추가적인 코드를 작성한다.

### #2.15 Partials with Pug

- Partials 는 페이지의 일부분이다. 조직적인 목적으로만 만들어진다.
- partials 폴더를 생성하고 그 안에 footer.pug와 header.pug 파일을 생성한다.

```pug
//- footer.pug
footer.footer
    .footer__icon
        //- class가 footer__icon인 div 태그
        i.fab.fa-youtube
        //- <i class="fab fa-youtube"></i> 와 동일 코드
    span.footer__text WeTube #{new Date().getFullYear()} &copy;
    //- 자바스크립트를 추가하고 싶다면 #{ add javascript code here }

//- header.pug
header.header
    //- 두 개의 열을 추가한다.
    .header__column
        //- 첫 번째 열에는 아이콘을 추가한다.
        i.fab.fa-youtube
    .header__column
        //- 두 번째 열에는 ul 과 li, a를 추가한다.
        ul
            li
                a(href="#") Join
                //- 로그아웃 상태에서 보여지는 Join과 Log In
            li
                a(href="#") Log In
                //- 나중에 로그인/아웃 상태에 따라 자동으로 바꿔서 표시할 것이다.

//- main.pug
doctype html
html
    head
        link(rel="stylesheet", href="https://use.fontawesome.com/releases/v5.6.3/css/all.css", integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin="anonymous")
        //- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"> 와 동일 코드
        title Wetube
    body
        include ../partials/header
        //- partial 을 사용하려면 include 태그를 사용한다.
        main
            block content
        include ../partials/footer
```

- footer.pug와 header.pug 를 partial로 분리하고 분리된 partial을 main.pug에 include하여 사용했다.
- 또한 main.pug 에는 footer에서 사용할 youtube 아이콘을 위해 fontawesome 무료 링크를 추가했다.
- header.pug 에서 routes.js에 접근이 가능하면 좋을 것이다. **One single source of truth**(한 곳에서만 정보를 보관하는 것)은 더 나은 코드를 작성하게 만들어주는 원칙이다. 이런 방식으로 코드가 조직화된다면, 버그를 최소화 할 수 있다.

## `3일차`

### #2.16 Local Variables in Pug

- 이제 템플릿에 정보를 추가한다. controller에 있는 정보를 템플릿에 추가할 것이다.
- 먼저 전체 템플릿에서 사용할 정보를 controller에서 가져오기 위해 미들웨어를 추가한다.

```javascript
// app.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { localMiddleware } from "./middlewares";

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware);           // localMiddleware 함수 사용

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

// middlewares.js
import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";     // siteName
    res.locals.routes = routes;         // routes
    next();         // 이 미들웨어는 코드 사이에 들어가 있으므로 next를 호출해야 한다.
}
```

```pug
//- main.pug
title #{siteName}
//- WeTube를 #{siteName}으로 변경

//- header.pug
header.header
    .header__colum
        a(href=routes.home)
            //- 링크 추가
            i.fab.fa-youtube
    .header__column
        ul
            li
                a(href=routes.join) Join
                //- routes.join 추가
            li
                a(href=routes.login) Log In
                //- routes.login 추가

//- footer.pug
span.footer__text   #{siteName} #{new Date().getFullYear()} &copy;
//- WeTube를 #{siteName}으로 변경
```

- middlewares.js 라는 파일을 생성하고 locals를 추가한다.
- 추가한 locals는 위 main.pug, header.pug, footer.pug에서와 같이 사용한다.
- 즉, locals는 locals로 추가한 local 변수를 global 변수로 사용할 수 있게 해준다. 모든 템플릿에서 사용할 수 있다

### #2.17 Template Variables in Pug

- 템플릿마다 다른 정보를 가질 경우, 각각의 템플릿에 변수를 추가하는 방법은 아래와 같다.

```javascript
// videoController.js
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.render("Search", { pageTitle: "Search" });
export const upload = (req, res) => res.render("Upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("Video Detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("Delete Video", { pageTitle: "Delete Video" });

// main.pug
title #{pageTitle} | #{siteName}
```

- render 함수의 첫번째 인자는 페이지에 보여줄 템플릿이고, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체다.
- 위 videoController.js 와 같이 각각의 템플릿마다 pageTitle을 다르게 지정하면 페이지마다 페이지에 맞는 타이틀이 보여지게 된다.
- videoController.js 와 마찬가지로 userController.js 에도 pageTitle을 추가한다.

### #2.18 Search Controller

- search 템플릿에 약간의 로직을 추가할 것이다.

```pug
//- header.pug - 컬럼 추가(input form 추가)
.header__column
    form(action=routes.search method='get')
        //- action을 지정해서 search 페이지로 이동하도록 한다. method는 'get'으로 지정해야 url에 정보를 추가해준다.
        input(type='text', placeholder='Search by term...', name='term')
        //- name을 term으로 주면 검색어를 입력 시 검색어 내용이 term에 저장된다.

//- search.pug - content 내용 변경
block content
    .search__header
        h3 Searching for: #{searchingBy}
```

- 먼저 header.pug에 컬럼을 추가하고 input form을 추가한다.
- 그리고 search.pug에 search\_\_header 라는 class를 가진 div를 생성하고 h3 태그를 추가한다. searchingBy 변수는 아직 지정하지 않아서 보이지 않는다.

```javascript
// videoController.js
export const search = (req, res) => {
  console.log(req.query);
  res.render("search", { pageTitle: "Search", searchingBy });
};
```

- 검색어가 어디에 들어있는지 확인하기 위해 videoController.js 의 search 함수 안에서 console.log(req.query)를 확인한다. 터미널 창에서 { term: 'food' } 를 확인할 수 있다.

```javascript
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  // 위는 ES6 구문이고, const searchingBy = req.query.term; 와 같다.

  res.render("search", { pageTitle: "Search", searchingBy });
  // 위 searchingBy 는 ES6 구문이고, searchingBy: searchingBy; 와 같다.
};
```

- req.query.term에 검색어가 저장되는 것을 알았으므로, searchingBy 변수에 해당 검색어를 넣는다.
- 그리고 render 함수 두번째 인자에 변수를 추가한다.

### #2.19 Join: Log in HTML

- 만들어야 할 페이지들을 정리해보자.
- Home / Join / Login / **Search** / User Detial / Edit Profile / Change Password / Upload / Video Detail / Edit Video

```pug
//- home.pug
block content
    .videos
        h1 Video
```

- home.pug는 나중에 다시 수정할 것이다. 일단 이것으로 완료한다.

```pug
//- login.pug
.form__container
    form(action=routes.login, method='post')
        input(type='email', name='email', placeholder='Email')
        input(type='password', name='password', placeholder='Password')
        input(type='submit', value='Log In')

//- join.pug
.form__container
    form(action=routes.join, method='post')
        input(type='text', name='name', placeholder='Full Name')
        input(type='email', name='email', placeholder='Email')
        input(type='password', name='password', placeholder='Password')
        input(type='password', name='password2', placeholder='Verify Password')
        input(type='submit', value='Join Now')
```

- login과 join 페이지에는 각 페이지에 필요한 form을 추가했다.
- 이제 button을 만들고 싶은 만큼 만들기 위해 partial을 만들 것이다. socialLogin.pug 파일을 생성한다.
- github 계정 로그인 버튼과 페이스북 계정 로그인 버튼을 위한 것이다. 그리고 이 버튼을 join과 login 화면에서 모두 띄울 것이다.

```pug
//- socialLogin.pug
.social-login
    button
        span.social-login--github
            i.fab.fa-github
        |Continue with Github
        //- 앞에 '|'를 붙이면 뒤에 글자를 텍스트로 인식한다.
    button.social-login--facebook
        span
            i.fab.fa-facebook
        |Continue with Facebook

//- login.pug, join.pug - 마지막에 socialLogin을 include 한다.
include partials/socialLogin
```

- login.pug와 join.pug에 socialLogin.pug를 include하여 버튼을 추가한다.

## `4일차`

### #2.20 Change Profile HTML

- Home / **Join** / **Login** / **Search** / User Detial / Edit Profile / Change Password / Upload / Video Detail / Edit Video
- editProfile 파일을 작업한다.

```pug
.form-container
    form(action=routes.editProfile, method='post')
        label(for='avatar') Avatar
        input(type='file', id='avatar', name='avatar')
        input(type='text', placeholder='Name', name='name')
        input(type='email', placeholder='Email', name='email')
        input(type='submit', value='Update Profile')
    a.form-container__link(href=routes.changePassword) Change Password
```

- editProfile에 맞는 form을 추가한다.
- changePassword, upload, editVideo 파일도 작업한다.

```pug
//- changePassword.pug
.form-container
    form(action=`/users${routes.changePassword}`, method="post")
        input(type="password", name="oldPasswod", placeholder="Current Password")
        input(type="password", name="newPassword", placeholder="New Password")
        input(type="password", name="newPassword1", placeholder="Verify New Password")
        input(type="submit", value="Change Password")

//- upload.pug
.form-container
    form(action=`/videos${routes.upload}`, method="post")
        label(for="file") Video File
        input(type="file", id="file", name="file")
        input(type="text", placeholder="Title", name="title")
        textarea(name="description", placeholder="Description")
        input(type="submit", value="Upload Video")

//- editVideo.pug
.form-container
    form(action=`/videos${routes.editVideo}`, method="post")
        input(type="text", placeholder="Title", name="title")
        textarea(name="description", placeholder="Description")
        input(type="submit", value="Update Video")
    a.form-container__link.form-container__link--delete(href=`/videos${routes.deleteVideo}`) Delete Video
```

- 각각의 파일에 맞는 form을 추가한다.

### #2.21 Home Controller

- 이제 전체 애플리케이션의 흐름을 가짜로 만들기 위해 가짜 정보를 넣어서 템플릿을 완성할 것이다.
- db.js를 생성하고 아래와 같이 가짜 데이터를 입력한다.

```javascript
// db.js
export const videos = [
  {
    id: 324393,
    title: "Video awesome",
    description: "This is something I love",
    views: 24,
    videoFile: "https://archive.org/details/BigBuckBunny_124",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  },
  {
    id: 1212121,
    title: "Video super",
    description: "This is something I love",
    views: 24,
    videoFile: "https://archive.org/details/BigBuckBunny_124",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  },
  {
    id: 55555,
    title: "Video nice",
    description: "This is something I love",
    views: 24,
    videoFile: "https://archive.org/details/BigBuckBunny_124",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  },
  {
    id: 11111,
    title: "Video perfect",
    description: "This is something I love",
    views: 24,
    videoFile: "https://archive.org/details/BigBuckBunny_124",
    creator: {
      id: 121212,
      name: "Nicolas",
      email: "nico@las.com"
    }
  }
];

// videoController.js
import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
```

- db.js에 데이터를 입력하고 videoController.js에서 import 후 home 함수에서 videos를 두번째 인자로 사용한다.
- controller에서 home 화면에 videos 배열을 전달한 것이다.

```pug
//- home.pug
.videos
    each item in videos         // controller에서 전달한 videos 배열 내에서 하나씩 iteration을 적용시킨다.
        h1= item.title          // videos 내 각각의 객체에 있는 title 속성값을 h1 태그로 출력한다.
        p= item.description     // videos 내 각각의 객체에 있는 description 속성값을 p 태그로 출력한다.
```

- home.pug 파일에서 each in 구문으로 videos 배열에서 item을 iteration 하면서 각각의 값을 하나씩 가져와서 출력한다.
- 이제 home 화면에서 가짜 비디오 데이터의 title과 description을 확인할 수 있다.

### #2.22 Home controller part Two

- footer를 include해서 재활용한 것처럼 video block html 코드를 만들어서 재활용할 것이다.
- mixin을 이용한다. mixin은 웹 사이트에서 자주 반복되는 html 코드를 담고 있다.
- mixin은 pug 가 가지고 있는 함수 중 하나이다. 기존 home.pug 내용을 mixin으로 바꾼다면 다음과 같다.

```pug
//- mixins/videoBlock.pug
mixin videoBlock(video = {})
    //- mixin 함수는 하나의 인자를 가진다. videoBlock mixin에 인자가 입력되면, 그 객체의 이름을 video로 정한 것이다. video는 기본적으로 빈 객체이다.
    h1=video.title
    p=video.description

//- home.pug
include mixins/videoBlock
//- videoBlock을 include한다.

.videos
    each item in videos
        +videoBlock({                       // mixin을 사용할 때는 이런 방식으로 사용한다.
            title: item.title,              // mixin에서 정의한 video.title에 item.title 값을 넣는다.
            description: item.description   // mixin에서 정의한 video.description에 item.description 값을 넣는다.
        })
```

- 위와 같은 방법으로 mixin을 사용할 수 있다.
- 이제 실제 우리 웹 사이트에서 사용될 video 정보를 출력해주는 mixin 코드를 작성해보자.

```pug
//- videoBlock.pug
mixin videoBlock(video = {})
    .videoBlock
        video.videoBlock__thumbnail(src=video.videoFile, controls=true)
        h4.videoBlock__title=video.title
        h6.videoBlock__views=video.views

//- home.pug
.videos
    each item in videos
        +videoBlock({
            title: item.title,
            views: item.views,
            videoFile: item.videoFile
        })
```

- mixin에 video thumbnail과 title, views를 추가했고, home에서 mixin을 사용하여 데이터를 출력했다.

## `5일차`

### #2.23 Join Controller

- search 화면을 작업해보자. 아직 비디오 검색 기능은 구현하지 않는다.

```javascript
// videoController.js
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  // const searchingBy = req.query.term;

  res.render("search", { pageTitle: "Search", searchingBy, videos }); // videos 가짜 데이터를 전달한다.
};
```

- 먼저 videoController에서 search 함수의 render함수에서 videos 데이터를 전달한다.

```pug
.search__header
    h3 Searching for: #{searchingBy}
.search__videos
    each item in videos
        +videoBlock({
            title: item.title,
            views: item.views,
            videoFile: item.videoFile
        })
```

- 그리고 home에서 추가했던 mixin을 똑같이 추가하여 search 화면에서도 video 리스트가 보이도록 한다.
- 이번에는 Join 화면을 바꿔보자. 회원가입을 하면 자동으로 Login이 되고 Home 화면으로 이동하도록 바꿔볼 것이다.
- 지금까지 작성한 코드로 페이지에서 join을 하면 /join으로 post할 수 없다는 에러를 볼 것이다. /join 경로로 post하기 위한 설정이나 코드가 없기 때문이다.

```javascript
// userController.js
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  console.log(req.body); // bodyParser의 필요성을 알아보기 위해 req.body를 찍어준다.
  res.render("join", { pageTitle: "Join" });
};

// globalRouter.js
import { getJoin, postJoin, login, logout } from "../controllers/userController";

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
```

- 먼저 기존 join controller를 getJoin과 postJoin으로 나누고, globalRouter 내용도 수정한다.
- postJoin은 method가 post인 /join 경로에서만 작동할 것이다.
- 코드 변경 후 페이지에서 join을 하면 이번에는 에러가 발생하지 않는다.

```javascript
{ name: 'kdh',
  email: 'abc@abc.com',
  password: '111',
  password2: '111' }    // req.body의 내용을 확인할 수 있다. bodyParser가 없다면 이 내용을 알 수 없다.
```

- 터미널에서 req.body 내용을 확인해보자. form에서 전송한 데이터를 받고 있다. 만약 app.js에서 bodyParser를 삭제하고 req.body를 확인하면 undefined로 표시되는 것을 알 수 있다. 이것이 bodyParser를 사용하는 이유이다.
- 사용자가 입력한 정보를 req.body에서 가져와야 한다.

```javascript
// userController.js
import routes from "../routes"; // routes를 import 한다.

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
  res.render("join", { pageTitle: "Join" });
};
```

- req.body 에서 사용자가 입력한 정보를 가져왔다.
- 그리고 password와 password2가 다르다면 400 상태코드를 전달하고, join 페이지를 다시 render해준다.
- password와 password2가 같다면 home으로 redirection 한다.
- 페이지에 에러를 전달하는 것은 좋은 일이다. 페이지는 에러를 이해하고 그에 맞는 응답을 한다.

### #2.24 Log In and User Profile Controller

- login 도 join과 비슷하다.

```javascript
// userController.js
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

// globalRouter.js
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
```

- 나중에 사용자 비밀번호가 데이터베이스에 있는 것과 같은지 검사해야 한다. 지금은 redirection만 한다.
- 이번에는 사용자가 로그인 상태인지 아닌지를 체크하여 header 메뉴를 보여주도록 하자.

```javascript
// middlewares.js
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    // 가짜 user 정보를 입력한다.
    isAuthenticated: true,
    id: 1
  };
  next();
};
```

- middlewares에 가짜 user 정보 객체를 입력한다. 즉, 현재 페이지에 id가 1인 user가 로그인한 상태가 된다.
- 이 정보는 실제 사용자 정보가 있으면 대체될 코드이다.

```pug
//- header.pug
.header__column
    ul
        if !user.isAuthenticated            // user.isAuthenticated 가 false 이면 join과 login이 보인다.
            li
                a(href=routes.join) Join
            li
                a(href=routes.login) Log In
        else                                // user.isAuthenticated가 true 이면 upload, profile, logout이 보인다.
            li
                a(href=routes.upload) Upload
            li
                a(href=routes.userDetail) Profile
            li
                a(href=routes.logout) Log Out
```

- header.pug 에서 user 로그인 상태에 따라 메뉴가 다르게 보이도록 분기를 나눴다.
- 이제 페이지를 열어보면 upload, profile, logout 메뉴가 보일 것이다.
- 그런데 profile 버튼을 누르면 url에 'http://localhost:4000/:id' 라고 표시가 된다. /:id 가 아니라 /1 로 표시되도록 수정해보자.

```javascript
// routes.js
const routes = {
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    userDetail: id => {             // userDetail을 함수로 변경한다. id 인자를 받아서 url에 표시한다.
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// userRouter.js
userRouter.get(routes.userDetail(), userDetail);    // userDetail을 함수로 변경한다.

// header.pug
a(href=routes.userDetail(user.id)) Profile          // userDetail을 user.id를 받는 함수로 변경한다.
```

- routes.js 에 userDetail 을 함수로 변경하여, id 값을 받아서 url에 전달하도록 변경한다.
- 함수로 선언만 하면 안되고, userRouter와 header에서 userDetail을 함수로 변경하여 실행해야 한다.

```javascript
// routes.js
videoDetail: id => {
  if (id) {
    return `/videos/${id}`;
  } else {
    return VIDEO_DETAIL;
  }
},
  // videoRouter.js
  videoRouter.get(routes.videoDetail(), videoDetail);
```

- videoDetail도 userDetail과 마찬가지로 변경해준다.

### #2.25 More Controllers

- video 목록을 클릭하면 video 상세 페이지로 보이도록 mixin을 수정한다.

```pug
//- videoBlock.pug
.videoBlock
    a(href=routes.videoDetail(video.id))
        video.videoBlock__thumbnail(src=video.videoFile, controls=true)
        h4.videoBlock__title=video.title
        h6.videoBlock__views=video.views

//- home.pug
.videos
    each item in videos
        +videoBlock({
            id: item.id,
            title: item.title,
            views: item.views,
            videoFile: item.videoFile
        })
```

- videoBlock.pug 에 a 태그를 추가한다. video를 클릭하면 videoDetail 페이지로 이동한다.
- home.pug 에서 id를 전달하도록 코드를 추가한다.
- 현재 logout을 누르면 logout 페이지로 이동한다. 이것을 home으로 redirection 되도록 수정한다.

```javascript
// userController.js
export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};
```

- userController 에서 redirect 코드를 추가하고 주석을 달았다. 그리고 logout.pug 파일은 삭제한다.
- upload 를 클릭하면 에러 메시지(Cannot GET /upload)를 볼 수 있다. '/videos/upload' 가 아닌 '/upload' 로 이동하고 있기 때문이다.

```pug
//- header.pug
a(href=`/videos${routes.upload}`) Upload
```

- 경로를 위와 같이 수정한다.
- upload 화면도 join, login과 마찬가지로 upload 요청에 응답할 수 있어야 한다.
- getUpload와 postUpload로 분리해야 한다.

```javascript
// videoController.js
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

// videoRouter.js
import { getUpload, postUpload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
```

- videoController 에서 getUpload와 postUpload를 분리하고, postUpload에서는 요청하는 정보를 가져온다. 그리고 videoDetail 페이지로 redirection 된다. 위에서 사용한 id(324393)는 가짜 데이터이다.
- videoRouter 에서도 get과 post를 분리한다.

```pug
//- upload.pug
input(type="file", id="file", name="file", required=true)
input(type="text", placeholder="Title", name="title", required=true)
textarea(placeholder="Description", name="description", required=true)

//- join.pug
input(type='text', name='name', placeholder='Full Name', required=true)
input(type='email', name='email', placeholder='Email', required=true)
input(type='password', name='password', placeholder='Password', required=true)
input(type='password', name='password2', placeholder='Verify Password', required=true)

//- login.pug
input(type='email', name='email', placeholder='Email', required=true)
input(type='password', name='password', placeholder='Password', required=true)
```

- 마지막으로 upload, join, login 에 required=true 를 추가한다.

## #3 MongoDB

### #3.0 MongoDB and Mongoose

- Database는 SQL과 NoSQL로 나뉘며, MongoDB는 NoSQL로 분류된다.
- MongoDB는 더 적은 규칙과 더 적은 절차로 작업이 가능한 Database이다.
- MongoDB Community Server 다운로드 후 설치한다.
- windowOS의 경우, 환경변수에 MongoDB bin 경로를 추가한다.

`mongod`

- 터미널에서 mongod 를 입력하여 정상적으로 설치되었는지 확인한다.

`mongo`

- mongo 를 입력하면 mongo 로 들어갈 수 있다.

- 이제 mongo를 javascript와 연결해야 한다.
- MongoDB는 C++이나 다른 언어로 만들어졌으므로, javascript를 MongoDB와 연결하려면 Adapter가 필요하다.
- 그리고 그것은 mongoosejs가 해줄 것이다.
- mongoosejs는 NodeJS를 위한 MongoDB Object Modeling 이다.

`npm install mongoose`

- mongoosejs를 설치한다.

### #3.1 Connecting to MongoDB

- database 관련 작업을 해보자.

`npm install dotenv`

- 먼저 'dotenv' 라는 것을 설치한다.
- dotenv 를 설치하는 이유는 가끔 어떤 부분을 숨겨놓고 싶을 수 있기 때문이다. dotenv 의 사용 예시는 다음에 설명하도록 한다.
- 이전에 만들었던 db.js의 가짜 데이터를 삭제한다.

```js
import mongoose from "mongoose"; // mongoose 를 import 한다.

mongoose.connect(
  "mongodb://localhost:27017/we-tube",
  // database 가 어디에 저장되어있는지 알려준다.
  // port는 터미널에 mongod 입력하면 확인할 수 있다. database 이름은 we-tube 로 정했다.
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
  // 새로운 버전의 mongoose는 connect 함수 두번째 인자로 configuration을 보낼 수 있다.
  // 위 설정은 mongoose 지원 중단 경고 관련 옵션으로 자세한 내용은
  // [Deprecation Warnings](https://mongoosejs.com/docs/deprecations.html) 참조하세요.
);

const db = mongoose.connection; // MongoDB 와의 연결을 db 로 저장한다.

const handleOpen = () => console.log(`✅ Connected to DB`);
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen); // once 는 한번만 실행되며, 여기서는 db에 처음 연결 시 handleOpen 함수를 실행한다.
db.on("error", handleError); // error 발생 시 handleError 함수를 실행한다.
```

- db.js에 mongodb에 연결하기 위한 mongoose 코드를 추가했다.

```js
// videoController.js
import { videos } from "../db"; // videoController에 import 되어있는 db를 삭제한다.

// init.js
import "./db"; // init.js에 db를 추가한다.
```

- 사용하지 않는 videoController의 db를 삭제하고 init에 import 한다.

## `6일차`

### #3.2 Configuring DotEnv

- dotenv를 구성하기 위해 먼저 .env 파일을 생성한다.

```js
MONGO_URL = "mongodb://localhost:27017/we-tube";
PORT = 4000;
```

- .env 파일에 숨기고 싶은 key를 넣어둔다.

```js
// db.js
import dotenv from "dotenv"; // dotenv를 import 한다.
dotenv.config(); // dotenv.config 함수로 .env 파일 안에 있는 정보를 불러올 수 있다.
// 모든 변수들을 process.env.key에 저장할 것이다.
mongoose.connect(
  process.env.MONGO_URL, // mongoose connection 대신 process.env.MONG_URL 을 사용한다.
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// init.js
import dotenv from "dotenv"; // init.js 에서도 db.js와 마찬가지로 dotenv를 import 한다.
dotenv.config();

const PORT = process.env.PORT || 4000;
```

- 그리고 .gitignore 파일에 .env를 반드시 추가해야 한다.

### #3.3 Video Model

- model을 만들기 위해선 MongoDB에 현재 프로젝트 파일들이 어떤 식으로 생겨야할지 알려줘야 한다.
- 예를 들어, '우리의 file들은 video라는 이름을 가질 것이고, 모든 video들은 string type을 가질 것이고, 그 string의 이름은 title일 것이다.' 와 같은 내용이다.
- 이런 것이 바로 model의 형태(schema)이다.
- models라는 폴더를 생성하고, Video.js 파일을 생성한다.

```js
// Video.js
import mongoose from "mongoose"; // mongoose 와 연결해준다.

const VideoSchema = new mongoose.Schema({
  // Schema를 정의한다.
  fileUrl: {
    // Video는 fileUrl을 가진다. Video는 서버에 저장하며, database에 Video를 저장하지는 않는다.
    type: String,
    required: "File URL is required" // required 가 충족되지 않으면 이 메시지를 보여준다.
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String, // 아무런 option 없다면 객체로 만들지 않아도 된다.
  views: {
    // 조회수 항목을 가진다.
    type: Number,
    default: 0 // 처음 Video가 생성되면 조회수는 0이다.
  },
  createdAt: {
    // 생성 일자 항목을 가진다.
    type: Date,
    default: Date.now // Date.now는 현재 날짜를 반환하는 함수이다.
  }
});

const model = mongoose.model("Video", VideoSchema); // schema를 이용해서 model을 만든다.
export default model;

// init.js
import "./models/Video";
// database와 연결은 되어있지만 database는 model이 있다는 것을 알지 못한다. 그래서 init.js에 추가해준다.
```

- schema는 model의 형태이고, model은 실제 data이다.
- schema에 대해 더 확인하고 싶다면 [mongoosejs.com](https://mongoosejs.com/docs/guide.html)에서 모든 option들을 확인할 수 있다.

### #3.4 Comment Model

- Comment model을 추가해보자.

```js
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Comment", VideoSchema); // video model에서 사용한 'model' 이라는 변수명을 동일하게 사용한 이유는
export default model; // 새로운 JS 파일로 작업을 하고 있고, 모듈을 사용하기 때문에 model을 default로 export 하고 나중에 그것을 Comment 또는 User로 가져올 것이므로 변수 이름이 같은 것은 중요하지 않기 때문이다.

// init.js
import "./models/Comment";
```

- Video model과 크게 다르지 않다.
- 여기서 문제는 한 쪽에서 video를 생성하고 다른 쪽에서 comment를 생성했을 때 둘을 어떻게 연관시키는가 이다.
- 두 가지 선택지가 있다. 모든 Comment ID들을 array로 Video에 집어 넣을 것인가, 혹은 Comment마다 그 comment가 연결되어 있는 Video ID를 넣을 것인가.

```js
// Comment에 Video ID를 넣는 방법
// Comment.js
const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  video: {
    type: mongoose.Schema.Types.ObjectId, // 모든 정보를 넣는 것이 아니라 ID만 넣는다.
    ref: "Video" // 그리고 그 정보는 Video를 참조한다.
  }
});

// Video에 Comment ID를 넣는 방법
// Video.js
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, // 모든 정보를 넣는 것이 아니라 ID만 넣는다.
      ref: "Comment" // 그리고 그 정보는 Comment를 참조한다.
    } // [1, 2, 4, 7] 이런 식으로 해당 video에 남긴 comment id가 저장된다.
  ]
});
```

- 이번 프로젝트에서는 Video에 Comment ID array를 넣는 방식을 사용한다.

### #3.5 Home Controller Finished

- 이렇게 만든 Model들을 어떻게 사용할 수 있을까?

```js
// videoController.js
import Video from "../models/Video";
```

- 먼저 videoController에 Video를 import 한다. 여기서 Video는 database의 element가 아니라 element를 받는 통로일 뿐이다.

```js
// videoController.js
export const home = async (req, res) => {
  // async 는 await 를 사용하기 위해 반드시 추가해야 한다.
  try {
    // 우리가 해야할 것을 try에 넣는다.
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    // error가 가면 error를 잡아서 catch 구문을 실행한다.
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
```

- home 함수에 async/await를 추가하여 database에 있는 모든 Video 목록을 가져오는 것을 기다리도록 했다.
- asyncs는 'JavaScript야, 이 함수의 특정 부분은 꼭 기다려야 해.' 라고 이야기하는 것과 같다.
- await는 다음 과정이 끝날 때까지 잠시 기다리라는 것이다.
- **하지만 await가 다음 과정이 '성공적'으로 끝날 때까지 기다리라는 것은 아니다.** error가 나더라도 끝난 것이며, render 부분을 실행할 것이다.
- 이를 막기 위해 try/catch를 사용한다.

## `7일차`

### #3.6 Uploading and Creating a Video

- videoController에 postUpload를 확인해보자.
- 먼저 업로드하려는 파일은 오직 video 파일만 가능해야 한다.

```pug
//- upload.pug
input(type="file", id="file", name="file", required=true, accept="video/*")
//- accept 속성을 추가하여 video만 업로드 가능하도록 한다.
```

- 그리고 우리가 원하는 것은 database에 저장할 것은 video 자체가 아니라 video의 location 이다.
- 파일을 upload 하고 url을 반환하는 middleware가 필요하다.
- 그것은 [Multer](https://github.com/expressjs/multer)라고 하는 middleware 이며, 매우 유명하고 많이 사용된다.

`npm install multer`

- multer를 설치한다.

```pug
//- upload.pug
form(action=`/videos${routes.upload}`, method="post", enctype="multipart/form-data")
//- enctype 을 추가한다. multer는 해당 인코딩 타입이 아닌 폼에서는 동작하지 않는다.
```

- upload.pug 에서 form의 enctype을 추가해준다.
- multer 설정 방법은 아래와 같다.

```js
// middlewares.js
import multer from "multer"; // multer를 import 한다.
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" }); // multerVideo 변수에 destination을 포함하여 multer 함수를 담는다.

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); // single은 하나의 파일만 업로드할 수 있는 것을 의미한다. single 안에는 파일의 이름을 넣어준다.

// upload.pug
input((type = "file"), (id = "file"), (name = "videoFile"), (required = true), (accept = "video/*"));
// upload.pug에서도 name을 'videoFile'로 동일하게 변경한다.
```

- 이제 router에 multer를 추가한다.

```js
// videoRouter.js
import { uploadVideo } from "../middlewares";

videoRouter.post(routes.upload, uploadVideo, postUpload);
```

- 이제 파일을 업로드하면 server에 있는 folder(videos/)에 업로드하고 postUpload 함수는 해당 파일에 url 방식으로 접근할 것이다.

```js
// videoController.js
export const postUpload = (req, res) => {
  const { body, file } = req; // req.file을 정의하고
  console.log(file); // console.log로 file을 확인해본다.
  // To Do: Upload and save video
  // res.redirect(routes.videoDetail(324393));    // redirect는 잠시 막고
  res.render("upload", { pageTitle: "Upload" }); // render만 하게 변경한다. 지금만 잠시 변경하는 것이다.
};
```

- 위와 같이 수정 후 페이지에서 upload를 해보면 터미널에서 file 내용을 확인할 수 있다.
- videos 폴더에 multer가 만든 파일도 추가되었다.

```
{ fieldname: 'videoFile',
  originalname: 'SampleVideo_1280x720_5mb.mp4',
  encoding: '7bit',
  mimetype: 'video/mp4',
  destination: 'videos/',
  filename: '40cfe9f2640dc43fdafd9a69c7deef08',
  path: 'videos\\40cfe9f2640dc43fdafd9a69c7deef08',
  size: 5253880
}
```

- 우리가 원한 것은 바로 'path' 이다. 다시 videoController 코드를 수정하고, path를 사용해보자.

```js
// videoController.js
export const postUpload = async (req, res) => {
  // async를 추가한다.
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    // 새 video 생성이 완료될 때까지 기다리도록 await를 추가한다.
    fileUrl: path, // fileUrl에 path를 넣어준다.
    title, // title과 description은 변수명이 동일하다.
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id)); // 이제 실제 video id를 받아서 redirect한다.
};
```

- async/await를 추가하여 newVideo에 새로운 파일을 추가했다. 그리고 videoDetail로 실제 새로운 video id를 받아서 redirect 했다.
- 드디어 NodeJS, Multer, MongoDB를 이용해서 file을 생성했다.

### #3.7 Uploading and Creating a Video part Two

- 업로드 폴더를 수정한다. 기존 videos 폴더는 삭제한다.

```js
// middlewares.js
const multerVideo = multer({ dest: "uploads/videos/" });
```

```pug
.videos
    each item in videos
        +videoBlock({
            id: item.id,
            title: item.title,
            views: item.views,
            videoFile: item.fileUrl     // videoFile 을 fileUrl 로 수정한다.
        })
```

- home.pug 에서 위와 같이 수정한다.
- 위에서 업로드 폴더를 수정했지만, 기존에 업로드했던 video가 database에 저장되어 있고 이 video는 잘못된 url을 가지고 있다.
- 그러므로 db에서 해당 video를 삭제해야 한다.

`mongo`

- terminal에 mongo를 입력하여 mongo comment 입력화면으로 들어간다.

```mongo
// mongo
> use we-tube               // we-tube db로 이동한다.
switched to db we-tube
> show collections          // collections은 models 같은 것이다. videos 라는 collections가 존재한다.
videos
> db.videos.remove({})      // db에 있는 videos collections를 삭제한다.
WriteResult({ "nRemoved" : 1 })     // 1개의 collection을 삭제했다고 결과가 나온다.
> exit
bye
```

- 위와 같은 방법으로 db에 접근하여 기존에 저장되어 있던 videos model을 삭제했다.
- 이제 새롭게 video를 업로드해보면, 하나의 error가 발생한다. uploads를 위한 router가 없기 때문이다.

```js
app.use("/uploads", express.static("uploads")); // /uploads 에 대한 router를 추가한다.
// static은 directory에서 file을 보내주는 middleware다. 즉, '/uploads'로 가면 'uploads' 라는 directory 안으로 들어간다. 주어진 directory에서 file을 전달하는 middleware 함수이므로, 이 경우 어떤 종류의 controller나 view 같은 건 확인하지 않는다.
```

- /uploads router를 추가하면 이제 home 화면에서 video가 제대로 보인다.
- 하지만 이것은 좋은 예시는 아니다. user의 파일을 개인 server에 저장하는 것은 좋은 것은 아니다.
- 보통 웹사이트에는 server를 만들고 새로운 version이 나오면 새로운 server로 redirect만 시키는 것이다.
- we-tube 프로젝트에서도 최종적으로는 그렇게 수정할 것이다. 지금처럼 하는 것은 시범적으로 하는 것임을 명심해야 한다.
- 마지막으로 uploads 폴더는 .gitignore에 추가해준다.

## `8일차`

### #3.8 Getting Video by ID

- Video의 ID를 받아와야 한다.

```js
// videoController.js
export const videoDetail = (req, res) => {
  console.log(req.params);
  res.render("videoDetail", { pageTitle: "Video Detail" });
};
```

- req.params 를 console.log로 찍어보면 id를 확인할 수 있다.
- 하지만 이것은 이름이 id일 때만 성립한다. 우리의 routes.js를 확인해보자.

```js
// routes.js
const VIDEO_DETAIL = "/:id"; // :id를 가지고 있으며 :id는 변수를 받는다.
```

- controller에서 어떤 data를 가지고 있다는 것을 표현하고 싶다면 :id와 같이 콜론(:)과 이름을 넣으면 된다.
- 이것이 url로 부터 정보를 가져오는 유일한 방법이다.

```js
// videoController.js
export const videoDetail = async (req, res) => {
  // async 를 추가한다.
  const {
    params: { id } // params로부터 id를 가져온다.
  } = req;
  try {
    const video = await Video.findById(id); // id로 검색해서 video 변수에 담는다.
    res.render("videoDetail", { pageTitle: "Video Detail" });
  } catch (error) {
    res.redirect(routes.home); // error 발생 시 home으로 redirection 한다.
  }
};
```

- 이전에 home controller나 postUpload controller에 작업했던 내용과 비슷하다.
- videoDetail에서는 findById 함수를 사용했을 뿐이다.
- 이제 video 변수를 템플릿에 전달하고, videoDetail.pug 를 수정해보자.

```js
// videoController.js
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video }); // 템플릿에 video를 전달한다.
  } catch (error) {
    res.redirect(routes.home);
  }
};
```

```pug
//- videoDetail.pug
block content
    .video__player
        video(src=`/${video.fileUrl}`)
        //- src 를 위와 같이(`/${}`) 하는 이유는 파일이 서버에 있기 때문이다.
        //- 우리는 서버에 파일이 있지 않길 원하기 때문에 나중에 이 부분은 아마존에 맡길 것이다.
    .video__info
        h5.video__title=video.title
        span.video__views=video.views
        p.video__description=video.description
```

- videoDetail.pug 파일에 비디오 상세 페이지에서 표시되어야 할 내용을 받아서 출력해줬다.
- 이제 video를 수정하는 버튼을 만든다.

```pug
//- videoDetail.pug
block content
    .video__player
        video(src=`/${video.fileUrl}`)
    .video__info
        a(href=routes.editVideo) Edit video
        //- video 수정 버튼을 추가한다.
        h5.video__title=video.title
        span.video__views=video.views
        p.video__description=video.description
```

- edit 버튼은 일단 모든 사용자가 사용할 수 있게 만들지만, 나중에는 video를 생성한 사람만 보이도록 수정할 것이다.

### #3.9 Editing a Video

- 이전에 userDetial과 videoDetail에서 했던 것처럼 editVideo도 id가 있을 경우, url에 id가 보여지도록 routes.js 를 수정한다.

```js
// routes.js
const routes = {
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    editVideo: id => {
        if(id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

// videoRouter.js
videoRouter.get(routes.editVideo(), editVideo);     // editVideo를 함수로 바꿔준다.
```

```pug
//- videoDetail.pug
.video__info
    a(href=routes.editVideo(video.id)) Edit video
    //- editVideo를 함수로 바꾸고 video.id 를 넣어준다.
```

- routes.js를 수정하고, videoRouter.js와 videoDetail.js 의 editVideo를 함수로 변경했다.
- edit 을 할 때 video 파일을 바꾸는 것은 원치 않으므로 edit 화면에는 video 파일을 배치하지 않았다.
- upload에서와 마찬가지로 edit도 get과 post로 분리해야 한다.

```js
// videoController.js
export const getEditVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const postEditVideo = (req, res) => {};

// videoRouter.js
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
```

- video를 edit할 때 edit 화면에서도 url에서 id정보를 받아야 한다.
- 또한 video를 edit할 때 제목이나 설명 입력칸이 채워져 있어야 한다.

```js
// videoController.js
export const getEditVideo = async (req, res) => {
  // 뭔가를 채워넣는 작업이므로 getEditVideo에 작성한다.
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
```

- getEditVideo controller 내용은 videoDetail controller 내용과 거의 비슷하다.

```pug
//- editVideo.pug
block content
    .form-container
        form(action=routes.editVideo(video.id), method="post")
            input(type="text", placeholder="Title", name="title", value=video.title)
            textarea(name="description", placeholder="Description")=video.description
            //- textarea 태그에는 value가 없으므로 위와 같이 값을 넣어준다.
            input(type="submit", value="Update Video")
        a.form-container__link.form-container__link--delete(href=`/videos${routes.deleteVideo}`) Delete Video
```

- editVideo를 함수로 바꾸고, text input에 value를 넣고, textarea에 description을 넣어주었다.
- 이제 실질적 업데이트를 위한 작업을 해야한다.

```js
// videoController.js
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description }); // id, title, description을 찾아서 바뀐 값으로 업데이트한다.
    res.redirect(routes.videoDetail(id)); // 업데이트가 완료되면 videoDetail 페이지로 redirection 된다.
  } catch (error) {
    res.redirect(routes.home);
  }
};
```

- findOneAndUpdate 함수에서 id에 접근하고자 할 때는 {id} 가 아닌 {\_id: id} 와 같이 넣어주어야 한다.
- findById 함수를 사용할 때 findById(id)로 사용할 수 있었던 것은 findById 함수가 알아서 처리해주기 때문이다.
- findById(id) 는 findOne({\_id: id}) 와 거의 동일하며, \_id 로 쿼리하고자 한다면 findOne() 대신 findById()를 사용하라고 [mongoosejs.com](https://mongoosejs.com/docs/api.html#model_Model.findById) 에서 권장하고 있다.
- 참고로 \_id 속성은 MongoDB에서 자동으로 넣어주는 고유값이다.

## `9일차`

### #3.10 Deleting a Video

- video를 삭제하는 데에는 get만 있으면 된다.

```js
// videoController.js
export const deleteVideo = async (req, res) => {
    const {
        params: {id}        // editVideo에서와 마찬가지로 url로부터 id를 받아온다.
    } = req;
    try {
        await Video.findOneAndRemove({_id: id});    // 받아온 id를 가진 video를 찾고 삭제한다.
    } catch(error) {}
    res.redirect(routes.home)   // 삭제가 성공하든 실패하든 Home 으로 이동한다.
}

// routes.js
const routes = {
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    deleteVideo: (id) => {      // deleteVideo 도 url에 id가 표시되도록 수정한다.
        if(id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    }
};

// videoRouter.js
videoRouter.get(routes.deleteVideo(), deleteVideo); // deleteVideo를 함수로 바꿔준다.
```

- videoController에서 deleteVideo를 수정하고, routes와 videoRouter도 수정했다.
- 기존에 videoDetail이나 editVideo에서 했던 작업과 비슷하다.

```pug
//- editVideo.pug
a.form-container__link.form-container__link--delete(href=routes.deleteVideo(video.id)) Delete Video
//- href 부분을 수정한다.
```

- editVideo.pug에서 href 부분도 수정한다.
- 그리고 videoDetail 페이지에 표시되는 타이틀을 video title로 바꿔주자. 'Video Detail' 이라고 표시되는 것보다 그게 더 낫다.

```js
// videoController.js
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video }); // video.title로 수정한다.
  } catch (error) {
    res.redirect(routes.home);
  }
};
```

### #3.11 Installing ESLint

- wetube 페이지에서 2개 이상의 video를 업로드해보자.
- home 화면에서 더 예전에 업로드한 video가 상단에 보인다. 이것을 수정할 것이다.

```js
// videoController.js
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }); // sort 함수로 _id 정렬 순서를 바꿔줬다.
    res.render("home", { pageTitle: "Home", videos }); // '-1'은 순서를 바꾸겠다는 약속이다.
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
```

- sort 함수로 정렬 순서를 바꿨다.
- 이번에는 wetube 페이지에서 아무 것이나 검색해보자. video is not defined 에러가 보일 것이다.
- search view가 video를 가지고 있지만 search controller에 video가 정의되지 않았기 때문이다.
- 이와 관련해서 ESLint를 소개한다. Linter는 코드 상에서 뭔가가 틀렸을 때 알려준다.

`npm install -g eslint`

- eslint를 global로 설치한다.

`eslint --init`

- 설치가 되면 터미널에 위와 같이 입력한다.
- 여러가지 물어보는데, 가장 많이 사용하는 스타일 가이드 선택, Airbnb 스타일 선택, react use no, config file format javascript 선택을 한다.
- 마지막으로 npm으로 설치하겠냐는 질문에 y를 입력하면 설치가 진행된다.
- 설치 완료 후 열려있는 js 파일을 닫고 다시 열어보면 eslint가 작동하는 것을 볼 수 있다.
- 만약 windows OS를 사용한다면, 수많은 'linebreak-style' 에러를 확인할 수 있을 것이다.
- 그것은 unix OS와 windows OS 간에 linebreak에 대한 차이점으로 인해 발생하며, windows OS의 경우, 아래와 같이 eslintrc.js에 rules를 추가해야 한다.

```js
module.exports = {
  extends: "airbnb-base",
  rules: {
    "linebreak-style": [2, "windows"] // windows OS configuration
  }
};
```

- 위와 같이 설정 후 videoController.js 파일을 다시 열어서 확인하면 'linebreak-style' 에러가 사라진 것을 알 수 있다.
- 하지만 아직도 코딩 스타일 관련 에러가 보일 것이다. (ex. Strings must use singlequote.[quotes])
- 이런 코딩 스타일에 대한 rule은 보고 싶지 않으므로 추가적으로 아래와 같은 작업을 진행한다.

`npm install prettier -D`

`npm install eslint-config-prettier -D`

`npm install eslint-plugin-prettier -D`

- 모두 설치한 후 .eslintrc.js 에 extends를 추가한다.

```js
module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"], // plugin을 추가한다.
  rules: {
    "linebreak-style": [2, "windows"],
    "no-console": "off" // 동의하지 않는 규칙은 이런 식으로 설정하면 eslint가 체크하지 않는다.
  }
};
```

- 위에서 no-console은 console.log 관련 경고를 없애주는 설정이다.
- plugin을 추가하고 videoController.js 를 다시 확인하면 코딩 스타일 관련 에러가 사라진 것을 확인할 수 있다.

```json
// settings.json
  "editor.tabSize": 2,  // tabSize를 2로 수정했다.
```

- 추가적으로 tabsize를 4에서 2로 바꾸고, 기존 js 파일에 적용된 4 size tabsize를 모두 2로 수정했다.

### #3.12 Searching Videos

- #3.11 첫 부분에서 설명한 것과 같은 이유로 search controller를 수정해야 한다. 그리고 여기서 정규표현식을 사용하려고 한다.
- 정규표현식(regular expression)은 string으로부터 무언가를 가져오는 것이다.
- 정규표현식은 [regular expressions 101](https://regex101.com/)에서 다양한 정보를 확인할 수 있다.
- 이제 videoController.js 로 돌아와서 search controller를 확인하자.

```js
// videoController.js
export const search = async (req, res) => {
  // async를 추가한다.
  const {
    query: { term: searchingBy }
  } = req;
  let videos = []; // videos를 let으로 선언한다.
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
      // title: searchingBy 라고 사용하면 찾고자 하는 단어와 완전히 일치하는 것만 찾는다.
      // 정규표현식으로 찾으면 찾고자 하는 단어가 포함된 모든 것을 찾게 된다.
      // $regex: searchingBy 는 MongoDB에서 제공하는 정규표현식 기능이다.
      // $option 은 $regex와 함께 사용할 수 있는 option 기능이다.
      // "i" 는 insensitive(덜 민감한)하다는 것을 의미한다. 대소문자를 구분하지 않는다.
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
```

> 참조 문서: [MongoDB \$regex](https://docs.mongodb.com/manual/reference/operator/query/regex/)

- 위와 같이 search controller를 수정하고, 페이지에서 특정 video 타이틀의 일부 단어만으로 검색하면 그 단어가 포함된 video가 검색되는 것을 볼 수 있다.
- videos를 let으로 선언한 이유는, 선언하면서 빈 배열의 videos를 만들었고, 어떤 video도 찾지 못한다면 빈 배열로 render 될 것이다. 하지만 video를 찾는다면 videos는 재할당된다. 재할당되는 변수는 const가 아닌 let으로 선언해야 한다.

```pug
//- search.pug
.search__videos
    if videos.length === 0
        h5 No Videos Found
    each item in videos
            +videoBlock({
            title: item.title,
            views: item.views,
            videoFile: item.videoFile
            })
```

- video를 찾지 못했을 때 No Videos Found 문구를 표시하도록 수정한다.
- video가 검색된 화면에서 videoDetail 페이지로 이동하는 url을 확인해보면 url이 잘못되어 있다는 것을 알 수 있다.(/:id 로 표시된다.)
- search.pug 에서 videoBlock에 id를 할당하지 않았기 때문이다.

```pug
//- search.pug
.search__videos
    if videos.length === 0
        h5 No Videos Found
    each item in videos
            +videoBlock({
            title: item.title,
            views: item.views,
            videoFile: item.videoFile,
            id: item.id     // id를 받아온다.
            })
```

- 마지막으로 videoDetail 페이지에 comments를 추가한다. 현재는 댓글이 없으니 댓글의 수만 보여준다.

```pug
//- videoDetail.pug
.video__comments
    if video.comments.length === 1
        span.video__comment-number 1 comment
    else
        span.video__comment-number #{video.comments.length} comments
```

- comment를 추가했다. comments.length 가 1인 경우만 따로 구분한 것은 1 comment's' 를 막기 위해서 이다.

## `10일차`

## #4 Webpack

### #4.0 Introduction to Webpack

- webpack은 module bundler 이다. 다양한 종류의 코드 파일을 webpack에게 전달하면, webpack은 그것들을 완전히 호환되는 static 파일들로 변환해준다.

`npm install webpack webpack-cli`

- webpack과 webpack-cli를 설치한다.
- webpack은 webpack을 사용하기 위함이고, webpack-cli는 터미널에서 webpack을 사용할 수 있게 해준다.
- 그리고 'webpack.config.js' 라는 파일을 하나 생성한다.

```json
"scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2",
    "dev:assets": "webpack"
},
```

- 다음으로 package.json 에서 scripts 의 'start' 명령어를 바꿔준다.
- 이제 npm start 는 사용하지 않을 것이며 npm run dev:assets 와 npm run dev:server 를 각자 다른 콘솔에서 실행시켜야 한다.
- dev:assets 명령어를 실행하면 webpack을 불러오고 webpack은 자동적으로 webpack.config.js 라는 이름의 파일을 찾는다.
- webpack.config.js 파일 안에서 명심해야 될 사항은 server 코드와는 연관시키지 않는다는 점이다. 100% client code 이다.

```js
// main.js
import "../scss/styles.scss";
```

```scss
// styles.scss
body {
  background-color: red;
}
```

- assets 폴더를 생성하고 그 안에 main.js 파일을 생성한다. 또한 scss 폴더를 생성하고 그 안에 styles.scss 파일을 생성한다.

```js
// webpack.config.js
const path = require("path"); // nodeJS에는 파일과 디렉토리(경로)를 absolute로 만들어주는 방법이 있다.
// 다시 말해, 컴퓨터나 서버에서의 전체 경로를 갖게 되는 것이다.
// 그것은 path 라는 것으로 할 수 있으며, path는 nodeJS에 기본으로 깔려있는 패키지다.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // __dirname 은 현재의 프로젝트 디렉토리 이름이다.
const OUTPUT_DIR = path.join(__dirname, "static"); // 어디서든 접근 가능한 nodeJS 전역 변수이다.

const config = {
  entry: ENTRY_FILE, // entry 는 파일들이 어디서 왔는가 이고,
  output: {
    // output 은 변환된 파일들을 어디에 넣을 것인가 이다.
    path: OUTPUT_DIR,
    filename: "[name].js"
  }
};

module.exports = config;
```

- webpack.config.js 에 내용을 입력한다.
- 여기서는 우리가 이전에 사용했던 babel-node를 쓸 수 없으므로, es6가 아닌 옛날 자바스크립트를 사용해야 한다.

`npm run dev:assets`

- 이제 터미널에서 webpack을 실행시킨다.
- 하지만 scss 파일은 빌드 실패할 것이다. scss 파일 형식을 이해하지 못했기 때문이다. sass loader 가 필요하다.

### #4.1 Styles with Webpack part One

- webpack 에는 'development' 와 'production' 이라는 mode 옵션이 있다.
- 'production' mode로 빌드하게 되면 코드가 압축되며, 개발하는 중에는 디버그를 위해 'development' mode로 빌드하는 것이 좋다.

```json
// package.json
"scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2",
    "dev:assets": "WEBPACK_ENV=development webpack",    // WEBPACK_ENV 에 development 를 설정했다.
    "build:assets": "WEBPACK_ENV=production webpack"    // WEBPACK_ENV 에 production 을 설정했다.
},
```

- webpack 빌드 시 mode 를 구분하기 위해 package.json 파일의 scripts 부분을 수정한다.

```js
// webpack.config.js
const path = require("path");

const MODE = process.env.WEBPACK_ENV; // 위 scripts 에서 생성한 환경변수를 MODE 변수에 넣는다.

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  mode: MODE, // mode 를 설정한다.
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  }
};

module.exports = config;
```

- webpack.config.js 에서 환경변수를 사용하여 mode를 설정한다.

`npm run dev:assets`

- 다시 실행하면, "'WEBPACK_ENV'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
  배치 파일이 아닙니다." 라는 오류를 볼 수 있을 것이다.(발생하지 않을 수도 있다.)

`npm install cross-env`

- cross-env 설치하고 아래와 같이 package.json 파일에 cross-env 명령어를 넣어준다.

```json
"scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2",
    "dev:assets": "cross-env WEBPACK_ENV=development webpack",
    "build:assets": "cross-env WEBPACK_ENV=production webpack"
},
```

- 이후 npm run dev:assets 를 실행하면 정상적으로 빌드된다.
- 이제 webpack 에게 rules 라는 것을 줄 것이다. webpack은 module을 만났을 때 이 rules 를 따르게 된다.

```js
// webpack.config.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const config = {
  mode: MODE,
  module: {         // module 을 만나면 다음과 같은 rules 를 따른다.
    rules: [
      {
        test: /\.(scss)$/,              // 파일을 만나면 그 파일이 .scss 인지 확인한다.
        use:
      }
    ]
  },
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  }
};
```

- config 파일에 module, rules 를 추가한다. 그리고 scss 파일을 만났을 때 처리할 내용을 use 에 넣을 것이다.
- scss 파일을 만났을 때 할 일은, 먼저 scss 를 css 로 바꾸고, 전체 텍스트 중 그 css의 텍스트를 추출하고, 그 추출된 css를 분리된 하나의 파일로 만드는 것이다.
- 그러기 위해 extract-text-webpack-plugin 을 설치한다.

`npm install extract-text-webpack-plugin@next`

- @next 는 최신 버전을 설치하라는 것이다. webpack 4 이상과 호환되어야 하기 때문에 최신 버전을 설치한다.

```js
const ExtractCSS = require("extract-text-webpack-plugin");  // extract-text-webpack-plugin을 불러온다.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([           // 4. css 코드를 별도의 css 파일로 분리시킨다.
                    {
                        loader: "css-loader"        // 3. css 텍스트를 추출한다.
                    },
                    {
                        loader: "postcss-loader"    // 2. css 호환성을 부여한다.
                    },
                    {
                        loader: "sass-loader"       // 1. sass 를 css 로 바꾼다.
                    }
                ])
            }
        ]
    },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

- webpack은 loader를 사용할 때 코드 아래쪽을 먼저 시작해서 위쪽으로 실행한다.
- loader에 대한 자세한 내용은 #4.2 에서 설명한다.

### #4.2 Styles with Webpack part Two

이전 장에서 사용한 loader와 plugin에 대해 간단히 설명한다.

`sass-loader`

- Sass 혹은 scss 를 받아서 일반 CSS 파일로 바꿔주는 loader 이다.

`postcss-loader`

- CSS를 받아서, 우리가 이 loader 에게 주는 어떤 plugin을 가지고 CSS를 변환한다.
- 예를 들어, IE 브라우저와 호환되게 만든다든지, prefix(접두사)부터 잡다한 것들까지 처리해준다.

`css-loader`

- webpack이 CSS를 이해할 수 있게 한다.

`extract-text-webpack-plugin`

- 최종적으로 CSS 내용이 불러와지면, 해당 CSS 텍스트 부분만 추출해서 어딘가로 보낸다.

---

`npm install css-loader postcss-loader sass-loader`

- 이제 loader 들을 설치한다.

* 그리고 postcss-loader 를 쓰기위해 우리가 필요한 plugin을 설치해야 한다.
* postcss 는 엄청나게 많은 도구들이 있다.
  > 참조: [postCSS](https://postcss.org/)
* 우리는 autoprefixer 라는 plugin을 사용할 것이다. autoprefixer 는 옵션에 따라 브라우저와 자동으로 호환되게 해준다.
* autoprefixer plugin에도 사용할 수 있는 옵션이 매우 많다.
  > 참조: [Autoprefixer의 browserlist](https://github.com/browserslist/browserslist)
* 우리는 cover 99.5% 옵션을 사용한다.
* **Autoprefixer는 크로스브라우징 이슈에 매우 좋은 해결책이 될 수 있을 것 같으므로 꼭 기억해두자!**

```js
// webpack.config.js
const autoprefixer = require("autoprefixer");   // postcss-loader의 autoprefixer 플러그인을 불러온다.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })]; // 시중에 있는 브라우저의 99.5%와 호환되게 해주는 옵션이다.
              }
            }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]   // extract-text-webpack-plugin 이 styles.css 라는 결과 파일을 생성한다.
};

module.exports = config;
```

- 위와 같이 autoprefixer 사용을 위한 코드를 추가한다.

`npm install node-sass`

- 그리고 sass를 nodeJS 환경에서 사용하기 위해 node-sass 패키지를 설치한다.

- 이제 npm run dev:assets 을 실행시켜보면 정상적으로 빌드가 되는 것을 확인할 수 있다.
- static 폴더가 생성됐고 안에는 main.js 와 styles.css 파일이 생성되었다.
- scss 파일이 제대로 css로 변환이 되는지 다시 한번 확인해보자.

```scss
// _varibales.scss
$bgColor: red;

// styles.scss
@import "./config/variables";

body {
  background-color: $bgColor;
}
```

- scss 폴더 하위에 config 폴더를 생성하고 그 안에 \_variables.scss 파일을 만들었다.
- 다시 빌드하면 아래와 같은 styles.css 파일이 만들어진 것을 확인할 수 있다.

```css
body {
  background-color: red;
}
```

## `11일차`

### #4.3 ES6 with Webpack

- 이번엔 ES6 를 webpack에게 이해시켜보자.

`npm install babel-loader`

- babel-loader를 설치한다.

```js
// webpack.config.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

- rules에 babel-loader를 추가한다.
- 이제 webpack은 es6 코드를 이해한다. 물론 webpack 실행 후 static 파일의 main.js를 보면 차이점을 알기는 어렵다.

- 참고로 매번 npm run dev:assets 를 입력해서 webpack을 실행하는 것은 조금 귀찮으므로, 파일이 수정되면 자동으로 재실행되도록 설정한다.

```json
// package.json
"scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2",
    "dev:assets": "cross-env WEBPACK_ENV=development webpack -w",   // -w 명령을 추가한다.
    "build:assets": "cross-env WEBPACK_ENV=production webpack"
  },
```

- -w 를 추가하면 watch 모드가 실행되고, 이후에는 파일이 저장될 때마다 자동으로 webpack이 재실행된다.

- wetube 페이지에서 static 파일을 사용하기 위해 main.pug 파일을 수정한다.

```pug
//- main.pug
doctype html
html
  head
    link(rel="stylesheet", href="https://use.fontawesome.com/releases/v5.6.3/css/all.css", integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin="anonymous")
    title #{pageTitle} | #{siteName}
    link(rel="stylesheet", href="/static/styles.css")
    //- styles.css 파일을 불러온다.
  body
    include ../partials/header
    main
          block content
    include ../partials/footer
    script(src="/static/main.js")
    //- main.js 파일을 불러온다.
```

- styles.css와 main.js 파일을 불러왔다.

```js
// app.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));       // /static router를 추가한다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

- /static route가 없으므로 추가한다.
- /static router를 추가하지 않으면 static 파일을 불러올 수 없다.

`npm run dev:server`

`npm run dev:assets`

- 두 개의 터미널에서 서버와 webpack을 실행시키고 wetube 페이지를 확인하면 배경색이 빨간색으로 변경된 것을 확인할 수 있다.
- 파일들이 잘 연결된 것이다.
- 하지만 개발자도구의 console창을 확인하면 'regeneratorRuntime is not defined' 에러가 발생한 것을 볼 수 있다.
- 이 에러가 발생하는 이유는 크롬 브라우저가 async 함수를 어떻게 처리하는지 모르기 때문이다.
- babel 그 자체로는 es6의 새로운 객체와 메소드를 사용할 수 없다. es6에서 처음 생겼기 때문에 구형 자바스크립트에는 그에 상응하는 코드가 없다.
- 그래서 babel-polyfill을 설치해야 한다.

`npm install @babel/polyfill`

- babel-polyfill을 설치한다.

```js
// webpack.config.js
entry: ["@babel/polyfill", ENTRY_FILE],     // entry에 babel-polyfill을 추가한다.
```

- entry에 babel-polyfill을 추가하고, 다시 wetube 페이지에서 console 창을 확인하면 에러가 없어진다.
- 마지막으로 .gitignore에 static을 추가한다.

## #5 Styling

### #5.0 SCSS and Marking the Header

```scss
// _variables.scss
$red: #ea232c;
$dark-red: #bb2f2a;
$grey: #f5f5f5;
$black: #444444;
$dark-grey: #e7e7e7;
```

- youtube용 컬러 코드를 넣어준다.
- scss/config 폴더에 reset.scss 파일을 추가하고 내용도 추가한다.

```scss
// main.scss
html,
body {
  height: 100%;
}
body {
  background-color: $grey;
  color: $black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  font-size: 14px;
}

main {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 70vh; // min-height를 지정한 것은 footer가 페이지 중간쯤 위치하는 일을 방지하기 위해서이다.
}
```

- scss 폴더에 main.scss 파일을 생성하고 내용을 추가한다.

```scss
// styles.scss
@import "config/variables"; // 실제 파일명은 _varibales.scss 이다.
@import "config/reset.scss";
@import "main.scss";
```

- styles.scss 에는 scss 파일을 모두 import 했다.
- import에는 표시되지 않지만 _variables.scss 에만 언더바( _ )를 붙인 이유는 오직 sass 파일에만 붙이는 용도로 사용하기 때문이다.
- 그렇기 때문에 _variables.scss 는 컴파일이 될 필요가 없으며, 언더바( _ )를 붙인 외부 파일은 컴파일 대상에서 제외가 되는 것이다.
- header 스타일링을 하기 전에 몇 가지 폴더와 파일을 만들자.

`/assets/scss/pages/home.scss`

- pages 폴더에 home.scss 파일을 생성한다.

`/assets/scss/partials/header.scss`

- partials 폴더에 header.scss 파일을 생성한다.

```scss
// styles.scss
@import "partials/header.scss"; // header.scss 도 import 한다.
```

- styles.scss 에 header.scss 파일도 import 한다.
- 이제 header 를 꾸며준다.

```scss
// header.scss
.header {
  background-color: $red;
  margin-bottom: 50px;
  .header__wrapper {
    padding: 5px 0px;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    .header__column {
      i {
        color: white;
        font-size: 40px;
      }
      &:nth-child(2) {
        width: 100%;
        justify-self: center;
      }
      &:last-child {
        justify-self: end;
      }
      ul {
        display: flex;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        li:not(:last-child) {
          margin-right: 15px;
        }
      }
      form {
        width: 100%;
        input {
          padding: 7px 10px;
          width: 100%;
          border-radius: 5px;
          font-size: 14px;
          color: $black;
          font-weight: 600;
          &::placeholder {
            font-weight: 300;
            color: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
}
```

## `12일차`

### #5.1 Footer and Login / Join

- footer와 Login / Join 의 form 을 작업해보자.

```js
// middlewares.js
res.locals.user = {
  isAuthenticated: false, // false로 변경한다.
  id: 1
};
```

- 먼저 middlewares.js 에서 페이지 상태를 login이 안된 상태로 변경한다.

`/assets/scss/partials/footer.scss`

- partials 폴더에 footer.scss 파일을 생성한다.

```scss
// styles.scss
@import "partials/footer.scss";
```

- styles.scss 에 footer.scss 파일도 import 한다.
- footer.scss 코드는 아래와 같다.

```scss
// footer.scss
.footer {
  margin: 50px 0;
  padding-top: 50px;
  border-top: 3px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer__icon {
    color: rgba(0, 0, 0, 0.2);
    font-size: 40px;
    margin-bottom: 20px;
  }

  .footer__text {
    color: rgba(0, 0, 0, 0.2);
    font-weight: 800;
    text-transform: uppercase;
  }
}
```

- 참고로 현재 nodemon 은 scss를 저장할 때마다 서버를 재시작한다.
- scss를 저장할 때마다 서버를 재시작할 필요는 없으므로 이를 무시하도록 설정한다.

```json
// pakage.json
"dev:server": "nodemon --exec babel-node init.js --delay 2 --ignore 'scss'",
// --ignore 'scss' 를 추가한다.
```

`/assets/scss/partials/form.scss`

- partials 폴더에 form.scss 파일을 생성한다.

```scss
// styles.scss
@import "partials/form.scss";
```

- styles.scss 에 form.scss 파일을 import 한다.
- form.scss 코드는 아래와 같다.

```scss
// form.scss
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    max-width: 320px;
    margin-bottom: 50px;

    input {
      display: block;
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }

    input[type="submit"] {
      background-color: #3498db;
      color: white;
    }
  }
}
```

`/assets/scss/partials/socialLogin.scss`

- partials 폴더에 socialLogin.scss 파일을 생성한다.

```scss
// styles.scss
@import "partials/socialLogin.scss";
```

- styles.scss 에 socialLogin.scss 파일을 import 한다.
- socialLogin.scss 코드는 아래와 같다.

```scss
// socialLogin.scss
.social-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button {
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    span {
      margin-right: 10px;
      font-size: 20px;
    }
  }

  .social-login--github {
    background-color: $black;
    color: white;
  }

  .social-login--facebook {
    background-color: #3a5998;
    color: white;
  }
}
```

## `13일차`

### #5.2 Everything else!

- videoDetail 과 home 화면을 작업해보자.

## `14일차`

### #6.0 Introduction to PassportJS

- 이제 인증(authentication) 기능을 위해 Passport를 사용한다.
- Passport는 미들웨이이며, 사용자 인증을 구현시켜준다.
- 브라우저 상에 쿠키(cookies)를 설정해주면 그 쿠키를 통해서 사용자 ID 등을 알 수 있고, Passport가 브라우저에서 자동으로 쿠키를 가져와서 (인증이 완료된) User object를 controller에 넘겨준다.
- Passport는 쿠키를 생성하고, 브라우저에 저장시켜주고, 유저에게 해당 쿠키를 준다.
- Passport를 통합(integration)시키는 것은 아래와 같이 하면 된다.

```js
app.post(
  "/login", // '/login'으로 post를 시키면
  passport.authenticate("local"), // passport.authenticate를 호출한다.
  // "local"은 Strategy(전략)라고 불리며, 'facebook', 'github' 같은 Strategy를 쓸 수 있다.
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect("/user/" + req.user.username); // passport는 멋지게도, 직접 req.user를 만들어준다. 이것이 바로 현재 로그인한 사용자가 된다.
  }
);
```

- 또 하나의 멋진 모듈이 있다. passport-local-mongoose 라는 사용자 기능(user functionality)을 추가하는 모듈이다.
- 이 모듈은 기본적인 사용자 인증에 필요한 것들을 만들어준다.
- 다음 강의로 넘어가기 전에 models 폴더에 User.js 파일을 생성하자.

## `15일차`

### #6.1 Local Authentication with Passport part One

- 이제 User 라는 model을 생성할 것이다. User 에는 이름이나 이메일같은 몇 가지 field를 가질 것이다.
- 먼저 mongoose 를 import 한다.

```js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // UserSchema를 생성한다.
  name: String, // 이름
  email: String, // 이메일
  avatarUrl: String, // avatar URL은 fileUrl과 똑같이 동작한다.
  facebookId: Number, // fascebook 계정 ID
  githubId: Number // github 계정 ID
});

const model = mongoose.model("User", UserSchema); // model 이름은 User이고 UserSchema로부터 온다.

export default model;
```

- UserSchema에 소셜 계정을 위한 ID를 저장한다. 페이스북 계정으로 로그인하면 페이스북 ID를 저장하고, github 계정으로 로그인하면 github ID를 저장한다.
- 그리고 나중에는 이 모든 것을 하나의 사용자로 묶어줄 수 있게 된다.
- 예를 들어, 이메일을 써서 로그인하려고 하는데, 알고 보니 github 계정으로도 가입되어 있는 것이 확인되면 이를 알려준다.
- 또한 이메일을 입력했는데 입력한 이메일을 가진 github ID가 있는게 확인되면, 계정에 패스워드가 없으니 패스워드를 만들어서 소셜 계정을 이용하거나 이메일을 이용해서 로그인하라고 알려줄 수도 있다.
- avatar Url은 서버로부터의 url 일 수도 있고 github으로부터의 url이 될 수도 있다.

```js
// init.js
import "./models/User"; // User를 import 한다.
```

- init.js에 User를 import 한다.
- 이제 passport를 이용해서 사용자 인증을 가능하게 해줄 것이다.

`npm install passport-local-mongoose`

- passport-local-mongoose를 설치한다.

```js
// User.js
import passportLocalMongoose from "passport-local-mongoose";
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email });
```

- User.js에 passport-local-mongoose를 import해준다.
- 그리고 Schema를 추가해준다. plugin으로 passportLocalMongoose를 사용한다.
- passportLocalMongoose는 configuration object(설정 객체)가 필요하다.
- 우리는 usernameField라는 옵션을 사용할 것이다. username으로는 email을 사용할 것이고 usernameField는 email 인증을 담당해줄 것이다.
- 하지만 아직 인증에 관해서는 아무것도 한 것이 없다.
- passport.js 라는 파일을 하나 생성한다.

`npm install passport passport-local`

- passport와 passport-local을 설치한다.
- passport-local이란 username과 passport 를 쓰는 사용자 인증 방식(strategy)를 의미한다.

```js
// passport.js
import passport from "passport"; // passport를 import 한다.
import user from "./models/User"; // user 도 import 한다.

passport.use(User.createStrategy()); // passport야, strategy를 하나 사용해!
```

- strategy는 로그인을 하는 방식이다.
- 예를 들어, 페이스북이나 github으로 로그인하는 것 처럼.
- 원하는 만큼 strategy를 사용할 수 있다.

## `16일차`

### #6.2 Local Authentication with Passport part Two

- serialization은 어떤 정보를 쿠키에게 주느냐를 의미한다.
- 즉, 어떤 field가 쿠키에 포함될 것인지를 알려주는 역할을 하는 것이다.
- 하지만 쿠키에 너무 많은 정보를 담으면 안된다. 쿠키는 작아야 하고, 민감한 정보는 절대로 담으면 안된다.
- deserializeUser는 serializeUser에서 받아온 쿠키의 정보를 어떻게 사용자로 전환하는가를 의미한다.
- 하지만 우리는 passport-local-mongoose를 사용하므로 위 두가지 절차를 따로 해줄 필요가 없다.

```js
// passport.js
import passport from "passport";
import user from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); // serialize
passport.deserializeUser(USer.deserializeUser()); // deserialize
```

- 단순히 위 두가지 코드를 추가하면 끝이다.
- 이제 globalRouter에 있는 postJoin을 수정한다. 패스워드가 맞는지 체크하거나 하는 미들웨어가 들어갈 것이다.
- postJoin 코드가 있는 userController.js 를 수정한다.

```js
// userController.js
import User from "../models/User";

export const postJoin = async (req, res) => {
  // async 추가
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", {
      pageTitle: "Join"
    });
  } else {
    try {
      // try catch를 사용해서 error를 표시하도록 한다.
      const user = await User({
        // User.create 대신 User만 사용한 이유는 create는 생성시키고 db에 저장까지 하기 때문이다. User는 이미 db에 저장되어 있다.
        name, // 사용자를 생성하기 위해서 name과 email을 넣도록 한다.
        email // 즉, 계정이 생성되면 name과 email을 등록시킨다.
      });
      await User.register(user, password); // user와 password만으로 사용자를 등록하도록 한다.
    } catch (error) {
      console.log(error);
    }
    // To Do: Log user in
    res.redirect(routes.home);
  }
  res.render("join", {
    pageTitle: "Join"
  });
};
```

- 위와 같이 postJoin을 수정하고 join 페이지로 이동해서 가입을 하면 home 화면으로 이동한다.
- terminal에서 mongo -> user we-tube -> db.users.find({}) 를 해보면 등록한 계정을 볼 수 있다.
- 하지만 아직 이 사용자를 로그인 시켜주지는 않았다. 우리는 사용자를 등록하고 자동으로 로그인 시켜주도록 할 것이다.

### #6.3 Loggin the User in

- 이제 사용자를 가입시킬 수 있다. 로그인은 시키지 않았다.
- join을 처리하는 controller를 middleware로 탈바꿈 시킬 것이다.

```js
// userController.js
export const postJoin = async (req, res, next) => { // next를 사용한다.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();       // next()를 붙여준다.
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);    // redirect는 error가 발생하면 사용한다.
    }                               // 사용자를 등록하고 바로 로그인을 시켜줄 것이기 때문이다.
  }
  res.render("join", {
    pageTitle: "Join"
  });
};

// globalRouter.js
globalRouter.post(routes.join, postJoin, postLogin);    // postLogin 을 추가한다.
                                                        // join 화면에서 username과 password를 넣어줬을 때, 먼저 postJoin에서 가입을 시킬 것이고 postLogin에서 로그인을 시킬 것이다.
```

## `17일차`

- 이제 postLogin에서 기존에 있던 내용을 삭제하고 passport를 import 한다.

```js
// userController.js
import passport from "passport";

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login, // 로그인에 실패했다면 routes.login으로 가고
  successRedirect: routes.home // 로그인에 성공했다면 routes.home으로 가도록 했다.
});
```

- 기억해야할 것은 지금 pasport 인증 방식은 username(여기서는 email)과 password를 찾아보도록 설정되어 있다.
- 그리고 postJoin은 email, password 등 정보들을 받아서 사용자를 가입시키고, next()가 호출되어서 다음 것으로 가고 같은 정보를 전달하게 되는데, 다음 것인 postLogin은 사용자를 로그인 시켜주는 것이다.

```js
// middlewares.js
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user; // 기존 내용(임시로 설정해놓은 user login 정보)을 삭제하고 req.user 로 변경했다.
  next();
};
```

- res.locals.user를 req.user라고 한 이유는, passport가 사용자를 로그인 시킬 때, passport는 쿠키나 serialize, deserialize 등의 기능을 다 지원해줌은 물론이고, user가 담긴 object를 req 에도 올려줄 것이기 때문이다.
- 이렇게 작성해야 우리 template들이 이 user에 접근 가능하게 할 수 있다.
- 그리고 app.js로 가서 passport를 import 하고 use 해야 한다.

```js
// app.js
import passport from "passport";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(morgan("dev"));
app.use(passport.initialize()); // passport를 초기화한다.
app.use(passport.session()); // 위에서 실행된 cookieParser로부터 쿠키가 내려와서 그 쿠키 정보에 해당하는 사용자를 찾아준다.
```

- passport는 쿠키로 찾은 사용자를 req의 object, 즉 req.user로 만들어준다.
- 추가로 app.js에 passport 파일을 import 해야 한다.

```js
// app.js
import "./passport";
```

- 이제 wetube Join 화면으로 이동해서 정보를 입력하고 join을 해본다.
- 개발자 도구 application에 cookies에 보면 아직 쿠키가 생성되지 않았다.
- express-session을 설치하지 않았기 때문이다. 하지만 인증하기, 가입하기, 로그인하기는 잘 구현되었다.

## `18일차`

### #6.4 Session on Express

`npm install express-session`

- express-session을 설치한다.

```js
// app.js
import session from "express-session"; // session 을 import 한다.

app.use(
  session({
    secret: process.env.COOKIE_SECRET, // session id 암호화
    resave: true, // session 을 강제로 저장하게 함
    saveUninitialized: false // 초기화되지 않은 session을 저장소에 저장함
  }) // 로그인 session에 이용 시 false가 유용함
);

// .env
COOKIE_SECRET = "NPlrCGA7R2rP7uBUgnRHfFraGMJA9VwG"; // 랜덤 문자열은 randomkeygen.com에서 가져왔다.
```

- session을 import 하고 app.use(passport.initialize()); 위 쪽에
- session을 사용할 때 우리가 고려해야 되는 옵션들이 있다.
- 예를 들어, 원한다면 쿠키나 도메인을 원하는 대로 바꿔줄 수도 있다. 유효기간이라든지 등등..
- 하지만 우리는 아무 것도 바꾸지 않은 상태로 둘 것이다.
- 그리고 secret 이라는 매우 중요한 옵션이 있다.
- secret 이란, 무작위 문자열로서, 쿠키에 들어있는 session ID를 암호화하기 위한 것이다.
- 예를 들어, session ID를 전송할 때, 실제로 그 ID 값 그대로를 보내는 것이 아니고 실제로는 암호화된 상태로 보낸다.
- secret 은 필수 옵션이다.
- 랜덤한 문자열은 randomkeygen.com 에서 얻을 수 있다.
- 그리고 그 문자열을 다른 사람들이 볼 수 없도록 .env에 추가했다.

- 이제 wetube 페이지로 가서 로그인을 하고 개발자 도구 > Application > Cookies에 가면 쿠키가 생성된 것을 확인할 수 있다.
- 웹브라우저를 새로고침 할 때마다, 즉 이 쿠키 정보를 웹서버로 전송할 때마다 서버에서는 passport 인증 과정을 호출하고 passport는 deserialize를 통해 내가 어느 사용자인지 식별할 수 있게 된다.

```pug
//- header.pug
.header__column
      ul
        if !user    // user.isAuthenticated 에서 isAuthenticated 를 삭제
          li
            a(href=routes.join) Join
          li
            a(href=routes.login) Log In
```

- header.pug 에서 임시로 사용했던 isAuthenticated를 삭제해준다.

```js
// middlewares.js
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  console.log(req.user); // req.user 를 출력한다.
  next();
};
```

- middlewares.js 에서 req.user를 출력하면 누가 무슨 요청을 하고 있는지 알 수 있다.
- 이것이 가능한 이유는 쿠키가 있기 때문이다.
- 쿠키는 express로 보내지고 있고, express는 session을 이용함으로써 쿠키를 얻을 수 있다.
- 그리고 우리는 passport를 통해서 deserialize를 진행하여 쿠키를 해독한다.

- 하지만 현재 한 가지 문제가 있다. 서버를 재시작하고 브라우저를 새로고침하면 로그인 상태가 아니게 된다.
- 즉, 서버를 재시작하면 session이 사라져버린다. 우리는 session 정보, 쿠키 정보들을 메모리에 저장하고 있기 때문이다.

## `19일차`

### #6.5 MongoStore and Middlewares

- mongoDB를 사용해서 session을 저장할 것이다.
- connect-mongo 를 설치하자.

`npm install connect-mongo`

- 그리고 connect-mongo를 import 한다.
- session 저장소를 mongo와 연결시켜줘야 하며, 이 일은 mongoose가 하게 되므로 mongoose도 import 한다.

```js
// app.js
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

const CokieStore = MongoStore(session); // 쿠키저장소를 생성한다.

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({
      // session 설정에서 store를 추가한다.
      mongooseConnection: mongoose.connection // 쿠키저장소를 mongoDB와 연결시키며, 이는 mongoose가 담당한다.
    })
  })
);
```

- 이제 js 파일을 수정하거나 해서 서버가 재시작된다해도 쿠키를 계속 보존할 수 있고, 사용자는 로그인 상태를 유지하게 될 것이다.
- wetube 페이지로 가서 가입 혹은 로그인 후 서버를 재시작하여 테스트한다. 서버를 재시작해도 여전히 로그인 상태인 것을 확인할 수 있다.
- 이번에는 routes 의 출입을 제한하도록 할 것이다. 로그인된 사용자는 join 화면으로 접근이 불가능해야 한다.
- onlyPublic (로그아웃 상태인 경우에만 접근을 허용하겠다는 의미) 이라는 middleware를 만든다.

```js
// middlewares.js
export const onlyPublic = (req, res, next) => {
  // onlyPubilc 미들웨어를 추가한다.
  if (req.user) {
    // req.user가 존재하면, 즉 사용자가 로그인 상태라면
    res.redirect(routes.home); // home으로 리다이렉트 시키고 이후의 controller에는 접근하지 못하게 한다.
  } else {
    next(); // 사용자가 로그인 상태가 아니라면 next(); 를 실행한다.
  }
};

// globalRouter.js
import { onlyPublic } from "../middlewares";

globalRouter.get(routes.join, onlyPublic, getJoin); // 사용자가 로그인 상태일 때
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin); // Join과 Login 화면을 보게 하고 싶지 않으므로

globalRouter.get(routes.login, onlyPublic, getLogin); // onlyPublic 미들웨어를 추가한다.
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
```

- globalRouter.js 에서 onlyPublic 미들웨어를 추가한다.
- 기억해야 할 것은 passport와 session의 훌륭함 덕분에 req.user를 통해서 로그인된 사용자가 누구인지 알 수 있다는 것이다.
- wetube 페이지에서 로그인 상태에서 /join 페이지 이동 시 home 으로 리다이렉트되는 것을 볼 수 있다.
- 이번엔 onlyPrivate 미들웨어를 추가한다.

```js
// middlewares.js
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

// userRouter.js
import { onlyPrivate } from "../middlewares";

userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

// videoRouter.js
import { uploadVideo, onlyPrivate } from "../middlewares";

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
```

- 그리고 userRouter.js와 videoRouter.js 에서 onlyPrivate 미들웨어를 추가한다.

## `20일차`

### #6.6 Github Log In Part One

- passport document로 가서 Strategy에서 github을 검색한다.
- 우리는 passport-github을 쓸 것이다. 설치한다.

`npm install passport-github`

- passport-github을 사용하려면 github에서 application을 등록하고, strategy 설정도 해야한다.
- 'https://github.com/settings/applications/new' 로 이동해서 application을 생성한다.

```text
Application name : WeTube
Homepage URL : https://localhost:4000/
Application description : description
Authorization callback URL : https://localhost:4000/auth/github/callback  -> url은 적고싶은대로 적어도 된다.
```

- passport.js 에서 github strategy(깃헙 로그인)을 가져오게 한다.

```js
// passport.js
import GithubStrategy from "passport-github";
```

- 그리고 사용(use)하라고 해야하는데 그 전에 등록했던 github application(settings / developer settings) 페이지로 이동해서 Client ID와 Client Secret 을 확인한다.
- 이 정보는 환경 변수(.env)에 넣어놓자. 왜냐하면 이러한 비밀 정보는 다른 사람과 공유해서는 안되기 때문이다.(절대!)

```env
GH_ID=어플리케이션 ID 정보
GH_SECRET=어플리케이션 secret 정보
```

- 환경 변수를 저장했으면 이제 github strategy를 사용한다.

```js
// passport.js
passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: "https://localhost:4000/auth/github/callback"
  })
);
```

- 그 다음으로 해야할 것은 사용자가 깃헙에서 돌아왔을 때 실행되는 함수를 작성하는 것이다.
- 예를 들어, 사용자가 깃헙으로 갔다가 돌아오면서 사용자 정보를 가져오면, 이 함수가 실행되는 것이다.
- 이 함수는 controller에 작성하도록 한다.

```js
// userController.js
export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const logout = (req, res) => {
  // logout 윗쪽에 작성한다.
  req.logout(); // 이것도 추가로 작성해줬다.(겸사겸사)
  res.redirect(routes.home);
};
```

- cb(콜백 함수)는 passport로부터 우리에게 제공되는 것이다.
- 이 함수가 실행되면 passport에게 사용자가 성공적으로 로그인되었다고 말해줄 것이다.
- 하지만 일단 우리는 아무 것도 하지 않고, console.log로 출력만 해본다.
- 이 과정은 깃헙에서 돌아오는 과정을 작성한 것이고, 깃헙으로 보내는 과정은 아무 것도 작성하지 않았다.
- 그래서 userController에서 하나를 더 생성한다. 이것은 다음 강의에서 계속 하도록 하자.

## `21일차`

### #6.7 Github Log In Part Two

- /auth/github으로 오면 passport 인증을 시키도록 route를 만든다.
- 또한 /auth/github/callback으로 오면 위에서 만든 콜백 함수로 처리한다.

```js
// routes.js
// Github
const GITHUB = "/auth/github";                    // github을 위한 routes를 만든다.
const GITHUB_CALLBACK = "/auth/github/callback";

const routes = {
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK

// passport.js
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";   // controller를 import 한다.
import routes from "./routes";                                        // routes를 import 한다.

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `https://localhost:4000${routes.githubCallback}` // 콜백 함수 경로를 routes를 이용해서 바꿔준다.
    },
    githubLoginCallback
  )
  );
};

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// globalRouter.js
globalRouter.get(routes.gitHub, githubLogin);   // /auth/github으로 들어가면 githubLogin을 써서 인증한다.
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

// socialLogin.pug
.social-login
  button.social-login--github
    a(href=routes.gitHub)     // 링크를 넣어준다. gitHub으로 가는 링크다.
      span
            i.fab.fa-github
      | Continue with Github
  button.social-login--facebook
    span
          i.fab.fa-facebook
    | Continue with Facebook
```

- routes를 등록했고, passport.js에서 callbackURL을 routes 경로로 수정했고, globalRouter에 router를 추가했다. 마지막으로 socialLogin.pug에 gitHub으로 가는 링크를 넣었다.
- 정리하면, 누군가 gitHub 링크를 눌러서 gitHub으로 가면, globalRouter.js 에서 githubLogin을 실행시킨다.
- userController.js 에 있는 githubLogin 함수는 passport.authenticate("github") 을 실행시킨다.
- 그렇게 되면 우리는 passport의 strategy를 이용하게 되는 것이다.
- 깃헙 페이지로 갔다가 돌아올 때, callbackURL로 돌아오면서, 우리는 사용자 정보를 얻게 될 것이다.
- 그래서 어떤 사용자가 callback URL로 접근했다면, globalRouter.js 에서 passport.authenticate()를 실행시킨다.
- 즉, passport.js 에 있는 githubLoginCallback 함수를 실행하는 것이다.
- 로그인이 성공적이고 이 함수가 문제없이 결과를 리턴하면 postGithubLogIn을 실행하는데, postGithubLogIn(userController.js)은 사용자를 home 화면으로 보내줄 것이다.
- wetube 페이지로 돌아가서 join > github 버튼을 눌러 깃헙 로그인을 시도해보자.
- 터미널에서 다양한 정보를 확인할 수 있다.

## `22일차`

### #6.8 Github Log In Part Three

- githubLoginCallback 함수를 작성하자.
- 우리에게 중요한 것은 github ID, 이메일, 이름, 그리고 아바타(프로필 사진)이다.
- 그리고 그러한 정보들은 profile.\_json 안에 있다. 그 정보들을 가져온다.

```js
// userController.js
export const githubLoginCallback = async (_, __, profile, cb) => {
  // parameter 중 사용하지 않는 것이 있을 때 언더바로 표시하면 좋다. 함수의 parameter는 순서가 중요하기 때문이다.
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    console.log(user); // user를 출력하면 어떻게 되는지 확인한다.
  } catch (error) {
    return cb(error); // cb 함수는 passport에서 제공된 callback 함수이다.
  }
};
```

- 일단 위와 같이 작성했다. 여기서 cb 함수는 passport에서 제공된 callback 함수이고, passport에서는 이 함수를 인증에 성공한 상황에서 호출을 하게 된다.
- cb 함수를 호출할 때 error 없이 user를 넣어준다면 passport는 사용자를 찾았다고 알게 된다. 그러면 user ID를 쿠키에 넣어줄 것이고, username + password(local 방식) 인증할 때와 똑같은 것을 해줄 것이다.
- 하지만 user 없이 error만 넣어서 cb 함수를 호출하면 passport는 우리가 사용자를 찾지 못한 것으로 알게 될 것이다.
- 그러므로 위에서 catch 구문에 cb 함수에 error만 넣어서 호출한 것이다.
- 다시 wetube 페이지로 가서 깃헙 join을 하면 터미널에 null이 출력될 것이다.

- 이번에 할 작업은 어떤 사용자가 이메일로 가입을 한 뒤에 깃헙으로 로그인 하기를 클릭하면, 그 사용자를 로그인 시키는 것이다.
- 깃헙 로그인 시 깃헙 로그인 아이디로 사용하는 이메일을 가진 사용자를 찾으면 githubId(user.githubId)를 깃헙에서 가져온 id를 할당할 것이다.
- 만약 사용자를 찾지 못했다면, 계정을 하나 만들 것이다.

```js
// userController.js
export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // 동일한 email을 가진 user가 있으면
      user.githubId = id; // githubIdd에 _json에서 가져온 id를 할당한다.
      user.save(); // 그리고 user 정보를 저장한다.
      return cb(null, user); // cb 함수를 호출한다.
    }
    const newUser = await User.create({
      // 만약 user를 찾지 못했다면 계정을 만든다.
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url
    });
    return cb(null, newUser); // 마찬가지로 cb 함수를 호출한다.
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home); // send 를 redirect 로 수정한다.
};
```

- 다시 한번 말하자면, cb 함수의 첫번째 매개변수는 error일 때를 나타내고, 두번째 매개변수는 성공했을 때를 나타낸다.
- 이렇게 작성을 하고 wetube 페이지로 와서 github login을 해주면 정상적으로 로그인이 되고 home 화면으로 redirect 된다.

## `23일차`

### #6.9 Recap and User Profile

- profile 페이지를 만들기 전에 인증에 대해 정리해보자.
- username과 password를 이용한 방식(local 방식)은 비교적 간단하다.
- username과 password를 post 방식으로 전달하고, mongoose가 자동으로 체크한다.
- password가 맞으면 맞다고 알리고 passport는 쿠키를 생성한다.
- 깃헙 인증의 경우, 사용자는 깃헙 웹사이트로 이동하고 거기에서 권한 승인을 한다.
- 그 이후에 깃헙 웹사이트는 우리에게 그 사용자의 정보를 보내주는데 /auth/github/callback 이라는 url로 오게 된다.
- 그러면 passport가 우리가 만들어준 githubLoginCallback 함수를 호출한다.
- 이 함수는 사용자의 profile 같은, 모든 정보를 받는다.
- 이 정보로 email로 사용자를 찾거나 github ID로 사용자를 찾는 등의 기능을 할 수 있다.
- githubLoginCallback 함수의 한가지 조건은 callback(cb) 함수를 return해야 한다는 것이다.
- cb 함수를 실행시키면 그 함수에게는 error가 있는지, user는 있는지를 알려줘야 하고,
  error가 존재하면 passport는 error가 있고 user는 없구나 하고 끝내버릴 것이다.
- user가 존재하면 passport는 쿠키를 만들고 저장한다.
- 그리고 마지막으로 postGithubLogin을 실행시켜서 home 화면으로 redirect 한다.

```js
// userController.js
const {
  _json: {
    id,
    avatar_url: avatarUrl, // avatar_url 을 avatarUrl(캐멀케이스)로 변경한다.
    name,
    email
  }
} = profile;

const newUser = await User.create({
  email,
  name,
  githubId: id,
  avatarUrl // 이제 avatarUrl 만 입력해도 된다.
});
```

- 이제 profile 페이지를 만들어 보자.
- 지금은 profile을 클릭하면 로그인한 사용자의 프로필로 가도록 되어 있다.
- 먼저 userController.js 에 있는 userDetail 을 수정한다.
- userDetail에서는 특정 id를 가진 사용자를 찾아야만 한다. 하지만 사실 그 사용자는 로그인되어 있는 상태다.
- 그러므로 /users/\${id} 보다는 /users/me 로 하는 것이 좋을 것 같다.
- me 라는 새로운 route를 만들자.

```js
// routes.js
// Users
const ME = "/me"; // ME를 추가한다.

const routes = {

  me: ME,
```

- 그리고 me 라는 controller도 만든다.

```js
// userController.js
export const me = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};
```

- me controller는 userDetail과 똑같은 일을 시킨다. 다른 점은 userDetail에서는 사용자를 찾는 과정이 필요한데, me에서는 user를 req.user로 전달할 것이다.(\*\*req.user는 현재 로그인 된 사용자다!)
- 위와 같이 me route를 만드르고 me controller를 따로 만드는 것은 사용자마다 똑같은 user template을 사용할텐데 해당 id를 가진 사용자를 userDetail에서 찾도록 하는 것은 별로이기 때문이다.
- 그리고 userDetail.pug를 꾸민다.

```pug
//- userDetail.pug
block content
  .user-profile
    .user-profile__header
      img.avatar(src=user.avatarUrl)
```

- 이제 wetube 페이지에서 깃헙 로그인 후 profile 페이지로 이동하면 avatar 이미지가 나와야 한다.
- 하지만 나오지 않아서 확인해보니 예전에 만든 name, password 정보와 깃헙에서 받아온 로그인 정보가 서로 다른 객체로 mongoDB에 저장되어 있어서 req.user.avatarUrl 이 undefined 로 출력되기 때문이라고 한다.
- 그래서 githubLoginCallback 함수에서 avatarUrl을 따로 저장해주도록 한다.

```js
// userController.js
try {
    const user = await User.findOne({
      email
    });
    if (user) {
      user.githubId = id;
      user.avatarUrl = avatarUrl;   // avatarUrl을 저장했다.
      user.save();
      return cb(null, user);
    }
```

- 이제 정상적으로 avatar 이미지가 출력된다.
- 그리고 userDetail.pug로 다시 가서 username도 출력하도록 한다.

```pug
//- userDetail.pug
block content
  .user-profile
    .user-profile__header
      img.avatar(src=user.avatarUrl)
      h4.profile__username=user.name
```
- 마지막으로 header.pug에서

```pug
//- header.pug
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            __code skip__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
else
          li
            a(href=`/videos${routes.upload}`) Upload
          li
            a(href=routes.me) Profile 
            //- userDetail(user.id) -> me 로 변경한다.
          li
            a(href=routes.logout) Log Out
```
- userDetail(user.id) 를 me 로 변경해도 문제가 없는 이유는, 위 userDetail.pug 에서 user.avatarUrl을 가지고 왔었고 우리의 middlewares 에서는 locals 변수인 user에 req.user를 할당했기 때문이다.
- 또한 그렇기 때문에 주소의 id를 바꿔봐도 (현재 로그인 한) 똑같은 사용자가 프로필 화면에 뜬다. 이것은 userDetail이 제 역할을 하지 못하는 것이다. id에 맞는 사용자를 찾아서 그에 대한 프로필을 보여줘야 한다.
- 나중에는 userDetail에서 (실제 로그인 사용자를 id로 찾아서) override 해야 한다. 지금은 아무 id나 입력해도 현재 로그인한 사용자가 나오며, 이는 middleware 때문이다.
- 일단은 id로 사용자를 찾고 존재하지 않으면 존재하지 않는다고 띄울 것이다.
- routes.me로 바꾸고 Profile을 누르면 이제 /me로 이동하게 된다.

- middlewares 를 조금 변경하도록 하자.

```js
// middlewares.js
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null; // user -> loggedUser 로 변경
  next();
};

// header.js
.header__column
      ul
        if !loggedUser  // user -> loggedUser 로 변경
```

- user를 loggedUser 로 변경했다. 훨씬 명확해졌다.
- 그리고 me 를 globalRouter에 추가해보자.

```js
// globalRouter.js
globalRouter.get(routes.me, getMe);

// userController.js
export const getMe = (req, res) => {  // 함수 명을 me -> getMe 로 변경
  res.render("userDetail", {
    pageTitle: "User Detail",
    user: req.user
  });
};
```

- wetube 페이지로 가서 /me 로 이동하면 현재 로그인한 내 프로필 페이지가 뜨게 되고, 무작위로 (예를 들어, /users/3232323) id를 입력하면 내 프로필 페이지가 뜨지 않고 에러 페이지가 뜨게 된다.
- 왜냐하면 이제 user라는 이름의 글로벌 변수는 없기 때문이다.

## `24일차`

### #6.10 User Detail + Facebook Login Part One

- 페이스북 로그인 작업을 하기 전에 임의의 사용자 id로 들어갔을 때(/users/무작위) 에러 화면이 뜨는 것을 수정해보자.
- userController.js 에서 userDetail 함수를 수정한다.

```js
export const userDetail = async (req, res) => {
  const {
    params: { id }    // req에서 id를 받아온다.
  } = req;
  try {
    const user = await User.findById(id);   // 사용자를 id로 찾는다.
    res.render("userDetail", {
      pageTitle: "User Detail",
      user
    });
  } catch (error) {
    res.redirect(routes.home);    // error 가 발생하면 home 으로 redirect 시킨다.
  }
};
```

- req에서 id를 받아올 수 있는 이유는 routes에서 :id라고 썼었기 때문이다.
- 받아온 id로 user를 찾아서 userDetail에 user를 넘겨주고 render를 한다.