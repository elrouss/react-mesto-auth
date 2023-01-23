import { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditAvatarPopup(props) {
  const { onUpdateAvatar, isOpened, popupPackProps } = props;

  const [avatar, setAvatar] = useState('')
  const [isFocusedLink, setIsFocusedLink] = useState(false);

  useEffect(() => {
    if (isOpened) {
      setAvatar('');
    };
  }, [isOpened]);

  function handleAvatar(evt) {
    setAvatar(evt.target.value);
  };

  function isEditAvatarPopupValid() {
    const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;
    const isNewAvatarLink = url => urlPattern.test(url);

    return isNewAvatarLink(avatar);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatar.trim()
    });
  };

  return (
    <PopupWithForm
      popupData={{
        classSelector: "edit-avatar",
        classSelectorModifierForm: "popup__form_type_avatar",
        formName: "profileAvatarEditor",
        title: "Обновить аватар",
        submitBtn: "Сохранить",
        isPopupValid: isEditAvatarPopupValid()
      }}

      onSubmit={handleSubmit}
      isOpened={isOpened}
      popupPackProps={popupPackProps}
    >
      <fieldset className="popup__form-fieldset">
        <input
          className={`popup__form-field ${((!isEditAvatarPopupValid() && avatar !== '') || isFocusedLink) && 'popup__form-field_type_error'} popup__form-field_type_edit-avatar-link`}
          name="userAvatar"
          type="url"
          placeholder="Ссылка на изображение"
          required
          value={avatar}
          onChange={handleAvatar}
          onFocus={() => setIsFocusedLink(true)}
          onBlur={() => setIsFocusedLink(false)}
        />
        {(avatar !== '' || isFocusedLink) && <span className={`popup__error ${!isEditAvatarPopupValid() && 'popup__error_visible'} avatar-url-error`}>
          Введите URL.
        </span>}
      </fieldset>
    </PopupWithForm>
  );
};
