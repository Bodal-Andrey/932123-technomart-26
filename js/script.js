var linkLetter = document.querySelector(".write-to-us");

var popupLetter = document.querySelector(".form-back");

var closeLetter = popupLetter.querySelector(".modal-close");

linkLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLetter.classList.add("modal-show");
  });

closeLetter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLetter.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupLetter.classList.contains("modal-show")) {
      popupLetter.classList.remove("modal-show");
    }
  }
});

var linkMap = document.querySelector(".min-map");

var popupMap = document.querySelector(".map");

var closeMap = popupMap.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
  });

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});

var linkBasket = document.querySelector(".buy");

var popupBasket = document.querySelector(".modal-back");

var closeBasket = popupBasket.querySelector(".modal-close");

linkBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBasket.classList.add("modal-show");
  });

closeBasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBasket.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBasket.classList.contains("modal-show")) {
      popupBasket.classList.remove("modal-show");
    }
  }
});
