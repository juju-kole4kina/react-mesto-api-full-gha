import React from 'react';
import Popup from './Popup';

function PopupWithForm(props) {

  return(
  <Popup
    name={props.name}
    isOpen={props.isOpen}
    onClose={props.onClose}
    container="container"
  >
    <form action="post" className={`popup__form popup__form_type_${props.name}`} name={props.name} onSubmit={props.onSubmit} noValidate={true}>
      <h2 className="popup__heading">{props.title}</h2>
      {props.children}
      <button type="submit" className="popup__safe-btn">{props.buttonText}</button>
    </form>
  </Popup>
  );
}

export default PopupWithForm;
