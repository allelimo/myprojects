// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

// funzioni alessandro
function myfunction1(){
	"use strict";
    // primo metodo, poi abbreviato
    // var val010;
	// val010 = document.getElementById('id010').value;
    // val010t = ((10.20 + 1.78) * val010t).toFixed(2);

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