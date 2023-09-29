// Slider
$(function(){
    $('.block__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });
});