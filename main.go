package main

import (
	"fmt"
	"reflect"
)

func main() {
	// log.Println("hello world")
	// fmt.Println([]byte("hello world"))
	// fmt.Println([]rune("hello world"))
	var myName string
	age := 25
	myName = "koda"
	fmt.Println(myName)
	fmt.Println(age)
	fmt.Println(reflect.TypeOf(age))

	switch true {
	case age < 25 && age > 0:
		fmt.Println("masih muda")
	case age >= 25:
		fmt.Println("masih muda")
		default :
		fmt.Println("umr aneh")
	}
}