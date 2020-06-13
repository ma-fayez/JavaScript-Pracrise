var a = 9;
var b = 5;

console.log("Before swaf : a = ",a,"b = ",b);

a = a+b;
b = a -b;
a = a-b;

console.log("After swaf : a=",a,"b=",b);

function add(num1, num2){
    var result = num1 * num2;
    return result;
}
var sub = add(5, 15);
console.log(sub);