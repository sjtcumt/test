(() => {
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

  type Mytype = {
    name: string;
    age: number;
  };

  const obj: Mytype = {
    name: "abc",
    age: 2,
  };

  interface Myinterface {
    _name: string;
    gender: number;
    sayHello(): void;
  }
  class mmmm implements Myinterface {
    _name: string;
    private _age: number;
    gender: number;
    constructor(name: string, age: number, gender: number) {
      this._name = name;
      this._age = age;
      this.gender = gender;
    }
    sayHello(): void {
      console.log("my name is :%O", this.name);
    }
    get name(): string {
      return this._name;
    }
    set name(value: string) {
      this._name = value;
    }
  }

  const mmobj: mmmm = new mmmm("abc", 2, 0);
  mmobj.name = "asd";
  mmobj.sayHello();

  function fn<T>(a: T): T {
    return a;
  }
  fn(2);
  fn<string>("123");

  function fn2<T, K>(a: T, b: K): T {
    return a;
  }

  interface Inter {
    length: number;
  }

  function fn3<T extends Inter>(a: T): number {
    return a.length;
  }
})();
