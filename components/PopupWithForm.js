import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForms }) {
    super(popupSelector);
    this._handleSubmitForms = handleSubmitForms;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }
  _getInputValues() {
    const objectValue = {};
    this._inputList.forEach((input) => {
      objectValue[input.name] = input.value;
    });
    return this._objectValue;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForms(this._getInputValues());
    });
  }
  open() {
    super.open();
  }
  close() {
    super.close();
    this._form.reset();
  }
}
