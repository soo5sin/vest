import { useState } from 'react';

type InputType = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
];

function useInput(initialValue: string): InputType {
  const [value, setValue] = useState(initialValue);

  const onChangeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChangeValueHandler, setValue];
}

export default useInput;
