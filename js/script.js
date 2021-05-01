$(document).ready(function () {
    $('.section-one-slider').slick({
        nextArrow: `<div class="slider-arrow"></div>`,
        prevArrow: false,

        responsive: [
          {
              breakpoint:541,
              settings: {
                  arrows:false
              }
          }
        ]
    });

$('.section-one-slider').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max',amount);
  })
  
  $('.section-one-slider').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide+1);
  })
  
  $('#range').on('input change',function(){
    $('#slider').slick('slickGoTo',this.value-1);
  });
  


});