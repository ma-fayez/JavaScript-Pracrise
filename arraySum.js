
function getarraysum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        sum = sum + value;
    }

}
var array = [45, 56, 26, 36];
var result = getarraysum(array);

console.log("Total summition of array is :", result);

var dou = getarraysum([23, 26, 63, 69, 9]);

console.log("Total summition of array is :", dou);

/*function GetArraysum(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        var value = numbers[i];
        sum = sum + value;
    }
    return sum;
}

var numbers = [212, 21, 23, 12, 34, 36];
var result = GetArraysum(numbers);
console.log("Total marks :", result);

var duplicate = GetArraysum([34, 43, 45, 23, 34, 12, 21, 434, 43]);
console.log("Total marks :", duplicate);*/