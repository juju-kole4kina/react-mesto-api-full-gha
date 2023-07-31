import React from "react";

function AuthForm(props) {
  return (
<section className="register auth-page" aria-label={props.title}>
        <form className="auth-page__form" onSubmit={props.onSubmit} name={`${props.name}-form`} noValidate={true} >
          <h2 className="auth-page__form-title">{props.title}</h2>
          <input type="email" className="auth-page__input" value={props.email} onChange={props.emailChange} minLength="5" maxLength="40" name="new-user-email" placeholder="Email" required />
          <span className="auth-page__input-error user-email-error"></span>
          <input type="password" className="auth-page__input" value={props.password} onChange={props.passwordChange} minLength="6" maxLength="40" name="new-user-password" placeholder="Пароль" required />
          <span className="auth-page__input-error user-password-error"></span>
          <button type="submit" className="auth-page__submit-btn">{props.buttonText}</button>
        </form>
    </section>
  )
}

export default AuthForm;
