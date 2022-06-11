package main

import "fmt"

var Remainder float64

func main(){
	fmt.Println(DivisionRecreated(200,7))

}
func DivisionRecreated(n float64, m float64)(string,int,string,float64){
	count := 0

	for i := 0; i < int(n*n*n*n); i++ {
		count++
		Remainder = n - m
		n = Remainder
		if Remainder<m{
			break
		}
	}
	return "Number of divisions: ",count," Remainder: ",Remainder
}
