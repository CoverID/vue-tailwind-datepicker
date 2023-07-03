import { openBlock as Z, createElementBlock as J, createElementVNode as T, withDirectives as se, vShow as ie, toDisplayString as ne, Fragment as je, renderList as Re, inject as de, createVNode as re, TransitionGroup as _t, withCtx as _e, normalizeClass as we, Transition as lt, unref as R, createCommentVNode as ve, withModifiers as Me, cloneVNode as Vt, h as Pe, provide as ue, ref as oe, onMounted as Pt, watchEffect as ge, computed as ce, defineComponent as Ye, toRefs as Ct, reactive as Yt, nextTick as Ee, watch as at, isProxy as Tt, createBlock as Fe, renderSlot as At, mergeProps as Lt, vModelText as Bt } from "vue";
const Et = { class: "flex justify-between items-center px-2 py-1.5" }, Ft = { class: "flex-shrink-0" }, Nt = { class: "inline-flex rounded-full" }, Ht = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Rt = ["d"], It = { class: "px-1.5 space-x-1.5 flex flex-1" }, Ut = { class: "flex-1 flex rounded-md" }, zt = ["textContent"], Wt = { class: "flex-1 flex rounded-md" }, Zt = ["textContent"], Gt = { class: "flex-shrink-0" }, Kt = { class: "inline-flex rounded-full" }, Jt = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, qt = ["d"], Ue = {
  __name: "Header",
  props: {
    asPrevOrNext: Boolean,
    panel: Object,
    calendar: Object
  },
  setup(t) {
    return (i, a) => (Z(), J("div", Et, [
      T("div", Ft, [
        se(T("span", Nt, [
          T("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[0] || (a[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (Z(), J("svg", Ht, [
              T("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Rt)
            ]))
          ])
        ], 512), [
          [ie, t.panel.calendar || t.panel.year]
        ])
      ]),
      T("div", It, [
        T("span", Ut, [
          T("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: ne(t.calendar.month),
            onClick: a[1] || (a[1] = (e) => t.calendar.openMonth())
          }, null, 8, zt)
        ]),
        T("span", Wt, [
          T("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: ne(t.calendar.year),
            onClick: a[2] || (a[2] = (e) => t.calendar.openYear())
          }, null, 8, Zt)
        ])
      ]),
      T("div", Gt, [
        se(T("span", Kt, [
          T("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: a[3] || (a[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (Z(), J("svg", Jt, [
              T("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, qt)
            ]))
          ])
        ], 512), [
          [ie, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, Xt = { class: "flex flex-wrap mt-1.5" }, Qt = { class: "flex rounded-md mt-1.5" }, er = ["textContent", "onClick"], ze = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(t, { emit: i }) {
    return (a, e) => (Z(), J("div", Xt, [
      (Z(!0), J(je, null, Re(t.months, (s, u) => (Z(), J("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        T("span", Qt, [
          T("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: ne(s),
            onClick: (P) => i("update:month", u)
          }, null, 8, er)
        ])
      ]))), 128))
    ]));
  }
}, tr = { class: "grid grid-cols-7 py-2 mt-0.5" }, rr = ["textContent"], We = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(t) {
    return (i, a) => (Z(), J("div", tr, [
      (Z(!0), J(je, null, Re(t.weeks, (e, s) => (Z(), J("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        T("span", {
          textContent: ne(e)
        }, null, 8, rr)
      ]))), 128))
    ]));
  }
}, or = { class: "flex flex-wrap" }, ar = { class: "flex rounded-md mt-1.5" }, nr = ["textContent", "onClick"], Ze = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(t, { emit: i }) {
    return (a, e) => (Z(), J("div", or, [
      (Z(!0), J(je, null, Re(t.years, (s, u) => (Z(), J("div", {
        key: u,
        class: "w-1/2 px-0.5"
      }, [
        T("span", ar, [
          T("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: ne(s),
            onClick: (P) => i("update:year", s, t.asPrevOrNext)
          }, null, 8, nr)
        ])
      ]))), 128))
    ]));
  }
}, sr = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, lr = ["data-tooltip"], ir = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Ge = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: i }) {
    const a = de("isBetweenRange"), e = de("betweenRangeClasses"), s = de("datepickerClasses"), u = de("atMouseOver");
    return (P, c) => (Z(), J("div", sr, [
      re(_t, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: _e(() => [
          (Z(!0), J(je, null, Re(t.calendar.date(), (v, h) => (Z(), J("div", {
            key: h,
            class: we(["relative", { "vtd-tooltip": t.asRange && v.duration() }]),
            "data-tooltip": `${v.duration()}`
          }, [
            re(lt, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: _e(() => [
                R(a)(v) || v.hovered() ? (Z(), J("span", {
                  key: 0,
                  class: we(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", R(e)(v)])
                }, null, 2)) : ve("", !0)
              ]),
              _: 2
            }, 1024),
            T("button", {
              type: "button",
              class: we(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [R(s)(v), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: v.disabled || v.inRange(),
              onClick: (k) => i("update:date", v, t.asPrevOrNext),
              onMouseenter: (k) => R(u)(v),
              onFocusin: (k) => R(u)(v),
              textContent: ne(v.date()),
              "data-date": v.toDate()
            }, null, 42, ir)
          ], 10, lr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, ur = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, dr = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, cr = ["onClick", "textContent"], fr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, nt = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const i = t, a = de("setToToday"), e = de("setToYesterday"), s = de("setToLastDay"), u = de("setToThisMonth"), P = de("setToLastMonth"), c = de("setToCustomShortcut"), v = () => typeof i.shortcuts == "function" ? i.shortcuts() : !1;
    return (h, k) => i.asRange && i.asSingle || i.asRange && !i.asSingle ? (Z(), J("div", ur, [
      v() ? (Z(), J("ol", dr, [
        (Z(!0), J(je, null, Re(v(), (b, w) => (Z(), J("li", { key: w }, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Me((N) => R(c)(b, t.close), ["prevent"]),
            textContent: ne(b.label)
          }, null, 8, cr)
        ]))), 128))
      ])) : (Z(), J("ol", fr, [
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[0] || (k[0] = Me((b) => R(a)(t.close), ["prevent"]))
          }, ne(i.i18n.today), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[1] || (k[1] = Me((b) => R(e)(t.close), ["prevent"]))
          }, ne(i.i18n.yesterday), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[2] || (k[2] = Me((b) => R(s)(7, t.close), ["prevent"]))
          }, ne(i.i18n.past(7)), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[3] || (k[3] = Me((b) => R(s)(30, t.close), ["prevent"]))
          }, ne(i.i18n.past(30)), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[4] || (k[4] = Me((b) => R(u)(t.close), ["prevent"]))
          }, ne(i.i18n.currentMonth), 1)
        ]),
        T("li", null, [
          T("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[5] || (k[5] = Me((b) => R(P)(t.close), ["prevent"]))
          }, ne(i.i18n.pastMonth), 1)
        ])
      ]))
    ])) : ve("", !0);
  }
};
function $e(t, i, ...a) {
  if (t in i) {
    let s = i[t];
    return typeof s == "function" ? s(...a) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(i).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, $e), e;
}
var Ne = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Ne || {}), pr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(pr || {});
function Te({ visible: t = !0, features: i = 0, ourProps: a, theirProps: e, ...s }) {
  var u;
  let P = mr(e, a), c = Object.assign(s, { props: P });
  if (t || i & 2 && P.static)
    return Xe(c);
  if (i & 1) {
    let v = (u = P.unmount) == null || u ? 0 : 1;
    return $e(v, { [0]() {
      return null;
    }, [1]() {
      return Xe({ ...s, props: { ...P, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xe(c);
}
function Xe({ props: t, attrs: i, slots: a, slot: e, name: s }) {
  var u;
  let { as: P, ...c } = ut(t, ["unmount", "static"]), v = (u = a.default) == null ? void 0 : u.call(a, e), h = {};
  if (e) {
    let k = !1, b = [];
    for (let [w, N] of Object.entries(e))
      typeof N == "boolean" && (k = !0), N === !0 && b.push(w);
    k && (h["data-headlessui-state"] = b.join(" "));
  }
  if (P === "template") {
    if (v = it(v), Object.keys(c).length > 0 || Object.keys(i).length > 0) {
      let [k, ...b] = v != null ? v : [];
      if (!vr(k) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(i)).sort((w, N) => w.localeCompare(N)).map((w) => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((w) => `  - ${w}`).join(`
`)].join(`
`));
      return Vt(k, Object.assign({}, c, h));
    }
    return Array.isArray(v) && v.length === 1 ? v[0] : v;
  }
  return Pe(P, Object.assign({}, c, h), v);
}
function it(t) {
  return t.flatMap((i) => i.type === je ? it(i.children) : [i]);
}
function mr(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let i = {}, a = {};
  for (let e of t)
    for (let s in e)
      s.startsWith("on") && typeof e[s] == "function" ? (a[s] != null || (a[s] = []), a[s].push(e[s])) : i[s] = e[s];
  if (i.disabled || i["aria-disabled"])
    return Object.assign(i, Object.fromEntries(Object.keys(a).map((e) => [e, void 0])));
  for (let e in a)
    Object.assign(i, { [e](s, ...u) {
      let P = a[e];
      for (let c of P) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        c(s, ...u);
      }
    } });
  return i;
}
function ut(t, i = []) {
  let a = Object.assign({}, t);
  for (let e of i)
    e in a && delete a[e];
  return a;
}
function vr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let hr = 0;
function yr() {
  return ++hr;
}
function Ce() {
  return yr();
}
var ke = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(ke || {});
function W(t) {
  var i;
  return t == null || t.value == null ? null : (i = t.value.$el) != null ? i : t.value;
}
let dt = Symbol("Context");
var He = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(He || {});
function ct() {
  return de(dt, null);
}
function br(t) {
  ue(dt, t);
}
function st(t, i) {
  if (t)
    return t;
  let a = i != null ? i : "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function xr(t, i) {
  let a = oe(st(t.value.type, t.value.as));
  return Pt(() => {
    a.value = st(t.value.type, t.value.as);
  }), ge(() => {
    var e;
    a.value || !W(i) || W(i) instanceof HTMLButtonElement && !((e = W(i)) != null && e.hasAttribute("type")) && (a.value = "button");
  }), a;
}
const Je = typeof window > "u" || typeof document > "u";
function Ie(t) {
  if (Je)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let i = W(t);
    if (i)
      return i.ownerDocument;
  }
  return document;
}
let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var Se = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(Se || {}), gr = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(gr || {}), kr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(kr || {});
function ft(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(et));
}
var rt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(rt || {});
function pt(t, i = 0) {
  var a;
  return t === ((a = Ie(t)) == null ? void 0 : a.body) ? !1 : $e(i, { [0]() {
    return t.matches(et);
  }, [1]() {
    let e = t;
    for (; e !== null; ) {
      if (e.matches(et))
        return !0;
      e = e.parentElement;
    }
    return !1;
  } });
}
let wr = ["textarea", "input"].join(",");
function $r(t) {
  var i, a;
  return (a = (i = t == null ? void 0 : t.matches) == null ? void 0 : i.call(t, wr)) != null ? a : !1;
}
function jr(t, i = (a) => a) {
  return t.slice().sort((a, e) => {
    let s = i(a), u = i(e);
    if (s === null || u === null)
      return 0;
    let P = s.compareDocumentPosition(u);
    return P & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : P & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ve(t, i, a = !0, e = null) {
  var s;
  let u = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, P = Array.isArray(t) ? a ? jr(t) : t : ft(t);
  e = e != null ? e : u.activeElement;
  let c = (() => {
    if (i & 5)
      return 1;
    if (i & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = (() => {
    if (i & 1)
      return 0;
    if (i & 2)
      return Math.max(0, P.indexOf(e)) - 1;
    if (i & 4)
      return Math.max(0, P.indexOf(e)) + 1;
    if (i & 8)
      return P.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = i & 32 ? { preventScroll: !0 } : {}, k = 0, b = P.length, w;
  do {
    if (k >= b || k + b <= 0)
      return 0;
    let N = v + k;
    if (i & 16)
      N = (N + b) % b;
    else {
      if (N < 0)
        return 3;
      if (N >= b)
        return 1;
    }
    w = P[N], w == null || w.focus(h), k += c;
  } while (w !== u.activeElement);
  return i & 6 && $r(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function Qe(t, i, a) {
  Je || ge((e) => {
    document.addEventListener(t, i, a), e(() => document.removeEventListener(t, i, a));
  });
}
function Mr(t, i, a = ce(() => !0)) {
  function e(u, P) {
    if (!a.value || u.defaultPrevented)
      return;
    let c = P(u);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let v = function h(k) {
      return typeof k == "function" ? h(k()) : Array.isArray(k) || k instanceof Set ? k : [k];
    }(t);
    for (let h of v) {
      if (h === null)
        continue;
      let k = h instanceof HTMLElement ? h : W(h);
      if (k != null && k.contains(c))
        return;
    }
    return !pt(c, rt.Loose) && c.tabIndex !== -1 && u.preventDefault(), i(u, c);
  }
  let s = oe(null);
  Qe("mousedown", (u) => {
    a.value && (s.value = u.target);
  }, !0), Qe("click", (u) => {
    !s.value || (e(u, () => s.value), s.value = null);
  }, !0), Qe("blur", (u) => e(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ke = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ke || {});
let tt = Ye({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: i, attrs: a }) {
  return () => {
    let { features: e, ...s } = t, u = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Te({ ourProps: u, theirProps: s, slot: {}, attrs: a, slots: i, name: "Hidden" });
  };
} });
function Sr(t, i, a) {
  Je || ge((e) => {
    window.addEventListener(t, i, a), e(() => window.removeEventListener(t, i, a));
  });
}
var De = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(De || {});
function mt() {
  let t = oe(0);
  return Sr("keydown", (i) => {
    i.key === "Tab" && (t.value = i.shiftKey ? 1 : 0);
  }), t;
}
function Dr(t, i, a, e) {
  Je || ge((s) => {
    t = t != null ? t : window, t.addEventListener(i, a, e), s(() => t.removeEventListener(i, a, e));
  });
}
var Or = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(Or || {});
let vt = Symbol("PopoverContext");
function qe(t) {
  let i = de(vt, null);
  if (i === null) {
    let a = new Error(`<${t} /> is missing a parent <${xt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, qe), a;
  }
  return i;
}
let ht = Symbol("PopoverGroupContext");
function yt() {
  return de(ht, null);
}
let bt = Symbol("PopoverPanelContext");
function _r() {
  return de(bt, null);
}
let xt = Ye({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: i, attrs: a, expose: e }) {
  var s;
  let u = `headlessui-popover-button-${Ce()}`, P = `headlessui-popover-panel-${Ce()}`, c = oe(null);
  e({ el: c, $el: c });
  let v = oe(1), h = oe(null), k = oe(null), b = oe(null), w = oe(null), N = ce(() => Ie(c)), G = ce(() => {
    if (!W(h) || !W(w))
      return !1;
    for (let j of document.querySelectorAll("body > *"))
      if (Number(j == null ? void 0 : j.contains(W(h))) ^ Number(j == null ? void 0 : j.contains(W(w))))
        return !0;
    return !1;
  }), M = { popoverState: v, buttonId: u, panelId: P, panel: w, button: h, isPortalled: G, beforePanelSentinel: k, afterPanelSentinel: b, togglePopover() {
    v.value = $e(v.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    v.value !== 1 && (v.value = 1);
  }, close(j) {
    M.closePopover();
    let O = (() => j ? j instanceof HTMLElement ? j : j.value instanceof HTMLElement ? W(j) : W(M.button) : W(M.button))();
    O == null || O.focus();
  } };
  ue(vt, M), br(ce(() => $e(v.value, { [0]: He.Open, [1]: He.Closed })));
  let _ = { buttonId: u, panelId: P, close() {
    M.closePopover();
  } }, S = yt(), g = S == null ? void 0 : S.registerPopover;
  function V() {
    var j, O, $, n;
    return (n = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? n : ((j = N.value) == null ? void 0 : j.activeElement) && (((O = W(h)) == null ? void 0 : O.contains(N.value.activeElement)) || (($ = W(w)) == null ? void 0 : $.contains(N.value.activeElement)));
  }
  return ge(() => g == null ? void 0 : g(_)), Dr((s = N.value) == null ? void 0 : s.defaultView, "focus", (j) => {
    var O, $;
    v.value === 0 && (V() || !h || !w || (O = W(M.beforePanelSentinel)) != null && O.contains(j.target) || ($ = W(M.afterPanelSentinel)) != null && $.contains(j.target) || M.closePopover());
  }, !0), Mr([h, w], (j, O) => {
    var $;
    M.closePopover(), pt(O, rt.Loose) || (j.preventDefault(), ($ = W(h)) == null || $.focus());
  }, ce(() => v.value === 0)), () => {
    let j = { open: v.value === 0, close: M.close };
    return Te({ theirProps: t, ourProps: { ref: c }, slot: j, slots: i, attrs: a, name: "Popover" });
  };
} }), Vr = Ye({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(t, { attrs: i, slots: a, expose: e }) {
  let s = qe("PopoverButton"), u = ce(() => Ie(s.button));
  e({ el: s.button, $el: s.button });
  let P = yt(), c = P == null ? void 0 : P.closeOthers, v = _r(), h = v === null ? !1 : v === s.panelId, k = oe(null), b = `headlessui-focus-sentinel-${Ce()}`;
  h || ge(() => {
    s.button.value = k.value;
  });
  let w = xr(ce(() => ({ as: t.as, type: i.type })), k);
  function N(S) {
    var g, V, j, O, $;
    if (h) {
      if (s.popoverState.value === 1)
        return;
      switch (S.key) {
        case ke.Space:
        case ke.Enter:
          S.preventDefault(), (V = (g = S.target).click) == null || V.call(g), s.closePopover(), (j = W(s.button)) == null || j.focus();
          break;
      }
    } else
      switch (S.key) {
        case ke.Space:
        case ke.Enter:
          S.preventDefault(), S.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case ke.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!W(s.button) || ((O = u.value) == null ? void 0 : O.activeElement) && !(($ = W(s.button)) != null && $.contains(u.value.activeElement)))
            return;
          S.preventDefault(), S.stopPropagation(), s.closePopover();
          break;
      }
  }
  function G(S) {
    h || S.key === ke.Space && S.preventDefault();
  }
  function M(S) {
    var g, V;
    t.disabled || (h ? (s.closePopover(), (g = W(s.button)) == null || g.focus()) : (S.preventDefault(), S.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (V = W(s.button)) == null || V.focus()));
  }
  function _(S) {
    S.preventDefault(), S.stopPropagation();
  }
  return () => {
    let S = s.popoverState.value === 0, g = { open: S }, V = h ? { ref: k, type: w.value, onKeydown: N, onClick: M } : { ref: k, id: s.buttonId, type: w.value, "aria-expanded": t.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": W(s.panel) ? s.panelId : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: N, onKeyup: G, onClick: M, onMousedown: _ }, j = mt();
    function O() {
      let $ = W(s.panel);
      if (!$)
        return;
      function n() {
        $e(j.value, { [De.Forwards]: () => Ve($, Se.First), [De.Backwards]: () => Ve($, Se.Last) });
      }
      n();
    }
    return Pe(je, [Te({ ourProps: V, theirProps: { ...i, ...t }, slot: g, attrs: i, slots: a, name: "PopoverButton" }), S && !h && s.isPortalled.value && Pe(tt, { id: b, features: Ke.Focusable, as: "button", type: "button", onFocus: O })]);
  };
} }), Pr = Ye({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: i, slots: a }) {
  let e = qe("PopoverOverlay"), s = `headlessui-popover-overlay-${Ce()}`, u = ct(), P = ce(() => u !== null ? u.value === He.Open : e.popoverState.value === 0);
  function c() {
    e.closePopover();
  }
  return () => {
    let v = { open: e.popoverState.value === 0 };
    return Te({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: t, slot: v, attrs: i, slots: a, features: Ne.RenderStrategy | Ne.Static, visible: P.value, name: "PopoverOverlay" });
  };
} }), Cr = Ye({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(t, { attrs: i, slots: a, expose: e }) {
  let { focus: s } = t, u = qe("PopoverPanel"), P = ce(() => Ie(u.panel)), c = `headlessui-focus-sentinel-before-${Ce()}`, v = `headlessui-focus-sentinel-after-${Ce()}`;
  e({ el: u.panel, $el: u.panel }), ue(bt, u.panelId), ge(() => {
    var _, S;
    if (!s || u.popoverState.value !== 0 || !u.panel)
      return;
    let g = (_ = P.value) == null ? void 0 : _.activeElement;
    (S = W(u.panel)) != null && S.contains(g) || Ve(W(u.panel), Se.First);
  });
  let h = ct(), k = ce(() => h !== null ? h.value === He.Open : u.popoverState.value === 0);
  function b(_) {
    var S, g;
    switch (_.key) {
      case ke.Escape:
        if (u.popoverState.value !== 0 || !W(u.panel) || P.value && !((S = W(u.panel)) != null && S.contains(P.value.activeElement)))
          return;
        _.preventDefault(), _.stopPropagation(), u.closePopover(), (g = W(u.button)) == null || g.focus();
        break;
    }
  }
  function w(_) {
    var S, g, V, j, O;
    let $ = _.relatedTarget;
    !$ || !W(u.panel) || (S = W(u.panel)) != null && S.contains($) || (u.closePopover(), (((V = (g = W(u.beforePanelSentinel)) == null ? void 0 : g.contains) == null ? void 0 : V.call(g, $)) || ((O = (j = W(u.afterPanelSentinel)) == null ? void 0 : j.contains) == null ? void 0 : O.call(j, $))) && $.focus({ preventScroll: !0 }));
  }
  let N = mt();
  function G() {
    let _ = W(u.panel);
    if (!_)
      return;
    function S() {
      $e(N.value, { [De.Forwards]: () => {
        Ve(_, Se.Next);
      }, [De.Backwards]: () => {
        var g;
        (g = W(u.button)) == null || g.focus({ preventScroll: !0 });
      } });
    }
    S();
  }
  function M() {
    let _ = W(u.panel);
    if (!_)
      return;
    function S() {
      $e(N.value, { [De.Forwards]: () => {
        var g, V;
        let j = W(u.button), O = W(u.panel);
        if (!j)
          return;
        let $ = ft(), n = $.indexOf(j), o = $.slice(0, n + 1), L = [...$.slice(n + 1), ...o];
        for (let C of L.slice())
          if (((V = (g = C == null ? void 0 : C.id) == null ? void 0 : g.startsWith) == null ? void 0 : V.call(g, "headlessui-focus-sentinel-")) || (O == null ? void 0 : O.contains(C))) {
            let E = L.indexOf(C);
            E !== -1 && L.splice(E, 1);
          }
        Ve(L, Se.First, !1);
      }, [De.Backwards]: () => Ve(_, Se.Previous) });
    }
    S();
  }
  return () => {
    let _ = { open: u.popoverState.value === 0, close: u.close }, S = { ref: u.panel, id: u.panelId, onKeydown: b, onFocusout: s && u.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return Te({ ourProps: S, theirProps: { ...i, ...ut(t, ["focus"]) }, attrs: i, slot: _, slots: { ...a, default: (...g) => {
      var V;
      return [Pe(je, [k.value && u.isPortalled.value && Pe(tt, { id: c, ref: u.beforePanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: G }), (V = a.default) == null ? void 0 : V.call(a, ...g), k.value && u.isPortalled.value && Pe(tt, { id: v, ref: u.afterPanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: M })])];
    } }, features: Ne.RenderStrategy | Ne.Static, visible: k.value, name: "PopoverPanel" });
  };
} });
Ye({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: i, slots: a, expose: e }) {
  let s = oe(null), u = oe([]), P = ce(() => Ie(s));
  e({ el: s, $el: s });
  function c(b) {
    let w = u.value.indexOf(b);
    w !== -1 && u.value.splice(w, 1);
  }
  function v(b) {
    return u.value.push(b), () => {
      c(b);
    };
  }
  function h() {
    var b;
    let w = P.value;
    if (!w)
      return !1;
    let N = w.activeElement;
    return (b = W(s)) != null && b.contains(N) ? !0 : u.value.some((G) => {
      var M, _;
      return ((M = w.getElementById(G.buttonId)) == null ? void 0 : M.contains(N)) || ((_ = w.getElementById(G.panelId)) == null ? void 0 : _.contains(N));
    });
  }
  function k(b) {
    for (let w of u.value)
      w.buttonId !== b && w.close();
  }
  return ue(ht, { registerPopover: v, unregisterPopover: c, isFocusWithinPopoverGroup: h, closeOthers: k }), () => Te({ ourProps: { ref: s }, theirProps: t, slot: {}, attrs: i, slots: a, name: "PopoverGroup" });
} });
var Oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gt = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    var a = 1e3, e = 6e4, s = 36e5, u = "millisecond", P = "second", c = "minute", v = "hour", h = "day", k = "week", b = "month", w = "quarter", N = "year", G = "date", M = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var D = ["th", "st", "nd", "rd"], y = A % 100;
      return "[" + A + (D[(y - 20) % 10] || D[y] || D[0]) + "]";
    } }, V = function(A, D, y) {
      var Y = String(A);
      return !Y || Y.length >= D ? A : "" + Array(D + 1 - Y.length).join(y) + A;
    }, j = { s: V, z: function(A) {
      var D = -A.utcOffset(), y = Math.abs(D), Y = Math.floor(y / 60), m = y % 60;
      return (D <= 0 ? "+" : "-") + V(Y, 2, "0") + ":" + V(m, 2, "0");
    }, m: function A(D, y) {
      if (D.date() < y.date())
        return -A(y, D);
      var Y = 12 * (y.year() - D.year()) + (y.month() - D.month()), m = D.clone().add(Y, b), H = y - m < 0, B = D.clone().add(Y + (H ? -1 : 1), b);
      return +(-(Y + (y - m) / (H ? m - B : B - m)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: b, y: N, w: k, d: h, D: G, h: v, m: c, s: P, ms: u, Q: w }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, O = "en", $ = {};
    $[O] = g;
    var n = function(A) {
      return A instanceof E;
    }, o = function A(D, y, Y) {
      var m;
      if (!D)
        return O;
      if (typeof D == "string") {
        var H = D.toLowerCase();
        $[H] && (m = H), y && ($[H] = y, m = H);
        var B = D.split("-");
        if (!m && B.length > 1)
          return A(B[0]);
      } else {
        var z = D.name;
        $[z] = D, m = z;
      }
      return !Y && m && (O = m), m || !Y && O;
    }, L = function(A, D) {
      if (n(A))
        return A.clone();
      var y = typeof D == "object" ? D : {};
      return y.date = A, y.args = arguments, new E(y);
    }, C = j;
    C.l = o, C.i = n, C.w = function(A, D) {
      return L(A, { locale: D.$L, utc: D.$u, x: D.$x, $offset: D.$offset });
    };
    var E = function() {
      function A(y) {
        this.$L = o(y.locale, null, !0), this.parse(y);
      }
      var D = A.prototype;
      return D.parse = function(y) {
        this.$d = function(Y) {
          var m = Y.date, H = Y.utc;
          if (m === null)
            return new Date(NaN);
          if (C.u(m))
            return new Date();
          if (m instanceof Date)
            return new Date(m);
          if (typeof m == "string" && !/Z$/i.test(m)) {
            var B = m.match(_);
            if (B) {
              var z = B[2] - 1 || 0, X = (B[7] || "0").substring(0, 3);
              return H ? new Date(Date.UTC(B[1], z, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, X)) : new Date(B[1], z, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, X);
            }
          }
          return new Date(m);
        }(y), this.$x = y.x || {}, this.init();
      }, D.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, D.$utils = function() {
        return C;
      }, D.isValid = function() {
        return this.$d.toString() !== M;
      }, D.isSame = function(y, Y) {
        var m = L(y);
        return this.startOf(Y) <= m && m <= this.endOf(Y);
      }, D.isAfter = function(y, Y) {
        return L(y) < this.startOf(Y);
      }, D.isBefore = function(y, Y) {
        return this.endOf(Y) < L(y);
      }, D.$g = function(y, Y, m) {
        return C.u(y) ? this[Y] : this.set(m, y);
      }, D.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, D.valueOf = function() {
        return this.$d.getTime();
      }, D.startOf = function(y, Y) {
        var m = this, H = !!C.u(Y) || Y, B = C.p(y), z = function(me, ee) {
          var le = C.w(m.$u ? Date.UTC(m.$y, ee, me) : new Date(m.$y, ee, me), m);
          return H ? le : le.endOf(h);
        }, X = function(me, ee) {
          return C.w(m.toDate()[me].apply(m.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), m);
        }, K = this.$W, ae = this.$M, pe = this.$D, fe = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case N:
            return H ? z(1, 0) : z(31, 11);
          case b:
            return H ? z(1, ae) : z(0, ae + 1);
          case k:
            var xe = this.$locale().weekStart || 0, he = (K < xe ? K + 7 : K) - xe;
            return z(H ? pe - he : pe + (6 - he), ae);
          case h:
          case G:
            return X(fe + "Hours", 0);
          case v:
            return X(fe + "Minutes", 1);
          case c:
            return X(fe + "Seconds", 2);
          case P:
            return X(fe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, D.endOf = function(y) {
        return this.startOf(y, !1);
      }, D.$set = function(y, Y) {
        var m, H = C.p(y), B = "set" + (this.$u ? "UTC" : ""), z = (m = {}, m[h] = B + "Date", m[G] = B + "Date", m[b] = B + "Month", m[N] = B + "FullYear", m[v] = B + "Hours", m[c] = B + "Minutes", m[P] = B + "Seconds", m[u] = B + "Milliseconds", m)[H], X = H === h ? this.$D + (Y - this.$W) : Y;
        if (H === b || H === N) {
          var K = this.clone().set(G, 1);
          K.$d[z](X), K.init(), this.$d = K.set(G, Math.min(this.$D, K.daysInMonth())).$d;
        } else
          z && this.$d[z](X);
        return this.init(), this;
      }, D.set = function(y, Y) {
        return this.clone().$set(y, Y);
      }, D.get = function(y) {
        return this[C.p(y)]();
      }, D.add = function(y, Y) {
        var m, H = this;
        y = Number(y);
        var B = C.p(Y), z = function(ae) {
          var pe = L(H);
          return C.w(pe.date(pe.date() + Math.round(ae * y)), H);
        };
        if (B === b)
          return this.set(b, this.$M + y);
        if (B === N)
          return this.set(N, this.$y + y);
        if (B === h)
          return z(1);
        if (B === k)
          return z(7);
        var X = (m = {}, m[c] = e, m[v] = s, m[P] = a, m)[B] || 1, K = this.$d.getTime() + y * X;
        return C.w(K, this);
      }, D.subtract = function(y, Y) {
        return this.add(-1 * y, Y);
      }, D.format = function(y) {
        var Y = this, m = this.$locale();
        if (!this.isValid())
          return m.invalidDate || M;
        var H = y || "YYYY-MM-DDTHH:mm:ssZ", B = C.z(this), z = this.$H, X = this.$m, K = this.$M, ae = m.weekdays, pe = m.months, fe = function(ee, le, ye, be) {
          return ee && (ee[le] || ee(Y, H)) || ye[le].slice(0, be);
        }, xe = function(ee) {
          return C.s(z % 12 || 12, ee, "0");
        }, he = m.meridiem || function(ee, le, ye) {
          var be = ee < 12 ? "AM" : "PM";
          return ye ? be.toLowerCase() : be;
        }, me = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: K + 1, MM: C.s(K + 1, 2, "0"), MMM: fe(m.monthsShort, K, pe, 3), MMMM: fe(pe, K), D: this.$D, DD: C.s(this.$D, 2, "0"), d: String(this.$W), dd: fe(m.weekdaysMin, this.$W, ae, 2), ddd: fe(m.weekdaysShort, this.$W, ae, 3), dddd: ae[this.$W], H: String(z), HH: C.s(z, 2, "0"), h: xe(1), hh: xe(2), a: he(z, X, !0), A: he(z, X, !1), m: String(X), mm: C.s(X, 2, "0"), s: String(this.$s), ss: C.s(this.$s, 2, "0"), SSS: C.s(this.$ms, 3, "0"), Z: B };
        return H.replace(S, function(ee, le) {
          return le || me[ee] || B.replace(":", "");
        });
      }, D.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, D.diff = function(y, Y, m) {
        var H, B = C.p(Y), z = L(y), X = (z.utcOffset() - this.utcOffset()) * e, K = this - z, ae = C.m(this, z);
        return ae = (H = {}, H[N] = ae / 12, H[b] = ae, H[w] = ae / 3, H[k] = (K - X) / 6048e5, H[h] = (K - X) / 864e5, H[v] = K / s, H[c] = K / e, H[P] = K / a, H)[B] || K, m ? ae : C.a(ae);
      }, D.daysInMonth = function() {
        return this.endOf(b).$D;
      }, D.$locale = function() {
        return $[this.$L];
      }, D.locale = function(y, Y) {
        if (!y)
          return this.$L;
        var m = this.clone(), H = o(y, Y, !0);
        return H && (m.$L = H), m;
      }, D.clone = function() {
        return C.w(this.$d, this);
      }, D.toDate = function() {
        return new Date(this.valueOf());
      }, D.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, D.toISOString = function() {
        return this.$d.toISOString();
      }, D.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), q = E.prototype;
    return L.prototype = q, [["$ms", u], ["$s", P], ["$m", c], ["$H", v], ["$W", h], ["$M", b], ["$y", N], ["$D", G]].forEach(function(A) {
      q[A[1]] = function(D) {
        return this.$g(D, A[0], A[1]);
      };
    }), L.extend = function(A, D) {
      return A.$i || (A(D, E, L), A.$i = !0), L;
    }, L.locale = o, L.isDayjs = n, L.unix = function(A) {
      return L(1e3 * A);
    }, L.en = $[O], L.Ls = $, L.p = {}, L;
  });
})(gt);
const l = gt.exports;
var kt = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    return function(a, e, s) {
      var u = e.prototype, P = function(b) {
        return b && (b.indexOf ? b : b.s);
      }, c = function(b, w, N, G, M) {
        var _ = b.name ? b : b.$locale(), S = P(_[w]), g = P(_[N]), V = S || g.map(function(O) {
          return O.slice(0, G);
        });
        if (!M)
          return V;
        var j = _.weekStart;
        return V.map(function(O, $) {
          return V[($ + (j || 0)) % 7];
        });
      }, v = function() {
        return s.Ls[s.locale()];
      }, h = function(b, w) {
        return b.formats[w] || function(N) {
          return N.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, M, _) {
            return M || _.slice(1);
          });
        }(b.formats[w.toUpperCase()]);
      }, k = function() {
        var b = this;
        return { months: function(w) {
          return w ? w.format("MMMM") : c(b, "months");
        }, monthsShort: function(w) {
          return w ? w.format("MMM") : c(b, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return b.$locale().weekStart || 0;
        }, weekdays: function(w) {
          return w ? w.format("dddd") : c(b, "weekdays");
        }, weekdaysMin: function(w) {
          return w ? w.format("dd") : c(b, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(w) {
          return w ? w.format("ddd") : c(b, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(w) {
          return h(b.$locale(), w);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      u.localeData = function() {
        return k.bind(this)();
      }, s.localeData = function() {
        var b = v();
        return { firstDayOfWeek: function() {
          return b.weekStart || 0;
        }, weekdays: function() {
          return s.weekdays();
        }, weekdaysShort: function() {
          return s.weekdaysShort();
        }, weekdaysMin: function() {
          return s.weekdaysMin();
        }, months: function() {
          return s.months();
        }, monthsShort: function() {
          return s.monthsShort();
        }, longDateFormat: function(w) {
          return h(b, w);
        }, meridiem: b.meridiem, ordinal: b.ordinal };
      }, s.months = function() {
        return c(v(), "months");
      }, s.monthsShort = function() {
        return c(v(), "monthsShort", "months", 3);
      }, s.weekdays = function(b) {
        return c(v(), "weekdays", null, null, b);
      }, s.weekdaysShort = function(b) {
        return c(v(), "weekdaysShort", "weekdays", 3, b);
      }, s.weekdaysMin = function(b) {
        return c(v(), "weekdaysMin", "weekdays", 2, b);
      };
    };
  });
})(kt);
const Yr = kt.exports;
var wt = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, u) {
      var P = s.prototype, c = P.format;
      u.en.formats = a, P.format = function(v) {
        v === void 0 && (v = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, k = function(b, w) {
          return b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(N, G, M) {
            var _ = M && M.toUpperCase();
            return G || w[M] || a[M] || w[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(S, g, V) {
              return g || V.slice(1);
            });
          });
        }(v, h === void 0 ? {} : h);
        return c.call(this, k);
      };
    };
  });
})(wt);
const Tr = wt.exports;
var $t = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    var a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, u = /\d\d?/, P = /\d*[^-_:/,()\s\d]+/, c = {}, v = function(M) {
      return (M = +M) + (M > 68 ? 1900 : 2e3);
    }, h = function(M) {
      return function(_) {
        this[M] = +_;
      };
    }, k = [/[+-]\d\d:?(\d\d)?|Z/, function(M) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var S = _.match(/([+-]|\d\d)/g), g = 60 * S[1] + (+S[2] || 0);
        return g === 0 ? 0 : S[0] === "+" ? -g : g;
      }(M);
    }], b = function(M) {
      var _ = c[M];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, w = function(M, _) {
      var S, g = c.meridiem;
      if (g) {
        for (var V = 1; V <= 24; V += 1)
          if (M.indexOf(g(V, 0, _)) > -1) {
            S = V > 12;
            break;
          }
      } else
        S = M === (_ ? "pm" : "PM");
      return S;
    }, N = { A: [P, function(M) {
      this.afternoon = w(M, !1);
    }], a: [P, function(M) {
      this.afternoon = w(M, !0);
    }], S: [/\d/, function(M) {
      this.milliseconds = 100 * +M;
    }], SS: [s, function(M) {
      this.milliseconds = 10 * +M;
    }], SSS: [/\d{3}/, function(M) {
      this.milliseconds = +M;
    }], s: [u, h("seconds")], ss: [u, h("seconds")], m: [u, h("minutes")], mm: [u, h("minutes")], H: [u, h("hours")], h: [u, h("hours")], HH: [u, h("hours")], hh: [u, h("hours")], D: [u, h("day")], DD: [s, h("day")], Do: [P, function(M) {
      var _ = c.ordinal, S = M.match(/\d+/);
      if (this.day = S[0], _)
        for (var g = 1; g <= 31; g += 1)
          _(g).replace(/\[|\]/g, "") === M && (this.day = g);
    }], M: [u, h("month")], MM: [s, h("month")], MMM: [P, function(M) {
      var _ = b("months"), S = (b("monthsShort") || _.map(function(g) {
        return g.slice(0, 3);
      })).indexOf(M) + 1;
      if (S < 1)
        throw new Error();
      this.month = S % 12 || S;
    }], MMMM: [P, function(M) {
      var _ = b("months").indexOf(M) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, h("year")], YY: [s, function(M) {
      this.year = v(M);
    }], YYYY: [/\d{4}/, h("year")], Z: k, ZZ: k };
    function G(M) {
      var _, S;
      _ = M, S = c && c.formats;
      for (var g = (M = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, C, E) {
        var q = E && E.toUpperCase();
        return C || S[E] || a[E] || S[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, D, y) {
          return D || y.slice(1);
        });
      })).match(e), V = g.length, j = 0; j < V; j += 1) {
        var O = g[j], $ = N[O], n = $ && $[0], o = $ && $[1];
        g[j] = o ? { regex: n, parser: o } : O.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var C = {}, E = 0, q = 0; E < V; E += 1) {
          var A = g[E];
          if (typeof A == "string")
            q += A.length;
          else {
            var D = A.regex, y = A.parser, Y = L.slice(q), m = D.exec(Y)[0];
            y.call(C, m), L = L.replace(m, "");
          }
        }
        return function(H) {
          var B = H.afternoon;
          if (B !== void 0) {
            var z = H.hours;
            B ? z < 12 && (H.hours += 12) : z === 12 && (H.hours = 0), delete H.afternoon;
          }
        }(C), C;
      };
    }
    return function(M, _, S) {
      S.p.customParseFormat = !0, M && M.parseTwoDigitYear && (v = M.parseTwoDigitYear);
      var g = _.prototype, V = g.parse;
      g.parse = function(j) {
        var O = j.date, $ = j.utc, n = j.args;
        this.$u = $;
        var o = n[1];
        if (typeof o == "string") {
          var L = n[2] === !0, C = n[3] === !0, E = L || C, q = n[2];
          C && (q = n[2]), c = this.$locale(), !L && q && (c = S.Ls[q]), this.$d = function(Y, m, H) {
            try {
              if (["x", "X"].indexOf(m) > -1)
                return new Date((m === "X" ? 1e3 : 1) * Y);
              var B = G(m)(Y), z = B.year, X = B.month, K = B.day, ae = B.hours, pe = B.minutes, fe = B.seconds, xe = B.milliseconds, he = B.zone, me = new Date(), ee = K || (z || X ? 1 : me.getDate()), le = z || me.getFullYear(), ye = 0;
              z && !X || (ye = X > 0 ? X - 1 : me.getMonth());
              var be = ae || 0, Ae = pe || 0, Le = fe || 0, Be = xe || 0;
              return he ? new Date(Date.UTC(le, ye, ee, be, Ae, Le, Be + 60 * he.offset * 1e3)) : H ? new Date(Date.UTC(le, ye, ee, be, Ae, Le, Be)) : new Date(le, ye, ee, be, Ae, Le, Be);
            } catch {
              return new Date("");
            }
          }(O, o, $), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), E && O != this.format(o) && (this.$d = new Date("")), c = {};
        } else if (o instanceof Array)
          for (var A = o.length, D = 1; D <= A; D += 1) {
            n[1] = o[D - 1];
            var y = S.apply(this, n);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            D === A && (this.$d = new Date(""));
          }
        else
          V.call(this, j);
      };
    };
  });
})($t);
const Ar = $t.exports;
var jt = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    return function(a, e, s) {
      e.prototype.isToday = function() {
        var u = "YYYY-MM-DD", P = s();
        return this.format(u) === P.format(u);
      };
    };
  });
})(jt);
const Lr = jt.exports;
var Mt = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    return function(a, e, s) {
      e.prototype.isBetween = function(u, P, c, v) {
        var h = s(u), k = s(P), b = (v = v || "()")[0] === "(", w = v[1] === ")";
        return (b ? this.isAfter(h, c) : !this.isBefore(h, c)) && (w ? this.isBefore(k, c) : !this.isAfter(k, c)) || (b ? this.isBefore(h, c) : !this.isAfter(h, c)) && (w ? this.isAfter(k, c) : !this.isBefore(k, c));
      };
    };
  });
})(Mt);
const Br = Mt.exports;
var St = { exports: {} };
(function(t, i) {
  (function(a, e) {
    t.exports = e();
  })(Oe, function() {
    var a, e, s = 1e3, u = 6e4, P = 36e5, c = 864e5, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, k = 2592e6, b = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, w = { years: h, months: k, days: c, hours: P, minutes: u, seconds: s, milliseconds: 1, weeks: 6048e5 }, N = function(O) {
      return O instanceof j;
    }, G = function(O, $, n) {
      return new j(O, n, $.$l);
    }, M = function(O) {
      return e.p(O) + "s";
    }, _ = function(O) {
      return O < 0;
    }, S = function(O) {
      return _(O) ? Math.ceil(O) : Math.floor(O);
    }, g = function(O) {
      return Math.abs(O);
    }, V = function(O, $) {
      return O ? _(O) ? { negative: !0, format: "" + g(O) + $ } : { negative: !1, format: "" + O + $ } : { negative: !1, format: "" };
    }, j = function() {
      function O(n, o, L) {
        var C = this;
        if (this.$d = {}, this.$l = L, n === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), o)
          return G(n * w[M(o)], this);
        if (typeof n == "number")
          return this.$ms = n, this.parseFromMilliseconds(), this;
        if (typeof n == "object")
          return Object.keys(n).forEach(function(A) {
            C.$d[M(A)] = n[A];
          }), this.calMilliseconds(), this;
        if (typeof n == "string") {
          var E = n.match(b);
          if (E) {
            var q = E.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var $ = O.prototype;
      return $.calMilliseconds = function() {
        var n = this;
        this.$ms = Object.keys(this.$d).reduce(function(o, L) {
          return o + (n.$d[L] || 0) * w[L];
        }, 0);
      }, $.parseFromMilliseconds = function() {
        var n = this.$ms;
        this.$d.years = S(n / h), n %= h, this.$d.months = S(n / k), n %= k, this.$d.days = S(n / c), n %= c, this.$d.hours = S(n / P), n %= P, this.$d.minutes = S(n / u), n %= u, this.$d.seconds = S(n / s), n %= s, this.$d.milliseconds = n;
      }, $.toISOString = function() {
        var n = V(this.$d.years, "Y"), o = V(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var C = V(L, "D"), E = V(this.$d.hours, "H"), q = V(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3);
        var D = V(A, "S"), y = n.negative || o.negative || C.negative || E.negative || q.negative || D.negative, Y = E.format || q.format || D.format ? "T" : "", m = (y ? "-" : "") + "P" + n.format + o.format + C.format + Y + E.format + q.format + D.format;
        return m === "P" || m === "-P" ? "P0D" : m;
      }, $.toJSON = function() {
        return this.toISOString();
      }, $.format = function(n) {
        var o = n || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return o.replace(v, function(C, E) {
          return E || String(L[C]);
        });
      }, $.as = function(n) {
        return this.$ms / w[M(n)];
      }, $.get = function(n) {
        var o = this.$ms, L = M(n);
        return L === "milliseconds" ? o %= 1e3 : o = L === "weeks" ? S(o / w[L]) : this.$d[L], o === 0 ? 0 : o;
      }, $.add = function(n, o, L) {
        var C;
        return C = o ? n * w[M(o)] : N(n) ? n.$ms : G(n, this).$ms, G(this.$ms + C * (L ? -1 : 1), this);
      }, $.subtract = function(n, o) {
        return this.add(n, o, !0);
      }, $.locale = function(n) {
        var o = this.clone();
        return o.$l = n, o;
      }, $.clone = function() {
        return G(this.$ms, this);
      }, $.humanize = function(n) {
        return a().add(this.$ms, "ms").locale(this.$l).fromNow(!n);
      }, $.milliseconds = function() {
        return this.get("milliseconds");
      }, $.asMilliseconds = function() {
        return this.as("milliseconds");
      }, $.seconds = function() {
        return this.get("seconds");
      }, $.asSeconds = function() {
        return this.as("seconds");
      }, $.minutes = function() {
        return this.get("minutes");
      }, $.asMinutes = function() {
        return this.as("minutes");
      }, $.hours = function() {
        return this.get("hours");
      }, $.asHours = function() {
        return this.as("hours");
      }, $.days = function() {
        return this.get("days");
      }, $.asDays = function() {
        return this.as("days");
      }, $.weeks = function() {
        return this.get("weeks");
      }, $.asWeeks = function() {
        return this.as("weeks");
      }, $.months = function() {
        return this.get("months");
      }, $.asMonths = function() {
        return this.as("months");
      }, $.years = function() {
        return this.get("years");
      }, $.asYears = function() {
        return this.as("years");
      }, O;
    }();
    return function(O, $, n) {
      a = n, e = n().$utils(), n.duration = function(C, E) {
        var q = n.locale();
        return G(C, { $l: q }, E);
      }, n.isDuration = N;
      var o = $.prototype.add, L = $.prototype.subtract;
      $.prototype.add = function(C, E) {
        return N(C) && (C = C.asMilliseconds()), o.bind(this)(C, E);
      }, $.prototype.subtract = function(C, E) {
        return N(C) && (C = C.asMilliseconds()), L.bind(this)(C, E);
      };
    };
  });
})(St);
const Er = St.exports;
function Fr() {
  const t = (c) => {
    const v = [], h = c.localeData().firstDayOfWeek();
    for (let k = 0; k <= c.date(0 - h).day(); k++)
      v.push(c.date(0).subtract(k, "day"));
    return v.sort((k, b) => k.date() - b.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (v, h) => c.date(h + 1)
    ),
    useNextDate: (c) => {
      const v = [];
      for (let h = 1; h <= 42 - (t(c).length + c.daysInMonth()); h++)
        v.push(c.date(h).month(c.month()).add(1, "month"));
      return v;
    },
    useDisableDate: (c, { disableDate: v }) => typeof v == "function" ? v(c.toDate()) : !1,
    useBetweenRange: (c, { previous: v, next: h }) => {
      let k;
      return v.isAfter(h, "date") ? k = "(]" : k = "[)", !!(c.isBetween(v, h, "date", k) && !c.off);
    },
    useToValueFromString: (c, { formatter: v }) => c.format(v.date),
    useToValueFromArray: ({ previous: c, next: v }, { formatter: h, separator: k }) => `${c.format(h.date)}${k}${v.format(h.date)}`
  };
}
function Nr() {
  return {
    useVisibleViewport: (i) => {
      if (i) {
        const { right: a } = i.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return a > e;
      } else
        return null;
    }
  };
}
const Hr = ["disabled", "placeholder"], Rr = { class: "absolute inset-y-0 right-0 inline-flex items-center rounded-md overflow-hidden" }, Ir = ["disabled"], Ur = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, zr = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, Wr = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Zr = { class: "flex flex-wrap lg:flex-nowrap" }, Gr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Kr = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Jr = /* @__PURE__ */ T("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), qr = [
  Jr
], Xr = { class: "px-0.5 sm:px-2" }, Qr = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, eo = { class: "px-0.5 sm:px-2" }, to = { key: 0 }, ro = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, oo = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, ao = ["disabled", "onClick", "textContent"], no = ["onClick", "textContent"], so = {
  key: 1,
  class: "sm:hidden"
}, lo = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, io = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, uo = ["onClick", "textContent"], co = {
  key: 1,
  class: "flex"
}, fo = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, po = { class: "flex flex-wrap lg:flex-nowrap" }, mo = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, vo = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, ho = /* @__PURE__ */ T("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), yo = [
  ho
], bo = { class: "px-0.5 sm:px-2" }, xo = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, go = { class: "px-0.5 sm:px-2" }, ko = { key: 0 }, wo = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, $o = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, jo = ["disabled", "textContent"], Mo = {
  __name: "VueTailwindDatePicker",
  props: {
    noInput: Boolean,
    overlay: Boolean,
    asSingle: Boolean,
    useRange: Boolean,
    placeholder: {
      type: [Boolean, String],
      default: !1
    },
    i18n: {
      type: String,
      default: "en"
    },
    inputClasses: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    disableInRange: {
      type: Boolean,
      default: !0
    },
    disableDate: {
      type: [Boolean, Array, Function],
      default: !1
    },
    autoApply: {
      type: Boolean,
      default: !0
    },
    shortcuts: {
      type: [Boolean, Function],
      default: !0
    },
    separator: {
      type: String,
      default: " ~ "
    },
    formatter: {
      type: Object,
      default: () => ({
        date: "YYYY-MM-DD HH:mm:ss",
        month: "MMM"
      })
    },
    modelValue: {
      type: [Array, Object, String],
      default: () => []
    },
    startFrom: {
      type: [Object, String],
      default: () => new Date()
    },
    weekdaysSize: {
      type: String,
      default: "short"
    },
    options: {
      type: Object,
      default: () => ({
        shortcuts: {
          today: "Today",
          yesterday: "Yesterday",
          past: (t) => `Last ${t} Days`,
          currentMonth: "This Month",
          pastMonth: "Last Month"
        },
        footer: {
          apply: "Apply",
          cancel: "Cancel"
        }
      })
    }
  },
  emits: [
    "update:modelValue",
    "select:month",
    "select:year",
    "select:right:month",
    "select:right:year",
    "click:prev",
    "click:next",
    "click:right:prev",
    "click:right:next"
  ],
  setup(t, { expose: i, emit: a }) {
    const e = t, {
      useCurrentDate: s,
      useDisableDate: u,
      useBetweenRange: P,
      useNextDate: c,
      usePreviousDate: v,
      useToValueFromArray: h,
      useToValueFromString: k
    } = Fr(), { useVisibleViewport: b } = Nr();
    l.extend(Yr), l.extend(Tr), l.extend(Ar), l.extend(Lr), l.extend(Br), l.extend(Er);
    const { modelValue: w } = Ct(e), N = oe(null), G = oe(null), M = oe(null), _ = oe(""), S = oe(null), g = oe(""), V = oe([]), j = oe([]), O = oe(null), $ = oe(null), n = Yt({
      previous: {
        calendar: !0,
        month: !1,
        year: !1
      },
      next: {
        calendar: !0,
        month: !1,
        year: !1
      }
    }), o = oe({
      previous: l(),
      next: l().add(1, "month"),
      year: {
        previous: l().year(),
        next: l().year()
      },
      weeks: e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort(),
      months: e.formatter.month === "MMM" ? l.monthsShort() : l.months()
    }), L = ce(() => o.value.weeks), C = ce(() => o.value.months), E = ce(() => {
      const { previous: d, next: f, year: x } = R(o);
      return {
        previous: {
          date: () => v(d).concat(s(d)).concat(c(d)).map((r) => (r.today = r.isToday(), r.active = d.month() === r.month(), r.off = d.month() !== r.month(), r.sunday = r.day() === 0, r.disabled = u(r, e) && !H(r), r.inRange = () => {
            if (e.asSingle && !e.useRange)
              return d.month() !== r.month();
          }, r.hovered = () => m() && V.value.length > 1 ? (r.isBetween(V.value[0], V.value[1], "date", "()") || r.isBetween(V.value[1], V.value[0], "date", "(]")) && d.month() === r.month() : !1, r.duration = () => !1, r)),
          month: d && d.format(e.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (r, p) => x.previous + p
          ),
          onPrevious: () => {
            o.value.previous = d.subtract(1, "month"), a("click:prev", o.value.previous);
          },
          onNext: () => {
            o.value.previous = d.add(1, "month"), d.diff(f, "month") === -1 && (o.value.next = f.add(1, "month")), a("click:next", o.value.previous);
          },
          onPreviousYear: () => {
            o.value.year.previous = o.value.year.previous - 12;
          },
          onNextYear: () => {
            o.value.year.previous = o.value.year.previous + 12;
          },
          openMonth: () => {
            n.previous.month = !n.previous.month, n.previous.year = !1, n.previous.calendar = !n.previous.month;
          },
          setMount: (r) => {
            o.value.previous = d.month(r), n.previous.month = !n.previous.month, n.previous.year = !1, n.previous.calendar = !n.previous.month, a("select:month", o.value.previous), Ee(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.next = o.value.next.year();
            });
          },
          openYear: () => {
            n.previous.year = !n.previous.year, n.previous.month = !1, n.previous.calendar = !n.previous.year;
          },
          setYear: (r, p) => {
            p || (o.value.previous = d.year(r), n.previous.year = !n.previous.year, n.previous.calendar = !n.previous.year, a("select:year", o.value.previous), Ee(() => {
              (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month")), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            }));
          }
        },
        next: {
          date: () => v(f).concat(s(f)).concat(c(f)).map((r) => (r.today = r.isToday(), r.active = f.month() === r.month(), r.off = f.month() !== r.month(), r.sunday = r.day() === 0, r.disabled = u(r, e) && !H(r), r.inRange = () => {
            if (e.asSingle && !e.useRange)
              return f.month() !== r.month();
          }, r.hovered = () => V.value.length > 1 ? (r.isBetween(V.value[0], V.value[1], "date", "()") || r.isBetween(V.value[1], V.value[0], "date", "(]")) && f.month() === r.month() : !1, r.duration = () => !1, r)),
          month: f && f.format(e.formatter.month),
          year: f && f.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (r, p) => x.next + p
          ),
          onPrevious: () => {
            o.value.next = f.subtract(1, "month"), f.diff(d, "month") === 1 && (o.value.previous = d.subtract(1, "month")), a("click:right:prev", o.value.next);
          },
          onNext: () => {
            o.value.next = f.add(1, "month"), a("click:right:next", o.value.next);
          },
          onPreviousYear: () => {
            o.value.year.next = o.value.year.next - 12;
          },
          onNextYear: () => {
            o.value.year.next = o.value.year.next + 12;
          },
          openMonth: () => {
            n.next.month = !n.next.month, n.next.year = !1, n.next.calendar = !n.next.month;
          },
          setMount: (r) => {
            o.value.next = f.month(r), n.next.month = !n.next.month, n.next.year = !1, n.next.calendar = !n.next.month, a("select:right:month", o.value.next), Ee(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(1, "month")), o.value.year.previous = o.value.previous.year();
            });
          },
          openYear: () => {
            n.next.year = !n.next.year, n.next.month = !1, n.next.calendar = !n.next.year;
          },
          setYear: (r, p) => {
            p && (o.value.next = f.year(r), n.next.year = !n.next.year, n.next.month = !1, n.next.calendar = !n.next.year, a("select:right:year", o.value.next), Ee(() => {
              (o.value.previous.isSame(o.value.next, "month") || o.value.previous.isAfter(o.value.next)) && (o.value.previous = o.value.next.subtract(1, "month")), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year();
            }));
          }
        }
      };
    }), q = oe(!1);
    setTimeout(() => {
      q.value = !0;
    }, 250);
    const A = () => l().localeData().firstDayOfWeek(), D = (d) => {
      const f = [...d], x = f.shift();
      return [...f, x];
    }, y = () => Array.isArray(e.modelValue), Y = () => typeof e.modelValue == "object", m = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), H = (d) => {
      if (e.disableInRange || g.value === "")
        return !1;
      let f, x;
      if (y()) {
        const [r, p] = e.modelValue;
        f = r, x = p;
      } else if (Y()) {
        if (e.modelValue) {
          const [r, p] = Object.values(e.modelValue);
          f = r, x = p;
        }
      } else {
        const [r, p] = e.modelValue.split(e.separator);
        f = r, x = p;
      }
      return d.isBetween(l(f, e.formatter.date, !0), l(x, e.formatter.date, !0), "date", "[]");
    }, B = () => {
      O.value = null, $.value = null, V.value = [], S.value = null;
    }, z = () => {
      if (g.value = "", y())
        a("update:modelValue", []);
      else if (Y()) {
        const d = {}, [f, x] = Object.keys(e.modelValue);
        d[f] = "", d[x] = "", a("update:modelValue", d);
      } else
        a("update:modelValue", "");
      j.value = [], G.value && G.value.focus();
    };
    i({ clearPicker: z });
    const X = () => {
      if (m()) {
        const [d, f] = g.value.split(e.separator), [x, r] = [l(d, e.formatter.date, !0), l(f, e.formatter.date, !0)];
        if (x.isValid() && r.isValid())
          if (K(x), K(r), y())
            a("update:modelValue", [d, f]);
          else if (Y()) {
            const p = {}, [F, I] = Object.keys(e.modelValue);
            p[F] = d, p[I] = f, a("update:modelValue", p);
          } else
            a(
              "update:modelValue",
              h(
                {
                  previous: x,
                  next: r
                },
                e
              )
            );
      } else {
        const d = l(g.value, e.formatter.date, !0);
        if (d.isValid())
          if (K(d), y())
            a("update:modelValue", [g.value]);
          else if (Y()) {
            const f = {}, [x] = Object.keys(e.modelValue);
            f[x] = g.value, a("update:modelValue", f);
          } else
            a("update:modelValue", g.value);
      }
    }, K = (d, f, x) => {
      if (m())
        if (O.value)
          if ($.value = d, e.autoApply) {
            d.isBefore(O.value) ? g.value = h(
              {
                previous: d,
                next: O.value
              },
              e
            ) : g.value = h(
              {
                previous: O.value,
                next: d
              },
              e
            );
            const [r, p] = g.value.split(e.separator);
            if (y())
              a("update:modelValue", [
                l(r, e.formatter.date, !0).format(e.formatter.date),
                l(p, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (Y()) {
              const F = {}, [I, te] = Object.keys(e.modelValue);
              F[I] = r, F[te] = p, a("update:modelValue", F);
            } else
              a(
                "update:modelValue",
                h(
                  {
                    previous: l(r, e.formatter.date, !0),
                    next: l(p, e.formatter.date, !0)
                  },
                  e
                )
              );
            x && x(), j.value = [], l(r, e.formatter.date, !0).isSame(l(p, e.formatter.date, !0), "month") || (o.value.previous = l(r, e.formatter.date, !0), o.value.next = l(p, e.formatter.date, !0)), B();
          } else {
            O.value.isAfter(d, "month") ? j.value = [d, O.value] : j.value = [O.value, d];
            const [r, p] = j.value;
            r.isSame(p, "month") || (o.value.previous = r, o.value.next = p), B();
          }
        else
          j.value = [], O.value = d, S.value = d, V.value.push(d), j.value.push(d), f ? (o.value.next = d, o.value.previous.isSame(d, "month") && (o.value.next = d.add(1, "month"))) : (o.value.previous = d, o.value.next.isSame(d, "month") && (o.value.previous = o.value.next, o.value.next = d.add(1, "month")));
      else if (e.autoApply) {
        if (g.value = k(d, e), y())
          a("update:modelValue", [g.value]);
        else if (Y()) {
          const r = {}, [p] = Object.keys(e.modelValue);
          r[p] = g.value, a("update:modelValue", r);
        } else
          a("update:modelValue", g.value);
        x && x(), j.value = [], B();
      } else
        j.value = [d], B();
    }, ae = (d) => {
      if (j.value.length < 1)
        return !1;
      let f;
      if (m()) {
        const [x, r] = j.value;
        r.isBefore(x) ? f = h(
          {
            previous: r,
            next: x
          },
          e
        ) : f = h(
          {
            previous: x,
            next: r
          },
          e
        );
      } else {
        const [x] = j.value;
        f = x;
      }
      if (m()) {
        const [x, r] = f.split(e.separator);
        if (y())
          a("update:modelValue", [
            l(x, e.formatter.date, !0).format(e.formatter.date),
            l(r, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (Y()) {
          const p = {}, [F, I] = Object.keys(e.modelValue);
          p[F] = x, p[I] = r, a("update:modelValue", p);
        } else
          a(
            "update:modelValue",
            h(
              {
                previous: l(x, e.formatter.date, !0),
                next: l(r, e.formatter.date, !0)
              },
              e
            )
          );
        g.value = f;
      } else if (g.value = f.format(e.formatter.date), y())
        a("update:modelValue", [g.value]);
      else if (Y()) {
        const x = {}, [r] = Object.keys(e.modelValue);
        x[r] = g.value, a("update:modelValue", x);
      } else
        a("update:modelValue", g.value);
      d && d();
    }, pe = (d) => {
      if (!m())
        return !1;
      if (O.value)
        V.value = [O.value, d];
      else
        return V.value = [], !1;
    }, fe = (d) => {
      if (O.value && e.autoApply)
        return !1;
      let f, x;
      if (V.value.length > 1) {
        const [r, p] = V.value;
        f = l(r, e.formatter.date, !0), x = l(p, e.formatter.date, !0);
      } else if (y())
        if (e.autoApply) {
          const [r, p] = e.modelValue;
          f = r && l(r, e.formatter.date, !0), x = p && l(p, e.formatter.date, !0);
        } else {
          const [r, p] = j.value;
          f = l(r, e.formatter.date, !0), x = l(p, e.formatter.date, !0);
        }
      else if (Y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [r, p] = Object.values(e.modelValue);
            f = r && l(r, e.formatter.date, !0), x = p && l(p, e.formatter.date, !0);
          }
        } else {
          const [r, p] = j.value;
          f = l(r, e.formatter.date, !0), x = l(p, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [r, p] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        f = r && l(r, e.formatter.date, !0), x = p && l(p, e.formatter.date, !0);
      } else {
        const [r, p] = j.value;
        f = l(r, e.formatter.date, !0), x = l(p, e.formatter.date, !0);
      }
      return f && x ? P(d, {
        previous: f,
        next: x
      }) : !1;
    }, xe = (d) => {
      const { today: f, active: x, off: r, disabled: p } = d;
      let F, I, te;
      if (m())
        if (y())
          if (S.value) {
            const [U, Q] = V.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, Q] = e.modelValue;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else {
            const [U, Q] = j.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          }
        else if (Y())
          if (S.value) {
            const [U, Q] = V.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, Q] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else {
            const [U, Q] = j.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          }
        else if (S.value) {
          const [U, Q] = V.value;
          I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, Q] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
        } else {
          const [U, Q] = j.value;
          I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            I = l(U, e.formatter.date, !0);
          }
        } else {
          const [U] = j.value;
          I = U && l(U, e.formatter.date, !0);
        }
      else if (Y())
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            I = l(U, e.formatter.date, !0);
          }
        } else {
          const [U] = j.value;
          I = U && l(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          I = l(U, e.formatter.date, !0);
        }
      } else {
        const [U] = j.value;
        I = U && l(U, e.formatter.date, !0);
      }
      return x && (F = f ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : p ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : d.isBetween(I, te, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), r && (F = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), I && te && !r ? (d.isSame(I, "date") && (F = te.isAfter(I, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", I.isSame(te, "date") && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), d.isSame(te, "date") && (F = te.isAfter(I, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", I.isSame(te, "date") && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : I && d.isSame(I, "date") && !r && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), F;
    }, he = (d) => {
      let f, x, r;
      if (f = "", !m())
        return f;
      if (y())
        if (V.value.length > 1) {
          const [p, F] = V.value;
          x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [p, F] = e.modelValue;
          x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        } else {
          const [p, F] = j.value;
          x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        }
      else if (Y())
        if (V.value.length > 1) {
          const [p, F] = V.value;
          x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [p, F] = Object.values(e.modelValue);
            x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
          }
        } else {
          const [p, F] = j.value;
          x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        }
      else if (V.value.length > 1) {
        const [p, F] = V.value;
        x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [p, F] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
      } else {
        const [p, F] = j.value;
        x = p && l(p, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
      }
      return x && r && (d.isSame(x, "date") ? (r.isBefore(x) && (f += " rounded-r-full inset-0"), x.isBefore(r) && (f += " rounded-l-full inset-0")) : d.isSame(r, "date") ? (r.isBefore(x) && (f += " rounded-l-full inset-0"), x.isBefore(r) && (f += " rounded-r-full inset-0")) : f += " inset-0"), f;
    }, me = (d, f) => {
      o.value.previous = l(d, e.formatter.date, !0), o.value.next = l(f, e.formatter.date, !0), (l.duration(o.value.next.diff(o.value.previous)).$d.months === 2 || l.duration(o.value.next.diff(o.value.previous)).$d.months === 1 && l.duration(o.value.next.diff(o.value.previous)).$d.days === 7) && (o.value.next = o.value.next.subtract(1, "month")), (o.value.next.isSame(o.value.previous, "month") || o.value.next.isBefore(o.value.previous)) && (o.value.next = o.value.previous.add(1, "month"));
    }, ee = (d, f) => {
      if (m())
        if (e.autoApply) {
          if (y())
            a("update:modelValue", [d, f]);
          else if (Y()) {
            const x = {}, [r, p] = Object.keys(e.modelValue);
            x[r] = d, x[p] = f, a("update:modelValue", x);
          } else
            a(
              "update:modelValue",
              h(
                {
                  previous: l(d, e.formatter.date, !0),
                  next: l(f, e.formatter.date, !0)
                },
                e
              )
            );
          g.value = `${d}${e.separator}${f}`;
        } else
          j.value = [l(d, e.formatter.date, !0), l(f, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (y())
          a("update:modelValue", [d]);
        else if (Y()) {
          const x = {}, [r] = Object.keys(e.modelValue);
          x[r] = d, a("update:modelValue", x);
        } else
          a("update:modelValue", d);
        g.value = d;
      } else
        j.value = [l(d, e.formatter.date, !0), l(f, e.formatter.date, !0)];
      me(d, f);
    }, le = (d) => {
      const f = l().format(e.formatter.date), x = l().format(e.formatter.date);
      ee(f, x), d && d();
    }, ye = (d) => {
      const f = l().subtract(1, "day").format(e.formatter.date), x = l().subtract(1, "day").format(e.formatter.date);
      ee(f, x), d && d();
    }, be = (d, f) => {
      const x = l().subtract(d - 1, "day").format(e.formatter.date), r = l().format(e.formatter.date);
      ee(x, r), f && f();
    }, Ae = (d) => {
      const f = l().date(1).format(e.formatter.date), x = l().date(l().daysInMonth()).format(e.formatter.date);
      ee(f, x), d && d();
    }, Le = (d) => {
      const f = l().date(1).subtract(1, "month").format(e.formatter.date), x = l().date(0).format(e.formatter.date);
      ee(f, x), d && d();
    }, Be = (d, f) => {
      let x, r;
      const [p, F] = d.atClick();
      x = l(p).format(e.formatter.date), r = l(F).format(e.formatter.date), ee(x, r), f && f();
    };
    at(
      () => j.value,
      (d) => {
        d.length > 0 && (n.previous.calendar = !0, n.previous.month = !1, n.previous.year = !1, n.next.calendar = !0, n.next.month = !1, n.next.year = !1);
      }
    ), ge(() => {
      e.placeholder ? _.value = e.placeholder : m() ? _.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : _.value = e.formatter.date;
    }), ge(() => {
      const d = e.i18n;
      Ee(() => {
        const f = /* @__PURE__ */ Object.assign({ "./locale/af.js": () => import("./af.b616ad8a.mjs"), "./locale/am.js": () => import("./am.87ca9de5.mjs"), "./locale/ar-dz.js": () => import("./ar-dz.ccc280e5.mjs"), "./locale/ar-iq.js": () => import("./ar-iq.dd0bd628.mjs"), "./locale/ar-kw.js": () => import("./ar-kw.813d5ab0.mjs"), "./locale/ar-ly.js": () => import("./ar-ly.3b6eb13a.mjs"), "./locale/ar-ma.js": () => import("./ar-ma.c9659191.mjs"), "./locale/ar-sa.js": () => import("./ar-sa.0b66ecf6.mjs"), "./locale/ar-tn.js": () => import("./ar-tn.d9e8b8df.mjs"), "./locale/ar.js": () => import("./ar.3a8f488b.mjs"), "./locale/az.js": () => import("./az.7be7acc9.mjs"), "./locale/be.js": () => import("./be.d88239c8.mjs"), "./locale/bg.js": () => import("./bg.91bca328.mjs"), "./locale/bi.js": () => import("./bi.81230536.mjs"), "./locale/bm.js": () => import("./bm.e210f1d9.mjs"), "./locale/bn-bd.js": () => import("./bn-bd.d1779000.mjs"), "./locale/bn.js": () => import("./bn.226086fe.mjs"), "./locale/bo.js": () => import("./bo.114e66af.mjs"), "./locale/br.js": () => import("./br.a0120b04.mjs"), "./locale/bs.js": () => import("./bs.2dca9997.mjs"), "./locale/ca.js": () => import("./ca.b5c41bf2.mjs"), "./locale/cs.js": () => import("./cs.9862aebe.mjs"), "./locale/cv.js": () => import("./cv.a000f27f.mjs"), "./locale/cy.js": () => import("./cy.ffa2b37d.mjs"), "./locale/da.js": () => import("./da.533a8140.mjs"), "./locale/de-at.js": () => import("./de-at.f6815472.mjs"), "./locale/de-ch.js": () => import("./de-ch.e7ab1492.mjs"), "./locale/de.js": () => import("./de.1fa9c146.mjs"), "./locale/dv.js": () => import("./dv.4901d780.mjs"), "./locale/el.js": () => import("./el.7af37140.mjs"), "./locale/en-au.js": () => import("./en-au.41cae09f.mjs"), "./locale/en-ca.js": () => import("./en-ca.baabfae4.mjs"), "./locale/en-gb.js": () => import("./en-gb.2cd9e7bb.mjs"), "./locale/en-ie.js": () => import("./en-ie.398d1621.mjs"), "./locale/en-il.js": () => import("./en-il.7b82e260.mjs"), "./locale/en-in.js": () => import("./en-in.faea43c8.mjs"), "./locale/en-nz.js": () => import("./en-nz.5c8716f6.mjs"), "./locale/en-sg.js": () => import("./en-sg.6a015e49.mjs"), "./locale/en-tt.js": () => import("./en-tt.3b06e8cf.mjs"), "./locale/en.js": () => import("./en.c289298e.mjs"), "./locale/eo.js": () => import("./eo.d107af5b.mjs"), "./locale/es-do.js": () => import("./es-do.f8500181.mjs"), "./locale/es-mx.js": () => import("./es-mx.02ab2880.mjs"), "./locale/es-pr.js": () => import("./es-pr.b5315c21.mjs"), "./locale/es-us.js": () => import("./es-us.3b6b8bb8.mjs"), "./locale/es.js": () => import("./es.66fb50b3.mjs"), "./locale/et.js": () => import("./et.d3ca6d8b.mjs"), "./locale/eu.js": () => import("./eu.93110566.mjs"), "./locale/fa.js": () => import("./fa.b1224bad.mjs"), "./locale/fi.js": () => import("./fi.b967f60f.mjs"), "./locale/fo.js": () => import("./fo.f55035e2.mjs"), "./locale/fr-ca.js": () => import("./fr-ca.f5bd2f4b.mjs"), "./locale/fr-ch.js": () => import("./fr-ch.24c0fb0a.mjs"), "./locale/fr.js": () => import("./fr.a8ec2446.mjs"), "./locale/fy.js": () => import("./fy.e46d6ebc.mjs"), "./locale/ga.js": () => import("./ga.bd3edae1.mjs"), "./locale/gd.js": () => import("./gd.2b0d6dae.mjs"), "./locale/gl.js": () => import("./gl.164cfc7b.mjs"), "./locale/gom-latn.js": () => import("./gom-latn.b63f7ab9.mjs"), "./locale/gu.js": () => import("./gu.0535da15.mjs"), "./locale/he.js": () => import("./he.98ce32a1.mjs"), "./locale/hi.js": () => import("./hi.29b2c32d.mjs"), "./locale/hr.js": () => import("./hr.40da8415.mjs"), "./locale/ht.js": () => import("./ht.c43632b4.mjs"), "./locale/hu.js": () => import("./hu.894dd414.mjs"), "./locale/hy-am.js": () => import("./hy-am.2a564f34.mjs"), "./locale/id.js": () => import("./id.fee8dd2c.mjs"), "./locale/is.js": () => import("./is.d32b5b07.mjs"), "./locale/it-ch.js": () => import("./it-ch.66b57619.mjs"), "./locale/it.js": () => import("./it.0b1acf2e.mjs"), "./locale/ja.js": () => import("./ja.1ba05f8b.mjs"), "./locale/jv.js": () => import("./jv.13f8306c.mjs"), "./locale/ka.js": () => import("./ka.182a70e1.mjs"), "./locale/kk.js": () => import("./kk.e96c4db5.mjs"), "./locale/km.js": () => import("./km.3f145d00.mjs"), "./locale/kn.js": () => import("./kn.47a5dbf9.mjs"), "./locale/ko.js": () => import("./ko.278d2d5a.mjs"), "./locale/ku.js": () => import("./ku.bd93a2b1.mjs"), "./locale/ky.js": () => import("./ky.86800c3a.mjs"), "./locale/lb.js": () => import("./lb.d26326c2.mjs"), "./locale/lo.js": () => import("./lo.648257ec.mjs"), "./locale/lt.js": () => import("./lt.45a9413e.mjs"), "./locale/lv.js": () => import("./lv.42acb5b9.mjs"), "./locale/me.js": () => import("./me.ce48b316.mjs"), "./locale/mi.js": () => import("./mi.9b8980f2.mjs"), "./locale/mk.js": () => import("./mk.17a7c04d.mjs"), "./locale/ml.js": () => import("./ml.f3c5dacf.mjs"), "./locale/mn.js": () => import("./mn.c6b2486a.mjs"), "./locale/mr.js": () => import("./mr.f972107d.mjs"), "./locale/ms-my.js": () => import("./ms-my.e224ec83.mjs"), "./locale/ms.js": () => import("./ms.5d628559.mjs"), "./locale/mt.js": () => import("./mt.af8e93ea.mjs"), "./locale/my.js": () => import("./my.ab9b686d.mjs"), "./locale/nb.js": () => import("./nb.3888a353.mjs"), "./locale/ne.js": () => import("./ne.673ea964.mjs"), "./locale/nl-be.js": () => import("./nl-be.ec6a3c1a.mjs"), "./locale/nl.js": () => import("./nl.b50b9a4f.mjs"), "./locale/nn.js": () => import("./nn.5ab76e81.mjs"), "./locale/oc-lnc.js": () => import("./oc-lnc.62010cfe.mjs"), "./locale/pa-in.js": () => import("./pa-in.c383f4a9.mjs"), "./locale/pl.js": () => import("./pl.0245a40d.mjs"), "./locale/pt-br.js": () => import("./pt-br.2239024a.mjs"), "./locale/pt.js": () => import("./pt.a7206169.mjs"), "./locale/rn.js": () => import("./rn.aeaa0928.mjs"), "./locale/ro.js": () => import("./ro.2ec9f755.mjs"), "./locale/ru.js": () => import("./ru.f4099483.mjs"), "./locale/rw.js": () => import("./rw.426f5036.mjs"), "./locale/sd.js": () => import("./sd.681489b3.mjs"), "./locale/se.js": () => import("./se.86cf5867.mjs"), "./locale/si.js": () => import("./si.62ab9353.mjs"), "./locale/sk.js": () => import("./sk.d11972c7.mjs"), "./locale/sl.js": () => import("./sl.21ada3cc.mjs"), "./locale/sq.js": () => import("./sq.948e60df.mjs"), "./locale/sr-cyrl.js": () => import("./sr-cyrl.4ec489e7.mjs"), "./locale/sr.js": () => import("./sr.d80642a0.mjs"), "./locale/ss.js": () => import("./ss.96a0536a.mjs"), "./locale/sv-fi.js": () => import("./sv-fi.094ab34d.mjs"), "./locale/sv.js": () => import("./sv.dd68a446.mjs"), "./locale/sw.js": () => import("./sw.50d366bb.mjs"), "./locale/ta.js": () => import("./ta.478da265.mjs"), "./locale/te.js": () => import("./te.265ed31a.mjs"), "./locale/tet.js": () => import("./tet.3a6d1afe.mjs"), "./locale/tg.js": () => import("./tg.173b5742.mjs"), "./locale/th.js": () => import("./th.0364aaa0.mjs"), "./locale/tk.js": () => import("./tk.3c026f83.mjs"), "./locale/tl-ph.js": () => import("./tl-ph.4e969977.mjs"), "./locale/tlh.js": () => import("./tlh.1baf16e5.mjs"), "./locale/tr.js": () => import("./tr.aecf8982.mjs"), "./locale/tzl.js": () => import("./tzl.21d0ceac.mjs"), "./locale/tzm-latn.js": () => import("./tzm-latn.49083cb8.mjs"), "./locale/tzm.js": () => import("./tzm.63c2a67f.mjs"), "./locale/ug-cn.js": () => import("./ug-cn.d130a33e.mjs"), "./locale/uk.js": () => import("./uk.662271cf.mjs"), "./locale/ur.js": () => import("./ur.9cf0e283.mjs"), "./locale/uz-latn.js": () => import("./uz-latn.6838f51d.mjs"), "./locale/uz.js": () => import("./uz.7d7269a5.mjs"), "./locale/vi.js": () => import("./vi.55a66f82.mjs"), "./locale/x-pseudo.js": () => import("./x-pseudo.b43a93d4.mjs"), "./locale/yo.js": () => import("./yo.5f8d2a96.mjs"), "./locale/zh-cn.js": () => import("./zh-cn.1fe61248.mjs"), "./locale/zh-hk.js": () => import("./zh-hk.96856804.mjs"), "./locale/zh-tw.js": () => import("./zh-tw.4b810ae0.mjs"), "./locale/zh.js": () => import("./zh.90570312.mjs") });
        for (const x in f)
          f[x]().then(() => {
            l.locale(d);
            let r, p;
            if (m()) {
              if (y()) {
                if (e.modelValue.length > 0) {
                  const [I, te] = e.modelValue;
                  r = l(I, e.formatter.date, !0), p = l(te, e.formatter.date, !0);
                }
              } else if (Y()) {
                if (!Tt(e.modelValue))
                  try {
                    Object.keys(e.modelValue);
                  } catch {
                    console.warn(
                      "[Vue Tailwind Datepicker]: It looks like you want to use Object as the argument %cv-model",
                      "font-style: italic; color: #42b883;",
                      ", but you pass it undefined or null."
                    ), console.warn(
                      "[Vue Tailwind Datepicker]: We has replace with %c{ startDate: '', endDate: '' }",
                      "font-style: italic; color: #42b883;",
                      ", but you can replace manually."
                    ), a("update:modelValue", {
                      startDate: "",
                      endDate: ""
                    });
                  }
                if (e.modelValue) {
                  const [I, te] = Object.values(e.modelValue);
                  r = I && l(I, e.formatter.date, !0), p = te && l(te, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [I, te] = e.modelValue.split(e.separator);
                r = l(I, e.formatter.date, !0), p = l(te, e.formatter.date, !0);
              }
              r && p ? (g.value = h(
                {
                  previous: r,
                  next: p
                },
                e
              ), p.isBefore(r, "month") ? (o.value.previous = p, o.value.next = r, o.value.year.previous = p.year(), o.value.year.next = r.year()) : p.isSame(r, "month") ? (o.value.previous = r, o.value.next = p.add(1, "month"), o.value.year.previous = r.year(), o.value.year.next = r.add(1, "year").year()) : (o.value.previous = r, o.value.next = p, o.value.year.previous = r.year(), o.value.year.next = p.year()), e.autoApply || (j.value = [r, p])) : (o.value.previous = l(e.startFrom), o.value.next = l(e.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
            } else {
              if (y()) {
                if (e.modelValue.length > 0) {
                  const [I] = e.modelValue;
                  r = l(I, e.formatter.date, !0);
                }
              } else if (Y()) {
                if (e.modelValue) {
                  const [I] = Object.values(e.modelValue);
                  r = l(I, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [I] = e.modelValue.split(e.separator);
                r = l(I, e.formatter.date, !0);
              }
              r && r.isValid() ? (g.value = k(r, e), o.value.previous = r, o.value.next = r.add(1, "month"), o.value.year.previous = r.year(), o.value.year.next = r.add(1, "year").year(), e.autoApply || (j.value = [r])) : (o.value.previous = l(e.startFrom), o.value.next = l(e.startFrom).add(1, "month"), o.value.year.previous = o.value.previous.year(), o.value.year.next = o.value.next.year());
            }
            const F = e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort();
            o.value.weeks = A() ? D(F) : F, o.value.months = e.formatter.month === "MMM" ? l.monthsShort() : l.months();
          }).catch((r) => {
            console.warn(r.message);
          });
      });
    });
    const ot = (d) => (d && M.value === null && (M.value = b(N.value)), d && M.value ? "place-right" : "place-left"), Ot = (d) => (d && M.value === null && (M.value = b(N.value)), M.value ? "left-auto right-0" : "left-0 right-auto");
    return ue("isBetweenRange", fe), ue("betweenRangeClasses", he), ue("datepickerClasses", xe), ue("atMouseOver", pe), ue("setToToday", le), ue("setToYesterday", ye), ue("setToLastDay", be), ue("setToThisMonth", Ae), ue("setToLastMonth", Le), ue("setToCustomShortcut", Be), at(w, (d) => {
      g.value = d;
    }), (d, f) => e.noInput ? q.value ? (Z(), J("div", co, [
      T("div", fo, [
        T("div", po, [
          e.shortcuts ? (Z(), Fe(nt, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": m(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : ve("", !0),
          T("div", mo, [
            m() && !e.asSingle ? (Z(), J("div", vo, yo)) : ve("", !0),
            T("div", {
              class: we(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": m() && !e.asSingle
              }])
            }, [
              re(Ue, {
                panel: n.previous,
                calendar: R(E).previous
              }, null, 8, ["panel", "calendar"]),
              T("div", bo, [
                se(re(ze, {
                  months: R(C),
                  "onUpdate:month": R(E).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ie, n.previous.month]
                ]),
                se(re(Ze, {
                  years: R(E).previous.years(),
                  "onUpdate:year": R(E).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ie, n.previous.year]
                ]),
                se(T("div", null, [
                  re(We, { weeks: R(L) }, null, 8, ["weeks"]),
                  re(Ge, {
                    calendar: R(E).previous,
                    weeks: R(L),
                    "as-range": m(),
                    "onUpdate:date": f[2] || (f[2] = (x, r) => K(x, r))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, n.previous.calendar]
                ])
              ])
            ], 2),
            m() && !e.asSingle ? (Z(), J("div", xo, [
              re(Ue, {
                "as-prev-or-next": "",
                panel: n.next,
                calendar: R(E).next
              }, null, 8, ["panel", "calendar"]),
              T("div", go, [
                se(re(ze, {
                  months: R(C),
                  "onUpdate:month": R(E).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ie, n.next.month]
                ]),
                se(re(Ze, {
                  "as-prev-or-next": "",
                  years: R(E).next.years(),
                  "onUpdate:year": R(E).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ie, n.next.year]
                ]),
                se(T("div", null, [
                  re(We, { weeks: R(L) }, null, 8, ["weeks"]),
                  re(Ge, {
                    "as-prev-or-next": "",
                    calendar: R(E).next,
                    weeks: R(L),
                    "as-range": m(),
                    "onUpdate:date": f[3] || (f[3] = (x, r) => K(x, r))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ie, n.next.calendar]
                ])
              ])
            ])) : ve("", !0)
          ])
        ]),
        e.autoApply ? ve("", !0) : (Z(), J("div", ko, [
          T("div", wo, [
            T("div", $o, [
              T("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? j.value.length < 1 : j.value.length < 2,
                onClick: f[4] || (f[4] = (x) => ae()),
                textContent: ne(e.options.footer.apply)
              }, null, 8, jo)
            ])
          ])
        ]))
      ])
    ])) : ve("", !0) : (Z(), Fe(R(xt), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: _e(({ open: x }) => [
        e.overlay && !e.disabled ? (Z(), Fe(R(Pr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : ve("", !0),
        re(R(Vr), {
          as: "label",
          class: "relative block"
        }, {
          default: _e(() => [
            At(d.$slots, "default", {
              value: g.value,
              placeholder: _.value,
              clear: z
            }, () => [
              se(T("input", Lt({
                ref_key: "VtdInputRef",
                ref: G,
                type: "text",
                class: ["relative block w-full", [
                  e.disabled ? "cursor-default opacity-50" : "opacity-100",
                  t.inputClasses || "pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
                ]],
                disabled: e.disabled,
                autocomplete: "off",
                "data-lpignore": "true",
                "data-form-type": "other"
              }, d.$attrs, {
                "onUpdate:modelValue": f[0] || (f[0] = (r) => g.value = r),
                placeholder: _.value,
                onKeyup: X
              }), null, 16, Hr), [
                [Bt, g.value]
              ]),
              T("div", Rr, [
                T("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: we([e.disabled ? "cursor-default opacity-50" : "opacity-100", "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"]),
                  onClick: f[1] || (f[1] = (r) => e.disabled ? !1 : g.value ? z() : d.$refs.VtdInputRef.focus())
                }, [
                  (Z(), J("svg", Ur, [
                    g.value ? (Z(), J("path", zr)) : (Z(), J("path", Wr))
                  ]))
                ], 10, Ir)
              ])
            ])
          ]),
          _: 3
        }),
        re(lt, {
          "enter-from-class": "opacity-0 translate-y-3",
          "enter-to-class": "opacity-100 translate-y-0",
          "enter-active-class": "transform transition ease-out duration-200",
          "leave-active-class": "transform transition ease-in duration-150",
          "leave-from-class": "opacity-100 translate-y-0",
          "leave-to-class": "opacity-0 translate-y-3"
        }, {
          default: _e(() => [
            e.disabled ? ve("", !0) : (Z(), Fe(R(Cr), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: _e(({ close: r }) => [
                T("div", {
                  class: we(["absolute z-50 top-full sm:mt-2.5", Ot(x)])
                }, [
                  T("div", {
                    ref_key: "VtdRef",
                    ref: N,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    T("div", {
                      class: we(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", ot(x)])
                    }, [
                      T("div", Zr, [
                        e.shortcuts ? (Z(), Fe(nt, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": m(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: r
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : ve("", !0),
                        T("div", Gr, [
                          m() && !e.asSingle ? (Z(), J("div", Kr, qr)) : ve("", !0),
                          T("div", {
                            class: we(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": m() && !e.asSingle,
                              "w-full": !m() && e.asSingle
                            }])
                          }, [
                            re(Ue, {
                              panel: n.previous,
                              calendar: R(E).previous
                            }, null, 8, ["panel", "calendar"]),
                            T("div", Xr, [
                              se(re(ze, {
                                months: R(C),
                                "onUpdate:month": R(E).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ie, n.previous.month]
                              ]),
                              se(re(Ze, {
                                years: R(E).previous.years(),
                                "onUpdate:year": R(E).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ie, n.previous.year]
                              ]),
                              se(T("div", null, [
                                re(We, { weeks: R(L) }, null, 8, ["weeks"]),
                                re(Ge, {
                                  calendar: R(E).previous,
                                  weeks: R(L),
                                  "as-range": m(),
                                  "onUpdate:date": (p, F) => K(p, F, r)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, n.previous.calendar]
                              ])
                            ])
                          ], 2),
                          m() && !e.asSingle ? (Z(), J("div", Qr, [
                            re(Ue, {
                              "as-prev-or-next": "",
                              panel: n.next,
                              calendar: R(E).next
                            }, null, 8, ["panel", "calendar"]),
                            T("div", eo, [
                              se(re(ze, {
                                months: R(C),
                                "onUpdate:month": R(E).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ie, n.next.month]
                              ]),
                              se(re(Ze, {
                                "as-prev-or-next": "",
                                years: R(E).next.years(),
                                "onUpdate:year": R(E).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ie, n.next.year]
                              ]),
                              se(T("div", null, [
                                re(We, { weeks: R(L) }, null, 8, ["weeks"]),
                                re(Ge, {
                                  "as-prev-or-next": "",
                                  calendar: R(E).next,
                                  weeks: R(L),
                                  "as-range": m(),
                                  "onUpdate:date": (p, F) => K(p, F, r)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ie, n.next.calendar]
                              ])
                            ])
                          ])) : ve("", !0)
                        ])
                      ]),
                      e.autoApply ? (Z(), J("div", so, [
                        T("div", lo, [
                          T("div", io, [
                            T("button", {
                              type: "button",
                              onClick: (p) => r(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: ne(e.options.footer.cancel)
                            }, null, 8, uo)
                          ])
                        ])
                      ])) : (Z(), J("div", to, [
                        T("div", ro, [
                          T("div", oo, [
                            T("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? j.value.length < 1 : j.value.length < 2,
                              onClick: (p) => ae(r),
                              textContent: ne(e.options.footer.apply)
                            }, null, 8, ao),
                            T("button", {
                              type: "button",
                              onClick: (p) => r(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: ne(e.options.footer.cancel)
                            }, null, 8, no)
                          ])
                        ])
                      ]))
                    ], 2)
                  ], 512)
                ], 2)
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }));
  }
}, Dt = /* @__PURE__ */ (() => {
  const t = Mo;
  return t.install = (i) => {
    i.component("VueTailwindDatepicker", t);
  }, t;
})(), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(So).forEach(([t, i]) => {
  t !== "default" && (Dt[t] = i);
});
export {
  Dt as c,
  l as d
};
