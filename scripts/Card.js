//import { openPopup, popupOpenImage, photoPop, subtitlePopup } from "./index.js";
//import {PopupWithImage} from '../components/PopupWithImage.js';
export class Card {
  constructor(initialCards, templateSelector, {handleCardClick}) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._alt = initialCards.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }


  /*handleCardClick() {
    photoPop.src = this._link;
    photoPop.alt = this._alt;
    subtitlePopup.textContent = this._name;
    openPopup(popupOpenImage);
  }*/
  _getTemplate() {
    const cardEl = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardEl;
  }
  _handleCardLike() {
    this._likeButton.classList.toggle("element__vector_active");
  }
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
  

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleCardLike();
    });
    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardPicture.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardPicture = this._element.querySelector(".element__mask-group");
    this._cardPicture.src = this._link;
    this._element.querySelector(".element__mask-group").alt = this._alt;

    this._likeButton = this._element.querySelector(".element__vector");
    this._buttonDelete = this._element.querySelector(".element__delete");

    this._setEventListeners();
    return this._element;
  }
}
