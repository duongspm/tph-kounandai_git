// Slider
$(function(){
    $('.blockSlider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 4,
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