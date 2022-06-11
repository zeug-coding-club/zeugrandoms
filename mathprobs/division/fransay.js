/*Without using the division (/) devise a computer solution that can be used to m goes into n as well as the remainder. 
The values for m and n will be read as inputs.*/ 


function div(m,n){
  // func returns divisible number + remainder without using the division sign
  /* m is dividend and n is divisor 
   since */
  let constantcount = 1
  let prod
  while (true){
    prod = constantcount *n 
    
    if (prod==m){
      return m + " is divisible by "+n +" ,=>"+ constantcount + " times with no remainder"
    }else if(prod >m){
      let newconst = constantcount-1
      return m + " is divisible by "+ n +" ,=>  "+ newconst + " times" + " with a remainder of "+ (m - (newconst)*n)

    }
    constantcount++
  }
}

console.log(div(100,5))

