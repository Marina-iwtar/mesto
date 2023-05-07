/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i){var u=o.handleCardClick,a=o.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._alt=e.name,this._templateSelector=r,this._handleCardClick=u,this._userId=n,this._ownerId=e.owner._id,this.cardId=e._id,this._handleDeleteCard=i,this._handleCardLike=a,this._likes=e.likes}var r,n;return r=t,(n=[{key:"_likeCard",value:function(){this.isLiked(this._likes,this._userId)&&this._likeButton.classList.toggle("element__vector_active")}},{key:"isLiked",value:function(t,e){return t.some((function(t){return t._id===e}))}},{key:"toggleLikeCard",value:function(t){this._likes=t,this._likeCount.textContent=this._likes.length,this._likeButton.classList.toggle("element__vector_active")}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleCardLike(t)})),this._buttonDelete.addEventListener("click",(function(){t._handleDeleteCard(t)})),this._cardPicture.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__title").textContent=this._name,this._cardPicture=this._element.querySelector(".element__mask-group"),this._cardPicture.src=this._link,this._element.querySelector(".element__mask-group").alt=this._alt,this._buttonDelete=this._element.querySelector(".element__delete"),this._likeButton=this._element.querySelector(".element__vector"),this._likeCount=this._element.querySelector(".element__counter"),this._likeCount.textContent=this._likes.length,this._ownerId!=this._userId&&this._buttonDelete.remove(),this._setEventListeners(),this._likeCard(),this._element}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this.config.inputSelector)),this._submitButton=r.querySelector(this.config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidaty(e),t._toggleButtonState()}))}))}},{key:"_showInputError",value:function(t,e){var r=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this.config.inputErrorClass),r.textContent=e,r.classList.add(this.config.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.config.inputErrorClass),e.classList.remove(this.config.errorClass),e.textContent=""}},{key:"_checkInputValidaty",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"disableButton",value:function(){this._submitButton.classList.remove(this.config.inactiveButtonClass),this._submitButton.disabled=!1}},{key:"enableButton",value:function(){this._submitButton.classList.add(this.config.inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.enableButton():this.disableButton()}},{key:"clearInputError",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){t.reverse().forEach(this._renderer)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var p=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=f(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},v.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._photoPop=e._popup.querySelector(".popup__image"),e._subtitlePopup=e._popup.querySelector(".popup__title-image"),e}return e=u,(r=[{key:"open",value:function(t,e){this._photoPop.src=e,this._photoPop.alt=t,this._subtitlePopup.textContent=t,v(m(u.prototype),"open",this).call(this)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function S(t,e){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.handleSubmitForms;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmitForms=n,r._form=r._popup.querySelector(".popup__form"),r._inputList=r._popup.querySelectorAll(".popup__input"),r._buttonSave=r._popup.querySelector(".popup__button"),r._buttonSaveText=r._buttonSave.textContent,r}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;w(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForms(t._getInputValues())}))}},{key:"close",value:function(){w(k(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._buttonSave.textContent=t?"Сохранение...":this._buttonSaveText}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var P=function(){function t(e){var r=e.name,n=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userAboutMy=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userAboutMy:this._userAboutMy.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userAboutMy.textContent=t.about,this._avatar.src=t.avatar,this._id=t._id}},{key:"getUserId",value:function(){return this._id}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_sendingRequest",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"userData",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._sendingRequest(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._sendingRequest(e)}))}},{key:"addNewCard",value:function(t,e){var r=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return r._sendingRequest(t)}))}},{key:"editProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._sendingRequest(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._sendingRequest(t)}))}},{key:"removeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._sendingRequest(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then((function(t){return e._sendingRequest(t)}))}},{key:"dislikeCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._sendingRequest(t)}))}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(n);if(o){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(r=[{key:"setSubmitAction",value:function(t){this._handleSubmitForms=t}},{key:"setEventListeners",value:function(){var t=this;q(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmitForms()}))}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(p),D=document.querySelector(".profile-info__edit-button"),A=document.querySelector(".profile__add-button"),F=(document.querySelector(".element__delete"),document.querySelector(".popup__form_profile")),G=document.querySelector(".popup__form_mesto"),U=document.querySelector(".popup__form_avatar"),V=document.querySelector(".popup__input_type_name"),M=document.querySelector(".popup__input_type_about-my"),J=document.querySelector(".profile__pencil"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function Y(t){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}function z(){z=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,u=Object.create(i.prototype),a=new L(o||[]);return n(u,"_invoke",{value:w(t,r,a)}),u}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function y(){}function h(){}var v={};c(v,i,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(O([])));m&&m!==e&&r.call(m,i)&&(v=m);var b=h.prototype=p.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(n,i,u,a){var c=s(t[n],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==Y(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=S(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:y,configurable:!0}),y.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,u,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new g(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},_(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function K(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}var Q=new i(H,F);Q.enableValidation();var W=new i(H,G);W.enableValidation();var X=new i(H,U);X.enableValidation();var Z=new x({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"96294ceb-1926-4f54-9c7f-fc4c16b261d1","Content-Type":"application/json"}}),$=new c({renderer:function(t){var e=tt(t);$.addItem(e)}},".elements");function tt(t){var e=new r(t,".templateEl",nt.getUserId(),{handleCardClick:function(t,e){et.open(t,e)},handleCardLike:function(){e.isLiked(e._likes,e._userId)?Z.dislikeCard(e.cardId).then((function(t){e.toggleLikeCard(t.likes)})).catch((function(t){console.log(t)})):Z.likeCard(e.cardId).then((function(t){e.toggleLikeCard(t.likes)})).catch((function(t){console.log(t)}))}},at);return e.generateCard()}Z.getInitialCards().then((function(t){$.renderItems(t)})).catch((function(t){console.error("Ошибка:".concat(t))}));var et=new b(".popup_image");et.setEventListeners();var rt=new E(".popup_mesto",{handleSubmitForms:function(t){Z.addNewCard(t.name,t.link).then((function(t){var e=tt(t);$.addItem(e),rt.renderLoading(!0),rt.close()})).catch((function(t){return console.error("Ошибка:".concat(t))})).finally((function(){rt.renderLoading(!1)}))}});rt.setEventListeners(),A.addEventListener("click",(function(){W.clearInputError(),rt.open()}));var nt=new P({name:".profile-info__title",about:".profile-info__paragraph",avatar:".profile__avatar"});Z.userData().then((function(t){return nt.setUserInfo(t)})).catch((function(t){return console.error("Ошибка:".concat(t))}));var ot=new E(".popup_profile",{handleSubmitForms:function(t){Z.editProfile(t).then((function(t){nt.setUserInfo(t),ot.renderLoading(!0),ot.close()})).catch((function(t){return console.error("Ошибка:".concat(t))})).finally((function(){ot.renderLoading(!1)}))}});ot.setEventListeners(),D.addEventListener("click",(function(){var t=nt.getUserInfo();V.value=t.userName,M.value=t.userAboutMy,Q.clearInputError(),ot.open()}));var it=new E(".popup_avatar",{handleSubmitForms:function(t){Z.editAvatar(t).then((function(t){nt.setUserInfo(t),it.renderLoading(!0),it.close()})).catch((function(t){return console.error("Ошибка:".concat(t))})).finally((function(){it.renderLoading(!1)}))}});it.setEventListeners(),J.addEventListener("click",(function(){X.clearInputError(),it.open()}));var ut=new N(".popup_delete");ut.setEventListeners();var at=function(t){var e=function(){var e,r=(e=z().mark((function e(){var r;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.removeCard(t.cardId);case 3:r=e.sent,console.info(r),t.deleteCard(),ut.close(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Ошибка:".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(t){K(i,n,o,u,a,"next",t)}function a(t){K(i,n,o,u,a,"throw",t)}u(void 0)}))});return function(){return r.apply(this,arguments)}}();ut.setSubmitAction(e),ut.open()}})();
//# sourceMappingURL=main.js.map