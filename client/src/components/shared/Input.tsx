import { useState } from 'react';

function Input<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);
  const onChangeValueHandler = (e: any) => {
    setValue(e.target.value);
  };

  return { value, onChangeValueHandler };
}

export default Input;
