const App = {
  init() {
    this.cacheElements();
    this.addEventListener();
  },

  cacheElements() {
    console.log('cacheElements');

    this.splashScreen = document.querySelector(".splash-screen");
    this.splashBtn = document.querySelector(".splash-btn");
    this.mainScreen = document.querySelector(".main-screen");

    // console.log(this.splashScreen.value);
    // console.log(this.splashBtn);
    // console.log(this.mainScreen);
  },

  addEventListener() {
    console.log('addEventListener');

    // add event listener to splash button
    this.splashBtn.addEventListener('click', () => {
      this.splashScreen.classList.add("hidden");
      this.mainScreen.classList.remove("hidden");
    });
  },
};

App.init();