const openModal = document.querySelector('.profile-info__edit-button');
const closeModal = document.querySelector('.popup__close');
const popPup = document.querySelector('.popup');


openModal.addEventListener('click', () =>{
  popPup.classList.add('popup_opened');
  
})

closeModal.addEventListener('click',() =>{
  popPup.classList.remove('popup_opened');
})
 



let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
	 evt.preventDefault(); 
   
    let nameInput = document.querySelector('.popup__name').value;
    let userNameEl = document.querySelector('.profile-info__title');
    let aboutMyInput = document.querySelector('.popup__about-my').value;
    let userAboutMyEl = document.querySelector('.profile-info__paragraph');
    userAboutMyEl.textContent = aboutMyInput;
    userNameEl.textContent = nameInput;

     popPup.classList.remove('popup_opened');
   
   }

formElement.addEventListener('submit', formSubmitHandler);






