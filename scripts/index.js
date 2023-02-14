let editButton = document.querySelector(".profile-info__edit-button");
let popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector('.popup__form');
let editPopup = document.querySelector(".popup");
let userName = document.querySelector('.profile-info__title');
let userAboutMy = document.querySelector('.profile-info__paragraph');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutMyInput = document.querySelector('.popup__input_type_about-my');

function openModal(evt) {
  editPopup.classList.add("popup_opened");
}

function closeModal(evt) {
  editPopup.classList.remove("popup_opened");
}
nameInput.value = userName.textContent;
aboutMyInput.value = userAboutMy.textContent;

function formSubmitHandler (evt) {
	evt.preventDefault(); 

  userName.textContent = nameInput.value;
  userAboutMy.textContent = aboutMyInput.value;
  
  closeModal();
}
popupClose.addEventListener("click", closeModal);
editButton.addEventListener("click", openModal);
formElement.addEventListener('submit', formSubmitHandler);