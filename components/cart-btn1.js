var cartBtn1Temp = document.createElement("template");
cartBtn1Temp.innerHTML = `
  <style>
    .cartbBtn1 {
        background-color: #f00;
    }
    .cartbBtn1 .wrapper {
        width: 82px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="comp btn cartbBtn1">
    <a href="#">
        <div class="wrapper">
              <p class="text">

                <comp-insert name="content"></comp-insert>

              </p>
        </div>
    </a>
</div>
`;




class CartBtn1 extends Comp {
  constructor() {
    super(cartBtn1Temp);
  }
};

window.customElements.define("comp-cart-btn1", CartBtn1);