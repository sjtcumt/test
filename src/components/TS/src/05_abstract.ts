(function () {
  abstract class Animal {
    abstract sayHello(): void;
  }

  class Dog extends Animal {
    sayHello() {
      console.log("dog");
    }
  }

  const dog = new Dog();
  dog.sayHello();
})();
