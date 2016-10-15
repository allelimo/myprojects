// Initialize your app
var myApp = new Framework7({
      init: false //Disable App's automatica initialization
});

//Now we add our callback for initial page
myApp.onPageInit('index', function (page) {
    var storedData = myApp.formGetData('form_gen2');  // il form della seconda pagina
    if(storedData) {
        var cippa = JSON.stringify(storedData); // qui ci sono tutte le coppie nome/valore
        var lippa = JSON.parse(cippa);  
        dirittiPosta = parseFloat(lippa.gen2_1); // variabile globale
    }
});
 
//And now we initialize app
myApp.init();

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

// dichiarazione per tutto il file
"use strict";

// variabileglobale
window.dirittiPosta = 1.78;

// prima di aprire pagina gen1
myApp.onPageInit("gen1", function (page) {
    var storedData = myApp.formGetData('form_gen2');  // il form della seconda pagina
    if(storedData) {
        var cippa = JSON.stringify(storedData); // qui ci sono tutte le coppie nome/valore
        var lippa = JSON.parse(cippa);  
        var myglobal1 = lippa.gen2_1; 
        document.getElementById("id_gen1_1").value = myglobal1;
    }
});

// prima di aprire pagina gen2_1
myApp.onPageInit("gen2", function (page) {
    document.getElementById("id_gen2_1").className="item-input disabled";
    var chkBox = document.getElementById('check1');
    chkBox.checked = false;
});

// da qui: codice per le pagine
// pagina bollettini
function fBollettiniImporto(){
    var ul = document.getElementById("listaBollettini");    
    var items = ul.getElementsByTagName("input"); 
    var importi = [10.20, 0, 16, 0, 32, 0, 13.58, 0, 22.26, 0, 41.78, 0, 5.1, 0, 18.37, 0, 24.74, 0, 19.32, 0, 41.37, 0];
    //var dirittiPosta = 1.78;
    var totaleBollettini = 0;                  
    for (var i = 0; i < 22; i = i + 2) {
        var a = items[i].value;
        var b = importi[i];
        var c = a * (b + dirittiPosta);
        var d = parseFloat(c);
        if (d === 0) { 
            items[i+1].value = null;
            } else if (d !== null) {
            items[i+1].value = d.toFixed(2);
        }
        totaleBollettini += d;
    }        
    // scrivi i totale sull'ultima riga'
    document.getElementById("idtot").value = totaleBollettini.toFixed(2);
}
function fBollettiniResto(){
    // per sicurezza, ricalcola il totale
    fBollettiniImporto();
    // calcola il resto
    var valcont, valrest, valtot;
	valcont = document.getElementById('idcont').value;
    if (valcont > 0) {
        valtot = document.getElementById("idtot").value;
        valrest = parseFloat(valcont) - parseFloat(valtot);
        document.getElementById("idrest").value = valrest.toFixed(2);
    }
}
function fBollettiniReset(){
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
    // delete stored data
    myApp.formDeleteData("form_bollettini");
    myApp.formDeleteData("form_bollettini_b");
}

// pagina contanti
function fContantiTotale(){
    var ul = document.getElementById("listaContanti");                                      // necessario dare un id alla lista
    var items = ul.getElementsByTagName("input");                                           // recuperare i valori di input
    var importi = [5, 0, 10, 0, 20, 0, 50, 0, 100, 0, 200, 0, 500, 0];    // orribile hack, ma mi serve per recuperare gli elementi pari
    var totaleContanti = 0;
    for (var i = 0; i < 14; i = i + 2) {                                                     // anche qui, i < 14 per fermarsi prima di ultima riga
        // valore di input                                                                  // il codice per tutti gli elementi sarebbe
        var a = items[i].value;                                                             // i < items.length                  
        var b = importi[i]; // array. non serve "value"
        var c = a * b;
        // calcola il totale
        var d = parseFloat(c);
        if (d === 0) { 
            items[i+1].value = null;
            } else if (d !== null) {
            items[i+1].value = d;
        }
        totaleContanti += d;
    }        
    // scrivi i totale sull'ultima riga'
    document.getElementById("idtotcont").value = totaleContanti;
}

function fContantiReset(){
    var ul = document.getElementById("listaContanti");
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
    myApp.formDeleteData("form_contanti");
}

// da qui: pagina assegni
function fAssegniTotale(){
var ul = document.getElementById("listaAssegni");
var items = ul.getElementsByTagName("input");
var totaleValoreAssegni = 0;
    for (var i = 0; i < items.length -1; i++) {    // cambiare qui, valore solo epr test
        var a = parseFloat(items[i].value);
        if (isNaN(a) === true){
            a = 0;
        }
     totaleValoreAssegni += a;
    }
    document.getElementById("assegnoTotale").value = totaleValoreAssegni.toFixed(2);
}

function fAssegniReset(){
var ul = document.getElementById("listaAssegni");
var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
    // necessario per riscrivere i valori di default se la form salva i dati auotmaticamente
    myApp.formDeleteData("form_assegni1");

// fGenericReset("listaAssegni");

}

function genericreset(nomelista){
var ul = document.getElementById(nomelista);
var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
}

function testreset(){
    genericreset("listaAssegni");
    myApp.formDeleteData("form_assegni1");
}


// pagina gen1
function test01() {
    document.getElementById("id_gen1_1").className="item-input disabled";
}

// funziona me è troppo complicata, quella sotto è parecchio più semplice :)
function fCheckMyCLick() {
    // controllare check
    // se no, disabled - se si, enabled
    var chkBox = document.getElementById('check1');
    if (chkBox.checked) {
        document.getElementById("id_gen2_1").className="item-input";
    }
    else {
        document.getElementById("id_gen2_1").className="item-input disabled";
    }
}

// funziona coe toggle. semplice ed efficace
function fCheckMyClick2() {
    document.getElementById("id_gen2_1").classList.toggle("disabled");
}


// usata in pagina generic come test
function qualcosa(){
    alert("qualcosa");
}