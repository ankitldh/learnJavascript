

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic 
// location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

const partners_name = "kk",geographic_location = "ludhiana", job_title = "devloper", numberOf_childern = 2;
console.log(`I will be a ${job_title} in ${geographic_location} and married to ${partners_name} and have ${numberOf_childern} childern `)




// The Age Calculator
// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable. Store a future year in 
// a variable. Calculate your 2 possible ages for that year based 
// on the stored values. For example, if you were born in 1988, then
//  in 2026 you'll be either 37 or 38, depending on what month it is
//   in 2026. Output them to the screen like so: "I will be either NN 
//   or NN in YYYY", substituting the values. See Solution


const birth = 1988, future_year = 2026, current_age = 37, current_myage=38;
console.log(`I will be either ${current_age} or ${current_myage} in ${future_year}`)



// Write a JavaScript program which return the first element of an array
//  which have 5 elements by removing in different ways.

var list = [1,2,3,4,5];
list.pop();
list.splice(3,1);
// list.slice(0);
// list.remove();
console.log(list)



// Write n array with 20 elements. These could be numbers,
//  words, sentences etc. Write a simple JavaScript program 
//  to join all elements of the following array into a string.

let n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(n.join(''))


// Create and array of your choice of length and elements 
// then write a JavaScript program to compute the sum and 
// product of an array of integers.


// var list = [1,2,3,4,5,6,7,8,9,10];
// var sum = 0;
// var product = 1;
// for (let i = 1, i < list.length ,i++){
//     console.log(list[i])
// }

var file = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
var product = 1;
for (let i = 0; i < file.length; i++) {
    let element = file[i];
    sum=sum+element
    product=product*element
    
}
console.log(sum)
console.log(product)



 //    fruit market
        


// The fruit market has only 1 fruit of each type. Ram, Mohan 
// & Roy went to the market and brought several fruits each. 
// Create your own fruit names. Make a list of 30 fruits. You 
// can get creative with the names if you want

var list = ["apple","apricot","avocado","banana","blackberry","blackcurrant","blueberry","boysenberry","cherry","coconut","fig","grape","grapefruit","kiwifruit","lemon","lime","lychee","mandarin","mango","melon","nectarine","orange","papaya","passion","peach","pear","pineapple","plum","pomegranate","quince",];
console.log(list)

// Create separate javascript variables to store the number of fruits brought.
// Calculate the total number of the fruits.
// Print the total number

var list = ["apple","apricot","avocado","banana","blackberry","blackcurrant","blueberry","boysenberry","cherry","coconut","fig","grape","grapefruit","kiwifruit","lemon","lime","lychee","mandarin","mango","melon","nectarine","orange","papaya","passion","peach","pear","pineapple","plum","pomegranate","quince",];
for (let i = 0; i < list.length; i++) {

    console.log(i)
    
}

// Create 3 arrays of the fruit names as string brought by each person.
// Combine all the arrays into single array
// Print the array to the console

let ram = ["apple","apricot","avocado","banana","blackberry","blackcurrant","blueberry","boysenberry","cherry","coconut"]
let mohan = ["fig","grape","grapefruit","kiwifruit","lemon","lime","lychee","mandarin","mango","melon"]
let roy = ["nectarine","orange","papaya","passion","peach","pear","pineapple","plum","pomegranate","quince"]
 
var li = ram.concat(mohan,roy);
console.log(li)


// Print all the fruit names
// by looping through the array
// by combining the array into a string


var list = ["apple","apricot","avocado","banana","blackberry","blackcurrant","blueberry","boysenberry","cherry","coconut","fig","grape","grapefruit","kiwifruit","lemon","lime","lychee","mandarin","mango","melon","nectarine","orange","papaya","passion","peach","pear","pineapple","plum","pomegranate","quince",];
for (let i = 0; i < list.length; i++) {
    let element = list[i];
    console.log(element.toString())
    
}