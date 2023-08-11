// Info
$(function(){
    $('#infoNav01').addClass('isActive');
    $('#infoTab01').show();
    
    $('.infoNav li[id^="infoNav"]').on('click', function() {
        $('[id^="infoTab"]').hide();
        $('#infoTab' + this.id.slice(7)).show();
        $(this).addClass('isActive');
        $('.infoNav li').not(this).removeClass('isActive');
    });
})
