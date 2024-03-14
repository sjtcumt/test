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
