//Exercice 1 tutorial 5 

/*let myArray = ["Alice", "Bob", "Charlie", "David"];
 
//add "Eve" & "Frank" to the end of the array and print output.
myArray.push("Eve" , "Frank");
console.log(myArray);

//add "Grace" to the beginning of the array and print output.
myArray.unshift("Grace");
console.log(myArray);

//sort the array alphabetically
myArray.sort();
console.log(myArray);

//remove Bob element from the array and output 
myArray.splice(1,2);
console.log(myArray);

//reverse the order and output 
myArray.reverse();
console.log(myArray);

//remove the first element from the array and print output
myArray.splice(0,1);
console.log(myArray);

//combine all elements into a single string seperated by a comma and a space
 let combinedString = myArray.join(", ");
 console.log(combinedString);

//print the final length of the array 
console.log(myArray.length);




//Exercice 2 tutorial 5
console.log(1+3);
console.log(1+"bird");


let students = [
    {
     ID: 1,
     firstName: "jenny",
     lastName: "avakian",
     age: 18
    },
    {
        ID: 2,
        firstName: "sabrina",
        lastName: "bedrossian",
        age: 19
       },
       {
        ID: 3,
        firstName: "sami",
        lastName: "taleb",
        age: 20
       }

];



console.log("First:", students[0].age);

students[0].age = 20;

console.log("First:", students[0].age);



console.log(isNan(hh));


*/
//this will output the deleted items , here it is []
let myArray = ["Alice", "Bob", "Charlie", "David"];
console.log(myArray.splice(2,0,"hey","hi"));

//this will output the new array
let myArray2 = ["Alice", "Bob", "Charlie", "David"];
myArray2.splice(2,0,"hey","hi");
console.log(myArray2);

//this will output the sliced items
let myArray3 = ["Alice", "Bob", "Charlie", "David"];
console.log(myArray3.slice(2));

//this will print the original array .
let myArray4 = ["Alice", "Bob", "Charlie", "David"];
(myArray4.slice(2));
console.log(myArray4);

//sort
myArray.sort();
console.log(myArray);

//numeric sort 
//function f(a,b){return a-b}
//const p= [20,100,11,4];
//p.sort(f);
//console.log(p);


//console.log(p.reverse());
//console.log(p.indexOf(20));

const numb = [45,4,9,16,25];
let txt = "0";
function f (value, array) {
    txt+= value + " "; }
numb.forEach(f);
console.log(txt);

