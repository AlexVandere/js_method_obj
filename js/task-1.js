function isEnoughCapacity(products, containerSize){
  const newArr = Object.values(products);
  let total = 0;
  for (const key in newArr) {
   total +=newArr[key]
  }
const boolenArray =total >= containerSize && total >= containerSize
return boolenArray 
}
console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true
