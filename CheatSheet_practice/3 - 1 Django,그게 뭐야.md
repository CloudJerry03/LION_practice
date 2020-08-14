# 3강 드리머리

## 3 - 1 Django,그게 뭐야.md

#### 200804

### Django 란?
- Python 으로 작성된 오픈 소스 웹 어플리케이션 프레임워크
- Django로 개발된 서비스 : 인스타, pinterest

### Django 특징
- python기반
- MVT 패턴
- admin 기능 제공
- 간편한 URL Parsing

### Framwork 란?
- 기본적으로 필요한 기능을 갖춰, 원하는 기능 구현에 집중하도록 도와주는 개발환경

### MTV 패턴이란?
Model - View - Template
- URLconf : URL 경롱에 맞춰 View와 Template연결
- Template : 사용자에게 보여지는 화면
- View : 웹 요청을 받고, 전달받은 데이터를 처리해서 가공
- Model : 데이터베이스에 저장되는 데이터