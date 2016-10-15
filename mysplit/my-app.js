// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

function myfunctionc1(){
	"use strict";
    // primo metodo, poi abbreviato
    // var val010;
	// val010 = document.getElementById('id010').value;
    // val010t = ((10.20 + 1.78) * val010t).toFixed(2);

    // variabili
    var valc05t, valc10t, valc20t, valc50t, valc100t, valc200t, valc500t;
    // recupera valore dal form e calcola gli importi
    valc05t = ((document.getElementById("idc05").value) * (5)).toFixed(2);
    valc10t = ((document.getElementById("idc10").value) * (10)).toFixed(2);
    valc20t = ((document.getElementById("idc20").value) * (20)).toFixed(2);
    valc50t = ((document.getElementById("idc50").value) * (50)).toFixed(2);
    valc100t = ((document.getElementById("idc100").value) * (100)).toFixed(2);
    valc200t = ((document.getElementById("idc200").value) * (200)).toFixed(2);
    valc500t = ((document.getElementById("idc500").value) * (500)).toFixed(2);


    // scrivi gli importi nel form
    if (valc05t != 0)  document.getElementById("idc05t").value = valc05t;
    if (valc10t != 0)  document.getElementById("idc10t").value = valc10t;    
    if (valc20t != 0)  document.getElementById("idc20t").value = valc20t;    
    if (valc50t != 0)  document.getElementById("idc50t").value = valc50t;    
    if (valc100t != 0) document.getElementById("idc100t").value = valc100t;    
    if (valc200t != 0) document.getElementById("idc200t").value = valc200t;    
    if (valc500t != 0) document.getElementById("idc500t").value = valc500t;


    // calcola il totale e scrivilo nel form
    var valtot = parseFloat(valc05t) + parseFloat(valc10t) + parseFloat(valc20t) + parseFloat(valc50t) 
                    + parseFloat(valc100t) + parseFloat(valc200t) + parseFloat(valc500t);
    document.getElementById("idtotcont").value = valtot.toFixed(2);
}

function myfunctionc2(){
	"use strict";
    // reset valori e totali
	document.getElementById("idc05").value = "";
	document.getElementById("idc10").value = "";
	document.getElementById("idc20").value = "";
	document.getElementById("idc50").value = "";
	document.getElementById("idc100").value = "";
	document.getElementById("idc200").value = "";
	document.getElementById("idc500").value = "";
    document.getElementById("idc05t").value = "";
    document.getElementById("idc10t").value = "";    
    document.getElementById("idc20t").value = "";    
    document.getElementById("idc50t").value = "";    
    document.getElementById("idc100t").value = "";    
    document.getElementById("idc200t").value = "";    
    document.getElementById("idc500t").value = "";

    // reset totale
    document.getElementById("idtotcont").value = "";
}