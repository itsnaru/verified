
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

  $('.buying-btn').click(function(){
    $('.switch-btn-outer').removeClass('lease-active').addClass('buy-active');
    $('.plot-list-outer').removeClass('show-plot-group');
    $('.buy-plot-group').addClass('show-plot-group');
  })
  $('.lease-btn').click(function(){
    $('.switch-btn-outer').removeClass('buy-active').addClass('lease-active');
    $('.plot-list-outer').removeClass('show-plot-group');
    $('.lease-plot-group').addClass('show-plot-group');
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


  $('.hot-deals-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]


  });

  $('.popular-neighbour-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      }
    ]


  });

  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    dotsClass: 'testimonial-slider-dots slick-dots',

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]


  });

})


function showExtraLi(_plotType){
  $(_plotType).toggleClass('show-extra-li');
  $(_plotType+'-show-more').toggleClass('active-show-more');
}