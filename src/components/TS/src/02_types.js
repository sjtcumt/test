console.log("hello TS");
var b;
b = "male";
console.log(b);
var c;
// any
var d;
d = true;
var e;
var f;
console.log(typeof e === "string");
var s = e;
function fn(num) {
    if (num > 0) {
        return true;
    }
    return "123";
}
// function fn01(): never {
//   // return undefined;
//   return null;
// }
var h;
var i;
i = [{ name: "hi" }, { name: "p" }];
var j;
j = ["a", "b", "c"];
var k;
k = [1, 2, 3];
// tuple fixed lenght array
var l;
l = ["a", "b"];
var m;
m = [
    { name: "hi", age: 12 },
    { age: 13, name: "p" },
];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var n;
n = { name: "ss", gender: Gender.Male };
console.log(n);
var o;
