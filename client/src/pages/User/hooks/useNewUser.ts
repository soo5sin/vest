import React, { useState } from 'react';
import { INITIAL_USER } from '../../../constants/user';
import { useAppDispatch } from '../../../store';
import { addUserThunk } from '../../../store/reducers/user';
import { stringToBoolean } from '../../../utils/stringToboolean';

export default function useNewUser(closeModalHandler: VoidFunction) {
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
    closeModalHandler();
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: stringToBoolean(value) });
  };

  return {
    submitForm,
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
