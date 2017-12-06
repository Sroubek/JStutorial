'use strict'
function eat(food) {
  return food + ' tasted really good.';
}
console.log(eat('bananas'));


const Taste = {
 type(food) {
return food + ' tasted really good.';
 }
}
module.exports = Taste;
