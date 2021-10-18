var hero1Temp = document.createElement("template");
hero1Temp.innerHTML = `



<style>
    #hero1 {
        height: 100vh;
        background-color: green;
        /*background-image: url('');
        background-position: center;
        background-size: cover;*/
    }
    
</style>

<section id="hero1">
</section>



`;





class Hero1 extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(hero1Temp.content.cloneNode(true));
  }
};

window.customElements.define("hero-1", Hero1);