// alert appears when the page is loaded
// alert('Hello World');

class App {
  constructor() {
      this.registerComponents();
  }
  registerComponents() {
      this.splashScreen = document.querySelector("#splash-screen");
      this.splashBtn = document.querySelector("#splash-btn");
      this.mainScreen = document.querySelector("#main-screen");

      this.registerEventListeners();

  }
  registerEventListeners() {
    // this.splashButton
    // set event listener for the button
    // this.splashBtn.addEventListener("click", this.hideSplashScreen.bind(this));

    // add classname hidden on splash screen when the button is clicked
    this.splashBtn.addEventListener("click", () => {
      this.splashScreen.classList.add("hidden");
      this.mainScreen.classList.remove("hidden");
      console.log(test);
    });

  }
}