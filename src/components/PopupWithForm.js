import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleSubmitForms }) {
    super(popupSelector);
    this._handleSubmitForms = handleSubmitForms;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._buttonSave = this._popup.querySelector(".popup__button");
    this._buttonSaveText = this._buttonSave.textContent;
  }
  _getInputValues() {
    const objectValue = {};
    this._inputList.forEach((input) => {
      objectValue[input.name] = input.value;
    });

    return objectValue;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForms(this._getInputValues());
      //this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSave.textContent = "Сохранение...";
    } else {
      this._buttonSave.textContent = this._buttonSaveText;
    }
  }
  /*renderLoadingTrue(){
    this._buttonSave.textContent = 'Сохранение...';
  }
  renderLoadingFalse(){
    this._buttonSave.textContent = this._buttonSaveText;
  }*/
}
