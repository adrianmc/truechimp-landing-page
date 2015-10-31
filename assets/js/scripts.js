$(document).ready( function() {
  
  $('.intro-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#intro').offset().top - 100
    }, 1000);
  });
  $('.cta-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#cta').offset().top - 50
    }, 1000);
  });
  $('.preview-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#preview').offset().top - 100
    }, 1000);
  });
  $('.faq-click').click(function(){
    $('html, body').animate({
      scrollTop: $('#faq').offset().top - 50
    }, 1000);
  });

  // Fade navbar opaque
  $(document).scroll(function(){
    scrollPos = $(window).scrollTop();
    bar = $('.navbar')
    startFadePos = 20
    endFadePos = 200
    if (scrollPos > startFadePos) {
      factor = (scrollPos - startFadePos) / (endFadePos - startFadePos)
      bar.css('background-color', 'rgba(60,60,60,' + factor + ')')
    } else if (scrollPos > startFadePos && scrollPos < endFadePos) {
      bar.css('background-color', 'rgba(60,60,60,1)')
    } else {
      bar.css('background-color', 'transparent')
    }
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