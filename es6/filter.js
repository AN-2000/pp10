let a = [1, 2, 3, 4, 5];

function isEven(x) {
  return x % 2 == 0;
}

let filteredArr = a.filter(isEven);

console.log("Original filter function:");
console.log(a);
console.log(filteredArr);

// --------------------------

// myFilter

function myFilter(arr, f) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i])) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

console.log("Created filter function:");
console.log(a);
console.log(myFilter(a, isEven));
