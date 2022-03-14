let z = document.getElementById("CH1");

var isVis = true;

function vis() {
    if (isVis) {
        document.getElementById("CH2").style.display = "none";
        document.getElementById("CH3").style.display = "none";
        isVis = false;
    }
    else {
        document.getElementById("CH2").style.display = "block";
        document.getElementById("CH3").style.display = "block";
        isVis = true;
    }
}