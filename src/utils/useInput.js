import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = value => setValue(value);
  return { value, onChange };
};
