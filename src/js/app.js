/**
 * JS using Revealing Module Pattern.
 */

const App = (() => {
  /** DOM Elements. */
  const popupMain = document.querySelector('#exit-intent-popup');
  const popupContainer = document.querySelector('.popup-container');
  const popupExit = document.querySelector('#popup-close');
  const body = document.querySelector('body');

  /** Set a cookie. */
  const setCookie = (name, value, days) => {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    var cookieValue =
      encodeURIComponent(value) +
      '; expires=' +
      expirationDate.toUTCString() +
      '; path=/';

    document.cookie = name + '=' + cookieValue;
  };

  /** Check if a cookie exists. */
  function checkCookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName + '=') === 0) {
        return true;
      }
    }
    return false;
  }

  /** Hide the popup and set a cookie to prevent it from showing again. */
  const hidePopup = () => {
    popupMain.classList.remove('active');
    setCookie('exitIntentPopup', true, 30);
  };

  /** Events. */
  const events = () => {
    let mouseY;

    /** Show the popup on mouseleave if the exitIntentPopup cookie doesn't exist. */
    body.addEventListener('mouseleave', (event) => {
      mouseY = event.clientY;

      /** Check if the mouse is leaving the page and the cookie doesn't exist */
      if (mouseY < 0 && !checkCookie('exitIntentPopup')) {
        popupMain.classList.add('active');
      }
    });

    /** Hide the popup on close button click. */
    popupExit.addEventListener('click', () => {
      hidePopup();
    });

    /** Hide the popup on outside click. */
    document.addEventListener('click', (e) => {
      if (!popupContainer.contains(e.target)) {
        hidePopup();
      }
    });
  };

  return {
    /** Initialize the events. */
    init: () => {
      events();
    },
  };
})();

/** Initialize the App. */
App.init();
