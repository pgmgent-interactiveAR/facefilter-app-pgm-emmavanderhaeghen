const App = {
  init() {
    this.cacheElements();
    this.addEventListener();
    this.onoff();
  },

  cacheElements() {
    // console.log('cacheElements');

    this.splashScreen = document.querySelector(".splash-screen");
    this.splashBtn = document.querySelector(".splash-btn");
    this.mainScreen = document.querySelector(".main-screen");
  },

  addEventListener() {
    // console.log('addEventListener');

    // add event listener to splash button
    this.splashBtn.addEventListener('click', () => {
      this.splashScreen.classList.add("hidden");
      this.mainScreen.classList.remove("hidden");
    });
  },

  onoff(){
    console.log('on off test');
    
    currentvalue = document.getElementById('onoff').value;
    if(currentvalue == "Off"){
      document.getElementById("onoff").value="On";
    }else{
      document.getElementById("onoff").value="Off";
    }
  }
};

App.init();