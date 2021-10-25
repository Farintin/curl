var btn2Temp = document.createElement("template");
btn2Temp.innerHTML = `
  <style>
    .btn2 a {
      border-radius: inherit;
    }
    .btn2 .wrapper {
      border-radius: inherit;
        background-color: #f00;
        padding: 16px 36px;
    }
</style>

<meta id="selectors" bgColor=".wrapper">

<div class="comp btn btn2">
  <a href="#">
    <div class="wrapper">

      <p class="text">
        <comp-insert name="text"></comp-insert>
      </p>

    </div>
  </a>
</div>
`;



class Btn2 extends Comp {
  constructor() {
    super(btn2Temp);

  }
  
};

window.customElements.define("comp-btn2", Btn2);