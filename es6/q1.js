let a = [1, 2, 4, 5];

// let b = [1, 2, 3, 4, 5];

// a.slice(0,2) => [1,2]

// a.slice(2,4) => [4,5]

let b = [...a.slice(0, 2), 3, ...a.slice(2, 4)];

console.log(b);
