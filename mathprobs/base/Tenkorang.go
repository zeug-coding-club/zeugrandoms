package main

import "fmt"

func main(){
	fmt.Println(Base(10,3))
}

func Base(number int, base int)[]int{
	result := []int{}
	if number == 0{
		return result
	}
	result = append(result,number%base)
	return Base(int(number / base),base)
}
