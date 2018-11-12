/* Window objects */

function alertdemo() {
    alert("Hello I am Alert");
}

function confirmdemo() {
    var v = confirm("Are u Sure?");
    if(v == true) {
        alert("ok");
    }
    else {
        alert("cancle");
    }
}

function promptdemo() {
    var p = prompt("Who You are");
    alert("I am"+" "+p);
}

function opendemo() {
    open("http://ssptechnosys.com/");
}

function settimeout() {
    setTimeout(
        function() {
            open("http://ssptechnosys.com/");
        },2000);
}

/*History Objects*/

function goForward() {
    history.forward();
}

function goBackward() {
    history.back();
}

function goGo() {
    history.go();
}

