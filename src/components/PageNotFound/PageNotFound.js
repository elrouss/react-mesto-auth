import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__wrapper-heading">
        <h3 className="not-found__heading">404</h3>
        <p className="not-found__subheading">Ой, Вы нашли страницу, которая не&nbsp;существует</p>
      </div>
      <div className="not-found__image"></div>
      <blockquote
        cite="https://mybook.ru/author/lyuis-kerroll/alisa-v-strane-chudes-alisa-v-zazerkale-sbornik/citations/948316/"
        className="not-found__text">
        <p>
          Не знаете ли, как мне выйти отсюда? -&nbsp;спросите Вы
        </p>
        <p>
          Это зависит от того, куда Вы хотите прийти, –&nbsp;ответим мы
        </p>
        <p>
          Куда бы ни выйти, лишь бы куда-нибудь прийти...
        </p>
      </blockquote>
      <Link className="not-found__link" to='/react-mesto-auth' replace>На главную страницу</Link>
    </div>
  );
};
