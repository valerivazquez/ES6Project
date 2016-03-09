/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2014 Webapplayers.com
 *
 */

/**
 * chartJsCtrl - Controller for data for ChartJs plugin
 * used in Chart.js view
 */
var chartJsCtrl = function (datosFactory,$stateParams,$state){

    var vm = this;
    /**
     * Data for Line chart
     * For PimPamBurger Sabateret
     */

    datosFactory.gettingLabels($stateParams.month || "")
		.success(function (labels) {
			vm.labels = labels;
			console.log("labels:" + vm.labels);
			datosFactory.gettingData($stateParams.month || "")
				.success(function (datas) {
                    vm.fecha = $stateParams.month;
					vm.datas = datas;
					console.log("datas:" + vm.datas);
				    vm.series = ["serie1","serie2","serie3","serie4"]
//                    vm.lineOptions_1 = {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
                    vm.lineOptions_1 = {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}
                    vm.lineData_1 = {
				        labels: vm.labels,
                        datasets: [
				            {
				                label: "Ventas",
				               // fillColor: "rgba(220,220,220,0.5)",
				                fillColor: "rgba(0,0,0,0)",
				                strokeColor: "rgba(26,179,148,0.7)",
                                pointColor: "rgba(26,179,148,1)",
				                pointStrokeColor: "#fff",
				                pointHighlightFill: "#fff",
				                pointHighlightStroke: "rgba(26,179,148,1)",
                                data: vm.datas[0]
				            },
				            {
				                label: "Compras",
				                //fillColor: "rgba(26,179,148,0.5)",
				                fillColor: "rgba(0,0,0,0)",
				                strokeColor: "rgba(204,0,0,1)",
                                pointColor: "rgba(204,0,0,1)",
				                pointStrokeColor: "#fff",
				                pointHighlightFill: "#fff",				                
                                pointHighlightStroke: "rgba(204,0,0,1)",
                                data: vm.datas[1]
//				                data: [28, 48, 40, 19, 86, 27, 90, 77, 26, 90, 33, 53]
				            },
				            {
				                label: "Personal",
				                //fillColor: "rgba(126,126,126,0.5)",
				                fillColor: "rgba(0,0,0,0)",
				                strokeColor: "rgba(102,51,0,0.7)",
				                pointColor: "rgba(102,51,0,1)",
				                pointStrokeColor: "#fff",
				                pointHighlightFill: "#fff",
				                pointHighlightStroke: "rgba(102,51,0,1)",
                                data: vm.datas[2]
//				                data: [35, 40, 48, 13, 103, 50, 45, 91, 56, 87, 45, 63]
				            },
                            {
                                label: "Explotación",
                                //fillColor: "rgba(126,126,126,0.5)",
                                fillColor: "rgba(0,0,0,0)",
                                strokeColor: "rgba(224,112,0,0.7)",
                                pointColor: "rgba(224,112,0,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(224,112,0,1)",
                                data: vm.datas[3]
//                              data: [35, 40, 48, 13, 103, 50, 45, 91, 56, 87, 45, 63]
                            },
                            {
                                label: "Beneficio",
                                //fillColor: "rgba(126,126,126,0.5)",
                                fillColor: "rgba(0,0,0,0)",
                                strokeColor: "rgba(220,220,220,1)",
                                pointColor: "rgba(220,220,220,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(220,220,220,1)",
                                data: vm.datas[4]
//                              data: [35, 40, 48, 13, 103, 50, 45, 91, 56, 87, 45, 63]
                            },
				        ]
    				};

				});
		});


    /**
     * Options for Line chart
     * For PimPamBurger Sabateret
	*/
    vm.lineOptions_1 =    {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true,
    };

    /**
     * For PimPamBurger Bigai
    */
    /*
    this.lineData_2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        datasets: [
            {
                label: "Example dataset",
               // fillColor: "rgba(220,220,220,0.5)",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40, 69, 59, 43, 80, 64]
            },
            {
                label: "Example dataset",
                //fillColor: "rgba(26,179,148,0.5)",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90, 77, 26, 90, 33, 53]
            },
            {
                label: "Example dataset",
                //fillColor: "rgba(126,126,126,0.5)",
                fillColor: "rgba(0,0,0,0)",
                strokeColor: "rgba(126,126,126,0.7)",
                pointColor: "rgba(126,126,126,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [35, 40, 48, 13, 103, 50, 45, 91, 56, 87, 45, 63]
            }
        ]
    };

    /**
     * Options for Line chart
     * For PimPamBurger Bigai
    
    this.lineOptions_2 = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true,
    };

	*/

vm.upMonth = function () {
    console.log("upMonth");

    if (!vm.fecha){
     vm.fecha = fechaFromLabels(vm.labels[11]);
    }
    $state.go("main/month",{month : moveMes(vm.fecha, true)});
}

vm.downMonth = function () {
    console.log("downMonth");

    if (!vm.fecha){
     vm.fecha = fechaFromLabels(vm.labels[11]);
    }
    $state.go("main/month",{month : moveMes(vm.fecha, true)});

    $state.go("main/month",{month : moveMes(vm.fecha, false)});

//    return(moveMes(vm.fecha, false));
}

moveMes = function (fecha, up){

    var year = parseInt(fecha.substring(0,4));
    var month = parseInt(fecha.substring(4,6)) - 1;
    fecha = new Date (year, month, "01");
    
    if (up){  // up one month
        fecha.setMonth(fecha.getMonth() + 1);
    }else{  // down one month
        fecha.setMonth(fecha.getMonth() - 1);
    }

    year = fecha.getFullYear()
    month = fecha.getMonth() + 1

    var s = "0" + month; // put zeros on the left


    return (fecha.getFullYear() + s.substr(s.length-2));

}

fechaFromLabels = function(fecha){

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








};

angular
    .module('mebsc')
    .controller('chartJsCtrl', chartJsCtrl)
