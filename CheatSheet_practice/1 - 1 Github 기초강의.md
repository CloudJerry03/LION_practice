# 1강 Github 기초

## 1 - 1 Github 기초강의

#### 200728

### Github 소개

Git + hub

- 누가 수정한 부분에서 오류가 났는지 알 수 있음.
- 포트폴리오로 사용가능
- 교류가능

### Github 설정하기
1. Git 다운로드 (마지막에 Launch Git Bash를 체크할 것)
[[Git 다운로드 링크]](https://git-scm.com/downloads, "Github 다운로드")

"Download 2.27.0 for Windows" 혹은 "Download 2.27.0 for MAC" 이라고 적혀있는 것을 자신에 맞게 다운로드
2. Git Bash 다운로드 하기
3. GitHub 계정 만들기

### Repository
1. Repository 에서 New를 누른다.
2. Create a new repository 에서
  + Repository name = 이름 작성
  + Description = 레포지터리에 대한 설명(작성하지 않아도 됨)
  + Public -> 공유 할 것인지 설정
  + 마지막으로 Create repository를 선택!
3. 생성 후 생기는 URL을 복사

#### TEMINAL 명령어
1. \$ git init
2. \$ git remote add origin "repository 주소" - 레포지토리로 연결됨 (master)
3. \$ git add .
4. \$ git commit -m "원하는 내용"
5. \$ git push origin master

수정 시 3 - 5를 반복

+ 레포지토리 주소 변경방법
  + \$git remote remove origin - origin 에 연결된 것을 삭제
  + \$git remote add origin "repository 주소" - 변경할 다른 주소를 연결
  + 그 후 위의 3 - 5를 다시 하면 된다.
