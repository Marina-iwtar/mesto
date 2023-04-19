export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._initialCards = items;
  }
  addItem(element) {
    this._container.prepend(element);
  }
  renderItems() {
    this._initialCards.forEach((item) => {
      this._renderer(item);
    });
  }
}