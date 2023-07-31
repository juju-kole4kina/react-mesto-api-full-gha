import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('');

  React.useEffect(() => {
    avatarRef.current.value='';
  }, [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm PopupWithForm
      name="edit-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Обновить аватар"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input type="url" className="popup__input-item" name="link" id="avatar-image" placeholder="Ссылка на изображение"
            ref={avatarRef} required />
      <span className="popup__input-error avatar-image-error"></span>
  </PopupWithForm>
  )
}

export default EditAvatarPopup;
