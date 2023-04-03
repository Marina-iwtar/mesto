import {config} from './index.js';
export class FormValidator {
  constructor(config, form) {
    this.config = config;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this.config.inputSelector)
    );
    this._submitButton = form.querySelector(this.config.submitButtonSelector);
  }

  enableValidation(config) {
    const formList = Array.from(
      document.querySelectorAll(this.config.formSelector)
    );

    formList.forEach((form) => {
      this._setEventListeners(form, config);
    });
  }
  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidaty(input);
        this._toggleButtonState();
      });
    });
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    /*const inputName = input.name;
    const errorElement = this._form.querySelector(`.${inputName}-error`);*/
    input.classList.add(this.config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.config.errorClass);
  }
  _hideInputError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    /*const inputName = input.name;
    const errorElement = this._form.querySelector(`.${inputName}-error`);*/
    input.classList.remove(this.config.inputErrorClass);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = "";
  }
  _checkInputValidaty(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }
  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }
  disableButton() {
    this._submitButton.classList.remove(this.config.inactiveButtonClass);
    this._submitButton.disabled = false;
  }
  enableButton() {
    this._submitButton.classList.add(this.config.inactiveButtonClass);
    this._submitButton.disabled = true;
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  }
  clearInputError() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonState();
  }
}
