import { useEffect } from "react";

import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function EditAvatarPopup({ onUpdateAvatar, isOpened, popupPackProps }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    if (isOpened) resetForm();
  }, [isOpened, resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: values.url.trim()
    });
  };

  return (
    <PopupWithForm
      popupData={{
        classSelector: "edit-avatar",
        formName: "profileAvatarEditor",
        title: "Обновить аватар",
        submitBtn: "Сохранить",
        isPopupValid: isValid
      }}

      onSubmit={handleSubmit}
      isOpened={isOpened}
      popupPackProps={popupPackProps}
    >
      <fieldset className="popup__form-fieldset">
        <div className="popup__input-wrapper">
          <input
            className={`popup__form-field ${errors?.url && 'popup__form-field_type_error'}`}
            name="url"
            type="url"
            placeholder="Ссылка на изображение"
            required
            onChange={handleChange}
            value={values?.url || ''}
          />
          <span className="popup__error">{errors?.url && 'Введите адрес сайта.'}</span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};
