array_datos = [
{
	fecha: new Date(2014,04,1),
	dato: 0
},
{
	fecha: new Date(2014,03,1),
	dato: 1
},
{
	fecha: new Date(2014,02,1),
	dato: 2
}
]



fecha = new Date(2014,03,1)
/*
fecha2 = new Date(2014,03,1)
console.log(fecha1.getTime == fecha2.getTime)
*/

dato = 1
console.log(array_datos)
console.log(fecha)

var result = array_datos.filter(function( array ) {
  return array.fecha.getTime() == fecha.getTime();
});

console.log("result", result)



/*

var moment = require('moment');

data_array = [new Date(2014,04,1);
console.log(date_db)



var date_closed = moment([2015, 4]).add(1,'month');
/*
var date_1 = date_closed.clone();
console.log("Fecha-Y:",date_1.month().toString() +"/"+date_1.year().toString().slice(-2));

var date_2 = date_closed.subtract(1,'month').clone();
console.log("Fecha-Y:",date_2.month().toString() +"/"+date_1.year().toString().slice(-2));

var date_3 = date_closed.subtract(1,'month').clone();
console.log("Fecha-Y:",date_3.month().toString() +"/"+date_1.year().toString().slice(-2));

var horizon = new Array();

for(i=0;i<=11;i++){
	date_closed.subtract(1,'month');

	horizon[i]= date_closed.month().toString() +"/"+
				date_closed.year().toString().slice(-2)
}

console.log("Horizon", horizon, horizon.length)

/*
var horizon = new Array();

		horizon[0]="4/15";
		horizon[1]="3/15";
		horizon[2]="2/15";
		horizon[3]="1/15";
/*
		var tam=nombres.length - 1;
		document.write("Longitud de la ARRAY:" + tam + "<br>");
		for(i=0;i<=tam;i++){
			document.write("Indice de la array: " + i + "<br> Valor: " + nombres[i] + "<br>");
		}


		var nueva=nombres[1];
*/

//console.log(horizon);
