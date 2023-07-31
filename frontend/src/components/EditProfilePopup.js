import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    if(currentUser.name) {
      setName(currentUser.name);
    }
    if(currentUser.about) {
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Редактировать профиль"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      >
      <input type="text" className="popup__input-item" minLength="2" maxLength="40" name="name" id="user-name"
          placeholder="Ваше имя" value={name} onChange={handleNameChange} required />
      <span className="popup__input-error user-name-error"></span>
      <input type="text" className="popup__input-item" minLength="2" maxLength="200" name="about" id="user-description"
          placeholder="Ваш род деятельности" value={description} onChange={handleDescriptionChange} required />
      <span className="popup__input-error user-description-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
