document.getElementById("btn").addEventListener("click" , evented_func);

function get_input_func() {
    var Height = document.getElementById("Height").value / 100;
    var Weight = document.getElementById("Weight").value;
    var inputs = {"Height" : Height , "Weight":Weight};
    return inputs;
}

function show_func(BMI) {
    document.getElementById("res").textContent = BMI;
}

function claculate_func(vals) {
         var Height = vals["Height"];
         var Weight = vals["Weight"];
         var Height_2 = Height * Height;
         var result = Weight / Height_2;
         return result;
}


function evented_func() {
    var inputs = get_input_func();
    console.log(inputs);
    var BMI = claculate_func(inputs);
    show_func(Math.floor(BMI));
}

