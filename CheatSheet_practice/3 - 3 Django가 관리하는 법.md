# 3강 드리머리

## 3 - 3 Django가 관리하는 법.md

#### 200805

### Bootstrap이란?
- Front-End 개발을 빠르고 쉽게 할 수 있는 **오픈 소스 Framework**
- 특징
  - 누구나 쉬운 사용 가능
  - 반응형 CSS 제공
  - 모든 최신 브라우저와 호환
  - PC & 모바일 디자인 제공
- [Bootstrap 주소](https://getbootstrap.com/)
- 연습이나 참고용을 쓰는게 좋음 -> 리소스를 많이 잡아 먹기 때문

### Bootstrap 가져오기
1. Example에서 원하는 것을 고름
2. 마우스 오른쪽클릭
3. 페이지 소스보기
4. ctrl+a, ctrl+c -> 전체 복사!

### URL 관리는 어떻게?
- **Django의 URL 관리**는 urls. py의 urlpatterns에서 담당
- **Path의 구조** path('URL', views 내부의 함수, name="url의 이름"),
  - URL 페이지 주소 : introuce/, new/
  - 함수 url이 불렸을 때 실행할 함수 : views.home
  - name 해당 path를 대표하는 이름 : name="home"

### Template 언어란?
- Python 변수 & 문법을 HTML에서 쓸 수 있도록 **Django에서 제공하는 언어**
  1. {{ }} : 템플릿 변수(명사)
  2. {% %} : 템플릿 태그(동사)

- {% url 'url의 이름'%}을 쓰는 이유
  - href = 'introduce.html'식으로 쓰면 django에서 오류가 생김
  - {% url 'url의 이름'%} 템플릿 태그를 써야 함.
  - 여기서 url의 이름은 urls.py에서 정함 name임.

### Static File이란?
- 이미지나 CSS, JS파일 처럼 내용이 고정되어 있어, **응답 할 때 파일 그대로 보내주면 되는 파일**

1. Static : 웹 서비스를 위해, 개발자가 준비해두는 파일
:smile: 고정된 파일, 개발자 파일

2. Media : 웹 서비스 이용자들이 업로드하는 파일
:smile: 변동되는 파일, 사용자 파일

### Static File 처리하기
1. Static 폴더 생성
   - App 폴더 내에 static 폴더 만들기 & 파일 생성
2. Settings.py(static 설정)
<pre><code>STATICFILES_DIRS = [
    os.pat.join(BASE_DIR, 'App 이름', 'static')
]#Static File들이 들어있는 경로

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
#Static File을 모을 디렉토리
</code></pre>
3. Static 파일 모으기
   - python manage.py collectstatic
   - Django에서 자동으로 해줌
   - 배포할 때만 하면됨