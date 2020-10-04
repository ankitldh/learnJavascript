// Release 0
// Write a JavaScript program which return the first element of an array
//  which have 5 elements by removing in different ways.

var list = [1,2,3,4,5];
list.pop()
delete list[3]
list.splice(2,1)
b = list.slice(1,2)
console.log(b)

// Release 1
// Write n array with 20 elements. These could be numbers, words, sentences etc.
//  Write a simple JavaScript program to join all elements of the following array
//   into a string.

var file =["ankit kumar",1,2,55,6,09,6,34,"a","#","&",4 ,43,34,"*",32,"ak",78,"$",20]
console.log(file.join(''))



// create and array of your choice of length and elements then write a JavaScript program to compute
//  the sum and product of an array of integers.


var array=[1,2,3,4,5,6,7,8,9,10];
var count = 1;
let sum = 0;
for(let i = 0; i < array.length ; i++){
    let total = array[i]
    count*=total
    sum+=total
}
console.log(count)
console.log(sum)



// Create and array of your choice of length and elements then write a JavaScript program to remove
//  duplicate items from an array

var li = [1,2,2,3,3,4,5,7,2,5,7,3,5,8,4,8,3,5,9]




