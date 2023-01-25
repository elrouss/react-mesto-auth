import iconSuccess from '../../images/reg-success.svg';

export default function InfoTooltip() {
  // TODO: В зависимости от стейта менять текст, иконку и alt

  return (
    <div className="popup popup_opened">
      <div className="popup__container popup__container_type_info-tooltip">
        <img className="popup__icon" src={iconSuccess} alt="Иконка успешной регистрации на сайте" />
        <h3 className="popup__title">Вы успешно зарегистрировались!</h3>
        <button type="button" aria-label="Закрытие модального окна" className="popup__closing-button" />
      </div>
    </div>
  );
};
