//Array Sum
//Total ArraySum

var array = [4, 3, 5, 9, 10, 56, 20];
var arraySum = 0;
array.forEach(function(element){
    arraySum = arraySum+element;
})
console.log(arraySum);
//================================================
//different array elements sum
var array1 = [4, 3, 5, 9, 10, 56, 20];

var duplicate = array1.splice(0, 3);
arraysumi = 0;
duplicate.forEach(function(f){
    arraysumi = arraysumi+f; 
}) 
console.log(arraysumi);