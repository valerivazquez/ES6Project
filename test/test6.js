var a = "201601";

moveMes = function (fecha, up){

	var year = parseInt(fecha.substring(0,4));
	var month = parseInt(fecha.substring(4,6)) - 1;
	fecha = new Date (year, month, "01");
	
	if (up){  // up one month
		fecha.setMonth(fecha.getMonth() + 1);
	}else{	// down one month
		fecha.setMonth(fecha.getMonth() - 1);
	}

	year = fecha.getFullYear()
	month = fecha.getMonth() + 1

	var s = "0" + month; // put zeros on the left

	return (fecha.getFullYear() + s.substr(s.length-2));

}


console.log("Year:", moveMes(a, true));