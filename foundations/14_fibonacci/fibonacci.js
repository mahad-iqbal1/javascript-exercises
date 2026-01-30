const fibonacci = function(arg) {
  let num;
  if (typeof arg !== 'number') {
    num = parseInt(arg)
  } else {
    num = arg;
  }   

  let first = 1;
  let second = 1;
  let fib = 0;

  if (num === 1 || num === 2) {
    return 1;
  }

  if (num < 0) {
    return "OOPS";
  }

  for (let i = 0; i <= num - 3; i++) {
    fib = first + second;
    second = first;
    first = fib;
  }

  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
