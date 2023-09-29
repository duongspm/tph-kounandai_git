// Type
function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}

$(function(){
    $('#floor-s1').show();    
    $('#imgMap-s1').addClass('active');
    
    $('img[usemap]').rwdImageMaps();
    
    $('area[id^="build-"]').on('click', function() {
        $('.floorMap').hide();
        
        $('#floor-' + this.id.slice(6)).show();
        
        $('.imgMap').removeClass('active');
        $('#imgMap-' + this.id.slice(6)).addClass('active');
        
        $('img[usemap]').rwdImageMaps();
    });  
});