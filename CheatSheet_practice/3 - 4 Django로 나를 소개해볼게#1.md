# 3강 드리머리

## 3 - 4 Django로 나를 소개해볼게#1.md

#### 200806

--------
### 복습
1. URL Path의 구조
   - Path의 구조 : path('URL', views 내부의 함수, name="url의 이름"),
2. Template 언어란?
   - Python 변수 & 문법을 HTML에서 쓸 수 있도록 **Django에서 제공하는 언어**
3. Static File이란?
   - 이미지나 CSS, JS 파일 처람 내용이 고정되어 있어, 응답할 때 파일 그대로 보내주면 되는 파일 
   - **고정된 파일**
--------
### Model이란?
- 데이터에 접속하고 관리하도록 도와주는 객체

### Model 생성 & 적용
1. models.py
   - #모델명 : 모델명은 첫 글자는 무조건 대문자!
<pre><code>class 모델명(models.Model):
    image = models.ImageField(upload_to = 'images/')
    name = models.CharField(max_length = 50)
    address = models.CharField(max_length = 255)
    description = models.TextField()</code></pre>
- 작은 글자 CharField (제한길이를 설정 가능), 더 긴 글자는 TextField

2. Terminal
   - python manage.py makemigrations (+ App이름)
     - DB가 알아듣도록 번역하기
     - App이름을 쓰면 그 App만 해당되게 하는 거임
   - python mnage.py  (+ App 이름)
     - 번역한 내용을 DB에 저장migrate

### Admin 기능
- Django는 웹 서비스 관리를 위한 admin 기능 기본 제공
- terminal : python manage.py createsuperuser

### Admin에게 Model알려주기
- admin.py 
  - from.models import Designer
  - admin.site.register(Designer)

-> admin에 표시됨

### admin
- 붕어빵 틀 : class
- 붕어빵 : object