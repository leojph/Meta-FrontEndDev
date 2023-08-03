function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >= 2
    var condition2 = typeof(match) == "string" && match.length == 1
    if (condition1 == true && condition2 == true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else{
        console.log("Please pass correct arguments to the function.")
    }
}
//letterFinder(11,22)
letterFinder("cat", "c")

var i = 3;
var j = 5;
if( i == 3 && j < 5){
    console.log("Hello")
}
else{
    console.log("Goddbye")
}

