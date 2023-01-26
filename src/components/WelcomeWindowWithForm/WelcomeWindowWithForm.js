export default function WelcomeWindowWithForm({ children, heading, btnSubmit, btnAriaLabel }) {
  const inputs = [children[0], children[1]];
  const registerLink = children[2];

  return (
    <div className="welcome-window">
      <h1 className="welcome-window__heading">{heading}</h1>
      <form className="welcome-window__form">
        <fieldset className="welcome-window__fieldset-user-data">
          {inputs}
        </fieldset>
        <button
          className="welcome-window__btn-submit"
          type="submit"
          aria-label={btnAriaLabel}
        >
          {btnSubmit}
        </button>
      </form>
      {registerLink}
    </div>
  );
};
