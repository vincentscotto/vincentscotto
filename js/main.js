$('.icon').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $('.container').toggleClass('opened');
});

$('#checkbox').on('click', function() {
  $('.greeting p span:first').toggleClass('bb');
})
