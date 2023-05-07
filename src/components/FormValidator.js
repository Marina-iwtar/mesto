export class FormValidator {
  constructor(config, form) {
    this.config = config;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this.config.inputSelector)
    );
    this._submitButton = form.querySelector(this.config.submitButtonSelector);
  }
 //const config={зесь наш обьект}
  enableValidation() {
    this._setEventListeners();//а здесь форму
  }
  _setEventListeners() {//здесь если не ошиб.находим инпутлист и кнопку
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
  _hasInvalidInput() {//проверка валидности инпутов
    return this._inputList.some((input) => !input.validity.valid);
  }
  disableButton() {//это тоже кнопка, this убираешь, из конфига так вызываем что нам надо
    this._submitButton.classList.remove(this.config.inactiveButtonClass);
    this._submitButton.disabled = false;
  }
  enableButton() { //это относится к кнопке , у меня названия перепутаны:)
    this._submitButton.classList.add(this.config.inactiveButtonClass);
    this._submitButton.disabled = true;
  }
  _toggleButtonState() {//здесь условие, если оно выполнено то разблокируем кнопку. если нет тто заблокир
    if (this._hasInvalidInput()) {
      this.enableButton();
    } else {
      this.disableButton();
    }
  }
  clearInputError() { //это функция очищает ошибки в инпутах при повторном открытии и блокирует кнопку
    this._inputList.forEach((input) => {//добавляем ко всем попапам
      this._hideInputError(input);
    });
    this._toggleButtonState();
  }
}
