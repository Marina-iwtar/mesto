//переменные кнопки на открытие попапа
const editButton = document.querySelector(".profile-info__edit-button");
const addButton = document.querySelector(".profile__add-button");

//переменные кнопка закрытия попапа
const popupCloseProfile = document.querySelector(".popup__close_profile");
const popupCloseMesto = document.querySelector(".popup__close_mesto");
const popupCloseImage = document.querySelector(".popup__close_image");

//переменные нахождение формы в попапе
const formElementProfile = document.querySelector(".popup__form_profile");
const formElMesto = document.querySelector(".popup__form_mesto");

//переменные нахождения попапов
const editPopup = document.querySelector(".popup_profile");
const popupAddMesto = document.querySelector(".popup_mesto");
const popupOpenImage = document.querySelector(".popup_image");

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
const photoPop = popupOpenImage.querySelector(".popup__image");
const subtitlePopup = popupOpenImage.querySelector(".popup__title-image");

const buttonCard = document.querySelector('.popup__button_type_card');

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    alt: "Архыз",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    alt: "Челябинская область",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    alt: "Иваново",
  },
  {
    name: "Камчатка",
    link: "images/Kamchatka.jpg",
    alt: "Камчатка",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Холмогорский район",
  },
  {
    name: "Санкт-Петербург",
    link: "images/SaintPeterburg.jpg",
    alt: "Санкт-Петербург",
  },
];
//функция открытия модальных окон
function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("click", function (evt) {
    if (!evt.target.closest(".popup__content")) {
      closeModal(evt.target.closest(".popup"));
    }
  });
  }

document.addEventListener('keydown', function (evt){
  if(evt.key === 'Escape'){
    const activPopup = document.querySelector('.popup_opened');
    closeModal(activPopup);      
  }
});


function closeModal(popup) {
  //функция закрытия модального окна
  popup.classList.remove("popup_opened");
}


function formProfileSubmitHandler(evt) {
  //функция внесение изменений в строки профиля из формы модального окна
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userAboutMy.textContent = aboutMyInput.value;
  closeModal(editPopup);
}

function addCardSabmit(evt) {
  evt.preventDefault();
  const card = {
    name: nameMestoInput.value,
    link: linkInput.value,
    alt: nameMestoInput.value,
  };

  renderCard(card);
  evt.target.reset();

  closeModal(popupAddMesto);
}

//функция обьявления массива
function createCard(card) {
  const cardTemplate = document.querySelector(".templateEl").content;
  const cardEl = cardTemplate.querySelector(".element").cloneNode(true);
  cardEl.querySelector(".element__title").textContent = card.name;
  cardEl.querySelector(".element__mask-group").src = card.link;
  cardEl.querySelector(".element__mask-group").alt = card.alt;
  cardEl
    .querySelector(".element__vector")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__vector_active");
    });
  const buttonDelete = cardEl.querySelector(".element__delete");
  buttonDelete.addEventListener("click", deleteButtonClick);
  cardEl
    .querySelector(".element__mask-group")
    .addEventListener("click", function (evt) {
      const photo = evt.target;
      photoPop.src = photo.src;
      photoPop.alt = photo.alt;
      subtitlePopup.textContent = photo.alt;

      openPopup(popupOpenImage);
    });

  return cardEl;
}

//функция создания карточки
const renderCard = (card) => {
  const cardElement = createCard(card);
  elementsCon.prepend(cardElement);
};
//функция удаления карточки
function deleteButtonClick(event) {
  const button = event.target;
  const card = button.closest(".element");
  card.remove();
}

//функция перебора массива и ввывода
initialCards.forEach(function (card) {
  elementsCon.append(createCard(card));
});
//событие закрытия по кнопке
popupCloseProfile.addEventListener("click", function () {
  closeModal(editPopup);
});
popupCloseMesto.addEventListener("click", function () {
  closeModal(popupAddMesto);
});
popupCloseImage.addEventListener("click", function () {
  closeModal(popupOpenImage);
});

//событие открытия по кнопке
editButton.addEventListener("click", function () {
  nameInput.value = userName.textContent;
  aboutMyInput.value = userAboutMy.textContent;
  openPopup(editPopup);
});
addButton.addEventListener("click", function () {
  openPopup(popupAddMesto);
  enableButton(buttonCard, config);
});



//собитие добавления данных
formElementProfile.addEventListener("submit", formProfileSubmitHandler);
formElMesto.addEventListener("submit", addCardSabmit);
