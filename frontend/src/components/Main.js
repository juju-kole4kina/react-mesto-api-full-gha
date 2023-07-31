import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {

const currentUser = React.useContext(CurrentUserContext);

  return(
    <main className="content">
      <section className="profile" aria-label="Профайл пользователя">
      <div className="profile__avatar" onClick={props.onEditAvatar}>
        <img src={currentUser.avatar} alt="Аватар" className="profile__image" />
      </div>
      <div className="profile__info">
        <h1 className="profile__user-name">{currentUser.name}</h1>
        <p className="profile__user-description">{currentUser.about}</p>
        <button onClick={props.onEditProfile} type="button" className="profile__edit-btn" aria-label="Редактировать профиль"></button>
      </div>
      <button onClick={props.onAddPlace} type="button" className="profile__add-btn" aria-label="Добавить фото"></button>
    </section>
    <section className="gallery" aria-label="Галерея">
      <ul className="gallery__list">
        {props.cards.map((card) => (
          <Card key={card._id}
          card={card}
          onCardClick={props.onCardClick}
          onCardLike={props.handleCardLike}
          onCardDelete={props.handleCardDelete} />
        ))}
      </ul>
    </section>
  </main>
  );
}

export default Main;
