import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ConfirmCardDeletionPopup(props) {
  const { activeCardId, onCardDelete, isOpened, popupPackProps } = props;

  function handleSubmit(evt) {
    evt.preventDefault();

    onCardDelete(activeCardId);
  };

  return (
    <PopupWithForm
      popupData={{
        classSelector: "confirmation-deletion",
        classSelectorModifierForm: "popup__form_type_confirmation-deletion",
        classSelectorModifierSubmitBtn: "popup__submit-button_type_confirmation-deletion",
        formName: "photocardConfirmationDeletion",
        title: "Вы уверены?",
        submitBtn: "Да",
        submitBtnLoading: "Удаление..."
      }}

      onSubmit={handleSubmit}
      isOpened={isOpened}
      popupPackProps={popupPackProps}
    />
  );
};
