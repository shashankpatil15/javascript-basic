/*Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
After first letter we can use digits (0 to 9), for example value1.
JavaScript variables are case sensitive, for example x and X are different variables.*/

var a=10;
var b=20;
var z=a+b;
console.log(z);
console.log(z+1);

/*local variable*/
function localdemo() {
    var x=10;
    console.log(x);
}
/*console.log(x);*/
/*end local variable*/

var p=10;
function globledmo() {
    console.log(p);
}
function globledmo1() {
    console.log(p+1);
}
localdemo();
globledmo();
globledmo1();

/* for Windows platform*/
var p=10;
function globledmo2() {
    alert(p);
}
function globledmo3() {
    alert(p+1);
}

/*by windows object*/

function globledmo4() {
    window.x = 10;
}
function globledmo5(){
    console.log(window.x);
}

