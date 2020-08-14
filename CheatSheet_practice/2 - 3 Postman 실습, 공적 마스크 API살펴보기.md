# 2강 마스크 알리미

## 2 - 3 Postman 실습, 공적 마스크 API살펴보기.md

#### 200801

### JSONPlaceholder
- Fake online Rest API
- REST API를 테스트, 프로토 타이핑 가능

- [JSONPlaceholde 주소](https://jsonplaceholder.typicode.com/)

### JSONPlaceholder 실습
- 구조 확인하기 
  - /posts를 확인해보면 어떻게 구성되어있는지 확인해 볼 수 있음.
  - /comments, /users 도 동일

### URL의 구성
- 프로토콜 : http, https, file 등
- 호스트 주소 : www.naver.com, www.google.com
- 파일 경로 : /home, /index.html
- Query parameter : ?id=1&postid=1(검색, 필터링 데이터 교환식 사용)

### Postman 실습
- \+ 를 눌러서 창 생성
1. GEt 실습
- GET으로 두고 'https://jsonplaceholder.typicode.com/posts'를 넣기 Send
- posts 뒤에 '/1'과 같은 것을 넣으면 해당하는 아이디의 내용을 보여준다.

2. POST 실습
- POST를 두고 같은 URL입력
- body -> JSON선택
<pre><code>{
    "userId" : 1,
    "id" : 8,
    "comments" : [],
     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }</code></pre>
- id 임의적으로 생성됨

3. PUT 실습
- post1번을 수정해보자.
<pre><code>{
    "userId": 3,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }</code></pre>
- userId를 수정하면 수정됨

<pre><code>{
    "userId": 3,
    "id": 1,
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }</code></pre>
- title이 없으면 title이 없는 채로 나옴.

1. FETCH 실습
<pre><code>{
    "userId": 3,
    "id": 1,
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }</code></pre>
- title을 안넣으면 수정이 되지 않은 채로 나옴.

5. DELETE 실습
<pre><code>{
    "userId": 3,
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}</code></pre>
- 내용이 삭제됨.