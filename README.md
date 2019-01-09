Youtube Clone Coding
=========================
이 글은 이 프로젝트는 [Nomad Coders](https://academy.nomadcoders.co/)의 니콜라스님 강의를 토대로 진행했습니다.

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
- 참고적으로, package.json을 갖는 건 매우 좋은 것이다. 누군가와 협업 시 코드 파일(*.js)과 package.json 파일만 건네주고 npm install을 한다면 dependencies에 있는 내용을 자동으로 다운로드 받는다.

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
const express = require('express')
const app = express()

app.listen(4000);
```
- expressjs를 사용하기 위해서는 위와 같은 코드가 필요하다.
- express를 불러와서 app에 express를 실행해서 담는다.
- 그리고 4000번 포트를 listen 한다.

`node index.js`
- index.js를 실행하고 localhost:4000 으로 접속하면 에러 메시지를 확인할 수 있다.
- 즉, 서버에 접속이 되었으나 root(/)에 아무 것도 표시할 것이 없어서 에러를 받은 것이다.

```javascript
const express = require('express')
const app = express()

const PORT = 4000;

function handleListening(){
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
function handleHome(req, res){
    res.send('Hello from home');        // handleHome 에 request가 오면 responese로 'Hello from home' 메시지 전달
}

function handleProfile(req, res){
    res.send('You are on my profile');  // handleProfile 에 request가 오면 responese로 'You are on my profile' 메시지 전달
}

app.get('/', handleHome);           // root(/)에 접근하면 handleHome에 get request 발생(이것이 route)

app.get('/profile', handleProfile); // /profile에 접근하면 handleProfile에 get request 발생(이것이 route)
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
const app = express()

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send('You are on my profile');

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
```
- 먼저 웹 사이트에 접속하려고 하면 index파일을 실행하고 app은 route가 존재하는지 살펴본다.
- home(root)에 접속한다면 '/'를 찾아서 handleHome 함수를 실행하고 응답을 전송한다.
- 하지만 보통 연결의 흐름은 이렇게 간단하지 않다.
- 유저와 마지막 응답 사이에 뭔가가 존재하게 되는데 그것을 middleware라고 한다.
```javascript
const handleHome = (req, res) => res.send('Hello from home');

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();                             // middleware 는 실행이 끝나면 next를 통해 다음 함수(handleHome)를 호출한다.
}

app.get('/', betweenHome, handleHome);  // home(/) 요청이 오면 betweenHome(middleware)를 실행한다.
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
}

app.use(betweenHome);   // 모든 route에 대해 실행되는 middleware
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
const app = express()

const handleHome = (req, res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send('You are on my profile');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);

app.get('/profile', handleProfile);

export default app;     // app object를 넘겨준다.

// init.js
import app from "./app";    // app 을 가져온다.

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
const VIDEO_DETAIL = "/:id";        // express는 :id 의 형태의 URL을 보면 이 값이 변하는 값이라는 것을 안다.
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

globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.join, (req, res) => res.send('Join'));
globalRouter.get(routes.login, (req, res) => res.send('Login'));
globalRouter.get(routes.logout, (req, res) => res.send('Logout'));
globalRouter.get(routes.search, (req, res) => res.send('Search'));
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
import { join, login, logout } from "../controllers/userController"
import { home, search } from "../controllers/videoController";

globalRouter.get(routes.home, home);    // get의 두번째 인자 함수를 controller로 변경했다.
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
            block contents       
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
export const videos = (req, res) => res.render("Videos", { pageTitle: "Video" });
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
- 그리고 search.pug에 search__header 라는 class를 가진 div를 생성하고 h3 태그를 추가한다. searchingBy 변수는 아직 지정하지 않아서 보이지 않는다.
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
    const {query: { term: searchingBy }} = req;
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
    form(action='/login', method='post')
        input(type='email', name='email', placeholder='Email')
        input(type='password', name='password', placeholder='Password')
        input(type='submit', value='Log In')

//- join.pug
.form__container
    form(action='/login', method='post')
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