# Nanum FE

### ⚠️ 주의사항
1. 작업 시작 전 develop에서 풀(pull) 당기고 시작.
2. 풀리퀘 보내기 전 main 브랜치에서 풀 당기고 보내기.
3. main 브랜치는 배포용. develop 브랜치는 작업물이 합쳐지는 공간.
4. git 협업 flow, Branch 네이밍은 노션 페이지 Frontend 개발문서 - Convention 참고

### 💬 commit 메세지

**commit 타입 지정 :** 타입은 태그와 제목으로 구성. 태그는 영어로 쓰되 첫 문자는 대문자로 한다. 제목은 서술형 문장이 아닌 간결하고 요점적인 서술을 한다.

태그 : 제목의 형태

| commit 타입 | 의미 |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Fix | 버그 수정 |
| Docs | 문서 수정 |
| Style | 코드 포맷팅(formatting), 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Refactor | 코드 리팩토링 |
| Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
| Chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
| Comment | 필요한 주석 추가 및 변경 |
| Rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| Remove | 파일을 삭제하는 작업만 수행한 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |

**Body**
커밋의 본문은 다음의 규칙을 지킨다.
1. 본문 내용은 양에 구애받지 않고 최대한 상세히 작성한다.
2. 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는디 or 왜 변경했는지를 설명한다.
3. 타입 : 제목과 한 줄을 띄워 분리한다

**footer**
1. 꼬리말 (footer)은 옵션.

**commit 예시**
```xml
- 파일을 생성(추가)했을 때
Feat : MainPage.jsx 파일 생성

MainPage 구현을 위해 MainPage.jsx 파일 생성

- 디자인(css) 변경했을 때
Design : MainPage.css 수정

MainPage width를 모바일 환경에 맞게 미디어 쿼리 (@media) 적용
```
