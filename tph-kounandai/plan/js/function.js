$(function(){
    $('area[class*="map_"]').mouseover(function(){
        var idType = $(this).attr('class').slice(4);
        $('.btn_' + idType).css({'opacity':'0.78'});
    }).mouseout(function(){
        var idType = $(this).attr('class').slice(4);
        $('.btn_' + idType).css({'opacity':'1'});
    })

    $('img[usemap]').rwdImageMaps();
});