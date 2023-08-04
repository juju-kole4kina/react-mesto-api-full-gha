import React from "react";
import AuthForm from "./AuthForm";
import '../index.css';

function Login(props) {

  const [isEmail,  setEmail] = React.useState('');
  const [isPassword, setPassword] = React.useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(isEmail, isPassword);
  }

  return (
    <AuthForm
        name="login"
        title="Вход"
        email={isEmail}
        password={isPassword}
        emailChange={handleEmailChange}
        passwordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        buttonText="Войти"
      >
      </AuthForm>
  )
}

export default Login;
