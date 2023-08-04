import '../index.css';
import React from 'react';
import { Routes, Route, Navigate,  useNavigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import { ProtectedRoute } from './ProtectedRoute';
import { api } from '../utils/api';
import { auth } from '../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImageOpen, setImageOpen] = React.useState(false);
  const [isInfoTooltip, setInfoTooltip] = React.useState(false);
  const [isStatus, setStatus] =React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({})

  const [cards, setCards] = React.useState([]);
  const [email, setEmail] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn) {
      api.getInitialCard()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line
  }, []);

  function tokenCheck() {
      auth.getContent()
      .then((res) => {
        if(res){
          setLoggedIn(true);
          setCurrentUser(res);
          setEmail(res.email)
          navigate('/', {replace: true})
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogin(email, password) {
    auth.autorize(email, password)
    .then(() => {
      setLoggedIn(true);
      navigate('/', {replace: true});
    })
    .catch((err) => console.log(err));
  }

  function handleSignOut() {
    auth.logout()
    .then(() => {
      setLoggedIn(false);
      navigate('/sign-in', { replace: true });
    })
    .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.cardDelete(card._id)
    .then(() => {
      setCards(cards.filter((item) => item !== card));
    })
    .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(cardData) {
    api.addNewCard(cardData)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
    console.log('попап аватара');
  }

  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
    console.log('попап профиля');
  }

  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
      console.log('попап добавления карточки');
  }

  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(userData) {
    api.setUserAvatar(userData)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleCardClick(card){
    setImageOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: card.name,
      link: card.link
    })
    console.log('попап открытия карточки');
  }

  function handleRegister(email, password) {
    auth.register(email, password)
    .then(() => {
      setInfoTooltip(true);
      setStatus(true);
      navigate('/sign-in', {replace: true});
    })
    .catch((err) => {
      console.log(err);
      setInfoTooltip(true);
      setStatus(false);
    });
  }

  function closeAllPopups(){
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImageOpen(false);
    setInfoTooltip(false);

    console.log('закрыть попап');
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header userData={email} handleSignOut={handleSignOut} />
      <Routes>
        <Route path='/sign-in' element={<Login handleLogin={handleLogin} />} />
        <Route path='/sign-up' element={<Register isRegister={handleRegister} />} />
        <Route exact path='/' element={
          <ProtectedRoute
          element={
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            cards={cards}
          />}
          isLoggedIn={isLoggedIn}/>} />
        <Route path='/' element={isLoggedIn ? <Navigate to='/' /> : <Navigate to='/sign-in' /> } />
      </Routes>

      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <InfoTooltip isOpen={isInfoTooltip} onClose={closeAllPopups} status={isStatus} />
      <PopupWithForm
        name="verification"
        title="Вы уверены?"
        buttonText="Да"
      />

      <ImagePopup
        isOpen={isImageOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
