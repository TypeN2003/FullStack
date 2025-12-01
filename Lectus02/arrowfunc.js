const a = 5
const b = 10

const add = function(a, b) {
    return a + b
};
console.log(`The sum is:${a} and ${b} ${add(a, b)}`)

const xadd = (x, y) => x + y
console.log(`The sum is:${a} and ${b} ${xadd(a, b)}`)

const subtract = (x, y) => {
    result = x - y
  return result
};
console.log(`The difference is:${a} and ${b} ${subtract(b, a)}`)
