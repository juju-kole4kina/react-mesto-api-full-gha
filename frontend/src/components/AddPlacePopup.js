import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup(props) {

  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  React.useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [props.isOpen])

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }

  function handleCardLinkName(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: cardName,
      link: cardLink
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Новое место"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input type="text" className="popup__input-item" minLength="2" maxLength="30" name="name" id="title-card"
            placeholder="Название" value={cardName} onChange={handleCardNameChange} required />
      <span className="popup__input-error title-card-error"></span>
      <input type="url" className="popup__input-item" name="link" id="card-image" placeholder="Ссылка на изображение" value={cardLink} onChange={handleCardLinkName}
          required />
      <span className="popup__input-error card-image-error"></span>
  </PopupWithForm>
  )
}

export default AddPlacePopup;
