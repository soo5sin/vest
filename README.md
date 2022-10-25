# 💼 투자 관리 서비스

투자 관리 서비스의 관리자 기능 구현

(원티드 프리온보딩 코스에서 팀으로 진행했던 [기업과제](https://pollen-port-115.notion.site/6eda934f6d804e20bab0de8a0363152b)를 목표 수정해서 다시 구현)

### 배포링크

(링크)

### 개발 기간

`2022/10/25 ~`

<br/>

## 목차

- 실행
- 설계
- 기능
- 구현
- 트러블 슈팅
- 학습 내용

<br/>

## 📌 실행

#### 프로젝트 클론

```shell
$ git clone https://github.com/seriparkdev/Investment-management-service.git
```

#### 패키지 설치

```shell
$ npm install
```

#### 서버 실행

```shell
$ npm start
```

<br/>

## 📌 설계

### 프로젝트 구조

<details>
<summary>open</summary>
```
수정
```
</details>

</br>

### 기술 스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/Redux--toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

</br>

### 요구 사항

✔️ 사용자 목록

- 표기되어야 하는 정보
  - 고객명(name) : 고객명을 누를 경우 사용자 상세화면으로 이동
  - 보유중인 계좌수(account_count)
  - 이메일 주소 (email)
  - 주민등록상 성별코드 (gender_origin)
  - 생년월일 (yyyy-mm-dd) (birth_date)
  - 휴대폰 번호 (phone_number)
  - 최근로그인 (last_login)
  - 혜택 수신 동의 여부 (allow_marketing_push)
  - 활성화 여부 (is_active)
  - 가입일 (created_at)
- 구현되어야 하는 기능
  - 목록에서 활성화 여부, 임직원 계좌 여부 필터링
  - 리스트 페이지에서 검색 가능
  - 페이지네이션 기능
  - 임의로 신규 사용자 추가
  - 잘못 생성한 사용자 삭제
  - 개명 한 사용자를 위해 사용자명 변경 가능

✔️ 계좌 목록

- 표기되어야 하는 정보
  - 고객명(user_name)
    - 고객명을 누를 경우 사용자 상세화면으로 이동
  - 브로커명(broker_name)
  - 계좌번호(number)
  - 계좌상태(status
  - 계좌명(name)
  - 평가금액(assets)
  - 입금금액(payments)
  - 계좌활성화여부(is_active)
  - 계좌개설일(created_at)
- 구현되어야 하는 기능
  - 목록에서 브로커명, 계좌 활성화 여부, 계좌 상태 필터링 가능
  - 리스트 페이지에서 검색 가능
  - 페이지네이션 기능

✔️ 조건

- 새로고침을 해도 로그인 상태 유지. 상태에 따라 기존에 머무르던 화면을 그대로 보여줌.
- 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동.
- 계좌 리스트에서 사용자 이름을 누르면 사용자 상세로 이동.
- 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색.

<br/>
