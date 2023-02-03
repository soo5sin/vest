import styled from 'styled-components';
import Button from '../../../components/shared/Button';
import useNewUser from '../hooks/useNewUser';

export default function NewUserForm({ closeModalHandler }: { closeModalHandler: VoidFunction }) {
  const {
    onChangeInputHandler,
    submitForm,
    name,
    email,
    gender_origin,
    birth_date,
    phone_number,
    is_active,
    allow_marketing_push,
    is_staff,
  } = useNewUser(closeModalHandler);

  return (
    <S.Form onSubmit={submitForm}>
      <label htmlFor="name">고객명</label>
      <S.Input
        type="text"
        id="name"
        name="name"
        value={name}
        required
        placeholder="김핀트"
        onChange={onChangeInputHandler}
      />
      <S.Select>
        <label htmlFor="gender_origin">성별 코드</label>
        <select name="gender_origin" onChange={onChangeInputHandler} value={gender_origin}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </S.Select>
      <label htmlFor="birth_date">생년월일</label>
      <S.Input
        type="text"
        id="birth_date"
        name="birth_date"
        value={birth_date}
        placeholder="0000-00-00"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="phone_number">휴대폰번호</label>
      <S.Input
        type="text"
        id="phone_number"
        name="phone_number"
        value={phone_number}
        placeholder="010-0000-0000"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="email">이메일 주소</label>
      <S.Input
        type="text"
        id="email"
        name="email"
        value={email}
        required
        placeholder="example@email.com"
        onChange={onChangeInputHandler}
      />
      <S.Select>
        <label htmlFor="allow_marketing_push">마케팅 수신 동의</label>
        <select
          name="allow_marketing_push"
          onChange={onChangeInputHandler}
          value={String(allow_marketing_push)}
        >
          <option value="true">O</option>
          <option value="false">X</option>
        </select>
      </S.Select>
      <S.Select>
        <label htmlFor="is_staff">임직원 여부</label>
        <select name="is_staff" onChange={onChangeInputHandler} value={String(is_staff)}>
          <option value="true">O</option>
          <option value="false">X</option>
        </select>
      </S.Select>
      <S.Select>
        <label htmlFor="is_active">활성화 여부</label>
        <select name="is_active" onChange={onChangeInputHandler} value={String(is_active)}>
          <option value="true">O</option>
          <option value="false">X</option>
        </select>
      </S.Select>
      <S.ButtonWrapper>
        <Button type="button" colorTheme="gray" onClick={closeModalHandler}>
          취소
        </Button>
        <Button type="submit">등록</Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

const S = {
  Input: styled.input`
    margin: 5px 0 10px 0;
    padding: 14px;
    background-color: ${({ theme }) => theme.palette.GRAY_50};
    &:focus {
      outline-color: ${({ theme }) => theme.palette.SUB_100};
    }
  `,
  Select: styled.div`
    & > label {
      margin-right: 10px;
    }
    margin: 5px 0 10px 0;
  `,
  ButtonWrapper: styled.div`
    & > button {
      margin-top: 15px;
      width: 45%;
      border-radius: 5px;
    }
    display: flex;
    justify-content: space-between;
  `,
  Form: styled.form`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 7000;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 25px 30px;
    width: 25%;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  `,
};
