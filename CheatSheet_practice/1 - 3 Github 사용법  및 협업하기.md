# 1강 Github 기초

## 1 - 3 Github 사용법  및 협업하기

#### 200728

### Github 명령어

### TERMINAL명령어 [[참고링크 1-1 Github 기초강의]](https://github.com/CloudJerry03/LION_practice/blob/master/CheatSheet_practice/1%EA%B0%95%20git_practice.md )

### branch 관련 명령어
<pre><code>git branch 브랜치명</code></pre>
+ 브랜치 생성
<pre><code>git cheakout 브랜치명</code></pre>
+ 브랜치로 이동
<pre><code>git checkout -b 브랜치명</code></pre>
+ 브랜치 생성과 동시에 이동
<pre><code>git push origin 브랜치</code></pre>
+ 원격 저장소의 특정 브랜치에 프로젝트 저장
<pre><code>git pull origin 브랜치</code></pre>
+ 원격저장소의 특정 브랜치에서 변경사항 가져오기
<pre><code>git clone 원격저장소주소</code></pre>
+ 원격 저장소에 있는 파일 전체 복사
<pre><code>git status</code></pre>
+ git 자장소의 상태를 확인


### Github를 활용한 협업

1) Github Repository 생성
2) 팀원을 Collaborator로 추가
> + Settings -> Manage access -> Invite a collaborator
> + 연결된 메일을 통해 초대장 확인 가능
3) 초기 프로젝트를 Push 
4) 팀원들의 로컬에 프로젝 Pull
> git clone Repository주소
5) 팀원들 각자의 브랜치를 생성하여 작업
6) 브랜치에 작업한 내용을 Push
<pre><code>git checkout 브랜치명</code></pre>

> + 브랜치로 이동
> + 코드 수정
<pre><code>git add .</code></pre>
<pre><code>git status</code></pre>

> + 코드 수정내역확인
<pre><code>
git commit -m "내용"
git push origin 브랜치명
</code></pre>

> + 수정 내역이 Repository에 올라가면 변경된 코드가 적용됨
<pre><code>git status</code></pre>

> + 수정 내역 다시확인
7) Master와 merge 하기 전 pull request
> + pull request -> new pull request -> base와 브랜치 차이 확인
> + Create Pull Request를 통해 자세히 명세

8) pull request 확인후 Master와 merge
> + 팀원 혹은 팀장이 Pull request 확인 후 (코드 충돌 확인) 승인
> + Merge pull request -> confirm merge
> + Repository master commit 이 변경된 걸 확인 가능

### Fork를 사용한 협업(Collaborator가 아닌 상태)

1. 작업하고 싶은 Repository fork하기
> + Repository 오른 쪽 상단 fork버튼 누르기
(자신의 Repository에서 확인 가능)

2. 자신의 로컬 작업에서 작업
> + mkdir fork (포크 폴더 생성)
> + cd fork (포크 폴더에 들어가기)
> + git clone 레포지토리주소
> + code . (Visual Code 실행)
> + git status (수정내용 확인)

3. 변경사항을 자신의 브랜치에 Push
> + git add . (변경사항 저장)
> + git commit -m "변경사항에 대한 메모"
> + git checkout -b 브랜치명 (다른 브랜치를 생성해 그 브랜치로 들어감)
> + git push origin 브랜치명 (브랜치에 변경사항 업로드)

4. 원본 Repository 소유자에게 Pull request요청

5. 소유자가 pull request를 승인하여 merge 하면 자동으로 collaborator추가
> + fork협업자는 merge권한 이 없기 때문에 기다려야함.
