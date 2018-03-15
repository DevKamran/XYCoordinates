app.controller('docusign_controller', function($scope) {
   
for (i = 0; i < 4; i++) { 
    $("#canvas").append('<div id="box'+(i+1)+'" class="box"></div>');
}

var coordinates = function(element) {
    console.log(element)
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results .coordinate' + element.selector.replace("#box", "")).text('element'+ element.selector + ' --> X: ' + left + ' ' + 'Y: ' + top);
   
     
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



$scope.obj = [
  {name : "Kashif_1", email : "kashif1@gmail.com"},
  {name : "Kashif_2", email : "kashif2@gmail.com"},
  {name : "Kashif_3", email : "kashif3@gmail.com"},
  {name : "Kashif_4", email : "kashif4@gmail.com"},
  
];



});