# 2강 마스크 알리미

## 2 - 5 Fetch API_실습.md

#### 200802

### 1. async, await

#### Promise의 세가지 상태
- Peding
- Resolved
- Rejected

<pre><code>function promiseTest1(timer){
    //Promise 객체를 new키워드를 통해 만들기
    let promiseObj = new Promise((resolve,reject) => {
        setTimeout(() => {
            //resolve 함수를 통해 메세지 반환
            resolve(`Timer : ${timer}`)
        }, timer);
    });

    //반환된 메세지는 then함수를 통해 익명함수의 매개변수
    //여기서는 volue로 들어가게 되고,
    //console.logo(value)로 출력
    promiseObj.then((value) => console.log(value));
} </code></pre>

<pre><code>function promiseTest2(timer){
    //status를 랜덤으로 만듬
    //math.floor() : 바닥함수 -> 소숫점이하를 버림
    //math.random() : 0~1사이의 랜덤한 숫자를 반환
    const status = Math.floor(Math.random() * 10)% 2;
    let promiseObj = new Promise((resolve, reject) => {
        //랜덤으로 뽑은 status가 1이면 resovle
        //status가 0이면 reject로 메세지를 반환
        setTimeout(() => {
            if(status === 1) resolve('성공');
            else reject('실패');
        }, timer)
    })
    
    promiseObj
        .then((value) => console.log(value))
        .catch((error) => console.log(error));
}</code></pre>
- catch 가 없으면 에러를 처리하지 못함
- Math.floor(Math.random() * 10) 0-9의 숫자가 출력됨

### 2. Fetch API

- Fetch API로 JSON Placeholder 테스트
<pre><code>const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))</code></pre>
<pre><code>fetch(url)
    .then(response => response.json())</code></pre>
- respose 객체에 있는 내용이 json을 통해서 정보들이 나옴...?


<pre><code>
//Fetch API로 POST요청 날리기
//생성할 Post 객체
let newPost = {
    title : 'foo',
    body : 'bar',
    userId : 1
}
</code></pre>
- 새로운 Post객체 생성

<pre><code>fetch(url, {
    //HTTP 요청 메소드 사용 가능
    method : 'POST',
    //body는 직렬화 해서 전송!!
    body : JSON.stringify(newPost),
    //Header를 추가해서 우리가 보내는 데이처에 대한 정보를 서버에 전송
    headers : {
        "content-type" : "application/json; charset=UTF-8"}
})
    .then(response => {
        console.log("response 타입 : " + typeof(response));
        return response.json();
    })
    .then(json => {
        console.log("response.json 타입 : " + typeof(json));
        console.log(json)
    })</code></pre>