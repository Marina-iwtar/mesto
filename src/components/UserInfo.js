export class UserInfo {
  constructor({ name, occupation }) {
    this._userName = document.querySelector(name);
    this._userAboutMy = document.querySelector(occupation);
  }
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userAboutMy: this._userAboutMy.textContent,
    };
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAboutMy.textContent = data.occupation;
  }
}
