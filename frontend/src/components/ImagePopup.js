import React from 'react';
import Popup from './Popup';

function ImagePopup(props) {
  return(
    <Popup
      name="opened-card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      container="picture-container"
    >
      <figure className="popup__figure">
        <img src={props.card.link} alt={props.card.name}
        className="popup__img-card" />
        <figcaption className="popup__descritption-card">{props.card.name}</figcaption>
      </figure>
    </Popup>
  );
}

export default ImagePopup;
