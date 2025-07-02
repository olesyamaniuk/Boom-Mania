$(function () {
  $(".t-h-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,

    cssEase: "linear",
    prevArrow: ".t-h-gallery-list-left",
    nextArrow: ".t-h-gallery-list-right",
  });
});
