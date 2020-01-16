var classes = ['blue', 'pink', 'green', 'red', 'yellow']


var mainBody = document.getElementById('mainBody');

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

function createHex(){
  const hexValues = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];

  let hexColor = '#';
  for(let i=0; i<6; i++){
    let random = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[random];
}
    return hexColor;
}



$(document).ready(function(){

  $("#changeButton").click(function(){
    var randomColor = createHex();
    //$("body").removeClass();
    //$("body").addClass(classes[(Math.floor((Math.random() * 5)))]);
    $("body").css("background-color", randomColor);
    $("#colorRGB").html(window.getComputedStyle(mainBody).backgroundColor);
    $("#colorHEX").html(randomColor);
});



})
