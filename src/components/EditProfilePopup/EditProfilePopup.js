import { useEffect, useContext } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function EditProfilePopup({ onUpdateUser, isOpened, popupPackProps }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, setValues, handleChange, setIsValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    if (isOpened) {
      resetForm();
      setValues({ 'name': currentUser.name, 'about': currentUser.about });
      setIsValid(true);
    };
  }, [isOpened]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: values.name.trim().replace(/\s+/g, ' '),
      about: values.about.trim().replace(/\s+/g, ' ')
    });
  };

  return (
    <PopupWithForm
      popupData={{
        classSelector: "edit-profile",
        formName: "profileInfoEditor",
        title: "Редактировать профиль",
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
            className={`popup__form-field ${errors?.name && 'popup__form-field_type_error'}`}
            name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            value={values?.name || ''}
            onChange={handleChange}
          />
          <span className="popup__error">
            {errors?.name && 'Текст не должен быть короче 2 и длиннее 40 симв.'}
          </span>
        </div>

        <div className="popup__input-wrapper">
          <input
            className={`popup__form-field ${errors?.about && 'popup__form-field_type_error'}`}
            name="about"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="40"
            required
            value={values?.about || ''}
            onChange={handleChange}
          />
          <span className="popup__error">
            {errors?.about && 'Текст не должен быть короче 2 и длиннее 40 симв.'}
          </span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};
