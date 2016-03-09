var recalcularFecha = function(fecha){
var n = fecha.indexOf("/");

var month = fecha.substring(0,n);
var year = fecha.substring(n+1,fecha.length);

var s = "0" + month; // put zeros on the left
month = s.substr(s.length-2);


s = "0" + year; // put zeros on the left
year = "20" + s.substr(s.length-2);

result = year + month
return(result);
}

console.log(recalcularFecha("12/2"));

//	return (fecha.getFullYear() + s.substr(s.length-2));
