// jodi ekta array te ek ta elements ekadik bar thake tahole segulo ber kore deowar upay

var nums = [12,25,63,69,12,63,56,63,58,25];
var unique = []; 

for(var i = 0; i<nums.length; i++){

    var element = nums[i];

    var index = unique.indexOf(element);
    if(index == -1){
        unique.push(element);
    }
}
console.log(unique);