Youtube Clone Coding
=========================
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
}
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
    const {query: { term: searchingBy }} = req;
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
    console.log(req.body);          // bodyParser의 필요성을 알아보기 위해 req.body를 찍어준다.
    res.render("join", { pageTitle: "Join" });
}

// globalRouter.js
import { getJoin, postJoin, login, logout } from "../controllers/userController"

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
import routes from "../routes";         // routes를 import 한다.

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
    res.render("join", { pageTitle: "Join" });
}
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
    res.locals.user = {             // 가짜 user 정보를 입력한다.
        isAuthenticated: true,
        id: 1
    }
    next();
}
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
    }= req;
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
import mongoose from "mongoose";        // mongoose 를 import 한다.

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

const db = mongoose.connection;     // MongoDB 와의 연결을 db 로 저장한다.

const handleOpen = () => console.log(`✅ Connected to DB`);
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);    // once 는 한번만 실행되며, 여기서는 db에 처음 연결 시 handleOpen 함수를 실행한다.
db.on("error", handleError);    // error 발생 시 handleError 함수를 실행한다.
```
- db.js에 mongodb에 연결하기 위한 mongoose 코드를 추가했다.

```js
// videoController.js
import { videos } from "../db";     // videoController에 import 되어있는 db를 삭제한다.

// init.js
import "./db";      // init.js에 db를 추가한다.
```
- 사용하지 않는 videoController의 db를 삭제하고 init에 import 한다.

## `6일차`
### #3.2 Configuring DotEnv
- dotenv를 구성하기 위해 먼저 .env 파일을 생성한다.

```js
MONGO_URL="mongodb://localhost:27017/we-tube"
PORT=4000
```
- .env 파일에 숨기고 싶은 key를 넣어둔다.
```js
// db.js
import dotenv from "dotenv";        // dotenv를 import 한다.
dotenv.config();                    // dotenv.config 함수로 .env 파일 안에 있는 정보를 불러올 수 있다.
                                    // 모든 변수들을 process.env.key에 저장할 것이다.
mongoose.connect(
    process.env.MONGO_URL,          // mongoose connection 대신 process.env.MONG_URL 을 사용한다.
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

// init.js
import dotenv from "dotenv";        // init.js 에서도 db.js와 마찬가지로 dotenv를 import 한다.
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
import mongoose from "mongoose";            // mongoose 와 연결해준다.

const VideoSchema = new mongoose.Schema({   // Schema를 정의한다.
    fileUrl: {                              // Video는 fileUrl을 가진다. Video는 서버에 저장하며, database에 Video를 저장하지는 않는다.
        type: String,
        required: "File URL is required"    // required 가 충족되지 않으면 이 메시지를 보여준다.
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,                    // 아무런 option 없다면 객체로 만들지 않아도 된다.
    views: {                                // 조회수 항목을 가진다.
        type: Number,
        default: 0                          // 처음 Video가 생성되면 조회수는 0이다.
    },
    createdAt: {                            // 생성 일자 항목을 가진다.
        type: Date,
        default: Date.now                   // Date.now는 현재 날짜를 반환하는 함수이다.
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

const model = mongoose.model("Comment", VideoSchema);   // video model에서 사용한 'model' 이라는 변수명을 동일하게 사용한 이유는
export default model;                                   // 새로운 JS 파일로 작업을 하고 있고, 모듈을 사용하기 때문에 model을 default로 export 하고 나중에 그것을 Comment 또는 User로 가져올 것이므로 변수 이름이 같은 것은 중요하지 않기 때문이다.

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
        type: mongoose.Schema.Types.ObjectId,   // 모든 정보를 넣는 것이 아니라 ID만 넣는다.
        ref: "Video"                            // 그리고 그 정보는 Video를 참조한다.
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
            type: mongoose.Schema.Types.ObjectId,   // 모든 정보를 넣는 것이 아니라 ID만 넣는다.
            ref: "Comment"                          // 그리고 그 정보는 Comment를 참조한다.
        }                                           // [1, 2, 4, 7] 이런 식으로 해당 video에 남긴 comment id가 저장된다.
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
export const home = async (req, res) => {                   // async 는 await 를 사용하기 위해 반드시 추가해야 한다.
    try {                                                   // 우리가 해야할 것을 try에 넣는다.
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {                                       // error가 가면 error를 잡아서 catch 구문을 실행한다.
        console.log(error);
        res.render("home", {pageTitle: "Home", videos: []});
    }
}
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
import multer from "multer";        // multer를 import 한다.
import routes from "./routes";

const multerVideo = multer({dest: "videos/"});  // multerVideo 변수에 destination을 포함하여 multer 함수를 담는다.

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
}

export const uploadVideo = multerVideo.single('videoFile'); // single은 하나의 파일만 업로드할 수 있는 것을 의미한다. single 안에는 파일의 이름을 넣어준다.

// upload.pug
input(type="file", id="file", name="videoFile", required=true, accept="video/*")
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
    const { body, file }= req;      // req.file을 정의하고
    console.log(file);              // console.log로 file을 확인해본다.
    // To Do: Upload and save video
    // res.redirect(routes.videoDetail(324393));    // redirect는 잠시 막고
    res.render("upload", { pageTitle: "Upload" });  // render만 하게 변경한다. 지금만 잠시 변경하는 것이다.
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
export const postUpload = async (req, res) => {     // async를 추가한다.
    const { 
        body: { title, description },
        file: { path }
    }= req;
    const newVideo = await Video.create({   // 새 video 생성이 완료될 때까지 기다리도록 await를 추가한다.
        fileUrl: path,      // fileUrl에 path를 넣어준다.
        title,              // title과 description은 변수명이 동일하다.
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));  // 이제 실제 video id를 받아서 redirect한다.
};
```
- async/await를 추가하여 newVideo에 새로운 파일을 추가했다. 그리고 videoDetail로 실제 새로운 video id를 받아서 redirect 했다.
- 드디어 NodeJS, Multer, MongoDB를 이용해서 file을 생성했다.

### #3.7 Uploading and Creating a Video part Two
- 업로드 폴더를 수정한다. 기존 videos 폴더는 삭제한다.

```js
// middlewares.js
const multerVideo = multer({dest: "uploads/videos/"})
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
app.use("/uploads", express.static("uploads"));     // /uploads 에 대한 router를 추가한다.
// static은 directory에서 file을 보내주는 middleware다. 즉, '/uploads'로 가면 'uploads' 라는 directory 안으로 들어간다. 주어진 directory에서 file을 전달하는 middleware 함수이므로, 이 경우 어떤 종류의 controller나 view 같은 건 확인하지 않는다.
```
- /uploads router를 추가하면 이제 home 화면에서 video가 제대로 보인다.
- 하지만 이것은 좋은 예시는 아니다. user의 파일을 개인 server에 저장하는 것은 좋은 것은 아니다.
- 보통 웹사이트에는 server를 만들고 새로운 version이 나오면 새로운 server로 redirect만 시키는 것이다.
- we-tube 프로젝트에서도 최종적으로는 그렇게 수정할 것이다. 지금처럼 하는 것은 시범적으로 하는 것임을 명심해야 한다.
- 마지막으로 uploads 폴더는 .gitignore에 추가해준다.