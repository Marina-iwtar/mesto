export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
 
  }
  addItem(element) {
    this._container.prepend(element);
  }
  renderItems(cards) {
    cards.reverse().forEach(this._renderer
      /*(item) => {
      this._renderer(item);*/
    );
  }
}
