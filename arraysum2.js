
function arraySum(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {

        SaveArray = numbers[i];
        sum = sum + SaveArray;
    }
    return sum;
}

var numbers = [45, 45, 36];
var total = arraySum(numbers);
console.log("Total numbers of array is : ", total);

var numbers = [45, 45, 256, 26, 58, 65, 96, 78, 45];
var last = arraySum(numbers);
console.log("Total numbers of array is : ", last);