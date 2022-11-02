import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { addUserThunk, getUsersThunk } from '../../../store/reducers/users';

function NewUserModal() {
  const INITIAL_USER = {
    id: null,
    uuid: '',
    photo: '',
    name: '',
    email: '',
    password: '0000',
    age: null,
    gender_origin: 0,
    birth_date: '',
    phone_number: '',
    address: '',
    detail_address: '',
    last_login: '',
    created_at: '',
    updated_at: '',
    allow_marketing_push: 'X',
    allow_invest_push: false,
    is_active: 'X',
    is_staff: 'X',
  };

  const [newUser, setNewUser] = useState(INITIAL_USER);
  const {
    name,
    email,
    gender_origin,
    birth_date,
    phone_number,
    allow_marketing_push,
    is_staff,
    is_active,
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
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <form onSubmit={onSubmitNewUserHandler}>
      <label htmlFor="name">고객명</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="김핀트"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="email">이메일 주소</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        placeholder="example@email.com"
        onChange={onChangeInputHandler}
      />
      <label htmlFor="gender_origin">성별 코드</label>
      <select name="gender_origin" onChange={onChangeInputHandler} value={gender_origin}>
        <option value={0}>----</option>
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
        value={allow_marketing_push}
      >
        <option value="O">O</option>
        <option value="X">x</option>
      </select>
      <label htmlFor="is_staff">임직원 여부</label>
      <select name="is_staff" onChange={onChangeInputHandler} value={is_staff}>
        <option value="O">O</option>
        <option value="X">x</option>
      </select>
      <label htmlFor="is_active">활성화 여부</label>
      <select name="is_active" onChange={onChangeInputHandler} value={is_active}>
        <option value="O">O</option>
        <option value="X">x</option>
      </select>
      <button type="submit">등록</button>
    </form>
  );
}

export default NewUserModal;
