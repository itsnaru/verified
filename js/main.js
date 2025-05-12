
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 5) {
      $("header").addClass("header-scrolled");
  }else{
    $("header").removeClass("header-scrolled");
  }




});

$(document).ready(function(){

  $('#scheduleDate').change(function () {
    console.log(this.value);
  });

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
    $('.plot-list-outer').removeClass('show-plot-group');
    $('.buy-plot-group').addClass('show-plot-group');
  })
  $('.lease-btn').click(function(){
    $('.plot-list-outer').removeClass('show-plot-group');
    $('.lease-plot-group').addClass('show-plot-group');
  })

  $('.switch-btn-inner').click(function(){
    $(this).parent().removeClass('left').removeClass('right');
    $(this).parent().addClass($(this).data('btn-pos'))
  })

  $('.extra-location-btn').click(function(){
    $(this).closest('.nearby-location-outer').addClass('show-extra-location');
  })

  $('.nearby-location-items').click(function(){
    $(this).toggleClass('active-location');
  })
  $('.clear-location-btn').click(function(){
    $(this).closest('.nearby-location-outer').children('.nearby-location-items').removeClass('active-location');
    $()
  })

  $('.filter-icon-outer').click(function(){
    $('.filter-box').addClass('show-filter');
  })
  $('.filter-close').click(function(){
    $('.filter-box').removeClass('show-filter');
  })

  $('.price-range-btn').click(function(){
    $(this).toggleClass('active-price-range-btn')
    $('.price-range').toggleClass('show-price-range');
  })

  $('.sell-lease-card').click(function(){
    $('.sell-lease-card').removeClass('card-active');
    $(this).addClass('card-active');
  })

  $('.visit-date-box').click(function(){
    $('.visit-date-box').removeClass('active');
    $(this).addClass('active');
  })

  $('.visit-time-box').click(function(){
    $('.visit-time-box').removeClass('active');
    $(this).addClass('active');
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

  $('.list-page-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    dotsClass: 'flat-dots slick-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: true
        }
      }
    ]
  });

  $('.details-slider-1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false
  });

})



$('#searchModal').on('shown.bs.modal', function (e) {
  $('.popular-cities').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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

function showBlog(_blog){
  $('.blog-type').addClass('hide-blog');
  $(_blog).removeClass('hide-blog');
}


/* Code Updated START */
const priceInputs = document.querySelectorAll(".price-input input");
const rangeInputs = document.querySelectorAll(".range-input input");
const range = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInputs[0].value);
    let maxPrice = parseInt(priceInputs[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
      if (e.target.className === "min-input") {
        rangeInputs[0].value = minPrice;
        range.style.left = ((minPrice - 10000) / (50000 - 10000)) * 100 + "%";
      } else {
        rangeInputs[1].value = maxPrice;
        range.style.right = 100 - ((maxPrice - 10000) / (50000 - 10000)) * 100 + "%";
      }
    }
  });
});

rangeInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInputs[0].value);
    let maxVal = parseInt(rangeInputs[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "min-range") {
        rangeInputs[0].value = maxVal - priceGap;
      } else {
        rangeInputs[1].value = minVal + priceGap;
      }
    } else {
      priceInputs[0].value = minVal;
      priceInputs[1].value = maxVal;
      range.style.left = ((minVal - 10000) / (50000 - 10000)) * 100 + "%";
      range.style.right = 100 - ((maxVal - 10000) / (50000 - 10000)) * 100 + "%";
    }
  });
});

function resetRange(_min, _max) {
  priceInputs[0].value = _min;
  priceInputs[1].value = _max;
  rangeInputs[0].value = _min;
  rangeInputs[1].value = _max;
  range.style.left = "0%";
  range.style.right = "0%";
}
/* Code Updated END */


var tabEl = document.querySelector('.details-switch-btn[data-bs-target="#image"]');
if(tabEl){
  tabEl.addEventListener('shown.bs.tab', function (event) {
    
    $('.details-slider-1').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false
    });
  })

}


var _input = document.querySelector("#schedule-phone");
if(_input){
  window.intlTelInput(_input, {
      separateDialCode: true,
      // excludeCountries: ["in", "il"],
      // onlyCountries: ["in","pk", "us", "sg", "my", "bd"],
      preferredCountries: ["in", "pk", "us", "no"]
  });
}
var _input = document.querySelector("#book-phone");
if(_input){
  window.intlTelInput(_input, {
      separateDialCode: true,
      // excludeCountries: ["in", "il"],
      // onlyCountries: ["in","pk", "us", "sg", "my", "bd"],
      preferredCountries: ["in", "pk", "us", "no"]
  });
}

var _input = document.querySelector("#schedule2-phone");
if(_input){
  window.intlTelInput(_input, {
      separateDialCode: true,
      // excludeCountries: ["in", "il"],
      // onlyCountries: ["in","pk", "us", "sg", "my", "bd"],
      preferredCountries: ["in", "pk", "us", "no"]
  });
}
var _input = document.querySelector("#book2-phone");
if(_input){
  window.intlTelInput(_input, {
      separateDialCode: true,
      // excludeCountries: ["in", "il"],
      // onlyCountries: ["in","pk", "us", "sg", "my", "bd"],
      preferredCountries: ["in", "pk", "us", "no"]
  });
}
var _input = document.querySelector("#login-to-access");
if(_input){
  window.intlTelInput(_input, {
      separateDialCode: true,
      // excludeCountries: ["in", "il"],
      // onlyCountries: ["in","pk", "us", "sg", "my", "bd"],
      preferredCountries: ["in", "pk", "us", "no"]
  });
}




/* New Code START */
const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco", "Seattle", "Boston", "Denver", "Atlanta"];

document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown-menu").forEach(dropdown => {
    if (!dropdown.previousElementSibling.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});

function filterDropdown(inputElement) {
  const query = inputElement.value.toLowerCase();
  const dropdown = inputElement.nextElementSibling;
  dropdown.innerHTML = "";
  if (query) {
    const filtered = locations.filter(location => location.toLowerCase().includes(query));
    filtered.forEach(location => {
      const item = document.createElement("li");
      item.textContent = location;
      item.classList.add("dropdown-item");
      item.onclick = () => {
        inputElement.value = location;
        dropdown.style.display = "none";
      };
      dropdown.appendChild(item);
    });
    dropdown.style.display = filtered.length ? "block" : "none";
  } else {
    dropdown.style.display = "none";
  }
}
/* New Code END */




/* How It Works page JS */
document.addEventListener('DOMContentLoaded', function () {
const boxes = document.querySelectorAll('.chain-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('animate');
    } else {
      // Reset animation when out of view to allow re-trigger
      el.classList.remove('animate');
    }
  });
}, {
  threshold: 0.3 // Trigger when 30% visible
});

if(boxes){
  boxes.forEach(box => observer.observe(box));
}
});
/* How It Works page JS END */