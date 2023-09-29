// Information
$(function(){
    $('.infoBot-item__head').click(function() {
        var current = $(this).parent().find('.infoBot-item__body').slideToggle(200, function() {
            if (current.is(":hidden")) {
                $(this).parent().find('.infoBot-item__head').removeClass('is-show');
            } else {
                $(this).parent().find('.infoBot-item__head').addClass('is-show');
            }
        });
    });
});