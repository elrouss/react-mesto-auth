import { useState, useEffect, useCallback } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { api } from '../../utils/api.js';

import Preloader from '../Preloader/Preloader.js';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import ConfirmCardDeletionPopup from '../ConfirmCardDeletionPopup/ConfirmCardDeletionPopup.js';

export default function App() {
  const [isEditProfilePopupOpened, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpened, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpened, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmationCardDeletionPopupOpened, setConfirmationCardDeletionPopupOpened] = useState(false);

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isProcessLoading, setIsProcessLoading] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [activeCardId, setActiveCardId] = useState('');

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
  }, []);

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
  };

  const closeAllPopups = useCallback(() => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmationCardDeletionPopupOpened(false);

    setSelectedCard({});
  }, []);

  const closePopupsOnOutsideClick = useCallback((evt) => {
    const target = evt.target;

    if (target.classList.contains('popup_opened') || target.classList.contains('popup__closing-button')) {
      closeAllPopups();
    };
  }, [closeAllPopups]);

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
    <>
      {isPageLoading
        ? <Preloader />
        : <>
          <Header />

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

            onClose={closeAllPopups}
            closePopupsOnOutsideClick={closePopupsOnOutsideClick}
          />
        </>
      }
    </>
  );
};
