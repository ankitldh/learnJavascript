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
list.remove();
console.log(list)
