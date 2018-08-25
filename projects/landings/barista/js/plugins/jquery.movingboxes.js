! function(a) {
  "use strict";
  a.movingBoxes = function(b, c) {
    var d, e = this;
    e.$el = a(b).addClass("mb-slider"), e.el = b, e.$el.data("movingBoxes", e), e.init = function() {
      function j() {
        b = a(".current-number").html(), (b = +b) > 1 && (b -= 1, a(".current-number").html(b))
      }

      function k() {
        b = a(".current-number").html(), (b = +b) < g.length && (b += 1, a(".current-number").html(b))
      }
      e.options = d = a.extend({}, a.movingBoxes.defaultOptions, c), e.$el.wrap('<div class="movingBoxes mb-wrapper"><div class="mb-scroll" /></div>'), e.$window = e.$el.parent(), e.$wrap = e.$window.parent().append('<div class="legend">'), e.$legend = a(".legend").append('<a class="mb-scrollButtons mb-left"></a>').append('<span class="current-number"></span> from <span class="amount"></span>').append('<a class="mb-scrollButtons mb-right"></a>'), e.$panels = e.$el.children().addClass("mb-panel"), e.runTime = a(".mb-slider").index(e.$el) + 1, e.regex = new RegExp("slider" + e.runTime + "=(\\d+)", "i"), e.initialized = !1, e.currentlyMoving = !1, e.curPanel = d.initAnimation ? 1 : e.getHash() || d.startPanel, e.width = document.documentElement.clientWidth, e.pWidth = d.panelWidth ? d.panelWidth <= 2 ? d.panelWidth * e.width : d.panelWidth : e.$panels.eq(0).width(), e.$left = e.$wrap.find(".mb-left").click(function() {
        return e.goBack(), !1
      }), e.$right = e.$wrap.find(".mb-right").click(function() {
        return e.goForward(), !1
      }), e.update({}, !1), e.setWrap(e.curPanel), e.$wrap.click(function() {
        e.$wrap.hasClass("mb-active-slider") || e.active()
      }), e.$panels.delegate("a", "focus", function(b) {
        b.preventDefault();
        var c = e.$panels.index(a(this).closest(".mb-panel")) + e.adj;
        c !== e.curPanel && e.change(c, {}, !0)
      }), a(document).keyup(function(a) {
        if (!a.target.tagName.match("TEXTAREA|INPUT|SELECT")) switch (a.which) {
          case 39:
          case 32:
            e.$wrap.is(".mb-active-slider") && (e.goForward(), k());
            break;
          case 37:
            e.$wrap.is(".mb-active-slider") && (e.goBack(), j())
        }
      }), a.each("preinit initialized initChange beforeAnimation completed".split(" "), function(b, c) {
        a.isFunction(d[c]) && e.$el.bind(c + ".movingBoxes", d[c])
      }), e.$el.trigger("preinit.movingBoxes", [e, e.curPanel]);
      var b = 1,
        f = a(".gallery-slider"),
        g = a(f).children(),
        h = a(".mb-left"),
        i = a(".mb-right");
      a(".current-number").html(b), a(".amount").html(g.length), h.click(j), i.click(k)
    }, e.update = function(b, c) {
      e.$el.children(".cloned").remove(), e.$panels = e.$el.children(), e.adj = d.wrap && e.$panels.length > 1 ? 0 : 1, e.width = d.width ? parseInt(d.width, 10) : e.width, e.$wrap.css("width", e.width), d.wrap && e.$panels.length > 1 && (e.$el.prepend(e.$panels.filter(":last").clone().addClass("cloned")), e.$el.append(e.$panels.filter(":first").clone().addClass("cloned")), e.$el.find(".cloned").each(function() {
        a(this).find("a,input,textarea,select,button,area").removeAttr("name").attr("disabled", "disabled"), a(this).find("[id]").andSelf().removeAttr("id")
      })), e.$panels = e.$el.children().addClass("mb-panel").each(function() {
        0 === a(this).find(".mb-inside").length && a(this).wrapInner('<div class="mb-inside" />')
      }), e.totalPanels = e.$panels.filter(":not(.cloned)").length, e.totalPanels <= 1 && (e.curPanel = 1), e.setSizes(c), e.buildNav(), e.change(e.curPanel, b, c), e.imagesLoaded(function() {
        e.setSizes(!1), e.setWrap(e.curPanel), e.initialized || setTimeout(function() {
          e.initialized = !0, e.change(e.getHash() || d.startPanel, {}, !1), e.$el.trigger("initialized.movingBoxes", [e, e.curPanel])
        }, 2 * d.speed)
      })
    }, e.setSizes = function(b) {
      e.padding = parseInt(e.$panels.css("padding-left"), 10) + parseInt(e.$panels.css("margin-left"), 10), e.curWidth = d.panelWidth ? d.panelWidth <= 2 ? d.panelWidth * e.width : d.panelWidth : e.pWidth, e.regWidth = e.curWidth * d.reducedSize, e.$panels.css({
        width: e.curWidth,
        fontSize: "1em"
      }), e.$panels.eq(e.curPanel - e.adj).addClass(d.currentPanel), e.heights = e.$panels.css("height", "auto").map(function(b, c) {
        return a(c).outerHeight(!0)
      }).get(), e.returnToNormal(e.curPanel, 0), e.growBigger(e.curPanel, 0, b), e.updateArrows(e.curPanel), e.$el.css({
        position: "absolute",
        width: (e.curWidth + 2 * e.padding) * e.$panels.length + (e.width - e.curWidth) / 2,
        height: Math.max.apply(this, e.heights) + 10,
        "padding-left": (e.width - e.curWidth) / 2
      }), e.$window.css({
        height: d.fixedHeight ? Math.max.apply(this, e.heights) : e.heights[e.curPanel - e.adj]
      })
    }, e.buildNav = function() {
      if (e.$nav ? e.$nav.find(".mb-links").empty() : e.$nav = a('<div class="mb-controls"><span class="mb-links"></span></div>').appendTo(e.$wrap), d.buildNav && e.totalPanels > 1) {
        var b, c, g, f = "";
        e.$panels.filter(":not(.cloned)").each(function(h) {
          c = h + 1, f = '<a class="mb-link mb-panel' + c + '" href="#"></a>', g = a(f), a.isFunction(d.navFormatter) ? (b = d.navFormatter(c, a(this)), "string" == typeof b ? g.html(b) : g = a("<a/>", b)) : g.html(c), g.appendTo(e.$nav.find(".mb-links")).addClass("mb-link mb-panel" + c).data("index", c)
        }), e.$nav.find("a.mb-link").bind("click", function() {
          return e.change(a(this).data("index")), !1
        })
      }
    }, e.returnToNormal = function(a, b) {
      var c = e.$panels.not(":eq(" + (a - e.adj) + ")").removeClass(d.currentPanel);
      c.css({
        height: "1007px",
        filter: "grayscale(1)",
        "flex-grow": "1",
        transition: "all 0.5s ease 0s"
      }), 1 === d.reducedSize ? c.css({
        width: e.regWidth
      }) : c.stop(!0, !1).animate({
        width: e.regWidth,
        fontSize: d.reducedSize + "em"
      }, 0 === b ? 0 : d.speed)
    }, e.growBigger = function(a, b, c) {
      var f = e.$panels.eq(a - e.adj);
      f.css({
        height: "1007px",
        filter: "grayscale(0)",
        "flex-grow": "1.5",
        transition: "all 0.5s ease 0s"
      }), 1 === d.reducedSize ? (f.css({
        width: e.curWidth
      }), setTimeout(function() {
        e.completed(a, c)
      }, 0 === b ? 0 : d.speed)) : f.stop(!0, !1).animate({
        width: e.curWidth,
        fontSize: "1em"
      }, 0 === b ? 0 : d.speed, function() {
        e.completed(a, c)
      })
    }, e.setWrap = function(a) {
      if (e.totalPanels >= 1) {
        e.growBigger(a, 0, !1);
        var b = e.$panels.eq(a - e.adj).position().left - (e.width - e.curWidth) / 2 + e.padding;
        e.$window.scrollLeft(b)
      }
    }, e.completed = function(a, b) {
      var c = e.$panels.eq(a - e.adj);
      c.hasClass("cloned") || c.addClass(d.currentPanel), !1 !== b && e.$el.trigger("completed.movingBoxes", [e, a])
    }, e.goForward = function(a) {
      e.initialized && e.change(e.curPanel + 1, a)
    }, e.goBack = function(a) {
      e.initialized && e.change(e.curPanel - 1, a)
    }, e.change = function(b, c, f) {
      if (e.totalPanels < 1) return void("function" == typeof c && c(e));
      var g, h, i = !1;
      f = !1 !== f, b = a("" + b).length || b instanceof a && a(b).length ? a(b).closest(".mb-panel").index() + e.adj : parseInt(b, 10), e.initialized && f && (e.$wrap.hasClass("mb-active-slider") || e.active(), e.$el.trigger("initChange.movingBoxes", [e, b])), d.wrap && (b > e.totalPanels ? (i = !0, b = 1, e.returnToNormal(0, 0), e.setWrap(0)) : 0 === b && (i = !1, b = e.totalPanels, e.setWrap(b + 1))), b < e.adj && (b = d.wrap ? e.totalPanels : 1), b > e.totalPanels - e.adj && (b = d.wrap ? 1 : e.totalPanels), e.curPanel === b || e.currentlyMoving && e.initialized ? e.endAnimation() : (e.currentlyMoving = !d.stopAnimation, e.$curPanel = e.$panels.eq(b - e.adj), h = e.$curPanel.position().left - (e.width - e.curWidth) / 2 + e.padding, e.initialized && (b > e.curPanel || i) && (h -= e.curWidth - e.regWidth), g = d.fixedHeight ? {
        scrollLeft: h
      } : {
        scrollLeft: h,
        height: e.heights[b - e.adj]
      }, e.curPanel = b, e.initialized && f && e.$el.trigger("beforeAnimation.movingBoxes", [e, b]), d.delayBeforeAnimate ? setTimeout(function() {
        e.animateBoxes(b, g, f, c)
      }, parseInt(d.delayBeforeAnimate, 10) || 0) : e.animateBoxes(b, g, f, c))
    }, e.animateBoxes = function(a, b, c, f) {
      e.$window.scrollTop(0).stop(!0, !1).animate(b, {
        queue: !1,
        duration: d.speed,
        easing: d.easing,
        complete: function() {
          e.initialized && e.$window.scrollTop(0), e.currentlyMoving = !1, "function" == typeof f && f(e)
        }
      }), e.returnToNormal(a), e.growBigger(a, d.speed, c), e.updateArrows(a), d.hashTags && e.initialized && e.setHash(a), e.endAnimation()
    }, e.endAnimation = function() {
      d.buildNav && e.$nav.length && e.$nav.find("a.mb-link").removeClass(d.currentPanel).eq(e.curPanel - 1).addClass(d.currentPanel)
    }, e.updateArrows = function(a) {
      e.$left.toggleClass(d.disabled, !d.wrap && a === e.adj || e.totalPanels <= 1), e.$right.toggleClass(d.disabled, !d.wrap && a === e.totalPanels || e.totalPanels <= 1)
    }, e.getHash = function() {
      var b = window.location.hash,
        c = b.indexOf("&"),
        f = b.match(e.regex);
      return null !== f || /^#&/.test(b) || /#!?\//.test(b) ? null !== f && (f = d.hashTags ? parseInt(f[1], 10) : null) : (b = b.substring(0, c >= 0 ? c : b.length), f = a(b).length && a(b).closest(".mb-slider")[0] === e.el ? a(b).closest(".mb-panel").index() + e.adj : null), f > e.totalPanels ? null : f
    }, e.setHash = function(a) {
      var b = "slider" + e.runTime + "=",
        c = window.location.hash;
      void 0 !== c && (window.location.hash = c.indexOf(b) > 0 ? c.replace(e.regex, b + a) : c + "&" + b + a)
    }, e.active = function() {
      a(".mb-active-slider").removeClass("mb-active-slider"), e.$wrap.addClass("mb-active-slider")
    }, e.currentPanel = function(a, b) {
      return void 0 !== a && e.change(a, b), e.curPanel
    }, e.imagesLoaded = function(b, c) {
      var d, f, g = !0,
        h = c ? a(c) : e.$panels.find("img"),
        i = h.length;
      for (c = c || [], d = 0; d < i; d++) "IMG" === h[d].tagName && (f = "fileSize" in h[d] && h[d].fileSize < 0 && h[d].count > 10 || h[d].complete, g = g && f && 0 !== h[d].height, !1 === f && (c.push(h[d]), h[d].count = (h[d].count || 0) + 1));
      g ? "function" == typeof b && b() : setTimeout(function() {
        e.imagesLoaded(b, c)
      }, 200)
    }, e.slidesCounter = function() {
      var b = 0,
        c = a(".mb-left");
      a("mb-right");
      c.addEventListener("click", function() {
        b -= 1, console.log(b)
      })
    }, e.init()
  }, a.movingBoxes.defaultOptions = {
    startPanel: 1,
    reducedSize: 1,
    fixedHeight: !1,
    initAnimation: !0,
    stopAnimation: !1,
    hashTags: !0,
    wrap: !1,
    buildNav: !1,
    navFormatter: null,
    easing: "swing",
    speed: 500,
    delayBeforeAnimate: 0,
    currentPanel: "current",
    tooltipClass: "tooltip",
    disabled: "disabled",
    preinit: null,
    initialized: null,
    initChange: null,
    beforeAnimation: null,
    completed: null
  }, a.fn.movingBoxes = function(b, c, d) {
    var e;
    return this.each(function() {
      e = a(this).data("movingBoxes"), (typeof b).match("object|undefined") ? e && b instanceof a && b.length ? e.change(b, c, d) : e ? e.update(c, d) : new a.movingBoxes(this, b) : e && e.change(b, c, d)
    })
  }, a.fn.getMovingBoxes = function() {
    return this.data("movingBoxes")
  }
}(jQuery), $(function() {
  $(".gallery-slider").movingBoxes({
    startPanel: 1,
    wrap: !1,
    buildNav: !0,
    navFormatter: function() {
      return "&#9679;"
    }
  })
});