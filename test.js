// // 모듈 가져오기.
// var http = require('http');

// // 클라이언트의 요청을 처리할 함수 선언.
// function onRequest(req, res) { // request, response는 길어서 줄여서 씀.
//     // 뒤에 올 내용이 이런 거다. 하는 헤더 설정.
//     res.writeHead(200, {'Content-Type':'text/plain'}); // 200은 상태 코드(Status Code)이다. plain은 일반 text를 의미함.
//     // 데이터 전송.
//     res.write("Hello NodeJS");
//     // 응답 종료.
//     res.end();
// }

// // 서버 생성.
// var server = http.createServer(onRequest); // 옵저버 패턴.

// // 요청 대기.
// server.listen(5000); // 5000은 포트 번호이다. 
// // 80은 널리 쓰이므로, 피하도록 하자.
// // 예시로 naver.com:80 으로 들어가면 네이버가 들어가진다.


// 모듈 추출 (가져오기).
const http = require('http');
const express = require('express');

// express 객체 생성.
const app = express();

// 라우터 생성.
const router = express.Router();
const routerB = express.Router();

// 라우터 설정.
// 경로 설정.
router.get('/', function(req, res) { // 경로 : localhost:5000/

    // 파라미터 확인.
    console.log(req.query); // 경로를 localhost:5000/?name=mingyu&age=20 입력하면 { name: 'mingyu', age: '20' }로 출력된다.

    // 원래 res.writeHead(200, {'Content-Type':'text/html'}); 이런거 썼었는데, 
    res.send('Main Page'); // 얘는 알아서 파악해서 자동으로 넣어 줌. 수동으로 해줘야 하는 것도 가끔 있다.
});
router.get('/start', function(req, res) { // 경로 : localhost:5000/start
    res.send('Start Page');
});

// 라우터B 설정.
routerB.get('/', function(req, res) { // 경로 : localhost:5000/b
    res.send('Main Page B');
});
routerB.get('/start', function(req, res) { // 경로 : localhost:5000/b/start
    res.send('<h1>Start Page B</h1>');
});

// 라우터 사용 설정.
app.use('/', router);
app.use('/b', routerB); // routerB는 default 경로가 localhost:5000/b 이다.

// 서버 생성 (http).
const server = http.createServer(app);

// 요청 대기.
server.listen(5000);

// 실행 로그.
console.log('서버 실행 중...');