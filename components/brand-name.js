var brandNameTemp = document.createElement("template");
brandNameTemp.innerHTML = `
<style>
    .brand-name .text {
        font-size: 180%;
        font-weight: 700;
        letter-spacing: 1px;
        margin-top: 5px;
    }
</style>

<div class="comp brand-name">
  <a href="#">
    <p class="text">
      
      <comp-insert name="content"></comp-insert>
    
    </p>
  </a>
</div>
`;




class BrandName extends Comp {
  constructor() {
    super(brandNameTemp);

  }
};
window.customElements.define("comp-brand-name", BrandName);