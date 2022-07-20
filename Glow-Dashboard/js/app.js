var slider = document.getElementById("slider");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// slider 2
var slider2 = document.getElementById("slider2");
var output2 = document.getElementById("output2");
output2.innerHTML = slider.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

// slider 3
var slider3 = document.getElementById("slider3");
var output3 = document.getElementById("output3");
output3.innerHTML = slider.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

// jQuery Starts
$(document).ready(function(){
$("#tables").click(function(){
  $(this).addClass('active');
  $("#visuals ").removeClass("active");
$('.mid_body').hide();
$(".hide").show();
});

// when click on visuals
$("#visuals").click(function(){
  $(this).addClass('active');
  $("#tables").removeClass("active");
$('.mid_body').show();
});
});