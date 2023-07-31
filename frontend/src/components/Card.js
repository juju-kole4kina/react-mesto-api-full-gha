import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `gallery__delete-btn ${isOwn ? '' : 'gallery__delete-btn_hidden'}`
  );

  const isLike = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `gallery__like-btn ${isLike ? 'gallery__like-btn_active' : ''}`
  );

  function handleClick(){
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return(
    <li className="gallery__item">
            <img src={props.card.link} alt={props.card.name} className="gallery__image" onClick={handleClick} />
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} aria-label="Удалить"></button>
            <div className="gallery__description">
              <h2 className="gallery__item-title">{props.card.name}</h2>
              <div className="card__like">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="Мне нравится"></button>
                <span className="card__like-count">{props.card.likes.length}</span>
              </div>
            </div>
          </li>
  )
}

export default Card;
