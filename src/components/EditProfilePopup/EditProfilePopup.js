import { useState, useEffect, useContext } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditProfilePopup(props) {
  const { onUpdateUser, isOpened, popupPackProps } = props;

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const userNameLength = name && name.length;
  const userDescriptionLength = description && description.length;

  useEffect(() => {
    if (isOpened) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    };
  }, [isOpened, currentUser]);

  function handleChangeName(evt) {
    const target = evt.target.value.replace(/^\s/, '');
    setName(target);
  };

  function handleChangeDescription(evt) {
    const target = evt.target.value.replace(/^\s/, '');
    setDescription(target);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: name.trim().replace(/\s+/g, ' '),
      about: description.trim().replace(/\s+/g, ' ')
    });
  };

  function isInputValueValid(value) {
    return value >= 2;
  };

  function isEditProfilePopupValid() {
    return isInputValueValid(userNameLength) && isInputValueValid(userDescriptionLength);
  };

  function showErrorMessage(inputValue) {
    if (inputValue >= 1 && inputValue < 2) {
      return `Текст должен быть не короче 2 симв. Длина текста сейчас: ${inputValue} символ.`
    };

    return 'Заполните это поле.';
  };

  return (
    <PopupWithForm
      popupData={{
        classSelector: "edit-profile",
        classSelectorModifierForm: "popup__form_type_profile",
        formName: "profileInfoEditor",
        title: "Редактировать профиль",
        submitBtn: "Сохранить",
        isPopupValid: isEditProfilePopupValid()
      }}

      onSubmit={handleSubmit}
      isOpened={isOpened}
      popupPackProps={popupPackProps}
    >
      <fieldset className="popup__form-fieldset">
        <input
          className={`popup__form-field ${!isInputValueValid(userNameLength) && 'popup__form-field_type_error'} popup__form-field_type_profile-name`}
          name="userName"
          type="text"
          placeholder="Имя"
          maxLength="40"
          required
          value={name || ''}
          onChange={handleChangeName}
        />
        <span className={`popup__error ${!isInputValueValid(userNameLength) && 'popup__error_visible'} input-name-error`}>
          {showErrorMessage(userNameLength)}
        </span>
        <input
          className={`popup__form-field ${!isInputValueValid(userDescriptionLength) && 'popup__form-field_type_error'} popup__form-field_type_profile-job`}
          name="userAbout"
          type="text"
          placeholder="О себе"
          maxLength="200"
          required
          value={description || ''}
          onChange={handleChangeDescription}
        />
        <span className={`popup__error ${!isInputValueValid(userDescriptionLength) && 'popup__error_visible'} input-job-error`}>
          {showErrorMessage(userDescriptionLength)}
        </span>
      </fieldset>
    </PopupWithForm>
  );
};
