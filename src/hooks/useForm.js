import { useReducer, useState } from "react";

const formReducer = (state, event) => {
  let a = { ...state, [event.target.name]: event.target.value };
  return a
};

function useForm ({ validate, onSubmit }) {

  const [formData, dispatchFormData] = useReducer(formReducer, {});
  const [errors, setErrors] = useState({});

  const _onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    onSubmit(formData);
  };

  return { dispatchFormData, errors, formData, _onSubmit };
};

export default useForm;
