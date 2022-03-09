const BITCOIN_FACTOR = 46515.16;

function setup() {
  let amountInput = document.getElementById("amount");

  amountInput.value = 0;

  amountInput.addEventListener("blur", validateAmount);

  $("#btnradio1").on("click", function () {
    setUnits("<i class='bi-currency-bitcoin myFont'></i>");
  });

  $("#btnradio2").on("click", function () {
    setUnits("<i class='bi-currency-dollar myFont'></i>");
  });
}

function validateAmount() {
  let amountInput = document.getElementById("amount");
  if (amountInput.value < 0) {
    alert("The amount must be positive.");
    amountInput.value = 0;
  }
}

function setUnits(unit) {
  let label = document.getElementById("inputLabel");
  label.innerHTML = unit;
}

function convert() {
  var bitcoinButton = document.getElementById("btnradio2");
  var amount = document.getElementById("amount");

  if (bitcoinButton.checked) {
    convertToBitcoin(amount.value);
  } else {
    convertToCAD(amount.value);
  }
}

function convertToBitcoin(amtCAD) {
  var amtBitcoin = amtCAD * (1 / BITCOIN_FACTOR);
  document.getElementById("answer").innerHTML =
    "<i class='bi-currency-dollar'></i>" +
    amtCAD +
    " = " +
    "<i class='bi-currency-bitcoin'></i>" +
    amtBitcoin.toFixed(2);
}

function convertToCAD(amtBitcoin) {
  var amtCAD = amtBitcoin * BITCOIN_FACTOR;
  document.getElementById("answer").innerHTML =
    "<i class='bi-currency-bitcoin'></i>" +
    amtBitcoin +
    " = " +
    "<i class='bi-currency-dollar'></i>" +
    amtCAD.toFixed(2);
}
