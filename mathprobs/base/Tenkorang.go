package main

import "fmt"

func main(){
	fmt.Println(base(2342,2))
}

func base(n int, b int)([]int,int){
	Remainders := []int{}
	R_Remainders := []int{}

	count := 0
	var remainder int
	for i:=1;i<=b*b*b*b*b;i++{
		if n < b{
			remainder = n
			Remainders = append(Remainders,remainder)
		}else{
			remainder = n % b
			Remainders = append(Remainders,remainder)
		}
		n = int(n/b)
		count++
		if n == 0{
			break
		}
	}
	fmt.Println(Remainders[0])
	for i := len(Remainders)-1;i <= 0;i--{
		R_Remainders = append(R_Remainders,Remainders[i])
		fmt.Println(R_Remainders)
	}
	return R_Remainders,count
}

