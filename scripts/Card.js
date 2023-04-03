import { initialCards, openPopup, popupOpenImage } from "./index.js";
export class Card {
  constructor(initialCards, templateSelector) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._alt = initialCards.alt;
    this._templateSelector = templateSelector;
  }
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
  }

  _handleCardClick() {
    document.querySelector(".popup__image").src = this._link;
    document.querySelector(".popup__title-image").textContent = this._name;
    document.querySelector(".popup__title-image").alt = this._alt;
    openPopup(popupOpenImage);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleCardLike();
    });
    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardPicture.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardPicture = this._element.querySelector(".element__mask-group");
    this._cardPicture.src = this._link;
    this._element.querySelector(".element__mask-group").textContent = this._alt;
    this._likeButton = this._element.querySelector(".element__vector");
    this._buttonDelete = this._element.querySelector(".element__delete");

    this._setEventListeners();
    return this._element;
  }
}
