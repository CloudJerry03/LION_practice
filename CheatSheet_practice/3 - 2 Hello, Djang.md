# 3강 드리머리

## 3 - 2 Hello, Djang.md

#### 200804

### 가상환경 이란?
- 자신이 원하는 Python 환경 구축을 위해 필요한 모듈만 담아 놓는 바구니
  
### PIP 란?
- python으로 작성된 패키지 소프트웨어를 관리하는 패키지 관리 시스템
- django 설치 해주는 도구라고 생각하면 됨

### VS Code 단축키 모음
- 터미널 생성 : Ctrl + Shift + `
- 터미널에서 이전 명령어 불러오기 : 터미널에서 ↑ 누르기
- 현재 커서 위치 코드 복사 : Ctrl + D(여러줄도 가능)
- 현재 커서 위치의 코드 이동 : Alt + ↑ or ↓

### 가상환경 명령어 모음
- 가상환경 생성 : python -m venv <가상환경이름>
- 가상환경 활성화 : 
  - window -> source <가상환경 이름>/Scripts/activate
  - Linux, Mac -> source <가상환경 이름>/bin/activate
- 가상환경 끄기 : deactivate

### Django 명령어 모음
- Django 패키지 설치 : pip install django
- Django 프로젝트 생성 : django-admin startproject <프로젝트명> .
  - 마지막 . (온점)을 붙이면 새로운 폴더가 생기지 않습니다.
- Django App 생성 : python manage.py startapp <App이름>
- Django 로컬 서버 시작 : python manage.py runserver

### Django의 Project&App

- 하나의 Project == 하나의 Web Site
- App : Project 안의 의미 있는 기능들을 관리함.

★(자주볼 파일)
1. Project
   - settings.py : 전체 프로젝트 관리하는 설정파일★
   - urls.py : 프로젝트 URL관리 파일★
   - wsgi.py, asgi.py : 프로젝트를 서비스하기 위한 파일
   - __init__.py : 해당 디렉토리가 Python Package의 일부임을 Python에게 알려주는 파일
2. App
   - views.py : 웹 요청을 받고, 전달받은 데이터를 처리해서 가공하는 파일★
   - models.py : Database와 관련된 다양한 역할 수행★
   - admin.py : 관리자 관련 파일
   - apps.py : Project에게 App의 존재 알려줄 때 활용되는 파일

### Home 페이지 출력하기
1. settings.py : Project에게 App의 존재 알리기
2. Templates : User에게 보여줄 HTML파일 만들기
3. views.py : 요청이 들어오면 HTML파일을 열어주는 함수 정의
4. urls.py : url요청을 view와 연결하기