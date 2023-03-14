const config = {
  formSelector: ".popup__form", //селектор формы
  inputSelector: ".popup__input", //селектор инпутов внутри этой формы
  submitButtonSelector: ".popup__button", //селектор кнопки сабмита этой формы
  inactiveButtonClass: "popup__button_disabled", //класс модификатора для дизэйбла этой формы
  inputErrorClass: "popup__input_type_error", //класс модификатора для инпутов при возникн ошибки
  errorClass: "popup__input-error_visible",
};

enableValidation(config);

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    setEventListeners(form, config);
  });
}

function setEventListeners(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidaty(input, config, form);
      toggleButtonState(submitButton, config, inputList);
    });
  });
}
//функция, которая разблокирует кнопку
function disableButton(submitButton, config) {
  submitButton.classList.remove(config.inactiveButtonClass);
  submitButton.disabled = false;
}
//функция, которая заблокирует кнопку
function enableButton(submitButton, config) {
  submitButton.classList.add(config.inactiveButtonClass);
  submitButton.disabled = true;
}
//функция проверки валидности инпутов
function hasInvalidInput(inputList) {
  //return Array.from(inputList).some((input) => input.validity.valid);
  return inputList.some((input) => !input.validity.valid);
}
//функция,проверки когда надо блокировать/разблок.кнопку
function toggleButtonState(submitButton, config, inputList) {
  if (hasInvalidInput(inputList)) {
    enableButton(submitButton, config);
  } else {
    disableButton(submitButton, config);
  }
}

//функция,которая проверяет валидность поля
function checkInputValidaty(input, config, form) {
  if (!input.validity.valid) {
    showInputError(input, input.validationMessage, config, form);
  } else {
    hideInputError(input, config, form);
  }
}
//функция,которая добавляет класс с ошибкой
function showInputError(input, errorMessage, config, form) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}
//функция,которая убирает класс с ошибкой
function hideInputError(input, config, form) {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
}
