app.controller('docusign_controller2', function($scope) {
   
for (i = 0; i < 8; i++) { 
    $("#canvas").append('<div id="box'+i+'" class="box"></div>');
}

var coordinates = function(element) {
    console.log(element)
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results').text('element'+ element.selector + ' --> X: ' + left + ' ' + 'Y: ' + top);
   
     
}



var boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach(function(box) {
    var boxId = box.getAttribute('id');
   $('#'+boxId).draggable({
    start: function() {
        coordinates('#'+boxId);
    },
    stop: function() {
        coordinates('#'+boxId);
    }
});
});












});