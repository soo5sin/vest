# 💼 투자 관리 서비스

투자 관리 서비스의 관리자 기능 구현

: 원티드 프리온보딩 코스에서 팀으로 진행했던 기업과제를 개인 프로젝트로 다시 구현

<br/>

## 목차

- [구현 화면](#구현-화면)
- [프로젝트 실행](#프로젝트-실행)
- [구현 요구 사항](#구현-요구-사항)
- [기술 스택 및 사용 라이브러리](#기술-스택-및-사용-라이브러리)
- [폴더 구조](#폴더-구조)
- [트러블 슈팅](#트러블-슈팅)
- [과제 진행 시 주안점](#과제-진행-시-주안점)
- [한계점 및 개선 사항](#한계점-및-개선-사항)

<br/>

## 구현 화면

> 인증

| 로그인, 로그아웃                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/104069346/205973156-c41f0a15-934f-48d4-a5ac-98a0a1f0a6dd.gif"> |

<br>

> 유저

| 유저 검색, 페이지네이션                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/104069346/205714154-c947cc82-9c6a-4e34-aa84-774f2ae29333.gif"> |

| 유저 삭제, 수정, 고객 상세 페이지                                                                                  |
| ------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/104069346/205714162-a2d57217-0574-456c-8b94-b875c6512f3d.gif"> |

| 유저 추가                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/104069346/205714165-83b17457-3f13-4abd-b374-d26391271dc9.gif"> |

<br>

> 계좌

| 계좌 검색, 고객/계좌 상세 페이지, 페이지네이션                                                                     |
| ------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/104069346/205714188-176b7d22-7b06-47fa-b4ed-28f055901a50.gif"> |

<br>

## 프로젝트 실행

<br>

> 프로젝트 클론

```shell
$ git clone https://github.com/seriparkdev/Investment-management-service.git
```

> 서버 실행

```shell
$ npm install
$ npm run gen
$ npm start
```

> 클라이언트 실행

```shell
$ npm install
$ npm start
```

> 로그인

`아이디(email): test@test.com`

`비밀번호(password): test`

<br/>

## 구현 요구 사항

✔️ 사용자 목록

- 표기되어야 하는 정보
  - [x] 고객명(name) : 가운데 글자 마스킹 필요, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기
    - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
  - [x] 보유중인 계좌수(account_count) : (해당 API 호출 후 데이터를 정제하여 표기)
  - [x] 이메일 주소 (email)
  - [x] 주민등록상 성별코드 (gender_origin)
  - [x] 생년월일 (yyyy-mm-dd) (birth_date)
  - [x] 휴대폰 번호 (가운데 4자리 `***` 로 마스킹 필요) (phone_number)
  - [x] 최근로그인 (last_login)
  - [x] 혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)
  - [x] 활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)
  - [x] 가입일 (created_at)
- 구현되어야 하는 기능
  - [x] 리스트 페이지에서는 검색이 가능해야 합니다.
  - [x] 페이지네이션이 되어야 합니다.
  - [x] 임의로 신규 사용자를 추가할 수 있어야 합니다.
  - [x] 잘못 생성한 사용자를 삭제할 수 있어야 합니다.
  - [x] 개명을 한 사용자를 위해 사용자명을 변경할 수 있어야 합니다.

✔️ 계좌 목록

- 표기되어야 하는 정보
  - [x] 고객명(user_name) : 고객ID 를 참조하여 실제 이름으로 보여져야 합니다.
    - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
  - [x] 브로커명(broker_name) : 예시) OO증권, `brokers.json` 를 참조하여 실제 이름으로 보여져야 합니다.
  - [x] 계좌번호(number) : 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 `*` 글자로 마스킹 처리가 필요합니다.
  - [x] 계좌상태(status) : 예시) 운용중, `accountStatus.json` 를 참조하여 실제 이름으로 보여져야 합니다.
  - [x] 계좌명(name) : 계좌명입니다.
  - [x] 평가금액(assets) : 예시) 123,123,123
  - [x] 입금금액(payments) : 예시) 123,123,123
  - [x] 계좌활성화여부(is_active) : 계좌 활성화 여부
  - [x] 계좌개설일(created_at) :
- 구현되어야 하는 기능
  - [x] 리스트 페이지에서는 검색이 가능해야 합니다.
  - [x] 페이지네이션이 되어야 합니다.

✔️ 조건

- [x] Sider 메뉴에서는 현재 보고 있는 화면에 해당하는 메뉴가 하이라이트 되어야 합니다.
- [x] 새로고침을 해도 로그인 상태가 유지되어야 하며, 상태에 따라 기존에 머무르던 화면이 그대로 보여야 합니다.
- [x] 계좌 리스트에서 계좌번호를 누르면 계좌상세 화면으로 이동합니다.
- [x] 계좌 리스트에서 사용자 이름을 누르면 사용자 상세로 이동합니다.
- [x] 사용자 상세에서 사용자의 계좌목록이 보여야 합니다.
- [x] 수익률이 플러스인 계좌의 총자산 금액은 빨간색, 원금과 동일한 경우 검정색, 마이너스일 경우 파란색으로 보여줘야 합니다.
- [x] 계좌 목록에서 broker_id 에 해당하는 실제 브로커명 (OO투자증권) 이 보여야 합니다.

<br/>

## 기술 스택 및 사용 라이브러리

<br>

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/Redux--toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br>

💡 Redux Toolkit 사용 이유

Redux를 이 프로젝트를 통해서 더 공부하고 싶었고 전역 상태 관리를 위한 라이브러리가 필요해서 사용했습니다. Context API가 또 하나의 대안이 될 수 있으나, 프로젝트 규모가 작지 않아 사용 시 코드가 복잡해지고 유지 보수하기 어려워져서 사용하지 않았습니다. 그리고 Redux는 비동기 작업을 처리하기 위한 미들웨어나, `useSelector`, `useDispatch` 같이 편리하고 최적화가 잘 되어있는 hook 함수 등을 포함하고 있기 때문에, 이 기능들을 이용해서 좀 더 수월하게 프로젝트를 관리하고 최적화 시키기 좋을 것 같다 생각했습니다.

Redux-toolkit은 기존의 thunk, saga의 기능들이 탑재되어 있고, 보일러 플레이트가 훨씬 짧습니다. 기존의 Redux는 이 프로젝트에 사용하기에 무거운 점이 있기 때문에 이는 사용하지 않았습니다.

<br>

💡 styled-components 사용 이유

tailwind는 코드의 가독성을 많이 해치기도 하고 관심사의 분리가 이루어지지 않습니다. [npm 패키지 다운로드 수를 비교해봤을 때](https://npmtrends.com/emotion-vs-styled-components) emotion보다는 styled-components가 훨씬 더 많이 사용되고 있어 이를 채택했습니다.

<br>

💡 그 외 사용 라이브러리

dayjs: 시간 데이터를 원하는 형식으로 간편히 변환하기 위해 사용했습니다.

redux-logger: 액션을 dispatch 할 때 데이터의 상태를 간편하게 볼 수 있어서 사용했습니다.

</br>

## 폴더 구조

| 폴더       | 용도                                                          |
| ---------- | ------------------------------------------------------------- |
| api        | axios 인스턴스, api 관리 폴더                                 |
| assets     | image, data 등 프로젝트에 필요한 파일 관리 폴더               |
| components | 프로젝트에 주로 사용되는, 공통적으로 들어가는 컴포넌트를 관리 |
| constants  | 상수 관리 폴더                                                |
| pages      | 도메인 별로 폴더를 나눴고, 각각 필요한 컴포넌트, 훅을 관리    |
| routes     | router와 관련된 폴더                                          |
| store      | client 상태 관리와 관련된 폴더                                |
| styles     | 프로젝트에 필요한 global, theme CSS                           |
| types      | 반복되어 사용되는 타입들을 관리                               |
| utils      | 여러 곳에서 사용되는 hook이나 프로젝트에 유용한 것들을 관리   |

<br>

### 파일 부가 설명

> utils/hooks

| 파일                       | 용도                               |
| -------------------------- | ---------------------------------- |
| useFindUserNameById        | 고객명 찾기                        |
| useFormatDate              | YYYY-MM-DD 형식으로 변환           |
| useGetAccountsById         | 고객이 가지고 있는 계좌들 가져오기 |
| useGetBrokerName           | 브로커명으로 변환                  |
| useSliceArrayForPagination | 배열 자르기                        |

</br>

<details>
<summary>파일 구조 tree</summary>

```
├─api
├─assets
│  ├─data
│  └─image
├─components
│  ├─layout
│  └─shared
│      ├─error
│      └─table
├─constants
├─pages
│  ├─Account
│  │  ├─components
│  │  └─hooks
│  ├─AccountDetail
│  │  └─components
│  ├─Login
│  │  └─hooks
│  ├─Main
│  ├─User
│  │  ├─components
│  │  └─hooks
│  └─UserDetail
│      └─components
├─routes
├─store
│  └─reducers
├─styles
├─types
└─utils
    └─hooks
```

</details>

</br>

## 트러블 슈팅

> 문제

axios interceptor에서 에러 처리 중 다음과 같은 오류 발생

<img width="404" alt="issue1" src="https://user-images.githubusercontent.com/104069346/203254813-51920fb9-3378-4076-b0a7-d04a84c17236.png">

> 해결

문제가 되었던 코드

```javascript
if (errorStatus === 401) {
  UserToken.remove();
  navigate(ROUTE.LOGIN); // useNavigate()
}
```

해당 코드를 axios interceptor의 에러 처리 부분에 작성했는데 이는 다음과 같은 [hook 호출 규칙](https://reactjs.org/warnings/invalid-hook-call-warning.html)을 어긴 것이다.

`Call them at the top level in the body of a function component.`

`Call them at the top level in the body of a custom Hook.`

그렇기 때문에 useNavigate로 리다이렉트를 하지 않고, 다른 방법을 써야 했다. replace는 앞서 언급했던 제약을 받지 않기 때문에 이를 사용해 문제를 해결했다.

```javascript
if (errorStatus === 401) {
  UserToken.remove();
  window.location.replace(ROUTE.LOGIN);
}
```

</br>

> 문제

토큰을 받도록 axios를 설정했음에도 계속해서 client에서는 토큰을 받지 못하는 오류가 발생했다.

> 해결

아래는 오류와 관련된 코드다.

```javascript
const token = UserToken.get();

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

로컬스토리지에 토큰이 저장되어있는 것을 확인할 수 있었기 때문에, axios에서 token을 제대로 받지 못하는 것으로 추정됐다. 이 오류의 해결 방법으로 [interceptor](https://github.com/axios/axios#interceptors)를 공부하고 적용했다. interceptor는 then이나, catch로 처리되기 전에 요청을 가로챌 수 있기 때문에 확실하게 헤더에 토큰을 담아 요청을 할 수 있다.

아래와 같이 interceptor를 적용한 코드로 오류를 해결했다.

```javascript
instance.interceptors.request.use((config) => {
  const token = UserToken.get();
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
});
```

<br>

> 문제

유저 삭제가 제대로 되지 않는 현상. 삭제가 되었음에도 view에 반영이 되지 않음.

> 해결

redux-logger를 살펴보니 이와 같은 상황일 때 오류가 발생했다.

<img width="270" alt="logger" src="https://user-images.githubusercontent.com/104069346/209355415-b5e0a1f0-26e5-4b6c-9e3f-636c512df638.png">

`deleteUser`보다 `getUsers`가 먼저 처리가 되어 삭제되기 전에 고객 리스트를 받아온 것이다.

그래서 아래와 같이 `deleteUser` dispatch 앞에 await를 붙여 코드를 수정했고, 문제가 해결됐다.

```javascript
const deleteUserHandler = async () => {
  if (!confirm("정말로 해당 고객을 삭제하시겠습니까?")) return;
  await dispatch(deleteUserThunk(id));
  dispatch(getUsersThunk());
};
```

<br>

> 문제

검색 결과가 없을 때 사용자에게 피드백을 주기 위해 다음과 같이 코드를 작성했다. 그런데 검색 결과가 없음에도, 데이터가 있을 때의 로직을 실행했다.

**data === Array**

```javascript
data ? 데이터 있을 때 로직 : 없을 때 로직
```

> 해결

`if([])`로 빈 배열일 때 어떤 값을 반환하는지 검사해보았더니, true를 반환했다. 문제의 코드도 true를 반환하기 때문에 정상적으로 작동을 하지 않았던 것이다. 빈 배열은 length로 검사할 수 있기 때문에 이를 통해서 해결했다.

<br>

> 문제

다음 코드에서 axios request config로 들어가는 params의 타입 지정 문제

```javascript
export const getAccountThunk = createAsyncThunk(
  ACCOUNT.GET,
  async (params?: ❓ ) => {
    try {
      const response = await api.get(`/accounts`, { params });
```

paramas에는 객체가 들어가기 때문에, object로 타입을 지정했다. 그리고 interceptor의 config의 params에도 object 타입을 넣어주었다.

```javascript
config.paramsSerializer = {
  serialize: (params: object) => {
    return new URLSearchParams(params).toString();
  },
};
```

그러나 이와 같은 에러가 발생했다.

`'object' 형식의 인수는 'string | string[][] | Record<string, string> | URLSearchParams | undefined' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)`

> 해결

에러 문구를 보고 `Record` 타입에 대해 공부했고, `Record<string, string>` 이라는 타입을 넣어 해결했다. 이는 프로퍼티 키가 string, 프로퍼티 값이 string인 객체의 타입을 뜻한다.

<br>

## 과제 진행 시 주안점

> Redux

Redux를 라이브러리로 사용했기 때문에 이를 잘 사용하는 방법에 대해 고민했다. 불필요하게 사용하고 있는 부분은 없는지, 어떻게 최대한 활용할 수 있는지 방법을 계속 찾았다.

처음엔 Redux를 굳이 사용하지 않아도 되는 부분은 사용하지 않고 처리를 했는데, 그러다 보니 데이터를 받아올 때 로딩 상태와 에러 상태 처리하는 것이 불편해졌다. `Suspense`로 로딩 상태를 처리하고 `useState`로 에러 상태 처리해두었으나 Redux로 관리하는 것이 더 깔끔하게 느껴졌다. 그래서 Redux로 이 부분들을 처리했더니, 긴 비동기 통신 로직들이 숨겨져서 깔끔해지고 가독성이 더 좋아지는 것을 느꼈다. 그러나 Redux를 이런 방향으로 사용해도 되는 지에 대한 고민이 남게 되었다.

<br>

> 가독성 높이기 / 중복성 줄이기

코드가 복잡해보이고, 읽히지 않으면 점점 더 유지 보수하기 어려워지기 때문에 가독성이 좋아질 수 있는 방향으로 작성하려고 노력했다. 세부구현은 최대한 숨기기 위해 컴포넌트에서 분리할 수 있는 함수들은 hook으로 뺐고, 변수명이나 함수명을 지을 때 좀 더 직관적으로 바로 알아볼 수 있는 이름으로 지으려고 했다.

중복이 되는 코드를 작성하고 있다는 느낌이 들 때는 최대한 재사용할 수 있는 컴포넌트로 만들어 관리했고, 공통적으로 사용되는 함수들은 utils의 hooks 폴더에 담았다.

<br>

## 한계점 및 개선 사항

> 아토믹 디자인

아토믹 디자인 패턴으로 디자인 시스템을 구축해보고 싶었으나, 아직 잘 와닿지 않기도 하고 직접 구현해보려고 하니 어려워서 제대로 구현해내지 못했던 것 같다. input 같은 것도 분리해서 쓰고 싶었으나 생각보다 어려웠고, 시간이 오래걸릴 것 같아 미뤄두고 구현에만 집중했던 것이 아쉬웠다.

<br>

> 유지 보수 / 선언형 프로그래밍

선언형으로 코드를 작성해서 이해하기 쉽고, 유지 보수하기 쉽게 하고 싶었다. 그러나, 세부 구현을 숨기는 작업을 할 때 훅으로 어떻게 만들어야 할지 감이 안 잡힐 때도 있었고, 추상화를 어떻게 해야 좋을지 어려웠다. 또 선언형으로 바꾸려다보니 너무 많이 컴포넌트를 나눠서 재사용성이 없는 컴포넌트를 생산한 것 같은 느낌이 들어 적극적으로 시도하지 못했다. 구현 초기에 아토믹 디자인 패턴을 고려해 원자 단위의 컴포넌트를 미리 만들어뒀다면, 선언형으로 코드를 작성하기도 쉬웠을 것 같다. 이는 좋은 사례의 코드를 많이 보면서 연습을 한 뒤 감을 잡아야 할 것 같다.
