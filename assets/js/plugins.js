/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 */
!(function ($) {
  "use strict";
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = ".meanmenu-reveal",
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var w = "",
        x = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (w = "left:" + n + ";right:auto;"),
              C
                ? jQuery(".meanmenu-reveal").animate({ left: n })
                : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        A = !1,
        E = !1;
      "right" === u && (w = "right:" + m + ";left:auto;"),
        "left" === u && (w = "left:" + m + ";right:auto;"),
        x();
      var M = "",
        P = function () {
          M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        W = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(t).removeClass("mean-container"),
            jQuery(n).css("display", g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var e = "background:" + l + ";color:" + l + ";" + w;
          if (o >= a) {
            jQuery(p).addClass("mean-remove"),
              (E = !0),
              jQuery(t).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(n).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery(".mean-nav ul").hide(),
              h
                ? d
                  ? (jQuery(".mean-nav ul ul").each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '">' +
                              y +
                              "</a>"
                          );
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(".mean-nav ul ul").show()
                : jQuery(".mean-nav ul ul").hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              M.removeClass("meanclose"),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css("text-align", "center"),
                      M.css("text-indent", "0"),
                      M.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (A = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (A = !1)),
                  M.toggleClass("meanclose"),
                  P(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on(
                  "click",
                  function () {
                    jQuery(".mean-nav ul:first").slideUp(),
                      (A = !1),
                      jQuery(M).toggleClass("meanclose").html(s);
                  }
                );
          } else W();
        };
      C ||
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            a > o,
            W(),
            o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C
              ? (x(), o >= a ? E === !1 && b() : W())
              : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/*
 Slick Slider
 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/*jquery.mb.YTPlayer 12-01-2022
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2022. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */

var ytp = ytp || {};
let YTPRndSuffix = new Date().getTime(),
  YTPTimerLabels = {
    init: "YTPlayerInit_" + YTPRndSuffix,
    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix,
  };
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady ||
    ((ytp.YTAPIReady = !0), jQuery(document).trigger("YTAPIReady"));
}
let getYTPVideoID = function (e) {
  let r, t;
  return (
    e.indexOf("youtu.be") > 0 || e.indexOf("youtube.com/embed") > 0
      ? (r = (t =
          (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0
            ? r.substr(r.lastIndexOf("="), r.length)
            : null)
          ? r.substr(0, r.lastIndexOf("?"))
          : r)
      : e.indexOf("http") > -1
      ? ((r = e.match(/[\\?&]v=([^&#]*)/)[1]),
        (t = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null))
      : (t = (r = e.length > 15 ? null : e) ? null : e),
    { videoID: r, playlistID: t }
  );
};
!(function (jQuery, ytp) {
  (jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.3.9",
    build: "7619",
    author: "Matteo Bicocchi (pupunzi)",
    apiKey: "",
    defaults: {
      videoURL: null,
      containment: "body",
      ratio: "auto",
      fadeOnStartTime: 1e3,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      delayAtStart: 1e3,
      coverImage: !1,
      loop: !0,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "hd1080",
      vol: 50,
      mute: !1,
      showControls: !0,
      anchor: "center,center",
      showAnnotations: !1,
      cc_load_policy: !1,
      showYTLogo: !0,
      useOnMobile: !0,
      playOnlyIfVisible: !1,
      onScreenPercentage: 30,
      goFullScreenOnPlay: !1,
      stopMovieOnBlur: !0,
      realFullscreen: !0,
      optimizeDisplay: !0,
      abundance: 0.3,
      gaTrack: !0,
      remember_last_time: !1,
      addFilters: !1,
      useNoCookie: !0,
      onReady: function (e) {},
      onError: function (e, r) {},
      onEnd: function () {},
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y",
    },
    controlBar: null,
    locationProtocol: "https:",
    defaultFilters: {
      grayscale: { value: 0, unit: "%" },
      hue_rotate: { value: 0, unit: "deg" },
      invert: { value: 0, unit: "%" },
      opacity: { value: 0, unit: "%" },
      saturate: { value: 0, unit: "%" },
      sepia: { value: 0, unit: "%" },
      brightness: { value: 0, unit: "%" },
      contrast: { value: 0, unit: "%" },
      blur: { value: 0, unit: "px" },
    },
    buildPlayer: function (options) {
      if (ytp.YTAPIReady || void 0 !== window.YT)
        setTimeout(function () {
          jQuery(document).trigger("YTAPIReady"), (ytp.YTAPIReady = !0);
        }, 100);
      else {
        jQuery("#YTAPI").remove();
        let e = jQuery("<script>").attr({
          src: "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
          id: "YTAPI",
          async: "async",
          defer: !0,
        });
        jQuery("head").append(e);
      }
      function isIframe() {
        let e = !1;
        try {
          self.location.href !== top.location.href && (e = !0);
        } catch (r) {
          e = !0;
        }
        return e;
      }
      return this.each(function () {
        let YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        $YTPlayer.hide(),
          (YTPlayer.loop = 0),
          (YTPlayer.state = 0),
          (YTPlayer.filters = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaultFilters
          )),
          (YTPlayer.filtersEnabled = !0),
          (YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime()),
          $YTPlayer.addClass("mb_YTPlayer");
        let property =
          $YTPlayer.data("property") &&
          "string" == typeof $YTPlayer.data("property")
            ? eval("(" + $YTPlayer.data("property") + ")")
            : $YTPlayer.data("property");
        "object" != typeof property && (property = {}),
          (YTPlayer.opt = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaults,
            YTPlayer.opt,
            options,
            property
          )),
          (YTPRndSuffix = getYTPVideoID(YTPlayer.opt.videoURL).videoID),
          (YTPTimerLabels = {
            init: "YTPlayerInit_" + YTPRndSuffix,
            startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix,
          }),
          console.time(YTPTimerLabels.init),
          console.time(YTPTimerLabels.startPlaying),
          (YTPlayer.opt.elementId = YTPlayer.id),
          0 === YTPlayer.opt.vol &&
            ((YTPlayer.opt.vol = 1), (YTPlayer.opt.mute = !0)),
          YTPlayer.opt.loop &&
            "boolean" == typeof YTPlayer.opt.loop &&
            (YTPlayer.opt.loop = 9999);
        let fullScreenAvailable =
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled;
        (YTPlayer.opt.realFullscreen =
          !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen),
          (YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
            ? "1"
            : "3"),
          (YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy
            ? "1"
            : "0"),
          (YTPlayer.opt.coverImage =
            YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage),
          (YTPlayer.opt.quality = "hd1080"),
          jQuery.mbBrowser.msie &&
            jQuery.mbBrowser.version < 9 &&
            (YTPlayer.opt.opacity = 1),
          (YTPlayer.opt.containment =
            "self" === YTPlayer.opt.containment
              ? $YTPlayer
              : jQuery(YTPlayer.opt.containment)),
          (YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1),
          (YTPlayer.opt.ratio =
            "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio));
        let origContainmentBackground =
          YTPlayer.opt.containment.css("background-image");
        (origContainmentBackground =
          "none" === origContainmentBackground
            ? null
            : origContainmentBackground),
          (YTPlayer.orig_containment_background = origContainmentBackground),
          $YTPlayer.attr("id") ||
            $YTPlayer.attr("id", "ytp_" + new Date().getTime()),
          (YTPlayer.playerID = "iframe_" + YTPlayer.id),
          (YTPlayer.isAlone = !1),
          (YTPlayer.hasFocus = !0),
          (YTPlayer.videoID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).videoID
            : !!$YTPlayer.attr("href") &&
              getYTPVideoID($YTPlayer.attr("href")).videoID),
          (YTPlayer.playlistID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID
            : !!$YTPlayer.attr("href") &&
              getYTPVideoID($YTPlayer.attr("href")).playlistID);
        let start_from_last = 0;
        if (
          (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) &&
            (start_from_last = parseFloat(
              jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)
            )),
          YTPlayer.opt.remember_last_time &&
            start_from_last &&
            ((YTPlayer.start_from_last = start_from_last),
            jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)),
          (YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment)),
          (YTPlayer.isBackground = YTPlayer.opt.containment.is("body")),
          YTPlayer.isBackground && ytp.backgroundIsInited)
        )
          return;
        if (
          (YTPlayer.isPlayer && $YTPlayer.show(),
          (YTPlayer.overlay = jQuery("<div/>")
            .css({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            })
            .addClass("YTPOverlay")),
          $YTPlayer.changeCoverImage(),
          (YTPlayer.wrapper = jQuery("<div/>")
            .attr("id", "wrapper_" + YTPlayer.id)
            .css({
              position: "absolute",
              zIndex: 0,
              minWidth: "100%",
              minHeight: "100%",
              left: 0,
              top: 0,
              overflow: "hidden",
              opacity: 0,
            })
            .addClass("mbYTP_wrapper")),
          YTPlayer.isPlayer)
        ) {
          let e = jQuery.mbBrowser.mobile
            ? "inlinePlayButtonMobile"
            : "inlinePlayButton";
          (YTPlayer.inlinePlayButton = jQuery("<div/>")
            .addClass("inlinePlayButton")
            .html(jQuery.mbYTPlayer.controls.play)),
            $YTPlayer.append(YTPlayer.inlinePlayButton),
            YTPlayer.inlinePlayButton.on("click", function (e) {
              $YTPlayer.YTPPlay(),
                YTPlayer.inlinePlayButton.hide(),
                YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen(),
                e.stopPropagation();
            }),
            YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(),
            YTPlayer.overlay
              .on("click", function () {
                $YTPlayer.YTPTogglePlay(),
                  YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen();
              })
              .css({ cursor: "pointer" });
        }
        let playerBox = jQuery("<div/>")
          .attr("id", YTPlayer.playerID)
          .addClass("playerBox");
        if (
          (playerBox.css({
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden",
            opacity: 1,
          }),
          YTPlayer.wrapper.append(playerBox),
          playerBox.after(YTPlayer.overlay),
          YTPlayer.isPlayer &&
            ((YTPlayer.inlineWrapper =
              jQuery("<div/>").addClass("inline-YTPlayer")),
            YTPlayer.inlineWrapper.css({
              position: "relative",
              maxWidth: YTPlayer.opt.containment.css("width"),
            }),
            YTPlayer.opt.containment.css({
              position: "relative",
              paddingBottom: "56.25%",
              overflow: "hidden",
              height: 0,
            }),
            YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),
          YTPlayer.opt.containment
            .children()
            .not("script, style")
            .each(function () {
              "static" === jQuery(this).css("position") &&
                jQuery(this).css("position", "relative");
            }),
          YTPlayer.isBackground
            ? (jQuery("body").css({ boxSizing: "border-box" }),
              YTPlayer.wrapper.css({
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 0,
              }))
            : "static" === YTPlayer.opt.containment.css("position") &&
              (YTPlayer.opt.containment.css({ position: "relative" }),
              $YTPlayer.show()),
          YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
          YTPlayer.isBackground ||
            YTPlayer.overlay
              .on("mouseenter", function () {
                YTPlayer.controlBar &&
                  YTPlayer.controlBar.length &&
                  YTPlayer.controlBar.addClass("visible");
              })
              .on("mouseleave", function () {
                YTPlayer.controlBar &&
                  YTPlayer.controlBar.length &&
                  YTPlayer.controlBar.removeClass("visible");
              }),
          jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile)
        )
          return (
            YTPlayer.opt.coverImage &&
              (YTPlayer.wrapper.css({
                backgroundImage: "url(" + YTPlayer.opt.coverImage + ")",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: 1,
              }),
              YTPlayer.wrapper.css({ opacity: 1 })),
            $YTPlayer
          );
        jQuery.mbBrowser.mobile &&
          YTPlayer.opt.autoPlay &&
          YTPlayer.opt.useOnMobile &&
          jQuery("body").one("touchstart", function () {
            YTPlayer.player.playVideo();
          }),
          jQuery(document).one("YTAPIReady", function () {
            $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id),
              (ytp.YTAPIReady = !0);
          }),
          (YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(
            YTPlayer,
            YTPlayer.opt.onScreenPercentage
          )),
          $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
            let e = this,
              r = jQuery(e);
            (e.isBackground && ytp.backgroundIsInited) ||
              e.isInit ||
              (e.isBackground && (ytp.backgroundIsInited = !0),
              (e.opt.autoPlay =
                void 0 === e.opt.autoPlay ? !!e.isBackground : e.opt.autoPlay),
              (e.opt.vol = e.opt.vol ? e.opt.vol : 100),
              jQuery.mbYTPlayer.getDataFromAPI(e),
              jQuery(e).on("YTPChanged", function (t) {
                if (e.isInit) return;
                e.isInit = !0;
                let a = {
                  modestbranding: 1,
                  autoplay: 0,
                  controls: 0,
                  showinfo: 0,
                  rel: 0,
                  enablejsapi: 1,
                  version: 3,
                  playerapiid: e.playerID,
                  origin: "*",
                  allowfullscreen: !0,
                  wmode: "transparent",
                  iv_load_policy: e.opt.showAnnotations,
                  cc_load_policy: e.opt.cc_load_policy,
                  playsinline: jQuery.mbBrowser.mobile && !e.isPlayer ? 1 : 0,
                  html5: document.createElement("video").canPlayType ? 1 : 0,
                };
                new YT.Player(e.playerID, {
                  host: e.opt.useNoCookie
                    ? "https://www.youtube-nocookie.com"
                    : "https://www.youtube.com",
                  playerVars: a,
                  events: {
                    onReady: function (t) {
                      (e.player = t.target),
                        e.player.loadVideoById({
                          videoId: e.videoID.toString(),
                          suggestedQuality: e.opt.quality,
                        }),
                        r.trigger("YTPlayerIsReady_" + e.id);
                    },
                    onStateChange: function (r) {
                      if ("function" != typeof r.target.getPlayerState) return;
                      let t,
                        a = r.target.getPlayerState();
                      if (e.preventTrigger || e.isStarting)
                        return void (e.preventTrigger = !1);
                      switch (
                        ((e.state = a),
                        r.data === YT.PlayerState.PLAYING &&
                          r.target.setPlaybackQuality(e.opt.quality),
                        a)
                      ) {
                        case -1:
                          t = "YTPUnstarted";
                          break;
                        case 0:
                          t = "YTPRealEnd";
                          break;
                        case 1:
                          (t = "YTPPlay"),
                            e.controlBar.length &&
                              e.controlBar
                                .find(".mb_YTPPlayPause")
                                .html(jQuery.mbYTPlayer.controls.pause),
                            e.isPlayer && e.inlinePlayButton.hide(),
                            jQuery(document).off("mousedown.YTPstart");
                          break;
                        case 2:
                          (t = "YTPPause"),
                            e.controlBar.length &&
                              e.controlBar
                                .find(".mb_YTPPlayPause")
                                .html(jQuery.mbYTPlayer.controls.play),
                            e.isPlayer && e.inlinePlayButton.show();
                          break;
                        case 3:
                          e.player.setPlaybackQuality(e.opt.quality),
                            (t = "YTPBuffering"),
                            e.controlBar.length &&
                              e.controlBar
                                .find(".mb_YTPPlayPause")
                                .html(jQuery.mbYTPlayer.controls.play);
                          break;
                        case 5:
                          t = "YTPCued";
                      }
                      let o = jQuery.Event(t);
                      (o.time = e.currentTime), jQuery(e).trigger(o);
                    },
                    onPlaybackQualityChange: function (r) {
                      let t = r.target.getPlaybackQuality(),
                        a = jQuery.Event("YTPQualityChange");
                      (a.quality = t), jQuery(e).trigger(a);
                    },
                    onError: function (t) {
                      switch (
                        ("function" == typeof e.opt.onError &&
                          e.opt.onError(r, t),
                        console.debug("error:", t),
                        t.data)
                      ) {
                        case 2:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks."
                          );
                          break;
                        case 5:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred."
                          );
                          break;
                        case 100:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private."
                          );
                          break;
                        case 101:
                        case 150:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The video doesn't exist or The owner does not allow it to be played in embedded players."
                          );
                      }
                      e.isList && jQuery(e).YTPPlayNext();
                    },
                  },
                }),
                  r.on("YTPlayerIsReady_" + e.id, function () {
                    if (e.isReady) return this;
                    (e.playerEl = e.player.getIframe()),
                      jQuery(e.playerEl).unselectable(),
                      r.optimizeDisplay(),
                      jQuery(window)
                        .off("resize.YTP_" + e.id)
                        .on("resize.YTP_" + e.id, function () {
                          r.optimizeDisplay();
                        }),
                      jQuery(window)
                        .off("orientationchange.YTP_" + e.id)
                        .on("orientationchange.YTP_" + e.id, function () {
                          r.optimizeDisplay();
                        }),
                      e.opt.remember_last_time &&
                        jQuery(window).on("unload.YTP_" + e.id, function () {
                          let r = e.player.getCurrentTime();
                          jQuery.mbCookie.set(
                            "YTPlayer_start_from" + e.videoID,
                            r,
                            0
                          );
                        }),
                      r.YTPCheckForState();
                  });
              }));
          }),
          $YTPlayer.off("YTPTime.mask"),
          jQuery.mbYTPlayer.applyMask(YTPlayer),
          console.timeEnd(YTPTimerLabels.init),
          setTimeout(function () {
            ytp.YTAPIReady ||
              "object" != typeof window.YT ||
              (jQuery(document).trigger("YTAPIReady"),
              (ytp.YTAPIReady = !0),
              console.error(
                "YTPlayer: More then a call to the YT API has been detected"
              ));
          }, YTPlayer.opt.delayAtStart);
      });
    },
    isOnScreen: function (e, r) {
      r = r || 10;
      let t = e.wrapper,
        a = jQuery(window).scrollTop(),
        o = a + jQuery(window).height(),
        n = (t.height() * r) / 100,
        i = t.offset().top + n;
      return t.offset().top + (t.height() - n) <= o && i >= a;
    },
    getDataFromAPI: function (e) {
      (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID)),
        e.videoData
          ? (setTimeout(function () {
              e.dataReceived = !0;
              let r = jQuery.Event("YTPChanged");
              (r.time = e.currentTime),
                (r.videoId = e.videoID),
                (r.opt = e.opt),
                jQuery(e).trigger(r);
              let t = jQuery.Event("YTPData");
              t.prop = {};
              for (let r in e.videoData)
                e.videoData.hasOwnProperty(r) && (t.prop[r] = e.videoData[r]);
              jQuery(e).trigger(t);
            }, e.opt.fadeOnStartTime),
            (e.hasData = !0))
          : jQuery.mbYTPlayer.apiKey
          ? jQuery
              .getJSON(
                "https://www.googleapis.com/youtube/v3/videos?id=" +
                  e.videoID +
                  "&key=" +
                  jQuery.mbYTPlayer.apiKey +
                  "&part=snippet",
                function (r) {
                  e.dataReceived = !0;
                  let t = jQuery.Event("YTPChanged");
                  (t.time = e.currentTime),
                    (t.videoId = e.videoID),
                    jQuery(e).trigger(t),
                    r.items[0]
                      ? (!(function (r) {
                          (e.videoData = {}),
                            (e.videoData.id = e.videoID),
                            (e.videoData.channelTitle = r.channelTitle),
                            (e.videoData.title = r.title),
                            (e.videoData.description =
                              r.description.length < 400
                                ? r.description
                                : r.description.substring(0, 400) + " ..."),
                            (e.videoData.thumb_max = r.thumbnails.maxres
                              ? r.thumbnails.maxres.url
                              : null),
                            (e.videoData.thumb_high = r.thumbnails.high
                              ? r.thumbnails.high.url
                              : null),
                            (e.videoData.thumb_medium = r.thumbnails.medium
                              ? r.thumbnails.medium.url
                              : null),
                            jQuery.mbStorage.set(
                              "YTPlayer_data_" + e.videoID,
                              e.videoData
                            );
                        })(r.items[0].snippet),
                        (e.hasData = !0))
                      : ((e.videoData = {}), (e.hasData = !1));
                  let a = jQuery.Event("YTPData");
                  a.prop = {};
                  for (let r in e.videoData) a.prop[r] = e.videoData[r];
                  jQuery(e).trigger(a);
                }
              )
              .fail(function (r) {
                console.error("YT data error:: ", r), (e.hasData = !1);
                let t = jQuery.Event("YTPChanged");
                (t.time = e.currentTime),
                  (t.videoId = e.videoID),
                  jQuery(e).trigger(t);
              })
          : (setTimeout(function () {
              let r = jQuery.Event("YTPChanged");
              (r.time = e.currentTime),
                (r.videoId = e.videoID),
                jQuery(e).trigger(r);
            }, 10),
            (e.videoData = null)),
        (e.opt.ratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio),
        e.isPlayer &&
          !e.opt.autoPlay &&
          ((e.loading = jQuery("<div/>")
            .addClass("loading")
            .html("Loading")
            .hide()),
          jQuery(e).append(e.loading),
          e.loading.fadeIn());
    },
    removeStoredData: function () {
      jQuery.mbStorage.remove();
    },
    getVideoData: function () {
      return this.get(0).videoData;
    },
    getVideoID: function () {
      return this.get(0).videoID || !1;
    },
    getPlaylistID: function () {
      return this.get(0).playlistID || !1;
    },
    setVideoQuality: function (e) {
      let r = this.get(0),
        t = r.player.getCurrentTime();
      return (
        jQuery(r).YTPPause(),
        (r.opt.quality = e),
        r.player.setPlaybackQuality(e),
        r.player.seekTo(t),
        jQuery(r).YTPPlay(),
        this
      );
    },
    getVideoQuality: function () {
      return this.get(0).player.getPlaybackQuality();
    },
    playlist: function (e, r, t) {
      let a = this.get(0);
      return (
        (a.isList = !0),
        r && (e = jQuery.shuffle(e)),
        a.videoID ||
          ((a.videos = e),
          (a.videoCounter = 1),
          (a.videoLength = e.length),
          jQuery(a).data("property", e[0]),
          jQuery(a).YTPlayer()),
        "function" == typeof t &&
          jQuery(a).on("YTPChanged", function () {
            t(a);
          }),
        jQuery(a).on("YTPEnd", function () {
          jQuery(a).YTPPlayNext();
        }),
        this
      );
    },
    playNext: function () {
      let e = this.get(0);
      return (
        e.videoCounter++,
        e.videoCounter > e.videoLength && (e.videoCounter = 1),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playPrev: function () {
      let e = this.get(0);
      return (
        e.videoCounter--,
        e.videoCounter <= 0 && (e.videoCounter = e.videoLength),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playIndex: function (e) {
      let r = this.get(0);
      r.checkForStartAt &&
        (clearInterval(r.checkForStartAt), clearInterval(r.getState)),
        (r.videoCounter = e),
        r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
      let t = r.videos[r.videoCounter - 1];
      return jQuery(r).YTPChangeVideo(t), this;
    },
    changeVideo: function (e) {
      let r = this,
        t = r.get(0);
      (t.opt.startAt = 0),
        (t.opt.stopAt = 0),
        (t.opt.mask = !1),
        (t.opt.mute = !0),
        (t.opt.autoPlay = !0),
        (t.opt.addFilters = !1),
        (t.opt.coverImage = !1),
        (t.hasData = !1),
        (t.hasChanged = !0),
        (t.player.loopTime = void 0),
        e && jQuery.extend(t.opt, e),
        (t.videoID = getYTPVideoID(t.opt.videoURL).videoID),
        t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999),
        t.wrapper.css({ background: "none" }),
        jQuery(t.playerEl).CSSAnimate(
          { opacity: 0 },
          t.opt.fadeOnStartTime,
          function () {
            jQuery.mbYTPlayer.getDataFromAPI(t),
              r
                .YTPGetPlayer()
                .loadVideoById({
                  videoId: t.videoID,
                  suggestedQuality: t.opt.quality,
                }),
              r.YTPPause(),
              r.optimizeDisplay(),
              t.checkForStartAt &&
                (clearInterval(t.checkForStartAt), clearInterval(t.getState)),
              r.YTPCheckForState();
          }
        );
      let a = jQuery.Event("YTPChangeVideo");
      return (
        (a.time = t.currentTime),
        jQuery(t).trigger(a),
        jQuery.mbYTPlayer.applyMask(t),
        this
      );
    },
    getPlayer: function () {
      let e = this.get(0);
      return e.isReady ? e.player : null;
    },
    playerDestroy: function () {
      let e = this.get(0);
      return e.isReady
        ? ((ytp.YTAPIReady = !0),
          (ytp.backgroundIsInited = !1),
          (e.isInit = !1),
          (e.videoID = null),
          (e.isReady = !1),
          e.wrapper.remove(),
          jQuery("#controlBar_" + e.id).remove(),
          clearInterval(e.checkForStartAt),
          clearInterval(e.getState),
          this)
        : this;
    },
    fullscreen: function (real) {
      let YTPlayer = this.get(0);
      void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
      let controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isPlayer
          ? YTPlayer.opt.containment
          : YTPlayer.wrapper;
      if (real) {
        let e = jQuery.mbBrowser.mozilla
          ? "mozfullscreenchange"
          : jQuery.mbBrowser.webkit
          ? "webkitfullscreenchange"
          : "fullscreenchange";
        jQuery(document)
          .off(e)
          .on(e, function () {
            RunPrefixMethod(document, "IsFullScreen") ||
            RunPrefixMethod(document, "FullScreen")
              ? jQuery(YTPlayer).trigger("YTPFullScreenStart")
              : ((YTPlayer.isAlone = !1),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                videoWrapper.removeClass("YTPFullscreen"),
                videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 }),
                YTPlayer.isBackground
                  ? jQuery("body").after(controls)
                  : YTPlayer.wrapper.before(controls),
                jQuery(window).resize(),
                jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
          });
      }
      if (YTPlayer.isAlone)
        jQuery(document).off("mousemove.YTPlayer"),
          clearTimeout(YTPlayer.hideCursor),
          YTPlayer.overlay.css({ cursor: "auto" }),
          real
            ? cancelFullscreen()
            : (videoWrapper.CSSAnimate(
                { opacity: YTPlayer.opt.opacity },
                YTPlayer.opt.fadeOnStartTime
              ),
              videoWrapper.css({ zIndex: 0 })),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
          (YTPlayer.isAlone = !1);
      else {
        function hideMouse() {
          YTPlayer.overlay.css({ cursor: "none" });
        }
        jQuery(document).on("mousemove.YTPlayer", function (e) {
          YTPlayer.overlay.css({ cursor: "auto" }),
            clearTimeout(YTPlayer.hideCursor),
            jQuery(e.target).parents().is(".mb_YTPBar") ||
              (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
        }),
          hideMouse(),
          real
            ? (videoWrapper.css({ opacity: 0 }),
              videoWrapper.addClass("YTPFullscreen"),
              launchFullscreen(videoWrapper.get(0)),
              setTimeout(function () {
                videoWrapper.CSSAnimate(
                  { opacity: 1 },
                  2 * YTPlayer.opt.fadeOnStartTime
                ),
                  videoWrapper.append(controls),
                  jQuery(YTPlayer).optimizeDisplay(),
                  YTPlayer.player.seekTo(
                    YTPlayer.player.getCurrentTime() + 0.1,
                    !0
                  );
              }, YTPlayer.opt.fadeOnStartTime))
            : videoWrapper
                .css({ zIndex: 1e4 })
                .CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
          (YTPlayer.isAlone = !0);
      }
      function RunPrefixMethod(e, r) {
        let t,
          a,
          o = ["webkit", "moz", "ms", "o", ""],
          n = 0;
        for (; n < o.length && !e[t]; ) {
          if (
            ((t = r),
            "" === o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)),
            "undefined" != (a = typeof e[(t = o[n] + t)]))
          )
            return (o = [o[n]]), "function" == a ? e[t]() : e[t];
          n++;
        }
      }
      function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen");
      }
      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") ||
          RunPrefixMethod(document, "IsFullScreen")) &&
          RunPrefixMethod(document, "CancelFullScreen");
      }
      return this;
    },
    toggleLoops: function () {
      let e = this.get(0),
        r = e.opt;
      return (
        1 == r.loop
          ? (r.loop = 0)
          : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(),
            (r.loop = 1)),
        this
      );
    },
    play: function () {
      let e = this.get(0),
        r = jQuery(e);
      return e.isReady
        ? (setTimeout(function () {
            r.YTPSetAbundance(e.opt.abundance);
          }, 300),
          e.player.playVideo(),
          jQuery(e.playerEl).css({ opacity: 1 }),
          e.wrapper.css({ backgroundImage: "none" }),
          e.wrapper.CSSAnimate(
            { opacity: e.isAlone ? 1 : e.opt.opacity },
            e.opt.fadeOnStartTime
          ),
          jQuery("#controlBar_" + e.id)
            .find(".mb_YTPPlayPause")
            .html(jQuery.mbYTPlayer.controls.pause),
          (e.state = 1),
          this)
        : this;
    },
    togglePlay: function (e) {
      let r = this.get(0);
      return r.isReady
        ? (1 === r.state ? this.YTPPause() : this.YTPPlay(),
          "function" == typeof e && e(r.state),
          this)
        : this;
    },
    stop: function () {
      let e = this.get(0);
      return e.isReady
        ? (jQuery("#controlBar_" + e.id)
            .find(".mb_YTPPlayPause")
            .html(jQuery.mbYTPlayer.controls.play),
          e.player.stopVideo(),
          this)
        : this;
    },
    pause: function () {
      let e = this.get(0);
      return e.isReady
        ? (e.opt.abundance < 0.2 && this.YTPSetAbundance(0.2),
          e.player.pauseVideo(),
          (e.state = 2),
          this)
        : this;
    },
    seekTo: function (e) {
      let r = this.get(0);
      return r.isReady ? (r.player.seekTo(e, !0), this) : this;
    },
    getPlaybackRate: function () {
      let e = this.get(0);
      return e.isReady ? e.player.getPlaybackRate() : this;
    },
    setPlaybackRate: function (e) {
      let r = this.get(0);
      return r.isReady ? (r.player.setPlaybackRate(e), this) : this;
    },
    setVolume: function (e) {
      let r = this.get(0);
      return r.isReady
        ? ((r.opt.vol = e),
          this.YTPUnmute(),
          r.player.setVolume(r.opt.vol),
          r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e),
          this)
        : this;
    },
    getVolume: function () {
      let e = this.get(0);
      return e.isReady ? e.player.getVolume() : this;
    },
    toggleVolume: function () {
      let e = this.get(0);
      return e.isReady
        ? (e.isMute
            ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol),
              this.YTPUnmute())
            : this.YTPMute(),
          this)
        : this;
    },
    mute: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      if (e.isMute) return this;
      e.player.mute(),
        (e.isMute = !0),
        e.player.setVolume(0),
        e.volumeBar &&
          e.volumeBar.length &&
          e.volumeBar.width() > 10 &&
          e.volumeBar.updateSliderVal(0),
        jQuery("#controlBar_" + e.id)
          .find(".mb_YTPMuteUnmute")
          .html(jQuery.mbYTPlayer.controls.unmute),
        jQuery(e).addClass("isMuted"),
        e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
      let r = jQuery.Event("YTPMuted");
      return (
        (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this
      );
    },
    unmute: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      if (!e.isMute) return this;
      e.player.unMute(),
        (e.isMute = !1),
        jQuery(e).YTPSetVolume(e.opt.vol),
        e.volumeBar &&
          e.volumeBar.length &&
          e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10),
        jQuery("#controlBar_" + e.id)
          .find(".mb_YTPMuteUnmute")
          .html(jQuery.mbYTPlayer.controls.mute),
        jQuery(e).removeClass("isMuted"),
        e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
      let r = jQuery.Event("YTPUnmuted");
      return (
        (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this
      );
    },
    applyFilter: function (e, r) {
      let t = this.get(0);
      if (!t.isReady) return this;
      (t.filters[e].value = r), t.filtersEnabled && this.YTPEnableFilters();
    },
    applyFilters: function (e) {
      let r = this,
        t = r.get(0);
      if (!t.isReady)
        return (
          jQuery(t).on("YTPReady", function () {
            r.YTPApplyFilters(e);
          }),
          this
        );
      for (let t in e) r.YTPApplyFilter(t, e[t]);
      r.trigger("YTPFiltersApplied");
    },
    toggleFilter: function (e, r) {
      let t = this.get(0);
      return t.isReady
        ? (t.filters[e].value
            ? (t.filters[e].value = 0)
            : (t.filters[e].value = r),
          t.filtersEnabled && jQuery(t).YTPEnableFilters(),
          this)
        : this;
    },
    toggleFilters: function (e) {
      let r = this.get(0);
      return r.isReady
        ? (r.filtersEnabled
            ? (jQuery(r).trigger("YTPDisableFilters"),
              jQuery(r).YTPDisableFilters())
            : (jQuery(r).YTPEnableFilters(),
              jQuery(r).trigger("YTPEnableFilters")),
          "function" == typeof e && e(r.filtersEnabled),
          this)
        : this;
    },
    disableFilters: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      let r = jQuery(e.playerEl);
      return (
        r.css("-webkit-filter", ""),
        r.css("filter", ""),
        (e.filtersEnabled = !1),
        this
      );
    },
    enableFilters: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      let r = jQuery(e.playerEl),
        t = "";
      for (let r in e.filters)
        e.filters[r].value &&
          (t +=
            r.replace("_", "-") +
            "(" +
            e.filters[r].value +
            e.filters[r].unit +
            ") ");
      return (
        r.css("-webkit-filter", t),
        r.css("filter", t),
        (e.filtersEnabled = !0),
        this
      );
    },
    removeFilter: function (e, r) {
      let t = this,
        a = t.get(0);
      if (!a.isReady) return this;
      if (("function" == typeof e && ((r = e), (e = null)), e))
        t.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
      else {
        for (let e in a.filters)
          a.filters.hasOwnProperty(e) &&
            (t.YTPApplyFilter(e, 0), "function" == typeof r && r(e));
        a.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters);
      }
      let o = jQuery.Event("YTPFiltersApplied");
      return t.trigger(o), this;
    },
    getFilters: function () {
      let e = this.get(0);
      return e.isReady ? e.filters : this;
    },
    addMask: function (e) {
      let r = this.get(0);
      e || (e = r.actualMask);
      let t = jQuery("<img/>")
        .attr("src", e)
        .on("load", function () {
          r.overlay.CSSAnimate(
            { opacity: 0 },
            r.opt.fadeOnStartTime,
            function () {
              (r.hasMask = !0),
                t.remove(),
                r.overlay.css({
                  backgroundImage: "url(" + e + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }),
                r.overlay.CSSAnimate({ opacity: 1 }, r.opt.fadeOnStartTime);
            }
          );
        });
      return this;
    },
    removeMask: function () {
      let e = this.get(0);
      return (
        e.overlay.CSSAnimate(
          { opacity: 0 },
          e.opt.fadeOnStartTime,
          function () {
            (e.hasMask = !1),
              e.overlay.css({
                backgroundImage: "",
                backgroundRepeat: "",
                backgroundPosition: "",
                backgroundSize: "",
              }),
              e.overlay.CSSAnimate({ opacity: 1 }, e.opt.fadeOnStartTime);
          }
        ),
        this
      );
    },
    applyMask: function (e) {
      let r = jQuery(e);
      if ((r.off("YTPTime.mask"), e.opt.mask))
        if ("string" == typeof e.opt.mask)
          r.YTPAddMask(e.opt.mask), (e.actualMask = e.opt.mask);
        else if ("object" == typeof e.opt.mask) {
          for (let r in e.opt.mask)
            e.opt.mask[r] &&
              (img = jQuery("<img/>").attr("src", e.opt.mask[r]));
          e.opt.mask[0] && r.YTPAddMask(e.opt.mask[0]),
            r.on("YTPTime.mask", function (t) {
              for (let a in e.opt.mask)
                t.time === a &&
                  (e.opt.mask[a]
                    ? (r.YTPAddMask(e.opt.mask[a]),
                      (e.actualMask = e.opt.mask[a]))
                    : r.YTPRemoveMask());
            });
        }
    },
    toggleMask: function () {
      let e = this.get(0),
        r = jQuery(e);
      return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this;
    },
    manageProgress: function () {
      let e = this.get(0),
        r = jQuery("#controlBar_" + e.id),
        t = r.find(".mb_YTPProgress"),
        a = r.find(".mb_YTPLoaded"),
        o = r.find(".mb_YTPseekbar"),
        n = t.outerWidth(),
        i = Math.floor(e.player.getCurrentTime()),
        l = Math.floor(e.player.getDuration()),
        s = (i * n) / l,
        u = 100 * e.player.getVideoLoadedFraction();
      return (
        a.css({ left: 0, width: u + "%" }),
        o.css({ left: 0, width: s }),
        { totalTime: l, currentTime: i }
      );
    },
    buildControls: function (YTPlayer) {
      if (
        (jQuery("#controlBar_" + YTPlayer.id).remove(),
        !YTPlayer.opt.showControls)
      )
        return void (YTPlayer.controlBar = !1);
      if (
        ((YTPlayer.opt.showYTLogo =
          YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl),
        jQuery("#controlBar_" + YTPlayer.id).length)
      )
        return;
      YTPlayer.controlBar = jQuery("<div/>")
        .attr("id", "controlBar_" + YTPlayer.id)
        .addClass("mb_YTPBar")
        .css({
          whiteSpace: "noWrap",
          position: YTPlayer.isBackground ? "fixed" : "absolute",
          zIndex: YTPlayer.isBackground ? 1e4 : 1e3,
        })
        .hide()
        .on("click", function (e) {
          e.stopPropagation();
        });
      let buttonBar = jQuery("<div/>").addClass("buttonBar"),
        playpause = jQuery(
          "<span>" + jQuery.mbYTPlayer.controls.play + "</span>"
        )
          .addClass("mb_YTPPlayPause ytpicon")
          .on("click", function (e) {
            e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay();
          }),
        MuteUnmute = jQuery(
          "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>"
        )
          .addClass("mb_YTPMuteUnmute ytpicon")
          .on("click", function (e) {
            e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume();
          }),
        volumeBar = jQuery("<div/>")
          .addClass("mb_YTPVolumeBar")
          .css({ display: "inline-block" });
      YTPlayer.volumeBar = volumeBar;
      let idx = jQuery("<span/>").addClass("mb_YTPTime"),
        vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
      vURL.indexOf("http") < 0 &&
        (vURL = "https://www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
      let movieUrl = jQuery("<span/>")
          .html(jQuery.mbYTPlayer.controls.ytLogo)
          .addClass("mb_YTPUrl ytpicon")
          .attr("title", "view on YouTube")
          .on("click", function () {
            window.open(vURL, "viewOnYT");
          }),
        onlyVideo = jQuery("<span/>")
          .html(jQuery.mbYTPlayer.controls.onlyYT)
          .addClass("mb_OnlyYT ytpicon")
          .on("click", function (e) {
            e.stopPropagation(),
              jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen);
          }),
        progressBar = jQuery("<div/>")
          .addClass("mb_YTPProgress")
          .css("position", "absolute")
          .on("click", function (e) {
            e.stopPropagation(),
              timeBar.css({ width: e.clientX - timeBar.offset().left }),
              (YTPlayer.timeW = e.clientX - timeBar.offset().left),
              YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
            let r = Math.floor(YTPlayer.player.getDuration());
            (YTPlayer.goto =
              (timeBar.outerWidth() * r) / progressBar.outerWidth()),
              YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
              YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
          }),
        loadedBar = jQuery("<div/>")
          .addClass("mb_YTPLoaded")
          .css("position", "absolute"),
        timeBar = jQuery("<div/>")
          .addClass("mb_YTPseekbar")
          .css("position", "absolute");
      progressBar.append(loadedBar).append(timeBar),
        buttonBar
          .append(playpause)
          .append(MuteUnmute)
          .append(volumeBar)
          .append(idx),
        YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl),
        (YTPlayer.isBackground ||
          (eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground)) &&
          buttonBar.append(onlyVideo),
        YTPlayer.controlBar.append(buttonBar).append(progressBar),
        YTPlayer.isBackground
          ? jQuery("body").after(YTPlayer.controlBar)
          : (YTPlayer.controlBar.addClass("inlinePlayer"),
            YTPlayer.wrapper.before(YTPlayer.controlBar)),
        volumeBar.simpleSlider({
          initialval: YTPlayer.opt.vol,
          scale: 100,
          orientation: "h",
          callback: function (e) {
            0 === e.value
              ? jQuery(YTPlayer).YTPMute()
              : jQuery(YTPlayer).YTPUnmute(),
              YTPlayer.player.setVolume(e.value),
              YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
          },
        });
    },
    changeCoverImage: function (e) {
      let r = this.get(0);
      if (r.opt.coverImage || r.orig_containment_background) {
        let t =
          e ||
          (r.opt.coverImage
            ? "url(" + r.opt.coverImage + ") center center"
            : r.orig_containment_background);
        t &&
          r.opt.containment.css({
            background: t,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          });
      }
      return this;
    },
    checkForState: function () {
      let YTPlayer = this.get(0),
        $YTPlayer = jQuery(YTPlayer);
      clearInterval(YTPlayer.getState);
      let interval = 100;
      if (!jQuery.contains(document, YTPlayer))
        return (
          $YTPlayer.YTPPlayerDestroy(),
          clearInterval(YTPlayer.getState),
          void clearInterval(YTPlayer.checkForStartAt)
        );
      jQuery.mbYTPlayer.checkForStart(YTPlayer),
        (YTPlayer.getState = setInterval(function () {
          let $YTPlayer = jQuery(YTPlayer);
          if (!YTPlayer.isReady) return;
          let prog = jQuery(YTPlayer).YTPManageProgress(),
            stopAt =
              YTPlayer.opt.stopAt > YTPlayer.opt.startAt
                ? YTPlayer.opt.stopAt
                : 0;
          if (
            ((stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0),
            YTPlayer.currentTime !== prog.currentTime)
          ) {
            let e = jQuery.Event("YTPTime");
            (e.time = YTPlayer.currentTime), jQuery(YTPlayer).trigger(e);
          }
          if (
            ((YTPlayer.currentTime = prog.currentTime),
            (YTPlayer.totalTime = YTPlayer.player.getDuration()),
            0 === YTPlayer.player.getVolume()
              ? $YTPlayer.addClass("isMuted")
              : $YTPlayer.removeClass("isMuted"),
            YTPlayer.opt.showControls &&
              (prog.totalTime
                ? YTPlayer.controlBar
                    .find(".mb_YTPTime")
                    .html(
                      jQuery.mbYTPlayer.formatTime(prog.currentTime) +
                        " / " +
                        jQuery.mbYTPlayer.formatTime(prog.totalTime)
                    )
                : YTPlayer.controlBar
                    .find(".mb_YTPTime")
                    .html("-- : -- / -- : --")),
            eval(YTPlayer.opt.stopMovieOnBlur) &&
              (document.hasFocus()
                ? document.hasFocus() &&
                  !YTPlayer.hasFocus &&
                  -1 !== YTPlayer.state &&
                  0 !== YTPlayer.state &&
                  ((YTPlayer.hasFocus = !0),
                  (YTPlayer.preventTrigger = !0),
                  $YTPlayer.YTPPlay())
                : 1 == YTPlayer.state &&
                  ((YTPlayer.hasFocus = !1),
                  (YTPlayer.preventTrigger = !0),
                  $YTPlayer.YTPPause())),
            YTPlayer.opt.playOnlyIfVisible)
          ) {
            let e = jQuery.mbYTPlayer.isOnScreen(
              YTPlayer,
              YTPlayer.opt.onScreenPercentage
            );
            e || 1 !== YTPlayer.state
              ? e &&
                !YTPlayer.isOnScreen &&
                ((YTPlayer.isOnScreen = !0), YTPlayer.player.playVideo())
              : ((YTPlayer.isOnScreen = !1), $YTPlayer.YTPPause());
          }
          if (
            (YTPlayer.controlBar.length &&
            YTPlayer.controlBar.outerWidth() <= 400 &&
            !YTPlayer.isCompact
              ? (YTPlayer.controlBar.addClass("compact"),
                (YTPlayer.isCompact = !0),
                !YTPlayer.isMute &&
                  YTPlayer.volumeBar &&
                  YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
              : YTPlayer.controlBar.length &&
                YTPlayer.controlBar.outerWidth() > 400 &&
                YTPlayer.isCompact &&
                (YTPlayer.controlBar.removeClass("compact"),
                (YTPlayer.isCompact = !1),
                !YTPlayer.isMute &&
                  YTPlayer.volumeBar &&
                  YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
            YTPlayer.player.getPlayerState() > 0 &&
              (parseFloat(
                YTPlayer.player.getDuration() -
                  YTPlayer.opt.fadeOnStartTime / 1e3
              ) < YTPlayer.player.getCurrentTime() ||
                (stopAt > 0 &&
                  parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)))
          ) {
            if (YTPlayer.isEnded) return;
            if (
              ((YTPlayer.isEnded = !0),
              setTimeout(function () {
                YTPlayer.isEnded = !1;
              }, 1e3),
              YTPlayer.isList)
            ) {
              if (
                !YTPlayer.opt.loop ||
                (YTPlayer.opt.loop > 0 &&
                  YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
              ) {
                (YTPlayer.player.loopTime = void 0),
                  clearInterval(YTPlayer.getState);
                let e = jQuery.Event("YTPEnd");
                return (
                  (e.time = YTPlayer.currentTime),
                  void jQuery(YTPlayer).trigger(e)
                );
              }
            } else if (
              !YTPlayer.opt.loop ||
              (YTPlayer.opt.loop > 0 &&
                YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
            )
              return (
                (YTPlayer.player.loopTime = void 0),
                (YTPlayer.state = 2),
                $YTPlayer.changeCoverImage(YTPlayer),
                jQuery(YTPlayer).YTPPause(),
                void YTPlayer.wrapper.CSSAnimate(
                  { opacity: 0 },
                  YTPlayer.opt.fadeOnStartTime,
                  function () {
                    YTPlayer.controlBar.length &&
                      YTPlayer.controlBar
                        .find(".mb_YTPPlayPause")
                        .html(jQuery.mbYTPlayer.controls.play),
                      $YTPlayer.changeCoverImage();
                    let e = jQuery.Event("YTPEnd");
                    (e.time = YTPlayer.currentTime),
                      jQuery(YTPlayer).trigger(e),
                      YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                  }
                )
              );
            (YTPlayer.player.loopTime = YTPlayer.player.loopTime
              ? ++YTPlayer.player.loopTime
              : 1),
              (YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1),
              (YTPlayer.preventTrigger = !0),
              (YTPlayer.state = 2),
              YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
          }
        }, interval));
    },
    checkForStart: function (YTPlayer) {
      let $YTPlayer = jQuery(YTPlayer);
      if (!jQuery.contains(document, YTPlayer))
        return void $YTPlayer.YTPPlayerDestroy();
      if ((jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay))
        if (YTPlayer.opt.addRaster) {
          let e = "dot" === YTPlayer.opt.addRaster ? "raster-dot" : "raster";
          YTPlayer.overlay.addClass(YTPlayer.isRetina ? e + " retina" : e);
        } else
          YTPlayer.overlay.removeClass(function (e, r) {
            let t = r.split(" "),
              a = [];
            return (
              jQuery.each(t, function (e, r) {
                /raster.*/.test(r) && a.push(r);
              }),
              a.push("retina"),
              a.join(" ")
            );
          });
      (YTPlayer.preventTrigger = !0),
        (YTPlayer.state = 2),
        (YTPlayer.preventTrigger = !0),
        YTPlayer.player.mute(),
        YTPlayer.player.playVideo(),
        (YTPlayer.isStarting = !0);
      let startAt = YTPlayer.start_from_last
        ? YTPlayer.start_from_last
        : YTPlayer.opt.startAt
        ? YTPlayer.opt.startAt
        : 1;
      return (
        (YTPlayer.preventTrigger = !0),
        (YTPlayer.checkForStartAt = setInterval(function () {
          YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
          let canPlayVideo =
            YTPlayer.player.getVideoLoadedFraction() >=
            startAt / YTPlayer.player.getDuration();
          if (
            (jQuery.mbBrowser.mobile && (canPlayVideo = !0),
            YTPlayer.player.getDuration() > 0 &&
              YTPlayer.player.getCurrentTime() >= startAt &&
              canPlayVideo)
          ) {
            (YTPlayer.start_from_last = null),
              (YTPlayer.preventTrigger = !0),
              $YTPlayer.YTPPause(),
              clearInterval(YTPlayer.checkForStartAt),
              "function" == typeof YTPlayer.opt.onReady &&
                YTPlayer.opt.onReady(YTPlayer),
              (YTPlayer.isReady = !0),
              $YTPlayer.YTPRemoveFilter(),
              YTPlayer.opt.addFilters
                ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters)
                : $YTPlayer.YTPApplyFilters(),
              $YTPlayer.YTPEnableFilters();
            let YTPready = jQuery.Event("YTPReady");
            if (
              ((YTPready.time = YTPlayer.currentTime),
              $YTPlayer.trigger(YTPready),
              (YTPlayer.state = 2),
              YTPlayer.opt.mute
                ? $YTPlayer.YTPMute()
                : YTPlayer.opt.autoPlay
                ? (console.debug(
                    "We muted the audio to make the video 'auto-play' according with the latest vendor policy. The audio will unmute at the first user interaction with the page"
                  ),
                  YTPlayer.player.mute(),
                  (YTPlayer.forcedMuted = !0),
                  jQuery(document).on("mousedown.YTPstartAudio", function () {
                    YTPlayer.forcedMuted &&
                      (console.debug("AAAAAAA"),
                      YTPlayer.player.unMute(),
                      (YTPlayer.forcedMuted = !1),
                      jQuery(document).off("mousedown.YTPstartAudio"));
                  }),
                  jQuery(window).on("scroll", function () {}))
                : YTPlayer.player.unMute(),
              "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack)
                ? _gaq.push([
                    "_trackEvent",
                    "YTPlayer",
                    "Play",
                    YTPlayer.hasData
                      ? YTPlayer.videoData.title
                      : YTPlayer.videoID.toString(),
                  ])
                : "undefined" != typeof ga &&
                  eval(YTPlayer.opt.gaTrack) &&
                  ga(
                    "send",
                    "event",
                    "YTPlayer",
                    "play",
                    YTPlayer.hasData
                      ? YTPlayer.videoData.title
                      : YTPlayer.videoID.toString()
                  ),
              YTPlayer.opt.autoPlay)
            ) {
              let e = jQuery.Event("YTPStart");
              (e.time = YTPlayer.currentTime),
                jQuery(YTPlayer).trigger(e),
                (YTPlayer.isStarting = !1),
                "mac" === jQuery.mbBrowser.os.name &&
                  jQuery.mbBrowser.safari &&
                  jQuery("body").one("mousedown.YTPstart", function () {
                    $YTPlayer.YTPPlay();
                  }),
                $YTPlayer.YTPPlay(),
                console.timeEnd(YTPTimerLabels.startPlaying);
            } else
              (YTPlayer.preventTrigger = !0),
                $YTPlayer.YTPPause(),
                YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0),
                setTimeout(function () {
                  (YTPlayer.preventTrigger = !0),
                    $YTPlayer.YTPPause(),
                    YTPlayer.isPlayer ||
                      (YTPlayer.opt.coverImage
                        ? (YTPlayer.wrapper.css({ opacity: 0 }),
                          setTimeout(function () {
                            $YTPlayer.changeCoverImage();
                          }, YTPlayer.opt.fadeOnStartTime))
                        : (jQuery(YTPlayer.playerEl).CSSAnimate(
                            { opacity: 1 },
                            YTPlayer.opt.fadeOnStartTime
                          ),
                          YTPlayer.wrapper.CSSAnimate(
                            {
                              opacity: YTPlayer.isAlone
                                ? 1
                                : YTPlayer.opt.opacity,
                            },
                            YTPlayer.opt.fadeOnStartTime
                          ))),
                    (YTPlayer.isStarting = !1);
                }, 500),
                YTPlayer.controlBar.length &&
                  YTPlayer.controlBar
                    .find(".mb_YTPPlayPause")
                    .html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.isPlayer &&
              !YTPlayer.opt.autoPlay &&
              YTPlayer.loading &&
              YTPlayer.loading.length &&
              (YTPlayer.loading.html("Ready"),
              setTimeout(function () {
                YTPlayer.loading.fadeOut();
              }, 100)),
              YTPlayer.controlBar &&
                YTPlayer.controlBar.length &&
                YTPlayer.controlBar.slideDown(1e3);
          }
          "mac" === jQuery.mbBrowser.os.name &&
            jQuery.mbBrowser.safari &&
            (YTPlayer.player.playVideo(),
            startAt >= 0 && YTPlayer.player.seekTo(startAt, !0));
        }, 100)),
        $YTPlayer
      );
    },
    getTime: function () {
      let e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.currentTime);
    },
    getTotalTime: function () {
      let e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.totalTime);
    },
    formatTime: function (e) {
      let r = Math.floor(e / 60),
        t = Math.floor(e - 60 * r);
      return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t);
    },
    setAnchor: function (e) {
      this.optimizeDisplay(e);
    },
    getAnchor: function () {
      return this.get(0).opt.anchor;
    },
    setAbundance: function (e, r) {
      let t = this.get(0);
      return (
        r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
      );
    },
    getAbundance: function () {
      return this.get(0).opt.abundance;
    },
    setOption: function (e, r) {
      return (this.get(0).opt[e] = r), this;
    },
  }),
    (jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
      let YTPlayer = this.get(0),
        vid = {},
        el = YTPlayer.wrapper,
        iframe = jQuery(YTPlayer.playerEl);
      (YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor),
        (YTPlayer.opt.anchor =
          "undefined " != typeof YTPlayer.opt.anchor
            ? YTPlayer.opt.anchor
            : "center,center");
      let YTPAlign = YTPlayer.opt.anchor.split(","),
        ab = abundanceX || YTPlayer.opt.abundance;
      if (YTPlayer.opt.optimizeDisplay) {
        let abundance = el.height() * ab,
          win = {};
        (win.width = el.outerWidth()),
          (win.height = el.outerHeight() + abundance),
          (YTPlayer.opt.ratio =
            "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (vid.width = win.width + abundance),
          (vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)),
          (vid.marginTop = Math.ceil(
            -(vid.height - win.height + abundance) / 2
          )),
          (vid.marginLeft = -abundance / 2);
        let lowest = vid.height < win.height;
        lowest &&
          ((vid.height = win.height + abundance),
          (vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)),
          (vid.marginTop = -abundance / 2),
          (vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2)));
        for (let e in YTPAlign)
          if (YTPAlign.hasOwnProperty(e)) {
            let r = YTPAlign[e].replace(/ /g, "");
            switch (r) {
              case "top":
                vid.marginTop = -abundance;
                break;
              case "bottom":
                vid.marginTop = Math.ceil(
                  -(vid.height - win.height) - abundance / 2
                );
                break;
              case "left":
                vid.marginLeft = -abundance;
                break;
              case "right":
                vid.marginLeft = Math.ceil(
                  -(vid.width - win.width) + abundance / 2
                );
            }
          }
      } else
        (vid.width = "100%"),
          (vid.height = "100%"),
          (vid.marginTop = 0),
          (vid.marginLeft = 0);
      iframe.css({
        width: vid.width,
        height: vid.height,
        marginTop: vid.marginTop,
        marginLeft: vid.marginLeft,
        maxWidth: "initial",
      });
    }),
    (jQuery.shuffle = function (e) {
      let r = e.slice(),
        t = r.length,
        a = t;
      for (; a--; ) {
        let e = parseInt(Math.random() * t),
          o = r[a];
        (r[a] = r[e]), (r[e] = o);
      }
      return r;
    }),
    (jQuery.fn.unselectable = function () {
      return this.each(function () {
        jQuery(this)
          .css({
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          })
          .attr("unselectable", "on");
      });
    }),
    (jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState),
    (jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID),
    (jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie =
      jQuery.mbYTPlayer.changeVideo),
    (jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play),
    (jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay),
    (jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop),
    (jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause),
    (jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate),
    (jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate),
    (jQuery.fn.changeCoverImage = jQuery.mbYTPlayer.changeCoverImage),
    (jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist),
    (jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex),
    (jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute),
    (jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume),
    (jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume),
    (jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData),
    (jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality),
    (jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter),
    (jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters),
    (jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter),
    (jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters),
    (jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter),
    (jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters),
    (jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters),
    (jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters),
    (jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime),
    (jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime),
    (jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask),
    (jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask),
    (jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask),
    (jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance),
    (jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance),
    (jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor),
    (jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor),
    (jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption);
})(jQuery, ytp);
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r);
}
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
    var e = { version: "Unknown version", name: "Unknown OS" };
    return (
      -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"),
      -1 != navigator.appVersion.indexOf("Mac") &&
        0 > navigator.appVersion.indexOf("Mobile") &&
        (e.name = "Mac"),
      -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X ([\._\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, ".").substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"),
      /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"),
      /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"),
      /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"),
      /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"),
      /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"),
      /Linux/.test(nAgt) &&
        /Linux/.test(nAgt) &&
        (e.version = "Unknown.Unknown"),
      (e.name = e.name.toLowerCase()),
      (e.major_version = "Unknown"),
      (e.minor_version = "Unknown"),
      "Unknown.Unknown" != e.version &&
        ((e.major_version = parseFloat(e.version.split(".")[0])),
        (e.minor_version = parseFloat(e.version.split(".")[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf("Opera")))
)
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
function uncamel(e) {
  return e.replace(/([A-Z])/g, function (e) {
    return "-" + e.toLowerCase();
  });
}
function setUnit(e, r) {
  return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e;
}
function setFilter(e, r, t) {
  var a = uncamel(r),
    o = jQuery.mbBrowser.mozilla ? "" : jQuery.CSS.sfx;
  (e[o + "filter"] = e[o + "filter"] || ""),
    (t = setUnit(
      t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t,
      jQuery.CSS.filters[r].unit
    )),
    (e[o + "filter"] += a + "(" + t + ") "),
    delete e[r];
}
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (
      var t = e.split("."),
        a = r.split("."),
        o = 0,
        n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if (
        (t[o] && !a[o] && 0 < parseInt(t[o])) ||
        parseInt(t[o]) > parseInt(a[o])
      )
        return 1;
      if (
        (a[o] && !t[o] && 0 < parseInt(a[o])) ||
        parseInt(t[o]) < parseInt(a[o])
      )
        return -1;
    }
    return 0;
  }),
  (jQuery.support.CSStransition = (function () {
    var e = (document.body || document.documentElement).style;
    return (
      void 0 !== e.transition ||
      void 0 !== e.WebkitTransition ||
      void 0 !== e.MozTransition ||
      void 0 !== e.MsTransition ||
      void 0 !== e.OTransition
    );
  })()),
  (jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
      blur: { min: 0, max: 100, unit: "px" },
      brightness: { min: 0, max: 400, unit: "%" },
      contrast: { min: 0, max: 400, unit: "%" },
      grayscale: { min: 0, max: 100, unit: "%" },
      hueRotate: { min: 0, max: 360, unit: "deg" },
      invert: { min: 0, max: 100, unit: "%" },
      saturate: { min: 0, max: 400, unit: "%" },
      sepia: { min: 0, max: 100, unit: "%" },
    },
    normalizeCss: function (e) {
      var r = jQuery.extend(!0, {}, e);
      for (var t in (jQuery.mbBrowser.webkit || jQuery.mbBrowser.opera
        ? (jQuery.CSS.sfx = "-webkit-")
        : jQuery.mbBrowser.mozilla
        ? (jQuery.CSS.sfx = "-moz-")
        : jQuery.mbBrowser.msie && (jQuery.CSS.sfx = "-ms-"),
      (jQuery.CSS.sfx = ""),
      r)) {
        if (
          ("transform" === t &&
            ((r[jQuery.CSS.sfx + "transform"] = r[t]), delete r[t]),
          "transform-origin" === t &&
            ((r[jQuery.CSS.sfx + "transform-origin"] = e[t]), delete r[t]),
          "filter" !== t ||
            jQuery.mbBrowser.mozilla ||
            ((r[jQuery.CSS.sfx + "filter"] = e[t]), delete r[t]),
          "blur" === t && setFilter(r, "blur", e[t]),
          "brightness" === t && setFilter(r, "brightness", e[t]),
          "contrast" === t && setFilter(r, "contrast", e[t]),
          "grayscale" === t && setFilter(r, "grayscale", e[t]),
          "hueRotate" === t && setFilter(r, "hueRotate", e[t]),
          "invert" === t && setFilter(r, "invert", e[t]),
          "saturate" === t && setFilter(r, "saturate", e[t]),
          "sepia" === t && setFilter(r, "sepia", e[t]),
          "x" === t)
        ) {
          var a = jQuery.CSS.sfx + "transform";
          (r[a] = r[a] || ""),
            (r[a] += " translateX(" + setUnit(e[t], "px") + ")"),
            delete r[t];
        }
        "y" === t &&
          ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
          (r[a] += " translateY(" + setUnit(e[t], "px") + ")"),
          delete r[t]),
          "z" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " translateZ(" + setUnit(e[t], "px") + ")"),
            delete r[t]),
          "rotate" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotate(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateX(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateY(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateZ" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "scale" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scale(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleX(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleY(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleZ" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleZ(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "skew" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skew(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "skewX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skewX(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "skewY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skewY(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "perspective" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " perspective(" + setUnit(e[t], "px") + ")"),
            delete r[t]);
      }
      return r;
    },
    getProp: function (e) {
      var r,
        t = [];
      for (r in e) 0 > t.indexOf(r) && t.push(uncamel(r));
      return t.join(",");
    },
    animate: function (e, r, t, a, o) {
      return this.each(function () {
        function n() {
          (i.called = !0),
            (i.CSSAIsRunning = !1),
            l.off(jQuery.CSS.transitionEnd + "." + i.id),
            clearTimeout(i.timeout),
            l.css(jQuery.CSS.sfx + "transition", ""),
            "function" == typeof o && o.apply(i),
            "function" == typeof i.CSSqueue &&
              (i.CSSqueue(), (i.CSSqueue = null));
        }
        var i = this,
          l = jQuery(this);
        i.id = i.id || "CSSA_" + new Date().getTime();
        var s = s || { type: "noEvent" };
        if (
          i.CSSAIsRunning &&
          i.eventType == s.type &&
          !jQuery.mbBrowser.msie &&
          9 >= jQuery.mbBrowser.version
        )
          i.CSSqueue = function () {
            l.CSSAnimate(e, r, t, a, o);
          };
        else if (
          ((i.CSSqueue = null), (i.eventType = s.type), 0 !== l.length && e)
        ) {
          if (
            ((e = jQuery.normalizeCss(e)),
            (i.CSSAIsRunning = !0),
            "function" == typeof r &&
              ((o = r), (r = jQuery.fx.speeds._default)),
            "function" == typeof t && ((a = t), (t = 0)),
            "string" == typeof t && ((o = t), (t = 0)),
            "function" == typeof a &&
              ((o = a), (a = "cubic-bezier(0.65,0.03,0.36,0.72)")),
            "string" == typeof r)
          )
            for (var u in jQuery.fx.speeds) {
              if (r == u) {
                r = jQuery.fx.speeds[u];
                break;
              }
              r = jQuery.fx.speeds._default;
            }
          if (
            (r || (r = jQuery.fx.speeds._default),
            "string" == typeof o && ((a = o), (o = null)),
            jQuery.support.CSStransition)
          ) {
            var y = {
              default: "ease",
              in: "ease-in",
              out: "ease-out",
              "in-out": "ease-in-out",
              snap: "cubic-bezier(0,1,.5,1)",
              easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
              easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
              easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
              easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
              easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
              easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
              easeOutExpo: "cubic-bezier(.19,1,.22,1)",
              easeInOutExpo: "cubic-bezier(1,0,0,1)",
              easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
              easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
              easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
              easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
              easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
              easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
              easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
              easeOutQuint: "cubic-bezier(.23,1,.32,1)",
              easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
              easeInSine: "cubic-bezier(.47,0,.745,.715)",
              easeOutSine: "cubic-bezier(.39,.575,.565,1)",
              easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
              easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
              easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
              easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            };
            y[a] && (a = y[a]),
              l.off(jQuery.CSS.transitionEnd + "." + i.id),
              (y = jQuery.CSS.getProp(e));
            var d = {};
            jQuery.extend(d, e),
              (d[jQuery.CSS.sfx + "transition-property"] = y),
              (d[jQuery.CSS.sfx + "transition-duration"] = r + "ms"),
              (d[jQuery.CSS.sfx + "transition-delay"] = t + "ms"),
              (d[jQuery.CSS.sfx + "transition-timing-function"] = a),
              setTimeout(function () {
                l.one(jQuery.CSS.transitionEnd + "." + i.id, n), l.css(d);
              }, 1),
              (i.timeout = setTimeout(function () {
                i.called || !o
                  ? ((i.called = !1), (i.CSSAIsRunning = !1))
                  : (l.css(jQuery.CSS.sfx + "transition", ""),
                    o.apply(i),
                    (i.CSSAIsRunning = !1),
                    "function" == typeof i.CSSqueue &&
                      (i.CSSqueue(), (i.CSSqueue = null)));
              }, r + t + 10));
          } else {
            for (y in e)
              "transform" === y && delete e[y],
                "filter" === y && delete e[y],
                "transform-origin" === y && delete e[y],
                "auto" === e[y] && delete e[y],
                "x" === y && ((s = e[y]), (e[(u = "left")] = s), delete e[y]),
                "y" === y && ((s = e[y]), (e[(u = "top")] = s), delete e[y]),
                ("-ms-transform" !== y && "-ms-filter" !== y) || delete e[y];
            l.delay(t).animate(e, r, o);
          }
        }
      });
    },
  }),
  (jQuery.fn.CSSAnimate = jQuery.CSS.animate),
  (jQuery.normalizeCss = jQuery.CSS.normalizeCss),
  (jQuery.fn.css3 = function (e) {
    return this.each(function () {
      var r = jQuery(this),
        t = jQuery.normalizeCss(e);
      r.css(t);
    });
  }),
  (function (e) {
    (e.simpleSlider = {
      defaults: {
        initialval: 0,
        maxval: 100,
        orientation: "h",
        readonly: !1,
        callback: !1,
      },
      events: {
        start: e.browser.mobile ? "touchstart" : "mousedown",
        end: e.browser.mobile ? "touchend" : "mouseup",
        move: e.browser.mobile ? "touchmove" : "mousemove",
      },
      init: function (r) {
        return this.each(function () {
          var t = this,
            a = e(t);
          a.addClass("simpleSlider"),
            (t.opt = {}),
            e.extend(t.opt, e.simpleSlider.defaults, r),
            e.extend(t.opt, a.data());
          var o = "h" === t.opt.orientation ? "horizontal" : "vertical";
          (o = e("<div/>").addClass("level").addClass(o)),
            a.prepend(o),
            (t.level = o),
            a.css({ cursor: "default" }),
            "auto" == t.opt.maxval && (t.opt.maxval = e(t).outerWidth()),
            a.updateSliderVal(),
            t.opt.readonly ||
              (a.on(e.simpleSlider.events.start, function (r) {
                e.browser.mobile && (r = r.changedTouches[0]),
                  (t.canSlide = !0),
                  a.updateSliderVal(r),
                  "h" === t.opt.orientation
                    ? a.css({ cursor: "col-resize" })
                    : a.css({ cursor: "row-resize" }),
                  (t.lastVal = t.val),
                  e.browser.mobile || (r.preventDefault(), r.stopPropagation());
              }),
              e(document)
                .on(e.simpleSlider.events.move, function (r) {
                  e.browser.mobile && (r = r.changedTouches[0]),
                    t.canSlide &&
                      (e(document).css({ cursor: "default" }),
                      a.updateSliderVal(r),
                      e.browser.mobile ||
                        (r.preventDefault(), r.stopPropagation()));
                })
                .on(e.simpleSlider.events.end, function () {
                  e(document).css({ cursor: "auto" }),
                    (t.canSlide = !1),
                    a.css({ cursor: "auto" });
                }));
        });
      },
      updateSliderVal: function (r) {
        var t = this.get(0);
        if (t.opt) {
          t.opt.initialval =
            "number" == typeof t.opt.initialval
              ? t.opt.initialval
              : t.opt.initialval(t);
          var a = e(t).outerWidth(),
            o = e(t).outerHeight();
          (t.x =
            "object" == typeof r
              ? r.clientX + document.body.scrollLeft - this.offset().left
              : "number" == typeof r
              ? (r * a) / t.opt.maxval
              : (t.opt.initialval * a) / t.opt.maxval),
            (t.y =
              "object" == typeof r
                ? r.clientY + document.body.scrollTop - this.offset().top
                : "number" == typeof r
                ? ((t.opt.maxval - t.opt.initialval - r) * o) / t.opt.maxval
                : (t.opt.initialval * o) / t.opt.maxval),
            (t.y = this.outerHeight() - t.y),
            (t.scaleX = (t.x * t.opt.maxval) / a),
            (t.scaleY = (t.y * t.opt.maxval) / o),
            (t.outOfRangeX =
              t.scaleX > t.opt.maxval
                ? t.scaleX - t.opt.maxval
                : 0 > t.scaleX
                ? t.scaleX
                : 0),
            (t.outOfRangeY =
              t.scaleY > t.opt.maxval
                ? t.scaleY - t.opt.maxval
                : 0 > t.scaleY
                ? t.scaleY
                : 0),
            (t.outOfRange =
              "h" === t.opt.orientation ? t.outOfRangeX : t.outOfRangeY),
            (t.value =
              void 0 !== r
                ? "h" === t.opt.orientation
                  ? t.x >= this.outerWidth()
                    ? t.opt.maxval
                    : 0 >= t.x
                    ? 0
                    : t.scaleX
                  : t.y >= this.outerHeight()
                  ? t.opt.maxval
                  : 0 >= t.y
                  ? 0
                  : t.scaleY
                : "h" === t.opt.orientation
                ? t.scaleX
                : t.scaleY),
            "h" === t.opt.orientation
              ? t.level.width(Math.floor((100 * t.x) / a) + "%")
              : t.level.height(Math.floor((100 * t.y) / o)),
            (t.lastVal === t.value &&
              (("h" === t.opt.orientation &&
                (t.x >= this.outerWidth() || 0 >= t.x)) ||
                ("h" !== t.opt.orientation &&
                  (t.y >= this.outerHeight() || 0 >= t.y)))) ||
              ("function" == typeof t.opt.callback && t.opt.callback(t),
              (t.lastVal = t.value));
        }
      },
    }),
      (e.fn.simpleSlider = e.simpleSlider.init),
      (e.fn.updateSliderVal = e.simpleSlider.updateSliderVal);
  })(jQuery),
  (function (e) {
    (e.mbCookie = {
      set: function (e, r, t, a) {
        "object" == typeof r && (r = JSON.stringify(r)),
          (a = a ? "; domain=" + a : "");
        var o = new Date(),
          n = "";
        0 < t &&
          (o.setTime(o.getTime() + 864e5 * t),
          (n = "; expires=" + o.toGMTString())),
          (document.cookie = e + "=" + r + n + "; path=/" + a);
      },
      get: function (e) {
        e += "=";
        for (var r = document.cookie.split(";"), t = 0; t < r.length; t++) {
          for (var a = r[t]; " " == a.charAt(0); ) a = a.substring(1, a.length);
          if (0 == a.indexOf(e))
            try {
              return JSON.parse(a.substring(e.length, a.length));
            } catch (r) {
              return a.substring(e.length, a.length);
            }
        }
        return null;
      },
      remove: function (r) {
        e.mbCookie.set(r, "", -1);
      },
    }),
      (e.mbStorage = {
        set: function (e, r) {
          "object" == typeof r && (r = JSON.stringify(r)),
            localStorage.setItem(e, r);
        },
        get: function (e) {
          if (!localStorage[e]) return null;
          try {
            return JSON.parse(localStorage[e]);
          } catch (r) {
            return localStorage[e];
          }
        },
        remove: function (e) {
          e ? localStorage.removeItem(e) : localStorage.clear();
        },
      });
  })(jQuery);
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r);
}
(jQuery.mbBrowser = {}),
  (jQuery.mbBrowser.mozilla = !1),
  (jQuery.mbBrowser.webkit = !1),
  (jQuery.mbBrowser.opera = !1),
  (jQuery.mbBrowser.safari = !1),
  (jQuery.mbBrowser.chrome = !1),
  (jQuery.mbBrowser.androidStock = !1),
  (jQuery.mbBrowser.msie = !1),
  (jQuery.mbBrowser.edge = !1),
  (jQuery.mbBrowser.ua = nAgt);
var getOS = function () {
    var e = { version: "Unknown version", name: "Unknown OS" };
    return (
      -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"),
      -1 != navigator.appVersion.indexOf("Mac") &&
        0 > navigator.appVersion.indexOf("Mobile") &&
        (e.name = "Mac"),
      -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X ([\._\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, ".").substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"),
      /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"),
      /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"),
      /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"),
      /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"),
      /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"),
      /Linux/.test(nAgt) &&
        /Linux/.test(nAgt) &&
        (e.version = "Unknown.Unknown"),
      (e.name = e.name.toLowerCase()),
      (e.major_version = "Unknown"),
      (e.minor_version = "Unknown"),
      "Unknown.Unknown" != e.version &&
        ((e.major_version = parseFloat(e.version.split(".")[0])),
        (e.minor_version = parseFloat(e.version.split(".")[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.mbBrowser.os = getOS()),
  (jQuery.mbBrowser.hasTouch = isTouchSupported()),
  (jQuery.mbBrowser.name = navigator.appName),
  (jQuery.mbBrowser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.mbBrowser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf("Opera")))
)
  (jQuery.mbBrowser.opera = !0),
    (jQuery.mbBrowser.name = "Opera"),
    (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.mbBrowser.opera = !0),
    (jQuery.mbBrowser.name = "Opera"),
    (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.mbBrowser.msie = !0),
    (jQuery.mbBrowser.name = "Microsoft Internet Explorer"),
    (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.mbBrowser.msie = !0),
    (jQuery.mbBrowser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.mbBrowser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.mbBrowser.edge = !0),
      (jQuery.mbBrowser.name = "Microsoft Edge"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.chrome = !0),
      (jQuery.mbBrowser.name = "Chrome"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.androidStock = !0),
      (jQuery.mbBrowser.name = "androidStock"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.safari = !0),
      (jQuery.mbBrowser.name = "Safari"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.safari = !0),
      (jQuery.mbBrowser.name = "Safari"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.mbBrowser.mozilla = !0),
      (jQuery.mbBrowser.name = "Firefox"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.mbBrowser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.mbBrowser.name.toLowerCase() ==
        jQuery.mbBrowser.name.toUpperCase() &&
        (jQuery.mbBrowser.name = navigator.appName));
-1 != (ix = jQuery.mbBrowser.fullVersion.indexOf(";")) &&
  (jQuery.mbBrowser.fullVersion = jQuery.mbBrowser.fullVersion.substring(
    0,
    ix
  )),
  -1 != (ix = jQuery.mbBrowser.fullVersion.indexOf(" ")) &&
    (jQuery.mbBrowser.fullVersion = jQuery.mbBrowser.fullVersion.substring(
      0,
      ix
    )),
  (jQuery.mbBrowser.majorVersion = parseInt(
    "" + jQuery.mbBrowser.fullVersion,
    10
  )),
  isNaN(jQuery.mbBrowser.majorVersion) &&
    ((jQuery.mbBrowser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.mbBrowser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.mbBrowser.version = jQuery.mbBrowser.majorVersion),
  (jQuery.mbBrowser.android = /Android/i.test(nAgt)),
  (jQuery.mbBrowser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.mbBrowser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.mbBrowser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.mbBrowser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.mbBrowser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.mbBrowser.mobile =
    jQuery.mbBrowser.android ||
    jQuery.mbBrowser.blackberry ||
    jQuery.mbBrowser.ios ||
    jQuery.mbBrowser.windowsMobile ||
    jQuery.mbBrowser.operaMobile ||
    jQuery.mbBrowser.kindle),
  (jQuery.isMobile = jQuery.mbBrowser.mobile),
  (jQuery.isTablet = jQuery.mbBrowser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.mbBrowser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.mbBrowser),
  (jQuery.mbBrowser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (
      var t = e.split("."),
        a = r.split("."),
        o = 0,
        n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if (
        (t[o] && !a[o] && 0 < parseInt(t[o])) ||
        parseInt(t[o]) > parseInt(a[o])
      )
        return 1;
      if (
        (a[o] && !t[o] && 0 < parseInt(a[o])) ||
        parseInt(t[o]) < parseInt(a[o])
      )
        return -1;
    }
    return 0;
  });

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
(function ($) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5,
    },
    translations: { en: null },
    init: function (selector, options) {
      $(selector).ajaxChimp(options);
    },
  };
  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend(
        { url: form.attr("action"), language: "en" },
        options
      );
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function () {
        var msg;
        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid");
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg;
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1];
                } else {
                  index = -1;
                  msg = resp.msg;
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg;
            }
          }
          if (
            settings.language !== "en" &&
            $.ajaxChimp.responses[msg] !== undefined &&
            $.ajaxChimp.translations &&
            $.ajaxChimp.translations[settings.language] &&
            $.ajaxChimp.translations[settings.language][
              $.ajaxChimp.responses[msg]
            ]
          ) {
            msg =
              $.ajaxChimp.translations[settings.language][
                $.ajaxChimp.responses[msg]
              ];
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp);
          }
        }
        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function (resp, text) {
            console.log("mailchimp ajax submit error: " + text);
          },
        });
        var submitMsg = "Submitting...";
        if (
          settings.language !== "en" &&
          $.ajaxChimp.translations &&
          $.ajaxChimp.translations[settings.language] &&
          $.ajaxChimp.translations[settings.language]["submit"]
        ) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"];
        }
        label.html(submitMsg).show(2e3);
        return false;
      });
    });
    return this;
  };
})(jQuery);

/*
 * Ajax Contact Form
 */
$(function () {
  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessages = $(".form-message");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#contact-form input:not[type="submit"],#contact-form textarea').val(
          ""
        );
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });
});
