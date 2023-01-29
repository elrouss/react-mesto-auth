import { useContext } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Card({ card, handlePopup, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(user => user._id === currentUser._id);
  const cardLikeButtonClassName = (
    `gallery__item-like-button ${isLiked && 'gallery__item-like-button_active'}`
  );

  return (
    <article className="gallery__item">
      <div className="gallery__item-image-container">
        <img src={card.link} alt={`Описание фотографии: ${card.name}`} className="gallery__item-image" onClick={() => handlePopup.onCardClick(card)} />
      </div>
      {isOwn && <button type="button" aria-label="Удаление карточки" className="gallery__item-delete-button" onClick={() => handlePopup.onConfirmationCardDeletion(card)} />}
      <h2 className="gallery__item-title">{card.name}</h2>
      <div className="gallery__item-likes">
        <button type="button" aria-label="Лайк карточки" className={cardLikeButtonClassName} onClick={() => handleCardLike.onCardLike(card)} />
        {card.likes.length > 0 && <span className="gallery__item-likes-counter">{card.likes.length}</span>}
      </div>
    </article>
  );
};
