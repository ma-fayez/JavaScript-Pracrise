var nums = [12, 21, 85, 98, 5, 66, 96, 25, 147, 326, 25, 5, 7, 36];

var max = nums[0];

for (var i = 0; i < nums.length; i++) {

    var element = nums[i];

    if (element > max) {
        max = element;
    }
}

console.log("Heightest value is :", max);