var toAddBegging = [23, 45, 12, 67];
toAddBegging.unshift(34); //here used unshift keyword to add an array element to the begging
console.log(toAddBegging); 

//==================================================
var toRemoveFromBegging = [12, 25, 56, 85, 562, 21];
toRemoveFromBegging.shift(); //here used shift keyword to remove an array element from the begging
console.log(toRemoveFromBegging);
//===================================================

var toAddEnd = [12, 25, 14, 16, 78];
toAddEnd.push(95); //here used push keyword to add an array element to the end
console.log(toAddEnd);
//=====================================================

var toRemoveFromEnd = [56, 54, 78, 42, 23];
toRemoveFromEnd.pop(); //here used pop keyword to remove an array element from the end
console.log(toRemoveFromEnd);
//========================================================

var union1 = ['Charlakshya', 'Charpathor-ghata', 'Icha-nogor'];
var union2 = ['Khowaj-nogor', 'Molovi-Bazar', 'Sikholbaha'];

var upzela = union1.concat(union2); // //here used concat keyword to add two array
console.log(upzela);

//==========================================================

//adding element in array using splice
var stu1 = ['Rahim', 'Karim', 'Sakib', 'Rakib'];
stu1.splice(3,0, 'Masud', 'Sikdar');
console.log(stu1);
//============================================================
//Remove array elements using splice
var stu2 = ['Rahim', 'Karim', 'Sakib', 'Rakib'];
stu2.splice(1, 3);
console.log(stu2);
//=============================================================
//Alphabate akare array elements ke sajate sort method use kora hoy
var stu3 = ['Rahim', 'Karim', 'Sakib', 'Rakib'];
stu3.sort();
console.log(stu3);
//==============================================================
// ekti array er elements gulo ke tik ultho dik theke sajate reverse method use kora hoy
var stu4 = ['Rahim', 'Karim', 'Sakib', 'Rakib'];
stu4.reverse();
console.log(stu4);
//==================================================================
//number sorting(choto theke boro)
var num = [54, 63, 59, 5, 57, 21, 15];
num.sort(function(a, b){
    return a - b;
});
console.log(num);
//====================================
//number sorting (boro theke choto)
var num1 = [54, 63, 59, 5, 57, 21, 15];
num1.sort(function(a, b){
    return b - a;
});
console.log(num1);
//============================================
