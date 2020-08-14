# 2강 마스크 알리미

## 2 - 5 Fetch API.md

#### 200801


### 비동기 처리
- 들어온 요청들을 순차적을 실행시킨다면?
  -  앞에 들어온 작업이 시간이 오래 걸리는 작업일 경우 뒤에 있는 작업이 밀리게 된다.
- 이런 작업들을 그대로 실행시키면서 뒤에 있는 코드들을 실행시키는 것이 바로 비동기 처리이다.
-  Promise 객체를 사용한다.
   -  대기, 이행, 거부 : 세가지 상태를 가짐.

### 비동기 호출 - keyword
1. async, await 키워드 활용. 
<pre><code> async function asyncFunction(){
            await [Promise 객체]
  }</code></pre>

2. [Promise 객체]
    - .then(콜백함수)
    - .catch(콜백함수)

### Fetch API
- Fetch API 는 네트워크 통신을 위해서 제공되는 API이다.
- Promise 객체를 반환한다.
- Request, Respose라는 두 개의 객체를 사용한다.
  
