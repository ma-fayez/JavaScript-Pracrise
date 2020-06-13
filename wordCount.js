var word = "Hi I'm Fayez."

var incress = 0;
for (var i = 0; i < word.length; i++) {

    var element = word[i];

    if (element == " " && word[i - 1] != " ") {

        incress++;

    }
}
incress++;
console.log(incress);