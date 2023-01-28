import { useEffect } from "react";

import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function AddPlacePopup({ onAddPlace, isOpened, popupPackProps }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    if (isOpened) resetForm();
  }, [isOpened, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: values.cardName.trim().replace(/\s+/g, ' '),
      link: values.cardUrl.trim()
    });
  };

  return (
    <PopupWithForm
      popupData={{
        classSelector: "add-photocard",
        formName: "photocardAdding",
        title: "Новое место",
        submitBtn: "Создать",
        isPopupValid: isValid
      }}

      onSubmit={handleSubmit}
      isOpened={isOpened}
      popupPackProps={popupPackProps}
    >
      <fieldset className="popup__form-fieldset">
        <div className="popup__input-wrapper">
          <input
            className={`popup__form-field ${errors?.cardName && 'popup__form-field_type_error'}`}
            name="cardName"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            value={values?.cardName || ''}
            onChange={handleChange}
          />
          <span className="popup__error">{errors?.cardName && 'Текст не должен быть короче 2 и длиннее 30 симв.'}</span>
        </div>

        <div className="popup__input-wrapper">
          <input
            className={`popup__form-field ${errors?.cardUrl && 'popup__form-field_type_error'}`}
            name="cardUrl"
            type="url"
            placeholder="Ссылка на изображение"
            required
            value={values?.cardUrl || ''}
            onChange={handleChange}
          />
          <span className="popup__error">{errors?.cardUrl && 'Введите адрес сайта.'}</span>
        </div>

      </fieldset>
    </PopupWithForm>
  );
};
