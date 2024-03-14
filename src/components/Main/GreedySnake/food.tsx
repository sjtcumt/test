class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  get X() {
    return this.element ? this.element.offsetLeft : 0;
  }
  get Y() {
    return this.element ? this.element.offsetTop : 0;
  }
  change() {
    if (this.element) {
      this.element.style.left = Math.round(Math.random() * 29) * 10 + "px";
      this.element.style.top = Math.round(Math.random() * 29) * 10 + "px";
    }
  }
}

export default Food;
