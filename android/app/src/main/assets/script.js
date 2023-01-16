/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
$('.menu').click(function () {
  $(this).parent().toggleClass('close');
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


$('.menu a, .menu > label').click(function() {
  $(this).css({
      'background-color': '#fff',
      'color': '#000'
  });

  setTimeout(function() {
      $(this).css({
          'background-color': '#142239',
          'color': '#fff'
      });
  }.bind(this), 1000);
});
// background-color: #142239;
// color: #fff;
