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
