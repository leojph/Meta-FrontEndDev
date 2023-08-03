// Old enough? Exercise conditional loops
var age = 10;
if (age >= 65){
    console.log("You get your income from your pension")
}
else if (age <= 65 && age >= 18){
    console.log("Each month you get a salary")
}
else if (age <= 18){
    console.log("You get an allowance")
}
else{
    console.log("The value of the age variable is not numerical")
}

// Days of week switch statement
var day = "Sunday"
switch(day){
    case "Monday": //Mon
        console.log("Code")
        break;
    case "Tuesday": //Tues
        console.log("Work")
        break;
    case "Wednesday": //Wed
        console.log("Read")
        break;
    case "Thursday": //Thurs
        console.log("Clean")
        break;
    case "Friday": //Fri
        console.log("Socialize")
        break;
    case "Saturday": //Sat
        console.log("Relax")
        break;
    case "Sunday": //Sun
        console.log("BBQ")
        break;
    default:
        // if no conditional matches this block runs
        console.log('There is no such day') 
    
}