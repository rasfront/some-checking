(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".tiptap p.is-editor-empty:first-child:before{opacity:.6;content:attr(data-placeholder);pointer-events:none;position:absolute;overflow:visible}.tiptap p{margin:0;position:relative}.tiptap:focus-visible{outline:none;overflow:visible}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var dl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hl = {}, pl = {}, un, ml;
function we() {
  if (ml) return un;
  ml = 1;
  var t4 = function(e) {
    return e && e.Math === Math && e;
  };
  return un = // eslint-disable-next-line es/no-global-this -- safe
  t4(typeof globalThis == "object" && globalThis) || t4(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  t4(typeof self == "object" && self) || t4(typeof dl == "object" && dl) || t4(typeof un == "object" && un) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")(), un;
}
var Ti = {}, Mi, gl;
function yt() {
  return gl || (gl = 1, Mi = function(t4) {
    try {
      return !!t4();
    } catch {
      return true;
    }
  }), Mi;
}
var _i, bl;
function xt() {
  if (bl) return _i;
  bl = 1;
  var t4 = yt();
  return _i = !t4(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), _i;
}
var Oi, yl;
function cu() {
  if (yl) return Oi;
  yl = 1;
  var t4 = yt();
  return Oi = !t4(function() {
    var e = (function() {
    }).bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }), Oi;
}
var Ni, xl;
function fu() {
  if (xl) return Ni;
  xl = 1;
  var t4 = cu(), e = Function.prototype.call;
  return Ni = t4 ? e.bind(e) : function() {
    return e.apply(e, arguments);
  }, Ni;
}
var Ri = {}, kl;
function Z0() {
  if (kl) return Ri;
  kl = 1;
  var t4 = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, n = e && !t4.call({ 1: 2 }, 1);
  return Ri.f = n ? function(i) {
    var o = e(this, i);
    return !!o && o.enumerable;
  } : t4, Ri;
}
var Ii, Cl;
function Df() {
  return Cl || (Cl = 1, Ii = function(t4, e) {
    return {
      enumerable: !(t4 & 1),
      configurable: !(t4 & 2),
      writable: !(t4 & 4),
      value: e
    };
  }), Ii;
}
var Fi, vl;
function Te() {
  if (vl) return Fi;
  vl = 1;
  var t4 = cu(), e = Function.prototype, n = e.call, r = t4 && e.bind.bind(n, n);
  return Fi = t4 ? r : function(i) {
    return function() {
      return n.apply(i, arguments);
    };
  }, Fi;
}
var Pi, El;
function Tf() {
  if (El) return Pi;
  El = 1;
  var t4 = Te(), e = t4({}.toString), n = t4("".slice);
  return Pi = function(r) {
    return n(e(r), 8, -1);
  }, Pi;
}
var Bi, Sl;
function Mf() {
  if (Sl) return Bi;
  Sl = 1;
  var t4 = Te(), e = yt(), n = Tf(), r = Object, i = t4("".split);
  return Bi = e(function() {
    return !r("z").propertyIsEnumerable(0);
  }) ? function(o) {
    return n(o) === "String" ? i(o, "") : r(o);
  } : r, Bi;
}
var Li, wl;
function _f() {
  return wl || (wl = 1, Li = function(t4) {
    return t4 == null;
  }), Li;
}
var zi, Al;
function Of() {
  if (Al) return zi;
  Al = 1;
  var t4 = _f(), e = TypeError;
  return zi = function(n) {
    if (t4(n)) throw new e("Can't call method on " + n);
    return n;
  }, zi;
}
var qi, Dl;
function si() {
  if (Dl) return qi;
  Dl = 1;
  var t4 = Mf(), e = Of();
  return qi = function(n) {
    return t4(e(n));
  }, qi;
}
var $i, Tl;
function Le() {
  if (Tl) return $i;
  Tl = 1;
  var t4 = typeof document == "object" && document.all;
  return $i = typeof t4 > "u" && t4 !== void 0 ? function(e) {
    return typeof e == "function" || e === t4;
  } : function(e) {
    return typeof e == "function";
  }, $i;
}
var ji, Ml;
function Vn() {
  if (Ml) return ji;
  Ml = 1;
  var t4 = Le();
  return ji = function(e) {
    return typeof e == "object" ? e !== null : t4(e);
  }, ji;
}
var Vi, _l;
function du() {
  if (_l) return Vi;
  _l = 1;
  var t4 = we(), e = Le(), n = function(r) {
    return e(r) ? r : void 0;
  };
  return Vi = function(r, i) {
    return arguments.length < 2 ? n(t4[r]) : t4[r] && t4[r][i];
  }, Vi;
}
var Hi, Ol;
function Y0() {
  if (Ol) return Hi;
  Ol = 1;
  var t4 = Te();
  return Hi = t4({}.isPrototypeOf), Hi;
}
var Ui, Nl;
function Q0() {
  if (Nl) return Ui;
  Nl = 1;
  var t4 = we(), e = t4.navigator, n = e && e.userAgent;
  return Ui = n ? String(n) : "", Ui;
}
var Wi, Rl;
function X0() {
  if (Rl) return Wi;
  Rl = 1;
  var t4 = we(), e = Q0(), n = t4.process, r = t4.Deno, i = n && n.versions || r && r.version, o = i && i.v8, s, u;
  return o && (s = o.split("."), u = s[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !u && e && (s = e.match(/Edge\/(\d+)/), (!s || s[1] >= 74) && (s = e.match(/Chrome\/(\d+)/), s && (u = +s[1]))), Wi = u, Wi;
}
var Ki, Il;
function Nf() {
  if (Il) return Ki;
  Il = 1;
  var t4 = X0(), e = yt(), n = we(), r = n.String;
  return Ki = !!Object.getOwnPropertySymbols && !e(function() {
    var i = Symbol("symbol detection");
    return !r(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && t4 && t4 < 41;
  }), Ki;
}
var Ji, Fl;
function Rf() {
  if (Fl) return Ji;
  Fl = 1;
  var t4 = Nf();
  return Ji = t4 && !Symbol.sham && typeof Symbol.iterator == "symbol", Ji;
}
var Gi, Pl;
function If() {
  if (Pl) return Gi;
  Pl = 1;
  var t4 = du(), e = Le(), n = Y0(), r = Rf(), i = Object;
  return Gi = r ? function(o) {
    return typeof o == "symbol";
  } : function(o) {
    var s = t4("Symbol");
    return e(s) && n(s.prototype, i(o));
  }, Gi;
}
var Zi, Bl;
function ep() {
  if (Bl) return Zi;
  Bl = 1;
  var t4 = String;
  return Zi = function(e) {
    try {
      return t4(e);
    } catch {
      return "Object";
    }
  }, Zi;
}
var Yi, Ll;
function Ff() {
  if (Ll) return Yi;
  Ll = 1;
  var t4 = Le(), e = ep(), n = TypeError;
  return Yi = function(r) {
    if (t4(r)) return r;
    throw new n(e(r) + " is not a function");
  }, Yi;
}
var Qi, zl;
function tp() {
  if (zl) return Qi;
  zl = 1;
  var t4 = Ff(), e = _f();
  return Qi = function(n, r) {
    var i = n[r];
    return e(i) ? void 0 : t4(i);
  }, Qi;
}
var Xi, ql;
function np() {
  if (ql) return Xi;
  ql = 1;
  var t4 = fu(), e = Le(), n = Vn(), r = TypeError;
  return Xi = function(i, o) {
    var s, u;
    if (o === "string" && e(s = i.toString) && !n(u = t4(s, i)) || e(s = i.valueOf) && !n(u = t4(s, i)) || o !== "string" && e(s = i.toString) && !n(u = t4(s, i))) return u;
    throw new r("Can't convert object to primitive value");
  }, Xi;
}
var eo = { exports: {} }, to, $l;
function rp() {
  return $l || ($l = 1, to = false), to;
}
var no, jl;
function hu() {
  if (jl) return no;
  jl = 1;
  var t4 = we(), e = Object.defineProperty;
  return no = function(n, r) {
    try {
      e(t4, n, { value: r, configurable: true, writable: true });
    } catch {
      t4[n] = r;
    }
    return r;
  }, no;
}
var Vl;
function pu() {
  if (Vl) return eo.exports;
  Vl = 1;
  var t4 = rp(), e = we(), n = hu(), r = "__core-js_shared__", i = eo.exports = e[r] || n(r, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.48.0",
    mode: t4 ? "pure" : "global",
    copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), eo.exports;
}
var ro, Hl;
function Pf() {
  if (Hl) return ro;
  Hl = 1;
  var t4 = pu();
  return ro = function(e, n) {
    return t4[e] || (t4[e] = n || {});
  }, ro;
}
var io, Ul;
function Bf() {
  if (Ul) return io;
  Ul = 1;
  var t4 = Of(), e = Object;
  return io = function(n) {
    return e(t4(n));
  }, io;
}
var oo, Wl;
function Pt() {
  if (Wl) return oo;
  Wl = 1;
  var t4 = Te(), e = Bf(), n = t4({}.hasOwnProperty);
  return oo = Object.hasOwn || function(i, o) {
    return n(e(i), o);
  }, oo;
}
var so, Kl;
function Lf() {
  if (Kl) return so;
  Kl = 1;
  var t4 = Te(), e = 0, n = Math.random(), r = t4(1.1.toString);
  return so = function(i) {
    return "Symbol(" + (i === void 0 ? "" : i) + ")_" + r(++e + n, 36);
  }, so;
}
var uo, Jl;
function zf() {
  if (Jl) return uo;
  Jl = 1;
  var t4 = we(), e = Pf(), n = Pt(), r = Lf(), i = Nf(), o = Rf(), s = t4.Symbol, u = e("wks"), l = o ? s.for || s : s && s.withoutSetter || r;
  return uo = function(a) {
    return n(u, a) || (u[a] = i && n(s, a) ? s[a] : l("Symbol." + a)), u[a];
  }, uo;
}
var lo, Gl;
function ip() {
  if (Gl) return lo;
  Gl = 1;
  var t4 = fu(), e = Vn(), n = If(), r = tp(), i = np(), o = zf(), s = TypeError, u = o("toPrimitive");
  return lo = function(l, a) {
    if (!e(l) || n(l)) return l;
    var c = r(l, u), f;
    if (c) {
      if (a === void 0 && (a = "default"), f = t4(c, l, a), !e(f) || n(f)) return f;
      throw new s("Can't convert object to primitive value");
    }
    return a === void 0 && (a = "number"), i(l, a);
  }, lo;
}
var ao, Zl;
function qf() {
  if (Zl) return ao;
  Zl = 1;
  var t4 = ip(), e = If();
  return ao = function(n) {
    var r = t4(n, "string");
    return e(r) ? r : r + "";
  }, ao;
}
var co, Yl;
function $f() {
  if (Yl) return co;
  Yl = 1;
  var t4 = we(), e = Vn(), n = t4.document, r = e(n) && e(n.createElement);
  return co = function(i) {
    return r ? n.createElement(i) : {};
  }, co;
}
var fo, Ql;
function jf() {
  if (Ql) return fo;
  Ql = 1;
  var t4 = xt(), e = yt(), n = $f();
  return fo = !t4 && !e(function() {
    return Object.defineProperty(n("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), fo;
}
var Xl;
function Vf() {
  if (Xl) return Ti;
  Xl = 1;
  var t4 = xt(), e = fu(), n = Z0(), r = Df(), i = si(), o = qf(), s = Pt(), u = jf(), l = Object.getOwnPropertyDescriptor;
  return Ti.f = t4 ? l : function(c, f) {
    if (c = i(c), f = o(f), u) try {
      return l(c, f);
    } catch {
    }
    if (s(c, f)) return r(!e(n.f, c, f), c[f]);
  }, Ti;
}
var ho = {}, po, ea;
function Hf() {
  if (ea) return po;
  ea = 1;
  var t4 = xt(), e = yt();
  return po = t4 && e(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: false
    }).prototype !== 42;
  }), po;
}
var mo, ta;
function ui() {
  if (ta) return mo;
  ta = 1;
  var t4 = Vn(), e = String, n = TypeError;
  return mo = function(r) {
    if (t4(r)) return r;
    throw new n(e(r) + " is not an object");
  }, mo;
}
var na;
function Hn() {
  if (na) return ho;
  na = 1;
  var t4 = xt(), e = jf(), n = Hf(), r = ui(), i = qf(), o = TypeError, s = Object.defineProperty, u = Object.getOwnPropertyDescriptor, l = "enumerable", a = "configurable", c = "writable";
  return ho.f = t4 ? n ? function(d, h, p) {
    if (r(d), h = i(h), r(p), typeof d == "function" && h === "prototype" && "value" in p && c in p && !p[c]) {
      var m = u(d, h);
      m && m[c] && (d[h] = p.value, p = {
        configurable: a in p ? p[a] : m[a],
        enumerable: l in p ? p[l] : m[l],
        writable: false
      });
    }
    return s(d, h, p);
  } : s : function(d, h, p) {
    if (r(d), h = i(h), r(p), e) try {
      return s(d, h, p);
    } catch {
    }
    if ("get" in p || "set" in p) throw new o("Accessors not supported");
    return "value" in p && (d[h] = p.value), d;
  }, ho;
}
var go, ra;
function Uf() {
  if (ra) return go;
  ra = 1;
  var t4 = xt(), e = Hn(), n = Df();
  return go = t4 ? function(r, i, o) {
    return e.f(r, i, n(1, o));
  } : function(r, i, o) {
    return r[i] = o, r;
  }, go;
}
var bo = { exports: {} }, yo, ia;
function op() {
  if (ia) return yo;
  ia = 1;
  var t4 = xt(), e = Pt(), n = Function.prototype, r = t4 && Object.getOwnPropertyDescriptor, i = e(n, "name"), o = i && (function() {
  }).name === "something", s = i && (!t4 || t4 && r(n, "name").configurable);
  return yo = {
    EXISTS: i,
    PROPER: o,
    CONFIGURABLE: s
  }, yo;
}
var xo, oa;
function sp() {
  if (oa) return xo;
  oa = 1;
  var t4 = Te(), e = Le(), n = pu(), r = t4(Function.toString);
  return e(n.inspectSource) || (n.inspectSource = function(i) {
    return r(i);
  }), xo = n.inspectSource, xo;
}
var ko, sa;
function up() {
  if (sa) return ko;
  sa = 1;
  var t4 = we(), e = Le(), n = t4.WeakMap;
  return ko = e(n) && /native code/.test(String(n)), ko;
}
var Co, ua;
function Wf() {
  if (ua) return Co;
  ua = 1;
  var t4 = Pf(), e = Lf(), n = t4("keys");
  return Co = function(r) {
    return n[r] || (n[r] = e(r));
  }, Co;
}
var vo, la;
function mu() {
  return la || (la = 1, vo = {}), vo;
}
var Eo, aa;
function lp() {
  if (aa) return Eo;
  aa = 1;
  var t4 = up(), e = we(), n = Vn(), r = Uf(), i = Pt(), o = pu(), s = Wf(), u = mu(), l = "Object already initialized", a = e.TypeError, c = e.WeakMap, f, d, h, p = function(y) {
    return h(y) ? d(y) : f(y, {});
  }, m = function(y) {
    return function(x) {
      var k;
      if (!n(x) || (k = d(x)).type !== y)
        throw new a("Incompatible receiver, " + y + " required");
      return k;
    };
  };
  if (t4 || o.state) {
    var g = o.state || (o.state = new c());
    g.get = g.get, g.has = g.has, g.set = g.set, f = function(y, x) {
      if (g.has(y)) throw new a(l);
      return x.facade = y, g.set(y, x), x;
    }, d = function(y) {
      return g.get(y) || {};
    }, h = function(y) {
      return g.has(y);
    };
  } else {
    var b = s("state");
    u[b] = true, f = function(y, x) {
      if (i(y, b)) throw new a(l);
      return x.facade = y, r(y, b, x), x;
    }, d = function(y) {
      return i(y, b) ? y[b] : {};
    }, h = function(y) {
      return i(y, b);
    };
  }
  return Eo = {
    set: f,
    get: d,
    has: h,
    enforce: p,
    getterFor: m
  }, Eo;
}
var ca;
function ap() {
  if (ca) return bo.exports;
  ca = 1;
  var t4 = Te(), e = yt(), n = Le(), r = Pt(), i = xt(), o = op().CONFIGURABLE, s = sp(), u = lp(), l = u.enforce, a = u.get, c = String, f = Object.defineProperty, d = t4("".slice), h = t4("".replace), p = t4([].join), m = i && !e(function() {
    return f(function() {
    }, "length", { value: 8 }).length !== 8;
  }), g = String(String).split("String"), b = bo.exports = function(y, x, k) {
    d(c(x), 0, 7) === "Symbol(" && (x = "[" + h(c(x), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), k && k.getter && (x = "get " + x), k && k.setter && (x = "set " + x), (!r(y, "name") || o && y.name !== x) && (i ? f(y, "name", { value: x, configurable: true }) : y.name = x), m && k && r(k, "arity") && y.length !== k.arity && f(y, "length", { value: k.arity });
    try {
      k && r(k, "constructor") && k.constructor ? i && f(y, "prototype", { writable: false }) : y.prototype && (y.prototype = void 0);
    } catch {
    }
    var C = l(y);
    return r(C, "source") || (C.source = p(g, typeof x == "string" ? x : "")), y;
  };
  return Function.prototype.toString = b(function() {
    return n(this) && a(this).source || s(this);
  }, "toString"), bo.exports;
}
var So, fa;
function cp() {
  if (fa) return So;
  fa = 1;
  var t4 = Le(), e = Hn(), n = ap(), r = hu();
  return So = function(i, o, s, u) {
    u || (u = {});
    var l = u.enumerable, a = u.name !== void 0 ? u.name : o;
    if (t4(s) && n(s, a, u), u.global)
      l ? i[o] = s : r(o, s);
    else {
      try {
        u.unsafe ? i[o] && (l = true) : delete i[o];
      } catch {
      }
      l ? i[o] = s : e.f(i, o, {
        value: s,
        enumerable: false,
        configurable: !u.nonConfigurable,
        writable: !u.nonWritable
      });
    }
    return i;
  }, So;
}
var wo = {}, Ao, da;
function fp() {
  if (da) return Ao;
  da = 1;
  var t4 = Math.ceil, e = Math.floor;
  return Ao = Math.trunc || function(r) {
    var i = +r;
    return (i > 0 ? e : t4)(i);
  }, Ao;
}
var Do, ha;
function Kf() {
  if (ha) return Do;
  ha = 1;
  var t4 = fp();
  return Do = function(e) {
    var n = +e;
    return n !== n || n === 0 ? 0 : t4(n);
  }, Do;
}
var To, pa;
function dp() {
  if (pa) return To;
  pa = 1;
  var t4 = Kf(), e = Math.max, n = Math.min;
  return To = function(r, i) {
    var o = t4(r);
    return o < 0 ? e(o + i, 0) : n(o, i);
  }, To;
}
var Mo, ma;
function hp() {
  if (ma) return Mo;
  ma = 1;
  var t4 = Kf(), e = Math.min;
  return Mo = function(n) {
    var r = t4(n);
    return r > 0 ? e(r, 9007199254740991) : 0;
  }, Mo;
}
var _o, ga;
function Jf() {
  if (ga) return _o;
  ga = 1;
  var t4 = hp();
  return _o = function(e) {
    return t4(e.length);
  }, _o;
}
var Oo, ba;
function pp() {
  if (ba) return Oo;
  ba = 1;
  var t4 = si(), e = dp(), n = Jf(), r = function(i) {
    return function(o, s, u) {
      var l = t4(o), a = n(l);
      if (a === 0) return !i && -1;
      var c = e(u, a), f;
      if (i && s !== s) {
        for (; a > c; )
          if (f = l[c++], f !== f) return true;
      } else for (; a > c; c++)
        if ((i || c in l) && l[c] === s) return i || c || 0;
      return !i && -1;
    };
  };
  return Oo = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: r(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: r(false)
  }, Oo;
}
var No, ya;
function Gf() {
  if (ya) return No;
  ya = 1;
  var t4 = Te(), e = Pt(), n = si(), r = pp().indexOf, i = mu(), o = t4([].push);
  return No = function(s, u) {
    var l = n(s), a = 0, c = [], f;
    for (f in l) !e(i, f) && e(l, f) && o(c, f);
    for (; u.length > a; ) e(l, f = u[a++]) && (~r(c, f) || o(c, f));
    return c;
  }, No;
}
var Ro, xa;
function gu() {
  return xa || (xa = 1, Ro = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), Ro;
}
var ka;
function mp() {
  if (ka) return wo;
  ka = 1;
  var t4 = Gf(), e = gu(), n = e.concat("length", "prototype");
  return wo.f = Object.getOwnPropertyNames || function(i) {
    return t4(i, n);
  }, wo;
}
var Io = {}, Ca;
function gp() {
  return Ca || (Ca = 1, Io.f = Object.getOwnPropertySymbols), Io;
}
var Fo, va;
function bp() {
  if (va) return Fo;
  va = 1;
  var t4 = du(), e = Te(), n = mp(), r = gp(), i = ui(), o = e([].concat);
  return Fo = t4("Reflect", "ownKeys") || function(u) {
    var l = n.f(i(u)), a = r.f;
    return a ? o(l, a(u)) : l;
  }, Fo;
}
var Po, Ea;
function yp() {
  if (Ea) return Po;
  Ea = 1;
  var t4 = Pt(), e = bp(), n = Vf(), r = Hn();
  return Po = function(i, o, s) {
    for (var u = e(o), l = r.f, a = n.f, c = 0; c < u.length; c++) {
      var f = u[c];
      !t4(i, f) && !(s && t4(s, f)) && l(i, f, a(o, f));
    }
  }, Po;
}
var Bo, Sa;
function xp() {
  if (Sa) return Bo;
  Sa = 1;
  var t4 = yt(), e = Le(), n = /#|\.prototype\./, r = function(l, a) {
    var c = o[i(l)];
    return c === u ? true : c === s ? false : e(a) ? t4(a) : !!a;
  }, i = r.normalize = function(l) {
    return String(l).replace(n, ".").toLowerCase();
  }, o = r.data = {}, s = r.NATIVE = "N", u = r.POLYFILL = "P";
  return Bo = r, Bo;
}
var Lo, wa;
function kp() {
  if (wa) return Lo;
  wa = 1;
  var t4 = we(), e = Vf().f, n = Uf(), r = cp(), i = hu(), o = yp(), s = xp();
  return Lo = function(u, l) {
    var a = u.target, c = u.global, f = u.stat, d, h, p, m, g, b;
    if (c ? h = t4 : f ? h = t4[a] || i(a, {}) : h = t4[a] && t4[a].prototype, h) for (p in l) {
      if (g = l[p], u.dontCallGetSet ? (b = e(h, p), m = b && b.value) : m = h[p], d = s(c ? p : a + (f ? "." : "#") + p, u.forced), !d && m !== void 0) {
        if (typeof g == typeof m) continue;
        o(g, m);
      }
      (u.sham || m && m.sham) && n(g, "sham", true), r(h, p, g, u);
    }
  }, Lo;
}
var zo, Aa;
function Cp() {
  if (Aa) return zo;
  Aa = 1;
  var t4 = Tf(), e = Te();
  return zo = function(n) {
    if (t4(n) === "Function") return e(n);
  }, zo;
}
var qo, Da;
function vp() {
  if (Da) return qo;
  Da = 1;
  var t4 = Cp(), e = Ff(), n = cu(), r = t4(t4.bind);
  return qo = function(i, o) {
    return e(i), o === void 0 ? i : n ? r(i, o) : function() {
      return i.apply(o, arguments);
    };
  }, qo;
}
var $o, Ta;
function Ep() {
  if (Ta) return $o;
  Ta = 1;
  var t4 = vp(), e = Mf(), n = Bf(), r = Jf(), i = function(o) {
    var s = o === 1;
    return function(u, l, a) {
      for (var c = n(u), f = e(c), d = r(f), h = t4(l, a), p, m; d-- > 0; )
        if (p = f[d], m = h(p, d, c), m) switch (o) {
          case 0:
            return p;
          // findLast
          case 1:
            return d;
        }
      return s ? -1 : void 0;
    };
  };
  return $o = {
    // `Array.prototype.findLast` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLast: i(0),
    // `Array.prototype.findLastIndex` method
    // https://github.com/tc39/proposal-array-find-from-last
    findLastIndex: i(1)
  }, $o;
}
var jo = {}, Vo, Ma;
function Sp() {
  if (Ma) return Vo;
  Ma = 1;
  var t4 = Gf(), e = gu();
  return Vo = Object.keys || function(r) {
    return t4(r, e);
  }, Vo;
}
var _a;
function wp() {
  if (_a) return jo;
  _a = 1;
  var t4 = xt(), e = Hf(), n = Hn(), r = ui(), i = si(), o = Sp();
  return jo.f = t4 && !e ? Object.defineProperties : function(u, l) {
    r(u);
    for (var a = i(l), c = o(l), f = c.length, d = 0, h; f > d; ) n.f(u, h = c[d++], a[h]);
    return u;
  }, jo;
}
var Ho, Oa;
function Ap() {
  if (Oa) return Ho;
  Oa = 1;
  var t4 = du();
  return Ho = t4("document", "documentElement"), Ho;
}
var Uo, Na;
function Dp() {
  if (Na) return Uo;
  Na = 1;
  var t4 = ui(), e = wp(), n = gu(), r = mu(), i = Ap(), o = $f(), s = Wf(), u = ">", l = "<", a = "prototype", c = "script", f = s("IE_PROTO"), d = function() {
  }, h = function(y) {
    return l + c + u + y + l + "/" + c + u;
  }, p = function(y) {
    y.write(h("")), y.close();
    var x = y.parentWindow.Object;
    return y = null, x;
  }, m = function() {
    var y = o("iframe"), x = "java" + c + ":", k;
    return y.style.display = "none", i.appendChild(y), y.src = String(x), k = y.contentWindow.document, k.open(), k.write(h("document.F=Object")), k.close(), k.F;
  }, g, b = function() {
    try {
      g = new ActiveXObject("htmlfile");
    } catch {
    }
    b = typeof document < "u" ? document.domain && g ? p(g) : m() : p(g);
    for (var y = n.length; y--; ) delete b[a][n[y]];
    return b();
  };
  return r[f] = true, Uo = Object.create || function(x, k) {
    var C;
    return x !== null ? (d[a] = t4(x), C = new d(), d[a] = null, C[f] = x) : C = b(), k === void 0 ? C : e.f(C, k);
  }, Uo;
}
var Wo, Ra;
function Tp() {
  if (Ra) return Wo;
  Ra = 1;
  var t4 = zf(), e = Dp(), n = Hn().f, r = t4("unscopables"), i = Array.prototype;
  return i[r] === void 0 && n(i, r, {
    configurable: true,
    value: e(null)
  }), Wo = function(o) {
    i[r][o] = true;
  }, Wo;
}
var Ia;
function Zf() {
  if (Ia) return pl;
  Ia = 1;
  var t4 = kp(), e = Ep().findLast, n = Tp();
  return t4({ target: "Array", proto: true }, {
    findLast: function(i) {
      return e(this, i, arguments.length > 1 ? arguments[1] : void 0);
    }
  }), n("findLast"), pl;
}
var Fa;
function Mp() {
  return Fa || (Fa = 1, Zf()), hl;
}
var Ko, Pa;
function _p() {
  if (Pa) return Ko;
  Pa = 1;
  var t4 = we(), e = Te();
  return Ko = function(n, r) {
    return e(t4[n].prototype[r]);
  }, Ko;
}
var Jo, Ba;
function Op() {
  if (Ba) return Jo;
  Ba = 1, Zf();
  var t4 = _p();
  return Jo = t4("Array", "findLast"), Jo;
}
var Go, La;
function Np() {
  return La || (La = 1, Go = Op()), Go;
}
var Zo, za;
function Rp() {
  if (za) return Zo;
  za = 1, Mp();
  var t4 = Np();
  return Zo = t4, Zo;
}
Rp();
function X(t4) {
  this.content = t4;
}
X.prototype = {
  constructor: X,
  find: function(t4) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t4) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t4) {
    var e = this.find(t4);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t4, e, n) {
    var r = n && n != t4 ? this.remove(n) : this, i = r.find(t4), o = r.content.slice();
    return i == -1 ? o.push(n || t4, e) : (o[i + 1] = e, n && (o[i] = n)), new X(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t4) {
    var e = this.find(t4);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new X(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t4, e) {
    return new X([t4, e].concat(this.remove(t4).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t4, e) {
    var n = this.remove(t4).content.slice();
    return n.push(t4, e), new X(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t4, e, n) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(t4);
    return i.splice(o == -1 ? i.length : o, 0, e, n), new X(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t4) {
    for (var e = 0; e < this.content.length; e += 2)
      t4(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t4) {
    return t4 = X.from(t4), t4.size ? new X(t4.content.concat(this.subtract(t4).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t4) {
    return t4 = X.from(t4), t4.size ? new X(this.subtract(t4).content.concat(t4.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t4) {
    var e = this;
    t4 = X.from(t4);
    for (var n = 0; n < t4.content.length; n += 2)
      e = e.remove(t4.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t4 = {};
    return this.forEach(function(e, n) {
      t4[e] = n;
    }), t4;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
X.from = function(t4) {
  if (t4 instanceof X) return t4;
  var e = [];
  if (t4) for (var n in t4) e.push(n, t4[n]);
  return new X(e);
};
function Yf(t4, e, n) {
  for (let r = 0; ; r++) {
    if (r == t4.childCount || r == e.childCount)
      return t4.childCount == e.childCount ? null : n;
    let i = t4.child(r), o = e.child(r);
    if (i == o) {
      n += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return n;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        n++;
      return n;
    }
    if (i.content.size || o.content.size) {
      let s = Yf(i.content, o.content, n + 1);
      if (s != null)
        return s;
    }
    n += i.nodeSize;
  }
}
function Qf(t4, e, n, r) {
  for (let i = t4.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: n, b: r };
    let s = t4.child(--i), u = e.child(--o), l = s.nodeSize;
    if (s == u) {
      n -= l, r -= l;
      continue;
    }
    if (!s.sameMarkup(u))
      return { a: n, b: r };
    if (s.isText && s.text != u.text) {
      let a = 0, c = Math.min(s.text.length, u.text.length);
      for (; a < c && s.text[s.text.length - a - 1] == u.text[u.text.length - a - 1]; )
        a++, n--, r--;
      return { a: n, b: r };
    }
    if (s.content.size || u.content.size) {
      let a = Qf(s.content, u.content, n - 1, r - 1);
      if (a)
        return a;
    }
    n -= l, r -= l;
  }
}
class v {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, i = 0, o) {
    for (let s = 0, u = 0; u < n; s++) {
      let l = this.content[s], a = u + l.nodeSize;
      if (a > e && r(l, i + u, o || null, s) !== false && l.content.size) {
        let c = u + 1;
        l.nodesBetween(Math.max(0, e - c), Math.min(l.content.size, n - c), r, i + c);
      }
      u = a;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, i) {
    let o = "", s = true;
    return this.nodesBetween(e, n, (u, l) => {
      let a = u.isText ? u.text.slice(Math.max(e, l) - l, n - l) : u.isLeaf ? i ? typeof i == "function" ? i(u) : i : u.type.spec.leafText ? u.type.spec.leafText(u) : "" : "";
      u.isBlock && (u.isLeaf && a || u.isTextblock) && r && (s ? s = false : o += r), o += a;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new v(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], i = 0;
    if (n > e)
      for (let o = 0, s = 0; s < n; o++) {
        let u = this.content[o], l = s + u.nodeSize;
        l > e && ((s < e || l > n) && (u.isText ? u = u.cut(Math.max(0, e - s), Math.min(u.text.length, n - s)) : u = u.cut(Math.max(0, e - s - 1), Math.min(u.content.size, n - s - 1))), r.push(u), i += u.nodeSize), s = l;
      }
    return new v(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? v.empty : e == 0 && n == this.content.length ? this : new v(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let i = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return i[e] = n, new v(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new v([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new v(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return false;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return false;
    return true;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let i = this.content[n];
      e(i, r, n), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return Yf(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Qf(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Yn(0, e);
    if (e == this.size)
      return Yn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let i = this.child(n), o = r + i.nodeSize;
      if (o >= e)
        return o == e ? Yn(n + 1, o) : Yn(n, r);
      r = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return v.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new v(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return v.empty;
    let n, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (n || (n = e.slice(0, i)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new v(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return v.empty;
    if (e instanceof v)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new v([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
v.empty = new v([], 0);
const Yo = { index: 0, offset: 0 };
function Yn(t4, e) {
  return Yo.index = t4, Yo.offset = e, Yo;
}
function mr(t4, e) {
  if (t4 === e)
    return true;
  if (!(t4 && typeof t4 == "object") || !(e && typeof e == "object"))
    return false;
  let n = Array.isArray(t4);
  if (Array.isArray(e) != n)
    return false;
  if (n) {
    if (t4.length != e.length)
      return false;
    for (let r = 0; r < t4.length; r++)
      if (!mr(t4[r], e[r]))
        return false;
  } else {
    for (let r in t4)
      if (!(r in e) || !mr(t4[r], e[r]))
        return false;
    for (let r in e)
      if (!(r in t4))
        return false;
  }
  return true;
}
let F = class Is {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = false;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, i)), n.push(this), r = true), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return true;
    return false;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && mr(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let i = r.create(n.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return true;
    if (e.length != n.length)
      return false;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return false;
    return true;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Is.none;
    if (e instanceof Is)
      return [e];
    let n = e.slice();
    return n.sort((r, i) => r.type.rank - i.type.rank), n;
  }
};
F.none = [];
class gr extends Error {
}
class w {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = ed(this.content, e + this.openStart, n);
    return r && new w(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new w(Xf(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return w.empty;
    let r = n.openStart || 0, i = n.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new w(v.fromJSON(e, n.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = true) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new w(e, r, i);
  }
}
w.empty = new w(v.empty, 0, 0);
function Xf(t4, e, n) {
  let { index: r, offset: i } = t4.findIndex(e), o = t4.maybeChild(r), { index: s, offset: u } = t4.findIndex(n);
  if (i == e || o.isText) {
    if (u != n && !t4.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t4.cut(0, e).append(t4.cut(n));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return t4.replaceChild(r, o.copy(Xf(o.content, e - i - 1, n - i - 1)));
}
function ed(t4, e, n, r) {
  let { index: i, offset: o } = t4.findIndex(e), s = t4.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, n) ? null : t4.cut(0, e).append(n).append(t4.cut(e));
  let u = ed(s.content, e - o - 1, n, s);
  return u && t4.replaceChild(i, s.copy(u));
}
function Ip(t4, e, n) {
  if (n.openStart > t4.depth)
    throw new gr("Inserted content deeper than insertion position");
  if (t4.depth - n.openStart != e.depth - n.openEnd)
    throw new gr("Inconsistent open depths");
  return td(t4, e, n, 0);
}
function td(t4, e, n, r) {
  let i = t4.index(r), o = t4.node(r);
  if (i == e.index(r) && r < t4.depth - n.openStart) {
    let s = td(t4, e, n, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t4.depth == r && e.depth == r) {
      let s = t4.parent, u = s.content;
      return Tt(s, u.cut(0, t4.parentOffset).append(n.content).append(u.cut(e.parentOffset)));
    } else {
      let { start: s, end: u } = Fp(n, t4);
      return Tt(o, rd(t4, s, u, e, r));
    }
  else return Tt(o, br(t4, e, r));
}
function nd(t4, e) {
  if (!e.type.compatibleContent(t4.type))
    throw new gr("Cannot join " + e.type.name + " onto " + t4.type.name);
}
function Fs(t4, e, n) {
  let r = t4.node(n);
  return nd(r, e.node(n)), r;
}
function Dt(t4, e) {
  let n = e.length - 1;
  n >= 0 && t4.isText && t4.sameMarkup(e[n]) ? e[n] = t4.withText(e[n].text + t4.text) : e.push(t4);
}
function mn(t4, e, n, r) {
  let i = (e || t4).node(n), o = 0, s = e ? e.index(n) : i.childCount;
  t4 && (o = t4.index(n), t4.depth > n ? o++ : t4.textOffset && (Dt(t4.nodeAfter, r), o++));
  for (let u = o; u < s; u++)
    Dt(i.child(u), r);
  e && e.depth == n && e.textOffset && Dt(e.nodeBefore, r);
}
function Tt(t4, e) {
  return t4.type.checkContent(e), t4.copy(e);
}
function rd(t4, e, n, r, i) {
  let o = t4.depth > i && Fs(t4, e, i + 1), s = r.depth > i && Fs(n, r, i + 1), u = [];
  return mn(null, t4, i, u), o && s && e.index(i) == n.index(i) ? (nd(o, s), Dt(Tt(o, rd(t4, e, n, r, i + 1)), u)) : (o && Dt(Tt(o, br(t4, e, i + 1)), u), mn(e, n, i, u), s && Dt(Tt(s, br(n, r, i + 1)), u)), mn(r, null, i, u), new v(u);
}
function br(t4, e, n) {
  let r = [];
  if (mn(null, t4, n, r), t4.depth > n) {
    let i = Fs(t4, e, n + 1);
    Dt(Tt(i, br(t4, e, n + 1)), r);
  }
  return mn(e, null, n, r), new v(r);
}
function Fp(t4, e) {
  let n = e.depth - t4.openStart, i = e.node(n).copy(t4.content);
  for (let o = n - 1; o >= 0; o--)
    i = e.node(o).copy(v.from(i));
  return {
    start: i.resolveNoCache(t4.openStart + n),
    end: i.resolveNoCache(i.content.size - t4.openEnd - n)
  };
}
class wn {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(n);
    return r ? e.child(n).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], i = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return F.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), i = e.maybeChild(n);
    if (!r) {
      let u = r;
      r = i, i = u;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === false && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === false && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new yr(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], i = 0, o = n;
    for (let s = e; ; ) {
      let { index: u, offset: l } = s.content.findIndex(o), a = o - l;
      if (r.push(s, u, i + l), !a || (s = s.child(u), s.isText))
        break;
      o = a - 1, i += l + 1;
    }
    return new wn(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = qa.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == n)
          return s;
      }
    else
      qa.set(e, r = new Pp());
    let i = r.elts[r.i] = wn.resolve(e, n);
    return r.i = (r.i + 1) % Bp, i;
  }
}
class Pp {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Bp = 12, qa = /* @__PURE__ */ new WeakMap();
class yr {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Lp = /* @__PURE__ */ Object.create(null);
let Ke = class Ps {
  /**
  @internal
  */
  constructor(e, n, r, i = F.none) {
    this.type = e, this.attrs = n, this.marks = i, this.content = r || v.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, i = 0) {
    this.content.nodesBetween(e, n, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, n, r, i) {
    return this.content.textBetween(e, n, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && mr(this.attrs, n || e.defaultAttrs || Lp) && F.sameSet(this.marks, r || F.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ps(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ps(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = false) {
    if (e == n)
      return w.empty;
    let i = this.resolve(e), o = this.resolve(n), s = r ? 0 : i.sharedDepth(n), u = i.start(s), a = i.node(s).content.cut(i.pos - u, o.pos - u);
    return new w(a, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return Ip(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: i } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (i == e || n.isText)
        return n;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let i = this.content.child(n - 1);
    return { node: i, index: n - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return wn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return wn.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let i = false;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (i = true), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), id(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = v.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), u = s && s.matchFragment(this.content, n);
    if (!u || !u.validEnd)
      return false;
    for (let l = i; l < o; l++)
      if (!this.type.allowsMarks(r.child(l).marks))
        return false;
    return true;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, i) {
    if (i && !this.type.allowsMarks(i))
      return false;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, n);
    return s ? s.validEnd : false;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = F.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!F.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let i = v.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
Ke.prototype.text = void 0;
class xr extends Ke {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    if (super(e, n, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : id(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new xr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new xr(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function id(t4, e) {
  for (let n = t4.length - 1; n >= 0; n--)
    e = t4[n].type.name + "(" + e + ")";
  return e;
}
class Nt {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new zp(e, n);
    if (r.next == null)
      return Nt.empty;
    let i = od(r);
    r.next && r.err("Unexpected trailing text");
    let o = Wp(Up(i));
    return Kp(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let i = this;
    for (let o = n; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return true;
    return false;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = false, r = 0) {
    let i = [this];
    function o(s, u) {
      let l = s.matchFragment(e, r);
      if (l && (!n || l.validEnd))
        return v.from(u.map((a) => a.createAndFill()));
      for (let a = 0; a < s.next.length; a++) {
        let { type: c, next: f } = s.next[a];
        if (!(c.isText || c.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let d = o(f, u.concat(c));
          if (d)
            return d;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let u = i; u.type; u = u.via)
          s.push(u.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: u, next: l } = o.next[s];
        !u.isLeaf && !u.hasRequiredAttrs() && !(u.name in n) && (!i.type || l.validEnd) && (r.push({ match: u.contentMatch, type: u, via: i }), n[u.name] = true);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && n(r.next[i].next);
    }
    return n(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
Nt.empty = new Nt(true);
class zp {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || true);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function od(t4) {
  let e = [];
  do
    e.push(qp(t4));
  while (t4.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function qp(t4) {
  let e = [];
  do
    e.push($p(t4));
  while (t4.next && t4.next != ")" && t4.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function $p(t4) {
  let e = Hp(t4);
  for (; ; )
    if (t4.eat("+"))
      e = { type: "plus", expr: e };
    else if (t4.eat("*"))
      e = { type: "star", expr: e };
    else if (t4.eat("?"))
      e = { type: "opt", expr: e };
    else if (t4.eat("{"))
      e = jp(t4, e);
    else
      break;
  return e;
}
function $a(t4) {
  /\D/.test(t4.next) && t4.err("Expected number, got '" + t4.next + "'");
  let e = Number(t4.next);
  return t4.pos++, e;
}
function jp(t4, e) {
  let n = $a(t4), r = n;
  return t4.eat(",") && (t4.next != "}" ? r = $a(t4) : r = -1), t4.eat("}") || t4.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Vp(t4, e) {
  let n = t4.nodeTypes, r = n[e];
  if (r)
    return [r];
  let i = [];
  for (let o in n) {
    let s = n[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && t4.err("No node type or group '" + e + "' found"), i;
}
function Hp(t4) {
  if (t4.eat("(")) {
    let e = od(t4);
    return t4.eat(")") || t4.err("Missing closing paren"), e;
  } else if (/\W/.test(t4.next))
    t4.err("Unexpected token '" + t4.next + "'");
  else {
    let e = Vp(t4, t4.next).map((n) => (t4.inline == null ? t4.inline = n.isInline : t4.inline != n.isInline && t4.err("Mixing inline and block content"), { type: "name", value: n }));
    return t4.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Up(t4) {
  let e = [[]];
  return i(o(t4, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(s, u, l) {
    let a = { term: l, to: u };
    return e[s].push(a), a;
  }
  function i(s, u) {
    s.forEach((l) => l.to = u);
  }
  function o(s, u) {
    if (s.type == "choice")
      return s.exprs.reduce((l, a) => l.concat(o(a, u)), []);
    if (s.type == "seq")
      for (let l = 0; ; l++) {
        let a = o(s.exprs[l], u);
        if (l == s.exprs.length - 1)
          return a;
        i(a, u = n());
      }
    else if (s.type == "star") {
      let l = n();
      return r(u, l), i(o(s.expr, l), l), [r(l)];
    } else if (s.type == "plus") {
      let l = n();
      return i(o(s.expr, u), l), i(o(s.expr, l), l), [r(l)];
    } else {
      if (s.type == "opt")
        return [r(u)].concat(o(s.expr, u));
      if (s.type == "range") {
        let l = u;
        for (let a = 0; a < s.min; a++) {
          let c = n();
          i(o(s.expr, l), c), l = c;
        }
        if (s.max == -1)
          i(o(s.expr, l), l);
        else
          for (let a = s.min; a < s.max; a++) {
            let c = n();
            r(l, c), i(o(s.expr, l), c), l = c;
          }
        return [r(l)];
      } else {
        if (s.type == "name")
          return [r(u, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function sd(t4, e) {
  return e - t4;
}
function ja(t4, e) {
  let n = [];
  return r(e), n.sort(sd);
  function r(i) {
    let o = t4[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: u, to: l } = o[s];
      !u && n.indexOf(l) == -1 && r(l);
    }
  }
}
function Wp(t4) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(ja(t4, 0));
  function n(r) {
    let i = [];
    r.forEach((s) => {
      t4[s].forEach(({ term: u, to: l }) => {
        if (!u)
          return;
        let a;
        for (let c = 0; c < i.length; c++)
          i[c][0] == u && (a = i[c][1]);
        ja(t4, l).forEach((c) => {
          a || i.push([u, a = []]), a.indexOf(c) == -1 && a.push(c);
        });
      });
    });
    let o = e[r.join(",")] = new Nt(r.indexOf(t4.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let u = i[s][1].sort(sd);
      o.next.push({ type: i[s][0], next: e[u.join(",")] || n(u) });
    }
    return o;
  }
}
function Kp(t4, e) {
  for (let n = 0, r = [t4]; n < r.length; n++) {
    let i = r[n], o = !i.validEnd, s = [];
    for (let u = 0; u < i.next.length; u++) {
      let { type: l, next: a } = i.next[u];
      s.push(l.name), o && !(l.isText || l.hasRequiredAttrs()) && (o = false), r.indexOf(a) == -1 && r.push(a);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function ud(t4) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t4) {
    let r = t4[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function ld(t4, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t4) {
    let i = e && e[r];
    if (i === void 0) {
      let o = t4[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = i;
  }
  return n;
}
function ad(t4, e, n, r) {
  for (let i in e)
    if (!(i in t4))
      throw new RangeError(`Unsupported attribute ${i} for ${n} of type ${i}`);
  for (let i in t4) {
    let o = t4[i];
    o.validate && o.validate(e[i]);
  }
}
function cd(t4, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Gp(t4, r, e[r]);
  return n;
}
let Va = class fd {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = cd(e, r.attrs), this.defaultAttrs = ud(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Nt.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return true;
    return false;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : ld(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Ke(this, this.computeAttrs(e), v.from(n), F.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = v.from(n), this.checkContent(n), new Ke(this, this.computeAttrs(e), n, F.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = v.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let i = this.contentMatch.matchFragment(n), o = i && i.fillBefore(v.empty, true);
    return o ? new Ke(this, e, n.append(o), F.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return false;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return false;
    return true;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    ad(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return true;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return false;
    return true;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : F.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new fd(o, n, s));
    let i = n.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Jp(t4, e, n) {
  let r = n.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t4}, got ${o}`);
  };
}
class Gp {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Jp(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class li {
  /**
  @internal
  */
  constructor(e, n, r, i) {
    this.name = e, this.rank = n, this.schema = r, this.spec = i, this.attrs = cd(e, i.attrs), this.excluded = null;
    let o = ud(this.attrs);
    this.instance = o ? new F(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new F(this, ld(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new li(o, i++, n, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    ad(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class dd {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let i in e)
      n[i] = e[i];
    n.nodes = X.from(e.nodes), n.marks = X.from(e.marks || {}), this.nodes = Va.compile(this.spec.nodes, this), this.marks = li.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", u = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = Nt.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = u == "_" ? null : u ? Ha(this, u.split(" ")) : u == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Ha(this, s.split(" "));
    }
    this.nodeFromJSON = (i) => Ke.fromJSON(this, i), this.markFromJSON = (i) => F.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Va) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new xr(r, r.defaultAttrs, e, F.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function Ha(t4, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = t4.marks[i], s = o;
    if (o)
      n.push(o);
    else
      for (let u in t4.marks) {
        let l = t4.marks[u];
        (i == "_" || l.spec.group && l.spec.group.split(" ").indexOf(i) > -1) && n.push(s = l);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Zp(t4) {
  return t4.tag != null;
}
function Yp(t4) {
  return t4.style != null;
}
class dt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((i) => {
      if (Zp(i))
        this.tags.push(i);
      else if (Yp(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return false;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new Wa(this, n, false);
    return r.addAll(e, F.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new Wa(this, n, true);
    return r.addAll(e, F.none, n.from, n.to), w.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (e1(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === false)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], u = s.style;
      if (!(u.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      u.length > e.length && (u.charCodeAt(e.length) != 61 || u.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let l = s.getAttrs(n);
          if (l === false)
            continue;
          s.attrs = l || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < n.length; s++) {
        let u = n[s];
        if ((u.priority == null ? 50 : u.priority) < o)
          break;
      }
      n.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Ka(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Ka(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new dt(e, dt.schemaRules(e)));
  }
}
const hd = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
}, Qp = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
}, pd = { ol: true, ul: true }, An = 1, Bs = 2, gn = 4;
function Ua(t4, e, n) {
  return e != null ? (e ? An : 0) | (e === "full" ? Bs : 0) : t4 && t4.whitespace == "pre" ? An | Bs : n & ~gn;
}
class Qn {
  constructor(e, n, r, i, o, s) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = F.none, this.match = o || (s & gn ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(v.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & An)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let n = v.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(v.empty, true))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !hd.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Wa {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = false;
    let i = n.topNode, o, s = Ua(null, n.preserveWhitespace, 0) | (r ? gn : 0);
    i ? o = new Qn(i.type, i.attrs, F.none, true, n.topMatch || i.type.contentMatch, s) : r ? o = new Qn(null, null, F.none, true, null, s) : o = new Qn(e.schema.topNodeType, null, F.none, true, null, s), this.nodes = [o], this.find = n.findPositions, this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, i = this.top, o = i.options & Bs ? "full" : this.localPreserveWS || (i.options & An) > 0;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        o !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = i.content[i.content.length - 1], u = e.previousSibling;
        (!s || u && u.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = true);
    let s = e.nodeName.toLowerCase(), u;
    pd.hasOwnProperty(s) && this.parser.normalizeLists && Xp(e);
    let l = this.options.ruleFromNode && this.options.ruleFromNode(e) || (u = this.parser.matchTag(e, this, r));
    e: if (l ? l.ignore : Qp.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!l || l.skip || l.closeParent) {
      l && l.closeParent ? this.open = Math.max(0, this.open - 1) : l && l.skip.nodeType && (e = l.skip);
      let a, c = this.needsBlock;
      if (hd.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), a = true, o.type || (this.needsBlock = true);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let f = l && l.skip ? n : this.readStyles(e, n);
      f && this.addAll(e, f), a && this.sync(o), this.needsBlock = c;
    } else {
      let a = this.readStyles(e, n);
      a && this.addElementByRule(e, l, a, l.consuming === false ? u : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n, true);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let u = void 0; ; ) {
            let l = this.parser.matchStyle(o, s, this, u);
            if (!l)
              break;
            if (l.ignore)
              return null;
            if (l.clearMark ? n = n.filter((a) => !l.clearMark(a)) : n = n.concat(this.parser.schema.marks[l.mark].create(l.attrs)), l.consuming === false)
              u = l;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, i) {
    let o, s;
    if (n.node)
      if (s = this.parser.schema.nodes[n.node], s.isLeaf)
        this.insertNode(s.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let l = this.enter(s, n.attrs || null, r, n.preserveWhitespace);
        l && (o = true, r = l);
      }
    else {
      let l = this.parser.schema.marks[n.mark];
      r = r.concat(l.create(n.attrs));
    }
    let u = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((l) => this.insertNode(l, r, false));
    else {
      let l = e;
      typeof n.contentElement == "string" ? l = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? l = n.contentElement(e) : n.contentElement && (l = n.contentElement), this.findAround(e, l, true), this.addAll(l, r), this.findAround(e, l, false);
    }
    o && this.sync(u) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, u = i == null ? null : e.childNodes[i]; s != u; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let i, o;
    for (let s = this.open, u = 0; s >= 0; s--) {
      let l = this.nodes[s], a = l.findWrapping(e);
      if (a && (!i || i.length > a.length + u) && (i = a, o = l, !a.length))
        break;
      if (l.solid) {
        if (r)
          break;
        u += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      n = this.enterInner(i[s], null, n, false);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let i = this.findPlace(e, n, r);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = F.none;
      for (let u of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(u.type) : Ja(u.type, e.type)) && (s = u.addToSet(s));
      return o.content.push(e.mark(s)), true;
    }
    return false;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, i) {
    let o = this.findPlace(e.create(n), r, false);
    return o && (o = this.enterInner(e, n, r, true, i)), o;
  }
  // Open a node of the given type
  enterInner(e, n, r, i = false, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let u = Ua(e, o, s.options);
    s.options & gn && s.content.length == 0 && (u |= gn);
    let l = F.none;
    return r = r.filter((a) => (s.type ? s.type.allowsMarkType(a.type) : Ja(a.type, e)) ? (l = a.addToSet(l), false) : true), this.nodes.push(new Qn(e, n, l, i, null, u)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = false) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, true;
      this.localPreserveWS && (this.nodes[n].options |= An);
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && n.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (u, l) => {
      for (; u >= 0; u--) {
        let a = n[u];
        if (a == "") {
          if (u == n.length - 1 || u == 0)
            continue;
          for (; l >= o; l--)
            if (s(u - 1, l))
              return true;
          return false;
        } else {
          let c = l > 0 || l == 0 && i ? this.nodes[l].type : r && l >= o ? r.node(l - o).type : null;
          if (!c || c.name != a && !c.isInGroup(a))
            return false;
          l--;
        }
      }
      return true;
    };
    return s(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Xp(t4) {
  for (let e = t4.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && pd.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function e1(t4, e) {
  return (t4.matches || t4.msMatchesSelector || t4.webkitMatchesSelector || t4.mozMatchesSelector).call(t4, e);
}
function Ka(t4) {
  let e = {};
  for (let n in t4)
    e[n] = t4[n];
  return e;
}
function Ja(t4, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let i = n[r];
    if (!i.allowsMarkType(t4))
      continue;
    let o = [], s = (u) => {
      o.push(u);
      for (let l = 0; l < u.edgeCount; l++) {
        let { type: a, next: c } = u.edge(l);
        if (a == e || o.indexOf(c) < 0 && s(c))
          return true;
      }
    };
    if (s(i.contentMatch))
      return true;
  }
}
class Bt {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = Qo(n).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let u = 0, l = 0;
        for (; u < o.length && l < s.marks.length; ) {
          let a = s.marks[l];
          if (!this.marks[a.type.name]) {
            l++;
            continue;
          }
          if (!a.eq(o[u][0]) || a.type.spec.spanning === false)
            break;
          u++, l++;
        }
        for (; u < o.length; )
          i = o.pop()[1];
        for (; l < s.marks.length; ) {
          let a = s.marks[l++], c = this.serializeMark(a, s.isInline, n);
          c && (o.push([a, i]), i.appendChild(c.dom), i = c.contentDOM || c.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: i } = cr(Qo(n), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, n);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let i = this.marks[e.type.name];
    return i && cr(Qo(r), i(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, i) {
    return cr(e, n, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Bt(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = Ga(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Ga(e.marks);
  }
}
function Ga(t4) {
  let e = {};
  for (let n in t4) {
    let r = t4[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function Qo(t4) {
  return t4.document || window.document;
}
const Za = /* @__PURE__ */ new WeakMap();
function t1(t4) {
  let e = Za.get(t4);
  return e === void 0 && Za.set(t4, e = n1(t4)), e;
}
function n1(t4) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            n(r[i]);
      else
        for (let i in r)
          n(r[i]);
  }
  return n(t4), e;
}
function cr(t4, e, n, r) {
  if (typeof e == "string")
    return { dom: t4.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = t1(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (n = i.slice(0, s), i = i.slice(s + 1));
  let u, l = n ? t4.createElementNS(n, i) : t4.createElement(i), a = e[1], c = 1;
  if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
    c = 2;
    for (let f in a)
      if (a[f] != null) {
        let d = f.indexOf(" ");
        d > 0 ? l.setAttributeNS(f.slice(0, d), f.slice(d + 1), a[f]) : f == "style" && l.style ? l.style.cssText = a[f] : l.setAttribute(f, a[f]);
      }
  }
  for (let f = c; f < e.length; f++) {
    let d = e[f];
    if (d === 0) {
      if (f < e.length - 1 || f > c)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: l, contentDOM: l };
    } else {
      let { dom: h, contentDOM: p } = cr(t4, d, n, r);
      if (l.appendChild(h), p) {
        if (u)
          throw new RangeError("Multiple content holes");
        u = p;
      }
    }
  }
  return { dom: l, contentDOM: u };
}
const md = 65535, gd = Math.pow(2, 16);
function r1(t4, e) {
  return t4 + e * gd;
}
function Ya(t4) {
  return t4 & md;
}
function i1(t4) {
  return (t4 - (t4 & md)) / gd;
}
const bd = 1, yd = 2, fr = 4, xd = 8;
class Ls {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & xd) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (bd | fr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (yd | fr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & fr) > 0;
  }
}
class pe {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = false) {
    if (this.ranges = e, this.inverted = n, !e.length && pe.empty)
      return pe.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = Ya(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        n += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + n + i1(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, false);
  }
  map(e, n = 1) {
    return this._map(e, n, true);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let u = 0; u < this.ranges.length; u += 3) {
      let l = this.ranges[u] - (this.inverted ? i : 0);
      if (l > e)
        break;
      let a = this.ranges[u + o], c = this.ranges[u + s], f = l + a;
      if (e <= f) {
        let d = a ? e == l ? -1 : e == f ? 1 : n : n, h = l + i + (d < 0 ? 0 : c);
        if (r)
          return h;
        let p = e == (n < 0 ? l : f) ? null : r1(u / 3, e - l), m = e == l ? yd : e == f ? bd : fr;
        return (n < 0 ? e != l : e != f) && (m |= xd), new Ls(h, m, p);
      }
      i += c - a;
    }
    return r ? e + i : new Ls(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, i = Ya(n), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let u = 0; u < this.ranges.length; u += 3) {
      let l = this.ranges[u] - (this.inverted ? r : 0);
      if (l > e)
        break;
      let a = this.ranges[u + o], c = l + a;
      if (e <= c && u == i * 3)
        return true;
      r += this.ranges[u + s] - a;
    }
    return false;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], u = s - (this.inverted ? o : 0), l = s + (this.inverted ? 0 : o), a = this.ranges[i + n], c = this.ranges[i + r];
      e(u, u + a, l, l + c), o += c - a;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new pe(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? pe.empty : new pe(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
pe.empty = new pe([]);
class Dn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, n, r = 0, i = e ? e.length : 0) {
    this.mirror = n, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || n);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new Dn(this._maps, this.mirror, e, n);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = true), this.to = this._maps.push(e), n != null && this.setMirror(this._maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this._maps.length; n < e._maps.length; n++) {
      let i = e.getMirror(n);
      this.appendMap(e._maps[n], i != null && i < n ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this._maps.length + e._maps.length; n >= 0; n--) {
      let i = e.getMirror(n);
      this.appendMap(e._maps[n].invert(), i != null && i > n ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Dn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, true);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, false);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], u = s.mapResult(e, n);
      if (u.recover != null) {
        let l = this.getMirror(o);
        if (l != null && l > o && l < this.to) {
          o = l, e = this._maps[l].recover(u.recover);
          continue;
        }
      }
      i |= u.delInfo, e = u.pos;
    }
    return r ? e : new Ls(e, i, null);
  }
}
const Xo = /* @__PURE__ */ Object.create(null);
class oe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return pe.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Xo[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in Xo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Xo[e] = n, n.prototype.jsonID = e, n;
  }
}
class U {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new U(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new U(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, i) {
    try {
      return U.ok(e.replace(n, r, i));
    } catch (o) {
      if (o instanceof gr)
        return U.fail(o.message);
      throw o;
    }
  }
}
function bu(t4, e, n) {
  let r = [];
  for (let i = 0; i < t4.childCount; i++) {
    let o = t4.child(i);
    o.content.size && (o = o.copy(bu(o.content, e, o))), o.isInline && (o = e(o, n, i)), r.push(o);
  }
  return v.fromArray(r);
}
class lt extends oe {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new w(bu(n.content, (s, u) => !s.isAtom || !u.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), n.openStart, n.openEnd);
    return U.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new De(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new lt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof lt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new lt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new lt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
oe.jsonID("addMark", lt);
class De extends oe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new w(bu(n.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), n.openStart, n.openEnd);
    return U.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new lt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new De(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof De && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new De(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new De(n.from, n.to, e.markFromJSON(n.mark));
  }
}
oe.jsonID("removeMark", De);
class at extends oe {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return U.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return U.fromReplace(e, this.pos, this.pos + 1, new w(v.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let i = 0; i < n.marks.length; i++)
          if (!n.marks[i].isInSet(r))
            return new at(this.pos, n.marks[i]);
        return new at(this.pos, this.mark);
      }
    }
    return new Rt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new at(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new at(n.pos, e.markFromJSON(n.mark));
  }
}
oe.jsonID("addNodeMark", at);
class Rt extends oe {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return U.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return U.fromReplace(e, this.pos, this.pos + 1, new w(v.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new at(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Rt(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Rt(n.pos, e.markFromJSON(n.mark));
  }
}
oe.jsonID("removeNodeMark", Rt);
class J extends oe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, i = false) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && zs(e, this.from, this.to) ? U.fail("Structure replace would overwrite content") : U.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new pe([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new J(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new J(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof J) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? w.empty : new w(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new J(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? w.empty : new w(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new J(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = true), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new J(n.from, n.to, w.fromJSON(e, n.slice), !!n.structure);
  }
}
oe.jsonID("replace", J);
class Z extends oe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, i, o, s, u = false) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = u;
  }
  apply(e) {
    if (this.structure && (zs(e, this.from, this.gapFrom) || zs(e, this.gapTo, this.to)))
      return U.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return U.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? U.fromReplace(e, this.from, this.to, r) : U.fail("Content does not fit in gap");
  }
  getMap() {
    return new pe([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new Z(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || i < n.pos || o > r.pos ? null : new Z(n.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = true), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Z(n.from, n.to, n.gapFrom, n.gapTo, w.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
oe.jsonID("replaceAround", Z);
function zs(t4, e, n) {
  let r = t4.resolve(e), i = n - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return true;
      s = s.firstChild, i--;
    }
  }
  return false;
}
function o1(t4, e, n, r) {
  let i = [], o = [], s, u;
  t4.doc.nodesBetween(e, n, (l, a, c) => {
    if (!l.isInline)
      return;
    let f = l.marks;
    if (!r.isInSet(f) && c.type.allowsMarkType(r.type)) {
      let d = Math.max(a, e), h = Math.min(a + l.nodeSize, n), p = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(p) || (s && s.to == d && s.mark.eq(f[m]) ? s.to = h : i.push(s = new De(d, h, f[m])));
      u && u.to == d ? u.to = h : o.push(u = new lt(d, h, r));
    }
  }), i.forEach((l) => t4.step(l)), o.forEach((l) => t4.step(l));
}
function s1(t4, e, n, r) {
  let i = [], o = 0;
  t4.doc.nodesBetween(e, n, (s, u) => {
    if (!s.isInline)
      return;
    o++;
    let l = null;
    if (r instanceof li) {
      let a = s.marks, c;
      for (; c = r.isInSet(a); )
        (l || (l = [])).push(c), a = c.removeFromSet(a);
    } else r ? r.isInSet(s.marks) && (l = [r]) : l = s.marks;
    if (l && l.length) {
      let a = Math.min(u + s.nodeSize, n);
      for (let c = 0; c < l.length; c++) {
        let f = l[c], d;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && f.eq(i[h].style) && (d = p);
        }
        d ? (d.to = a, d.step = o) : i.push({ style: f, from: Math.max(u, e), to: a, step: o });
      }
    }
  }), i.forEach((s) => t4.step(new De(s.from, s.to, s.style)));
}
function yu(t4, e, n, r = n.contentMatch, i = true) {
  let o = t4.doc.nodeAt(e), s = [], u = e + 1;
  for (let l = 0; l < o.childCount; l++) {
    let a = o.child(l), c = u + a.nodeSize, f = r.matchType(a.type);
    if (!f)
      s.push(new J(u, c, w.empty));
    else {
      r = f;
      for (let d = 0; d < a.marks.length; d++)
        n.allowsMarkType(a.marks[d].type) || t4.step(new De(u, c, a.marks[d]));
      if (i && a.isText && n.whitespace != "pre") {
        let d, h = /\r?\n|\r/g, p;
        for (; d = h.exec(a.text); )
          p || (p = new w(v.from(n.schema.text(" ", n.allowedMarks(a.marks))), 0, 0)), s.push(new J(u + d.index, u + d.index + d[0].length, p));
      }
    }
    u = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(v.empty, true);
    t4.replace(u, u, new w(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    t4.step(s[l]);
}
function u1(t4, e, n) {
  return (e == 0 || t4.canReplace(e, t4.childCount)) && (n == t4.childCount || t4.canReplace(0, n));
}
function nn(t4) {
  let n = t4.parent.content.cutByIndex(t4.startIndex, t4.endIndex);
  for (let r = t4.depth; ; --r) {
    let i = t4.$from.node(r), o = t4.$from.index(r), s = t4.$to.indexAfter(r);
    if (r < t4.depth && i.canReplace(o, s, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !u1(i, o, s))
      break;
  }
  return null;
}
function l1(t4, e, n) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), u = i.after(o + 1), l = s, a = u, c = v.empty, f = 0;
  for (let p = o, m = false; p > n; p--)
    m || r.index(p) > 0 ? (m = true, c = v.from(r.node(p).copy(c)), f++) : l--;
  let d = v.empty, h = 0;
  for (let p = o, m = false; p > n; p--)
    m || i.after(p + 1) < i.end(p) ? (m = true, d = v.from(i.node(p).copy(d)), h++) : a++;
  t4.step(new Z(l, a, s, u, new w(c.append(d), f, h), c.size - f, true));
}
function kd(t4, e, n = null, r = t4) {
  let i = a1(t4, e), o = i && c1(r, e);
  return o ? i.map(Qa).concat({ type: e, attrs: n }).concat(o.map(Qa)) : null;
}
function Qa(t4) {
  return { type: t4, attrs: null };
}
function a1(t4, e) {
  let { parent: n, startIndex: r, endIndex: i } = t4, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return n.canReplaceWith(r, i, s) ? o : null;
}
function c1(t4, e) {
  let { parent: n, startIndex: r, endIndex: i } = t4, o = n.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let l = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let a = r; l && a < i; a++)
    l = l.matchType(n.child(a).type);
  return !l || !l.validEnd ? null : s;
}
function f1(t4, e, n) {
  let r = v.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (r.size) {
      let u = n[s].type.contentMatch.matchFragment(r);
      if (!u || !u.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = v.from(n[s].type.create(n[s].attrs, r));
  }
  let i = e.start, o = e.end;
  t4.step(new Z(i, o, i, o, new w(r, 0, 0), n.length, true));
}
function d1(t4, e, n, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = t4.steps.length;
  t4.doc.nodesBetween(e, n, (s, u) => {
    let l = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, l) && h1(t4.doc, t4.mapping.slice(o).map(u), r)) {
      let a = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? a = false : !h && p && (a = true);
      }
      a === false && vd(t4, s, u, o), yu(t4, t4.mapping.slice(o).map(u, 1), r, void 0, a === null);
      let c = t4.mapping.slice(o), f = c.map(u, 1), d = c.map(u + s.nodeSize, 1);
      return t4.step(new Z(f, d, f + 1, d - 1, new w(v.from(r.create(l, null, s.marks)), 0, 0), 1, true)), a === true && Cd(t4, s, u, o), false;
    }
  });
}
function Cd(t4, e, n, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, u = /\r?\n|\r/g;
      for (; s = u.exec(i.text); ) {
        let l = t4.mapping.slice(r).map(n + 1 + o + s.index);
        t4.replaceWith(l, l + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function vd(t4, e, n, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = t4.mapping.slice(r).map(n + 1 + o);
      t4.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function h1(t4, e, n) {
  let r = t4.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, n);
}
function p1(t4, e, n, r, i) {
  let o = t4.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  n || (n = o.type);
  let s = n.create(r, null, i || o.marks);
  if (o.isLeaf)
    return t4.replaceWith(e, e + o.nodeSize, s);
  if (!n.validContent(o.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t4.step(new Z(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new w(v.from(s), 0, 0), 1, true));
}
function Je(t4, e, n = 1, r) {
  let i = t4.resolve(e), o = i.depth - n, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return false;
  for (let a = i.depth - 1, c = n - 2; a > o; a--, c--) {
    let f = i.node(a), d = i.index(a);
    if (f.type.spec.isolating)
      return false;
    let h = f.content.cutByIndex(d, f.childCount), p = r && r[c + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[c] || f;
    if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(h))
      return false;
  }
  let u = i.indexAfter(o), l = r && r[0];
  return i.node(o).canReplaceWith(u, u, l ? l.type : i.node(o + 1).type);
}
function m1(t4, e, n = 1, r) {
  let i = t4.doc.resolve(e), o = v.empty, s = v.empty;
  for (let u = i.depth, l = i.depth - n, a = n - 1; u > l; u--, a--) {
    o = v.from(i.node(u).copy(o));
    let c = r && r[a];
    s = v.from(c ? c.type.create(c.attrs, s) : i.node(u).copy(s));
  }
  t4.step(new J(e, e, new w(o.append(s), n, n), true));
}
function Lt(t4, e) {
  let n = t4.resolve(e), r = n.index();
  return Ed(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function g1(t4, e) {
  e.content.size || t4.type.compatibleContent(e.type);
  let n = t4.contentMatchAt(t4.childCount), { linebreakReplacement: r } = t4.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? t4.type.schema.nodes.text : o.type;
    if (n = n.matchType(s), !n || !t4.type.allowsMarks(o.marks))
      return false;
  }
  return n.validEnd;
}
function Ed(t4, e) {
  return !!(t4 && e && !t4.isLeaf && g1(t4, e));
}
function ai(t4, e, n = -1) {
  let r = t4.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, u = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (o = r.node(i + 1), u++, s = r.node(i).maybeChild(u)) : (o = r.node(i).maybeChild(u - 1), s = r.node(i + 1)), o && !o.isTextblock && Ed(o, s) && r.node(i).canReplace(u, u + 1))
      return e;
    if (i == 0)
      break;
    e = n < 0 ? r.before(i) : r.after(i);
  }
}
function b1(t4, e, n) {
  let r = null, { linebreakReplacement: i } = t4.doc.type.schema, o = t4.doc.resolve(e - n), s = o.node().type;
  if (i && s.inlineContent) {
    let c = s.whitespace == "pre", f = !!s.contentMatch.matchType(i);
    c && !f ? r = false : !c && f && (r = true);
  }
  let u = t4.steps.length;
  if (r === false) {
    let c = t4.doc.resolve(e + n);
    vd(t4, c.node(), c.before(), u);
  }
  s.inlineContent && yu(t4, e + n - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let l = t4.mapping.slice(u), a = l.map(e - n);
  if (t4.step(new J(a, l.map(e + n, -1), w.empty, true)), r === true) {
    let c = t4.doc.resolve(a);
    Cd(t4, c.node(), c.before(), t4.steps.length);
  }
  return t4;
}
function y1(t4, e, n) {
  let r = t4.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, n))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function Sd(t4, e, n) {
  let r = t4.resolve(e);
  if (!n.content.size)
    return e;
  let i = n.content;
  for (let o = 0; o < n.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (n.openStart == 0 && n.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let u = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, l = r.index(s) + (u > 0 ? 1 : 0), a = r.node(s), c = false;
      if (o == 1)
        c = a.canReplace(l, l, i);
      else {
        let f = a.contentMatchAt(l).findWrapping(i.firstChild.type);
        c = f && a.canReplaceWith(l, l, f[0]);
      }
      if (c)
        return u == 0 ? r.pos : u < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function ci(t4, e, n = e, r = w.empty) {
  if (e == n && !r.size)
    return null;
  let i = t4.resolve(e), o = t4.resolve(n);
  return wd(i, o, r) ? new J(e, n, r) : new x1(i, o, r).fit();
}
function wd(t4, e, n) {
  return !n.openStart && !n.openEnd && t4.start() == e.start() && t4.parent.canReplace(t4.index(), e.index(), n.content);
}
class x1 {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = v.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = v.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let a = this.findFittable();
      a ? this.placeNodes(a) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, u = i.depth;
    for (; s && u && o.childCount == 1; )
      o = o.firstChild.content, s--, u--;
    let l = new w(o, s, u);
    return e > -1 ? new Z(r.pos, e, this.$to.pos, this.$to.end(), l, n) : l.size || r.pos != this.$to.pos ? new J(r.pos, i.pos, l) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = es(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let u = this.depth; u >= 0; u--) {
          let { type: l, match: a } = this.frontier[u], c, f = null;
          if (n == 1 && (s ? a.matchType(s.type) || (f = a.fillBefore(v.from(s), false)) : o && l.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: u, parent: o, inject: f };
          if (n == 2 && s && (c = a.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: u, parent: o, wrap: c };
          if (o && a.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = es(e, n);
    return !i.childCount || i.firstChild.isLeaf ? false : (this.unplaced = new w(e, n + 1, Math.max(r, i.size + n >= e.size - r ? n + 1 : 0)), true);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, i = es(e, n);
    if (i.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + i.size;
      this.unplaced = new w(fn(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new w(fn(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: i, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, u = r ? r.content : s.content, l = s.openStart - e, a = 0, c = [], { match: f, type: d } = this.frontier[n];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        c.push(i.child(m));
      f = f.matchFragment(i);
    }
    let h = u.size + e - (s.content.size - s.openEnd);
    for (; a < u.childCount; ) {
      let m = u.child(a), g = f.matchType(m.type);
      if (!g)
        break;
      a++, (a > 1 || l == 0 || m.content.size) && (f = g, c.push(Ad(m.mark(d.allowedMarks(m.marks)), a == 1 ? l : 0, a == u.childCount ? h : -1)));
    }
    let p = a == u.childCount;
    p || (h = -1), this.placed = dn(this.placed, n, v.from(c)), this.frontier[n].match = f, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = u; m < h; m++) {
      let b = g.lastChild;
      this.frontier.push({ type: b.type, match: b.contentMatchAt(b.childCount) }), g = b.content;
    }
    this.unplaced = p ? e == 0 ? w.empty : new w(fn(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new w(fn(s.content, e, a), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !ts(this.$to, this.$to.depth, e.type, e.match, false) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: i } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = ts(e, n, i, r, o);
      if (s) {
        for (let u = n - 1; u >= 0; u--) {
          let { match: l, type: a } = this.frontier[u], c = ts(e, u, a, l, true);
          if (!c || c.childCount)
            continue e;
        }
        return { depth: n, fit: s, move: o ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = dn(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, true, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = dn(this.placed, this.depth, v.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(v.empty, true);
    n.childCount && (this.placed = dn(this.placed, this.frontier.length, n));
  }
}
function fn(t4, e, n) {
  return e == 0 ? t4.cutByIndex(n, t4.childCount) : t4.replaceChild(0, t4.firstChild.copy(fn(t4.firstChild.content, e - 1, n)));
}
function dn(t4, e, n) {
  return e == 0 ? t4.append(n) : t4.replaceChild(t4.childCount - 1, t4.lastChild.copy(dn(t4.lastChild.content, e - 1, n)));
}
function es(t4, e) {
  for (let n = 0; n < e; n++)
    t4 = t4.firstChild.content;
  return t4;
}
function Ad(t4, e, n) {
  if (e <= 0)
    return t4;
  let r = t4.content;
  return e > 1 && (r = r.replaceChild(0, Ad(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t4.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t4.type.contentMatch.matchFragment(r).fillBefore(v.empty, true)))), t4.copy(r);
}
function ts(t4, e, n, r, i) {
  let o = t4.node(e), s = i ? t4.indexAfter(e) : t4.index(e);
  if (s == o.childCount && !n.compatibleContent(o.type))
    return null;
  let u = r.fillBefore(o.content, true, s);
  return u && !k1(n, o.content, s) ? u : null;
}
function k1(t4, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t4.allowsMarks(e.child(r).marks))
      return true;
  return false;
}
function C1(t4) {
  return t4.spec.defining || t4.spec.definingForContent;
}
function v1(t4, e, n, r) {
  if (!r.size)
    return t4.deleteRange(e, n);
  let i = t4.doc.resolve(e), o = t4.doc.resolve(n);
  if (wd(i, o, r))
    return t4.step(new J(e, n, r));
  let s = Td(i, t4.doc.resolve(n));
  s[s.length - 1] == 0 && s.pop();
  let u = -(i.depth + 1);
  s.unshift(u);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let p = i.node(d).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(d) > -1 ? u = d : i.before(d) == h && s.splice(1, 0, -d);
  }
  let l = s.indexOf(u), a = [], c = r.openStart;
  for (let d = r.content, h = 0; ; h++) {
    let p = d.firstChild;
    if (a.push(p), h == r.openStart)
      break;
    d = p.content;
  }
  for (let d = c - 1; d >= 0; d--) {
    let h = a[d], p = C1(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(u) - 1)))
      c = d;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let h = (d + c + 1) % (r.openStart + 1), p = a[h];
    if (p)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + l) % s.length], b = true;
        g < 0 && (b = false, g = -g);
        let y = i.node(g - 1), x = i.index(g - 1);
        if (y.canReplaceWith(x, x, p.type, p.marks))
          return t4.replace(i.before(g), b ? o.after(g) : n, new w(Dd(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let f = t4.steps.length;
  for (let d = s.length - 1; d >= 0 && (t4.replace(e, n, r), !(t4.steps.length > f)); d--) {
    let h = s[d];
    h < 0 || (e = i.before(h), n = o.after(h));
  }
}
function Dd(t4, e, n, r, i) {
  if (e < n) {
    let o = t4.firstChild;
    t4 = t4.replaceChild(0, o.copy(Dd(o.content, e + 1, n, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(t4).append(t4);
    t4 = s.append(o.matchFragment(s).fillBefore(v.empty, true));
  }
  return t4;
}
function E1(t4, e, n, r) {
  if (!r.isInline && e == n && t4.doc.resolve(e).parent.content.size) {
    let i = y1(t4.doc, e, r.type);
    i != null && (e = n = i);
  }
  t4.replaceRange(e, n, new w(v.from(r), 0, 0));
}
function S1(t4, e, n) {
  let r = t4.doc.resolve(e), i = t4.doc.resolve(n), o = Td(r, i);
  for (let s = 0; s < o.length; s++) {
    let u = o[s], l = s == o.length - 1;
    if (l && u == 0 || r.node(u).type.contentMatch.validEnd)
      return t4.delete(r.start(u), i.end(u));
    if (u > 0 && (l || r.node(u - 1).canReplace(r.index(u - 1), i.indexAfter(u - 1))))
      return t4.delete(r.before(u), i.after(u));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && n > r.end(s) && i.end(s) - n != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return t4.delete(r.before(s), n);
  t4.delete(e, n);
}
function Td(t4, e) {
  let n = [], r = Math.min(t4.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = t4.start(i);
    if (o < t4.pos - (t4.depth - i) || e.end(i) > e.pos + (e.depth - i) || t4.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == t4.depth && i == e.depth && t4.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && n.push(i);
  }
  return n;
}
class Kt extends oe {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return U.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let i = n.type.create(r, null, n.marks);
    return U.fromReplace(e, this.pos, this.pos + 1, new w(v.from(i), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return pe.empty;
  }
  invert(e) {
    return new Kt(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Kt(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Kt(n.pos, n.attr, n.value);
  }
}
oe.jsonID("attr", Kt);
class Tn extends oe {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      n[i] = e.attrs[i];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return U.ok(r);
  }
  getMap() {
    return pe.empty;
  }
  invert(e) {
    return new Tn(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Tn(n.attr, n.value);
  }
}
oe.jsonID("docAttr", Tn);
let Zt = class extends Error {
};
Zt = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
Zt.prototype = Object.create(Error.prototype);
Zt.prototype.constructor = Zt;
Zt.prototype.name = "TransformError";
class Md {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Dn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new Zt(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = w.empty) {
    let i = ci(this.doc, e, n, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new w(v.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, w.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return v1(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return E1(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return S1(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return l1(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return b1(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return f1(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, i = null) {
    return d1(this, e, n, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, i) {
    return p1(this, e, n, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new Kt(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new Tn(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new at(e, n)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (n instanceof F)
      n.isInSet(r.marks) && this.step(new Rt(e, n));
    else {
      let i = r.marks, o, s = [];
      for (; o = n.isInSet(i); )
        s.push(new Rt(e, o)), i = o.removeFromSet(i);
      for (let u = s.length - 1; u >= 0; u--)
        this.step(s[u]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, n = 1, r) {
    return m1(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return o1(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return s1(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return yu(this, e, n, r), this;
  }
}
const ns = /* @__PURE__ */ Object.create(null);
class R {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new w1(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return false;
    return true;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = w.empty) {
    let r = n.content.lastChild, i = null;
    for (let u = 0; u < n.openEnd; u++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let u = 0; u < s.length; u++) {
      let { $from: l, $to: a } = s[u], c = e.mapping.slice(o);
      e.replaceRange(c.map(l.pos), c.map(a.pos), u ? w.empty : n), u == 0 && tc(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: u } = i[o], l = e.mapping.slice(r), a = l.map(s.pos), c = l.map(u.pos);
      o ? e.deleteRange(a, c) : (e.replaceRangeWith(a, c, n), tc(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = false) {
    let i = e.parent.inlineContent ? new O(e) : jt(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = n < 0 ? jt(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : jt(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new me(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return jt(e, e, 0, 0, 1) || new me(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return jt(e, e, e.content.size, e.childCount, -1) || new me(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = ns[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in ns)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return ns[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return O.between(this.$anchor, this.$head).getBookmark();
  }
}
R.prototype.visible = true;
class w1 {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Xa = false;
function ec(t4) {
  !Xa && !t4.parent.inlineContent && (Xa = true, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t4.parent.type.name + ")"));
}
class O extends R {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    ec(e), ec(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return R.near(r);
    let i = e.resolve(n.map(this.anchor));
    return new O(i.parent.inlineContent ? i : r, r);
  }
  replace(e, n = w.empty) {
    if (super.replace(e, n), n == w.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof O && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new fi(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new O(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let i = e.resolve(n);
    return new this(i, r == n ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let i = e.pos - n.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = R.findFrom(n, r, true) || R.findFrom(n, -r, true);
      if (o)
        n = o.$head;
      else
        return R.near(n, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = n : (e = (R.findFrom(e, -r, true) || R.findFrom(e, r, true)).$anchor, e.pos < n.pos != i < 0 && (e = n))), new O(e, n);
  }
}
R.jsonID("text", O);
class fi {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new fi(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return O.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class T extends R {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: i } = n.mapResult(this.anchor), o = e.resolve(i);
    return r ? R.near(o) : new T(o);
  }
  content() {
    return new w(v.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof T && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new xu(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new T(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new T(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== false;
  }
}
T.prototype.visible = false;
R.jsonID("node", T);
class xu {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new fi(r, r) : new xu(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && T.isSelectable(r) ? new T(n) : R.near(n);
  }
}
class me extends R {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = w.empty) {
    if (n == w.empty) {
      e.delete(0, e.doc.content.size);
      let r = R.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new me(e);
  }
  map(e) {
    return new me(e);
  }
  eq(e) {
    return e instanceof me;
  }
  getBookmark() {
    return A1;
  }
}
R.jsonID("all", me);
const A1 = {
  map() {
    return this;
  },
  resolve(t4) {
    return new me(t4);
  }
};
function jt(t4, e, n, r, i, o = false) {
  if (e.inlineContent)
    return O.create(t4, n);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let u = e.child(s);
    if (u.isAtom) {
      if (!o && T.isSelectable(u))
        return T.create(t4, n - (i < 0 ? u.nodeSize : 0));
    } else {
      let l = jt(t4, u, n + i, i < 0 ? u.childCount : 0, i, o);
      if (l)
        return l;
    }
    n += u.nodeSize * i;
  }
  return null;
}
function tc(t4, e, n) {
  let r = t4.steps.length - 1;
  if (r < e)
    return;
  let i = t4.steps[r];
  if (!(i instanceof J || i instanceof Z))
    return;
  let o = t4.mapping.maps[r], s;
  o.forEach((u, l, a, c) => {
    s == null && (s = c);
  }), t4.setSelection(R.near(t4.doc.resolve(s), n));
}
const nc = 1, Xn = 2, rc = 4;
class D1 extends Md {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | nc) & ~Xn, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & nc) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Xn, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return F.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Xn) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~Xn, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = true) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || F.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let i = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(i.text(e), true) : this.deleteSelection();
    {
      if (r == null && (r = n), r = r ?? n, !e)
        return this.deleteRange(n, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(n);
        o = r == n ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, i.text(e, o)), this.selection.empty || this.setSelection(R.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return false;
    return true;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= rc, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & rc) > 0;
  }
}
function ic(t4, e) {
  return !e || !t4 ? t4 : t4.bind(e);
}
class hn {
  constructor(e, n, r) {
    this.name = e, this.init = ic(n.init, r), this.apply = ic(n.apply, r);
  }
}
const T1 = [
  new hn("doc", {
    init(t4) {
      return t4.doc || t4.schema.topNodeType.createAndFill();
    },
    apply(t4) {
      return t4.doc;
    }
  }),
  new hn("selection", {
    init(t4, e) {
      return t4.selection || R.atStart(e.doc);
    },
    apply(t4) {
      return t4.selection;
    }
  }),
  new hn("storedMarks", {
    init(t4) {
      return t4.storedMarks || null;
    },
    apply(t4, e, n, r) {
      return r.selection.$cursor ? t4.storedMarks : null;
    }
  }),
  new hn("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t4, e) {
      return t4.scrolledIntoView ? e + 1 : e;
    }
  })
];
class rs {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = T1.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new hn(r.key, r.spec.state, r));
    });
  }
}
class Wt {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return false;
      }
    return true;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = false;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let u = this.config.plugins[s];
        if (u.spec.appendTransaction) {
          let l = i ? i[s].n : 0, a = i ? i[s].state : this, c = l < n.length && u.spec.appendTransaction.call(u, l ? n.slice(l) : n, a, r);
          if (c && r.filterTransaction(c, s)) {
            if (c.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < s ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(c), r = r.applyInner(c), o = true;
          }
          i && (i[s] = { state: r, n: n.length });
        }
      }
      if (!o)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new Wt(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      n[o.name] = o.apply(e, this[o.name], this, n);
    }
    return n;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new D1(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new rs(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Wt(n);
    for (let i = 0; i < n.fields.length; i++)
      r[n.fields[i].name] = n.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new rs(this.schema, e.plugins), r = n.fields, i = new Wt(n);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (n[r] = o.toJSON.call(i, this[i.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new rs(e.schema, e.plugins), o = new Wt(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = Ke.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        o.selection = R.fromJSON(o.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (o.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let u in r) {
            let l = r[u], a = l.spec.state;
            if (l.key == s.name && a && a.fromJSON && Object.prototype.hasOwnProperty.call(n, u)) {
              o[s.name] = a.fromJSON.call(l, e, n[u], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function _d(t4, e, n) {
  for (let r in t4) {
    let i = t4[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = _d(i, e, {})), n[r] = i;
  }
  return n;
}
class P {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && _d(e.props, this, this.props), this.key = e.key ? e.key.key : Od("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const is = /* @__PURE__ */ Object.create(null);
function Od(t4) {
  return t4 in is ? t4 + "$" + ++is[t4] : (is[t4] = 0, t4 + "$");
}
class W {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Od(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ku = (t4, e) => t4.selection.empty ? false : (e && e(t4.tr.deleteSelection().scrollIntoView()), true);
function Nd(t4, e) {
  let { $cursor: n } = t4.selection;
  return !n || (e ? !e.endOfTextblock("backward", t4) : n.parentOffset > 0) ? null : n;
}
const Rd = (t4, e, n) => {
  let r = Nd(t4, n);
  if (!r)
    return false;
  let i = Cu(r);
  if (!i) {
    let s = r.blockRange(), u = s && nn(s);
    return u == null ? false : (e && e(t4.tr.lift(s, u).scrollIntoView()), true);
  }
  let o = i.nodeBefore;
  if (jd(t4, i, e, -1))
    return true;
  if (r.parent.content.size == 0 && (Yt(o, "end") || T.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let u = ci(t4.doc, r.before(s), r.after(s), w.empty);
      if (u && u.slice.size < u.to - u.from) {
        if (e) {
          let l = t4.tr.step(u);
          l.setSelection(Yt(o, "end") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : T.create(l.doc, i.pos - o.nodeSize)), e(l.scrollIntoView());
        }
        return true;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t4.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), true) : false;
}, M1 = (t4, e, n) => {
  let r = Nd(t4, n);
  if (!r)
    return false;
  let i = Cu(r);
  return i ? Id(t4, i, e) : false;
}, _1 = (t4, e, n) => {
  let r = Pd(t4, n);
  if (!r)
    return false;
  let i = vu(r);
  return i ? Id(t4, i, e) : false;
};
function Id(t4, e, n) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return false;
    let c = i.lastChild;
    if (!c)
      return false;
    i = c;
  }
  let s = e.nodeAfter, u = s, l = e.pos + 1;
  for (; !u.isTextblock; l++) {
    if (u.type.spec.isolating)
      return false;
    let c = u.firstChild;
    if (!c)
      return false;
    u = c;
  }
  let a = ci(t4.doc, o, l, w.empty);
  if (!a || a.from != o || a instanceof J && a.slice.size >= l - o)
    return false;
  if (n) {
    let c = t4.tr.step(a);
    c.setSelection(O.create(c.doc, o)), n(c.scrollIntoView());
  }
  return true;
}
function Yt(t4, e, n = false) {
  for (let r = t4; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return true;
    if (n && r.childCount != 1)
      return false;
  }
  return false;
}
const Fd = (t4, e, n) => {
  let { $head: r, empty: i } = t4.selection, o = r;
  if (!i)
    return false;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t4) : r.parentOffset > 0)
      return false;
    o = Cu(r);
  }
  let s = o && o.nodeBefore;
  return !s || !T.isSelectable(s) ? false : (e && e(t4.tr.setSelection(T.create(t4.doc, o.pos - s.nodeSize)).scrollIntoView()), true);
};
function Cu(t4) {
  if (!t4.parent.type.spec.isolating)
    for (let e = t4.depth - 1; e >= 0; e--) {
      if (t4.index(e) > 0)
        return t4.doc.resolve(t4.before(e + 1));
      if (t4.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Pd(t4, e) {
  let { $cursor: n } = t4.selection;
  return !n || (e ? !e.endOfTextblock("forward", t4) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Bd = (t4, e, n) => {
  let r = Pd(t4, n);
  if (!r)
    return false;
  let i = vu(r);
  if (!i)
    return false;
  let o = i.nodeAfter;
  if (jd(t4, i, e, 1))
    return true;
  if (r.parent.content.size == 0 && (Yt(o, "start") || T.isSelectable(o))) {
    let s = ci(t4.doc, r.before(), r.after(), w.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let u = t4.tr.step(s);
        u.setSelection(Yt(o, "start") ? R.findFrom(u.doc.resolve(u.mapping.map(i.pos)), 1) : T.create(u.doc, u.mapping.map(i.pos))), e(u.scrollIntoView());
      }
      return true;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(t4.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), true) : false;
}, Ld = (t4, e, n) => {
  let { $head: r, empty: i } = t4.selection, o = r;
  if (!i)
    return false;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t4) : r.parentOffset < r.parent.content.size)
      return false;
    o = vu(r);
  }
  let s = o && o.nodeAfter;
  return !s || !T.isSelectable(s) ? false : (e && e(t4.tr.setSelection(T.create(t4.doc, o.pos)).scrollIntoView()), true);
};
function vu(t4) {
  if (!t4.parent.type.spec.isolating)
    for (let e = t4.depth - 1; e >= 0; e--) {
      let n = t4.node(e);
      if (t4.index(e) + 1 < n.childCount)
        return t4.doc.resolve(t4.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const O1 = (t4, e) => {
  let n = t4.selection, r = n instanceof T, i;
  if (r) {
    if (n.node.isTextblock || !Lt(t4.doc, n.from))
      return false;
    i = n.from;
  } else if (i = ai(t4.doc, n.from, -1), i == null)
    return false;
  if (e) {
    let o = t4.tr.join(i);
    r && o.setSelection(T.create(o.doc, i - t4.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return true;
}, N1 = (t4, e) => {
  let n = t4.selection, r;
  if (n instanceof T) {
    if (n.node.isTextblock || !Lt(t4.doc, n.to))
      return false;
    r = n.to;
  } else if (r = ai(t4.doc, n.to, 1), r == null)
    return false;
  return e && e(t4.tr.join(r).scrollIntoView()), true;
}, R1 = (t4, e) => {
  let { $from: n, $to: r } = t4.selection, i = n.blockRange(r), o = i && nn(i);
  return o == null ? false : (e && e(t4.tr.lift(i, o).scrollIntoView()), true);
}, zd = (t4, e) => {
  let { $head: n, $anchor: r } = t4.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? false : (e && e(t4.tr.insertText(`
`).scrollIntoView()), true);
};
function Eu(t4) {
  for (let e = 0; e < t4.edgeCount; e++) {
    let { type: n } = t4.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const I1 = (t4, e) => {
  let { $head: n, $anchor: r } = t4.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return false;
  let i = n.node(-1), o = n.indexAfter(-1), s = Eu(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return false;
  if (e) {
    let u = n.after(), l = t4.tr.replaceWith(u, u, s.createAndFill());
    l.setSelection(R.near(l.doc.resolve(u), 1)), e(l.scrollIntoView());
  }
  return true;
}, qd = (t4, e) => {
  let n = t4.selection, { $from: r, $to: i } = n;
  if (n instanceof me || r.parent.inlineContent || i.parent.inlineContent)
    return false;
  let o = Eu(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return false;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, u = t4.tr.insert(s, o.createAndFill());
    u.setSelection(O.create(u.doc, s + 1)), e(u.scrollIntoView());
  }
  return true;
}, $d = (t4, e) => {
  let { $cursor: n } = t4.selection;
  if (!n || n.parent.content.size)
    return false;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Je(t4.doc, o))
      return e && e(t4.tr.split(o).scrollIntoView()), true;
  }
  let r = n.blockRange(), i = r && nn(r);
  return i == null ? false : (e && e(t4.tr.lift(r, i).scrollIntoView()), true);
};
function F1(t4) {
  return (e, n) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof T && e.selection.node.isBlock)
      return !r.parentOffset || !Je(e.doc, r.pos) ? false : (n && n(e.tr.split(r.pos).scrollIntoView()), true);
    if (!r.depth)
      return false;
    let o = [], s, u, l = false, a = false;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        l = r.end(h) == r.pos + (r.depth - h), a = r.start(h) == r.pos - (r.depth - h), u = Eu(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(l && u ? { type: u } : null), s = h;
        break;
      } else {
        if (h == 1)
          return false;
        o.unshift(null);
      }
    let c = e.tr;
    (e.selection instanceof O || e.selection instanceof me) && c.deleteSelection();
    let f = c.mapping.map(r.pos), d = Je(c.doc, f, o.length, o);
    if (d || (o[0] = u ? { type: u } : null, d = Je(c.doc, f, o.length, o)), !d)
      return false;
    if (c.split(f, o.length, o), !l && a && r.node(s).type != u) {
      let h = c.mapping.map(r.before(s)), p = c.doc.resolve(h);
      u && r.node(s - 1).canReplaceWith(p.index(), p.index() + 1, u) && c.setNodeMarkup(c.mapping.map(r.before(s)), u);
    }
    return n && n(c.scrollIntoView()), true;
  };
}
const P1 = F1(), B1 = (t4, e) => {
  let { $from: n, to: r } = t4.selection, i, o = n.sharedDepth(r);
  return o == 0 ? false : (i = n.before(o), e && e(t4.tr.setSelection(T.create(t4.doc, i))), true);
};
function L1(t4, e, n) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? false : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t4.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), true) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || Lt(t4.doc, e.pos)) ? false : (n && n(t4.tr.join(e.pos).scrollIntoView()), true);
}
function jd(t4, e, n, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, u, l = i.type.spec.isolating || o.type.spec.isolating;
  if (!l && L1(t4, e, n))
    return true;
  let a = !l && e.parent.canReplace(e.index(), e.index() + 1);
  if (a && (s = (u = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && u.matchType(s[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, p = v.empty;
      for (let b = s.length - 1; b >= 0; b--)
        p = v.from(s[b].create(null, p));
      p = v.from(i.copy(p));
      let m = t4.tr.step(new Z(e.pos - 1, h, e.pos, h, new w(p, 1, 0), s.length, true)), g = m.doc.resolve(h + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == i.type && Lt(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView());
    }
    return true;
  }
  let c = o.type.spec.isolating || r > 0 && l ? null : R.findFrom(e, 1), f = c && c.$from.blockRange(c.$to), d = f && nn(f);
  if (d != null && d >= e.depth)
    return n && n(t4.tr.lift(f, d).scrollIntoView()), true;
  if (a && Yt(o, "start", true) && Yt(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (n) {
        let b = v.empty;
        for (let x = p.length - 1; x >= 0; x--)
          b = v.from(p[x].copy(b));
        let y = t4.tr.step(new Z(e.pos - p.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new w(b, p.length, 0), 0, true));
        n(y.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function Vd(t4) {
  return function(e, n) {
    let r = e.selection, i = t4 < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return false;
      o--;
    }
    return i.node(o).isTextblock ? (n && n(e.tr.setSelection(O.create(e.doc, t4 < 0 ? i.start(o) : i.end(o)))), true) : false;
  };
}
const z1 = Vd(-1), q1 = Vd(1);
function $1(t4, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o), u = s && kd(s, t4, e);
    return u ? (r && r(n.tr.wrap(s, u).scrollIntoView()), true) : false;
  };
}
function oc(t4, e = null) {
  return function(n, r) {
    let i = false;
    for (let o = 0; o < n.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: u } } = n.selection.ranges[o];
      n.doc.nodesBetween(s, u, (l, a) => {
        if (i)
          return false;
        if (!(!l.isTextblock || l.hasMarkup(t4, e)))
          if (l.type == t4)
            i = true;
          else {
            let c = n.doc.resolve(a), f = c.index();
            i = c.parent.canReplaceWith(f, f + 1, t4);
          }
      });
    }
    if (!i)
      return false;
    if (r) {
      let o = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: u }, $to: { pos: l } } = n.selection.ranges[s];
        o.setBlockType(u, l, t4, e);
      }
      r(o.scrollIntoView());
    }
    return true;
  };
}
function Su(...t4) {
  return function(e, n, r) {
    for (let i = 0; i < t4.length; i++)
      if (t4[i](e, n, r))
        return true;
    return false;
  };
}
Su(ku, Rd, Fd);
Su(ku, Bd, Ld);
Su(zd, qd, $d, P1);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function j1(t4, e = null) {
  return function(n, r) {
    let { $from: i, $to: o } = n.selection, s = i.blockRange(o);
    if (!s)
      return false;
    let u = r ? n.tr : null;
    return V1(u, s, t4, e) ? (r && r(u.scrollIntoView()), true) : false;
  };
}
function V1(t4, e, n, r = null) {
  let i = false, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return false;
    let l = s.resolve(e.start - 2);
    o = new yr(l, l, e.depth), e.endIndex < e.parent.childCount && (e = new yr(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = true;
  }
  let u = kd(o, n, r, e);
  return u ? (t4 && H1(t4, e, u, i, n), true) : false;
}
function H1(t4, e, n, r, i) {
  let o = v.empty;
  for (let c = n.length - 1; c >= 0; c--)
    o = v.from(n[c].type.create(n[c].attrs, o));
  t4.step(new Z(e.start - (r ? 2 : 0), e.end, e.start, e.end, new w(o, 0, 0), n.length, true));
  let s = 0;
  for (let c = 0; c < n.length; c++)
    n[c].type == i && (s = c + 1);
  let u = n.length - s, l = e.start + n.length - (r ? 2 : 0), a = e.parent;
  for (let c = e.startIndex, f = e.endIndex, d = true; c < f; c++, d = false)
    !d && Je(t4.doc, l, u) && (t4.split(l, u), l += 2 * u), l += a.child(c).nodeSize;
  return t4;
}
function U1(t4) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == t4);
    return o ? n ? r.node(o.depth - 1).type == t4 ? W1(e, n, t4, o) : K1(e, n, o) : true : false;
  };
}
function W1(t4, e, n, r) {
  let i = t4.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new Z(o - 1, s, o, s, new w(v.from(n.create(null, r.parent.copy())), 1, 0), 1, true)), r = new yr(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const u = nn(r);
  if (u == null)
    return false;
  i.lift(r, u);
  let l = i.doc.resolve(i.mapping.map(o, -1) - 1);
  return Lt(i.doc, l.pos) && l.nodeBefore.type == l.nodeAfter.type && i.join(l.pos), e(i.scrollIntoView()), true;
}
function K1(t4, e, n) {
  let r = t4.tr, i = n.parent;
  for (let h = n.end, p = n.endIndex - 1, m = n.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), s = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return false;
  let u = n.startIndex == 0, l = n.endIndex == i.childCount, a = o.node(-1), c = o.index(-1);
  if (!a.canReplace(c + (u ? 0 : 1), c + 1, s.content.append(l ? v.empty : v.from(i))))
    return false;
  let f = o.pos, d = f + s.nodeSize;
  return r.step(new Z(f - (u ? 1 : 0), d + (l ? 1 : 0), f + 1, d - 1, new w((u ? v.empty : v.from(i.copy(v.empty))).append(l ? v.empty : v.from(i.copy(v.empty))), u ? 0 : 1, l ? 0 : 1), u ? 0 : 1)), e(r.scrollIntoView()), true;
}
function J1(t4) {
  return function(e, n) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (a) => a.childCount > 0 && a.firstChild.type == t4);
    if (!o)
      return false;
    let s = o.startIndex;
    if (s == 0)
      return false;
    let u = o.parent, l = u.child(s - 1);
    if (l.type != t4)
      return false;
    if (n) {
      let a = l.lastChild && l.lastChild.type == u.type, c = v.from(a ? t4.create() : null), f = new w(v.from(t4.create(null, v.from(u.type.create(null, c)))), a ? 3 : 1, 0), d = o.start, h = o.end;
      n(e.tr.step(new Z(d - (a ? 3 : 1), h, d, h, f, 1, true)).scrollIntoView());
    }
    return true;
  };
}
const ee = function(t4) {
  for (var e = 0; ; e++)
    if (t4 = t4.previousSibling, !t4)
      return e;
}, Qt = function(t4) {
  let e = t4.assignedSlot || t4.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let qs = null;
const Ue = function(t4, e, n) {
  let r = qs || (qs = document.createRange());
  return r.setEnd(t4, n ?? t4.nodeValue.length), r.setStart(t4, e || 0), r;
}, G1 = function() {
  qs = null;
}, It = function(t4, e, n, r) {
  return n && (sc(t4, e, n, r, -1) || sc(t4, e, n, r, 1));
}, Z1 = /^(img|br|input|textarea|hr)$/i;
function sc(t4, e, n, r, i) {
  for (var o; ; ) {
    if (t4 == n && e == r)
      return true;
    if (e == (i < 0 ? 0 : Ce(t4))) {
      let s = t4.parentNode;
      if (!s || s.nodeType != 1 || Un(t4) || Z1.test(t4.nodeName) || t4.contentEditable == "false")
        return false;
      e = ee(t4) + (i < 0 ? 0 : 1), t4 = s;
    } else if (t4.nodeType == 1) {
      let s = t4.childNodes[e + (i < 0 ? -1 : 0)];
      if (s.nodeType == 1 && s.contentEditable == "false")
        if (!((o = s.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += i;
        else
          return false;
      else
        t4 = s, e = i < 0 ? Ce(t4) : 0;
    } else
      return false;
  }
}
function Ce(t4) {
  return t4.nodeType == 3 ? t4.nodeValue.length : t4.childNodes.length;
}
function Y1(t4, e) {
  for (; ; ) {
    if (t4.nodeType == 3 && e)
      return t4;
    if (t4.nodeType == 1 && e > 0) {
      if (t4.contentEditable == "false")
        return null;
      t4 = t4.childNodes[e - 1], e = Ce(t4);
    } else if (t4.parentNode && !Un(t4))
      e = ee(t4), t4 = t4.parentNode;
    else
      return null;
  }
}
function Q1(t4, e) {
  for (; ; ) {
    if (t4.nodeType == 3 && e < t4.nodeValue.length)
      return t4;
    if (t4.nodeType == 1 && e < t4.childNodes.length) {
      if (t4.contentEditable == "false")
        return null;
      t4 = t4.childNodes[e], e = 0;
    } else if (t4.parentNode && !Un(t4))
      e = ee(t4) + 1, t4 = t4.parentNode;
    else
      return null;
  }
}
function X1(t4, e, n) {
  for (let r = e == 0, i = e == Ce(t4); r || i; ) {
    if (t4 == n)
      return true;
    let o = ee(t4);
    if (t4 = t4.parentNode, !t4)
      return false;
    r = r && o == 0, i = i && o == Ce(t4);
  }
}
function Un(t4) {
  let e;
  for (let n = t4; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t4 || e.contentDOM == t4);
}
const di = function(t4) {
  return t4.focusNode && It(t4.focusNode, t4.focusOffset, t4.anchorNode, t4.anchorOffset);
};
function vt(t4, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", true, true), n.keyCode = t4, n.key = n.code = e, n;
}
function em(t4) {
  let e = t4.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function tm(t4, e, n) {
  if (t4.caretPositionFromPoint)
    try {
      let r = t4.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Ce(r.offsetNode), r.offset) };
    } catch {
    }
  if (t4.caretRangeFromPoint) {
    let r = t4.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: Math.min(Ce(r.startContainer), r.startOffset) };
  }
}
const Pe = typeof navigator < "u" ? navigator : null, uc = typeof document < "u" ? document : null, kt = Pe && Pe.userAgent || "", $s = /Edge\/(\d+)/.exec(kt), Hd = /MSIE \d/.exec(kt), js = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(kt), de = !!(Hd || js || $s), ht = Hd ? document.documentMode : js ? +js[1] : $s ? +$s[1] : 0, ve = !de && /gecko\/(\d+)/i.test(kt);
ve && +(/Firefox\/(\d+)/.exec(kt) || [0, 0])[1];
const Vs = !de && /Chrome\/(\d+)/.exec(kt), re = !!Vs, Ud = Vs ? +Vs[1] : 0, le = !de && !!Pe && /Apple Computer/.test(Pe.vendor), Xt = le && (/Mobile\/\w+/.test(kt) || !!Pe && Pe.maxTouchPoints > 2), ke = Xt || (Pe ? /Mac/.test(Pe.platform) : false), nm = Pe ? /Win/.test(Pe.platform) : false, We = /Android \d/.test(kt), Wn = !!uc && "webkitFontSmoothing" in uc.documentElement.style, rm = Wn ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function im(t4) {
  let e = t4.defaultView && t4.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: t4.documentElement.clientWidth,
    top: 0,
    bottom: t4.documentElement.clientHeight
  };
}
function $e(t4, e) {
  return typeof t4 == "number" ? t4 : t4[e];
}
function om(t4) {
  let e = t4.getBoundingClientRect(), n = e.width / t4.offsetWidth || 1, r = e.height / t4.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t4.clientWidth * n,
    top: e.top,
    bottom: e.top + t4.clientHeight * r
  };
}
function lc(t4, e, n) {
  let r = t4.someProp("scrollThreshold") || 0, i = t4.someProp("scrollMargin") || 5, o = t4.dom.ownerDocument;
  for (let s = n || t4.dom; s; ) {
    if (s.nodeType != 1) {
      s = Qt(s);
      continue;
    }
    let u = s, l = u == o.body, a = l ? im(o) : om(u), c = 0, f = 0;
    if (e.top < a.top + $e(r, "top") ? f = -(a.top - e.top + $e(i, "top")) : e.bottom > a.bottom - $e(r, "bottom") && (f = e.bottom - e.top > a.bottom - a.top ? e.top + $e(i, "top") - a.top : e.bottom - a.bottom + $e(i, "bottom")), e.left < a.left + $e(r, "left") ? c = -(a.left - e.left + $e(i, "left")) : e.right > a.right - $e(r, "right") && (c = e.right - a.right + $e(i, "right")), c || f)
      if (l)
        o.defaultView.scrollBy(c, f);
      else {
        let h = u.scrollLeft, p = u.scrollTop;
        f && (u.scrollTop += f), c && (u.scrollLeft += c);
        let m = u.scrollLeft - h, g = u.scrollTop - p;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let d = l ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(d))
      break;
    s = d == "absolute" ? s.offsetParent : Qt(s);
  }
}
function sm(t4) {
  let e = t4.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let u = t4.root.elementFromPoint(o, s);
    if (!u || u == t4.dom || !t4.dom.contains(u))
      continue;
    let l = u.getBoundingClientRect();
    if (l.top >= n - 20) {
      r = u, i = l.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Wd(t4.dom) };
}
function Wd(t4) {
  let e = [], n = t4.ownerDocument;
  for (let r = t4; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t4 != n); r = Qt(r))
    ;
  return e;
}
function um({ refDOM: t4, refTop: e, stack: n }) {
  let r = t4 ? t4.getBoundingClientRect().top : 0;
  Kd(n, r == 0 ? 0 : r - e);
}
function Kd(t4, e) {
  for (let n = 0; n < t4.length; n++) {
    let { dom: r, top: i, left: o } = t4[n];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let zt = null;
function lm(t4) {
  if (t4.setActive)
    return t4.setActive();
  if (zt)
    return t4.focus(zt);
  let e = Wd(t4);
  t4.focus(zt == null ? {
    get preventScroll() {
      return zt = { preventScroll: true }, true;
    }
  } : void 0), zt || (zt = false, Kd(e, 0));
}
function Jd(t4, e) {
  let n, r = 2e8, i, o = 0, s = e.top, u = e.top, l, a;
  for (let c = t4.firstChild, f = 0; c; c = c.nextSibling, f++) {
    let d;
    if (c.nodeType == 1)
      d = c.getClientRects();
    else if (c.nodeType == 3)
      d = Ue(c).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let p = d[h];
      if (p.top <= s && p.bottom >= u) {
        s = Math.max(p.bottom, s), u = Math.min(p.top, u);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          n = c, r = m, i = m && n.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, c.nodeType == 1 && m && (o = f + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !l && p.left <= e.left && p.right >= e.left && (l = c, a = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !n && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = f + 1);
    }
  }
  return !n && l && (n = l, i = a, r = 0), n && n.nodeType == 3 ? am(n, i) : !n || r && n.nodeType == 1 ? { node: t4, offset: o } : Jd(n, i);
}
function am(t4, e) {
  let n = t4.nodeValue.length, r = document.createRange();
  for (let i = 0; i < n; i++) {
    r.setEnd(t4, i + 1), r.setStart(t4, i);
    let o = et(r, 1);
    if (o.top != o.bottom && wu(e, o))
      return { node: t4, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: t4, offset: 0 };
}
function wu(t4, e) {
  return t4.left >= e.left - 1 && t4.left <= e.right + 1 && t4.top >= e.top - 1 && t4.top <= e.bottom + 1;
}
function cm(t4, e) {
  let n = t4.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t4.getBoundingClientRect().left ? n : t4;
}
function fm(t4, e, n) {
  let { node: r, offset: i } = Jd(e, n), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t4.docView.posFromDOM(r, i, o);
}
function dm(t4, e, n, r) {
  let i = -1;
  for (let o = e, s = false; o != t4.dom; ) {
    let u = t4.docView.nearestDesc(o, true), l;
    if (!u)
      return null;
    if (u.dom.nodeType == 1 && (u.node.isBlock && u.parent || !u.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((l = u.dom.getBoundingClientRect()).width || l.height) && (u.node.isBlock && u.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(u.dom.nodeName) && (!s && l.left > r.left || l.top > r.top ? i = u.posBefore : (!s && l.right < r.left || l.bottom < r.top) && (i = u.posAfter), s = true), !u.contentDOM && i < 0 && !u.node.isText))
      return (u.node.isBlock ? r.top < (l.top + l.bottom) / 2 : r.left < (l.left + l.right) / 2) ? u.posBefore : u.posAfter;
    o = u.dom.parentNode;
  }
  return i > -1 ? i : t4.docView.posFromDOM(e, n, -1);
}
function Gd(t4, e, n) {
  let r = t4.childNodes.length;
  if (r && n.top < n.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), o = i; ; ) {
      let s = t4.childNodes[o];
      if (s.nodeType == 1) {
        let u = s.getClientRects();
        for (let l = 0; l < u.length; l++) {
          let a = u[l];
          if (wu(e, a))
            return Gd(s, e, a);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return t4;
}
function hm(t4, e) {
  let n = t4.dom.ownerDocument, r, i = 0, o = tm(n, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (t4.root.elementFromPoint ? t4.root : n).elementFromPoint(e.left, e.top), u;
  if (!s || !t4.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let a = t4.dom.getBoundingClientRect();
    if (!wu(e, a) || (s = Gd(t4.dom, e, a), !s))
      return null;
  }
  if (le)
    for (let a = s; r && a; a = Qt(a))
      a.draggable && (r = void 0);
  if (s = cm(s, e), r) {
    if (ve && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let c = r.childNodes[i], f;
      c.nodeName == "IMG" && (f = c.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
    }
    let a;
    Wn && i && r.nodeType == 1 && (a = r.childNodes[i - 1]).nodeType == 1 && a.contentEditable == "false" && a.getBoundingClientRect().top >= e.top && i--, r == t4.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? u = t4.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (u = dm(t4, r, i, e));
  }
  u == null && (u = fm(t4, s, e));
  let l = t4.docView.nearestDesc(s, true);
  return { pos: u, inside: l ? l.posAtStart - l.border : -1 };
}
function ac(t4) {
  return t4.top < t4.bottom || t4.left < t4.right;
}
function et(t4, e) {
  let n = t4.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if (ac(r))
      return r;
  }
  return Array.prototype.find.call(n, ac) || t4.getBoundingClientRect();
}
const pm = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Zd(t4, e, n) {
  let { node: r, offset: i, atom: o } = t4.docView.domFromPos(e, n < 0 ? -1 : 1), s = Wn || ve;
  if (r.nodeType == 3)
    if (s && (pm.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
      let l = et(Ue(r, i, i), n);
      if (ve && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let a = et(Ue(r, i - 1, i - 1), -1);
        if (a.top == l.top) {
          let c = et(Ue(r, i, i + 1), -1);
          if (c.top != l.top)
            return ln(c, c.left < a.left);
        }
      }
      return l;
    } else {
      let l = i, a = i, c = n < 0 ? 1 : -1;
      return n < 0 && !i ? (a++, c = -1) : n >= 0 && i == r.nodeValue.length ? (l--, c = 1) : n < 0 ? l-- : a++, ln(et(Ue(r, l, a), c), c < 0);
    }
  if (!t4.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (n < 0 || i == Ce(r))) {
      let l = r.childNodes[i - 1];
      if (l.nodeType == 1)
        return ss(l.getBoundingClientRect(), false);
    }
    if (o == null && i < Ce(r)) {
      let l = r.childNodes[i];
      if (l.nodeType == 1)
        return ss(l.getBoundingClientRect(), true);
    }
    return ss(r.getBoundingClientRect(), n >= 0);
  }
  if (o == null && i && (n < 0 || i == Ce(r))) {
    let l = r.childNodes[i - 1], a = l.nodeType == 3 ? Ue(l, Ce(l) - (s ? 0 : 1)) : l.nodeType == 1 && (l.nodeName != "BR" || !l.nextSibling) ? l : null;
    if (a)
      return ln(et(a, 1), false);
  }
  if (o == null && i < Ce(r)) {
    let l = r.childNodes[i];
    for (; l.pmViewDesc && l.pmViewDesc.ignoreForCoords; )
      l = l.nextSibling;
    let a = l ? l.nodeType == 3 ? Ue(l, 0, s ? 0 : 1) : l.nodeType == 1 ? l : null : null;
    if (a)
      return ln(et(a, -1), true);
  }
  return ln(et(r.nodeType == 3 ? Ue(r) : r, -n), n >= 0);
}
function ln(t4, e) {
  if (t4.width == 0)
    return t4;
  let n = e ? t4.left : t4.right;
  return { top: t4.top, bottom: t4.bottom, left: n, right: n };
}
function ss(t4, e) {
  if (t4.height == 0)
    return t4;
  let n = e ? t4.top : t4.bottom;
  return { top: n, bottom: n, left: t4.left, right: t4.right };
}
function Yd(t4, e, n) {
  let r = t4.state, i = t4.root.activeElement;
  r != e && t4.updateState(e), i != t4.dom && t4.focus();
  try {
    return n();
  } finally {
    r != e && t4.updateState(r), i != t4.dom && i && i.focus();
  }
}
function mm(t4, e, n) {
  let r = e.selection, i = n == "up" ? r.$from : r.$to;
  return Yd(t4, e, () => {
    let { node: o } = t4.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let u = t4.docView.nearestDesc(o, true);
      if (!u)
        break;
      if (u.node.isBlock) {
        o = u.contentDOM || u.dom;
        break;
      }
      o = u.dom.parentNode;
    }
    let s = Zd(t4, i.pos, 1);
    for (let u = o.firstChild; u; u = u.nextSibling) {
      let l;
      if (u.nodeType == 1)
        l = u.getClientRects();
      else if (u.nodeType == 3)
        l = Ue(u, 0, u.nodeValue.length).getClientRects();
      else
        continue;
      for (let a = 0; a < l.length; a++) {
        let c = l[a];
        if (c.bottom > c.top + 1 && (n == "up" ? s.top - c.top > (c.bottom - s.top) * 2 : c.bottom - s.bottom > (s.bottom - c.top) * 2))
          return false;
      }
    }
    return true;
  });
}
const gm = /[\u0590-\u08ac]/;
function bm(t4, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return false;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, u = t4.domSelection();
  return u ? !gm.test(r.parent.textContent) || !u.modify ? n == "left" || n == "backward" ? o : s : Yd(t4, e, () => {
    let { focusNode: l, focusOffset: a, anchorNode: c, anchorOffset: f } = t4.domSelectionRange(), d = u.caretBidiLevel;
    u.modify("move", n, "character");
    let h = r.depth ? t4.docView.domAfterPos(r.before()) : t4.dom, { focusNode: p, focusOffset: m } = t4.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || l == p && a == m;
    try {
      u.collapse(c, f), l && (l != c || a != f) && u.extend && u.extend(l, a);
    } catch {
    }
    return d != null && (u.caretBidiLevel = d), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let cc = null, fc = null, dc = false;
function ym(t4, e, n) {
  return cc == e && fc == n ? dc : (cc = e, fc = n, dc = n == "up" || n == "down" ? mm(t4, e, n) : bm(t4, e, n));
}
const Ee = 0, hc = 1, Et = 2, Be = 3;
class Kn {
  constructor(e, n, r, i) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = i, this.dirty = Ee, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return false;
  }
  matchesMark(e) {
    return false;
  }
  matchesNode(e, n, r) {
    return false;
  }
  matchesHack(e) {
    return false;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return false;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let i = this.children[n];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = n > ee(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = false;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && n == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = true;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = false) {
    for (let r = true, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!n || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = false;
        else
          return o;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let i = this.children[n], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          for (let s = 0; s < i.children.length; s++) {
            let u = i.children[s];
            if (u.size) {
              i = u;
              break;
            }
          }
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], u = o + s.size;
      if (u > e || s instanceof Xd) {
        i = e - o;
        break;
      }
      o = u;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, n);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Qd && o.side >= 0; r--)
      ;
    if (n <= 0) {
      let o, s = true;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = false)
        ;
      return o && n && s && !o.border && !o.domAtom ? o.domFromPos(o.size, n) : { node: this.contentDOM, offset: o ? ee(o.dom) + 1 : 0 };
    } else {
      let o, s = true;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = false)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, n) : { node: this.contentDOM, offset: o ? ee(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, u = 0; ; u++) {
      let l = this.children[u], a = s + l.size;
      if (i == -1 && e <= a) {
        let c = s + l.border;
        if (e >= c && n <= a - l.border && l.node && l.contentDOM && this.contentDOM.contains(l.contentDOM))
          return l.parseRange(e, n, c);
        e = s;
        for (let f = u; f > 0; f--) {
          let d = this.children[f - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = ee(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (a > n || u == this.children.length - 1)) {
        n = a;
        for (let c = u + 1; c < this.children.length; c++) {
          let f = this.children[c];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            o = ee(f.dom);
            break;
          }
          n += f.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = a;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return false;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, i = false) {
    let o = Math.min(e, n), s = Math.max(e, n);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h], g = p + m.size;
      if (o > p && s < g)
        return m.setSelection(e - p - m.border, n - p - m.border, r, i);
      p = g;
    }
    let u = this.domFromPos(e, e ? -1 : 1), l = n == e ? u : this.domFromPos(n, n ? -1 : 1), a = r.root.getSelection(), c = r.domSelectionRange(), f = false;
    if ((ve || le) && e == n) {
      let { node: h, offset: p } = u;
      if (h.nodeType == 3) {
        if (f = !!(p && h.nodeValue[p - 1] == `
`), f && p == h.nodeValue.length)
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (u = l = { node: g.parentNode, offset: ee(g) + 1 });
              break;
            }
            let b = m.pmViewDesc;
            if (b && b.node && b.node.isBlock)
              break;
          }
      } else {
        let m = h.childNodes[p - 1];
        f = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (ve && c.focusNode && c.focusNode != l.node && c.focusNode.nodeType == 1) {
      let h = c.focusNode.childNodes[c.focusOffset];
      h && h.contentEditable == "false" && (i = true);
    }
    if (!(i || f && le) && It(u.node, u.offset, c.anchorNode, c.anchorOffset) && It(l.node, l.offset, c.focusNode, c.focusOffset))
      return;
    let d = false;
    if ((a.extend || e == n) && !(f && ve)) {
      a.collapse(u.node, u.offset);
      try {
        e != n && a.extend(l.node, l.offset), d = true;
      } catch {
      }
    }
    if (!d) {
      if (e > n) {
        let p = u;
        u = l, l = p;
      }
      let h = document.createRange();
      h.setEnd(l.node, l.offset), h.setStart(u.node, u.offset), a.removeAllRanges(), a.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && n >= r : e < s && n > r) {
        let u = r + o.border, l = s - o.border;
        if (e >= u && n <= l) {
          this.dirty = e == r || n == s ? Et : hc, e == u && n == l && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = Be : o.markDirty(e - u, n - u);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? Et : Be;
      }
      r = s;
    }
    this.dirty = Et;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? Et : hc;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(e) {
    return false;
  }
}
class Qd extends Kn {
  constructor(e, n, r, i) {
    let o, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !n.type.spec.raw) {
      if (s.nodeType != 1) {
        let u = document.createElement("span");
        u.appendChild(s), s = u;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, o = this;
  }
  matchesWidget(e) {
    return this.dirty == Ee && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: true };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : false;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class xm extends Kn {
  constructor(e, n, r, i) {
    super(e, [], n, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Ft extends Kn {
  constructor(e, n, r, i, o) {
    super(e, [], r, i), this.mark = n, this.spec = o;
  }
  static create(e, n, r, i) {
    let o = i.nodeViews[n.type.name], s = o && o(n, i, r);
    return (!s || !s.dom) && (s = Bt.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new Ft(e, n, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & Be || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Be && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != Ee) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Ee;
    }
  }
  slice(e, n, r) {
    let i = Ft.create(this.parent, this.mark, true, r), o = this.children, s = this.size;
    n < s && (o = Us(o, n, s, r)), e > 0 && (o = Us(o, 0, e, r));
    for (let u = 0; u < o.length; u++)
      o[u].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class pt extends Kn {
  constructor(e, n, r, i, o, s, u, l, a) {
    super(e, [], o, s), this.node = n, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = u;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, i, o, s) {
    let u = o.nodeViews[n.type.name], l, a = u && u(n, o, () => {
      if (!l)
        return s;
      if (l.parent)
        return l.parent.posBeforeChild(l);
    }, r, i), c = a && a.dom, f = a && a.contentDOM;
    if (n.isText) {
      if (!c)
        c = document.createTextNode(n.text);
      else if (c.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else c || ({ dom: c, contentDOM: f } = Bt.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
    !f && !n.isText && c.nodeName != "BR" && (c.hasAttribute("contenteditable") || (c.contentEditable = "false"), n.type.spec.draggable && (c.draggable = true));
    let d = c;
    return c = nh(c, r, n), a ? l = new km(e, n, r, i, c, f || null, d, a, o, s + 1) : n.isText ? new hi(e, n, r, i, c, d, o) : new pt(e, n, r, i, c, f || null, d, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let n = this.children.length - 1; n >= 0; n--) {
        let r = this.children[n];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => v.empty);
    }
    return e;
  }
  matchesNode(e, n, r) {
    return this.dirty == Ee && e.eq(this.node) && kr(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, i = n, o = e.composing ? this.localCompositionInfo(e, n) : null, s = o && o.pos > -1 ? o : null, u = o && o.pos < 0, l = new vm(this, s && s.node, e);
    wm(this.node, this.innerDeco, (a, c, f) => {
      a.spec.marks ? l.syncToMarks(a.spec.marks, r, e) : a.type.side >= 0 && !f && l.syncToMarks(c == this.node.childCount ? F.none : this.node.child(c).marks, r, e), l.placeWidget(a, e, i);
    }, (a, c, f, d) => {
      l.syncToMarks(a.marks, r, e);
      let h;
      l.findNodeMatch(a, c, f, d) || u && e.state.selection.from > i && e.state.selection.to < i + a.nodeSize && (h = l.findIndexWithChild(o.node)) > -1 && l.updateNodeAt(a, c, f, h, e) || l.updateNextNode(a, c, f, e, d, i) || l.addNode(a, c, f, e, i), i += a.nodeSize;
    }), l.syncToMarks([], r, e), this.node.isTextblock && l.addTextblockHacks(), l.destroyRest(), (l.changed || this.dirty == Et) && (s && this.protectLocalComposition(e, s), eh(this.contentDOM, this.children, e), Xt && Am(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof O) || r < n || i > n + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, u = Dm(this.node.content, s, r - n, i - n);
      return u < 0 ? null : { node: o, pos: u, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: i }) {
    if (this.getDesc(n))
      return;
    let o = n;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new xm(this, o, n, i);
    e.input.compositionNodes.push(s), this.children = Us(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, i) {
    return this.dirty == Be || !e.sameMarkup(this.node) ? false : (this.updateInner(e, n, r, i), true);
  }
  updateInner(e, n, r, i) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Ee;
  }
  updateOuterDeco(e) {
    if (kr(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = th(this.dom, this.nodeDOM, Hs(this.outerDeco, this.node, n), Hs(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = true);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function pc(t4, e, n, r, i) {
  nh(r, e, t4);
  let o = new pt(void 0, t4, e, n, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class hi extends pt {
  constructor(e, n, r, i, o, s, u) {
    super(e, n, r, i, o, null, s, u, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || true };
  }
  update(e, n, r, i) {
    return this.dirty == Be || this.dirty != Ee && !this.inParent() || !e.sameMarkup(this.node) ? false : (this.updateOuterDeco(n), (this.dirty != Ee || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Ee, true);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return true;
    return false;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let i = this.node.cut(e, n), o = document.createTextNode(i.text);
    return new hi(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = Be);
  }
  get domAtom() {
    return false;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Xd extends Kn {
  parseRule() {
    return { ignore: true };
  }
  matchesHack(e) {
    return this.dirty == Ee && this.dom.nodeName == e;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class km extends pt {
  constructor(e, n, r, i, o, s, u, l, a, c) {
    super(e, n, r, i, o, s, u, a, c), this.spec = l;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, i) {
    if (this.dirty == Be)
      return false;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, n, r);
      return o && this.updateInner(e, n, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? false : super.update(e, n, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r.root) : super.setSelection(e, n, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : false;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function eh(t4, e, n) {
  let r = t4.firstChild, i = false;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], u = s.dom;
    if (u.parentNode == t4) {
      for (; u != r; )
        r = mc(r), i = true;
      r = r.nextSibling;
    } else
      i = true, t4.insertBefore(u, r);
    if (s instanceof Ft) {
      let l = r ? r.previousSibling : t4.lastChild;
      eh(s.contentDOM, s.children, n), r = l ? l.nextSibling : t4.firstChild;
    }
  }
  for (; r; )
    r = mc(r), i = true;
  i && n.trackWrites == t4 && (n.trackWrites = null);
}
const bn = function(t4) {
  t4 && (this.nodeName = t4);
};
bn.prototype = /* @__PURE__ */ Object.create(null);
const St = [new bn()];
function Hs(t4, e, n) {
  if (t4.length == 0)
    return St;
  let r = n ? St[0] : new bn(), i = [r];
  for (let o = 0; o < t4.length; o++) {
    let s = t4[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new bn(s.nodeName));
      for (let u in s) {
        let l = s[u];
        l != null && (n && i.length == 1 && i.push(r = new bn(e.isInline ? "span" : "div")), u == "class" ? r.class = (r.class ? r.class + " " : "") + l : u == "style" ? r.style = (r.style ? r.style + ";" : "") + l : u != "nodeName" && (r[u] = l));
      }
    }
  }
  return i;
}
function th(t4, e, n, r) {
  if (n == St && r == St)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], u = n[o];
    if (o) {
      let l;
      u && u.nodeName == s.nodeName && i != t4 && (l = i.parentNode) && l.nodeName.toLowerCase() == s.nodeName || (l = document.createElement(s.nodeName), l.pmIsDeco = true, l.appendChild(i), u = St[0]), i = l;
    }
    Cm(i, u || St[0], s);
  }
  return i;
}
function Cm(t4, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t4.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t4.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && t4.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && t4.classList.add(i[o]);
    t4.classList.length == 0 && t4.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        t4.style.removeProperty(i[1]);
    }
    n.style && (t4.style.cssText += n.style);
  }
}
function nh(t4, e, n) {
  return th(t4, t4, St, Hs(e, n, t4.nodeType != 1));
}
function kr(t4, e) {
  if (t4.length != e.length)
    return false;
  for (let n = 0; n < t4.length; n++)
    if (!t4[n].type.eq(e[n].type))
      return false;
  return true;
}
function mc(t4) {
  let e = t4.nextSibling;
  return t4.parentNode.removeChild(t4), e;
}
class vm {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = false, this.top = e, this.preMatch = Em(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = true;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== false; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = Ee, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let u = -1;
      for (let l = this.index; l < Math.min(this.index + 3, this.top.children.length); l++) {
        let a = this.top.children[l];
        if (a.matchesMark(e[o]) && !this.isLocked(a.dom)) {
          u = l;
          break;
        }
      }
      if (u > -1)
        u > this.index && (this.changed = true, this.destroyBetween(this.index, u)), this.top = this.top.children[this.index];
      else {
        let l = Ft.create(this.top, e[o], n, r);
        this.top.children.splice(this.index, 0, l), this.top = l, this.changed = true;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let u = this.index, l = Math.min(this.top.children.length, u + 5); u < l; u++) {
        let a = this.top.children[u];
        if (a.matchesNode(e, n, r) && !this.preMatch.matched.has(a)) {
          o = u;
          break;
        }
      }
    return o < 0 ? false : (this.destroyBetween(this.index, o), this.index++, true);
  }
  updateNodeAt(e, n, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == Be && s.dom == s.contentDOM && (s.dirty = Et), s.update(e, n, r, o) ? (this.destroyBetween(this.index, i), this.index++, true) : false;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, i, o, s) {
    for (let u = this.index; u < this.top.children.length; u++) {
      let l = this.top.children[u];
      if (l instanceof pt) {
        let a = this.preMatch.matched.get(l);
        if (a != null && a != o)
          return false;
        let c = l.dom, f, d = this.isLocked(c) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && l.dirty != Be && kr(n, l.outerDeco));
        if (!d && l.update(e, n, r, i))
          return this.destroyBetween(this.index, u), l.dom != c && (this.changed = true), this.index++, true;
        if (!d && (f = this.recreateWrapper(l, e, n, r, i, s)))
          return this.destroyBetween(this.index, u), this.top.children[this.index] = f, f.contentDOM && (f.dirty = Et, f.updateChildren(i, s + 1), f.dirty = Ee), this.changed = true, this.index++, true;
        break;
      }
    }
    return false;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, i, o, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content) || !kr(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let u = pt.create(this.top, n, r, i, o, s);
    if (u.contentDOM) {
      u.children = e.children, e.children = [];
      for (let l of u.children)
        l.parent = u;
    }
    return e.destroy(), u;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, i, o) {
    let s = pt.create(this.top, e, n, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = true;
  }
  placeWidget(e, n, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Qd(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, o), this.changed = true;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof Ft; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof hi) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((le || re) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Xd(this.top, [], r, null);
      n != this.top ? n.children.push(i) : n.children.splice(this.index++, 0, i), this.changed = true;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Em(t4, e) {
  let n = e, r = n.children.length, i = t4.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let u;
    for (; ; )
      if (r) {
        let a = n.children[r - 1];
        if (a instanceof Ft)
          n = a, r = a.children.length;
        else {
          u = a, r--;
          break;
        }
      } else {
        if (n == e)
          break e;
        r = n.parent.children.indexOf(n), n = n.parent;
      }
    let l = u.node;
    if (l) {
      if (l != t4.child(i - 1))
        break;
      --i, o.set(u, i), s.push(u);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function Sm(t4, e) {
  return t4.type.side - e.type.side;
}
function wm(t4, e, n, r) {
  let i = e.locals(t4), o = 0;
  if (i.length == 0) {
    for (let a = 0; a < t4.childCount; a++) {
      let c = t4.child(a);
      r(c, i, e.forChild(o, c), a), o += c.nodeSize;
    }
    return;
  }
  let s = 0, u = [], l = null;
  for (let a = 0; ; ) {
    let c, f;
    for (; s < i.length && i[s].to == o; ) {
      let g = i[s++];
      g.widget && (c ? (f || (f = [c])).push(g) : c = g);
    }
    if (c)
      if (f) {
        f.sort(Sm);
        for (let g = 0; g < f.length; g++)
          n(f[g], a, !!l);
      } else
        n(c, a, !!l);
    let d, h;
    if (l)
      h = -1, d = l, l = null;
    else if (a < t4.childCount)
      h = a, d = t4.child(a++);
    else
      break;
    for (let g = 0; g < u.length; g++)
      u[g].to <= o && u.splice(g--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      u.push(i[s++]);
    let p = o + d.nodeSize;
    if (d.isText) {
      let g = p;
      s < i.length && i[s].from < g && (g = i[s].from);
      for (let b = 0; b < u.length; b++)
        u[b].to < g && (g = u[b].to);
      g < p && (l = d.cut(g - o), d = d.cut(0, g - o), p = g, h = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let m = d.isInline && !d.isLeaf ? u.filter((g) => !g.inline) : u.slice();
    r(d, m, e.forChild(o, d), h), o = p;
  }
}
function Am(t4) {
  if (t4.nodeName == "UL" || t4.nodeName == "OL") {
    let e = t4.style.cssText;
    t4.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t4).listStyle, t4.style.cssText = e;
  }
}
function Dm(t4, e, n, r) {
  for (let i = 0, o = 0; i < t4.childCount && o <= r; ) {
    let s = t4.child(i++), u = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let l = s.text;
    for (; i < t4.childCount; ) {
      let a = t4.child(i++);
      if (o += a.nodeSize, !a.isText)
        break;
      l += a.text;
    }
    if (o >= n) {
      if (o >= r && l.slice(r - e.length - u, r - u) == e)
        return r - e.length;
      let a = u < r ? l.lastIndexOf(e, r - u - 1) : -1;
      if (a >= 0 && a + e.length + u >= n)
        return u + a;
      if (n == r && l.length >= r + e.length - u && l.slice(r - u, r - u + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Us(t4, e, n, r, i) {
  let o = [];
  for (let s = 0, u = 0; s < t4.length; s++) {
    let l = t4[s], a = u, c = u += l.size;
    a >= n || c <= e ? o.push(l) : (a < e && o.push(l.slice(0, e - a, r)), i && (o.push(i), i = void 0), c > n && o.push(l.slice(n - a, l.size, r)));
  }
  return o;
}
function Au(t4, e = null) {
  let n = t4.domSelectionRange(), r = t4.state.doc;
  if (!n.focusNode)
    return null;
  let i = t4.docView.nearestDesc(n.focusNode), o = i && i.size == 0, s = t4.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let u = r.resolve(s), l, a;
  if (di(n)) {
    for (l = s; i && !i.node; )
      i = i.parent;
    let f = i.node;
    if (i && f.isAtom && T.isSelectable(f) && i.parent && !(f.isInline && X1(n.focusNode, n.focusOffset, i.dom))) {
      let d = i.posBefore;
      a = new T(s == d ? u : r.resolve(d));
    }
  } else {
    if (n instanceof t4.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let f = s, d = s;
      for (let h = 0; h < n.rangeCount; h++) {
        let p = n.getRangeAt(h);
        f = Math.min(f, t4.docView.posFromDOM(p.startContainer, p.startOffset, 1)), d = Math.max(d, t4.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (f < 0)
        return null;
      [l, s] = d == t4.state.selection.anchor ? [d, f] : [f, d], u = r.resolve(s);
    } else
      l = t4.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (l < 0)
      return null;
  }
  let c = r.resolve(l);
  if (!a) {
    let f = e == "pointer" || t4.state.selection.head < u.pos && !o ? 1 : -1;
    a = Du(t4, c, u, f);
  }
  return a;
}
function rh(t4) {
  return t4.editable ? t4.hasFocus() : oh(t4) && document.activeElement && document.activeElement.contains(t4.dom);
}
function Ge(t4, e = false) {
  let n = t4.state.selection;
  if (ih(t4, n), !!rh(t4)) {
    if (!e && t4.input.mouseDown && t4.input.mouseDown.allowDefault && re) {
      let r = t4.domSelectionRange(), i = t4.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && It(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        t4.input.mouseDown.delayedSelectionSync = true, t4.domObserver.setCurSelection();
        return;
      }
    }
    if (t4.domObserver.disconnectSelection(), t4.cursorWrapper)
      Mm(t4);
    else {
      let { anchor: r, head: i } = n, o, s;
      gc && !(n instanceof O) && (n.$from.parent.inlineContent || (o = bc(t4, n.from)), !n.empty && !n.$from.parent.inlineContent && (s = bc(t4, n.to))), t4.docView.setSelection(r, i, t4, e), gc && (o && yc(o), s && yc(s)), n.visible ? t4.dom.classList.remove("ProseMirror-hideselection") : (t4.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Tm(t4));
    }
    t4.domObserver.setCurSelection(), t4.domObserver.connectSelection();
  }
}
const gc = le || re && Ud < 63;
function bc(t4, e) {
  let { node: n, offset: r } = t4.docView.domFromPos(e, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, o = r ? n.childNodes[r - 1] : null;
  if (le && i && i.contentEditable == "false")
    return us(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return us(i);
    if (o)
      return us(o);
  }
}
function us(t4) {
  return t4.contentEditable = "true", le && t4.draggable && (t4.draggable = false, t4.wasDraggable = true), t4;
}
function yc(t4) {
  t4.contentEditable = "false", t4.wasDraggable && (t4.draggable = true, t4.wasDraggable = null);
}
function Tm(t4) {
  let e = t4.dom.ownerDocument;
  e.removeEventListener("selectionchange", t4.input.hideSelectionGuard);
  let n = t4.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
  e.addEventListener("selectionchange", t4.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != i) && (e.removeEventListener("selectionchange", t4.input.hideSelectionGuard), setTimeout(() => {
      (!rh(t4) || t4.state.selection.visible) && t4.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Mm(t4) {
  let e = t4.domSelection();
  if (!e)
    return;
  let n = t4.cursorWrapper.dom, r = n.nodeName == "IMG";
  r ? e.collapse(n.parentNode, ee(n) + 1) : e.collapse(n, 0), !r && !t4.state.selection.visible && de && ht <= 11 && (n.disabled = true, n.disabled = false);
}
function ih(t4, e) {
  if (e instanceof T) {
    let n = t4.docView.descAt(e.from);
    n != t4.lastSelectedViewDesc && (xc(t4), n && n.selectNode(), t4.lastSelectedViewDesc = n);
  } else
    xc(t4);
}
function xc(t4) {
  t4.lastSelectedViewDesc && (t4.lastSelectedViewDesc.parent && t4.lastSelectedViewDesc.deselectNode(), t4.lastSelectedViewDesc = void 0);
}
function Du(t4, e, n, r) {
  return t4.someProp("createSelectionBetween", (i) => i(t4, e, n)) || O.between(e, n, r);
}
function kc(t4) {
  return t4.editable && !t4.hasFocus() ? false : oh(t4);
}
function oh(t4) {
  let e = t4.domSelectionRange();
  if (!e.anchorNode)
    return false;
  try {
    return t4.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t4.editable || t4.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return false;
  }
}
function _m(t4) {
  let e = t4.docView.domFromPos(t4.state.selection.anchor, 0), n = t4.domSelectionRange();
  return It(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function Ws(t4, e) {
  let { $anchor: n, $head: r } = t4.selection, i = e > 0 ? n.max(r) : n.min(r), o = i.parent.inlineContent ? i.depth ? t4.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && R.findFrom(o, e);
}
function tt(t4, e) {
  return t4.dispatch(t4.state.tr.setSelection(e).scrollIntoView()), true;
}
function Cc(t4, e, n) {
  let r = t4.state.selection;
  if (r instanceof O)
    if (n.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return false;
      let s = t4.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return tt(t4, new O(r.$anchor, s));
    } else if (r.empty) {
      if (t4.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Ws(t4.state, e);
        return i && i instanceof T ? tt(t4, i) : false;
      } else if (!(ke && n.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return false;
        let u = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = t4.docView.descAt(u)) && !s.contentDOM ? T.isSelectable(o) ? tt(t4, new T(e < 0 ? t4.state.doc.resolve(i.pos - o.nodeSize) : i)) : Wn ? tt(t4, new O(t4.state.doc.resolve(e < 0 ? u : u + o.nodeSize))) : false : false;
      }
    } else return false;
  else {
    if (r instanceof T && r.node.isInline)
      return tt(t4, new O(e > 0 ? r.$to : r.$from));
    {
      let i = Ws(t4.state, e);
      return i ? tt(t4, i) : false;
    }
  }
}
function Cr(t4) {
  return t4.nodeType == 3 ? t4.nodeValue.length : t4.childNodes.length;
}
function yn(t4, e) {
  let n = t4.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t4.nextSibling || t4.nodeName != "BR");
}
function qt(t4, e) {
  return e < 0 ? Om(t4) : Nm(t4);
}
function Om(t4) {
  let e = t4.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i, o, s = false;
  for (ve && n.nodeType == 1 && r < Cr(n) && yn(n.childNodes[r], -1) && (s = true); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let u = n.childNodes[r - 1];
        if (yn(u, -1))
          i = n, o = --r;
        else if (u.nodeType == 3)
          n = u, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (sh(n))
        break;
      {
        let u = n.previousSibling;
        for (; u && yn(u, -1); )
          i = n.parentNode, o = ee(u), u = u.previousSibling;
        if (u)
          n = u, r = Cr(n);
        else {
          if (n = n.parentNode, n == t4.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Ks(t4, n, r) : i && Ks(t4, i, o);
}
function Nm(t4) {
  let e = t4.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let i = Cr(n), o, s;
  for (; ; )
    if (r < i) {
      if (n.nodeType != 1)
        break;
      let u = n.childNodes[r];
      if (yn(u, 1))
        o = n, s = ++r;
      else
        break;
    } else {
      if (sh(n))
        break;
      {
        let u = n.nextSibling;
        for (; u && yn(u, 1); )
          o = u.parentNode, s = ee(u) + 1, u = u.nextSibling;
        if (u)
          n = u, r = 0, i = Cr(n);
        else {
          if (n = n.parentNode, n == t4.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && Ks(t4, o, s);
}
function sh(t4) {
  let e = t4.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Rm(t4, e) {
  for (; t4 && e == t4.childNodes.length && !Un(t4); )
    e = ee(t4) + 1, t4 = t4.parentNode;
  for (; t4 && e < t4.childNodes.length; ) {
    let n = t4.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t4 = n, e = 0;
  }
}
function Im(t4, e) {
  for (; t4 && !e && !Un(t4); )
    e = ee(t4), t4 = t4.parentNode;
  for (; t4 && e; ) {
    let n = t4.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t4 = n, e = t4.childNodes.length;
  }
}
function Ks(t4, e, n) {
  if (e.nodeType != 3) {
    let o, s;
    (s = Rm(e, n)) ? (e = s, n = 0) : (o = Im(e, n)) && (e = o, n = o.nodeValue.length);
  }
  let r = t4.domSelection();
  if (!r)
    return;
  if (di(r)) {
    let o = document.createRange();
    o.setEnd(e, n), o.setStart(e, n), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, n);
  t4.domObserver.setCurSelection();
  let { state: i } = t4;
  setTimeout(() => {
    t4.state == i && Ge(t4);
  }, 50);
}
function vc(t4, e) {
  let n = t4.state.doc.resolve(e);
  if (!(re || nm) && n.parent.inlineContent) {
    let i = t4.coordsAtPos(e);
    if (e > n.start()) {
      let o = t4.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let o = t4.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t4.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ec(t4, e, n) {
  let r = t4.state.selection;
  if (r instanceof O && !r.empty || n.indexOf("s") > -1 || ke && n.indexOf("m") > -1)
    return false;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || t4.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Ws(t4.state, e);
    if (s && s instanceof T)
      return tt(t4, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, u = r instanceof me ? R.near(s, e) : R.findFrom(s, e);
    return u ? tt(t4, u) : false;
  }
  return false;
}
function Sc(t4, e) {
  if (!(t4.state.selection instanceof O))
    return true;
  let { $head: n, $anchor: r, empty: i } = t4.state.selection;
  if (!n.sameParent(r))
    return true;
  if (!i)
    return false;
  if (t4.endOfTextblock(e > 0 ? "forward" : "backward"))
    return true;
  let o = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (o && !o.isText) {
    let s = t4.state.tr;
    return e < 0 ? s.delete(n.pos - o.nodeSize, n.pos) : s.delete(n.pos, n.pos + o.nodeSize), t4.dispatch(s), true;
  }
  return false;
}
function wc(t4, e, n) {
  t4.domObserver.stop(), e.contentEditable = n, t4.domObserver.start();
}
function Fm(t4) {
  if (!le || t4.state.selection.$head.parentOffset > 0)
    return false;
  let { focusNode: e, focusOffset: n } = t4.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    wc(t4, r, "true"), setTimeout(() => wc(t4, r, "false"), 20);
  }
  return false;
}
function Pm(t4) {
  let e = "";
  return t4.ctrlKey && (e += "c"), t4.metaKey && (e += "m"), t4.altKey && (e += "a"), t4.shiftKey && (e += "s"), e;
}
function Bm(t4, e) {
  let n = e.keyCode, r = Pm(e);
  if (n == 8 || ke && n == 72 && r == "c")
    return Sc(t4, -1) || qt(t4, -1);
  if (n == 46 && !e.shiftKey || ke && n == 68 && r == "c")
    return Sc(t4, 1) || qt(t4, 1);
  if (n == 13 || n == 27)
    return true;
  if (n == 37 || ke && n == 66 && r == "c") {
    let i = n == 37 ? vc(t4, t4.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Cc(t4, i, r) || qt(t4, i);
  } else if (n == 39 || ke && n == 70 && r == "c") {
    let i = n == 39 ? vc(t4, t4.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Cc(t4, i, r) || qt(t4, i);
  } else {
    if (n == 38 || ke && n == 80 && r == "c")
      return Ec(t4, -1, r) || qt(t4, -1);
    if (n == 40 || ke && n == 78 && r == "c")
      return Fm(t4) || Ec(t4, 1, r) || qt(t4, 1);
    if (r == (ke ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return true;
  }
  return false;
}
function Tu(t4, e) {
  t4.someProp("transformCopied", (h) => {
    e = h(e, t4);
  });
  let n = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    n.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = t4.someProp("clipboardSerializer") || Bt.fromSchema(t4.state.schema), u = dh(), l = u.createElement("div");
  l.appendChild(s.serializeFragment(r, { document: u }));
  let a = l.firstChild, c, f = 0;
  for (; a && a.nodeType == 1 && (c = fh[a.nodeName.toLowerCase()]); ) {
    for (let h = c.length - 1; h >= 0; h--) {
      let p = u.createElement(c[h]);
      for (; l.firstChild; )
        p.appendChild(l.firstChild);
      l.appendChild(p), f++;
    }
    a = l.firstChild;
  }
  a && a.nodeType == 1 && a.setAttribute("data-pm-slice", `${i} ${o}${f ? ` -${f}` : ""} ${JSON.stringify(n)}`);
  let d = t4.someProp("clipboardTextSerializer", (h) => h(e, t4)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: l, text: d, slice: e };
}
function uh(t4, e, n, r, i) {
  let o = i.parent.type.spec.code, s, u;
  if (!n && !e)
    return null;
  let l = !!e && (r || o || !n);
  if (l) {
    if (t4.someProp("transformPastedText", (d) => {
      e = d(e, o || r, t4);
    }), o)
      return u = new w(v.from(t4.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), t4.someProp("transformPasted", (d) => {
        u = d(u, t4, true);
      }), u;
    let f = t4.someProp("clipboardTextParser", (d) => d(e, i, r, t4));
    if (f)
      u = f;
    else {
      let d = i.marks(), { schema: h } = t4.state, p = Bt.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, d)));
      });
    }
  } else
    t4.someProp("transformPastedHTML", (f) => {
      n = f(n, t4);
    }), s = $m(n), Wn && jm(s);
  let a = s && s.querySelector("[data-pm-slice]"), c = a && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(a.getAttribute("data-pm-slice") || "");
  if (c && c[3])
    for (let f = +c[3]; f > 0; f--) {
      let d = s.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      s = d;
    }
  if (u || (u = (t4.someProp("clipboardParser") || t4.someProp("domParser") || dt.fromSchema(t4.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(l || c),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !Lm.test(d.parentNode.nodeName) ? { ignore: true } : null;
    }
  })), c)
    u = Vm(Ac(u, +c[1], +c[2]), c[4]);
  else if (u = w.maxOpen(zm(u.content, i), true), u.openStart || u.openEnd) {
    let f = 0, d = 0;
    for (let h = u.content.firstChild; f < u.openStart && !h.type.spec.isolating; f++, h = h.firstChild)
      ;
    for (let h = u.content.lastChild; d < u.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    u = Ac(u, f, d);
  }
  return t4.someProp("transformPasted", (f) => {
    u = f(u, t4, l);
  }), u;
}
const Lm = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function zm(t4, e) {
  if (t4.childCount < 2)
    return t4;
  for (let n = e.depth; n >= 0; n--) {
    let i = e.node(n).contentMatchAt(e.index(n)), o, s = [];
    if (t4.forEach((u) => {
      if (!s)
        return;
      let l = i.findWrapping(u.type), a;
      if (!l)
        return s = null;
      if (a = s.length && o.length && ah(l, o, u, s[s.length - 1], 0))
        s[s.length - 1] = a;
      else {
        s.length && (s[s.length - 1] = ch(s[s.length - 1], o.length));
        let c = lh(u, l);
        s.push(c), i = i.matchType(c.type), o = l;
      }
    }), s)
      return v.from(s);
  }
  return t4;
}
function lh(t4, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t4 = e[r].create(null, v.from(t4));
  return t4;
}
function ah(t4, e, n, r, i) {
  if (i < t4.length && i < e.length && t4[i] == e[i]) {
    let o = ah(t4, e, n, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == t4.length - 1 ? n.type : t4[i + 1]))
      return r.copy(r.content.append(v.from(lh(n, t4, i + 1))));
  }
}
function ch(t4, e) {
  if (e == 0)
    return t4;
  let n = t4.content.replaceChild(t4.childCount - 1, ch(t4.lastChild, e - 1)), r = t4.contentMatchAt(t4.childCount).fillBefore(v.empty, true);
  return t4.copy(n.append(r));
}
function Js(t4, e, n, r, i, o) {
  let s = e < 0 ? t4.firstChild : t4.lastChild, u = s.content;
  return t4.childCount > 1 && (o = 0), i < r - 1 && (u = Js(u, e, n, r, i + 1, o)), i >= n && (u = e < 0 ? s.contentMatchAt(0).fillBefore(u, o <= i).append(u) : u.append(s.contentMatchAt(s.childCount).fillBefore(v.empty, true))), t4.replaceChild(e < 0 ? 0 : t4.childCount - 1, s.copy(u));
}
function Ac(t4, e, n) {
  return e < t4.openStart && (t4 = new w(Js(t4.content, -1, e, t4.openStart, 0, t4.openEnd), e, t4.openEnd)), n < t4.openEnd && (t4 = new w(Js(t4.content, 1, n, t4.openEnd, 0, 0), t4.openStart, n)), t4;
}
const fh = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Dc = null;
function dh() {
  return Dc || (Dc = document.implementation.createHTMLDocument("title"));
}
let ls = null;
function qm(t4) {
  let e = window.trustedTypes;
  return e ? (ls || (ls = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), ls.createHTML(t4)) : t4;
}
function $m(t4) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t4);
  e && (t4 = t4.slice(e[0].length));
  let n = dh().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t4), i;
  if ((i = r && fh[r[1].toLowerCase()]) && (t4 = i.map((o) => "<" + o + ">").join("") + t4 + i.map((o) => "</" + o + ">").reverse().join("")), n.innerHTML = qm(t4), i)
    for (let o = 0; o < i.length; o++)
      n = n.querySelector(i[o]) || n;
  return n;
}
function jm(t4) {
  let e = t4.querySelectorAll(re ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(t4.ownerDocument.createTextNode(" "), r);
  }
}
function Vm(t4, e) {
  if (!t4.size)
    return t4;
  let n = t4.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t4;
  }
  let { content: i, openStart: o, openEnd: s } = t4;
  for (let u = r.length - 2; u >= 0; u -= 2) {
    let l = n.nodes[r[u]];
    if (!l || l.hasRequiredAttrs())
      break;
    i = v.from(l.create(r[u + 1], i)), o++, s++;
  }
  return new w(i, o, s);
}
const ae = {}, ce = {}, Hm = { touchstart: true, touchmove: true };
class Um {
  constructor() {
    this.shiftKey = false, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = false, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Wm(t4) {
  for (let e in ae) {
    let n = ae[e];
    t4.dom.addEventListener(e, t4.input.eventHandlers[e] = (r) => {
      Jm(t4, r) && !Mu(t4, r) && (t4.editable || !(r.type in ce)) && n(t4, r);
    }, Hm[e] ? { passive: true } : void 0);
  }
  le && t4.dom.addEventListener("input", () => null), Gs(t4);
}
function ct(t4, e) {
  t4.input.lastSelectionOrigin = e, t4.input.lastSelectionTime = Date.now();
}
function Km(t4) {
  t4.domObserver.stop();
  for (let e in t4.input.eventHandlers)
    t4.dom.removeEventListener(e, t4.input.eventHandlers[e]);
  clearTimeout(t4.input.composingTimeout), clearTimeout(t4.input.lastIOSEnterFallbackTimeout);
}
function Gs(t4) {
  t4.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t4.input.eventHandlers[n] || t4.dom.addEventListener(n, t4.input.eventHandlers[n] = (r) => Mu(t4, r));
  });
}
function Mu(t4, e) {
  return t4.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t4, e) || e.defaultPrevented : false;
  });
}
function Jm(t4, e) {
  if (!e.bubbles)
    return true;
  if (e.defaultPrevented)
    return false;
  for (let n = e.target; n != t4.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return false;
  return true;
}
function Gm(t4, e) {
  !Mu(t4, e) && ae[e.type] && (t4.editable || !(e.type in ce)) && ae[e.type](t4, e);
}
ce.keydown = (t4, e) => {
  let n = e;
  if (t4.input.shiftKey = n.keyCode == 16 || n.shiftKey, !ph(t4, n) && (t4.input.lastKeyCode = n.keyCode, t4.input.lastKeyCodeTime = Date.now(), !(We && re && n.keyCode == 13)))
    if (n.keyCode != 229 && t4.domObserver.forceFlush(), Xt && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t4.input.lastIOSEnter = r, t4.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t4.input.lastIOSEnter == r && (t4.someProp("handleKeyDown", (i) => i(t4, vt(13, "Enter"))), t4.input.lastIOSEnter = 0);
      }, 200);
    } else t4.someProp("handleKeyDown", (r) => r(t4, n)) || Bm(t4, n) ? n.preventDefault() : ct(t4, "key");
};
ce.keyup = (t4, e) => {
  e.keyCode == 16 && (t4.input.shiftKey = false);
};
ce.keypress = (t4, e) => {
  let n = e;
  if (ph(t4, n) || !n.charCode || n.ctrlKey && !n.altKey || ke && n.metaKey)
    return;
  if (t4.someProp("handleKeyPress", (i) => i(t4, n))) {
    n.preventDefault();
    return;
  }
  let r = t4.state.selection;
  if (!(r instanceof O) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(n.charCode), o = () => t4.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !t4.someProp("handleTextInput", (s) => s(t4, r.$from.pos, r.$to.pos, i, o)) && t4.dispatch(o()), n.preventDefault();
  }
};
function pi(t4) {
  return { left: t4.clientX, top: t4.clientY };
}
function Zm(t4, e) {
  let n = e.x - t4.clientX, r = e.y - t4.clientY;
  return n * n + r * r < 100;
}
function _u(t4, e, n, r, i) {
  if (r == -1)
    return false;
  let o = t4.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (t4.someProp(e, (u) => s > o.depth ? u(t4, n, o.nodeAfter, o.before(s), i, true) : u(t4, n, o.node(s), o.before(s), i, false)))
      return true;
  return false;
}
function Jt(t4, e, n) {
  if (t4.focused || t4.focus(), t4.state.selection.eq(e))
    return;
  let r = t4.state.tr.setSelection(e);
  r.setMeta("pointer", true), t4.dispatch(r);
}
function Ym(t4, e) {
  if (e == -1)
    return false;
  let n = t4.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && T.isSelectable(r) ? (Jt(t4, new T(n)), true) : false;
}
function Qm(t4, e) {
  if (e == -1)
    return false;
  let n = t4.state.selection, r, i;
  n instanceof T && (r = n.node);
  let o = t4.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let u = s > o.depth ? o.nodeAfter : o.node(s);
    if (T.isSelectable(u)) {
      r && n.$from.depth > 0 && s >= n.$from.depth && o.before(n.$from.depth + 1) == n.$from.pos ? i = o.before(n.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (Jt(t4, T.create(t4.state.doc, i)), true) : false;
}
function Xm(t4, e, n, r, i) {
  return _u(t4, "handleClickOn", e, n, r) || t4.someProp("handleClick", (o) => o(t4, e, r)) || (i ? Qm(t4, n) : Ym(t4, n));
}
function eg(t4, e, n, r) {
  return _u(t4, "handleDoubleClickOn", e, n, r) || t4.someProp("handleDoubleClick", (i) => i(t4, e, r));
}
function tg(t4, e, n, r) {
  return _u(t4, "handleTripleClickOn", e, n, r) || t4.someProp("handleTripleClick", (i) => i(t4, e, r)) || ng(t4, n, r);
}
function ng(t4, e, n) {
  if (n.button != 0)
    return false;
  let r = t4.state.doc;
  if (e == -1)
    return r.inlineContent ? (Jt(t4, O.create(r, 0, r.content.size)), true) : false;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), u = i.before(o);
    if (s.inlineContent)
      Jt(t4, O.create(r, u + 1, u + 1 + s.content.size));
    else if (T.isSelectable(s))
      Jt(t4, T.create(r, u));
    else
      continue;
    return true;
  }
}
function Ou(t4) {
  return vr(t4);
}
const hh = ke ? "metaKey" : "ctrlKey";
ae.mousedown = (t4, e) => {
  let n = e;
  t4.input.shiftKey = n.shiftKey;
  let r = Ou(t4), i = Date.now(), o = "singleClick";
  i - t4.input.lastClick.time < 500 && Zm(n, t4.input.lastClick) && !n[hh] && t4.input.lastClick.button == n.button && (t4.input.lastClick.type == "singleClick" ? o = "doubleClick" : t4.input.lastClick.type == "doubleClick" && (o = "tripleClick")), t4.input.lastClick = { time: i, x: n.clientX, y: n.clientY, type: o, button: n.button };
  let s = t4.posAtCoords(pi(n));
  s && (o == "singleClick" ? (t4.input.mouseDown && t4.input.mouseDown.done(), t4.input.mouseDown = new rg(t4, s, n, !!r)) : (o == "doubleClick" ? eg : tg)(t4, s.pos, s.inside, n) ? n.preventDefault() : ct(t4, "pointer"));
};
class rg {
  constructor(e, n, r, i) {
    this.view = e, this.pos = n, this.event = r, this.flushed = i, this.delayedSelectionSync = false, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[hh], this.allowDefault = r.shiftKey;
    let o, s;
    if (n.inside > -1)
      o = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let c = e.state.doc.resolve(n.pos);
      o = c.parent, s = c.depth ? c.before() : 0;
    }
    const u = i ? null : r.target, l = u ? e.docView.nearestDesc(u, true) : null;
    this.target = l && l.dom.nodeType == 1 ? l.dom : null;
    let { selection: a } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== false || a instanceof T && a.from <= s && a.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ve && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = true), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), ct(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Ge(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(pi(e))), this.updateAllowDefault(e), this.allowDefault || !n ? ct(this.view, "pointer") : Xm(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    le && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    re && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Jt(this.view, R.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : ct(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), ct(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = true);
  }
}
ae.touchstart = (t4) => {
  t4.input.lastTouch = Date.now(), Ou(t4), ct(t4, "pointer");
};
ae.touchmove = (t4) => {
  t4.input.lastTouch = Date.now(), ct(t4, "pointer");
};
ae.contextmenu = (t4) => Ou(t4);
function ph(t4, e) {
  return t4.composing ? true : le && Math.abs(e.timeStamp - t4.input.compositionEndedAt) < 500 ? (t4.input.compositionEndedAt = -2e8, true) : false;
}
const ig = We ? 5e3 : -1;
ce.compositionstart = ce.compositionupdate = (t4) => {
  if (!t4.composing) {
    t4.domObserver.flush();
    let { state: e } = t4, n = e.selection.$to;
    if (e.selection instanceof O && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === false)))
      t4.markCursor = t4.state.storedMarks || n.marks(), vr(t4, true), t4.markCursor = null;
    else if (vr(t4, !e.selection.empty), ve && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t4.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let u = t4.domSelection();
          u && u.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    t4.input.composing = true;
  }
  mh(t4, ig);
};
ce.compositionend = (t4, e) => {
  t4.composing && (t4.input.composing = false, t4.input.compositionEndedAt = e.timeStamp, t4.input.compositionPendingChanges = t4.domObserver.pendingRecords().length ? t4.input.compositionID : 0, t4.input.compositionNode = null, t4.input.compositionPendingChanges && Promise.resolve().then(() => t4.domObserver.flush()), t4.input.compositionID++, mh(t4, 20));
};
function mh(t4, e) {
  clearTimeout(t4.input.composingTimeout), e > -1 && (t4.input.composingTimeout = setTimeout(() => vr(t4), e));
}
function gh(t4) {
  for (t4.composing && (t4.input.composing = false, t4.input.compositionEndedAt = sg()); t4.input.compositionNodes.length > 0; )
    t4.input.compositionNodes.pop().markParentsDirty();
}
function og(t4) {
  let e = t4.domSelectionRange();
  if (!e.focusNode)
    return null;
  let n = Y1(e.focusNode, e.focusOffset), r = Q1(e.focusNode, e.focusOffset);
  if (n && r && n != r) {
    let i = r.pmViewDesc, o = t4.domObserver.lastChangedTextNode;
    if (n == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (t4.input.compositionNode == r) {
      let s = n.pmViewDesc;
      if (!(!s || !s.isText(n.nodeValue)))
        return r;
    }
  }
  return n || r;
}
function sg() {
  let t4 = document.createEvent("Event");
  return t4.initEvent("event", true, true), t4.timeStamp;
}
function vr(t4, e = false) {
  if (!(We && t4.domObserver.flushingSoon >= 0)) {
    if (t4.domObserver.forceFlush(), gh(t4), e || t4.docView && t4.docView.dirty) {
      let n = Au(t4), r = t4.state.selection;
      return n && !n.eq(r) ? t4.dispatch(t4.state.tr.setSelection(n)) : (t4.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? t4.dispatch(t4.state.tr.deleteSelection()) : t4.updateState(t4.state), true;
    }
    return false;
  }
}
function ug(t4, e) {
  if (!t4.dom.parentNode)
    return;
  let n = t4.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), t4.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t4.focus();
  }, 50);
}
const Mn = de && ht < 15 || Xt && rm < 604;
ae.copy = ce.cut = (t4, e) => {
  let n = e, r = t4.state.selection, i = n.type == "cut";
  if (r.empty)
    return;
  let o = Mn ? null : n.clipboardData, s = r.content(), { dom: u, text: l } = Tu(t4, s);
  o ? (n.preventDefault(), o.clearData(), o.setData("text/html", u.innerHTML), o.setData("text/plain", l)) : ug(t4, u), i && t4.dispatch(t4.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function lg(t4) {
  return t4.openStart == 0 && t4.openEnd == 0 && t4.content.childCount == 1 ? t4.content.firstChild : null;
}
function ag(t4, e) {
  if (!t4.dom.parentNode)
    return;
  let n = t4.input.shiftKey || t4.state.selection.$from.parent.type.spec.code, r = t4.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = t4.input.shiftKey && t4.input.lastKeyCode != 45;
  setTimeout(() => {
    t4.focus(), r.parentNode && r.parentNode.removeChild(r), n ? _n(t4, r.value, null, i, e) : _n(t4, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function _n(t4, e, n, r, i) {
  let o = uh(t4, e, n, r, t4.state.selection.$from);
  if (t4.someProp("handlePaste", (l) => l(t4, i, o || w.empty)))
    return true;
  if (!o)
    return false;
  let s = lg(o), u = s ? t4.state.tr.replaceSelectionWith(s, r) : t4.state.tr.replaceSelection(o);
  return t4.dispatch(u.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste")), true;
}
function bh(t4) {
  let e = t4.getData("text/plain") || t4.getData("Text");
  if (e)
    return e;
  let n = t4.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
ce.paste = (t4, e) => {
  let n = e;
  if (t4.composing && !We)
    return;
  let r = Mn ? null : n.clipboardData, i = t4.input.shiftKey && t4.input.lastKeyCode != 45;
  r && _n(t4, bh(r), r.getData("text/html"), i, n) ? n.preventDefault() : ag(t4, n);
};
class yh {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const cg = ke ? "altKey" : "ctrlKey";
function xh(t4, e) {
  let n = t4.someProp("dragCopies", (r) => !r(e));
  return n ?? !e[cg];
}
ae.dragstart = (t4, e) => {
  let n = e, r = t4.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let i = t4.state.selection, o = i.empty ? null : t4.posAtCoords(pi(n)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof T ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = T.create(t4.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let f = t4.docView.nearestDesc(n.target, true);
      f && f.node.type.spec.draggable && f != t4.docView && (s = T.create(t4.state.doc, f.posBefore));
    }
  }
  let u = (s || t4.state.selection).content(), { dom: l, text: a, slice: c } = Tu(t4, u);
  (!n.dataTransfer.files.length || !re || Ud > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Mn ? "Text" : "text/html", l.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Mn || n.dataTransfer.setData("text/plain", a), t4.dragging = new yh(c, xh(t4, n), s);
};
ae.dragend = (t4) => {
  let e = t4.dragging;
  window.setTimeout(() => {
    t4.dragging == e && (t4.dragging = null);
  }, 50);
};
ce.dragover = ce.dragenter = (t4, e) => e.preventDefault();
ce.drop = (t4, e) => {
  let n = e, r = t4.dragging;
  if (t4.dragging = null, !n.dataTransfer)
    return;
  let i = t4.posAtCoords(pi(n));
  if (!i)
    return;
  let o = t4.state.doc.resolve(i.pos), s = r && r.slice;
  s ? t4.someProp("transformPasted", (p) => {
    s = p(s, t4, false);
  }) : s = uh(t4, bh(n.dataTransfer), Mn ? null : n.dataTransfer.getData("text/html"), false, o);
  let u = !!(r && xh(t4, n));
  if (t4.someProp("handleDrop", (p) => p(t4, n, s || w.empty, u))) {
    n.preventDefault();
    return;
  }
  if (!s)
    return;
  n.preventDefault();
  let l = s ? Sd(t4.state.doc, o.pos, s) : o.pos;
  l == null && (l = o.pos);
  let a = t4.state.tr;
  if (u) {
    let { node: p } = r;
    p ? p.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), f = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, d = a.doc;
  if (f ? a.replaceRangeWith(c, c, s.content.firstChild) : a.replaceRange(c, c, s), a.doc.eq(d))
    return;
  let h = a.doc.resolve(c);
  if (f && T.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild))
    a.setSelection(new T(h));
  else {
    let p = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((m, g, b, y) => p = y), a.setSelection(Du(t4, h, a.doc.resolve(p)));
  }
  t4.focus(), t4.dispatch(a.setMeta("uiEvent", "drop"));
};
ae.focus = (t4) => {
  t4.input.lastFocus = Date.now(), t4.focused || (t4.domObserver.stop(), t4.dom.classList.add("ProseMirror-focused"), t4.domObserver.start(), t4.focused = true, setTimeout(() => {
    t4.docView && t4.hasFocus() && !t4.domObserver.currentSelection.eq(t4.domSelectionRange()) && Ge(t4);
  }, 20));
};
ae.blur = (t4, e) => {
  let n = e;
  t4.focused && (t4.domObserver.stop(), t4.dom.classList.remove("ProseMirror-focused"), t4.domObserver.start(), n.relatedTarget && t4.dom.contains(n.relatedTarget) && t4.domObserver.currentSelection.clear(), t4.focused = false);
};
ae.beforeinput = (t4, e) => {
  if (re && We && e.inputType == "deleteContentBackward") {
    t4.domObserver.flushSoon();
    let { domChangeCount: r } = t4.input;
    setTimeout(() => {
      if (t4.input.domChangeCount != r || (t4.dom.blur(), t4.focus(), t4.someProp("handleKeyDown", (o) => o(t4, vt(8, "Backspace")))))
        return;
      let { $cursor: i } = t4.state.selection;
      i && i.pos > 0 && t4.dispatch(t4.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let t4 in ce)
  ae[t4] = ce[t4];
function On(t4, e) {
  if (t4 == e)
    return true;
  for (let n in t4)
    if (t4[n] !== e[n])
      return false;
  for (let n in e)
    if (!(n in t4))
      return false;
  return true;
}
class Er {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || Mt, this.side = this.spec.side || 0;
  }
  map(e, n, r, i) {
    let { pos: o, deleted: s } = e.mapResult(n.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ie(o - r, o - r, this);
  }
  valid() {
    return true;
  }
  eq(e) {
    return this == e || e instanceof Er && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && On(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class mt {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Mt;
  }
  map(e, n, r, i) {
    let o = e.map(n.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(n.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ie(o, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof mt && On(this.attrs, e.attrs) && On(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof mt;
  }
  destroy() {
  }
}
class Nu {
  constructor(e, n) {
    this.attrs = e, this.spec = n || Mt;
  }
  map(e, n, r, i) {
    let o = e.mapResult(n.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(n.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ie(o.pos - r, s.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: i } = e.content.findIndex(n.from), o;
    return i == n.from && !(o = e.child(r)).isText && i + o.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Nu && On(this.attrs, e.attrs) && On(this.spec, e.spec);
  }
  destroy() {
  }
}
class ie {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new ie(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new ie(e, e, new Er(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, i) {
    return new ie(e, n, new mt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, i) {
    return new ie(e, n, new Nu(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof mt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Er;
  }
}
const Vt = [], Mt = {};
class q {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : Vt, this.children = n.length ? n : Vt;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? Sr(n, e, 0, Mt) : ne;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let i = [];
    return this.findInner(e ?? 0, n ?? 1e9, i, 0, r), i;
  }
  findInner(e, n, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let u = this.local[s];
      u.from <= n && u.to >= e && (!o || o(u.spec)) && r.push(u.copy(u.from + i, u.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let u = this.children[s] + 1;
        this.children[s + 2].findInner(e - u, n - u, r, i + u, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == ne || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || Mt);
  }
  /**
  @internal
  */
  mapInner(e, n, r, i, o) {
    let s;
    for (let u = 0; u < this.local.length; u++) {
      let l = this.local[u].map(e, r, i);
      l && l.type.valid(n, l) ? (s || (s = [])).push(l) : o.onRemove && o.onRemove(this.local[u].spec);
    }
    return this.children.length ? fg(this.children, s || [], e, n, r, i, o) : s ? new q(s.sort(_t), Vt) : ne;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == ne ? q.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let i, o = 0;
    e.forEach((u, l) => {
      let a = l + r, c;
      if (c = Ch(n, u, a)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < l; )
          o += 3;
        i[o] == l ? i[o + 2] = i[o + 2].addInner(u, c, a + 1) : i.splice(o, 0, l, l + u.nodeSize, Sr(c, u, a + 1, Mt)), o += 3;
      }
    });
    let s = kh(o ? vh(n) : n, -r);
    for (let u = 0; u < s.length; u++)
      s[u].type.valid(e, s[u]) || s.splice(u--, 1);
    return new q(s.length ? this.local.concat(s).sort(_t) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ne ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, u = r[o] + n, l = r[o + 1] + n;
      for (let c = 0, f; c < e.length; c++)
        (f = e[c]) && f.from > u && f.to < l && (e[c] = null, (s || (s = [])).push(f));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let a = r[o + 2].removeInner(s, u + 1);
      a != ne ? r[o + 2] = a : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let u = 0; u < i.length; u++)
            i[u].eq(s, n) && (i == this.local && (i = this.local.slice()), i.splice(u--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new q(i, r) : ne;
  }
  forChild(e, n) {
    if (this == ne)
      return this;
    if (n.isLeaf)
      return q.empty;
    let r, i;
    for (let u = 0; u < this.children.length; u += 3)
      if (this.children[u] >= e) {
        this.children[u] == e && (r = this.children[u + 2]);
        break;
      }
    let o = e + 1, s = o + n.content.size;
    for (let u = 0; u < this.local.length; u++) {
      let l = this.local[u];
      if (l.from < s && l.to > o && l.type instanceof mt) {
        let a = Math.max(o, l.from) - o, c = Math.min(s, l.to) - o;
        a < c && (i || (i = [])).push(l.copy(a, c));
      }
    }
    if (i) {
      let u = new q(i.sort(_t), Vt);
      return r ? new ot([u, r]) : u;
    }
    return r || ne;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return true;
    if (!(e instanceof q) || this.local.length != e.local.length || this.children.length != e.children.length)
      return false;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return false;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return false;
    return true;
  }
  /**
  @internal
  */
  locals(e) {
    return Ru(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ne)
      return Vt;
    if (e.inlineContent || !this.local.some(mt.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof mt || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
q.empty = new q([], []);
q.removeOverlap = Ru;
const ne = q.empty;
class ot {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((i) => i.map(e, n, Mt));
    return ot.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return q.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, n);
      o != ne && (o instanceof ot ? r = r.concat(o.members) : r.push(o));
    }
    return ot.from(r);
  }
  eq(e) {
    if (!(e instanceof ot) || e.members.length != this.members.length)
      return false;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return false;
    return true;
  }
  locals(e) {
    let n, r = true;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!n)
          n = o;
        else {
          r && (n = n.slice(), r = false);
          for (let s = 0; s < o.length; s++)
            n.push(o[s]);
        }
    }
    return n ? Ru(r ? n : n.sort(_t)) : Vt;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ne;
      case 1:
        return e[0];
      default:
        return new ot(e.every((n) => n instanceof q) ? e : e.reduce((n, r) => n.concat(r instanceof q ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function fg(t4, e, n, r, i, o, s) {
  let u = t4.slice();
  for (let a = 0, c = o; a < n.maps.length; a++) {
    let f = 0;
    n.maps[a].forEach((d, h, p, m) => {
      let g = m - p - (h - d);
      for (let b = 0; b < u.length; b += 3) {
        let y = u[b + 1];
        if (y < 0 || d > y + c - f)
          continue;
        let x = u[b] + c - f;
        h >= x ? u[b + 1] = d <= x ? -2 : -1 : d >= c && g && (u[b] += g, u[b + 1] += g);
      }
      f += g;
    }), c = n.maps[a].map(c, -1);
  }
  let l = false;
  for (let a = 0; a < u.length; a += 3)
    if (u[a + 1] < 0) {
      if (u[a + 1] == -2) {
        l = true, u[a + 1] = -1;
        continue;
      }
      let c = n.map(t4[a] + o), f = c - i;
      if (f < 0 || f >= r.content.size) {
        l = true;
        continue;
      }
      let d = n.map(t4[a + 1] + o, -1), h = d - i, { index: p, offset: m } = r.content.findIndex(f), g = r.maybeChild(p);
      if (g && m == f && m + g.nodeSize == h) {
        let b = u[a + 2].mapInner(n, g, c + 1, t4[a] + o + 1, s);
        b != ne ? (u[a] = f, u[a + 1] = h, u[a + 2] = b) : (u[a + 1] = -2, l = true);
      } else
        l = true;
    }
  if (l) {
    let a = dg(u, t4, e, n, i, o, s), c = Sr(a, r, 0, s);
    e = c.local;
    for (let f = 0; f < u.length; f += 3)
      u[f + 1] < 0 && (u.splice(f, 3), f -= 3);
    for (let f = 0, d = 0; f < c.children.length; f += 3) {
      let h = c.children[f];
      for (; d < u.length && u[d] < h; )
        d += 3;
      u.splice(d, 0, c.children[f], c.children[f + 1], c.children[f + 2]);
    }
  }
  return new q(e.sort(_t), u);
}
function kh(t4, e) {
  if (!e || !t4.length)
    return t4;
  let n = [];
  for (let r = 0; r < t4.length; r++) {
    let i = t4[r];
    n.push(new ie(i.from + e, i.to + e, i.type));
  }
  return n;
}
function dg(t4, e, n, r, i, o, s) {
  function u(l, a) {
    for (let c = 0; c < l.local.length; c++) {
      let f = l.local[c].map(r, i, a);
      f ? n.push(f) : s.onRemove && s.onRemove(l.local[c].spec);
    }
    for (let c = 0; c < l.children.length; c += 3)
      u(l.children[c + 2], l.children[c] + a + 1);
  }
  for (let l = 0; l < t4.length; l += 3)
    t4[l + 1] == -1 && u(t4[l + 2], e[l] + o + 1);
  return n;
}
function Ch(t4, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, i = null;
  for (let o = 0, s; o < t4.length; o++)
    (s = t4[o]) && s.from > n && s.to < r && ((i || (i = [])).push(s), t4[o] = null);
  return i;
}
function vh(t4) {
  let e = [];
  for (let n = 0; n < t4.length; n++)
    t4[n] != null && e.push(t4[n]);
  return e;
}
function Sr(t4, e, n, r) {
  let i = [], o = false;
  e.forEach((u, l) => {
    let a = Ch(t4, u, l + n);
    if (a) {
      o = true;
      let c = Sr(a, u, n + l + 1, r);
      c != ne && i.push(l, l + u.nodeSize, c);
    }
  });
  let s = kh(o ? vh(t4) : t4, -n).sort(_t);
  for (let u = 0; u < s.length; u++)
    s[u].type.valid(e, s[u]) || (r.onRemove && r.onRemove(s[u].spec), s.splice(u--, 1));
  return s.length || i.length ? new q(s, i) : ne;
}
function _t(t4, e) {
  return t4.from - e.from || t4.to - e.to;
}
function Ru(t4) {
  let e = t4;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let i = n + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == t4 && (e = t4.slice()), e[i] = o.copy(o.from, r.to), Tc(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == t4 && (e = t4.slice()), e[n] = r.copy(r.from, o.from), Tc(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Tc(t4, e, n) {
  for (; e < t4.length && _t(n, t4[e]) > 0; )
    e++;
  t4.splice(e, 0, n);
}
function as(t4) {
  let e = [];
  return t4.someProp("decorations", (n) => {
    let r = n(t4.state);
    r && r != ne && e.push(r);
  }), t4.cursorWrapper && e.push(q.create(t4.state.doc, [t4.cursorWrapper.deco])), ot.from(e);
}
const hg = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
}, pg = de && ht <= 11;
class mg {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class gg {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new mg(), this.onCharData = null, this.suppressingSelectionUpdates = false, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      de && ht <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), pg && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, hg)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true, setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (kc(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Ge(this.view);
      if (de && ht <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && It(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return true;
    let n = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Qt(o))
      n.add(o);
    for (let o = e.anchorNode; o; o = Qt(o))
      if (n.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), true;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.pendingRecords();
    n.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && kc(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, u = false, l = [];
    if (e.editable)
      for (let c = 0; c < n.length; c++) {
        let f = this.registerMutation(n[c], l);
        f && (o = o < 0 ? f.from : Math.min(f.from, o), s = s < 0 ? f.to : Math.max(f.to, s), f.typeOver && (u = true));
      }
    if (ve && l.length) {
      let c = l.filter((f) => f.nodeName == "BR");
      if (c.length == 2) {
        let [f, d] = c;
        f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove();
      } else {
        let { focusNode: f } = this.currentSelection;
        for (let d of c) {
          let h = d.parentNode;
          h && h.nodeName == "LI" && (!f || xg(e, f) != h) && d.remove();
        }
      }
    }
    let a = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && di(r) && (a = Au(e)) && a.eq(R.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Ge(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), bg(e)), this.handleDOMChange(o, s, u, l), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Ge(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let c = 0; c < e.addedNodes.length; c++) {
        let f = e.addedNodes[c];
        n.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (de && ht <= 11 && e.addedNodes.length)
        for (let c = 0; c < e.addedNodes.length; c++) {
          let { previousSibling: f, nextSibling: d } = e.addedNodes[c];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (o = d);
        }
      let s = i && i.parentNode == e.target ? ee(i) + 1 : 0, u = r.localPosFromDOM(e.target, s, -1), l = o && o.parentNode == e.target ? ee(o) : e.target.childNodes.length, a = r.localPosFromDOM(e.target, l, 1);
      return { from: u, to: a };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Mc = /* @__PURE__ */ new WeakMap(), _c = false;
function bg(t4) {
  if (!Mc.has(t4) && (Mc.set(t4, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t4.dom).whiteSpace) !== -1)) {
    if (t4.requiresGeckoHackNode = ve, _c)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), _c = true;
  }
}
function Oc(t4, e) {
  let n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = t4.domAtPos(t4.state.selection.anchor);
  return It(s.node, s.offset, i, o) && ([n, r, i, o] = [i, o, n, r]), { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: o };
}
function yg(t4, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(t4.root)[0];
    if (i)
      return Oc(t4, i);
  }
  let n;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), n = i.getTargetRanges()[0];
  }
  return t4.dom.addEventListener("beforeinput", r, true), document.execCommand("indent"), t4.dom.removeEventListener("beforeinput", r, true), n ? Oc(t4, n) : null;
}
function xg(t4, e) {
  for (let n = e.parentNode; n && n != t4.dom; n = n.parentNode) {
    let r = t4.docView.nearestDesc(n, true);
    if (r && r.node.isBlock)
      return n;
  }
  return null;
}
function kg(t4, e, n) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: u } = t4.docView.parseRange(e, n), l = t4.domSelectionRange(), a, c = l.anchorNode;
  if (c && t4.dom.contains(c.nodeType == 1 ? c : c.parentNode) && (a = [{ node: c, offset: l.anchorOffset }], di(l) || a.push({ node: l.focusNode, offset: l.focusOffset })), re && t4.input.lastKeyCode === 8)
    for (let g = o; g > i; g--) {
      let b = r.childNodes[g - 1], y = b.pmViewDesc;
      if (b.nodeName == "BR" && !y) {
        o = g;
        break;
      }
      if (!y || y.size)
        break;
    }
  let f = t4.state.doc, d = t4.someProp("domParser") || dt.fromSchema(t4.state.schema), h = f.resolve(s), p = null, m = d.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: true,
    from: i,
    to: o,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : true,
    findPositions: a,
    ruleFromNode: Cg,
    context: h
  });
  if (a && a[0].pos != null) {
    let g = a[0].pos, b = a[1] && a[1].pos;
    b == null && (b = g), p = { anchor: g + s, head: b + s };
  }
  return { doc: m, sel: p, from: s, to: u };
}
function Cg(t4) {
  let e = t4.pmViewDesc;
  if (e)
    return e.parseRule();
  if (t4.nodeName == "BR" && t4.parentNode) {
    if (le && /^(ul|ol)$/i.test(t4.parentNode.nodeName)) {
      let n = document.createElement("div");
      return n.appendChild(document.createElement("li")), { skip: n };
    } else if (t4.parentNode.lastChild == t4 || le && /^(tr|table)$/i.test(t4.parentNode.nodeName))
      return { ignore: true };
  } else if (t4.nodeName == "IMG" && t4.getAttribute("mark-placeholder"))
    return { ignore: true };
  return null;
}
const vg = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Eg(t4, e, n, r, i) {
  let o = t4.input.compositionPendingChanges || (t4.composing ? t4.input.compositionID : 0);
  if (t4.input.compositionPendingChanges = 0, e < 0) {
    let A = t4.input.lastSelectionTime > Date.now() - 50 ? t4.input.lastSelectionOrigin : null, _ = Au(t4, A);
    if (_ && !t4.state.selection.eq(_)) {
      if (re && We && t4.input.lastKeyCode === 13 && Date.now() - 100 < t4.input.lastKeyCodeTime && t4.someProp("handleKeyDown", (be) => be(t4, vt(13, "Enter"))))
        return;
      let I = t4.state.tr.setSelection(_);
      A == "pointer" ? I.setMeta("pointer", true) : A == "key" && I.scrollIntoView(), o && I.setMeta("composition", o), t4.dispatch(I);
    }
    return;
  }
  let s = t4.state.doc.resolve(e), u = s.sharedDepth(n);
  e = s.before(u + 1), n = t4.state.doc.resolve(n).after(u + 1);
  let l = t4.state.selection, a = kg(t4, e, n), c = t4.state.doc, f = c.slice(a.from, a.to), d, h;
  t4.input.lastKeyCode === 8 && Date.now() - 100 < t4.input.lastKeyCodeTime ? (d = t4.state.selection.to, h = "end") : (d = t4.state.selection.from, h = "start"), t4.input.lastKeyCode = null;
  let p = Ag(f.content, a.doc.content, a.from, d, h);
  if (p && t4.input.domChangeCount++, (Xt && t4.input.lastIOSEnter > Date.now() - 225 || We) && i.some((A) => A.nodeType == 1 && !vg.test(A.nodeName)) && (!p || p.endA >= p.endB) && t4.someProp("handleKeyDown", (A) => A(t4, vt(13, "Enter")))) {
    t4.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && l instanceof O && !l.empty && l.$head.sameParent(l.$anchor) && !t4.composing && !(a.sel && a.sel.anchor != a.sel.head))
      p = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (a.sel) {
        let A = Nc(t4, t4.state.doc, a.sel);
        if (A && !A.eq(t4.state.selection)) {
          let _ = t4.state.tr.setSelection(A);
          o && _.setMeta("composition", o), t4.dispatch(_);
        }
      }
      return;
    }
  t4.state.selection.from < t4.state.selection.to && p.start == p.endB && t4.state.selection instanceof O && (p.start > t4.state.selection.from && p.start <= t4.state.selection.from + 2 && t4.state.selection.from >= a.from ? p.start = t4.state.selection.from : p.endA < t4.state.selection.to && p.endA >= t4.state.selection.to - 2 && t4.state.selection.to <= a.to && (p.endB += t4.state.selection.to - p.endA, p.endA = t4.state.selection.to)), de && ht <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > a.from && a.doc.textBetween(p.start - a.from - 1, p.start - a.from + 1) == " \xA0" && (p.start--, p.endA--, p.endB--);
  let m = a.doc.resolveNoCache(p.start - a.from), g = a.doc.resolveNoCache(p.endB - a.from), b = c.resolve(p.start), y = m.sameParent(g) && m.parent.inlineContent && b.end() >= p.endA, x;
  if ((Xt && t4.input.lastIOSEnter > Date.now() - 225 && (!y || i.some((A) => A.nodeName == "DIV" || A.nodeName == "P")) || !y && m.pos < a.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && !/\S/.test(a.doc.textBetween(m.pos, g.pos, "", "")) && (x = R.findFrom(a.doc.resolve(m.pos + 1), 1, true)) && x.head > m.pos) && t4.someProp("handleKeyDown", (A) => A(t4, vt(13, "Enter")))) {
    t4.input.lastIOSEnter = 0;
    return;
  }
  if (t4.state.selection.anchor > p.start && wg(c, p.start, p.endA, m, g) && t4.someProp("handleKeyDown", (A) => A(t4, vt(8, "Backspace")))) {
    We && re && t4.domObserver.suppressSelectionUpdates();
    return;
  }
  re && p.endB == p.start && (t4.input.lastChromeDelete = Date.now()), We && !y && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && a.sel && a.sel.anchor == a.sel.head && a.sel.head == p.endA && (p.endB -= 2, g = a.doc.resolveNoCache(p.endB - a.from), setTimeout(() => {
    t4.someProp("handleKeyDown", function(A) {
      return A(t4, vt(13, "Enter"));
    });
  }, 20));
  let k = p.start, C = p.endA, S = (A) => {
    let _ = A || t4.state.tr.replace(k, C, a.doc.slice(p.start - a.from, p.endB - a.from));
    if (a.sel) {
      let I = Nc(t4, _.doc, a.sel);
      I && !(re && t4.composing && I.empty && (p.start != p.endB || t4.input.lastChromeDelete < Date.now() - 100) && (I.head == k || I.head == _.mapping.map(C) - 1) || de && I.empty && I.head == k) && _.setSelection(I);
    }
    return o && _.setMeta("composition", o), _.scrollIntoView();
  }, M;
  if (y) {
    if (m.pos == g.pos) {
      de && ht <= 11 && m.parentOffset == 0 && (t4.domObserver.suppressSelectionUpdates(), setTimeout(() => Ge(t4), 20));
      let A = S(t4.state.tr.delete(k, C)), _ = c.resolve(p.start).marksAcross(c.resolve(p.endA));
      _ && A.ensureMarks(_), t4.dispatch(A);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (M = Sg(m.parent.content.cut(m.parentOffset, g.parentOffset), b.parent.content.cut(b.parentOffset, p.endA - b.start())))
    ) {
      let A = S(t4.state.tr);
      M.type == "add" ? A.addMark(k, C, M.mark) : A.removeMark(k, C, M.mark), t4.dispatch(A);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let A = m.parent.textBetween(m.parentOffset, g.parentOffset), _ = () => S(t4.state.tr.insertText(A, k, C));
      t4.someProp("handleTextInput", (I) => I(t4, k, C, A, _)) || t4.dispatch(_());
    }
  } else
    t4.dispatch(S());
}
function Nc(t4, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : Du(t4, e.resolve(n.anchor), e.resolve(n.head));
}
function Sg(t4, e) {
  let n = t4.firstChild.marks, r = e.firstChild.marks, i = n, o = r, s, u, l;
  for (let c = 0; c < r.length; c++)
    i = r[c].removeFromSet(i);
  for (let c = 0; c < n.length; c++)
    o = n[c].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    u = i[0], s = "add", l = (c) => c.mark(u.addToSet(c.marks));
  else if (i.length == 0 && o.length == 1)
    u = o[0], s = "remove", l = (c) => c.mark(u.removeFromSet(c.marks));
  else
    return null;
  let a = [];
  for (let c = 0; c < e.childCount; c++)
    a.push(l(e.child(c)));
  if (v.from(a).eq(t4))
    return { mark: u, type: s };
}
function wg(t4, e, n, r, i) {
  if (
    // The content must have shrunk
    n - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    cs(r, true, false) < i.pos
  )
    return false;
  let o = t4.resolve(e);
  if (!r.parent.isTextblock) {
    let u = o.nodeAfter;
    return u != null && n == e + u.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return false;
  let s = t4.resolve(cs(o, true, true));
  return !s.parent.isTextblock || s.pos > n || cs(s, true, false) < n ? false : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function cs(t4, e, n) {
  let r = t4.depth, i = e ? t4.end() : t4.pos;
  for (; r > 0 && (e || t4.indexAfter(r) == t4.node(r).childCount); )
    r--, i++, e = false;
  if (n) {
    let o = t4.node(r).maybeChild(t4.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Ag(t4, e, n, r, i) {
  let o = t4.findDiffStart(e, n);
  if (o == null)
    return null;
  let { a: s, b: u } = t4.findDiffEnd(e, n + t4.size, n + e.size);
  if (i == "end") {
    let l = Math.max(0, o - Math.min(s, u));
    r -= s + l - o;
  }
  if (s < o && t4.size < e.size) {
    let l = r <= o && r >= s ? o - r : 0;
    o -= l, o && o < e.size && Rc(e.textBetween(o - 1, o + 1)) && (o += l ? 1 : -1), u = o + (u - s), s = o;
  } else if (u < o) {
    let l = r <= o && r >= u ? o - r : 0;
    o -= l, o && o < t4.size && Rc(t4.textBetween(o - 1, o + 1)) && (o += l ? 1 : -1), s = o + (s - u), u = o;
  }
  return { start: o, endA: s, endB: u };
}
function Rc(t4) {
  if (t4.length != 2)
    return false;
  let e = t4.charCodeAt(0), n = t4.charCodeAt(1);
  return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
}
class Eh {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = false, this.trackWrites = null, this.mounted = false, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Um(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = false, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(Lc), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = true)), this.editable = Pc(this), Fc(this), this.nodeViews = Bc(this), this.docView = pc(this.state.doc, Ic(this), as(this), this.dom, this), this.domObserver = new gg(this, (r, i, o, s) => Eg(this, r, i, o, s)), this.domObserver.start(), Wm(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Gs(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Lc), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    var r;
    let i = this.state, o = false, s = false;
    e.storedMarks && this.composing && (gh(this), s = true), this.state = e;
    let u = i.plugins != e.plugins || this._props.plugins != n.plugins;
    if (u || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let h = Bc(this);
      Tg(h, this.nodeViews) && (this.nodeViews = h, o = true);
    }
    (u || n.handleDOMEvents != this._props.handleDOMEvents) && Gs(this), this.editable = Pc(this), Fc(this);
    let l = as(this), a = Ic(this), c = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", f = o || !this.docView.matchesNode(e.doc, a, l);
    (f || !e.selection.eq(i.selection)) && (s = true);
    let d = c == "preserve" && s && this.dom.style.overflowAnchor == null && sm(this);
    if (s) {
      this.domObserver.stop();
      let h = f && (de || re) && !this.composing && !i.selection.empty && !e.selection.empty && Dg(i.selection, e.selection);
      if (f) {
        let p = re ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = og(this)), (o || !this.docView.update(e.doc, a, l, this)) && (this.docView.updateOuterDeco(a), this.docView.destroy(), this.docView = pc(e.doc, a, l, this.dom, this)), p && !this.trackWrites && (h = true);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && _m(this)) ? Ge(this, h) : (ih(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : d && um(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (n) => n(this))) if (this.state.selection instanceof T) {
        let n = this.docView.domAfterPos(this.state.selection.from);
        n.nodeType == 1 && lc(this, n.getBoundingClientRect(), e);
      } else
        lc(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, n) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - n.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new yh(e.slice, e.move, i < 0 ? void 0 : T.create(this.state.doc, i));
  }
  someProp(e, n) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = n ? n(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let u = this.directPlugins[s].props[e];
      if (u != null && (i = n ? n(u) : u))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let u = o[s].props[e];
        if (u != null && (i = n ? n(u) : u))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (de) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return true;
      if (!e || !this.dom.contains(e))
        return false;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return false;
        e = e.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && lm(this.dom), Ge(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return hm(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return Zd(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let i = this.docView.posFromDOM(e, n, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return ym(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return _n(this, "", e, false, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return _n(this, e, null, true, n || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return Tu(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Km(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], as(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, G1());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Gm(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? le && this.root.nodeType === 11 && em(this.dom.ownerDocument) == this.dom && yg(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Eh.prototype.dispatch = function(t4) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, t4) : this.updateState(this.state.apply(t4));
};
function Ic(t4) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t4.editable), t4.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t4.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [ie.node(0, t4.state.doc.content.size, e)];
}
function Fc(t4) {
  if (t4.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t4.cursorWrapper = { dom: e, deco: ie.widget(t4.state.selection.from, e, { raw: true, marks: t4.markCursor }) };
  } else
    t4.cursorWrapper = null;
}
function Pc(t4) {
  return !t4.someProp("editable", (e) => e(t4.state) === false);
}
function Dg(t4, e) {
  let n = Math.min(t4.$anchor.sharedDepth(t4.head), e.$anchor.sharedDepth(e.head));
  return t4.$anchor.start(n) != e.$anchor.start(n);
}
function Bc(t4) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return t4.someProp("nodeViews", n), t4.someProp("markViews", n), e;
}
function Tg(t4, e) {
  let n = 0, r = 0;
  for (let i in t4) {
    if (t4[i] != e[i])
      return true;
    n++;
  }
  for (let i in e)
    r++;
  return n != r;
}
function Lc(t4) {
  if (t4.spec.state || t4.spec.filterTransaction || t4.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var gt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, wr = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Mg = typeof navigator < "u" && /Mac/.test(navigator.platform), _g = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var te = 0; te < 10; te++) gt[48 + te] = gt[96 + te] = String(te);
for (var te = 1; te <= 24; te++) gt[te + 111] = "F" + te;
for (var te = 65; te <= 90; te++)
  gt[te] = String.fromCharCode(te + 32), wr[te] = String.fromCharCode(te);
for (var fs in gt) wr.hasOwnProperty(fs) || (wr[fs] = gt[fs]);
function Og(t4) {
  var e = Mg && t4.metaKey && t4.shiftKey && !t4.ctrlKey && !t4.altKey || _g && t4.shiftKey && t4.key && t4.key.length == 1 || t4.key == "Unidentified", n = !e && t4.key || (t4.shiftKey ? wr : gt)[t4.keyCode] || t4.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const Ng = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Rg = typeof navigator < "u" && /Win/.test(navigator.platform);
function Ig(t4) {
  let e = t4.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, i, o, s;
  for (let u = 0; u < e.length - 1; u++) {
    let l = e[u];
    if (/^(cmd|meta|m)$/i.test(l))
      s = true;
    else if (/^a(lt)?$/i.test(l))
      r = true;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = true;
    else if (/^s(hift)?$/i.test(l))
      o = true;
    else if (/^mod$/i.test(l))
      Ng ? s = true : i = true;
    else
      throw new Error("Unrecognized modifier name: " + l);
  }
  return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), s && (n = "Meta-" + n), o && (n = "Shift-" + n), n;
}
function Fg(t4) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t4)
    e[Ig(n)] = t4[n];
  return e;
}
function ds(t4, e, n = true) {
  return e.altKey && (t4 = "Alt-" + t4), e.ctrlKey && (t4 = "Ctrl-" + t4), e.metaKey && (t4 = "Meta-" + t4), n && e.shiftKey && (t4 = "Shift-" + t4), t4;
}
function Pg(t4) {
  return new P({ props: { handleKeyDown: Sh(t4) } });
}
function Sh(t4) {
  let e = Fg(t4);
  return function(n, r) {
    let i = Og(r), o, s = e[ds(i, r)];
    if (s && s(n.state, n.dispatch, n))
      return true;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let u = e[ds(i, r, false)];
        if (u && u(n.state, n.dispatch, n))
          return true;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Rg && r.ctrlKey && r.altKey) && (o = gt[r.keyCode]) && o != i) {
        let u = e[ds(o, r)];
        if (u && u(n.state, n.dispatch, n))
          return true;
      }
    }
    return false;
  };
}
var Bg = Object.defineProperty, Iu = (t4, e) => {
  for (var n in e)
    Bg(t4, n, { get: e[n], enumerable: true });
};
function mi(t4) {
  const { state: e, transaction: n } = t4;
  let { selection: r } = n, { doc: i } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = n.selection, i = n.doc, o = n.storedMarks, n;
    }
  };
}
var gi = class {
  constructor(t4) {
    this.editor = t4.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t4.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t4, editor: e, state: n } = this, { view: r } = e, { tr: i } = n, o = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(t4).map(([s, u]) => [s, (...a) => {
        const c = u(...a)(o);
        return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), c;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t4, e = true) {
    const { rawCommands: n, editor: r, state: i } = this, { view: o } = r, s = [], u = !!t4, l = t4 || i.tr, a = () => (!u && e && !l.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(l), s.every((f) => f === true)), c = {
      ...Object.fromEntries(
        Object.entries(n).map(([f, d]) => [f, (...p) => {
          const m = this.buildProps(l, e), g = d(...p)(m);
          return s.push(g), c;
        }])
      ),
      run: a
    };
    return c;
  }
  createCan(t4) {
    const { rawCommands: e, state: n } = this, r = false, i = t4 || n.tr, o = this.buildProps(i, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([u, l]) => [u, (...a) => l(...a)({ ...o, dispatch: void 0 })])
      ),
      chain: () => this.createChain(i, r)
    };
  }
  buildProps(t4, e = true) {
    const { rawCommands: n, editor: r, state: i } = this, { view: o } = r, s = {
      tr: t4,
      editor: r,
      view: o,
      state: mi({
        state: i,
        transaction: t4
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(t4, e),
      can: () => this.createCan(t4),
      get commands() {
        return Object.fromEntries(
          Object.entries(n).map(([u, l]) => [u, (...a) => l(...a)(s)])
        );
      }
    };
    return s;
  }
}, wh = {};
Iu(wh, {
  blur: () => Lg,
  clearContent: () => zg,
  clearNodes: () => qg,
  command: () => $g,
  createParagraphNear: () => jg,
  cut: () => Vg,
  deleteCurrentNode: () => Hg,
  deleteNode: () => Ug,
  deleteRange: () => Wg,
  deleteSelection: () => Kg,
  enter: () => Jg,
  exitCode: () => Gg,
  extendMarkRange: () => Zg,
  first: () => Yg,
  focus: () => Xg,
  forEach: () => eb,
  insertContent: () => tb,
  insertContentAt: () => ib,
  joinBackward: () => ub,
  joinDown: () => sb,
  joinForward: () => lb,
  joinItemBackward: () => ab,
  joinItemForward: () => cb,
  joinTextblockBackward: () => fb,
  joinTextblockForward: () => db,
  joinUp: () => ob,
  keyboardShortcut: () => pb,
  lift: () => mb,
  liftEmptyBlock: () => gb,
  liftListItem: () => bb,
  newlineInCode: () => yb,
  resetAttributes: () => xb,
  scrollIntoView: () => kb,
  selectAll: () => Cb,
  selectNodeBackward: () => vb,
  selectNodeForward: () => Eb,
  selectParentNode: () => Sb,
  selectTextblockEnd: () => wb,
  selectTextblockStart: () => Ab,
  setContent: () => Db,
  setMark: () => Hb,
  setMeta: () => Ub,
  setNode: () => Wb,
  setNodeSelection: () => Kb,
  setTextSelection: () => Jb,
  sinkListItem: () => Gb,
  splitBlock: () => Zb,
  splitListItem: () => Yb,
  toggleList: () => Qb,
  toggleMark: () => Xb,
  toggleNode: () => e2,
  toggleWrap: () => t2,
  undoInputRule: () => n2,
  unsetAllMarks: () => r2,
  unsetMark: () => i2,
  updateAttributes: () => o2,
  wrapIn: () => s2,
  wrapInList: () => u2
});
var Lg = () => ({ editor: t4, view: e }) => (requestAnimationFrame(() => {
  var n;
  t4.isDestroyed || (e.dom.blur(), (n = window?.getSelection()) == null || n.removeAllRanges());
}), true), zg = (t4 = true) => ({ commands: e }) => e.setContent("", { emitUpdate: t4 }), qg = () => ({ state: t4, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: i } = r;
  return n && i.forEach(({ $from: o, $to: s }) => {
    t4.doc.nodesBetween(o.pos, s.pos, (u, l) => {
      if (u.type.isText)
        return;
      const { doc: a, mapping: c } = e, f = a.resolve(c.map(l)), d = a.resolve(c.map(l + u.nodeSize)), h = f.blockRange(d);
      if (!h)
        return;
      const p = nn(h);
      if (u.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), true;
}, $g = (t4) => (e) => t4(e), jg = () => ({ state: t4, dispatch: e }) => qd(t4, e), Vg = (t4, e) => ({ editor: n, tr: r }) => {
  const { state: i } = n, o = i.doc.slice(t4.from, t4.to);
  r.deleteRange(t4.from, t4.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new O(r.doc.resolve(Math.max(s - 1, 0)))), true;
}, Hg = () => ({ tr: t4, dispatch: e }) => {
  const { selection: n } = t4, r = n.$anchor.node();
  if (r.content.size > 0)
    return false;
  const i = t4.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const u = i.before(o), l = i.after(o);
        t4.delete(u, l).scrollIntoView();
      }
      return true;
    }
  return false;
};
function Q(t4, e) {
  if (typeof t4 == "string") {
    if (!e.nodes[t4])
      throw Error(`There is no node type named '${t4}'. Maybe you forgot to add the extension?`);
    return e.nodes[t4];
  }
  return t4;
}
var Ug = (t4) => ({ tr: e, state: n, dispatch: r }) => {
  const i = Q(t4, n.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const l = o.before(s), a = o.after(s);
        e.delete(l, a).scrollIntoView();
      }
      return true;
    }
  return false;
}, Wg = (t4) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: i } = t4;
  return n && e.delete(r, i), true;
}, Kg = () => ({ state: t4, dispatch: e }) => ku(t4, e), Jg = () => ({ commands: t4 }) => t4.keyboardShortcut("Enter"), Gg = () => ({ state: t4, dispatch: e }) => I1(t4, e);
function Fu(t4) {
  return Object.prototype.toString.call(t4) === "[object RegExp]";
}
function Ar(t4, e, n = { strict: true }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => n.strict ? e[i] === t4[i] : Fu(e[i]) ? e[i].test(t4[i]) : e[i] === t4[i]) : true;
}
function Ah(t4, e, n = {}) {
  return t4.find((r) => r.type === e && Ar(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((i) => [i, r.attrs[i]])),
    n
  ));
}
function zc(t4, e, n = {}) {
  return !!Ah(t4, e, n);
}
function bi(t4, e, n) {
  var r;
  if (!t4 || !e)
    return;
  let i = t4.parent.childAfter(t4.parentOffset);
  if ((!i.node || !i.node.marks.some((c) => c.type === e)) && (i = t4.parent.childBefore(t4.parentOffset)), !i.node || !i.node.marks.some((c) => c.type === e) || (n = n || ((r = i.node.marks[0]) == null ? void 0 : r.attrs), !Ah([...i.node.marks], e, n)))
    return;
  let s = i.index, u = t4.start() + i.offset, l = s + 1, a = u + i.node.nodeSize;
  for (; s > 0 && zc([...t4.parent.child(s - 1).marks], e, n); )
    s -= 1, u -= t4.parent.child(s).nodeSize;
  for (; l < t4.parent.childCount && zc([...t4.parent.child(l).marks], e, n); )
    a += t4.parent.child(l).nodeSize, l += 1;
  return {
    from: u,
    to: a
  };
}
function Ze(t4, e) {
  if (typeof t4 == "string") {
    if (!e.marks[t4])
      throw Error(`There is no mark type named '${t4}'. Maybe you forgot to add the extension?`);
    return e.marks[t4];
  }
  return t4;
}
var Zg = (t4, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const o = Ze(t4, r.schema), { doc: s, selection: u } = n, { $from: l, from: a, to: c } = u;
  if (i) {
    const f = bi(l, o, e);
    if (f && f.from <= a && f.to >= c) {
      const d = O.create(s, f.from, f.to);
      n.setSelection(d);
    }
  }
  return true;
}, Yg = (t4) => (e) => {
  const n = typeof t4 == "function" ? t4(e) : t4;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return true;
  return false;
};
function Dh(t4) {
  return t4 instanceof O;
}
function wt(t4 = 0, e = 0, n = 0) {
  return Math.min(Math.max(t4, e), n);
}
function Th(t4, e = null) {
  if (!e)
    return null;
  const n = R.atStart(t4), r = R.atEnd(t4);
  if (e === "start" || e === true)
    return n;
  if (e === "end")
    return r;
  const i = n.from, o = r.to;
  return e === "all" ? O.create(t4, wt(0, i, o), wt(t4.content.size, i, o)) : O.create(t4, wt(e, i, o), wt(e, i, o));
}
function Qg() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Pu() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var Xg = (t4 = null, e = {}) => ({ editor: n, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: true,
    ...e
  };
  const s = () => {
    (Pu() || Qg()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e?.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t4 === null || t4 === false)
    return true;
  if (o && t4 === null && !Dh(n.state.selection))
    return s(), true;
  const u = Th(i.doc, t4) || n.state.selection, l = n.state.selection.eq(u);
  return o && (l || i.setSelection(u), l && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), true;
}, eb = (t4, e) => (n) => t4.every((r, i) => e(r, { ...n, index: i })), tb = (t4, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t4, e), Mh = (t4) => {
  const e = t4.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t4.removeChild(r) : r.nodeType === 1 && Mh(r);
  }
  return t4;
};
function er(t4) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t4}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Mh(n);
}
function Nn(t4, e, n) {
  if (t4 instanceof Ke || t4 instanceof v)
    return t4;
  n = {
    slice: true,
    parseOptions: {},
    ...n
  };
  const r = typeof t4 == "object" && t4 !== null, i = typeof t4 == "string";
  if (r)
    try {
      if (Array.isArray(t4) && t4.length > 0)
        return v.fromArray(t4.map((u) => e.nodeFromJSON(u)));
      const s = e.nodeFromJSON(t4);
      return n.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t4, "Error:", o), Nn("", e, n);
    }
  if (i) {
    if (n.errorOnInvalidContent) {
      let s = false, u = "";
      const l = new dd({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (a) => (s = true, u = typeof a == "string" ? a : a.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? dt.fromSchema(l).parseSlice(er(t4), n.parseOptions) : dt.fromSchema(l).parse(er(t4), n.parseOptions), n.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${u}`)
        });
    }
    const o = dt.fromSchema(e);
    return n.slice ? o.parseSlice(er(t4), n.parseOptions).content : o.parse(er(t4), n.parseOptions);
  }
  return Nn("", e, n);
}
function nb(t4, e, n) {
  const r = t4.steps.length - 1;
  if (r < e)
    return;
  const i = t4.steps[r];
  if (!(i instanceof J || i instanceof Z))
    return;
  const o = t4.mapping.maps[r];
  let s = 0;
  o.forEach((u, l, a, c) => {
    s === 0 && (s = c);
  }), t4.setSelection(R.near(t4.doc.resolve(s), n));
}
var rb = (t4) => !("type" in t4), ib = (t4, e, n) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: true,
      applyInputRules: false,
      applyPasteRules: false,
      ...n
    };
    let u;
    const l = (g) => {
      o.emit("contentError", {
        editor: o,
        error: g,
        disableCollaboration: () => {
          "collaboration" in o.storage && typeof o.storage.collaboration == "object" && o.storage.collaboration && (o.storage.collaboration.isDisabled = true);
        }
      });
    }, a = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        Nn(e, o.schema, {
          parseOptions: a,
          errorOnInvalidContent: true
        });
      } catch (g) {
        l(g);
      }
    try {
      u = Nn(e, o.schema, {
        parseOptions: a,
        errorOnInvalidContent: (s = n.errorOnInvalidContent) != null ? s : o.options.enableContentCheck
      });
    } catch (g) {
      return l(g), false;
    }
    let { from: c, to: f } = typeof t4 == "number" ? { from: t4, to: t4 } : { from: t4.from, to: t4.to }, d = true, h = true;
    if ((rb(u) ? u : [u]).forEach((g) => {
      g.check(), d = d ? g.isText && g.marks.length === 0 : false, h = h ? g.isBlock : false;
    }), c === f && h) {
      const { parent: g } = r.doc.resolve(c);
      g.isTextblock && !g.type.spec.code && !g.childCount && (c -= 1, f += 1);
    }
    let m;
    if (d) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof v) {
        let g = "";
        e.forEach((b) => {
          b.text && (g += b.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, c, f);
    } else {
      m = u;
      const g = r.doc.resolve(c), b = g.node(), y = g.parentOffset === 0, x = b.isText || b.isTextblock, k = b.content.size > 0;
      y && x && k && (c = Math.max(0, c - 1)), r.replaceWith(c, f, m);
    }
    n.updateSelection && nb(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: c, text: m }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: c, text: m });
  }
  return true;
}, ob = () => ({ state: t4, dispatch: e }) => O1(t4, e), sb = () => ({ state: t4, dispatch: e }) => N1(t4, e), ub = () => ({ state: t4, dispatch: e }) => Rd(t4, e), lb = () => ({ state: t4, dispatch: e }) => Bd(t4, e), ab = () => ({ state: t4, dispatch: e, tr: n }) => {
  try {
    const r = ai(t4.doc, t4.selection.$from.pos, -1);
    return r == null ? false : (n.join(r, 2), e && e(n), true);
  } catch {
    return false;
  }
}, cb = () => ({ state: t4, dispatch: e, tr: n }) => {
  try {
    const r = ai(t4.doc, t4.selection.$from.pos, 1);
    return r == null ? false : (n.join(r, 2), e && e(n), true);
  } catch {
    return false;
  }
}, fb = () => ({ state: t4, dispatch: e }) => M1(t4, e), db = () => ({ state: t4, dispatch: e }) => _1(t4, e);
function _h() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : false;
}
function hb(t4) {
  const e = t4.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, i, o, s;
  for (let u = 0; u < e.length - 1; u += 1) {
    const l = e[u];
    if (/^(cmd|meta|m)$/i.test(l))
      s = true;
    else if (/^a(lt)?$/i.test(l))
      r = true;
    else if (/^(c|ctrl|control)$/i.test(l))
      i = true;
    else if (/^s(hift)?$/i.test(l))
      o = true;
    else if (/^mod$/i.test(l))
      Pu() || _h() ? s = true : i = true;
    else
      throw new Error(`Unrecognized modifier name: ${l}`);
  }
  return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
var pb = (t4) => ({ editor: e, view: n, tr: r, dispatch: i }) => {
  const o = hb(t4).split(/-(?!$)/), s = o.find((a) => !["Alt", "Ctrl", "Meta", "Shift"].includes(a)), u = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: true,
    cancelable: true
  }), l = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (a) => a(n, u));
  });
  return l?.steps.forEach((a) => {
    const c = a.map(r.mapping);
    c && i && r.maybeStep(c);
  }), true;
};
function Rn(t4, e, n = {}) {
  const { from: r, to: i, empty: o } = t4.selection, s = e ? Q(e, t4.schema) : null, u = [];
  t4.doc.nodesBetween(r, i, (f, d) => {
    if (f.isText)
      return;
    const h = Math.max(r, d), p = Math.min(i, d + f.nodeSize);
    u.push({
      node: f,
      from: h,
      to: p
    });
  });
  const l = i - r, a = u.filter((f) => s ? s.name === f.node.type.name : true).filter((f) => Ar(f.node.attrs, n, { strict: false }));
  return o ? !!a.length : a.reduce((f, d) => f + d.to - d.from, 0) >= l;
}
var mb = (t4, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Q(t4, n.schema);
  return Rn(n, i, e) ? R1(n, r) : false;
}, gb = () => ({ state: t4, dispatch: e }) => $d(t4, e), bb = (t4) => ({ state: e, dispatch: n }) => {
  const r = Q(t4, e.schema);
  return U1(r)(e, n);
}, yb = () => ({ state: t4, dispatch: e }) => zd(t4, e);
function yi(t4, e) {
  return e.nodes[t4] ? "node" : e.marks[t4] ? "mark" : null;
}
function qc(t4, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t4).reduce((r, i) => (n.includes(i) || (r[i] = t4[i]), r), {});
}
var xb = (t4, e) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const u = yi(
    typeof t4 == "string" ? t4 : t4.name,
    r.schema
  );
  return u ? (u === "node" && (o = Q(t4, r.schema)), u === "mark" && (s = Ze(t4, r.schema)), i && n.selection.ranges.forEach((l) => {
    r.doc.nodesBetween(l.$from.pos, l.$to.pos, (a, c) => {
      o && o === a.type && n.setNodeMarkup(c, void 0, qc(a.attrs, e)), s && a.marks.length && a.marks.forEach((f) => {
        s === f.type && n.addMark(c, c + a.nodeSize, s.create(qc(f.attrs, e)));
      });
    });
  }), true) : false;
}, kb = () => ({ tr: t4, dispatch: e }) => (e && t4.scrollIntoView(), true), Cb = () => ({ tr: t4, dispatch: e }) => {
  if (e) {
    const n = new me(t4.doc);
    t4.setSelection(n);
  }
  return true;
}, vb = () => ({ state: t4, dispatch: e }) => Fd(t4, e), Eb = () => ({ state: t4, dispatch: e }) => Ld(t4, e), Sb = () => ({ state: t4, dispatch: e }) => B1(t4, e), wb = () => ({ state: t4, dispatch: e }) => q1(t4, e), Ab = () => ({ state: t4, dispatch: e }) => z1(t4, e);
function Zs(t4, e, n = {}, r = {}) {
  return Nn(t4, e, {
    slice: false,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
var Db = (t4, { errorOnInvalidContent: e, emitUpdate: n = true, parseOptions: r = {} } = {}) => ({ editor: i, tr: o, dispatch: s, commands: u }) => {
  const { doc: l } = o;
  if (r.preserveWhitespace !== "full") {
    const a = Zs(t4, i.schema, r, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    return s && o.replaceWith(0, l.content.size, a).setMeta("preventUpdate", !n), true;
  }
  return s && o.setMeta("preventUpdate", !n), u.insertContentAt({ from: 0, to: l.content.size }, t4, {
    parseOptions: r,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function Oh(t4, e) {
  const n = Ze(e, t4.schema), { from: r, to: i, empty: o } = t4.selection, s = [];
  o ? (t4.storedMarks && s.push(...t4.storedMarks), s.push(...t4.selection.$head.marks())) : t4.doc.nodesBetween(r, i, (l) => {
    s.push(...l.marks);
  });
  const u = s.find((l) => l.type.name === n.name);
  return u ? { ...u.attrs } : {};
}
function Nh(t4, e) {
  const n = new Md(t4);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      n.step(i);
    });
  }), n;
}
function Tb(t4) {
  for (let e = 0; e < t4.edgeCount; e += 1) {
    const { type: n } = t4.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Mb(t4, e, n) {
  const r = [];
  return t4.nodesBetween(e.from, e.to, (i, o) => {
    n(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function _b(t4, e) {
  for (let n = t4.depth; n > 0; n -= 1) {
    const r = t4.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t4.before(n) : 0,
        start: t4.start(n),
        depth: n,
        node: r
      };
  }
}
function Bu(t4) {
  return (e) => _b(e.$from, t4);
}
function D(t4, e, n) {
  return t4.config[e] === void 0 && t4.parent ? D(t4.parent, e, n) : typeof t4.config[e] == "function" ? t4.config[e].bind({
    ...n,
    parent: t4.parent ? D(t4.parent, e, n) : null
  }) : t4.config[e];
}
function Lu(t4) {
  return t4.map((e) => {
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    }, r = D(e, "addExtensions", n);
    return r ? [e, ...Lu(r())] : e;
  }).flat(10);
}
function xi(t4, e) {
  const n = Bt.fromSchema(e).serializeFragment(t4), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(n), i.innerHTML;
}
function Rh(t4) {
  return typeof t4 == "function";
}
function L(t4, e = void 0, ...n) {
  return Rh(t4) ? e ? t4.bind(e)(...n) : t4(...n) : t4;
}
function Ob(t4 = {}) {
  return Object.keys(t4).length === 0 && t4.constructor === Object;
}
function In(t4) {
  const e = t4.filter((i) => i.type === "extension"), n = t4.filter((i) => i.type === "node"), r = t4.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function Ih(t4) {
  const e = [], { nodeExtensions: n, markExtensions: r } = In(t4), i = [...n, ...r], o = {
    default: null,
    validate: void 0,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true,
    isRequired: false
  };
  return t4.forEach((s) => {
    const u = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, l = D(
      s,
      "addGlobalAttributes",
      u
    );
    if (!l)
      return;
    l().forEach((c) => {
      c.types.forEach((f) => {
        Object.entries(c.attributes).forEach(([d, h]) => {
          e.push({
            type: f,
            name: d,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const u = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, l = D(
      s,
      "addAttributes",
      u
    );
    if (!l)
      return;
    const a = l();
    Object.entries(a).forEach(([c, f]) => {
      const d = {
        ...o,
        ...f
      };
      typeof d?.default == "function" && (d.default = d.default()), d?.isRequired && d?.default === void 0 && delete d.default, e.push({
        type: s.name,
        name: c,
        attribute: d
      });
    });
  }), e;
}
function Fn(...t4) {
  return t4.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const u = o ? String(o).split(" ") : [], l = r[i] ? r[i].split(" ") : [], a = u.filter((c) => !l.includes(c));
        r[i] = [...l, ...a].join(" ");
      } else if (i === "style") {
        const u = o ? o.split(";").map((c) => c.trim()).filter(Boolean) : [], l = r[i] ? r[i].split(";").map((c) => c.trim()).filter(Boolean) : [], a = /* @__PURE__ */ new Map();
        l.forEach((c) => {
          const [f, d] = c.split(":").map((h) => h.trim());
          a.set(f, d);
        }), u.forEach((c) => {
          const [f, d] = c.split(":").map((h) => h.trim());
          a.set(f, d);
        }), r[i] = Array.from(a.entries()).map(([c, f]) => `${c}: ${f}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function Dr(t4, e) {
  return e.filter((n) => n.type === t4.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t4.attrs) || {} : {
    [n.name]: t4.attrs[n.name]
  }).reduce((n, r) => Fn(n, r), {});
}
function Nb(t4) {
  return typeof t4 != "string" ? t4 : t4.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t4) : t4 === "true" ? true : t4 === "false" ? false : t4;
}
function $c(t4, e) {
  return "style" in t4 ? t4 : {
    ...t4,
    getAttrs: (n) => {
      const r = t4.getAttrs ? t4.getAttrs(n) : t4.attrs;
      if (r === false)
        return false;
      const i = e.reduce((o, s) => {
        const u = s.attribute.parseHTML ? s.attribute.parseHTML(n) : Nb(n.getAttribute(s.name));
        return u == null ? o : {
          ...o,
          [s.name]: u
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function jc(t4) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t4).filter(([e, n]) => e === "attrs" && Ob(n) ? false : n != null)
  );
}
function Vc(t4) {
  var e, n, r;
  const i = {};
  return !((e = t4?.attribute) != null && e.isRequired) && ((n = t4?.attribute) == null ? void 0 : n.default) !== void 0 && (i.default = t4.attribute.default), ((r = t4?.attribute) == null ? void 0 : r.validate) !== void 0 && (i.validate = t4.attribute.validate), [t4.name, i];
}
function Fh(t4, e) {
  var n;
  const r = Ih(t4), { nodeExtensions: i, markExtensions: o } = In(t4), s = (n = i.find((a) => D(a, "topNode"))) == null ? void 0 : n.name, u = Object.fromEntries(
    i.map((a) => {
      const c = r.filter((b) => b.type === a.name), f = {
        name: a.name,
        options: a.options,
        storage: a.storage,
        editor: e
      }, d = t4.reduce((b, y) => {
        const x = D(y, "extendNodeSchema", f);
        return {
          ...b,
          ...x ? x(a) : {}
        };
      }, {}), h = jc({
        ...d,
        content: L(D(a, "content", f)),
        marks: L(D(a, "marks", f)),
        group: L(D(a, "group", f)),
        inline: L(D(a, "inline", f)),
        atom: L(D(a, "atom", f)),
        selectable: L(D(a, "selectable", f)),
        draggable: L(D(a, "draggable", f)),
        code: L(D(a, "code", f)),
        whitespace: L(D(a, "whitespace", f)),
        linebreakReplacement: L(
          D(a, "linebreakReplacement", f)
        ),
        defining: L(D(a, "defining", f)),
        isolating: L(D(a, "isolating", f)),
        attrs: Object.fromEntries(c.map(Vc))
      }), p = L(D(a, "parseHTML", f));
      p && (h.parseDOM = p.map(
        (b) => $c(b, c)
      ));
      const m = D(a, "renderHTML", f);
      m && (h.toDOM = (b) => m({
        node: b,
        HTMLAttributes: Dr(b, c)
      }));
      const g = D(a, "renderText", f);
      return g && (h.toText = g), [a.name, h];
    })
  ), l = Object.fromEntries(
    o.map((a) => {
      const c = r.filter((g) => g.type === a.name), f = {
        name: a.name,
        options: a.options,
        storage: a.storage,
        editor: e
      }, d = t4.reduce((g, b) => {
        const y = D(b, "extendMarkSchema", f);
        return {
          ...g,
          ...y ? y(a) : {}
        };
      }, {}), h = jc({
        ...d,
        inclusive: L(D(a, "inclusive", f)),
        excludes: L(D(a, "excludes", f)),
        group: L(D(a, "group", f)),
        spanning: L(D(a, "spanning", f)),
        code: L(D(a, "code", f)),
        attrs: Object.fromEntries(c.map(Vc))
      }), p = L(D(a, "parseHTML", f));
      p && (h.parseDOM = p.map(
        (g) => $c(g, c)
      ));
      const m = D(a, "renderHTML", f);
      return m && (h.toDOM = (g) => m({
        mark: g,
        HTMLAttributes: Dr(g, c)
      })), [a.name, h];
    })
  );
  return new dd({
    topNode: s,
    nodes: u,
    marks: l
  });
}
function Rb(t4) {
  const e = t4.filter((n, r) => t4.indexOf(n) !== r);
  return Array.from(new Set(e));
}
function zu(t4) {
  return t4.sort((n, r) => {
    const i = D(n, "priority") || 100, o = D(r, "priority") || 100;
    return i > o ? -1 : i < o ? 1 : 0;
  });
}
function qu(t4) {
  const e = zu(Lu(t4)), n = Rb(e.map((r) => r.name));
  return n.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${n.map((r) => `'${r}'`).join(", ")}]. This can lead to issues.`
  ), e;
}
function Ib(t4, e) {
  const n = qu(t4);
  return Fh(n, e);
}
function Fb(t4, e) {
  const n = Ib(e), r = Ke.fromJSON(n, t4);
  return xi(r.content, n);
}
function Ph(t4, e, n) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = n || {};
  let u = "";
  return t4.nodesBetween(r, i, (l, a, c, f) => {
    var d;
    l.isBlock && a > r && (u += o);
    const h = s?.[l.type.name];
    if (h)
      return c && (u += h({
        node: l,
        pos: a,
        parent: c,
        index: f,
        range: e
      })), false;
    l.isText && (u += (d = l?.text) == null ? void 0 : d.slice(Math.max(r, a) - a, i - a));
  }), u;
}
function Pb(t4, e) {
  const n = {
    from: 0,
    to: t4.content.size
  };
  return Ph(t4, n, e);
}
function Bh(t4) {
  return Object.fromEntries(
    Object.entries(t4.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function Bb(t4, e) {
  const n = Q(e, t4.schema), { from: r, to: i } = t4.selection, o = [];
  t4.doc.nodesBetween(r, i, (u) => {
    o.push(u);
  });
  const s = o.reverse().find((u) => u.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function Lh(t4, e) {
  const n = yi(
    typeof e == "string" ? e : e.name,
    t4.schema
  );
  return n === "node" ? Bb(t4, e) : n === "mark" ? Oh(t4, e) : {};
}
function Lb(t4, e = JSON.stringify) {
  const n = {};
  return t4.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(n, i) ? false : n[i] = true;
  });
}
function zb(t4) {
  const e = Lb(t4);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((o, s) => s !== r).some((o) => n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function zh(t4) {
  const { mapping: e, steps: n } = t4, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((u, l) => {
        s.push({ from: u, to: l });
      });
    else {
      const { from: u, to: l } = n[o];
      if (u === void 0 || l === void 0)
        return;
      s.push({ from: u, to: l });
    }
    s.forEach(({ from: u, to: l }) => {
      const a = e.slice(o).map(u, -1), c = e.slice(o).map(l), f = e.invert().map(a, -1), d = e.invert().map(c);
      r.push({
        oldRange: {
          from: f,
          to: d
        },
        newRange: {
          from: a,
          to: c
        }
      });
    });
  }), zb(r);
}
function qh(t4, e, n) {
  const r = [];
  return t4 === e ? n.resolve(t4).marks().forEach((i) => {
    const o = n.resolve(t4), s = bi(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : n.nodesBetween(t4, e, (i, o) => {
    !i || i?.nodeSize === void 0 || r.push(
      ...i.marks.map((s) => ({
        from: o,
        to: o + i.nodeSize,
        mark: s
      }))
    );
  }), r;
}
function hs(t4, e) {
  return e.nodes[t4] || e.marks[t4] || null;
}
function dr(t4, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const i = t4.find((o) => o.type === e && o.name === r);
      return i ? i.attribute.keepOnSplit : false;
    })
  );
}
var qb = (t4, e = 500) => {
  let n = "";
  const r = t4.parentOffset;
  return t4.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, u) => {
    var l, a;
    const c = ((a = (l = i.type.spec).toText) == null ? void 0 : a.call(l, {
      node: i,
      pos: o,
      parent: s,
      index: u
    })) || i.textContent || "%leaf%";
    n += i.isAtom && !i.isText ? c : c.slice(0, Math.max(0, r - o));
  }), n;
};
function Ys(t4, e, n = {}) {
  const { empty: r, ranges: i } = t4.selection, o = e ? Ze(e, t4.schema) : null;
  if (r)
    return !!(t4.storedMarks || t4.selection.$from.marks()).filter((f) => o ? o.name === f.type.name : true).find((f) => Ar(f.attrs, n, { strict: false }));
  let s = 0;
  const u = [];
  if (i.forEach(({ $from: f, $to: d }) => {
    const h = f.pos, p = d.pos;
    t4.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const b = Math.max(h, g), y = Math.min(p, g + m.nodeSize), x = y - b;
      s += x, u.push(
        ...m.marks.map((k) => ({
          mark: k,
          from: b,
          to: y
        }))
      );
    });
  }), s === 0)
    return false;
  const l = u.filter((f) => o ? o.name === f.mark.type.name : true).filter((f) => Ar(f.mark.attrs, n, { strict: false })).reduce((f, d) => f + d.to - d.from, 0), a = u.filter((f) => o ? f.mark.type !== o && f.mark.type.excludes(o) : true).reduce((f, d) => f + d.to - d.from, 0);
  return (l > 0 ? l + a : l) >= s;
}
function $b(t4, e, n = {}) {
  if (!e)
    return Rn(t4, null, n) || Ys(t4, null, n);
  const r = yi(e, t4.schema);
  return r === "node" ? Rn(t4, e, n) : r === "mark" ? Ys(t4, e, n) : false;
}
function Hc(t4, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t4.name) : e;
}
function Uc(t4, e) {
  const { nodeExtensions: n } = In(e), r = n.find((s) => s.name === t4);
  if (!r)
    return false;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = L(D(r, "group", i));
  return typeof o != "string" ? false : o.split(" ").includes("list");
}
function ki(t4, {
  checkChildren: e = true,
  ignoreWhitespace: n = false
} = {}) {
  var r;
  if (n) {
    if (t4.type.name === "hardBreak")
      return true;
    if (t4.isText)
      return /^\s*$/m.test((r = t4.text) != null ? r : "");
  }
  if (t4.isText)
    return !t4.text;
  if (t4.isAtom || t4.isLeaf)
    return false;
  if (t4.content.childCount === 0)
    return true;
  if (e) {
    let i = true;
    return t4.content.forEach((o) => {
      i !== false && (ki(o, { ignoreWhitespace: n, checkChildren: e }) || (i = false));
    }), i;
  }
  return false;
}
function jb(t4) {
  return t4 instanceof T;
}
function Vb(t4, e, n) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (Dh(i) && (o = i.$cursor), o) {
    const u = (r = t4.storedMarks) != null ? r : o.marks();
    return o.parent.type.allowsMarkType(n) && (!!n.isInSet(u) || !u.some((a) => a.type.excludes(n)));
  }
  const { ranges: s } = i;
  return s.some(({ $from: u, $to: l }) => {
    let a = u.depth === 0 ? t4.doc.inlineContent && t4.doc.type.allowsMarkType(n) : false;
    return t4.doc.nodesBetween(u.pos, l.pos, (c, f, d) => {
      if (a)
        return false;
      if (c.isInline) {
        const h = !d || d.type.allowsMarkType(n), p = !!n.isInSet(c.marks) || !c.marks.some((m) => m.type.excludes(n));
        a = h && p;
      }
      return !a;
    }), a;
  });
}
var Hb = (t4, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  const { selection: o } = n, { empty: s, ranges: u } = o, l = Ze(t4, r.schema);
  if (i)
    if (s) {
      const a = Oh(r, l);
      n.addStoredMark(
        l.create({
          ...a,
          ...e
        })
      );
    } else
      u.forEach((a) => {
        const c = a.$from.pos, f = a.$to.pos;
        r.doc.nodesBetween(c, f, (d, h) => {
          const p = Math.max(h, c), m = Math.min(h + d.nodeSize, f);
          d.marks.find((b) => b.type === l) ? d.marks.forEach((b) => {
            l === b.type && n.addMark(
              p,
              m,
              l.create({
                ...b.attrs,
                ...e
              })
            );
          }) : n.addMark(p, m, l.create(e));
        });
      });
  return Vb(r, n, l);
}, Ub = (t4, e) => ({ tr: n }) => (n.setMeta(t4, e), true), Wb = (t4, e = {}) => ({ state: n, dispatch: r, chain: i }) => {
  const o = Q(t4, n.schema);
  let s;
  return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: u }) => oc(o, { ...s, ...e })(n) ? true : u.clearNodes()).command(({ state: u }) => oc(o, { ...s, ...e })(u, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), false);
}, Kb = (t4) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, i = wt(t4, 0, r.content.size), o = T.create(r, i);
    e.setSelection(o);
  }
  return true;
}, Jb = (t4) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: i, to: o } = typeof t4 == "number" ? { from: t4, to: t4 } : t4, s = O.atStart(r).from, u = O.atEnd(r).to, l = wt(i, s, u), a = wt(o, s, u), c = O.create(r, l, a);
    e.setSelection(c);
  }
  return true;
}, Gb = (t4) => ({ state: e, dispatch: n }) => {
  const r = Q(t4, e.schema);
  return J1(r)(e, n);
};
function Wc(t4, e) {
  const n = t4.storedMarks || t4.selection.$to.parentOffset && t4.selection.$from.marks();
  if (n) {
    const r = n.filter((i) => e?.includes(i.type.name));
    t4.tr.ensureMarks(r);
  }
}
var Zb = ({ keepMarks: t4 = true } = {}) => ({ tr: e, state: n, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: u, $to: l } = o, a = i.extensionManager.attributes, c = dr(a, u.node().type.name, u.node().attrs);
  if (o instanceof T && o.node.isBlock)
    return !u.parentOffset || !Je(s, u.pos) ? false : (r && (t4 && Wc(n, i.extensionManager.splittableMarks), e.split(u.pos).scrollIntoView()), true);
  if (!u.parent.isBlock)
    return false;
  const f = l.parentOffset === l.parent.content.size, d = u.depth === 0 ? void 0 : Tb(u.node(-1).contentMatchAt(u.indexAfter(-1)));
  let h = f && d ? [
    {
      type: d,
      attrs: c
    }
  ] : void 0, p = Je(e.doc, e.mapping.map(u.pos), 1, h);
  if (!h && !p && Je(e.doc, e.mapping.map(u.pos), 1, d ? [{ type: d }] : void 0) && (p = true, h = d ? [
    {
      type: d,
      attrs: c
    }
  ] : void 0), r) {
    if (p && (o instanceof O && e.deleteSelection(), e.split(e.mapping.map(u.pos), 1, h), d && !f && !u.parentOffset && u.parent.type !== d)) {
      const m = e.mapping.map(u.before()), g = e.doc.resolve(m);
      u.node(-1).canReplaceWith(g.index(), g.index() + 1, d) && e.setNodeMarkup(e.mapping.map(u.before()), d);
    }
    t4 && Wc(n, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Yb = (t4, e = {}) => ({ tr: n, state: r, dispatch: i, editor: o }) => {
  var s;
  const u = Q(t4, r.schema), { $from: l, $to: a } = r.selection, c = r.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return false;
  const f = l.node(-1);
  if (f.type !== u)
    return false;
  const d = o.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== u || l.index(-2) !== l.node(-2).childCount - 1)
      return false;
    if (i) {
      let b = v.empty;
      const y = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let A = l.depth - y; A >= l.depth - 3; A -= 1)
        b = v.from(l.node(A).copy(b));
      const x = (
        // eslint-disable-next-line no-nested-ternary
        l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3
      ), k = {
        ...dr(d, l.node().type.name, l.node().attrs),
        ...e
      }, C = ((s = u.contentMatch.defaultType) == null ? void 0 : s.createAndFill(k)) || void 0;
      b = b.append(v.from(u.createAndFill(null, C) || void 0));
      const S = l.before(l.depth - (y - 1));
      n.replace(S, l.after(-x), new w(b, 4 - y, 0));
      let M = -1;
      n.doc.nodesBetween(S, n.doc.content.size, (A, _) => {
        if (M > -1)
          return false;
        A.isTextblock && A.content.size === 0 && (M = _ + 1);
      }), M > -1 && n.setSelection(O.near(n.doc.resolve(M))), n.scrollIntoView();
    }
    return true;
  }
  const h = a.pos === l.end() ? f.contentMatchAt(0).defaultType : null, p = {
    ...dr(d, f.type.name, f.attrs),
    ...e
  }, m = {
    ...dr(d, l.node().type.name, l.node().attrs),
    ...e
  };
  n.delete(l.pos, a.pos);
  const g = h ? [
    { type: u, attrs: p },
    { type: h, attrs: m }
  ] : [{ type: u, attrs: p }];
  if (!Je(n.doc, l.pos, 2))
    return false;
  if (i) {
    const { selection: b, storedMarks: y } = r, { splittableMarks: x } = o.extensionManager, k = y || b.$to.parentOffset && b.$from.marks();
    if (n.split(l.pos, 2, g).scrollIntoView(), !k || !i)
      return true;
    const C = k.filter((S) => x.includes(S.type.name));
    n.ensureMarks(C);
  }
  return true;
}, ps = (t4, e) => {
  const n = Bu((s) => s.type === e)(t4.selection);
  if (!n)
    return true;
  const r = t4.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return true;
  const i = t4.doc.nodeAt(r);
  return n.node.type === i?.type && Lt(t4.doc, n.pos) && t4.join(n.pos), true;
}, ms = (t4, e) => {
  const n = Bu((s) => s.type === e)(t4.selection);
  if (!n)
    return true;
  const r = t4.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return true;
  const i = t4.doc.nodeAt(r);
  return n.node.type === i?.type && Lt(t4.doc, r) && t4.join(r), true;
}, Qb = (t4, e, n, r = {}) => ({ editor: i, tr: o, state: s, dispatch: u, chain: l, commands: a, can: c }) => {
  const { extensions: f, splittableMarks: d } = i.extensionManager, h = Q(t4, s.schema), p = Q(e, s.schema), { selection: m, storedMarks: g } = s, { $from: b, $to: y } = m, x = b.blockRange(y), k = g || m.$to.parentOffset && m.$from.marks();
  if (!x)
    return false;
  const C = Bu((S) => Uc(S.type.name, f))(m);
  if (x.depth >= 1 && C && x.depth - C.depth <= 1) {
    if (C.node.type === h)
      return a.liftListItem(p);
    if (Uc(C.node.type.name, f) && h.validContent(C.node.content) && u)
      return l().command(() => (o.setNodeMarkup(C.pos, h), true)).command(() => ps(o, h)).command(() => ms(o, h)).run();
  }
  return !n || !k || !u ? l().command(() => c().wrapInList(h, r) ? true : a.clearNodes()).wrapInList(h, r).command(() => ps(o, h)).command(() => ms(o, h)).run() : l().command(() => {
    const S = c().wrapInList(h, r), M = k.filter((A) => d.includes(A.type.name));
    return o.ensureMarks(M), S ? true : a.clearNodes();
  }).wrapInList(h, r).command(() => ps(o, h)).command(() => ms(o, h)).run();
}, Xb = (t4, e = {}, n = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = false } = n, s = Ze(t4, r.schema);
  return Ys(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, e2 = (t4, e, n = {}) => ({ state: r, commands: i }) => {
  const o = Q(t4, r.schema), s = Q(e, r.schema), u = Rn(r, o, n);
  let l;
  return r.selection.$anchor.sameParent(r.selection.$head) && (l = r.selection.$anchor.parent.attrs), u ? i.setNode(s, l) : i.setNode(o, { ...l, ...n });
}, t2 = (t4, e = {}) => ({ state: n, commands: r }) => {
  const i = Q(t4, n.schema);
  return Rn(n, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, n2 = () => ({ state: t4, dispatch: e }) => {
  const n = t4.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(t4))) {
      if (e) {
        const s = t4.tr, u = o.transform;
        for (let l = u.steps.length - 1; l >= 0; l -= 1)
          s.step(u.steps[l].invert(u.docs[l]));
        if (o.text) {
          const l = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, t4.schema.text(o.text, l));
        } else
          s.delete(o.from, o.to);
      }
      return true;
    }
  }
  return false;
}, r2 = () => ({ tr: t4, dispatch: e }) => {
  const { selection: n } = t4, { empty: r, ranges: i } = n;
  return r || e && i.forEach((o) => {
    t4.removeMark(o.$from.pos, o.$to.pos);
  }), true;
}, i2 = (t4, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = false } = e, { selection: u } = n, l = Ze(t4, r.schema), { $from: a, empty: c, ranges: f } = u;
  if (!i)
    return true;
  if (c && s) {
    let { from: d, to: h } = u;
    const p = (o = a.marks().find((g) => g.type === l)) == null ? void 0 : o.attrs, m = bi(a, l, p);
    m && (d = m.from, h = m.to), n.removeMark(d, h, l);
  } else
    f.forEach((d) => {
      n.removeMark(d.$from.pos, d.$to.pos, l);
    });
  return n.removeStoredMark(l), true;
}, o2 = (t4, e = {}) => ({ tr: n, state: r, dispatch: i }) => {
  let o = null, s = null;
  const u = yi(
    typeof t4 == "string" ? t4 : t4.name,
    r.schema
  );
  return u ? (u === "node" && (o = Q(t4, r.schema)), u === "mark" && (s = Ze(t4, r.schema)), i && n.selection.ranges.forEach((l) => {
    const a = l.$from.pos, c = l.$to.pos;
    let f, d, h, p;
    n.selection.empty ? r.doc.nodesBetween(a, c, (m, g) => {
      o && o === m.type && (h = Math.max(g, a), p = Math.min(g + m.nodeSize, c), f = g, d = m);
    }) : r.doc.nodesBetween(a, c, (m, g) => {
      g < a && o && o === m.type && (h = Math.max(g, a), p = Math.min(g + m.nodeSize, c), f = g, d = m), g >= a && g <= c && (o && o === m.type && n.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), s && m.marks.length && m.marks.forEach((b) => {
        if (s === b.type) {
          const y = Math.max(g, a), x = Math.min(g + m.nodeSize, c);
          n.addMark(
            y,
            x,
            s.create({
              ...b.attrs,
              ...e
            })
          );
        }
      }));
    }), d && (f !== void 0 && n.setNodeMarkup(f, void 0, {
      ...d.attrs,
      ...e
    }), s && d.marks.length && d.marks.forEach((m) => {
      s === m.type && n.addMark(
        h,
        p,
        s.create({
          ...m.attrs,
          ...e
        })
      );
    }));
  }), true) : false;
}, s2 = (t4, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Q(t4, n.schema);
  return $1(i, e)(n, r);
}, u2 = (t4, e = {}) => ({ state: n, dispatch: r }) => {
  const i = Q(t4, n.schema);
  return j1(i, e)(n, r);
}, l2 = class {
  constructor() {
    this.callbacks = {};
  }
  on(t4, e) {
    return this.callbacks[t4] || (this.callbacks[t4] = []), this.callbacks[t4].push(e), this;
  }
  emit(t4, ...e) {
    const n = this.callbacks[t4];
    return n && n.forEach((r) => r.apply(this, e)), this;
  }
  off(t4, e) {
    const n = this.callbacks[t4];
    return n && (e ? this.callbacks[t4] = n.filter((r) => r !== e) : delete this.callbacks[t4]), this;
  }
  once(t4, e) {
    const n = (...r) => {
      this.off(t4, n), e.apply(this, r);
    };
    return this.on(t4, n);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}, a2 = (t4, e) => {
  if (Fu(e))
    return e.exec(t4);
  const n = e(t4);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t4, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function tr(t4) {
  var e;
  const { editor: n, from: r, to: i, text: o, rules: s, plugin: u } = t4, { view: l } = n;
  if (l.composing)
    return false;
  const a = l.state.doc.resolve(r);
  if (
    // check for code node
    a.parent.type.spec.code || (e = a.nodeBefore || a.nodeAfter) != null && e.marks.find((d) => d.type.spec.code)
  )
    return false;
  let c = false;
  const f = qb(a) + o;
  return s.forEach((d) => {
    if (c)
      return;
    const h = a2(f, d.find);
    if (!h)
      return;
    const p = l.state.tr, m = mi({
      state: l.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: b, chain: y, can: x } = new gi({
      editor: n,
      state: m
    });
    d.handler({
      state: m,
      range: g,
      match: h,
      commands: b,
      chain: y,
      can: x
    }) === null || !p.steps.length || (d.undoable && p.setMeta(u, {
      transform: p,
      from: r,
      to: i,
      text: o
    }), l.dispatch(p), c = true);
  }), c;
}
function c2(t4) {
  const { editor: e, rules: n } = t4, r = new P({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const u = i.getMeta(r);
        if (u)
          return u;
        const l = i.getMeta("applyInputRules");
        return !!l && setTimeout(() => {
          let { text: c } = l;
          typeof c == "string" ? c = c : c = xi(v.from(c), s.schema);
          const { from: f } = l, d = f + c.length;
          tr({
            editor: e,
            from: f,
            to: d,
            text: c,
            rules: n,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, u) {
        return tr({
          editor: e,
          from: o,
          to: s,
          text: u,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && tr({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), false)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return false;
        const { $cursor: s } = i.state.selection;
        return s ? tr({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : false;
      }
    },
    // @ts-ignore
    isInputRules: true
  });
  return r;
}
function f2(t4) {
  return Object.prototype.toString.call(t4).slice(8, -1);
}
function nr(t4) {
  return f2(t4) !== "Object" ? false : t4.constructor === Object && Object.getPrototypeOf(t4) === Object.prototype;
}
function $h(t4, e) {
  const n = { ...t4 };
  return nr(t4) && nr(e) && Object.keys(e).forEach((r) => {
    nr(e[r]) && nr(t4[r]) ? n[r] = $h(t4[r], e[r]) : n[r] = e[r];
  }), n;
}
var $u = class {
  constructor(t4 = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...t4
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...L(
        D(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...L(
        D(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(t4 = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => $h(this.options, t4)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t4 = {}) {
    const e = new this.constructor({ ...this.config, ...t4 });
    return e.parent = this, this.child = e, e.name = "name" in t4 ? t4.name : e.parent.name, e;
  }
}, rn = class jh extends $u {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new jh(n);
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((a) => a?.type.name === n.name))
        return false;
      const l = s.find((a) => a?.type.name === n.name);
      return l && r.removeStoredMark(l), r.insertText(" ", i.pos), e.view.dispatch(r), true;
    }
    return false;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
function d2(t4) {
  return typeof t4 == "number";
}
var h2 = class {
  constructor(t4) {
    this.find = t4.find, this.handler = t4.handler;
  }
}, p2 = (t4, e, n) => {
  if (Fu(e))
    return [...t4.matchAll(e)];
  const r = e(t4, n);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = t4, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function m2(t4) {
  const { editor: e, state: n, from: r, to: i, rule: o, pasteEvent: s, dropEvent: u } = t4, { commands: l, chain: a, can: c } = new gi({
    editor: e,
    state: n
  }), f = [];
  return n.doc.nodesBetween(r, i, (h, p) => {
    var m, g, b, y, x;
    if ((g = (m = h.type) == null ? void 0 : m.spec) != null && g.code || !(h.isText || h.isTextblock || h.isInline))
      return;
    const k = (x = (y = (b = h.content) == null ? void 0 : b.size) != null ? y : h.nodeSize) != null ? x : 0, C = Math.max(r, p), S = Math.min(i, p + k);
    if (C >= S)
      return;
    const M = h.isText ? h.text || "" : h.textBetween(C - p, S - p, void 0, "\uFFFC");
    p2(M, o.find, s).forEach((_) => {
      if (_.index === void 0)
        return;
      const I = C + _.index + 1, be = I + _[0].length, _e = {
        from: n.tr.mapping.map(I),
        to: n.tr.mapping.map(be)
      }, Ye = o.handler({
        state: n,
        range: _e,
        match: _,
        commands: l,
        chain: a,
        can: c,
        pasteEvent: s,
        dropEvent: u
      });
      f.push(Ye);
    });
  }), f.every((h) => h !== null);
}
var rr = null, g2 = (t4) => {
  var e;
  const n = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = n.clipboardData) == null || e.setData("text/html", t4), n;
};
function b2(t4) {
  const { editor: e, rules: n } = t4;
  let r = null, i = false, o = false, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, u;
  try {
    u = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    u = null;
  }
  const l = ({
    state: c,
    from: f,
    to: d,
    rule: h,
    pasteEvt: p
  }) => {
    const m = c.tr, g = mi({
      state: c,
      transaction: m
    });
    if (!(!m2({
      editor: e,
      state: g,
      from: Math.max(f - 1, 0),
      to: d.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: u
    }) || !m.steps.length)) {
      try {
        u = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        u = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return n.map((c) => new P({
    // we register a global drag handler to track the current drag source element
    view(f) {
      const d = (p) => {
        var m;
        r = (m = f.dom.parentElement) != null && m.contains(p.target) ? f.dom.parentElement : null, r && (rr = e);
      }, h = () => {
        rr && (rr = null);
      };
      return window.addEventListener("dragstart", d), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", d), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (f, d) => {
          if (o = r === f.dom.parentElement, u = d, !o) {
            const h = rr;
            h?.isEditable && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return false;
        },
        paste: (f, d) => {
          var h;
          const p = (h = d.clipboardData) == null ? void 0 : h.getData("text/html");
          return s = d, i = !!p?.includes("data-pm-slice"), false;
        }
      }
    },
    appendTransaction: (f, d, h) => {
      const p = f[0], m = p.getMeta("uiEvent") === "paste" && !i, g = p.getMeta("uiEvent") === "drop" && !o, b = p.getMeta("applyPasteRules"), y = !!b;
      if (!m && !g && !y)
        return;
      if (y) {
        let { text: C } = b;
        typeof C == "string" ? C = C : C = xi(v.from(C), h.schema);
        const { from: S } = b, M = S + C.length, A = g2(C);
        return l({
          rule: c,
          state: h,
          from: S,
          to: { b: M },
          pasteEvt: A
        });
      }
      const x = d.doc.content.findDiffStart(h.doc.content), k = d.doc.content.findDiffEnd(h.doc.content);
      if (!(!d2(x) || !k || x === k.b))
        return l({
          rule: c,
          state: h,
          from: x,
          to: k,
          pasteEvt: s
        });
    }
  }));
}
var Ci = class {
  constructor(t4, e) {
    this.splittableMarks = [], this.editor = e, this.baseExtensions = t4, this.extensions = qu(t4), this.schema = Fh(this.extensions, e), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((t4, e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: hs(e.name, this.schema)
      }, r = D(e, "addCommands", n);
      return r ? {
        ...t4,
        ...r()
      } : t4;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: t4 } = this;
    return zu([...this.extensions].reverse()).flatMap((r) => {
      const i = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor: t4,
        type: hs(r.name, this.schema)
      }, o = [], s = D(
        r,
        "addKeyboardShortcuts",
        i
      );
      let u = {};
      if (r.type === "mark" && D(r, "exitable", i) && (u.ArrowRight = () => rn.handleExit({ editor: t4, mark: r })), s) {
        const d = Object.fromEntries(
          Object.entries(s()).map(([h, p]) => [h, () => p({ editor: t4 })])
        );
        u = { ...u, ...d };
      }
      const l = Pg(u);
      o.push(l);
      const a = D(r, "addInputRules", i);
      if (Hc(r, t4.options.enableInputRules) && a) {
        const d = a();
        if (d && d.length) {
          const h = c2({
            editor: t4,
            rules: d
          }), p = Array.isArray(h) ? h : [h];
          o.push(...p);
        }
      }
      const c = D(r, "addPasteRules", i);
      if (Hc(r, t4.options.enablePasteRules) && c) {
        const d = c();
        if (d && d.length) {
          const h = b2({ editor: t4, rules: d });
          o.push(...h);
        }
      }
      const f = D(
        r,
        "addProseMirrorPlugins",
        i
      );
      if (f) {
        const d = f();
        o.push(...d);
      }
      return o;
    });
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Ih(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: t4 } = this, { nodeExtensions: e } = In(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!D(n, "addNodeView")).map((n) => {
        const r = this.attributes.filter((l) => l.type === n.name), i = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t4,
          type: Q(n.name, this.schema)
        }, o = D(n, "addNodeView", i);
        if (!o)
          return [];
        const s = o();
        if (!s)
          return [];
        const u = (l, a, c, f, d) => {
          const h = Dr(l, r);
          return s({
            // pass-through
            node: l,
            view: a,
            getPos: c,
            decorations: f,
            innerDecorations: d,
            // tiptap-specific
            editor: t4,
            extension: n,
            HTMLAttributes: h
          });
        };
        return [n.name, u];
      })
    );
  }
  get markViews() {
    const { editor: t4 } = this, { markExtensions: e } = In(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!D(n, "addMarkView")).map((n) => {
        const r = this.attributes.filter((u) => u.type === n.name), i = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t4,
          type: Ze(n.name, this.schema)
        }, o = D(n, "addMarkView", i);
        if (!o)
          return [];
        const s = (u, l, a) => {
          const c = Dr(u, r);
          return o()({
            // pass-through
            mark: u,
            view: l,
            inline: a,
            // tiptap-specific
            editor: t4,
            extension: n,
            HTMLAttributes: c,
            updateAttributes: (f) => {
              O2(u, t4, f);
            }
          });
        };
        return [n.name, s];
      })
    );
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const t4 = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      t4.map((e) => [e.name, e.storage])
    ), t4.forEach((e) => {
      var n;
      const r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: hs(e.name, this.schema)
      };
      e.type === "mark" && ((n = L(D(e, "keepOnSplit", r))) == null || n) && this.splittableMarks.push(e.name);
      const i = D(e, "onBeforeCreate", r), o = D(e, "onCreate", r), s = D(e, "onUpdate", r), u = D(
        e,
        "onSelectionUpdate",
        r
      ), l = D(e, "onTransaction", r), a = D(e, "onFocus", r), c = D(e, "onBlur", r), f = D(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), u && this.editor.on("selectionUpdate", u), l && this.editor.on("transaction", l), a && this.editor.on("focus", a), c && this.editor.on("blur", c), f && this.editor.on("destroy", f);
    });
  }
};
Ci.resolve = qu;
Ci.sort = zu;
Ci.flatten = Lu;
var y2 = {};
Iu(y2, {
  ClipboardTextSerializer: () => Hh,
  Commands: () => Uh,
  Delete: () => Wh,
  Drop: () => Kh,
  Editable: () => Jh,
  FocusEvents: () => Zh,
  Keymap: () => Yh,
  Paste: () => Qh,
  Tabindex: () => Xh,
  focusEventsPluginKey: () => Gh
});
var H = class Vh extends $u {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Vh(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Hh = H.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t4 } = this, { state: e, schema: n } = t4, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((c) => c.$from.pos)), u = Math.max(...o.map((c) => c.$to.pos)), l = Bh(n);
            return Ph(r, { from: s, to: u }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: l
            });
          }
        }
      })
    ];
  }
}), Uh = H.create({
  name: "commands",
  addCommands() {
    return {
      ...wh
    };
  }
}), Wh = H.create({
  name: "delete",
  onUpdate({ transaction: t4, appendedTransactions: e }) {
    var n, r, i;
    const o = () => {
      var s, u, l, a;
      if ((a = (l = (u = (s = this.editor.options.coreExtensionOptions) == null ? void 0 : s.delete) == null ? void 0 : u.filterTransaction) == null ? void 0 : l.call(u, t4)) != null ? a : t4.getMeta("y-sync$"))
        return;
      const c = Nh(t4.before, [t4, ...e]);
      zh(c).forEach((h) => {
        c.mapping.mapResult(h.oldRange.from).deletedAfter && c.mapping.mapResult(h.oldRange.to).deletedBefore && c.before.nodesBetween(h.oldRange.from, h.oldRange.to, (p, m) => {
          const g = m + p.nodeSize - 2, b = h.oldRange.from <= m && g <= h.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: p,
            from: m,
            to: g,
            newFrom: c.mapping.map(m),
            newTo: c.mapping.map(g),
            deletedRange: h.oldRange,
            newRange: h.newRange,
            partial: !b,
            editor: this.editor,
            transaction: t4,
            combinedTransform: c
          });
        });
      });
      const d = c.mapping;
      c.steps.forEach((h, p) => {
        var m, g;
        if (h instanceof De) {
          const b = d.slice(p).map(h.from, -1), y = d.slice(p).map(h.to), x = d.invert().map(b, -1), k = d.invert().map(y), C = (m = c.doc.nodeAt(b - 1)) == null ? void 0 : m.marks.some((M) => M.eq(h.mark)), S = (g = c.doc.nodeAt(y)) == null ? void 0 : g.marks.some((M) => M.eq(h.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: h.mark,
            from: h.from,
            to: h.to,
            deletedRange: {
              from: x,
              to: k
            },
            newRange: {
              from: b,
              to: y
            },
            partial: !!(S || C),
            editor: this.editor,
            transaction: t4,
            combinedTransform: c
          });
        }
      });
    };
    (i = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || i ? setTimeout(o, 0) : o();
  }
}), Kh = H.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("tiptapDrop"),
        props: {
          handleDrop: (t4, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), Jh = H.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Gh = new W("focusEvents"), Zh = H.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t4 } = this;
    return [
      new P({
        key: Gh,
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t4.isFocused = true;
              const r = t4.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", false);
              return e.dispatch(r), false;
            },
            blur: (e, n) => {
              t4.isFocused = false;
              const r = t4.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", false);
              return e.dispatch(r), false;
            }
          }
        }
      })
    ];
  }
}), Yh = H.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t4 = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: u }) => {
        const { selection: l, doc: a } = u, { empty: c, $anchor: f } = l, { pos: d, parent: h } = f, p = f.parent.isTextblock && d > 0 ? u.doc.resolve(d - 1) : f, m = p.parent.type.spec.isolating, g = f.pos - f.parentOffset, b = m && p.parent.childCount === 1 ? g === f.pos : R.atStart(a).from === d;
        return !c || !h.type.isTextblock || h.textContent.length || !b || b && f.parent.type.name === "paragraph" ? false : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t4,
      "Mod-Backspace": t4,
      "Shift-Backspace": t4,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t4,
      "Alt-Backspace": t4,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Pu() || _h() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new P({
        key: new W("clearDocument"),
        appendTransaction: (t4, e, n) => {
          if (t4.some((m) => m.getMeta("composition")))
            return;
          const r = t4.some((m) => m.docChanged) && !e.doc.eq(n.doc), i = t4.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: u } = e.selection, l = R.atStart(e.doc).from, a = R.atEnd(e.doc).to;
          if (o || !(s === l && u === a) || !ki(n.doc))
            return;
          const d = n.tr, h = mi({
            state: n,
            transaction: d
          }), { commands: p } = new gi({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
}), Qh = H.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("tiptapPaste"),
        props: {
          handlePaste: (t4, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
}), Xh = H.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), x2 = class Ht {
  constructor(e, n, r = false, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = n, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let n = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      n = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: n, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(e);
    return new Ht(n, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Ht(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Ht(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((n, r) => {
      const i = n.isBlock && !n.isTextblock, o = n.isAtom && !n.isText, s = this.pos + r + (o ? 0 : 1);
      if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2)
        return;
      const u = this.resolvedPos.doc.resolve(s);
      if (!i && u.depth <= this.depth)
        return;
      const l = new Ht(u, this.editor, i, i ? n : null);
      i && (l.actualDepth = this.depth + 1), e.push(new Ht(u, this.editor, i, i ? n : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, n = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(n).length > 0) {
          const o = i.node.attrs, s = Object.keys(n);
          for (let u = 0; u < s.length; u += 1) {
            const l = s[u];
            if (o[l] !== n[l])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, n = {}) {
    return this.querySelectorAll(e, n, true)[0] || null;
  }
  querySelectorAll(e, n = {}, r = false) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(n);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((l) => n[l] === s.node.attrs[l]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, n, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(n);
  }
}, k2 = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function C2(t4, e, n) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = t4, document.getElementsByTagName("head")[0].appendChild(i), i;
}
var v2 = class extends l2 {
  constructor(t4 = {}) {
    super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = false, this.isInitialized = false, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: true,
      injectNonce: void 0,
      extensions: [],
      autofocus: false,
      editable: true,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: true,
      enablePasteRules: true,
      enableCoreExtensions: true,
      enableContentCheck: false,
      emitContentError: false,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: r }) => {
        throw r;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    }, this.isCapturingTransaction = false, this.capturedTransaction = null, this.setOptions(t4), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: r, slice: i, moved: o }) => this.options.onDrop(r, i, o)), this.on("paste", ({ event: r, slice: i }) => this.options.onPaste(r, i)), this.on("delete", this.options.onDelete);
    const e = this.createDoc(), n = Th(e, this.options.autofocus);
    this.editorState = Wt.create({
      doc: e,
      schema: this.schema,
      selection: n || void 0
    }), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(t4) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(t4), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
      this.isDestroyed || (this.options.autofocus !== false && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = true);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const t4 = this.editorView.dom;
      t4?.editor && delete t4.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = false, this.css && !document.querySelectorAll(`.${this.className}`).length)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (t4) {
        console.warn("Failed to remove CSS element:", t4);
      }
    this.css = null, this.emit("unmount", { editor: this });
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = C2(k2, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(t4 = {}) {
    this.options = {
      ...this.options,
      ...t4
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(t4, e = true) {
    this.setOptions({ editable: t4 }), e && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get view() {
    return this.editorView ? this.editorView : new Proxy(
      {
        state: this.editorState,
        updateState: (t4) => {
          this.editorState = t4;
        },
        dispatch: (t4) => {
          this.dispatchTransaction(t4);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: false,
        dragging: null,
        editable: true,
        isDestroyed: false
      },
      {
        get: (t4, e) => {
          if (this.editorView)
            return this.editorView[e];
          if (e === "state")
            return this.editorState;
          if (e in t4)
            return Reflect.get(t4, e);
          throw new Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${e}']. The editor may not be mounted yet.`
          );
        }
      }
    );
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(t4, e) {
    const n = Rh(e) ? e(t4, [...this.state.plugins]) : [...this.state.plugins, t4], r = this.state.reconfigure({ plugins: n });
    return this.view.updateState(r), r;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(t4) {
    if (this.isDestroyed)
      return;
    const e = this.state.plugins;
    let n = e;
    if ([].concat(t4).forEach((i) => {
      const o = typeof i == "string" ? `${i}$` : i.key;
      n = n.filter((s) => !s.key.startsWith(o));
    }), e.length === n.length)
      return;
    const r = this.state.reconfigure({
      plugins: n
    });
    return this.view.updateState(r), r;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var t4, e;
    const r = [...this.options.enableCoreExtensions ? [
      Jh,
      Hh.configure({
        blockSeparator: (e = (t4 = this.options.coreExtensionOptions) == null ? void 0 : t4.clipboardTextSerializer) == null ? void 0 : e.blockSeparator
      }),
      Uh,
      Zh,
      Yh,
      Xh,
      Kh,
      Qh,
      Wh
    ].filter((i) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[i.name] !== false : true) : [], ...this.options.extensions].filter((i) => ["extension", "node", "mark"].includes(i?.type));
    this.extensionManager = new Ci(r, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new gi({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let t4;
    try {
      t4 = Zs(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (e) {
      if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message))
        throw e;
      this.emit("contentError", {
        editor: this,
        error: e,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = true), this.options.extensions = this.options.extensions.filter((n) => n.name !== "collaboration"), this.createExtensionManager();
        }
      }), t4 = Zs(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: false
      });
    }
    return t4;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(t4) {
    var e;
    this.editorView = new Eh(t4, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) == null ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const n = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(n), this.prependClass(), this.injectCSS();
    const r = this.view.dom;
    r.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
  }
  captureTransaction(t4) {
    this.isCapturingTransaction = true, t4(), this.isCapturingTransaction = false;
    const e = this.capturedTransaction;
    return this.capturedTransaction = null, e;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(t4) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = t4;
        return;
      }
      t4.steps.forEach((a) => {
        var c;
        return (c = this.capturedTransaction) == null ? void 0 : c.step(a);
      });
      return;
    }
    const { state: e, transactions: n } = this.state.applyTransaction(t4), r = !this.state.selection.eq(e.selection), i = n.includes(t4), o = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: t4,
      nextState: e
    }), !i)
      return;
    this.view.updateState(e), this.emit("transaction", {
      editor: this,
      transaction: t4,
      appendedTransactions: n.slice(1)
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: t4
    });
    const s = n.findLast((a) => a.getMeta("focus") || a.getMeta("blur")), u = s?.getMeta("focus"), l = s?.getMeta("blur");
    u && this.emit("focus", {
      editor: this,
      event: u.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: s
    }), l && this.emit("blur", {
      editor: this,
      event: l.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: s
    }), !(t4.getMeta("preventUpdate") || !n.some((a) => a.docChanged) || o.doc.eq(e.doc)) && this.emit("update", {
      editor: this,
      transaction: t4,
      appendedTransactions: n.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(t4) {
    return Lh(this.state, t4);
  }
  isActive(t4, e) {
    const n = typeof t4 == "string" ? t4 : null, r = typeof t4 == "string" ? e : t4;
    return $b(this.state, n, r);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return xi(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(t4) {
    const { blockSeparator: e = `

`, textSerializers: n = {} } = t4 || {};
    return Pb(this.state.doc, {
      blockSeparator: e,
      textSerializers: {
        ...Bh(this.schema),
        ...n
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return ki(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.unmount(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var t4, e;
    return (e = (t4 = this.editorView) == null ? void 0 : t4.isDestroyed) != null ? e : true;
  }
  $node(t4, e) {
    var n;
    return ((n = this.$doc) == null ? void 0 : n.querySelector(t4, e)) || null;
  }
  $nodes(t4, e) {
    var n;
    return ((n = this.$doc) == null ? void 0 : n.querySelectorAll(t4, e)) || null;
  }
  $pos(t4) {
    const e = this.state.doc.resolve(t4);
    return new x2(e, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}, E2 = {};
Iu(E2, {
  createAtomBlockMarkdownSpec: () => S2,
  createBlockMarkdownSpec: () => w2,
  createInlineMarkdownSpec: () => T2,
  parseAttributes: () => ju,
  parseIndentedBlocks: () => M2,
  renderNestedMarkdownContent: () => _2,
  serializeAttributes: () => Vu
});
function ju(t4) {
  if (!t4?.trim())
    return {};
  const e = {}, n = [], r = t4.replace(/["']([^"']*)["']/g, (a) => (n.push(a), `__QUOTED_${n.length - 1}__`)), i = r.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (i) {
    const a = i.map((c) => c.trim().slice(1));
    e.class = a.join(" ");
  }
  const o = r.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  o && (e.id = o[1]);
  const s = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(r.matchAll(s)).forEach(([, a, c]) => {
    var f;
    const d = parseInt(((f = c.match(/__QUOTED_(\d+)__/)) == null ? void 0 : f[1]) || "0", 10), h = n[d];
    h && (e[a] = h.slice(1, -1));
  });
  const l = r.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return l && l.split(/\s+/).filter(Boolean).forEach((c) => {
    c.match(/^[a-zA-Z][\w-]*$/) && (e[c] = true);
  }), e;
}
function Vu(t4) {
  if (!t4 || Object.keys(t4).length === 0)
    return "";
  const e = [];
  return t4.class && String(t4.class).split(/\s+/).filter(Boolean).forEach((r) => e.push(`.${r}`)), t4.id && e.push(`#${t4.id}`), Object.entries(t4).forEach(([n, r]) => {
    n === "class" || n === "id" || (r === true ? e.push(n) : r !== false && r != null && e.push(`${n}="${String(r)}"`));
  }), e.join(" ");
}
function S2(t4) {
  const {
    nodeName: e,
    name: n,
    parseAttributes: r = ju,
    serializeAttributes: i = Vu,
    defaultAttributes: o = {},
    requiredAttributes: s = [],
    allowedAttributes: u
  } = t4, l = n || e, a = (c) => {
    if (!u)
      return c;
    const f = {};
    return u.forEach((d) => {
      d in c && (f[d] = c[d]);
    }), f;
  };
  return {
    parseMarkdown: (c, f) => {
      const d = { ...o, ...c.attributes };
      return f.createNode(e, d, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(c) {
        var f;
        const d = new RegExp(`^:::${l}(?:\\s|$)`, "m"), h = (f = c.match(d)) == null ? void 0 : f.index;
        return h !== void 0 ? h : -1;
      },
      tokenize(c, f, d) {
        const h = new RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), p = c.match(h);
        if (!p)
          return;
        const m = p[1] || "", g = r(m);
        if (!s.find((y) => !(y in g)))
          return {
            type: e,
            raw: p[0],
            attributes: g
          };
      }
    },
    renderMarkdown: (c) => {
      const f = a(c.attrs || {}), d = i(f), h = d ? ` {${d}}` : "";
      return `:::${l}${h} :::`;
    }
  };
}
function w2(t4) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: i = ju,
    serializeAttributes: o = Vu,
    defaultAttributes: s = {},
    content: u = "block",
    allowedAttributes: l
  } = t4, a = n || e, c = (f) => {
    if (!l)
      return f;
    const d = {};
    return l.forEach((h) => {
      h in f && (d[h] = f[h]);
    }), d;
  };
  return {
    parseMarkdown: (f, d) => {
      let h;
      if (r) {
        const m = r(f);
        h = typeof m == "string" ? [{ type: "text", text: m }] : m;
      } else u === "block" ? h = d.parseChildren(f.tokens || []) : h = d.parseInline(f.tokens || []);
      const p = { ...s, ...f.attributes };
      return d.createNode(e, p, h);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(f) {
        var d;
        const h = new RegExp(`^:::${a}`, "m"), p = (d = f.match(h)) == null ? void 0 : d.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(f, d, h) {
        var p;
        const m = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), g = f.match(m);
        if (!g)
          return;
        const [b, y = ""] = g, x = i(y);
        let k = 1;
        const C = b.length;
        let S = "";
        const M = /^:::([\w-]*)(\s.*)?/gm, A = f.slice(C);
        for (M.lastIndex = 0; ; ) {
          const _ = M.exec(A);
          if (_ === null)
            break;
          const I = _.index, be = _[1];
          if (!((p = _[2]) != null && p.endsWith(":::"))) {
            if (be)
              k += 1;
            else if (k -= 1, k === 0) {
              const _e = A.slice(0, I);
              S = _e.trim();
              const Ye = f.slice(0, C + I + _[0].length);
              let ue = [];
              if (S)
                if (u === "block")
                  for (ue = h.blockTokens(_e), ue.forEach((V) => {
                    V.text && (!V.tokens || V.tokens.length === 0) && (V.tokens = h.inlineTokens(V.text));
                  }); ue.length > 0; ) {
                    const V = ue[ue.length - 1];
                    if (V.type === "paragraph" && (!V.text || V.text.trim() === ""))
                      ue.pop();
                    else
                      break;
                  }
                else
                  ue = h.inlineTokens(S);
              return {
                type: e,
                raw: Ye,
                attributes: x,
                content: S,
                tokens: ue
              };
            }
          }
        }
      }
    },
    renderMarkdown: (f, d) => {
      const h = c(f.attrs || {}), p = o(h), m = p ? ` {${p}}` : "", g = d.renderChildren(f.content || [], `

`);
      return `:::${a}${m}

${g}

:::`;
    }
  };
}
function A2(t4) {
  if (!t4.trim())
    return {};
  const e = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let r = n.exec(t4);
  for (; r !== null; ) {
    const [, i, o, s] = r;
    e[i] = o || s, r = n.exec(t4);
  }
  return e;
}
function D2(t4) {
  return Object.entries(t4).filter(([, e]) => e != null).map(([e, n]) => `${e}="${n}"`).join(" ");
}
function T2(t4) {
  const {
    nodeName: e,
    name: n,
    getContent: r,
    parseAttributes: i = A2,
    serializeAttributes: o = D2,
    defaultAttributes: s = {},
    selfClosing: u = false,
    allowedAttributes: l
  } = t4, a = n || e, c = (d) => {
    if (!l)
      return d;
    const h = {};
    return l.forEach((p) => {
      p in d && (h[p] = d[p]);
    }), h;
  }, f = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (d, h) => {
      const p = { ...s, ...d.attributes };
      if (u)
        return h.createNode(e, p);
      const m = r ? r(d) : d.content || "";
      return m ? h.createNode(e, p, [h.createTextNode(m)]) : h.createNode(e, p, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(d) {
        const h = u ? new RegExp(`\\[${f}\\s*[^\\]]*\\]`) : new RegExp(`\\[${f}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${f}\\]`), p = d.match(h), m = p?.index;
        return m !== void 0 ? m : -1;
      },
      tokenize(d, h, p) {
        const m = u ? new RegExp(`^\\[${f}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${f}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${f}\\]`), g = d.match(m);
        if (!g)
          return;
        let b = "", y = "";
        if (u) {
          const [, k] = g;
          y = k;
        } else {
          const [, k, C] = g;
          y = k, b = C || "";
        }
        const x = i(y.trim());
        return {
          type: e,
          raw: g[0],
          content: b.trim(),
          attributes: x
        };
      }
    },
    renderMarkdown: (d) => {
      let h = "";
      r ? h = r(d) : d.content && d.content.length > 0 && (h = d.content.filter((b) => b.type === "text").map((b) => b.text).join(""));
      const p = c(d.attrs || {}), m = o(p), g = m ? ` ${m}` : "";
      return u ? `[${a}${g}]` : `[${a}${g}]${h}[/${a}]`;
    }
  };
}
function M2(t4, e, n) {
  var r, i, o, s;
  const u = t4.split(`
`), l = [];
  let a = "", c = 0;
  const f = e.baseIndentSize || 2;
  for (; c < u.length; ) {
    const d = u[c], h = d.match(e.itemPattern);
    if (!h) {
      if (l.length > 0)
        break;
      if (d.trim() === "") {
        c += 1;
        continue;
      } else
        return;
    }
    const p = e.extractItemData(h), { indentLevel: m, mainContent: g } = p;
    a = `${a}${d}
`;
    const b = [g];
    for (c += 1; c < u.length; ) {
      const C = u[c];
      if (C.trim() === "") {
        const M = u.slice(c + 1).findIndex((I) => I.trim() !== "");
        if (M === -1)
          break;
        if ((((i = (r = u[c + 1 + M].match(/^(\s*)/)) == null ? void 0 : r[1]) == null ? void 0 : i.length) || 0) > m) {
          b.push(C), a = `${a}${C}
`, c += 1;
          continue;
        } else
          break;
      }
      if ((((s = (o = C.match(/^(\s*)/)) == null ? void 0 : o[1]) == null ? void 0 : s.length) || 0) > m)
        b.push(C), a = `${a}${C}
`, c += 1;
      else
        break;
    }
    let y;
    const x = b.slice(1);
    if (x.length > 0) {
      const C = x.map((S) => S.slice(m + f)).join(`
`);
      C.trim() && (e.customNestedParser ? y = e.customNestedParser(C) : y = n.blockTokens(C));
    }
    const k = e.createToken(p, y);
    l.push(k);
  }
  if (l.length !== 0)
    return {
      items: l,
      raw: a.trim()
    };
}
function _2(t4, e, n, r) {
  if (!t4 || !Array.isArray(t4.content))
    return "";
  const i = typeof n == "function" ? n(r) : n, [o, ...s] = t4.content, u = e.renderChildren([o]), l = [`${i}${u}`];
  return s && s.length > 0 && s.forEach((a) => {
    const c = e.renderChildren([a]);
    if (c) {
      const f = c.split(`
`).map((d) => d ? e.indent(d) : "").join(`
`);
      l.push(f);
    }
  }), l.join(`
`);
}
function O2(t4, e, n = {}) {
  const { state: r } = e, { doc: i, tr: o } = r, s = t4;
  i.descendants((u, l) => {
    const a = o.mapping.map(l), c = o.mapping.map(l) + u.nodeSize;
    let f = null;
    if (u.marks.forEach((h) => {
      if (h !== s)
        return false;
      f = h;
    }), !f)
      return;
    let d = false;
    if (Object.keys(n).forEach((h) => {
      n[h] !== f.attrs[h] && (d = true);
    }), d) {
      const h = t4.type.create({
        ...t4.attrs,
        ...n
      });
      o.removeMark(a, c, t4.type), o.addMark(a, c, h);
    }
  }), o.docChanged && e.view.dispatch(o);
}
var vi = class e0 extends $u {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new e0(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
function N2(t4) {
  return new h2({
    find: t4.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: i }) => {
      const o = L(t4.getAttributes, void 0, r, i);
      if (o === false || o === null)
        return null;
      const { tr: s } = e, u = r[r.length - 1], l = r[0];
      let a = n.to;
      if (u) {
        const c = l.search(/\S/), f = n.from + l.indexOf(u), d = f + u.length;
        if (qh(n.from, n.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === t4.type && g !== p.mark.type)).filter((p) => p.to > f).length)
          return null;
        d < n.to && s.delete(d, n.to), f > n.from && s.delete(n.from + c, f), a = n.from + c + u.length, s.addMark(n.from + c, a, t4.type.create(o || {})), s.removeStoredMark(t4.type);
      }
    }
  });
}
var R2 = vi.create({
  name: "doc",
  topNode: true,
  content: "block+"
}), I2 = R2;
const F2 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xF6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", P2 = "\u03B5\u03BB1\u03C52\u0431\u04331\u0435\u043B3\u0434\u0435\u0442\u04384\u0435\u044E2\u043A\u0430\u0442\u043E\u043B\u0438\u043A6\u043E\u043C3\u043C\u043A\u04342\u043E\u043D1\u0441\u043A\u0432\u04306\u043E\u043D\u043B\u0430\u0439\u043D5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043A\u04403\u049B\u0430\u04373\u0570\u0561\u05753\u05D9\u05E9\u05E8\u05D0\u05DC5\u05E7\u05D5\u05DD3\u0627\u0628\u0648\u0638\u0628\u064A5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062F\u06464\u0628\u062D\u0631\u064A\u06465\u062C\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062F\u064A\u06296\u0639\u0644\u064A\u0627\u06465\u0645\u063A\u0631\u06285\u0645\u0627\u0631\u0627\u062A5\u06CC\u0631\u0627\u06465\u0628\u0627\u0631\u062A2\u0632\u0627\u06314\u064A\u062A\u06433\u06BE\u0627\u0631\u062A5\u062A\u0648\u0646\u06334\u0633\u0648\u062F\u0627\u06463\u0631\u064A\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064A\u06466\u0642\u0637\u06313\u0643\u0627\u062B\u0648\u0644\u064A\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064A\u0633\u064A\u06275\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067E\u0627\u06A9\u0633\u062A\u0627\u06467\u0680\u0627\u0631\u062A4\u0915\u0949\u092E3\u0928\u0947\u091F3\u092D\u093E\u0930\u09240\u092E\u094D3\u094B\u09245\u0938\u0902\u0917\u0920\u09285\u09AC\u09BE\u0982\u09B2\u09BE5\u09AD\u09BE\u09B0\u09A42\u09F0\u09A44\u0A2D\u0A3E\u0A30\u0A244\u0AAD\u0ABE\u0AB0\u0AA44\u0B2D\u0B3E\u0B30\u0B244\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE6\u0BB2\u0B99\u0BCD\u0B95\u0BC86\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD11\u0C2D\u0C3E\u0C30\u0C24\u0C4D5\u0CAD\u0CBE\u0CB0\u0CA44\u0D2D\u0D3E\u0D30\u0D24\u0D025\u0DBD\u0D82\u0D9A\u0DCF4\u0E04\u0E2D\u0E213\u0E44\u0E17\u0E223\u0EA5\u0EB2\u0EA73\u10D2\u10D42\u307F\u3093\u306A3\u30A2\u30DE\u30BE\u30F34\u30AF\u30E9\u30A6\u30C94\u30B0\u30FC\u30B0\u30EB4\u30B3\u30E02\u30B9\u30C8\u30A23\u30BB\u30FC\u30EB3\u30D5\u30A1\u30C3\u30B7\u30E7\u30F36\u30DD\u30A4\u30F3\u30C84\u4E16\u754C2\u4E2D\u4FE11\u56FD1\u570B1\u6587\u7F513\u4E9A\u9A6C\u900A3\u4F01\u4E1A2\u4F5B\u5C712\u4FE1\u606F2\u5065\u5EB72\u516B\u53662\u516C\u53F81\u76CA2\u53F0\u6E7E1\u70632\u5546\u57CE1\u5E971\u68072\u5609\u91CC0\u5927\u9152\u5E975\u5728\u7EBF2\u5927\u62FF2\u5929\u4E3B\u65593\u5A31\u4E502\u5BB6\u96FB2\u5E7F\u4E1C2\u5FAE\u535A2\u6148\u55842\u6211\u7231\u4F603\u624B\u673A2\u62DB\u80582\u653F\u52A11\u5E9C2\u65B0\u52A0\u57612\u95FB2\u65F6\u5C1A2\u66F8\u7C4D2\u673A\u67842\u6DE1\u9A6C\u95213\u6E38\u620F2\u6FB3\u95802\u70B9\u770B2\u79FB\u52A82\u7EC4\u7EC7\u673A\u67844\u7F51\u57401\u5E971\u7AD91\u7EDC2\u8054\u901A2\u8C37\u6B4C2\u8D2D\u72692\u901A\u8CA92\u96C6\u56E22\u96FB\u8A0A\u76C8\u79D14\u98DE\u5229\u6D663\u98DF\u54C12\u9910\u53852\u9999\u683C\u91CC\u62C93\u6E2F2\uB2F7\uB1371\uCEF42\uC0BC\uC1312\uD55C\uAD6D2", Qs = "numeric", Xs = "ascii", eu = "alpha", xn = "asciinumeric", pn = "alphanumeric", tu = "domain", t0 = "emoji", B2 = "scheme", L2 = "slashscheme", gs = "whitespace";
function z2(t4, e) {
  return t4 in e || (e[t4] = []), e[t4];
}
function At(t4, e, n) {
  e[Qs] && (e[xn] = true, e[pn] = true), e[Xs] && (e[xn] = true, e[eu] = true), e[xn] && (e[pn] = true), e[eu] && (e[pn] = true), e[pn] && (e[tu] = true), e[t0] && (e[tu] = true);
  for (const r in e) {
    const i = z2(r, n);
    i.indexOf(t4) < 0 && i.push(t4);
  }
}
function q2(t4, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t4) >= 0 && (n[r] = true);
  return n;
}
function fe(t4 = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t4;
}
fe.groups = {};
fe.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t4) {
    const e = this, n = e.j[t4];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(t4))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t4, e = false) {
    return e ? t4 in this.j : !!this.go(t4);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t4, e, n, r) {
    for (let i = 0; i < t4.length; i++)
      this.tt(t4[i], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t4, e, n, r) {
    r = r || fe.groups;
    let i;
    return e && e.j ? i = e : (i = new fe(e), n && r && At(e, n, r)), this.jr.push([t4, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t4, e, n, r) {
    let i = this;
    const o = t4.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(t4[s]);
    return i.tt(t4[o - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t4, e, n, r) {
    r = r || fe.groups;
    const i = this;
    if (e && e.j)
      return i.j[t4] = e, e;
    const o = e;
    let s, u = i.go(t4);
    if (u ? (s = new fe(), Object.assign(s.j, u.j), s.jr.push.apply(s.jr, u.jr), s.jd = u.jd, s.t = u.t) : s = new fe(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(q2(s.t, r), n);
          At(o, l, r);
        } else n && At(o, n, r);
      s.t = o;
    }
    return i.j[t4] = s, s;
  }
};
const N = (t4, e, n, r, i) => t4.ta(e, n, r, i), $ = (t4, e, n, r, i) => t4.tr(e, n, r, i), Kc = (t4, e, n, r, i) => t4.ts(e, n, r, i), E = (t4, e, n, r, i) => t4.tt(e, n, r, i), He = "WORD", nu = "UWORD", n0 = "ASCIINUMERICAL", r0 = "ALPHANUMERICAL", Pn = "LOCALHOST", ru = "TLD", iu = "UTLD", hr = "SCHEME", Ut = "SLASH_SCHEME", Hu = "NUM", ou = "WS", Uu = "NL", kn = "OPENBRACE", Cn = "CLOSEBRACE", Tr = "OPENBRACKET", Mr = "CLOSEBRACKET", _r = "OPENPAREN", Or = "CLOSEPAREN", Nr = "OPENANGLEBRACKET", Rr = "CLOSEANGLEBRACKET", Ir = "FULLWIDTHLEFTPAREN", Fr = "FULLWIDTHRIGHTPAREN", Pr = "LEFTCORNERBRACKET", Br = "RIGHTCORNERBRACKET", Lr = "LEFTWHITECORNERBRACKET", zr = "RIGHTWHITECORNERBRACKET", qr = "FULLWIDTHLESSTHAN", $r = "FULLWIDTHGREATERTHAN", jr = "AMPERSAND", Vr = "APOSTROPHE", Hr = "ASTERISK", nt = "AT", Ur = "BACKSLASH", Wr = "BACKTICK", Kr = "CARET", st = "COLON", Wu = "COMMA", Jr = "DOLLAR", Oe = "DOT", Gr = "EQUALS", Ku = "EXCLAMATION", xe = "HYPHEN", vn = "PERCENT", Zr = "PIPE", Yr = "PLUS", Qr = "POUND", En = "QUERY", Ju = "QUOTE", i0 = "FULLWIDTHMIDDLEDOT", Gu = "SEMI", Ne = "SLASH", Sn = "TILDE", Xr = "UNDERSCORE", o0 = "EMOJI", ei = "SYM";
var s0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: r0,
  AMPERSAND: jr,
  APOSTROPHE: Vr,
  ASCIINUMERICAL: n0,
  ASTERISK: Hr,
  AT: nt,
  BACKSLASH: Ur,
  BACKTICK: Wr,
  CARET: Kr,
  CLOSEANGLEBRACKET: Rr,
  CLOSEBRACE: Cn,
  CLOSEBRACKET: Mr,
  CLOSEPAREN: Or,
  COLON: st,
  COMMA: Wu,
  DOLLAR: Jr,
  DOT: Oe,
  EMOJI: o0,
  EQUALS: Gr,
  EXCLAMATION: Ku,
  FULLWIDTHGREATERTHAN: $r,
  FULLWIDTHLEFTPAREN: Ir,
  FULLWIDTHLESSTHAN: qr,
  FULLWIDTHMIDDLEDOT: i0,
  FULLWIDTHRIGHTPAREN: Fr,
  HYPHEN: xe,
  LEFTCORNERBRACKET: Pr,
  LEFTWHITECORNERBRACKET: Lr,
  LOCALHOST: Pn,
  NL: Uu,
  NUM: Hu,
  OPENANGLEBRACKET: Nr,
  OPENBRACE: kn,
  OPENBRACKET: Tr,
  OPENPAREN: _r,
  PERCENT: vn,
  PIPE: Zr,
  PLUS: Yr,
  POUND: Qr,
  QUERY: En,
  QUOTE: Ju,
  RIGHTCORNERBRACKET: Br,
  RIGHTWHITECORNERBRACKET: zr,
  SCHEME: hr,
  SEMI: Gu,
  SLASH: Ne,
  SLASH_SCHEME: Ut,
  SYM: ei,
  TILDE: Sn,
  TLD: ru,
  UNDERSCORE: Xr,
  UTLD: iu,
  UWORD: nu,
  WORD: He,
  WS: ou
});
const je = /[a-z]/, an = new RegExp("\\p{L}", "u"), bs = new RegExp("\\p{Emoji}", "u"), Ve = /\d/, ys = /\s/, Jc = "\r", xs = `
`, $2 = "\uFE0F", j2 = "\u200D", ks = "\uFFFC";
let ir = null, or = null;
function V2(t4 = []) {
  const e = {};
  fe.groups = e;
  const n = new fe();
  ir == null && (ir = Gc(F2)), or == null && (or = Gc(P2)), E(n, "'", Vr), E(n, "{", kn), E(n, "}", Cn), E(n, "[", Tr), E(n, "]", Mr), E(n, "(", _r), E(n, ")", Or), E(n, "<", Nr), E(n, ">", Rr), E(n, "\uFF08", Ir), E(n, "\uFF09", Fr), E(n, "\u300C", Pr), E(n, "\u300D", Br), E(n, "\u300E", Lr), E(n, "\u300F", zr), E(n, "\uFF1C", qr), E(n, "\uFF1E", $r), E(n, "&", jr), E(n, "*", Hr), E(n, "@", nt), E(n, "`", Wr), E(n, "^", Kr), E(n, ":", st), E(n, ",", Wu), E(n, "$", Jr), E(n, ".", Oe), E(n, "=", Gr), E(n, "!", Ku), E(n, "-", xe), E(n, "%", vn), E(n, "|", Zr), E(n, "+", Yr), E(n, "#", Qr), E(n, "?", En), E(n, '"', Ju), E(n, "/", Ne), E(n, ";", Gu), E(n, "~", Sn), E(n, "_", Xr), E(n, "\\", Ur), E(n, "\u30FB", i0);
  const r = $(n, Ve, Hu, {
    [Qs]: true
  });
  $(r, Ve, r);
  const i = $(r, je, n0, {
    [xn]: true
  }), o = $(r, an, r0, {
    [pn]: true
  }), s = $(n, je, He, {
    [Xs]: true
  });
  $(s, Ve, i), $(s, je, s), $(i, Ve, i), $(i, je, i);
  const u = $(n, an, nu, {
    [eu]: true
  });
  $(u, je), $(u, Ve, o), $(u, an, u), $(o, Ve, o), $(o, je), $(o, an, o);
  const l = E(n, xs, Uu, {
    [gs]: true
  }), a = E(n, Jc, ou, {
    [gs]: true
  }), c = $(n, ys, ou, {
    [gs]: true
  });
  E(n, ks, c), E(a, xs, l), E(a, ks, c), $(a, ys, c), E(c, Jc), E(c, xs), $(c, ys, c), E(c, ks, c);
  const f = $(n, bs, o0, {
    [t0]: true
  });
  E(f, "#"), $(f, bs, f), E(f, $2, f);
  const d = E(f, j2);
  E(d, "#"), $(d, bs, f);
  const h = [[je, s], [Ve, i]], p = [[je, null], [an, u], [Ve, o]];
  for (let m = 0; m < ir.length; m++)
    Xe(n, ir[m], ru, He, h);
  for (let m = 0; m < or.length; m++)
    Xe(n, or[m], iu, nu, p);
  At(ru, {
    tld: true,
    ascii: true
  }, e), At(iu, {
    utld: true,
    alpha: true
  }, e), Xe(n, "file", hr, He, h), Xe(n, "mailto", hr, He, h), Xe(n, "http", Ut, He, h), Xe(n, "https", Ut, He, h), Xe(n, "ftp", Ut, He, h), Xe(n, "ftps", Ut, He, h), At(hr, {
    scheme: true,
    ascii: true
  }, e), At(Ut, {
    slashscheme: true,
    ascii: true
  }, e), t4 = t4.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < t4.length; m++) {
    const g = t4[m][0], y = t4[m][1] ? {
      [B2]: true
    } : {
      [L2]: true
    };
    g.indexOf("-") >= 0 ? y[tu] = true : je.test(g) ? Ve.test(g) ? y[xn] = true : y[Xs] = true : y[Qs] = true, Kc(n, g, g, y);
  }
  return Kc(n, "localhost", Pn, {
    ascii: true
  }), n.jd = new fe(ei), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, s0)
  };
}
function u0(t4, e) {
  const n = H2(e.replace(/[A-Z]/g, (u) => u.toLowerCase())), r = n.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let u = t4, l = null, a = 0, c = null, f = -1, d = -1;
    for (; s < r && (l = u.go(n[s])); )
      u = l, u.accepts() ? (f = 0, d = 0, c = u) : f >= 0 && (f += n[s].length, d++), a += n[s].length, o += n[s].length, s++;
    o -= f, s -= d, a -= f, i.push({
      t: c.t,
      // token type/name
      v: e.slice(o - a, o),
      // string value
      s: o - a,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function H2(t4) {
  const e = [], n = t4.length;
  let r = 0;
  for (; r < n; ) {
    let i = t4.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === n || (o = t4.charCodeAt(r + 1)) < 56320 || o > 57343 ? t4[r] : t4.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function Xe(t4, e, n, r, i) {
  let o;
  const s = e.length;
  for (let u = 0; u < s - 1; u++) {
    const l = e[u];
    t4.j[l] ? o = t4.j[l] : (o = new fe(r), o.jr = i.slice(), t4.j[l] = o), t4 = o;
  }
  return o = new fe(n), o.jr = i.slice(), t4.j[e[s - 1]] = o, o;
}
function Gc(t4) {
  const e = [], n = [];
  let r = 0, i = "0123456789";
  for (; r < t4.length; ) {
    let o = 0;
    for (; i.indexOf(t4[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(n.join(""));
      for (let s = parseInt(t4.substring(r, r + o), 10); s > 0; s--)
        n.pop();
      r += o;
    } else
      n.push(t4[r]), r++;
  }
  return e;
}
const Bn = {
  defaultProtocol: "http",
  events: null,
  format: Zc,
  formatHref: Zc,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Zu(t4, e = null) {
  let n = Object.assign({}, Bn);
  t4 && (n = Object.assign(n, t4 instanceof Zu ? t4.o : t4));
  const r = n.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = i;
}
Zu.prototype = {
  o: Bn,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t4) {
    return t4;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t4) {
    return this.get("validate", t4.toString(), t4);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t4, e, n) {
    const r = e != null;
    let i = this.o[t4];
    return i && (typeof i == "object" ? (i = n.t in i ? i[n.t] : Bn[t4], typeof i == "function" && r && (i = i(e, n))) : typeof i == "function" && r && (i = i(e, n.t, n)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t4, e, n) {
    let r = this.o[t4];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t4) {
    const e = t4.render(this);
    return (this.get("render", null, t4) || this.defaultRender)(e, t4.t, t4);
  }
};
function Zc(t4) {
  return t4;
}
function l0(t4, e) {
  this.t = "token", this.v = t4, this.tk = e;
}
l0.prototype = {
  isLink: false,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(t4) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t4) {
    const e = this.toString(), n = t4.get("truncate", e, this), r = t4.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "\u2026" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t4) {
    return t4.get("formatHref", this.toHref(t4.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t4 = Bn.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t4),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t4) {
    return {
      type: this.t,
      value: this.toFormattedString(t4),
      isLink: this.isLink,
      href: this.toFormattedHref(t4),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t4) {
    return t4.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t4) {
    const e = this, n = this.toHref(t4.get("defaultProtocol")), r = t4.get("formatHref", n, this), i = t4.get("tagName", n, e), o = this.toFormattedString(t4), s = {}, u = t4.get("className", n, e), l = t4.get("target", n, e), a = t4.get("rel", n, e), c = t4.getObj("attributes", n, e), f = t4.getObj("events", n, e);
    return s.href = r, u && (s.class = u), l && (s.target = l), a && (s.rel = a), c && Object.assign(s, c), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: f
    };
  }
};
function Ei(t4, e) {
  class n extends l0 {
    constructor(i, o) {
      super(i, o), this.t = t4;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t4, n;
}
const Yc = Ei("email", {
  isLink: true,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Qc = Ei("text"), U2 = Ei("nl"), sr = Ei("url", {
  isLink: true,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t4 = Bn.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t4}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t4 = this.tk;
    return t4.length >= 2 && t4[0].t !== Pn && t4[1].t === st;
  }
}), ye = (t4) => new fe(t4);
function W2({
  groups: t4
}) {
  const e = t4.domain.concat([jr, Hr, nt, Ur, Wr, Kr, Jr, Gr, xe, Hu, vn, Zr, Yr, Qr, Ne, ei, Sn, Xr]), n = [Vr, st, Wu, Oe, Ku, vn, En, Ju, Gu, Nr, Rr, kn, Cn, Mr, Tr, _r, Or, Ir, Fr, Pr, Br, Lr, zr, qr, $r], r = [jr, Vr, Hr, Ur, Wr, Kr, Jr, Gr, xe, kn, Cn, vn, Zr, Yr, Qr, En, Ne, ei, Sn, Xr], i = ye(), o = E(i, Sn);
  N(o, r, o), N(o, t4.domain, o);
  const s = ye(), u = ye(), l = ye();
  N(i, t4.domain, s), N(i, t4.scheme, u), N(i, t4.slashscheme, l), N(s, r, o), N(s, t4.domain, s);
  const a = E(s, nt);
  E(o, nt, a), E(u, nt, a), E(l, nt, a);
  const c = E(o, Oe);
  N(c, r, o), N(c, t4.domain, o);
  const f = ye();
  N(a, t4.domain, f), N(f, t4.domain, f);
  const d = E(f, Oe);
  N(d, t4.domain, f);
  const h = ye(Yc);
  N(d, t4.tld, h), N(d, t4.utld, h), E(a, Pn, h);
  const p = E(f, xe);
  E(p, xe, p), N(p, t4.domain, f), N(h, t4.domain, f), E(h, Oe, d), E(h, xe, p);
  const m = E(h, st);
  N(m, t4.numeric, Yc);
  const g = E(s, xe), b = E(s, Oe);
  E(g, xe, g), N(g, t4.domain, s), N(b, r, o), N(b, t4.domain, s);
  const y = ye(sr);
  N(b, t4.tld, y), N(b, t4.utld, y), N(y, t4.domain, s), N(y, r, o), E(y, Oe, b), E(y, xe, g), E(y, nt, a);
  const x = E(y, st), k = ye(sr);
  N(x, t4.numeric, k);
  const C = ye(sr), S = ye();
  N(C, e, C), N(C, n, S), N(S, e, C), N(S, n, S), E(y, Ne, C), E(k, Ne, C);
  const M = E(u, st), A = E(l, st), _ = E(A, Ne), I = E(_, Ne);
  N(u, t4.domain, s), E(u, Oe, b), E(u, xe, g), N(l, t4.domain, s), E(l, Oe, b), E(l, xe, g), N(M, t4.domain, C), E(M, Ne, C), E(M, En, C), N(I, t4.domain, C), N(I, e, C), E(I, Ne, C);
  const be = [
    [kn, Cn],
    // {}
    [Tr, Mr],
    // []
    [_r, Or],
    // ()
    [Nr, Rr],
    // <>
    [Ir, Fr],
    // （）
    [Pr, Br],
    // 「」
    [Lr, zr],
    // 『』
    [qr, $r]
    // ＜＞
  ];
  for (let _e = 0; _e < be.length; _e++) {
    const [Ye, ue] = be[_e], V = E(C, Ye);
    E(S, Ye, V), E(V, ue, C);
    const Qe = ye(sr);
    N(V, e, Qe);
    const sn = ye();
    N(V, n), N(Qe, e, Qe), N(Qe, n, sn), N(sn, e, Qe), N(sn, n, sn), E(Qe, ue, C), E(sn, ue, C);
  }
  return E(i, Pn, y), E(i, Uu, U2), {
    start: i,
    tokens: s0
  };
}
function K2(t4, e, n) {
  let r = n.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let u = t4, l = null, a = null, c = 0, f = null, d = -1;
    for (; i < r && !(l = u.go(n[i].t)); )
      s.push(n[i++]);
    for (; i < r && (a = l || u.go(n[i].t)); )
      l = null, u = a, u.accepts() ? (d = 0, f = u) : d >= 0 && d++, i++, c++;
    if (d < 0)
      i -= c, i < r && (s.push(n[i]), i++);
    else {
      s.length > 0 && (o.push(Cs(Qc, e, s)), s = []), i -= d, c -= d;
      const h = f.t, p = n.slice(i - c, i);
      o.push(Cs(h, e, p));
    }
  }
  return s.length > 0 && o.push(Cs(Qc, e, s)), o;
}
function Cs(t4, e, n) {
  const r = n[0].s, i = n[n.length - 1].e, o = e.slice(r, i);
  return new t4(o, n);
}
const J2 = typeof console < "u" && console && console.warn || (() => {
}), G2 = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", z = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: false
};
function Z2() {
  return fe.groups = {}, z.scanner = null, z.parser = null, z.tokenQueue = [], z.pluginQueue = [], z.customSchemes = [], z.initialized = false, z;
}
function Xc(t4, e = false) {
  if (z.initialized && J2(`linkifyjs: already initialized - will not register custom scheme "${t4}" ${G2}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t4))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  z.customSchemes.push([t4, e]);
}
function Y2() {
  z.scanner = V2(z.customSchemes);
  for (let t4 = 0; t4 < z.tokenQueue.length; t4++)
    z.tokenQueue[t4][1]({
      scanner: z.scanner
    });
  z.parser = W2(z.scanner.tokens);
  for (let t4 = 0; t4 < z.pluginQueue.length; t4++)
    z.pluginQueue[t4][1]({
      scanner: z.scanner,
      parser: z.parser
    });
  return z.initialized = true, z;
}
function Yu(t4) {
  return z.initialized || Y2(), K2(z.parser.start, t4, u0(z.scanner.start, t4));
}
Yu.scan = u0;
function a0(t4, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new Zu(n), i = Yu(t4), o = [];
  for (let s = 0; s < i.length; s++) {
    const u = i[s];
    u.isLink && (!e || u.t === e) && r.check(u) && o.push(u.toFormattedObject(r));
  }
  return o;
}
var Qu = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]", Q2 = new RegExp(Qu), X2 = new RegExp(`${Qu}$`), ey = new RegExp(Qu, "g");
function ty(t4) {
  return t4.length === 1 ? t4[0].isLink : t4.length === 3 && t4[1].isLink ? ["()", "[]"].includes(t4[0].value + t4[2].value) : false;
}
function ny(t4) {
  return new P({
    key: new W("autolink"),
    appendTransaction: (e, n, r) => {
      const i = e.some((a) => a.docChanged) && !n.doc.eq(r.doc), o = e.some((a) => a.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, u = Nh(n.doc, [...e]);
      if (zh(u).forEach(({ newRange: a }) => {
        const c = Mb(r.doc, a, (h) => h.isTextblock);
        let f, d;
        if (c.length > 1)
          f = c[0], d = r.doc.textBetween(
            f.pos,
            f.pos + f.node.nodeSize,
            void 0,
            " "
          );
        else if (c.length) {
          const h = r.doc.textBetween(a.from, a.to, " ", " ");
          if (!X2.test(h))
            return;
          f = c[0], d = r.doc.textBetween(f.pos, a.to, void 0, " ");
        }
        if (f && d) {
          const h = d.split(Q2).filter(Boolean);
          if (h.length <= 0)
            return false;
          const p = h[h.length - 1], m = f.pos + d.lastIndexOf(p);
          if (!p)
            return false;
          const g = Yu(p).map((b) => b.toObject(t4.defaultProtocol));
          if (!ty(g))
            return false;
          g.filter((b) => b.isLink).map((b) => ({
            ...b,
            from: m + b.start + 1,
            to: m + b.end + 1
          })).filter((b) => r.schema.marks.code ? !r.doc.rangeHasMark(b.from, b.to, r.schema.marks.code) : true).filter((b) => t4.validate(b.value)).filter((b) => t4.shouldAutoLink(b.value)).forEach((b) => {
            qh(b.from, b.to, r.doc).some((y) => y.mark.type === t4.type) || s.addMark(
              b.from,
              b.to,
              t4.type.create({
                href: b.href
              })
            );
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function ry(t4) {
  return new P({
    key: new W("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return false;
        let s = null;
        if (r.target instanceof HTMLAnchorElement)
          s = r.target;
        else {
          let c = r.target;
          const f = [];
          for (; c.nodeName !== "DIV"; )
            f.push(c), c = c.parentNode;
          s = f.find((d) => d.nodeName === "A");
        }
        if (!s)
          return false;
        const u = Lh(e.state, t4.type.name), l = (i = s?.href) != null ? i : u.href, a = (o = s?.target) != null ? o : u.target;
        return t4.enableClickSelection && t4.editor.commands.extendMarkRange(t4.type.name), s && l ? (window.open(l, a), true) : false;
      }
    }
  });
}
function iy(t4) {
  return new P({
    key: new W("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return false;
        let u = "";
        r.content.forEach((a) => {
          u += a.textContent;
        });
        const l = a0(u, { defaultProtocol: t4.defaultProtocol }).find(
          (a) => a.isLink && a.value === u
        );
        return !u || !l ? false : t4.editor.commands.setMark(t4.type, {
          href: l.href
        });
      }
    }
  });
}
function Ct(t4, e) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && n.push(i);
  }), !t4 || t4.replace(ey, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var oy = rn.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t4) => {
      if (typeof t4 == "string") {
        Xc(t4);
        return;
      }
      Xc(t4.scheme, t4.optionalSlashes);
    });
  },
  onDestroy() {
    Z2();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      enableClickSelection: false,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t4, e) => !!Ct(t4, e.protocols),
      validate: (t4) => !!t4,
      shouldAutoLink: (t4) => !!t4
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(t4) {
          return t4.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t4) => {
          const e = t4.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (n) => !!Ct(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? false : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return this.options.isAllowedUri(t4.href, {
      defaultValidate: (e) => !!Ct(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", Fn(this.options.HTMLAttributes, t4), 0] : ["a", Fn(this.options.HTMLAttributes, { ...t4, href: "" }), 0];
  },
  addCommands() {
    return {
      setLink: (t4) => ({ chain: e }) => {
        const { href: n } = t4;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!Ct(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t4).setMeta("preventAutolink", true).run() : false;
      },
      toggleLink: (t4) => ({ chain: e }) => {
        const { href: n } = t4 || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!Ct(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? false : e().toggleMark(this.name, t4, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run();
      },
      unsetLink: () => ({ chain: t4 }) => t4().unsetMark(this.name, { extendEmptyMarkRange: true }).setMeta("preventAutolink", true).run()
    };
  },
  addPasteRules() {
    return [
      N2({
        find: (t4) => {
          const e = [];
          if (t4) {
            const { protocols: n, defaultProtocol: r } = this.options, i = a0(t4).filter(
              (o) => o.isLink && this.options.isAllowedUri(o.value, {
                defaultValidate: (s) => !!Ct(s, n),
                protocols: n,
                defaultProtocol: r
              })
            );
            i.length && i.forEach(
              (o) => e.push({
                text: o.value,
                data: {
                  href: o.href
                },
                index: o.start
              })
            );
          }
          return e;
        },
        type: this.type,
        getAttributes: (t4) => {
          var e;
          return {
            href: (e = t4.data) == null ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t4 = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t4.push(
      ny({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (i) => !!Ct(i, e),
          protocols: e,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), this.options.openOnClick === true && t4.push(
      ry({
        type: this.type,
        editor: this.editor,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && t4.push(
      iy({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      })
    ), t4;
  }
}), sy = oy, uy = vi.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return ["p", Fn(this.options.HTMLAttributes, t4), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t4 }) => t4.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), ly = uy, ay = vi.create({
  name: "text",
  group: "inline"
}), cy = ay;
function fy(t4 = {}) {
  return new P({
    view(e) {
      return new dy(e, t4);
    }
  });
}
class dy {
  constructor(e, n) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === false ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    this.cursorPos != null && n.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, r, i = this.editorView.dom, o = i.getBoundingClientRect(), s = o.width / i.offsetWidth, u = o.height / i.offsetHeight;
    if (n) {
      let f = e.nodeBefore, d = e.nodeAfter;
      if (f || d) {
        let h = this.editorView.nodeDOM(this.cursorPos - (f ? f.nodeSize : 0));
        if (h) {
          let p = h.getBoundingClientRect(), m = f ? p.bottom : p.top;
          f && d && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * u;
          r = { left: p.left, right: p.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!r) {
      let f = this.editorView.coordsAtPos(this.cursorPos), d = this.width / 2 * s;
      r = { left: f.left - d, right: f.left + d, top: f.top, bottom: f.bottom };
    }
    let l = this.editorView.dom.offsetParent;
    this.element || (this.element = l.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let a, c;
    if (!l || l == document.body && getComputedStyle(l).position == "static")
      a = -pageXOffset, c = -pageYOffset;
    else {
      let f = l.getBoundingClientRect(), d = f.width / l.offsetWidth, h = f.height / l.offsetHeight;
      a = f.left - l.scrollLeft * d, c = f.top - l.scrollTop * h;
    }
    this.element.style.left = (r.left - a) / s + "px", this.element.style.top = (r.top - c) / u + "px", this.element.style.width = (r.right - r.left) / s + "px", this.element.style.height = (r.bottom - r.top) / u + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, n, e) : i;
    if (n && !o) {
      let s = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let u = Sd(this.editorView.state.doc, s, this.editorView.dragging.slice);
        u != null && (s = u);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
class j extends R {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return j.valid(r) ? new j(r) : R.near(r);
  }
  content() {
    return w.empty;
  }
  eq(e) {
    return e instanceof j && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new j(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Xu(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.isTextblock || !hy(e) || !py(e))
      return false;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = n.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, r = false) {
    e: for (; ; ) {
      if (!r && j.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let u = e.node(s);
        if (n > 0 ? e.indexAfter(s) < u.childCount : e.index(s) > 0) {
          o = u.child(n > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += n;
        let l = e.doc.resolve(i);
        if (j.valid(l))
          return l;
      }
      for (; ; ) {
        let s = n > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !T.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * n), r = false;
            continue e;
          }
          break;
        }
        o = s, i += n;
        let u = e.doc.resolve(i);
        if (j.valid(u))
          return u;
      }
      return null;
    }
  }
}
j.prototype.visible = false;
j.findFrom = j.findGapCursorFrom;
R.jsonID("gapcursor", j);
class Xu {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Xu(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return j.valid(n) ? new j(n) : R.near(n);
  }
}
function hy(t4) {
  for (let e = t4.depth; e >= 0; e--) {
    let n = t4.index(e), r = t4.node(e);
    if (n == 0) {
      if (r.type.spec.isolating)
        return true;
      continue;
    }
    for (let i = r.child(n - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return true;
      if (i.inlineContent)
        return false;
    }
  }
  return true;
}
function py(t4) {
  for (let e = t4.depth; e >= 0; e--) {
    let n = t4.indexAfter(e), r = t4.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return true;
      continue;
    }
    for (let i = r.child(n); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return true;
      if (i.inlineContent)
        return false;
    }
  }
  return true;
}
function my() {
  return new P({
    props: {
      decorations: xy,
      createSelectionBetween(t4, e, n) {
        return e.pos == n.pos && j.valid(n) ? new j(n) : null;
      },
      handleClick: by,
      handleKeyDown: gy,
      handleDOMEvents: { beforeinput: yy }
    }
  });
}
const gy = Sh({
  ArrowLeft: ur("horiz", -1),
  ArrowRight: ur("horiz", 1),
  ArrowUp: ur("vert", -1),
  ArrowDown: ur("vert", 1)
});
function ur(t4, e) {
  const n = t4 == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, u = e > 0 ? s.$to : s.$from, l = s.empty;
    if (s instanceof O) {
      if (!o.endOfTextblock(n) || u.depth == 0)
        return false;
      l = false, u = r.doc.resolve(e > 0 ? u.after() : u.before());
    }
    let a = j.findGapCursorFrom(u, e, l);
    return a ? (i && i(r.tr.setSelection(new j(a))), true) : false;
  };
}
function by(t4, e, n) {
  if (!t4 || !t4.editable)
    return false;
  let r = t4.state.doc.resolve(e);
  if (!j.valid(r))
    return false;
  let i = t4.posAtCoords({ left: n.clientX, top: n.clientY });
  return i && i.inside > -1 && T.isSelectable(t4.state.doc.nodeAt(i.inside)) ? false : (t4.dispatch(t4.state.tr.setSelection(new j(r))), true);
}
function yy(t4, e) {
  if (e.inputType != "insertCompositionText" || !(t4.state.selection instanceof j))
    return false;
  let { $from: n } = t4.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t4.state.schema.nodes.text);
  if (!r)
    return false;
  let i = v.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = v.from(r[s].createAndFill(null, i));
  let o = t4.state.tr.replace(n.pos, n.pos, new w(i, 0, 0));
  return o.setSelection(O.near(o.doc.resolve(n.pos + 1))), t4.dispatch(o), false;
}
function xy(t4) {
  if (!(t4.selection instanceof j))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", q.create(t4.doc, [ie.widget(t4.selection.head, e, { key: "gapcursor" })]);
}
var ti = 200, Y = function() {
};
Y.prototype.append = function(e) {
  return e.length ? (e = Y.from(e), !this.length && e || e.length < ti && this.leafAppend(e) || this.length < ti && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Y.prototype.prepend = function(e) {
  return e.length ? Y.from(e).append(this) : this;
};
Y.prototype.appendInner = function(e) {
  return new ky(this, e);
};
Y.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? Y.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
Y.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Y.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
Y.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, n, r), i;
};
Y.from = function(e) {
  return e instanceof Y ? e : e && e.length ? new c0(e) : Y.empty;
};
var c0 = /* @__PURE__ */ (function(t4) {
  function e(r) {
    t4.call(this), this.values = r;
  }
  t4 && (e.__proto__ = t4), e.prototype = Object.create(t4 && t4.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: true }, depth: { configurable: true } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, u) {
    for (var l = o; l < s; l++)
      if (i(this.values[l], u + l) === false)
        return false;
  }, e.prototype.forEachInvertedInner = function(i, o, s, u) {
    for (var l = o - 1; l >= s; l--)
      if (i(this.values[l], u + l) === false)
        return false;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= ti)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= ti)
      return new e(i.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
})(Y);
Y.empty = new c0([]);
var ky = /* @__PURE__ */ (function(t4) {
  function e(n, r) {
    t4.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return t4 && (e.__proto__ = t4), e.prototype = Object.create(t4 && t4.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var u = this.left.length;
    if (i < u && this.left.forEachInner(r, i, Math.min(o, u), s) === false || o > u && this.right.forEachInner(r, Math.max(i - u, 0), Math.min(this.length, o) - u, s + u) === false)
      return false;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var u = this.left.length;
    if (i > u && this.right.forEachInvertedInner(r, i - u, Math.max(o, u) - u, s + u) === false || o < u && this.left.forEachInvertedInner(r, Math.min(i, u), o, s) === false)
      return false;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
})(Y);
const Cy = 500;
class Ae {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    n && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, u, l, a = [], c = [];
    return this.items.forEach((f, d) => {
      if (!f.step) {
        i || (i = this.remapping(r, d + 1), o = i.maps.length), o--, c.push(f);
        return;
      }
      if (i) {
        c.push(new Re(f.map));
        let h = f.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], a.push(new Re(p, void 0, void 0, a.length + c.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(f.step);
      if (f.selection)
        return u = i ? f.selection.map(i.slice(o)) : f.selection, l = new Ae(this.items.slice(0, r).append(c.reverse().concat(a)), this.eventCount - 1), false;
    }, this.items.length, 0), { remaining: l, transform: s, selection: u };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, i) {
    let o = [], s = this.eventCount, u = this.items, l = !i && u.length ? u.get(u.length - 1) : null;
    for (let c = 0; c < e.steps.length; c++) {
      let f = e.steps[c].invert(e.docs[c]), d = new Re(e.mapping.maps[c], f, n), h;
      (h = l && l.merge(d)) && (d = h, c ? o.pop() : u = u.slice(0, u.length - 1)), o.push(d), n && (s++, n = void 0), i || (l = d);
    }
    let a = s - r.depth;
    return a > Ey && (u = vy(u, a), s -= a), new Ae(u.append(o), s);
  }
  remapping(e, n) {
    let r = new Dn();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ae(this.items.append(e.map((n) => new Re(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - n), o = e.mapping, s = e.steps.length, u = this.eventCount;
    this.items.forEach((d) => {
      d.selection && u--;
    }, i);
    let l = n;
    this.items.forEach((d) => {
      let h = o.getMirror(--l);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (d.step) {
        let m = e.steps[h].invert(e.docs[h]), g = d.selection && d.selection.map(o.slice(l + 1, h));
        g && u++, r.push(new Re(p, m, g));
      } else
        r.push(new Re(p));
    }, i);
    let a = [];
    for (let d = n; d < s; d++)
      a.push(new Re(o.maps[d]));
    let c = this.items.slice(0, i).append(a).append(r), f = new Ae(c, u);
    return f.emptyItemCount() > Cy && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, i = [], o = 0;
    return this.items.forEach((s, u) => {
      if (u >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let l = s.step.map(n.slice(r)), a = l && l.getMap();
        if (r--, a && n.appendMap(a, r), l) {
          let c = s.selection && s.selection.map(n.slice(r));
          c && o++;
          let f = new Re(a.invert(), l, c), d, h = i.length - 1;
          (d = i.length && i[h].merge(f)) ? i[h] = d : i.push(f);
        }
      } else s.map && r--;
    }, this.items.length, 0), new Ae(Y.from(i.reverse()), o);
  }
}
Ae.empty = new Ae(Y.empty, 0);
function vy(t4, e) {
  let n;
  return t4.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return n = i, false;
  }), t4.slice(n);
}
class Re {
  constructor(e, n, r, i) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new Re(n.getMap().invert(), n, this.selection);
    }
  }
}
class rt {
  constructor(e, n, r, i, o) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const Ey = 20;
function Sy(t4, e, n, r) {
  let i = n.getMeta(Ot), o;
  if (i)
    return i.historyState;
  n.getMeta(Dy) && (t4 = new rt(t4.done, t4.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t4;
  if (s && s.getMeta(Ot))
    return s.getMeta(Ot).redo ? new rt(t4.done.addTransform(n, void 0, r, pr(e)), t4.undone, ef(n.mapping.maps), t4.prevTime, t4.prevComposition) : new rt(t4.done, t4.undone.addTransform(n, void 0, r, pr(e)), null, t4.prevTime, t4.prevComposition);
  if (n.getMeta("addToHistory") !== false && !(s && s.getMeta("addToHistory") === false)) {
    let u = n.getMeta("composition"), l = t4.prevTime == 0 || !s && t4.prevComposition != u && (t4.prevTime < (n.time || 0) - r.newGroupDelay || !wy(n, t4.prevRanges)), a = s ? vs(t4.prevRanges, n.mapping) : ef(n.mapping.maps);
    return new rt(t4.done.addTransform(n, l ? e.selection.getBookmark() : void 0, r, pr(e)), Ae.empty, a, n.time, u ?? t4.prevComposition);
  } else return (o = n.getMeta("rebased")) ? new rt(t4.done.rebased(n, o), t4.undone.rebased(n, o), vs(t4.prevRanges, n.mapping), t4.prevTime, t4.prevComposition) : new rt(t4.done.addMaps(n.mapping.maps), t4.undone.addMaps(n.mapping.maps), vs(t4.prevRanges, n.mapping), t4.prevTime, t4.prevComposition);
}
function wy(t4, e) {
  if (!e)
    return false;
  if (!t4.docChanged)
    return true;
  let n = false;
  return t4.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (n = true);
  }), n;
}
function ef(t4) {
  let e = [];
  for (let n = t4.length - 1; n >= 0 && e.length == 0; n--)
    t4[n].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function vs(t4, e) {
  if (!t4)
    return null;
  let n = [];
  for (let r = 0; r < t4.length; r += 2) {
    let i = e.map(t4[r], 1), o = e.map(t4[r + 1], -1);
    i <= o && n.push(i, o);
  }
  return n;
}
function Ay(t4, e, n) {
  let r = pr(e), i = Ot.get(e).spec.config, o = (n ? t4.undone : t4.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), u = (n ? t4.done : t4.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), l = new rt(n ? u : o.remaining, n ? o.remaining : u, null, 0, -1);
  return o.transform.setSelection(s).setMeta(Ot, { redo: n, historyState: l });
}
let Es = false, tf = null;
function pr(t4) {
  let e = t4.plugins;
  if (tf != e) {
    Es = false, tf = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        Es = true;
        break;
      }
  }
  return Es;
}
const Ot = new W("history"), Dy = new W("closeHistory");
function Ty(t4 = {}) {
  return t4 = {
    depth: t4.depth || 100,
    newGroupDelay: t4.newGroupDelay || 500
  }, new P({
    key: Ot,
    state: {
      init() {
        return new rt(Ae.empty, Ae.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return Sy(n, r, e, t4);
      }
    },
    config: t4,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, i = r == "historyUndo" ? d0 : r == "historyRedo" ? h0 : null;
          return i ? (n.preventDefault(), i(e.state, e.dispatch)) : false;
        }
      }
    }
  });
}
function f0(t4, e) {
  return (n, r) => {
    let i = Ot.getState(n);
    if (!i || (t4 ? i.undone : i.done).eventCount == 0)
      return false;
    if (r) {
      let o = Ay(i, n, t4);
      o && r(e ? o.scrollIntoView() : o);
    }
    return true;
  };
}
const d0 = f0(false, true), h0 = f0(true, true);
H.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (t4) => t4.length,
      wordCounter: (t4) => t4.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t4) => {
      const e = t4?.node || this.editor.state.doc;
      if ((t4?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (t4) => {
      const e = t4?.node || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t4 = false;
    return [
      new P({
        key: new W("characterCount"),
        appendTransaction: (e, n, r) => {
          if (t4)
            return;
          const i = this.options.limit;
          if (i == null || i === 0) {
            t4 = true;
            return;
          }
          const o = this.storage.characters({ node: r.doc });
          if (o > i) {
            const s = o - i, u = 0, l = s;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`
            );
            const a = r.tr.deleteRange(u, l);
            return t4 = true, a;
          }
          t4 = true;
        },
        filterTransaction: (e, n) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return true;
          const i = this.storage.characters({ node: n.doc }), o = this.storage.characters({ node: e.doc });
          if (o <= r || i > r && o > r && o <= i)
            return true;
          if (i > r && o > r && o > i || !e.getMeta("paste"))
            return false;
          const u = e.selection.$head.pos, l = o - r, a = u - l, c = u;
          return e.deleteRange(a, c), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
});
H.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [fy(this.options)];
  }
});
H.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("focus"),
        props: {
          decorations: ({ doc: t4, selection: e }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: i } = e, o = [];
            if (!n || !r)
              return q.create(t4, []);
            let s = 0;
            this.options.mode === "deepest" && t4.descendants((l, a) => {
              if (l.isText)
                return;
              if (!(i >= a && i <= a + l.nodeSize - 1))
                return false;
              s += 1;
            });
            let u = 0;
            return t4.descendants((l, a) => {
              if (l.isText || !(i >= a && i <= a + l.nodeSize - 1))
                return false;
              if (u += 1, this.options.mode === "deepest" && s - u > 0 || this.options.mode === "shallowest" && u > 1)
                return this.options.mode === "deepest";
              o.push(
                ie.node(a, a + l.nodeSize, {
                  class: this.options.className
                })
              );
            }), q.create(t4, o);
          }
        }
      })
    ];
  }
});
H.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [my()];
  },
  extendNodeSchema(t4) {
    var e;
    const n = {
      name: t4.name,
      options: t4.options,
      storage: t4.storage
    };
    return {
      allowGapCursor: (e = L(D(t4, "allowGapCursor", n))) != null ? e : null
    };
  }
});
var My = H.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something \u2026",
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: false
    };
  },
  addProseMirrorPlugins() {
    return [
      new P({
        key: new W("placeholder"),
        props: {
          decorations: ({ doc: t4, selection: e }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!n)
              return null;
            const o = this.editor.isEmpty;
            return t4.descendants((s, u) => {
              const l = r >= u && r <= u + s.nodeSize, a = !s.isLeaf && ki(s);
              if ((l || !this.options.showOnlyCurrent) && a) {
                const c = [this.options.emptyNodeClass];
                o && c.push(this.options.emptyEditorClass);
                const f = ie.node(u, u + s.nodeSize, {
                  class: c.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: u,
                    hasAnchor: l
                  }) : this.options.placeholder
                });
                i.push(f);
              }
              return this.options.includeChildren;
            }), q.create(t4, i);
          }
        }
      })
    ];
  }
});
H.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: t4, options: e } = this;
    return [
      new P({
        key: new W("selection"),
        props: {
          decorations(n) {
            return n.selection.empty || t4.isFocused || !t4.isEditable || jb(n.selection) || t4.view.dragging ? null : q.create(n.doc, [
              ie.inline(n.selection.from, n.selection.to, {
                class: e.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function nf({ types: t4, node: e }) {
  return e && Array.isArray(t4) && t4.includes(e.type) || e?.type === t4;
}
H.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    const t4 = new W(this.name), e = Object.entries(this.editor.schema.nodes).map(([, n]) => n).filter((n) => (this.options.notAfter || []).concat(this.options.node).includes(n.name));
    return [
      new P({
        key: t4,
        appendTransaction: (n, r, i) => {
          const { doc: o, tr: s, schema: u } = i, l = t4.getState(i), a = o.content.size, c = u.nodes[this.options.node];
          if (l)
            return s.insert(a, c.create());
        },
        state: {
          init: (n, r) => {
            const i = r.tr.doc.lastChild;
            return !nf({ node: i, types: e });
          },
          apply: (n, r) => {
            if (!n.docChanged)
              return r;
            const i = n.doc.lastChild;
            return !nf({ node: i, types: e });
          }
        }
      })
    ];
  }
});
var _y = H.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t4, dispatch: e }) => d0(t4, e),
      redo: () => ({ state: t4, dispatch: e }) => h0(t4, e)
    };
  },
  addProseMirrorPlugins() {
    return [Ty(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-\u044F": () => this.editor.commands.undo(),
      "Shift-Mod-\u044F": () => this.editor.commands.redo()
    };
  }
});
const cn = {
  bold: "bold",
  italic: "italic",
  underline: "underline",
  strike: "strike",
  link: "link"
}, Oy = rn.create({
  name: "bold",
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t4) => t4.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t4) => t4.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t4) => /^(bold(er)?|[5-9]\d{2,})$/.test(t4) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return ["strong", t4, 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t4 }) => t4.setMark(this.name),
      toggleBold: () => ({ commands: t4 }) => t4.toggleMark(this.name),
      unsetBold: () => ({ commands: t4 }) => t4.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  }
}), Ny = H.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (t4) => t4.length,
      wordCounter: (t4) => t4.split(" ").filter((e) => e !== "").length,
      onChange: () => {
      }
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t4) => {
      const e = t4?.node || this.editor.state.doc;
      if ((t4?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (t4) => {
      const e = t4?.node || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t4 = false;
    const e = () => typeof this.options.limit == "function" ? this.options.limit() : this.options.limit;
    return [
      new P({
        key: new W("characterCount"),
        appendTransaction: (n, r, i) => {
          if (t4)
            return;
          const o = e();
          if (o == null || o === 0) {
            t4 = true;
            return;
          }
          const s = this.storage.characters({
            node: i.doc
          });
          if (s > o) {
            const u = s - o, l = 0, a = u;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`
            );
            const c = i.tr.deleteRange(l, a);
            return t4 = true, c;
          }
          t4 = true;
        },
        filterTransaction: (n, r) => {
          const i = e();
          if (!n.docChanged || i === 0 || i === null || i === void 0)
            return true;
          const o = this.storage.characters({ node: r.doc }), s = this.storage.characters({ node: n.doc });
          if (this.options.onChange(s), s <= i || o > i && s > i && s <= o)
            return true;
          if (o > i && s > i && s > o || !n.getMeta("paste"))
            return false;
          const l = n.selection.$head.pos, a = s - i, c = l - a, f = l;
          return n.deleteRange(c, f), !(this.storage.characters({
            node: n.doc
          }) > i);
        }
      })
    ];
  }
}), Ry = vi.create({
  name: "hardBreak",
  inline: true,
  group: "inline",
  selectable: true,
  linebreakReplacement: true,
  addOptions() {
    return {
      keepMarks: true,
      HTMLAttributes: {},
      preventNewlines: () => false
    };
  },
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return ["br", Fn(this.options.HTMLAttributes, t4)];
  },
  renderText() {
    return `
`;
  },
  addStorage() {
    return {
      blockHardBreak: false,
      inputTimer: void 0
    };
  },
  addCommands() {
    return {
      insertHardBreak: () => ({ chain: t4 }) => this.options.preventNewlines?.() === true || this.storage.blockHardBreak ? true : t4().insertContent({ type: this.name }).run()
    };
  },
  addProseMirrorPlugins() {
    const t4 = this.editor, e = new P({
      props: {
        handleDOMEvents: {
          beforeinput: (r, i) => {
            const o = i, s = o.inputType;
            return s === "insertParagraph" || s === "insertLineBreak" ? (o.preventDefault(), this.options.preventNewlines?.() || (clearTimeout(this.storage.inputTimer), this.storage.blockHardBreak = false, t4.chain().focus().insertHardBreak().run(), this.storage.blockHardBreak = true, this.storage.inputTimer = setTimeout(() => {
              this.storage.blockHardBreak = false;
            }, 300)), true) : false;
          }
        }
      }
    }), n = new P({
      /**
       * Здесь решаем ВСЁ:
       *  - при любом изменении документа:
       *    • гарантируем только один paragraph
       *    • вливаем остальные paragraph в первый
       *      через hardBreak (если !preventNewlines)
       *    • если preventNewlines === true — выпиливаем все hardBreak
       */
      appendTransaction: (r, i, o) => {
        if (!r.some((b) => b.docChanged))
          return null;
        const { schema: s } = o, u = s.nodes.paragraph, l = s.nodes[this.name];
        if (!u || !l)
          return null;
        const a = this.options.preventNewlines?.() === true, c = o.tr, f = o.doc, d = [];
        if (f.descendants((b, y) => {
          b.type === u && d.push({ node: b, pos: y });
        }), a && f.descendants((b, y) => {
          if (b.type === l) {
            const x = c.mapping.map(y), k = c.mapping.map(y + b.nodeSize);
            c.delete(x, k);
          }
        }), d.length <= 1)
          return c.docChanged ? c : null;
        const h = c.selection.to;
        let p = 0;
        d.forEach((b, y) => {
          const { node: x } = b;
          y > 0 && !a && (c.insert(p, l.create()), p += 1), c.insert(p, x.content), p += x.content.size;
        }), c.delete(p, c.doc.content.size);
        const m = Math.abs(c.doc.content.size - f.content.size), g = Math.max(0, Math.min(c.doc.content.size, h - m));
        return c.setSelection(O.create(c.doc, g, g)), c.docChanged ? c : null;
      }
    });
    return [e, n];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.insertHardBreak(),
      "Mod-Enter": () => this.editor.commands.insertHardBreak(),
      "Shift-Enter": () => this.editor.commands.insertHardBreak()
    };
  }
}), Iy = /(^|[\s(])#([\p{L}\p{N}_-]+)/gu, Fy = H.create({
  name: "hashtagsParser",
  addOptions() {
    return {
      isEnabled: () => true,
      minimumLength: 2
    };
  },
  addProseMirrorPlugins() {
    const t4 = new W("hashtag");
    return [
      new P({
        key: t4,
        state: {
          init: (e, { doc: n }) => rf(n, this.options),
          apply: (e, n) => {
            const r = n.map(e.mapping, e.doc);
            return e.docChanged ? rf(e.doc, this.options) : r;
          }
        },
        props: {
          decorations(e) {
            return this.getState(e);
          }
        }
      })
    ];
  }
});
function rf(t4, e) {
  if (!e.isEnabled())
    return q.create(t4, []);
  const n = [];
  return t4.descendants((r, i) => {
    if (!r.isText || r.marks?.some((s) => s.type.name === "code")) return true;
    const o = r.text;
    for (const s of o.matchAll(Iy)) {
      const [, u = "", l] = s ?? [];
      if (l.length < e.minimumLength)
        return;
      const a = i + s.index + u.length, c = a + 1 + l.length;
      n.push(
        ie.inline(
          a,
          c,
          {
            class: "hashtag"
          },
          {
            inclusiveStart: false,
            inclusiveEnd: false
          }
        )
      );
    }
    return true;
  }), q.create(t4, n);
}
const Py = rn.create({
  name: "italic",
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t4) => t4.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t4) => t4.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return ["em", t4, 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t4 }) => t4.setMark(this.name),
      toggleItalic: () => ({ commands: t4 }) => t4.toggleMark(this.name),
      unsetItalic: () => ({ commands: t4 }) => t4.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  }
}), By = H.create({
  name: "selectionPreserve",
  priority: 1e3,
  // High priority to override focus command
  addStorage() {
    return {
      temporarySelection: null,
      stableSelection: null,
      stabilizationTimer: null
    };
  },
  addCommands() {
    return {
      saveStableSelection: () => () => (this.storage.stableSelection = this.storage.temporarySelection, console.log(
        "[SelectionPreserve] saveStableSelection: stableSelection fixed immediately",
        this.storage.temporarySelection
      ), this.storage.stabilizationTimer !== null && (clearTimeout(this.storage.stabilizationTimer), this.storage.stabilizationTimer = null, console.log(
        "[SelectionPreserve] saveStableSelection: stabilization timer cleared"
      )), true),
      restoreStableSelection: () => ({ state: t4, dispatch: e }) => {
        const n = this.storage.stableSelection;
        if (console.log("[SelectionPreserve] restoreStableSelection: checking", {
          current: {
            from: t4.selection.from,
            to: t4.selection.to
          },
          stable: n
        }), !n)
          return console.log(
            "[SelectionPreserve] restoreStableSelection: no stableSelection, skipping"
          ), false;
        const { from: r, to: i } = t4.selection;
        if (r !== n.from || i !== n.to) {
          console.log(
            "[SelectionPreserve] restoreStableSelection: restoring",
            n
          );
          const s = t4.tr.setSelection(
            O.create(
              t4.doc,
              n.from,
              n.to
            )
          );
          return e && e(s), true;
        } else
          console.log(
            "[SelectionPreserve] restoreStableSelection: selection matches, no restore needed"
          );
        return false;
      }
    };
  },
  addProseMirrorPlugins() {
    const t4 = new W("selectionPreserve");
    return [
      new P({
        key: t4,
        state: {
          init: () => null,
          apply: (e, n, r, i) => {
            if (!e.selectionSet && !e.docChanged)
              return null;
            const { from: o, to: s } = i.selection;
            return console.log(
              "[SelectionPreserve] apply: temporarySelection updated",
              { from: o, to: s }
            ), this.storage.stabilizationTimer !== null && clearTimeout(this.storage.stabilizationTimer), this.storage.stabilizationTimer = setTimeout(() => {
              this.storage.temporarySelection = { from: o, to: s }, console.log(
                "[SelectionPreserve] stabilization timer fired: stableSelection updated",
                this.storage.stableSelection
              );
            }, 50), null;
          }
        }
      })
    ];
  },
  onDestroy() {
    this.storage.stabilizationTimer !== null && (clearTimeout(this.storage.stabilizationTimer), this.storage.stabilizationTimer = null);
  }
}), Ly = (t4, e, n, r, i) => {
  const o = i.rules.find(({ id: u }) => u === r.ruleId);
  if (!o)
    return;
  const s = o.getMarkType(t4);
  if (e > r.to) {
    n.removeMark(r.to, e, s);
    return;
  }
  n.removeMark(
    Math.max(e - 1, 0),
    Math.min(r.to + 1, n.doc.content.size - 1),
    s
  );
}, zy = (t4, e, n, r, i) => {
  const o = i.rules.find(({ id: a }) => a === r.ruleId);
  if (!o)
    return;
  const s = (a) => e.doc.resolve(a).marks().find(({ type: f }) => f === u), u = o.getMarkType(t4), l = s(r.from) ?? s(r.from + 1);
  l && (n.removeMark(r.from, r.to, u), n.addMark(r.from, r.to, l));
}, qy = H.create({
  name: "specialWordSuggestion",
  addOptions() {
    return {
      rules: [],
      onDetect: void 0
    };
  },
  addStorage() {
    return { active: null, position: null };
  },
  addCommands() {
    return {
      applyDetectedSpecialWord: (t4) => ({ state: e, dispatch: n }) => {
        const r = this.options.rules.find((l) => l.id === t4.ruleId);
        if (!r) return false;
        const i = r.getMarkType(this.editor);
        if (!i) return false;
        const o = e.selection.head ?? e.selection.from, s = r.getMatchData(e.doc, o);
        if (!s) return false;
        const u = e.tr;
        if (u.insertText(t4.content, s.from, s.to), t4.attrs) {
          const l = s.from + t4.content.length;
          u.removeMark(s.from, l, i), u.addMark(s.from, l, i.create(t4.attrs ?? {}));
        }
        return n?.(u), t4.content && setTimeout(() => {
          this.editor.chain().insertContent(" ").setMeta("addToHistory", false).run();
        }, 0), true;
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new P({
        appendTransaction: (t4, e, n) => {
          if (!t4.some((u) => u.docChanged || u.selectionSet))
            return null;
          const r = n.tr, i = n.selection.head ?? n.selection.from, o = this.storage.active;
          let s = null;
          for (const u of this.options.rules) {
            const l = u.getMatchData(n.doc, i);
            if (l) {
              s = l;
              break;
            }
          }
          return s && i >= s.from && i <= s.to ? (o && o.ruleId !== s.ruleId && this.options.onDetect?.({ ...o, body: "" }), zy(this.editor, n, r, s, this.options), this.options.onDetect?.(s), this.storage.active = s, this.storage.position = i) : o && (t4.some(
            ({ docChanged: l }) => l
          ) && Ly(this.editor, i, r, o, this.options), this.options.onDetect?.({ ...o, body: "" }), this.storage.active = null, this.storage.position = null), r.steps.length || r.selectionSet ? r : null;
        }
      })
    ];
  }
}), p0 = "setka://account/", of = /^[\p{L}\p{M}\p{N}_-]$/u, $y = /[\p{L}]+(?: [\p{L}]+)?/gu, el = (t4, e) => {
  const n = t4.resolve(e);
  if (!n.parent?.isTextblock) return null;
  const i = n.start(), o = n.end(), s = t4.textBetween(i, o, `
`, `
`), u = e - i;
  return { text: s, blockFrom: i, blockTo: o, caretInBlock: u };
}, jy = (t4, e) => Math.max(0, Math.min(e, t4.content.size)), m0 = (t4, e, n) => {
  const r = Math.max(0, Math.min(t4.length, e));
  let o = Math.max(0, r - 1);
  for (; o > 0 && of.test(t4[o]); ) o--;
  if (t4[o] !== n) return null;
  let s = o + 1;
  for (; s < t4.length && of.test(t4[s]); ) s++;
  const u = t4.slice(o, s);
  return u ? { relFrom: o, relTo: s, body: u } : null;
}, Vy = (t4, e, n, r) => {
  const i = el(t4, e);
  if (!i) return null;
  const { blockFrom: o, blockTo: s } = i, u = (h) => t4.resolve(jy(t4, h)).marks().some(
    (m) => typeof m.attrs?.href == "string" && m.attrs.href.startsWith(n)
  );
  if (!u(e))
    if (u(e - 1))
      e -= 1;
    else if (u(e + 1))
      e += 1;
    else
      return null;
  let l = e;
  for (; l >= o && u(l); ) l--;
  const c = t4.textBetween(l, s, `
`, `
`).match(r)?.[0];
  if (!c)
    return null;
  const f = l + c.length, d = t4.textBetween(l, f, `
`, `
`);
  return {
    relFrom: l - o,
    relTo: f - o,
    body: d
  };
}, Hy = {
  id: "hashtag",
  getMarkType: (t4) => t4?.schema.marks.link ?? null,
  getMatchData(t4, e) {
    const n = el(t4, e);
    if (!n) return null;
    const { text: r, blockFrom: i, caretInBlock: o } = n, s = m0(
      r,
      o,
      "#"
      /* Hashtag */
    );
    if (!s) return null;
    const { relFrom: u, relTo: l, body: a } = s, c = i + u, f = i + l;
    return { from: c, to: f, body: a, ruleId: this.id };
  }
}, Uy = {
  id: "mention",
  getMarkType: (t4) => t4?.schema.marks.link ?? null,
  getMatchData(t4, e) {
    const n = el(t4, e);
    if (!n) return null;
    const { text: r, blockFrom: i, caretInBlock: o } = n, s = Vy(
      t4,
      o,
      p0,
      $y
    ) ?? m0(
      r,
      o,
      "@"
      /* Mention */
    );
    if (!s) return null;
    const { relFrom: u, relTo: l, body: a } = s, c = i + u, f = i + l;
    return { from: c, to: f, body: a, ruleId: this.id };
  }
}, Wy = rn.create({
  name: "strike",
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: false,
        getAttrs: (t4) => t4.includes("line-through") ? {} : false
      }
    ];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return ["s", t4, 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t4 }) => t4.setMark(this.name),
      toggleStrike: () => ({ commands: t4 }) => t4.toggleMark(this.name),
      unsetStrike: () => ({ commands: t4 }) => t4.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  }
}), Ky = rn.create({
  name: "underline",
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: false,
        getAttrs: (t4) => t4.includes("underline") ? {} : false
      }
    ];
  },
  renderHTML({ HTMLAttributes: t4 }) {
    return ["u", t4, 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t4 }) => t4.setMark(this.name),
      toggleUnderline: () => ({ commands: t4 }) => t4.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t4 }) => t4.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), sf = {};
function Jy(t4) {
  let e = sf[t4];
  if (e)
    return e;
  e = sf[t4] = [];
  for (let n = 0; n < 128; n++) {
    const r = String.fromCharCode(n);
    e.push(r);
  }
  for (let n = 0; n < t4.length; n++) {
    const r = t4.charCodeAt(n);
    e[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function en(t4, e) {
  typeof e != "string" && (e = en.defaultChars);
  const n = Jy(e);
  return t4.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let i = "";
    for (let o = 0, s = r.length; o < s; o += 3) {
      const u = parseInt(r.slice(o + 1, o + 3), 16);
      if (u < 128) {
        i += n[u];
        continue;
      }
      if ((u & 224) === 192 && o + 3 < s) {
        const l = parseInt(r.slice(o + 4, o + 6), 16);
        if ((l & 192) === 128) {
          const a = u << 6 & 1984 | l & 63;
          a < 128 ? i += "\uFFFD\uFFFD" : i += String.fromCharCode(a), o += 3;
          continue;
        }
      }
      if ((u & 240) === 224 && o + 6 < s) {
        const l = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16);
        if ((l & 192) === 128 && (a & 192) === 128) {
          const c = u << 12 & 61440 | l << 6 & 4032 | a & 63;
          c < 2048 || c >= 55296 && c <= 57343 ? i += "\uFFFD\uFFFD\uFFFD" : i += String.fromCharCode(c), o += 6;
          continue;
        }
      }
      if ((u & 248) === 240 && o + 9 < s) {
        const l = parseInt(r.slice(o + 4, o + 6), 16), a = parseInt(r.slice(o + 7, o + 9), 16), c = parseInt(r.slice(o + 10, o + 12), 16);
        if ((l & 192) === 128 && (a & 192) === 128 && (c & 192) === 128) {
          let f = u << 18 & 1835008 | l << 12 & 258048 | a << 6 & 4032 | c & 63;
          f < 65536 || f > 1114111 ? i += "\uFFFD\uFFFD\uFFFD\uFFFD" : (f -= 65536, i += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), o += 9;
          continue;
        }
      }
      i += "\uFFFD";
    }
    return i;
  });
}
en.defaultChars = ";/?:@&=+$,#";
en.componentChars = "";
const uf = {};
function Gy(t4) {
  let e = uf[t4];
  if (e)
    return e;
  e = uf[t4] = [];
  for (let n = 0; n < 128; n++) {
    const r = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(r) ? e.push(r) : e.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < t4.length; n++)
    e[t4.charCodeAt(n)] = t4[n];
  return e;
}
function Jn(t4, e, n) {
  typeof e != "string" && (n = e, e = Jn.defaultChars), typeof n > "u" && (n = true);
  const r = Gy(e);
  let i = "";
  for (let o = 0, s = t4.length; o < s; o++) {
    const u = t4.charCodeAt(o);
    if (n && u === 37 && o + 2 < s && /^[0-9a-f]{2}$/i.test(t4.slice(o + 1, o + 3))) {
      i += t4.slice(o, o + 3), o += 2;
      continue;
    }
    if (u < 128) {
      i += r[u];
      continue;
    }
    if (u >= 55296 && u <= 57343) {
      if (u >= 55296 && u <= 56319 && o + 1 < s) {
        const l = t4.charCodeAt(o + 1);
        if (l >= 56320 && l <= 57343) {
          i += encodeURIComponent(t4[o] + t4[o + 1]), o++;
          continue;
        }
      }
      i += "%EF%BF%BD";
      continue;
    }
    i += encodeURIComponent(t4[o]);
  }
  return i;
}
Jn.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Jn.componentChars = "-_.!~*'()";
function tl(t4) {
  let e = "";
  return e += t4.protocol || "", e += t4.slashes ? "//" : "", e += t4.auth ? t4.auth + "@" : "", t4.hostname && t4.hostname.indexOf(":") !== -1 ? e += "[" + t4.hostname + "]" : e += t4.hostname || "", e += t4.port ? ":" + t4.port : "", e += t4.pathname || "", e += t4.search || "", e += t4.hash || "", e;
}
function ni() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Zy = /^([a-z0-9.+-]+:)/i, Yy = /:[0-9]*$/, Qy = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Xy = ["<", ">", '"', "`", " ", "\r", `
`, "	"], e3 = ["{", "}", "|", "\\", "^", "`"].concat(Xy), t3 = ["'"].concat(e3), lf = ["%", "/", "?", ";", "#"].concat(t3), af = ["/", "?", "#"], n3 = 255, cf = /^[+a-z0-9A-Z_-]{0,63}$/, r3 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, ff = {
  javascript: true,
  "javascript:": true
}, df = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function nl(t4, e) {
  if (t4 && t4 instanceof ni) return t4;
  const n = new ni();
  return n.parse(t4, e), n;
}
ni.prototype.parse = function(t4, e) {
  let n, r, i, o = t4;
  if (o = o.trim(), !e && t4.split("#").length === 1) {
    const a = Qy.exec(o);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  let s = Zy.exec(o);
  if (s && (s = s[0], n = s.toLowerCase(), this.protocol = s, o = o.substr(s.length)), (e || s || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = o.substr(0, 2) === "//", i && !(s && ff[s]) && (o = o.substr(2), this.slashes = true)), !ff[s] && (i || s && !df[s])) {
    let a = -1;
    for (let p = 0; p < af.length; p++)
      r = o.indexOf(af[p]), r !== -1 && (a === -1 || r < a) && (a = r);
    let c, f;
    a === -1 ? f = o.lastIndexOf("@") : f = o.lastIndexOf("@", a), f !== -1 && (c = o.slice(0, f), o = o.slice(f + 1), this.auth = c), a = -1;
    for (let p = 0; p < lf.length; p++)
      r = o.indexOf(lf[p]), r !== -1 && (a === -1 || r < a) && (a = r);
    a === -1 && (a = o.length), o[a - 1] === ":" && a--;
    const d = o.slice(0, a);
    o = o.slice(a), this.parseHost(d), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const p = this.hostname.split(/\./);
      for (let m = 0, g = p.length; m < g; m++) {
        const b = p[m];
        if (b && !b.match(cf)) {
          let y = "";
          for (let x = 0, k = b.length; x < k; x++)
            b.charCodeAt(x) > 127 ? y += "x" : y += b[x];
          if (!y.match(cf)) {
            const x = p.slice(0, m), k = p.slice(m + 1), C = b.match(r3);
            C && (x.push(C[1]), k.unshift(C[2])), k.length && (o = k.join(".") + o), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > n3 && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const u = o.indexOf("#");
  u !== -1 && (this.hash = o.substr(u), o = o.slice(0, u));
  const l = o.indexOf("?");
  return l !== -1 && (this.search = o.substr(l), o = o.slice(0, l)), o && (this.pathname = o), df[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
ni.prototype.parseHost = function(t4) {
  let e = Yy.exec(t4);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t4 = t4.substr(0, t4.length - e.length)), t4 && (this.hostname = t4);
};
const i3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: en,
  encode: Jn,
  format: tl,
  parse: nl
}, Symbol.toStringTag, { value: "Module" })), g0 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, b0 = /[\0-\x1F\x7F-\x9F]/, o3 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, rl = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, y0 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, x0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, s3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: g0,
  Cc: b0,
  Cf: o3,
  P: rl,
  S: y0,
  Z: x0
}, Symbol.toStringTag, { value: "Module" })), u3 = new Uint16Array(
  // prettier-ignore
  '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((t4) => t4.charCodeAt(0))
), l3 = new Uint16Array(
  // prettier-ignore
  "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((t4) => t4.charCodeAt(0))
);
var Ss;
const a3 = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), c3 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Ss = String.fromCodePoint) !== null && Ss !== void 0 ? Ss : function(t4) {
    let e = "";
    return t4 > 65535 && (t4 -= 65536, e += String.fromCharCode(t4 >>> 10 & 1023 | 55296), t4 = 56320 | t4 & 1023), e += String.fromCharCode(t4), e;
  }
);
function f3(t4) {
  var e;
  return t4 >= 55296 && t4 <= 57343 || t4 > 1114111 ? 65533 : (e = a3.get(t4)) !== null && e !== void 0 ? e : t4;
}
var G;
(function(t4) {
  t4[t4.NUM = 35] = "NUM", t4[t4.SEMI = 59] = "SEMI", t4[t4.EQUALS = 61] = "EQUALS", t4[t4.ZERO = 48] = "ZERO", t4[t4.NINE = 57] = "NINE", t4[t4.LOWER_A = 97] = "LOWER_A", t4[t4.LOWER_F = 102] = "LOWER_F", t4[t4.LOWER_X = 120] = "LOWER_X", t4[t4.LOWER_Z = 122] = "LOWER_Z", t4[t4.UPPER_A = 65] = "UPPER_A", t4[t4.UPPER_F = 70] = "UPPER_F", t4[t4.UPPER_Z = 90] = "UPPER_Z";
})(G || (G = {}));
const d3 = 32;
var ft;
(function(t4) {
  t4[t4.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t4[t4.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t4[t4.JUMP_TABLE = 127] = "JUMP_TABLE";
})(ft || (ft = {}));
function su(t4) {
  return t4 >= G.ZERO && t4 <= G.NINE;
}
function h3(t4) {
  return t4 >= G.UPPER_A && t4 <= G.UPPER_F || t4 >= G.LOWER_A && t4 <= G.LOWER_F;
}
function p3(t4) {
  return t4 >= G.UPPER_A && t4 <= G.UPPER_Z || t4 >= G.LOWER_A && t4 <= G.LOWER_Z || su(t4);
}
function m3(t4) {
  return t4 === G.EQUALS || p3(t4);
}
var K;
(function(t4) {
  t4[t4.EntityStart = 0] = "EntityStart", t4[t4.NumericStart = 1] = "NumericStart", t4[t4.NumericDecimal = 2] = "NumericDecimal", t4[t4.NumericHex = 3] = "NumericHex", t4[t4.NamedEntity = 4] = "NamedEntity";
})(K || (K = {}));
var ut;
(function(t4) {
  t4[t4.Legacy = 0] = "Legacy", t4[t4.Strict = 1] = "Strict", t4[t4.Attribute = 2] = "Attribute";
})(ut || (ut = {}));
class g3 {
  constructor(e, n, r) {
    this.decodeTree = e, this.emitCodePoint = n, this.errors = r, this.state = K.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ut.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = K.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, n) {
    switch (this.state) {
      case K.EntityStart:
        return e.charCodeAt(n) === G.NUM ? (this.state = K.NumericStart, this.consumed += 1, this.stateNumericStart(e, n + 1)) : (this.state = K.NamedEntity, this.stateNamedEntity(e, n));
      case K.NumericStart:
        return this.stateNumericStart(e, n);
      case K.NumericDecimal:
        return this.stateNumericDecimal(e, n);
      case K.NumericHex:
        return this.stateNumericHex(e, n);
      case K.NamedEntity:
        return this.stateNamedEntity(e, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, n) {
    return n >= e.length ? -1 : (e.charCodeAt(n) | d3) === G.LOWER_X ? (this.state = K.NumericHex, this.consumed += 1, this.stateNumericHex(e, n + 1)) : (this.state = K.NumericDecimal, this.stateNumericDecimal(e, n));
  }
  addToNumericResult(e, n, r, i) {
    if (n !== r) {
      const o = r - n;
      this.result = this.result * Math.pow(i, o) + parseInt(e.substr(n, o), i), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, n) {
    const r = n;
    for (; n < e.length; ) {
      const i = e.charCodeAt(n);
      if (su(i) || h3(i))
        n += 1;
      else
        return this.addToNumericResult(e, r, n, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(e, r, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, n) {
    const r = n;
    for (; n < e.length; ) {
      const i = e.charCodeAt(n);
      if (su(i))
        n += 1;
      else
        return this.addToNumericResult(e, r, n, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(e, r, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, n) {
    var r;
    if (this.consumed <= n)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === G.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === ut.Strict)
      return 0;
    return this.emitCodePoint(f3(this.result), this.consumed), this.errors && (e !== G.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, n) {
    const { decodeTree: r } = this;
    let i = r[this.treeIndex], o = (i & ft.VALUE_LENGTH) >> 14;
    for (; n < e.length; n++, this.excess++) {
      const s = e.charCodeAt(n);
      if (this.treeIndex = b3(r, i, this.treeIndex + Math.max(1, o), s), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === ut.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        m3(s)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = r[this.treeIndex], o = (i & ft.VALUE_LENGTH) >> 14, o !== 0) {
        if (s === G.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== ut.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: n, decodeTree: r } = this, i = (r[n] & ft.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, n, r) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(n === 1 ? i[e] & ~ft.VALUE_LENGTH : i[e + 1], r), n === 3 && this.emitCodePoint(i[e + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case K.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== ut.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case K.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case K.NumericHex:
        return this.emitNumericEntity(0, 3);
      case K.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case K.EntityStart:
        return 0;
    }
  }
}
function k0(t4) {
  let e = "";
  const n = new g3(t4, (r) => e += c3(r));
  return function(i, o) {
    let s = 0, u = 0;
    for (; (u = i.indexOf("&", u)) >= 0; ) {
      e += i.slice(s, u), n.startEntity(o);
      const a = n.write(
        i,
        // Skip the "&"
        u + 1
      );
      if (a < 0) {
        s = u + n.end();
        break;
      }
      s = u + a, u = a === 0 ? s + 1 : s;
    }
    const l = e + i.slice(s);
    return e = "", l;
  };
}
function b3(t4, e, n, r) {
  const i = (e & ft.BRANCH_LENGTH) >> 7, o = e & ft.JUMP_TABLE;
  if (i === 0)
    return o !== 0 && r === o ? n : -1;
  if (o) {
    const l = r - o;
    return l < 0 || l >= i ? -1 : t4[n + l] - 1;
  }
  let s = n, u = s + i - 1;
  for (; s <= u; ) {
    const l = s + u >>> 1, a = t4[l];
    if (a < r)
      s = l + 1;
    else if (a > r)
      u = l - 1;
    else
      return t4[l + i];
  }
  return -1;
}
const y3 = k0(u3);
k0(l3);
function C0(t4, e = ut.Legacy) {
  return y3(t4, e);
}
function x3(t4) {
  return Object.prototype.toString.call(t4);
}
function il(t4) {
  return x3(t4) === "[object String]";
}
const k3 = Object.prototype.hasOwnProperty;
function C3(t4, e) {
  return k3.call(t4, e);
}
function Si(t4) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    if (n) {
      if (typeof n != "object")
        throw new TypeError(n + "must be object");
      Object.keys(n).forEach(function(r) {
        t4[r] = n[r];
      });
    }
  }), t4;
}
function v0(t4, e, n) {
  return [].concat(t4.slice(0, e), n, t4.slice(e + 1));
}
function ol(t4) {
  return !(t4 >= 55296 && t4 <= 57343 || t4 >= 64976 && t4 <= 65007 || (t4 & 65535) === 65535 || (t4 & 65535) === 65534 || t4 >= 0 && t4 <= 8 || t4 === 11 || t4 >= 14 && t4 <= 31 || t4 >= 127 && t4 <= 159 || t4 > 1114111);
}
function ri(t4) {
  if (t4 > 65535) {
    t4 -= 65536;
    const e = 55296 + (t4 >> 10), n = 56320 + (t4 & 1023);
    return String.fromCharCode(e, n);
  }
  return String.fromCharCode(t4);
}
const E0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, v3 = /&([a-z#][a-z0-9]{1,31});/gi, E3 = new RegExp(E0.source + "|" + v3.source, "gi"), S3 = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function w3(t4, e) {
  if (e.charCodeAt(0) === 35 && S3.test(e)) {
    const r = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return ol(r) ? ri(r) : t4;
  }
  const n = C0(t4);
  return n !== t4 ? n : t4;
}
function A3(t4) {
  return t4.indexOf("\\") < 0 ? t4 : t4.replace(E0, "$1");
}
function tn(t4) {
  return t4.indexOf("\\") < 0 && t4.indexOf("&") < 0 ? t4 : t4.replace(E3, function(e, n, r) {
    return n || w3(e, r);
  });
}
const D3 = /[&<>"]/, T3 = /[&<>"]/g, M3 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function _3(t4) {
  return M3[t4];
}
function bt(t4) {
  return D3.test(t4) ? t4.replace(T3, _3) : t4;
}
const O3 = /[.?*+^$[\]\\(){}|-]/g;
function N3(t4) {
  return t4.replace(O3, "\\$&");
}
function B(t4) {
  switch (t4) {
    case 9:
    case 32:
      return true;
  }
  return false;
}
function Ln(t4) {
  if (t4 >= 8192 && t4 <= 8202)
    return true;
  switch (t4) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return true;
  }
  return false;
}
function zn(t4) {
  return rl.test(t4) || y0.test(t4);
}
function qn(t4) {
  switch (t4) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function wi(t4) {
  return t4 = t4.trim().replace(/\s+/g, " "), "\u1E9E".toLowerCase() === "\u1E7E" && (t4 = t4.replace(/ẞ/g, "\xDF")), t4.toLowerCase().toUpperCase();
}
const R3 = { mdurl: i3, ucmicro: s3 }, I3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: v0,
  assign: Si,
  escapeHtml: bt,
  escapeRE: N3,
  fromCodePoint: ri,
  has: C3,
  isMdAsciiPunct: qn,
  isPunctChar: zn,
  isSpace: B,
  isString: il,
  isValidEntityCode: ol,
  isWhiteSpace: Ln,
  lib: R3,
  normalizeReference: wi,
  unescapeAll: tn,
  unescapeMd: A3
}, Symbol.toStringTag, { value: "Module" }));
function F3(t4, e, n) {
  let r, i, o, s;
  const u = t4.posMax, l = t4.pos;
  for (t4.pos = e + 1, r = 1; t4.pos < u; ) {
    if (o = t4.src.charCodeAt(t4.pos), o === 93 && (r--, r === 0)) {
      i = true;
      break;
    }
    if (s = t4.pos, t4.md.inline.skipToken(t4), o === 91) {
      if (s === t4.pos - 1)
        r++;
      else if (n)
        return t4.pos = l, -1;
    }
  }
  let a = -1;
  return i && (a = t4.pos), t4.pos = l, a;
}
function P3(t4, e, n) {
  let r, i = e;
  const o = {
    ok: false,
    pos: 0,
    str: ""
  };
  if (t4.charCodeAt(i) === 60) {
    for (i++; i < n; ) {
      if (r = t4.charCodeAt(i), r === 10 || r === 60)
        return o;
      if (r === 62)
        return o.pos = i + 1, o.str = tn(t4.slice(e + 1, i)), o.ok = true, o;
      if (r === 92 && i + 1 < n) {
        i += 2;
        continue;
      }
      i++;
    }
    return o;
  }
  let s = 0;
  for (; i < n && (r = t4.charCodeAt(i), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && i + 1 < n) {
      if (t4.charCodeAt(i + 1) === 32)
        break;
      i += 2;
      continue;
    }
    if (r === 40 && (s++, s > 32))
      return o;
    if (r === 41) {
      if (s === 0)
        break;
      s--;
    }
    i++;
  }
  return e === i || s !== 0 || (o.str = tn(t4.slice(e, i)), o.pos = i, o.ok = true), o;
}
function B3(t4, e, n, r) {
  let i, o = e;
  const s = {
    // if `true`, this is a valid link title
    ok: false,
    // if `true`, this link can be continued on the next line
    can_continue: false,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (r)
    s.str = r.str, s.marker = r.marker;
  else {
    if (o >= n)
      return s;
    let u = t4.charCodeAt(o);
    if (u !== 34 && u !== 39 && u !== 40)
      return s;
    e++, o++, u === 40 && (u = 41), s.marker = u;
  }
  for (; o < n; ) {
    if (i = t4.charCodeAt(o), i === s.marker)
      return s.pos = o + 1, s.str += tn(t4.slice(e, o)), s.ok = true, s;
    if (i === 40 && s.marker === 41)
      return s;
    i === 92 && o + 1 < n && o++, o++;
  }
  return s.can_continue = true, s.str += tn(t4.slice(e, o)), s;
}
const L3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: P3,
  parseLinkLabel: F3,
  parseLinkTitle: B3
}, Symbol.toStringTag, { value: "Module" })), ze = {};
ze.code_inline = function(t4, e, n, r, i) {
  const o = t4[e];
  return "<code" + i.renderAttrs(o) + ">" + bt(o.content) + "</code>";
};
ze.code_block = function(t4, e, n, r, i) {
  const o = t4[e];
  return "<pre" + i.renderAttrs(o) + "><code>" + bt(t4[e].content) + `</code></pre>
`;
};
ze.fence = function(t4, e, n, r, i) {
  const o = t4[e], s = o.info ? tn(o.info).trim() : "";
  let u = "", l = "";
  if (s) {
    const c = s.split(/(\s+)/g);
    u = c[0], l = c.slice(2).join("");
  }
  let a;
  if (n.highlight ? a = n.highlight(o.content, u, l) || bt(o.content) : a = bt(o.content), a.indexOf("<pre") === 0)
    return a + `
`;
  if (s) {
    const c = o.attrIndex("class"), f = o.attrs ? o.attrs.slice() : [];
    c < 0 ? f.push(["class", n.langPrefix + u]) : (f[c] = f[c].slice(), f[c][1] += " " + n.langPrefix + u);
    const d = {
      attrs: f
    };
    return `<pre><code${i.renderAttrs(d)}>${a}</code></pre>
`;
  }
  return `<pre><code${i.renderAttrs(o)}>${a}</code></pre>
`;
};
ze.image = function(t4, e, n, r, i) {
  const o = t4[e];
  return o.attrs[o.attrIndex("alt")][1] = i.renderInlineAsText(o.children, n, r), i.renderToken(t4, e, n);
};
ze.hardbreak = function(t4, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
ze.softbreak = function(t4, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
ze.text = function(t4, e) {
  return bt(t4[e].content);
};
ze.html_block = function(t4, e) {
  return t4[e].content;
};
ze.html_inline = function(t4, e) {
  return t4[e].content;
};
function on() {
  this.rules = Si({}, ze);
}
on.prototype.renderAttrs = function(e) {
  let n, r, i;
  if (!e.attrs)
    return "";
  for (i = "", n = 0, r = e.attrs.length; n < r; n++)
    i += " " + bt(e.attrs[n][0]) + '="' + bt(e.attrs[n][1]) + '"';
  return i;
};
on.prototype.renderToken = function(e, n, r) {
  const i = e[n];
  let o = "";
  if (i.hidden)
    return "";
  i.block && i.nesting !== -1 && n && e[n - 1].hidden && (o += `
`), o += (i.nesting === -1 ? "</" : "<") + i.tag, o += this.renderAttrs(i), i.nesting === 0 && r.xhtmlOut && (o += " /");
  let s = false;
  if (i.block && (s = true, i.nesting === 1 && n + 1 < e.length)) {
    const u = e[n + 1];
    (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === i.tag) && (s = false);
  }
  return o += s ? `>
` : ">", o;
};
on.prototype.renderInline = function(t4, e, n) {
  let r = "";
  const i = this.rules;
  for (let o = 0, s = t4.length; o < s; o++) {
    const u = t4[o].type;
    typeof i[u] < "u" ? r += i[u](t4, o, e, n, this) : r += this.renderToken(t4, o, e);
  }
  return r;
};
on.prototype.renderInlineAsText = function(t4, e, n) {
  let r = "";
  for (let i = 0, o = t4.length; i < o; i++)
    switch (t4[i].type) {
      case "text":
        r += t4[i].content;
        break;
      case "image":
        r += this.renderInlineAsText(t4[i].children, e, n);
        break;
      case "html_inline":
      case "html_block":
        r += t4[i].content;
        break;
      case "softbreak":
      case "hardbreak":
        r += `
`;
        break;
    }
  return r;
};
on.prototype.render = function(t4, e, n) {
  let r = "";
  const i = this.rules;
  for (let o = 0, s = t4.length; o < s; o++) {
    const u = t4[o].type;
    u === "inline" ? r += this.renderInline(t4[o].children, e, n) : typeof i[u] < "u" ? r += i[u](t4, o, e, n, this) : r += this.renderToken(t4, o, e, n);
  }
  return r;
};
function he() {
  this.__rules__ = [], this.__cache__ = null;
}
he.prototype.__find__ = function(t4) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t4)
      return e;
  return -1;
};
he.prototype.__compile__ = function() {
  const t4 = this, e = [""];
  t4.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(r) {
      e.indexOf(r) < 0 && e.push(r);
    });
  }), t4.__cache__ = {}, e.forEach(function(n) {
    t4.__cache__[n] = [], t4.__rules__.forEach(function(r) {
      r.enabled && (n && r.alt.indexOf(n) < 0 || t4.__cache__[n].push(r.fn));
    });
  });
};
he.prototype.at = function(t4, e, n) {
  const r = this.__find__(t4), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t4);
  this.__rules__[r].fn = e, this.__rules__[r].alt = i.alt || [], this.__cache__ = null;
};
he.prototype.before = function(t4, e, n, r) {
  const i = this.__find__(t4), o = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + t4);
  this.__rules__.splice(i, 0, {
    name: e,
    enabled: true,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
he.prototype.after = function(t4, e, n, r) {
  const i = this.__find__(t4), o = r || {};
  if (i === -1)
    throw new Error("Parser rule not found: " + t4);
  this.__rules__.splice(i + 1, 0, {
    name: e,
    enabled: true,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
he.prototype.push = function(t4, e, n) {
  const r = n || {};
  this.__rules__.push({
    name: t4,
    enabled: true,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
he.prototype.enable = function(t4, e) {
  Array.isArray(t4) || (t4 = [t4]);
  const n = [];
  return t4.forEach(function(r) {
    const i = this.__find__(r);
    if (i < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[i].enabled = true, n.push(r);
  }, this), this.__cache__ = null, n;
};
he.prototype.enableOnly = function(t4, e) {
  Array.isArray(t4) || (t4 = [t4]), this.__rules__.forEach(function(n) {
    n.enabled = false;
  }), this.enable(t4, e);
};
he.prototype.disable = function(t4, e) {
  Array.isArray(t4) || (t4 = [t4]);
  const n = [];
  return t4.forEach(function(r) {
    const i = this.__find__(r);
    if (i < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[i].enabled = false, n.push(r);
  }, this), this.__cache__ = null, n;
};
he.prototype.getRules = function(t4) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t4] || [];
};
function Me(t4, e, n) {
  this.type = t4, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
}
Me.prototype.attrIndex = function(e) {
  if (!this.attrs)
    return -1;
  const n = this.attrs;
  for (let r = 0, i = n.length; r < i; r++)
    if (n[r][0] === e)
      return r;
  return -1;
};
Me.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
Me.prototype.attrSet = function(e, n) {
  const r = this.attrIndex(e), i = [e, n];
  r < 0 ? this.attrPush(i) : this.attrs[r] = i;
};
Me.prototype.attrGet = function(e) {
  const n = this.attrIndex(e);
  let r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
Me.prototype.attrJoin = function(e, n) {
  const r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
function S0(t4, e, n) {
  this.src = t4, this.env = n, this.tokens = [], this.inlineMode = false, this.md = e;
}
S0.prototype.Token = Me;
const z3 = /\r\n?|\n/g, q3 = /\0/g;
function $3(t4) {
  let e;
  e = t4.src.replace(z3, `
`), e = e.replace(q3, "\uFFFD"), t4.src = e;
}
function j3(t4) {
  let e;
  t4.inlineMode ? (e = new t4.Token("inline", "", 0), e.content = t4.src, e.map = [0, 1], e.children = [], t4.tokens.push(e)) : t4.md.block.parse(t4.src, t4.md, t4.env, t4.tokens);
}
function V3(t4) {
  const e = t4.tokens;
  for (let n = 0, r = e.length; n < r; n++) {
    const i = e[n];
    i.type === "inline" && t4.md.inline.parse(i.content, t4.md, t4.env, i.children);
  }
}
function H3(t4) {
  return /^<a[>\s]/i.test(t4);
}
function U3(t4) {
  return /^<\/a\s*>/i.test(t4);
}
function W3(t4) {
  const e = t4.tokens;
  if (t4.md.options.linkify)
    for (let n = 0, r = e.length; n < r; n++) {
      if (e[n].type !== "inline" || !t4.md.linkify.pretest(e[n].content))
        continue;
      let i = e[n].children, o = 0;
      for (let s = i.length - 1; s >= 0; s--) {
        const u = i[s];
        if (u.type === "link_close") {
          for (s--; i[s].level !== u.level && i[s].type !== "link_open"; )
            s--;
          continue;
        }
        if (u.type === "html_inline" && (H3(u.content) && o > 0 && o--, U3(u.content) && o++), !(o > 0) && u.type === "text" && t4.md.linkify.test(u.content)) {
          const l = u.content;
          let a = t4.md.linkify.match(l);
          const c = [];
          let f = u.level, d = 0;
          a.length > 0 && a[0].index === 0 && s > 0 && i[s - 1].type === "text_special" && (a = a.slice(1));
          for (let h = 0; h < a.length; h++) {
            const p = a[h].url, m = t4.md.normalizeLink(p);
            if (!t4.md.validateLink(m))
              continue;
            let g = a[h].text;
            a[h].schema ? a[h].schema === "mailto:" && !/^mailto:/i.test(g) ? g = t4.md.normalizeLinkText("mailto:" + g).replace(/^mailto:/, "") : g = t4.md.normalizeLinkText(g) : g = t4.md.normalizeLinkText("http://" + g).replace(/^http:\/\//, "");
            const b = a[h].index;
            if (b > d) {
              const C = new t4.Token("text", "", 0);
              C.content = l.slice(d, b), C.level = f, c.push(C);
            }
            const y = new t4.Token("link_open", "a", 1);
            y.attrs = [["href", m]], y.level = f++, y.markup = "linkify", y.info = "auto", c.push(y);
            const x = new t4.Token("text", "", 0);
            x.content = g, x.level = f, c.push(x);
            const k = new t4.Token("link_close", "a", -1);
            k.level = --f, k.markup = "linkify", k.info = "auto", c.push(k), d = a[h].lastIndex;
          }
          if (d < l.length) {
            const h = new t4.Token("text", "", 0);
            h.content = l.slice(d), h.level = f, c.push(h);
          }
          e[n].children = i = v0(i, s, c);
        }
      }
    }
}
const w0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, K3 = /\((c|tm|r)\)/i, J3 = /\((c|tm|r)\)/ig, G3 = {
  c: "\xA9",
  r: "\xAE",
  tm: "\u2122"
};
function Z3(t4, e) {
  return G3[e.toLowerCase()];
}
function Y3(t4) {
  let e = 0;
  for (let n = t4.length - 1; n >= 0; n--) {
    const r = t4[n];
    r.type === "text" && !e && (r.content = r.content.replace(J3, Z3)), r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
  }
}
function Q3(t4) {
  let e = 0;
  for (let n = t4.length - 1; n >= 0; n--) {
    const r = t4[n];
    r.type === "text" && !e && w0.test(r.content) && (r.content = r.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013")), r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
  }
}
function X3(t4) {
  let e;
  if (t4.md.options.typographer)
    for (e = t4.tokens.length - 1; e >= 0; e--)
      t4.tokens[e].type === "inline" && (K3.test(t4.tokens[e].content) && Y3(t4.tokens[e].children), w0.test(t4.tokens[e].content) && Q3(t4.tokens[e].children));
}
const ex = /['"]/, hf = /['"]/g, pf = "\u2019";
function lr(t4, e, n) {
  return t4.slice(0, e) + n + t4.slice(e + 1);
}
function tx(t4, e) {
  let n;
  const r = [];
  for (let i = 0; i < t4.length; i++) {
    const o = t4[i], s = t4[i].level;
    for (n = r.length - 1; n >= 0 && !(r[n].level <= s); n--)
      ;
    if (r.length = n + 1, o.type !== "text")
      continue;
    let u = o.content, l = 0, a = u.length;
    e:
      for (; l < a; ) {
        hf.lastIndex = l;
        const c = hf.exec(u);
        if (!c)
          break;
        let f = true, d = true;
        l = c.index + 1;
        const h = c[0] === "'";
        let p = 32;
        if (c.index - 1 >= 0)
          p = u.charCodeAt(c.index - 1);
        else
          for (n = i - 1; n >= 0 && !(t4[n].type === "softbreak" || t4[n].type === "hardbreak"); n--)
            if (t4[n].content) {
              p = t4[n].content.charCodeAt(t4[n].content.length - 1);
              break;
            }
        let m = 32;
        if (l < a)
          m = u.charCodeAt(l);
        else
          for (n = i + 1; n < t4.length && !(t4[n].type === "softbreak" || t4[n].type === "hardbreak"); n++)
            if (t4[n].content) {
              m = t4[n].content.charCodeAt(0);
              break;
            }
        const g = qn(p) || zn(String.fromCharCode(p)), b = qn(m) || zn(String.fromCharCode(m)), y = Ln(p), x = Ln(m);
        if (x ? f = false : b && (y || g || (f = false)), y ? d = false : g && (x || b || (d = false)), m === 34 && c[0] === '"' && p >= 48 && p <= 57 && (d = f = false), f && d && (f = g, d = b), !f && !d) {
          h && (o.content = lr(o.content, c.index, pf));
          continue;
        }
        if (d)
          for (n = r.length - 1; n >= 0; n--) {
            let k = r[n];
            if (r[n].level < s)
              break;
            if (k.single === h && r[n].level === s) {
              k = r[n];
              let C, S;
              h ? (C = e.md.options.quotes[2], S = e.md.options.quotes[3]) : (C = e.md.options.quotes[0], S = e.md.options.quotes[1]), o.content = lr(o.content, c.index, S), t4[k.token].content = lr(
                t4[k.token].content,
                k.pos,
                C
              ), l += S.length - 1, k.token === i && (l += C.length - 1), u = o.content, a = u.length, r.length = n;
              continue e;
            }
          }
        f ? r.push({
          token: i,
          pos: c.index,
          single: h,
          level: s
        }) : d && h && (o.content = lr(o.content, c.index, pf));
      }
  }
}
function nx(t4) {
  if (t4.md.options.typographer)
    for (let e = t4.tokens.length - 1; e >= 0; e--)
      t4.tokens[e].type !== "inline" || !ex.test(t4.tokens[e].content) || tx(t4.tokens[e].children, t4);
}
function rx(t4) {
  let e, n;
  const r = t4.tokens, i = r.length;
  for (let o = 0; o < i; o++) {
    if (r[o].type !== "inline") continue;
    const s = r[o].children, u = s.length;
    for (e = 0; e < u; e++)
      s[e].type === "text_special" && (s[e].type = "text");
    for (e = n = 0; e < u; e++)
      s[e].type === "text" && e + 1 < u && s[e + 1].type === "text" ? s[e + 1].content = s[e].content + s[e + 1].content : (e !== n && (s[n] = s[e]), n++);
    e !== n && (s.length = n);
  }
}
const ws = [
  ["normalize", $3],
  ["block", j3],
  ["inline", V3],
  ["linkify", W3],
  ["replacements", X3],
  ["smartquotes", nx],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", rx]
];
function sl() {
  this.ruler = new he();
  for (let t4 = 0; t4 < ws.length; t4++)
    this.ruler.push(ws[t4][0], ws[t4][1]);
}
sl.prototype.process = function(t4) {
  const e = this.ruler.getRules("");
  for (let n = 0, r = e.length; n < r; n++)
    e[n](t4);
};
sl.prototype.State = S0;
function qe(t4, e, n, r) {
  this.src = t4, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const i = this.src;
  for (let o = 0, s = 0, u = 0, l = 0, a = i.length, c = false; s < a; s++) {
    const f = i.charCodeAt(s);
    if (!c)
      if (B(f)) {
        u++, f === 9 ? l += 4 - l % 4 : l++;
        continue;
      } else
        c = true;
    (f === 10 || s === a - 1) && (f !== 10 && s++, this.bMarks.push(o), this.eMarks.push(s), this.tShift.push(u), this.sCount.push(l), this.bsCount.push(0), c = false, u = 0, l = 0, o = s + 1);
  }
  this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
qe.prototype.push = function(t4, e, n) {
  const r = new Me(t4, e, n);
  return r.block = true, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
qe.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
qe.prototype.skipEmptyLines = function(e) {
  for (let n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
qe.prototype.skipSpaces = function(e) {
  for (let n = this.src.length; e < n; e++) {
    const r = this.src.charCodeAt(e);
    if (!B(r))
      break;
  }
  return e;
};
qe.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!B(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
qe.prototype.skipChars = function(e, n) {
  for (let r = this.src.length; e < r && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
qe.prototype.skipCharsBack = function(e, n, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
qe.prototype.getLines = function(e, n, r, i) {
  if (e >= n)
    return "";
  const o = new Array(n - e);
  for (let s = 0, u = e; u < n; u++, s++) {
    let l = 0;
    const a = this.bMarks[u];
    let c = a, f;
    for (u + 1 < n || i ? f = this.eMarks[u] + 1 : f = this.eMarks[u]; c < f && l < r; ) {
      const d = this.src.charCodeAt(c);
      if (B(d))
        d === 9 ? l += 4 - (l + this.bsCount[u]) % 4 : l++;
      else if (c - a < this.tShift[u])
        l++;
      else
        break;
      c++;
    }
    l > r ? o[s] = new Array(l - r + 1).join(" ") + this.src.slice(c, f) : o[s] = this.src.slice(c, f);
  }
  return o.join("");
};
qe.prototype.Token = Me;
const ix = 65536;
function As(t4, e) {
  const n = t4.bMarks[e] + t4.tShift[e], r = t4.eMarks[e];
  return t4.src.slice(n, r);
}
function mf(t4) {
  const e = [], n = t4.length;
  let r = 0, i = t4.charCodeAt(r), o = false, s = 0, u = "";
  for (; r < n; )
    i === 124 && (o ? (u += t4.substring(s, r - 1), s = r) : (e.push(u + t4.substring(s, r)), u = "", s = r + 1)), o = i === 92, r++, i = t4.charCodeAt(r);
  return e.push(u + t4.substring(s)), e;
}
function ox(t4, e, n, r) {
  if (e + 2 > n)
    return false;
  let i = e + 1;
  if (t4.sCount[i] < t4.blkIndent || t4.sCount[i] - t4.blkIndent >= 4)
    return false;
  let o = t4.bMarks[i] + t4.tShift[i];
  if (o >= t4.eMarks[i])
    return false;
  const s = t4.src.charCodeAt(o++);
  if (s !== 124 && s !== 45 && s !== 58 || o >= t4.eMarks[i])
    return false;
  const u = t4.src.charCodeAt(o++);
  if (u !== 124 && u !== 45 && u !== 58 && !B(u) || s === 45 && B(u))
    return false;
  for (; o < t4.eMarks[i]; ) {
    const k = t4.src.charCodeAt(o);
    if (k !== 124 && k !== 45 && k !== 58 && !B(k))
      return false;
    o++;
  }
  let l = As(t4, e + 1), a = l.split("|");
  const c = [];
  for (let k = 0; k < a.length; k++) {
    const C = a[k].trim();
    if (!C) {
      if (k === 0 || k === a.length - 1)
        continue;
      return false;
    }
    if (!/^:?-+:?$/.test(C))
      return false;
    C.charCodeAt(C.length - 1) === 58 ? c.push(C.charCodeAt(0) === 58 ? "center" : "right") : C.charCodeAt(0) === 58 ? c.push("left") : c.push("");
  }
  if (l = As(t4, e).trim(), l.indexOf("|") === -1 || t4.sCount[e] - t4.blkIndent >= 4)
    return false;
  a = mf(l), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop();
  const f = a.length;
  if (f === 0 || f !== c.length)
    return false;
  if (r)
    return true;
  const d = t4.parentType;
  t4.parentType = "table";
  const h = t4.md.block.ruler.getRules("blockquote"), p = t4.push("table_open", "table", 1), m = [e, 0];
  p.map = m;
  const g = t4.push("thead_open", "thead", 1);
  g.map = [e, e + 1];
  const b = t4.push("tr_open", "tr", 1);
  b.map = [e, e + 1];
  for (let k = 0; k < a.length; k++) {
    const C = t4.push("th_open", "th", 1);
    c[k] && (C.attrs = [["style", "text-align:" + c[k]]]);
    const S = t4.push("inline", "", 0);
    S.content = a[k].trim(), S.children = [], t4.push("th_close", "th", -1);
  }
  t4.push("tr_close", "tr", -1), t4.push("thead_close", "thead", -1);
  let y, x = 0;
  for (i = e + 2; i < n && !(t4.sCount[i] < t4.blkIndent); i++) {
    let k = false;
    for (let S = 0, M = h.length; S < M; S++)
      if (h[S](t4, i, n, true)) {
        k = true;
        break;
      }
    if (k || (l = As(t4, i).trim(), !l) || t4.sCount[i] - t4.blkIndent >= 4 || (a = mf(l), a.length && a[0] === "" && a.shift(), a.length && a[a.length - 1] === "" && a.pop(), x += f - a.length, x > ix))
      break;
    if (i === e + 2) {
      const S = t4.push("tbody_open", "tbody", 1);
      S.map = y = [e + 2, 0];
    }
    const C = t4.push("tr_open", "tr", 1);
    C.map = [i, i + 1];
    for (let S = 0; S < f; S++) {
      const M = t4.push("td_open", "td", 1);
      c[S] && (M.attrs = [["style", "text-align:" + c[S]]]);
      const A = t4.push("inline", "", 0);
      A.content = a[S] ? a[S].trim() : "", A.children = [], t4.push("td_close", "td", -1);
    }
    t4.push("tr_close", "tr", -1);
  }
  return y && (t4.push("tbody_close", "tbody", -1), y[1] = i), t4.push("table_close", "table", -1), m[1] = i, t4.parentType = d, t4.line = i, true;
}
function sx(t4, e, n) {
  if (t4.sCount[e] - t4.blkIndent < 4)
    return false;
  let r = e + 1, i = r;
  for (; r < n; ) {
    if (t4.isEmpty(r)) {
      r++;
      continue;
    }
    if (t4.sCount[r] - t4.blkIndent >= 4) {
      r++, i = r;
      continue;
    }
    break;
  }
  t4.line = i;
  const o = t4.push("code_block", "code", 0);
  return o.content = t4.getLines(e, i, 4 + t4.blkIndent, false) + `
`, o.map = [e, t4.line], true;
}
function ux(t4, e, n, r) {
  let i = t4.bMarks[e] + t4.tShift[e], o = t4.eMarks[e];
  if (t4.sCount[e] - t4.blkIndent >= 4 || i + 3 > o)
    return false;
  const s = t4.src.charCodeAt(i);
  if (s !== 126 && s !== 96)
    return false;
  let u = i;
  i = t4.skipChars(i, s);
  let l = i - u;
  if (l < 3)
    return false;
  const a = t4.src.slice(u, i), c = t4.src.slice(i, o);
  if (s === 96 && c.indexOf(String.fromCharCode(s)) >= 0)
    return false;
  if (r)
    return true;
  let f = e, d = false;
  for (; f++, !(f >= n || (i = u = t4.bMarks[f] + t4.tShift[f], o = t4.eMarks[f], i < o && t4.sCount[f] < t4.blkIndent)); )
    if (t4.src.charCodeAt(i) === s && !(t4.sCount[f] - t4.blkIndent >= 4) && (i = t4.skipChars(i, s), !(i - u < l) && (i = t4.skipSpaces(i), !(i < o)))) {
      d = true;
      break;
    }
  l = t4.sCount[e], t4.line = f + (d ? 1 : 0);
  const h = t4.push("fence", "code", 0);
  return h.info = c, h.content = t4.getLines(e + 1, f, l, true), h.markup = a, h.map = [e, t4.line], true;
}
function lx(t4, e, n, r) {
  let i = t4.bMarks[e] + t4.tShift[e], o = t4.eMarks[e];
  const s = t4.lineMax;
  if (t4.sCount[e] - t4.blkIndent >= 4 || t4.src.charCodeAt(i) !== 62)
    return false;
  if (r)
    return true;
  const u = [], l = [], a = [], c = [], f = t4.md.block.ruler.getRules("blockquote"), d = t4.parentType;
  t4.parentType = "blockquote";
  let h = false, p;
  for (p = e; p < n; p++) {
    const x = t4.sCount[p] < t4.blkIndent;
    if (i = t4.bMarks[p] + t4.tShift[p], o = t4.eMarks[p], i >= o)
      break;
    if (t4.src.charCodeAt(i++) === 62 && !x) {
      let C = t4.sCount[p] + 1, S, M;
      t4.src.charCodeAt(i) === 32 ? (i++, C++, M = false, S = true) : t4.src.charCodeAt(i) === 9 ? (S = true, (t4.bsCount[p] + C) % 4 === 3 ? (i++, C++, M = false) : M = true) : S = false;
      let A = C;
      for (u.push(t4.bMarks[p]), t4.bMarks[p] = i; i < o; ) {
        const _ = t4.src.charCodeAt(i);
        if (B(_))
          _ === 9 ? A += 4 - (A + t4.bsCount[p] + (M ? 1 : 0)) % 4 : A++;
        else
          break;
        i++;
      }
      h = i >= o, l.push(t4.bsCount[p]), t4.bsCount[p] = t4.sCount[p] + 1 + (S ? 1 : 0), a.push(t4.sCount[p]), t4.sCount[p] = A - C, c.push(t4.tShift[p]), t4.tShift[p] = i - t4.bMarks[p];
      continue;
    }
    if (h)
      break;
    let k = false;
    for (let C = 0, S = f.length; C < S; C++)
      if (f[C](t4, p, n, true)) {
        k = true;
        break;
      }
    if (k) {
      t4.lineMax = p, t4.blkIndent !== 0 && (u.push(t4.bMarks[p]), l.push(t4.bsCount[p]), c.push(t4.tShift[p]), a.push(t4.sCount[p]), t4.sCount[p] -= t4.blkIndent);
      break;
    }
    u.push(t4.bMarks[p]), l.push(t4.bsCount[p]), c.push(t4.tShift[p]), a.push(t4.sCount[p]), t4.sCount[p] = -1;
  }
  const m = t4.blkIndent;
  t4.blkIndent = 0;
  const g = t4.push("blockquote_open", "blockquote", 1);
  g.markup = ">";
  const b = [e, 0];
  g.map = b, t4.md.block.tokenize(t4, e, p);
  const y = t4.push("blockquote_close", "blockquote", -1);
  y.markup = ">", t4.lineMax = s, t4.parentType = d, b[1] = t4.line;
  for (let x = 0; x < c.length; x++)
    t4.bMarks[x + e] = u[x], t4.tShift[x + e] = c[x], t4.sCount[x + e] = a[x], t4.bsCount[x + e] = l[x];
  return t4.blkIndent = m, true;
}
function ax(t4, e, n, r) {
  const i = t4.eMarks[e];
  if (t4.sCount[e] - t4.blkIndent >= 4)
    return false;
  let o = t4.bMarks[e] + t4.tShift[e];
  const s = t4.src.charCodeAt(o++);
  if (s !== 42 && s !== 45 && s !== 95)
    return false;
  let u = 1;
  for (; o < i; ) {
    const a = t4.src.charCodeAt(o++);
    if (a !== s && !B(a))
      return false;
    a === s && u++;
  }
  if (u < 3)
    return false;
  if (r)
    return true;
  t4.line = e + 1;
  const l = t4.push("hr", "hr", 0);
  return l.map = [e, t4.line], l.markup = Array(u + 1).join(String.fromCharCode(s)), true;
}
function gf(t4, e) {
  const n = t4.eMarks[e];
  let r = t4.bMarks[e] + t4.tShift[e];
  const i = t4.src.charCodeAt(r++);
  if (i !== 42 && i !== 45 && i !== 43)
    return -1;
  if (r < n) {
    const o = t4.src.charCodeAt(r);
    if (!B(o))
      return -1;
  }
  return r;
}
function bf(t4, e) {
  const n = t4.bMarks[e] + t4.tShift[e], r = t4.eMarks[e];
  let i = n;
  if (i + 1 >= r)
    return -1;
  let o = t4.src.charCodeAt(i++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (i >= r)
      return -1;
    if (o = t4.src.charCodeAt(i++), o >= 48 && o <= 57) {
      if (i - n >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return i < r && (o = t4.src.charCodeAt(i), !B(o)) ? -1 : i;
}
function cx(t4, e) {
  const n = t4.level + 2;
  for (let r = e + 2, i = t4.tokens.length - 2; r < i; r++)
    t4.tokens[r].level === n && t4.tokens[r].type === "paragraph_open" && (t4.tokens[r + 2].hidden = true, t4.tokens[r].hidden = true, r += 2);
}
function fx(t4, e, n, r) {
  let i, o, s, u, l = e, a = true;
  if (t4.sCount[l] - t4.blkIndent >= 4 || t4.listIndent >= 0 && t4.sCount[l] - t4.listIndent >= 4 && t4.sCount[l] < t4.blkIndent)
    return false;
  let c = false;
  r && t4.parentType === "paragraph" && t4.sCount[l] >= t4.blkIndent && (c = true);
  let f, d, h;
  if ((h = bf(t4, l)) >= 0) {
    if (f = true, s = t4.bMarks[l] + t4.tShift[l], d = Number(t4.src.slice(s, h - 1)), c && d !== 1) return false;
  } else if ((h = gf(t4, l)) >= 0)
    f = false;
  else
    return false;
  if (c && t4.skipSpaces(h) >= t4.eMarks[l])
    return false;
  if (r)
    return true;
  const p = t4.src.charCodeAt(h - 1), m = t4.tokens.length;
  f ? (u = t4.push("ordered_list_open", "ol", 1), d !== 1 && (u.attrs = [["start", d]])) : u = t4.push("bullet_list_open", "ul", 1);
  const g = [l, 0];
  u.map = g, u.markup = String.fromCharCode(p);
  let b = false;
  const y = t4.md.block.ruler.getRules("list"), x = t4.parentType;
  for (t4.parentType = "list"; l < n; ) {
    o = h, i = t4.eMarks[l];
    const k = t4.sCount[l] + h - (t4.bMarks[l] + t4.tShift[l]);
    let C = k;
    for (; o < i; ) {
      const V = t4.src.charCodeAt(o);
      if (V === 9)
        C += 4 - (C + t4.bsCount[l]) % 4;
      else if (V === 32)
        C++;
      else
        break;
      o++;
    }
    const S = o;
    let M;
    S >= i ? M = 1 : M = C - k, M > 4 && (M = 1);
    const A = k + M;
    u = t4.push("list_item_open", "li", 1), u.markup = String.fromCharCode(p);
    const _ = [l, 0];
    u.map = _, f && (u.info = t4.src.slice(s, h - 1));
    const I = t4.tight, be = t4.tShift[l], _e = t4.sCount[l], Ye = t4.listIndent;
    if (t4.listIndent = t4.blkIndent, t4.blkIndent = A, t4.tight = true, t4.tShift[l] = S - t4.bMarks[l], t4.sCount[l] = C, S >= i && t4.isEmpty(l + 1) ? t4.line = Math.min(t4.line + 2, n) : t4.md.block.tokenize(t4, l, n, true), (!t4.tight || b) && (a = false), b = t4.line - l > 1 && t4.isEmpty(t4.line - 1), t4.blkIndent = t4.listIndent, t4.listIndent = Ye, t4.tShift[l] = be, t4.sCount[l] = _e, t4.tight = I, u = t4.push("list_item_close", "li", -1), u.markup = String.fromCharCode(p), l = t4.line, _[1] = l, l >= n || t4.sCount[l] < t4.blkIndent || t4.sCount[l] - t4.blkIndent >= 4)
      break;
    let ue = false;
    for (let V = 0, Qe = y.length; V < Qe; V++)
      if (y[V](t4, l, n, true)) {
        ue = true;
        break;
      }
    if (ue)
      break;
    if (f) {
      if (h = bf(t4, l), h < 0)
        break;
      s = t4.bMarks[l] + t4.tShift[l];
    } else if (h = gf(t4, l), h < 0)
      break;
    if (p !== t4.src.charCodeAt(h - 1))
      break;
  }
  return f ? u = t4.push("ordered_list_close", "ol", -1) : u = t4.push("bullet_list_close", "ul", -1), u.markup = String.fromCharCode(p), g[1] = l, t4.line = l, t4.parentType = x, a && cx(t4, m), true;
}
function dx(t4, e, n, r) {
  let i = t4.bMarks[e] + t4.tShift[e], o = t4.eMarks[e], s = e + 1;
  if (t4.sCount[e] - t4.blkIndent >= 4 || t4.src.charCodeAt(i) !== 91)
    return false;
  function u(y) {
    const x = t4.lineMax;
    if (y >= x || t4.isEmpty(y))
      return null;
    let k = false;
    if (t4.sCount[y] - t4.blkIndent > 3 && (k = true), t4.sCount[y] < 0 && (k = true), !k) {
      const M = t4.md.block.ruler.getRules("reference"), A = t4.parentType;
      t4.parentType = "reference";
      let _ = false;
      for (let I = 0, be = M.length; I < be; I++)
        if (M[I](t4, y, x, true)) {
          _ = true;
          break;
        }
      if (t4.parentType = A, _)
        return null;
    }
    const C = t4.bMarks[y] + t4.tShift[y], S = t4.eMarks[y];
    return t4.src.slice(C, S + 1);
  }
  let l = t4.src.slice(i, o + 1);
  o = l.length;
  let a = -1;
  for (i = 1; i < o; i++) {
    const y = l.charCodeAt(i);
    if (y === 91)
      return false;
    if (y === 93) {
      a = i;
      break;
    } else if (y === 10) {
      const x = u(s);
      x !== null && (l += x, o = l.length, s++);
    } else if (y === 92 && (i++, i < o && l.charCodeAt(i) === 10)) {
      const x = u(s);
      x !== null && (l += x, o = l.length, s++);
    }
  }
  if (a < 0 || l.charCodeAt(a + 1) !== 58)
    return false;
  for (i = a + 2; i < o; i++) {
    const y = l.charCodeAt(i);
    if (y === 10) {
      const x = u(s);
      x !== null && (l += x, o = l.length, s++);
    } else if (!B(y)) break;
  }
  const c = t4.md.helpers.parseLinkDestination(l, i, o);
  if (!c.ok)
    return false;
  const f = t4.md.normalizeLink(c.str);
  if (!t4.md.validateLink(f))
    return false;
  i = c.pos;
  const d = i, h = s, p = i;
  for (; i < o; i++) {
    const y = l.charCodeAt(i);
    if (y === 10) {
      const x = u(s);
      x !== null && (l += x, o = l.length, s++);
    } else if (!B(y)) break;
  }
  let m = t4.md.helpers.parseLinkTitle(l, i, o);
  for (; m.can_continue; ) {
    const y = u(s);
    if (y === null) break;
    l += y, i = o, o = l.length, s++, m = t4.md.helpers.parseLinkTitle(l, i, o, m);
  }
  let g;
  for (i < o && p !== i && m.ok ? (g = m.str, i = m.pos) : (g = "", i = d, s = h); i < o; ) {
    const y = l.charCodeAt(i);
    if (!B(y))
      break;
    i++;
  }
  if (i < o && l.charCodeAt(i) !== 10 && g)
    for (g = "", i = d, s = h; i < o; ) {
      const y = l.charCodeAt(i);
      if (!B(y))
        break;
      i++;
    }
  if (i < o && l.charCodeAt(i) !== 10)
    return false;
  const b = wi(l.slice(1, a));
  return b ? (r || (typeof t4.env.references > "u" && (t4.env.references = {}), typeof t4.env.references[b] > "u" && (t4.env.references[b] = { title: g, href: f }), t4.line = s), true) : false;
}
const hx = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], px = "[a-zA-Z_:][a-zA-Z0-9:._-]*", mx = "[^\"'=<>`\\x00-\\x20]+", gx = "'[^']*'", bx = '"[^"]*"', yx = "(?:" + mx + "|" + gx + "|" + bx + ")", xx = "(?:\\s+" + px + "(?:\\s*=\\s*" + yx + ")?)", A0 = "<[A-Za-z][A-Za-z0-9\\-]*" + xx + "*\\s*\\/?>", D0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", kx = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Cx = "<[?][\\s\\S]*?[?]>", vx = "<![A-Za-z][^>]*>", Ex = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Sx = new RegExp("^(?:" + A0 + "|" + D0 + "|" + kx + "|" + Cx + "|" + vx + "|" + Ex + ")"), wx = new RegExp("^(?:" + A0 + "|" + D0 + ")"), $t = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + hx.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(wx.source + "\\s*$"), /^$/, false]
];
function Ax(t4, e, n, r) {
  let i = t4.bMarks[e] + t4.tShift[e], o = t4.eMarks[e];
  if (t4.sCount[e] - t4.blkIndent >= 4 || !t4.md.options.html || t4.src.charCodeAt(i) !== 60)
    return false;
  let s = t4.src.slice(i, o), u = 0;
  for (; u < $t.length && !$t[u][0].test(s); u++)
    ;
  if (u === $t.length)
    return false;
  if (r)
    return $t[u][2];
  let l = e + 1;
  if (!$t[u][1].test(s)) {
    for (; l < n && !(t4.sCount[l] < t4.blkIndent); l++)
      if (i = t4.bMarks[l] + t4.tShift[l], o = t4.eMarks[l], s = t4.src.slice(i, o), $t[u][1].test(s)) {
        s.length !== 0 && l++;
        break;
      }
  }
  t4.line = l;
  const a = t4.push("html_block", "", 0);
  return a.map = [e, l], a.content = t4.getLines(e, l, t4.blkIndent, true), true;
}
function Dx(t4, e, n, r) {
  let i = t4.bMarks[e] + t4.tShift[e], o = t4.eMarks[e];
  if (t4.sCount[e] - t4.blkIndent >= 4)
    return false;
  let s = t4.src.charCodeAt(i);
  if (s !== 35 || i >= o)
    return false;
  let u = 1;
  for (s = t4.src.charCodeAt(++i); s === 35 && i < o && u <= 6; )
    u++, s = t4.src.charCodeAt(++i);
  if (u > 6 || i < o && !B(s))
    return false;
  if (r)
    return true;
  o = t4.skipSpacesBack(o, i);
  const l = t4.skipCharsBack(o, 35, i);
  l > i && B(t4.src.charCodeAt(l - 1)) && (o = l), t4.line = e + 1;
  const a = t4.push("heading_open", "h" + String(u), 1);
  a.markup = "########".slice(0, u), a.map = [e, t4.line];
  const c = t4.push("inline", "", 0);
  c.content = t4.src.slice(i, o).trim(), c.map = [e, t4.line], c.children = [];
  const f = t4.push("heading_close", "h" + String(u), -1);
  return f.markup = "########".slice(0, u), true;
}
function Tx(t4, e, n) {
  const r = t4.md.block.ruler.getRules("paragraph");
  if (t4.sCount[e] - t4.blkIndent >= 4)
    return false;
  const i = t4.parentType;
  t4.parentType = "paragraph";
  let o = 0, s, u = e + 1;
  for (; u < n && !t4.isEmpty(u); u++) {
    if (t4.sCount[u] - t4.blkIndent > 3)
      continue;
    if (t4.sCount[u] >= t4.blkIndent) {
      let h = t4.bMarks[u] + t4.tShift[u];
      const p = t4.eMarks[u];
      if (h < p && (s = t4.src.charCodeAt(h), (s === 45 || s === 61) && (h = t4.skipChars(h, s), h = t4.skipSpaces(h), h >= p))) {
        o = s === 61 ? 1 : 2;
        break;
      }
    }
    if (t4.sCount[u] < 0)
      continue;
    let d = false;
    for (let h = 0, p = r.length; h < p; h++)
      if (r[h](t4, u, n, true)) {
        d = true;
        break;
      }
    if (d)
      break;
  }
  if (!o)
    return false;
  const l = t4.getLines(e, u, t4.blkIndent, false).trim();
  t4.line = u + 1;
  const a = t4.push("heading_open", "h" + String(o), 1);
  a.markup = String.fromCharCode(s), a.map = [e, t4.line];
  const c = t4.push("inline", "", 0);
  c.content = l, c.map = [e, t4.line - 1], c.children = [];
  const f = t4.push("heading_close", "h" + String(o), -1);
  return f.markup = String.fromCharCode(s), t4.parentType = i, true;
}
function Mx(t4, e, n) {
  const r = t4.md.block.ruler.getRules("paragraph"), i = t4.parentType;
  let o = e + 1;
  for (t4.parentType = "paragraph"; o < n && !t4.isEmpty(o); o++) {
    if (t4.sCount[o] - t4.blkIndent > 3 || t4.sCount[o] < 0)
      continue;
    let a = false;
    for (let c = 0, f = r.length; c < f; c++)
      if (r[c](t4, o, n, true)) {
        a = true;
        break;
      }
    if (a)
      break;
  }
  const s = t4.getLines(e, o, t4.blkIndent, false).trim();
  t4.line = o;
  const u = t4.push("paragraph_open", "p", 1);
  u.map = [e, t4.line];
  const l = t4.push("inline", "", 0);
  return l.content = s, l.map = [e, t4.line], l.children = [], t4.push("paragraph_close", "p", -1), t4.parentType = i, true;
}
const ar = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", ox, ["paragraph", "reference"]],
  ["code", sx],
  ["fence", ux, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", lx, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", ax, ["paragraph", "reference", "blockquote", "list"]],
  ["list", fx, ["paragraph", "reference", "blockquote"]],
  ["reference", dx],
  ["html_block", Ax, ["paragraph", "reference", "blockquote"]],
  ["heading", Dx, ["paragraph", "reference", "blockquote"]],
  ["lheading", Tx],
  ["paragraph", Mx]
];
function Ai() {
  this.ruler = new he();
  for (let t4 = 0; t4 < ar.length; t4++)
    this.ruler.push(ar[t4][0], ar[t4][1], { alt: (ar[t4][2] || []).slice() });
}
Ai.prototype.tokenize = function(t4, e, n) {
  const r = this.ruler.getRules(""), i = r.length, o = t4.md.options.maxNesting;
  let s = e, u = false;
  for (; s < n && (t4.line = s = t4.skipEmptyLines(s), !(s >= n || t4.sCount[s] < t4.blkIndent)); ) {
    if (t4.level >= o) {
      t4.line = n;
      break;
    }
    const l = t4.line;
    let a = false;
    for (let c = 0; c < i; c++)
      if (a = r[c](t4, s, n, false), a) {
        if (l >= t4.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!a) throw new Error("none of the block rules matched");
    t4.tight = !u, t4.isEmpty(t4.line - 1) && (u = true), s = t4.line, s < n && t4.isEmpty(s) && (u = true, s++, t4.line = s);
  }
};
Ai.prototype.parse = function(t4, e, n, r) {
  if (!t4)
    return;
  const i = new this.State(t4, e, n, r);
  this.tokenize(i, i.line, i.lineMax);
};
Ai.prototype.State = qe;
function Gn(t4, e, n, r) {
  this.src = t4, this.env = n, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false, this.linkLevel = 0;
}
Gn.prototype.pushPending = function() {
  const t4 = new Me("text", "", 0);
  return t4.content = this.pending, t4.level = this.pendingLevel, this.tokens.push(t4), this.pending = "", t4;
};
Gn.prototype.push = function(t4, e, n) {
  this.pending && this.pushPending();
  const r = new Me(t4, e, n);
  let i = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(i), r;
};
Gn.prototype.scanDelims = function(t4, e) {
  const n = this.posMax, r = this.src.charCodeAt(t4), i = t4 > 0 ? this.src.charCodeAt(t4 - 1) : 32;
  let o = t4;
  for (; o < n && this.src.charCodeAt(o) === r; )
    o++;
  const s = o - t4, u = o < n ? this.src.charCodeAt(o) : 32, l = qn(i) || zn(String.fromCharCode(i)), a = qn(u) || zn(String.fromCharCode(u)), c = Ln(i), f = Ln(u), d = !f && (!a || c || l), h = !c && (!l || f || a);
  return { can_open: d && (e || !h || l), can_close: h && (e || !d || a), length: s };
};
Gn.prototype.Token = Me;
function _x(t4) {
  switch (t4) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
function Ox(t4, e) {
  let n = t4.pos;
  for (; n < t4.posMax && !_x(t4.src.charCodeAt(n)); )
    n++;
  return n === t4.pos ? false : (e || (t4.pending += t4.src.slice(t4.pos, n)), t4.pos = n, true);
}
const Nx = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Rx(t4, e) {
  if (!t4.md.options.linkify || t4.linkLevel > 0) return false;
  const n = t4.pos, r = t4.posMax;
  if (n + 3 > r || t4.src.charCodeAt(n) !== 58 || t4.src.charCodeAt(n + 1) !== 47 || t4.src.charCodeAt(n + 2) !== 47) return false;
  const i = t4.pending.match(Nx);
  if (!i) return false;
  const o = i[1], s = t4.md.linkify.matchAtStart(t4.src.slice(n - o.length));
  if (!s) return false;
  let u = s.url;
  if (u.length <= o.length) return false;
  u = u.replace(/\*+$/, "");
  const l = t4.md.normalizeLink(u);
  if (!t4.md.validateLink(l)) return false;
  if (!e) {
    t4.pending = t4.pending.slice(0, -o.length);
    const a = t4.push("link_open", "a", 1);
    a.attrs = [["href", l]], a.markup = "linkify", a.info = "auto";
    const c = t4.push("text", "", 0);
    c.content = t4.md.normalizeLinkText(u);
    const f = t4.push("link_close", "a", -1);
    f.markup = "linkify", f.info = "auto";
  }
  return t4.pos += u.length - o.length, true;
}
function Ix(t4, e) {
  let n = t4.pos;
  if (t4.src.charCodeAt(n) !== 10)
    return false;
  const r = t4.pending.length - 1, i = t4.posMax;
  if (!e)
    if (r >= 0 && t4.pending.charCodeAt(r) === 32)
      if (r >= 1 && t4.pending.charCodeAt(r - 1) === 32) {
        let o = r - 1;
        for (; o >= 1 && t4.pending.charCodeAt(o - 1) === 32; ) o--;
        t4.pending = t4.pending.slice(0, o), t4.push("hardbreak", "br", 0);
      } else
        t4.pending = t4.pending.slice(0, -1), t4.push("softbreak", "br", 0);
    else
      t4.push("softbreak", "br", 0);
  for (n++; n < i && B(t4.src.charCodeAt(n)); )
    n++;
  return t4.pos = n, true;
}
const ul = [];
for (let t4 = 0; t4 < 256; t4++)
  ul.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t4) {
  ul[t4.charCodeAt(0)] = 1;
});
function Fx(t4, e) {
  let n = t4.pos;
  const r = t4.posMax;
  if (t4.src.charCodeAt(n) !== 92 || (n++, n >= r)) return false;
  let i = t4.src.charCodeAt(n);
  if (i === 10) {
    for (e || t4.push("hardbreak", "br", 0), n++; n < r && (i = t4.src.charCodeAt(n), !!B(i)); )
      n++;
    return t4.pos = n, true;
  }
  let o = t4.src[n];
  if (i >= 55296 && i <= 56319 && n + 1 < r) {
    const u = t4.src.charCodeAt(n + 1);
    u >= 56320 && u <= 57343 && (o += t4.src[n + 1], n++);
  }
  const s = "\\" + o;
  if (!e) {
    const u = t4.push("text_special", "", 0);
    i < 256 && ul[i] !== 0 ? u.content = o : u.content = s, u.markup = s, u.info = "escape";
  }
  return t4.pos = n + 1, true;
}
function Px(t4, e) {
  let n = t4.pos;
  if (t4.src.charCodeAt(n) !== 96)
    return false;
  const i = n;
  n++;
  const o = t4.posMax;
  for (; n < o && t4.src.charCodeAt(n) === 96; )
    n++;
  const s = t4.src.slice(i, n), u = s.length;
  if (t4.backticksScanned && (t4.backticks[u] || 0) <= i)
    return e || (t4.pending += s), t4.pos += u, true;
  let l = n, a;
  for (; (a = t4.src.indexOf("`", l)) !== -1; ) {
    for (l = a + 1; l < o && t4.src.charCodeAt(l) === 96; )
      l++;
    const c = l - a;
    if (c === u) {
      if (!e) {
        const f = t4.push("code_inline", "code", 0);
        f.markup = s, f.content = t4.src.slice(n, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return t4.pos = l, true;
    }
    t4.backticks[c] = a;
  }
  return t4.backticksScanned = true, e || (t4.pending += s), t4.pos += u, true;
}
function Bx(t4, e) {
  const n = t4.pos, r = t4.src.charCodeAt(n);
  if (e || r !== 126)
    return false;
  const i = t4.scanDelims(t4.pos, true);
  let o = i.length;
  const s = String.fromCharCode(r);
  if (o < 2)
    return false;
  let u;
  o % 2 && (u = t4.push("text", "", 0), u.content = s, o--);
  for (let l = 0; l < o; l += 2)
    u = t4.push("text", "", 0), u.content = s + s, t4.delimiters.push({
      marker: r,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: t4.tokens.length - 1,
      end: -1,
      open: i.can_open,
      close: i.can_close
    });
  return t4.pos += i.length, true;
}
function yf(t4, e) {
  let n;
  const r = [], i = e.length;
  for (let o = 0; o < i; o++) {
    const s = e[o];
    if (s.marker !== 126 || s.end === -1)
      continue;
    const u = e[s.end];
    n = t4.tokens[s.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = t4.tokens[u.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", t4.tokens[u.token - 1].type === "text" && t4.tokens[u.token - 1].content === "~" && r.push(u.token - 1);
  }
  for (; r.length; ) {
    const o = r.pop();
    let s = o + 1;
    for (; s < t4.tokens.length && t4.tokens[s].type === "s_close"; )
      s++;
    s--, o !== s && (n = t4.tokens[s], t4.tokens[s] = t4.tokens[o], t4.tokens[o] = n);
  }
}
function Lx(t4) {
  const e = t4.tokens_meta, n = t4.tokens_meta.length;
  yf(t4, t4.delimiters);
  for (let r = 0; r < n; r++)
    e[r] && e[r].delimiters && yf(t4, e[r].delimiters);
}
const T0 = {
  tokenize: Bx,
  postProcess: Lx
};
function zx(t4, e) {
  const n = t4.pos, r = t4.src.charCodeAt(n);
  if (e || r !== 95 && r !== 42)
    return false;
  const i = t4.scanDelims(t4.pos, r === 42);
  for (let o = 0; o < i.length; o++) {
    const s = t4.push("text", "", 0);
    s.content = String.fromCharCode(r), t4.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: r,
      // Total length of these series of delimiters.
      //
      length: i.length,
      // A position of the token this delimiter corresponds to.
      //
      token: t4.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: i.can_open,
      close: i.can_close
    });
  }
  return t4.pos += i.length, true;
}
function xf(t4, e) {
  const n = e.length;
  for (let r = n - 1; r >= 0; r--) {
    const i = e[r];
    if (i.marker !== 95 && i.marker !== 42 || i.end === -1)
      continue;
    const o = e[i.end], s = r > 0 && e[r - 1].end === i.end + 1 && // check that first two markers match and adjacent
    e[r - 1].marker === i.marker && e[r - 1].token === i.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[i.end + 1].token === o.token + 1, u = String.fromCharCode(i.marker), l = t4.tokens[i.token];
    l.type = s ? "strong_open" : "em_open", l.tag = s ? "strong" : "em", l.nesting = 1, l.markup = s ? u + u : u, l.content = "";
    const a = t4.tokens[o.token];
    a.type = s ? "strong_close" : "em_close", a.tag = s ? "strong" : "em", a.nesting = -1, a.markup = s ? u + u : u, a.content = "", s && (t4.tokens[e[r - 1].token].content = "", t4.tokens[e[i.end + 1].token].content = "", r--);
  }
}
function qx(t4) {
  const e = t4.tokens_meta, n = t4.tokens_meta.length;
  xf(t4, t4.delimiters);
  for (let r = 0; r < n; r++)
    e[r] && e[r].delimiters && xf(t4, e[r].delimiters);
}
const M0 = {
  tokenize: zx,
  postProcess: qx
};
function $x(t4, e) {
  let n, r, i, o, s = "", u = "", l = t4.pos, a = true;
  if (t4.src.charCodeAt(t4.pos) !== 91)
    return false;
  const c = t4.pos, f = t4.posMax, d = t4.pos + 1, h = t4.md.helpers.parseLinkLabel(t4, t4.pos, true);
  if (h < 0)
    return false;
  let p = h + 1;
  if (p < f && t4.src.charCodeAt(p) === 40) {
    for (a = false, p++; p < f && (n = t4.src.charCodeAt(p), !(!B(n) && n !== 10)); p++)
      ;
    if (p >= f)
      return false;
    if (l = p, i = t4.md.helpers.parseLinkDestination(t4.src, p, t4.posMax), i.ok) {
      for (s = t4.md.normalizeLink(i.str), t4.md.validateLink(s) ? p = i.pos : s = "", l = p; p < f && (n = t4.src.charCodeAt(p), !(!B(n) && n !== 10)); p++)
        ;
      if (i = t4.md.helpers.parseLinkTitle(t4.src, p, t4.posMax), p < f && l !== p && i.ok)
        for (u = i.str, p = i.pos; p < f && (n = t4.src.charCodeAt(p), !(!B(n) && n !== 10)); p++)
          ;
    }
    (p >= f || t4.src.charCodeAt(p) !== 41) && (a = true), p++;
  }
  if (a) {
    if (typeof t4.env.references > "u")
      return false;
    if (p < f && t4.src.charCodeAt(p) === 91 ? (l = p + 1, p = t4.md.helpers.parseLinkLabel(t4, p), p >= 0 ? r = t4.src.slice(l, p++) : p = h + 1) : p = h + 1, r || (r = t4.src.slice(d, h)), o = t4.env.references[wi(r)], !o)
      return t4.pos = c, false;
    s = o.href, u = o.title;
  }
  if (!e) {
    t4.pos = d, t4.posMax = h;
    const m = t4.push("link_open", "a", 1), g = [["href", s]];
    m.attrs = g, u && g.push(["title", u]), t4.linkLevel++, t4.md.inline.tokenize(t4), t4.linkLevel--, t4.push("link_close", "a", -1);
  }
  return t4.pos = p, t4.posMax = f, true;
}
function jx(t4, e) {
  let n, r, i, o, s, u, l, a, c = "";
  const f = t4.pos, d = t4.posMax;
  if (t4.src.charCodeAt(t4.pos) !== 33 || t4.src.charCodeAt(t4.pos + 1) !== 91)
    return false;
  const h = t4.pos + 2, p = t4.md.helpers.parseLinkLabel(t4, t4.pos + 1, false);
  if (p < 0)
    return false;
  if (o = p + 1, o < d && t4.src.charCodeAt(o) === 40) {
    for (o++; o < d && (n = t4.src.charCodeAt(o), !(!B(n) && n !== 10)); o++)
      ;
    if (o >= d)
      return false;
    for (a = o, u = t4.md.helpers.parseLinkDestination(t4.src, o, t4.posMax), u.ok && (c = t4.md.normalizeLink(u.str), t4.md.validateLink(c) ? o = u.pos : c = ""), a = o; o < d && (n = t4.src.charCodeAt(o), !(!B(n) && n !== 10)); o++)
      ;
    if (u = t4.md.helpers.parseLinkTitle(t4.src, o, t4.posMax), o < d && a !== o && u.ok)
      for (l = u.str, o = u.pos; o < d && (n = t4.src.charCodeAt(o), !(!B(n) && n !== 10)); o++)
        ;
    else
      l = "";
    if (o >= d || t4.src.charCodeAt(o) !== 41)
      return t4.pos = f, false;
    o++;
  } else {
    if (typeof t4.env.references > "u")
      return false;
    if (o < d && t4.src.charCodeAt(o) === 91 ? (a = o + 1, o = t4.md.helpers.parseLinkLabel(t4, o), o >= 0 ? i = t4.src.slice(a, o++) : o = p + 1) : o = p + 1, i || (i = t4.src.slice(h, p)), s = t4.env.references[wi(i)], !s)
      return t4.pos = f, false;
    c = s.href, l = s.title;
  }
  if (!e) {
    r = t4.src.slice(h, p);
    const m = [];
    t4.md.inline.parse(
      r,
      t4.md,
      t4.env,
      m
    );
    const g = t4.push("image", "img", 0), b = [["src", c], ["alt", ""]];
    g.attrs = b, g.children = m, g.content = r, l && b.push(["title", l]);
  }
  return t4.pos = o, t4.posMax = d, true;
}
const Vx = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Hx = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Ux(t4, e) {
  let n = t4.pos;
  if (t4.src.charCodeAt(n) !== 60)
    return false;
  const r = t4.pos, i = t4.posMax;
  for (; ; ) {
    if (++n >= i) return false;
    const s = t4.src.charCodeAt(n);
    if (s === 60) return false;
    if (s === 62) break;
  }
  const o = t4.src.slice(r + 1, n);
  if (Hx.test(o)) {
    const s = t4.md.normalizeLink(o);
    if (!t4.md.validateLink(s))
      return false;
    if (!e) {
      const u = t4.push("link_open", "a", 1);
      u.attrs = [["href", s]], u.markup = "autolink", u.info = "auto";
      const l = t4.push("text", "", 0);
      l.content = t4.md.normalizeLinkText(o);
      const a = t4.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return t4.pos += o.length + 2, true;
  }
  if (Vx.test(o)) {
    const s = t4.md.normalizeLink("mailto:" + o);
    if (!t4.md.validateLink(s))
      return false;
    if (!e) {
      const u = t4.push("link_open", "a", 1);
      u.attrs = [["href", s]], u.markup = "autolink", u.info = "auto";
      const l = t4.push("text", "", 0);
      l.content = t4.md.normalizeLinkText(o);
      const a = t4.push("link_close", "a", -1);
      a.markup = "autolink", a.info = "auto";
    }
    return t4.pos += o.length + 2, true;
  }
  return false;
}
function Wx(t4) {
  return /^<a[>\s]/i.test(t4);
}
function Kx(t4) {
  return /^<\/a\s*>/i.test(t4);
}
function Jx(t4) {
  const e = t4 | 32;
  return e >= 97 && e <= 122;
}
function Gx(t4, e) {
  if (!t4.md.options.html)
    return false;
  const n = t4.posMax, r = t4.pos;
  if (t4.src.charCodeAt(r) !== 60 || r + 2 >= n)
    return false;
  const i = t4.src.charCodeAt(r + 1);
  if (i !== 33 && i !== 63 && i !== 47 && !Jx(i))
    return false;
  const o = t4.src.slice(r).match(Sx);
  if (!o)
    return false;
  if (!e) {
    const s = t4.push("html_inline", "", 0);
    s.content = o[0], Wx(s.content) && t4.linkLevel++, Kx(s.content) && t4.linkLevel--;
  }
  return t4.pos += o[0].length, true;
}
const Zx = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Yx = /^&([a-z][a-z0-9]{1,31});/i;
function Qx(t4, e) {
  const n = t4.pos, r = t4.posMax;
  if (t4.src.charCodeAt(n) !== 38 || n + 1 >= r) return false;
  if (t4.src.charCodeAt(n + 1) === 35) {
    const o = t4.src.slice(n).match(Zx);
    if (o) {
      if (!e) {
        const s = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), u = t4.push("text_special", "", 0);
        u.content = ol(s) ? ri(s) : ri(65533), u.markup = o[0], u.info = "entity";
      }
      return t4.pos += o[0].length, true;
    }
  } else {
    const o = t4.src.slice(n).match(Yx);
    if (o) {
      const s = C0(o[0]);
      if (s !== o[0]) {
        if (!e) {
          const u = t4.push("text_special", "", 0);
          u.content = s, u.markup = o[0], u.info = "entity";
        }
        return t4.pos += o[0].length, true;
      }
    }
  }
  return false;
}
function kf(t4) {
  const e = {}, n = t4.length;
  if (!n) return;
  let r = 0, i = -2;
  const o = [];
  for (let s = 0; s < n; s++) {
    const u = t4[s];
    if (o.push(0), (t4[r].marker !== u.marker || i !== u.token - 1) && (r = s), i = u.token, u.length = u.length || 0, !u.close) continue;
    e.hasOwnProperty(u.marker) || (e[u.marker] = [-1, -1, -1, -1, -1, -1]);
    const l = e[u.marker][(u.open ? 3 : 0) + u.length % 3];
    let a = r - o[r] - 1, c = a;
    for (; a > l; a -= o[a] + 1) {
      const f = t4[a];
      if (f.marker === u.marker && f.open && f.end < 0) {
        let d = false;
        if ((f.close || u.open) && (f.length + u.length) % 3 === 0 && (f.length % 3 !== 0 || u.length % 3 !== 0) && (d = true), !d) {
          const h = a > 0 && !t4[a - 1].open ? o[a - 1] + 1 : 0;
          o[s] = s - a + h, o[a] = h, u.open = false, f.end = s, f.close = false, c = -1, i = -2;
          break;
        }
      }
    }
    c !== -1 && (e[u.marker][(u.open ? 3 : 0) + (u.length || 0) % 3] = c);
  }
}
function Xx(t4) {
  const e = t4.tokens_meta, n = t4.tokens_meta.length;
  kf(t4.delimiters);
  for (let r = 0; r < n; r++)
    e[r] && e[r].delimiters && kf(e[r].delimiters);
}
function ek(t4) {
  let e, n, r = 0;
  const i = t4.tokens, o = t4.tokens.length;
  for (e = n = 0; e < o; e++)
    i[e].nesting < 0 && r--, i[e].level = r, i[e].nesting > 0 && r++, i[e].type === "text" && e + 1 < o && i[e + 1].type === "text" ? i[e + 1].content = i[e].content + i[e + 1].content : (e !== n && (i[n] = i[e]), n++);
  e !== n && (i.length = n);
}
const Ds = [
  ["text", Ox],
  ["linkify", Rx],
  ["newline", Ix],
  ["escape", Fx],
  ["backticks", Px],
  ["strikethrough", T0.tokenize],
  ["emphasis", M0.tokenize],
  ["link", $x],
  ["image", jx],
  ["autolink", Ux],
  ["html_inline", Gx],
  ["entity", Qx]
], Ts = [
  ["balance_pairs", Xx],
  ["strikethrough", T0.postProcess],
  ["emphasis", M0.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", ek]
];
function Zn() {
  this.ruler = new he();
  for (let t4 = 0; t4 < Ds.length; t4++)
    this.ruler.push(Ds[t4][0], Ds[t4][1]);
  this.ruler2 = new he();
  for (let t4 = 0; t4 < Ts.length; t4++)
    this.ruler2.push(Ts[t4][0], Ts[t4][1]);
}
Zn.prototype.skipToken = function(t4) {
  const e = t4.pos, n = this.ruler.getRules(""), r = n.length, i = t4.md.options.maxNesting, o = t4.cache;
  if (typeof o[e] < "u") {
    t4.pos = o[e];
    return;
  }
  let s = false;
  if (t4.level < i) {
    for (let u = 0; u < r; u++)
      if (t4.level++, s = n[u](t4, true), t4.level--, s) {
        if (e >= t4.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    t4.pos = t4.posMax;
  s || t4.pos++, o[e] = t4.pos;
};
Zn.prototype.tokenize = function(t4) {
  const e = this.ruler.getRules(""), n = e.length, r = t4.posMax, i = t4.md.options.maxNesting;
  for (; t4.pos < r; ) {
    const o = t4.pos;
    let s = false;
    if (t4.level < i) {
      for (let u = 0; u < n; u++)
        if (s = e[u](t4, false), s) {
          if (o >= t4.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (s) {
      if (t4.pos >= r)
        break;
      continue;
    }
    t4.pending += t4.src[t4.pos++];
  }
  t4.pending && t4.pushPending();
};
Zn.prototype.parse = function(t4, e, n, r) {
  const i = new this.State(t4, e, n, r);
  this.tokenize(i);
  const o = this.ruler2.getRules(""), s = o.length;
  for (let u = 0; u < s; u++)
    o[u](i);
};
Zn.prototype.State = Gn;
function tk(t4) {
  const e = {};
  t4 = t4 || {}, e.src_Any = g0.source, e.src_Cc = b0.source, e.src_Z = x0.source, e.src_P = rl.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
  const n = "[><\uFF5C]";
  return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!" + (t4["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (t4["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + e.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
}
function uu(t4) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    n && Object.keys(n).forEach(function(r) {
      t4[r] = n[r];
    });
  }), t4;
}
function Di(t4) {
  return Object.prototype.toString.call(t4);
}
function nk(t4) {
  return Di(t4) === "[object String]";
}
function rk(t4) {
  return Di(t4) === "[object Object]";
}
function ik(t4) {
  return Di(t4) === "[object RegExp]";
}
function Cf(t4) {
  return Di(t4) === "[object Function]";
}
function ok(t4) {
  return t4.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const _0 = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function sk(t4) {
  return Object.keys(t4 || {}).reduce(function(e, n) {
    return e || _0.hasOwnProperty(n);
  }, false);
}
const uk = {
  "http:": {
    validate: function(t4, e, n) {
      const r = t4.slice(e);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(t4, e, n) {
      const r = t4.slice(e);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(r) ? e >= 3 && t4[e - 3] === ":" || e >= 3 && t4[e - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(t4, e, n) {
      const r = t4.slice(e);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
    }
  }
}, lk = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", ak = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
function ck(t4) {
  t4.__index__ = -1, t4.__text_cache__ = "";
}
function fk(t4) {
  return function(e, n) {
    const r = e.slice(n);
    return t4.test(r) ? r.match(t4)[0].length : 0;
  };
}
function vf() {
  return function(t4, e) {
    e.normalize(t4);
  };
}
function ii(t4) {
  const e = t4.re = tk(t4.__opts__), n = t4.__tlds__.slice();
  t4.onCompile(), t4.__tlds_replaced__ || n.push(lk), n.push(e.src_xn), e.src_tlds = n.join("|");
  function r(u) {
    return u.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  const i = [];
  t4.__compiled__ = {};
  function o(u, l) {
    throw new Error('(LinkifyIt) Invalid schema "' + u + '": ' + l);
  }
  Object.keys(t4.__schemas__).forEach(function(u) {
    const l = t4.__schemas__[u];
    if (l === null)
      return;
    const a = { validate: null, link: null };
    if (t4.__compiled__[u] = a, rk(l)) {
      ik(l.validate) ? a.validate = fk(l.validate) : Cf(l.validate) ? a.validate = l.validate : o(u, l), Cf(l.normalize) ? a.normalize = l.normalize : l.normalize ? o(u, l) : a.normalize = vf();
      return;
    }
    if (nk(l)) {
      i.push(u);
      return;
    }
    o(u, l);
  }), i.forEach(function(u) {
    t4.__compiled__[t4.__schemas__[u]] && (t4.__compiled__[u].validate = t4.__compiled__[t4.__schemas__[u]].validate, t4.__compiled__[u].normalize = t4.__compiled__[t4.__schemas__[u]].normalize);
  }), t4.__compiled__[""] = { validate: null, normalize: vf() };
  const s = Object.keys(t4.__compiled__).filter(function(u) {
    return u.length > 0 && t4.__compiled__[u];
  }).map(ok).join("|");
  t4.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + s + ")", "i"), t4.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + e.src_ZPCc + "))(" + s + ")", "ig"), t4.re.schema_at_start = RegExp("^" + t4.re.schema_search.source, "i"), t4.re.pretest = RegExp(
    "(" + t4.re.schema_test.source + ")|(" + t4.re.host_fuzzy_test.source + ")|@",
    "i"
  ), ck(t4);
}
function dk(t4, e) {
  const n = t4.__index__, r = t4.__last_index__, i = t4.__text_cache__.slice(n, r);
  this.schema = t4.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = i, this.text = i, this.url = i;
}
function lu(t4, e) {
  const n = new dk(t4, e);
  return t4.__compiled__[n.schema].normalize(n, t4), n;
}
function ge(t4, e) {
  if (!(this instanceof ge))
    return new ge(t4, e);
  e || sk(t4) && (e = t4, t4 = {}), this.__opts__ = uu({}, _0, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = uu({}, uk, t4), this.__compiled__ = {}, this.__tlds__ = ak, this.__tlds_replaced__ = false, this.re = {}, ii(this);
}
ge.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, ii(this), this;
};
ge.prototype.set = function(e) {
  return this.__opts__ = uu(this.__opts__, e), this;
};
ge.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return false;
  let n, r, i, o, s, u, l, a, c;
  if (this.re.schema_test.test(e)) {
    for (l = this.re.schema_search, l.lastIndex = 0; (n = l.exec(e)) !== null; )
      if (o = this.testSchemaAt(e, n[2], l.lastIndex), o) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (a = e.search(this.re.host_fuzzy_test), a >= 0 && (this.__index__ < 0 || a < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (s = r.index + r[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (c = e.indexOf("@"), c >= 0 && (i = e.match(this.re.email_fuzzy)) !== null && (s = i.index + i[1].length, u = i.index + i[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && u > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = u))), this.__index__ >= 0;
};
ge.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
ge.prototype.testSchemaAt = function(e, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, r, this) : 0;
};
ge.prototype.match = function(e) {
  const n = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === e && (n.push(lu(this, r)), r = this.__last_index__);
  let i = r ? e.slice(r) : e;
  for (; this.test(i); )
    n.push(lu(this, r)), i = i.slice(this.__last_index__), r += this.__last_index__;
  return n.length ? n : null;
};
ge.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
  const n = this.re.schema_at_start.exec(e);
  if (!n) return null;
  const r = this.testSchemaAt(e, n[2], n[0].length);
  return r ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + r, lu(this, 0)) : null;
};
ge.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, i, o) {
    return r !== o[i - 1];
  }).reverse(), ii(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = true, ii(this), this);
};
ge.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
ge.prototype.onCompile = function() {
};
const Gt = 2147483647, Ie = 36, ll = 1, $n = 26, hk = 38, pk = 700, O0 = 72, N0 = 128, R0 = "-", mk = /^xn--/, gk = /[^\0-\x7F]/, bk = /[\x2E\u3002\uFF0E\uFF61]/g, yk = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Ms = Ie - ll, Fe = Math.floor, _s = String.fromCharCode;
function it(t4) {
  throw new RangeError(yk[t4]);
}
function xk(t4, e) {
  const n = [];
  let r = t4.length;
  for (; r--; )
    n[r] = e(t4[r]);
  return n;
}
function I0(t4, e) {
  const n = t4.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", t4 = n[1]), t4 = t4.replace(bk, ".");
  const i = t4.split("."), o = xk(i, e).join(".");
  return r + o;
}
function F0(t4) {
  const e = [];
  let n = 0;
  const r = t4.length;
  for (; n < r; ) {
    const i = t4.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const o = t4.charCodeAt(n++);
      (o & 64512) == 56320 ? e.push(((i & 1023) << 10) + (o & 1023) + 65536) : (e.push(i), n--);
    } else
      e.push(i);
  }
  return e;
}
const kk = (t4) => String.fromCodePoint(...t4), Ck = function(t4) {
  return t4 >= 48 && t4 < 58 ? 26 + (t4 - 48) : t4 >= 65 && t4 < 91 ? t4 - 65 : t4 >= 97 && t4 < 123 ? t4 - 97 : Ie;
}, Ef = function(t4, e) {
  return t4 + 22 + 75 * (t4 < 26) - ((e != 0) << 5);
}, P0 = function(t4, e, n) {
  let r = 0;
  for (t4 = n ? Fe(t4 / pk) : t4 >> 1, t4 += Fe(t4 / e); t4 > Ms * $n >> 1; r += Ie)
    t4 = Fe(t4 / Ms);
  return Fe(r + (Ms + 1) * t4 / (t4 + hk));
}, B0 = function(t4) {
  const e = [], n = t4.length;
  let r = 0, i = N0, o = O0, s = t4.lastIndexOf(R0);
  s < 0 && (s = 0);
  for (let u = 0; u < s; ++u)
    t4.charCodeAt(u) >= 128 && it("not-basic"), e.push(t4.charCodeAt(u));
  for (let u = s > 0 ? s + 1 : 0; u < n; ) {
    const l = r;
    for (let c = 1, f = Ie; ; f += Ie) {
      u >= n && it("invalid-input");
      const d = Ck(t4.charCodeAt(u++));
      d >= Ie && it("invalid-input"), d > Fe((Gt - r) / c) && it("overflow"), r += d * c;
      const h = f <= o ? ll : f >= o + $n ? $n : f - o;
      if (d < h)
        break;
      const p = Ie - h;
      c > Fe(Gt / p) && it("overflow"), c *= p;
    }
    const a = e.length + 1;
    o = P0(r - l, a, l == 0), Fe(r / a) > Gt - i && it("overflow"), i += Fe(r / a), r %= a, e.splice(r++, 0, i);
  }
  return String.fromCodePoint(...e);
}, L0 = function(t4) {
  const e = [];
  t4 = F0(t4);
  const n = t4.length;
  let r = N0, i = 0, o = O0;
  for (const l of t4)
    l < 128 && e.push(_s(l));
  const s = e.length;
  let u = s;
  for (s && e.push(R0); u < n; ) {
    let l = Gt;
    for (const c of t4)
      c >= r && c < l && (l = c);
    const a = u + 1;
    l - r > Fe((Gt - i) / a) && it("overflow"), i += (l - r) * a, r = l;
    for (const c of t4)
      if (c < r && ++i > Gt && it("overflow"), c === r) {
        let f = i;
        for (let d = Ie; ; d += Ie) {
          const h = d <= o ? ll : d >= o + $n ? $n : d - o;
          if (f < h)
            break;
          const p = f - h, m = Ie - h;
          e.push(
            _s(Ef(h + p % m, 0))
          ), f = Fe(p / m);
        }
        e.push(_s(Ef(f, 0))), o = P0(i, a, u === s), i = 0, ++u;
      }
    ++i, ++r;
  }
  return e.join("");
}, vk = function(t4) {
  return I0(t4, function(e) {
    return mk.test(e) ? B0(e.slice(4).toLowerCase()) : e;
  });
}, Ek = function(t4) {
  return I0(t4, function(e) {
    return gk.test(e) ? "xn--" + L0(e) : e;
  });
}, z0 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: F0,
    encode: kk
  },
  decode: B0,
  encode: L0,
  toASCII: Ek,
  toUnicode: vk
}, Sk = {
  options: {
    // Enable HTML tags in source
    html: false,
    // Use '/' to close single tags (<br />)
    xhtmlOut: false,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "\u201C\u201D\u2018\u2019",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, wk = {
  options: {
    // Enable HTML tags in source
    html: false,
    // Use '/' to close single tags (<br />)
    xhtmlOut: false,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "\u201C\u201D\u2018\u2019",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Ak = {
  options: {
    // Enable HTML tags in source
    html: true,
    // Use '/' to close single tags (<br />)
    xhtmlOut: true,
    // Convert '\n' in paragraphs into <br>
    breaks: false,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: false,
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "\u201C\u201D\u2018\u2019",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Dk = {
  default: Sk,
  zero: wk,
  commonmark: Ak
}, Tk = /^(vbscript|javascript|file|data):/, Mk = /^data:image\/(gif|png|jpeg|webp);/;
function _k(t4) {
  const e = t4.trim().toLowerCase();
  return Tk.test(e) ? Mk.test(e) : true;
}
const q0 = ["http:", "https:", "mailto:"];
function Ok(t4) {
  const e = nl(t4, true);
  if (e.hostname && (!e.protocol || q0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = z0.toASCII(e.hostname);
    } catch {
    }
  return Jn(tl(e));
}
function Nk(t4) {
  const e = nl(t4, true);
  if (e.hostname && (!e.protocol || q0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = z0.toUnicode(e.hostname);
    } catch {
    }
  return en(tl(e), en.defaultChars + "%");
}
function Se(t4, e) {
  if (!(this instanceof Se))
    return new Se(t4, e);
  e || il(t4) || (e = t4 || {}, t4 = "default"), this.inline = new Zn(), this.block = new Ai(), this.core = new sl(), this.renderer = new on(), this.linkify = new ge(), this.validateLink = _k, this.normalizeLink = Ok, this.normalizeLinkText = Nk, this.utils = I3, this.helpers = Si({}, L3), this.options = {}, this.configure(t4), e && this.set(e);
}
Se.prototype.set = function(t4) {
  return Si(this.options, t4), this;
};
Se.prototype.configure = function(t4) {
  const e = this;
  if (il(t4)) {
    const n = t4;
    if (t4 = Dk[n], !t4)
      throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  }
  if (!t4)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t4.options && e.set(t4.options), t4.components && Object.keys(t4.components).forEach(function(n) {
    t4.components[n].rules && e[n].ruler.enableOnly(t4.components[n].rules), t4.components[n].rules2 && e[n].ruler2.enableOnly(t4.components[n].rules2);
  }), this;
};
Se.prototype.enable = function(t4, e) {
  let n = [];
  Array.isArray(t4) || (t4 = [t4]), ["core", "block", "inline"].forEach(function(i) {
    n = n.concat(this[i].ruler.enable(t4, true));
  }, this), n = n.concat(this.inline.ruler2.enable(t4, true));
  const r = t4.filter(function(i) {
    return n.indexOf(i) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
Se.prototype.disable = function(t4, e) {
  let n = [];
  Array.isArray(t4) || (t4 = [t4]), ["core", "block", "inline"].forEach(function(i) {
    n = n.concat(this[i].ruler.disable(t4, true));
  }, this), n = n.concat(this.inline.ruler2.disable(t4, true));
  const r = t4.filter(function(i) {
    return n.indexOf(i) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
Se.prototype.use = function(t4) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t4.apply(t4, e), this;
};
Se.prototype.parse = function(t4, e) {
  if (typeof t4 != "string")
    throw new Error("Input data should be a String");
  const n = new this.core.State(t4, this, e);
  return this.core.process(n), n.tokens;
};
Se.prototype.render = function(t4, e) {
  return e = e || {}, this.renderer.render(this.parse(t4, e), this.options, e);
};
Se.prototype.parseInline = function(t4, e) {
  const n = new this.core.State(t4, this, e);
  return n.inlineMode = true, this.core.process(n), n.tokens;
};
Se.prototype.renderInline = function(t4, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t4, e), this.options, e);
};
function Rk(t4) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      n.hasOwnProperty(r) && (t4[r] = n[r]);
  }
  return t4;
}
function au(t4, e) {
  return Array(e + 1).join(t4);
}
function Ik(t4) {
  return t4.replace(/^\n*/, "");
}
function Fk(t4) {
  for (var e = t4.length; e > 0 && t4[e - 1] === `
`; ) e--;
  return t4.substring(0, e);
}
var Pk = [
  "ADDRESS",
  "ARTICLE",
  "ASIDE",
  "AUDIO",
  "BLOCKQUOTE",
  "BODY",
  "CANVAS",
  "CENTER",
  "DD",
  "DIR",
  "DIV",
  "DL",
  "DT",
  "FIELDSET",
  "FIGCAPTION",
  "FIGURE",
  "FOOTER",
  "FORM",
  "FRAMESET",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "HEADER",
  "HGROUP",
  "HR",
  "HTML",
  "ISINDEX",
  "LI",
  "MAIN",
  "MENU",
  "NAV",
  "NOFRAMES",
  "NOSCRIPT",
  "OL",
  "OUTPUT",
  "P",
  "PRE",
  "SECTION",
  "TABLE",
  "TBODY",
  "TD",
  "TFOOT",
  "TH",
  "THEAD",
  "TR",
  "UL"
];
function al(t4) {
  return cl(t4, Pk);
}
var $0 = [
  "AREA",
  "BASE",
  "BR",
  "COL",
  "COMMAND",
  "EMBED",
  "HR",
  "IMG",
  "INPUT",
  "KEYGEN",
  "LINK",
  "META",
  "PARAM",
  "SOURCE",
  "TRACK",
  "WBR"
];
function j0(t4) {
  return cl(t4, $0);
}
function Bk(t4) {
  return H0(t4, $0);
}
var V0 = [
  "A",
  "TABLE",
  "THEAD",
  "TBODY",
  "TFOOT",
  "TH",
  "TD",
  "IFRAME",
  "SCRIPT",
  "AUDIO",
  "VIDEO"
];
function Lk(t4) {
  return cl(t4, V0);
}
function zk(t4) {
  return H0(t4, V0);
}
function cl(t4, e) {
  return e.indexOf(t4.nodeName) >= 0;
}
function H0(t4, e) {
  return t4.getElementsByTagName && e.some(function(n) {
    return t4.getElementsByTagName(n).length;
  });
}
var se = {};
se.paragraph = {
  filter: "p",
  replacement: function(t4) {
    return `

` + t4 + `

`;
  }
};
se.lineBreak = {
  filter: "br",
  replacement: function(t4, e, n) {
    return n.br + `
`;
  }
};
se.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function(t4, e, n) {
    var r = Number(e.nodeName.charAt(1));
    if (n.headingStyle === "setext" && r < 3) {
      var i = au(r === 1 ? "=" : "-", t4.length);
      return `

` + t4 + `
` + i + `

`;
    } else
      return `

` + au("#", r) + " " + t4 + `

`;
  }
};
se.blockquote = {
  filter: "blockquote",
  replacement: function(t4) {
    return t4 = t4.replace(/^\n+|\n+$/g, ""), t4 = t4.replace(/^/gm, "> "), `

` + t4 + `

`;
  }
};
se.list = {
  filter: ["ul", "ol"],
  replacement: function(t4, e) {
    var n = e.parentNode;
    return n.nodeName === "LI" && n.lastElementChild === e ? `
` + t4 : `

` + t4 + `

`;
  }
};
se.listItem = {
  filter: "li",
  replacement: function(t4, e, n) {
    var r = n.bulletListMarker + "   ", i = e.parentNode;
    if (i.nodeName === "OL") {
      var o = i.getAttribute("start"), s = Array.prototype.indexOf.call(i.children, e);
      r = (o ? Number(o) + s : s + 1) + ".  ";
    }
    return t4 = t4.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
` + " ".repeat(r.length)), r + t4 + (e.nextSibling && !/\n$/.test(t4) ? `
` : "");
  }
};
se.indentedCodeBlock = {
  filter: function(t4, e) {
    return e.codeBlockStyle === "indented" && t4.nodeName === "PRE" && t4.firstChild && t4.firstChild.nodeName === "CODE";
  },
  replacement: function(t4, e, n) {
    return `

    ` + e.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
  }
};
se.fencedCodeBlock = {
  filter: function(t4, e) {
    return e.codeBlockStyle === "fenced" && t4.nodeName === "PRE" && t4.firstChild && t4.firstChild.nodeName === "CODE";
  },
  replacement: function(t4, e, n) {
    for (var r = e.firstChild.getAttribute("class") || "", i = (r.match(/language-(\S+)/) || [null, ""])[1], o = e.firstChild.textContent, s = n.fence.charAt(0), u = 3, l = new RegExp("^" + s + "{3,}", "gm"), a; a = l.exec(o); )
      a[0].length >= u && (u = a[0].length + 1);
    var c = au(s, u);
    return `

` + c + i + `
` + o.replace(/\n$/, "") + `
` + c + `

`;
  }
};
se.horizontalRule = {
  filter: "hr",
  replacement: function(t4, e, n) {
    return `

` + n.hr + `

`;
  }
};
se.inlineLink = {
  filter: function(t4, e) {
    return e.linkStyle === "inlined" && t4.nodeName === "A" && t4.getAttribute("href");
  },
  replacement: function(t4, e) {
    var n = e.getAttribute("href");
    n && (n = n.replace(/([()])/g, "\\$1"));
    var r = oi(e.getAttribute("title"));
    return r && (r = ' "' + r.replace(/"/g, '\\"') + '"'), "[" + t4 + "](" + n + r + ")";
  }
};
se.referenceLink = {
  filter: function(t4, e) {
    return e.linkStyle === "referenced" && t4.nodeName === "A" && t4.getAttribute("href");
  },
  replacement: function(t4, e, n) {
    var r = e.getAttribute("href"), i = oi(e.getAttribute("title"));
    i && (i = ' "' + i + '"');
    var o, s;
    switch (n.linkReferenceStyle) {
      case "collapsed":
        o = "[" + t4 + "][]", s = "[" + t4 + "]: " + r + i;
        break;
      case "shortcut":
        o = "[" + t4 + "]", s = "[" + t4 + "]: " + r + i;
        break;
      default:
        var u = this.references.length + 1;
        o = "[" + t4 + "][" + u + "]", s = "[" + u + "]: " + r + i;
    }
    return this.references.push(s), o;
  },
  references: [],
  append: function(t4) {
    var e = "";
    return this.references.length && (e = `

` + this.references.join(`
`) + `

`, this.references = []), e;
  }
};
se.emphasis = {
  filter: ["em", "i"],
  replacement: function(t4, e, n) {
    return t4.trim() ? n.emDelimiter + t4 + n.emDelimiter : "";
  }
};
se.strong = {
  filter: ["strong", "b"],
  replacement: function(t4, e, n) {
    return t4.trim() ? n.strongDelimiter + t4 + n.strongDelimiter : "";
  }
};
se.code = {
  filter: function(t4) {
    var e = t4.previousSibling || t4.nextSibling, n = t4.parentNode.nodeName === "PRE" && !e;
    return t4.nodeName === "CODE" && !n;
  },
  replacement: function(t4) {
    if (!t4) return "";
    t4 = t4.replace(/\r?\n|\r/g, " ");
    for (var e = /^`|^ .*?[^ ].* $|`$/.test(t4) ? " " : "", n = "`", r = t4.match(/`+/gm) || []; r.indexOf(n) !== -1; ) n = n + "`";
    return n + e + t4 + e + n;
  }
};
se.image = {
  filter: "img",
  replacement: function(t4, e) {
    var n = oi(e.getAttribute("alt")), r = e.getAttribute("src") || "", i = oi(e.getAttribute("title")), o = i ? ' "' + i + '"' : "";
    return r ? "![" + n + "](" + r + o + ")" : "";
  }
};
function oi(t4) {
  return t4 ? t4.replace(/(\n+\s*)+/g, `
`) : "";
}
function U0(t4) {
  this.options = t4, this._keep = [], this._remove = [], this.blankRule = {
    replacement: t4.blankReplacement
  }, this.keepReplacement = t4.keepReplacement, this.defaultRule = {
    replacement: t4.defaultReplacement
  }, this.array = [];
  for (var e in t4.rules) this.array.push(t4.rules[e]);
}
U0.prototype = {
  add: function(t4, e) {
    this.array.unshift(e);
  },
  keep: function(t4) {
    this._keep.unshift({
      filter: t4,
      replacement: this.keepReplacement
    });
  },
  remove: function(t4) {
    this._remove.unshift({
      filter: t4,
      replacement: function() {
        return "";
      }
    });
  },
  forNode: function(t4) {
    if (t4.isBlank) return this.blankRule;
    var e;
    return (e = Os(this.array, t4, this.options)) || (e = Os(this._keep, t4, this.options)) || (e = Os(this._remove, t4, this.options)) ? e : this.defaultRule;
  },
  forEach: function(t4) {
    for (var e = 0; e < this.array.length; e++) t4(this.array[e], e);
  }
};
function Os(t4, e, n) {
  for (var r = 0; r < t4.length; r++) {
    var i = t4[r];
    if (qk(i, e, n)) return i;
  }
}
function qk(t4, e, n) {
  var r = t4.filter;
  if (typeof r == "string") {
    if (r === e.nodeName.toLowerCase()) return true;
  } else if (Array.isArray(r)) {
    if (r.indexOf(e.nodeName.toLowerCase()) > -1) return true;
  } else if (typeof r == "function") {
    if (r.call(t4, e, n)) return true;
  } else
    throw new TypeError("`filter` needs to be a string, array, or function");
}
function $k(t4) {
  var e = t4.element, n = t4.isBlock, r = t4.isVoid, i = t4.isPre || function(f) {
    return f.nodeName === "PRE";
  };
  if (!(!e.firstChild || i(e))) {
    for (var o = null, s = false, u = null, l = Sf(u, e, i); l !== e; ) {
      if (l.nodeType === 3 || l.nodeType === 4) {
        var a = l.data.replace(/[ \r\n\t]+/g, " ");
        if ((!o || / $/.test(o.data)) && !s && a[0] === " " && (a = a.substr(1)), !a) {
          l = Ns(l);
          continue;
        }
        l.data = a, o = l;
      } else if (l.nodeType === 1)
        n(l) || l.nodeName === "BR" ? (o && (o.data = o.data.replace(/ $/, "")), o = null, s = false) : r(l) || i(l) ? (o = null, s = true) : o && (s = false);
      else {
        l = Ns(l);
        continue;
      }
      var c = Sf(u, l, i);
      u = l, l = c;
    }
    o && (o.data = o.data.replace(/ $/, ""), o.data || Ns(o));
  }
}
function Ns(t4) {
  var e = t4.nextSibling || t4.parentNode;
  return t4.parentNode.removeChild(t4), e;
}
function Sf(t4, e, n) {
  return t4 && t4.parentNode === e || n(e) ? e.nextSibling || e.parentNode : e.firstChild || e.nextSibling || e.parentNode;
}
var fl = typeof window < "u" ? window : {};
function jk() {
  var t4 = fl.DOMParser, e = false;
  try {
    new t4().parseFromString("", "text/html") && (e = true);
  } catch {
  }
  return e;
}
function Vk() {
  var t4 = function() {
  };
  return Hk() ? t4.prototype.parseFromString = function(e) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(e), n.close(), n;
  } : t4.prototype.parseFromString = function(e) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(e), n.close(), n;
  }, t4;
}
function Hk() {
  var t4 = false;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    fl.ActiveXObject && (t4 = true);
  }
  return t4;
}
var Uk = jk() ? fl.DOMParser : Vk();
function Wk(t4, e) {
  var n;
  if (typeof t4 == "string") {
    var r = Kk().parseFromString(
      // DOM parsers arrange elements in the <head> and <body>.
      // Wrapping in a custom element ensures elements are reliably arranged in
      // a single element.
      '<x-turndown id="turndown-root">' + t4 + "</x-turndown>",
      "text/html"
    );
    n = r.getElementById("turndown-root");
  } else
    n = t4.cloneNode(true);
  return $k({
    element: n,
    isBlock: al,
    isVoid: j0,
    isPre: e.preformattedCode ? Jk : null
  }), n;
}
var Rs;
function Kk() {
  return Rs = Rs || new Uk(), Rs;
}
function Jk(t4) {
  return t4.nodeName === "PRE" || t4.nodeName === "CODE";
}
function Gk(t4, e) {
  return t4.isBlock = al(t4), t4.isCode = t4.nodeName === "CODE" || t4.parentNode.isCode, t4.isBlank = Zk(t4), t4.flankingWhitespace = Yk(t4, e), t4;
}
function Zk(t4) {
  return !j0(t4) && !Lk(t4) && /^\s*$/i.test(t4.textContent) && !Bk(t4) && !zk(t4);
}
function Yk(t4, e) {
  if (t4.isBlock || e.preformattedCode && t4.isCode)
    return { leading: "", trailing: "" };
  var n = Qk(t4.textContent);
  return n.leadingAscii && wf("left", t4, e) && (n.leading = n.leadingNonAscii), n.trailingAscii && wf("right", t4, e) && (n.trailing = n.trailingNonAscii), { leading: n.leading, trailing: n.trailing };
}
function Qk(t4) {
  var e = t4.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: e[1],
    // whole string for whitespace-only strings
    leadingAscii: e[2],
    leadingNonAscii: e[3],
    trailing: e[4],
    // empty for whitespace-only strings
    trailingNonAscii: e[5],
    trailingAscii: e[6]
  };
}
function wf(t4, e, n) {
  var r, i, o;
  return t4 === "left" ? (r = e.previousSibling, i = / $/) : (r = e.nextSibling, i = /^ /), r && (r.nodeType === 3 ? o = i.test(r.nodeValue) : n.preformattedCode && r.nodeName === "CODE" ? o = false : r.nodeType === 1 && !al(r) && (o = i.test(r.textContent))), o;
}
var Xk = Array.prototype.reduce, e6 = [
  [/\\/g, "\\\\"],
  [/\*/g, "\\*"],
  [/^-/g, "\\-"],
  [/^\+ /g, "\\+ "],
  [/^(=+)/g, "\\$1"],
  [/^(#{1,6}) /g, "\\$1 "],
  [/`/g, "\\`"],
  [/^~~~/g, "\\~~~"],
  [/\[/g, "\\["],
  [/\]/g, "\\]"],
  [/^>/g, "\\>"],
  [/_/g, "\\_"],
  [/^(\d+)\. /g, "$1\\. "]
];
function jn(t4) {
  if (!(this instanceof jn)) return new jn(t4);
  var e = {
    rules: se,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: false,
    blankReplacement: function(n, r) {
      return r.isBlock ? `

` : "";
    },
    keepReplacement: function(n, r) {
      return r.isBlock ? `

` + r.outerHTML + `

` : r.outerHTML;
    },
    defaultReplacement: function(n, r) {
      return r.isBlock ? `

` + n + `

` : n;
    }
  };
  this.options = Rk({}, e, t4), this.rules = new U0(this.options);
}
jn.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */
  turndown: function(t4) {
    if (!r6(t4))
      throw new TypeError(
        t4 + " is not a string, or an element/document/fragment node."
      );
    if (t4 === "") return "";
    var e = W0.call(this, new Wk(t4, this.options));
    return t6.call(this, e);
  },
  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */
  use: function(t4) {
    if (Array.isArray(t4))
      for (var e = 0; e < t4.length; e++) this.use(t4[e]);
    else if (typeof t4 == "function")
      t4(this);
    else
      throw new TypeError("plugin must be a Function or an Array of Functions");
    return this;
  },
  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  addRule: function(t4, e) {
    return this.rules.add(t4, e), this;
  },
  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  keep: function(t4) {
    return this.rules.keep(t4), this;
  },
  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  remove: function(t4) {
    return this.rules.remove(t4), this;
  },
  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */
  escape: function(t4) {
    return e6.reduce(function(e, n) {
      return e.replace(n[0], n[1]);
    }, t4);
  }
};
function W0(t4) {
  var e = this;
  return Xk.call(t4.childNodes, function(n, r) {
    r = new Gk(r, e.options);
    var i = "";
    return r.nodeType === 3 ? i = r.isCode ? r.nodeValue : e.escape(r.nodeValue) : r.nodeType === 1 && (i = n6.call(e, r)), K0(n, i);
  }, "");
}
function t6(t4) {
  var e = this;
  return this.rules.forEach(function(n) {
    typeof n.append == "function" && (t4 = K0(t4, n.append(e.options)));
  }), t4.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function n6(t4) {
  var e = this.rules.forNode(t4), n = W0.call(this, t4), r = t4.flankingWhitespace;
  return (r.leading || r.trailing) && (n = n.trim()), r.leading + e.replacement(n, t4, this.options) + r.trailing;
}
function K0(t4, e) {
  var n = Fk(t4), r = Ik(e), i = Math.max(t4.length - n.length, e.length - r.length), o = `

`.substring(0, i);
  return n + o + r;
}
function r6(t4) {
  return t4 != null && (typeof t4 == "string" || t4.nodeType && (t4.nodeType === 1 || t4.nodeType === 9 || t4.nodeType === 11));
}
function i6(t4, e, n) {
  const { src: r, posMax: i } = t4;
  let o = n;
  const s = e.length;
  for (; o + s <= i; ) {
    const u = r.indexOf(e, o);
    if (u === -1 || u + s > i) return -1;
    let l = 0, a = u - 1;
    for (; a >= 0 && r.charCodeAt(a) === 92; )
      l++, a--;
    if ((l & 1) === 0) return u;
    o = u + 1;
  }
  return -1;
}
function Af(t4) {
  const { name: e, marker: n, tag: r } = t4, i = n.charCodeAt(0);
  return function(o, s) {
    const { src: u, pos: l, posMax: a } = o;
    if (l + n.length > a || u.charCodeAt(l) !== i || u.slice(l, l + n.length) !== n) return false;
    const c = l + n.length;
    if (c >= a) return false;
    const f = i6(o, n, c);
    if (f === -1) return false;
    if (s)
      o.pos = f + n.length;
    else {
      o.push(`${e}_open`, r, 1);
      const d = o.posMax;
      o.pos = c, o.posMax = f, o.md.inline.tokenize(o), o.push(`${e}_close`, r, -1), o.pos = f + n.length, o.posMax = d;
    }
    return true;
  };
}
class o6 {
  md;
  td;
  constructor() {
    this.md = Se({
      html: false,
      breaks: true,
      linkify: true,
      typographer: true
    }), this.overrideMarkdownRules(this.md), this.td = new jn(), this.overrideTurndownRules(this.td);
  }
  parse(e) {
    return this.md.renderInline(e);
  }
  serialize(e, n) {
    return e ? this.td.turndown(Fb(e.toJSON(), n ?? [])) : "";
  }
  overrideMarkdownRules(e) {
    e.inline.ruler.before(
      "text",
      "underline_delim",
      Af({ name: "u", marker: "++", tag: "u" })
    ), e.inline.ruler.before(
      "text",
      "italic_delim",
      Af({ name: "em", marker: "_", tag: "em" })
    );
  }
  overrideTurndownRules(e) {
    jn.prototype.escape = (n) => [
      [/\\/g, "\\\\"],
      // \  → ]
      [/`/g, "\\`"],
      // `  → ]
      [/\*/g, "\\*"],
      // *  → ]
      [/_/g, "\\_"],
      // _  → ]
      [/~/g, "\\~"],
      // ~  → ]
      [/\+/g, "\\+"],
      // +  → ]
      [/\|/g, "\\|"],
      // |  → ]
      [/\[/g, "\\["],
      // [  → ]
      [/\]/g, "\\]"],
      // ]  → ]
      [/\(/g, "\\("],
      // (  → ]
      [/\)/g, "\\)"],
      // )  → ]
      [/(^|\n)(\s{0,3})([#>+\-*])(?=\s)/g, "$1$2\\$3"],
      [/(^|\n)(\s{0,3})(\d+)\.(?=\s)/g, "$1$2$3\\."],
      [/!\[/g, "\\!["]
    ].reduce((i, o) => {
      const [s, u] = o;
      return i.replace(s, u);
    }, n), e.addRule("underlineTag", {
      filter: (n) => n.nodeName === "U",
      replacement: (n) => `++${n}++`
    }), e.addRule("underlineStyle", {
      filter: (n) => {
        if (!(n instanceof HTMLElement)) return false;
        const r = n.getAttribute("style") || "";
        return /text-decoration\s*:\s*underline/i.test(r);
      },
      replacement: (n, r) => r.parentElement?.nodeName === "U" ? n : `++${n}++`
    }), e.addRule("italicTagAsUnderscore", {
      filter: (n) => n.nodeName === "I",
      replacement: (n) => `_${n}_`
    }), e.addRule("strikeTag", {
      filter: (n) => n.nodeName === "S",
      replacement: (n) => `~~${n}~~`
    });
  }
}
const s6 = (t4) => {
  if (!t4)
    return null;
  const e = "https";
  let n = t4.trim().replace(/\s+/g, "");
  /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(n) || (n.startsWith("//") ? n = `${e}:${n}` : n = `${e}://${n}`);
  const i = new URL(n);
  return i.hostname = i.hostname.toLowerCase(), i.pathname && (i.pathname = i.pathname.replace(/\/{2,}/g, "/")), i.pathname === "/" && (i.pathname = ""), i.toString();
}, u6 = (t4) => {
  try {
    return s6(t4);
  } catch {
    return null;
  }
};
class l6 {
  editor = null;
  placeholder = "";
  limit = 0;
  initialContentState = null;
  isNewLineDisabled = false;
  isHashtagsParsingDisabled = false;
  markdown = null;
  onEventListener = null;
  init(e) {
    this.editor = new v2({
      element: e,
      extensions: [
        I2,
        ly,
        cy,
        Ry.configure({
          preventNewlines: () => this.isNewLineDisabled
        }),
        My.configure({
          placeholder: () => this.placeholder
        }),
        _y,
        Oy,
        Py,
        Ky,
        Wy,
        sy.extend({ inclusive: false }).configure({
          openOnClick: false,
          defaultProtocol: "https",
          protocols: ["http", "https", "setka"],
          linkOnPaste: true
        }),
        qy.configure({
          rules: [Hy, Uy],
          onDetect: (n) => {
            switch (n.ruleId) {
              case "hashtag": {
                this.emit("hashtagSuggested", n.body);
                break;
              }
              case "mention": {
                this.emit("mentionSuggested", n.body);
                break;
              }
            }
          }
        }),
        Ny.configure({
          limit: () => this.limit,
          textCounter: (n) => [...new Intl.Segmenter().segment(n)].length,
          onChange: (n) => {
            this.emit("textCountChanged", n);
          }
        }),
        Fy.configure({
          isEnabled: () => !this.isHashtagsParsingDisabled
        }),
        By
      ]
    }), this.markdown = new o6(), this.wireEditorEvents(this.editor), this.rememberInitialContentState();
  }
  deinit() {
    this.editor && (this.unwireEditorEvents(this.editor), this.editor.destroy(), this.editor = null, this.onEventListener = null);
  }
  focus() {
    this.editor?.commands.focus();
  }
  blur() {
    this.editor?.commands.blur();
  }
  onEvent(e) {
    this.onEventListener = e;
  }
  toggleBold() {
    this.editor?.chain().focus().toggleBold().run(), this.handleEditorUpdate();
  }
  toggleItalic() {
    this.editor?.chain().focus().toggleItalic().run(), this.handleEditorUpdate();
  }
  toggleUnderline() {
    this.editor?.chain().focus().toggleUnderline().run(), this.handleEditorUpdate();
  }
  toggleStrike() {
    this.editor?.chain().focus().toggleStrike().run(), this.handleEditorUpdate();
  }
  disableNewLines(e) {
    this.isNewLineDisabled = e;
  }
  disableHashtagsParsing(e) {
    this.isHashtagsParsingDisabled = e;
  }
  applyLink(e) {
    if (!this.editor)
      return;
    const n = this.editor, r = u6(e);
    this.editor?.commands.restoreStableSelection(), setTimeout(() => {
      const i = n.chain().focus(), { state: o } = n, { from: s, empty: u } = o.selection, l = o.schema.marks.link, a = u && l ? bi(o.doc.resolve(s), l) : null;
      if (!e || !r) {
        a ? i.setTextSelection(a).unsetLink().run() : i.unsetLink().run();
        return;
      }
      if (a) {
        i.insertContentAt(a, e).setTextSelection({
          from: a.from,
          to: a.from + e.length
        }).setLink({ href: r }).setTextSelection(a.from + e.length).run();
        return;
      }
      if (u) {
        i.insertContent(e);
        const c = n.state.selection, f = c.head ?? c.from;
        i.setTextSelection({ from: f, to: f + e.length }).setLink({ href: r }).setTextSelection(f + e.length).run();
        return;
      }
      i.setLink({ href: r }).run();
    });
  }
  setMaxLength(e) {
    this.limit = e;
  }
  setPlaceholder(e) {
    this.placeholder = e;
  }
  setContent(e) {
    this.editor && (this.editor.chain().setContent(this.markdown?.parse(e) ?? "").setMeta("addToHistory", false).run(), this.rememberInitialContentState(), this.checkIsContentChanged());
  }
  clearContent() {
    this.editor?.commands.clearContent(true);
  }
  getContent() {
    return this.markdown ? this.markdown.serialize(
      this.editor?.view.state.doc,
      this.editor?.extensionManager.extensions
    ) : "";
  }
  getSelection() {
    if (!this.editor)
      return null;
    const { from: e, to: n } = this.editor.state.selection;
    return {
      start: e,
      end: n
    };
  }
  setSelection(e) {
    if (!this.editor || !e)
      return;
    const { start: n, end: r } = e;
    this.editor.chain().focus().setTextSelection({ from: n, to: r }).run();
  }
  insertText(e) {
    this.editor && this.editor.chain().insertContent(e).run();
  }
  getFormats() {
    if (!this.editor)
      return null;
    const e = this.editor.getAttributes(cn.link), n = e?.href ? {
      href: String(e.href),
      title: e.title
    } : null;
    return {
      bold: this.editor.isActive(cn.bold),
      italic: this.editor.isActive(cn.italic),
      underline: this.editor.isActive(cn.underline),
      strikethrough: this.editor.isActive(cn.strike),
      link: n
    };
  }
  getCursorRect() {
    if (!this.editor)
      return null;
    const { state: e, view: n } = this.editor, r = e.selection.from, i = this.editor.view.dom.getBoundingClientRect();
    try {
      const o = n.coordsAtPos(r);
      return {
        x: o.left,
        y: o.top - i.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      };
    } catch {
      return null;
    }
  }
  applyMention(e, n) {
    this.editor?.commands.applyDetectedSpecialWord({
      ruleId: "mention",
      content: e,
      attrs: {
        href: `${p0}${n}`
      }
    });
  }
  applyHashtag(e) {
    this.editor?.commands.applyDetectedSpecialWord({
      ruleId: "hashtag",
      content: e
    });
  }
  rememberInitialContentState() {
    this.editor && (this.initialContentState = this.editor.view.state.doc);
  }
  checkIsContentChanged() {
    if (!this.editor || !this.initialContentState)
      return;
    const n = !this.editor.view.state.doc.eq(this.initialContentState);
    this.emit("initialContentChanged", n);
  }
  wireEditorEvents(e) {
    const n = e.view.dom;
    n.addEventListener("focus", this.handleFocus), n.addEventListener("blur", this.handleBlur), e.on("update", this.handleEditorUpdate), e.on("selectionUpdate", this.handleSelectionUpdate), e.on("focus", this.handleFocus), e.on("blur", this.handleBlur);
  }
  unwireEditorEvents(e) {
    e.off("update", this.handleEditorUpdate), e.off("selectionUpdate", this.handleSelectionUpdate), e.off("focus", this.handleFocus), e.off("blur", this.handleBlur);
    const n = e.view.dom;
    n.removeEventListener("focus", this.handleFocus), n.removeEventListener("blur", this.handleBlur);
  }
  handleEditorUpdate = () => {
    const e = this.editor?.state.doc;
    if (!e)
      return;
    const n = e.textBetween(0, e.content.size, `
`, `
`);
    this.emit("textChanged", n);
    const r = this.getFormats();
    this.emit("formatsChanged", r), this.checkIsContentChanged();
    const i = this.getContent();
    this.emit("contentChanged", i);
  };
  handleSelectionUpdate = () => {
    const e = this.getSelection();
    this.emit("selectionChanged", e);
    const n = this.getCursorRect();
    this.emit("cursorRectChanged", n);
    const r = this.getFormats();
    this.emit("formatsChanged", r);
  };
  handleFocus = () => {
    this.editor?.commands.restoreStableSelection(), this.emit("focusChanged", true);
  };
  handleBlur = () => {
    this.editor?.commands.saveStableSelection(), this.emit("focusChanged", false);
  };
  emit(...e) {
    this.onEventListener?.(...e);
  }
}
const a6 = {
  textChanged: ([t4], [e]) => t4 === e,
  heightChanged: ([t4], [e]) => t4 === e,
  selectionChanged: ([t4], [e]) => t4?.start === e?.start && t4?.end === e?.end,
  formatsChanged: ([t4], [e]) => !t4 || !e ? false : Object.keys(t4).every((n) => {
    const r = n;
    return typeof t4[r] == "object" && typeof e[r] == "object" ? JSON.stringify(t4[r]) === JSON.stringify(e[r]) : t4[r] === e[r];
  }),
  focusChanged: ([t4], [e]) => t4 === e,
  mentionSuggested: ([t4], [e]) => t4 === e,
  hashtagSuggested: ([t4], [e]) => t4 === e,
  cursorRectChanged: ([t4], [e]) => Object.keys(t4 ?? {}).every((n) => {
    const r = n;
    return t4?.[r] === e?.[r];
  }),
  contentChanged: ([t4], [e]) => t4 === e,
  textCountChanged: ([t4], [e]) => t4 === e,
  initialContentChanged: ([t4], [e]) => t4 === e
};
class c6 {
  listeners = /* @__PURE__ */ new Map();
  anyListeners = /* @__PURE__ */ new Set();
  lastArgsByEvent = /* @__PURE__ */ new Map();
  deinit() {
    this.listeners.clear(), this.anyListeners.clear();
  }
  on(e, n) {
    let r = this.listeners.get(e);
    return r || (r = /* @__PURE__ */ new Set(), this.listeners.set(e, r)), r.add(n), () => {
      r.delete(n), r.size === 0 && this.listeners.delete(e);
    };
  }
  onAnyEvent(e) {
    return this.anyListeners.add(e), () => {
      this.anyListeners.delete(e);
    };
  }
  emit(e, ...n) {
    const r = a6[e], i = this.lastArgsByEvent.get(e);
    if (i && r && r(i, n))
      return;
    this.lastArgsByEvent.set(e, n);
    const o = this.listeners.get(e);
    o && [...o].forEach(
      (s) => s(...n)
    ), this.anyListeners.forEach((s) => s(e, ...n));
  }
}
class f6 {
  resizeObserver = null;
  onHeightChange = null;
  init(e, n) {
    this.setupResizeObserver(e), this.onHeightChange = n;
  }
  deinit() {
    this.teardownResizeObserver();
  }
  setupResizeObserver(e) {
    this.resizeObserver = new ResizeObserver((n) => {
      const r = n[0]?.contentRect;
      r && this.onHeightChange?.(r.height);
    }), this.resizeObserver.observe(e);
  }
  teardownResizeObserver() {
    this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
  }
}
class J0 {
  adapter;
  eventsObserver;
  resireObserver;
  constructor(e) {
    this.adapter = e, this.eventsObserver = new c6(), this.resireObserver = new f6();
  }
  init(e) {
    this.adapter?.onEvent(
      (n, ...r) => this.eventsObserver.emit(n, ...r)
    ), this.adapter?.init(e), this.resireObserver?.init(e, (n) => {
      this.eventsObserver.emit("heightChanged", n);
    });
  }
  deinit() {
    this.adapter.deinit(), this.eventsObserver.deinit(), this.resireObserver.deinit();
  }
  focus() {
    this.adapter.focus();
  }
  blur() {
    this.adapter.blur();
  }
  setMaxLength(e) {
    this.adapter.setMaxLength(e);
  }
  on(e, n) {
    return this.eventsObserver.on(e, n);
  }
  onAnyEvent(e) {
    return this.eventsObserver.onAnyEvent(e);
  }
  toggleBold() {
    this.adapter?.toggleBold();
  }
  toggleItalic() {
    this.adapter?.toggleItalic();
  }
  toggleUnderline() {
    this.adapter?.toggleUnderline();
  }
  toggleStrike() {
    this.adapter?.toggleStrike();
  }
  insertText(e) {
    this.adapter.insertText(e);
  }
  applyLink(e) {
    this.adapter?.applyLink(e);
  }
  setPlaceholder(e) {
    this.adapter?.setPlaceholder(e);
  }
  setContent(e) {
    this.adapter?.setContent(e);
  }
  getContent() {
    return this.adapter?.getContent() ?? "";
  }
  clearContent() {
    this.adapter?.clearContent();
  }
  getSelection() {
    return this.adapter?.getSelection() ?? null;
  }
  setSelection(e) {
    this.adapter?.setSelection(e);
  }
  getFormats() {
    return this.adapter?.getFormats() ?? {};
  }
  getCursorRect() {
    return this.adapter?.getCursorRect() ?? null;
  }
  applyMention(e, n) {
    this.adapter?.applyMention(e, n);
  }
  applyHashtag(e) {
    this.adapter?.applyHashtag(e);
  }
  disableNewLines(e) {
    this.adapter.disableNewLines(e);
  }
  disableHashtagsParsing(e) {
    this.adapter.disableHashtagsParsing(e);
  }
}
const G0 = new l6(), d6 = new J0(G0);
function h6(t4) {
  const e = new J0(G0);
  return e.init(t4), e;
}
window.setkaEditor = d6;
window.createSetkaEditor = h6;
export {
  h6 as createSetkaEditor,
  d6 as setkaEditor
};
