/*Write down a computer solution that can be used to count the number of times a particular 
digit appears in an (integer) input. Hint you may assume that there is an operator % that returns the 
remainder when one integer is divided by another and has the 
syntax a %b where a and b are integer constants. 
*/


function occur(number, digit){
  let numberoftimes = 0
  let arr =  Array.from(number.toString())

  // loop through the array and grab compared
  for (let i=0; i<=arr.length; i++){

    if (arr[i] == digit) {
      numberoftimes = numberoftimes +1 
    }
  }
  return numberoftimes
}
console.log(occur(111111111123344, 1))
