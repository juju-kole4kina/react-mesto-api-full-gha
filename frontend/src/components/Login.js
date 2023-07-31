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
    // <section className="login auth-page" aria-label="Авторизация">
    //     <form className="auth-page__form" onSubmit={handleSubmit} name="login-form" noValidate={true} >
    //       <h2 className="auth-page__form-title">Вход</h2>
    //       <input type="email" className="auth-page__input" value={isEmail} onChange={handleEmailChange} minLength="5" maxLength="40" name="user-email" placeholder="Email" required />
    //       <span className="auth-page__input-error user-email-error"></span>
    //       <input type="password" className="auth-page__input" value={isPassword} onChange={handlePasswordChange} minLength="6" maxLength="40" name="user-password" placeholder="Пароль" required />
    //       <span className="auth-page__input-error user-password-error"></span>
    //       <button type="submit" className="auth-page__submit-btn">Войти</button>
    //     </form>
    // </section>
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
