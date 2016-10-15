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

// da qui: pagina pricipale

// funzioni alessandro
function myfunction1(){
	"use strict";
    // variabili
    var val010t, val016t, val032t, valcict, valmott, valvett, valurgt, valprot, valrimt, valagrt, valquat;
    // recupera valore dal form e calcola gli importi
    val010t = ((document.getElementById("id010").value) * (10.20 + 1.78)).toFixed(2);
    val016t = ((document.getElementById("id016").value) * (16 + 1.78)).toFixed(2);
    val032t = ((document.getElementById("id032").value) * (32 + 1.78)).toFixed(2);
    valcict = ((document.getElementById("idcic").value) * (13.58 + 1.78)).toFixed(2);
    valmott = ((document.getElementById("idmot").value) * (22.26 + 1.78)).toFixed(2);
    valvett = ((document.getElementById("idvet").value) * (41.78 + 1.78)).toFixed(2);
    valurgt = ((document.getElementById("idurg").value) * (5.10 + 1.78)).toFixed(2);
    valprot = ((document.getElementById("idpro").value) * (18.37 + 1.78)).toFixed(2);
    valrimt = ((document.getElementById("idrim").value) * (24.74 + 1.78)).toFixed(2);
    valagrt = ((document.getElementById("idagr").value) * (19.32 + 1.78)).toFixed(2);
    valquat = ((document.getElementById("idqua").value) * (41.37 + 1.78)).toFixed(2);

    // scrivi gli importi nel form
    if (val010t != 0)   document.getElementById("id010t").value = val010t;
    if (val016t != 0)   document.getElementById("id016t").value = val016t;    
    if (val032t != 0)   document.getElementById("id032t").value = val032t;    
    if (valcict != 0)   document.getElementById("idcict").value = valcict;    
    if (valmott != 0)   document.getElementById("idmott").value = valmott;    
    if (valvett != 0)   document.getElementById("idvett").value = valvett;    
    if (valurgt != 0)   document.getElementById("idurgt").value = valurgt;
    if (valprot != 0)   document.getElementById("idprot").value = valurgt;
    if (valrimt != 0)   document.getElementById("idrimt").value = valurgt;
    if (valagrt != 0)   document.getElementById("idagrt").value = valurgt;
    if (valquat != 0)   document.getElementById("idquat").value = valurgt;

    // calcola il totale e scrivilo nel form
    var valtot = parseFloat(val010t) + parseFloat(val016t) + parseFloat(val032t) + parseFloat(valcict) 
                    + parseFloat(valmott) + parseFloat(valvett) + parseFloat(valurgt)
                    + parseFloat(valprot) + parseFloat(valrimt) + parseFloat(valagrt) + parseFloat(valquat);
    document.getElementById("idtot").value = valtot.toFixed(2);
}

function myfunction2(){
	"use strict";
    // reset valori e totali
	document.getElementById("id010").value = "";
	document.getElementById("id016").value = "";
	document.getElementById("id032").value = "";
	document.getElementById("idcic").value = "";
	document.getElementById("idmot").value = "";
	document.getElementById("idvet").value = "";
	document.getElementById("idurg").value = "";
    document.getElementById("id010t").value = "";
    document.getElementById("id016t").value = "";    
    document.getElementById("id032t").value = "";    
    document.getElementById("idcict").value = "";    
    document.getElementById("idmott").value = "";    
    document.getElementById("idvett").value = "";    
    document.getElementById("idurgt").value = "";
    document.getElementById("idprot").value = "";
    document.getElementById("idrimt").value = "";
    document.getElementById("idagrt").value = "";
    document.getElementById("idquat").value = "";

    // reset totale
    document.getElementById("idtot").value = "";
    // reset resto
	document.getElementById('idcont').value ="";
    document.getElementById("idrest").value = "";
}

function myfunction3(){
	"use strict";
    // per sicurezza, ricalcola il totale
    myfunction1();
    // calcola il resto
    var valcont, valrest, valtot;
	valcont = document.getElementById('idcont').value;
    valtot = document.getElementById("idtot").value;
    valrest = parseFloat(valcont) - parseFloat(valtot);
    document.getElementById("idrest").value = valrest.toFixed(2);
}


// da qui: pagina contanti
function myfunctionc4(){
	// "use strict";
    // // variabili
    // var valc05t, valc10t, valc20t, valc50t, valc100t, valc200t, valc500t;
    // // recupera valore dal form e calcola gli importi
    // valc05t = ((document.getElementById("idc05").value) * (5)).toFixed(2);
    // valc10t = ((document.getElementById("idc10").value) * (10)).toFixed(2);
    // valc20t = ((document.getElementById("idc20").value) * (20)).toFixed(2);
    // valc50t = ((document.getElementById("idc50").value) * (50)).toFixed(2);
    // valc100t = ((document.getElementById("idc100").value) * (100)).toFixed(2);
    // valc200t = ((document.getElementById("idc200").value) * (200)).toFixed(2);
    // valc500t = ((document.getElementById("idc500").value) * (500)).toFixed(2);

    // // scrivi gli importi nel form
    // if (valc05t != 0)  document.getElementById("idc05t").value = valc05t;
    // if (valc10t != 0)  document.getElementById("idc10t").value = valc10t;    
    // if (valc20t != 0)  document.getElementById("idc20t").value = valc20t;    
    // if (valc50t != 0)  document.getElementById("idc50t").value = valc50t;    
    // if (valc100t != 0) document.getElementById("idc100t").value = valc100t;    
    // if (valc200t != 0) document.getElementById("idc200t").value = valc200t;    
    // if (valc500t != 0) document.getElementById("idc500t").value = valc500t;

    // // calcola il totale e scrivilo nel form
    // var valtot = parseFloat(valc05t) + parseFloat(valc10t) + parseFloat(valc20t) + parseFloat(valc50t) 
    //                 + parseFloat(valc100t) + parseFloat(valc200t) + parseFloat(valc500t);
    // document.getElementById("idtotcont").value = valtot.toFixed(2);

    // var ul = document.getElementById("listaContanti");
    // var itemsInput = ul.getElementsByClassName("item-input");
    // var itemsInputValue = itemsInput.getElementsByTagName("input");
    // var itemsOutput = ul.getElementsByClassName("item-input disabled");   
    // var itemsOutupValue = itemsOutput.getElementsByTagName("input");  

// var ul = document.getElementById("listaContanti");
// var items = ul.getElementsByTagName("input");

var ul = document.getElementById("listaContanti");
var items = ul.getElementsByTagName("input");
var valuestomultiply = [5, 6, 10, 11, 20, 21, 50, 51, 100, 101, 200, 201, 500, 501];

var totalecalcolatodeisoldi = 0;

    for (var i = 0; i < 14; i = i +2) {


        alert("partiamo");
        var a = items[i].value;
        // if (a === "") return;
        // else {
            
        
        alert("valore recuperato" + a);

        var c = valuestomultiply[i],value;

        alert("valore da moltiplicare" + c);

        var b = a * c;
        alert("valore calcolato" + b);

        items[i+1].value = b;

        var z = parseFloat(b);

        totalecalcolatodeisoldi += z;
        alert(totalecalcolatodeisoldi);
        // }

    }

        document.getElementById("idtotcont").value = totalecalcolatodeisoldi.toFixed(2);




}

function myfunctionc5(){
	"use strict";
    // // reset valori e totali
	// document.getElementById("idc05").value = "";
	// document.getElementById("idc10").value = "";
	// document.getElementById("idc20").value = "";
	// document.getElementById("idc50").value = "";
	// document.getElementById("idc100").value = "";
	// document.getElementById("idc200").value = "";
	// document.getElementById("idc500").value = "";
    // document.getElementById("idc05t").value = "";
    // document.getElementById("idc10t").value = "";    
    // document.getElementById("idc20t").value = "";    
    // document.getElementById("idc50t").value = "";    
    // document.getElementById("idc100t").value = "";    
    // document.getElementById("idc200t").value = "";    
    // document.getElementById("idc500t").value = "";

    // // reset totale
    // document.getElementById("idtotcont").value = "";

    var ul = document.getElementById("listaContanti");
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = "";
    }
}

function myfunction_a1(){

    var valAssegno1, valAssegno2, valTotaleAssegni;

    valAssegno1 = document.getElementById("assegno1").value; 
    valAssegno2 = document.getElementById("assegno2").value;

    valTotaleAssegni = parseFloat(valAssegno1) + parseFloat(valAssegno2);

    document.getElementById("assegnoTotale").value = valTotaleAssegni.toFixed(2);
}

function myfunction_a2(){
    // // reset valori e totali
	// document.getElementById("assegno1").value = "";
	// document.getElementById("assegno2").value = "";
    // // reset totale
    // document.getElementById("assegnoTotale").value = "";


var ul = document.getElementById("listaAssegni");
var items = ul.getElementsByTagName("input");

    for (var i = 0; i < items.length; ++i) {
    //  for (var i = 0; i < 2; ++i) {
  
  alert("via");
        // do something with items[i], which is a <li> element

        //alert(items[i]);
        var a = items[i].value;
        alert(a);

        items[i].value = "";

       
        // items[i].value = "";
        
        //alert(items[i].value);
        

        // items[i].value="";
    
    // la chiave è prendere elemento giusto, nellesempio cera li ma io avevo bisogno di input
    // probabilmente adattabile agli altri casi




    }
}