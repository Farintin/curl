var btn1Temp = document.createElement("template");
btn1Temp.innerHTML = `
  <style>
    .btn1 {
        width: 50px;
        height: 50px;
    }
    .btn1 a {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        display: block;
    }
    .btn1 .wrapper {
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<meta id="selectors" bgColor=".wrapper">

<div class="comp btn btn1">
  <a href="#">
    <div class="wrapper">

      <comp-insert name="content"></comp-insert>

    </div>
  </a>
</div>
`;



class Btn1 extends Comp {
  constructor() {
    super(btn1Temp);

  }
  
};

window.customElements.define("comp-btn1", Btn1);