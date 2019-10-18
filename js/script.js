if (document.querySelector(".index-page")) {
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

  var linkBasket = document.querySelectorAll(".buy");

  var popupBasket = document.querySelector(".modal-back");

  var closeBasket = popupBasket.querySelector(".modal-close");

  var cont = popupBasket.querySelector(".white-button");

  linkBasket.forEach(function(it) {
    it.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupBasket.classList.add("modal-show");
      });
  });

  cont.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
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

}

if (document.querySelector(".catalog-page")) {
  var linkBasket = document.querySelectorAll(".buy");

  var popupBasket = document.querySelector(".modal-back");

  var closeBasket = popupBasket.querySelector(".modal-close");

  var cont = popupBasket.querySelector(".white-button");

linkBasket.forEach(function(it) {
  it.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.add("modal-show");
    });
});

  cont.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
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

}

if (document.querySelector(".index-page")) {
  var serviceDelivery = document.querySelector(".service-delivery");

  var aboutDelivery = document.querySelector(".about-delivery");

  var serviceGaranty = document.querySelector(".service-garanty");

  var aboutGaranty = document.querySelector(".about-garanty");

  var serviceCredit = document.querySelector(".service-credit");

  var aboutCredit = document.querySelector(".about-credit");

  serviceDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    aboutDelivery.classList.add("modal-show");
    aboutCredit.classList.remove("modal-show");
    aboutGaranty.classList.remove("modal-show");
    });

  serviceGaranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    aboutGaranty.classList.add("modal-show");
    aboutDelivery.classList.remove("modal-show");
    aboutCredit.classList.remove("modal-show");
    });

serviceCredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  aboutCredit.classList.add("modal-show");
  aboutDelivery.classList.remove("modal-show");
  aboutGaranty.classList.remove("modal-show");
  });
}
