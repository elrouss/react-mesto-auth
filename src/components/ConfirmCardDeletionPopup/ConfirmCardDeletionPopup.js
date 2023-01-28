import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useEffect } from "react";

export default function ConfirmCardDeletionPopup({ activeCardId, onCardDelete, isOpened, popupPackProps }) {
  const { isValid, setIsValid } = useFormWithValidation();
  
  useEffect(() => {
    if (isOpened) setIsValid(true);
  }, [isOpened]);

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
        submitBtnLoading: "Удаление...",
        isPopupValid: isValid
      }}

      onSubmit={handleSubmit}
      isOpened={isOpened}
      popupPackProps={popupPackProps}
    />
  );
};
