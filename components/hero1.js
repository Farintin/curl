var hero1Temp = document.createElement("template");
hero1Temp.innerHTML = `
<style>
    #hero1 {
        height: 100vh;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    #hero1 .bgImg-color-overlay {
      height: 100%;
      background-color: #000;
      opacity: 20%;
    }
    
    #hero1 > .wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #hero1 > .wrapper > .overlay {
      flex-grow: 1;
      width: 80%;
      max-width: 1200px;
      padding: 12px;
      position: relative;
    }
</style>

<meta id="selectors" bgColor="#hero1" bgImg="#hero1">

<section id="hero1">
    <div class="bgImg-color-overlay"></div>
    <div class="wrapper">
      
      <comp-header1 bgColor="#fff"></comp-header1>
      <div class="overlay">

        <div class="group-content pin-vertical-center pin-horizontal-center">
          
          <comp-btn2>
            <div for="comp-btn2" insert="text">Shop now</div>
          </comp-btn2>

        </div>

      </div>

    </div>
</section>
`;





class Hero1 extends Comp {
  constructor() {
    super(hero1Temp);

  }
};

window.customElements.define("comp-hero1", Hero1);