
/*
Given a positive integer, N, devise a computer solution that can be used to 
find another integer M whose factorial is N.
For example if N is given as 720 then M should be 6.
*/ 


function reversefactorial(n){
  numstart = 1 
  product = 1
  while (true){
    numstart++
    product *=numstart
    if (product==n){
      break
    }else if(product>n){
      console.log("M has no reverse factorial!")
      break
    }
  }
  return "M: "+ numstart
}

console.log(reversefactorial(720))