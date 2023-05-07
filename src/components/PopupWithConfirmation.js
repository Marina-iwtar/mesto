import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    //this._card = cardId;
    this._form = this._popup.querySelector(".popup__form");
  }
  setSubmitAction(action) {
    this._handleSubmitForms = action;
  }
  /*open(card) {
    this._card = card;
    super.open();    
  }*/
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("click", (evt) => {
      evt.preventDefault();
      //this._handleSubmitForms(this._card, this._card._id/*card*/);
      this._handleSubmitForms();
    });
  }
}
