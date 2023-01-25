export default function WelcomeWindowWithForm(props) {
  const { children, heading, btnSubmit } = props;
  // TODO (24/I-2023): вынести инпуты в компоненты Register и Login, чтобы разделить логику? Передавать как children
  // К fieldset добавлять модификаторы, говорящие о функциональности инпутов (регистрация/авторизация)?
  // Возможно, вынести также кнопку? По крайней мере, точно должен быть разный aria-label

  return (
    <div className="welcome-window">
      <h1 className="welcome-window__heading">{heading}</h1>
      <form className="welcome-window__form">
        <fieldset className="welcome-window__fieldset-user-data">
          <input
            className="welcome-window__input"
            name="userEmail"
            type="email"
            placeholder="Email"
            autoComplete="on"
            required
          />
          <input
            className="welcome-window__input"
            name="userPassword"
            type="password"
            autoComplete="current-password"
            placeholder="Пароль"
            required
          />
        </fieldset>
        <button
          className="welcome-window__btn-submit"
          type="submit"
          aria-label="Регистрация на сайте"
        >
          {btnSubmit}
        </button>
      </form>
      {children}
    </div>
  );
}
