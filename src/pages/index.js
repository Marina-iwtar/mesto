import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import "./index.css";
import {
  //initialCards,
  config,
  editButton,
  formElementProfile,
  formElMesto,
  nameInput,
  aboutMyInput,
  addButton,
  pencilOverlay,
  avatarForm,
  buttonDelete,
} from "../utils/constants.js";

//валидация форм
const profileValidator = new FormValidator(config, formElementProfile);
profileValidator.enableValidation();

const mestoValidator = new FormValidator(config, formElMesto);
mestoValidator.enableValidation();

const avatarValidator = new FormValidator(config, avatarForm);
avatarValidator.enableValidation();

//переменная с данными пользователя,добавляется каждый раз при запросе
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "96294ceb-1926-4f54-9c7f-fc4c16b261d1",
    "Content-Type": "application/json",
  },
});

//добавление карточек в массив
const newCards = new Section(
  {
    renderer: (cards) => {
      const cardElement = createCard(cards);
      newCards.addItem(cardElement);
    },
  },
  ".elements"
);
Promise.all([api.getUserData(),api.getInitialCards()]).then(([res,cards])=>{
  userInfo.setUserInfo(res);
  newCards.renderItems(cards);
})
.catch(err=>console.log(err));

//создание карточек
function createCard(cards) {
  const newCard = new Card(
    cards,
    ".templateEl",
    userInfo.getUserId(),
    {
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      handleCardLike: () => {
        if (!newCard.isLiked(newCard._likes, newCard._userId)) {
          api
            .likeCard(newCard.cardId)
            .then((res) => {
              newCard.toggleLikeCard(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .dislikeCard(newCard.cardId)
            .then((res) => {
              newCard.toggleLikeCard(res.likes);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    handleDeleteCard
  );
  return newCard.generateCard();
}
const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();
//добавление карточек на сттраницу через попап
const popupWithFormMesto = new PopupWithForm(".popup_mesto", {
  handleSubmitForms: (item) => {
    popupWithFormMesto.renderLoading(true);
    api
      .addNewCard(item.name, item.link)
      .then((res) => {
        const card = createCard(res);
        newCards.addItem(card);
        popupWithFormMesto.close();
      })
      .catch((err) => console.error(`Ошибка:${err}`))
      .finally(() => {
        popupWithFormMesto.renderLoading(false);
      });
  },
});
popupWithFormMesto.setEventListeners();

addButton.addEventListener("click", function () {
  //вывозов попапа для добавления карточек
  mestoValidator.clearInputError();
  popupWithFormMesto.open();
});

const userInfo = new UserInfo({
  name: ".profile-info__title",
  about: ".profile-info__paragraph",
  avatar: ".profile__avatar",
});
//запрос с сервера данных и вставить их в профиль, начальные данные

//редактирование профиля через попап
const popupWithFormProfile = new PopupWithForm(".popup_profile", {
  handleSubmitForms: (data) => {
    popupWithFormProfile.renderLoading(true);
    api
      .editProfile(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWithFormProfile.close();
      })
      .catch((err) => console.error(`Ошибка:${err}`))
      .finally(() => {
        popupWithFormProfile.renderLoading(false);
      });
  },
});
popupWithFormProfile.setEventListeners();
//событие открытия по кнопке
editButton.addEventListener("click", function () {
  const inputValue = userInfo.getUserInfo();
  nameInput.value = inputValue.userName;
  aboutMyInput.value = inputValue.userAboutMy;
  profileValidator.clearInputError();
  popupWithFormProfile.open();
});
//редактирования аватара через попап
const popupWithFormAvatar = new PopupWithForm(".popup_avatar", {
  handleSubmitForms: (data) => {
    popupWithFormAvatar.renderLoading(true);
    api
      .editAvatar(data)
      .then((res) => {
        userInfo.setUserInfo(res);

        popupWithFormAvatar.close();
      })
      .catch((err) => console.error(`Ошибка:${err}`))
      .finally(() => {
        popupWithFormAvatar.renderLoading(false);
      });
  },
});
popupWithFormAvatar.setEventListeners();
//открытие попапа с редактированием аватара на карандаш
pencilOverlay.addEventListener("click", function () {
  avatarValidator.clearInputError();
  popupWithFormAvatar.open();
});

const popupWithConfirmation = new PopupWithConfirmation(".popup_delete");
popupWithConfirmation.setEventListeners();
const handleDeleteCard = (card) => {
  const handleSubmitForms = async () => {
    try {
      const res = await api.removeCard(card.cardId);
      console.info(res);
      card.deleteCard();
      popupWithConfirmation.close();
    } catch (err) {
      console.log(`Ошибка:${err}`);
    }
  };
  popupWithConfirmation.setSubmitAction(handleSubmitForms);
  popupWithConfirmation.open();
};

