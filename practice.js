
console.log(7*3);
console.log(7*'3');
console.log('hello'*3);
console.log('$'+3+4);
console.log("11"<2); //f
console.log(11<"2"); //f
console.log('1'<5); //f
console.log("11"<"2");
console.log("11">"2");

console.log(1+2);
console.log("11"/"2");
console.log("11"/2);
console.log("hey"/"2");
console.log("hey"/2);
console.log("$" * 3)

/*
var a = String ("12");
var b = new  String ("12");
console.log(a==b);
/*

var a = "1";
var b = 1;
//var c = a.toLowerCase();
console.log(a.toLowerCase());

console.log(Boolean("false"));
console.log(Boolean(""));
console.log(Boolean(" "));

console.log(a==b); //true
console.log(a!==b);//true


*/

/*
var number = 25;

    var number = 30;
    console.log(number);


console.log(number);
// will give 30 and then 25

*/

/*
var msg = "global";
{
    var msg = "in scope";
    console.log(msg);

}
console.log(msg);


//create a new array 

const cars = ["2", "Mercedes" , "Volvo" ];
console.log(cars[0]*2);


//create an object

const person = { firstName : "John",
                 lastName : "Doe",
                 age : 45
               };

console.log(person.lastName);

*/

/*
//methods 
function f (a,b) {return b-a}
const fruits = [40,100,1,5,25,40 ];
fruits.sort(f);
console.log(fruits);

(fruits.reverse());
console.log(fruits);


console.log(fruits.lastIndexOf(40)+1);

/*const j = ["hey"];

console.log (fruits.toString());
console.log(fruits.join("**"));
console.log(fruits.push("Lemon"));

console.log(fruits.pop());
delete fruits[2];


//for string sorting
console.log(fruits.sort());  

//to reverse 
console.log(fruits.reverse());

//for number sorting
const numb = ["40", "100", "1", "5", "25", "10"];
numb.sort(function (a,b) {
    return a-b
});

//will give the index of the element we want
console.log(fruits.indexOf("Apple"));

console.log(fruits.concat(j));


*/
/*
var name = "Global Name";

function changeVar() {
  var name = "Local Name";
  console.log(name); // Shows "Local Name" because var creates a new variable in the function
}

changeVar();

// Shows "Global Name" because the var in the function didn’t change this

var num = 6;
console.log(parseInt("6.99"));*/



