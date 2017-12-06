'use strict'
const Calculate = {
 sum(inputArray) {

   let totalSum = 0;
   const inputArrayLength = inputArray.length;
   for (let i = 0; i < inputArrayLength; i++){
     totalSum += inputArray[i]
   }
   return totalSum;
 }
}

module.exports = Calculate;

const Calculate2 = {
    sum(inputArray) {

      if(inputArray.length === 0){
        return 0
      }

      return inputArray.reduce((sum, value) => {
        return sum + value;
      })
    }
  }

  module.exports = Calculate2;
