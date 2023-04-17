import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
//переменные кнопки на открытие попапа
const editButton = document.querySelector(".profile-info__edit-button");
const addButton = document.querySelector(".profile__add-button");

//переменные для попап с картинкой
export const popupImage = document.querySelector(".popup__image");
export const popupTitle = document.querySelector(".popup__title-image");

//поиск всех попапов для закрытия по крестику и оверлею
const popupAll = document.querySelectorAll(".popup");

//переменные нахождение формы в попапе
const formElementProfile = document.querySelector(".popup__form_profile");
const formElMesto = document.querySelector(".popup__form_mesto");

//переменные нахождения попапов
const editPopup = document.querySelector(".popup_profile");
const popupAddMesto = document.querySelector(".popup_mesto");
export const popupOpenImage = document.querySelector(".popup_image");

//переменные нахождение тексовых полей в попапах
const userName = document.querySelector(".profile-info__title");
const userAboutMy = document.querySelector(".profile-info__paragraph");
const mestoName = document.querySelector(".popup__title_mesto");

//переменные нахождения инпутов из полей формы
const nameInput = document.querySelector(".popup__input_type_name");
const aboutMyInput = document.querySelector(".popup__input_type_about-my");
const nameMestoInput = document.querySelector(".popup__input_type_name-mesto");
const linkInput = document.querySelector(".popup__input_type_link");

//переменная контейнера, где хранятся все карточки
const elementsCon = document.querySelector(".elements");

//переменные полей попап картинки
export const photoPop = popupOpenImage.querySelector(".popup__image");
export const subtitlePopup = popupOpenImage.querySelector(
  ".popup__title-image"
);

const buttonCard = document.querySelector(".popup__button_type_card");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "images/Kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Санкт-Петербург",
    link: "images/SaintPeterburg.jpg",
  },
];
const config = {
  formSelector: ".popup__form", //селектор формы
  inputSelector: ".popup__input", //селектор инпутов внутри этой формы
  submitButtonSelector: ".popup__button", //селектор кнопки сабмита этой формы
  inactiveButtonClass: "popup__button_disabled", //класс модификатора для дизэйбла этой формы
  inputErrorClass: "popup__input_type_error", //класс модификатора для инпутов при возникн ошибки
  errorClass: "popup__input-error_visible",
};
//функция открытия модальных окон
/*export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closePopupEsc); //добавляем слушатель для закртия попапа по esc
}*/
/*
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const activPopup = document.querySelector(".popup_opened");
    closeModal(activPopup);
  }
}*/

//функция закрытия модального окна
/*function closeModal(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closePopupEsc); //удаление слушателя для закрытия попапа по esc
} */

//функция внесение изменений в строки профиля из формы модального окна
/*function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAboutMy.textContent = aboutMyInput.value;
  closeModal(editPopup);
}*/
/*const newCards = new Section({items:initialCards,
  renderer: (item)=> {
    const card = new Card(item, ".templateEl");
    const cardElement = card.generateCard();
    newCards.addItem(cardElement);
  }
}, ".elements");
newCards.renderItems();*/
/*function createCard(item) {
  const newCard = new Card(item, ".templateEl");
  return newCard.generateCard();
}*/
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
  nameUserSelector: ".profile-info__title",
  infoAboutMySelector : ".profile-info__paragraph",
});

const popupWithFormProfile = new PopupWithForm(".popup_profile", {

  handleSubmitForms: (data) => {
    debugger;
    userInfo.setUserInfo({userName: data['name'], userAboutMy: data ['aboutMy']});
 
    popupWithFormProfile.close();
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


const popupWithFormMesto = new PopupWithForm (".popup_mesto", {
 
  handleSubmitForms: (item) => {
    //debugger;
    const element = createCard(item);
    newCards.addItem(element);
    popupWithFormMesto.close();
  },  
});
popupWithFormMesto.setEventListeners();

addButton.addEventListener("click", function () {
  popupWithFormMesto.open();
  mestoValidator.clearInputError();
});

/*function renderCard(item) {
  const cardElement = createCard(item); //вот эту не знаю
  elementsCon.prepend(cardElement);//вот эту заменяем на addItem(element)
}
initialCards.forEach(renderCard);*/

/*function addCardSabmit(evt) {
  evt.preventDefault();
  const card = {
    name: nameMestoInput.value,
    link: linkInput.value,
    alt: nameMestoInput.value,
  };

  renderCard(card);
  evt.target.reset();
  closeModal(popupAddMesto);
}*/

//событие закрытия по кнопке и по оверлей
/*popupAll.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closeModal(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});*/

//собитие добавления данных
//formElementProfile.addEventListener("submit", );
//formElMesto.addEventListener("submit", addCardSabmit);
