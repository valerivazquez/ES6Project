var  a = "gatito"
var b = new String("gatito")
var c = String("gatitio")
var d = new Object()
d.nom = "valeri"
d.apellido ="vazquez"

var e = {
		campo_1: "aa",
		campo_2: "bb"
}
e.campo_3 = "cc"

/*

console.log(typeof a, a)
console.log(typeof b, b)
console.log(typeof c, c)
console.log(typeof d, d)
console.log(typeof e, e)
console.log(typeof d.nom, d.nom)
*/

var sumar = function(num1, num2){
	var c = "zz"

	this.z = "vslor a the this"
	console.log("cvalor:", arguments[0])
	console.log("cvalor:", arguments[1])
	console.log("cvalor:", arguments[2])
//	console.log("this:", this)
	console.log("this.a:", this.c)

	return (num1+num2)

}

console.log("alli", sumar(2,5))
console.log("aqui", sumar(2,5).valueOf())
console.log(sumar)


var num1 = new Number(12)
var num2 = num1 + 23
console.log(num1, num2)



