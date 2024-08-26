
// function Util() {}
  
// // importante
// Util.osHasReducedMotion = function() {
//      if (!window.matchMedia) return false;
//      var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
//      if (matchMediaObj) return matchMediaObj.matches;
//      return false;
//    };
 
 
// // importante
// (function() {
//      var StackCards = function(element) {
//        this.element = element;
//        this.items = this.element.getElementsByClassName('js-stack-cards__item');
//        this.scrollingFn = false;
//        this.scrolling = false;
//        initStackCardsEffect(this);
//        initStackCardsResize(this);
//      };
 
//      function initStackCardsEffect(element) {
//        setStackCards(element);
//        var observer = new IntersectionObserver(stackCardsCallback.bind(element), { threshold: [0, 1] });
//        observer.observe(element.element);
//      }
 
//      function initStackCardsResize(element) {
//        element.element.addEventListener('resize-stack-cards', function() {
//          setStackCards(element);
//          animateStackCards.bind(element);
//        });
//      }
 
//      function stackCardsCallback(entries) {
//        if (entries[0].isIntersecting) {
//          if (this.scrollingFn) return;
//          stackCardsInitEvent(this);
//        } else {
//          if (!this.scrollingFn) return;
//          window.removeEventListener('scroll', this.scrollingFn);
//          this.scrollingFn = false;
//        }
//      }
 
//      function stackCardsInitEvent(element) {
//        element.scrollingFn = stackCardsScrolling.bind(element);
//        window.addEventListener('scroll', element.scrollingFn);
//      }
 
//      function stackCardsScrolling() {
//        if (this.scrolling) return;
//        this.scrolling = true;
//        window.requestAnimationFrame(animateStackCards.bind(this));
//      }
 
//      function setStackCards(element) {
//        element.marginY = getComputedStyle(element.element).getPropertyValue('--stack-cards-gap');
//        getIntegerFromProperty(element);
//        element.elementHeight = element.element.offsetHeight;
//        var cardStyle = getComputedStyle(element.items[0]);
//        element.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
//        element.cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));
//        element.windowHeight = window.innerHeight;
 
//        if (isNaN(element.marginY)) {
//          element.element.style.paddingBottom = '0px';
//        } else {
//          element.element.style.paddingBottom = (element.marginY * (element.items.length - 1)) + 'px';
//        }
 
//        for (var i = 0; i < element.items.length; i++) {
//          if (isNaN(element.marginY)) {
//            element.items[i].style.transform = 'none;';
//          } else {
//            element.items[i].style.transform = 'translateY(' + element.marginY * i + 'px)';
//          }
//        }
//      }
 
//      function getIntegerFromProperty(element) {
//        var node = document.createElement('div');
//        node.setAttribute('style', 'opacity:0; visibility: hidden; position: absolute; height:' + element.marginY);
//        element.element.appendChild(node);
//        element.marginY = parseInt(getComputedStyle(node).getPropertyValue('height'));
//        element.element.removeChild(node);
//      }
 
//      function animateStackCards() {
//        if (isNaN(this.marginY)) {
//          this.scrolling = false;
//          return;
//        }
//        var top = this.element.getBoundingClientRect().top;
 
//        if (this.cardTop - top + this.element.windowHeight - this.elementHeight - this.cardHeight + this.marginY + this.marginY * this.items.length > 0) {
//          this.scrolling = false;
//          return;
//        }
 
//        for (var i = 0; i < this.items.length; i++) {
//          var scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
//          if (scrolling > 0) {
//            var scaling = i == this.items.length - 1 ? 1 : (this.cardHeight - scrolling * 0.05) / this.cardHeight;
//            this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
//          } else {
//            this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px)';
//          }
//        }
 
//        this.scrolling = false;
//      }
 
//      var stackCards = document.getElementsByClassName('js-stack-cards'),
//          intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
//          reducedMotion = Util.osHasReducedMotion();
// // importante
//      if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
//        var stackCardsArray = [];
//        for (var i = 0; i < stackCards.length; i++) {
//          (function(i) {
//            stackCardsArray.push(new StackCards(stackCards[i]));
//          })(i);
//        }
 
//        var resizingId = false,
//            customEvent = new CustomEvent('resize-stack-cards');
 
//        window.addEventListener('resize', function() {
//          clearTimeout(resizingId);
//          resizingId = setTimeout(doneResizing, 500);
//        });
 
//        function doneResizing() {
//          for (var i = 0; i < stackCardsArray.length; i++) {
//            (function(i) {
//              stackCardsArray[i].element.dispatchEvent(customEvent);
//            })(i);
//          }
//        }
//      }
//    }());









// Define the Util function globally
function Util() {}

// Add the osHasReducedMotion method to Util
Util.osHasReducedMotion = function() {
  if (!window.matchMedia) return false;
  var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
  return matchMediaObj ? matchMediaObj.matches : false;
};

// Main StackCards code
(function() {
  function StackCards(element) {
    this.element = element;
    this.items = this.element.getElementsByClassName('js-stack-cards__item');
    this.scrollingFn = false;
    this.scrolling = false;
    initStackCardsEffect(this);
    initStackCardsResize(this);
  }

  function initStackCardsEffect(element) {
    setStackCards(element);
    var observer = new IntersectionObserver(stackCardsCallback.bind(element), { threshold: [0, 1] });
    observer.observe(element.element);
  }

  function initStackCardsResize(element) {
    element.element.addEventListener('resize-stack-cards', function() {
      setStackCards(element);
      animateStackCards.bind(element);
    });
  }

  function stackCardsCallback(entries) {
    if (entries[0].isIntersecting) {
      if (this.scrollingFn) return;
      stackCardsInitEvent(this);
    } else {
      if (!this.scrollingFn) return;
      window.removeEventListener('scroll', this.scrollingFn);
      this.scrollingFn = false;
    }
  }

  function stackCardsInitEvent(element) {
    element.scrollingFn = stackCardsScrolling.bind(element);
    window.addEventListener('scroll', element.scrollingFn);
  }

  function stackCardsScrolling() {
    if (this.scrolling) return;
    this.scrolling = true;
    window.requestAnimationFrame(animateStackCards.bind(this));
  }

  function setStackCards(element) {
    element.marginY = getComputedStyle(element.element).getPropertyValue('--stack-cards-gap');
    getIntegerFromProperty(element);
    element.elementHeight = element.element.offsetHeight;
    var cardStyle = getComputedStyle(element.items[0]);
    element.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
    element.cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));
    element.windowHeight = window.innerHeight;

    if (isNaN(element.marginY)) {
      element.element.style.paddingBottom = '0px';
    } else {
      element.element.style.paddingBottom = (element.marginY * (element.items.length - 1)) + 'px';
    }

    for (var i = 0; i < element.items.length; i++) {
      element.items[i].style.transform = isNaN(element.marginY)
        ? 'none'
        : 'translateY(' + element.marginY * i + 'px)';
    }
  }

  function getIntegerFromProperty(element) {
    var node = document.createElement('div');
    node.setAttribute('style', 'opacity:0; visibility: hidden; position: absolute; height:' + element.marginY);
    element.element.appendChild(node);
    element.marginY = parseInt(getComputedStyle(node).getPropertyValue('height'));
    element.element.removeChild(node);
  }

  function animateStackCards() {
    if (isNaN(this.marginY)) {
      this.scrolling = false;
      return;
    }
    var top = this.element.getBoundingClientRect().top;

    if (this.cardTop - top + this.element.windowHeight - this.elementHeight - this.cardHeight + this.marginY + this.marginY * this.items.length > 0) {
      this.scrolling = false;
      return;
    }

    for (var i = 0; i < this.items.length; i++) {
      var scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
      var scaling = scrolling > 0 && i != this.items.length - 1
        ? (this.cardHeight - scrolling * 0.05) / this.cardHeight
        : 1;

      this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
    }

    this.scrolling = false;
  }

  // Check screen width and initialize StackCards if conditions are met
  function checkScreenWidth() {
    if (window.matchMedia("(min-width: 900px)").matches) {
      var stackCards = document.getElementsByClassName('js-stack-cards'),
          intersectionObserverSupported = 'IntersectionObserver' in window,
          reducedMotion = Util.osHasReducedMotion();

      if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
        var stackCardsArray = [];

        for (var i = 0; i < stackCards.length; i++) {
          stackCardsArray.push(new StackCards(stackCards[i]));
        }

        var resizingId = false,
            customEvent = new CustomEvent('resize-stack-cards');

        window.addEventListener('resize', function() {
          clearTimeout(resizingId);
          resizingId = setTimeout(function() {
            stackCardsArray.forEach(function(card) {
              card.element.dispatchEvent(customEvent);
            });
          }, 500);
        });
      }
    }
  }

  // Run on load and on window resize
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
})();
