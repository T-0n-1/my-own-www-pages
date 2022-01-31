/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-smil !*/
!(function (n, e, t) {
  function o(n, e) {
    return typeof n === e;
  }
  function s() {
    var n, e, t, s, a, f, l;
    for (var u in i)
      if (i.hasOwnProperty(u)) {
        if (
          ((n = []),
          (e = i[u]),
          e.name &&
            (n.push(e.name.toLowerCase()),
            e.options && e.options.aliases && e.options.aliases.length))
        )
          for (t = 0; t < e.options.aliases.length; t++)
            n.push(e.options.aliases[t].toLowerCase());
        for (s = o(e.fn, "function") ? e.fn() : e.fn, a = 0; a < n.length; a++)
          (f = n[a]),
            (l = f.split(".")),
            1 === l.length
              ? (Modernizr[l[0]] = s)
              : (!Modernizr[l[0]] ||
                  Modernizr[l[0]] instanceof Boolean ||
                  (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
                (Modernizr[l[0]][l[1]] = s)),
            r.push((s ? "" : "no-") + l.join("-"));
      }
  }
  var i = [],
    a = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (n, e) {
        var t = this;
        setTimeout(function () {
          e(t[n]);
        }, 0);
      },
      addTest: function (n, e, t) {
        i.push({ name: n, fn: e, options: t });
      },
      addAsyncTest: function (n) {
        i.push({ name: null, fn: n });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = a), (Modernizr = new Modernizr());
  var r = [],
    f = {}.toString;
  Modernizr.addTest("smil", function () {
    return (
      !!e.createElementNS &&
      /SVGAnimate/.test(
        f.call(e.createElementNS("http://www.w3.org/2000/svg", "animate"))
      )
    );
  }),
    s(),
    delete a.addTest,
    delete a.addAsyncTest;
  for (var l = 0; l < Modernizr._q.length; l++) Modernizr._q[l]();
  n.Modernizr = Modernizr;
})(window, document);
