//Andrew Ali A00452272

// App that saves data on a local server using express

// storing into local storage


//the three functions save data from input fields to the local server
function saveData1() {
  let input1 = $("#text1");
  let data = input1.val() || "";

  

  $.post("/input1", { data: data });
}

function saveData2() {
  let input2 = $("#text2");
  let data = input2.val() || "";
  

  $.post("/input2", { data: data });
}

function saveData3() {
  let input3 = $("#text3");


  $.post("/input3", { data: input3.val() });
}

//function loads data from html tags
function load_data() {
  //inputs
  let input_1 = $("#text1");
  let input_2 = $("#text2");
  let input_3 = $("#text3");

  $.get("/data", function (data) {
    let input_1_text = data[0];
    let input_2_text = data[1];
    let input_3_text = data[2];

    //validate input value
    if (input_1 && input_1_text) {
      input_1.val(input_1_text);
    }
    if (input_2 && input_2_text) {
      input_2.val(input_2_text);
    }
    if (input_3 && input_3_text) {
      input_3.val(input_3_text);
    }
  });
}

//executes on load
window.addEventListener("DOMContentLoaded", (event) => {
  load_data();
});
