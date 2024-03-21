"use strict";
//function of Area of rectangle
function rectangleArea(length, bredth) {
    return length * bredth;
}
//resfactoring this to arrow function
let rectangleArea1 = (length, bredth) => length * bredth;
console.log(rectangleArea1(10, 8));
