# 3강 드리머리

## 3 - 7 CRUD#1.md

#### 200810

### CRUD
- Create Read Update Delete

### GET/POST
- 클라이언트에서 서버로 보내는 방법
1. GET
   - Data를 "URL"에 포함시켜 전송
   - 전송하는 길이에 제약 O
   - Caching 가능 (REST에서 데이터 조회에 활용)
    -> READ에서 활용
2. POST
   - Data를 "Body"에 넣어 전송(URL에서 노출 X)
   - 전송하는 길이에 제약 X
   - Caching 불가능 (REST에서 데이터 생성에 활용)
    -> CREATE/UPDATE에서 활용

### CREATE
- 새로운 객체를 생성해 Data를 저장

### UPDATE
- 정보 수정이 필요한 객체를 찾아 Data를 새롭게 저장
  
### DELETE
- 제거가 필요한 객체를 찾아 삭제