export class UserInfo{
  constructor({nameUserSelector, infoAboutMySelector}){
    this._nameUserSelector = nameUserSelector;
    this._infoAboutMySelector = infoAboutMySelector;
    this._userName = document.querySelector(this._nameUserSelector);
    this._userAboutMy = document.querySelector(this._infoAboutMySelector);
  }
  getUserInfo(){
   return {
    userName: this._userName.textContent,
    userAboutMy:  this._userAboutMy.textContent
   }
   
  }
  setUserInfo({userName, userAboutMy}){
    this._userName.textContent = userName;
    this._userAboutMy.textContent = userAboutMy;
  }

}