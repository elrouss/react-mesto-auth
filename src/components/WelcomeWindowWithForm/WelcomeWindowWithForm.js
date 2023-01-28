export default function WelcomeWindowWithForm({ children, heading, isProcessLoading, btnSubmit, btnAriaLabel, onSubmit }) {
  const inputs = [children[0], children[1]];
  const registerLink = children[2];

  return (
    <div className="welcome-window">
      <h1 className="welcome-window__heading">{heading}</h1>
      <form className="welcome-window__form"
        onSubmit={onSubmit}
      >
        <fieldset className="welcome-window__fieldset-user-data">
          {inputs}
        </fieldset>
        <button
          className="welcome-window__btn-submit"
          type="submit"
          aria-label={btnAriaLabel}
        >
          {isProcessLoading ? 'Подождите...' : btnSubmit}
        </button>
      </form>
      {registerLink}
    </div>
  );
};
