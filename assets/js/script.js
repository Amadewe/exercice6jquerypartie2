// Au passage de la souris sur un bouton de couleur, colorer le texte. Le texte doit redevenir noir quand la souris quitte le bouton.$( '#clickMe' ).click(function() {


$(function() {
  var changeColor;
  $('div.color').mouseover(function() {
   changeColor = $(this).css('background-color');
    $('#text').css('color', changeColor);
  });
});
  $('div.color').mouseout(function() {
    $('#text').css('color', '');
});




// $('#green').mouseover(function() {
//   $('#text').css('color', 'green');
// });
// $('#red').mouseover(function() {
//   $('#text').css('color', 'red');
// });
// $('#blue').mouseover(function() {
//   $('#text').css('color', 'blue');
// });
// $('#green').mouseout(function() {
//   $('#text').css('color', '');
// });
// $('#red').mouseout(function() {
//   $('#text').css('color', '');
// });
// $('#blue').mouseout(function() {
//   $('#text').css('color', '');
// });



//  possible également avec .mouseenter() et .hover()
