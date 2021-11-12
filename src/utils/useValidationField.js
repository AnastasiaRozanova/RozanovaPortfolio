import { useState, useCallback } from 'react';

export const useValidationField = (validations = []) => {
  const [msg, setMsg] = useState(null);

  const validateValue = useCallback(
    (...res) => {
      for (let i = 0, { length } = validations; i < length; i++) {
        const [validation, err] = validations[i];
        if (!validation(...res)) {
          setMsg(err);

          return false;
        }
      }

      setMsg(null);

      return true;
    },
    [validations],
  );

  const getValidatedChangeHandler =
    handler =>
    (...res) => {
      handler && handler(...res);

      return validateValue(...res);
    };

  return [msg, getValidatedChangeHandler];
};
