'use strict';

function brandAccordion() {
  window.addEventListener('load', function() {
    const elms = document.querySelectorAll('.js-content-accordion');
    elms.forEach(elm => {
      const cardTotalHeight = elm.parentNode.clientHeight;
      const cardInitHeight = elm.querySelector('.brand-doorPicture').clientHeight;
      elm.parentNode.style.maxHeight = cardInitHeight + 'px';
      elm.addEventListener('click', () => {
        elm.parentNode.classList.toggle('is-open');
        if (elm.parentNode.classList.contains('is-open')) {
          elm.parentNode.style.maxHeight = cardTotalHeight + 'px';
        } else {
          elm.parentNode.style.maxHeight = cardInitHeight + 'px';
        }
      });
      let index;
      elm.parentNode.querySelector('.js-content-accordion-close').addEventListener('click', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const activeCheck = elm.parentNode.classList.contains('is-open');
        index = [].slice.call(elms).indexOf(elm);
        elm.parentNode.classList.toggle('is-open');
        const elmH = elm.clientHeight;
        const rect = elm.getBoundingClientRect();
        const targetPosition = scrollTop + rect.top + elmH;
        // eslint-disable-next-line no-magic-numbers
        const buffer = window.innerHeight / 4;
        if (activeCheck) {
          elm.parentNode.style.maxHeight = cardInitHeight + 'px';
          window.scrollTo({
            top: targetPosition - buffer,
            behavior: 'smooth'
          });
        } else {
          elm.parentNode.style.maxHeight = cardTotalHeight + 'px';
        }
      });
    });
  });
}

function accordionClose() {
  const elms = document.querySelectorAll('.js-content-accordion-close');
  let index;
  elms.forEach(elm => {
    elm.addEventListener('click', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const activeCheck = elm.parentNode.classList.contains('is-open');
      index = [].slice.call(elms).indexOf(elm);
      elm.parentNode.classList.toggle('is-open');
      const elmH = elm.previousElementSibling.previousElementSibling.clientHeight;
      const rect = elm.previousElementSibling.previousElementSibling.getBoundingClientRect();
      const targetPosition = scrollTop + rect.top + elmH;
      // eslint-disable-next-line no-magic-numbers
      const buffer = window.innerHeight / 4;
      if (activeCheck) {
        window.scrollTo({
          top: targetPosition - buffer,
          behavior: 'smooth'
        });
      }
    });
  });
}

function nextScroll() {
  window.addEventListener('load', function() {
    const elms = document.querySelectorAll('.js-brand-next-scroll');
    let index;
    elms.forEach(elm => {
      elm.addEventListener('click', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        index = [].slice.call(elms).indexOf(elm);
        const elmH = elm.closest('.brand-cardBlock').clientHeight;
        const rect = elm.closest('.brand-cardBlock').getBoundingClientRect();
        const targetPosition = scrollTop + rect.top + elmH;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      });
    });
  });
}

function arrowFixer() {
  window.addEventListener('load', function() {
    const timer = null;

    function arrowFader() {
      const eleList = document.querySelectorAll('.brand-nextArrow');

      for (let i = 0; i < eleList.length; ++i) {
        eleList[i].classList.remove('is-hidden');
      }
      const hiddenDelayTime = 1000;
      setTimeout(function() {
        for (let i = 0; i < eleList.length; ++i) {
          eleList[i].classList.add('is-hidden');
        }
      }, hiddenDelayTime);
    }
    window.addEventListener('scroll', arrowFader, false);
  });

  window.addEventListener('load', function() {
    const $target = document.querySelectorAll('.brand-cardBlock');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const options = { offset: 300 };

    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        } else {
          entry.target.classList.remove('is-active');
        }
      });
    };

    const option = { rootMargin: '-50% 0px -50% 0px' };
    const io = new IntersectionObserver(callback, option);
    const targets = document.querySelectorAll('.brand-cardBlock');
    targets.forEach(target => {
      io.observe(target);
    });
  });
}

function brandTabInit() {
  const $contBlock = document.querySelectorAll('.js-brandTab-content');
  $contBlock.forEach(elm => {
    $contBlock[1].classList.remove('is-active');
  });
}
function brandTab() {
  const $brandTabBlock = document.querySelectorAll('.js-brandTab-link');
  const $contBlock = document.querySelectorAll('.js-brandTab-content');

  $brandTabBlock.forEach(elm => {
    elm.addEventListener('click', event => {
      event.preventDefault();
      const index = [].slice.call($brandTabBlock).indexOf(elm);
      for (let i = 0, length = $brandTabBlock.length; i < length; i++) {
        $contBlock[i].classList.remove('is-active');
        $brandTabBlock[i].classList.remove('is-active');
      }
      $contBlock[index].classList.add('is-active');
      $brandTabBlock[index].classList.add('is-active');
    });
  });
}

function init() {
  const TBNum = 1024;
  const spNum = 767;
  const _breakP = (w => {
    return {
      PC: w > TBNum,
      TB: w < TBNum && w > spNum,
      SP: w <= spNum
    };
  })(window.innerWidth);

  if (_breakP.SP) {
    brandAccordion();
    accordionClose();
  } else {
    nextScroll();
    arrowFixer();
  }
  
  window.addEventListener('load', function() {
    brandTabInit();
    brandTab();
  });
  
}
init();
