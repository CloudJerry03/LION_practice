# 2강 마스크 알리미

## 2 - 2 HTTP, JSON, API.md

#### 200730

### HTTP
- Hyper Text Transfer
- Hyper Text :
    - 참조를 통해 한 문서에서 관련된 다른 문서로 넘나들며 원하는 정보를 얻을 수 있게 해주는 텍스트
- Transfer Protocol :
    - 인터넷을 통해서 정보를 주고 받을 떄 지켜야하는 규칙
- HTTP의 구성 : Request요청, Response응답

### HTTP의 요청메소드
- GET : 
    - 읽기
    - URL에 표시된 리소스를 가져오기
    - 예시 : naver.com 같은 것을 통해 이동해서 가져오는 것이라고 설명하심
- POST : 
    - body에 정보를 담아 서버에 입력
- PUT :
    - URL에 표시된 리소스와 바꿔치기 = 수정
    - 예시 : title, content가 있는데 title을 수정하고 내용을 없이 보내면 수정된 title과 내용은 없는 것으로 반영됨.
- PATCH : 
    - PUT과 다르게 일부만 수정
    - 예시 : 위에 PUT과 동일한 상황에서 수정된 title 과 수정하지 않은 content가 남아 있음 = 일부만 수정할 수 되었다는 소리
- DELETE :
    - URL 에 표시된 특정 리소스를 삭제

### JSON
- Java Script Object Notation
- Key : Value 형식
    - python 사전과 유사
- 데이터 교환

#### JSON 특징
- XML보다 가볍다
- 많은 프로그래밍 언어가 지원한다.
- 전송 시 : 직렬화과정을 거친다.
- 전송 시 : 역직렬화 과정을 거친다.

### JSON 실습

1. 변수에 넣기
- 'let super_hero = ' 하면 쫘르륵 뜸.
<pre><code>let super_hero = {
  "squadName" : "Super Hero Squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
      "powers" : [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
      "powers" : [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
};</code></pre>

2. super_hero의 멤버보기
<pre><code>super_hero.members
super_hero["members"]</code></pre>

- 두 줄 다 같은결과가 나옴.
- 모든 내용을 볼 때.

<pre><code>super_hero.members[0].name</code></pre>

- 0과 같이 인덱스를 추가하여 그 위치에 있는 object를 볼 수 있음.
- .name과 같이 보고 싶은 것에 대해 명시 해주면 이름만 보거나 할 수 있음.

3. 직렬화
<pre><code>JSON.stringify(super.hero);</code></pre>

- 모든 내용이 ""안에 들어가게 됨.

4. 역직렬화

<pre><code>
let serialized = JSON.stringify(super.hero); //직렬화한 것을 저장
JSON.parse(serialized);
</code></pre>

- 직렬화 전 상태로 돌아가게 됨.

### API

- Application Programing Interface
- 우리가 사용하는 다양한 서비스
- 서비스들을 제공해주는 데이터들에 접근을 하고 사용할 수 있도록 도와주는 도구

#### API 종류
- SOAP : Simple Object Access Protocol
- REST : Representational State Transfer
- GraphQL : Graph Query Language

### REST
- REpresentational State Transfer
- 소프트웨어 아키텍처 : 소프트웨어를 설계하는 지침과 원칙
- 물론 꼭 전부 다 지켜야 하는 법이 아니기 때문에 완전히 Restful 한 API는 많지 않다.

#### REST의 구성요소
- 자원 : /lieklion/member/8th/list
- 행위 : GET, PATCH 등
- 표현 {
"members" : ["김멋사", ..., "허멋사"]
}