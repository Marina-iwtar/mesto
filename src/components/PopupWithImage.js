import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoPop = this._popup.querySelector(".popup__image");
    this._subtitlePopup = this._popup.querySelector(".popup__title-image");
  }
  open(name, link) {
    this._photoPop.src = link;
    this._photoPop.alt = name;
    this._subtitlePopup.textContent = name;
    super.open();
  }
  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
  }
}
