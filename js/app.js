AOS.init();

window.addEventListener("load", function () {

  console.log("content loaded");

  let e = document.getElementById("header");
  window.addEventListener("scroll", function s() {
    window.scrollY > 0
      ? (e.classList.remove("bg-transparent"), e.classList.add("bg-[#F6E0ED]"), e.classList.add("bg-[shadow-lg]"))
      : (e.classList.remove("bg-[#F6E0ED]"), e.classList.remove("shadow-lg"), e.classList.add("bg-transparent"));
  });

  var isLast = function (word) {
    return $(word).next().length > 0 ? false : true;
  }

  var getNext = function (word) {
    return $(word).next();
  }

  var getVisible = function () {
    return document.getElementsByClassName('is-visible');
  }

  var getFirst = function () {
    var node = $('.words-wrapper').children().first();
    return node;
  }

  var switchWords = function (current, next) {
    $(current).removeClass('is-visible').addClass('is-hidden');
    $(next).removeClass('is-hidden').addClass('is-visible');
  }

  var getStarted = function () {
    //We start by getting the visible element and its sibling
    var first = getVisible();
    var next = getNext(first);

    //If our element has a sibling, it's not the last of the list. We switch the classes
    if (next.length !== 0) {
      switchWords(first, next);
    } else {

      //The element is the last of the list. We remove the visible class of the current element
      $(first).removeClass('is-visible').addClass('is-hidden');

      //And we get the first element of the list, and we give it the visible class. And it starts again.
      var newEl = getFirst();
      $(newEl).removeClass('is-hidden').addClass('is-visible');
    }

  }

  var init = function () {
    setInterval(function () { getStarted() }, 2000);
  }

  init();
}),


  function hamburger() {
    var e = document.getElementById("body"),
      s = document.getElementById("hamburger"),
      t = document.getElementById("hamburger_content");
    s.onclick &&
      (t.classList.contains("invisible")
        ? (t.classList.remove("invisible"), t.classList.add("flex"), e.classList.add("overflow-y-hidden"), e.classList.add("h-[100%]"))
        : (t.classList.add("invisible"), t.classList.remove("flex"), e.classList.remove("overflow-y-hidden"), e.classList.remove("h-[100%]")));
  }

var splide = new Splide('.splide', {
  perPage: 4,
  perMove: 1,
  gap: '1rem',
  padding: '3rem',
  // type: 'loop',
  lazyLoad: 'nearby',
  cover: true,
  drag: 'free',
  snap: true,
  autoplay: false,
  arrows: true,
  pagination: true,
  breakpoints: {
    640: {
      perPage: 1,
      gap: '.7rem',
      padding: '1rem'

    },
    480: {
      perPage: 1,
      gap: '.7rem',
      padding: '1rem'

    },
    1200: {
      perPage: 2,
      gap: '.7rem',
      padding: '1rem'

    },
    1650: {
      perPage: 3,
      gap: '.7rem',
      padding: '1rem'

    },
  },
});

splide.mount();
