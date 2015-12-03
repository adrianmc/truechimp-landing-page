$(document).ready( function() {

  // Initializing bootstrap dynamic widgets
  $('#myCarousel').carousel();
  $('[data-toggle="popover"]').popover(); 
  $('[data-toggle="tooltip"]').tooltip(); 
  
  $('.intro-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#intro').offset().top
    }, 1000);
  });
  $('.contact-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });
  $('.faq-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#faq').offset().top
    }, 1000);
  });
});