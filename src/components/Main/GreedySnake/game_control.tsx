import Food from "./food";
import ScorePanel from "./score_panel";
import Snake from "./snake";

class GameConntrol {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "ArrowRight";
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    document.addEventListener("keydown", this.keyDownHandle.bind(this));
    this.run();
  }

  run() {
    if (!this.isLive) {
      return;
    }
    console.log(this);
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }
    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch {
      alert("Game Over !");
      this.isLive = false;
    }

    setTimeout(this.run.bind(this), 300);
  }

  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
  keyDownHandle = (e: KeyboardEvent) => {
    if (
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      this.direction = e.key;
      console.log(e.key);
    }
  };
}

export default GameConntrol;
