// Function adds two numbers
function addTwoNumbers (a, b){
    try{
        if (typeof(a) != "number"){
            throw new ReferenceError("the first argument is not a number") // Determine data type to see if these numbers can be added
        }
        else if (typeof(b) != "number"){
            throw new ReferenceError("the second argument is not a number")
        }
        else{
        console.log(a+b)
        }
    }
    catch (err){
        console.log("Error!", err)
    }
}
addTwoNumbers(5,"5") // "55"
console.log("It still works") // Despite the code having a typeError it still runs