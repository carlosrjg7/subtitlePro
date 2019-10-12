$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    navRewind: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    loop: true,
    navText: ["<em class='fa fa-chevron-left'></em>","<em class='fa fa-chevron-right'></em>"]
    });
});
