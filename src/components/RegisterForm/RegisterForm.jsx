import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = { name, email, password };
    dispatch(registerThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <label>
        <span>Name: </span>
        <input type="text" placeholder="John Doe" required name="userName" />
      </label>
      <label>
        <span>Email: </span>
        <input
          type="emil"
          placeholder="hotmail@hotmail.com"
          required
          name="userEmail"
        />
      </label>
      <label>
        <span>Password: </span>
        <input
          type="password"
          placeholder="*******"
          required
          name="userPassword"
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterForm;
