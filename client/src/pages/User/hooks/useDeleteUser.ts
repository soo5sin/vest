import { useAppDispatch } from '../../../store';
import { deleteUserThunk } from '../../../store/reducers/user';
import { getUsersThunk } from '../../../store/reducers/users';

export default function useDeleteUser(id: number | null) {
  const dispatch = useAppDispatch();

  const deleteUserHandler = async () => {
    if (!confirm('정말로 해당 고객을 삭제하시겠습니까?')) return;
    await dispatch(deleteUserThunk(id));
    dispatch(getUsersThunk());
  };

  return { deleteUserHandler };
}
