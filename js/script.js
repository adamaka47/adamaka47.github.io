"use strict";

document.body.style.overflow = "hidden";

const footerCopy = document.querySelector('.footer-copy .date')
footerCopy.textContent = new Date().getFullYear()

function wowAnim(elem) {
  document.querySelector(elem).classList.remove("disanim45");
  document.querySelector(elem).classList.add("anim45");
}

function randomColor(argument_0, argument_1) {
  var min = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : 0,
      max = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : 255,
      r = Math.floor(Math.random() * (max - min + 1)),
      g = Math.floor(Math.random() * (max - min + 1)),
      b = Math.floor(Math.random() * (max - min + 1));
  return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
}

function anim(e) {
  var span = this.querySelector("span"),
      x = e.offsetX,
      y = e.offsetY,
      xMove = x / this.offsetWidth * 20 - 10,
      yMove = y / this.offsetHeight * 20 - 10;
  span.style.transform = "translate(".concat(xMove, "px, ").concat(yMove, "px)"), "mouseleave" === e.type && (span.style.transform = "");
}

function addZero(n) {
  return n <= 9 && (n = "0" + n), "" + n;
}

document.addEventListener("DOMContentLoaded", function (e) {
  var i = 0,
      f = i,
      b = !0,
      btn = document.getElementsByClassName("header-btn")[1],
      btn2 = document.getElementsByClassName("header-btn")[0],
      hambBtn = document.querySelector(".header__btn"),
      aboutBtn = document.querySelector(".about__btn"),
      circle = document.querySelector(".ring__circle"),
      circles = document.querySelectorAll(".ring__circle"),
      span = document.querySelectorAll(".skills-circle__num"),
      R = circle.r.baseVal.value,
      circumFerence = 2 * Math.PI * R,
      navLinks = document.querySelectorAll(".footer-nav__link"),
      headerLinks = document.querySelectorAll(".header-list__link"),
      mobileLinks = document.querySelectorAll(".mobile-list__link"),
      lastScroll = 0,
      c = 0;

  function cartOut(e, x) {
    event.target.style.transform = "skewX(".concat(x, "deg) rotateX(0) rotateY(0)");
  }

  function cartMove(e) {
    var tg = e.target,
        halfH = this.offsetHeight / 2,
        halfW = this.offsetWidth / 2;
    (tg.classList.contains("skills-tech") || "svg" === tg.tagName.toLowerCase() || "path" === tg.tagName.toLowerCase() || "g" === tg.tagName.toLowerCase() || "p" === tg.tagName.toLowerCase() || "h5" === tg.tagName.toLowerCase() || tg.classList.contains("skills-tech__img")) && (this.style.transform = "skewX(3deg) rotateX(".concat(-(e.offsetY - halfH) / 10, "deg) rotateY(").concat((event.offsetX - halfW) / 5, "deg)"));
  }

  function cartMoveSec(e) {
    var tg = e.target,
        halfH = this.offsetHeight / 2,
        halfW = this.offsetWidth / 2;
    (tg.classList.contains("skills-tech") || "svg" === tg.tagName.toLowerCase() || "path" === tg.tagName.toLowerCase() || "g" === tg.tagName.toLowerCase() || "p" === tg.tagName.toLowerCase() || "h5" === tg.tagName.toLowerCase() || tg.classList.contains("skills-tech__img")) && (this.style.transform = "skewX(-3deg) rotateX(".concat(-(e.offsetY - halfH) / 10, "deg) rotateY(").concat((event.offsetX - halfW) / 5, "deg)"));
  }

  document.querySelectorAll(".skills-tech-ones").forEach(function (item) {
    item.addEventListener("mousemove", cartMove), item.addEventListener("mouseleave", function (e) {
      cartOut(0, 3);
    });
  }), document.querySelector(".header-btn_trans").addEventListener("click", function (e) {
    document.querySelector(".video").classList.toggle("checks"), document.body.style.overflow = "hidden";
  }), f++, document.querySelector(".header-btn_first").addEventListener("click", function (e) {
    document.querySelector(".message-w").innerHTML = "";
    var msg = document.createElement("span");
    msg.textContent = "Лень x" + f, msg.style.backgroundColor = randomColor(0, 255), msg.style.color = randomColor(0, 255), msg.style.textShadow = "0px 1px 4px ".concat(randomColor(0, 255)), f++, msg.classList.add("message"), document.querySelector(".message-w").appendChild(msg), setTimeout(function () {
      msg.classList.add("acts");
    }, 200), setTimeout(function () {
      msg.classList.remove("acts"), setTimeout(function () {
        msg.remove();
      }, 700);
    }, 4e3);
  }), document.querySelector(".video-pop__close").onclick = function (e) {
    document.querySelector(".video").classList.remove("checks"), document.body.style.overflow = "visible";
  }, navLinks.forEach(function (link) {
    return link.addEventListener("mousemove", anim);
  }), navLinks.forEach(function (link) {
    return link.addEventListener("mouseleave", anim);
  }), headerLinks.forEach(function (link) {
    return link.addEventListener("mousemove", anim);
  }), headerLinks.forEach(function (link) {
    return link.addEventListener("mouseleave", anim);
  }), document.querySelector(".header_arrow").addEventListener("click", function (e) {
    scrollTrs(this.getAttribute("href"), 1500);
  }), headerLinks.forEach(function (link) {
    return link.addEventListener("click", function () {
      try {
        scrollTrs(link.getAttribute("href"), 4e3);
      } catch (e) {
        console.warn("This is a btn to svyaz with me");
      }
    });
  }), mobileLinks.forEach(function (link) {
    return link.addEventListener("click", function () {
      scrollTrs(link.getAttribute("href"), 2500), document.querySelector(".mobile").classList.toggle("mobiled"), aboutBtn.querySelectorAll("span").forEach(function (item) {
        return item.classList.remove("ll_style");
      }), document.body.style.overflow = "visible";
    });
  }), document.querySelector(".video").addEventListener("click", function (e) {
    this.classList.toggle("checks"), document.body.style.overflow = "visible";
  }), document.querySelector(".video-pop").addEventListener("click", function (e) {
    e.stopPropagation();
  }), document.querySelector(".skills-git").onmouseenter = function (e) {
    this.querySelector("svg path").style.fill = "#af8", this.getElementsByTagName("path")[0].style.fill = "#af8", this.getElementsByTagName("path")[1].style.fill = "aqua", this.getElementsByTagName("path")[2].style.fill = "aqua";
  }, document.querySelector(".skills-git").onmouseleave = function (e) {
    this.querySelector("svg path").style.fill = "#fff", this.getElementsByTagName("path")[0].style.fill = "#fff", this.getElementsByTagName("path")[1].style.fill = "#fff", this.getElementsByTagName("path")[2].style.fill = "#fff";
  }, document.querySelector(".skill-gulp").onmouseenter = function (e) {
    this.querySelector("svg path").style.fill = "aqua";
  }, document.querySelector(".skill-gulp").onmouseleave = function (e) {
    this.querySelector("svg path").style.fill = "#ff0036";
  }, document.querySelector(".skills-jquery").onmouseenter = function (e) {
    this.querySelector("svg path").style.fill = "pink";
  }, document.querySelector(".skills-jquery").onmouseleave = function (e) {
    this.querySelector("svg path").style.fill = "orange";
  }, document.querySelector(".skills-nodejs").onmouseenter = function (e) {
    this.querySelector("svg path").style.fill = "#9d2";
  }, document.querySelector(".skills-nodejs").onmouseleave = function (e) {
    this.querySelector("svg path").style.fill = "#af8";
  }, document.querySelector(".skills-bootstrap").onmouseenter = function (e) {
    this.getElementsByTagName("path")[1].style.fill = "indigo", this.getElementsByTagName("path")[2].style.fill = "indigo";
  }, document.querySelector(".skills-bootstrap").onmouseleave = function (e) {
    this.getElementsByTagName("path")[1].style.fill = "purple", this.getElementsByTagName("path")[2].style.fill = "purple";
  }, document.querySelector(".skills-sass").onmouseenter = function (e) {
    this.getElementsByTagName("path")[0].style.fill = "aqua", this.getElementsByTagName("path")[1].style.fill = "aqua", this.getElementsByTagName("path")[2].style.fill = "aqua", this.getElementsByTagName("path")[3].style.fill = "#fff", this.getElementsByTagName("path")[4].style.fill = "#fff";
  }, document.querySelector(".skills-sass").onmouseleave = function (e) {
    this.getElementsByTagName("path")[0].style.fill = "#fff", this.getElementsByTagName("path")[1].style.fill = "#fea100", this.getElementsByTagName("path")[2].style.fill = "#fea100", this.getElementsByTagName("path")[3].style.fill = "#fff", this.getElementsByTagName("path")[4].style.fill = "#fff";
  }, document.querySelectorAll(".skills-tech-twice").forEach(function (item) {
    item.addEventListener("mousemove", cartMoveSec), item.addEventListener("mouseleave", function (e) {
      cartOut(0, -3);
    });
  });
  var spanText = document.querySelector(".about-info__title span"),
      wordsArr = ["словечек...", "слов...", "описаний...", "random..."],
      delTyping = 150,
      delErasing = 50,
      delTyping2 = 2e3,
      wordsArrayIndex = 0,
      charIndex = 0;

  function type() {
    charIndex < wordsArr[wordsArrayIndex].length ? (spanText.textContent += wordsArr[wordsArrayIndex][charIndex], charIndex++, setTimeout(type, delTyping)) : setTimeout(ers, delTyping2);
  }

  function ers() {
    0 < charIndex ? (spanText.textContent = wordsArr[wordsArrayIndex].slice(0, charIndex - 1), charIndex--, setTimeout(ers, delErasing)) : (++wordsArrayIndex >= wordsArr.length && (wordsArrayIndex = 0), setTimeout(type, delTyping + 700));
  }

  const homeLinks = document.querySelectorAll(".homeboy__list-link");
  homeLinks.forEach(link => {
    let letters = link.textContent.split("");
    link.textContent = "";
    letters.forEach((letter, i) => {
      i += 1;
      let span = document.createElement("span");
      let delay = i / 20;

      if (i % 2 === 0) {
        delay -= 0.1;
      } else {
        delay += 0.05;
      }

      let letterOut = document.createElement("span");
      letterOut.textContent = letter;
      letterOut.style.transitionDelay = `${delay}s`;
      letterOut.classList.add("oyr");
      span.append(letterOut);
      let letterIn = document.createElement("span");
      letterIn.textContent = letter;
      letterIn.style.transitionDelay = `${delay}s`;
      letterIn.classList.add("iyr");
      span.append(letterIn);
      link.append(span);
    });
  });
  const menuHomesLinks = document.querySelector('.menuhomes_btn');
  menuHomesLinks.addEventListener('click', event => {
    event.preventDefault();
    menuHomesLinks.classList.toggle('menuhomes_btn-active');
    document.querySelector('.menuhomes').classList.toggle('menuhomes_active');
  });

  document.querySelector('.homeboy-center__link').onclick = function (e) {
    e.preventDefault();
  };

  const rightLinksNum = document.querySelectorAll('.homeboy-right__link');
  rightLinksNum.forEach(item => {
    item.onclick = function (e) {
      e.preventDefault();

      for (let i = 0; i < rightLinksNum.length; i++) {
        rightLinksNum[i].classList.remove('active');
      }

      item.classList.add('active');
    };
  });
  let abc = 0;
  let cdf = 0;
  let flgns1 = true;
  let flgns2 = false;
  document.addEventListener('scroll', function (e) {
    let a = document.documentElement.scrollTop;

    if (document.querySelector('.homeboy').offsetTop - document.querySelector('.homeboy').offsetHeight < a && a < document.querySelector('.homeboy').offsetTop + document.querySelector('.homeboy').offsetHeight) {
      if (flgns1) {
        abc++;

        if (abc > 60) {
          flgns1 = false;
          flgns2 = true;
        }
      }

      if (flgns2) {
        abc--;

        if (abc < -80) {
          flgns1 = true;
          flgns2 = false;
        }
      }

      document.querySelector('.homeboy__bg').style.backgroundPosition = `${abc}px 0`;
      document.querySelectorAll('.svgQQ').forEach(item => {
        if (cdf < 750) {
          cdf++;
        } else {
          cdf = 750;
        }

        item.style.strokeDasharray = cdf * 2;
      });
    }
  });

  function scrollTrs(elem, dur) {
    var elemObjPos = document.querySelector(elem).getBoundingClientRect(),
        startPos = window.pageYOffset,
        startTime = null;
    requestAnimationFrame(function animScroll(time) {
      null === startTime && (startTime = time);
      var t,
          b,
          c,
          timeEl = time - startTime,
          runDo = (t = timeEl, b = startPos, c = elemObjPos.top - 40, (t /= dur / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : (t--, c / 2 * (2 - Math.pow(2, -10 * t)) + b));
      window.scrollTo(0, runDo), timeEl < dur && requestAnimationFrame(animScroll);
    });
  }

  document.querySelector(".about-info__text").style.visibility = "hidden", document.querySelector(".about-info__text").style.opacity = "0", document.querySelector(".about-info__text").style.transform = "translateX(-150px)", setTimeout(type, delTyping2 + 400), type(), setTimeout(function (e) {
    wowAnim(".header-menu"), wowAnim(".header__btn"), wowAnim(".header-logo"), document.querySelector(".loader").style.visibility = "hidden", document.querySelector(".loader").style.opacity = "0", document.body.style.overflow = "", Splitting();
  }, 2500), setTimeout(function () {
    wowAnim(".header-img"), wowAnim(".header-buttons");
  }, 4e3), aboutBtn.addEventListener("click", function (e) {
    document.querySelector(".mobile").classList.toggle("mobiled"), document.querySelector(".mobile").classList.contains("mobiled") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
  }), document.onscroll = function (e) {
    var needHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrollTop = document.documentElement.scrollTop;
    document.querySelector(".about").offsetTop - 550 < scrollTop && (document.querySelector(".about-info__text").style.transform = "translateX(0px)", document.querySelector(".about-info__text").style.visibility = "visible", document.querySelector(".about-info__text").style.opacity = "1"), document.querySelector(".team").offsetTop - 420 < scrollTop && wowAnim(".team_items"), document.querySelector(".skills").offsetTop - 570 < scrollTop && b && (b = !1, span.forEach(function (item) {
      var a = setInterval(function () {
        i <= parseInt(item.dataset.num) ? (item.innerHTML = i + "%", item.parentElement.querySelector(".ring__circle").style.strokeDashoffset = circumFerence - i / 100 * circumFerence, i++) : clearInterval(a);
      }, 140);
      i = 0;
    })), 580 < scrollTop ? (aboutBtn.classList.add("fixx"), aboutBtn.removeAttribute("disabled"), document.querySelector(".mwrapper").classList.add("dat")) : (aboutBtn.classList.remove("fixx"), document.querySelector(".mobile").classList.contains("mobiled") && document.querySelector(".mobile").classList.remove("mobiled"), aboutBtn.setAttribute("disabled", "disabled"), aboutBtn.querySelectorAll("span").forEach(function (item) {
      return item.classList.remove("ll_style");
    }), document.querySelector(".mwrapper").classList.remove("dat"));
    var progressW = scrollTop / needHeight * 100;
    document.querySelector(".progress").style.width = "".concat(progressW, "%");
  }, aboutBtn.onclick = function () {
    this.querySelectorAll("span").forEach(function (item) {
      return item.classList.toggle("ll_style");
    });
  }, hambBtn.addEventListener("click", function () {
    this.querySelectorAll("span").forEach(function (item) {
      return item.classList.toggle("act");
    }), document.querySelector("header").classList.toggle("menuActive"), this.querySelector("span").classList.contains("act") ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
  }), btn.onclick = function (e) {
    var circle = document.createElement("div");
    btn.innerHTML = "Просмотр", circle.classList.add("anim");
    var rect = this.getBoundingClientRect(),
        maxProp = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = maxProp + "px", circle.style.left = e.clientX - rect.left - maxProp / 2 + "px", circle.style.top = e.clientY - rect.top - maxProp / 2 + "px", this.appendChild(circle);
  }, btn2.onclick = function (e) {
    var circle = document.createElement("div");
    btn2.innerHTML = "Подробнее", circle.classList.add("anim");
    var rect = this.getBoundingClientRect(),
        maxProp = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = maxProp + "px", circle.style.left = e.clientX - rect.left - maxProp / 2 + "px", circle.style.top = e.clientY - rect.top - maxProp / 2 + "px", this.appendChild(circle);
  }, circles.forEach(function (item) {
    item.style.strokeDasharray = "".concat(circumFerence, " ").concat(circumFerence), item.style.strokeDashoffset = circumFerence;
  }), document.querySelector(".form").addEventListener("submit", function (e) {
    alert("К сожалению, гитхаб не поддерживает PHP :c"), e.preventDefault();
  });

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  var animationState = {
    counter: 0,
    updateRate: 10,
    origin: [],
    isTimeToUpdate: function isTimeToUpdate() {
      return animationState.counter++ % animationState.updateRate === 0;
    }
  };

  function handleMouseEnter(event) {
    var targetBounds = event.target.getBoundingClientRect();
    animationState.origin = [targetBounds.x + Math.floor(targetBounds.width / 2), targetBounds.y + Math.floor(targetBounds.height / 2)];
  }

  var offsetX, offsetY;

  function handleMouseMove(event) {
    if (!animationState.isTimeToUpdate()) {
      return;
    }

    offsetX = Math.floor((event.clientX - animationState.origin[0]) / 2);
    offsetY = Math.floor((event.clientY - animationState.origin[1]) / 2);
    event.target.children[0].style["transform"] = "rotate(".concat(-offsetX / 10, "deg) translate3d(").concat(offsetX, "px, ").concat(offsetY, "px, 0)");
    event.target.children[2].style["transform"] = "translate3d(".concat(-offsetX, "px, ").concat(-offsetY, "px, 0)");
    event.target.children[1].style["transform"] = "rotate(".concat(-offsetX / 2, "deg) translate3d(").concat(offsetX, "px, ").concat(offsetY, "px, 0)");
  }

  function handleMouseOut(event) {
    event.target.children[0].style.transform = "";
    event.target.children[1].style.transform = "";
    event.target.children[2].style.transform = "";
    animationState.counter = 0;
  }

  var photoContainers = _toConsumableArray(document.querySelectorAll(".portfolio-list__link"));

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = photoContainers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pc = _step.value;
      pc.addEventListener("mouseenter", function (event) {
        return handleMouseEnter(event);
      });
      pc.addEventListener("mousemove", function (event) {
        return handleMouseMove(event);
      });
      pc.addEventListener("mouseout", function (event) {
        return handleMouseOut(event);
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});