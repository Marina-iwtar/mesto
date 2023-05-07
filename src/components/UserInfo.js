export class UserInfo {
  constructor({ name, about,avatar}) {
    this._userName = document.querySelector(name);
    this._userAboutMy = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userAboutMy: this._userAboutMy.textContent
      
    }
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userAboutMy.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
  getUserId(){
    return this._id;
  }
}
