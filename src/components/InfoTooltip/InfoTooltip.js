import iconSuccess from '../../images/reg-success.svg';
import iconFailure from '../../images/reg-failure.svg';
import useClosePopupsOnKeyPressEsc from '../../hooks/useClosePopupsOnKeyPressEsc';

export default function InfoTooltip({ isSuccess, isOpened, onClose, closePopupsOnOutsideClick }) {
  useClosePopupsOnKeyPressEsc(isOpened, onClose);

  return (
    <div className={`popup ${isOpened && 'popup_opened'}`} onClick={closePopupsOnOutsideClick}>
      <div className="popup__container popup__container_type_info-tooltip">
        <img
        className="popup__icon"
        src={isSuccess ? iconSuccess : iconFailure}
        alt={`Иконка ${isSuccess ? 'успешной' : 'ошибки при'} регистрации на сайте`}
        />
        <h3 className="popup__title">
          {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
        <button
          className="popup__closing-button"
          type="button"
          aria-label="Закрытие модального окна"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
