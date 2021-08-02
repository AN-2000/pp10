let o1 = { a: 1, b: 2 };

let o2 = { c: 3 };

let o3 = { ...o1, ...o2, ...o1, ...o2 };

console.log(o3);

