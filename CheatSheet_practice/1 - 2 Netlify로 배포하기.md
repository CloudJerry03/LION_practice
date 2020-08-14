# 1강 Github 기초

## 1 - 2 Netlify로 배포하기

#### 200728

### 정적페이지
개념 - 시간이나 사용자의 요청에 따라 변하지 않는 페이지

예시 - HTML5, CSS, 

### 동적페이지
개념 - 시간이나 사용자의 요청에 따라 변하는 페이지

예시 - django

### Netlify로 배포하기
    - 준비해야 할 것 'index.html'이 있는 github Repository

1. Netlify로 들어가기 [[Netlify Link]](https://www.netlify.com/)
2. 회원가입 하기 - Github계정으로 가입하기
3. 'New site from Git'을 선택
4. GitHub 선택
5. 배포할 Repository 선택
    - Publish directory는 자신이 index.html이 들어가있는 폴더가 처음 폴더가 아닌 경우 적으면 됨.
6. Deploy advanced 선택
7. url이 생성되기를 기다림
8. 생성된 url로 들어가면 Repository에 있던 index.html로 접속되어짐.