'use strict'

const fibonacci = () => {
  const fibonacciArray = [1, 1]
  let next = 0;

  while ((next = fibonacciArray[0] + fibonacciArray[1]) < 350) {
    fibonacciArray.unshift(next);
  }
  
  fibonacciArray.sort((a,b) => a - b).unshift(0);
  return fibonacciArray;
}

const isFibonnaci = num => fibonacci().includes(num)

module.exports = {
  fibonacci,
  isFibonnaci
}
