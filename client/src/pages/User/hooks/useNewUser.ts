import React, { useState } from 'react';
import { INITIAL_USER } from '../../../constants/user';
import { useAppDispatch } from '../../../store';
import { addUserThunk } from '../../../store/reducers/user';
import { getUsersThunk } from '../../../store/reducers/users';
import { stringToBoolean } from '../../../utils/stringToboolean';

export default function useNewUser(setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>) {
  const dispatch = useAppDispatch();
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

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addUserThunk(newUser));
    setNewUser(INITIAL_USER);
    setIsOpenModal(false);
    dispatch(getUsersThunk());
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: stringToBoolean(value) });
  };

  return {
    submitForm,
    setIsOpenModal,
    onChangeInputHandler,
    name,
    email,
    gender_origin,
    birth_date,
    phone_number,
    is_active,
    allow_marketing_push,
    is_staff,
  };
}
