// Area
$(function(){
    var controllerGuide = new ScrollMagic.Controller();
    $(".guideBox__outer").each(function() {
        var tlGuide = new TimelineMax().to($(this), 1, {
            y: -100,
            transformOrigin: "top right",
            ease: Linear.easeNone
        });
        
        var sceneGuide = new ScrollMagic.Scene({
            triggerElement: this,
            duration: 800,
            triggerHook: 1
        })
        .setTween(tlGuide)
        .addTo(controllerGuide);        
    });    
});