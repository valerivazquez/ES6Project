
var indicatormCtrl = function (kpidatosmFactory,$stateParams){

    var vm = this;
    /**
     * Data for KPI's
     * 
     */

     console.log("$stateParams", $stateParams.month);



     vm.kpi = []

     kpidatosmFactory.gettingKpi($stateParams.month || "")
        .success(function (kpi) {
//                    data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
            

            vm.kpi = kpi;

            for (var i = 0; i < vm.kpi.length; i++) {
                vm.kpi[i].LineChart = {
                    data: kpi[i].result,
                    options: {
                        fill: '#1ab394',
                        stroke: '#169c81',
                        width: 64
                        }
                };
                calculateFlagIndicator(vm.kpi[i]);
            }

        });


};

var calculateFlagIndicator = function (kpi) {
    
    //var diference = kpi.result - kpi.reference

    console.log("===========================")
    console.log("CalculateFlagIndicator:", kpi.title, kpi.alert_w, kpi.alert_f, kpi.alert_comp)
    console.log("Valor:", kpi.result[11])

    switch(kpi.unit) {
        case '%':    // Inidicate that the alert get by %,
                    // then de alert_f & alert_w are absolute values respect result[11]
            switch(kpi.alert_comp) {
                case '>':  // the alert its getting by above
                    if (kpi.result[11] >= kpi.alert_f ){
                        kpi.flag = '3'
                    }
                    else{
                        if (kpi.result[11] >= kpi.alert_w ){
                        kpi.flag = '2'
                        }
                        else{
                            kpi.flag = '1'
                        }
                    }
                break;

                case '<':  // the alert its getting by down
                    if (kpi.result[11] <= kpi.alert_f ){
                        kpi.flag = '3'
                    }
                    else{
                        if (kpi.result[11] <= kpi.alert_w ){
                        kpi.flag = '2'
                        }
                        else{
                            kpi.flag = '1'
                        }
                    }
                break;

                default:
                
            }
            break

        case '€':    // Inidicate that the alert get by €,
                    // then de alert_f & alert_w are %values respect result[11]
                    
            var dif_porcent = ((kpi.result[11] - kpi.reference[11]) / kpi.reference[11]) * 100
            console.log("dif_porcent", dif_porcent)
            switch(kpi.alert_comp) {
                case '>':  // the alert its getting by above
                    if (dif_porcent >= kpi.alert_f ){
                        kpi.flag = '3'
                    }
                    else{
                        if (dif_porcent >= kpi.alert_w ){
                        kpi.flag = '2'
                        }
                        else{
                            kpi.flag = '1'
                        }
                    }
                break;

                case '<':  // the alert its getting by down
                    if (dif_porcent <= kpi.alert_f ){
                        kpi.flag = '3'
                    }
                    else{
                        if (dif_porcent <= kpi.alert_w ){
                        kpi.flag = '2'
                        }
                        else{
                            kpi.flag = '1'
                        }
                    }
                break;

                default:
                
            }
    }


    console.log("flag:", kpi.flag)

}





angular
    .module('mebsc')
    .controller('indicatormCtrl', indicatormCtrl)
