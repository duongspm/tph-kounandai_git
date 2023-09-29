/**
 * legacy-function.js
 * @description
 * jQueryをWebpackでバンドルせず使用する際は
 * 各ページのejsのオプションのvendorScriptをtrueに変更し、
 * 当JSファイルに適宜記述を行なってください
 */

(function() {
    const config = function() {
        const _ua = utilityJS.set()._ua,
            _browser = utilityJS.set()._browser,
            _breakP = utilityJS.set()._breakP,
            _winSize = utilityJS.set()._winSize;
    };

    document.addEventListener(
        'DOMContentLoaded',
        () => {
            config();

            // gulp使用時、ページ共通の処理は極力lib.jsにバンドルされるcommon.jsに記述してください
            // gulpを使用しない場合はこちらに共通の記述を行なってくだい

            // ページ固有の処理はcurrentPageというクラス名の要素にidを設定し、以下のswitch文のcase内にそれぞれ処理を記述してください。
            const $pageId = document.getElementsByClassName('currentPage')[0];
            switch ($pageId.getAttribute('id')) {
                case 'top':
                    break;
                default:
                    break;
            }
        },
        false
    );
})();