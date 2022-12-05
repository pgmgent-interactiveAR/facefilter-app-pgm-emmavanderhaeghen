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

    this.model1 = document.querySelector(".model-1");
    this.model2 = document.querySelector(".model-2");
    this.model3 = document.querySelector(".model-3");
    this.model4 = document.querySelector(".model-4");
    this.model5 = document.querySelector(".model-5");

    this.filter1 = document.querySelector(".filter-1");
    this.filter2 = document.querySelector(".filter-2");
    this.filter3 = document.querySelector(".filter-3");
    this.filter4 = document.querySelector(".filter-4");
    this.filter5 = document.querySelector(".filter-5");
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

    // update model visibility with setAttribute
    // add event listener to filters
    this.filter1.addEventListener('click', () => {
      // this.model1.setAttribute('visible', true);
      if (this.model1.getAttribute('visible') === true) {
        this.model1.setAttribute('visible', false);
      } else {
        this.model1.setAttribute('visible', true);
      }
    });

    this.filter2.addEventListener('click', () => {
      // this.model2.setAttribute('visible', true);
      if (this.model2.getAttribute('visible') === true) {
        this.model2.setAttribute('visible', false);
      } else {
        this.model2.setAttribute('visible', true);
      }
    });

    this.filter3.addEventListener('click', () => {
      // this.model3.setAttribute('visible', true);
      if (this.model3.getAttribute('visible') === true) {
        this.model3.setAttribute('visible', false);
      } else {
        this.model3.setAttribute('visible', true);
      }
    });

    this.filter4.addEventListener('click', () => {
      // this.model4.setAttribute('visible', true);
      if (this.model4.getAttribute('visible') === true) {
        this.model4.setAttribute('visible', false);
      } else {
        this.model4.setAttribute('visible', true);
      }
    });

    this.filter5.addEventListener('click', () => {
      // this.model5.setAttribute('visible', true);
      if (this.model5.getAttribute('visible') === true) {
        this.model5.setAttribute('visible', false);
      } else {
        this.model5.setAttribute('visible', true);
      }
    });
  }
};

App.init();


// currentvalue = document.getElementById('onoff').value;
// if(currentvalue == "Off"){
//   document.getElementById("onoff").value="On";
// }else{
//   document.getElementById("onoff").value="Off";
// }