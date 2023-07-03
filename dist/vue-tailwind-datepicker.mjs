(function(){"use strict";try{if(typeof document!="undefined"){var r=document.createElement("style");r.appendChild(document.createTextNode('.vtd-datepicker-overlay.open:before{display:block;opacity:.5}.vtd-datepicker:before{--vtd-datepicker: 0px;content:"";position:absolute;top:0px;height:1rem;width:1rem;border-width:1px;border-color:#0000001a;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.dark .vtd-datepicker:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker:before{transform:translate(50%,-50%) rotate(-45deg);-webkit-clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)));clip-path:polygon(calc(var(--vtd-datepicker) * -1) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(var(--vtd-datepicker) * -1),calc(100% + var(--vtd-datepicker)) calc(100% + var(--vtd-datepicker)))}.vtd-datepicker.place-left:before{left:.25rem}.dark .vtd-datepicker.place-left:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.vtd-datepicker.place-right:before{right:1.25rem}.dark .vtd-datepicker.place-right:before{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}')),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { openBlock as Z, createElementBlock as J, createElementVNode as A, withDirectives as se, vShow as ue, toDisplayString as ae, Fragment as Me, renderList as Re, inject as de, createVNode as re, TransitionGroup as Vt, withCtx as Ve, normalizeClass as we, Transition as lt, unref as R, createCommentVNode as me, withModifiers as Se, cloneVNode as Pt, h as Ce, provide as ie, ref as ne, onMounted as Ct, watchEffect as ge, computed as ce, defineComponent as Te, toRefs as Yt, watch as ot, reactive as Tt, nextTick as Ee, isProxy as At, createBlock as Fe, renderSlot as jt, mergeProps as Lt, vModelText as Bt } from "vue";
const Et = { class: "flex justify-between items-center px-2 py-1.5" }, Ft = { class: "flex-shrink-0" }, Nt = { class: "inline-flex rounded-full" }, Ht = {
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Rt = ["d"], It = { class: "px-1.5 space-x-1.5 flex flex-1" }, Ut = { class: "flex-1 flex rounded-md" }, Wt = ["textContent"], zt = { class: "flex-1 flex rounded-md" }, Zt = ["textContent"], Gt = { class: "flex-shrink-0" }, Kt = { class: "inline-flex rounded-full" }, Jt = {
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
    return (u, o) => (Z(), J("div", Et, [
      A("div", Ft, [
        se(A("span", Nt, [
          A("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: o[0] || (o[0] = (e) => t.panel.calendar ? t.calendar.onPrevious() : t.calendar.onPreviousYear())
          }, [
            (Z(), J("svg", Ht, [
              A("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M15 19l-7-7 7-7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"
              }, null, 8, Rt)
            ]))
          ])
        ], 512), [
          [ue, t.panel.calendar || t.panel.year]
        ])
      ]),
      A("div", It, [
        A("span", Ut, [
          A("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: ae(t.calendar.month),
            onClick: o[1] || (o[1] = (e) => t.calendar.openMonth())
          }, null, 8, Wt)
        ]),
        A("span", zt, [
          A("button", {
            type: "button",
            class: "px-3 py-1.5 block w-full leading-relaxed rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-semibold sm:font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            textContent: ae(t.calendar.year),
            onClick: o[2] || (o[2] = (e) => t.calendar.openYear())
          }, null, 8, Zt)
        ])
      ]),
      A("div", Gt, [
        se(A("span", Kt, [
          A("button", {
            type: "button",
            class: "p-1.5 rounded-full bg-white text-vtd-secondary-600 transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50",
            onClick: o[3] || (o[3] = (e) => t.panel.calendar ? t.calendar.onNext() : t.calendar.onNextYear())
          }, [
            (Z(), J("svg", Jt, [
              A("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "1.5",
                d: t.panel.calendar ? "M9 5l7 7-7 7" : "M13 5l7 7-7 7M5 5l7 7-7 7"
              }, null, 8, qt)
            ]))
          ])
        ], 512), [
          [ue, t.panel.calendar || t.panel.year]
        ])
      ])
    ]));
  }
}, Xt = { class: "flex flex-wrap mt-1.5" }, Qt = { class: "flex rounded-md mt-1.5" }, er = ["textContent", "onClick"], We = {
  __name: "Month",
  props: {
    months: Array
  },
  emits: ["update:month"],
  setup(t, { emit: u }) {
    return (o, e) => (Z(), J("div", Xt, [
      (Z(!0), J(Me, null, Re(t.months, (s, i) => (Z(), J("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        A("span", Qt, [
          A("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: ae(s),
            onClick: (C) => u("update:month", i)
          }, null, 8, er)
        ])
      ]))), 128))
    ]));
  }
}, tr = { class: "grid grid-cols-7 py-2 mt-0.5" }, rr = ["textContent"], ze = {
  __name: "Week",
  props: {
    weeks: Array
  },
  setup(t) {
    return (u, o) => (Z(), J("div", tr, [
      (Z(!0), J(Me, null, Re(t.weeks, (e, s) => (Z(), J("div", {
        key: s,
        class: "text-vtd-secondary-500 text-xs 2xl:text-sm tracking-wide font-medium text-center cursor-default dark:text-vtd-secondary-400"
      }, [
        A("span", {
          textContent: ae(e)
        }, null, 8, rr)
      ]))), 128))
    ]));
  }
}, nr = { class: "flex flex-wrap" }, or = { class: "flex rounded-md mt-1.5" }, ar = ["textContent", "onClick"], Ze = {
  __name: "Year",
  props: {
    asPrevOrNext: Boolean,
    years: Array
  },
  emits: ["update:year"],
  setup(t, { emit: u }) {
    return (o, e) => (Z(), J("div", nr, [
      (Z(!0), J(Me, null, Re(t.years, (s, i) => (Z(), J("div", {
        key: i,
        class: "w-1/2 px-0.5"
      }, [
        A("span", or, [
          A("button", {
            type: "button",
            class: "px-3 py-2 block w-full leading-6 rounded-md bg-white text-xs 2xl:text-sm tracking-wide text-vtd-secondary-600 font-medium transition-colors border border-transparent hover:bg-vtd-secondary-100 hover:text-vtd-secondary-900 focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none uppercase dark:bg-vtd-secondary-800 dark:hover:bg-vtd-secondary-700 dark:text-vtd-secondary-300 dark:hover:text-vtd-secondary-100 dark:focus:bg-vtd-secondary-700",
            textContent: ae(s),
            onClick: (C) => u("update:year", s, t.asPrevOrNext)
          }, null, 8, ar)
        ])
      ]))), 128))
    ]));
  }
}, sr = { class: "grid grid-cols-7 gap-y-0.5 my-1" }, lr = ["data-tooltip"], ur = ["disabled", "onClick", "onMouseenter", "onFocusin", "textContent", "data-date"], Ge = {
  __name: "Calendar",
  props: {
    asPrevOrNext: Boolean,
    calendar: Object,
    weeks: Array,
    asRange: Boolean
  },
  emits: ["update:date"],
  setup(t, { emit: u }) {
    const o = de("isBetweenRange"), e = de("betweenRangeClasses"), s = de("datepickerClasses"), i = de("atMouseOver");
    return (C, c) => (Z(), J("div", sr, [
      re(Vt, {
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "enter-active-class": "transition-opacity ease-out duration-300",
        "leave-active-class": "transition-opacity ease-in duration-200",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: Ve(() => [
          (Z(!0), J(Me, null, Re(t.calendar.date(), (m, h) => (Z(), J("div", {
            key: h,
            class: we(["relative", { "vtd-tooltip": t.asRange && m.duration() }]),
            "data-tooltip": `${m.duration()}`
          }, [
            re(lt, {
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "enter-active-class": "transition-opacity ease-out duration-200",
              "leave-active-class": "transition-opacity ease-in duration-150",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: Ve(() => [
                R(o)(m) || m.hovered() ? (Z(), J("span", {
                  key: 0,
                  class: we(["absolute bg-vtd-primary-100 bg-opacity-60 dark:bg-vtd-secondary-700 dark:bg-opacity-50", R(e)(m)])
                }, null, 2)) : me("", !0)
              ]),
              _: 2
            }, 1024),
            A("button", {
              type: "button",
              class: we(["vtd-datepicker-date relative w-[2.7rem] h-[2.7rem] lg:w-10 lg:h-10 flex justify-center items-center text-xs 2xl:text-sm", [R(s)(m), t.asRange ? "transition-all" : "transition-colors"]]),
              disabled: m.disabled || m.inRange(),
              onClick: (k) => u("update:date", m, t.asPrevOrNext),
              onMouseenter: (k) => R(i)(m),
              onFocusin: (k) => R(i)(m),
              textContent: ae(m.date()),
              "data-date": m.toDate()
            }, null, 42, ur)
          ], 10, lr))), 128))
        ]),
        _: 1
      })
    ]));
  }
}, ir = {
  key: 0,
  class: "relative w-full border-t border-b-0 sm:border-t-0 sm:border-b lg:border-b-0 lg:border-r border-black/[.1] order-last sm:order-none dark:border-vtd-secondary-700/[1] sm:mt-1 lg:mr-1 sm:mb-1 lg:mb-0 sm:mx-1 lg:mx-0"
}, dr = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, cr = ["onClick", "textContent"], fr = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 gap-1 lg:block w-full pr-5 sm:pr-6 mt-1.5 sm:mt-0 sm:mb-1.5 lg:mb-0"
}, at = {
  __name: "Shortcut",
  props: {
    shortcuts: [Boolean, Function],
    close: Function,
    asRange: Boolean,
    asSingle: Boolean,
    i18n: Object
  },
  setup(t) {
    const u = t, o = de("setToToday"), e = de("setToYesterday"), s = de("setToLastDay"), i = de("setToThisMonth"), C = de("setToLastMonth"), c = de("setToCustomShortcut"), m = () => typeof u.shortcuts == "function" ? u.shortcuts() : !1;
    return (h, k) => u.asRange && u.asSingle || u.asRange && !u.asSingle ? (Z(), J("div", ir, [
      m() ? (Z(), J("ol", dr, [
        (Z(!0), J(Me, null, Re(m(), (x, w) => (Z(), J("li", { key: w }, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: Se((N) => R(c)(x, t.close), ["prevent"]),
            textContent: ae(x.label)
          }, null, 8, cr)
        ]))), 128))
      ])) : (Z(), J("ol", fr, [
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[0] || (k[0] = Se((x) => R(o)(t.close), ["prevent"]))
          }, ae(u.i18n.today), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[1] || (k[1] = Se((x) => R(e)(t.close), ["prevent"]))
          }, ae(u.i18n.yesterday), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[2] || (k[2] = Se((x) => R(s)(7, t.close), ["prevent"]))
          }, ae(u.i18n.past(7)), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[3] || (k[3] = Se((x) => R(s)(30, t.close), ["prevent"]))
          }, ae(u.i18n.past(30)), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[4] || (k[4] = Se((x) => R(i)(t.close), ["prevent"]))
          }, ae(u.i18n.currentMonth), 1)
        ]),
        A("li", null, [
          A("a", {
            href: "#",
            class: "vtd-shortcuts block text-sm lg:text-xs px-2 py-2 sm:leading-4 whitespace-nowrap font-medium rounded text-vtd-primary-600 hover:text-vtd-primary-700 transition-colors hover:bg-vtd-secondary-100 focus:bg-vtd-secondary-100 focus:text-vtd-primary-600 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-primary-300 dark:text-vtd-primary-400 dark:focus:bg-vtd-secondary-700 dark:focus:text-vtd-primary-300",
            onClick: k[5] || (k[5] = Se((x) => R(C)(t.close), ["prevent"]))
          }, ae(u.i18n.pastMonth), 1)
        ])
      ]))
    ])) : me("", !0);
  }
};
function $e(t, u, ...o) {
  if (t in u) {
    let s = u[t];
    return typeof s == "function" ? s(...o) : s;
  }
  let e = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(u).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(e, $e), e;
}
var Ne = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(Ne || {}), vr = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(vr || {});
function Ae({ visible: t = !0, features: u = 0, ourProps: o, theirProps: e, ...s }) {
  var i;
  let C = pr(e, o), c = Object.assign(s, { props: C });
  if (t || u & 2 && C.static)
    return Xe(c);
  if (u & 1) {
    let m = (i = C.unmount) == null || i ? 0 : 1;
    return $e(m, { [0]() {
      return null;
    }, [1]() {
      return Xe({ ...s, props: { ...C, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Xe(c);
}
function Xe({ props: t, attrs: u, slots: o, slot: e, name: s }) {
  var i;
  let { as: C, ...c } = it(t, ["unmount", "static"]), m = (i = o.default) == null ? void 0 : i.call(o, e), h = {};
  if (e) {
    let k = !1, x = [];
    for (let [w, N] of Object.entries(e))
      typeof N == "boolean" && (k = !0), N === !0 && x.push(w);
    k && (h["data-headlessui-state"] = x.join(" "));
  }
  if (C === "template") {
    if (m = ut(m), Object.keys(c).length > 0 || Object.keys(u).length > 0) {
      let [k, ...x] = m != null ? m : [];
      if (!mr(k) || x.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(u)).sort((w, N) => w.localeCompare(N)).map((w) => `  - ${w}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((w) => `  - ${w}`).join(`
`)].join(`
`));
      return Pt(k, Object.assign({}, c, h));
    }
    return Array.isArray(m) && m.length === 1 ? m[0] : m;
  }
  return Ce(C, Object.assign({}, c, h), m);
}
function ut(t) {
  return t.flatMap((u) => u.type === Me ? ut(u.children) : [u]);
}
function pr(...t) {
  if (t.length === 0)
    return {};
  if (t.length === 1)
    return t[0];
  let u = {}, o = {};
  for (let e of t)
    for (let s in e)
      s.startsWith("on") && typeof e[s] == "function" ? (o[s] != null || (o[s] = []), o[s].push(e[s])) : u[s] = e[s];
  if (u.disabled || u["aria-disabled"])
    return Object.assign(u, Object.fromEntries(Object.keys(o).map((e) => [e, void 0])));
  for (let e in o)
    Object.assign(u, { [e](s, ...i) {
      let C = o[e];
      for (let c of C) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        c(s, ...i);
      }
    } });
  return u;
}
function it(t, u = []) {
  let o = Object.assign({}, t);
  for (let e of u)
    e in o && delete o[e];
  return o;
}
function mr(t) {
  return t == null ? !1 : typeof t.type == "string" || typeof t.type == "object" || typeof t.type == "function";
}
let hr = 0;
function yr() {
  return ++hr;
}
function Ye() {
  return yr();
}
var ke = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(ke || {});
function z(t) {
  var u;
  return t == null || t.value == null ? null : (u = t.value.$el) != null ? u : t.value;
}
let dt = Symbol("Context");
var He = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(He || {});
function ct() {
  return de(dt, null);
}
function xr(t) {
  ie(dt, t);
}
function st(t, u) {
  if (t)
    return t;
  let o = u != null ? u : "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function br(t, u) {
  let o = ne(st(t.value.type, t.value.as));
  return Ct(() => {
    o.value = st(t.value.type, t.value.as);
  }), ge(() => {
    var e;
    o.value || !z(u) || z(u) instanceof HTMLButtonElement && !((e = z(u)) != null && e.hasAttribute("type")) && (o.value = "button");
  }), o;
}
const Je = typeof window > "u" || typeof document > "u";
function Ie(t) {
  if (Je)
    return null;
  if (t instanceof Node)
    return t.ownerDocument;
  if (t != null && t.hasOwnProperty("value")) {
    let u = z(t);
    if (u)
      return u.ownerDocument;
  }
  return document;
}
let et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var De = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(De || {}), gr = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(gr || {}), kr = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(kr || {});
function ft(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(et));
}
var rt = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(rt || {});
function vt(t, u = 0) {
  var o;
  return t === ((o = Ie(t)) == null ? void 0 : o.body) ? !1 : $e(u, { [0]() {
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
  var u, o;
  return (o = (u = t == null ? void 0 : t.matches) == null ? void 0 : u.call(t, wr)) != null ? o : !1;
}
function Mr(t, u = (o) => o) {
  return t.slice().sort((o, e) => {
    let s = u(o), i = u(e);
    if (s === null || i === null)
      return 0;
    let C = s.compareDocumentPosition(i);
    return C & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : C & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Pe(t, u, o = !0, e = null) {
  var s;
  let i = (s = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t == null ? void 0 : t.ownerDocument) != null ? s : document, C = Array.isArray(t) ? o ? Mr(t) : t : ft(t);
  e = e != null ? e : i.activeElement;
  let c = (() => {
    if (u & 5)
      return 1;
    if (u & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = (() => {
    if (u & 1)
      return 0;
    if (u & 2)
      return Math.max(0, C.indexOf(e)) - 1;
    if (u & 4)
      return Math.max(0, C.indexOf(e)) + 1;
    if (u & 8)
      return C.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = u & 32 ? { preventScroll: !0 } : {}, k = 0, x = C.length, w;
  do {
    if (k >= x || k + x <= 0)
      return 0;
    let N = m + k;
    if (u & 16)
      N = (N + x) % x;
    else {
      if (N < 0)
        return 3;
      if (N >= x)
        return 1;
    }
    w = C[N], w == null || w.focus(h), k += c;
  } while (w !== i.activeElement);
  return u & 6 && $r(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function Qe(t, u, o) {
  Je || ge((e) => {
    document.addEventListener(t, u, o), e(() => document.removeEventListener(t, u, o));
  });
}
function Sr(t, u, o = ce(() => !0)) {
  function e(i, C) {
    if (!o.value || i.defaultPrevented)
      return;
    let c = C(i);
    if (c === null || !c.ownerDocument.documentElement.contains(c))
      return;
    let m = function h(k) {
      return typeof k == "function" ? h(k()) : Array.isArray(k) || k instanceof Set ? k : [k];
    }(t);
    for (let h of m) {
      if (h === null)
        continue;
      let k = h instanceof HTMLElement ? h : z(h);
      if (k != null && k.contains(c))
        return;
    }
    return !vt(c, rt.Loose) && c.tabIndex !== -1 && i.preventDefault(), u(i, c);
  }
  let s = ne(null);
  Qe("mousedown", (i) => {
    o.value && (s.value = i.target);
  }, !0), Qe("click", (i) => {
    !s.value || (e(i, () => s.value), s.value = null);
  }, !0), Qe("blur", (i) => e(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ke = ((t) => (t[t.None = 1] = "None", t[t.Focusable = 2] = "Focusable", t[t.Hidden = 4] = "Hidden", t))(Ke || {});
let tt = Te({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t, { slots: u, attrs: o }) {
  return () => {
    let { features: e, ...s } = t, i = { "aria-hidden": (e & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
    return Ae({ ourProps: i, theirProps: s, slot: {}, attrs: o, slots: u, name: "Hidden" });
  };
} });
function Dr(t, u, o) {
  Je || ge((e) => {
    window.addEventListener(t, u, o), e(() => window.removeEventListener(t, u, o));
  });
}
var Oe = ((t) => (t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Oe || {});
function pt() {
  let t = ne(0);
  return Dr("keydown", (u) => {
    u.key === "Tab" && (t.value = u.shiftKey ? 1 : 0);
  }), t;
}
function Or(t, u, o, e) {
  Je || ge((s) => {
    t = t != null ? t : window, t.addEventListener(u, o, e), s(() => t.removeEventListener(u, o, e));
  });
}
var _r = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))(_r || {});
let mt = Symbol("PopoverContext");
function qe(t) {
  let u = de(mt, null);
  if (u === null) {
    let o = new Error(`<${t} /> is missing a parent <${bt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, qe), o;
  }
  return u;
}
let ht = Symbol("PopoverGroupContext");
function yt() {
  return de(ht, null);
}
let xt = Symbol("PopoverPanelContext");
function Vr() {
  return de(xt, null);
}
let bt = Te({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: u, attrs: o, expose: e }) {
  var s;
  let i = `headlessui-popover-button-${Ye()}`, C = `headlessui-popover-panel-${Ye()}`, c = ne(null);
  e({ el: c, $el: c });
  let m = ne(1), h = ne(null), k = ne(null), x = ne(null), w = ne(null), N = ce(() => Ie(c)), G = ce(() => {
    if (!z(h) || !z(w))
      return !1;
    for (let M of document.querySelectorAll("body > *"))
      if (Number(M == null ? void 0 : M.contains(z(h))) ^ Number(M == null ? void 0 : M.contains(z(w))))
        return !0;
    return !1;
  }), S = { popoverState: m, buttonId: i, panelId: C, panel: w, button: h, isPortalled: G, beforePanelSentinel: k, afterPanelSentinel: x, togglePopover() {
    m.value = $e(m.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    m.value !== 1 && (m.value = 1);
  }, close(M) {
    S.closePopover();
    let _ = (() => M ? M instanceof HTMLElement ? M : M.value instanceof HTMLElement ? z(M) : z(S.button) : z(S.button))();
    _ == null || _.focus();
  } };
  ie(mt, S), xr(ce(() => $e(m.value, { [0]: He.Open, [1]: He.Closed })));
  let V = { buttonId: i, panelId: C, close() {
    S.closePopover();
  } }, D = yt(), g = D == null ? void 0 : D.registerPopover;
  function P() {
    var M, _, $, a;
    return (a = D == null ? void 0 : D.isFocusWithinPopoverGroup()) != null ? a : ((M = N.value) == null ? void 0 : M.activeElement) && (((_ = z(h)) == null ? void 0 : _.contains(N.value.activeElement)) || (($ = z(w)) == null ? void 0 : $.contains(N.value.activeElement)));
  }
  return ge(() => g == null ? void 0 : g(V)), Or((s = N.value) == null ? void 0 : s.defaultView, "focus", (M) => {
    var _, $;
    m.value === 0 && (P() || !h || !w || (_ = z(S.beforePanelSentinel)) != null && _.contains(M.target) || ($ = z(S.afterPanelSentinel)) != null && $.contains(M.target) || S.closePopover());
  }, !0), Sr([h, w], (M, _) => {
    var $;
    S.closePopover(), vt(_, rt.Loose) || (M.preventDefault(), ($ = z(h)) == null || $.focus());
  }, ce(() => m.value === 0)), () => {
    let M = { open: m.value === 0, close: S.close };
    return Ae({ theirProps: t, ourProps: { ref: c }, slot: M, slots: u, attrs: o, name: "Popover" });
  };
} }), Pr = Te({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(t, { attrs: u, slots: o, expose: e }) {
  let s = qe("PopoverButton"), i = ce(() => Ie(s.button));
  e({ el: s.button, $el: s.button });
  let C = yt(), c = C == null ? void 0 : C.closeOthers, m = Vr(), h = m === null ? !1 : m === s.panelId, k = ne(null), x = `headlessui-focus-sentinel-${Ye()}`;
  h || ge(() => {
    s.button.value = k.value;
  });
  let w = br(ce(() => ({ as: t.as, type: u.type })), k);
  function N(D) {
    var g, P, M, _, $;
    if (h) {
      if (s.popoverState.value === 1)
        return;
      switch (D.key) {
        case ke.Space:
        case ke.Enter:
          D.preventDefault(), (P = (g = D.target).click) == null || P.call(g), s.closePopover(), (M = z(s.button)) == null || M.focus();
          break;
      }
    } else
      switch (D.key) {
        case ke.Space:
        case ke.Enter:
          D.preventDefault(), D.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover();
          break;
        case ke.Escape:
          if (s.popoverState.value !== 0)
            return c == null ? void 0 : c(s.buttonId);
          if (!z(s.button) || ((_ = i.value) == null ? void 0 : _.activeElement) && !(($ = z(s.button)) != null && $.contains(i.value.activeElement)))
            return;
          D.preventDefault(), D.stopPropagation(), s.closePopover();
          break;
      }
  }
  function G(D) {
    h || D.key === ke.Space && D.preventDefault();
  }
  function S(D) {
    var g, P;
    t.disabled || (h ? (s.closePopover(), (g = z(s.button)) == null || g.focus()) : (D.preventDefault(), D.stopPropagation(), s.popoverState.value === 1 && (c == null || c(s.buttonId)), s.togglePopover(), (P = z(s.button)) == null || P.focus()));
  }
  function V(D) {
    D.preventDefault(), D.stopPropagation();
  }
  return () => {
    let D = s.popoverState.value === 0, g = { open: D }, P = h ? { ref: k, type: w.value, onKeydown: N, onClick: S } : { ref: k, id: s.buttonId, type: w.value, "aria-expanded": t.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": z(s.panel) ? s.panelId : void 0, disabled: t.disabled ? !0 : void 0, onKeydown: N, onKeyup: G, onClick: S, onMousedown: V }, M = pt();
    function _() {
      let $ = z(s.panel);
      if (!$)
        return;
      function a() {
        $e(M.value, { [Oe.Forwards]: () => Pe($, De.First), [Oe.Backwards]: () => Pe($, De.Last) });
      }
      a();
    }
    return Ce(Me, [Ae({ ourProps: P, theirProps: { ...u, ...t }, slot: g, attrs: u, slots: o, name: "PopoverButton" }), D && !h && s.isPortalled.value && Ce(tt, { id: x, features: Ke.Focusable, as: "button", type: "button", onFocus: _ })]);
  };
} }), Cr = Te({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(t, { attrs: u, slots: o }) {
  let e = qe("PopoverOverlay"), s = `headlessui-popover-overlay-${Ye()}`, i = ct(), C = ce(() => i !== null ? i.value === He.Open : e.popoverState.value === 0);
  function c() {
    e.closePopover();
  }
  return () => {
    let m = { open: e.popoverState.value === 0 };
    return Ae({ ourProps: { id: s, "aria-hidden": !0, onClick: c }, theirProps: t, slot: m, attrs: u, slots: o, features: Ne.RenderStrategy | Ne.Static, visible: C.value, name: "PopoverOverlay" });
  };
} }), Yr = Te({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 } }, inheritAttrs: !1, setup(t, { attrs: u, slots: o, expose: e }) {
  let { focus: s } = t, i = qe("PopoverPanel"), C = ce(() => Ie(i.panel)), c = `headlessui-focus-sentinel-before-${Ye()}`, m = `headlessui-focus-sentinel-after-${Ye()}`;
  e({ el: i.panel, $el: i.panel }), ie(xt, i.panelId), ge(() => {
    var V, D;
    if (!s || i.popoverState.value !== 0 || !i.panel)
      return;
    let g = (V = C.value) == null ? void 0 : V.activeElement;
    (D = z(i.panel)) != null && D.contains(g) || Pe(z(i.panel), De.First);
  });
  let h = ct(), k = ce(() => h !== null ? h.value === He.Open : i.popoverState.value === 0);
  function x(V) {
    var D, g;
    switch (V.key) {
      case ke.Escape:
        if (i.popoverState.value !== 0 || !z(i.panel) || C.value && !((D = z(i.panel)) != null && D.contains(C.value.activeElement)))
          return;
        V.preventDefault(), V.stopPropagation(), i.closePopover(), (g = z(i.button)) == null || g.focus();
        break;
    }
  }
  function w(V) {
    var D, g, P, M, _;
    let $ = V.relatedTarget;
    !$ || !z(i.panel) || (D = z(i.panel)) != null && D.contains($) || (i.closePopover(), (((P = (g = z(i.beforePanelSentinel)) == null ? void 0 : g.contains) == null ? void 0 : P.call(g, $)) || ((_ = (M = z(i.afterPanelSentinel)) == null ? void 0 : M.contains) == null ? void 0 : _.call(M, $))) && $.focus({ preventScroll: !0 }));
  }
  let N = pt();
  function G() {
    let V = z(i.panel);
    if (!V)
      return;
    function D() {
      $e(N.value, { [Oe.Forwards]: () => {
        Pe(V, De.Next);
      }, [Oe.Backwards]: () => {
        var g;
        (g = z(i.button)) == null || g.focus({ preventScroll: !0 });
      } });
    }
    D();
  }
  function S() {
    let V = z(i.panel);
    if (!V)
      return;
    function D() {
      $e(N.value, { [Oe.Forwards]: () => {
        var g, P;
        let M = z(i.button), _ = z(i.panel);
        if (!M)
          return;
        let $ = ft(), a = $.indexOf(M), n = $.slice(0, a + 1), L = [...$.slice(a + 1), ...n];
        for (let Y of L.slice())
          if (((P = (g = Y == null ? void 0 : Y.id) == null ? void 0 : g.startsWith) == null ? void 0 : P.call(g, "headlessui-focus-sentinel-")) || (_ == null ? void 0 : _.contains(Y))) {
            let E = L.indexOf(Y);
            E !== -1 && L.splice(E, 1);
          }
        Pe(L, De.First, !1);
      }, [Oe.Backwards]: () => Pe(V, De.Previous) });
    }
    D();
  }
  return () => {
    let V = { open: i.popoverState.value === 0, close: i.close }, D = { ref: i.panel, id: i.panelId, onKeydown: x, onFocusout: s && i.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return Ae({ ourProps: D, theirProps: { ...u, ...it(t, ["focus"]) }, attrs: u, slot: V, slots: { ...o, default: (...g) => {
      var P;
      return [Ce(Me, [k.value && i.isPortalled.value && Ce(tt, { id: c, ref: i.beforePanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: G }), (P = o.default) == null ? void 0 : P.call(o, ...g), k.value && i.isPortalled.value && Ce(tt, { id: m, ref: i.afterPanelSentinel, features: Ke.Focusable, as: "button", type: "button", onFocus: S })])];
    } }, features: Ne.RenderStrategy | Ne.Static, visible: k.value, name: "PopoverPanel" });
  };
} });
Te({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(t, { attrs: u, slots: o, expose: e }) {
  let s = ne(null), i = ne([]), C = ce(() => Ie(s));
  e({ el: s, $el: s });
  function c(x) {
    let w = i.value.indexOf(x);
    w !== -1 && i.value.splice(w, 1);
  }
  function m(x) {
    return i.value.push(x), () => {
      c(x);
    };
  }
  function h() {
    var x;
    let w = C.value;
    if (!w)
      return !1;
    let N = w.activeElement;
    return (x = z(s)) != null && x.contains(N) ? !0 : i.value.some((G) => {
      var S, V;
      return ((S = w.getElementById(G.buttonId)) == null ? void 0 : S.contains(N)) || ((V = w.getElementById(G.panelId)) == null ? void 0 : V.contains(N));
    });
  }
  function k(x) {
    for (let w of i.value)
      w.buttonId !== x && w.close();
  }
  return ie(ht, { registerPopover: m, unregisterPopover: c, isFocusWithinPopoverGroup: h, closeOthers: k }), () => Ae({ ourProps: { ref: s }, theirProps: t, slot: {}, attrs: u, slots: o, name: "PopoverGroup" });
} });
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gt = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    var o = 1e3, e = 6e4, s = 36e5, i = "millisecond", C = "second", c = "minute", m = "hour", h = "day", k = "week", x = "month", w = "quarter", N = "year", G = "date", S = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(j) {
      var O = ["th", "st", "nd", "rd"], y = j % 100;
      return "[" + j + (O[(y - 20) % 10] || O[y] || O[0]) + "]";
    } }, P = function(j, O, y) {
      var T = String(j);
      return !T || T.length >= O ? j : "" + Array(O + 1 - T.length).join(y) + j;
    }, M = { s: P, z: function(j) {
      var O = -j.utcOffset(), y = Math.abs(O), T = Math.floor(y / 60), p = y % 60;
      return (O <= 0 ? "+" : "-") + P(T, 2, "0") + ":" + P(p, 2, "0");
    }, m: function j(O, y) {
      if (O.date() < y.date())
        return -j(y, O);
      var T = 12 * (y.year() - O.year()) + (y.month() - O.month()), p = O.clone().add(T, x), H = y - p < 0, B = O.clone().add(T + (H ? -1 : 1), x);
      return +(-(T + (y - p) / (H ? p - B : B - p)) || 0);
    }, a: function(j) {
      return j < 0 ? Math.ceil(j) || 0 : Math.floor(j);
    }, p: function(j) {
      return { M: x, y: N, w: k, d: h, D: G, h: m, m: c, s: C, ms: i, Q: w }[j] || String(j || "").toLowerCase().replace(/s$/, "");
    }, u: function(j) {
      return j === void 0;
    } }, _ = "en", $ = {};
    $[_] = g;
    var a = function(j) {
      return j instanceof E;
    }, n = function j(O, y, T) {
      var p;
      if (!O)
        return _;
      if (typeof O == "string") {
        var H = O.toLowerCase();
        $[H] && (p = H), y && ($[H] = y, p = H);
        var B = O.split("-");
        if (!p && B.length > 1)
          return j(B[0]);
      } else {
        var W = O.name;
        $[W] = O, p = W;
      }
      return !T && p && (_ = p), p || !T && _;
    }, L = function(j, O) {
      if (a(j))
        return j.clone();
      var y = typeof O == "object" ? O : {};
      return y.date = j, y.args = arguments, new E(y);
    }, Y = M;
    Y.l = n, Y.i = a, Y.w = function(j, O) {
      return L(j, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
    };
    var E = function() {
      function j(y) {
        this.$L = n(y.locale, null, !0), this.parse(y);
      }
      var O = j.prototype;
      return O.parse = function(y) {
        this.$d = function(T) {
          var p = T.date, H = T.utc;
          if (p === null)
            return new Date(NaN);
          if (Y.u(p))
            return new Date();
          if (p instanceof Date)
            return new Date(p);
          if (typeof p == "string" && !/Z$/i.test(p)) {
            var B = p.match(V);
            if (B) {
              var W = B[2] - 1 || 0, X = (B[7] || "0").substring(0, 3);
              return H ? new Date(Date.UTC(B[1], W, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, X)) : new Date(B[1], W, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, X);
            }
          }
          return new Date(p);
        }(y), this.$x = y.x || {}, this.init();
      }, O.init = function() {
        var y = this.$d;
        this.$y = y.getFullYear(), this.$M = y.getMonth(), this.$D = y.getDate(), this.$W = y.getDay(), this.$H = y.getHours(), this.$m = y.getMinutes(), this.$s = y.getSeconds(), this.$ms = y.getMilliseconds();
      }, O.$utils = function() {
        return Y;
      }, O.isValid = function() {
        return this.$d.toString() !== S;
      }, O.isSame = function(y, T) {
        var p = L(y);
        return this.startOf(T) <= p && p <= this.endOf(T);
      }, O.isAfter = function(y, T) {
        return L(y) < this.startOf(T);
      }, O.isBefore = function(y, T) {
        return this.endOf(T) < L(y);
      }, O.$g = function(y, T, p) {
        return Y.u(y) ? this[T] : this.set(p, y);
      }, O.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, O.valueOf = function() {
        return this.$d.getTime();
      }, O.startOf = function(y, T) {
        var p = this, H = !!Y.u(T) || T, B = Y.p(y), W = function(pe, ee) {
          var le = Y.w(p.$u ? Date.UTC(p.$y, ee, pe) : new Date(p.$y, ee, pe), p);
          return H ? le : le.endOf(h);
        }, X = function(pe, ee) {
          return Y.w(p.toDate()[pe].apply(p.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), p);
        }, K = this.$W, oe = this.$M, ve = this.$D, fe = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case N:
            return H ? W(1, 0) : W(31, 11);
          case x:
            return H ? W(1, oe) : W(0, oe + 1);
          case k:
            var be = this.$locale().weekStart || 0, he = (K < be ? K + 7 : K) - be;
            return W(H ? ve - he : ve + (6 - he), oe);
          case h:
          case G:
            return X(fe + "Hours", 0);
          case m:
            return X(fe + "Minutes", 1);
          case c:
            return X(fe + "Seconds", 2);
          case C:
            return X(fe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, O.endOf = function(y) {
        return this.startOf(y, !1);
      }, O.$set = function(y, T) {
        var p, H = Y.p(y), B = "set" + (this.$u ? "UTC" : ""), W = (p = {}, p[h] = B + "Date", p[G] = B + "Date", p[x] = B + "Month", p[N] = B + "FullYear", p[m] = B + "Hours", p[c] = B + "Minutes", p[C] = B + "Seconds", p[i] = B + "Milliseconds", p)[H], X = H === h ? this.$D + (T - this.$W) : T;
        if (H === x || H === N) {
          var K = this.clone().set(G, 1);
          K.$d[W](X), K.init(), this.$d = K.set(G, Math.min(this.$D, K.daysInMonth())).$d;
        } else
          W && this.$d[W](X);
        return this.init(), this;
      }, O.set = function(y, T) {
        return this.clone().$set(y, T);
      }, O.get = function(y) {
        return this[Y.p(y)]();
      }, O.add = function(y, T) {
        var p, H = this;
        y = Number(y);
        var B = Y.p(T), W = function(oe) {
          var ve = L(H);
          return Y.w(ve.date(ve.date() + Math.round(oe * y)), H);
        };
        if (B === x)
          return this.set(x, this.$M + y);
        if (B === N)
          return this.set(N, this.$y + y);
        if (B === h)
          return W(1);
        if (B === k)
          return W(7);
        var X = (p = {}, p[c] = e, p[m] = s, p[C] = o, p)[B] || 1, K = this.$d.getTime() + y * X;
        return Y.w(K, this);
      }, O.subtract = function(y, T) {
        return this.add(-1 * y, T);
      }, O.format = function(y) {
        var T = this, p = this.$locale();
        if (!this.isValid())
          return p.invalidDate || S;
        var H = y || "YYYY-MM-DDTHH:mm:ssZ", B = Y.z(this), W = this.$H, X = this.$m, K = this.$M, oe = p.weekdays, ve = p.months, fe = function(ee, le, ye, xe) {
          return ee && (ee[le] || ee(T, H)) || ye[le].slice(0, xe);
        }, be = function(ee) {
          return Y.s(W % 12 || 12, ee, "0");
        }, he = p.meridiem || function(ee, le, ye) {
          var xe = ee < 12 ? "AM" : "PM";
          return ye ? xe.toLowerCase() : xe;
        }, pe = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: K + 1, MM: Y.s(K + 1, 2, "0"), MMM: fe(p.monthsShort, K, ve, 3), MMMM: fe(ve, K), D: this.$D, DD: Y.s(this.$D, 2, "0"), d: String(this.$W), dd: fe(p.weekdaysMin, this.$W, oe, 2), ddd: fe(p.weekdaysShort, this.$W, oe, 3), dddd: oe[this.$W], H: String(W), HH: Y.s(W, 2, "0"), h: be(1), hh: be(2), a: he(W, X, !0), A: he(W, X, !1), m: String(X), mm: Y.s(X, 2, "0"), s: String(this.$s), ss: Y.s(this.$s, 2, "0"), SSS: Y.s(this.$ms, 3, "0"), Z: B };
        return H.replace(D, function(ee, le) {
          return le || pe[ee] || B.replace(":", "");
        });
      }, O.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, O.diff = function(y, T, p) {
        var H, B = Y.p(T), W = L(y), X = (W.utcOffset() - this.utcOffset()) * e, K = this - W, oe = Y.m(this, W);
        return oe = (H = {}, H[N] = oe / 12, H[x] = oe, H[w] = oe / 3, H[k] = (K - X) / 6048e5, H[h] = (K - X) / 864e5, H[m] = K / s, H[c] = K / e, H[C] = K / o, H)[B] || K, p ? oe : Y.a(oe);
      }, O.daysInMonth = function() {
        return this.endOf(x).$D;
      }, O.$locale = function() {
        return $[this.$L];
      }, O.locale = function(y, T) {
        if (!y)
          return this.$L;
        var p = this.clone(), H = n(y, T, !0);
        return H && (p.$L = H), p;
      }, O.clone = function() {
        return Y.w(this.$d, this);
      }, O.toDate = function() {
        return new Date(this.valueOf());
      }, O.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, O.toISOString = function() {
        return this.$d.toISOString();
      }, O.toString = function() {
        return this.$d.toUTCString();
      }, j;
    }(), q = E.prototype;
    return L.prototype = q, [["$ms", i], ["$s", C], ["$m", c], ["$H", m], ["$W", h], ["$M", x], ["$y", N], ["$D", G]].forEach(function(j) {
      q[j[1]] = function(O) {
        return this.$g(O, j[0], j[1]);
      };
    }), L.extend = function(j, O) {
      return j.$i || (j(O, E, L), j.$i = !0), L;
    }, L.locale = n, L.isDayjs = a, L.unix = function(j) {
      return L(1e3 * j);
    }, L.en = $[_], L.Ls = $, L.p = {}, L;
  });
})(gt);
const l = gt.exports;
var kt = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    return function(o, e, s) {
      var i = e.prototype, C = function(x) {
        return x && (x.indexOf ? x : x.s);
      }, c = function(x, w, N, G, S) {
        var V = x.name ? x : x.$locale(), D = C(V[w]), g = C(V[N]), P = D || g.map(function(_) {
          return _.slice(0, G);
        });
        if (!S)
          return P;
        var M = V.weekStart;
        return P.map(function(_, $) {
          return P[($ + (M || 0)) % 7];
        });
      }, m = function() {
        return s.Ls[s.locale()];
      }, h = function(x, w) {
        return x.formats[w] || function(N) {
          return N.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, S, V) {
            return S || V.slice(1);
          });
        }(x.formats[w.toUpperCase()]);
      }, k = function() {
        var x = this;
        return { months: function(w) {
          return w ? w.format("MMMM") : c(x, "months");
        }, monthsShort: function(w) {
          return w ? w.format("MMM") : c(x, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return x.$locale().weekStart || 0;
        }, weekdays: function(w) {
          return w ? w.format("dddd") : c(x, "weekdays");
        }, weekdaysMin: function(w) {
          return w ? w.format("dd") : c(x, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(w) {
          return w ? w.format("ddd") : c(x, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(w) {
          return h(x.$locale(), w);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      i.localeData = function() {
        return k.bind(this)();
      }, s.localeData = function() {
        var x = m();
        return { firstDayOfWeek: function() {
          return x.weekStart || 0;
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
          return h(x, w);
        }, meridiem: x.meridiem, ordinal: x.ordinal };
      }, s.months = function() {
        return c(m(), "months");
      }, s.monthsShort = function() {
        return c(m(), "monthsShort", "months", 3);
      }, s.weekdays = function(x) {
        return c(m(), "weekdays", null, null, x);
      }, s.weekdaysShort = function(x) {
        return c(m(), "weekdaysShort", "weekdays", 3, x);
      }, s.weekdaysMin = function(x) {
        return c(m(), "weekdaysMin", "weekdays", 2, x);
      };
    };
  });
})(kt);
const Tr = kt.exports;
var wt = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(e, s, i) {
      var C = s.prototype, c = C.format;
      i.en.formats = o, C.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var h = this.$locale().formats, k = function(x, w) {
          return x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(N, G, S) {
            var V = S && S.toUpperCase();
            return G || w[S] || o[S] || w[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(D, g, P) {
              return g || P.slice(1);
            });
          });
        }(m, h === void 0 ? {} : h);
        return c.call(this, k);
      };
    };
  });
})(wt);
const Ar = wt.exports;
var $t = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, C = /\d*[^-_:/,()\s\d]+/, c = {}, m = function(S) {
      return (S = +S) + (S > 68 ? 1900 : 2e3);
    }, h = function(S) {
      return function(V) {
        this[S] = +V;
      };
    }, k = [/[+-]\d\d:?(\d\d)?|Z/, function(S) {
      (this.zone || (this.zone = {})).offset = function(V) {
        if (!V || V === "Z")
          return 0;
        var D = V.match(/([+-]|\d\d)/g), g = 60 * D[1] + (+D[2] || 0);
        return g === 0 ? 0 : D[0] === "+" ? -g : g;
      }(S);
    }], x = function(S) {
      var V = c[S];
      return V && (V.indexOf ? V : V.s.concat(V.f));
    }, w = function(S, V) {
      var D, g = c.meridiem;
      if (g) {
        for (var P = 1; P <= 24; P += 1)
          if (S.indexOf(g(P, 0, V)) > -1) {
            D = P > 12;
            break;
          }
      } else
        D = S === (V ? "pm" : "PM");
      return D;
    }, N = { A: [C, function(S) {
      this.afternoon = w(S, !1);
    }], a: [C, function(S) {
      this.afternoon = w(S, !0);
    }], S: [/\d/, function(S) {
      this.milliseconds = 100 * +S;
    }], SS: [s, function(S) {
      this.milliseconds = 10 * +S;
    }], SSS: [/\d{3}/, function(S) {
      this.milliseconds = +S;
    }], s: [i, h("seconds")], ss: [i, h("seconds")], m: [i, h("minutes")], mm: [i, h("minutes")], H: [i, h("hours")], h: [i, h("hours")], HH: [i, h("hours")], hh: [i, h("hours")], D: [i, h("day")], DD: [s, h("day")], Do: [C, function(S) {
      var V = c.ordinal, D = S.match(/\d+/);
      if (this.day = D[0], V)
        for (var g = 1; g <= 31; g += 1)
          V(g).replace(/\[|\]/g, "") === S && (this.day = g);
    }], M: [i, h("month")], MM: [s, h("month")], MMM: [C, function(S) {
      var V = x("months"), D = (x("monthsShort") || V.map(function(g) {
        return g.slice(0, 3);
      })).indexOf(S) + 1;
      if (D < 1)
        throw new Error();
      this.month = D % 12 || D;
    }], MMMM: [C, function(S) {
      var V = x("months").indexOf(S) + 1;
      if (V < 1)
        throw new Error();
      this.month = V % 12 || V;
    }], Y: [/[+-]?\d+/, h("year")], YY: [s, function(S) {
      this.year = m(S);
    }], YYYY: [/\d{4}/, h("year")], Z: k, ZZ: k };
    function G(S) {
      var V, D;
      V = S, D = c && c.formats;
      for (var g = (S = V.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, Y, E) {
        var q = E && E.toUpperCase();
        return Y || D[E] || o[E] || D[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, O, y) {
          return O || y.slice(1);
        });
      })).match(e), P = g.length, M = 0; M < P; M += 1) {
        var _ = g[M], $ = N[_], a = $ && $[0], n = $ && $[1];
        g[M] = n ? { regex: a, parser: n } : _.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var Y = {}, E = 0, q = 0; E < P; E += 1) {
          var j = g[E];
          if (typeof j == "string")
            q += j.length;
          else {
            var O = j.regex, y = j.parser, T = L.slice(q), p = O.exec(T)[0];
            y.call(Y, p), L = L.replace(p, "");
          }
        }
        return function(H) {
          var B = H.afternoon;
          if (B !== void 0) {
            var W = H.hours;
            B ? W < 12 && (H.hours += 12) : W === 12 && (H.hours = 0), delete H.afternoon;
          }
        }(Y), Y;
      };
    }
    return function(S, V, D) {
      D.p.customParseFormat = !0, S && S.parseTwoDigitYear && (m = S.parseTwoDigitYear);
      var g = V.prototype, P = g.parse;
      g.parse = function(M) {
        var _ = M.date, $ = M.utc, a = M.args;
        this.$u = $;
        var n = a[1];
        if (typeof n == "string") {
          var L = a[2] === !0, Y = a[3] === !0, E = L || Y, q = a[2];
          Y && (q = a[2]), c = this.$locale(), !L && q && (c = D.Ls[q]), this.$d = function(T, p, H) {
            try {
              if (["x", "X"].indexOf(p) > -1)
                return new Date((p === "X" ? 1e3 : 1) * T);
              var B = G(p)(T), W = B.year, X = B.month, K = B.day, oe = B.hours, ve = B.minutes, fe = B.seconds, be = B.milliseconds, he = B.zone, pe = new Date(), ee = K || (W || X ? 1 : pe.getDate()), le = W || pe.getFullYear(), ye = 0;
              W && !X || (ye = X > 0 ? X - 1 : pe.getMonth());
              var xe = oe || 0, je = ve || 0, Le = fe || 0, Be = be || 0;
              return he ? new Date(Date.UTC(le, ye, ee, xe, je, Le, Be + 60 * he.offset * 1e3)) : H ? new Date(Date.UTC(le, ye, ee, xe, je, Le, Be)) : new Date(le, ye, ee, xe, je, Le, Be);
            } catch {
              return new Date("");
            }
          }(_, n, $), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), E && _ != this.format(n) && (this.$d = new Date("")), c = {};
        } else if (n instanceof Array)
          for (var j = n.length, O = 1; O <= j; O += 1) {
            a[1] = n[O - 1];
            var y = D.apply(this, a);
            if (y.isValid()) {
              this.$d = y.$d, this.$L = y.$L, this.init();
              break;
            }
            O === j && (this.$d = new Date(""));
          }
        else
          P.call(this, M);
      };
    };
  });
})($t);
const jr = $t.exports;
var Mt = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    return function(o, e, s) {
      e.prototype.isToday = function() {
        var i = "YYYY-MM-DD", C = s();
        return this.format(i) === C.format(i);
      };
    };
  });
})(Mt);
const Lr = Mt.exports;
var St = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    return function(o, e, s) {
      e.prototype.isBetween = function(i, C, c, m) {
        var h = s(i), k = s(C), x = (m = m || "()")[0] === "(", w = m[1] === ")";
        return (x ? this.isAfter(h, c) : !this.isBefore(h, c)) && (w ? this.isBefore(k, c) : !this.isAfter(k, c)) || (x ? this.isBefore(h, c) : !this.isAfter(h, c)) && (w ? this.isAfter(k, c) : !this.isBefore(k, c));
      };
    };
  });
})(St);
const Br = St.exports;
var Dt = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(_e, function() {
    var o, e, s = 1e3, i = 6e4, C = 36e5, c = 864e5, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, k = 2592e6, x = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, w = { years: h, months: k, days: c, hours: C, minutes: i, seconds: s, milliseconds: 1, weeks: 6048e5 }, N = function(_) {
      return _ instanceof M;
    }, G = function(_, $, a) {
      return new M(_, a, $.$l);
    }, S = function(_) {
      return e.p(_) + "s";
    }, V = function(_) {
      return _ < 0;
    }, D = function(_) {
      return V(_) ? Math.ceil(_) : Math.floor(_);
    }, g = function(_) {
      return Math.abs(_);
    }, P = function(_, $) {
      return _ ? V(_) ? { negative: !0, format: "" + g(_) + $ } : { negative: !1, format: "" + _ + $ } : { negative: !1, format: "" };
    }, M = function() {
      function _(a, n, L) {
        var Y = this;
        if (this.$d = {}, this.$l = L, a === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), n)
          return G(a * w[S(n)], this);
        if (typeof a == "number")
          return this.$ms = a, this.parseFromMilliseconds(), this;
        if (typeof a == "object")
          return Object.keys(a).forEach(function(j) {
            Y.$d[S(j)] = a[j];
          }), this.calMilliseconds(), this;
        if (typeof a == "string") {
          var E = a.match(x);
          if (E) {
            var q = E.slice(2).map(function(j) {
              return j != null ? Number(j) : 0;
            });
            return this.$d.years = q[0], this.$d.months = q[1], this.$d.weeks = q[2], this.$d.days = q[3], this.$d.hours = q[4], this.$d.minutes = q[5], this.$d.seconds = q[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var $ = _.prototype;
      return $.calMilliseconds = function() {
        var a = this;
        this.$ms = Object.keys(this.$d).reduce(function(n, L) {
          return n + (a.$d[L] || 0) * w[L];
        }, 0);
      }, $.parseFromMilliseconds = function() {
        var a = this.$ms;
        this.$d.years = D(a / h), a %= h, this.$d.months = D(a / k), a %= k, this.$d.days = D(a / c), a %= c, this.$d.hours = D(a / C), a %= C, this.$d.minutes = D(a / i), a %= i, this.$d.seconds = D(a / s), a %= s, this.$d.milliseconds = a;
      }, $.toISOString = function() {
        var a = P(this.$d.years, "Y"), n = P(this.$d.months, "M"), L = +this.$d.days || 0;
        this.$d.weeks && (L += 7 * this.$d.weeks);
        var Y = P(L, "D"), E = P(this.$d.hours, "H"), q = P(this.$d.minutes, "M"), j = this.$d.seconds || 0;
        this.$d.milliseconds && (j += this.$d.milliseconds / 1e3);
        var O = P(j, "S"), y = a.negative || n.negative || Y.negative || E.negative || q.negative || O.negative, T = E.format || q.format || O.format ? "T" : "", p = (y ? "-" : "") + "P" + a.format + n.format + Y.format + T + E.format + q.format + O.format;
        return p === "P" || p === "-P" ? "P0D" : p;
      }, $.toJSON = function() {
        return this.toISOString();
      }, $.format = function(a) {
        var n = a || "YYYY-MM-DDTHH:mm:ss", L = { Y: this.$d.years, YY: e.s(this.$d.years, 2, "0"), YYYY: e.s(this.$d.years, 4, "0"), M: this.$d.months, MM: e.s(this.$d.months, 2, "0"), D: this.$d.days, DD: e.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: e.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: e.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: e.s(this.$d.seconds, 2, "0"), SSS: e.s(this.$d.milliseconds, 3, "0") };
        return n.replace(m, function(Y, E) {
          return E || String(L[Y]);
        });
      }, $.as = function(a) {
        return this.$ms / w[S(a)];
      }, $.get = function(a) {
        var n = this.$ms, L = S(a);
        return L === "milliseconds" ? n %= 1e3 : n = L === "weeks" ? D(n / w[L]) : this.$d[L], n === 0 ? 0 : n;
      }, $.add = function(a, n, L) {
        var Y;
        return Y = n ? a * w[S(n)] : N(a) ? a.$ms : G(a, this).$ms, G(this.$ms + Y * (L ? -1 : 1), this);
      }, $.subtract = function(a, n) {
        return this.add(a, n, !0);
      }, $.locale = function(a) {
        var n = this.clone();
        return n.$l = a, n;
      }, $.clone = function() {
        return G(this.$ms, this);
      }, $.humanize = function(a) {
        return o().add(this.$ms, "ms").locale(this.$l).fromNow(!a);
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
      }, _;
    }();
    return function(_, $, a) {
      o = a, e = a().$utils(), a.duration = function(Y, E) {
        var q = a.locale();
        return G(Y, { $l: q }, E);
      }, a.isDuration = N;
      var n = $.prototype.add, L = $.prototype.subtract;
      $.prototype.add = function(Y, E) {
        return N(Y) && (Y = Y.asMilliseconds()), n.bind(this)(Y, E);
      }, $.prototype.subtract = function(Y, E) {
        return N(Y) && (Y = Y.asMilliseconds()), L.bind(this)(Y, E);
      };
    };
  });
})(Dt);
const Er = Dt.exports;
function Fr() {
  const t = (c) => {
    const m = [], h = c.localeData().firstDayOfWeek();
    for (let k = 0; k <= c.date(0 - h).day(); k++)
      m.push(c.date(0).subtract(k, "day"));
    return m.sort((k, x) => k.date() - x.date());
  };
  return {
    usePreviousDate: t,
    useCurrentDate: (c) => Array.from(
      {
        length: c.daysInMonth()
      },
      (m, h) => c.date(h + 1)
    ),
    useNextDate: (c) => {
      const m = [];
      for (let h = 1; h <= 42 - (t(c).length + c.daysInMonth()); h++)
        m.push(c.date(h).month(c.month()).add(1, "month"));
      return m;
    },
    useDisableDate: (c, { disableDate: m }) => typeof m == "function" ? m(c.toDate()) : !1,
    useBetweenRange: (c, { previous: m, next: h }) => {
      let k;
      return m.isAfter(h, "date") ? k = "(]" : k = "[)", !!(c.isBetween(m, h, "date", k) && !c.off);
    },
    useToValueFromString: (c, { formatter: m }) => c.format(m.date),
    useToValueFromArray: ({ previous: c, next: m }, { formatter: h, separator: k }) => `${c.format(h.date)}${k}${m.format(h.date)}`
  };
}
function Nr() {
  return {
    useVisibleViewport: (u) => {
      if (u) {
        const { right: o } = u.getBoundingClientRect(), e = window.innerWidth || document.documentElement.clientWidth;
        return o > e;
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
}, Wr = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M6 18L18 6M6 6l12 12"
}, zr = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
}, Zr = { class: "flex flex-wrap lg:flex-nowrap" }, Gr = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, Kr = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, Jr = /* @__PURE__ */ A("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), qr = [
  Jr
], Xr = { class: "px-0.5 sm:px-2" }, Qr = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, en = { class: "px-0.5 sm:px-2" }, tn = { key: 0 }, rn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, nn = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, on = ["disabled", "onClick", "textContent"], an = ["onClick", "textContent"], sn = {
  key: 1,
  class: "sm:hidden"
}, ln = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, un = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, dn = ["onClick", "textContent"], cn = {
  key: 1,
  class: "flex"
}, fn = { class: "bg-white rounded-lg shadow-sm border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]" }, vn = { class: "flex flex-wrap lg:flex-nowrap" }, pn = { class: "relative flex flex-wrap sm:flex-nowrap p-1 w-full" }, mn = {
  key: 0,
  class: "hidden h-full absolute inset-0 sm:flex justify-center items-center"
}, hn = /* @__PURE__ */ A("div", { class: "h-full border-r border-black/[.1] dark:border-vtd-secondary-700/[1]" }, null, -1), yn = [
  hn
], xn = { class: "px-0.5 sm:px-2" }, bn = {
  key: 1,
  class: "relative w-full md:w-1/2 lg:w-80 overflow-hidden mt-3 sm:mt-0 sm:ml-2"
}, gn = { class: "px-0.5 sm:px-2" }, kn = { key: 0 }, wn = { class: "mt-2 mx-2 py-1.5 border-t border-black/[.1] dark:border-vtd-secondary-700/[1]" }, $n = { class: "mt-1.5 sm:flex sm:flex-row-reverse" }, Mn = ["disabled", "textContent"], Sn = {
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
  setup(t, { expose: u, emit: o }) {
    const e = t, {
      useCurrentDate: s,
      useDisableDate: i,
      useBetweenRange: C,
      useNextDate: c,
      usePreviousDate: m,
      useToValueFromArray: h,
      useToValueFromString: k
    } = Fr(), { useVisibleViewport: x } = Nr();
    l.extend(Tr), l.extend(Ar), l.extend(jr), l.extend(Lr), l.extend(Br), l.extend(Er);
    const { modelValue: w } = Yt(e), N = ne(null), G = ne(null), S = ne(null), V = ne(""), D = ne(null), g = ne("");
    ot(w, (d) => {
      console.log("Value changes:", d), g.value = d;
    });
    const P = ne([]), M = ne([]), _ = ne(null), $ = ne(null), a = Tt({
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
    }), n = ne({
      previous: l(),
      next: l().add(1, "month"),
      year: {
        previous: l().year(),
        next: l().year()
      },
      weeks: e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort(),
      months: e.formatter.month === "MMM" ? l.monthsShort() : l.months()
    }), L = ce(() => n.value.weeks), Y = ce(() => n.value.months), E = ce(() => {
      const { previous: d, next: f, year: b } = R(n);
      return {
        previous: {
          date: () => m(d).concat(s(d)).concat(c(d)).map((r) => (r.today = r.isToday(), r.active = d.month() === r.month(), r.off = d.month() !== r.month(), r.sunday = r.day() === 0, r.disabled = i(r, e) && !H(r), r.inRange = () => {
            if (e.asSingle && !e.useRange)
              return d.month() !== r.month();
          }, r.hovered = () => p() && P.value.length > 1 ? (r.isBetween(P.value[0], P.value[1], "date", "()") || r.isBetween(P.value[1], P.value[0], "date", "(]")) && d.month() === r.month() : !1, r.duration = () => !1, r)),
          month: d && d.format(e.formatter.month),
          year: d && d.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (r, v) => b.previous + v
          ),
          onPrevious: () => {
            n.value.previous = d.subtract(1, "month"), o("click:prev", n.value.previous);
          },
          onNext: () => {
            n.value.previous = d.add(1, "month"), d.diff(f, "month") === -1 && (n.value.next = f.add(1, "month")), o("click:next", n.value.previous);
          },
          onPreviousYear: () => {
            n.value.year.previous = n.value.year.previous - 12;
          },
          onNextYear: () => {
            n.value.year.previous = n.value.year.previous + 12;
          },
          openMonth: () => {
            a.previous.month = !a.previous.month, a.previous.year = !1, a.previous.calendar = !a.previous.month;
          },
          setMount: (r) => {
            n.value.previous = d.month(r), a.previous.month = !a.previous.month, a.previous.year = !1, a.previous.calendar = !a.previous.month, o("select:month", n.value.previous), Ee(() => {
              (n.value.next.isSame(n.value.previous, "month") || n.value.next.isBefore(n.value.previous)) && (n.value.next = n.value.previous.add(1, "month")), n.value.year.next = n.value.next.year();
            });
          },
          openYear: () => {
            a.previous.year = !a.previous.year, a.previous.month = !1, a.previous.calendar = !a.previous.year;
          },
          setYear: (r, v) => {
            v || (n.value.previous = d.year(r), a.previous.year = !a.previous.year, a.previous.calendar = !a.previous.year, o("select:year", n.value.previous), Ee(() => {
              (n.value.next.isSame(n.value.previous, "month") || n.value.next.isBefore(n.value.previous)) && (n.value.next = n.value.previous.add(1, "month")), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year();
            }));
          }
        },
        next: {
          date: () => m(f).concat(s(f)).concat(c(f)).map((r) => (r.today = r.isToday(), r.active = f.month() === r.month(), r.off = f.month() !== r.month(), r.sunday = r.day() === 0, r.disabled = i(r, e) && !H(r), r.inRange = () => {
            if (e.asSingle && !e.useRange)
              return f.month() !== r.month();
          }, r.hovered = () => P.value.length > 1 ? (r.isBetween(P.value[0], P.value[1], "date", "()") || r.isBetween(P.value[1], P.value[0], "date", "(]")) && f.month() === r.month() : !1, r.duration = () => !1, r)),
          month: f && f.format(e.formatter.month),
          year: f && f.year(),
          years: () => Array.from(
            {
              length: 12
            },
            (r, v) => b.next + v
          ),
          onPrevious: () => {
            n.value.next = f.subtract(1, "month"), f.diff(d, "month") === 1 && (n.value.previous = d.subtract(1, "month")), o("click:right:prev", n.value.next);
          },
          onNext: () => {
            n.value.next = f.add(1, "month"), o("click:right:next", n.value.next);
          },
          onPreviousYear: () => {
            n.value.year.next = n.value.year.next - 12;
          },
          onNextYear: () => {
            n.value.year.next = n.value.year.next + 12;
          },
          openMonth: () => {
            a.next.month = !a.next.month, a.next.year = !1, a.next.calendar = !a.next.month;
          },
          setMount: (r) => {
            n.value.next = f.month(r), a.next.month = !a.next.month, a.next.year = !1, a.next.calendar = !a.next.month, o("select:right:month", n.value.next), Ee(() => {
              (n.value.previous.isSame(n.value.next, "month") || n.value.previous.isAfter(n.value.next)) && (n.value.previous = n.value.next.subtract(1, "month")), n.value.year.previous = n.value.previous.year();
            });
          },
          openYear: () => {
            a.next.year = !a.next.year, a.next.month = !1, a.next.calendar = !a.next.year;
          },
          setYear: (r, v) => {
            v && (n.value.next = f.year(r), a.next.year = !a.next.year, a.next.month = !1, a.next.calendar = !a.next.year, o("select:right:year", n.value.next), Ee(() => {
              (n.value.previous.isSame(n.value.next, "month") || n.value.previous.isAfter(n.value.next)) && (n.value.previous = n.value.next.subtract(1, "month")), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year();
            }));
          }
        }
      };
    }), q = ne(!1);
    setTimeout(() => {
      q.value = !0;
    }, 250);
    const j = () => l().localeData().firstDayOfWeek(), O = (d) => {
      const f = [...d], b = f.shift();
      return [...f, b];
    }, y = () => Array.isArray(e.modelValue), T = () => typeof e.modelValue == "object", p = () => !e.useRange && !e.asSingle ? !0 : !e.useRange && e.asSingle ? !1 : e.useRange && !e.asSingle ? !0 : !!(e.useRange && e.asSingle), H = (d) => {
      if (e.disableInRange || g.value === "")
        return !1;
      let f, b;
      if (y()) {
        const [r, v] = e.modelValue;
        f = r, b = v;
      } else if (T()) {
        if (e.modelValue) {
          const [r, v] = Object.values(e.modelValue);
          f = r, b = v;
        }
      } else {
        const [r, v] = e.modelValue.split(e.separator);
        f = r, b = v;
      }
      return d.isBetween(l(f, e.formatter.date, !0), l(b, e.formatter.date, !0), "date", "[]");
    }, B = () => {
      _.value = null, $.value = null, P.value = [], D.value = null;
    }, W = () => {
      if (g.value = "", y())
        o("update:modelValue", []);
      else if (T()) {
        const d = {}, [f, b] = Object.keys(e.modelValue);
        d[f] = "", d[b] = "", o("update:modelValue", d);
      } else
        o("update:modelValue", "");
      M.value = [], G.value && G.value.focus();
    };
    u({ clearPicker: W });
    const X = () => {
      if (p()) {
        const [d, f] = g.value.split(e.separator), [b, r] = [l(d, e.formatter.date, !0), l(f, e.formatter.date, !0)];
        if (b.isValid() && r.isValid())
          if (K(b), K(r), y())
            o("update:modelValue", [d, f]);
          else if (T()) {
            const v = {}, [F, I] = Object.keys(e.modelValue);
            v[F] = d, v[I] = f, o("update:modelValue", v);
          } else
            o(
              "update:modelValue",
              h(
                {
                  previous: b,
                  next: r
                },
                e
              )
            );
      } else {
        const d = l(g.value, e.formatter.date, !0);
        if (d.isValid())
          if (K(d), y())
            o("update:modelValue", [g.value]);
          else if (T()) {
            const f = {}, [b] = Object.keys(e.modelValue);
            f[b] = g.value, o("update:modelValue", f);
          } else
            o("update:modelValue", g.value);
      }
    }, K = (d, f, b) => {
      if (p())
        if (_.value)
          if ($.value = d, e.autoApply) {
            d.isBefore(_.value) ? g.value = h(
              {
                previous: d,
                next: _.value
              },
              e
            ) : g.value = h(
              {
                previous: _.value,
                next: d
              },
              e
            );
            const [r, v] = g.value.split(e.separator);
            if (y())
              o("update:modelValue", [
                l(r, e.formatter.date, !0).format(e.formatter.date),
                l(v, e.formatter.date, !0).format(e.formatter.date)
              ]);
            else if (T()) {
              const F = {}, [I, te] = Object.keys(e.modelValue);
              F[I] = r, F[te] = v, o("update:modelValue", F);
            } else
              o(
                "update:modelValue",
                h(
                  {
                    previous: l(r, e.formatter.date, !0),
                    next: l(v, e.formatter.date, !0)
                  },
                  e
                )
              );
            b && b(), M.value = [], l(r, e.formatter.date, !0).isSame(l(v, e.formatter.date, !0), "month") || (n.value.previous = l(r, e.formatter.date, !0), n.value.next = l(v, e.formatter.date, !0)), B();
          } else {
            _.value.isAfter(d, "month") ? M.value = [d, _.value] : M.value = [_.value, d];
            const [r, v] = M.value;
            r.isSame(v, "month") || (n.value.previous = r, n.value.next = v), B();
          }
        else
          M.value = [], _.value = d, D.value = d, P.value.push(d), M.value.push(d), f ? (n.value.next = d, n.value.previous.isSame(d, "month") && (n.value.next = d.add(1, "month"))) : (n.value.previous = d, n.value.next.isSame(d, "month") && (n.value.previous = n.value.next, n.value.next = d.add(1, "month")));
      else if (e.autoApply) {
        if (g.value = k(d, e), y())
          o("update:modelValue", [g.value]);
        else if (T()) {
          const r = {}, [v] = Object.keys(e.modelValue);
          r[v] = g.value, o("update:modelValue", r);
        } else
          o("update:modelValue", g.value);
        b && b(), M.value = [], B();
      } else
        M.value = [d], B();
    }, oe = (d) => {
      if (M.value.length < 1)
        return !1;
      let f;
      if (p()) {
        const [b, r] = M.value;
        r.isBefore(b) ? f = h(
          {
            previous: r,
            next: b
          },
          e
        ) : f = h(
          {
            previous: b,
            next: r
          },
          e
        );
      } else {
        const [b] = M.value;
        f = b;
      }
      if (p()) {
        const [b, r] = f.split(e.separator);
        if (y())
          o("update:modelValue", [
            l(b, e.formatter.date, !0).format(e.formatter.date),
            l(r, e.formatter.date, !0).format(e.formatter.date)
          ]);
        else if (T()) {
          const v = {}, [F, I] = Object.keys(e.modelValue);
          v[F] = b, v[I] = r, o("update:modelValue", v);
        } else
          o(
            "update:modelValue",
            h(
              {
                previous: l(b, e.formatter.date, !0),
                next: l(r, e.formatter.date, !0)
              },
              e
            )
          );
        g.value = f;
      } else if (g.value = f.format(e.formatter.date), y())
        o("update:modelValue", [g.value]);
      else if (T()) {
        const b = {}, [r] = Object.keys(e.modelValue);
        b[r] = g.value, o("update:modelValue", b);
      } else
        o("update:modelValue", g.value);
      d && d();
    }, ve = (d) => {
      if (!p())
        return !1;
      if (_.value)
        P.value = [_.value, d];
      else
        return P.value = [], !1;
    }, fe = (d) => {
      if (_.value && e.autoApply)
        return !1;
      let f, b;
      if (P.value.length > 1) {
        const [r, v] = P.value;
        f = l(r, e.formatter.date, !0), b = l(v, e.formatter.date, !0);
      } else if (y())
        if (e.autoApply) {
          const [r, v] = e.modelValue;
          f = r && l(r, e.formatter.date, !0), b = v && l(v, e.formatter.date, !0);
        } else {
          const [r, v] = M.value;
          f = l(r, e.formatter.date, !0), b = l(v, e.formatter.date, !0);
        }
      else if (T())
        if (e.autoApply) {
          if (e.modelValue) {
            const [r, v] = Object.values(e.modelValue);
            f = r && l(r, e.formatter.date, !0), b = v && l(v, e.formatter.date, !0);
          }
        } else {
          const [r, v] = M.value;
          f = l(r, e.formatter.date, !0), b = l(v, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        const [r, v] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        f = r && l(r, e.formatter.date, !0), b = v && l(v, e.formatter.date, !0);
      } else {
        const [r, v] = M.value;
        f = l(r, e.formatter.date, !0), b = l(v, e.formatter.date, !0);
      }
      return f && b ? C(d, {
        previous: f,
        next: b
      }) : !1;
    }, be = (d) => {
      const { today: f, active: b, off: r, disabled: v } = d;
      let F, I, te;
      if (p())
        if (y())
          if (D.value) {
            const [U, Q] = P.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, Q] = e.modelValue;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else {
            const [U, Q] = M.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          }
        else if (T())
          if (D.value) {
            const [U, Q] = P.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else if (e.autoApply) {
            const [U, Q] = e.modelValue ? Object.values(e.modelValue) : [!1, !1];
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          } else {
            const [U, Q] = M.value;
            I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
          }
        else if (D.value) {
          const [U, Q] = P.value;
          I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [U, Q] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
          I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
        } else {
          const [U, Q] = M.value;
          I = U && l(U, e.formatter.date, !0), te = Q && l(Q, e.formatter.date, !0);
        }
      else if (y())
        if (e.autoApply) {
          if (e.modelValue.length > 0) {
            const [U] = e.modelValue;
            I = l(U, e.formatter.date, !0);
          }
        } else {
          const [U] = M.value;
          I = U && l(U, e.formatter.date, !0);
        }
      else if (T())
        if (e.autoApply) {
          if (e.modelValue) {
            const [U] = Object.values(e.modelValue);
            I = l(U, e.formatter.date, !0);
          }
        } else {
          const [U] = M.value;
          I = U && l(U, e.formatter.date, !0);
        }
      else if (e.autoApply) {
        if (e.modelValue) {
          const [U] = e.modelValue.split(e.separator);
          I = l(U, e.formatter.date, !0);
        }
      } else {
        const [U] = M.value;
        I = U && l(U, e.formatter.date, !0);
      }
      return b && (F = f ? "text-vtd-primary-500 font-semibold dark:text-vtd-primary-400 rounded-full focus:bg-vtd-primary-50 focus:text-vtd-secondary-900 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:text-vtd-secondary-300 dark:hover:bg-vtd-secondary-700 dark:hover:text-vtd-secondary-300 dark:focus:bg-vtd-secondary-600 dark:focus:text-vtd-secondary-100 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-25 dark:focus:bg-opacity-50" : v ? "text-vtd-secondary-600 font-normal disabled:text-vtd-secondary-500 disabled:cursor-not-allowed rounded-full" : d.isBetween(I, te, "date", "()") ? "text-vtd-secondary-700 font-medium dark:text-vtd-secondary-100 rounded-full" : "text-vtd-secondary-600 font-medium dark:text-vtd-secondary-200 rounded-full"), r && (F = "text-vtd-secondary-400 font-light disabled:cursor-not-allowed"), I && te && !r ? (d.isSame(I, "date") && (F = te.isAfter(I, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed", I.isSame(te, "date") && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed")), d.isSame(te, "date") && (F = te.isAfter(I, "date") ? "bg-vtd-primary-500 text-white font-bold rounded-r-full disabled:cursor-not-allowed" : "bg-vtd-primary-500 text-white font-bold rounded-l-full disabled:cursor-not-allowed", I.isSame(te, "date") && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"))) : I && d.isSame(I, "date") && !r && (F = "bg-vtd-primary-500 text-white font-bold rounded-full disabled:cursor-not-allowed"), F;
    }, he = (d) => {
      let f, b, r;
      if (f = "", !p())
        return f;
      if (y())
        if (P.value.length > 1) {
          const [v, F] = P.value;
          b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        } else if (e.autoApply) {
          const [v, F] = e.modelValue;
          b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        } else {
          const [v, F] = M.value;
          b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        }
      else if (T())
        if (P.value.length > 1) {
          const [v, F] = P.value;
          b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        } else if (e.autoApply) {
          if (e.modelValue) {
            const [v, F] = Object.values(e.modelValue);
            b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
          }
        } else {
          const [v, F] = M.value;
          b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
        }
      else if (P.value.length > 1) {
        const [v, F] = P.value;
        b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
      } else if (e.autoApply) {
        const [v, F] = e.modelValue ? e.modelValue.split(e.separator) : [!1, !1];
        b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
      } else {
        const [v, F] = M.value;
        b = v && l(v, e.formatter.date, !0), r = F && l(F, e.formatter.date, !0);
      }
      return b && r && (d.isSame(b, "date") ? (r.isBefore(b) && (f += " rounded-r-full inset-0"), b.isBefore(r) && (f += " rounded-l-full inset-0")) : d.isSame(r, "date") ? (r.isBefore(b) && (f += " rounded-l-full inset-0"), b.isBefore(r) && (f += " rounded-r-full inset-0")) : f += " inset-0"), f;
    }, pe = (d, f) => {
      n.value.previous = l(d, e.formatter.date, !0), n.value.next = l(f, e.formatter.date, !0), (l.duration(n.value.next.diff(n.value.previous)).$d.months === 2 || l.duration(n.value.next.diff(n.value.previous)).$d.months === 1 && l.duration(n.value.next.diff(n.value.previous)).$d.days === 7) && (n.value.next = n.value.next.subtract(1, "month")), (n.value.next.isSame(n.value.previous, "month") || n.value.next.isBefore(n.value.previous)) && (n.value.next = n.value.previous.add(1, "month"));
    }, ee = (d, f) => {
      if (p())
        if (e.autoApply) {
          if (y())
            o("update:modelValue", [d, f]);
          else if (T()) {
            const b = {}, [r, v] = Object.keys(e.modelValue);
            b[r] = d, b[v] = f, o("update:modelValue", b);
          } else
            o(
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
          M.value = [l(d, e.formatter.date, !0), l(f, e.formatter.date, !0)];
      else if (e.autoApply) {
        if (y())
          o("update:modelValue", [d]);
        else if (T()) {
          const b = {}, [r] = Object.keys(e.modelValue);
          b[r] = d, o("update:modelValue", b);
        } else
          o("update:modelValue", d);
        g.value = d;
      } else
        M.value = [l(d, e.formatter.date, !0), l(f, e.formatter.date, !0)];
      pe(d, f);
    }, le = (d) => {
      const f = l().format(e.formatter.date), b = l().format(e.formatter.date);
      ee(f, b), d && d();
    }, ye = (d) => {
      const f = l().subtract(1, "day").format(e.formatter.date), b = l().subtract(1, "day").format(e.formatter.date);
      ee(f, b), d && d();
    }, xe = (d, f) => {
      const b = l().subtract(d - 1, "day").format(e.formatter.date), r = l().format(e.formatter.date);
      ee(b, r), f && f();
    }, je = (d) => {
      const f = l().date(1).format(e.formatter.date), b = l().date(l().daysInMonth()).format(e.formatter.date);
      ee(f, b), d && d();
    }, Le = (d) => {
      const f = l().date(1).subtract(1, "month").format(e.formatter.date), b = l().date(0).format(e.formatter.date);
      ee(f, b), d && d();
    }, Be = (d, f) => {
      let b, r;
      const [v, F] = d.atClick();
      b = l(v).format(e.formatter.date), r = l(F).format(e.formatter.date), ee(b, r), f && f();
    };
    ot(
      () => M.value,
      (d) => {
        d.length > 0 && (a.previous.calendar = !0, a.previous.month = !1, a.previous.year = !1, a.next.calendar = !0, a.next.month = !1, a.next.year = !1);
      }
    ), ge(() => {
      e.placeholder ? V.value = e.placeholder : p() ? V.value = `${e.formatter.date}${e.separator}${e.formatter.date}` : V.value = e.formatter.date;
    }), ge(() => {
      const d = e.i18n;
      Ee(() => {
        const f = /* @__PURE__ */ Object.assign({});
        for (const b in f)
          f[b]().then(() => {
            l.locale(d);
            let r, v;
            if (p()) {
              if (y()) {
                if (e.modelValue.length > 0) {
                  const [I, te] = e.modelValue;
                  r = l(I, e.formatter.date, !0), v = l(te, e.formatter.date, !0);
                }
              } else if (T()) {
                if (!At(e.modelValue))
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
                    ), o("update:modelValue", {
                      startDate: "",
                      endDate: ""
                    });
                  }
                if (e.modelValue) {
                  const [I, te] = Object.values(e.modelValue);
                  r = I && l(I, e.formatter.date, !0), v = te && l(te, e.formatter.date, !0);
                }
              } else if (e.modelValue) {
                const [I, te] = e.modelValue.split(e.separator);
                r = l(I, e.formatter.date, !0), v = l(te, e.formatter.date, !0);
              }
              r && v ? (g.value = h(
                {
                  previous: r,
                  next: v
                },
                e
              ), v.isBefore(r, "month") ? (n.value.previous = v, n.value.next = r, n.value.year.previous = v.year(), n.value.year.next = r.year()) : v.isSame(r, "month") ? (n.value.previous = r, n.value.next = v.add(1, "month"), n.value.year.previous = r.year(), n.value.year.next = r.add(1, "year").year()) : (n.value.previous = r, n.value.next = v, n.value.year.previous = r.year(), n.value.year.next = v.year()), e.autoApply || (M.value = [r, v])) : (n.value.previous = l(e.startFrom), n.value.next = l(e.startFrom).add(1, "month"), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year());
            } else {
              if (y()) {
                if (e.modelValue.length > 0) {
                  const [I] = e.modelValue;
                  r = l(I, e.formatter.date, !0);
                }
              } else if (T()) {
                if (e.modelValue) {
                  const [I] = Object.values(e.modelValue);
                  r = l(I, e.formatter.date, !0);
                }
              } else if (e.modelValue.length) {
                const [I] = e.modelValue.split(e.separator);
                r = l(I, e.formatter.date, !0);
              }
              r && r.isValid() ? (g.value = k(r, e), n.value.previous = r, n.value.next = r.add(1, "month"), n.value.year.previous = r.year(), n.value.year.next = r.add(1, "year").year(), e.autoApply || (M.value = [r])) : (n.value.previous = l(e.startFrom), n.value.next = l(e.startFrom).add(1, "month"), n.value.year.previous = n.value.previous.year(), n.value.year.next = n.value.next.year());
            }
            const F = e.weekdaysSize === "min" ? l.weekdaysMin() : l.weekdaysShort();
            n.value.weeks = j() ? O(F) : F, n.value.months = e.formatter.month === "MMM" ? l.monthsShort() : l.months();
          }).catch((r) => {
            console.warn(r.message);
          });
      });
    });
    const nt = (d) => (d && S.value === null && (S.value = x(N.value)), d && S.value ? "place-right" : "place-left"), _t = (d) => (d && S.value === null && (S.value = x(N.value)), S.value ? "left-auto right-0" : "left-0 right-auto");
    return ie("isBetweenRange", fe), ie("betweenRangeClasses", he), ie("datepickerClasses", be), ie("atMouseOver", ve), ie("setToToday", le), ie("setToYesterday", ye), ie("setToLastDay", xe), ie("setToThisMonth", je), ie("setToLastMonth", Le), ie("setToCustomShortcut", Be), (d, f) => e.noInput ? q.value ? (Z(), J("div", cn, [
      A("div", fn, [
        A("div", vn, [
          e.shortcuts ? (Z(), Fe(at, {
            key: 0,
            shortcuts: e.shortcuts,
            "as-range": p(),
            "as-single": e.asSingle,
            i18n: e.options.shortcuts
          }, null, 8, ["shortcuts", "as-range", "as-single", "i18n"])) : me("", !0),
          A("div", pn, [
            p() && !e.asSingle ? (Z(), J("div", mn, yn)) : me("", !0),
            A("div", {
              class: we(["relative w-full lg:w-80", {
                "mb-3 sm:mb-0 sm:mr-2 md:w-1/2": p() && !e.asSingle
              }])
            }, [
              re(Ue, {
                panel: a.previous,
                calendar: R(E).previous
              }, null, 8, ["panel", "calendar"]),
              A("div", xn, [
                se(re(We, {
                  months: R(Y),
                  "onUpdate:month": R(E).previous.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ue, a.previous.month]
                ]),
                se(re(Ze, {
                  years: R(E).previous.years(),
                  "onUpdate:year": R(E).previous.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ue, a.previous.year]
                ]),
                se(A("div", null, [
                  re(ze, { weeks: R(L) }, null, 8, ["weeks"]),
                  re(Ge, {
                    calendar: R(E).previous,
                    weeks: R(L),
                    "as-range": p(),
                    "onUpdate:date": f[2] || (f[2] = (b, r) => K(b, r))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ue, a.previous.calendar]
                ])
              ])
            ], 2),
            p() && !e.asSingle ? (Z(), J("div", bn, [
              re(Ue, {
                "as-prev-or-next": "",
                panel: a.next,
                calendar: R(E).next
              }, null, 8, ["panel", "calendar"]),
              A("div", gn, [
                se(re(We, {
                  months: R(Y),
                  "onUpdate:month": R(E).next.setMount
                }, null, 8, ["months", "onUpdate:month"]), [
                  [ue, a.next.month]
                ]),
                se(re(Ze, {
                  "as-prev-or-next": "",
                  years: R(E).next.years(),
                  "onUpdate:year": R(E).next.setYear
                }, null, 8, ["years", "onUpdate:year"]), [
                  [ue, a.next.year]
                ]),
                se(A("div", null, [
                  re(ze, { weeks: R(L) }, null, 8, ["weeks"]),
                  re(Ge, {
                    "as-prev-or-next": "",
                    calendar: R(E).next,
                    weeks: R(L),
                    "as-range": p(),
                    "onUpdate:date": f[3] || (f[3] = (b, r) => K(b, r))
                  }, null, 8, ["calendar", "weeks", "as-range"])
                ], 512), [
                  [ue, a.next.calendar]
                ])
              ])
            ])) : me("", !0)
          ])
        ]),
        e.autoApply ? me("", !0) : (Z(), J("div", kn, [
          A("div", wn, [
            A("div", $n, [
              A("button", {
                type: "button",
                class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                disabled: e.asSingle ? M.value.length < 1 : M.value.length < 2,
                onClick: f[4] || (f[4] = (b) => oe()),
                textContent: ae(e.options.footer.apply)
              }, null, 8, Mn)
            ])
          ])
        ]))
      ])
    ])) : me("", !0) : (Z(), Fe(R(bt), {
      key: 0,
      as: "div",
      id: "vtd",
      class: "relative w-full"
    }, {
      default: Ve(({ open: b }) => [
        e.overlay && !e.disabled ? (Z(), Fe(R(Cr), {
          key: 0,
          class: "fixed inset-0 bg-black opacity-30"
        })) : me("", !0),
        re(R(Pr), {
          as: "label",
          class: "relative block"
        }, {
          default: Ve(() => [
            jt(d.$slots, "default", {
              value: g.value,
              placeholder: V.value,
              clear: W
            }, () => [
              se(A("input", Lt({
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
                placeholder: V.value,
                onKeyup: X
              }), null, 16, Hr), [
                [Bt, g.value]
              ]),
              A("div", Rr, [
                A("button", {
                  type: "button",
                  disabled: e.disabled,
                  class: we([e.disabled ? "cursor-default opacity-50" : "opacity-100", "px-2 py-1 mr-1 focus:outline-none text-vtd-secondary-400 dark:text-opacity-70 rounded-md"]),
                  onClick: f[1] || (f[1] = (r) => e.disabled ? !1 : g.value ? W() : d.$refs.VtdInputRef.focus())
                }, [
                  (Z(), J("svg", Ur, [
                    g.value ? (Z(), J("path", Wr)) : (Z(), J("path", zr))
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
          default: Ve(() => [
            e.disabled ? me("", !0) : (Z(), Fe(R(Yr), {
              key: 0,
              as: "div",
              class: "relative z-50"
            }, {
              default: Ve(({ close: r }) => [
                A("div", {
                  class: we(["absolute z-50 top-full sm:mt-2.5", _t(b)])
                }, [
                  A("div", {
                    ref_key: "VtdRef",
                    ref: N,
                    class: "fixed inset-0 z-50 overflow-y-auto sm:overflow-visible sm:static sm:z-auto bg-white dark:bg-vtd-secondary-800 sm:rounded-lg shadow-sm"
                  }, [
                    A("div", {
                      class: we(["vtd-datepicker static sm:relative w-full bg-white sm:rounded-lg sm:shadow-sm border-0 sm:border border-black/[.1] px-3 py-3 sm:px-4 sm:py-4 dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700/[1]", nt(b)])
                    }, [
                      A("div", Zr, [
                        e.shortcuts ? (Z(), Fe(at, {
                          key: 0,
                          shortcuts: e.shortcuts,
                          "as-range": p(),
                          "as-single": e.asSingle,
                          i18n: e.options.shortcuts,
                          close: r
                        }, null, 8, ["shortcuts", "as-range", "as-single", "i18n", "close"])) : me("", !0),
                        A("div", Gr, [
                          p() && !e.asSingle ? (Z(), J("div", Kr, qr)) : me("", !0),
                          A("div", {
                            class: we(["relative", {
                              "mb-3 sm:mb-0 sm:mr-2 w-full md:w-1/2 lg:w-80": p() && !e.asSingle,
                              "w-full": !p() && e.asSingle
                            }])
                          }, [
                            re(Ue, {
                              panel: a.previous,
                              calendar: R(E).previous
                            }, null, 8, ["panel", "calendar"]),
                            A("div", Xr, [
                              se(re(We, {
                                months: R(Y),
                                "onUpdate:month": R(E).previous.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ue, a.previous.month]
                              ]),
                              se(re(Ze, {
                                years: R(E).previous.years(),
                                "onUpdate:year": R(E).previous.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ue, a.previous.year]
                              ]),
                              se(A("div", null, [
                                re(ze, { weeks: R(L) }, null, 8, ["weeks"]),
                                re(Ge, {
                                  calendar: R(E).previous,
                                  weeks: R(L),
                                  "as-range": p(),
                                  "onUpdate:date": (v, F) => K(v, F, r)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ue, a.previous.calendar]
                              ])
                            ])
                          ], 2),
                          p() && !e.asSingle ? (Z(), J("div", Qr, [
                            re(Ue, {
                              "as-prev-or-next": "",
                              panel: a.next,
                              calendar: R(E).next
                            }, null, 8, ["panel", "calendar"]),
                            A("div", en, [
                              se(re(We, {
                                months: R(Y),
                                "onUpdate:month": R(E).next.setMount
                              }, null, 8, ["months", "onUpdate:month"]), [
                                [ue, a.next.month]
                              ]),
                              se(re(Ze, {
                                "as-prev-or-next": "",
                                years: R(E).next.years(),
                                "onUpdate:year": R(E).next.setYear
                              }, null, 8, ["years", "onUpdate:year"]), [
                                [ue, a.next.year]
                              ]),
                              se(A("div", null, [
                                re(ze, { weeks: R(L) }, null, 8, ["weeks"]),
                                re(Ge, {
                                  "as-prev-or-next": "",
                                  calendar: R(E).next,
                                  weeks: R(L),
                                  "as-range": p(),
                                  "onUpdate:date": (v, F) => K(v, F, r)
                                }, null, 8, ["calendar", "weeks", "as-range", "onUpdate:date"])
                              ], 512), [
                                [ue, a.next.calendar]
                              ])
                            ])
                          ])) : me("", !0)
                        ])
                      ]),
                      e.autoApply ? (Z(), J("div", sn, [
                        A("div", ln, [
                          A("div", un, [
                            A("button", {
                              type: "button",
                              onClick: (v) => r(),
                              class: "away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: ae(e.options.footer.cancel)
                            }, null, 8, dn)
                          ])
                        ])
                      ])) : (Z(), J("div", tn, [
                        A("div", rn, [
                          A("div", nn, [
                            A("button", {
                              type: "button",
                              class: "away-apply-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-vtd-primary-600 text-base font-medium text-white hover:bg-vtd-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800 disabled:cursor-not-allowed",
                              disabled: e.asSingle ? M.value.length < 1 : M.value.length < 2,
                              onClick: (v) => oe(r),
                              textContent: ae(e.options.footer.apply)
                            }, null, 8, on),
                            A("button", {
                              type: "button",
                              onClick: (v) => r(),
                              class: "mt-3 away-cancel-picker w-full transition ease-out duration-300 inline-flex justify-center rounded-md border border-vtd-secondary-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-vtd-secondary-700 hover:bg-vtd-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vtd-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:ring-offset-vtd-secondary-800",
                              textContent: ae(e.options.footer.cancel)
                            }, null, 8, an)
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
}, Ot = /* @__PURE__ */ (() => {
  const t = Sn;
  return t.install = (u) => {
    u.component("VueTailwindDatepicker", t);
  }, t;
})(), Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ot
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(Dn).forEach(([t, u]) => {
  t !== "default" && (Ot[t] = u);
});
export {
  Ot as default
};
