console.log("hello TS");

let b: "male" | "female";
b = "male";

console.log(b);

let c: boolean | string;

// any
let d: any;
d = true;
let e: unknown;
let f;

console.log(typeof e === "string");
let s = e as string;

function fn(num: number) {
  if (num > 0) {
    return true;
  }
  return "123";
}
// function fn01(): never {
//   // return undefined;
//   return null;
// }

let h: (a: number, b: number) => number;

let i: { name: string; [propName: string]: any }[];
i = [{ name: "hi" }, { name: "p" }];

let j: string[];
j = ["a", "b", "c"];

let k: Array<number>;
k = [1, 2, 3];

// tuple fixed lenght array
let l: [string, string];
l = ["a", "b"];

let m: { name: string; age: number }[];
m = [
  { name: "hi", age: 12 },
  { age: 13, name: "p" },
];

enum Gender {
  Male = 0,
  Female = 1,
}

let n: { name: string; gender: Gender };
n = { name: "ss", gender: Gender.Male };
console.log(n);

let o: { name: string } & [age: number];
