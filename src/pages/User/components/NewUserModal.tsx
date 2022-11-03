import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { addUserThunk, getUsersThunk } from '../../../store/reducers/users';
import { useStringToBoolean } from '../hooks/useStringToBoolean';

function NewUserModal() {
  const INITIAL_USER = {
    id: null,
    uuid: '',
    photo: '',
    name: '',
    email: '',
    password: '0000',
    age: null,
    gender_origin: 1,
    birth_date: '',
    phone_number: '',
    address: '',
    detail_address: '',
    last_login: '',
    created_at: '',
    updated_at: '',
    allow_marketing_push: false,
    allow_invest_push: false,
    is_active: false,
    is_staff: false,
  };

  const [newUser, setNewUser] = useState(INITIAL_USER);
  const {
    name,
    email,
    gender_origin,
    birth_date,
    phone_number,
    is_active,
    allow_marketing_push,
    is_staff,
  } = newUser;
  const dispatch = useAppDispatch();

  const onSubmitNewUserHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addUserThunk(newUser));
    setNewUser(INITIAL_USER);
    dispatch(getUsersThunk());
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: useStringToBoolean(value) });
  };

  return (
    <form onSubmit={onSubmitNewUserHandler}>
      <label htmlFor="name">고객명</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        required
        placeholder="김핀트"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="email">이메일 주소</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        required
        placeholder="example@email.com"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="gender_origin">성별 코드</label>
      <select name="gender_origin" onChange={onChangeInputHandler} value={gender_origin}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <label htmlFor="birth_date">생년월일</label>
      <input
        type="text"
        name="birth_date"
        value={birth_date}
        placeholder="0000-00-00"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="phone_number">휴대폰번호</label>
      <input
        type="text"
        id="phone_number"
        name="phone_number"
        value={phone_number}
        placeholder="010-0000-0000"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="allow_marketing_push">마케팅 수신 동의</label>
      <select
        name="allow_marketing_push"
        onChange={onChangeInputHandler}
        value={String(allow_marketing_push)}
      >
        <option value="true">O</option>
        <option value="false">X</option>
      </select>
      <label htmlFor="is_staff">임직원 여부</label>
      <select name="is_staff" onChange={onChangeInputHandler} value={String(is_staff)}>
        <option value="true">O</option>
        <option value="false">X</option>
      </select>
      <label htmlFor="is_active">활성화 여부</label>
      <select name="is_active" onChange={onChangeInputHandler} value={String(is_active)}>
        <option value="true">O</option>
        <option value="false">X</option>
      </select>
      <button type="submit">등록</button>
    </form>
  );
}

export default NewUserModal;
