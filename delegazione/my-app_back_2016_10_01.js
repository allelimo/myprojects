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
    if (val010t !== 0)   document.getElementById("id010t").value = val010t;
    if (val016t !== 0)   document.getElementById("id016t").value = val016t;    
    if (val032t !== 0)   document.getElementById("id032t").value = val032t;    
    if (valcict !== 0)   document.getElementById("idcict").value = valcict;    
    if (valmott !== 0)   document.getElementById("idmott").value = valmott;    
    if (valvett !== 0)   document.getElementById("idvett").value = valvett;    
    if (valurgt !== 0)   document.getElementById("idurgt").value = valurgt;
    if (valprot !== 0)   document.getElementById("idprot").value = valurgt;
    if (valrimt !== 0)   document.getElementById("idrimt").value = valurgt;
    if (valagrt !== 0)   document.getElementById("idagrt").value = valurgt;
    if (valquat !== 0)   document.getElementById("idquat").value = valurgt;

    // calcola il totale e scrivilo nel form
    var valtot = parseFloat(val010t) + parseFloat(val016t) + parseFloat(val032t) + parseFloat(valcict) +
                    parseFloat(valmott) + parseFloat(valvett) + parseFloat(valurgt) + 
                    parseFloat(valprot) + parseFloat(valrimt) + parseFloat(valagrt) + parseFloat(valquat);
    document.getElementById("idtot").value = valtot.toFixed(2);
}

function myfunction2(){
	"use strict";
    var ul = document.getElementById("listaBollettini");
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
    var ul2 = document.getElementById("listaBollettiniTot");
    var items2 = ul2.getElementsByTagName("input");
    for (var j = 0; j < items2.length; j++) {
        items2[j].value = null;
    }
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
	"use strict";
    var ul = document.getElementById("listaContanti");                                      // necessario dare un id alla lista
    var items = ul.getElementsByTagName("input");                                           // recuperare i valori di input
    var valuestomultiply = [5, 0, 10, 0, 20, 0, 50, 0, 100, 0, 200, 0, 500, 0];    // orribile hack, ma mi serve per recuperare gli elementi pari
    var totalecalcolatodeisoldi = 0;

    for (var i = 0; i < 14; i = i + 2) {                                                     // anche qui, i < 14 per fermarsi prima di ultima riga
 
        // valore di input                                                                  // il codice per tutti gli elementi sarebbe
        var a = items[i].value;                                                             // i < items.length                  
        var b = valuestomultiply[i]; // array. non serve "value"
        var c = a * b;
        // calcola il totale
        var d = parseFloat(c);
        if (d !== null){
            items[i+1].value = d;
        } else {
            items[i+1].value = null;
        }
        totalecalcolatodeisoldi += d;
    }        
    // scrivi i totale sull'ultima riga'
    document.getElementById("idtotcont").value = totalecalcolatodeisoldi;
}

function myfunctionc5(){
	"use strict";
    var ul = document.getElementById("listaContanti");
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
}


// da qui: pagina assegni
function myfunction_a1(){

var ul = document.getElementById("listaAssegni");
var items = ul.getElementsByTagName("input");
var totaleValoreAssegni = 0;
    for (var i = 0; i < items.length; i++) {    // cambiare qui, valore solo epr test
        var a = parseFloat(items[i].value);
        if (isNaN(a) === true){
            a = 0;
        }
     totaleValoreAssegni += a;
    }
    document.getElementById("assegnoTotale").value = totaleValoreAssegni.toFixed(2);
}

function myfunction_a2(){

var ul = document.getElementById("listaAssegni");
var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
    // necessario per riscrivere i valori di default se la form salva i dati auotmaticamente
    myApp.formDeleteData("form_assegni");


    // la chiave è prendere elemento giusto, nellesempio cera li ma io avevo bisogno di input
    // probabilmente adattabile agli altri casi
}
