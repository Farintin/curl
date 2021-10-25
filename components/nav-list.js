var navListTemp = document.createElement("template");
navListTemp.innerHTML = `
  <style>
    .nav-list {
        list-style: none;
        display: flex;
        align-items: center;
    }
    .nav-list .item {
        margin: 0 18px;
        font-weight: 700;
        font-size: 75%;
        text-transform: capitalize;
        letter-spacing: 2px;
    }
</style>

<ul class="nav-list">

  <comp-insert name="content"></comp-insert>

</ul>
`;



class NavList extends Comp {
  constructor() {
    super(navListTemp)

  }
};

window.customElements.define("comp-nav-list", NavList);