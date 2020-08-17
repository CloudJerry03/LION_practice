# 4강 자소설 닷컴

## 4 - 4 Primary Key.md

#### 200817

### :mouse:Primary Key
- 오브젝트를 식별할 수 있는 값
- 중복될 수 없는 단일값
- 항상 있어야함
- django에서는 PK를 안만들면 자동으로 id가 생성됨
```
my_pk = models.IntergerField(primary_key=True)
```
- 다음과 같이 생성도 가능