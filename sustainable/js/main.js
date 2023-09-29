(function ($) {
  var config = function () {
    //ポップアップリンクに置換
    $(".commonPop").easyPop();
    //アンカーリンクをスムージング
    $('a[href^="#"]').smoothScroll();
    // 判別用
    var _ua = Fourdigit.set()._ua,
      _browser = Fourdigit.set()._browser,
      _breakP = Fourdigit.set()._breakP,
      _winSize = Fourdigit.set()._winSize;
    // ブラウザを判別し、bodyにそのブラウザ名のクラスを付与
    for (var key in _browser) {
      if (_browser.hasOwnProperty(key)) {
        if (_browser[key] == true) {
          $('body').addClass(key);
        }
      }
    }
  }

  //ipad iphoneタッチ無効
  var touch = 'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

  if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;

        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;

          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
  }

  $(function () {
    /**
     * 共通系処理
     * @description
     * サイト共通で機能させる処理はここに書きます。
     */
    $winW = $(window).innerWidth();

    //pageのpadding
    var $page = $('.page'),
      $hNav = $('#hNav'),
      $hNavH = $hNav.innerHeight();

    if ($winW < 768) {
      $page.css({
        'padding-bottom': $hNavH + 'px'
      });
    }


    config();

    // 共通変数
    var $html = $('html'),
      $body = $('body'),
      $gHdr = $('#gHeader'),
      $gNav = $('#gNav'),
      $pNav = $('#pNav'),
      $spNav = $('#spNav'),
      $spMenu = $('#spMenu'),
      $gFtr = $('#gFooter'),
      $fNav = $('#fNav'),
      $pagetop = $('#pagetop');

    /**
     * VIEWPORT 切り替え
     * @description
     * TBとSPの場合で、それぞれviewportの値を切り替えます。
     */
    function updateMetaViewport() {
      var viewportContent;
      if (_ua.SP) {
        viewportContent = "width=device-width,initial-scale=1.0,maximum-scale=1.5,user-scalable=yes";
      } else if (_ua.TB) {
        viewportContent = "width=1000px";
      }
      document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
    }

    if (_ua.SP || _ua.TB) {
      window.addEventListener("load", updateMetaViewport, false);
    }
    /**
     * android tel設定
     * @description
     * androidで電話がかけられないバグ用の記述です。
     */
    if (_ua.SP) {
      $("a[href^=tel]").on('click', function () {
        location.href = $(this).attr("href");
        return false;
      });
    }
    /**
     * SP NAVI
     * @description
     */
    var $gNav = $('#gNav');

    $('.menu').on('click', function (ev) {
      ev.preventDefault();

      $gNav.toggleClass('active');
      $('.menu-trigger').toggleClass('active');

      if ($gNav.hasClass('active')) {
        $('.menu-trigger span').css({
          'background': '#000'
        })
        $('.menu-trigger p').css({
          'color': '#000'
        })
        $gNav.fadeIn('slow');

        //遅延表示
        $('#gNav ul li')
          .css({
            opacity: 0,
            transition: 2 + 's'
          })
          .each(function (i) {
            $(this).delay(30 * i).animate({
              opacity: 1
            }, 50);
          });
      } else {
        $('.menu-trigger span').css({
          'background': '#000'
        })
        $('.menu-trigger p').css({
          'color': '#000'
        })
        $gNav.fadeOut('slow');
      }


    });

    /**
     * mitsubishiBnr NAVI
     * @description
     * フッターバナーの処理
     */
    var $slider = $('.mitsubishiBnr .slider ul');
    if ($slider.length > 0) {
      $slider.bxSlider({
        auto: true,
        slideWidth: 302,
        prevText: '<',
        nextText: '>'
      });
    }

    /**
     * PAGE TOP
     * @description
     */
    // $pagetop.on('click', function () {
    //     $body.animate({
    //         scrollTop: 0
    //     }, 500, "linear");
    //     return false;
    // });
    //pagetop
    $(window).on('scroll', function () {
      var scrTop = $(this).scrollTop(),
        pagetop = $('#pageTop');

      if (scrTop > 200) {
        pagetop.addClass('is-scrolled');
      } else {
        pagetop.removeClass('is-scrolled');
      }
    });

    /* imgViewer */
    $(window).on("load resize", function () {
      var winW = $(window).width();

      if (winW <= 768) {

        var $img = $(".imgViewer").imgViewer2({
          onReady: function () {
            this.setZoom(1).panTo(0.6, 0.5);
          }
        });

      }
    });

  });



  $(window).on('load resize', function () {

    //SPナビ
    if (_breakP.SP) {
      //menu
      $(window).on('load scroll', function () {
        var scrTop = $(this).scrollTop();

        if (scrTop > 80) {
          $('.menu').addClass('is-fixed');
        } else {
          $('.menu').removeClass('is-fixed');
        }
      });

      //固定ナビ
      $(window).on("scroll touchmove", function () { //スクロール中に判断する
        $('#hNav').stop(); //アニメーションしている場合、アニメーションを強制停止
        $('#hNav').css('display', 'none').delay(300).fadeIn('fast');
      });
    }
  });


  //画像が読み込まれたら実行する
  $(window).on('load', function () {
    // AOS
    AOS.init({
      offset: 120,
      delay: 100,
      once: true
    });
  });


  // yoko
  $(function () {
    var wd = window.innerWidth;
    if (window.ontouchstart === null) {
      $('body').addClass('spSize');
    } else {
      $('body').addClass('noTouch');
    }

    if (wd < 740 && window.ontouchstart === null) {
      $('body').addClass('spMode');
    }
  });



  /**
   * 各ページ固有の処理
   * 基本的にローカルにJSは置かずにcommon内で完結させる。
   */
  $(function () {
    switch ($('.page').attr('id')) {
      case 'index':

        break;
      case 'check-eyes':
        var $checkeysNav = $('.checkeyesNav').find('.choiceBlock'),
          $cyContent = $('.cyContent'),
          $concernTab = $('.concernTab__head').find('.choiceBlock'),
          $tabItem = $('.tabGroup').find('.itemGroup');

        function tabFunction(parent, child) {
          parent.click(function () {
            var index = parent.index(this);
            child.removeClass('is-active');
            child.eq(index).addClass('is-active');
            parent.removeClass('is-active');
            $(this).addClass('is-active')
          });
        }

        function cyInit() {
          tabFunction($checkeysNav, $cyContent);
          tabFunction($concernTab, $tabItem);
        }

        $('.js-check-transition').on('click', function (e) {
          $checkeysNav.removeClass("is-active");
          $cyContent.removeClass("is-active");
          $checkeysNav.eq(2).addClass("is-active");
          $cyContent.eq(2).addClass("is-active");
          var scrollPoint = $('.checkeyesNav').offset().top;
          console.log(scrollPoint);
          $("html,body").animate({
            scrollTop: scrollPoint
          }, 0, "linear");
          return false;
          e.preventDefault();
        });


        cyInit();
        break;
      case 'sustainable':

        $(window).on('load', function () {
          // AOS
          AOS.init({
            offset: 120,
            delay: 100,
            duration: 1200,
            once: true
          });
        });

        (function () {
          var w = $(window).width();
          var x = 768;

          if (w <= x) {
            // SP
            var hideCont = $('.js-hideCont');
            hideCont.each(function () {
              var hideContInner = $(this).find('.js-hideContInner');
              var itemState = true;
              var hideItem = $(this).find('.js-hideItem');
              var hideBtn = $(this).find('.js-hideBtn');
              $(window).on('load', function () {
                var itemH = hideItem.innerHeight();
                hideBtn.on('click', function () {
                  hideCont.toggleClass('is-open');
                  if (itemState) {
                    hideContInner.css(
                      {"height":""+itemH+"px"}
                    )
                    itemState = false;
                    $(".historyMeter").removeClass('aos-animate');
                    setTimeout(function () {
                      AOS.init();
                    }, 1000);
                  } else {
                    console.log(itemH + 1);
                    hideContInner.css(
                      {"height":"0px"}
                    )
                    $(".historyMeter").removeClass('aos-animate');
                    setTimeout(function () {
                      AOS.init();
                    }, 1000);
                    itemState = true;
                  }
                });
                console.log(hideItem);
              });

            });
          } else {
            // PC
            var discOpen = $('.js-discOpen');
            var discModal = $('.js-discModal');
            var discModalCloseTrigeer = $('.js-discModalClose');
            var discModalCloseCont = $('.js-discModalCont');
            var discBlc = $('.js-discBlc');
            discOpen.on('click', function () {
              var listNum = $(this).attr("data-num");
              discModal.addClass('is-open');
              console.log(listNum);
              discBlc.each(function () {
                $(this).removeClass('is-active')
                var discBlcNum = $(this).attr("data-num");
                if (listNum == discBlcNum) {
                  $(this).addClass('is-active');
                }
              });
            });
            discModalCloseTrigeer.on('click', function () {
              discModal.removeClass('is-open');
            });
          }
        }());

        var detailCont = $('.js-detailCont');
        detailCont.each(function () {
          var thisCont = $(this);
          var detailContInner = $(this).find('.js-detailContInner');
          var itemState = true;
          var detailItem = $(this).find('.js-detailItem');
          var detailBtn = $(this).find('.js-detailBtn');
          $(window).on('load', function () {
            var itemH = detailItem.innerHeight();
            detailBtn.on('click', function () {
              thisCont.toggleClass('is-open');
              if (itemState) {
                detailContInner.css(
                  {"height":""+itemH+"px"}
                )
                itemState = false;
                setTimeout(function () {
                  AOS.init();
                }, 500);
              } else {
                console.log(itemH + 1);
                detailContInner.css(
                  {"height":"0px"}
                )
                itemState = true;
                setTimeout(function () {
                  AOS.init();
                }, 500);
              }
            });
            console.log(detailItem);
          });
        });

        break;
      default:
        break;
    }
  });

})(jQuery);