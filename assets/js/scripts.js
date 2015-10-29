$(document).ready( function() {

  $(document).ready(function(){
    $('.btn-learn-more').click(function(){
      $('html, body').animate({
        scrollTop: $('#intro').offset().top - 50
      }, 1000);
    });
  });

  $(document).scroll(function(){
    scrollPos = $(window).scrollTop();
    bar = $('.navbar')
    startFadePos = 200
    endFadePos = 600
    if (scrollPos > startFadePos) {
      factor = (scrollPos - startFadePos) / (endFadePos - startFadePos)
      bar.css('background-color', 'rgba(60,60,60,' + factor + ')')
    } else if (scrollPos > startFadePos && scrollPos < endFadePos) {
      bar.css('background-color', 'rgba(60,60,60,1)')
    } else {
      bar.css('background-color', 'transparent')
    }
  });

  $('#grid-container').cubeportfolio({
    gapHorizontal: 0,
    gapVertical: 0,
    caption: 'zoom',
    mediaQueries:[{
      width: 768,
      cols: 4
    },{
      width: 360,
      cols: 2
    }]
  });

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
});