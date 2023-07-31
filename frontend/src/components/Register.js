import React from "react";
import { Link } from 'react-router-dom';
import AuthForm from "./AuthForm";
import '../index.css';

function Register(props) {

  const [isEmail, setEmail] = React.useState('');
  const [isPassword, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.isRegister(isEmail, isPassword);
  }

  return (
    // <section className="register auth-page" aria-label="Регистрация">
    //     <form className="auth-page__form" onSubmit={handleSubmit} name="register-form" noValidate={true} >
    //       <h2 className="auth-page__form-title">Регистрация</h2>
    //       <input type="email" className="auth-page__input" value={isEmail} onChange={handleEmailChange} minLength="5" maxLength="40" name="new-user-email" placeholder="Email" required />
    //       <span className="auth-page__input-error user-email-error"></span>
    //       <input type="password" className="auth-page__input" value={isPassword} onChange={handlePasswordChange} minLength="6" maxLength="40" name="new-user-password" placeholder="Пароль" required />
    //       <span className="auth-page__input-error user-password-error"></span>
    //       <button type="submit" className="auth-page__submit-btn">Зарегистрироваться</button>
    //     </form>
    //     <p className="auth-page__question">Уже зарегистрированны? <Link to="sign-in" className="auth-page__link">Войти</Link></p>
    // </section>
    <>
      <AuthForm
        name="register"
        title="Регистрация"
        email={isEmail}
        password={isPassword}
        emailChange={handleEmailChange}
        passwordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        buttonText="Зарегистрироваться"
      >
      </AuthForm>
      <p className="auth-page__question">Уже зарегистрированны? <Link to="sign-in" className="auth-page__link">Войти</Link></p>
    </>

  )
}

export default Register;
