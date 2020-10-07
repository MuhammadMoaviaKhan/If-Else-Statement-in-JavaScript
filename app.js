// Topic 5 If,Else Statement

var marks = 100;

if(marks == 100){
    document.write("Yes you are Pass");
}else{
    document.write("You are fail");
}

document.write("<br><br>")

// Topic 6 Assignment operator & Comparison operators

var a = 1;
var b = "1";

// (===) are check value and also data type

if(a === b){    
    document.write("both are equal");
}else{
    document.write("both are not equal");
}
document.write("<br><br>");

var a = 1;
var b = 10;
var c = 5;
var sum = a + b;
c += sum;

document.write(sum);
document.write("<br>");
document.write(c);

// Topic 7 Switch Statement


document.write("<br><br>");

function myfun() {
    var choice = document.getElementById("choices").value;

    switch(choice){
        case "Add" : var a = 10;
                    var b = 20;
                    var sum = a + b;
                    document.write("Addition of two numbers is " + sum);
                    break;

        case "Sub" : var a = 10;
                    var b = 20;
                    var sub = a - b;
                    document.write("Subtraction of two numbers is " + sub);
                    break;

        case "Mult" : var a = 10;
                    var b = 20;
                    var mult = a * b;
                    document.write("Multiplication of two numbers is " + mult);
                    break;

        default : alert("not a valid input")
    }
}
document.write("<br><br>");
