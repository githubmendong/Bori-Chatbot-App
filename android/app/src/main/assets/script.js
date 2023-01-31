/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
$('.menu').click(function () {
  $(this).parent().toggleClass('close');
});
$('.menu-label_help').click(function () {
  $('img.JPG').show();
});


// $("#switch").click(function(){
//    $(this).toggleClass("on off");
// });

$('#switch').click(function () {
  $(this).toggleClass('active');
  $(this).hasClass('active') ? onFunc() : offFunc();
});

var innerWidthsize = document.getElementById('size');

window.onresize = function (event) {
  var innerWidth = window.innerWidth;
  innerWidthsize.textContent = innerWidth;
};


$('menu-label_on_off').click(function() {
  toggleClass('.active-color');
});


