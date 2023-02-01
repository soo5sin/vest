import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import instance from '../../../api/instance';
import { useAppDispatch, useAppSelector } from '../../../store';
import { getUserThunk } from '../../../store/reducers/user';
import { stringToBoolean } from '../../../utils/stringToboolean';

export default function useEditUser(setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>) {
  const { data } = useAppSelector((state) => state.reducers.user);
  const [user, setUser] = useState(data);
  const dispatch = useAppDispatch();

  const submitEditUserForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setUser({ ...user, password: '0000' });
      await instance.put(`/users/${data.id}`, user);
      dispatch(getUserThunk({ id: data.id }));
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw new Error(error.response.data);
      } else {
        throw new Error('fail to get user information');
      }
    }
    setIsOpenModal(false);
  };

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: stringToBoolean(value) });
  };

  useEffect(() => {
    setUser(data);
  }, [data.id]);

  return {
    onChangeInputHandler,
    submitEditUserForm,
    user: data,
  };
}
