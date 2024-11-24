
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 5) {
      $("header").addClass("header-scrolled");
  }else{
    $("header").removeClass("header-scrolled");
  }




});

$(document).ready(function(){

  var scroll = $(window).scrollTop();
  if (scroll >= 5) {
      $("header").addClass("header-scrolled");
  }

  $('.switch-btn').click(function(){
    $('.switch-btn').removeClass('active');
    $(this).addClass('active');
  })

  $('.menu-icon').click(function(){
    $('.top-menu').addClass('show-menu');
  })
  $('.close-menu').click(function(){
    $('.top-menu').removeClass('show-menu');
  })

})


$(document).ready(function(){
  
  $('.plot-slider').slick({
    lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    
    
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          dots: true,
          dotsClass: 'plot-slider-dots slick-dots',
          arrows: false
        }
      }
    ]


  });

})