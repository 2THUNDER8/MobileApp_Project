let z = document.getElementById("CH1");

var isVis = true;

function vis() {
    if (isVis) {
        document.getElementById("CH2").style.visibility = "hidden";
        document.getElementById("CH3").style.visibility = "hidden";
        document.getElementById("keyB").style.visibility = "hidden";
        document.getElementById("inpBlock").style.visibility = "hidden";
        isVis = false;
    }
    else {
        document.getElementById("CH2").style.visibility = "visible";
        document.getElementById("CH3").style.visibility = "visible";
        document.getElementById("keyB").style.visibility = "visible";
        document.getElementById("inpBlock").style.visibility = "visible";
        isVis = true;
    }
}