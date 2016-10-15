somesnippets


document.getElementById("MyElement").className = "MyClass";

document.getElementById("MyElement").className += " MyClass";

document.getElementById("MyElement").className =
   document.getElementById("MyElement").className.replace
      ( /(?:^|\s)MyClass(?!\S)/g , '' )
/* code wrapped for readability - above is all one statement */

// from http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript

// also:
document.getElementById('id').classList.add('class');
document.getElementById('id').classList.remove('class');
//And to toggle a class (remove if exists else add it):
document.getElementById('id').classList.toggle('class');




var elms = document.getElementsByClassName('vertical-tabs-active-tab')
for (var i = 0; i < elms.length; i++) {
  if (elms[i].getAttribute("value") === "account"){
   elms[i].setAttribute("value", "yolo");
  }
}


function testerFunction() {
    changeColumnColor('col1','blue');
}
function changeColumnColor(column,color) {
    var cols = document.getElementsByClassName(column);
    for(i=0; i<cols.length; i++) {
      cols[i].style.backgroundColor = color;
    }
}

// from http://stackoverflow.com/questions/19353331/getting-or-changing-css-class-property-with-javascript-using-dom-style



var myElement = document.querySelector("#superman");
myElement.style.backgroundColor = "#D93600";

// To affect many elements, you can do something as follows:
var myElements = document.querySelectorAll(".bar");
 
for (var i = 0; i < myElements.length; i++) {
    myElements[i].style.opacity = 0;
}

// from https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm


//checkboxes:
// http://stackoverflow.com/questions/5539139/change-get-check-state-of-checkbox
// http://stackoverflow.com/questions/17564231/how-to-detect-the-change-of-checkbox-state
