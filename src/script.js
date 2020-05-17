$('.header-slider').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: false,
  nextArrow: false,
  dotsClass: "vertical-dots"
});

$('.news-slider').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  adaptiveHeight: true,
  // prevArrow: $('.prev'),
  // nextArrow: $('.next'),
  dotsClass: "slick-dots"
});