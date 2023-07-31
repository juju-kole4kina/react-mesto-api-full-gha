import React from "react";
import statusErrIcon from '../images/register-status-err.png';
import statusOkIcon from '../images/resister-srarus-ok.png';

function InfoTooltip(props) {
  return (
    <section className={`popup popup_type_InfoTooltip ${props.isOpen ? 'popup_opened' : ''}`}  aria-label="Попап результата регистрации">
      <div className="popup__container">
      <button type="button" className="popup__exit-btn" aria-label="Закрыть модальное окно" onClick={props.onClose}></button>
      <img className="popup__status-icon" alt={props.isOkStatus ? "Регистрация успешно выполнена" : "Что-то пошло не так"} src={props.status ? statusOkIcon : statusErrIcon} />
      <p className="popup__status-text">{props.status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
      </div>
    </section>
  )
}

export default InfoTooltip;
