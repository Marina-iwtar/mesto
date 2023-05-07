export const editButton = document.querySelector(".profile-info__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const buttonDelete = document.querySelector(".element__delete");
//переменные нахождение формы в попапе
export const formElementProfile = document.querySelector(
  ".popup__form_profile"
);
export const formElMesto = document.querySelector(".popup__form_mesto");
export const avatarForm = document.querySelector('.popup__form_avatar');
//переменные нахождения инпутов из полей формы
export const nameInput = document.querySelector(".popup__input_type_name");
export const aboutMyInput = document.querySelector(
  ".popup__input_type_about-my"
);

export const pencilOverlay = document.querySelector('.profile__pencil');

/*export const initialCards = [
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
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];*/
export const config = {
  formSelector: ".popup__form", //селектор формы
  inputSelector: ".popup__input", //селектор инпутов внутри этой формы
  submitButtonSelector: ".popup__button", //селектор кнопки сабмита этой формы
  inactiveButtonClass: "popup__button_disabled", //класс модификатора для дизэйбла этой формы
  inputErrorClass: "popup__input_type_error", //класс модификатора для инпутов при возникн ошибки
  errorClass: "popup__input-error_visible",
};
