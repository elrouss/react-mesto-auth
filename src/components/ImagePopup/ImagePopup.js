import useClosePopupsOnKeyPressEsc from '../../hooks/useClosePopupsOnKeyPressEsc';

export default function ImagePopup({ card, isImagePopupOpened, onClose, closePopupsOnOutsideClick }) {
  useClosePopupsOnKeyPressEsc(card.link, onClose);

  return (
    <div className={`popup popup_type_image ${isImagePopupOpened && 'popup_opened'}`} onClick={closePopupsOnOutsideClick}>
      <div className="popup__container-image">
        <img src={card.link} alt={`Описание фотографии: ${card.name}`} className="popup__image" />
        <h3 className="popup__image-caption">{card.name}</h3>
        <button type="button" aria-label="Закрытие модального окна" className="popup__closing-button" onClick={onClose} />
      </div>
    </div>
  );
};
