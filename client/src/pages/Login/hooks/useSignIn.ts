import { useAppDispatch } from '../../../store';
import { signInThunk } from '../../../store/reducers/auth';
import { Sign } from '../../../types/auth';

export default function useLogin({ email, password }: Sign) {
  const dispatch = useAppDispatch();

  const onSubmitLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(signInThunk({ email, password }));
  };

  return { onSubmitLoginHandler };
}
