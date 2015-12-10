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

  // preview cards section
  $('#card-container').cubeportfolio({
    gapHorizontal: 20,
    gapVertical: 20,
    mediaQueries:[{
      width: 1000,
      cols: 4
    },{
      width: 480,
      cols: 2
    },{
      width: 360,
      cols: 1
    }]
  });

  // FAQ section
  $('#js-grid-faq').cubeportfolio({
    filters: '#js-filters-faq',
    defaultFilter: '*',
    animationType: 'sequentially',
    gridAdjustment: 'default',
    displayType: 'default',
    caption: 'expand',
    gapHorizontal: 0,
    gapVertical: 0
  });
});