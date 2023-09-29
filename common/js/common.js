// Include
function parts(rootDir,File){
    $.ajax({
        url: rootDir + "include/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

// Hero
$(function(){
    $(window).scroll(function() {
        var scalePer = $(window).scrollTop() * 0.03;
        
        $(".hero__img").css({
            width: (100 + scalePer) + "%"               
        })
    })
});

$(function(){    
	if ($('.commonSpModalImage').length) {
		if (!$('#spCommonModalArea').length) {
			$('body').append('<div id="spCommonModalArea"><div id="spCommonModalTable"><div id="spCommonModalCell"><div id="spCommonModalInner"><div id="spCommonModalContents"></div><div id="spCommonModalClose"></div></div></div></div></div>');
		}
		$('.commonSpModalImage').on('click', function () {
			const
				material = $(this).attr('data-spmodal'),
				element = '<figure><img src="' + material + '"></figure>';
			$('#spCommonModalContents').empty();
			$('#spCommonModalContents').removeClass('icoOff');
			$('#spCommonModalContents').append(element);
			$('#spCommonModalArea').fadeIn(300);
		});
		$('#spCommonModalClose,#spCommonModalArea').on('click', function () {
			$('#spCommonModalArea').fadeOut(300);
		});
		$('#spCommonModalContents').on('click', function (e) {
			e.stopPropagation();
		});
		$('#spCommonModalContents').on('scroll', function () {
			if ($('#spCommonModalContents').scrollLeft() > 20) {
				$('#spCommonModalContents').addClass('icoOff');
			}
		});
		$('#spCommonSlideContents').on('scroll', function () {
			if ($('#spCommonSlideContents').scrollLeft() > 20) {
				$('#spCommonSlideContents').addClass('icoOff');
			}
		});
	}
})