var hamburgerTemp = document.createElement("template");
hamburgerTemp.innerHTML = `
<style>
    .hamburger {
        width: 18px;
        height: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .hamburger .line {
        width: 100%;
        height: 2px;
        background-color: #000;
        border-radius: 50px;
    }
</style>

<meta id="selectors" bgColor=".line">

<div class="icon hamburger">
  <div class="line line-1"></div>
  <div class="line line-2"></div>
  <div class="line line-3"></div>
</div>
`;




class Hamburger extends Comp {
  constructor() {
    super(hamburgerTemp);

  }
};
window.customElements.define("icon-hamburger", Hamburger);