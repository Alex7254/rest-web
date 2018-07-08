// Scroll Animation
$('#startBtn').on('click', function() {
  const begin = $('#firstArea').position().top;

  $('html, body').animate({
    scrollTop: begin
  }, 900);
});
