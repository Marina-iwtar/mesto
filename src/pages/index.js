import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';
import {
  initialCards,
  config,
  editButton,
  formElementProfile,
  formElMesto,
  nameInput,
  aboutMyInput,
  addButton,
} from "../utils/constants.js";

//валидация форм
const profileValidator = new FormValidator(config, formElementProfile);
profileValidator.enableValidation();

const mestoValidator = new FormValidator(config, formElMesto);
mestoValidator.enableValidation();

//добавление карточек в массив
const newCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      newCards.addItem(cardElement);
    },
  },
  ".elements"
);
newCards.renderItems();
//создание карточек
function createCard(items) {
  const newCard = new Card(items, ".templateEl", {
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
  });
  return newCard.generateCard();
}
const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();

const userInfo = new UserInfo({
  name: ".profile-info__title",
  occupation: ".profile-info__paragraph",
});

const popupWithFormProfile = new PopupWithForm(".popup_profile", {
  handleSubmitForms: (data) => {
    userInfo.setUserInfo({
      name: data["form-name"],
      occupation: data["form-occupation"],
    });
  },
});
popupWithFormProfile.setEventListeners();
//событие открытия по кнопке
editButton.addEventListener("click", function () {
  const inputValue = userInfo.getUserInfo();
  nameInput.value = inputValue.userName;
  aboutMyInput.value = inputValue.userAboutMy;

  popupWithFormProfile.open();
  profileValidator.clearInputError();
});
//событие добавления данных
const popupWithFormMesto = new PopupWithForm(".popup_mesto", {
  handleSubmitForms: (item) => {
    /*const card = createCard(item);
    newCards.addItem(card);*/
    newCards.addItem(createCard({ name: item.place, link: item.link }));
  },
});
popupWithFormMesto.setEventListeners();

addButton.addEventListener("click", function () {
  popupWithFormMesto.open();
  mestoValidator.clearInputError();
});

