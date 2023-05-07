export class Card {
  constructor(
    initialCards,
    templateSelector,
    userId,
    { handleCardClick, handleCardLike },
    handleDeleteCard
  ) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._alt = initialCards.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._ownerId = initialCards.owner._id;
    this.cardId = initialCards._id;
    this._handleDeleteCard = handleDeleteCard;
    this._handleCardLike = handleCardLike;
    this._likes = initialCards.likes;
  }

  _likeCard() {
    //this._likeButton.classList.add("element__vector_active");
    if (this.isLiked(this._likes, this._userId)) {
      this._likeButton.classList.toggle("element__vector_active");
    }
  }
  isLiked(cardLikes, userId) {
    return cardLikes.some((like) => {
      return like._id === userId;
    });
  }
  toggleLikeCard(likes) {
    this._likes = likes;
    this._likeCount.textContent = this._likes.length;
    this._likeButton.classList.toggle("element__vector_active");
  }
  /*dislike(){
    this._likeButton.classList.remove("element__vector_active");
    }
  _likesUser(){
    this._likes.forEach((element) => {
      if(element._id===this._userId){
        this.like();
      }else{
        this.dislike();
      }
    });
  }
  //счетчик лайков
  likesCounter(res){
    this._likeCount.textContent = `${res.likes.length}`;
  }*/
  _getTemplate() {
    const cardEl = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardEl;
  }

  /*handleCardLike() {
    this._likeButton.classList.toggle("element__vector_active");
  }*/
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      //this.handleCardLike(this._id);
      this._handleCardLike(this);
    });
    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteCard(this);
    });
    /*if(this._ownerId === this._id){
    this._buttonDelete.addEventListener("click", () => {
      //this.handleDeleteCard();
      this._handleDeleteCard(this._id);
    });}*/
    this._cardPicture.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardPicture = this._element.querySelector(".element__mask-group");
    this._cardPicture.src = this._link;
    this._element.querySelector(".element__mask-group").alt = this._alt;
    this._buttonDelete = this._element.querySelector(".element__delete");
    this._likeButton = this._element.querySelector(".element__vector");
    this._likeCount = this._element.querySelector(".element__counter");
    this._likeCount.textContent = this._likes.length;

    if (this._ownerId != this._userId) {
      this._buttonDelete.remove();
    }

    /*if(this._id !== this._ownerId){
    this._buttonDelete = this._element.querySelector(".element__delete").remove();
    }else{
      this._buttonDelete = this._element.querySelector(".element__delete").add;
    }*/
    this._setEventListeners();
    this._likeCard();
    return this._element;
  }

}
