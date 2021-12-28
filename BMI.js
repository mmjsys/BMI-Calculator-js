function get_input_func() {
    var Height = $("#Height").val() / 100;
    var Weight = $("#Weight").val();
    var inputs = {"Height" : Height , "Weight":Weight};
    return inputs;
}
function show_func(BMI) {
    $(".result").remove();
    text = $("<h3 class='result' ></h3>").text(BMI);
    $(".text").append(text)
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
$("#btn").click(evented_func);
