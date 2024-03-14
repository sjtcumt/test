class Snake {
  element: HTMLElement;
  head: HTMLElement;
  body: HTMLCollection;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.body = document.getElementById("snake")!.getElementsByTagName("div");
  }
  get X() {
    return this.head ? this.head.offsetLeft * 1 : 0;
  }
  get Y() {
    return this.head ? this.head.offsetTop * 1 : 0;
  }
  set X(value: number) {
    if (this.X === value) {
      return;
    }
    console.log("0000000", value);
    if (value < 0 || value > 290) {
      throw new Error("crash---");
    }
    this.moveBody();
    this.head.style.left = value + "px";
    // this.moveBody();
  }
  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    console.log("0000000", value);
    if (value < 0 || value > 290) {
      throw new Error("crash---");
    }
    this.moveBody();
    this.head.style.top = value + "px";
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  moveBody() {
    for (let i = this.body.length - 1; i > 0; i--) {
      let X = (this.body[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.body[i - 1] as HTMLElement).offsetTop;
      console.log(X, Y);
      (this.body[i] as HTMLElement).style.left = X + "px";
      (this.body[i] as HTMLElement).style.top = Y + "px";
    }
  }
}

export default Snake;
