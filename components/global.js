class Comp extends HTMLElement {
  constructor(temp) {
    super();

    this.appendChild(temp.content.cloneNode(true));
    
    this.inserts = this.querySelectorAll(`*[insert][for="${this.tagName.toLowerCase()}"]`);
    for (let node of this.inserts) {
      let insertTarget = this.querySelector(`comp-insert[name="${node.getAttribute("insert")}"]`);
      insertTarget.outerHTML = node.innerHTML;
      node.remove();
    };
    
    this.selectorsMetaNode = this.querySelector("meta#selectors");
    if (this.selectorsMetaNode) {
      this.css = {
        bgColor: this.getAttribute("bgColor"),
        stroke: this.getAttribute("stroke")
      }

      if (this.css.bgColor) {
        this.bgColorNodes = this.querySelectorAll(this.selectorsMetaNode.getAttribute('bgColor'));
        for (let node of this.bgColorNodes) {
          node.style.backgroundColor = this.css.bgColor
        }
      };
      
      if (this.css.stroke) {
        this.strokeNodes = this.querySelectorAll(this.selectorsMetaNode.getAttribute('stroke'));
        for (let node of this.strokeNodes) {
          node.style.stroke = this.css.stroke
        }
      };

    }
  }
};



class Insert extends HTMLElement {
  constructor() {
    super();

    this.style.display = "none";
  }
};

window.customElements.define("comp-insert", Insert);