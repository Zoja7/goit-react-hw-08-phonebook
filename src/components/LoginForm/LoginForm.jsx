import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = { email, password };
    dispatch(loginThunk(formData));
    form.reset();
  };
  return (
    <form className={css.formLogin} onSubmit={onSubmit} autoComplete="off">
      <label className={css.labelLogin}>
        <span>Email </span>
        <input
          className={css.inputLogin}
          type="emil"
          placeholder="hotmail@hotmail.com"
          required
          name="userEmail"
        />
      </label>
      <label className={css.labelLogin}>
        <span>Password </span>
        <input
          className={css.inputLogin}
          type="password"
          placeholder="*******"
          required
          name="userPassword"
          minLength={7}
        />
      </label>
      <br />
      <button className={css.inputLoginButton} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
