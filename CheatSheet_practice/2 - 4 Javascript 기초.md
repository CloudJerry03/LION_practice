# 2강 마스크 알리미

## 2 - 4 Javascript 기초.md

#### 200801

### Javascript
 - 웹페이지를 동적으로 만들 때 사용하는 언어
 - 객체 기반의 스크립트 언어
 - 할 수 있는 일이 많아짐
   -  Browser API - DOM, 위치정보, audio, 화면 공유 등 Browser에서 제공하는 API들
   -  2D, 3D 그래핑 작업 - NullSchool
   -  클라이언트 뿐만 아니라 서버도 JS로 가능 - Node.js
-  스크립트 언어 + 인터프리터 방식(파이썬과 동일)
   - 입력 후 바로 결과 확인이 가능하다.
   - 브라우저에 내장된 엔진으로 즉시 해석된다.
- 사용법 1 :  HTML내부에 \<script> 태그내에 사용
- 사용법 2 : .js파일로 만들고,
 \<script src="파일경로">
  를 사용해 불러오기

### 실습 (2강-mask_practice참조)

### 변수
1. 사용가능한 데이터 타입 : Bollean, Null, Undefined, Number, String, Symbol, Object


<pre><code>let booleanVal = true
let numberVal = 0
let nullVal = null
let undefinedVal = undefined
let stringVal = ''
let person ={
    name : '홍길동'
    phoneNumber : "010-0000-0000",
    email : "hong@hong.com"
}
</code></pre> 
- 데이터 선언하기

<pre><code>typeof(변수명)</code></pre>
- 변수의 데이터 타입 확인 가능

2. var 
  - 권장하지 않는 변수 선언 방식
  - Hoisting
  - Function scope 변수 (타 언어와 다른 점)
  - 중복 선언 가능
  - 예측하기 어려운 코드를 만들 수 있다.
3. let
  - blcok scope 변수(타 언어와 비슷하게 동작)
4. const 
  -  변하지 않는 데이터를 저장(ex. 파이, 객체)

### Javascript 실습

1. for문
<pre><code>for(const i = 0; i < 10; i++)
{
    console.log(i);
}
</code></pre>
- 오류 발생 -> const로 i를 선언하였기 때문에
  
<pre><code>for(let i = 0; i < 10; i++)
{
    console.log(i);
}
</code></pre>
- 오류가 발생하지 않음.

<pre><code>const numInfo = {"one":"fist", "two":"second", "three":"third"}
for (const i in numInfo){
    console.log(`기수 : ${i}, 서수 : ${numInfo[i]}`);
}
</code></pre>
- 오류가 발생하지 않음 : for 문을 돌린다고 해도 numInfo를 전과 다르게 변경시키고 있지 않기 때문에

<pre><code>const oddNum = [1, 3, 5, 7, 9, 11];
for(const i of oddNums){
    console.log.(i);
}
</code></pre>
- list에 있는 것을 for 문으로 받아오는 방법

2. while 문

<pre><code>let i = 0
while(i < 0){
    console.log(i);
    i++;
}
</code></pre>

- 다음과 같이 while문 선언
  
3. 조건문

<pre><code>let socre = prompt("점수를 입력하세요","0"</code></pre>
- socre에 입력값을 받음.

<pre><code>if(score >= 90){
    console.log("A+");
}   else if (score >= 80){
    console.log("B+");
}   else {
    console.log("C+");
}
</code></pre>
- 실행문이 한 문장일 경우 중괄호 생략가능.
<pre><code>if(score >= 90){
    console.log("A+");
}   else {
    if(score >= 80)
        console.log("B+");
    else
        console.log("C+");
}
</code></pre>
<pre><code>if(score >= 90)
    console.log("A+");
else if (score >= 80)
    console.log("B+");
else
    console.log("C+");
</code></pre>

### DOM 다루기
- DOM : Document Object Model
- 웹페이지에 접근할 수 있게 해주는 일종의 인터페이스
- Javascript와는 별개
- Javascript에 DOM을 조작할 수 있는 API가 존재
  
1. Node 선택하기 - 실습
<pre><code>let idObj = document.getElementById("main");</code></pre>
- id가져오기

<pre><code>let classObj = document.getElementsByClassName("sfbgx");</code></pre>
- class 가져오기
- class는 같은 이름의 것이 여러개 존재할 수 있으므로 Elements라고 쓴다.

<pre><code>let selectorObj = document.querySelector("#main")
</code></pre>
- css 가져오기 : 한개만 가져오는 경우

<pre><code>let soelctObj = document.querySelectorAll(".sfbgx")</code></pre>
- css 가져오기 : 모두 가져오는 경우

2. 속성변경하기

 - 특정한 것을 선택하기 위해 그에 해당하는 것 위에서 마우스 오른쪽 클릭.
 - Copy - copySelect 순으로 클릭.
 - ctrl + v 하면 복사된 내용이 붙여짐.
<pre><code>let twoDoHee = document.querySelector("복사한 내용 붙여넣기")
</code></pre>
<pre><code>twoDoHee.style = "color:yellow; background-color:black;"</code></pre>
- css를 마음대로 변경해주면 적용이 아까 선택한 부분에 적용이 됨.

<pre><code>변수명.innerText = "바꿀 내용"</code></pre>
- innerText는 내용 바꾸기
  
<pre><code>변수명.innerHTML = '<a href="https://naver.com">네이버</a>'</code></pre>
- innerHTML 통해 링크 바꾸기

<pre><code>newNode = document.createElement("p");
newNode.innerText = "new P tag";
let link = document.querySelector("넣을 위치의 copySelector");
link.appendChild(newNode);
</code></pre>
- 새로운 노드 만들기 \<p>태크
- 새로운 노드에 글 쓰기
- 새로운 노드를 넣을 위치 조정
- 노드 추가 하기
- 아무리 많이 넣어도 한 번만 넣어짐 : 같은 오브젝트 이기 때문에


3. 함수

<pre><code>function ver1_appendNewNode(target, tag="p", text="기본값"){
    let newTag = document.creatElement(tag);
    newTag.innerText = text;
    
    target.appendChild(newTag);
}</code></pre>
- 함수 생성
<pre><code>let targetNode = document.querySelector("위치")</code></pre>
- 위치 지정
<pre><code>ver1_apppendNewNode(targetNode)</code></pre>
- 함수를 지정한 위치에 실행
<pre><code>ver1_apppendNewNode(targetNode, "a")</code></pre>
- a태그로 기본값이 생김
<pre><code>ver1_apppendNewNode(targetNode, "p", "나는 기본값이 아니야")</code></pre>
- p태그로 "나는 기본값이 아니야"가 생성됨.
- 여러개 생길 수 있음 함수가 실행 될 때마다 다른 오브젝트로 생기기 때문에

<pre><code>let ver2_appendNewNode = function(target, tag="p", text="기본값"){
    let newTag = document.creatElement(tag);
    newTag.innerText = text;
    
    target.appendChild(newTag);
}</code></pre>
- 익명함수

<pre><code>let ver3_appendNewNode = (target, tag="p", text="기본값") => {
    let newTag = document.creatElement(tag);
    newTag.innerText = text;
    
    target.appendChild(newTag);
}</code></pre>
- 화살표 함수