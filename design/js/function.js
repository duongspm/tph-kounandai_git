// Hero PC
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom -50%',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            ease: 'none'
        }
    });
});
       
$(function(){
    if ($(window).width() > 767) {
        setTimeout(function(){
            $('.hero').addClass('sai-animate');
        },1000);
        
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                $('.hero').addClass('is-show');
            }else{
                $('.hero').removeClass('is-show');
            }
        });
    }
    
    if ($(window).width() < 768) {
        setTimeout(function(){
            $('.hero').addClass('sai-animate');
        },100);
    }
});