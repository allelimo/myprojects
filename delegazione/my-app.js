// Initialize your app
var myApp = new Framework7({
    init: false, //Disable App's automatic initialization

    smartSelectBackOnSelect: true,
    
    precompileTemplates: true,
    // Enabled pages rendering using Template7
    template7Pages: true,
    // Specify Template7 data for pages
    template7Data: {
        // Will be applied for page with "projects.html" url
        'url:generic.html': {
        //     provaelenco: [
        //         { psg: "mi", prv: "milano" },{ psg: "bo", prv: "bologna"},{ psg: "bg", prv: "bergamo" },{ psg: "sa", prv: "salerno" },{ psg: "me", prv: "messina" },
        //     ],
        // },
            props: {
                ag: "agrigento",
                al: "alessandria",
                an: "ancona",
                ao: "aosta",
                ap: "ascoli piceno",
                aq: "aquila",
                ar: "arezzo",
                at: "asti",
                av: "avellino",
                ba: "bari",
                bg: "bergamo",
                bi: "biella",
                bl: "belluno",
                bn: "benevento",
                bo: "bologna",
                br: "brindisi",
                bs: "brescia",
                bt: "barletta andria trani",
                bz: "bolzano",
                ca: "cagliari",
                cb: "campobasso",
                ce: "caserta",
                ch: "chieti",
                ci: "carbonia iglesias",
                cl: "caltanissetta",
                cn: "cuneo",
                co: "como",
                cr: "cremona",
                cs: "cosenza",
                ct: "catania",
                cz: "catanzaro",
                en: "enna",
                fc: "forli cesena",
                fe: "ferrara",
                fg: "foggia",
                fi: "firenze",
                fm: "fermo",
                fr: "frosinone",
                ge: "genova",
                go: "gorizia",
                gr: "grosseto",
                im: "imperia",
                is: "isernia",
                kr: "crotone",
                lc: "lecco",
                le: "lecce",
                li: "livorno",
                lo: "lodi",
                lt: "latina",
                lu: "lucca",
                mb: "monza brianza",
                mc: "macerata",
                me: "messina",
                mi: "milano",
                mn: "mantova",
                mo: "modena",
                ms: "massa carrara",
                mt: "matera",
                na: "napoli",
                no: "novara",
                nu: "nuoro",
                og: "ogliastra",
                or: "oristano",
                ot: "olbia tempio",
                pa: "palermo",
                pc: "piacenza",
                pd: "padova",
                pe: "pescara",
                pg: "perugia",
                pi: "pisa",
                pn: "pordenone",
                po: "prato",
                pr: "parma",
                pt: "pistoia",
                pu: "pesaro urbino",
                pv: "pavia",
                pz: "potenza",
                ra: "ravenna",
                rc: "reggio calabria",
                re: "reggio emilia",
                rg: "ragusa",
                ri: "rieti",
                rm: "roma",
                rn: "rimini",
                ro: "rovigo",
                sa: "salerno",
                si: "siena",
                so: "sondrio",
                sp: "la spezia",
                sr: "siracusa",
                ss: "sassari",
                sv: "savona",
                ta: "taranto",
                te: "teramo",
                tn: "trento",
                to: "torino",
                tp: "trapani",
                tr: "terni",
                ts: "trieste",
                tv: "treviso",
                ud: "udine",
                va: "varese",
                vb: "verbania",
                vc: "vercelli",
                ve: "venezia",
                vi: "vicenza",
                vr: "verona",
                vs: "medio campidano",
                vt: "viterbo",
                vv: "vibo valenzia",            
            }
        }
    }      
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

myApp.onPageInit("impostazioni", function (page) {

    fListDecimali("listaImpostazioniPra");
    fListDecimali("listaImpostazioniUmc");
    fListDecimali("listaImpostazioniAci");
    fListDecimali("listaImpostazioniPoste");
    // var ul = document.getElementById("listaImpostazioniPra");
    // var items = ul.getElementsByTagName("input");
    // for (var i = 0; i < items.length; i++) {
    //     var numero = items[i].value;
    //     numero = parseFloat(numero).toFixed(2);
    //     items[i].value = numero;
    // }
});

function fListDecimali(nomelista) {

    var ul = document.getElementById(nomelista);
    var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        var numero = items[i].value;
        numero = parseFloat(numero).toFixed(2);
        items[i].value = numero;
    }
}








function testthis(element){
    // alert("testthis");
    // var pippo = document.getElementById("pradir").value;
    // pippo = pippo.toFixed(2);
    // document.getElementById("pradir").value = pippo;

}


// funzioni generiche

// funzione per resettare tutti gli elenchi
// usare con nome della lista come "string"
function fListReset(nomelista){
var ul = document.getElementById(nomelista);
var items = ul.getElementsByTagName("input");
    for (var i = 0; i < items.length; i++) {
        items[i].value = null;
    }
}

// funzione per calcolare il totale dei valori di una lista
function fGenericTotale(nomelista, idtotale){
var ul = document.getElementById(nomelista);
var items = ul.getElementsByTagName("input");
var totaleValoreAssegni = 0;
    for (var i = 0; i < items.length -1; i++) { 
        var a = parseFloat(items[i].value);
        if (isNaN(a) === true){
            a = 0;
        }
     totaleValoreAssegni += a;
    }
    document.getElementById(idtotale).value = totaleValoreAssegni.toFixed(2);
}

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
    fListReset("listaBollettini");
    fListReset("listaBollettiniTot");
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
    fListReset("listaContanti");
    myApp.formDeleteData("form_contanti");
}

// pagina assegni 1 e 2
function fAssegniTotale(){
    fGenericTotale("listaAssegni", "assegnoTotale");
}

function fAssegniReset(){
    fListReset("listaAssegni");
    myApp.formDeleteData("form_assegni1");
}

function fAssegniTotale2(){
    fGenericTotale("listaAssegni2", "assegnoTotale2");
}

function fAssegniReset2(){
    fListReset("listaAssegni2");
    myApp.formDeleteData("form_assegni2");
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

// var iptbase = 150.81;
// var iptcoeff = 3.51;
// var iptmilano = 1.3;

// var kw = 101;
// var iptlorda = 0;
// var iptarrot = 0;

// if(kw < 54) {

//     iptlorda = iptbase * iptmilano;
//     iptlorda = Math.floor(iptlorda);
//     iptarrot = iptlorda.toFixed(2);
// } else {

// iptlorda = kw * iptcoeff * iptmilano;
// alert(iptlorda);
// iptlorda = Math.ceil(iptlorda);
// iptarrot = iptlorda.toFixed(2);

// }
// alert(iptlorda);
// alert(iptarrot);

// alert(round5(iptarrot));

// test array province
var province = ["mi", "bo", "to", "ve"];
alert(province.indexOf("bo"));
//alert(province.indexOf("va"));



//var abcdef = $('provincia').val();

var test = $$("select#provincia").val();
    if (test.length){
//		 myApp.alert("select exists");
//         myApp.alert(test);
         alert(test);
    }

//alert("value " + abcdef);


alert(province.indexOf(test));

var test2 = $$("select#tipoveicolo").val();
alert(test2);


}

function round5(x){
    return Math.ceil(x/5)*5;
}
