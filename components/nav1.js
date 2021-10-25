const header1Temp = document.createElement("template");
header1Temp.innerHTML = `
<style>
    #header1 {
        display: flex;
        width: 100vw;
    }

    #header1 .col {
        padding: 12px;
        display: flex;
        flex-grow: 1;
        align-items: center;
    }
    #header1 .col-1 {
        justify-content: flex-end;
        min-width: 10%;
    }
    #header1 .col-2 {
        width: 80%;
        max-width: 1200px;
    }
    #header1 .col-3 {
        min-width: 10%;
    }

    #header1 .col-2 main {
        width: 100%;
        min-height: 50px;
        border-radius: 50px;
        padding: 5px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #header1 .col-2 main > * {
        margin: 0 6px;
    }
    #header1 .col-2 main > .brand {
        margin: 0 18px;
    }
</style>

<meta id="selectors" bgColor=".col-2 main">

<nav id="header1">
    <div class="col col-1">

        <comp-btn1>
            <div for="comp-btn1" insert="content">
                <icon-hamburger bgColor="#f00"></icon-hamburger>
            </div>
        </comp-btn1>

    </div>

    <div class="col col-2">

        <main>
            <comp-brand-name class="brand">   
                <div for="comp-brand-name" insert="content">Curl</div>
            </comp-brand-name>
            
            <comp-nav-list>
                <div for="comp-nav-list" insert="content">
                    <li class="item">
                        <a href="#">home</a>
                    </li>
                    <li class="item">
                        <a href="#">about</a>
                    </li>
                    <li class="item">
                        <a href="#">collections</a>
                    </li>
                    <li class="item">
                        <a href="#">contact</a>
                    </li>
                </div>
            </comp-nav-list>
    
            <comp-cart-btn1>
                <div for="comp-cart-btn1" insert="content">Cart</div>
            </comp-cart-btn1>
        </main>

    </div>

    <div class="col col-3">
        
        <comp-btn1>
            <div for="comp-btn1" insert="content">
                <icon-search stroke="#f00"></icon-search>
            </div>
        </comp-btn1>

    </div>
</nav>
`;

class Header1 extends Comp {
  constructor() {
    super(header1Temp);

  }
};

window.customElements.define("comp-header1", Header1);
