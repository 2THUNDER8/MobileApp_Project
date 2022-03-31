//javascript code for blog app

const SERVER_URL = "http://140.184.230.209:5500";

let z = document.getElementById("CH1");


var isVis = true;

//hides and shows keyboard and text area elements

function vis() {
    if (isVis) {
        // document.getElementById("CH2").style.display = "none";
        // document.getElementById("CH3").style.display = "none";
        // document.getElementById("keyB").style.display = "block";
        document.getElementById("inpBlock").style.visibility = "Visible";
        document.getElementById("d2").style.display = "none";
        document.getElementById("b1").style.visibility = "visible";
        document.getElementById("b2").style.visibility = "visible";

        isVis = false;
    }
    else {
        // document.getElementById("CH2").style.display = "Block";
        // document.getElementById("CH3").style.display = "Block";
        // document.getElementById("keyB").style.display = "none";
        document.getElementById("inpBlock").style.visibility = "Hidden";
        document.getElementById("d2").style.display = "Block";
        document.getElementById("b2").style.visibility = "Hidden";
        document.getElementById("b1").style.visibility = "hidden";

        isVis = true;
    }
}

let beenPressed = false;

//funtion used to set value to true on HTML shift element
function toTrue() {
    beenPressed = true;
}

//allows typing in textarea
function addChar(selection) {
    // Get the value from the id'ed field
    var currChars = $("#w3review").val();

    if (selection === "bksp") {
        // Set the id'ed field to a shortened string
        // @ts-ignore
        $("#w3review").val(currChars.substring(0, currChars.length - 1));
    } else {
        if (beenPressed) {
            $("#w3review").val(currChars.concat(selection.toUpperCase()));
            beenPressed = false;
        } else {
            $("#w3review").val(currChars.concat(selection));
        }
    }
}

//saves value to console
function enter() {
    // var currChars = $("#w3review").val();


    // $("#w3review").val(currChars.concat("                                                                                                      "));

}


//removes all text in text area
function cancel() {
    $("#w3review").val("");
    vis();
    window.location.reload();

}
// var x = $("#w3review").val();
// function save() {

//     localStorage.setItem("x", JSON.stringify(x));
// }
// document.addEventListener("click", function () {
//     x.innerHTML = JSON.parse(localStorage.getItem("x"));
// });

function save() {
  console.log("hello")
    
    let textarea = $("#w3review").val();
    //let data = input1.val() || "";


    $.post(SERVER_URL + "/w3review", { name: textarea });

    vis();
    // window.location.reload();

}

function saveWordBank() {
  console.log("hello")
  let wordbank_textarea = $("#w").val();
  $.post(SERVER_URL + "/w", { name: wordbank_textarea });

}

function showWar() {
  
    document.getElementById("customAlert").style.display = "block";

}
function showWar1() {
  
    document.getElementById("customAlert1").style.display = "block";

}

function showWar2() {
    document.getElementById("customAlert2").style.display = "block";

}
function hidealert() {

    document.getElementById("customAlert").style.display = "none";
}
function hideWar1() {
  
    hidealert();
    document.getElementById("customAlert1").style.display = "none";
}
function hideWar2() {
    hidealert();
    document.getElementById("customAlert2").style.display = "none";
}