package main

import "fmt"

func main(){
	number := 720
	for i := 1;i < number;i++{
		if fact(i) == number{
			fmt.Println(i)
		}
	}
}

func fact(n int)int{
	if n == 1 || n==0{
		return 1
	}else{
		return n*fact(n-1)
	}
}

