var utilityJS = utilityJS || {};
(function() {
    utilityJS.set = function() {
        /**
         * ユーザーエージェント判別
         * @function
         * @example
         * if(_ua.SP) {
         * 	// Mobile
         * }
         */
        (_ua = (function(u) {
            return {
                TB:
                    (u.indexOf('windows') != -1 && u.indexOf('touch') != -1 && u.indexOf('tablet pc') == -1) ||
                    u.indexOf('ipad') != -1 ||
                    (u.indexOf('android') != -1 && u.indexOf('mobile') == -1) ||
                    (u.indexOf('firefox') != -1 && u.indexOf('tablet') != -1) ||
                    u.indexOf('kindle') != -1 ||
                    u.indexOf('silk') != -1 ||
                    u.indexOf('playbook') != -1,
                SP:
                    (u.indexOf('windows') != -1 && u.indexOf('phone') != -1) ||
                    u.indexOf('iphone') != -1 ||
                    u.indexOf('ipod') != -1 ||
                    (u.indexOf('android') != -1 && u.indexOf('mobile') != -1) ||
                    (u.indexOf('firefox') != -1 && u.indexOf('mobile') != -1) ||
                    u.indexOf('blackberry') != -1
            };
        })(window.navigator.userAgent.toLowerCase())),
        /**
         * ブラウザ判別
         * @function
         * @example
         * if(_browser.ie11) {
         * 	// ie11
         * }
         */
        (_browser = (function(u) {
            return {
                ie11: u.indexOf('trident/7') > -1,
                edge: u.indexOf('edge') > -1,
                ie: (u.indexOf('msie') > -1 && u.indexOf('opera') == -1) || u.indexOf('trident/7') > -1,
                chrome: u.indexOf('chrome') > -1 && u.indexOf('edge') == -1,
                ff: u.indexOf('firefox') > -1,
                safari: u.indexOf('safari') > -1 && u.indexOf('chrome') == -1,
                opera: u.indexOf('opera') > -1
            };
        })(window.navigator.userAgent.toLowerCase())),
        /**
         * ブレイクポイント判別
         * @function
         * @example
         * if(_breakP.SP) {
         * 	// sp
         * }
         */
        (_breakP = (function(w) {
            return {
                PC: w > 1000,
                TB: w < 1000 && w > 768,
                SP: w <= 768
            };
        })(window.innerWidth)),
        /**
         * ウィンドウ幅の取得
         * @function
         * @example
         * if(_winSize.w < 768) {
         * }
         */
        (_winSize = (function(w) {
            return {
                w: w
            };
        })(window.innerWidth));

        return {
            _ua: _ua,
            _browser: _browser,
            _breakP: _breakP,
            _winSize: _winSize
        };
    };
})();