#0204
- (Zod) search.ts
    - 서치 관련 유효성검사 파일 생성 
    - Date형식을 string형태로 받으니까 잘못된 값 들어올 수 있는 오류 및 문자열 숫자로 변환
    - 가격범위(작은값 <= 큰 값>) & 예약 날짜 (체크인 <= 체크아웃>)
#0228(Style)
padding
- 콘텐츠 내부 패딩 p-5 / 타이틀이나 navigation관련 상하 py-2.5 좌우 px-5
- 박스 내부 패딩 p-6
- 콘텐츠끼리 마진 m-5
- 콘텐츠 내부 아이템 m-2.5
radius
- 박스/콘텐츠 rounded-lg
- 내부 아이템 rounded-md
box-shadow
- box-shadow: shadow-lg(박스)
text
- 메인 타이틀 text-md font-semibold