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

app.get('/profile', handleProfile); // /profile에 접근하면 handleHome에 get request 발생(이것이 route)
```
- 위에서 서버가 웹 사이트 서버처럼 작동하길 바란다면 메시지 대신 html, css 파일을 send 해줘야 한다.

### #2.5 ES6 on NodeJS using Babel
- Babel은 최신의 자바스크립트 코드를 무난한 예전의 자바스크립트 코드로 변환해준다.

`npm install @babel/node`<br>
`npm install @babel/preset-env`
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

### #2.8 Express Core: Routing