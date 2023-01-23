import useClosePopupsOnKeyPressEsc from '../../hooks/useClosePopupsOnKeyPressEsc';

export default function PopupWithForm({ popupData, ...props }) {
  const { children, isOpened, onSubmit, popupPackProps: { onClose, closePopupsOnOutsideClick, isProcessLoading } } = props;
  useClosePopupsOnKeyPressEsc(isOpened, onClose);

  function handleBtnText() {
    if (!isProcessLoading) {
      return popupData.submitBtn;
    };

    return popupData.submitBtnLoading || 'Сохранение...';
  };

  return (
    <div className={`popup popup_type_${popupData.classSelector} ${isOpened && 'popup_opened'}`} onClick={closePopupsOnOutsideClick}>
      <div className="popup__container">
        <h3 className="popup__title">{popupData.title}</h3>
        <form name={popupData.formName} className={`popup__form ${popupData.classSelectorModifierForm}`} noValidate onSubmit={onSubmit} >
          {children}
          <button type="submit" className={`popup__submit-button ${popupData.isPopupValid === false && 'popup__submit-button_disabled'} ${popupData.classSelectorModifierSubmitBtn}`} disabled={popupData.isPopupValid === false || isProcessLoading}>
            {handleBtnText()}
          </button>
        </form>
        <button type="button" aria-label="Закрытие модального окна" className="popup__closing-button" onClick={onClose} />
      </div>
    </div>
  );
};
