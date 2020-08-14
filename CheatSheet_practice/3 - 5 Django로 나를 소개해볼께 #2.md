# 3강 드리머리

## 3 - 5 Django로 나를 소개해볼께 #2.md

#### 200806

--------
### 복습
1. Model이란?
-  데이터에 접속하고 관리하도록 도와주는 객체

2. Model 생성 & 적용
- Model 생성 -> DB가 알아 듣도록 번역 -> 번역한 내용을 DB에 적용

3. Admin
- Django는 웹 서비스 관리를 위한 **Admin 기능 기본 제공**
--------

### QuerySet이란?
- 전달받은 모델의 객체 목록
- 붕어빵 틀은 고정되어 있는데 여러가지 붕어빵이 생김.
- = Model이라는 틀에 다양한 객체가 존재

### QuerySet 설정하기
- views.py
- from.models import Designer #모델의 존재 알려주기
```
def home(request):
    designers = Designer.objects.all() #->Method
    return render(request, 'home.html', {'designers': designers})
```

### Detail page
- PK(Primary Key) : Model을 통해 생성된 객체들을 구분할 수 있는 "고유한" KEy
- Path Convertor : 여러 객체의 url를 "계층적으로" 다룰 수 있도록 도와주는 도구
- get_object_or 404 : Object를 가져오려고 했는데 없을 경우 나타나는 에러

1. Sever에게 특정 객체를 달라고 Request
2. 이에 대한 URL을 서버에게 알림
3. 객체 반환 / 없으면 404 에러 호출