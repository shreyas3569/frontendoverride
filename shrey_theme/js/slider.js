(function($, Drupal) {
  $(document).ready(function() {
    $('.slider-wrapper').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 500,
      Infinite: true,
      prevArrow: false,
      nextArrow: false
    });

  });
})(jQuery, Drupal);
