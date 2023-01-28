import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { api } from '../../utils/api.js';
import { getContent } from '../../utils/auth.js';

import Login from '../Login/Login.js';
import Register from '../Register/Register.js';

import Preloader from '../Preloader/Preloader.js';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import PageNotFound from '../PageNotFound/PageNotFound.js';

import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import ConfirmCardDeletionPopup from '../ConfirmCardDeletionPopup/ConfirmCardDeletionPopup.js';

export default function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isProcessLoading, setIsProcessLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({
    _id: '',
    email: ''
  });

  const [selectedCard, setSelectedCard] = useState({});
  const [activeCardId, setActiveCardId] = useState('');
  const [cards, setCards] = useState([]);

  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const [isInfoTooltipOpened, setIsInfoTooltipOpened] = useState(false);
  const [isEditProfilePopupOpened, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpened, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpened, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpened, setIsImagePopupOpened] = useState(false);
  const [isConfirmationCardDeletionPopupOpened, setConfirmationCardDeletionPopupOpened] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsPageLoading(true);

      Promise.all([api.getUserInfo(), api.getPhotocards()])
        .then(([user, cards]) => {
          setCurrentUser(user);
          setCards(cards);
        })
        .catch((err) => {
          console.log(`Ошибка в процессе загрузки данных пользователя и галереи карточек: ${err}`);
        })
        .finally(() => {
          setIsPageLoading(false);
        })
    };
  }, [isLoggedIn]);

  function handleLogin() {
    setIsLoggedIn(true);
  };

  const checkToken = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      getContent(jwt)
        .then((res) => {
          const data = res.data;
          const userData = {
            _id: data._id,
            email: data.email
          };
          setUserData(userData);
          handleLogin();
          navigate('/react-mesto-auth', { replace: true });
        })
        .catch((err) => {
          console.log(`Ошибка в процессе проверки токена пользователя и получения личных данных: ${err}`);
        })
    };
  }, [navigate]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  function toggleBurgerMenu() {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };
  //TODO: переписать функцию под true/false (либо иначе прокидывать в header, иначе переключается margin)

  function openInfoTooltip() {
    setIsInfoTooltipOpened(true);
  };

  function openEditProfilePopup() {
    setEditProfilePopupOpen(true);
  };

  function openAddPlacePopup() {
    setAddPlacePopupOpen(true);
  };

  function openEditAvatarPopup() {
    setEditAvatarPopupOpen(true);
  };

  function openConfirmationCardDeletionPopup(card) {
    setConfirmationCardDeletionPopupOpened(true);
    setActiveCardId(card._id);
  };

  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    setIsImagePopupOpened(true);
  };

  function closeAllPopups() {
    setIsInfoTooltipOpened(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmationCardDeletionPopupOpened(false);
    setIsImagePopupOpened(false);
  };

  useEffect(() => {
    if (!isImagePopupOpened) {
      setTimeout(() => setSelectedCard({}), 400);
    };
  }, [isImagePopupOpened]);

  function closePopupsOnOutsideClick(evt) {
    const target = evt.target;
    const checkSelector = selector => target.classList.contains(selector);

    if (checkSelector('popup_opened') || checkSelector('popup__closing-button')) {
      closeAllPopups();
    };
  };

  const popupPackProps = {
    onClose: closeAllPopups,
    closePopupsOnOutsideClick: closePopupsOnOutsideClick,
    isProcessLoading: isProcessLoading
  };

  function handleUpdateUser(data) {
    if (data.name === currentUser.name && data.about === currentUser.about) {
      closeAllPopups();
    } else {
      setIsProcessLoading(true);

      api.setUserInfo(data.name, data.about)
        .then((user) => {
          setCurrentUser(user);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(`Ошибка в процессе редактирования информации пользователя: ${err}`);
        })
        .finally(() => {
          setIsProcessLoading(false);
        })
    };
  };

  function handleUpdateAvatar(data) {
    setIsProcessLoading(true);

    api.setUserAvatar(data.avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка в процессе изменения аватара пользователя: ${err}`);
      })
      .finally(() => {
        setIsProcessLoading(false);
      })
  };

  function handleAddPlaceSubmit(data) {
    setIsProcessLoading(true);

    api.addNewСard(data.name, data.link)
      .then((card) => {
        setCards([card, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка в процессе добавления новой карточки в галерею: ${err}`);
      })
      .finally(() => {
        setIsProcessLoading(false);
      })
  };

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((cardLike) => {
        setCards(state => state.map(c => c._id === card._id ? cardLike : c));
      })
      .catch((err) => {
        console.log(`Ошибка в процессе добавления/снятия лайка карточки в галерее: ${err}`);
      })
  };

  function handleCardDelete(activeCardId) {
    setIsProcessLoading(true);

    api.deleteСard(activeCardId)
      .then(() => {
        setCards(state => state.filter(c => c._id !== activeCardId));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка в процессе удаления карточки из галереи: ${err}`);
      })
      .finally(() => {
        setIsProcessLoading(false);
      })
  };

  return (
    <div className={`page ${isActiveBurgerMenu && 'active'}`}>
      <Routes>
        <Route path='react-mesto-auth/' element={
          <Header
            isActive={isActiveBurgerMenu}
            onActive={toggleBurgerMenu}
            userData={userData}
            setIsLoggedIn={setIsLoggedIn}
            toggleBurgerMenu={toggleBurgerMenu}
          />
        }>
          <Route
            index
            element={
              <>
                <ProtectedRoute isLoggedIn={isLoggedIn} />
                {isPageLoading
                  ? <Preloader />
                  : <>
                    <CurrentUserContext.Provider value={currentUser}>
                      <Main
                        onEditProfile={openEditProfilePopup}
                        onAddPlace={openAddPlacePopup}
                        onEditAvatar={openEditAvatarPopup}
                        onConfirmationCardDeletion={openConfirmationCardDeletionPopup}
                        onCardClick={handleCardClick}

                        cards={cards}
                        onCardLike={handleCardLike}
                      />
                    </CurrentUserContext.Provider>

                    <Footer />

                    <CurrentUserContext.Provider value={currentUser}>
                      <EditProfilePopup
                        onUpdateUser={handleUpdateUser}
                        isOpened={isEditProfilePopupOpened}
                        popupPackProps={popupPackProps}
                      />

                      <EditAvatarPopup
                        onUpdateAvatar={handleUpdateAvatar}
                        isOpened={isEditAvatarPopupOpened}
                        popupPackProps={popupPackProps}
                      />

                      <AddPlacePopup
                        onAddPlace={handleAddPlaceSubmit}
                        isOpened={isAddPlacePopupOpened}
                        popupPackProps={popupPackProps}
                      />

                      <ConfirmCardDeletionPopup
                        activeCardId={activeCardId}

                        onCardDelete={handleCardDelete}
                        isOpened={isConfirmationCardDeletionPopupOpened}
                        popupPackProps={popupPackProps}
                      />
                    </CurrentUserContext.Provider>

                    <ImagePopup
                      card={selectedCard}

                      isImagePopupOpened={isImagePopupOpened}
                      onClose={closeAllPopups}
                      closePopupsOnOutsideClick={closePopupsOnOutsideClick}
                    />
                  </>
                }
              </>
            }
          />
          <Route path='sign-in' element={<Login
            handleLogin={handleLogin}
            isProcessLoading={isProcessLoading}
            setIsProcessLoading={setIsProcessLoading}
          />
          }
          />
          <Route path='sign-up' element={
            <Register
              popupPackProps={popupPackProps}

              setIsProcessLoading={setIsProcessLoading}
              isInfoTooltipOpened={isInfoTooltipOpened}
              onInfoTooltip={openInfoTooltip}
              isOpened={isInfoTooltipOpened}
            />
          }
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
