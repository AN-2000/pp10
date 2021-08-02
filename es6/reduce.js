let a = [1, 2, 3];

function sum(a, b) {
  return a + b;
}

let reducedValue = a.reduce(sum);

console.log(a);
console.log(reducedValue);

// ------------------------

// myReduce

function myReduce(arr, f) {
  // f= sum
  //arr = [1,2,3]

  let ans = arr[0]; //(1 + 2) + 3

  for (let i = 1; i < arr.length; i++) {
    ans = f(ans, arr[i]);
  }

  return ans;
}
