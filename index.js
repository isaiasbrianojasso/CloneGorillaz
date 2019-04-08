function iniciar() {
  var canvas = document.getElementById("myCanvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
  } 
  mainMenu();
}

//Al dar click en jugar, creditos y puntajes, aparecen o desaparecen los objetos
function mainMenu() {
  $('#main').show();
  $('#players').hide();
  $('#game-over').hide();
  $('#credits').hide();
  $('#scores').hide();
  $('#myCanvas').hide(); 
  $('#menu').addClass('main');
}

$('.credits').click(function () {
  $('#main').hide();
  $('#credits').show();
  $('#menu').addClass('credits');
});

$('.back').click(function () {
  $('#credits').hide();
  $('#main').show();
  $('#menu').removeClass('back');
});

$('.backGame').click(function () {
  $('#players').hide();
  $('#main').show();
  $('#myCanvas').hide(); 
  $('#menu').removeClass('backGame');
});

$('.play').click(function () {
  $('#main').hide();
  $('#players').show();
  $('#myCanvas').show();
  $('#menu').addClass('play');
});

$('.scores').click(function () {
  $('#main').hide();
  $('#scores').show();
  $('#menu').addClass('scores');
});

$('.backScores').click(function () {
  $('#scores').hide();
  $('#main').show();
  $('#menu').removeClass('backScores');
});
