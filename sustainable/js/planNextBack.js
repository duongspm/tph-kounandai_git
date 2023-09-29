(function($){
	$(function(){
		/*
		* next backの並び順で詳細ページのファイル名を入力
		* .htmlは除く
		* */
		var plan = {
			list: [
				'typeD',
				'typeE',
				'typeI',
				'typeK'
			]
		};

		/*
		*現在のページがplan.listの何番目なのかを取得
		* */
		var ownType = function(){
            var url = window.location.href;
            var filename = url.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1];
           	var index = plan.list.indexOf(filename);
           	return index
		};

		/*
		* ボタンを以下の要素に入れる
		* */
		var $appendHere = $('.plantype--content');

		/*
		* plan.listから現在のページの一つ前と一つ後を取得
		* */
		var back = plan.list[ownType() - 1],
			next = plan.list[ownType() + 1];

		/*
		* next, backのアイコンhtml
		* */
		var backBtnIcn = '<img src="../common/imgs/btn-prev.svg">',
			nextBtnIcn = '<img src="../common/imgs/btn-next.svg">';

		/*
		* next, backのリンクhtml
		* */
		var backBtnHTML = '<a class="NextBack__btn NextBack__btn--back" href="' + back + '.html">' + backBtnIcn + '</a>',
			nextBtnHTML = '<a class="NextBack__btn NextBack__btn--next" href="' + next + '.html">' + nextBtnIcn + '</a>';

		/*
		* plan.listの最初と最後はそれぞれback,nextを出し分け
		* */
        var backBtn = (back === undefined)?'':backBtnHTML,
			nextBtn = (next === undefined)?'':nextBtnHTML;

        /*
        * htmlを合体
        * */
		var NextBack = '<div class="NextBack">' + backBtn + nextBtn + '</div>';

		/*
		* $appendHereに要素を追加
		* */
		$appendHere.append(NextBack);
	});
})(jQuery);
