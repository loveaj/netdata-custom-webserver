var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_f4da7346 = __commonJS({
  "assets/index.f4da7346.js"(exports) {
    function _mergeNamespaces(n2, m2) {
      for (var i2 = 0; i2 < m2.length; i2++) {
        const e2 = m2[i2];
        if (typeof e2 !== "string" && !Array.isArray(e2)) {
          for (const k2 in e2) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d2 = Object.getOwnPropertyDescriptor(e2, k2);
              if (d2) {
                Object.defineProperty(n2, k2, d2.get ? d2 : {
                  enumerable: true,
                  get: () => e2[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
          fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
          fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (script.crossorigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$7 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$7 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$5 = Symbol.for("react.profiler"), t$3 = Symbol.for("react.provider"), u$5 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$3 = Symbol.for("react.memo"), y$3 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
    function A$5(a2) {
      if (null === a2 || "object" !== typeof a2)
        return null;
      a2 = z$3 && a2[z$3] || a2["@@iterator"];
      return "function" === typeof a2 ? a2 : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$2 = Object.assign, D$2 = {};
    function E$3(a2, b, e2) {
      this.props = a2;
      this.context = b;
      this.refs = D$2;
      this.updater = e2 || B$1;
    }
    E$3.prototype.isReactComponent = {};
    E$3.prototype.setState = function(a2, b) {
      if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a2, b, "setState");
    };
    E$3.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function F$4() {
    }
    F$4.prototype = E$3.prototype;
    function G$1(a2, b, e2) {
      this.props = a2;
      this.context = b;
      this.refs = D$2;
      this.updater = e2 || B$1;
    }
    var H$2 = G$1.prototype = new F$4();
    H$2.constructor = G$1;
    C$2(H$2, E$3.prototype);
    H$2.isPureReactComponent = true;
    var I$4 = Array.isArray, J$2 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$4 = { key: true, ref: true, __self: true, __source: true };
    function M$6(a2, b, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (null != b)
        for (d2 in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
          J$2.call(b, d2) && !L$4.hasOwnProperty(d2) && (c2[d2] = b[d2]);
      var g = arguments.length - 2;
      if (1 === g)
        c2.children = e2;
      else if (1 < g) {
        for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
          f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a2 && a2.defaultProps)
        for (d2 in g = a2.defaultProps, g)
          void 0 === c2[d2] && (c2[d2] = g[d2]);
      return { $$typeof: l$7, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
    }
    function N$2(a2, b) {
      return { $$typeof: l$7, type: a2.type, key: b, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function O$2(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$7;
    }
    function escape(a2) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a3) {
        return b[a3];
      });
    }
    var P$4 = /\/+/g;
    function Q$2(a2, b) {
      return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b.toString(36);
    }
    function R$1(a2, b, e2, d2, c2) {
      var k2 = typeof a2;
      if ("undefined" === k2 || "boolean" === k2)
        a2 = null;
      var h2 = false;
      if (null === a2)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case l$7:
              case n$3:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$4(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$4, "$&/") + "/"), R$1(c2, b, e2, "", function(a3) {
          return a3;
        })) : null != c2 && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$4, "$&/") + "/") + a2)), b.push(c2)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I$4(a2))
        for (var g = 0; g < a2.length; g++) {
          k2 = a2[g];
          var f2 = d2 + Q$2(k2, g);
          h2 += R$1(k2, b, e2, f2, c2);
        }
      else if (f2 = A$5(a2), "function" === typeof f2)
        for (a2 = f2.call(a2), g = 0; !(k2 = a2.next()).done; )
          k2 = k2.value, f2 = d2 + Q$2(k2, g++), h2 += R$1(k2, b, e2, f2, c2);
      else if ("object" === k2)
        throw b = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S$4(a2, b, e2) {
      if (null == a2)
        return a2;
      var d2 = [], c2 = 0;
      R$1(a2, d2, "", "", function(a3) {
        return b.call(e2, a3, c2++);
      });
      return d2;
    }
    function T$4(a2) {
      if (-1 === a2._status) {
        var b = a2._result;
        b = b();
        b.then(function(b2) {
          if (0 === a2._status || -1 === a2._status)
            a2._status = 1, a2._result = b2;
        }, function(b2) {
          if (0 === a2._status || -1 === a2._status)
            a2._status = 2, a2._result = b2;
        });
        -1 === a2._status && (a2._status = 0, a2._result = b);
      }
      if (1 === a2._status)
        return a2._result.default;
      throw a2._result;
    }
    var U$2 = { current: null }, V$2 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$1 };
    react_production_min.Children = { map: S$4, forEach: function(a2, b, e2) {
      S$4(a2, function() {
        b.apply(this, arguments);
      }, e2);
    }, count: function(a2) {
      var b = 0;
      S$4(a2, function() {
        b++;
      });
      return b;
    }, toArray: function(a2) {
      return S$4(a2, function(a3) {
        return a3;
      }) || [];
    }, only: function(a2) {
      if (!O$2(a2))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a2;
    } };
    react_production_min.Component = E$3;
    react_production_min.Fragment = p$7;
    react_production_min.Profiler = r$5;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$1;
    react_production_min.Suspense = w$2;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.cloneElement = function(a2, b, e2) {
      if (null === a2 || void 0 === a2)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
      var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
      if (null != b) {
        void 0 !== b.ref && (k2 = b.ref, h2 = K$1.current);
        void 0 !== b.key && (c2 = "" + b.key);
        if (a2.type && a2.type.defaultProps)
          var g = a2.type.defaultProps;
        for (f2 in b)
          J$2.call(b, f2) && !L$4.hasOwnProperty(f2) && (d2[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2)
        d2.children = e2;
      else if (1 < f2) {
        g = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g[m2] = arguments[m2 + 2];
        d2.children = g;
      }
      return { $$typeof: l$7, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    react_production_min.createContext = function(a2) {
      a2 = { $$typeof: u$5, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a2.Provider = { $$typeof: t$3, _context: a2 };
      return a2.Consumer = a2;
    };
    react_production_min.createElement = M$6;
    react_production_min.createFactory = function(a2) {
      var b = M$6.bind(null, a2);
      b.type = a2;
      return b;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a2) {
      return { $$typeof: v$2, render: a2 };
    };
    react_production_min.isValidElement = O$2;
    react_production_min.lazy = function(a2) {
      return { $$typeof: y$3, _payload: { _status: -1, _result: a2 }, _init: T$4 };
    };
    react_production_min.memo = function(a2, b) {
      return { $$typeof: x$3, type: a2, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function(a2) {
      var b = V$2.transition;
      V$2.transition = {};
      try {
        a2();
      } finally {
        V$2.transition = b;
      }
    };
    react_production_min.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    react_production_min.useCallback = function(a2, b) {
      return U$2.current.useCallback(a2, b);
    };
    react_production_min.useContext = function(a2) {
      return U$2.current.useContext(a2);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a2) {
      return U$2.current.useDeferredValue(a2);
    };
    react_production_min.useEffect = function(a2, b) {
      return U$2.current.useEffect(a2, b);
    };
    react_production_min.useId = function() {
      return U$2.current.useId();
    };
    react_production_min.useImperativeHandle = function(a2, b, e2) {
      return U$2.current.useImperativeHandle(a2, b, e2);
    };
    react_production_min.useInsertionEffect = function(a2, b) {
      return U$2.current.useInsertionEffect(a2, b);
    };
    react_production_min.useLayoutEffect = function(a2, b) {
      return U$2.current.useLayoutEffect(a2, b);
    };
    react_production_min.useMemo = function(a2, b) {
      return U$2.current.useMemo(a2, b);
    };
    react_production_min.useReducer = function(a2, b, e2) {
      return U$2.current.useReducer(a2, b, e2);
    };
    react_production_min.useRef = function(a2) {
      return U$2.current.useRef(a2);
    };
    react_production_min.useState = function(a2) {
      return U$2.current.useState(a2);
    };
    react_production_min.useSyncExternalStore = function(a2, b, e2) {
      return U$2.current.useSyncExternalStore(a2, b, e2);
    };
    react_production_min.useTransition = function() {
      return U$2.current.useTransition();
    };
    react_production_min.version = "18.2.0";
    (function(module2) {
      {
        module2.exports = react_production_min;
      }
    })(react);
    const React = /* @__PURE__ */ getDefaultExportFromCjs(react.exports);
    const e$3 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: React
    }, [react.exports]);
    var client = {};
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a2, b) {
        var c2 = a2.length;
        a2.push(b);
        a:
          for (; 0 < c2; ) {
            var d2 = c2 - 1 >>> 1, e2 = a2[d2];
            if (0 < g(e2, b))
              a2[d2] = b, a2[c2] = e2, c2 = d2;
            else
              break a;
          }
      }
      function h2(a2) {
        return 0 === a2.length ? null : a2[0];
      }
      function k2(a2) {
        if (0 === a2.length)
          return null;
        var b = a2[0], c2 = a2.pop();
        if (c2 !== b) {
          a2[0] = c2;
          a:
            for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
              var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
              if (0 > g(C2, c2))
                n2 < e2 && 0 > g(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
              else if (n2 < e2 && 0 > g(x2, c2))
                a2[d2] = x2, a2[n2] = c2, d2 = n2;
              else
                break a;
            }
        }
        return b;
      }
      function g(a2, b) {
        var c2 = a2.sortIndex - b.sortIndex;
        return 0 !== c2 ? c2 : a2.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a2) {
        for (var b = h2(t2); null !== b; ) {
          if (null === b.callback)
            k2(t2);
          else if (b.startTime <= a2)
            k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
          else
            break;
          b = h2(t2);
        }
      }
      function H2(a2) {
        B2 = false;
        G2(a2);
        if (!A2)
          if (null !== h2(r2))
            A2 = true, I2(J2);
          else {
            var b = h2(t2);
            null !== b && K2(H2, b.startTime - a2);
          }
      }
      function J2(a2, b) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b);
          for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b) || a2 && !M2()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b);
              b = exports2.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
              G2(b);
            } else
              k2(r2);
            v2 = h2(r2);
          }
          if (null !== v2)
            var w2 = true;
          else {
            var m2 = h2(t2);
            null !== m2 && K2(H2, m2.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a2 = exports2.unstable_now();
          Q2 = a2;
          var b = true;
          try {
            b = O2(true, a2);
          } finally {
            b ? S2() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S2;
      if ("function" === typeof F2)
        S2 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else
        S2 = function() {
          D2(R2, 0);
        };
      function I2(a2) {
        O2 = a2;
        N2 || (N2 = true, S2());
      }
      function K2(a2, b) {
        L2 = D2(function() {
          a2(exports2.unstable_now());
        }, b);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a2) {
        a2.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h2(r2);
      };
      exports2.unstable_next = function(a2) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c2 = y2;
        y2 = b;
        try {
          return a2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a2, b) {
        switch (a2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a2 = 3;
        }
        var c2 = y2;
        y2 = a2;
        try {
          return b();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_scheduleCallback = function(a2, b, c2) {
        var d2 = exports2.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a2) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a2 = { id: u2++, callback: b, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
        return a2;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a2) {
        var b = y2;
        return function() {
          var c2 = y2;
          y2 = b;
          try {
            return a2.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    })(scheduler_production_min);
    (function(module2) {
      {
        module2.exports = scheduler_production_min;
      }
    })(scheduler);
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = react.exports, ca = scheduler.exports;
    function p$6(a2) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a2, b) {
      ha(a2, b);
      ha(a2 + "Capture", b);
    }
    function ha(a2, b) {
      ea[a2] = b;
      for (a2 = 0; a2 < b.length; a2++)
        da.add(b[a2]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a2) {
      if (ja.call(ma, a2))
        return true;
      if (ja.call(la, a2))
        return false;
      if (ka.test(a2))
        return ma[a2] = true;
      la[a2] = true;
      return false;
    }
    function pa(a2, b, c2, d2) {
      if (null !== c2 && 0 === c2.type)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (null !== c2)
            return !c2.acceptsBooleans;
          a2 = a2.toLowerCase().slice(0, 5);
          return "data-" !== a2 && "aria-" !== a2;
        default:
          return false;
      }
    }
    function qa(a2, b, c2, d2) {
      if (null === b || "undefined" === typeof b || pa(a2, b, c2, d2))
        return true;
      if (d2)
        return false;
      if (null !== c2)
        switch (c2.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
      return false;
    }
    function v$1(a2, b, c2, d2, e2, f2, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a2;
      this.type = b;
      this.sanitizeURL = f2;
      this.removeEmptyString = g;
    }
    var z$2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      z$2[a2] = new v$1(a2, 0, false, a2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b = a2[0];
      z$2[b] = new v$1(b, 1, false, a2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 2, false, a2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 2, false, a2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      z$2[a2] = new v$1(a2, 3, false, a2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 3, true, a2, null, false, false);
    });
    ["capture", "download"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 4, false, a2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 6, false, a2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 5, false, a2.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b = a2.replace(
        ra,
        sa
      );
      z$2[b] = new v$1(b, 1, false, a2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b = a2.replace(ra, sa);
      z$2[b] = new v$1(b, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b = a2.replace(ra, sa);
      z$2[b] = new v$1(b, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 1, false, a2.toLowerCase(), null, false, false);
    });
    z$2.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      z$2[a2] = new v$1(a2, 1, false, a2.toLowerCase(), null, true, true);
    });
    function ta(a2, b, c2, d2) {
      var e2 = z$2.hasOwnProperty(b) ? z$2[b] : null;
      if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
        qa(b, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b) && (null === c2 ? a2.removeAttribute(b) : a2.setAttribute(b, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b, c2) : a2.setAttribute(b, c2)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a2) {
      if (null === a2 || "object" !== typeof a2)
        return null;
      a2 = Ja && a2[Ja] || a2["@@iterator"];
      return "function" === typeof a2 ? a2 : null;
    }
    var A$4 = Object.assign, La;
    function Ma(a2) {
      if (void 0 === La)
        try {
          throw Error();
        } catch (c2) {
          var b = c2.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
      return "\n" + La + a2;
    }
    var Na = false;
    function Oa(a2, b) {
      if (!a2 || Na)
        return "";
      Na = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b)
          if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d2 = l2;
            }
            Reflect.construct(a2, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d2 = l2;
            }
            a2.call(b.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a2();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; )
            h2--;
          for (; 1 <= g && 0 <= h2; g--, h2--)
            if (e2[g] !== f2[h2]) {
              if (1 !== g || 1 !== h2) {
                do
                  if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                    var k2 = "\n" + e2[g].replace(" at new ", " at ");
                    a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                    return k2;
                  }
                while (1 <= g && 0 <= h2);
              }
              break;
            }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c2;
      }
      return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
    }
    function Pa(a2) {
      switch (a2.tag) {
        case 5:
          return Ma(a2.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a2 = Oa(a2.type, false), a2;
        case 11:
          return a2 = Oa(a2.type.render, false), a2;
        case 1:
          return a2 = Oa(a2.type, true), a2;
        default:
          return "";
      }
    }
    function Qa(a2) {
      if (null == a2)
        return null;
      if ("function" === typeof a2)
        return a2.displayName || a2.name || null;
      if ("string" === typeof a2)
        return a2;
      switch (a2) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a2)
        switch (a2.$$typeof) {
          case Ca:
            return (a2.displayName || "Context") + ".Consumer";
          case Ba:
            return (a2._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a2.render;
            a2 = a2.displayName;
            a2 || (a2 = b.displayName || b.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
            return a2;
          case Ga:
            return b = a2.displayName || null, null !== b ? b : Qa(a2.type) || "Memo";
          case Ha:
            b = a2._payload;
            a2 = a2._init;
            try {
              return Qa(a2(b));
            } catch (c2) {
            }
        }
      return null;
    }
    function Ra(a2) {
      var b = a2.type;
      switch (a2.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a2 = b.render, a2 = a2.displayName || a2.name || "", b.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b)
            return b.displayName || b.name || null;
          if ("string" === typeof b)
            return b;
      }
      return null;
    }
    function Sa(a2) {
      switch (typeof a2) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a2;
        case "object":
          return a2;
        default:
          return "";
      }
    }
    function Ta(a2) {
      var b = a2.type;
      return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a2) {
      var b = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b), d2 = "" + a2[b];
      if (!a2.hasOwnProperty(b) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
        var e2 = c2.get, f2 = c2.set;
        Object.defineProperty(a2, b, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a3) {
          d2 = "" + a3;
          f2.call(this, a3);
        } });
        Object.defineProperty(a2, b, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a3) {
          d2 = "" + a3;
        }, stopTracking: function() {
          a2._valueTracker = null;
          delete a2[b];
        } };
      }
    }
    function Va(a2) {
      a2._valueTracker || (a2._valueTracker = Ua(a2));
    }
    function Wa(a2) {
      if (!a2)
        return false;
      var b = a2._valueTracker;
      if (!b)
        return true;
      var c2 = b.getValue();
      var d2 = "";
      a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
      a2 = d2;
      return a2 !== c2 ? (b.setValue(a2), true) : false;
    }
    function Xa(a2) {
      a2 = a2 || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a2)
        return null;
      try {
        return a2.activeElement || a2.body;
      } catch (b) {
        return a2.body;
      }
    }
    function Ya(a2, b) {
      var c2 = b.checked;
      return A$4({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
    }
    function Za(a2, b) {
      var c2 = null == b.defaultValue ? "" : b.defaultValue, d2 = null != b.checked ? b.checked : b.defaultChecked;
      c2 = Sa(null != b.value ? b.value : c2);
      a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a2, b) {
      b = b.checked;
      null != b && ta(a2, "checked", b, false);
    }
    function bb(a2, b) {
      ab(a2, b);
      var c2 = Sa(b.value), d2 = b.type;
      if (null != c2)
        if ("number" === d2) {
          if (0 === c2 && "" === a2.value || a2.value != c2)
            a2.value = "" + c2;
        } else
          a2.value !== "" + c2 && (a2.value = "" + c2);
      else if ("submit" === d2 || "reset" === d2) {
        a2.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a2, b.type, c2) : b.hasOwnProperty("defaultValue") && cb(a2, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a2.defaultChecked = !!b.defaultChecked);
    }
    function db(a2, b, c2) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d2 = b.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b.value && null !== b.value))
          return;
        b = "" + a2._wrapperState.initialValue;
        c2 || b === a2.value || (a2.value = b);
        a2.defaultValue = b;
      }
      c2 = a2.name;
      "" !== c2 && (a2.name = "");
      a2.defaultChecked = !!a2._wrapperState.initialChecked;
      "" !== c2 && (a2.name = c2);
    }
    function cb(a2, b, c2) {
      if ("number" !== b || Xa(a2.ownerDocument) !== a2)
        null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
    }
    var eb = Array.isArray;
    function fb(a2, b, c2, d2) {
      a2 = a2.options;
      if (b) {
        b = {};
        for (var e2 = 0; e2 < c2.length; e2++)
          b["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a2.length; c2++)
          e2 = b.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b = null;
        for (e2 = 0; e2 < a2.length; e2++) {
          if (a2[e2].value === c2) {
            a2[e2].selected = true;
            d2 && (a2[e2].defaultSelected = true);
            return;
          }
          null !== b || a2[e2].disabled || (b = a2[e2]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a2, b) {
      if (null != b.dangerouslySetInnerHTML)
        throw Error(p$6(91));
      return A$4({}, b, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
    }
    function hb(a2, b) {
      var c2 = b.value;
      if (null == c2) {
        c2 = b.children;
        b = b.defaultValue;
        if (null != c2) {
          if (null != b)
            throw Error(p$6(92));
          if (eb(c2)) {
            if (1 < c2.length)
              throw Error(p$6(93));
            c2 = c2[0];
          }
          b = c2;
        }
        null == b && (b = "");
        c2 = b;
      }
      a2._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a2, b) {
      var c2 = Sa(b.value), d2 = Sa(b.defaultValue);
      null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
      null != d2 && (a2.defaultValue = "" + d2);
    }
    function jb(a2) {
      var b = a2.textContent;
      b === a2._wrapperState.initialValue && "" !== b && null !== b && (a2.value = b);
    }
    function kb(a2) {
      switch (a2) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a2, b) {
      return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a2;
    }
    var mb, nb = function(a2) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a2(b, c2, d2, e2);
        });
      } : a2;
    }(function(a2, b) {
      if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
        a2.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a2.firstChild; )
          a2.removeChild(a2.firstChild);
        for (; b.firstChild; )
          a2.appendChild(b.firstChild);
      }
    });
    function ob(a2, b) {
      if (b) {
        var c2 = a2.firstChild;
        if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
          c2.nodeValue = b;
          return;
        }
      }
      a2.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a2) {
      qb.forEach(function(b) {
        b = b + a2.charAt(0).toUpperCase() + a2.substring(1);
        pb[b] = pb[a2];
      });
    });
    function rb(a2, b, c2) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c2 || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b).trim() : b + "px";
    }
    function sb(a2, b) {
      a2 = a2.style;
      for (var c2 in b)
        if (b.hasOwnProperty(c2)) {
          var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b[c2], d2);
          "float" === c2 && (c2 = "cssFloat");
          d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
        }
    }
    var tb = A$4({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a2, b) {
      if (b) {
        if (tb[a2] && (null != b.children || null != b.dangerouslySetInnerHTML))
          throw Error(p$6(137, a2));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children)
            throw Error(p$6(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
            throw Error(p$6(61));
        }
        if (null != b.style && "object" !== typeof b.style)
          throw Error(p$6(62));
      }
    }
    function vb(a2, b) {
      if (-1 === a2.indexOf("-"))
        return "string" === typeof b.is;
      switch (a2) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a2) {
      a2 = a2.target || a2.srcElement || window;
      a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
      return 3 === a2.nodeType ? a2.parentNode : a2;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a2) {
      if (a2 = Cb(a2)) {
        if ("function" !== typeof yb)
          throw Error(p$6(280));
        var b = a2.stateNode;
        b && (b = Db(b), yb(a2.stateNode, a2.type, b));
      }
    }
    function Eb(a2) {
      zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
    }
    function Fb() {
      if (zb) {
        var a2 = zb, b = Ab;
        Ab = zb = null;
        Bb(a2);
        if (b)
          for (a2 = 0; a2 < b.length; a2++)
            Bb(b[a2]);
      }
    }
    function Gb(a2, b) {
      return a2(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a2, b, c2) {
      if (Ib)
        return a2(b, c2);
      Ib = true;
      try {
        return Gb(a2, b, c2);
      } finally {
        if (Ib = false, null !== zb || null !== Ab)
          Hb(), Fb();
      }
    }
    function Kb(a2, b) {
      var c2 = a2.stateNode;
      if (null === c2)
        return null;
      var d2 = Db(c2);
      if (null === d2)
        return null;
      c2 = d2[b];
      a:
        switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
            a2 = !d2;
            break a;
          default:
            a2 = false;
        }
      if (a2)
        return null;
      if (c2 && "function" !== typeof c2)
        throw Error(p$6(231, b, typeof c2));
      return c2;
    }
    var Lb = false;
    if (ia)
      try {
        var Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a2) {
        Lb = false;
      }
    function Nb(a2, b, c2, d2, e2, f2, g, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c2, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
      Ob = true;
      Pb = a2;
    } };
    function Tb(a2, b, c2, d2, e2, f2, g, h2, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a2, b, c2, d2, e2, f2, g, h2, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else
          throw Error(p$6(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a2) {
      var b = a2, c2 = a2;
      if (a2.alternate)
        for (; b.return; )
          b = b.return;
      else {
        a2 = b;
        do
          b = a2, 0 !== (b.flags & 4098) && (c2 = b.return), a2 = b.return;
        while (a2);
      }
      return 3 === b.tag ? c2 : null;
    }
    function Wb(a2) {
      if (13 === a2.tag) {
        var b = a2.memoizedState;
        null === b && (a2 = a2.alternate, null !== a2 && (b = a2.memoizedState));
        if (null !== b)
          return b.dehydrated;
      }
      return null;
    }
    function Xb(a2) {
      if (Vb(a2) !== a2)
        throw Error(p$6(188));
    }
    function Yb(a2) {
      var b = a2.alternate;
      if (!b) {
        b = Vb(a2);
        if (null === b)
          throw Error(p$6(188));
        return b !== a2 ? null : a2;
      }
      for (var c2 = a2, d2 = b; ; ) {
        var e2 = c2.return;
        if (null === e2)
          break;
        var f2 = e2.alternate;
        if (null === f2) {
          d2 = e2.return;
          if (null !== d2) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f2.child) {
          for (f2 = e2.child; f2; ) {
            if (f2 === c2)
              return Xb(e2), a2;
            if (f2 === d2)
              return Xb(e2), b;
            f2 = f2.sibling;
          }
          throw Error(p$6(188));
        }
        if (c2.return !== d2.return)
          c2 = e2, d2 = f2;
        else {
          for (var g = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g = true;
              c2 = e2;
              d2 = f2;
              break;
            }
            if (h2 === d2) {
              g = true;
              d2 = e2;
              c2 = f2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g) {
            for (h2 = f2.child; h2; ) {
              if (h2 === c2) {
                g = true;
                c2 = f2;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g = true;
                d2 = f2;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g)
              throw Error(p$6(189));
          }
        }
        if (c2.alternate !== d2)
          throw Error(p$6(190));
      }
      if (3 !== c2.tag)
        throw Error(p$6(188));
      return c2.stateNode.current === c2 ? a2 : b;
    }
    function Zb(a2) {
      a2 = Yb(a2);
      return null !== a2 ? $b(a2) : null;
    }
    function $b(a2) {
      if (5 === a2.tag || 6 === a2.tag)
        return a2;
      for (a2 = a2.child; null !== a2; ) {
        var b = $b(a2);
        if (null !== b)
          return b;
        a2 = a2.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a2) {
      if (lc && "function" === typeof lc.onCommitFiberRoot)
        try {
          lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
        } catch (b) {
        }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a2) {
      a2 >>>= 0;
      return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a2) {
      switch (a2 & -a2) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a2 & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a2 & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a2;
      }
    }
    function uc(a2, b) {
      var c2 = a2.pendingLanes;
      if (0 === c2)
        return 0;
      var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g = c2 & 268435455;
      if (0 !== g) {
        var h2 = g & ~e2;
        0 !== h2 ? d2 = tc(h2) : (f2 &= g, 0 !== f2 && (d2 = tc(f2)));
      } else
        g = c2 & ~e2, 0 !== g ? d2 = tc(g) : 0 !== f2 && (d2 = tc(f2));
      if (0 === d2)
        return 0;
      if (0 !== b && b !== d2 && 0 === (b & e2) && (e2 = d2 & -d2, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
        return b;
      0 !== (d2 & 4) && (d2 |= c2 & 16);
      b = a2.entangledLanes;
      if (0 !== b)
        for (a2 = a2.entanglements, b &= d2; 0 < b; )
          c2 = 31 - oc(b), e2 = 1 << c2, d2 |= a2[c2], b &= ~e2;
      return d2;
    }
    function vc(a2, b) {
      switch (a2) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a2, b) {
      for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
        var g = 31 - oc(f2), h2 = 1 << g, k2 = e2[g];
        if (-1 === k2) {
          if (0 === (h2 & c2) || 0 !== (h2 & d2))
            e2[g] = vc(h2, b);
        } else
          k2 <= b && (a2.expiredLanes |= h2);
        f2 &= ~h2;
      }
    }
    function xc(a2) {
      a2 = a2.pendingLanes & -1073741825;
      return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a2 = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a2;
    }
    function zc(a2) {
      for (var b = [], c2 = 0; 31 > c2; c2++)
        b.push(a2);
      return b;
    }
    function Ac(a2, b, c2) {
      a2.pendingLanes |= b;
      536870912 !== b && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
      a2 = a2.eventTimes;
      b = 31 - oc(b);
      a2[b] = c2;
    }
    function Bc(a2, b) {
      var c2 = a2.pendingLanes & ~b;
      a2.pendingLanes = b;
      a2.suspendedLanes = 0;
      a2.pingedLanes = 0;
      a2.expiredLanes &= b;
      a2.mutableReadLanes &= b;
      a2.entangledLanes &= b;
      b = a2.entanglements;
      var d2 = a2.eventTimes;
      for (a2 = a2.expirationTimes; 0 < c2; ) {
        var e2 = 31 - oc(c2), f2 = 1 << e2;
        b[e2] = 0;
        d2[e2] = -1;
        a2[e2] = -1;
        c2 &= ~f2;
      }
    }
    function Cc(a2, b) {
      var c2 = a2.entangledLanes |= b;
      for (a2 = a2.entanglements; c2; ) {
        var d2 = 31 - oc(c2), e2 = 1 << d2;
        e2 & b | a2[d2] & b && (a2[d2] |= b);
        c2 &= ~e2;
      }
    }
    var C$1 = 0;
    function Dc(a2) {
      a2 &= -a2;
      return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a2, b) {
      switch (a2) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a2, b, c2, d2, e2, f2) {
      if (null === a2 || a2.nativeEvent !== f2)
        return a2 = { blockedOn: b, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a2;
      a2.eventSystemFlags |= d2;
      b = a2.targetContainers;
      null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
      return a2;
    }
    function Uc(a2, b, c2, d2, e2) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a2, b, c2, d2, e2), true;
        case "dragenter":
          return Mc = Tc(Mc, a2, b, c2, d2, e2), true;
        case "mouseover":
          return Nc = Tc(Nc, a2, b, c2, d2, e2), true;
        case "pointerover":
          var f2 = e2.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a2, b, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b, c2, d2, e2)), true;
      }
      return false;
    }
    function Vc(a2) {
      var b = Wc(a2.target);
      if (null !== b) {
        var c2 = Vb(b);
        if (null !== c2) {
          if (b = c2.tag, 13 === b) {
            if (b = Wb(c2), null !== b) {
              a2.blockedOn = b;
              Ic(a2.priority, function() {
                Gc(c2);
              });
              return;
            }
          } else if (3 === b && c2.stateNode.current.memoizedState.isDehydrated) {
            a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a2.blockedOn = null;
    }
    function Xc(a2) {
      if (null !== a2.blockedOn)
        return false;
      for (var b = a2.targetContainers; 0 < b.length; ) {
        var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b[0], a2.nativeEvent);
        if (null === c2) {
          c2 = a2.nativeEvent;
          var d2 = new c2.constructor(c2.type, c2);
          wb = d2;
          c2.target.dispatchEvent(d2);
          wb = null;
        } else
          return b = Cb(c2), null !== b && Fc(b), a2.blockedOn = c2, false;
        b.shift();
      }
      return true;
    }
    function Zc(a2, b, c2) {
      Xc(a2) && c2.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a2, b) {
      a2.blockedOn === b && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a2) {
      function b(b2) {
        return ad(b2, a2);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a2);
        for (var c2 = 1; c2 < Kc.length; c2++) {
          var d2 = Kc[c2];
          d2.blockedOn === a2 && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a2);
      null !== Mc && ad(Mc, a2);
      null !== Nc && ad(Nc, a2);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c2 = 0; c2 < Qc.length; c2++)
        d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
        Vc(c2), null === c2.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a2, b, c2, d2) {
      var e2 = C$1, f2 = cd.transition;
      cd.transition = null;
      try {
        C$1 = 1, fd(a2, b, c2, d2);
      } finally {
        C$1 = e2, cd.transition = f2;
      }
    }
    function gd(a2, b, c2, d2) {
      var e2 = C$1, f2 = cd.transition;
      cd.transition = null;
      try {
        C$1 = 4, fd(a2, b, c2, d2);
      } finally {
        C$1 = e2, cd.transition = f2;
      }
    }
    function fd(a2, b, c2, d2) {
      if (dd) {
        var e2 = Yc(a2, b, c2, d2);
        if (null === e2)
          hd(a2, b, d2, id$1, c2), Sc(a2, d2);
        else if (Uc(e2, a2, b, c2, d2))
          d2.stopPropagation();
        else if (Sc(a2, d2), b & 4 && -1 < Rc.indexOf(a2)) {
          for (; null !== e2; ) {
            var f2 = Cb(e2);
            null !== f2 && Ec(f2);
            f2 = Yc(a2, b, c2, d2);
            null === f2 && hd(a2, b, d2, id$1, c2);
            if (f2 === e2)
              break;
            e2 = f2;
          }
          null !== e2 && d2.stopPropagation();
        } else
          hd(a2, b, d2, null, c2);
      }
    }
    var id$1 = null;
    function Yc(a2, b, c2, d2) {
      id$1 = null;
      a2 = xb(d2);
      a2 = Wc(a2);
      if (null !== a2)
        if (b = Vb(a2), null === b)
          a2 = null;
        else if (c2 = b.tag, 13 === c2) {
          a2 = Wb(b);
          if (null !== a2)
            return a2;
          a2 = null;
        } else if (3 === c2) {
          if (b.stateNode.current.memoizedState.isDehydrated)
            return 3 === b.tag ? b.stateNode.containerInfo : null;
          a2 = null;
        } else
          b !== a2 && (a2 = null);
      id$1 = a2;
      return null;
    }
    function jd(a2) {
      switch (a2) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md)
        return md;
      var a2, b = ld, c2 = b.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
      for (a2 = 0; a2 < c2 && b[a2] === e2[a2]; a2++)
        ;
      var g = c2 - a2;
      for (d2 = 1; d2 <= g && b[c2 - d2] === e2[f2 - d2]; d2++)
        ;
      return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a2) {
      var b = a2.keyCode;
      "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b && (a2 = 13)) : a2 = b;
      10 === a2 && (a2 = 13);
      return 32 <= a2 || 13 === a2 ? a2 : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a2) {
      function b(b2, d2, e2, f2, g) {
        this._reactName = b2;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f2;
        this.target = g;
        this.currentTarget = null;
        for (var c2 in a2)
          a2.hasOwnProperty(c2) && (b2 = a2[c2], this[c2] = b2 ? b2(f2) : f2[c2]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A$4(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a3 = this.nativeEvent;
        a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a3 = this.nativeEvent;
        a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
      return a2.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$4({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$4({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
      return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
    }, movementX: function(a2) {
      if ("movementX" in a2)
        return a2.movementX;
      a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
      return wd;
    }, movementY: function(a2) {
      return "movementY" in a2 ? a2.movementY : xd;
    } }), Bd = rd(Ad), Cd = A$4({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$4({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$4({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$4({}, sd, { clipboardData: function(a2) {
      return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A$4({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
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
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a2) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a2) : (a2 = Od[a2]) ? !!b[a2] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A$4({}, ud, { key: function(a2) {
      if (a2.key) {
        var b = Md[a2.key] || a2.key;
        if ("Unidentified" !== b)
          return b;
      }
      return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
      return "keypress" === a2.type ? od(a2) : 0;
    }, keyCode: function(a2) {
      return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
    }, which: function(a2) {
      return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A$4({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$4({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$4({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$4({}, Ad, {
      deltaX: function(a2) {
        return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
      },
      deltaY: function(a2) {
        return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be$2 = null;
    ia && "documentMode" in document && (be$2 = document.documentMode);
    var ce = ia && "TextEvent" in window && !be$2, de$1 = ia && (!ae || be$2 && 8 < be$2 && 11 >= be$2), ee = String.fromCharCode(32), fe = false;
    function ge$1(a2, b) {
      switch (a2) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he$1(a2) {
      a2 = a2.detail;
      return "object" === typeof a2 && "data" in a2 ? a2.data : null;
    }
    var ie$1 = false;
    function je(a2, b) {
      switch (a2) {
        case "compositionend":
          return he$1(b);
        case "keypress":
          if (32 !== b.which)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a2 = b.data, a2 === ee && fe ? null : a2;
        default:
          return null;
      }
    }
    function ke$1(a2, b) {
      if (ie$1)
        return "compositionend" === a2 || !ae && ge$1(a2, b) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
      switch (a2) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length)
              return b.char;
            if (b.which)
              return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de$1 && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a2) {
      var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
      return "input" === b ? !!le[a2.type] : "textarea" === b ? true : false;
    }
    function ne$1(a2, b, c2, d2) {
      Eb(d2);
      b = oe$1(b, "onChange");
      0 < b.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b }));
    }
    var pe = null, qe = null;
    function re$1(a2) {
      se(a2, 0);
    }
    function te(a2) {
      var b = ue(a2);
      if (Wa(b))
        return a2;
    }
    function ve$1(a2, b) {
      if ("change" === a2)
        return b;
    }
    var we$1 = false;
    if (ia) {
      var xe$2;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe$2 = ye;
      } else
        xe$2 = false;
      we$1 = xe$2 && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a2) {
      if ("value" === a2.propertyName && te(qe)) {
        var b = [];
        ne$1(b, qe, a2, xb(a2));
        Jb(re$1, b);
      }
    }
    function Ce$1(a2, b, c2) {
      "focusin" === a2 ? (Ae(), pe = b, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
    }
    function De(a2) {
      if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
        return te(qe);
    }
    function Ee$2(a2, b) {
      if ("click" === a2)
        return te(b);
    }
    function Fe$1(a2, b) {
      if ("input" === a2 || "change" === a2)
        return te(b);
    }
    function Ge(a2, b) {
      return a2 === b && (0 !== a2 || 1 / a2 === 1 / b) || a2 !== a2 && b !== b;
    }
    var He$2 = "function" === typeof Object.is ? Object.is : Ge;
    function Ie$1(a2, b) {
      if (He$2(a2, b))
        return true;
      if ("object" !== typeof a2 || null === a2 || "object" !== typeof b || null === b)
        return false;
      var c2 = Object.keys(a2), d2 = Object.keys(b);
      if (c2.length !== d2.length)
        return false;
      for (d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        if (!ja.call(b, e2) || !He$2(a2[e2], b[e2]))
          return false;
      }
      return true;
    }
    function Je(a2) {
      for (; a2 && a2.firstChild; )
        a2 = a2.firstChild;
      return a2;
    }
    function Ke$1(a2, b) {
      var c2 = Je(a2);
      a2 = 0;
      for (var d2; c2; ) {
        if (3 === c2.nodeType) {
          d2 = a2 + c2.textContent.length;
          if (a2 <= b && d2 >= b)
            return { node: c2, offset: b - a2 };
          a2 = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Je(c2);
      }
    }
    function Le$1(a2, b) {
      return a2 && b ? a2 === b ? true : a2 && 3 === a2.nodeType ? false : b && 3 === b.nodeType ? Le$1(a2, b.parentNode) : "contains" in a2 ? a2.contains(b) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me$1() {
      for (var a2 = window, b = Xa(); b instanceof a2.HTMLIFrameElement; ) {
        try {
          var c2 = "string" === typeof b.contentWindow.location.href;
        } catch (d2) {
          c2 = false;
        }
        if (c2)
          a2 = b.contentWindow;
        else
          break;
        b = Xa(a2.document);
      }
      return b;
    }
    function Ne$1(a2) {
      var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b || "true" === a2.contentEditable);
    }
    function Oe$1(a2) {
      var b = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
      if (b !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
        if (null !== d2 && Ne$1(c2)) {
          if (b = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b), "selectionStart" in c2)
            c2.selectionStart = b, c2.selectionEnd = Math.min(a2, c2.value.length);
          else if (a2 = (b = c2.ownerDocument || document) && b.defaultView || window, a2.getSelection) {
            a2 = a2.getSelection();
            var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
            d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
            !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
            e2 = Ke$1(c2, f2);
            var g = Ke$1(
              c2,
              d2
            );
            e2 && g && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g.node || a2.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b), a2.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a2.addRange(b)));
          }
        }
        b = [];
        for (a2 = c2; a2 = a2.parentNode; )
          1 === a2.nodeType && b.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
        "function" === typeof c2.focus && c2.focus();
        for (c2 = 0; c2 < b.length; c2++)
          a2 = b[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
      }
    }
    var Pe$1 = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se$2 = null, Te = false;
    function Ue(a2, b, c2) {
      var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
      Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$2 && Ie$1(Se$2, d2) || (Se$2 = d2, d2 = oe$1(Re, "onSelect"), 0 < d2.length && (b = new td("onSelect", "select", null, b, c2), a2.push({ event: b, listeners: d2 }), b.target = Qe)));
    }
    function Ve(a2, b) {
      var c2 = {};
      c2[a2.toLowerCase()] = b.toLowerCase();
      c2["Webkit" + a2] = "webkit" + b;
      c2["Moz" + a2] = "moz" + b;
      return c2;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a2) {
      if (Xe[a2])
        return Xe[a2];
      if (!We[a2])
        return a2;
      var b = We[a2], c2;
      for (c2 in b)
        if (b.hasOwnProperty(c2) && c2 in Ye)
          return Xe[a2] = b[c2];
      return a2;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a2, b) {
      df.set(a2, b);
      fa(b, [a2]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a2, b, c2) {
      var d2 = a2.type || "unknown-event";
      a2.currentTarget = c2;
      Ub(d2, b, void 0, a2);
      a2.currentTarget = null;
    }
    function se(a2, b) {
      b = 0 !== (b & 4);
      for (var c2 = 0; c2 < a2.length; c2++) {
        var d2 = a2[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f2 = void 0;
          if (b)
            for (var g = d2.length - 1; 0 <= g; g--) {
              var h2 = d2[g], k2 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
          else
            for (g = 0; g < d2.length; g++) {
              h2 = d2[g];
              k2 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
        }
      }
      if (Qb)
        throw a2 = Rb, Qb = false, Rb = null, a2;
    }
    function D$1(a2, b) {
      var c2 = b[of];
      void 0 === c2 && (c2 = b[of] = /* @__PURE__ */ new Set());
      var d2 = a2 + "__bubble";
      c2.has(d2) || (pf(b, a2, 2, false), c2.add(d2));
    }
    function qf(a2, b, c2) {
      var d2 = 0;
      b && (d2 |= 4);
      pf(c2, a2, d2, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a2) {
      if (!a2[rf]) {
        a2[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a2), qf(b2, true, a2));
        });
        var b = 9 === a2.nodeType ? a2 : a2.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a2, b, c2, d2) {
      switch (jd(b)) {
        case 1:
          var e2 = ed;
          break;
        case 4:
          e2 = gd;
          break;
        default:
          e2 = fd;
      }
      c2 = e2.bind(null, b, c2, a2);
      e2 = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
      d2 ? void 0 !== e2 ? a2.addEventListener(b, c2, { capture: true, passive: e2 }) : a2.addEventListener(b, c2, true) : void 0 !== e2 ? a2.addEventListener(b, c2, { passive: e2 }) : a2.addEventListener(b, c2, false);
    }
    function hd(a2, b, c2, d2, e2) {
      var f2 = d2;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d2)
        a:
          for (; ; ) {
            if (null === d2)
              return;
            var g = d2.tag;
            if (3 === g || 4 === g) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
                break;
              if (4 === g)
                for (g = d2.return; null !== g; ) {
                  var k2 = g.tag;
                  if (3 === k2 || 4 === k2) {
                    if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                      return;
                  }
                  g = g.return;
                }
              for (; null !== h2; ) {
                g = Wc(h2);
                if (null === g)
                  return;
                k2 = g.tag;
                if (5 === k2 || 6 === k2) {
                  d2 = f2 = g;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
      Jb(function() {
        var d3 = f2, e3 = xb(c2), g2 = [];
        a: {
          var h3 = df.get(a2);
          if (void 0 !== h3) {
            var k3 = td, n2 = a2;
            switch (a2) {
              case "keypress":
                if (0 === od(c2))
                  break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c2.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
            t2 = [];
            for (var w2 = d3, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2)
                break;
              w2 = w2.return;
            }
            0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g2.push({ event: h3, listeners: t2 }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h3 = "mouseover" === a2 || "pointerover" === a2;
            k3 = "mouseout" === a2 || "pointerout" === a2;
            if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
              break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                  n2 = null;
              } else
                k3 = null, n2 = d3;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a2 || "pointerover" === a2)
                  t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h3 : ue(k3);
                u2 = null == n2 ? h3 : ue(n2);
                h3 = new t2(F2, w2 + "leave", k3, c2, e3);
                h3.target = J2;
                h3.relatedTarget = u2;
                F2 = null;
                Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2)
                  b: {
                    t2 = k3;
                    x2 = n2;
                    w2 = 0;
                    for (u2 = t2; u2; u2 = vf(u2))
                      w2++;
                    u2 = 0;
                    for (F2 = x2; F2; F2 = vf(F2))
                      u2++;
                    for (; 0 < w2 - u2; )
                      t2 = vf(t2), w2--;
                    for (; 0 < u2 - w2; )
                      x2 = vf(x2), u2--;
                    for (; w2--; ) {
                      if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                        break b;
                      t2 = vf(t2);
                      x2 = vf(x2);
                    }
                    t2 = null;
                  }
                else
                  t2 = null;
                null !== k3 && wf(g2, h3, k3, t2, false);
                null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h3.type)
              var na = ve$1;
            else if (me(h3))
              if (we$1)
                na = Fe$1;
              else {
                na = De;
                var xa = Ce$1;
              }
            else
              (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$2);
            if (na && (na = na(a2, d3))) {
              ne$1(g2, na, c2, e3);
              break a;
            }
            xa && xa(a2, h3, d3);
            "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue(d3) : window;
          switch (a2) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable)
                Qe = xa, Re = d3, Se$2 = null;
              break;
            case "focusout":
              Se$2 = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c2, e3);
              break;
            case "selectionchange":
              if (Pe$1)
                break;
            case "keydown":
            case "keyup":
              Ue(g2, c2, e3);
          }
          var $a;
          if (ae)
            b: {
              switch (a2) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
          else
            ie$1 ? ge$1(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
          ba && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$1(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a2, c2) : ke$1(a2, c2))
            d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g2.push({ event: e3, listeners: d3 }), e3.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a2, b, c2) {
      return { instance: a2, listener: b, currentTarget: c2 };
    }
    function oe$1(a2, b) {
      for (var c2 = b + "Capture", d2 = []; null !== a2; ) {
        var e2 = a2, f2 = e2.stateNode;
        5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b), null != f2 && d2.push(tf(a2, f2, e2)));
        a2 = a2.return;
      }
      return d2;
    }
    function vf(a2) {
      if (null === a2)
        return null;
      do
        a2 = a2.return;
      while (a2 && 5 !== a2.tag);
      return a2 ? a2 : null;
    }
    function wf(a2, b, c2, d2, e2) {
      for (var f2 = b._reactName, g = []; null !== c2 && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (null !== k2 && k2 === d2)
          break;
        5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g.push(tf(c2, k2, h2))));
        c2 = c2.return;
      }
      0 !== g.length && a2.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a2) {
      return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
    }
    function Af(a2, b, c2) {
      b = zf(b);
      if (zf(a2) !== b && c2)
        throw Error(p$6(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a2, b) {
      return "textarea" === a2 || "noscript" === a2 || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
      return Hf.resolve(null).then(a2).catch(If);
    } : Ff;
    function If(a2) {
      setTimeout(function() {
        throw a2;
      });
    }
    function Kf(a2, b) {
      var c2 = b, d2 = 0;
      do {
        var e2 = c2.nextSibling;
        a2.removeChild(c2);
        if (e2 && 8 === e2.nodeType)
          if (c2 = e2.data, "/$" === c2) {
            if (0 === d2) {
              a2.removeChild(e2);
              bd(b);
              return;
            }
            d2--;
          } else
            "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
        c2 = e2;
      } while (c2);
      bd(b);
    }
    function Lf(a2) {
      for (; null != a2; a2 = a2.nextSibling) {
        var b = a2.nodeType;
        if (1 === b || 3 === b)
          break;
        if (8 === b) {
          b = a2.data;
          if ("$" === b || "$!" === b || "$?" === b)
            break;
          if ("/$" === b)
            return null;
        }
      }
      return a2;
    }
    function Mf(a2) {
      a2 = a2.previousSibling;
      for (var b = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("$" === c2 || "$!" === c2 || "$?" === c2) {
            if (0 === b)
              return a2;
            b--;
          } else
            "/$" === c2 && b++;
        }
        a2 = a2.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a2) {
      var b = a2[Of];
      if (b)
        return b;
      for (var c2 = a2.parentNode; c2; ) {
        if (b = c2[uf] || c2[Of]) {
          c2 = b.alternate;
          if (null !== b.child || null !== c2 && null !== c2.child)
            for (a2 = Mf(a2); null !== a2; ) {
              if (c2 = a2[Of])
                return c2;
              a2 = Mf(a2);
            }
          return b;
        }
        a2 = c2;
        c2 = a2.parentNode;
      }
      return null;
    }
    function Cb(a2) {
      a2 = a2[Of] || a2[uf];
      return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
    }
    function ue(a2) {
      if (5 === a2.tag || 6 === a2.tag)
        return a2.stateNode;
      throw Error(p$6(33));
    }
    function Db(a2) {
      return a2[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a2) {
      return { current: a2 };
    }
    function E$2(a2) {
      0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a2, b) {
      Tf++;
      Sf[Tf] = a2.current;
      a2.current = b;
    }
    var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a2, b) {
      var c2 = a2.type.contextTypes;
      if (!c2)
        return Vf;
      var d2 = a2.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b)
        return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f2;
      for (f2 in c2)
        e2[f2] = b[f2];
      d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b, a2.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Zf(a2) {
      a2 = a2.childContextTypes;
      return null !== a2 && void 0 !== a2;
    }
    function $f() {
      E$2(Wf);
      E$2(H$1);
    }
    function ag(a2, b, c2) {
      if (H$1.current !== Vf)
        throw Error(p$6(168));
      G(H$1, b);
      G(Wf, c2);
    }
    function bg(a2, b, c2) {
      var d2 = a2.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d2.getChildContext)
        return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2)
        if (!(e2 in b))
          throw Error(p$6(108, Ra(a2) || "Unknown", e2));
      return A$4({}, c2, d2);
    }
    function cg(a2) {
      a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H$1.current;
      G(H$1, a2);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a2, b, c2) {
      var d2 = a2.stateNode;
      if (!d2)
        throw Error(p$6(169));
      c2 ? (a2 = bg(a2, b, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$2(Wf), E$2(H$1), G(H$1, a2)) : E$2(Wf);
      G(Wf, c2);
    }
    var eg = null, fg = false, gg = false;
    function hg(a2) {
      null === eg ? eg = [a2] : eg.push(a2);
    }
    function ig(a2) {
      fg = true;
      hg(a2);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a2 = 0, b = C$1;
        try {
          var c2 = eg;
          for (C$1 = 1; a2 < c2.length; a2++) {
            var d2 = c2[a2];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e2) {
          throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
        } finally {
          C$1 = b, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a2, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a2;
      ng = b;
    }
    function ug(a2, b, c2) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a2;
      var d2 = rg;
      a2 = sg;
      var e2 = 32 - oc(d2) - 1;
      d2 &= ~(1 << e2);
      c2 += 1;
      var f2 = 32 - oc(b) + e2;
      if (30 < f2) {
        var g = e2 - e2 % 5;
        f2 = (d2 & (1 << g) - 1).toString(32);
        d2 >>= g;
        e2 -= g;
        rg = 1 << 32 - oc(b) + e2 | c2 << e2 | d2;
        sg = f2 + a2;
      } else
        rg = 1 << f2 | c2 << e2 | d2, sg = a2;
    }
    function vg(a2) {
      null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
    }
    function wg(a2) {
      for (; a2 === mg; )
        mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a2 === qg; )
        qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I$3 = false, zg = null;
    function Ag(a2, b) {
      var c2 = Bg(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.stateNode = b;
      c2.return = a2;
      b = a2.deletions;
      null === b ? (a2.deletions = [c2], a2.flags |= 16) : b.push(c2);
    }
    function Cg(a2, b) {
      switch (a2.tag) {
        case 5:
          var c2 = a2.type;
          b = 1 !== b.nodeType || c2.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a2.stateNode = b, xg = a2, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a2.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a2.stateNode = b, xg = a2, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a2) {
      return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
    }
    function Eg(a2) {
      if (I$3) {
        var b = yg;
        if (b) {
          var c2 = b;
          if (!Cg(a2, b)) {
            if (Dg(a2))
              throw Error(p$6(418));
            b = Lf(c2.nextSibling);
            var d2 = xg;
            b && Cg(a2, b) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$3 = false, xg = a2);
          }
        } else {
          if (Dg(a2))
            throw Error(p$6(418));
          a2.flags = a2.flags & -4097 | 2;
          I$3 = false;
          xg = a2;
        }
      }
    }
    function Fg(a2) {
      for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
        a2 = a2.return;
      xg = a2;
    }
    function Gg(a2) {
      if (a2 !== xg)
        return false;
      if (!I$3)
        return Fg(a2), I$3 = true, false;
      var b;
      (b = 3 !== a2.tag) && !(b = 5 !== a2.tag) && (b = a2.type, b = "head" !== b && "body" !== b && !Ef(a2.type, a2.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a2))
          throw Hg(), Error(p$6(418));
        for (; b; )
          Ag(a2, b), b = Lf(b.nextSibling);
      }
      Fg(a2);
      if (13 === a2.tag) {
        a2 = a2.memoizedState;
        a2 = null !== a2 ? a2.dehydrated : null;
        if (!a2)
          throw Error(p$6(317));
        a: {
          a2 = a2.nextSibling;
          for (b = 0; a2; ) {
            if (8 === a2.nodeType) {
              var c2 = a2.data;
              if ("/$" === c2) {
                if (0 === b) {
                  yg = Lf(a2.nextSibling);
                  break a;
                }
                b--;
              } else
                "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b++;
            }
            a2 = a2.nextSibling;
          }
          yg = null;
        }
      } else
        yg = xg ? Lf(a2.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a2 = yg; a2; )
        a2 = Lf(a2.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I$3 = false;
    }
    function Jg(a2) {
      null === zg ? zg = [a2] : zg.push(a2);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a2, b) {
      if (a2 && a2.defaultProps) {
        b = A$4({}, b);
        a2 = a2.defaultProps;
        for (var c2 in a2)
          void 0 === b[c2] && (b[c2] = a2[c2]);
        return b;
      }
      return b;
    }
    var Mg = Uf(null), Ng = null, Og = null, Pg = null;
    function Qg() {
      Pg = Og = Ng = null;
    }
    function Rg(a2) {
      var b = Mg.current;
      E$2(Mg);
      a2._currentValue = b;
    }
    function Sg(a2, b, c2) {
      for (; null !== a2; ) {
        var d2 = a2.alternate;
        (a2.childLanes & b) !== b ? (a2.childLanes |= b, null !== d2 && (d2.childLanes |= b)) : null !== d2 && (d2.childLanes & b) !== b && (d2.childLanes |= b);
        if (a2 === c2)
          break;
        a2 = a2.return;
      }
    }
    function Tg(a2, b) {
      Ng = a2;
      Pg = Og = null;
      a2 = a2.dependencies;
      null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b) && (Ug = true), a2.firstContext = null);
    }
    function Vg(a2) {
      var b = a2._currentValue;
      if (Pg !== a2)
        if (a2 = { context: a2, memoizedValue: b, next: null }, null === Og) {
          if (null === Ng)
            throw Error(p$6(308));
          Og = a2;
          Ng.dependencies = { lanes: 0, firstContext: a2 };
        } else
          Og = Og.next = a2;
      return b;
    }
    var Wg = null;
    function Xg(a2) {
      null === Wg ? Wg = [a2] : Wg.push(a2);
    }
    function Yg(a2, b, c2, d2) {
      var e2 = b.interleaved;
      null === e2 ? (c2.next = c2, Xg(b)) : (c2.next = e2.next, e2.next = c2);
      b.interleaved = c2;
      return Zg(a2, d2);
    }
    function Zg(a2, b) {
      a2.lanes |= b;
      var c2 = a2.alternate;
      null !== c2 && (c2.lanes |= b);
      c2 = a2;
      for (a2 = a2.return; null !== a2; )
        a2.childLanes |= b, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b), c2 = a2, a2 = a2.return;
      return 3 === c2.tag ? c2.stateNode : null;
    }
    var $g = false;
    function ah(a2) {
      a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function bh(a2, b) {
      a2 = a2.updateQueue;
      b.updateQueue === a2 && (b.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
    }
    function ch(a2, b) {
      return { eventTime: a2, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function dh(a2, b, c2) {
      var d2 = a2.updateQueue;
      if (null === d2)
        return null;
      d2 = d2.shared;
      if (0 !== (K & 2)) {
        var e2 = d2.pending;
        null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
        d2.pending = b;
        return Zg(a2, c2);
      }
      e2 = d2.interleaved;
      null === e2 ? (b.next = b, Xg(d2)) : (b.next = e2.next, e2.next = b);
      d2.interleaved = b;
      return Zg(a2, c2);
    }
    function eh(a2, b, c2) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c2 & 4194240))) {
        var d2 = b.lanes;
        d2 &= a2.pendingLanes;
        c2 |= d2;
        b.lanes = c2;
        Cc(a2, c2);
      }
    }
    function fh(a2, b) {
      var c2 = a2.updateQueue, d2 = a2.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f2 = null;
        c2 = c2.firstBaseUpdate;
        if (null !== c2) {
          do {
            var g = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            null === f2 ? e2 = f2 = g : f2 = f2.next = g;
            c2 = c2.next;
          } while (null !== c2);
          null === f2 ? e2 = f2 = b : f2 = f2.next = b;
        } else
          e2 = f2 = b;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
        a2.updateQueue = c2;
        return;
      }
      a2 = c2.lastBaseUpdate;
      null === a2 ? c2.firstBaseUpdate = b : a2.next = b;
      c2.lastBaseUpdate = b;
    }
    function gh(a2, b, c2, d2) {
      var e2 = a2.updateQueue;
      $g = false;
      var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (null !== h2) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        null === g ? f2 = l2 : g.next = l2;
        g = k2;
        var m2 = a2.alternate;
        null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e2.baseState;
        g = 0;
        m2 = l2 = k2 = null;
        h2 = f2;
        do {
          var r2 = h2.lane, y2 = h2.eventTime;
          if ((d2 & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n2 = a2, t2 = h2;
              r2 = b;
              y2 = c2;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2)
                    break a;
                  q2 = A$4({}, q2, r2);
                  break a;
                case 2:
                  $g = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
          } else
            y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
          h2 = h2.next;
          if (null === h2)
            if (h2 = e2.shared.pending, null === h2)
              break;
            else
              r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = m2;
        b = e2.shared.interleaved;
        if (null !== b) {
          e2 = b;
          do
            g |= e2.lane, e2 = e2.next;
          while (e2 !== b);
        } else
          null === f2 && (e2.shared.lanes = 0);
        hh |= g;
        a2.lanes = g;
        a2.memoizedState = q2;
      }
    }
    function ih(a2, b, c2) {
      a2 = b.effects;
      b.effects = null;
      if (null !== a2)
        for (b = 0; b < a2.length; b++) {
          var d2 = a2[b], e2 = d2.callback;
          if (null !== e2) {
            d2.callback = null;
            d2 = c2;
            if ("function" !== typeof e2)
              throw Error(p$6(191, e2));
            e2.call(d2);
          }
        }
    }
    var jh = new aa.Component().refs;
    function kh(a2, b, c2, d2) {
      b = a2.memoizedState;
      c2 = c2(d2, b);
      c2 = null === c2 || void 0 === c2 ? b : A$4({}, b, c2);
      a2.memoizedState = c2;
      0 === a2.lanes && (a2.updateQueue.baseState = c2);
    }
    var nh = { isMounted: function(a2) {
      return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
    }, enqueueSetState: function(a2, b, c2) {
      a2 = a2._reactInternals;
      var d2 = L$3(), e2 = lh(a2), f2 = ch(d2, e2);
      f2.payload = b;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b = dh(a2, f2, e2);
      null !== b && (mh(b, a2, e2, d2), eh(b, a2, e2));
    }, enqueueReplaceState: function(a2, b, c2) {
      a2 = a2._reactInternals;
      var d2 = L$3(), e2 = lh(a2), f2 = ch(d2, e2);
      f2.tag = 1;
      f2.payload = b;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b = dh(a2, f2, e2);
      null !== b && (mh(b, a2, e2, d2), eh(b, a2, e2));
    }, enqueueForceUpdate: function(a2, b) {
      a2 = a2._reactInternals;
      var c2 = L$3(), d2 = lh(a2), e2 = ch(c2, d2);
      e2.tag = 2;
      void 0 !== b && null !== b && (e2.callback = b);
      b = dh(a2, e2, d2);
      null !== b && (mh(b, a2, d2, c2), eh(b, a2, d2));
    } };
    function oh(a2, b, c2, d2, e2, f2, g) {
      a2 = a2.stateNode;
      return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
    }
    function ph(a2, b, c2) {
      var d2 = false, e2 = Vf;
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b) ? Xf : H$1.current, d2 = b.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
      b = new b(c2, f2);
      a2.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = nh;
      a2.stateNode = b;
      b._reactInternals = a2;
      d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
      return b;
    }
    function qh(a2, b, c2, d2) {
      a2 = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c2, d2);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c2, d2);
      b.state !== a2 && nh.enqueueReplaceState(b, b.state, null);
    }
    function rh(a2, b, c2, d2) {
      var e2 = a2.stateNode;
      e2.props = c2;
      e2.state = a2.memoizedState;
      e2.refs = jh;
      ah(a2);
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b) ? Xf : H$1.current, e2.context = Yf(a2, f2));
      e2.state = a2.memoizedState;
      f2 = b.getDerivedStateFromProps;
      "function" === typeof f2 && (kh(a2, b, f2, c2), e2.state = a2.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
      "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
    }
    function sh(a2, b, c2) {
      a2 = c2.ref;
      if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (1 !== c2.tag)
              throw Error(p$6(309));
            var d2 = c2.stateNode;
          }
          if (!d2)
            throw Error(p$6(147, a2));
          var e2 = d2, f2 = "" + a2;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
            return b.ref;
          b = function(a3) {
            var b2 = e2.refs;
            b2 === jh && (b2 = e2.refs = {});
            null === a3 ? delete b2[f2] : b2[f2] = a3;
          };
          b._stringRef = f2;
          return b;
        }
        if ("string" !== typeof a2)
          throw Error(p$6(284));
        if (!c2._owner)
          throw Error(p$6(290, a2));
      }
      return a2;
    }
    function th(a2, b) {
      a2 = Object.prototype.toString.call(b);
      throw Error(p$6(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b).join(", ") + "}" : a2));
    }
    function uh(a2) {
      var b = a2._init;
      return b(a2._payload);
    }
    function vh(a2) {
      function b(b2, c3) {
        if (a2) {
          var d3 = b2.deletions;
          null === d3 ? (b2.deletions = [c3], b2.flags |= 16) : d3.push(c3);
        }
      }
      function c2(c3, d3) {
        if (!a2)
          return null;
        for (; null !== d3; )
          b(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a3, b2) {
        for (a3 = /* @__PURE__ */ new Map(); null !== b2; )
          null !== b2.key ? a3.set(b2.key, b2) : a3.set(b2.index, b2), b2 = b2.sibling;
        return a3;
      }
      function e2(a3, b2) {
        a3 = wh(a3, b2);
        a3.index = 0;
        a3.sibling = null;
        return a3;
      }
      function f2(b2, c3, d3) {
        b2.index = d3;
        if (!a2)
          return b2.flags |= 1048576, c3;
        d3 = b2.alternate;
        if (null !== d3)
          return d3 = d3.index, d3 < c3 ? (b2.flags |= 2, c3) : d3;
        b2.flags |= 2;
        return c3;
      }
      function g(b2) {
        a2 && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h2(a3, b2, c3, d3) {
        if (null === b2 || 6 !== b2.tag)
          return b2 = xh(c3, a3.mode, d3), b2.return = a3, b2;
        b2 = e2(b2, c3);
        b2.return = a3;
        return b2;
      }
      function k2(a3, b2, c3, d3) {
        var f3 = c3.type;
        if (f3 === ya)
          return m2(a3, b2, c3.props.children, d3, c3.key);
        if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
          return d3 = e2(b2, c3.props), d3.ref = sh(a3, b2, c3), d3.return = a3, d3;
        d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
        d3.ref = sh(a3, b2, c3);
        d3.return = a3;
        return d3;
      }
      function l2(a3, b2, c3, d3) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c3.containerInfo || b2.stateNode.implementation !== c3.implementation)
          return b2 = zh(c3, a3.mode, d3), b2.return = a3, b2;
        b2 = e2(b2, c3.children || []);
        b2.return = a3;
        return b2;
      }
      function m2(a3, b2, c3, d3, f3) {
        if (null === b2 || 7 !== b2.tag)
          return b2 = Ah(c3, a3.mode, d3, f3), b2.return = a3, b2;
        b2 = e2(b2, c3);
        b2.return = a3;
        return b2;
      }
      function q2(a3, b2, c3) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
          return b2 = xh("" + b2, a3.mode, c3), b2.return = a3, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c3 = yh(b2.type, b2.key, b2.props, null, a3.mode, c3), c3.ref = sh(a3, null, b2), c3.return = a3, c3;
            case wa:
              return b2 = zh(b2, a3.mode, c3), b2.return = a3, b2;
            case Ha:
              var d3 = b2._init;
              return q2(a3, d3(b2._payload), c3);
          }
          if (eb(b2) || Ka(b2))
            return b2 = Ah(b2, a3.mode, c3, null), b2.return = a3, b2;
          th(a3, b2);
        }
        return null;
      }
      function r2(a3, b2, c3, d3) {
        var e3 = null !== b2 ? b2.key : null;
        if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
          return null !== e3 ? null : h2(a3, b2, "" + c3, d3);
        if ("object" === typeof c3 && null !== c3) {
          switch (c3.$$typeof) {
            case va:
              return c3.key === e3 ? k2(a3, b2, c3, d3) : null;
            case wa:
              return c3.key === e3 ? l2(a3, b2, c3, d3) : null;
            case Ha:
              return e3 = c3._init, r2(
                a3,
                b2,
                e3(c3._payload),
                d3
              );
          }
          if (eb(c3) || Ka(c3))
            return null !== e3 ? null : m2(a3, b2, c3, d3, null);
          th(a3, c3);
        }
        return null;
      }
      function y2(a3, b2, c3, d3, e3) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
          return a3 = a3.get(c3) || null, h2(b2, a3, "" + d3, e3);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b2, a3, d3, e3);
            case wa:
              return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b2, a3, d3, e3);
            case Ha:
              var f3 = d3._init;
              return y2(a3, b2, c3, f3(d3._payload), e3);
          }
          if (eb(d3) || Ka(d3))
            return a3 = a3.get(c3) || null, m2(b2, a3, d3, e3, null);
          th(b2, d3);
        }
        return null;
      }
      function n2(e3, g2, h3, k3) {
        for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e3, u2, h3[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a2 && u2 && null === n3.alternate && b(e3, u2);
          g2 = f2(n3, g2, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h3.length)
          return c2(e3, u2), I$3 && tg(e3, w2), l3;
        if (null === u2) {
          for (; w2 < h3.length; w2++)
            u2 = q2(e3, h3[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I$3 && tg(e3, w2);
          return l3;
        }
        for (u2 = d2(e3, u2); w2 < h3.length; w2++)
          x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a2 && u2.forEach(function(a3) {
          return b(e3, a3);
        });
        I$3 && tg(e3, w2);
        return l3;
      }
      function t2(e3, g2, h3, k3) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3)
          throw Error(p$6(150));
        h3 = l3.call(h3);
        if (null == h3)
          throw Error(p$6(151));
        for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e3, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a2 && m3 && null === t3.alternate && b(e3, m3);
          g2 = f2(t3, g2, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done)
          return c2(
            e3,
            m3
          ), I$3 && tg(e3, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h3.next())
            n3 = q2(e3, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I$3 && tg(e3, w2);
          return l3;
        }
        for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
          n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a2 && m3.forEach(function(a3) {
          return b(e3, a3);
        });
        I$3 && tg(e3, w2);
        return l3;
      }
      function J2(a3, d3, f3, h3) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c2(a3, l3.sibling);
                        d3 = e2(l3, f3.props.children);
                        d3.return = a3;
                        a3 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props);
                      d3.ref = sh(a3, l3, f3);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                    c2(a3, l3);
                    break;
                  } else
                    b(a3, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
              }
              return g(a3);
            case wa:
              a: {
                for (l3 = f3.key; null !== d3; ) {
                  if (d3.key === l3)
                    if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                      c2(a3, d3.sibling);
                      d3 = e2(d3, f3.children || []);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    } else {
                      c2(a3, d3);
                      break;
                    }
                  else
                    b(a3, d3);
                  d3 = d3.sibling;
                }
                d3 = zh(f3, a3.mode, h3);
                d3.return = a3;
                a3 = d3;
              }
              return g(a3);
            case Ha:
              return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
          }
          if (eb(f3))
            return n2(a3, d3, f3, h3);
          if (Ka(f3))
            return t2(a3, d3, f3, h3);
          th(a3, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g(a3)) : c2(a3, d3);
      }
      return J2;
    }
    var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
    function Hh(a2) {
      if (a2 === Dh)
        throw Error(p$6(174));
      return a2;
    }
    function Ih(a2, b) {
      G(Gh, b);
      G(Fh, a2);
      G(Eh, Dh);
      a2 = b.nodeType;
      switch (a2) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a2 = 8 === a2 ? b.parentNode : b, b = a2.namespaceURI || null, a2 = a2.tagName, b = lb(b, a2);
      }
      E$2(Eh);
      G(Eh, b);
    }
    function Jh() {
      E$2(Eh);
      E$2(Fh);
      E$2(Gh);
    }
    function Kh(a2) {
      Hh(Gh.current);
      var b = Hh(Eh.current);
      var c2 = lb(b, a2.type);
      b !== c2 && (G(Fh, a2), G(Eh, c2));
    }
    function Lh(a2) {
      Fh.current === a2 && (E$2(Eh), E$2(Fh));
    }
    var M$5 = Uf(0);
    function Mh(a2) {
      for (var b = a2; null !== b; ) {
        if (13 === b.tag) {
          var c2 = b.memoizedState;
          if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
            return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128))
            return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a2)
          break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a2)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Nh = [];
    function Oh() {
      for (var a2 = 0; a2 < Nh.length; a2++)
        Nh[a2]._workInProgressVersionPrimary = null;
      Nh.length = 0;
    }
    var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$1 = null, O$1 = null, P$3 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
    function Q$1() {
      throw Error(p$6(321));
    }
    function Wh(a2, b) {
      if (null === b)
        return false;
      for (var c2 = 0; c2 < b.length && c2 < a2.length; c2++)
        if (!He$2(a2[c2], b[c2]))
          return false;
      return true;
    }
    function Xh(a2, b, c2, d2, e2, f2) {
      Rh = f2;
      N$1 = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
      a2 = c2(d2, e2);
      if (Th) {
        f2 = 0;
        do {
          Th = false;
          Uh = 0;
          if (25 <= f2)
            throw Error(p$6(301));
          f2 += 1;
          P$3 = O$1 = null;
          b.updateQueue = null;
          Ph.current = $h;
          a2 = c2(d2, e2);
        } while (Th);
      }
      Ph.current = ai;
      b = null !== O$1 && null !== O$1.next;
      Rh = 0;
      P$3 = O$1 = N$1 = null;
      Sh = false;
      if (b)
        throw Error(p$6(300));
      return a2;
    }
    function bi() {
      var a2 = 0 !== Uh;
      Uh = 0;
      return a2;
    }
    function ci() {
      var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === P$3 ? N$1.memoizedState = P$3 = a2 : P$3 = P$3.next = a2;
      return P$3;
    }
    function di() {
      if (null === O$1) {
        var a2 = N$1.alternate;
        a2 = null !== a2 ? a2.memoizedState : null;
      } else
        a2 = O$1.next;
      var b = null === P$3 ? N$1.memoizedState : P$3.next;
      if (null !== b)
        P$3 = b, O$1 = a2;
      else {
        if (null === a2)
          throw Error(p$6(310));
        O$1 = a2;
        a2 = { memoizedState: O$1.memoizedState, baseState: O$1.baseState, baseQueue: O$1.baseQueue, queue: O$1.queue, next: null };
        null === P$3 ? N$1.memoizedState = P$3 = a2 : P$3 = P$3.next = a2;
      }
      return P$3;
    }
    function ei(a2, b) {
      return "function" === typeof b ? b(a2) : b;
    }
    function fi(a2) {
      var b = di(), c2 = b.queue;
      if (null === c2)
        throw Error(p$6(311));
      c2.lastRenderedReducer = a2;
      var d2 = O$1, e2 = d2.baseQueue, f2 = c2.pending;
      if (null !== f2) {
        if (null !== e2) {
          var g = e2.next;
          e2.next = f2.next;
          f2.next = g;
        }
        d2.baseQueue = e2 = f2;
        c2.pending = null;
      }
      if (null !== e2) {
        f2 = e2.next;
        d2 = d2.baseState;
        var h2 = g = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Rh & m2) === m2)
            null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h2 = k2 = q2, g = d2) : k2 = k2.next = q2;
            N$1.lanes |= m2;
            hh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g = d2 : k2.next = h2;
        He$2(d2, b.memoizedState) || (Ug = true);
        b.memoizedState = d2;
        b.baseState = g;
        b.baseQueue = k2;
        c2.lastRenderedState = d2;
      }
      a2 = c2.interleaved;
      if (null !== a2) {
        e2 = a2;
        do
          f2 = e2.lane, N$1.lanes |= f2, hh |= f2, e2 = e2.next;
        while (e2 !== a2);
      } else
        null === e2 && (c2.lanes = 0);
      return [b.memoizedState, c2.dispatch];
    }
    function gi(a2) {
      var b = di(), c2 = b.queue;
      if (null === c2)
        throw Error(p$6(311));
      c2.lastRenderedReducer = a2;
      var d2 = c2.dispatch, e2 = c2.pending, f2 = b.memoizedState;
      if (null !== e2) {
        c2.pending = null;
        var g = e2 = e2.next;
        do
          f2 = a2(f2, g.action), g = g.next;
        while (g !== e2);
        He$2(f2, b.memoizedState) || (Ug = true);
        b.memoizedState = f2;
        null === b.baseQueue && (b.baseState = f2);
        c2.lastRenderedState = f2;
      }
      return [f2, d2];
    }
    function hi() {
    }
    function ii(a2, b) {
      var c2 = N$1, d2 = di(), e2 = b(), f2 = !He$2(d2.memoizedState, e2);
      f2 && (d2.memoizedState = e2, Ug = true);
      d2 = d2.queue;
      ji(ki.bind(null, c2, d2, a2), [a2]);
      if (d2.getSnapshot !== b || f2 || null !== P$3 && P$3.memoizedState.tag & 1) {
        c2.flags |= 2048;
        li(9, mi.bind(null, c2, d2, e2, b), void 0, null);
        if (null === R)
          throw Error(p$6(349));
        0 !== (Rh & 30) || ni(c2, b, e2);
      }
      return e2;
    }
    function ni(a2, b, c2) {
      a2.flags |= 16384;
      a2 = { getSnapshot: b, value: c2 };
      b = N$1.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, N$1.updateQueue = b, b.stores = [a2]) : (c2 = b.stores, null === c2 ? b.stores = [a2] : c2.push(a2));
    }
    function mi(a2, b, c2, d2) {
      b.value = c2;
      b.getSnapshot = d2;
      oi(b) && pi$2(a2);
    }
    function ki(a2, b, c2) {
      return c2(function() {
        oi(b) && pi$2(a2);
      });
    }
    function oi(a2) {
      var b = a2.getSnapshot;
      a2 = a2.value;
      try {
        var c2 = b();
        return !He$2(a2, c2);
      } catch (d2) {
        return true;
      }
    }
    function pi$2(a2) {
      var b = Zg(a2, 1);
      null !== b && mh(b, a2, 1, -1);
    }
    function qi(a2) {
      var b = ci();
      "function" === typeof a2 && (a2 = a2());
      b.memoizedState = b.baseState = a2;
      a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
      b.queue = a2;
      a2 = a2.dispatch = ri.bind(null, N$1, a2);
      return [b.memoizedState, a2];
    }
    function li(a2, b, c2, d2) {
      a2 = { tag: a2, create: b, destroy: c2, deps: d2, next: null };
      b = N$1.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, N$1.updateQueue = b, b.lastEffect = a2.next = a2) : (c2 = b.lastEffect, null === c2 ? b.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b.lastEffect = a2));
      return a2;
    }
    function si() {
      return di().memoizedState;
    }
    function ti(a2, b, c2, d2) {
      var e2 = ci();
      N$1.flags |= a2;
      e2.memoizedState = li(1 | b, c2, void 0, void 0 === d2 ? null : d2);
    }
    function ui(a2, b, c2, d2) {
      var e2 = di();
      d2 = void 0 === d2 ? null : d2;
      var f2 = void 0;
      if (null !== O$1) {
        var g = O$1.memoizedState;
        f2 = g.destroy;
        if (null !== d2 && Wh(d2, g.deps)) {
          e2.memoizedState = li(b, c2, f2, d2);
          return;
        }
      }
      N$1.flags |= a2;
      e2.memoizedState = li(1 | b, c2, f2, d2);
    }
    function vi(a2, b) {
      return ti(8390656, 8, a2, b);
    }
    function ji(a2, b) {
      return ui(2048, 8, a2, b);
    }
    function wi(a2, b) {
      return ui(4, 2, a2, b);
    }
    function xi(a2, b) {
      return ui(4, 4, a2, b);
    }
    function yi(a2, b) {
      if ("function" === typeof b)
        return a2 = a2(), b(a2), function() {
          b(null);
        };
      if (null !== b && void 0 !== b)
        return a2 = a2(), b.current = a2, function() {
          b.current = null;
        };
    }
    function zi(a2, b, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
      return ui(4, 4, yi.bind(null, b, a2), c2);
    }
    function Ai() {
    }
    function Bi(a2, b) {
      var c2 = di();
      b = void 0 === b ? null : b;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b && Wh(b, d2[1]))
        return d2[0];
      c2.memoizedState = [a2, b];
      return a2;
    }
    function Ci(a2, b) {
      var c2 = di();
      b = void 0 === b ? null : b;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b && Wh(b, d2[1]))
        return d2[0];
      a2 = a2();
      c2.memoizedState = [a2, b];
      return a2;
    }
    function Di(a2, b, c2) {
      if (0 === (Rh & 21))
        return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
      He$2(c2, b) || (c2 = yc(), N$1.lanes |= c2, hh |= c2, a2.baseState = true);
      return b;
    }
    function Ei(a2, b) {
      var c2 = C$1;
      C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
      a2(true);
      var d2 = Qh.transition;
      Qh.transition = {};
      try {
        a2(false), b();
      } finally {
        C$1 = c2, Qh.transition = d2;
      }
    }
    function Fi() {
      return di().memoizedState;
    }
    function Gi(a2, b, c2) {
      var d2 = lh(a2);
      c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a2))
        Ii(b, c2);
      else if (c2 = Yg(a2, b, c2, d2), null !== c2) {
        var e2 = L$3();
        mh(c2, a2, d2, e2);
        Ji(c2, b, d2);
      }
    }
    function ri(a2, b, c2) {
      var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a2))
        Ii(b, e2);
      else {
        var f2 = a2.alternate;
        if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
          try {
            var g = b.lastRenderedState, h2 = f2(g, c2);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He$2(h2, g)) {
              var k2 = b.interleaved;
              null === k2 ? (e2.next = e2, Xg(b)) : (e2.next = k2.next, k2.next = e2);
              b.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
        c2 = Yg(a2, b, e2, d2);
        null !== c2 && (e2 = L$3(), mh(c2, a2, d2, e2), Ji(c2, b, d2));
      }
    }
    function Hi(a2) {
      var b = a2.alternate;
      return a2 === N$1 || null !== b && b === N$1;
    }
    function Ii(a2, b) {
      Th = Sh = true;
      var c2 = a2.pending;
      null === c2 ? b.next = b : (b.next = c2.next, c2.next = b);
      a2.pending = b;
    }
    function Ji(a2, b, c2) {
      if (0 !== (c2 & 4194240)) {
        var d2 = b.lanes;
        d2 &= a2.pendingLanes;
        c2 |= d2;
        b.lanes = c2;
        Cc(a2, c2);
      }
    }
    var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b) {
      ci().memoizedState = [a2, void 0 === b ? null : b];
      return a2;
    }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
      return ti(
        4194308,
        4,
        yi.bind(null, b, a2),
        c2
      );
    }, useLayoutEffect: function(a2, b) {
      return ti(4194308, 4, a2, b);
    }, useInsertionEffect: function(a2, b) {
      return ti(4, 2, a2, b);
    }, useMemo: function(a2, b) {
      var c2 = ci();
      b = void 0 === b ? null : b;
      a2 = a2();
      c2.memoizedState = [a2, b];
      return a2;
    }, useReducer: function(a2, b, c2) {
      var d2 = ci();
      b = void 0 !== c2 ? c2(b) : b;
      d2.memoizedState = d2.baseState = b;
      a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b };
      d2.queue = a2;
      a2 = a2.dispatch = Gi.bind(null, N$1, a2);
      return [d2.memoizedState, a2];
    }, useRef: function(a2) {
      var b = ci();
      a2 = { current: a2 };
      return b.memoizedState = a2;
    }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
      return ci().memoizedState = a2;
    }, useTransition: function() {
      var a2 = qi(false), b = a2[0];
      a2 = Ei.bind(null, a2[1]);
      ci().memoizedState = a2;
      return [b, a2];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a2, b, c2) {
      var d2 = N$1, e2 = ci();
      if (I$3) {
        if (void 0 === c2)
          throw Error(p$6(407));
        c2 = c2();
      } else {
        c2 = b();
        if (null === R)
          throw Error(p$6(349));
        0 !== (Rh & 30) || ni(d2, b, c2);
      }
      e2.memoizedState = c2;
      var f2 = { value: c2, getSnapshot: b };
      e2.queue = f2;
      vi(ki.bind(
        null,
        d2,
        f2,
        a2
      ), [a2]);
      d2.flags |= 2048;
      li(9, mi.bind(null, d2, f2, c2, b), void 0, null);
      return c2;
    }, useId: function() {
      var a2 = ci(), b = R.identifierPrefix;
      if (I$3) {
        var c2 = sg;
        var d2 = rg;
        c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
        b = ":" + b + "R" + c2;
        c2 = Uh++;
        0 < c2 && (b += "H" + c2.toString(32));
        b += ":";
      } else
        c2 = Vh++, b = ":" + b + "r" + c2.toString(32) + ":";
      return a2.memoizedState = b;
    }, unstable_isNewReconciler: false }, Zh = {
      readContext: Vg,
      useCallback: Bi,
      useContext: Vg,
      useEffect: ji,
      useImperativeHandle: zi,
      useInsertionEffect: wi,
      useLayoutEffect: xi,
      useMemo: Ci,
      useReducer: fi,
      useRef: si,
      useState: function() {
        return fi(ei);
      },
      useDebugValue: Ai,
      useDeferredValue: function(a2) {
        var b = di();
        return Di(b, O$1.memoizedState, a2);
      },
      useTransition: function() {
        var a2 = fi(ei)[0], b = di().memoizedState;
        return [a2, b];
      },
      useMutableSource: hi,
      useSyncExternalStore: ii,
      useId: Fi,
      unstable_isNewReconciler: false
    }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
      return gi(ei);
    }, useDebugValue: Ai, useDeferredValue: function(a2) {
      var b = di();
      return null === O$1 ? b.memoizedState = a2 : Di(b, O$1.memoizedState, a2);
    }, useTransition: function() {
      var a2 = gi(ei)[0], b = di().memoizedState;
      return [a2, b];
    }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
    function Ki(a2, b) {
      try {
        var c2 = "", d2 = b;
        do
          c2 += Pa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f2) {
        e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a2, source: b, stack: e2, digest: null };
    }
    function Li(a2, b, c2) {
      return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b ? b : null };
    }
    function Mi(a2, b) {
      try {
        console.error(b.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Ni = "function" === typeof WeakMap ? WeakMap : Map;
    function Oi(a2, b, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b.value;
      c2.callback = function() {
        Pi || (Pi = true, Qi = d2);
        Mi(a2, b);
      };
      return c2;
    }
    function Ri(a2, b, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      var d2 = a2.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e2 = b.value;
        c2.payload = function() {
          return d2(e2);
        };
        c2.callback = function() {
          Mi(a2, b);
        };
      }
      var f2 = a2.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
        Mi(a2, b);
        "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
        var c3 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c3 ? c3 : "" });
      });
      return c2;
    }
    function Ti(a2, b, c2) {
      var d2 = a2.pingCache;
      if (null === d2) {
        d2 = a2.pingCache = new Ni();
        var e2 = /* @__PURE__ */ new Set();
        d2.set(b, e2);
      } else
        e2 = d2.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b, e2));
      e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b, c2), b.then(a2, a2));
    }
    function Vi(a2) {
      do {
        var b;
        if (b = 13 === a2.tag)
          b = a2.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b)
          return a2;
        a2 = a2.return;
      } while (null !== a2);
      return null;
    }
    function Wi(a2, b, c2, d2, e2) {
      if (0 === (a2.mode & 1))
        return a2 === b ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c2, b, 1))), c2.lanes |= 1), a2;
      a2.flags |= 65536;
      a2.lanes = e2;
      return a2;
    }
    var Xi = ua.ReactCurrentOwner, Ug = false;
    function Yi(a2, b, c2, d2) {
      b.child = null === a2 ? Ch(b, null, c2, d2) : Bh(b, a2.child, c2, d2);
    }
    function Zi(a2, b, c2, d2, e2) {
      c2 = c2.render;
      var f2 = b.ref;
      Tg(b, e2);
      d2 = Xh(a2, b, c2, d2, f2, e2);
      c2 = bi();
      if (null !== a2 && !Ug)
        return b.updateQueue = a2.updateQueue, b.flags &= -2053, a2.lanes &= ~e2, $i(a2, b, e2);
      I$3 && c2 && vg(b);
      b.flags |= 1;
      Yi(a2, b, d2, e2);
      return b.child;
    }
    function aj(a2, b, c2, d2, e2) {
      if (null === a2) {
        var f2 = c2.type;
        if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
          return b.tag = 15, b.type = f2, cj(a2, b, f2, d2, e2);
        a2 = yh(c2.type, null, d2, b, b.mode, e2);
        a2.ref = b.ref;
        a2.return = b;
        return b.child = a2;
      }
      f2 = a2.child;
      if (0 === (a2.lanes & e2)) {
        var g = f2.memoizedProps;
        c2 = c2.compare;
        c2 = null !== c2 ? c2 : Ie$1;
        if (c2(g, d2) && a2.ref === b.ref)
          return $i(a2, b, e2);
      }
      b.flags |= 1;
      a2 = wh(f2, d2);
      a2.ref = b.ref;
      a2.return = b;
      return b.child = a2;
    }
    function cj(a2, b, c2, d2, e2) {
      if (null !== a2) {
        var f2 = a2.memoizedProps;
        if (Ie$1(f2, d2) && a2.ref === b.ref)
          if (Ug = false, b.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
            0 !== (a2.flags & 131072) && (Ug = true);
          else
            return b.lanes = a2.lanes, $i(a2, b, e2);
      }
      return dj(a2, b, c2, d2, e2);
    }
    function ej(a2, b, c2) {
      var d2 = b.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
      if ("hidden" === d2.mode)
        if (0 === (b.mode & 1))
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
        else {
          if (0 === (c2 & 1073741824))
            return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a2, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d2 = null !== f2 ? f2.baseLanes : c2;
          G(fj, gj);
          gj |= d2;
        }
      else
        null !== f2 ? (d2 = f2.baseLanes | c2, b.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
      Yi(a2, b, e2, c2);
      return b.child;
    }
    function hj(a2, b) {
      var c2 = b.ref;
      if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
        b.flags |= 512, b.flags |= 2097152;
    }
    function dj(a2, b, c2, d2, e2) {
      var f2 = Zf(c2) ? Xf : H$1.current;
      f2 = Yf(b, f2);
      Tg(b, e2);
      c2 = Xh(a2, b, c2, d2, f2, e2);
      d2 = bi();
      if (null !== a2 && !Ug)
        return b.updateQueue = a2.updateQueue, b.flags &= -2053, a2.lanes &= ~e2, $i(a2, b, e2);
      I$3 && d2 && vg(b);
      b.flags |= 1;
      Yi(a2, b, c2, e2);
      return b.child;
    }
    function ij(a2, b, c2, d2, e2) {
      if (Zf(c2)) {
        var f2 = true;
        cg(b);
      } else
        f2 = false;
      Tg(b, e2);
      if (null === b.stateNode)
        jj(a2, b), ph(b, c2, d2), rh(b, c2, d2, e2), d2 = true;
      else if (null === a2) {
        var g = b.stateNode, h2 = b.memoizedProps;
        g.props = h2;
        var k2 = g.context, l2 = c2.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$1.current, l2 = Yf(b, l2));
        var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b, g, d2, l2);
        $g = false;
        var r2 = b.memoizedState;
        g.state = r2;
        gh(b, d2, g, e2);
        k2 = b.memoizedState;
        h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c2, m2, d2), k2 = b.memoizedState), (h2 = $g || oh(b, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d2, b.memoizedState = k2), g.props = d2, g.state = k2, g.context = l2, d2 = h2) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d2 = false);
      } else {
        g = b.stateNode;
        bh(a2, b);
        h2 = b.memoizedProps;
        l2 = b.type === b.elementType ? h2 : Lg(b.type, h2);
        g.props = l2;
        q2 = b.pendingProps;
        r2 = g.context;
        k2 = c2.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$1.current, k2 = Yf(b, k2));
        var y2 = c2.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b, g, d2, k2);
        $g = false;
        r2 = b.memoizedState;
        g.state = r2;
        gh(b, d2, g, e2);
        var n2 = b.memoizedState;
        h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c2, y2, d2), n2 = b.memoizedState), (l2 = $g || oh(b, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d2, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 1024), b.memoizedProps = d2, b.memoizedState = n2), g.props = d2, g.state = n2, g.context = k2, d2 = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 1024), d2 = false);
      }
      return kj(a2, b, c2, d2, f2, e2);
    }
    function kj(a2, b, c2, d2, e2, f2) {
      hj(a2, b);
      var g = 0 !== (b.flags & 128);
      if (!d2 && !g)
        return e2 && dg(b, c2, false), $i(a2, b, f2);
      d2 = b.stateNode;
      Xi.current = b;
      var h2 = g && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
      b.flags |= 1;
      null !== a2 && g ? (b.child = Bh(b, a2.child, null, f2), b.child = Bh(b, null, h2, f2)) : Yi(a2, b, h2, f2);
      b.memoizedState = d2.state;
      e2 && dg(b, c2, true);
      return b.child;
    }
    function lj(a2) {
      var b = a2.stateNode;
      b.pendingContext ? ag(a2, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a2, b.context, false);
      Ih(a2, b.containerInfo);
    }
    function mj(a2, b, c2, d2, e2) {
      Ig();
      Jg(e2);
      b.flags |= 256;
      Yi(a2, b, c2, d2);
      return b.child;
    }
    var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function oj(a2) {
      return { baseLanes: a2, cachePool: null, transitions: null };
    }
    function pj(a2, b, c2) {
      var d2 = b.pendingProps, e2 = M$5.current, f2 = false, g = 0 !== (b.flags & 128), h2;
      (h2 = g) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
      if (h2)
        f2 = true, b.flags &= -129;
      else if (null === a2 || null !== a2.memoizedState)
        e2 |= 1;
      G(M$5, e2 & 1);
      if (null === a2) {
        Eg(b);
        a2 = b.memoizedState;
        if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
          return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a2.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d2.children;
        a2 = d2.fallback;
        return f2 ? (d2 = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b, a2.return = b, f2.sibling = a2, b.child = f2, b.child.memoizedState = oj(c2), b.memoizedState = nj, a2) : rj(b, g);
      }
      e2 = a2.memoizedState;
      if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
        return sj(a2, b, g, d2, h2, e2, c2);
      if (f2) {
        f2 = d2.fallback;
        g = b.mode;
        e2 = a2.child;
        h2 = e2.sibling;
        var k2 = { mode: "hidden", children: d2.children };
        0 === (g & 1) && b.child !== e2 ? (d2 = b.child, d2.childLanes = 0, d2.pendingProps = k2, b.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
        null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g, c2, null), f2.flags |= 2);
        f2.return = b;
        d2.return = b;
        d2.sibling = f2;
        b.child = d2;
        d2 = f2;
        f2 = b.child;
        g = a2.child.memoizedState;
        g = null === g ? oj(c2) : { baseLanes: g.baseLanes | c2, cachePool: null, transitions: g.transitions };
        f2.memoizedState = g;
        f2.childLanes = a2.childLanes & ~c2;
        b.memoizedState = nj;
        return d2;
      }
      f2 = a2.child;
      a2 = f2.sibling;
      d2 = wh(f2, { mode: "visible", children: d2.children });
      0 === (b.mode & 1) && (d2.lanes = c2);
      d2.return = b;
      d2.sibling = null;
      null !== a2 && (c2 = b.deletions, null === c2 ? (b.deletions = [a2], b.flags |= 16) : c2.push(a2));
      b.child = d2;
      b.memoizedState = null;
      return d2;
    }
    function rj(a2, b) {
      b = qj({ mode: "visible", children: b }, a2.mode, 0, null);
      b.return = a2;
      return a2.child = b;
    }
    function tj(a2, b, c2, d2) {
      null !== d2 && Jg(d2);
      Bh(b, a2.child, null, c2);
      a2 = rj(b, b.pendingProps.children);
      a2.flags |= 2;
      b.memoizedState = null;
      return a2;
    }
    function sj(a2, b, c2, d2, e2, f2, g) {
      if (c2) {
        if (b.flags & 256)
          return b.flags &= -257, d2 = Li(Error(p$6(422))), tj(a2, b, g, d2);
        if (null !== b.memoizedState)
          return b.child = a2.child, b.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b.mode;
        d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = Ah(f2, e2, g, null);
        f2.flags |= 2;
        d2.return = b;
        f2.return = b;
        d2.sibling = f2;
        b.child = d2;
        0 !== (b.mode & 1) && Bh(b, a2.child, null, g);
        b.child.memoizedState = oj(g);
        b.memoizedState = nj;
        return f2;
      }
      if (0 === (b.mode & 1))
        return tj(a2, b, g, null);
      if ("$!" === e2.data) {
        d2 = e2.nextSibling && e2.nextSibling.dataset;
        if (d2)
          var h2 = d2.dgst;
        d2 = h2;
        f2 = Error(p$6(419));
        d2 = Li(f2, d2, void 0);
        return tj(a2, b, g, d2);
      }
      h2 = 0 !== (g & a2.childLanes);
      if (Ug || h2) {
        d2 = R;
        if (null !== d2) {
          switch (g & -g) {
            case 4:
              e2 = 2;
              break;
            case 16:
              e2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e2 = 32;
              break;
            case 536870912:
              e2 = 268435456;
              break;
            default:
              e2 = 0;
          }
          e2 = 0 !== (e2 & (d2.suspendedLanes | g)) ? 0 : e2;
          0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
        }
        uj();
        d2 = Li(Error(p$6(421)));
        return tj(a2, b, g, d2);
      }
      if ("$?" === e2.data)
        return b.flags |= 128, b.child = a2.child, b = vj.bind(null, a2), e2._reactRetry = b, null;
      a2 = f2.treeContext;
      yg = Lf(e2.nextSibling);
      xg = b;
      I$3 = true;
      zg = null;
      null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b);
      b = rj(b, d2.children);
      b.flags |= 4096;
      return b;
    }
    function wj(a2, b, c2) {
      a2.lanes |= b;
      var d2 = a2.alternate;
      null !== d2 && (d2.lanes |= b);
      Sg(a2.return, b, c2);
    }
    function xj(a2, b, c2, d2, e2) {
      var f2 = a2.memoizedState;
      null === f2 ? a2.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
    }
    function yj(a2, b, c2) {
      var d2 = b.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
      Yi(a2, b, d2.children, c2);
      d2 = M$5.current;
      if (0 !== (d2 & 2))
        d2 = d2 & 1 | 2, b.flags |= 128;
      else {
        if (null !== a2 && 0 !== (a2.flags & 128))
          a:
            for (a2 = b.child; null !== a2; ) {
              if (13 === a2.tag)
                null !== a2.memoizedState && wj(a2, c2, b);
              else if (19 === a2.tag)
                wj(a2, c2, b);
              else if (null !== a2.child) {
                a2.child.return = a2;
                a2 = a2.child;
                continue;
              }
              if (a2 === b)
                break a;
              for (; null === a2.sibling; ) {
                if (null === a2.return || a2.return === b)
                  break a;
                a2 = a2.return;
              }
              a2.sibling.return = a2.return;
              a2 = a2.sibling;
            }
        d2 &= 1;
      }
      G(M$5, d2);
      if (0 === (b.mode & 1))
        b.memoizedState = null;
      else
        switch (e2) {
          case "forwards":
            c2 = b.child;
            for (e2 = null; null !== c2; )
              a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
            c2 = e2;
            null === c2 ? (e2 = b.child, b.child = null) : (e2 = c2.sibling, c2.sibling = null);
            xj(b, false, e2, c2, f2);
            break;
          case "backwards":
            c2 = null;
            e2 = b.child;
            for (b.child = null; null !== e2; ) {
              a2 = e2.alternate;
              if (null !== a2 && null === Mh(a2)) {
                b.child = e2;
                break;
              }
              a2 = e2.sibling;
              e2.sibling = c2;
              c2 = e2;
              e2 = a2;
            }
            xj(b, true, c2, null, f2);
            break;
          case "together":
            xj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
      return b.child;
    }
    function jj(a2, b) {
      0 === (b.mode & 1) && null !== a2 && (a2.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function $i(a2, b, c2) {
      null !== a2 && (b.dependencies = a2.dependencies);
      hh |= b.lanes;
      if (0 === (c2 & b.childLanes))
        return null;
      if (null !== a2 && b.child !== a2.child)
        throw Error(p$6(153));
      if (null !== b.child) {
        a2 = b.child;
        c2 = wh(a2, a2.pendingProps);
        b.child = c2;
        for (c2.return = b; null !== a2.sibling; )
          a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b;
        c2.sibling = null;
      }
      return b.child;
    }
    function zj(a2, b, c2) {
      switch (b.tag) {
        case 3:
          lj(b);
          Ig();
          break;
        case 5:
          Kh(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          Ih(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b.type._context, e2 = b.memoizedProps.value;
          G(Mg, d2._currentValue);
          d2._currentValue = e2;
          break;
        case 13:
          d2 = b.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated)
              return G(M$5, M$5.current & 1), b.flags |= 128, null;
            if (0 !== (c2 & b.child.childLanes))
              return pj(a2, b, c2);
            G(M$5, M$5.current & 1);
            a2 = $i(a2, b, c2);
            return null !== a2 ? a2.sibling : null;
          }
          G(M$5, M$5.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b.childLanes);
          if (0 !== (a2.flags & 128)) {
            if (d2)
              return yj(a2, b, c2);
            b.flags |= 128;
          }
          e2 = b.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          G(M$5, M$5.current);
          if (d2)
            break;
          else
            return null;
        case 22:
        case 23:
          return b.lanes = 0, ej(a2, b, c2);
      }
      return $i(a2, b, c2);
    }
    var Aj, Bj, Cj, Dj;
    Aj = function(a2, b) {
      for (var c2 = b.child; null !== c2; ) {
        if (5 === c2.tag || 6 === c2.tag)
          a2.appendChild(c2.stateNode);
        else if (4 !== c2.tag && null !== c2.child) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b)
          break;
        for (; null === c2.sibling; ) {
          if (null === c2.return || c2.return === b)
            return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Bj = function() {
    };
    Cj = function(a2, b, c2, d2) {
      var e2 = a2.memoizedProps;
      if (e2 !== d2) {
        a2 = b.stateNode;
        Hh(Eh.current);
        var f2 = null;
        switch (c2) {
          case "input":
            e2 = Ya(a2, e2);
            d2 = Ya(a2, d2);
            f2 = [];
            break;
          case "select":
            e2 = A$4({}, e2, { value: void 0 });
            d2 = A$4({}, d2, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e2 = gb(a2, e2);
            d2 = gb(a2, d2);
            f2 = [];
            break;
          default:
            "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
        }
        ub(c2, d2);
        var g;
        c2 = null;
        for (l2 in e2)
          if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
            if ("style" === l2) {
              var h2 = e2[l2];
              for (g in h2)
                h2.hasOwnProperty(g) && (c2 || (c2 = {}), c2[g] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = null != e2 ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
            if ("style" === l2)
              if (h2) {
                for (g in h2)
                  !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c2 || (c2 = {}), c2[g] = "");
                for (g in k2)
                  k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c2 || (c2 = {}), c2[g] = k2[g]);
              } else
                c2 || (f2 || (f2 = []), f2.push(
                  l2,
                  c2
                )), c2 = k2;
            else
              "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c2 && (f2 = f2 || []).push("style", c2);
        var l2 = f2;
        if (b.updateQueue = l2)
          b.flags |= 4;
      }
    };
    Dj = function(a2, b, c2, d2) {
      c2 !== d2 && (b.flags |= 4);
    };
    function Ej(a2, b) {
      if (!I$3)
        switch (a2.tailMode) {
          case "hidden":
            b = a2.tail;
            for (var c2 = null; null !== b; )
              null !== b.alternate && (c2 = b), b = b.sibling;
            null === c2 ? a2.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a2.tail;
            for (var d2 = null; null !== c2; )
              null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
            null === d2 ? b || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
        }
    }
    function S$3(a2) {
      var b = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
      if (b)
        for (var e2 = a2.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
      else
        for (e2 = a2.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
      a2.subtreeFlags |= d2;
      a2.childLanes = c2;
      return b;
    }
    function Fj(a2, b, c2) {
      var d2 = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S$3(b), null;
        case 1:
          return Zf(b.type) && $f(), S$3(b), null;
        case 3:
          d2 = b.stateNode;
          Jh();
          E$2(Wf);
          E$2(H$1);
          Oh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a2 || null === a2.child)
            Gg(b) ? b.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
          Bj(a2, b);
          S$3(b);
          return null;
        case 5:
          Lh(b);
          var e2 = Hh(Gh.current);
          c2 = b.type;
          if (null !== a2 && null != b.stateNode)
            Cj(a2, b, c2, d2, e2), a2.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b.stateNode)
                throw Error(p$6(166));
              S$3(b);
              return null;
            }
            a2 = Hh(Eh.current);
            if (Gg(b)) {
              d2 = b.stateNode;
              c2 = b.type;
              var f2 = b.memoizedProps;
              d2[Of] = b;
              d2[Pf] = f2;
              a2 = 0 !== (b.mode & 1);
              switch (c2) {
                case "dialog":
                  D$1("cancel", d2);
                  D$1("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D$1("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++)
                    D$1(lf[e2], d2);
                  break;
                case "source":
                  D$1("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D$1(
                    "error",
                    d2
                  );
                  D$1("load", d2);
                  break;
                case "details":
                  D$1("toggle", d2);
                  break;
                case "input":
                  Za(d2, f2);
                  D$1("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f2.multiple };
                  D$1("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f2), D$1("invalid", d2);
              }
              ub(c2, f2);
              e2 = null;
              for (var g in f2)
                if (f2.hasOwnProperty(g)) {
                  var h2 = f2[g];
                  "children" === g ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d2.textContent,
                    h2,
                    a2
                  ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g) && null != h2 && "onScroll" === g && D$1("scroll", d2);
                }
              switch (c2) {
                case "input":
                  Va(d2);
                  db(d2, f2, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d2.onclick = Bf);
              }
              d2 = e2;
              b.updateQueue = d2;
              null !== d2 && (b.flags |= 4);
            } else {
              g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
              "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g.createElement(c2, { is: d2.is }) : (a2 = g.createElement(c2), "select" === c2 && (g = a2, d2.multiple ? g.multiple = true : d2.size && (g.size = d2.size))) : a2 = g.createElementNS(a2, c2);
              a2[Of] = b;
              a2[Pf] = d2;
              Aj(a2, b, false, false);
              b.stateNode = a2;
              a: {
                g = vb(c2, d2);
                switch (c2) {
                  case "dialog":
                    D$1("cancel", a2);
                    D$1("close", a2);
                    e2 = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D$1("load", a2);
                    e2 = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++)
                      D$1(lf[e2], a2);
                    e2 = d2;
                    break;
                  case "source":
                    D$1("error", a2);
                    e2 = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D$1(
                      "error",
                      a2
                    );
                    D$1("load", a2);
                    e2 = d2;
                    break;
                  case "details":
                    D$1("toggle", a2);
                    e2 = d2;
                    break;
                  case "input":
                    Za(a2, d2);
                    e2 = Ya(a2, d2);
                    D$1("invalid", a2);
                    break;
                  case "option":
                    e2 = d2;
                    break;
                  case "select":
                    a2._wrapperState = { wasMultiple: !!d2.multiple };
                    e2 = A$4({}, d2, { value: void 0 });
                    D$1("invalid", a2);
                    break;
                  case "textarea":
                    hb(a2, d2);
                    e2 = gb(a2, d2);
                    D$1("invalid", a2);
                    break;
                  default:
                    e2 = d2;
                }
                ub(c2, e2);
                h2 = e2;
                for (f2 in h2)
                  if (h2.hasOwnProperty(f2)) {
                    var k2 = h2[f2];
                    "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a2) : null != k2 && ta(a2, f2, k2, g));
                  }
                switch (c2) {
                  case "input":
                    Va(a2);
                    db(a2, d2, false);
                    break;
                  case "textarea":
                    Va(a2);
                    jb(a2);
                    break;
                  case "option":
                    null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a2.multiple = !!d2.multiple;
                    f2 = d2.value;
                    null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                      a2,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e2.onClick && (a2.onclick = Bf);
                }
                switch (c2) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S$3(b);
          return null;
        case 6:
          if (a2 && null != b.stateNode)
            Dj(a2, b, a2.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b.stateNode)
              throw Error(p$6(166));
            c2 = Hh(Gh.current);
            Hh(Eh.current);
            if (Gg(b)) {
              d2 = b.stateNode;
              c2 = b.memoizedProps;
              d2[Of] = b;
              if (f2 = d2.nodeValue !== c2) {
                if (a2 = xg, null !== a2)
                  switch (a2.tag) {
                    case 3:
                      Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                      break;
                    case 5:
                      true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  }
              }
              f2 && (b.flags |= 4);
            } else
              d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b, b.stateNode = d2;
          }
          S$3(b);
          return null;
        case 13:
          E$2(M$5);
          d2 = b.memoizedState;
          if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
            if (I$3 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
              Hg(), Ig(), b.flags |= 98560, f2 = false;
            else if (f2 = Gg(b), null !== d2 && null !== d2.dehydrated) {
              if (null === a2) {
                if (!f2)
                  throw Error(p$6(318));
                f2 = b.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2)
                  throw Error(p$6(317));
                f2[Of] = b;
              } else
                Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S$3(b);
              f2 = false;
            } else
              null !== zg && (Gj(zg), zg = null), f2 = true;
            if (!f2)
              return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128))
            return b.lanes = c2, b;
          d2 = null !== d2;
          d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a2 || 0 !== (M$5.current & 1) ? 0 === T$3 && (T$3 = 3) : uj()));
          null !== b.updateQueue && (b.flags |= 4);
          S$3(b);
          return null;
        case 4:
          return Jh(), Bj(a2, b), null === a2 && sf(b.stateNode.containerInfo), S$3(b), null;
        case 10:
          return Rg(b.type._context), S$3(b), null;
        case 17:
          return Zf(b.type) && $f(), S$3(b), null;
        case 19:
          E$2(M$5);
          f2 = b.memoizedState;
          if (null === f2)
            return S$3(b), null;
          d2 = 0 !== (b.flags & 128);
          g = f2.rendering;
          if (null === g)
            if (d2)
              Ej(f2, false);
            else {
              if (0 !== T$3 || null !== a2 && 0 !== (a2.flags & 128))
                for (a2 = b.child; null !== a2; ) {
                  g = Mh(a2);
                  if (null !== g) {
                    b.flags |= 128;
                    Ej(f2, false);
                    d2 = g.updateQueue;
                    null !== d2 && (b.updateQueue = d2, b.flags |= 4);
                    b.subtreeFlags = 0;
                    d2 = c2;
                    for (c2 = b.child; null !== c2; )
                      f2 = c2, a2 = d2, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a2 = g.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                    G(M$5, M$5.current & 1 | 2);
                    return b.child;
                  }
                  a2 = a2.sibling;
                }
              null !== f2.tail && B() > Hj && (b.flags |= 128, d2 = true, Ej(f2, false), b.lanes = 4194304);
            }
          else {
            if (!d2)
              if (a2 = Mh(g), null !== a2) {
                if (b.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b.updateQueue = c2, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I$3)
                  return S$3(b), null;
              } else
                2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b.flags |= 128, d2 = true, Ej(f2, false), b.lanes = 4194304);
            f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c2 = f2.last, null !== c2 ? c2.sibling = g : b.child = g, f2.last = g);
          }
          if (null !== f2.tail)
            return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c2 = M$5.current, G(M$5, d2 ? c2 & 1 | 2 : c2 & 1), b;
          S$3(b);
          return null;
        case 22:
        case 23:
          return Ij(), d2 = null !== b.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b.flags |= 8192), d2 && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S$3(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S$3(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p$6(156, b.tag));
    }
    function Jj(a2, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a2 = b.flags, a2 & 65536 ? (b.flags = a2 & -65537 | 128, b) : null;
        case 3:
          return Jh(), E$2(Wf), E$2(H$1), Oh(), a2 = b.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b.flags = a2 & -65537 | 128, b) : null;
        case 5:
          return Lh(b), null;
        case 13:
          E$2(M$5);
          a2 = b.memoizedState;
          if (null !== a2 && null !== a2.dehydrated) {
            if (null === b.alternate)
              throw Error(p$6(340));
            Ig();
          }
          a2 = b.flags;
          return a2 & 65536 ? (b.flags = a2 & -65537 | 128, b) : null;
        case 19:
          return E$2(M$5), null;
        case 4:
          return Jh(), null;
        case 10:
          return Rg(b.type._context), null;
        case 22:
        case 23:
          return Ij(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Kj = false, U$1 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
    function Mj(a2, b) {
      var c2 = a2.ref;
      if (null !== c2)
        if ("function" === typeof c2)
          try {
            c2(null);
          } catch (d2) {
            W(a2, b, d2);
          }
        else
          c2.current = null;
    }
    function Nj(a2, b, c2) {
      try {
        c2();
      } catch (d2) {
        W(a2, b, d2);
      }
    }
    var Oj = false;
    function Pj(a2, b) {
      Cf = dd;
      a2 = Me$1();
      if (Ne$1(a2)) {
        if ("selectionStart" in a2)
          var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
        else
          a: {
            c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
            var d2 = c2.getSelection && c2.getSelection();
            if (d2 && 0 !== d2.rangeCount) {
              c2 = d2.anchorNode;
              var e2 = d2.anchorOffset, f2 = d2.focusNode;
              d2 = d2.focusOffset;
              try {
                c2.nodeType, f2.nodeType;
              } catch (F2) {
                c2 = null;
                break a;
              }
              var g = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
              b:
                for (; ; ) {
                  for (var y2; ; ) {
                    q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                    q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g + d2);
                    3 === q2.nodeType && (g += q2.nodeValue.length);
                    if (null === (y2 = q2.firstChild))
                      break;
                    r2 = q2;
                    q2 = y2;
                  }
                  for (; ; ) {
                    if (q2 === a2)
                      break b;
                    r2 === c2 && ++l2 === e2 && (h2 = g);
                    r2 === f2 && ++m2 === d2 && (k2 = g);
                    if (null !== (y2 = q2.nextSibling))
                      break;
                    q2 = r2;
                    r2 = q2.parentNode;
                  }
                  q2 = y2;
                }
              c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
            } else
              c2 = null;
          }
        c2 = c2 || { start: 0, end: 0 };
      } else
        c2 = null;
      Df = { focusedElem: a2, selectionRange: c2 };
      dd = false;
      for (V$1 = b; null !== V$1; )
        if (b = V$1, a2 = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a2)
          a2.return = b, V$1 = a2;
        else
          for (; null !== V$1; ) {
            b = V$1;
            try {
              var n2 = b.alternate;
              if (0 !== (b.flags & 1024))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== n2) {
                      var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                      x2.__reactInternalSnapshotBeforeUpdate = w2;
                    }
                    break;
                  case 3:
                    var u2 = b.stateNode.containerInfo;
                    1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p$6(163));
                }
            } catch (F2) {
              W(b, b.return, F2);
            }
            a2 = b.sibling;
            if (null !== a2) {
              a2.return = b.return;
              V$1 = a2;
              break;
            }
            V$1 = b.return;
          }
      n2 = Oj;
      Oj = false;
      return n2;
    }
    function Qj(a2, b, c2) {
      var d2 = b.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e2 = d2 = d2.next;
        do {
          if ((e2.tag & a2) === a2) {
            var f2 = e2.destroy;
            e2.destroy = void 0;
            void 0 !== f2 && Nj(b, c2, f2);
          }
          e2 = e2.next;
        } while (e2 !== d2);
      }
    }
    function Rj(a2, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c2 = b = b.next;
        do {
          if ((c2.tag & a2) === a2) {
            var d2 = c2.create;
            c2.destroy = d2();
          }
          c2 = c2.next;
        } while (c2 !== b);
      }
    }
    function Sj(a2) {
      var b = a2.ref;
      if (null !== b) {
        var c2 = a2.stateNode;
        switch (a2.tag) {
          case 5:
            a2 = c2;
            break;
          default:
            a2 = c2;
        }
        "function" === typeof b ? b(a2) : b.current = a2;
      }
    }
    function Tj(a2) {
      var b = a2.alternate;
      null !== b && (a2.alternate = null, Tj(b));
      a2.child = null;
      a2.deletions = null;
      a2.sibling = null;
      5 === a2.tag && (b = a2.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a2.stateNode = null;
      a2.return = null;
      a2.dependencies = null;
      a2.memoizedProps = null;
      a2.memoizedState = null;
      a2.pendingProps = null;
      a2.stateNode = null;
      a2.updateQueue = null;
    }
    function Uj(a2) {
      return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
    }
    function Vj(a2) {
      a:
        for (; ; ) {
          for (; null === a2.sibling; ) {
            if (null === a2.return || Uj(a2.return))
              return null;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
            if (a2.flags & 2)
              continue a;
            if (null === a2.child || 4 === a2.tag)
              continue a;
            else
              a2.child.return = a2, a2 = a2.child;
          }
          if (!(a2.flags & 2))
            return a2.stateNode;
        }
    }
    function Wj(a2, b, c2) {
      var d2 = a2.tag;
      if (5 === d2 || 6 === d2)
        a2 = a2.stateNode, b ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b) : c2.insertBefore(a2, b) : (8 === c2.nodeType ? (b = c2.parentNode, b.insertBefore(a2, c2)) : (b = c2, b.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d2 && (a2 = a2.child, null !== a2))
        for (Wj(a2, b, c2), a2 = a2.sibling; null !== a2; )
          Wj(a2, b, c2), a2 = a2.sibling;
    }
    function Xj(a2, b, c2) {
      var d2 = a2.tag;
      if (5 === d2 || 6 === d2)
        a2 = a2.stateNode, b ? c2.insertBefore(a2, b) : c2.appendChild(a2);
      else if (4 !== d2 && (a2 = a2.child, null !== a2))
        for (Xj(a2, b, c2), a2 = a2.sibling; null !== a2; )
          Xj(a2, b, c2), a2 = a2.sibling;
    }
    var X$2 = null, Yj = false;
    function Zj(a2, b, c2) {
      for (c2 = c2.child; null !== c2; )
        ak(a2, b, c2), c2 = c2.sibling;
    }
    function ak(a2, b, c2) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount)
        try {
          lc.onCommitFiberUnmount(kc, c2);
        } catch (h2) {
        }
      switch (c2.tag) {
        case 5:
          U$1 || Mj(c2, b);
        case 6:
          var d2 = X$2, e2 = Yj;
          X$2 = null;
          Zj(a2, b, c2);
          X$2 = d2;
          Yj = e2;
          null !== X$2 && (Yj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$2.removeChild(c2.stateNode));
          break;
        case 18:
          null !== X$2 && (Yj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$2, c2.stateNode));
          break;
        case 4:
          d2 = X$2;
          e2 = Yj;
          X$2 = c2.stateNode.containerInfo;
          Yj = true;
          Zj(a2, b, c2);
          X$2 = d2;
          Yj = e2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e2 = d2 = d2.next;
            do {
              var f2 = e2, g = f2.destroy;
              f2 = f2.tag;
              void 0 !== g && (0 !== (f2 & 2) ? Nj(c2, b, g) : 0 !== (f2 & 4) && Nj(c2, b, g));
              e2 = e2.next;
            } while (e2 !== d2);
          }
          Zj(a2, b, c2);
          break;
        case 1:
          if (!U$1 && (Mj(c2, b), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
            try {
              d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
            } catch (h2) {
              W(c2, b, h2);
            }
          Zj(a2, b, c2);
          break;
        case 21:
          Zj(a2, b, c2);
          break;
        case 22:
          c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Zj(a2, b, c2), U$1 = d2) : Zj(a2, b, c2);
          break;
        default:
          Zj(a2, b, c2);
      }
    }
    function bk(a2) {
      var b = a2.updateQueue;
      if (null !== b) {
        a2.updateQueue = null;
        var c2 = a2.stateNode;
        null === c2 && (c2 = a2.stateNode = new Lj());
        b.forEach(function(b2) {
          var d2 = ck.bind(null, a2, b2);
          c2.has(b2) || (c2.add(b2), b2.then(d2, d2));
        });
      }
    }
    function dk(a2, b) {
      var c2 = b.deletions;
      if (null !== c2)
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2];
          try {
            var f2 = a2, g = b, h2 = g;
            a:
              for (; null !== h2; ) {
                switch (h2.tag) {
                  case 5:
                    X$2 = h2.stateNode;
                    Yj = false;
                    break a;
                  case 3:
                    X$2 = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                  case 4:
                    X$2 = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                }
                h2 = h2.return;
              }
            if (null === X$2)
              throw Error(p$6(160));
            ak(f2, g, e2);
            X$2 = null;
            Yj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W(e2, b, l2);
          }
        }
      if (b.subtreeFlags & 12854)
        for (b = b.child; null !== b; )
          ek(b, a2), b = b.sibling;
    }
    function ek(a2, b) {
      var c2 = a2.alternate, d2 = a2.flags;
      switch (a2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dk(b, a2);
          fk(a2);
          if (d2 & 4) {
            try {
              Qj(3, a2, a2.return), Rj(3, a2);
            } catch (t2) {
              W(a2, a2.return, t2);
            }
            try {
              Qj(5, a2, a2.return);
            } catch (t2) {
              W(a2, a2.return, t2);
            }
          }
          break;
        case 1:
          dk(b, a2);
          fk(a2);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          break;
        case 5:
          dk(b, a2);
          fk(a2);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          if (a2.flags & 32) {
            var e2 = a2.stateNode;
            try {
              ob(e2, "");
            } catch (t2) {
              W(a2, a2.return, t2);
            }
          }
          if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
            var f2 = a2.memoizedProps, g = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
            a2.updateQueue = null;
            if (null !== k2)
              try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g);
                var l2 = vb(h2, f2);
                for (g = 0; g < k2.length; g += 2) {
                  var m2 = k2[g], q2 = k2[g + 1];
                  "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r2 = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t2) {
                W(a2, a2.return, t2);
              }
          }
          break;
        case 6:
          dk(b, a2);
          fk(a2);
          if (d2 & 4) {
            if (null === a2.stateNode)
              throw Error(p$6(162));
            e2 = a2.stateNode;
            f2 = a2.memoizedProps;
            try {
              e2.nodeValue = f2;
            } catch (t2) {
              W(a2, a2.return, t2);
            }
          }
          break;
        case 3:
          dk(b, a2);
          fk(a2);
          if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
            try {
              bd(b.containerInfo);
            } catch (t2) {
              W(a2, a2.return, t2);
            }
          break;
        case 4:
          dk(b, a2);
          fk(a2);
          break;
        case 13:
          dk(b, a2);
          fk(a2);
          e2 = a2.child;
          e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
          d2 & 4 && bk(a2);
          break;
        case 22:
          m2 = null !== c2 && null !== c2.memoizedState;
          a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, dk(b, a2), U$1 = l2) : dk(b, a2);
          fk(a2);
          if (d2 & 8192) {
            l2 = null !== a2.memoizedState;
            if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
              for (V$1 = a2, m2 = a2.child; null !== m2; ) {
                for (q2 = V$1 = m2; null !== V$1; ) {
                  r2 = V$1;
                  y2 = r2.child;
                  switch (r2.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Qj(4, r2, r2.return);
                      break;
                    case 1:
                      Mj(r2, r2.return);
                      var n2 = r2.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d2 = r2;
                        c2 = r2.return;
                        try {
                          b = d2, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                        } catch (t2) {
                          W(d2, c2, t2);
                        }
                      }
                      break;
                    case 5:
                      Mj(r2, r2.return);
                      break;
                    case 22:
                      if (null !== r2.memoizedState) {
                        hk(q2);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r2, V$1 = y2) : hk(q2);
                }
                m2 = m2.sibling;
              }
            a:
              for (m2 = null, q2 = a2; ; ) {
                if (5 === q2.tag) {
                  if (null === m2) {
                    m2 = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g));
                    } catch (t2) {
                      W(a2, a2.return, t2);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m2)
                    try {
                      q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                    } catch (t2) {
                      W(a2, a2.return, t2);
                    }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a2)
                  break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a2)
                    break a;
                  m2 === q2 && (m2 = null);
                  q2 = q2.return;
                }
                m2 === q2 && (m2 = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
          }
          break;
        case 19:
          dk(b, a2);
          fk(a2);
          d2 & 4 && bk(a2);
          break;
        case 21:
          break;
        default:
          dk(
            b,
            a2
          ), fk(a2);
      }
    }
    function fk(a2) {
      var b = a2.flags;
      if (b & 2) {
        try {
          a: {
            for (var c2 = a2.return; null !== c2; ) {
              if (Uj(c2)) {
                var d2 = c2;
                break a;
              }
              c2 = c2.return;
            }
            throw Error(p$6(160));
          }
          switch (d2.tag) {
            case 5:
              var e2 = d2.stateNode;
              d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
              var f2 = Vj(a2);
              Xj(a2, f2, e2);
              break;
            case 3:
            case 4:
              var g = d2.stateNode.containerInfo, h2 = Vj(a2);
              Wj(a2, h2, g);
              break;
            default:
              throw Error(p$6(161));
          }
        } catch (k2) {
          W(a2, a2.return, k2);
        }
        a2.flags &= -3;
      }
      b & 4096 && (a2.flags &= -4097);
    }
    function ik(a2, b, c2) {
      V$1 = a2;
      jk(a2);
    }
    function jk(a2, b, c2) {
      for (var d2 = 0 !== (a2.mode & 1); null !== V$1; ) {
        var e2 = V$1, f2 = e2.child;
        if (22 === e2.tag && d2) {
          var g = null !== e2.memoizedState || Kj;
          if (!g) {
            var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
            h2 = Kj;
            var l2 = U$1;
            Kj = g;
            if ((U$1 = k2) && !l2)
              for (V$1 = e2; null !== V$1; )
                g = V$1, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g, V$1 = k2) : kk(e2);
            for (; null !== f2; )
              V$1 = f2, jk(f2), f2 = f2.sibling;
            V$1 = e2;
            Kj = h2;
            U$1 = l2;
          }
          lk(a2);
        } else
          0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : lk(a2);
      }
    }
    function lk(a2) {
      for (; null !== V$1; ) {
        var b = V$1;
        if (0 !== (b.flags & 8772)) {
          var c2 = b.alternate;
          try {
            if (0 !== (b.flags & 8772))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U$1 || Rj(5, b);
                  break;
                case 1:
                  var d2 = b.stateNode;
                  if (b.flags & 4 && !U$1)
                    if (null === c2)
                      d2.componentDidMount();
                    else {
                      var e2 = b.elementType === b.type ? c2.memoizedProps : Lg(b.type, c2.memoizedProps);
                      d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f2 = b.updateQueue;
                  null !== f2 && ih(b, f2, d2);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c2 = null;
                    if (null !== b.child)
                      switch (b.child.tag) {
                        case 5:
                          c2 = b.child.stateNode;
                          break;
                        case 1:
                          c2 = b.child.stateNode;
                      }
                    ih(b, g, c2);
                  }
                  break;
                case 5:
                  var h2 = b.stateNode;
                  if (null === c2 && b.flags & 4) {
                    c2 = h2;
                    var k2 = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c2.focus();
                        break;
                      case "img":
                        k2.src && (c2.src = k2.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q2 = m2.dehydrated;
                        null !== q2 && bd(q2);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p$6(163));
              }
            U$1 || b.flags & 512 && Sj(b);
          } catch (r2) {
            W(b, b.return, r2);
          }
        }
        if (b === a2) {
          V$1 = null;
          break;
        }
        c2 = b.sibling;
        if (null !== c2) {
          c2.return = b.return;
          V$1 = c2;
          break;
        }
        V$1 = b.return;
      }
    }
    function hk(a2) {
      for (; null !== V$1; ) {
        var b = V$1;
        if (b === a2) {
          V$1 = null;
          break;
        }
        var c2 = b.sibling;
        if (null !== c2) {
          c2.return = b.return;
          V$1 = c2;
          break;
        }
        V$1 = b.return;
      }
    }
    function kk(a2) {
      for (; null !== V$1; ) {
        var b = V$1;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c2 = b.return;
              try {
                Rj(4, b);
              } catch (k2) {
                W(b, c2, k2);
              }
              break;
            case 1:
              var d2 = b.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e2 = b.return;
                try {
                  d2.componentDidMount();
                } catch (k2) {
                  W(b, e2, k2);
                }
              }
              var f2 = b.return;
              try {
                Sj(b);
              } catch (k2) {
                W(b, f2, k2);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Sj(b);
              } catch (k2) {
                W(b, g, k2);
              }
          }
        } catch (k2) {
          W(b, b.return, k2);
        }
        if (b === a2) {
          V$1 = null;
          break;
        }
        var h2 = b.sibling;
        if (null !== h2) {
          h2.return = b.return;
          V$1 = h2;
          break;
        }
        V$1 = b.return;
      }
    }
    var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T$3 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
    function L$3() {
      return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
    }
    function lh(a2) {
      if (0 === (a2.mode & 1))
        return 1;
      if (0 !== (K & 2) && 0 !== Z)
        return Z & -Z;
      if (null !== Kg.transition)
        return 0 === Ck && (Ck = yc()), Ck;
      a2 = C$1;
      if (0 !== a2)
        return a2;
      a2 = window.event;
      a2 = void 0 === a2 ? 16 : jd(a2.type);
      return a2;
    }
    function mh(a2, b, c2, d2) {
      if (50 < zk)
        throw zk = 0, Ak = null, Error(p$6(185));
      Ac(a2, c2, d2);
      if (0 === (K & 2) || a2 !== R)
        a2 === R && (0 === (K & 2) && (rk |= c2), 4 === T$3 && Dk(a2, Z)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
    }
    function Ek(a2, b) {
      var c2 = a2.callbackNode;
      wc(a2, b);
      var d2 = uc(a2, a2 === R ? Z : 0);
      if (0 === d2)
        null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
      else if (b = d2 & -d2, a2.callbackPriority !== b) {
        null != c2 && bc(c2);
        if (1 === b)
          0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
            0 === (K & 6) && jg();
          }), c2 = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c2 = fc;
              break;
            case 4:
              c2 = gc;
              break;
            case 16:
              c2 = hc;
              break;
            case 536870912:
              c2 = jc;
              break;
            default:
              c2 = hc;
          }
          c2 = Gk(c2, Hk.bind(null, a2));
        }
        a2.callbackPriority = b;
        a2.callbackNode = c2;
      }
    }
    function Hk(a2, b) {
      Bk = -1;
      Ck = 0;
      if (0 !== (K & 6))
        throw Error(p$6(327));
      var c2 = a2.callbackNode;
      if (Ik() && a2.callbackNode !== c2)
        return null;
      var d2 = uc(a2, a2 === R ? Z : 0);
      if (0 === d2)
        return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b)
        b = Jk(a2, d2);
      else {
        b = d2;
        var e2 = K;
        K |= 2;
        var f2 = Kk();
        if (R !== a2 || Z !== b)
          vk = null, Hj = B() + 500, Lk(a2, b);
        do
          try {
            Mk();
            break;
          } catch (h2) {
            Nk(a2, h2);
          }
        while (1);
        Qg();
        nk.current = f2;
        K = e2;
        null !== Y ? b = 0 : (R = null, Z = 0, b = T$3);
      }
      if (0 !== b) {
        2 === b && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b = Ok(a2, e2)));
        if (1 === b)
          throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
        if (6 === b)
          Dk(a2, d2);
        else {
          e2 = a2.current.alternate;
          if (0 === (d2 & 30) && !Pk(e2) && (b = Jk(a2, d2), 2 === b && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b = Ok(a2, f2))), 1 === b))
            throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
          a2.finishedWork = e2;
          a2.finishedLanes = d2;
          switch (b) {
            case 0:
            case 1:
              throw Error(p$6(345));
            case 2:
              Qk(a2, uk, vk);
              break;
            case 3:
              Dk(a2, d2);
              if ((d2 & 130023424) === d2 && (b = gk + 500 - B(), 10 < b)) {
                if (0 !== uc(a2, 0))
                  break;
                e2 = a2.suspendedLanes;
                if ((e2 & d2) !== d2) {
                  L$3();
                  a2.pingedLanes |= a2.suspendedLanes & e2;
                  break;
                }
                a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b);
                break;
              }
              Qk(a2, uk, vk);
              break;
            case 4:
              Dk(a2, d2);
              if ((d2 & 4194240) === d2)
                break;
              b = a2.eventTimes;
              for (e2 = -1; 0 < d2; ) {
                var g = 31 - oc(d2);
                f2 = 1 << g;
                g = b[g];
                g > e2 && (e2 = g);
                d2 &= ~f2;
              }
              d2 = e2;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
              if (10 < d2) {
                a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
                break;
              }
              Qk(a2, uk, vk);
              break;
            case 5:
              Qk(a2, uk, vk);
              break;
            default:
              throw Error(p$6(329));
          }
        }
      }
      Ek(a2, B());
      return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
    }
    function Ok(a2, b) {
      var c2 = tk;
      a2.current.memoizedState.isDehydrated && (Lk(a2, b).flags |= 256);
      a2 = Jk(a2, b);
      2 !== a2 && (b = uk, uk = c2, null !== b && Gj(b));
      return a2;
    }
    function Gj(a2) {
      null === uk ? uk = a2 : uk.push.apply(uk, a2);
    }
    function Pk(a2) {
      for (var b = a2; ; ) {
        if (b.flags & 16384) {
          var c2 = b.updateQueue;
          if (null !== c2 && (c2 = c2.stores, null !== c2))
            for (var d2 = 0; d2 < c2.length; d2++) {
              var e2 = c2[d2], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He$2(f2(), e2))
                  return false;
              } catch (g) {
                return false;
              }
            }
        }
        c2 = b.child;
        if (b.subtreeFlags & 16384 && null !== c2)
          c2.return = b, b = c2;
        else {
          if (b === a2)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a2)
              return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Dk(a2, b) {
      b &= ~sk;
      b &= ~rk;
      a2.suspendedLanes |= b;
      a2.pingedLanes &= ~b;
      for (a2 = a2.expirationTimes; 0 < b; ) {
        var c2 = 31 - oc(b), d2 = 1 << c2;
        a2[c2] = -1;
        b &= ~d2;
      }
    }
    function Fk(a2) {
      if (0 !== (K & 6))
        throw Error(p$6(327));
      Ik();
      var b = uc(a2, 0);
      if (0 === (b & 1))
        return Ek(a2, B()), null;
      var c2 = Jk(a2, b);
      if (0 !== a2.tag && 2 === c2) {
        var d2 = xc(a2);
        0 !== d2 && (b = d2, c2 = Ok(a2, d2));
      }
      if (1 === c2)
        throw c2 = qk, Lk(a2, 0), Dk(a2, b), Ek(a2, B()), c2;
      if (6 === c2)
        throw Error(p$6(345));
      a2.finishedWork = a2.current.alternate;
      a2.finishedLanes = b;
      Qk(a2, uk, vk);
      Ek(a2, B());
      return null;
    }
    function Rk(a2, b) {
      var c2 = K;
      K |= 1;
      try {
        return a2(b);
      } finally {
        K = c2, 0 === K && (Hj = B() + 500, fg && jg());
      }
    }
    function Sk(a2) {
      null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
      var b = K;
      K |= 1;
      var c2 = pk.transition, d2 = C$1;
      try {
        if (pk.transition = null, C$1 = 1, a2)
          return a2();
      } finally {
        C$1 = d2, pk.transition = c2, K = b, 0 === (K & 6) && jg();
      }
    }
    function Ij() {
      gj = fj.current;
      E$2(fj);
    }
    function Lk(a2, b) {
      a2.finishedWork = null;
      a2.finishedLanes = 0;
      var c2 = a2.timeoutHandle;
      -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
      if (null !== Y)
        for (c2 = Y.return; null !== c2; ) {
          var d2 = c2;
          wg(d2);
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              null !== d2 && void 0 !== d2 && $f();
              break;
            case 3:
              Jh();
              E$2(Wf);
              E$2(H$1);
              Oh();
              break;
            case 5:
              Lh(d2);
              break;
            case 4:
              Jh();
              break;
            case 13:
              E$2(M$5);
              break;
            case 19:
              E$2(M$5);
              break;
            case 10:
              Rg(d2.type._context);
              break;
            case 22:
            case 23:
              Ij();
          }
          c2 = c2.return;
        }
      R = a2;
      Y = a2 = wh(a2.current, null);
      Z = gj = b;
      T$3 = 0;
      qk = null;
      sk = rk = hh = 0;
      uk = tk = null;
      if (null !== Wg) {
        for (b = 0; b < Wg.length; b++)
          if (c2 = Wg[b], d2 = c2.interleaved, null !== d2) {
            c2.interleaved = null;
            var e2 = d2.next, f2 = c2.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e2;
              d2.next = g;
            }
            c2.pending = d2;
          }
        Wg = null;
      }
      return a2;
    }
    function Nk(a2, b) {
      do {
        var c2 = Y;
        try {
          Qg();
          Ph.current = ai;
          if (Sh) {
            for (var d2 = N$1.memoizedState; null !== d2; ) {
              var e2 = d2.queue;
              null !== e2 && (e2.pending = null);
              d2 = d2.next;
            }
            Sh = false;
          }
          Rh = 0;
          P$3 = O$1 = N$1 = null;
          Th = false;
          Uh = 0;
          ok.current = null;
          if (null === c2 || null === c2.return) {
            T$3 = 1;
            qk = b;
            Y = null;
            break;
          }
          a: {
            var f2 = a2, g = c2.return, h2 = c2, k2 = b;
            b = Z;
            h2.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h2, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Vi(g);
              if (null !== y2) {
                y2.flags &= -257;
                Wi(y2, g, h2, f2, b);
                y2.mode & 1 && Ti(f2, l2, b);
                b = y2;
                k2 = l2;
                var n2 = b.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b.updateQueue = t2;
                } else
                  n2.add(k2);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Ti(f2, l2, b);
                  uj();
                  break a;
                }
                k2 = Error(p$6(426));
              }
            } else if (I$3 && h2.mode & 1) {
              var J2 = Vi(g);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Wi(J2, g, h2, f2, b);
                Jg(Ki(k2, h2));
                break a;
              }
            }
            f2 = k2 = Ki(k2, h2);
            4 !== T$3 && (T$3 = 2);
            null === tk ? tk = [f2] : tk.push(f2);
            f2 = g;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var x2 = Oi(f2, k2, b);
                  fh(f2, x2);
                  break a;
                case 1:
                  h2 = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var F2 = Ri(f2, h2, b);
                    fh(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Tk(c2);
        } catch (na) {
          b = na;
          Y === c2 && null !== c2 && (Y = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Kk() {
      var a2 = nk.current;
      nk.current = ai;
      return null === a2 ? ai : a2;
    }
    function uj() {
      if (0 === T$3 || 3 === T$3 || 2 === T$3)
        T$3 = 4;
      null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
    }
    function Jk(a2, b) {
      var c2 = K;
      K |= 2;
      var d2 = Kk();
      if (R !== a2 || Z !== b)
        vk = null, Lk(a2, b);
      do
        try {
          Uk();
          break;
        } catch (e2) {
          Nk(a2, e2);
        }
      while (1);
      Qg();
      K = c2;
      nk.current = d2;
      if (null !== Y)
        throw Error(p$6(261));
      R = null;
      Z = 0;
      return T$3;
    }
    function Uk() {
      for (; null !== Y; )
        Vk(Y);
    }
    function Mk() {
      for (; null !== Y && !cc(); )
        Vk(Y);
    }
    function Vk(a2) {
      var b = Wk(a2.alternate, a2, gj);
      a2.memoizedProps = a2.pendingProps;
      null === b ? Tk(a2) : Y = b;
      ok.current = null;
    }
    function Tk(a2) {
      var b = a2;
      do {
        var c2 = b.alternate;
        a2 = b.return;
        if (0 === (b.flags & 32768)) {
          if (c2 = Fj(c2, b, gj), null !== c2) {
            Y = c2;
            return;
          }
        } else {
          c2 = Jj(c2, b);
          if (null !== c2) {
            c2.flags &= 32767;
            Y = c2;
            return;
          }
          if (null !== a2)
            a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
          else {
            T$3 = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a2;
      } while (null !== b);
      0 === T$3 && (T$3 = 5);
    }
    function Qk(a2, b, c2) {
      var d2 = C$1, e2 = pk.transition;
      try {
        pk.transition = null, C$1 = 1, Xk(a2, b, c2, d2);
      } finally {
        pk.transition = e2, C$1 = d2;
      }
      return null;
    }
    function Xk(a2, b, c2, d2) {
      do
        Ik();
      while (null !== xk);
      if (0 !== (K & 6))
        throw Error(p$6(327));
      c2 = a2.finishedWork;
      var e2 = a2.finishedLanes;
      if (null === c2)
        return null;
      a2.finishedWork = null;
      a2.finishedLanes = 0;
      if (c2 === a2.current)
        throw Error(p$6(177));
      a2.callbackNode = null;
      a2.callbackPriority = 0;
      var f2 = c2.lanes | c2.childLanes;
      Bc(a2, f2);
      a2 === R && (Y = R = null, Z = 0);
      0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
        Ik();
        return null;
      }));
      f2 = 0 !== (c2.flags & 15990);
      if (0 !== (c2.subtreeFlags & 15990) || f2) {
        f2 = pk.transition;
        pk.transition = null;
        var g = C$1;
        C$1 = 1;
        var h2 = K;
        K |= 4;
        ok.current = null;
        Pj(a2, c2);
        ek(c2, a2);
        Oe$1(Df);
        dd = !!Cf;
        Df = Cf = null;
        a2.current = c2;
        ik(c2);
        dc();
        K = h2;
        C$1 = g;
        pk.transition = f2;
      } else
        a2.current = c2;
      wk && (wk = false, xk = a2, yk = e2);
      f2 = a2.pendingLanes;
      0 === f2 && (Si = null);
      mc(c2.stateNode);
      Ek(a2, B());
      if (null !== b)
        for (d2 = a2.onRecoverableError, c2 = 0; c2 < b.length; c2++)
          e2 = b[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
      if (Pi)
        throw Pi = false, a2 = Qi, Qi = null, a2;
      0 !== (yk & 1) && 0 !== a2.tag && Ik();
      f2 = a2.pendingLanes;
      0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
      jg();
      return null;
    }
    function Ik() {
      if (null !== xk) {
        var a2 = Dc(yk), b = pk.transition, c2 = C$1;
        try {
          pk.transition = null;
          C$1 = 16 > a2 ? 16 : a2;
          if (null === xk)
            var d2 = false;
          else {
            a2 = xk;
            xk = null;
            yk = 0;
            if (0 !== (K & 6))
              throw Error(p$6(331));
            var e2 = K;
            K |= 4;
            for (V$1 = a2.current; null !== V$1; ) {
              var f2 = V$1, g = f2.child;
              if (0 !== (V$1.flags & 16)) {
                var h2 = f2.deletions;
                if (null !== h2) {
                  for (var k2 = 0; k2 < h2.length; k2++) {
                    var l2 = h2[k2];
                    for (V$1 = l2; null !== V$1; ) {
                      var m2 = V$1;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2)
                        q2.return = m2, V$1 = q2;
                      else
                        for (; null !== V$1; ) {
                          m2 = V$1;
                          var r2 = m2.sibling, y2 = m2.return;
                          Tj(m2);
                          if (m2 === l2) {
                            V$1 = null;
                            break;
                          }
                          if (null !== r2) {
                            r2.return = y2;
                            V$1 = r2;
                            break;
                          }
                          V$1 = y2;
                        }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V$1 = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g)
                g.return = f2, V$1 = g;
              else
                b:
                  for (; null !== V$1; ) {
                    f2 = V$1;
                    if (0 !== (f2.flags & 2048))
                      switch (f2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, f2, f2.return);
                      }
                    var x2 = f2.sibling;
                    if (null !== x2) {
                      x2.return = f2.return;
                      V$1 = x2;
                      break b;
                    }
                    V$1 = f2.return;
                  }
            }
            var w2 = a2.current;
            for (V$1 = w2; null !== V$1; ) {
              g = V$1;
              var u2 = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u2)
                u2.return = g, V$1 = u2;
              else
                b:
                  for (g = w2; null !== V$1; ) {
                    h2 = V$1;
                    if (0 !== (h2.flags & 2048))
                      try {
                        switch (h2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Rj(9, h2);
                        }
                      } catch (na) {
                        W(h2, h2.return, na);
                      }
                    if (h2 === g) {
                      V$1 = null;
                      break b;
                    }
                    var F2 = h2.sibling;
                    if (null !== F2) {
                      F2.return = h2.return;
                      V$1 = F2;
                      break b;
                    }
                    V$1 = h2.return;
                  }
            }
            K = e2;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot)
              try {
                lc.onPostCommitFiberRoot(kc, a2);
              } catch (na) {
              }
            d2 = true;
          }
          return d2;
        } finally {
          C$1 = c2, pk.transition = b;
        }
      }
      return false;
    }
    function Yk(a2, b, c2) {
      b = Ki(c2, b);
      b = Oi(a2, b, 1);
      a2 = dh(a2, b, 1);
      b = L$3();
      null !== a2 && (Ac(a2, 1, b), Ek(a2, b));
    }
    function W(a2, b, c2) {
      if (3 === a2.tag)
        Yk(a2, a2, c2);
      else
        for (; null !== b; ) {
          if (3 === b.tag) {
            Yk(b, a2, c2);
            break;
          } else if (1 === b.tag) {
            var d2 = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
              a2 = Ki(c2, a2);
              a2 = Ri(b, a2, 1);
              b = dh(b, a2, 1);
              a2 = L$3();
              null !== b && (Ac(b, 1, a2), Ek(b, a2));
              break;
            }
          }
          b = b.return;
        }
    }
    function Ui(a2, b, c2) {
      var d2 = a2.pingCache;
      null !== d2 && d2.delete(b);
      b = L$3();
      a2.pingedLanes |= a2.suspendedLanes & c2;
      R === a2 && (Z & c2) === c2 && (4 === T$3 || 3 === T$3 && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a2, 0) : sk |= c2);
      Ek(a2, b);
    }
    function Zk(a2, b) {
      0 === b && (0 === (a2.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c2 = L$3();
      a2 = Zg(a2, b);
      null !== a2 && (Ac(a2, b, c2), Ek(a2, c2));
    }
    function vj(a2) {
      var b = a2.memoizedState, c2 = 0;
      null !== b && (c2 = b.retryLane);
      Zk(a2, c2);
    }
    function ck(a2, b) {
      var c2 = 0;
      switch (a2.tag) {
        case 13:
          var d2 = a2.stateNode;
          var e2 = a2.memoizedState;
          null !== e2 && (c2 = e2.retryLane);
          break;
        case 19:
          d2 = a2.stateNode;
          break;
        default:
          throw Error(p$6(314));
      }
      null !== d2 && d2.delete(b);
      Zk(a2, c2);
    }
    var Wk;
    Wk = function(a2, b, c2) {
      if (null !== a2)
        if (a2.memoizedProps !== b.pendingProps || Wf.current)
          Ug = true;
        else {
          if (0 === (a2.lanes & c2) && 0 === (b.flags & 128))
            return Ug = false, zj(a2, b, c2);
          Ug = 0 !== (a2.flags & 131072) ? true : false;
        }
      else
        Ug = false, I$3 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d2 = b.type;
          jj(a2, b);
          a2 = b.pendingProps;
          var e2 = Yf(b, H$1.current);
          Tg(b, c2);
          e2 = Xh(null, b, d2, a2, e2, c2);
          var f2 = bi();
          b.flags |= 1;
          "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d2) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b), e2.updater = nh, b.stateNode = e2, e2._reactInternals = b, rh(b, d2, a2, c2), b = kj(null, b, d2, true, f2, c2)) : (b.tag = 0, I$3 && f2 && vg(b), Yi(null, b, e2, c2), b = b.child);
          return b;
        case 16:
          d2 = b.elementType;
          a: {
            jj(a2, b);
            a2 = b.pendingProps;
            e2 = d2._init;
            d2 = e2(d2._payload);
            b.type = d2;
            e2 = b.tag = $k(d2);
            a2 = Lg(d2, a2);
            switch (e2) {
              case 0:
                b = dj(null, b, d2, a2, c2);
                break a;
              case 1:
                b = ij(null, b, d2, a2, c2);
                break a;
              case 11:
                b = Zi(null, b, d2, a2, c2);
                break a;
              case 14:
                b = aj(null, b, d2, Lg(d2.type, a2), c2);
                break a;
            }
            throw Error(p$6(
              306,
              d2,
              ""
            ));
          }
          return b;
        case 0:
          return d2 = b.type, e2 = b.pendingProps, e2 = b.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b, d2, e2, c2);
        case 1:
          return d2 = b.type, e2 = b.pendingProps, e2 = b.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b, d2, e2, c2);
        case 3:
          a: {
            lj(b);
            if (null === a2)
              throw Error(p$6(387));
            d2 = b.pendingProps;
            f2 = b.memoizedState;
            e2 = f2.element;
            bh(a2, b);
            gh(b, d2, null, c2);
            var g = b.memoizedState;
            d2 = g.element;
            if (f2.isDehydrated)
              if (f2 = { element: d2, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e2 = Ki(Error(p$6(423)), b);
                b = mj(a2, b, d2, c2, e2);
                break a;
              } else if (d2 !== e2) {
                e2 = Ki(Error(p$6(424)), b);
                b = mj(a2, b, d2, c2, e2);
                break a;
              } else
                for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I$3 = true, zg = null, c2 = Ch(b, null, d2, c2), b.child = c2; c2; )
                  c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
            else {
              Ig();
              if (d2 === e2) {
                b = $i(a2, b, c2);
                break a;
              }
              Yi(a2, b, d2, c2);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Kh(b), null === a2 && Eg(b), d2 = b.type, e2 = b.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g = e2.children, Ef(d2, e2) ? g = null : null !== f2 && Ef(d2, f2) && (b.flags |= 32), hj(a2, b), Yi(a2, b, g, c2), b.child;
        case 6:
          return null === a2 && Eg(b), null;
        case 13:
          return pj(a2, b, c2);
        case 4:
          return Ih(b, b.stateNode.containerInfo), d2 = b.pendingProps, null === a2 ? b.child = Bh(b, null, d2, c2) : Yi(a2, b, d2, c2), b.child;
        case 11:
          return d2 = b.type, e2 = b.pendingProps, e2 = b.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b, d2, e2, c2);
        case 7:
          return Yi(a2, b, b.pendingProps, c2), b.child;
        case 8:
          return Yi(a2, b, b.pendingProps.children, c2), b.child;
        case 12:
          return Yi(a2, b, b.pendingProps.children, c2), b.child;
        case 10:
          a: {
            d2 = b.type._context;
            e2 = b.pendingProps;
            f2 = b.memoizedProps;
            g = e2.value;
            G(Mg, d2._currentValue);
            d2._currentValue = g;
            if (null !== f2)
              if (He$2(f2.value, g)) {
                if (f2.children === e2.children && !Wf.current) {
                  b = $i(a2, b, c2);
                  break a;
                }
              } else
                for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                  var h2 = f2.dependencies;
                  if (null !== h2) {
                    g = f2.child;
                    for (var k2 = h2.firstContext; null !== k2; ) {
                      if (k2.context === d2) {
                        if (1 === f2.tag) {
                          k2 = ch(-1, c2 & -c2);
                          k2.tag = 2;
                          var l2 = f2.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var m2 = l2.pending;
                            null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                            l2.pending = k2;
                          }
                        }
                        f2.lanes |= c2;
                        k2 = f2.alternate;
                        null !== k2 && (k2.lanes |= c2);
                        Sg(
                          f2.return,
                          c2,
                          b
                        );
                        h2.lanes |= c2;
                        break;
                      }
                      k2 = k2.next;
                    }
                  } else if (10 === f2.tag)
                    g = f2.type === b.type ? null : f2.child;
                  else if (18 === f2.tag) {
                    g = f2.return;
                    if (null === g)
                      throw Error(p$6(341));
                    g.lanes |= c2;
                    h2 = g.alternate;
                    null !== h2 && (h2.lanes |= c2);
                    Sg(g, c2, b);
                    g = f2.sibling;
                  } else
                    g = f2.child;
                  if (null !== g)
                    g.return = f2;
                  else
                    for (g = f2; null !== g; ) {
                      if (g === b) {
                        g = null;
                        break;
                      }
                      f2 = g.sibling;
                      if (null !== f2) {
                        f2.return = g.return;
                        g = f2;
                        break;
                      }
                      g = g.return;
                    }
                  f2 = g;
                }
            Yi(a2, b, e2.children, c2);
            b = b.child;
          }
          return b;
        case 9:
          return e2 = b.type, d2 = b.pendingProps.children, Tg(b, c2), e2 = Vg(e2), d2 = d2(e2), b.flags |= 1, Yi(a2, b, d2, c2), b.child;
        case 14:
          return d2 = b.type, e2 = Lg(d2, b.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b, d2, e2, c2);
        case 15:
          return cj(a2, b, b.type, b.pendingProps, c2);
        case 17:
          return d2 = b.type, e2 = b.pendingProps, e2 = b.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b), b.tag = 1, Zf(d2) ? (a2 = true, cg(b)) : a2 = false, Tg(b, c2), ph(b, d2, e2), rh(b, d2, e2, c2), kj(null, b, d2, true, a2, c2);
        case 19:
          return yj(a2, b, c2);
        case 22:
          return ej(a2, b, c2);
      }
      throw Error(p$6(156, b.tag));
    };
    function Gk(a2, b) {
      return ac(a2, b);
    }
    function al(a2, b, c2, d2) {
      this.tag = a2;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a2, b, c2, d2) {
      return new al(a2, b, c2, d2);
    }
    function bj(a2) {
      a2 = a2.prototype;
      return !(!a2 || !a2.isReactComponent);
    }
    function $k(a2) {
      if ("function" === typeof a2)
        return bj(a2) ? 1 : 0;
      if (void 0 !== a2 && null !== a2) {
        a2 = a2.$$typeof;
        if (a2 === Da)
          return 11;
        if (a2 === Ga)
          return 14;
      }
      return 2;
    }
    function wh(a2, b) {
      var c2 = a2.alternate;
      null === c2 ? (c2 = Bg(a2.tag, b, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
      c2.flags = a2.flags & 14680064;
      c2.childLanes = a2.childLanes;
      c2.lanes = a2.lanes;
      c2.child = a2.child;
      c2.memoizedProps = a2.memoizedProps;
      c2.memoizedState = a2.memoizedState;
      c2.updateQueue = a2.updateQueue;
      b = a2.dependencies;
      c2.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c2.sibling = a2.sibling;
      c2.index = a2.index;
      c2.ref = a2.ref;
      return c2;
    }
    function yh(a2, b, c2, d2, e2, f2) {
      var g = 2;
      d2 = a2;
      if ("function" === typeof a2)
        bj(a2) && (g = 1);
      else if ("string" === typeof a2)
        g = 5;
      else
        a:
          switch (a2) {
            case ya:
              return Ah(c2.children, e2, f2, b);
            case za:
              g = 8;
              e2 |= 8;
              break;
            case Aa:
              return a2 = Bg(12, c2, b, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
            case Ea:
              return a2 = Bg(13, c2, b, e2), a2.elementType = Ea, a2.lanes = f2, a2;
            case Fa:
              return a2 = Bg(19, c2, b, e2), a2.elementType = Fa, a2.lanes = f2, a2;
            case Ia:
              return qj(c2, e2, f2, b);
            default:
              if ("object" === typeof a2 && null !== a2)
                switch (a2.$$typeof) {
                  case Ba:
                    g = 10;
                    break a;
                  case Ca:
                    g = 9;
                    break a;
                  case Da:
                    g = 11;
                    break a;
                  case Ga:
                    g = 14;
                    break a;
                  case Ha:
                    g = 16;
                    d2 = null;
                    break a;
                }
              throw Error(p$6(130, null == a2 ? a2 : typeof a2, ""));
          }
      b = Bg(g, c2, b, e2);
      b.elementType = a2;
      b.type = d2;
      b.lanes = f2;
      return b;
    }
    function Ah(a2, b, c2, d2) {
      a2 = Bg(7, a2, d2, b);
      a2.lanes = c2;
      return a2;
    }
    function qj(a2, b, c2, d2) {
      a2 = Bg(22, a2, d2, b);
      a2.elementType = Ia;
      a2.lanes = c2;
      a2.stateNode = { isHidden: false };
      return a2;
    }
    function xh(a2, b, c2) {
      a2 = Bg(6, a2, null, b);
      a2.lanes = c2;
      return a2;
    }
    function zh(a2, b, c2) {
      b = Bg(4, null !== a2.children ? a2.children : [], a2.key, b);
      b.lanes = c2;
      b.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
      return b;
    }
    function bl(a2, b, c2, d2, e2) {
      this.tag = b;
      this.containerInfo = a2;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e2;
      this.mutableSourceEagerHydrationData = null;
    }
    function cl(a2, b, c2, d2, e2, f2, g, h2, k2) {
      a2 = new bl(a2, b, c2, h2, k2);
      1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
      f2 = Bg(3, null, null, b);
      a2.current = f2;
      f2.stateNode = a2;
      f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      ah(f2);
      return a2;
    }
    function dl(a2, b, c2) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b, implementation: c2 };
    }
    function el(a2) {
      if (!a2)
        return Vf;
      a2 = a2._reactInternals;
      a: {
        if (Vb(a2) !== a2 || 1 !== a2.tag)
          throw Error(p$6(170));
        var b = a2;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p$6(171));
      }
      if (1 === a2.tag) {
        var c2 = a2.type;
        if (Zf(c2))
          return bg(a2, c2, b);
      }
      return b;
    }
    function fl(a2, b, c2, d2, e2, f2, g, h2, k2) {
      a2 = cl(c2, d2, true, a2, e2, f2, g, h2, k2);
      a2.context = el(null);
      c2 = a2.current;
      d2 = L$3();
      e2 = lh(c2);
      f2 = ch(d2, e2);
      f2.callback = void 0 !== b && null !== b ? b : null;
      dh(c2, f2, e2);
      a2.current.lanes = e2;
      Ac(a2, e2, d2);
      Ek(a2, d2);
      return a2;
    }
    function gl(a2, b, c2, d2) {
      var e2 = b.current, f2 = L$3(), g = lh(e2);
      c2 = el(c2);
      null === b.context ? b.context = c2 : b.pendingContext = c2;
      b = ch(f2, g);
      b.payload = { element: a2 };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b.callback = d2);
      a2 = dh(e2, b, g);
      null !== a2 && (mh(a2, e2, g, f2), eh(a2, e2, g));
      return g;
    }
    function hl(a2) {
      a2 = a2.current;
      if (!a2.child)
        return null;
      switch (a2.child.tag) {
        case 5:
          return a2.child.stateNode;
        default:
          return a2.child.stateNode;
      }
    }
    function il(a2, b) {
      a2 = a2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        var c2 = a2.retryLane;
        a2.retryLane = 0 !== c2 && c2 < b ? c2 : b;
      }
    }
    function jl(a2, b) {
      il(a2, b);
      (a2 = a2.alternate) && il(a2, b);
    }
    function kl() {
      return null;
    }
    var ll = "function" === typeof reportError ? reportError : function(a2) {
      console.error(a2);
    };
    function ml(a2) {
      this._internalRoot = a2;
    }
    nl.prototype.render = ml.prototype.render = function(a2) {
      var b = this._internalRoot;
      if (null === b)
        throw Error(p$6(409));
      gl(a2, b, null, null);
    };
    nl.prototype.unmount = ml.prototype.unmount = function() {
      var a2 = this._internalRoot;
      if (null !== a2) {
        this._internalRoot = null;
        var b = a2.containerInfo;
        Sk(function() {
          gl(null, a2, null, null);
        });
        b[uf] = null;
      }
    };
    function nl(a2) {
      this._internalRoot = a2;
    }
    nl.prototype.unstable_scheduleHydration = function(a2) {
      if (a2) {
        var b = Hc();
        a2 = { blockedOn: null, target: a2, priority: b };
        for (var c2 = 0; c2 < Qc.length && 0 !== b && b < Qc[c2].priority; c2++)
          ;
        Qc.splice(c2, 0, a2);
        0 === c2 && Vc(a2);
      }
    };
    function ol(a2) {
      return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
    }
    function pl(a2) {
      return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
    }
    function ql() {
    }
    function rl(a2, b, c2, d2, e2) {
      if (e2) {
        if ("function" === typeof d2) {
          var f2 = d2;
          d2 = function() {
            var a3 = hl(g);
            f2.call(a3);
          };
        }
        var g = fl(b, d2, a2, 0, null, false, false, "", ql);
        a2._reactRootContainer = g;
        a2[uf] = g.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        Sk();
        return g;
      }
      for (; e2 = a2.lastChild; )
        a2.removeChild(e2);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a3 = hl(k2);
          h2.call(a3);
        };
      }
      var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
      a2._reactRootContainer = k2;
      a2[uf] = k2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Sk(function() {
        gl(b, k2, c2, d2);
      });
      return k2;
    }
    function sl(a2, b, c2, d2, e2) {
      var f2 = c2._reactRootContainer;
      if (f2) {
        var g = f2;
        if ("function" === typeof e2) {
          var h2 = e2;
          e2 = function() {
            var a3 = hl(g);
            h2.call(a3);
          };
        }
        gl(b, g, a2, e2);
      } else
        g = rl(c2, b, a2, e2, d2);
      return hl(g);
    }
    Ec = function(a2) {
      switch (a2.tag) {
        case 3:
          var b = a2.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c2 = tc(b.pendingLanes);
            0 !== c2 && (Cc(b, c2 | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
          }
          break;
        case 13:
          Sk(function() {
            var b2 = Zg(a2, 1);
            if (null !== b2) {
              var c3 = L$3();
              mh(b2, a2, 1, c3);
            }
          }), jl(a2, 1);
      }
    };
    Fc = function(a2) {
      if (13 === a2.tag) {
        var b = Zg(a2, 134217728);
        if (null !== b) {
          var c2 = L$3();
          mh(b, a2, 134217728, c2);
        }
        jl(a2, 134217728);
      }
    };
    Gc = function(a2) {
      if (13 === a2.tag) {
        var b = lh(a2), c2 = Zg(a2, b);
        if (null !== c2) {
          var d2 = L$3();
          mh(c2, a2, b, d2);
        }
        jl(a2, b);
      }
    };
    Hc = function() {
      return C$1;
    };
    Ic = function(a2, b) {
      var c2 = C$1;
      try {
        return C$1 = a2, b();
      } finally {
        C$1 = c2;
      }
    };
    yb = function(a2, b, c2) {
      switch (b) {
        case "input":
          bb(a2, c2);
          b = c2.name;
          if ("radio" === c2.type && null != b) {
            for (c2 = a2; c2.parentNode; )
              c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c2.length; b++) {
              var d2 = c2[b];
              if (d2 !== a2 && d2.form === a2.form) {
                var e2 = Db(d2);
                if (!e2)
                  throw Error(p$6(90));
                Wa(d2);
                bb(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a2, c2);
          break;
        case "select":
          b = c2.value, null != b && fb(a2, !!c2.multiple, b, false);
      }
    };
    Gb = Rk;
    Hb = Sk;
    var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
    var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
      a2 = Zb(a2);
      return null === a2 ? null : a2.stateNode;
    }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wl.isDisabled && wl.supportsFiber)
        try {
          kc = wl.inject(vl), lc = wl;
        } catch (a2) {
        }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
    reactDom_production_min.createPortal = function(a2, b) {
      var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!ol(b))
        throw Error(p$6(200));
      return dl(a2, b, null, c2);
    };
    reactDom_production_min.createRoot = function(a2, b) {
      if (!ol(a2))
        throw Error(p$6(299));
      var c2 = false, d2 = "", e2 = ll;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c2 = true), void 0 !== b.identifierPrefix && (d2 = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
      b = cl(a2, 1, false, null, null, c2, false, d2, e2);
      a2[uf] = b.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      return new ml(b);
    };
    reactDom_production_min.findDOMNode = function(a2) {
      if (null == a2)
        return null;
      if (1 === a2.nodeType)
        return a2;
      var b = a2._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a2.render)
          throw Error(p$6(188));
        a2 = Object.keys(a2).join(",");
        throw Error(p$6(268, a2));
      }
      a2 = Zb(b);
      a2 = null === a2 ? null : a2.stateNode;
      return a2;
    };
    reactDom_production_min.flushSync = function(a2) {
      return Sk(a2);
    };
    reactDom_production_min.hydrate = function(a2, b, c2) {
      if (!pl(b))
        throw Error(p$6(200));
      return sl(null, a2, b, true, c2);
    };
    reactDom_production_min.hydrateRoot = function(a2, b, c2) {
      if (!ol(a2))
        throw Error(p$6(405));
      var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g = ll;
      null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g = c2.onRecoverableError));
      b = fl(b, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g);
      a2[uf] = b.current;
      sf(a2);
      if (d2)
        for (a2 = 0; a2 < d2.length; a2++)
          c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c2, e2] : b.mutableSourceEagerHydrationData.push(
            c2,
            e2
          );
      return new nl(b);
    };
    reactDom_production_min.render = function(a2, b, c2) {
      if (!pl(b))
        throw Error(p$6(200));
      return sl(null, a2, b, false, c2);
    };
    reactDom_production_min.unmountComponentAtNode = function(a2) {
      if (!pl(a2))
        throw Error(p$6(40));
      return a2._reactRootContainer ? (Sk(function() {
        sl(null, null, a2, false, function() {
          a2._reactRootContainer = null;
          a2[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Rk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b, c2, d2) {
      if (!pl(c2))
        throw Error(p$6(200));
      if (null == a2 || void 0 === a2._reactInternals)
        throw Error(p$6(38));
      return sl(a2, b, c2, false, d2);
    };
    reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
    (function(module2) {
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      {
        checkDCE();
        module2.exports = reactDom_production_min;
      }
    })(reactDom);
    const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDom.exports);
    var m$6 = reactDom.exports;
    {
      client.createRoot = m$6.createRoot;
      client.hydrateRoot = m$6.hydrateRoot;
    }
    /**
     * @remix-run/router v1.0.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }
    var Action;
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
    const PopStateEventType = "popstate";
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to) {
        return typeof to === "string" ? to : createPath(to);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location) {
      return {
        usr: location.state,
        key: location.key
      };
    }
    function createLocation(current, to, state, key) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends$1({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to === "string" ? parsePath(to) : to, {
        state,
        key: to && to.key || key || createKey()
      });
      return location;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = _ref;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#")
        pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener = null;
      function handlePop() {
        action = Action.Pop;
        if (listener) {
          listener({
            action,
            location: history.location
          });
        }
      }
      function push(to, state) {
        action = Action.Push;
        let location = createLocation(history.location, to, state);
        if (validateLocation)
          validateLocation(location, to);
        let historyState = getHistoryState(location);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location
          });
        }
      }
      function replace(to, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to, state);
        if (validateLocation)
          validateLocation(location, to);
        let historyState = getHistoryState(location);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({
            action,
            location
          });
        }
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to) {
          return createHref(window2, to);
        },
        push,
        replace,
        go(n2) {
          return globalHistory.go(n2);
        }
      };
      return history;
    }
    var ResultType;
    (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
    })(ResultType || (ResultType = {}));
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
        matches = matchRouteBranch(branches[i2], pathname);
      }
      return matches;
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      routes.forEach((route, index2) => {
        let meta = {
          relativePath: route.path || "",
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index2,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      });
      return branches;
    }
    function rankRouteBranches(branches) {
      branches.sort((a2, b) => a2.score !== b.score ? b.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
    }
    const paramRe = /^:\w+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s2) => s2 === "*";
    function computeScore(path, index2) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index2) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a2, b) {
      let siblings = a2.length === b.length && a2.slice(0, -1).every((n2, i2) => n2 === b[i2]);
      return siblings ? a2[a2.length - 1] - b[b.length - 1] : 0;
    }
    function matchRouteBranch(branch, pathname) {
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i2 = 0; i2 < routesMeta.length; ++i2) {
        let meta = routesMeta[i2];
        let end = i2 === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        if (!match)
          return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
          route
        });
        if (match.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
      }
      return matches;
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher2, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match = pathname.match(matcher2);
      if (!match)
        return null;
      let matchedPathname = match[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match.slice(1);
      let params = paramNames.reduce((memo, paramName, index2) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index2] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let paramNames = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_2, paramName) => {
        paramNames.push(paramName);
        return "([^\\/]+)";
      });
      if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else {
        regexpSource += end ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
      }
      let matcher2 = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher2, paramNames];
    }
    function safelyDecodeURIComponent(value, paramName) {
      try {
        return decodeURIComponent(value);
      } catch (error) {
        warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e2) {
        }
      }
    }
    function resolvePath(to, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to === "string" ? parsePath(to) : to;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1)
            segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to = typeof toArg === "string" ? parsePath(toArg) : _extends$1({}, toArg);
      let isEmptyPath = toArg === "" || to.pathname === "";
      let toPathname = isEmptyPath ? "/" : to.pathname;
      let from;
      if (isPathRelative || toPathname == null) {
        from = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to, from);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    class ErrorResponse {
      constructor(status, statusText, data) {
        this.status = status;
        this.statusText = statusText || "";
        this.data = data;
      }
    }
    function isRouteErrorResponse(e2) {
      return e2 instanceof ErrorResponse;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$4 = react.exports, k$1 = Symbol.for("react.element"), l$6 = Symbol.for("react.fragment"), m$5 = Object.prototype.hasOwnProperty, n$2 = f$4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$5 = { key: true, ref: true, __self: true, __source: true };
    function q(c2, a2, g) {
      var b, d2 = {}, e2 = null, h2 = null;
      void 0 !== g && (e2 = "" + g);
      void 0 !== a2.key && (e2 = "" + a2.key);
      void 0 !== a2.ref && (h2 = a2.ref);
      for (b in a2)
        m$5.call(a2, b) && !p$5.hasOwnProperty(b) && (d2[b] = a2[b]);
      if (c2 && c2.defaultProps)
        for (b in a2 = c2.defaultProps, a2)
          void 0 === d2[b] && (d2[b] = a2[b]);
      return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
    }
    reactJsxRuntime_production_min.Fragment = l$6;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    (function(module2) {
      {
        module2.exports = reactJsxRuntime_production_min;
      }
    })(jsxRuntime);
    const Fragment = jsxRuntime.exports.Fragment;
    const jsx = jsxRuntime.exports.jsx;
    const jsxs = jsxRuntime.exports.jsxs;
    /**
     * React Router v6.4.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function isPolyfill(x2, y2) {
      return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    const is = typeof Object.is === "function" ? Object.is : isPolyfill;
    const {
      useState,
      useEffect,
      useLayoutEffect,
      useDebugValue
    } = e$3;
    function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
      const value = getSnapshot();
      const [{
        inst
      }, forceUpdate] = useState({
        inst: {
          value,
          getSnapshot
        }
      });
      useLayoutEffect(() => {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
      }, [subscribe, value, getSnapshot]);
      useEffect(() => {
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
        const handleStoreChange = () => {
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({
              inst
            });
          }
        };
        return subscribe(handleStoreChange);
      }, [subscribe]);
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      const latestGetSnapshot = inst.getSnapshot;
      const prevValue = inst.value;
      try {
        const nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
      } catch (error) {
        return true;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
      return getSnapshot();
    }
    const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
    const isServerEnvironment = !canUseDOM;
    const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
    "useSyncExternalStore" in e$3 ? ((module2) => module2.useSyncExternalStore)(e$3) : shim;
    const DataStaticRouterContext = /* @__PURE__ */ react.exports.createContext(null);
    const DataRouterContext = /* @__PURE__ */ react.exports.createContext(null);
    const DataRouterStateContext = /* @__PURE__ */ react.exports.createContext(null);
    const NavigationContext = /* @__PURE__ */ react.exports.createContext(null);
    const LocationContext = /* @__PURE__ */ react.exports.createContext(null);
    const RouteContext = /* @__PURE__ */ react.exports.createContext({
      outlet: null,
      matches: []
    });
    const RouteErrorContext = /* @__PURE__ */ react.exports.createContext(null);
    function useHref(to, _temp) {
      let {
        relative
      } = _temp === void 0 ? {} : _temp;
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        basename,
        navigator: navigator2
      } = react.exports.useContext(NavigationContext);
      let {
        hash,
        pathname,
        search
      } = useResolvedPath(to, {
        relative
      });
      let joinedPathname = pathname;
      if (basename !== "/") {
        joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
      }
      return navigator2.createHref({
        pathname: joinedPathname,
        search,
        hash
      });
    }
    function useInRouterContext() {
      return react.exports.useContext(LocationContext) != null;
    }
    function useLocation() {
      !useInRouterContext() ? invariant(false) : void 0;
      return react.exports.useContext(LocationContext).location;
    }
    function useMatch(pattern) {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        pathname
      } = useLocation();
      return react.exports.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match, index2) => index2 === 0 || !match.route.index && match.pathnameBase !== matches[index2 - 1].pathnameBase);
    }
    function useNavigate() {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        basename,
        navigator: navigator2
      } = react.exports.useContext(NavigationContext);
      let {
        matches
      } = react.exports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
      let activeRef = react.exports.useRef(false);
      react.exports.useEffect(() => {
        activeRef.current = true;
      });
      let navigate = react.exports.useCallback(function(to, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to === "number") {
          navigator2.go(to);
          return;
        }
        let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        if (basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
      }, [basename, navigator2, routePathnamesJson, locationPathname]);
      return navigate;
    }
    function useResolvedPath(to, _temp2) {
      let {
        relative
      } = _temp2 === void 0 ? {} : _temp2;
      let {
        matches
      } = react.exports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
      return react.exports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
    }
    function useRoutes(routes, locationArg) {
      !useInRouterContext() ? invariant(false) : void 0;
      let dataRouterStateContext = react.exports.useContext(DataRouterStateContext);
      let {
        matches: parentMatches
      } = react.exports.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      routeMatch && routeMatch.route;
      let locationFromContext = useLocation();
      let location;
      if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
        location = parsedLocationArg;
      } else {
        location = locationFromContext;
      }
      let pathname = location.pathname || "/";
      let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
      let matches = matchRoutes(routes, {
        pathname: remainingPathname
      });
      let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([parentPathnameBase, match.pathname]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
      })), parentMatches, dataRouterStateContext || void 0);
      if (locationArg) {
        return /* @__PURE__ */ jsx(LocationContext.Provider, {
          value: {
            location: _extends({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location),
            navigationType: Action.Pop
          },
          children: renderedMatches
        });
      }
      return renderedMatches;
    }
    function DefaultErrorElement() {
      let error = useRouteError();
      let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
      };
      let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
      };
      return /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("h2", {
          children: "Unhandled Thrown Error!"
        }), /* @__PURE__ */ jsx("h3", {
          style: {
            fontStyle: "italic"
          },
          children: message
        }), stack ? /* @__PURE__ */ jsx("pre", {
          style: preStyles,
          children: stack
        }) : null, /* @__PURE__ */ jsx("p", {
          children: "\u{1F4BF} Hey developer \u{1F44B}"
        }), /* @__PURE__ */ jsxs("p", {
          children: ["You can provide a way better UX than this when your app throws errors by providing your own\xA0", /* @__PURE__ */ jsx("code", {
            style: codeStyles,
            children: "errorElement"
          }), " props on\xA0", /* @__PURE__ */ jsx("code", {
            style: codeStyles,
            children: "<Route>"
          })]
        })]
      });
    }
    class RenderErrorBoundary extends react.exports.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
          return {
            error: props.error,
            location: props.location
          };
        }
        return {
          error: props.error || state.error,
          location: state.location
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error ? /* @__PURE__ */ jsx(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        }) : this.props.children;
      }
    }
    function RenderedRoute(_ref) {
      let {
        routeContext,
        match,
        children: children2
      } = _ref;
      let dataStaticRouterContext = react.exports.useContext(DataStaticRouterContext);
      if (dataStaticRouterContext && match.route.errorElement) {
        dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
      }
      return /* @__PURE__ */ jsx(RouteContext.Provider, {
        value: routeContext,
        children: children2
      });
    }
    function _renderMatches(matches, parentMatches, dataRouterState) {
      if (parentMatches === void 0) {
        parentMatches = [];
      }
      if (matches == null) {
        if (dataRouterState != null && dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
        !(errorIndex >= 0) ? invariant(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
      }
      return renderedMatches.reduceRight((outlet, match, index2) => {
        let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
        let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ jsx(DefaultErrorElement, {}) : null;
        let getChildren = () => /* @__PURE__ */ jsx(RenderedRoute, {
          match,
          routeContext: {
            outlet,
            matches: parentMatches.concat(renderedMatches.slice(0, index2 + 1))
          },
          children: error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet
        });
        return dataRouterState && (match.route.errorElement || index2 === 0) ? /* @__PURE__ */ jsx(RenderErrorBoundary, {
          location: dataRouterState.location,
          component: errorElement,
          error,
          children: getChildren()
        }) : getChildren();
      }, null);
    }
    var DataRouterHook;
    (function(DataRouterHook2) {
      DataRouterHook2["UseLoaderData"] = "useLoaderData";
      DataRouterHook2["UseActionData"] = "useActionData";
      DataRouterHook2["UseRouteError"] = "useRouteError";
      DataRouterHook2["UseNavigation"] = "useNavigation";
      DataRouterHook2["UseRouteLoaderData"] = "useRouteLoaderData";
      DataRouterHook2["UseMatches"] = "useMatches";
      DataRouterHook2["UseRevalidator"] = "useRevalidator";
    })(DataRouterHook || (DataRouterHook = {}));
    function useDataRouterState(hookName) {
      let state = react.exports.useContext(DataRouterStateContext);
      !state ? invariant(false) : void 0;
      return state;
    }
    function useRouteError() {
      var _state$errors;
      let error = react.exports.useContext(RouteErrorContext);
      let state = useDataRouterState(DataRouterHook.UseRouteError);
      let route = react.exports.useContext(RouteContext);
      let thisRoute = route.matches[route.matches.length - 1];
      if (error) {
        return error;
      }
      !route ? invariant(false) : void 0;
      !thisRoute.route.id ? invariant(false) : void 0;
      return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
    }
    function Route(_props) {
      invariant(false);
    }
    function Router(_ref4) {
      let {
        basename: basenameProp = "/",
        children: children2 = null,
        location: locationProp,
        navigationType = Action.Pop,
        navigator: navigator2,
        static: staticProp = false
      } = _ref4;
      !!useInRouterContext() ? invariant(false) : void 0;
      let basename = basenameProp.replace(/^\/*/, "/");
      let navigationContext = react.exports.useMemo(() => ({
        basename,
        navigator: navigator2,
        static: staticProp
      }), [basename, navigator2, staticProp]);
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash = "",
        state = null,
        key = "default"
      } = locationProp;
      let location = react.exports.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) {
          return null;
        }
        return {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key
        };
      }, [basename, pathname, search, hash, state, key]);
      if (location == null) {
        return null;
      }
      return /* @__PURE__ */ jsx(NavigationContext.Provider, {
        value: navigationContext,
        children: /* @__PURE__ */ jsx(LocationContext.Provider, {
          children: children2,
          value: {
            location,
            navigationType
          }
        })
      });
    }
    function Routes(_ref5) {
      let {
        children: children2,
        location
      } = _ref5;
      let dataRouterContext = react.exports.useContext(DataRouterContext);
      let routes = dataRouterContext && !children2 ? dataRouterContext.router.routes : createRoutesFromChildren(children2);
      return useRoutes(routes, location);
    }
    var AwaitRenderStatus;
    (function(AwaitRenderStatus2) {
      AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
      AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
      AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
    })(AwaitRenderStatus || (AwaitRenderStatus = {}));
    new Promise(() => {
    });
    function createRoutesFromChildren(children2, parentPath) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      let routes = [];
      react.exports.Children.forEach(children2, (element, index2) => {
        if (!/* @__PURE__ */ react.exports.isValidElement(element)) {
          return;
        }
        if (element.type === react.exports.Fragment) {
          routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
          return;
        }
        !(element.type === Route) ? invariant(false) : void 0;
        let treePath = [...parentPath, index2];
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          errorElement: element.props.errorElement,
          hasErrorBoundary: element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
      });
      return routes;
    }
    /**
     * React Router DOM v6.4.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _objectWithoutPropertiesLoose$2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function isModifiedEvent(event) {
      return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    }
    function shouldProcessLinkClick(event, target) {
      return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
    }
    function createSearchParams(init2) {
      if (init2 === void 0) {
        init2 = "";
      }
      return new URLSearchParams(typeof init2 === "string" || Array.isArray(init2) || init2 instanceof URLSearchParams ? init2 : Object.keys(init2).reduce((memo, key) => {
        let value = init2[key];
        return memo.concat(Array.isArray(value) ? value.map((v2) => [key, v2]) : [[key, value]]);
      }, []));
    }
    function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
      let searchParams = createSearchParams(locationSearch);
      for (let key of defaultSearchParams.keys()) {
        if (!searchParams.has(key)) {
          defaultSearchParams.getAll(key).forEach((value) => {
            searchParams.append(key, value);
          });
        }
      }
      return searchParams;
    }
    const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    function BrowserRouter(_ref) {
      let {
        basename,
        children: children2,
        window: window2
      } = _ref;
      let historyRef = react.exports.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
          window: window2,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setState] = react.exports.useState({
        action: history.action,
        location: history.location
      });
      react.exports.useLayoutEffect(() => history.listen(setState), [history]);
      return /* @__PURE__ */ jsx(Router, {
        basename,
        children: children2,
        location: state.location,
        navigationType: state.action,
        navigator: history
      });
    }
    const Link = /* @__PURE__ */ react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
      let {
        onClick,
        relative,
        reloadDocument,
        replace,
        state,
        target,
        to,
        preventScrollReset
      } = _ref4, rest = _objectWithoutPropertiesLoose$2(_ref4, _excluded);
      let href = useHref(to, {
        relative
      });
      let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
        preventScrollReset,
        relative
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      return /* @__PURE__ */ jsx("a", {
        ...rest,
        href,
        onClick: reloadDocument ? onClick : handleClick,
        ref,
        target
      });
    });
    const NavLink = /* @__PURE__ */ react.exports.forwardRef(function NavLinkWithRef(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        children: children2
      } = _ref5, rest = _objectWithoutPropertiesLoose$2(_ref5, _excluded2);
      let path = useResolvedPath(to);
      let match = useMatch({
        path: path.pathname,
        end,
        caseSensitive
      });
      let routerState = react.exports.useContext(DataRouterStateContext);
      let nextLocation = routerState == null ? void 0 : routerState.navigation.location;
      let nextPath = useResolvedPath(nextLocation || "");
      let nextMatch = react.exports.useMemo(() => nextLocation ? matchPath({
        path: path.pathname,
        end,
        caseSensitive
      }, nextPath.pathname) : null, [nextLocation, path.pathname, caseSensitive, end, nextPath.pathname]);
      let isPending = nextMatch != null;
      let isActive = match != null;
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp({
          isActive,
          isPending
        });
      } else {
        className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
      }
      let style2 = typeof styleProp === "function" ? styleProp({
        isActive,
        isPending
      }) : styleProp;
      return /* @__PURE__ */ jsx(Link, {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style: style2,
        to,
        children: typeof children2 === "function" ? children2({
          isActive,
          isPending
        }) : children2
      });
    });
    function useLinkClickHandler(to, _temp) {
      let {
        target,
        replace: replaceProp,
        state,
        preventScrollReset,
        relative
      } = _temp === void 0 ? {} : _temp;
      let navigate = useNavigate();
      let location = useLocation();
      let path = useResolvedPath(to, {
        relative
      });
      return react.exports.useCallback((event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          navigate(to, {
            replace,
            state,
            preventScrollReset,
            relative
          });
        }
      }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
    }
    function useSearchParams(defaultInit) {
      let defaultSearchParamsRef = react.exports.useRef(createSearchParams(defaultInit));
      let location = useLocation();
      let searchParams = react.exports.useMemo(() => getSearchParamsForLocation(location.search, defaultSearchParamsRef.current), [location.search]);
      let navigate = useNavigate();
      let setSearchParams = react.exports.useCallback((nextInit, navigateOptions) => {
        const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        navigate("?" + newSearchParams, navigateOptions);
      }, [navigate, searchParams]);
      return [searchParams, setSearchParams];
    }
    const style = "";
    function SidebarLinkGroup({
      children: children2,
      activecondition
    }) {
      const [open, setOpen] = react.exports.useState(activecondition);
      const handleClick = () => {
        setOpen(!open);
      };
      return /* @__PURE__ */ jsx("li", {
        className: `px-2 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && "bg-gray-900"}`,
        children: children2(handleClick, open)
      });
    }
    function BoltIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ jsxs("svg", {
        ...Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": "true",
          ref: svgRef,
          "aria-labelledby": titleId
        }, props),
        children: [title ? /* @__PURE__ */ jsx("title", {
          id: titleId,
          children: title
        }) : null, /* @__PURE__ */ jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        })]
      });
    }
    const ForwardRef$3 = react.exports.forwardRef(BoltIcon);
    const BoltIcon$1 = ForwardRef$3;
    function ServerStackIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ jsxs("svg", {
        ...Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": "true",
          ref: svgRef,
          "aria-labelledby": titleId
        }, props),
        children: [title ? /* @__PURE__ */ jsx("title", {
          id: titleId,
          children: title
        }) : null, /* @__PURE__ */ jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        })]
      });
    }
    const ForwardRef$2 = react.exports.forwardRef(ServerStackIcon);
    const ServerStackIcon$1 = ForwardRef$2;
    function SquaresPlusIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ jsxs("svg", {
        ...Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": "true",
          ref: svgRef,
          "aria-labelledby": titleId
        }, props),
        children: [title ? /* @__PURE__ */ jsx("title", {
          id: titleId,
          children: title
        }) : null, /* @__PURE__ */ jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
        })]
      });
    }
    const ForwardRef$1 = react.exports.forwardRef(SquaresPlusIcon);
    const SquaresPlusIcon$1 = ForwardRef$1;
    function XMarkIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ jsxs("svg", {
        ...Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": "true",
          ref: svgRef,
          "aria-labelledby": titleId
        }, props),
        children: [title ? /* @__PURE__ */ jsx("title", {
          id: titleId,
          children: title
        }) : null, /* @__PURE__ */ jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 18L18 6M6 6l12 12"
        })]
      });
    }
    const ForwardRef = react.exports.forwardRef(XMarkIcon);
    const XMarkIcon$1 = ForwardRef;
    const CompanyLogo = "/assets/logo_ajbell_white.adaaf8f5.svg";
    function Sidebar({
      sidebarOpen,
      setSidebarOpen
    }) {
      const location = useLocation();
      const {
        pathname
      } = location;
      const trigger = react.exports.useRef(null);
      const sidebar = react.exports.useRef(null);
      const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
      const [sidebarExpanded, setSidebarExpanded] = react.exports.useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");
      react.exports.useEffect(() => {
        const clickHandler = ({
          target
        }) => {
          if (!sidebar.current || !trigger.current)
            return;
          if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
            return;
          setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
      });
      react.exports.useEffect(() => {
        const keyHandler = ({
          keyCode
        }) => {
          if (!sidebarOpen || keyCode !== 27)
            return;
          setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
      });
      react.exports.useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded);
        if (sidebarExpanded) {
          document.querySelector("body").classList.add("sidebar-expanded");
        } else {
          document.querySelector("body").classList.remove("sidebar-expanded");
        }
      }, [sidebarExpanded]);
      return /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("div", {
          className: `fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
          "aria-hidden": "true"
        }), /* @__PURE__ */ jsxs("div", {
          id: "sidebar",
          ref: sidebar,
          className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-900 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`,
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex justify-between pr-3 mb-10 sm:px-2",
            children: [/* @__PURE__ */ jsxs("button", {
              ref: trigger,
              className: "lg:hidden text-slate-500 hover:text-gray-300",
              onClick: () => setSidebarOpen(!sidebarOpen),
              "aria-controls": "sidebar",
              "aria-expanded": sidebarOpen,
              children: [/* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Close sidebar"
              }), /* @__PURE__ */ jsx("svg", {
                className: "w-6 h-6 fill-current",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("path", {
                  d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
                })
              })]
            }), /* @__PURE__ */ jsx(NavLink, {
              reloadDocument: true,
              end: true,
              to: "/",
              className: "block",
              children: /* @__PURE__ */ jsx("img", {
                src: CompanyLogo,
                width: "160",
                height: "80",
                alt: "Company Logo"
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "space-y-8",
            children: /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsxs("h3", {
                className: "pl-3 text-sm font-semibold text-white uppercase",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "hidden w-6 text-center text-gray-900 lg:block lg:sidebar-expanded:hidden 2xl:hidden",
                  "aria-hidden": "true",
                  children: "\u2022"
                }), /* @__PURE__ */ jsx("span", {
                  className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                  children: "Trading Platform Dashboard"
                })]
              }), /* @__PURE__ */ jsxs("ul", {
                className: "mt-3",
                children: [/* @__PURE__ */ jsx(SidebarLinkGroup, {
                  activecondition: pathname === "/" || pathname.includes("platform"),
                  children: (handleClick, open) => {
                    return /* @__PURE__ */ jsxs(React.Fragment, {
                      children: [/* @__PURE__ */ jsx("a", {
                        href: "#0",
                        className: `block text-white hover:text-red-300 truncate transition duration-150 ${(pathname === "/" || pathname.includes("platform")) && "hover:text-red-300"}`,
                        onClick: (e2) => {
                          e2.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        },
                        children: /* @__PURE__ */ jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [/* @__PURE__ */ jsxs("div", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsx(ServerStackIcon$1, {
                              className: "bg-gray-900 rounded-full",
                              width: "32",
                              height: "32",
                              alt: "Infrastructure"
                            }), /* @__PURE__ */ jsx("span", {
                              className: "ml-2 text-sm font-bold duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                              children: "Infrastructure"
                            })]
                          }), /* @__PURE__ */ jsx("div", {
                            className: "flex ml-2 shrink-0",
                            children: /* @__PURE__ */ jsx("svg", {
                              className: `w-3 h-3 shrink-0 ml-1 fill-current text-gray-300 ${open && "rotate-180"}`,
                              viewBox: "0 0 12 12",
                              children: /* @__PURE__ */ jsx("path", {
                                d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                              })
                            })
                          })]
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                        children: /* @__PURE__ */ jsxs("ul", {
                          className: `pl-10 mt-1 ${!open && "hidden"}`,
                          children: [/* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/",
                              className: "block text-white truncate transition duration-150 hover:text-red-300",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Service map"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/platform/ibmi?targetHost=AJBCOPY",
                              className: "block text-white truncate transition duration-150 hover:text-red-300",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "IBM i"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/platform/serverlinux?targetHost=localhost",
                              className: "block text-white truncate transition duration-150 hover:text-red-300",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Linux servers"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/platform/example",
                              className: "block text-white truncate transition duration-150 hover:text-red-300",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Windows servers"
                              })
                            })
                          })]
                        })
                      })]
                    });
                  }
                }), /* @__PURE__ */ jsx(SidebarLinkGroup, {
                  activecondition: pathname.includes("platform"),
                  children: (handleClick, open) => {
                    return /* @__PURE__ */ jsxs(React.Fragment, {
                      children: [/* @__PURE__ */ jsx("a", {
                        href: "#0",
                        className: `block text-gray-300 hover:text-white truncate transition duration-150 ${pathname.includes("activity") && "hover:text-gray-200"}`,
                        onClick: (e2) => {
                          e2.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(false);
                        },
                        children: /* @__PURE__ */ jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [/* @__PURE__ */ jsxs("div", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsx(BoltIcon$1, {
                              className: "bg-gray-900 rounded-full",
                              width: "32",
                              height: "32",
                              alt: "Activity"
                            }), /* @__PURE__ */ jsx("span", {
                              className: "ml-2 text-sm font-bold duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                              children: "Business Activity"
                            })]
                          }), /* @__PURE__ */ jsx("div", {
                            className: "flex ml-2 shrink-0",
                            children: /* @__PURE__ */ jsx("svg", {
                              className: `w-3 h-3 shrink-0 ml-1 fill-current text-gray-300 ${open && "rotate-180"}`,
                              viewBox: "0 0 12 12",
                              children: /* @__PURE__ */ jsx("path", {
                                d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                              })
                            })
                          })]
                        })
                      }), /* @__PURE__ */ jsx("div", {
                        className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                        children: /* @__PURE__ */ jsxs("ul", {
                          className: `pl-10 mt-1 ${!open && "hidden"}`,
                          children: [/* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/",
                              className: "block text-gray-300 truncate transition duration-150 hover:text-white",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Summary"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/",
                              className: "block text-gray-300 truncate transition duration-150 hover:text-white",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "APIs"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/",
                              className: "block text-gray-300 truncate transition duration-150 hover:text-white",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Trading"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/",
                              className: "block text-gray-300 truncate transition duration-150 hover:text-white",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Cash in"
                              })
                            })
                          }), /* @__PURE__ */ jsx("li", {
                            className: "mb-1 last:mb-0",
                            children: /* @__PURE__ */ jsx(NavLink, {
                              reloadDocument: true,
                              end: true,
                              to: "/",
                              className: "block text-gray-300 truncate transition duration-150 hover:text-white",
                              children: /* @__PURE__ */ jsx("span", {
                                className: "text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                                children: "Cash out"
                              })
                            })
                          })]
                        })
                      })]
                    });
                  }
                }), /* @__PURE__ */ jsx("li", {
                  className: `px-2 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("more") && "bg-gray-900"}`,
                  children: /* @__PURE__ */ jsx(NavLink, {
                    reloadDocument: true,
                    end: true,
                    to: "/",
                    className: `block text-gray-300 hover:text-white truncate transition duration-150 ${pathname.includes("more") && "hover:text-gray-200"}`,
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsx(SquaresPlusIcon$1, {
                        className: "bg-gray-900 rounded-full",
                        width: "32",
                        height: "32",
                        alt: "More"
                      }), /* @__PURE__ */ jsx("span", {
                        className: "ml-2 text-sm font-bold duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100",
                        children: "More ..."
                      })]
                    })
                  })
                })]
              })]
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden",
            children: /* @__PURE__ */ jsx("div", {
              className: "px-3 py-2",
              children: /* @__PURE__ */ jsxs("button", {
                onClick: () => setSidebarExpanded(!sidebarExpanded),
                children: [/* @__PURE__ */ jsx("span", {
                  className: "sr-only",
                  children: "Expand / collapse sidebar"
                }), /* @__PURE__ */ jsxs("svg", {
                  className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
                  viewBox: "0 0 24 24",
                  children: [/* @__PURE__ */ jsx("path", {
                    className: "text-gray-300",
                    d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                  }), /* @__PURE__ */ jsx("path", {
                    className: "text-slate-600",
                    d: "M3 23H1V1h2z"
                  })]
                })]
              })
            })
          })]
        })]
      });
    }
    function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _setPrototypeOf$1(o2, p2) {
      _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
        o3.__proto__ = p3;
        return o3;
      };
      return _setPrototypeOf$1(o2, p2);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf$1(subClass, superClass);
    }
    var propTypes = { exports: {} };
    var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    var factoryWithThrowingShims = function() {
      function shim2(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      shim2.isRequired = shim2;
      function getShim() {
        return shim2;
      }
      var ReactPropTypes = {
        array: shim2,
        bigint: shim2,
        bool: shim2,
        func: shim2,
        number: shim2,
        object: shim2,
        string: shim2,
        symbol: shim2,
        any: shim2,
        arrayOf: getShim,
        element: shim2,
        elementType: shim2,
        instanceOf: getShim,
        node: shim2,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    {
      propTypes.exports = factoryWithThrowingShims();
    }
    function hasClass(element, className) {
      if (element.classList)
        return !!className && element.classList.contains(className);
      return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }
    function addClass(element, className) {
      if (element.classList)
        element.classList.add(className);
      else if (!hasClass(element, className))
        if (typeof element.className === "string")
          element.className = element.className + " " + className;
        else
          element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
    function replaceClassName(origClass, classToRemove) {
      return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    function removeClass$1(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (typeof element.className === "string") {
        element.className = replaceClassName(element.className, className);
      } else {
        element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
      }
    }
    const config = {
      disabled: false
    };
    const TransitionGroupContext = React.createContext(null);
    var forceReflow = function forceReflow2(node) {
      return node.scrollTop;
    };
    var UNMOUNTED = "unmounted";
    var EXITED = "exited";
    var ENTERING = "entering";
    var ENTERED = "entered";
    var EXITING = "exiting";
    var Transition$2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(Transition2, _React$Component);
      function Transition2(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context;
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }
        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }
      Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }
        return null;
      };
      var _proto = Transition2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }
        this.updateStatus(false, nextStatus);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };
      _proto.getTimeouts = function getTimeouts() {
        var timeout2 = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout2;
        if (timeout2 != null && typeof timeout2 !== "number") {
          exit = timeout2.exit;
          enter = timeout2.enter;
          appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
        }
        return {
          exit,
          enter,
          appear
        };
      };
      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }
        if (nextStatus !== null) {
          this.cancelNextCallback();
          if (nextStatus === ENTERING) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
              if (node)
                forceReflow(node);
            }
            this.performEnter(mounting);
          } else {
            this.performExit();
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };
      _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if (!mounting && !enter || config.disabled) {
          this.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
          status: ENTERING
        }, function() {
          _this2.props.onEntering(maybeNode, maybeAppearing);
          _this2.onTransitionEnd(enterTimeout, function() {
            _this2.safeSetState({
              status: ENTERED
            }, function() {
              _this2.props.onEntered(maybeNode, maybeAppearing);
            });
          });
        });
      };
      _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
        if (!exit || config.disabled) {
          this.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(maybeNode);
          });
          return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
          status: EXITING
        }, function() {
          _this3.props.onExiting(maybeNode);
          _this3.onTransitionEnd(timeouts.exit, function() {
            _this3.safeSetState({
              status: EXITED
            }, function() {
              _this3.props.onExited(maybeNode);
            });
          });
        });
      };
      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };
      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };
        this.nextCallback.cancel = function() {
          active = false;
        };
        return this.nextCallback;
      };
      _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
          this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout2 != null) {
          setTimeout(this.nextCallback, timeout2);
        }
      };
      _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
          return null;
        }
        var _this$props = this.props, children2 = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return /* @__PURE__ */ jsx(TransitionGroupContext.Provider, {
          value: null,
          children: typeof children2 === "function" ? children2(status, childProps) : React.cloneElement(React.Children.only(children2), childProps)
        });
      };
      return Transition2;
    }(React.Component);
    Transition$2.contextType = TransitionGroupContext;
    Transition$2.propTypes = {};
    function noop$1() {
    }
    Transition$2.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop$1,
      onEntering: noop$1,
      onEntered: noop$1,
      onExit: noop$1,
      onExiting: noop$1,
      onExited: noop$1
    };
    Transition$2.UNMOUNTED = UNMOUNTED;
    Transition$2.EXITED = EXITED;
    Transition$2.ENTERING = ENTERING;
    Transition$2.ENTERED = ENTERED;
    Transition$2.EXITING = EXITING;
    const Transition$3 = Transition$2;
    var _addClass = function addClass$1(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c2) {
        return addClass(node, c2);
      });
    };
    var removeClass = function removeClass2(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c2) {
        return removeClass$1(node, c2);
      });
    };
    var CSSTransition$1 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(CSSTransition2, _React$Component);
      function CSSTransition2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.appliedClasses = {
          appear: {},
          enter: {},
          exit: {}
        };
        _this.onEnter = function(maybeNode, maybeAppearing) {
          var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
          _this.removeClasses(node, "exit");
          _this.addClass(node, appearing ? "appear" : "enter", "base");
          if (_this.props.onEnter) {
            _this.props.onEnter(maybeNode, maybeAppearing);
          }
        };
        _this.onEntering = function(maybeNode, maybeAppearing) {
          var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
          var type = appearing ? "appear" : "enter";
          _this.addClass(node, type, "active");
          if (_this.props.onEntering) {
            _this.props.onEntering(maybeNode, maybeAppearing);
          }
        };
        _this.onEntered = function(maybeNode, maybeAppearing) {
          var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
          var type = appearing ? "appear" : "enter";
          _this.removeClasses(node, type);
          _this.addClass(node, type, "done");
          if (_this.props.onEntered) {
            _this.props.onEntered(maybeNode, maybeAppearing);
          }
        };
        _this.onExit = function(maybeNode) {
          var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
          _this.removeClasses(node, "appear");
          _this.removeClasses(node, "enter");
          _this.addClass(node, "exit", "base");
          if (_this.props.onExit) {
            _this.props.onExit(maybeNode);
          }
        };
        _this.onExiting = function(maybeNode) {
          var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
          _this.addClass(node, "exit", "active");
          if (_this.props.onExiting) {
            _this.props.onExiting(maybeNode);
          }
        };
        _this.onExited = function(maybeNode) {
          var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
          _this.removeClasses(node, "exit");
          _this.addClass(node, "exit", "done");
          if (_this.props.onExited) {
            _this.props.onExited(maybeNode);
          }
        };
        _this.resolveArguments = function(maybeNode, maybeAppearing) {
          return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
        };
        _this.getClassNames = function(type) {
          var classNames = _this.props.classNames;
          var isStringClassNames = typeof classNames === "string";
          var prefix = isStringClassNames && classNames ? classNames + "-" : "";
          var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
          var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
          var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
          return {
            baseClassName,
            activeClassName,
            doneClassName
          };
        };
        return _this;
      }
      var _proto = CSSTransition2.prototype;
      _proto.addClass = function addClass2(node, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];
        var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
        if (type === "appear" && phase === "done" && doneClassName) {
          className += " " + doneClassName;
        }
        if (phase === "active") {
          if (node)
            forceReflow(node);
        }
        if (className) {
          this.appliedClasses[type][phase] = className;
          _addClass(node, className);
        }
      };
      _proto.removeClasses = function removeClasses(node, type) {
        var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};
        if (baseClassName) {
          removeClass(node, baseClassName);
        }
        if (activeClassName) {
          removeClass(node, activeClassName);
        }
        if (doneClassName) {
          removeClass(node, doneClassName);
        }
      };
      _proto.render = function render() {
        var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose$1(_this$props, ["classNames"]);
        return /* @__PURE__ */ jsx(Transition$3, {
          ...props,
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        });
      };
      return CSSTransition2;
    }(React.Component);
    CSSTransition$1.defaultProps = {
      classNames: ""
    };
    CSSTransition$1.propTypes = {};
    const ReactCSSTransition = CSSTransition$1;
    const TransitionContext = React.createContext({
      parent: {}
    });
    function useIsInitialRender() {
      const isInitialRender = react.exports.useRef(true);
      react.exports.useEffect(() => {
        isInitialRender.current = false;
      }, []);
      return isInitialRender.current;
    }
    function CSSTransition({
      show,
      enter = "",
      enterStart = "",
      enterEnd = "",
      leave = "",
      leaveStart = "",
      leaveEnd = "",
      appear,
      unmountOnExit,
      tag = "div",
      children: children2,
      ...rest
    }) {
      const enterClasses = enter.split(" ").filter((s2) => s2.length);
      const enterStartClasses = enterStart.split(" ").filter((s2) => s2.length);
      const enterEndClasses = enterEnd.split(" ").filter((s2) => s2.length);
      const leaveClasses = leave.split(" ").filter((s2) => s2.length);
      const leaveStartClasses = leaveStart.split(" ").filter((s2) => s2.length);
      const leaveEndClasses = leaveEnd.split(" ").filter((s2) => s2.length);
      const removeFromDom = unmountOnExit;
      function addClasses(node, classes) {
        classes.length && node.classList.add(...classes);
      }
      function removeClasses(node, classes) {
        classes.length && node.classList.remove(...classes);
      }
      const nodeRef = React.useRef(null);
      const Component = tag;
      return /* @__PURE__ */ jsx(ReactCSSTransition, {
        appear,
        nodeRef,
        unmountOnExit: removeFromDom,
        in: show,
        addEndListener: (done) => {
          nodeRef.current.addEventListener("transitionend", done, false);
        },
        onEnter: () => {
          if (!removeFromDom)
            nodeRef.current.style.display = null;
          addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
        },
        onEntering: () => {
          removeClasses(nodeRef.current, enterStartClasses);
          addClasses(nodeRef.current, enterEndClasses);
        },
        onEntered: () => {
          removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
        },
        onExit: () => {
          addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
        },
        onExiting: () => {
          removeClasses(nodeRef.current, leaveStartClasses);
          addClasses(nodeRef.current, leaveEndClasses);
        },
        onExited: () => {
          removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
          if (!removeFromDom)
            nodeRef.current.style.display = "none";
        },
        children: /* @__PURE__ */ jsx(Component, {
          ref: nodeRef,
          ...rest,
          style: {
            display: !removeFromDom ? "none" : null
          },
          children: children2
        })
      });
    }
    function Transition$1({
      show,
      appear,
      ...rest
    }) {
      const {
        parent
      } = react.exports.useContext(TransitionContext);
      const isInitialRender = useIsInitialRender();
      const isChild = show === void 0;
      if (isChild) {
        return /* @__PURE__ */ jsx(CSSTransition, {
          appear: parent.appear || !parent.isInitialRender,
          show: parent.show,
          ...rest
        });
      }
      return /* @__PURE__ */ jsx(TransitionContext.Provider, {
        value: {
          parent: {
            show,
            isInitialRender,
            appear
          }
        },
        children: /* @__PURE__ */ jsx(CSSTransition, {
          appear,
          show,
          ...rest
        })
      });
    }
    const HelpIcon = "/assets/circle-question-regular-red.e2da96bf.svg";
    function Help() {
      const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
      const trigger = react.exports.useRef(null);
      const dropdown = react.exports.useRef(null);
      react.exports.useEffect(() => {
        const clickHandler = ({
          target
        }) => {
          if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
            return;
          setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
      });
      react.exports.useEffect(() => {
        const keyHandler = ({
          keyCode
        }) => {
          if (!dropdownOpen || keyCode !== 27)
            return;
          setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
      });
      return /* @__PURE__ */ jsxs("div", {
        className: "relative inline-flex items-center h-16 pr-4 ml-0 bg-red-900",
        children: [/* @__PURE__ */ jsxs("button", {
          ref: trigger,
          className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
          "aria-haspopup": "true",
          onClick: () => setDropdownOpen(!dropdownOpen),
          "aria-expanded": dropdownOpen,
          children: [/* @__PURE__ */ jsx("span", {
            className: "sr-only",
            children: "Need help?"
          }), /* @__PURE__ */ jsx("img", {
            className: "w-8 h-8 bg-white rounded-full",
            src: HelpIcon,
            width: "32",
            height: "32",
            alt: "Help"
          })]
        }), /* @__PURE__ */ jsx(Transition$1, {
          className: "origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
          show: dropdownOpen,
          enter: "transition ease-out duration-200 transform",
          enterStart: "opacity-0 -translate-y-2",
          enterEnd: "opacity-100 translate-y-0",
          leave: "transition ease-out duration-200",
          leaveStart: "opacity-100",
          leaveEnd: "opacity-0",
          children: /* @__PURE__ */ jsxs("div", {
            ref: dropdown,
            onFocus: () => setDropdownOpen(true),
            onBlur: () => setDropdownOpen(false),
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-xs font-semibold text-black uppercase pt-1.5 pb-2 px-4",
              children: "Need help?"
            }), /* @__PURE__ */ jsxs("ul", {
              children: [/* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsxs(Link, {
                  className: "flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900",
                  to: "#0",
                  onClick: () => setDropdownOpen(!dropdownOpen),
                  children: [/* @__PURE__ */ jsxs("svg", {
                    className: "w-3 h-3 mr-2 text-gray-300 fill-current shrink-0",
                    viewBox: "0 0 12 12",
                    children: [/* @__PURE__ */ jsx("rect", {
                      y: "3",
                      width: "12",
                      height: "9",
                      rx: "1"
                    }), /* @__PURE__ */ jsx("path", {
                      d: "M2 0h8v2H2z"
                    })]
                  }), /* @__PURE__ */ jsx("span", {
                    children: "Documentation"
                  })]
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsxs(Link, {
                  className: "flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900",
                  to: "#0",
                  onClick: () => setDropdownOpen(!dropdownOpen),
                  children: [/* @__PURE__ */ jsx("svg", {
                    className: "w-3 h-3 mr-2 text-gray-300 fill-current shrink-0",
                    viewBox: "0 0 12 12",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
                    })
                  }), /* @__PURE__ */ jsx("span", {
                    children: "Support Site"
                  })]
                })
              }), /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsxs(Link, {
                  className: "flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900",
                  to: "#0",
                  onClick: () => setDropdownOpen(!dropdownOpen),
                  children: [/* @__PURE__ */ jsx("svg", {
                    className: "w-3 h-3 mr-2 text-gray-300 fill-current shrink-0",
                    viewBox: "0 0 12 12",
                    children: /* @__PURE__ */ jsx("path", {
                      d: "M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                    })
                  }), /* @__PURE__ */ jsx("span", {
                    children: "Contact us"
                  })]
                })
              })]
            })]
          })
        })]
      });
    }
    const UserAvatar = "/assets/circle-user-solid-dark.2c22ebd4.svg";
    function UserMenu() {
      const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
      const trigger = react.exports.useRef(null);
      const dropdown = react.exports.useRef(null);
      react.exports.useEffect(() => {
        const clickHandler = ({
          target
        }) => {
          if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
            return;
          setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
      });
      react.exports.useEffect(() => {
        const keyHandler = ({
          keyCode
        }) => {
          if (!dropdownOpen || keyCode !== 27)
            return;
          setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
      });
      return /* @__PURE__ */ jsxs("div", {
        className: "relative inline-flex pl-4 pr-4 bg-gray-900",
        children: [/* @__PURE__ */ jsxs("button", {
          ref: trigger,
          className: "inline-flex items-center justify-center group",
          "aria-haspopup": "true",
          onClick: () => setDropdownOpen(!dropdownOpen),
          "aria-expanded": dropdownOpen,
          children: [/* @__PURE__ */ jsx("img", {
            className: "w-8 h-8 bg-gray-900 rounded-full",
            src: UserAvatar,
            width: "32",
            height: "32",
            alt: "User"
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center truncate",
            children: [/* @__PURE__ */ jsx("span", {
              className: "ml-2 text-sm font-medium text-gray-100 truncate group-hover:text-white",
              children: "AJ Bell"
            }), /* @__PURE__ */ jsx("svg", {
              className: "w-3 h-3 ml-1 text-gray-100 fill-current shrink-0",
              viewBox: "0 0 12 12",
              children: /* @__PURE__ */ jsx("path", {
                d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
              })
            })]
          })]
        }), /* @__PURE__ */ jsx(Transition$1, {
          className: "origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
          show: dropdownOpen,
          enter: "transition ease-out duration-200 transform",
          enterStart: "opacity-0 -translate-y-2",
          enterEnd: "opacity-100 translate-y-0",
          leave: "transition ease-out duration-200",
          leaveStart: "opacity-100",
          leaveEnd: "opacity-0",
          children: /* @__PURE__ */ jsxs("div", {
            ref: dropdown,
            onFocus: () => setDropdownOpen(true),
            onBlur: () => setDropdownOpen(false),
            children: [/* @__PURE__ */ jsxs("div", {
              className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200",
              children: [/* @__PURE__ */ jsx("div", {
                className: "font-semibold text-black",
                children: "Trading Platform"
              }), /* @__PURE__ */ jsx("div", {
                className: "text-xs italic text-gray-700",
                children: "Administrator"
              })]
            }), /* @__PURE__ */ jsx("ul", {
              children: /* @__PURE__ */ jsx("li", {
                children: /* @__PURE__ */ jsx(Link, {
                  className: "flex items-center px-3 py-1 text-sm text-gray-700 hover:text-gray-900",
                  to: "/",
                  onClick: () => setDropdownOpen(!dropdownOpen),
                  children: "Settings"
                })
              })
            })]
          })
        })]
      });
    }
    const HamburgerMenuIcon = "/assets/bars-dark.1a6d5759.svg";
    function Header({
      sidebarOpen,
      setSidebarOpen
    }) {
      react.exports.useState(false);
      return /* @__PURE__ */ jsx("header", {
        className: "sticky top-0 z-30 bg-gray-900 border-b border-slate-200",
        children: /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between h-16",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex-none h-16 px-4 py-2 bg-red-900 sm:px-6 lg:px-8 sm:py-2 lg:py-6",
              children: /* @__PURE__ */ jsxs("button", {
                className: "text-slate-500 hover:text-slate-600 lg:hidden",
                "aria-controls": "sidebar",
                "aria-expanded": sidebarOpen,
                onClick: (e2) => {
                  e2.stopPropagation();
                  setSidebarOpen(!sidebarOpen);
                },
                children: [/* @__PURE__ */ jsx("span", {
                  className: "sr-only",
                  children: "Open sidebar"
                }), /* @__PURE__ */ jsx("img", {
                  className: "w-12 h-12 bg-white rounded-full",
                  src: HamburgerMenuIcon,
                  width: "64",
                  height: "64",
                  alt: "Menu"
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "flex-auto h-16 bg-red-900",
              children: "..."
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsx(Help, {}), /* @__PURE__ */ jsx(UserMenu, {})]
            })]
          })
        })
      });
    }
    function DashboardCard02() {
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial w-64 bg-white border rounded-sm shadow-lg h-96 col-span-full sm:col-span-5 xl:col-span-4 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Utilisation"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-8 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: PLATFORM.environment
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": "system.ram",
            "data-host": "http://localhost:19999/",
            "data-chart-library": "easypiechart",
            "data-title": "Used Memory",
            "data-units": "Mb",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "16000"
          })
        })]
      });
    }
    function DashboardCard03() {
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial w-64 bg-white border rounded-sm shadow-lg h-96 col-span-full sm:col-span-5 xl:col-span-4 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "CPU Utilisation"
          }), /* @__PURE__ */ jsx("div", {
            className: "w-8 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: PLATFORM.environment
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": "system.cpu",
            "data-host": "http://localhost:19999/",
            "data-chart-library": "easypiechart",
            "data-title": "Used CPU",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 60 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100"
          })
        })]
      });
    }
    function DashboardCard04() {
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-96 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Disk I/O"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": "system.io",
            "data-host": "http://localhost:19999/",
            "data-chart-library": "dygraph",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-colors": "#ea8099 #cb71e0"
          })
        })]
      });
    }
    function Dashboard() {
      const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebarOpen,
          setSidebarOpen
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto",
          children: [/* @__PURE__ */ jsx(Header, {
            sidebarOpen,
            setSidebarOpen
          }), /* @__PURE__ */ jsx("main", {
            children: /* @__PURE__ */ jsxs("div", {
              className: "w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mb-2 text-4xl font-light text-gray-900",
                children: "Infrastructure"
              }), /* @__PURE__ */ jsx("div", {
                className: "mb-10 text-2xl font-light text-gray-500",
                children: "Example"
              }), /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-12 gap-6",
                children: [/* @__PURE__ */ jsx(DashboardCard02, {}), /* @__PURE__ */ jsx(DashboardCard03, {}), /* @__PURE__ */ jsx(DashboardCard04, {})]
              })]
            })
          })]
        })]
      });
    }
    function DashboardCardIbmiAspUsedPercent() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.asp_used_percent";
      const targetDataId = collectorHost + "_ibmi_remote_asp_used_percent";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-5 xl:col-span-4 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "ASP Utilisation"
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-start",
            children: /* @__PURE__ */ jsx("div", {
              className: "mb-2 text-xs text-slate-600",
              children: "The percentage of the system storage pool currently in use."
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "ml-15 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "easypiechart",
            "data-title": "Used ASP",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100"
          })
        })]
      });
    }
    function DashboardCardIbmiAspUsed() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.asp_utilisation";
      const targetDataId = collectorHost + "_ibmi_remote_asp_utilisation";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "ASP Used"
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-start",
            children: /* @__PURE__ */ jsx("div", {
              className: "mb-2 text-xs text-slate-600",
              children: "The total system storage pool capacity and amount currently in use."
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "system_disk_used,system_disk_capacity",
            "data-colors": "#bc5090 #ef5675"
          })
        })]
      });
    }
    function DashboardCardIbmiTempStorageUtilisation() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.temp_storage_utilisation";
      const targetDataId = collectorHost + "_ibmi_remote_temp_storage_utilisation";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Temporary Storage Utilisation"
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-start",
            children: /* @__PURE__ */ jsx("div", {
              className: "mb-2 text-xs text-slate-600",
              children: "The current and maximum amounts of storage in use for temporary objects."
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "system_current_temp_storage_used,system_max_temp_storage_used",
            "data-colors": "#ef5675 #ffa600 #7a5195"
          })
        })]
      });
    }
    function DashboardCardIbmiCpuUtilisation() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.cpu_utilisation";
      const targetDataId = collectorHost + "_ibmi_remote_cpu_utilisation";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "CPU Utilisation"
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-start",
            children: /* @__PURE__ */ jsx("div", {
              className: "mb-2 text-xs text-slate-600",
              children: "The maximum, minimum and average CPU utilisation of the system."
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "system_min_cpu_utilisation,system_avg_cpu_utilisation,system_max_cpu_utilisation",
            "data-colors": "#ef5675 #ffa600 #7a5195"
          })
        })]
      });
    }
    function DashboardCardIbmiJobs() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.job_stats";
      const targetDataId = collectorHost + "_ibmi_remote_job_stats";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Job Information"
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-start",
            children: /* @__PURE__ */ jsxs("div", {
              className: "mb-2 text-xs text-slate-600",
              children: ["The total number of user and system jobs that are currently in the system. ", /* @__PURE__ */ jsx("br", {}), "The number of jobs active in the system (jobs that have been started, but have not yet ended), including both user and system jobs.", /* @__PURE__ */ jsx("br", {}), "The number of interactive jobs active in the system."]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "system_total_jobs,system_active_jobs,system_interactive_jobs",
            "data-colors": "#7a5195 #ef5675 #ffa600"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryPoolSizes() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_current_size";
      const targetDataId = collectorHost + "_ibmi_remote_memory_current_size";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Current Sizes"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The amount of main storage in each memory pool.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryDatabaseFaults() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_database_faults";
      const targetDataId = collectorHost + "_ibmi_remote_memory_database_faults";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Database Page Faults"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate, in page faults per second, of database page faults against pages containing either database access paths or data.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryNonDatabaseFaults() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_nondatabase_faults";
      const targetDataId = collectorHost + "_ibmi_remote_memory_nondatabase_faults";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Non-Database Page Faults"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate, in page faults per second, of nondatabase page faults against pages other than those designated as database pages.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryDatabasePages() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_database_pages";
      const targetDataId = collectorHost + "_ibmi_remote_memory_database_pages";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Database Pages"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate, in pages per second, at which database pages are brought into the storage pool.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryNonDatabasePages() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_nondatabase_pages";
      const targetDataId = collectorHost + "_ibmi_remote_memory_nondatabase_pages";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Non-Database Pages"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate in pages per second at which nondatabase pages are brought into the storage pool.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryActiveToIneligible() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_active_to_ineligible";
      const targetDataId = collectorHost + "_ibmi_remote_memory_active_to_ineligible";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Thread Transitions from Active to Ineligible"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate, in transitions per minute, of transitions of threads from an active condition to an ineligible condition.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryActiveToWait() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_active_to_wait";
      const targetDataId = collectorHost + "_ibmi_remote_memory_active_to_wait";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Thread Transitions from Active to Wait"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate, in transitions per minute, of transitions of threads from an active condition to a waiting condition.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function DashboardCardIbmiMemoryWaitToIneligible() {
      let [searchParams, setSearchParams] = useSearchParams();
      searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "ibmi_remote.memory_wait_to_ineligible";
      const targetDataId = collectorHost + "_ibmi_remote_memory_wait_to_ineligible";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Pool Thread Transitions from Wait to Ineligible"
          }), /* @__PURE__ */ jsxs("div", {
            className: "mb-2 text-xs text-slate-600",
            children: ["The rate, in transitions per minute, of transitions of threads from a waiting condition to an ineligible condition.", /* @__PURE__ */ jsx("br", {})]
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-colors": "#0b1d78 #0069c0 #00a9b5 #1fe074"
          })
        })]
      });
    }
    function ServerIbmi() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebarOpen,
          setSidebarOpen
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto",
          children: [/* @__PURE__ */ jsx(Header, {
            sidebarOpen,
            setSidebarOpen
          }), /* @__PURE__ */ jsx("main", {
            children: /* @__PURE__ */ jsxs("div", {
              className: "w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mb-2 text-4xl font-light text-gray-900",
                children: "Infrastructure"
              }), /* @__PURE__ */ jsx("div", {
                className: "text-2xl font-light text-gray-500",
                children: "IBM i"
              }), /* @__PURE__ */ jsx("div", {
                className: "mb-10 text-2xl font-light uppercase text-sky-500",
                children: targetHost
              }), /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-12 gap-6",
                children: [/* @__PURE__ */ jsx(DashboardCardIbmiAspUsedPercent, {}), /* @__PURE__ */ jsx(DashboardCardIbmiAspUsed, {}), /* @__PURE__ */ jsx(DashboardCardIbmiTempStorageUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardIbmiCpuUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardIbmiJobs, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryPoolSizes, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryDatabaseFaults, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryNonDatabaseFaults, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryDatabasePages, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryNonDatabasePages, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryActiveToIneligible, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryActiveToWait, {}), /* @__PURE__ */ jsx(DashboardCardIbmiMemoryWaitToIneligible, {})]
              })]
            })
          })]
        })]
      });
    }
    function DashboardCardLinuxDiskUsedPercent() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/host/" + targetHost;
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "disk_space._";
      const targetDataId = collectorHost + "_disk_space__";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Disk Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          })
        })]
      });
    }
    function DashboardCardLinuxCpuUtilisation() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/host/" + targetHost;
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "system.cpu";
      const targetDataId = collectorHost + "_system_cpu";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "CPU Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "user,system",
            "data-colors": "#ef5675 #ffa600"
          })
        })]
      });
    }
    function DashboardCardLinuxMemoryUtilisation() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/host/" + targetHost;
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "system.ram";
      const targetDataId = collectorHost + "_system_ram";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Memory Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "free,used,cached,buffers",
            "data-colors": "#ef5675 #ffa600 #7a5195 #4daf4a"
          })
        })]
      });
    }
    function ServerLinux() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebarOpen,
          setSidebarOpen
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto",
          children: [/* @__PURE__ */ jsx(Header, {
            sidebarOpen,
            setSidebarOpen
          }), /* @__PURE__ */ jsx("main", {
            children: /* @__PURE__ */ jsxs("div", {
              className: "w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mb-2 text-4xl font-light text-gray-900",
                children: "Infrastructure"
              }), /* @__PURE__ */ jsx("div", {
                className: "text-2xl font-light text-gray-500",
                children: "Linux server summary"
              }), /* @__PURE__ */ jsx("div", {
                className: "mb-10 text-2xl font-light uppercase text-sky-500",
                children: targetHost
              }), /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-12 gap-6",
                children: [/* @__PURE__ */ jsx(DashboardCardLinuxDiskUsedPercent, {}), /* @__PURE__ */ jsx(DashboardCardLinuxCpuUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardLinuxMemoryUtilisation, {})]
              })]
            })
          })]
        })]
      });
    }
    function DashboardCardWindowsCpuUtilisation() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "wmi_" + targetHost + ".cpu_utilization_total";
      const targetDataId = collectorHost + "_wmi_" + targetHost + "_cpu_utilization_total";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "CPU Total Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "dpc,user,privileged,interrupt",
            "data-colors": "#ef5675 #ffa600 #7a5195 #4daf4a"
          })
        })]
      });
    }
    function DashboardCardWindowsDiskUsedPercent() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "wmi_" + targetHost + ".logical_disk_C:_space_usage";
      const targetDataId = collectorHost + "_wmi_" + targetHost + "_logical_disk_C:_space_usage";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Disk Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk C:",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          })
        })]
      });
    }
    function DashboardCardWindowsMemoryUtilisation() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "wmi_" + targetHost + ".os_visible_memory_usage";
      const targetDataId = collectorHost + "_wmi_" + targetHost + "_os_visible_memory_usage";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Visible Memory Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "free,used",
            "data-desired-units": "Gb",
            "data-units": "Gb",
            "data-colors": "#ef5675 #ffa600"
          })
        })]
      });
    }
    function DashboardCardWindowsPagingUsage() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData = "wmi_" + targetHost + ".os_paging_files_usage";
      const targetDataId = collectorHost + "_wmi_" + targetHost + "_os_paging_files_usage";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Paging Files Usage"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-2 mb-2 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-chart-library": "dygraph",
            "data-dygraph-type": "sparkline",
            "data-title": "",
            "data-width": "95%",
            "data-height": "260px",
            "data-after": "-300",
            "data-append-options": "match-ids",
            "data-dygraph-valuerange": "[0, null]",
            "data-dygraph-strokewidth": "1.5",
            "data-dimensions": "free,used",
            "data-desired-units": "Mb",
            "data-units": "Mb",
            "data-colors": "#ef5675 #ffa600"
          })
        })]
      });
    }
    function ServerWindows() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebarOpen,
          setSidebarOpen
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto",
          children: [/* @__PURE__ */ jsx(Header, {
            sidebarOpen,
            setSidebarOpen
          }), /* @__PURE__ */ jsx("main", {
            children: /* @__PURE__ */ jsxs("div", {
              className: "w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mb-2 text-4xl font-light text-gray-900",
                children: "Infrastructure"
              }), /* @__PURE__ */ jsx("div", {
                className: "text-2xl font-light text-gray-500",
                children: "MS Windows server summary"
              }), /* @__PURE__ */ jsx("div", {
                className: "mb-10 text-2xl font-light uppercase text-sky-500",
                children: targetHost
              }), /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-12 gap-6",
                children: [/* @__PURE__ */ jsx(DashboardCardWindowsDiskUsedPercent, {}), /* @__PURE__ */ jsx(DashboardCardWindowsCpuUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardWindowsMemoryUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardWindowsPagingUsage, {})]
              })]
            })
          })]
        })]
      });
    }
    function DashboardCardWindowsMultiDiskUsedPercent() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const collectorUrl = "http://localhost:19999/";
      const collectorHost = searchParams.get("collectorHost");
      const targetData1 = "wmi_" + targetHost + ".logical_disk_C:_space_usage";
      const targetData2 = "wmi_" + targetHost + ".logical_disk_D:_space_usage";
      const targetData3 = "wmi_" + targetHost + ".logical_disk_E:_space_usage";
      const targetData4 = "wmi_" + targetHost + ".logical_disk_S:_space_usage";
      const targetDataId1 = collectorHost + "_wmi_" + targetHost + "_logical_disk_C:_space_usage";
      const targetDataId2 = collectorHost + "_wmi_" + targetHost + "_logical_disk_D:_space_usage";
      const targetDataId3 = collectorHost + "_wmi_" + targetHost + "_logical_disk_E:_space_usage";
      const targetDataId4 = collectorHost + "_wmi_" + targetHost + "_logical_disk_S:_space_usage";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "px-5 pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-lg font-semibold text-slate-800",
            children: "Disk Utilisation"
          }), /* @__PURE__ */ jsxs("div", {
            className: "inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
            children: [/* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 28 28",
              "stroke-width": "2",
              stroke: "currentColor",
              "aria-hidden": "true",
              class: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
              children: /* @__PURE__ */ jsx("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              })
            }), PLATFORM.environment]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-2 mb-2 grow",
          children: [/* @__PURE__ */ jsx("div", {
            "data-netdata": targetData1,
            "data-id": targetDataId1,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk C:",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          }), /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData2,
            "data-id": targetDataId2,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk D:",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          }), /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData3,
            "data-id": targetDataId3,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk E:",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          }), /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData4,
            "data-id": targetDataId4,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk S:",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "250px",
            "data-height": "250px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          })]
        })]
      });
    }
    function ServerWindowsLarge() {
      let [searchParams, setSearchParams] = useSearchParams();
      const targetHost = searchParams.get("targetHost");
      const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebarOpen,
          setSidebarOpen
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto",
          children: [/* @__PURE__ */ jsx(Header, {
            sidebarOpen,
            setSidebarOpen
          }), /* @__PURE__ */ jsx("main", {
            children: /* @__PURE__ */ jsxs("div", {
              className: "w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mb-2 text-4xl font-light text-gray-900",
                children: "Infrastructure"
              }), /* @__PURE__ */ jsx("div", {
                className: "text-2xl font-light text-gray-500",
                children: "MS Windows server summary"
              }), /* @__PURE__ */ jsx("div", {
                className: "mb-10 text-2xl font-light uppercase text-sky-500",
                children: targetHost
              }), /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-12 gap-6",
                children: [/* @__PURE__ */ jsx(DashboardCardWindowsMultiDiskUsedPercent, {}), /* @__PURE__ */ jsx(DashboardCardWindowsCpuUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardWindowsMemoryUtilisation, {}), /* @__PURE__ */ jsx(DashboardCardWindowsPagingUsage, {})]
              })]
            })
          })]
        })]
      });
    }
    function _defineProperty$1(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _slicedToArray$4(arr, i2) {
      return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i2) || _unsupportedIterableToArray$5(arr, i2) || _nonIterableRest$4();
    }
    function _toConsumableArray$4(arr) {
      return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$4();
    }
    function _arrayWithoutHoles$4(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$5(arr);
    }
    function _arrayWithHoles$4(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray$4(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _iterableToArrayLimit$4(arr, i2) {
      var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e2;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e2 = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e2;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray$5(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray$5(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$5(o2, minLen);
    }
    function _arrayLikeToArray$5(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread$4() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest$4() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var omit = function omit2(obj, keys) {
      var keySet = new Set(keys);
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray$4(Object.entries(obj).filter(function(_ref2) {
        var _ref3 = _slicedToArray$4(_ref2, 1), key = _ref3[0];
        return !keySet.has(key);
      }).map(function(_ref4) {
        var _ref5 = _slicedToArray$4(_ref4, 2), key = _ref5[0], val = _ref5[1];
        return _defineProperty$1({}, key, val);
      }))));
    };
    /*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var fromentries = function fromEntries(iterable) {
      return [...iterable].reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
      }, {});
    };
    function _typeof$1(obj) {
      "@babel/helpers - typeof";
      return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof$1(obj);
    }
    function _slicedToArray$3(arr, i2) {
      return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i2) || _unsupportedIterableToArray$4(arr, i2) || _nonIterableRest$3();
    }
    function _toConsumableArray$3(arr) {
      return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread$3();
    }
    function _arrayWithoutHoles$3(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$4(arr);
    }
    function _arrayWithHoles$3(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray$3(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _iterableToArrayLimit$3(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e2;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e2 = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e2;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray$4(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray$4(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$4(o2, minLen);
    }
    function _arrayLikeToArray$4(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread$3() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest$3() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function index$4(kapsuleComponent, comboParam) {
      var _ref = _typeof$1(comboParam) === "object" ? comboParam : {
        wrapperElementType: comboParam,
        methodNames: (arguments.length <= 2 ? void 0 : arguments[2]) || void 0,
        initPropNames: (arguments.length <= 3 ? void 0 : arguments[3]) || void 0
      }, _ref$wrapperElementTy = _ref.wrapperElementType, wrapperElementType = _ref$wrapperElementTy === void 0 ? "div" : _ref$wrapperElementTy, _ref$nodeMapper = _ref.nodeMapper, nodeMapper = _ref$nodeMapper === void 0 ? function(node) {
        return node;
      } : _ref$nodeMapper, _ref$methodNames = _ref.methodNames, methodNames = _ref$methodNames === void 0 ? [] : _ref$methodNames, _ref$initPropNames = _ref.initPropNames, initPropNames = _ref$initPropNames === void 0 ? [] : _ref$initPropNames;
      return /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
        var domEl = react.exports.useRef();
        var _useState = react.exports.useState({}), _useState2 = _slicedToArray$3(_useState, 2), prevProps = _useState2[0], setPrevProps = _useState2[1];
        react.exports.useEffect(function() {
          return setPrevProps(props);
        });
        var comp = react.exports.useMemo(function() {
          var configOptions = fromentries(initPropNames.filter(function(p2) {
            return props.hasOwnProperty(p2);
          }).map(function(prop) {
            return [prop, props[prop]];
          }));
          return kapsuleComponent(configOptions);
        }, []);
        react.exports.useLayoutEffect(function() {
          comp(nodeMapper(domEl.current));
        }, []);
        react.exports.useEffect(function() {
          return comp._destructor instanceof Function ? comp._destructor : void 0;
        }, []);
        var _call = react.exports.useCallback(
          function(method) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            return comp[method] instanceof Function ? comp[method].apply(comp, args) : void 0;
          },
          [comp]
        );
        var dynamicProps = omit(props, [].concat(_toConsumableArray$3(methodNames), _toConsumableArray$3(initPropNames)));
        Object.keys(dynamicProps).filter(function(p2) {
          return prevProps[p2] !== props[p2];
        }).forEach(function(p2) {
          return _call(p2, props[p2]);
        });
        react.exports.useImperativeHandle(ref, function() {
          return fromentries(methodNames.map(function(method) {
            return [method, function() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return _call.apply(void 0, [method].concat(args));
            }];
          }));
        });
        return /* @__PURE__ */ React.createElement(wrapperElementType, {
          ref: domEl
        });
      });
    }
    var xhtml = "http://www.w3.org/1999/xhtml";
    const namespaces = {
      svg: "http://www.w3.org/2000/svg",
      xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
    function namespace(name) {
      var prefix = name += "", i2 = prefix.indexOf(":");
      if (i2 >= 0 && (prefix = name.slice(0, i2)) !== "xmlns")
        name = name.slice(i2 + 1);
      return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
    }
    function creatorInherit(name) {
      return function() {
        var document2 = this.ownerDocument, uri = this.namespaceURI;
        return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
      };
    }
    function creatorFixed(fullname) {
      return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }
    function creator(name) {
      var fullname = namespace(name);
      return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    }
    function none() {
    }
    function selector(selector2) {
      return selector2 == null ? none : function() {
        return this.querySelector(selector2);
      };
    }
    function selection_select(select2) {
      if (typeof select2 !== "function")
        select2 = selector(select2);
      for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, subgroup = subgroups[j2] = new Array(n2), node, subnode, i2 = 0; i2 < n2; ++i2) {
          if ((node = group[i2]) && (subnode = select2.call(node, node.__data__, i2, group))) {
            if ("__data__" in node)
              subnode.__data__ = node.__data__;
            subgroup[i2] = subnode;
          }
        }
      }
      return new Selection$1(subgroups, this._parents);
    }
    function array(x2) {
      return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
    }
    function empty() {
      return [];
    }
    function selectorAll(selector2) {
      return selector2 == null ? empty : function() {
        return this.querySelectorAll(selector2);
      };
    }
    function arrayAll(select2) {
      return function() {
        return array(select2.apply(this, arguments));
      };
    }
    function selection_selectAll(select2) {
      if (typeof select2 === "function")
        select2 = arrayAll(select2);
      else
        select2 = selectorAll(select2);
      for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, node, i2 = 0; i2 < n2; ++i2) {
          if (node = group[i2]) {
            subgroups.push(select2.call(node, node.__data__, i2, group));
            parents.push(node);
          }
        }
      }
      return new Selection$1(subgroups, parents);
    }
    function matcher(selector2) {
      return function() {
        return this.matches(selector2);
      };
    }
    function childMatcher(selector2) {
      return function(node) {
        return node.matches(selector2);
      };
    }
    var find$1 = Array.prototype.find;
    function childFind(match) {
      return function() {
        return find$1.call(this.children, match);
      };
    }
    function childFirst() {
      return this.firstElementChild;
    }
    function selection_selectChild(match) {
      return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
    }
    var filter = Array.prototype.filter;
    function children() {
      return Array.from(this.children);
    }
    function childrenFilter(match) {
      return function() {
        return filter.call(this.children, match);
      };
    }
    function selection_selectChildren(match) {
      return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
    }
    function selection_filter(match) {
      if (typeof match !== "function")
        match = matcher(match);
      for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, subgroup = subgroups[j2] = [], node, i2 = 0; i2 < n2; ++i2) {
          if ((node = group[i2]) && match.call(node, node.__data__, i2, group)) {
            subgroup.push(node);
          }
        }
      }
      return new Selection$1(subgroups, this._parents);
    }
    function sparse(update2) {
      return new Array(update2.length);
    }
    function selection_enter() {
      return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
    }
    function EnterNode(parent, datum2) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum2;
    }
    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
      },
      insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
      },
      querySelector: function(selector2) {
        return this._parent.querySelector(selector2);
      },
      querySelectorAll: function(selector2) {
        return this._parent.querySelectorAll(selector2);
      }
    };
    function constant$4(x2) {
      return function() {
        return x2;
      };
    }
    function bindIndex(parent, group, enter, update2, exit, data) {
      var i2 = 0, node, groupLength = group.length, dataLength = data.length;
      for (; i2 < dataLength; ++i2) {
        if (node = group[i2]) {
          node.__data__ = data[i2];
          update2[i2] = node;
        } else {
          enter[i2] = new EnterNode(parent, data[i2]);
        }
      }
      for (; i2 < groupLength; ++i2) {
        if (node = group[i2]) {
          exit[i2] = node;
        }
      }
    }
    function bindKey(parent, group, enter, update2, exit, data, key) {
      var i2, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
      for (i2 = 0; i2 < groupLength; ++i2) {
        if (node = group[i2]) {
          keyValues[i2] = keyValue = key.call(node, node.__data__, i2, group) + "";
          if (nodeByKeyValue.has(keyValue)) {
            exit[i2] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
        }
      }
      for (i2 = 0; i2 < dataLength; ++i2) {
        keyValue = key.call(parent, data[i2], i2, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
          update2[i2] = node;
          node.__data__ = data[i2];
          nodeByKeyValue.delete(keyValue);
        } else {
          enter[i2] = new EnterNode(parent, data[i2]);
        }
      }
      for (i2 = 0; i2 < groupLength; ++i2) {
        if ((node = group[i2]) && nodeByKeyValue.get(keyValues[i2]) === node) {
          exit[i2] = node;
        }
      }
    }
    function datum(node) {
      return node.__data__;
    }
    function selection_data(value, key) {
      if (!arguments.length)
        return Array.from(this, datum);
      var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
      if (typeof value !== "function")
        value = constant$4(value);
      for (var m2 = groups.length, update2 = new Array(m2), enter = new Array(m2), exit = new Array(m2), j2 = 0; j2 < m2; ++j2) {
        var parent = parents[j2], group = groups[j2], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update2[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
          if (previous = enterGroup[i0]) {
            if (i0 >= i1)
              i1 = i0 + 1;
            while (!(next = updateGroup[i1]) && ++i1 < dataLength)
              ;
            previous._next = next || null;
          }
        }
      }
      update2 = new Selection$1(update2, parents);
      update2._enter = enter;
      update2._exit = exit;
      return update2;
    }
    function arraylike(data) {
      return typeof data === "object" && "length" in data ? data : Array.from(data);
    }
    function selection_exit() {
      return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
    }
    function selection_join(onenter, onupdate, onexit) {
      var enter = this.enter(), update2 = this, exit = this.exit();
      if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter)
          enter = enter.selection();
      } else {
        enter = enter.append(onenter + "");
      }
      if (onupdate != null) {
        update2 = onupdate(update2);
        if (update2)
          update2 = update2.selection();
      }
      if (onexit == null)
        exit.remove();
      else
        onexit(exit);
      return enter && update2 ? enter.merge(update2).order() : update2;
    }
    function selection_merge(context) {
      var selection2 = context.selection ? context.selection() : context;
      for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
        for (var group0 = groups0[j2], group1 = groups1[j2], n2 = group0.length, merge = merges[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
          if (node = group0[i2] || group1[i2]) {
            merge[i2] = node;
          }
        }
      }
      for (; j2 < m0; ++j2) {
        merges[j2] = groups0[j2];
      }
      return new Selection$1(merges, this._parents);
    }
    function selection_order() {
      for (var groups = this._groups, j2 = -1, m2 = groups.length; ++j2 < m2; ) {
        for (var group = groups[j2], i2 = group.length - 1, next = group[i2], node; --i2 >= 0; ) {
          if (node = group[i2]) {
            if (next && node.compareDocumentPosition(next) ^ 4)
              next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }
      return this;
    }
    function selection_sort(compare) {
      if (!compare)
        compare = ascending;
      function compareNode(a2, b) {
        return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
      }
      for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, sortgroup = sortgroups[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
          if (node = group[i2]) {
            sortgroup[i2] = node;
          }
        }
        sortgroup.sort(compareNode);
      }
      return new Selection$1(sortgroups, this._parents).order();
    }
    function ascending(a2, b) {
      return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
    }
    function selection_call() {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }
    function selection_nodes() {
      return Array.from(this);
    }
    function selection_node() {
      for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
        for (var group = groups[j2], i2 = 0, n2 = group.length; i2 < n2; ++i2) {
          var node = group[i2];
          if (node)
            return node;
        }
      }
      return null;
    }
    function selection_size() {
      let size = 0;
      for (const node of this)
        ++size;
      return size;
    }
    function selection_empty() {
      return !this.node();
    }
    function selection_each(callback) {
      for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
        for (var group = groups[j2], i2 = 0, n2 = group.length, node; i2 < n2; ++i2) {
          if (node = group[i2])
            callback.call(node, node.__data__, i2, group);
        }
      }
      return this;
    }
    function attrRemove$1(name) {
      return function() {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS$1(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant$1(name, value) {
      return function() {
        this.setAttribute(name, value);
      };
    }
    function attrConstantNS$1(fullname, value) {
      return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }
    function attrFunction$1(name, value) {
      return function() {
        var v2 = value.apply(this, arguments);
        if (v2 == null)
          this.removeAttribute(name);
        else
          this.setAttribute(name, v2);
      };
    }
    function attrFunctionNS$1(fullname, value) {
      return function() {
        var v2 = value.apply(this, arguments);
        if (v2 == null)
          this.removeAttributeNS(fullname.space, fullname.local);
        else
          this.setAttributeNS(fullname.space, fullname.local, v2);
      };
    }
    function selection_attr(name, value) {
      var fullname = namespace(name);
      if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
      }
      return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
    }
    function defaultView(node) {
      return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
    }
    function styleRemove$1(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }
    function styleConstant$1(name, value, priority) {
      return function() {
        this.style.setProperty(name, value, priority);
      };
    }
    function styleFunction$1(name, value, priority) {
      return function() {
        var v2 = value.apply(this, arguments);
        if (v2 == null)
          this.style.removeProperty(name);
        else
          this.style.setProperty(name, v2, priority);
      };
    }
    function selection_style(name, value, priority) {
      return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
    }
    function styleValue(node, name) {
      return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
    }
    function propertyRemove(name) {
      return function() {
        delete this[name];
      };
    }
    function propertyConstant(name, value) {
      return function() {
        this[name] = value;
      };
    }
    function propertyFunction(name, value) {
      return function() {
        var v2 = value.apply(this, arguments);
        if (v2 == null)
          delete this[name];
        else
          this[name] = v2;
      };
    }
    function selection_property(name, value) {
      return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    }
    function classArray(string) {
      return string.trim().split(/^|\s+/);
    }
    function classList(node) {
      return node.classList || new ClassList(node);
    }
    function ClassList(node) {
      this._node = node;
      this._names = classArray(node.getAttribute("class") || "");
    }
    ClassList.prototype = {
      add: function(name) {
        var i2 = this._names.indexOf(name);
        if (i2 < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function(name) {
        var i2 = this._names.indexOf(name);
        if (i2 >= 0) {
          this._names.splice(i2, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function(name) {
        return this._names.indexOf(name) >= 0;
      }
    };
    function classedAdd(node, names) {
      var list = classList(node), i2 = -1, n2 = names.length;
      while (++i2 < n2)
        list.add(names[i2]);
    }
    function classedRemove(node, names) {
      var list = classList(node), i2 = -1, n2 = names.length;
      while (++i2 < n2)
        list.remove(names[i2]);
    }
    function classedTrue(names) {
      return function() {
        classedAdd(this, names);
      };
    }
    function classedFalse(names) {
      return function() {
        classedRemove(this, names);
      };
    }
    function classedFunction(names, value) {
      return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
      };
    }
    function selection_classed(name, value) {
      var names = classArray(name + "");
      if (arguments.length < 2) {
        var list = classList(this.node()), i2 = -1, n2 = names.length;
        while (++i2 < n2)
          if (!list.contains(names[i2]))
            return false;
        return true;
      }
      return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    }
    function textRemove() {
      this.textContent = "";
    }
    function textConstant$1(value) {
      return function() {
        this.textContent = value;
      };
    }
    function textFunction$1(value) {
      return function() {
        var v2 = value.apply(this, arguments);
        this.textContent = v2 == null ? "" : v2;
      };
    }
    function selection_text(value) {
      return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
    }
    function htmlRemove() {
      this.innerHTML = "";
    }
    function htmlConstant(value) {
      return function() {
        this.innerHTML = value;
      };
    }
    function htmlFunction(value) {
      return function() {
        var v2 = value.apply(this, arguments);
        this.innerHTML = v2 == null ? "" : v2;
      };
    }
    function selection_html(value) {
      return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    }
    function raise() {
      if (this.nextSibling)
        this.parentNode.appendChild(this);
    }
    function selection_raise() {
      return this.each(raise);
    }
    function lower() {
      if (this.previousSibling)
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function selection_lower() {
      return this.each(lower);
    }
    function selection_append(name) {
      var create2 = typeof name === "function" ? name : creator(name);
      return this.select(function() {
        return this.appendChild(create2.apply(this, arguments));
      });
    }
    function constantNull() {
      return null;
    }
    function selection_insert(name, before) {
      var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
      return this.select(function() {
        return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
      });
    }
    function remove$1() {
      var parent = this.parentNode;
      if (parent)
        parent.removeChild(this);
    }
    function selection_remove() {
      return this.each(remove$1);
    }
    function selection_cloneShallow() {
      var clone = this.cloneNode(false), parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_cloneDeep() {
      var clone = this.cloneNode(true), parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_clone(deep) {
      return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    }
    function selection_datum(value) {
      return arguments.length ? this.property("__data__", value) : this.node().__data__;
    }
    function contextListener(listener) {
      return function(event) {
        listener.call(this, event, this.__data__);
      };
    }
    function parseTypenames$1(typenames) {
      return typenames.trim().split(/^|\s+/).map(function(t2) {
        var name = "", i2 = t2.indexOf(".");
        if (i2 >= 0)
          name = t2.slice(i2 + 1), t2 = t2.slice(0, i2);
        return { type: t2, name };
      });
    }
    function onRemove(typename) {
      return function() {
        var on = this.__on;
        if (!on)
          return;
        for (var j2 = 0, i2 = -1, m2 = on.length, o2; j2 < m2; ++j2) {
          if (o2 = on[j2], (!typename.type || o2.type === typename.type) && o2.name === typename.name) {
            this.removeEventListener(o2.type, o2.listener, o2.options);
          } else {
            on[++i2] = o2;
          }
        }
        if (++i2)
          on.length = i2;
        else
          delete this.__on;
      };
    }
    function onAdd(typename, value, options) {
      return function() {
        var on = this.__on, o2, listener = contextListener(value);
        if (on)
          for (var j2 = 0, m2 = on.length; j2 < m2; ++j2) {
            if ((o2 = on[j2]).type === typename.type && o2.name === typename.name) {
              this.removeEventListener(o2.type, o2.listener, o2.options);
              this.addEventListener(o2.type, o2.listener = listener, o2.options = options);
              o2.value = value;
              return;
            }
          }
        this.addEventListener(typename.type, listener, options);
        o2 = { type: typename.type, name: typename.name, value, listener, options };
        if (!on)
          this.__on = [o2];
        else
          on.push(o2);
      };
    }
    function selection_on(typename, value, options) {
      var typenames = parseTypenames$1(typename + ""), i2, n2 = typenames.length, t2;
      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on)
          for (var j2 = 0, m2 = on.length, o2; j2 < m2; ++j2) {
            for (i2 = 0, o2 = on[j2]; i2 < n2; ++i2) {
              if ((t2 = typenames[i2]).type === o2.type && t2.name === o2.name) {
                return o2.value;
              }
            }
          }
        return;
      }
      on = value ? onAdd : onRemove;
      for (i2 = 0; i2 < n2; ++i2)
        this.each(on(typenames[i2], value, options));
      return this;
    }
    function dispatchEvent(node, type, params) {
      var window2 = defaultView(node), event = window2.CustomEvent;
      if (typeof event === "function") {
        event = new event(type, params);
      } else {
        event = window2.document.createEvent("Event");
        if (params)
          event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else
          event.initEvent(type, false, false);
      }
      node.dispatchEvent(event);
    }
    function dispatchConstant(type, params) {
      return function() {
        return dispatchEvent(this, type, params);
      };
    }
    function dispatchFunction(type, params) {
      return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
      };
    }
    function selection_dispatch(type, params) {
      return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
    }
    function* selection_iterator() {
      for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
        for (var group = groups[j2], i2 = 0, n2 = group.length, node; i2 < n2; ++i2) {
          if (node = group[i2])
            yield node;
        }
      }
    }
    var root$1 = [null];
    function Selection$1(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }
    function selection() {
      return new Selection$1([[document.documentElement]], root$1);
    }
    function selection_selection() {
      return this;
    }
    Selection$1.prototype = selection.prototype = {
      constructor: Selection$1,
      select: selection_select,
      selectAll: selection_selectAll,
      selectChild: selection_selectChild,
      selectChildren: selection_selectChildren,
      filter: selection_filter,
      data: selection_data,
      enter: selection_enter,
      exit: selection_exit,
      join: selection_join,
      merge: selection_merge,
      selection: selection_selection,
      order: selection_order,
      sort: selection_sort,
      call: selection_call,
      nodes: selection_nodes,
      node: selection_node,
      size: selection_size,
      empty: selection_empty,
      each: selection_each,
      attr: selection_attr,
      style: selection_style,
      property: selection_property,
      classed: selection_classed,
      text: selection_text,
      html: selection_html,
      raise: selection_raise,
      lower: selection_lower,
      append: selection_append,
      insert: selection_insert,
      remove: selection_remove,
      clone: selection_clone,
      datum: selection_datum,
      on: selection_on,
      dispatch: selection_dispatch,
      [Symbol.iterator]: selection_iterator
    };
    function select(selector2) {
      return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root$1);
    }
    function sourceEvent(event) {
      let sourceEvent2;
      while (sourceEvent2 = event.sourceEvent)
        event = sourceEvent2;
      return event;
    }
    function pointer(event, node) {
      event = sourceEvent(event);
      if (node === void 0)
        node = event.currentTarget;
      if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
          var point = svg.createSVGPoint();
          point.x = event.clientX, point.y = event.clientY;
          point = point.matrixTransform(node.getScreenCTM().inverse());
          return [point.x, point.y];
        }
        if (node.getBoundingClientRect) {
          var rect = node.getBoundingClientRect();
          return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
        }
      }
      return [event.pageX, event.pageY];
    }
    var noop = { value: () => {
    } };
    function dispatch() {
      for (var i2 = 0, n2 = arguments.length, _2 = {}, t2; i2 < n2; ++i2) {
        if (!(t2 = arguments[i2] + "") || t2 in _2 || /[\s.]/.test(t2))
          throw new Error("illegal type: " + t2);
        _2[t2] = [];
      }
      return new Dispatch(_2);
    }
    function Dispatch(_2) {
      this._ = _2;
    }
    function parseTypenames(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function(t2) {
        var name = "", i2 = t2.indexOf(".");
        if (i2 >= 0)
          name = t2.slice(i2 + 1), t2 = t2.slice(0, i2);
        if (t2 && !types.hasOwnProperty(t2))
          throw new Error("unknown type: " + t2);
        return { type: t2, name };
      });
    }
    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _2 = this._, T2 = parseTypenames(typename + "", _2), t2, i2 = -1, n2 = T2.length;
        if (arguments.length < 2) {
          while (++i2 < n2)
            if ((t2 = (typename = T2[i2]).type) && (t2 = get$1(_2[t2], typename.name)))
              return t2;
          return;
        }
        if (callback != null && typeof callback !== "function")
          throw new Error("invalid callback: " + callback);
        while (++i2 < n2) {
          if (t2 = (typename = T2[i2]).type)
            _2[t2] = set$1(_2[t2], typename.name, callback);
          else if (callback == null)
            for (t2 in _2)
              _2[t2] = set$1(_2[t2], typename.name, null);
        }
        return this;
      },
      copy: function() {
        var copy = {}, _2 = this._;
        for (var t2 in _2)
          copy[t2] = _2[t2].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n2 = arguments.length - 2) > 0)
          for (var args = new Array(n2), i2 = 0, n2, t2; i2 < n2; ++i2)
            args[i2] = arguments[i2 + 2];
        if (!this._.hasOwnProperty(type))
          throw new Error("unknown type: " + type);
        for (t2 = this._[type], i2 = 0, n2 = t2.length; i2 < n2; ++i2)
          t2[i2].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type))
          throw new Error("unknown type: " + type);
        for (var t2 = this._[type], i2 = 0, n2 = t2.length; i2 < n2; ++i2)
          t2[i2].value.apply(that, args);
      }
    };
    function get$1(type, name) {
      for (var i2 = 0, n2 = type.length, c2; i2 < n2; ++i2) {
        if ((c2 = type[i2]).name === name) {
          return c2.value;
        }
      }
    }
    function set$1(type, name, callback) {
      for (var i2 = 0, n2 = type.length; i2 < n2; ++i2) {
        if (type[i2].name === name) {
          type[i2] = noop, type = type.slice(0, i2).concat(type.slice(i2 + 1));
          break;
        }
      }
      if (callback != null)
        type.push({ name, value: callback });
      return type;
    }
    const nonpassive = { passive: false };
    const nonpassivecapture = { capture: true, passive: false };
    function nopropagation$1(event) {
      event.stopImmediatePropagation();
    }
    function noevent$1(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    function dragDisable(view) {
      var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
      if ("onselectstart" in root2) {
        selection2.on("selectstart.drag", noevent$1, nonpassivecapture);
      } else {
        root2.__noselect = root2.style.MozUserSelect;
        root2.style.MozUserSelect = "none";
      }
    }
    function yesdrag(view, noclick) {
      var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
      if (noclick) {
        selection2.on("click.drag", noevent$1, nonpassivecapture);
        setTimeout(function() {
          selection2.on("click.drag", null);
        }, 0);
      }
      if ("onselectstart" in root2) {
        selection2.on("selectstart.drag", null);
      } else {
        root2.style.MozUserSelect = root2.__noselect;
        delete root2.__noselect;
      }
    }
    const constant$3 = (x2) => () => x2;
    function DragEvent(type, {
      sourceEvent: sourceEvent2,
      subject,
      target,
      identifier,
      active,
      x: x2,
      y: y2,
      dx,
      dy,
      dispatch: dispatch2
    }) {
      Object.defineProperties(this, {
        type: { value: type, enumerable: true, configurable: true },
        sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
        subject: { value: subject, enumerable: true, configurable: true },
        target: { value: target, enumerable: true, configurable: true },
        identifier: { value: identifier, enumerable: true, configurable: true },
        active: { value: active, enumerable: true, configurable: true },
        x: { value: x2, enumerable: true, configurable: true },
        y: { value: y2, enumerable: true, configurable: true },
        dx: { value: dx, enumerable: true, configurable: true },
        dy: { value: dy, enumerable: true, configurable: true },
        _: { value: dispatch2 }
      });
    }
    DragEvent.prototype.on = function() {
      var value = this._.on.apply(this._, arguments);
      return value === this._ ? this : value;
    };
    function defaultFilter$1(event) {
      return !event.ctrlKey && !event.button;
    }
    function defaultContainer() {
      return this.parentNode;
    }
    function defaultSubject(event, d2) {
      return d2 == null ? { x: event.x, y: event.y } : d2;
    }
    function defaultTouchable$1() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function drag() {
      var filter2 = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
      function drag2(selection2) {
        selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function mousedowned(event, d2) {
        if (touchending || !filter2.call(this, event, d2))
          return;
        var gesture = beforestart(this, container.call(this, event, d2), event, d2, "mouse");
        if (!gesture)
          return;
        select(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
        dragDisable(event.view);
        nopropagation$1(event);
        mousemoving = false;
        mousedownx = event.clientX;
        mousedowny = event.clientY;
        gesture("start", event);
      }
      function mousemoved(event) {
        noevent$1(event);
        if (!mousemoving) {
          var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
          mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag", event);
      }
      function mouseupped(event) {
        select(event.view).on("mousemove.drag mouseup.drag", null);
        yesdrag(event.view, mousemoving);
        noevent$1(event);
        gestures.mouse("end", event);
      }
      function touchstarted(event, d2) {
        if (!filter2.call(this, event, d2))
          return;
        var touches = event.changedTouches, c2 = container.call(this, event, d2), n2 = touches.length, i2, gesture;
        for (i2 = 0; i2 < n2; ++i2) {
          if (gesture = beforestart(this, c2, event, d2, touches[i2].identifier, touches[i2])) {
            nopropagation$1(event);
            gesture("start", event, touches[i2]);
          }
        }
      }
      function touchmoved(event) {
        var touches = event.changedTouches, n2 = touches.length, i2, gesture;
        for (i2 = 0; i2 < n2; ++i2) {
          if (gesture = gestures[touches[i2].identifier]) {
            noevent$1(event);
            gesture("drag", event, touches[i2]);
          }
        }
      }
      function touchended(event) {
        var touches = event.changedTouches, n2 = touches.length, i2, gesture;
        if (touchending)
          clearTimeout(touchending);
        touchending = setTimeout(function() {
          touchending = null;
        }, 500);
        for (i2 = 0; i2 < n2; ++i2) {
          if (gesture = gestures[touches[i2].identifier]) {
            nopropagation$1(event);
            gesture("end", event, touches[i2]);
          }
        }
      }
      function beforestart(that, container2, event, d2, identifier, touch) {
        var dispatch2 = listeners.copy(), p2 = pointer(touch || event, container2), dx, dy, s2;
        if ((s2 = subject.call(that, new DragEvent("beforestart", {
          sourceEvent: event,
          target: drag2,
          identifier,
          active,
          x: p2[0],
          y: p2[1],
          dx: 0,
          dy: 0,
          dispatch: dispatch2
        }), d2)) == null)
          return;
        dx = s2.x - p2[0] || 0;
        dy = s2.y - p2[1] || 0;
        return function gesture(type, event2, touch2) {
          var p0 = p2, n2;
          switch (type) {
            case "start":
              gestures[identifier] = gesture, n2 = active++;
              break;
            case "end":
              delete gestures[identifier], --active;
            case "drag":
              p2 = pointer(touch2 || event2, container2), n2 = active;
              break;
          }
          dispatch2.call(
            type,
            that,
            new DragEvent(type, {
              sourceEvent: event2,
              subject: s2,
              target: drag2,
              identifier,
              active: n2,
              x: p2[0] + dx,
              y: p2[1] + dy,
              dx: p2[0] - p0[0],
              dy: p2[1] - p0[1],
              dispatch: dispatch2
            }),
            d2
          );
        };
      }
      drag2.filter = function(_2) {
        return arguments.length ? (filter2 = typeof _2 === "function" ? _2 : constant$3(!!_2), drag2) : filter2;
      };
      drag2.container = function(_2) {
        return arguments.length ? (container = typeof _2 === "function" ? _2 : constant$3(_2), drag2) : container;
      };
      drag2.subject = function(_2) {
        return arguments.length ? (subject = typeof _2 === "function" ? _2 : constant$3(_2), drag2) : subject;
      };
      drag2.touchable = function(_2) {
        return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant$3(!!_2), drag2) : touchable;
      };
      drag2.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag2 : value;
      };
      drag2.clickDistance = function(_2) {
        return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, drag2) : Math.sqrt(clickDistance2);
      };
      return drag2;
    }
    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }
    function extend(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition)
        prototype[key] = definition[key];
      return prototype;
    }
    function Color() {
    }
    var darker = 0.7;
    var brighter = 1 / darker;
    var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
    var named = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };
    define(Color, color, {
      copy(channels) {
        return Object.assign(new this.constructor(), this, channels);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: color_formatHex,
      formatHex: color_formatHex,
      formatHex8: color_formatHex8,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });
    function color_formatHex() {
      return this.rgb().formatHex();
    }
    function color_formatHex8() {
      return this.rgb().formatHex8();
    }
    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }
    function color_formatRgb() {
      return this.rgb().formatRgb();
    }
    function color(format) {
      var m2, l2;
      format = (format + "").trim().toLowerCase();
      return (m2 = reHex.exec(format)) ? (l2 = m2[1].length, m2 = parseInt(m2[1], 16), l2 === 6 ? rgbn(m2) : l2 === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l2 === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l2 === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
    }
    function rgbn(n2) {
      return new Rgb(n2 >> 16 & 255, n2 >> 8 & 255, n2 & 255, 1);
    }
    function rgba(r2, g, b, a2) {
      if (a2 <= 0)
        r2 = g = b = NaN;
      return new Rgb(r2, g, b, a2);
    }
    function rgbConvert(o2) {
      if (!(o2 instanceof Color))
        o2 = color(o2);
      if (!o2)
        return new Rgb();
      o2 = o2.rgb();
      return new Rgb(o2.r, o2.g, o2.b, o2.opacity);
    }
    function rgb(r2, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g, b, opacity == null ? 1 : opacity);
    }
    function Rgb(r2, g, b, opacity) {
      this.r = +r2;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }
    define(Rgb, rgb, extend(Color, {
      brighter(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
      },
      darker(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
      },
      hex: rgb_formatHex,
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));
    function rgb_formatHex() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
    }
    function rgb_formatHex8() {
      return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
    }
    function rgb_formatRgb() {
      const a2 = clampa(this.opacity);
      return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
    }
    function clampa(opacity) {
      return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
    }
    function clampi(value) {
      return Math.max(0, Math.min(255, Math.round(value) || 0));
    }
    function hex(value) {
      value = clampi(value);
      return (value < 16 ? "0" : "") + value.toString(16);
    }
    function hsla(h2, s2, l2, a2) {
      if (a2 <= 0)
        h2 = s2 = l2 = NaN;
      else if (l2 <= 0 || l2 >= 1)
        h2 = s2 = NaN;
      else if (s2 <= 0)
        h2 = NaN;
      return new Hsl(h2, s2, l2, a2);
    }
    function hslConvert(o2) {
      if (o2 instanceof Hsl)
        return new Hsl(o2.h, o2.s, o2.l, o2.opacity);
      if (!(o2 instanceof Color))
        o2 = color(o2);
      if (!o2)
        return new Hsl();
      if (o2 instanceof Hsl)
        return o2;
      o2 = o2.rgb();
      var r2 = o2.r / 255, g = o2.g / 255, b = o2.b / 255, min2 = Math.min(r2, g, b), max2 = Math.max(r2, g, b), h2 = NaN, s2 = max2 - min2, l2 = (max2 + min2) / 2;
      if (s2) {
        if (r2 === max2)
          h2 = (g - b) / s2 + (g < b) * 6;
        else if (g === max2)
          h2 = (b - r2) / s2 + 2;
        else
          h2 = (r2 - g) / s2 + 4;
        s2 /= l2 < 0.5 ? max2 + min2 : 2 - max2 - min2;
        h2 *= 60;
      } else {
        s2 = l2 > 0 && l2 < 1 ? 0 : h2;
      }
      return new Hsl(h2, s2, l2, o2.opacity);
    }
    function hsl(h2, s2, l2, opacity) {
      return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s2, l2, opacity == null ? 1 : opacity);
    }
    function Hsl(h2, s2, l2, opacity) {
      this.h = +h2;
      this.s = +s2;
      this.l = +l2;
      this.opacity = +opacity;
    }
    define(Hsl, hsl, extend(Color, {
      brighter(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Hsl(this.h, this.s, this.l * k2, this.opacity);
      },
      darker(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Hsl(this.h, this.s, this.l * k2, this.opacity);
      },
      rgb() {
        var h2 = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l2 = this.l, m2 = l2 + (l2 < 0.5 ? l2 : 1 - l2) * s2, m1 = 2 * l2 - m2;
        return new Rgb(
          hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
          hsl2rgb(h2, m1, m2),
          hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
          this.opacity
        );
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
      },
      formatHsl() {
        const a2 = clampa(this.opacity);
        return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
      }
    }));
    function clamph(value) {
      value = (value || 0) % 360;
      return value < 0 ? value + 360 : value;
    }
    function clampt(value) {
      return Math.max(0, Math.min(1, value || 0));
    }
    function hsl2rgb(h2, m1, m2) {
      return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
    }
    const constant$2 = (x2) => () => x2;
    function linear(a2, d2) {
      return function(t2) {
        return a2 + t2 * d2;
      };
    }
    function exponential(a2, b, y2) {
      return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t2) {
        return Math.pow(a2 + t2 * b, y2);
      };
    }
    function gamma(y2) {
      return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
        return b - a2 ? exponential(a2, b, y2) : constant$2(isNaN(a2) ? b : a2);
      };
    }
    function nogamma(a2, b) {
      var d2 = b - a2;
      return d2 ? linear(a2, d2) : constant$2(isNaN(a2) ? b : a2);
    }
    const interpolateRgb = function rgbGamma(y2) {
      var color2 = gamma(y2);
      function rgb$1(start2, end) {
        var r2 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
        return function(t2) {
          start2.r = r2(t2);
          start2.g = g(t2);
          start2.b = b(t2);
          start2.opacity = opacity(t2);
          return start2 + "";
        };
      }
      rgb$1.gamma = rgbGamma;
      return rgb$1;
    }(1);
    function interpolateNumber(a2, b) {
      return a2 = +a2, b = +b, function(t2) {
        return a2 * (1 - t2) + b * t2;
      };
    }
    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
    function zero(b) {
      return function() {
        return b;
      };
    }
    function one(b) {
      return function(t2) {
        return b(t2) + "";
      };
    }
    function interpolateString(a2, b) {
      var bi2 = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i2 = -1, s2 = [], q2 = [];
      a2 = a2 + "", b = b + "";
      while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi2) {
          bs = b.slice(bi2, bs);
          if (s2[i2])
            s2[i2] += bs;
          else
            s2[++i2] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
          if (s2[i2])
            s2[i2] += bm;
          else
            s2[++i2] = bm;
        } else {
          s2[++i2] = null;
          q2.push({ i: i2, x: interpolateNumber(am, bm) });
        }
        bi2 = reB.lastIndex;
      }
      if (bi2 < b.length) {
        bs = b.slice(bi2);
        if (s2[i2])
          s2[i2] += bs;
        else
          s2[++i2] = bs;
      }
      return s2.length < 2 ? q2[0] ? one(q2[0].x) : zero(b) : (b = q2.length, function(t2) {
        for (var i3 = 0, o2; i3 < b; ++i3)
          s2[(o2 = q2[i3]).i] = o2.x(t2);
        return s2.join("");
      });
    }
    var degrees = 180 / Math.PI;
    var identity$1 = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };
    function decompose(a2, b, c2, d2, e2, f2) {
      var scaleX, scaleY, skewX;
      if (scaleX = Math.sqrt(a2 * a2 + b * b))
        a2 /= scaleX, b /= scaleX;
      if (skewX = a2 * c2 + b * d2)
        c2 -= a2 * skewX, d2 -= b * skewX;
      if (scaleY = Math.sqrt(c2 * c2 + d2 * d2))
        c2 /= scaleY, d2 /= scaleY, skewX /= scaleY;
      if (a2 * d2 < b * c2)
        a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
      return {
        translateX: e2,
        translateY: f2,
        rotate: Math.atan2(b, a2) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX,
        scaleY
      };
    }
    var svgNode;
    function parseCss(value) {
      const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
      return m2.isIdentity ? identity$1 : decompose(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
    }
    function parseSvg(value) {
      if (value == null)
        return identity$1;
      if (!svgNode)
        svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svgNode.setAttribute("transform", value);
      if (!(value = svgNode.transform.baseVal.consolidate()))
        return identity$1;
      value = value.matrix;
      return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
    }
    function interpolateTransform(parse, pxComma, pxParen, degParen) {
      function pop(s2) {
        return s2.length ? s2.pop() + " " : "";
      }
      function translate(xa, ya2, xb2, yb2, s2, q2) {
        if (xa !== xb2 || ya2 !== yb2) {
          var i2 = s2.push("translate(", null, pxComma, null, pxParen);
          q2.push({ i: i2 - 4, x: interpolateNumber(xa, xb2) }, { i: i2 - 2, x: interpolateNumber(ya2, yb2) });
        } else if (xb2 || yb2) {
          s2.push("translate(" + xb2 + pxComma + yb2 + pxParen);
        }
      }
      function rotate(a2, b, s2, q2) {
        if (a2 !== b) {
          if (a2 - b > 180)
            b += 360;
          else if (b - a2 > 180)
            a2 += 360;
          q2.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: interpolateNumber(a2, b) });
        } else if (b) {
          s2.push(pop(s2) + "rotate(" + b + degParen);
        }
      }
      function skewX(a2, b, s2, q2) {
        if (a2 !== b) {
          q2.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: interpolateNumber(a2, b) });
        } else if (b) {
          s2.push(pop(s2) + "skewX(" + b + degParen);
        }
      }
      function scale(xa, ya2, xb2, yb2, s2, q2) {
        if (xa !== xb2 || ya2 !== yb2) {
          var i2 = s2.push(pop(s2) + "scale(", null, ",", null, ")");
          q2.push({ i: i2 - 4, x: interpolateNumber(xa, xb2) }, { i: i2 - 2, x: interpolateNumber(ya2, yb2) });
        } else if (xb2 !== 1 || yb2 !== 1) {
          s2.push(pop(s2) + "scale(" + xb2 + "," + yb2 + ")");
        }
      }
      return function(a2, b) {
        var s2 = [], q2 = [];
        a2 = parse(a2), b = parse(b);
        translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q2);
        rotate(a2.rotate, b.rotate, s2, q2);
        skewX(a2.skewX, b.skewX, s2, q2);
        scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q2);
        a2 = b = null;
        return function(t2) {
          var i2 = -1, n2 = q2.length, o2;
          while (++i2 < n2)
            s2[(o2 = q2[i2]).i] = o2.x(t2);
          return s2.join("");
        };
      };
    }
    var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
    var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
    var epsilon2 = 1e-12;
    function cosh(x2) {
      return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
    }
    function sinh(x2) {
      return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
    }
    function tanh(x2) {
      return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
    }
    const interpolateZoom = function zoomRho(rho, rho2, rho4) {
      function zoom2(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i2, S2;
        if (d2 < epsilon2) {
          S2 = Math.log(w1 / w0) / rho;
          i2 = function(t2) {
            return [
              ux0 + t2 * dx,
              uy0 + t2 * dy,
              w0 * Math.exp(rho * t2 * S2)
            ];
          };
        } else {
          var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
          S2 = (r1 - r0) / rho;
          i2 = function(t2) {
            var s2 = t2 * S2, coshr0 = cosh(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
            return [
              ux0 + u2 * dx,
              uy0 + u2 * dy,
              w0 * coshr0 / cosh(rho * s2 + r0)
            ];
          };
        }
        i2.duration = S2 * 1e3 * rho / Math.SQRT2;
        return i2;
      }
      zoom2.rho = function(_2) {
        var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
        return zoomRho(_1, _22, _4);
      };
      return zoom2;
    }(Math.SQRT2, 2, 4);
    var frame = 0, timeout$1 = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f2) {
      setTimeout(f2, 17);
    };
    function now$3() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }
    function clearNow() {
      clockNow = 0;
    }
    function Timer() {
      this._call = this._time = this._next = null;
    }
    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function")
          throw new TypeError("callback is not a function");
        time = (time == null ? now$3() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail)
            taskTail._next = this;
          else
            taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };
    function timer(callback, delay, time) {
      var t2 = new Timer();
      t2.restart(callback, delay, time);
      return t2;
    }
    function timerFlush() {
      now$3();
      ++frame;
      var t2 = taskHead, e2;
      while (t2) {
        if ((e2 = clockNow - t2._time) >= 0)
          t2._call.call(void 0, e2);
        t2 = t2._next;
      }
      --frame;
    }
    function wake() {
      clockNow = (clockLast = clock.now()) + clockSkew;
      frame = timeout$1 = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }
    function poke() {
      var now2 = clock.now(), delay = now2 - clockLast;
      if (delay > pokeDelay)
        clockSkew -= delay, clockLast = now2;
    }
    function nap() {
      var t0, t1 = taskHead, t2, time = Infinity;
      while (t1) {
        if (t1._call) {
          if (time > t1._time)
            time = t1._time;
          t0 = t1, t1 = t1._next;
        } else {
          t2 = t1._next, t1._next = null;
          t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
      }
      taskTail = t0;
      sleep(time);
    }
    function sleep(time) {
      if (frame)
        return;
      if (timeout$1)
        timeout$1 = clearTimeout(timeout$1);
      var delay = time - clockNow;
      if (delay > 24) {
        if (time < Infinity)
          timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval)
          interval = clearInterval(interval);
      } else {
        if (!interval)
          clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }
    function timeout(callback, delay, time) {
      var t2 = new Timer();
      delay = delay == null ? 0 : +delay;
      t2.restart((elapsed) => {
        t2.stop();
        callback(elapsed + delay);
      }, delay, time);
      return t2;
    }
    var emptyOn = dispatch("start", "end", "cancel", "interrupt");
    var emptyTween = [];
    var CREATED = 0;
    var SCHEDULED = 1;
    var STARTING = 2;
    var STARTED = 3;
    var RUNNING = 4;
    var ENDING = 5;
    var ENDED = 6;
    function schedule(node, name, id2, index2, group, timing) {
      var schedules = node.__transition;
      if (!schedules)
        node.__transition = {};
      else if (id2 in schedules)
        return;
      create(node, id2, {
        name,
        index: index2,
        group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
      });
    }
    function init(node, id2) {
      var schedule2 = get(node, id2);
      if (schedule2.state > CREATED)
        throw new Error("too late; already scheduled");
      return schedule2;
    }
    function set(node, id2) {
      var schedule2 = get(node, id2);
      if (schedule2.state > STARTED)
        throw new Error("too late; already running");
      return schedule2;
    }
    function get(node, id2) {
      var schedule2 = node.__transition;
      if (!schedule2 || !(schedule2 = schedule2[id2]))
        throw new Error("transition not found");
      return schedule2;
    }
    function create(node, id2, self2) {
      var schedules = node.__transition, tween;
      schedules[id2] = self2;
      self2.timer = timer(schedule2, 0, self2.time);
      function schedule2(elapsed) {
        self2.state = SCHEDULED;
        self2.timer.restart(start2, self2.delay, self2.time);
        if (self2.delay <= elapsed)
          start2(elapsed - self2.delay);
      }
      function start2(elapsed) {
        var i2, j2, n2, o2;
        if (self2.state !== SCHEDULED)
          return stop();
        for (i2 in schedules) {
          o2 = schedules[i2];
          if (o2.name !== self2.name)
            continue;
          if (o2.state === STARTED)
            return timeout(start2);
          if (o2.state === RUNNING) {
            o2.state = ENDED;
            o2.timer.stop();
            o2.on.call("interrupt", node, node.__data__, o2.index, o2.group);
            delete schedules[i2];
          } else if (+i2 < id2) {
            o2.state = ENDED;
            o2.timer.stop();
            o2.on.call("cancel", node, node.__data__, o2.index, o2.group);
            delete schedules[i2];
          }
        }
        timeout(function() {
          if (self2.state === STARTED) {
            self2.state = RUNNING;
            self2.timer.restart(tick, self2.delay, self2.time);
            tick(elapsed);
          }
        });
        self2.state = STARTING;
        self2.on.call("start", node, node.__data__, self2.index, self2.group);
        if (self2.state !== STARTING)
          return;
        self2.state = STARTED;
        tween = new Array(n2 = self2.tween.length);
        for (i2 = 0, j2 = -1; i2 < n2; ++i2) {
          if (o2 = self2.tween[i2].value.call(node, node.__data__, self2.index, self2.group)) {
            tween[++j2] = o2;
          }
        }
        tween.length = j2 + 1;
      }
      function tick(elapsed) {
        var t2 = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i2 = -1, n2 = tween.length;
        while (++i2 < n2) {
          tween[i2].call(node, t2);
        }
        if (self2.state === ENDING) {
          self2.on.call("end", node, node.__data__, self2.index, self2.group);
          stop();
        }
      }
      function stop() {
        self2.state = ENDED;
        self2.timer.stop();
        delete schedules[id2];
        for (var i2 in schedules)
          return;
        delete node.__transition;
      }
    }
    function interrupt(node, name) {
      var schedules = node.__transition, schedule2, active, empty2 = true, i2;
      if (!schedules)
        return;
      name = name == null ? null : name + "";
      for (i2 in schedules) {
        if ((schedule2 = schedules[i2]).name !== name) {
          empty2 = false;
          continue;
        }
        active = schedule2.state > STARTING && schedule2.state < ENDING;
        schedule2.state = ENDED;
        schedule2.timer.stop();
        schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
        delete schedules[i2];
      }
      if (empty2)
        delete node.__transition;
    }
    function selection_interrupt(name) {
      return this.each(function() {
        interrupt(this, name);
      });
    }
    function tweenRemove(id2, name) {
      var tween0, tween1;
      return function() {
        var schedule2 = set(this, id2), tween = schedule2.tween;
        if (tween !== tween0) {
          tween1 = tween0 = tween;
          for (var i2 = 0, n2 = tween1.length; i2 < n2; ++i2) {
            if (tween1[i2].name === name) {
              tween1 = tween1.slice();
              tween1.splice(i2, 1);
              break;
            }
          }
        }
        schedule2.tween = tween1;
      };
    }
    function tweenFunction(id2, name, value) {
      var tween0, tween1;
      if (typeof value !== "function")
        throw new Error();
      return function() {
        var schedule2 = set(this, id2), tween = schedule2.tween;
        if (tween !== tween0) {
          tween1 = (tween0 = tween).slice();
          for (var t2 = { name, value }, i2 = 0, n2 = tween1.length; i2 < n2; ++i2) {
            if (tween1[i2].name === name) {
              tween1[i2] = t2;
              break;
            }
          }
          if (i2 === n2)
            tween1.push(t2);
        }
        schedule2.tween = tween1;
      };
    }
    function transition_tween(name, value) {
      var id2 = this._id;
      name += "";
      if (arguments.length < 2) {
        var tween = get(this.node(), id2).tween;
        for (var i2 = 0, n2 = tween.length, t2; i2 < n2; ++i2) {
          if ((t2 = tween[i2]).name === name) {
            return t2.value;
          }
        }
        return null;
      }
      return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
    }
    function tweenValue(transition, name, value) {
      var id2 = transition._id;
      transition.each(function() {
        var schedule2 = set(this, id2);
        (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
      });
      return function(node) {
        return get(node, id2).value[name];
      };
    }
    function interpolate(a2, b) {
      var c2;
      return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c2 = color(b)) ? (b = c2, interpolateRgb) : interpolateString)(a2, b);
    }
    function attrRemove(name) {
      return function() {
        this.removeAttribute(name);
      };
    }
    function attrRemoveNS(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }
    function attrConstant(name, interpolate2, value1) {
      var string00, string1 = value1 + "", interpolate0;
      return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
      };
    }
    function attrConstantNS(fullname, interpolate2, value1) {
      var string00, string1 = value1 + "", interpolate0;
      return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
      };
    }
    function attrFunction(name, interpolate2, value) {
      var string00, string10, interpolate0;
      return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null)
          return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
      };
    }
    function attrFunctionNS(fullname, interpolate2, value) {
      var string00, string10, interpolate0;
      return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null)
          return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
      };
    }
    function transition_attr(name, value) {
      var fullname = namespace(name), i2 = fullname === "transform" ? interpolateTransformSvg : interpolate;
      return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i2, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i2, value));
    }
    function attrInterpolate(name, i2) {
      return function(t2) {
        this.setAttribute(name, i2.call(this, t2));
      };
    }
    function attrInterpolateNS(fullname, i2) {
      return function(t2) {
        this.setAttributeNS(fullname.space, fullname.local, i2.call(this, t2));
      };
    }
    function attrTweenNS(fullname, value) {
      var t0, i0;
      function tween() {
        var i2 = value.apply(this, arguments);
        if (i2 !== i0)
          t0 = (i0 = i2) && attrInterpolateNS(fullname, i2);
        return t0;
      }
      tween._value = value;
      return tween;
    }
    function attrTween(name, value) {
      var t0, i0;
      function tween() {
        var i2 = value.apply(this, arguments);
        if (i2 !== i0)
          t0 = (i0 = i2) && attrInterpolate(name, i2);
        return t0;
      }
      tween._value = value;
      return tween;
    }
    function transition_attrTween(name, value) {
      var key = "attr." + name;
      if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
      if (value == null)
        return this.tween(key, null);
      if (typeof value !== "function")
        throw new Error();
      var fullname = namespace(name);
      return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    }
    function delayFunction(id2, value) {
      return function() {
        init(this, id2).delay = +value.apply(this, arguments);
      };
    }
    function delayConstant(id2, value) {
      return value = +value, function() {
        init(this, id2).delay = value;
      };
    }
    function transition_delay(value) {
      var id2 = this._id;
      return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
    }
    function durationFunction(id2, value) {
      return function() {
        set(this, id2).duration = +value.apply(this, arguments);
      };
    }
    function durationConstant(id2, value) {
      return value = +value, function() {
        set(this, id2).duration = value;
      };
    }
    function transition_duration(value) {
      var id2 = this._id;
      return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
    }
    function easeConstant(id2, value) {
      if (typeof value !== "function")
        throw new Error();
      return function() {
        set(this, id2).ease = value;
      };
    }
    function transition_ease(value) {
      var id2 = this._id;
      return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
    }
    function easeVarying(id2, value) {
      return function() {
        var v2 = value.apply(this, arguments);
        if (typeof v2 !== "function")
          throw new Error();
        set(this, id2).ease = v2;
      };
    }
    function transition_easeVarying(value) {
      if (typeof value !== "function")
        throw new Error();
      return this.each(easeVarying(this._id, value));
    }
    function transition_filter(match) {
      if (typeof match !== "function")
        match = matcher(match);
      for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, subgroup = subgroups[j2] = [], node, i2 = 0; i2 < n2; ++i2) {
          if ((node = group[i2]) && match.call(node, node.__data__, i2, group)) {
            subgroup.push(node);
          }
        }
      }
      return new Transition(subgroups, this._parents, this._name, this._id);
    }
    function transition_merge(transition) {
      if (transition._id !== this._id)
        throw new Error();
      for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
        for (var group0 = groups0[j2], group1 = groups1[j2], n2 = group0.length, merge = merges[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
          if (node = group0[i2] || group1[i2]) {
            merge[i2] = node;
          }
        }
      }
      for (; j2 < m0; ++j2) {
        merges[j2] = groups0[j2];
      }
      return new Transition(merges, this._parents, this._name, this._id);
    }
    function start(name) {
      return (name + "").trim().split(/^|\s+/).every(function(t2) {
        var i2 = t2.indexOf(".");
        if (i2 >= 0)
          t2 = t2.slice(0, i2);
        return !t2 || t2 === "start";
      });
    }
    function onFunction(id2, name, listener) {
      var on0, on1, sit = start(name) ? init : set;
      return function() {
        var schedule2 = sit(this, id2), on = schedule2.on;
        if (on !== on0)
          (on1 = (on0 = on).copy()).on(name, listener);
        schedule2.on = on1;
      };
    }
    function transition_on(name, listener) {
      var id2 = this._id;
      return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
    }
    function removeFunction(id2) {
      return function() {
        var parent = this.parentNode;
        for (var i2 in this.__transition)
          if (+i2 !== id2)
            return;
        if (parent)
          parent.removeChild(this);
      };
    }
    function transition_remove() {
      return this.on("end.remove", removeFunction(this._id));
    }
    function transition_select(select2) {
      var name = this._name, id2 = this._id;
      if (typeof select2 !== "function")
        select2 = selector(select2);
      for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, subgroup = subgroups[j2] = new Array(n2), node, subnode, i2 = 0; i2 < n2; ++i2) {
          if ((node = group[i2]) && (subnode = select2.call(node, node.__data__, i2, group))) {
            if ("__data__" in node)
              subnode.__data__ = node.__data__;
            subgroup[i2] = subnode;
            schedule(subgroup[i2], name, id2, i2, subgroup, get(node, id2));
          }
        }
      }
      return new Transition(subgroups, this._parents, name, id2);
    }
    function transition_selectAll(select2) {
      var name = this._name, id2 = this._id;
      if (typeof select2 !== "function")
        select2 = selectorAll(select2);
      for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, node, i2 = 0; i2 < n2; ++i2) {
          if (node = group[i2]) {
            for (var children2 = select2.call(node, node.__data__, i2, group), child, inherit2 = get(node, id2), k2 = 0, l2 = children2.length; k2 < l2; ++k2) {
              if (child = children2[k2]) {
                schedule(child, name, id2, k2, children2, inherit2);
              }
            }
            subgroups.push(children2);
            parents.push(node);
          }
        }
      }
      return new Transition(subgroups, parents, name, id2);
    }
    var Selection = selection.prototype.constructor;
    function transition_selection() {
      return new Selection(this._groups, this._parents);
    }
    function styleNull(name, interpolate2) {
      var string00, string10, interpolate0;
      return function() {
        var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
      };
    }
    function styleRemove(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }
    function styleConstant(name, interpolate2, value1) {
      var string00, string1 = value1 + "", interpolate0;
      return function() {
        var string0 = styleValue(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
      };
    }
    function styleFunction(name, interpolate2, value) {
      var string00, string10, interpolate0;
      return function() {
        var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null)
          string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
      };
    }
    function styleMaybeRemove(id2, name) {
      var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
      return function() {
        var schedule2 = set(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
        if (on !== on0 || listener0 !== listener)
          (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule2.on = on1;
      };
    }
    function transition_style(name, value, priority) {
      var i2 = (name += "") === "transform" ? interpolateTransformCss : interpolate;
      return value == null ? this.styleTween(name, styleNull(name, i2)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i2, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i2, value), priority).on("end.style." + name, null);
    }
    function styleInterpolate(name, i2, priority) {
      return function(t2) {
        this.style.setProperty(name, i2.call(this, t2), priority);
      };
    }
    function styleTween(name, value, priority) {
      var t2, i0;
      function tween() {
        var i2 = value.apply(this, arguments);
        if (i2 !== i0)
          t2 = (i0 = i2) && styleInterpolate(name, i2, priority);
        return t2;
      }
      tween._value = value;
      return tween;
    }
    function transition_styleTween(name, value, priority) {
      var key = "style." + (name += "");
      if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
      if (value == null)
        return this.tween(key, null);
      if (typeof value !== "function")
        throw new Error();
      return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    }
    function textConstant(value) {
      return function() {
        this.textContent = value;
      };
    }
    function textFunction(value) {
      return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
      };
    }
    function transition_text(value) {
      return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
    }
    function textInterpolate(i2) {
      return function(t2) {
        this.textContent = i2.call(this, t2);
      };
    }
    function textTween(value) {
      var t0, i0;
      function tween() {
        var i2 = value.apply(this, arguments);
        if (i2 !== i0)
          t0 = (i0 = i2) && textInterpolate(i2);
        return t0;
      }
      tween._value = value;
      return tween;
    }
    function transition_textTween(value) {
      var key = "text";
      if (arguments.length < 1)
        return (key = this.tween(key)) && key._value;
      if (value == null)
        return this.tween(key, null);
      if (typeof value !== "function")
        throw new Error();
      return this.tween(key, textTween(value));
    }
    function transition_transition() {
      var name = this._name, id0 = this._id, id1 = newId();
      for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, node, i2 = 0; i2 < n2; ++i2) {
          if (node = group[i2]) {
            var inherit2 = get(node, id0);
            schedule(node, name, id1, i2, group, {
              time: inherit2.time + inherit2.delay + inherit2.duration,
              delay: 0,
              duration: inherit2.duration,
              ease: inherit2.ease
            });
          }
        }
      }
      return new Transition(groups, this._parents, name, id1);
    }
    function transition_end() {
      var on0, on1, that = this, id2 = that._id, size = that.size();
      return new Promise(function(resolve, reject) {
        var cancel = { value: reject }, end = { value: function() {
          if (--size === 0)
            resolve();
        } };
        that.each(function() {
          var schedule2 = set(this, id2), on = schedule2.on;
          if (on !== on0) {
            on1 = (on0 = on).copy();
            on1._.cancel.push(cancel);
            on1._.interrupt.push(cancel);
            on1._.end.push(end);
          }
          schedule2.on = on1;
        });
        if (size === 0)
          resolve();
      });
    }
    var id = 0;
    function Transition(groups, parents, name, id2) {
      this._groups = groups;
      this._parents = parents;
      this._name = name;
      this._id = id2;
    }
    function newId() {
      return ++id;
    }
    var selection_prototype = selection.prototype;
    Transition.prototype = {
      constructor: Transition,
      select: transition_select,
      selectAll: transition_selectAll,
      selectChild: selection_prototype.selectChild,
      selectChildren: selection_prototype.selectChildren,
      filter: transition_filter,
      merge: transition_merge,
      selection: transition_selection,
      transition: transition_transition,
      call: selection_prototype.call,
      nodes: selection_prototype.nodes,
      node: selection_prototype.node,
      size: selection_prototype.size,
      empty: selection_prototype.empty,
      each: selection_prototype.each,
      on: transition_on,
      attr: transition_attr,
      attrTween: transition_attrTween,
      style: transition_style,
      styleTween: transition_styleTween,
      text: transition_text,
      textTween: transition_textTween,
      remove: transition_remove,
      tween: transition_tween,
      delay: transition_delay,
      duration: transition_duration,
      ease: transition_ease,
      easeVarying: transition_easeVarying,
      end: transition_end,
      [Symbol.iterator]: selection_prototype[Symbol.iterator]
    };
    function cubicInOut(t2) {
      return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
    }
    var defaultTiming = {
      time: null,
      delay: 0,
      duration: 250,
      ease: cubicInOut
    };
    function inherit(node, id2) {
      var timing;
      while (!(timing = node.__transition) || !(timing = timing[id2])) {
        if (!(node = node.parentNode)) {
          throw new Error(`transition ${id2} not found`);
        }
      }
      return timing;
    }
    function selection_transition(name) {
      var id2, timing;
      if (name instanceof Transition) {
        id2 = name._id, name = name._name;
      } else {
        id2 = newId(), (timing = defaultTiming).time = now$3(), name = name == null ? null : name + "";
      }
      for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
        for (var group = groups[j2], n2 = group.length, node, i2 = 0; i2 < n2; ++i2) {
          if (node = group[i2]) {
            schedule(node, name, id2, i2, group, timing || inherit(node, id2));
          }
        }
      }
      return new Transition(groups, this._parents, name, id2);
    }
    selection.prototype.interrupt = selection_interrupt;
    selection.prototype.transition = selection_transition;
    const constant$1 = (x2) => () => x2;
    function ZoomEvent(type, {
      sourceEvent: sourceEvent2,
      target,
      transform: transform2,
      dispatch: dispatch2
    }) {
      Object.defineProperties(this, {
        type: { value: type, enumerable: true, configurable: true },
        sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
        target: { value: target, enumerable: true, configurable: true },
        transform: { value: transform2, enumerable: true, configurable: true },
        _: { value: dispatch2 }
      });
    }
    function Transform(k2, x2, y2) {
      this.k = k2;
      this.x = x2;
      this.y = y2;
    }
    Transform.prototype = {
      constructor: Transform,
      scale: function(k2) {
        return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
      },
      translate: function(x2, y2) {
        return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
      },
      apply: function(point) {
        return [point[0] * this.k + this.x, point[1] * this.k + this.y];
      },
      applyX: function(x2) {
        return x2 * this.k + this.x;
      },
      applyY: function(y2) {
        return y2 * this.k + this.y;
      },
      invert: function(location) {
        return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
      },
      invertX: function(x2) {
        return (x2 - this.x) / this.k;
      },
      invertY: function(y2) {
        return (y2 - this.y) / this.k;
      },
      rescaleX: function(x2) {
        return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
      },
      rescaleY: function(y2) {
        return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
      },
      toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };
    var identity = new Transform(1, 0, 0);
    transform.prototype = Transform.prototype;
    function transform(node) {
      while (!node.__zoom)
        if (!(node = node.parentNode))
          return identity;
      return node.__zoom;
    }
    function nopropagation(event) {
      event.stopImmediatePropagation();
    }
    function noevent(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    function defaultFilter(event) {
      return (!event.ctrlKey || event.type === "wheel") && !event.button;
    }
    function defaultExtent() {
      var e2 = this;
      if (e2 instanceof SVGElement) {
        e2 = e2.ownerSVGElement || e2;
        if (e2.hasAttribute("viewBox")) {
          e2 = e2.viewBox.baseVal;
          return [[e2.x, e2.y], [e2.x + e2.width, e2.y + e2.height]];
        }
        return [[0, 0], [e2.width.baseVal.value, e2.height.baseVal.value]];
      }
      return [[0, 0], [e2.clientWidth, e2.clientHeight]];
    }
    function defaultTransform() {
      return this.__zoom || identity;
    }
    function defaultWheelDelta(event) {
      return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
    }
    function defaultTouchable() {
      return navigator.maxTouchPoints || "ontouchstart" in this;
    }
    function defaultConstrain(transform2, extent, translateExtent) {
      var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
      return transform2.translate(
        dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
        dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
      );
    }
    function zoom() {
      var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate2 = interpolateZoom, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
      function zoom2(selection2) {
        selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      zoom2.transform = function(collection, transform2, point, event) {
        var selection2 = collection.selection ? collection.selection() : collection;
        selection2.property("__zoom", defaultTransform);
        if (collection !== selection2) {
          schedule2(collection, transform2, point, event);
        } else {
          selection2.interrupt().each(function() {
            gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
          });
        }
      };
      zoom2.scaleBy = function(selection2, k2, p2, event) {
        zoom2.scaleTo(selection2, function() {
          var k0 = this.__zoom.k, k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
          return k0 * k1;
        }, p2, event);
      };
      zoom2.scaleTo = function(selection2, k2, p2, event) {
        zoom2.transform(selection2, function() {
          var e2 = extent.apply(this, arguments), t0 = this.__zoom, p0 = p2 == null ? centroid(e2) : typeof p2 === "function" ? p2.apply(this, arguments) : p2, p1 = t0.invert(p0), k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
          return constrain(translate(scale(t0, k1), p0, p1), e2, translateExtent);
        }, p2, event);
      };
      zoom2.translateBy = function(selection2, x2, y2, event) {
        zoom2.transform(selection2, function() {
          return constrain(this.__zoom.translate(
            typeof x2 === "function" ? x2.apply(this, arguments) : x2,
            typeof y2 === "function" ? y2.apply(this, arguments) : y2
          ), extent.apply(this, arguments), translateExtent);
        }, null, event);
      };
      zoom2.translateTo = function(selection2, x2, y2, p2, event) {
        zoom2.transform(selection2, function() {
          var e2 = extent.apply(this, arguments), t2 = this.__zoom, p0 = p2 == null ? centroid(e2) : typeof p2 === "function" ? p2.apply(this, arguments) : p2;
          return constrain(identity.translate(p0[0], p0[1]).scale(t2.k).translate(
            typeof x2 === "function" ? -x2.apply(this, arguments) : -x2,
            typeof y2 === "function" ? -y2.apply(this, arguments) : -y2
          ), e2, translateExtent);
        }, p2, event);
      };
      function scale(transform2, k2) {
        k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k2));
        return k2 === transform2.k ? transform2 : new Transform(k2, transform2.x, transform2.y);
      }
      function translate(transform2, p0, p1) {
        var x2 = p0[0] - p1[0] * transform2.k, y2 = p0[1] - p1[1] * transform2.k;
        return x2 === transform2.x && y2 === transform2.y ? transform2 : new Transform(transform2.k, x2, y2);
      }
      function centroid(extent2) {
        return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
      }
      function schedule2(transition, transform2, point, event) {
        transition.on("start.zoom", function() {
          gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
          gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
          var that = this, args = arguments, g = gesture(that, args).event(event), e2 = extent.apply(that, args), p2 = point == null ? centroid(e2) : typeof point === "function" ? point.apply(that, args) : point, w2 = Math.max(e2[1][0] - e2[0][0], e2[1][1] - e2[0][1]), a2 = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i2 = interpolate2(a2.invert(p2).concat(w2 / a2.k), b.invert(p2).concat(w2 / b.k));
          return function(t2) {
            if (t2 === 1)
              t2 = b;
            else {
              var l2 = i2(t2), k2 = w2 / l2[2];
              t2 = new Transform(k2, p2[0] - l2[0] * k2, p2[1] - l2[1] * k2);
            }
            g.zoom(null, t2);
          };
        });
      }
      function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
      }
      function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent.apply(that, args);
        this.taps = 0;
      }
      Gesture.prototype = {
        event: function(event) {
          if (event)
            this.sourceEvent = event;
          return this;
        },
        start: function() {
          if (++this.active === 1) {
            this.that.__zooming = this;
            this.emit("start");
          }
          return this;
        },
        zoom: function(key, transform2) {
          if (this.mouse && key !== "mouse")
            this.mouse[1] = transform2.invert(this.mouse[0]);
          if (this.touch0 && key !== "touch")
            this.touch0[1] = transform2.invert(this.touch0[0]);
          if (this.touch1 && key !== "touch")
            this.touch1[1] = transform2.invert(this.touch1[0]);
          this.that.__zoom = transform2;
          this.emit("zoom");
          return this;
        },
        end: function() {
          if (--this.active === 0) {
            delete this.that.__zooming;
            this.emit("end");
          }
          return this;
        },
        emit: function(type) {
          var d2 = select(this.that).datum();
          listeners.call(
            type,
            this.that,
            new ZoomEvent(type, {
              sourceEvent: this.sourceEvent,
              target: zoom2,
              type,
              transform: this.that.__zoom,
              dispatch: listeners
            }),
            d2
          );
        }
      };
      function wheeled(event, ...args) {
        if (!filter2.apply(this, arguments))
          return;
        var g = gesture(this, args).event(event), t2 = this.__zoom, k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t2.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p2 = pointer(event);
        if (g.wheel) {
          if (g.mouse[0][0] !== p2[0] || g.mouse[0][1] !== p2[1]) {
            g.mouse[1] = t2.invert(g.mouse[0] = p2);
          }
          clearTimeout(g.wheel);
        } else if (t2.k === k2)
          return;
        else {
          g.mouse = [p2, t2.invert(p2)];
          interrupt(this);
          g.start();
        }
        noevent(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t2, k2), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
          g.wheel = null;
          g.end();
        }
      }
      function mousedowned(event, ...args) {
        if (touchending || !filter2.apply(this, arguments))
          return;
        var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v2 = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p2 = pointer(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
        dragDisable(event.view);
        nopropagation(event);
        g.mouse = [p2, this.__zoom.invert(p2)];
        interrupt(this);
        g.start();
        function mousemoved(event2) {
          noevent(event2);
          if (!g.moved) {
            var dx = event2.clientX - x0, dy = event2.clientY - y0;
            g.moved = dx * dx + dy * dy > clickDistance2;
          }
          g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event2) {
          v2.on("mousemove.zoom mouseup.zoom", null);
          yesdrag(event2.view, g.moved);
          noevent(event2);
          g.event(event2).end();
        }
      }
      function dblclicked(event, ...args) {
        if (!filter2.apply(this, arguments))
          return;
        var t0 = this.__zoom, p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
        noevent(event);
        if (duration > 0)
          select(this).transition().duration(duration).call(schedule2, t1, p0, event);
        else
          select(this).call(zoom2.transform, t1, p0, event);
      }
      function touchstarted(event, ...args) {
        if (!filter2.apply(this, arguments))
          return;
        var touches = event.touches, n2 = touches.length, g = gesture(this, args, event.changedTouches.length === n2).event(event), started, i2, t2, p2;
        nopropagation(event);
        for (i2 = 0; i2 < n2; ++i2) {
          t2 = touches[i2], p2 = pointer(t2, this);
          p2 = [p2, this.__zoom.invert(p2), t2.identifier];
          if (!g.touch0)
            g.touch0 = p2, started = true, g.taps = 1 + !!touchstarting;
          else if (!g.touch1 && g.touch0[2] !== p2[2])
            g.touch1 = p2, g.taps = 0;
        }
        if (touchstarting)
          touchstarting = clearTimeout(touchstarting);
        if (started) {
          if (g.taps < 2)
            touchfirst = p2[0], touchstarting = setTimeout(function() {
              touchstarting = null;
            }, touchDelay);
          interrupt(this);
          g.start();
        }
      }
      function touchmoved(event, ...args) {
        if (!this.__zooming)
          return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i2, t2, p2, l2;
        noevent(event);
        for (i2 = 0; i2 < n2; ++i2) {
          t2 = touches[i2], p2 = pointer(t2, this);
          if (g.touch0 && g.touch0[2] === t2.identifier)
            g.touch0[0] = p2;
          else if (g.touch1 && g.touch1[2] === t2.identifier)
            g.touch1[0] = p2;
        }
        t2 = g.that.__zoom;
        if (g.touch1) {
          var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl2 = (dl2 = l1[0] - l0[0]) * dl2 + (dl2 = l1[1] - l0[1]) * dl2;
          t2 = scale(t2, Math.sqrt(dp / dl2));
          p2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
          l2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
        } else if (g.touch0)
          p2 = g.touch0[0], l2 = g.touch0[1];
        else
          return;
        g.zoom("touch", constrain(translate(t2, p2, l2), g.extent, translateExtent));
      }
      function touchended(event, ...args) {
        if (!this.__zooming)
          return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i2, t2;
        nopropagation(event);
        if (touchending)
          clearTimeout(touchending);
        touchending = setTimeout(function() {
          touchending = null;
        }, touchDelay);
        for (i2 = 0; i2 < n2; ++i2) {
          t2 = touches[i2];
          if (g.touch0 && g.touch0[2] === t2.identifier)
            delete g.touch0;
          else if (g.touch1 && g.touch1[2] === t2.identifier)
            delete g.touch1;
        }
        if (g.touch1 && !g.touch0)
          g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0)
          g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
          g.end();
          if (g.taps === 2) {
            t2 = pointer(t2, this);
            if (Math.hypot(touchfirst[0] - t2[0], touchfirst[1] - t2[1]) < tapDistance) {
              var p2 = select(this).on("dblclick.zoom");
              if (p2)
                p2.apply(this, arguments);
            }
          }
        }
      }
      zoom2.wheelDelta = function(_2) {
        return arguments.length ? (wheelDelta = typeof _2 === "function" ? _2 : constant$1(+_2), zoom2) : wheelDelta;
      };
      zoom2.filter = function(_2) {
        return arguments.length ? (filter2 = typeof _2 === "function" ? _2 : constant$1(!!_2), zoom2) : filter2;
      };
      zoom2.touchable = function(_2) {
        return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant$1(!!_2), zoom2) : touchable;
      };
      zoom2.extent = function(_2) {
        return arguments.length ? (extent = typeof _2 === "function" ? _2 : constant$1([[+_2[0][0], +_2[0][1]], [+_2[1][0], +_2[1][1]]]), zoom2) : extent;
      };
      zoom2.scaleExtent = function(_2) {
        return arguments.length ? (scaleExtent[0] = +_2[0], scaleExtent[1] = +_2[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
      };
      zoom2.translateExtent = function(_2) {
        return arguments.length ? (translateExtent[0][0] = +_2[0][0], translateExtent[1][0] = +_2[1][0], translateExtent[0][1] = +_2[0][1], translateExtent[1][1] = +_2[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
      };
      zoom2.constrain = function(_2) {
        return arguments.length ? (constrain = _2, zoom2) : constrain;
      };
      zoom2.duration = function(_2) {
        return arguments.length ? (duration = +_2, zoom2) : duration;
      };
      zoom2.interpolate = function(_2) {
        return arguments.length ? (interpolate2 = _2, zoom2) : interpolate2;
      };
      zoom2.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom2 : value;
      };
      zoom2.clickDistance = function(_2) {
        return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, zoom2) : Math.sqrt(clickDistance2);
      };
      zoom2.tapDistance = function(_2) {
        return arguments.length ? (tapDistance = +_2, zoom2) : tapDistance;
      };
      return zoom2;
    }
    class InternMap extends Map {
      constructor(entries, key = keyof) {
        super();
        Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
        if (entries != null)
          for (const [key2, value] of entries)
            this.set(key2, value);
      }
      get(key) {
        return super.get(intern_get(this, key));
      }
      has(key) {
        return super.has(intern_get(this, key));
      }
      set(key, value) {
        return super.set(intern_set(this, key), value);
      }
      delete(key) {
        return super.delete(intern_delete(this, key));
      }
    }
    function intern_get({ _intern, _key }, value) {
      const key = _key(value);
      return _intern.has(key) ? _intern.get(key) : value;
    }
    function intern_set({ _intern, _key }, value) {
      const key = _key(value);
      if (_intern.has(key))
        return _intern.get(key);
      _intern.set(key, value);
      return value;
    }
    function intern_delete({ _intern, _key }, value) {
      const key = _key(value);
      if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
      }
      return value;
    }
    function keyof(value) {
      return value !== null && typeof value === "object" ? value.valueOf() : value;
    }
    function max$1(values, valueof) {
      let max2;
      if (valueof === void 0) {
        for (const value of values) {
          if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
            max2 = value;
          }
        }
      } else {
        let index2 = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index2, values)) != null && (max2 < value || max2 === void 0 && value >= value)) {
            max2 = value;
          }
        }
      }
      return max2;
    }
    function min$1(values, valueof) {
      let min2;
      if (valueof === void 0) {
        for (const value of values) {
          if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
            min2 = value;
          }
        }
      } else {
        let index2 = -1;
        for (let value of values) {
          if ((value = valueof(value, ++index2, values)) != null && (min2 > value || min2 === void 0 && value >= value)) {
            min2 = value;
          }
        }
      }
      return min2;
    }
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max, nativeMin = Math.min;
    var now$2 = function() {
      return root.Date.now();
    };
    function debounce$1(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now$2();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now$2());
      }
      function debounced() {
        var time = now$2(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function throttle(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce$1(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    var lodash_throttle = throttle;
    var Easing = {
      Linear: {
        None: function(amount) {
          return amount;
        }
      },
      Quadratic: {
        In: function(amount) {
          return amount * amount;
        },
        Out: function(amount) {
          return amount * (2 - amount);
        },
        InOut: function(amount) {
          if ((amount *= 2) < 1) {
            return 0.5 * amount * amount;
          }
          return -0.5 * (--amount * (amount - 2) - 1);
        }
      },
      Cubic: {
        In: function(amount) {
          return amount * amount * amount;
        },
        Out: function(amount) {
          return --amount * amount * amount + 1;
        },
        InOut: function(amount) {
          if ((amount *= 2) < 1) {
            return 0.5 * amount * amount * amount;
          }
          return 0.5 * ((amount -= 2) * amount * amount + 2);
        }
      },
      Quartic: {
        In: function(amount) {
          return amount * amount * amount * amount;
        },
        Out: function(amount) {
          return 1 - --amount * amount * amount * amount;
        },
        InOut: function(amount) {
          if ((amount *= 2) < 1) {
            return 0.5 * amount * amount * amount * amount;
          }
          return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        }
      },
      Quintic: {
        In: function(amount) {
          return amount * amount * amount * amount * amount;
        },
        Out: function(amount) {
          return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function(amount) {
          if ((amount *= 2) < 1) {
            return 0.5 * amount * amount * amount * amount * amount;
          }
          return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        }
      },
      Sinusoidal: {
        In: function(amount) {
          return 1 - Math.cos(amount * Math.PI / 2);
        },
        Out: function(amount) {
          return Math.sin(amount * Math.PI / 2);
        },
        InOut: function(amount) {
          return 0.5 * (1 - Math.cos(Math.PI * amount));
        }
      },
      Exponential: {
        In: function(amount) {
          return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function(amount) {
          return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function(amount) {
          if (amount === 0) {
            return 0;
          }
          if (amount === 1) {
            return 1;
          }
          if ((amount *= 2) < 1) {
            return 0.5 * Math.pow(1024, amount - 1);
          }
          return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        }
      },
      Circular: {
        In: function(amount) {
          return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function(amount) {
          return Math.sqrt(1 - --amount * amount);
        },
        InOut: function(amount) {
          if ((amount *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
          }
          return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        }
      },
      Elastic: {
        In: function(amount) {
          if (amount === 0) {
            return 0;
          }
          if (amount === 1) {
            return 1;
          }
          return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function(amount) {
          if (amount === 0) {
            return 0;
          }
          if (amount === 1) {
            return 1;
          }
          return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function(amount) {
          if (amount === 0) {
            return 0;
          }
          if (amount === 1) {
            return 1;
          }
          amount *= 2;
          if (amount < 1) {
            return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
          }
          return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        }
      },
      Back: {
        In: function(amount) {
          var s2 = 1.70158;
          return amount * amount * ((s2 + 1) * amount - s2);
        },
        Out: function(amount) {
          var s2 = 1.70158;
          return --amount * amount * ((s2 + 1) * amount + s2) + 1;
        },
        InOut: function(amount) {
          var s2 = 1.70158 * 1.525;
          if ((amount *= 2) < 1) {
            return 0.5 * (amount * amount * ((s2 + 1) * amount - s2));
          }
          return 0.5 * ((amount -= 2) * amount * ((s2 + 1) * amount + s2) + 2);
        }
      },
      Bounce: {
        In: function(amount) {
          return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function(amount) {
          if (amount < 1 / 2.75) {
            return 7.5625 * amount * amount;
          } else if (amount < 2 / 2.75) {
            return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
          } else if (amount < 2.5 / 2.75) {
            return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
          } else {
            return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
          }
        },
        InOut: function(amount) {
          if (amount < 0.5) {
            return Easing.Bounce.In(amount * 2) * 0.5;
          }
          return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        }
      }
    };
    var now;
    if (typeof self === "undefined" && typeof process !== "undefined" && process.hrtime) {
      now = function() {
        var time = process.hrtime();
        return time[0] * 1e3 + time[1] / 1e6;
      };
    } else if (typeof self !== "undefined" && self.performance !== void 0 && self.performance.now !== void 0) {
      now = self.performance.now.bind(self.performance);
    } else if (Date.now !== void 0) {
      now = Date.now;
    } else {
      now = function() {
        return new Date().getTime();
      };
    }
    var now$1 = now;
    var Group = function() {
      function Group2() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
      }
      Group2.prototype.getAll = function() {
        var _this = this;
        return Object.keys(this._tweens).map(function(tweenId) {
          return _this._tweens[tweenId];
        });
      };
      Group2.prototype.removeAll = function() {
        this._tweens = {};
      };
      Group2.prototype.add = function(tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
      };
      Group2.prototype.remove = function(tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
      };
      Group2.prototype.update = function(time, preserve) {
        if (time === void 0) {
          time = now$1();
        }
        if (preserve === void 0) {
          preserve = false;
        }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
          return false;
        }
        while (tweenIds.length > 0) {
          this._tweensAddedDuringUpdate = {};
          for (var i2 = 0; i2 < tweenIds.length; i2++) {
            var tween = this._tweens[tweenIds[i2]];
            var autoStart = !preserve;
            if (tween && tween.update(time, autoStart) === false && !preserve) {
              delete this._tweens[tweenIds[i2]];
            }
          }
          tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
      };
      return Group2;
    }();
    var Interpolation = {
      Linear: function(v2, k2) {
        var m2 = v2.length - 1;
        var f2 = m2 * k2;
        var i2 = Math.floor(f2);
        var fn = Interpolation.Utils.Linear;
        if (k2 < 0) {
          return fn(v2[0], v2[1], f2);
        }
        if (k2 > 1) {
          return fn(v2[m2], v2[m2 - 1], m2 - f2);
        }
        return fn(v2[i2], v2[i2 + 1 > m2 ? m2 : i2 + 1], f2 - i2);
      },
      Bezier: function(v2, k2) {
        var b = 0;
        var n2 = v2.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for (var i2 = 0; i2 <= n2; i2++) {
          b += pw(1 - k2, n2 - i2) * pw(k2, i2) * v2[i2] * bn(n2, i2);
        }
        return b;
      },
      CatmullRom: function(v2, k2) {
        var m2 = v2.length - 1;
        var f2 = m2 * k2;
        var i2 = Math.floor(f2);
        var fn = Interpolation.Utils.CatmullRom;
        if (v2[0] === v2[m2]) {
          if (k2 < 0) {
            i2 = Math.floor(f2 = m2 * (1 + k2));
          }
          return fn(v2[(i2 - 1 + m2) % m2], v2[i2], v2[(i2 + 1) % m2], v2[(i2 + 2) % m2], f2 - i2);
        } else {
          if (k2 < 0) {
            return v2[0] - (fn(v2[0], v2[0], v2[1], v2[1], -f2) - v2[0]);
          }
          if (k2 > 1) {
            return v2[m2] - (fn(v2[m2], v2[m2], v2[m2 - 1], v2[m2 - 1], f2 - m2) - v2[m2]);
          }
          return fn(v2[i2 ? i2 - 1 : 0], v2[i2], v2[m2 < i2 + 1 ? m2 : i2 + 1], v2[m2 < i2 + 2 ? m2 : i2 + 2], f2 - i2);
        }
      },
      Utils: {
        Linear: function(p0, p1, t2) {
          return (p1 - p0) * t2 + p0;
        },
        Bernstein: function(n2, i2) {
          var fc2 = Interpolation.Utils.Factorial;
          return fc2(n2) / fc2(i2) / fc2(n2 - i2);
        },
        Factorial: function() {
          var a2 = [1];
          return function(n2) {
            var s2 = 1;
            if (a2[n2]) {
              return a2[n2];
            }
            for (var i2 = n2; i2 > 1; i2--) {
              s2 *= i2;
            }
            a2[n2] = s2;
            return s2;
          };
        }(),
        CatmullRom: function(p0, p1, p2, p3, t2) {
          var v0 = (p2 - p0) * 0.5;
          var v1 = (p3 - p1) * 0.5;
          var t22 = t2 * t2;
          var t3 = t2 * t22;
          return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t22 + v0 * t2 + p1;
        }
      }
    };
    var Sequence = function() {
      function Sequence2() {
      }
      Sequence2.nextId = function() {
        return Sequence2._nextId++;
      };
      Sequence2._nextId = 0;
      return Sequence2;
    }();
    var mainGroup = new Group();
    var Tween = function() {
      function Tween2(_object, _group) {
        if (_group === void 0) {
          _group = mainGroup;
        }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1e3;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
      }
      Tween2.prototype.getId = function() {
        return this._id;
      };
      Tween2.prototype.isPlaying = function() {
        return this._isPlaying;
      };
      Tween2.prototype.isPaused = function() {
        return this._isPaused;
      };
      Tween2.prototype.to = function(properties, duration) {
        this._valuesEnd = Object.create(properties);
        if (duration !== void 0) {
          this._duration = duration;
        }
        return this;
      };
      Tween2.prototype.duration = function(d2) {
        this._duration = d2;
        return this;
      };
      Tween2.prototype.start = function(time) {
        if (this._isPlaying) {
          return this;
        }
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
          this._reversed = false;
          for (var property in this._valuesStartRepeat) {
            this._swapEndStartRepeatValues(property);
            this._valuesStart[property] = this._valuesStartRepeat[property];
          }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time !== void 0 ? typeof time === "string" ? now$1() + parseFloat(time) : time : now$1();
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
      };
      Tween2.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
          var startValue = _object[property];
          var startValueIsArray = Array.isArray(startValue);
          var propType = startValueIsArray ? "array" : typeof startValue;
          var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
          if (propType === "undefined" || propType === "function") {
            continue;
          }
          if (isInterpolationList) {
            var endValues = _valuesEnd[property];
            if (endValues.length === 0) {
              continue;
            }
            endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
            _valuesEnd[property] = [startValue].concat(endValues);
          }
          if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
            _valuesStart[property] = startValueIsArray ? [] : {};
            for (var prop in startValue) {
              _valuesStart[property][prop] = startValue[prop];
            }
            _valuesStartRepeat[property] = startValueIsArray ? [] : {};
            this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
          } else {
            if (typeof _valuesStart[property] === "undefined") {
              _valuesStart[property] = startValue;
            }
            if (!startValueIsArray) {
              _valuesStart[property] *= 1;
            }
            if (isInterpolationList) {
              _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
            } else {
              _valuesStartRepeat[property] = _valuesStart[property] || 0;
            }
          }
        }
      };
      Tween2.prototype.stop = function() {
        if (!this._isChainStopped) {
          this._isChainStopped = true;
          this.stopChainedTweens();
        }
        if (!this._isPlaying) {
          return this;
        }
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
          this._onStopCallback(this._object);
        }
        return this;
      };
      Tween2.prototype.end = function() {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
      };
      Tween2.prototype.pause = function(time) {
        if (time === void 0) {
          time = now$1();
        }
        if (this._isPaused || !this._isPlaying) {
          return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        this._group && this._group.remove(this);
        return this;
      };
      Tween2.prototype.resume = function(time) {
        if (time === void 0) {
          time = now$1();
        }
        if (!this._isPaused || !this._isPlaying) {
          return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        this._group && this._group.add(this);
        return this;
      };
      Tween2.prototype.stopChainedTweens = function() {
        for (var i2 = 0, numChainedTweens = this._chainedTweens.length; i2 < numChainedTweens; i2++) {
          this._chainedTweens[i2].stop();
        }
        return this;
      };
      Tween2.prototype.group = function(group) {
        this._group = group;
        return this;
      };
      Tween2.prototype.delay = function(amount) {
        this._delayTime = amount;
        return this;
      };
      Tween2.prototype.repeat = function(times) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
      };
      Tween2.prototype.repeatDelay = function(amount) {
        this._repeatDelayTime = amount;
        return this;
      };
      Tween2.prototype.yoyo = function(yoyo) {
        this._yoyo = yoyo;
        return this;
      };
      Tween2.prototype.easing = function(easingFunction) {
        this._easingFunction = easingFunction;
        return this;
      };
      Tween2.prototype.interpolation = function(interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
      };
      Tween2.prototype.chain = function() {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
      };
      Tween2.prototype.onStart = function(callback) {
        this._onStartCallback = callback;
        return this;
      };
      Tween2.prototype.onUpdate = function(callback) {
        this._onUpdateCallback = callback;
        return this;
      };
      Tween2.prototype.onRepeat = function(callback) {
        this._onRepeatCallback = callback;
        return this;
      };
      Tween2.prototype.onComplete = function(callback) {
        this._onCompleteCallback = callback;
        return this;
      };
      Tween2.prototype.onStop = function(callback) {
        this._onStopCallback = callback;
        return this;
      };
      Tween2.prototype.update = function(time, autoStart) {
        if (time === void 0) {
          time = now$1();
        }
        if (autoStart === void 0) {
          autoStart = true;
        }
        if (this._isPaused)
          return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
          if (time > endTime)
            return false;
          if (autoStart)
            this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
          return true;
        }
        if (this._onStartCallbackFired === false) {
          if (this._onStartCallback) {
            this._onStartCallback(this._object);
          }
          this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
          this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
          if (this._repeat > 0) {
            if (isFinite(this._repeat)) {
              this._repeat--;
            }
            for (property in this._valuesStartRepeat) {
              if (!this._yoyo && typeof this._valuesEnd[property] === "string") {
                this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
              }
              if (this._yoyo) {
                this._swapEndStartRepeatValues(property);
              }
              this._valuesStart[property] = this._valuesStartRepeat[property];
            }
            if (this._yoyo) {
              this._reversed = !this._reversed;
            }
            if (this._repeatDelayTime !== void 0) {
              this._startTime = time + this._repeatDelayTime;
            } else {
              this._startTime = time + this._delayTime;
            }
            if (this._onRepeatCallback) {
              this._onRepeatCallback(this._object);
            }
            return true;
          } else {
            if (this._onCompleteCallback) {
              this._onCompleteCallback(this._object);
            }
            for (var i2 = 0, numChainedTweens = this._chainedTweens.length; i2 < numChainedTweens; i2++) {
              this._chainedTweens[i2].start(this._startTime + this._duration);
            }
            this._isPlaying = false;
            return false;
          }
        }
        return true;
      };
      Tween2.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
          if (_valuesStart[property] === void 0) {
            continue;
          }
          var start2 = _valuesStart[property] || 0;
          var end = _valuesEnd[property];
          var startIsArray = Array.isArray(_object[property]);
          var endIsArray = Array.isArray(end);
          var isInterpolationList = !startIsArray && endIsArray;
          if (isInterpolationList) {
            _object[property] = this._interpolationFunction(end, value);
          } else if (typeof end === "object" && end) {
            this._updateProperties(_object[property], start2, end, value);
          } else {
            end = this._handleRelativeValue(start2, end);
            if (typeof end === "number") {
              _object[property] = start2 + (end - start2) * value;
            }
          }
        }
      };
      Tween2.prototype._handleRelativeValue = function(start2, end) {
        if (typeof end !== "string") {
          return end;
        }
        if (end.charAt(0) === "+" || end.charAt(0) === "-") {
          return start2 + parseFloat(end);
        } else {
          return parseFloat(end);
        }
      };
      Tween2.prototype._swapEndStartRepeatValues = function(property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === "string") {
          this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        } else {
          this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
      };
      return Tween2;
    }();
    var VERSION = "18.6.4";
    var nextId = Sequence.nextId;
    var TWEEN = mainGroup;
    var getAll = TWEEN.getAll.bind(TWEEN);
    var removeAll$3 = TWEEN.removeAll.bind(TWEEN);
    var add$3 = TWEEN.add.bind(TWEEN);
    var remove = TWEEN.remove.bind(TWEEN);
    var update = TWEEN.update.bind(TWEEN);
    var exports = {
      Easing,
      Group,
      Interpolation,
      now: now$1,
      Sequence,
      nextId,
      Tween,
      VERSION,
      getAll,
      removeAll: removeAll$3,
      add: add$3,
      remove,
      update
    };
    function debounce(func, wait, immediate) {
      var timeout2, args, context, timestamp, result;
      if (null == wait)
        wait = 100;
      function later() {
        var last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
          timeout2 = setTimeout(later, wait - last);
        } else {
          timeout2 = null;
          if (!immediate) {
            result = func.apply(context, args);
            context = args = null;
          }
        }
      }
      var debounced = function() {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout2;
        if (!timeout2)
          timeout2 = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }
        return result;
      };
      debounced.clear = function() {
        if (timeout2) {
          clearTimeout(timeout2);
          timeout2 = null;
        }
      };
      debounced.flush = function() {
        if (timeout2) {
          result = func.apply(context, args);
          context = args = null;
          clearTimeout(timeout2);
          timeout2 = null;
        }
      };
      return debounced;
    }
    debounce.debounce = debounce;
    var debounce_1 = debounce;
    function _classCallCheck$1(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties$1(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass$1(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties$1(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties$1(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _slicedToArray$2(arr, i2) {
      return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i2) || _unsupportedIterableToArray$3(arr, i2) || _nonIterableRest$2();
    }
    function _arrayWithHoles$2(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArrayLimit$2(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e2;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e2 = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e2;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray$3(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray$3(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$3(o2, minLen);
    }
    function _arrayLikeToArray$3(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableRest$2() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var Prop = /* @__PURE__ */ _createClass$1(function Prop2(name, _ref) {
      var _ref$default = _ref["default"], defaultVal = _ref$default === void 0 ? null : _ref$default, _ref$triggerUpdate = _ref.triggerUpdate, triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? function(newVal, state) {
      } : _ref$onChange;
      _classCallCheck$1(this, Prop2);
      this.name = name;
      this.defaultVal = defaultVal;
      this.triggerUpdate = triggerUpdate;
      this.onChange = onChange;
    });
    function index$3(_ref2) {
      var _ref2$stateInit = _ref2.stateInit, stateInit = _ref2$stateInit === void 0 ? function() {
        return {};
      } : _ref2$stateInit, _ref2$props = _ref2.props, rawProps = _ref2$props === void 0 ? {} : _ref2$props, _ref2$methods = _ref2.methods, methods = _ref2$methods === void 0 ? {} : _ref2$methods, _ref2$aliases = _ref2.aliases, aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases, _ref2$init = _ref2.init, initFn = _ref2$init === void 0 ? function() {
      } : _ref2$init, _ref2$update = _ref2.update, updateFn = _ref2$update === void 0 ? function() {
      } : _ref2$update;
      var props = Object.keys(rawProps).map(function(propName) {
        return new Prop(propName, rawProps[propName]);
      });
      return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var state = Object.assign(
          {},
          stateInit instanceof Function ? stateInit(options) : stateInit,
          {
            initialised: false
          }
        );
        var changedProps = {};
        function comp(nodeElement) {
          initStatic(nodeElement, options);
          digest();
          return comp;
        }
        var initStatic = function initStatic2(nodeElement, options2) {
          initFn.call(comp, nodeElement, state, options2);
          state.initialised = true;
        };
        var digest = debounce_1(function() {
          if (!state.initialised) {
            return;
          }
          updateFn.call(comp, state, changedProps);
          changedProps = {};
        }, 1);
        props.forEach(function(prop) {
          comp[prop.name] = getSetProp(prop);
          function getSetProp(_ref3) {
            var prop2 = _ref3.name, _ref3$triggerUpdate = _ref3.triggerUpdate, redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate, _ref3$onChange = _ref3.onChange, onChange = _ref3$onChange === void 0 ? function(newVal, state2) {
            } : _ref3$onChange, _ref3$defaultVal = _ref3.defaultVal, defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
            return function(_2) {
              var curVal = state[prop2];
              if (!arguments.length) {
                return curVal;
              }
              var val = _2 === void 0 ? defaultVal : _2;
              state[prop2] = val;
              onChange.call(comp, val, state, curVal);
              !changedProps.hasOwnProperty(prop2) && (changedProps[prop2] = curVal);
              if (redigest) {
                digest();
              }
              return comp;
            };
          }
        });
        Object.keys(methods).forEach(function(methodName) {
          comp[methodName] = function() {
            var _methods$methodName;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args));
          };
        });
        Object.entries(aliases).forEach(function(_ref4) {
          var _ref5 = _slicedToArray$2(_ref4, 2), alias = _ref5[0], target = _ref5[1];
          return comp[alias] = comp[target];
        });
        comp.resetProps = function() {
          props.forEach(function(prop) {
            comp[prop.name](prop.defaultVal);
          });
          return comp;
        };
        comp.resetProps();
        state._rerender = digest;
        return comp;
      };
    }
    var index$2 = function(p2) {
      return p2 instanceof Function ? p2 : typeof p2 === "string" ? function(obj) {
        return obj[p2];
      } : function(obj) {
        return p2;
      };
    };
    var tinycolor = { exports: {} };
    (function(module2) {
      (function(Math2) {
        var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math2.round, mathMin = Math2.min, mathMax = Math2.max, mathRandom = Math2.random;
        function tinycolor2(color2, opts) {
          color2 = color2 ? color2 : "";
          opts = opts || {};
          if (color2 instanceof tinycolor2) {
            return color2;
          }
          if (!(this instanceof tinycolor2)) {
            return new tinycolor2(color2, opts);
          }
          var rgb2 = inputToRGB(color2);
          this._originalInput = color2, this._r = rgb2.r, this._g = rgb2.g, this._b = rgb2.b, this._a = rgb2.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb2.format;
          this._gradientType = opts.gradientType;
          if (this._r < 1) {
            this._r = mathRound(this._r);
          }
          if (this._g < 1) {
            this._g = mathRound(this._g);
          }
          if (this._b < 1) {
            this._b = mathRound(this._b);
          }
          this._ok = rgb2.ok;
          this._tc_id = tinyCounter++;
        }
        tinycolor2.prototype = {
          isDark: function() {
            return this.getBrightness() < 128;
          },
          isLight: function() {
            return !this.isDark();
          },
          isValid: function() {
            return this._ok;
          },
          getOriginalInput: function() {
            return this._originalInput;
          },
          getFormat: function() {
            return this._format;
          },
          getAlpha: function() {
            return this._a;
          },
          getBrightness: function() {
            var rgb2 = this.toRgb();
            return (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1e3;
          },
          getLuminance: function() {
            var rgb2 = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R2, G2, B2;
            RsRGB = rgb2.r / 255;
            GsRGB = rgb2.g / 255;
            BsRGB = rgb2.b / 255;
            if (RsRGB <= 0.03928) {
              R2 = RsRGB / 12.92;
            } else {
              R2 = Math2.pow((RsRGB + 0.055) / 1.055, 2.4);
            }
            if (GsRGB <= 0.03928) {
              G2 = GsRGB / 12.92;
            } else {
              G2 = Math2.pow((GsRGB + 0.055) / 1.055, 2.4);
            }
            if (BsRGB <= 0.03928) {
              B2 = BsRGB / 12.92;
            } else {
              B2 = Math2.pow((BsRGB + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
          },
          setAlpha: function(value) {
            this._a = boundAlpha(value);
            this._roundA = mathRound(100 * this._a) / 100;
            return this;
          },
          toHsv: function() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
          },
          toHsvString: function() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h2 = mathRound(hsv.h * 360), s2 = mathRound(hsv.s * 100), v2 = mathRound(hsv.v * 100);
            return this._a == 1 ? "hsv(" + h2 + ", " + s2 + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s2 + "%, " + v2 + "%, " + this._roundA + ")";
          },
          toHsl: function() {
            var hsl2 = rgbToHsl(this._r, this._g, this._b);
            return { h: hsl2.h * 360, s: hsl2.s, l: hsl2.l, a: this._a };
          },
          toHslString: function() {
            var hsl2 = rgbToHsl(this._r, this._g, this._b);
            var h2 = mathRound(hsl2.h * 360), s2 = mathRound(hsl2.s * 100), l2 = mathRound(hsl2.l * 100);
            return this._a == 1 ? "hsl(" + h2 + ", " + s2 + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s2 + "%, " + l2 + "%, " + this._roundA + ")";
          },
          toHex: function(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
          },
          toHexString: function(allow3Char) {
            return "#" + this.toHex(allow3Char);
          },
          toHex8: function(allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
          },
          toHex8String: function(allow4Char) {
            return "#" + this.toHex8(allow4Char);
          },
          toRgb: function() {
            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
          },
          toRgbString: function() {
            return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
          },
          toPercentageRgb: function() {
            return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
          },
          toPercentageRgbString: function() {
            return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
          },
          toName: function() {
            if (this._a === 0) {
              return "transparent";
            }
            if (this._a < 1) {
              return false;
            }
            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
          },
          toFilter: function(secondColor) {
            var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
              var s2 = tinycolor2(secondColor);
              secondHex8String = "#" + rgbaToArgbHex(s2._r, s2._g, s2._b, s2._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
          },
          toString: function(format) {
            var formatSet = !!format;
            format = format || this._format;
            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
            if (needsAlphaFormat) {
              if (format === "name" && this._a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
            }
            if (format === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format === "name") {
              formattedString = this.toName();
            }
            if (format === "hsl") {
              formattedString = this.toHslString();
            }
            if (format === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          },
          clone: function() {
            return tinycolor2(this.toString());
          },
          _applyModification: function(fn, args) {
            var color2 = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color2._r;
            this._g = color2._g;
            this._b = color2._b;
            this.setAlpha(color2._a);
            return this;
          },
          lighten: function() {
            return this._applyModification(lighten, arguments);
          },
          brighten: function() {
            return this._applyModification(brighten, arguments);
          },
          darken: function() {
            return this._applyModification(darken, arguments);
          },
          desaturate: function() {
            return this._applyModification(desaturate, arguments);
          },
          saturate: function() {
            return this._applyModification(saturate, arguments);
          },
          greyscale: function() {
            return this._applyModification(greyscale, arguments);
          },
          spin: function() {
            return this._applyModification(spin, arguments);
          },
          _applyCombination: function(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
          },
          analogous: function() {
            return this._applyCombination(analogous, arguments);
          },
          complement: function() {
            return this._applyCombination(complement, arguments);
          },
          monochromatic: function() {
            return this._applyCombination(monochromatic, arguments);
          },
          splitcomplement: function() {
            return this._applyCombination(splitcomplement, arguments);
          },
          triad: function() {
            return this._applyCombination(triad, arguments);
          },
          tetrad: function() {
            return this._applyCombination(tetrad, arguments);
          }
        };
        tinycolor2.fromRatio = function(color2, opts) {
          if (typeof color2 == "object") {
            var newColor = {};
            for (var i2 in color2) {
              if (color2.hasOwnProperty(i2)) {
                if (i2 === "a") {
                  newColor[i2] = color2[i2];
                } else {
                  newColor[i2] = convertToPercentage(color2[i2]);
                }
              }
            }
            color2 = newColor;
          }
          return tinycolor2(color2, opts);
        };
        function inputToRGB(color2) {
          var rgb2 = { r: 0, g: 0, b: 0 };
          var a2 = 1;
          var s2 = null;
          var v2 = null;
          var l2 = null;
          var ok2 = false;
          var format = false;
          if (typeof color2 == "string") {
            color2 = stringInputToObject(color2);
          }
          if (typeof color2 == "object") {
            if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
              rgb2 = rgbToRgb(color2.r, color2.g, color2.b);
              ok2 = true;
              format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
            } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
              s2 = convertToPercentage(color2.s);
              v2 = convertToPercentage(color2.v);
              rgb2 = hsvToRgb(color2.h, s2, v2);
              ok2 = true;
              format = "hsv";
            } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
              s2 = convertToPercentage(color2.s);
              l2 = convertToPercentage(color2.l);
              rgb2 = hslToRgb(color2.h, s2, l2);
              ok2 = true;
              format = "hsl";
            }
            if (color2.hasOwnProperty("a")) {
              a2 = color2.a;
            }
          }
          a2 = boundAlpha(a2);
          return {
            ok: ok2,
            format: color2.format || format,
            r: mathMin(255, mathMax(rgb2.r, 0)),
            g: mathMin(255, mathMax(rgb2.g, 0)),
            b: mathMin(255, mathMax(rgb2.b, 0)),
            a: a2
          };
        }
        function rgbToRgb(r2, g, b) {
          return {
            r: bound01(r2, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
          };
        }
        function rgbToHsl(r2, g, b) {
          r2 = bound01(r2, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max2 = mathMax(r2, g, b), min2 = mathMin(r2, g, b);
          var h2, s2, l2 = (max2 + min2) / 2;
          if (max2 == min2) {
            h2 = s2 = 0;
          } else {
            var d2 = max2 - min2;
            s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
            switch (max2) {
              case r2:
                h2 = (g - b) / d2 + (g < b ? 6 : 0);
                break;
              case g:
                h2 = (b - r2) / d2 + 2;
                break;
              case b:
                h2 = (r2 - g) / d2 + 4;
                break;
            }
            h2 /= 6;
          }
          return { h: h2, s: s2, l: l2 };
        }
        function hslToRgb(h2, s2, l2) {
          var r2, g, b;
          h2 = bound01(h2, 360);
          s2 = bound01(s2, 100);
          l2 = bound01(l2, 100);
          function hue2rgb(p3, q3, t2) {
            if (t2 < 0)
              t2 += 1;
            if (t2 > 1)
              t2 -= 1;
            if (t2 < 1 / 6)
              return p3 + (q3 - p3) * 6 * t2;
            if (t2 < 1 / 2)
              return q3;
            if (t2 < 2 / 3)
              return p3 + (q3 - p3) * (2 / 3 - t2) * 6;
            return p3;
          }
          if (s2 === 0) {
            r2 = g = b = l2;
          } else {
            var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
            var p2 = 2 * l2 - q2;
            r2 = hue2rgb(p2, q2, h2 + 1 / 3);
            g = hue2rgb(p2, q2, h2);
            b = hue2rgb(p2, q2, h2 - 1 / 3);
          }
          return { r: r2 * 255, g: g * 255, b: b * 255 };
        }
        function rgbToHsv(r2, g, b) {
          r2 = bound01(r2, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max2 = mathMax(r2, g, b), min2 = mathMin(r2, g, b);
          var h2, s2, v2 = max2;
          var d2 = max2 - min2;
          s2 = max2 === 0 ? 0 : d2 / max2;
          if (max2 == min2) {
            h2 = 0;
          } else {
            switch (max2) {
              case r2:
                h2 = (g - b) / d2 + (g < b ? 6 : 0);
                break;
              case g:
                h2 = (b - r2) / d2 + 2;
                break;
              case b:
                h2 = (r2 - g) / d2 + 4;
                break;
            }
            h2 /= 6;
          }
          return { h: h2, s: s2, v: v2 };
        }
        function hsvToRgb(h2, s2, v2) {
          h2 = bound01(h2, 360) * 6;
          s2 = bound01(s2, 100);
          v2 = bound01(v2, 100);
          var i2 = Math2.floor(h2), f2 = h2 - i2, p2 = v2 * (1 - s2), q2 = v2 * (1 - f2 * s2), t2 = v2 * (1 - (1 - f2) * s2), mod = i2 % 6, r2 = [v2, q2, p2, p2, t2, v2][mod], g = [t2, v2, v2, q2, p2, p2][mod], b = [p2, p2, t2, v2, v2, q2][mod];
          return { r: r2 * 255, g: g * 255, b: b * 255 };
        }
        function rgbToHex(r2, g, b, allow3Char) {
          var hex2 = [
            pad2(mathRound(r2).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
          ];
          if (allow3Char && hex2[0].charAt(0) == hex2[0].charAt(1) && hex2[1].charAt(0) == hex2[1].charAt(1) && hex2[2].charAt(0) == hex2[2].charAt(1)) {
            return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
          }
          return hex2.join("");
        }
        function rgbaToHex(r2, g, b, a2, allow4Char) {
          var hex2 = [
            pad2(mathRound(r2).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16)),
            pad2(convertDecimalToHex(a2))
          ];
          if (allow4Char && hex2[0].charAt(0) == hex2[0].charAt(1) && hex2[1].charAt(0) == hex2[1].charAt(1) && hex2[2].charAt(0) == hex2[2].charAt(1) && hex2[3].charAt(0) == hex2[3].charAt(1)) {
            return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
          }
          return hex2.join("");
        }
        function rgbaToArgbHex(r2, g, b, a2) {
          var hex2 = [
            pad2(convertDecimalToHex(a2)),
            pad2(mathRound(r2).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
          ];
          return hex2.join("");
        }
        tinycolor2.equals = function(color1, color2) {
          if (!color1 || !color2) {
            return false;
          }
          return tinycolor2(color1).toRgbString() == tinycolor2(color2).toRgbString();
        };
        tinycolor2.random = function() {
          return tinycolor2.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
          });
        };
        function desaturate(color2, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl2 = tinycolor2(color2).toHsl();
          hsl2.s -= amount / 100;
          hsl2.s = clamp01(hsl2.s);
          return tinycolor2(hsl2);
        }
        function saturate(color2, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl2 = tinycolor2(color2).toHsl();
          hsl2.s += amount / 100;
          hsl2.s = clamp01(hsl2.s);
          return tinycolor2(hsl2);
        }
        function greyscale(color2) {
          return tinycolor2(color2).desaturate(100);
        }
        function lighten(color2, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl2 = tinycolor2(color2).toHsl();
          hsl2.l += amount / 100;
          hsl2.l = clamp01(hsl2.l);
          return tinycolor2(hsl2);
        }
        function brighten(color2, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var rgb2 = tinycolor2(color2).toRgb();
          rgb2.r = mathMax(0, mathMin(255, rgb2.r - mathRound(255 * -(amount / 100))));
          rgb2.g = mathMax(0, mathMin(255, rgb2.g - mathRound(255 * -(amount / 100))));
          rgb2.b = mathMax(0, mathMin(255, rgb2.b - mathRound(255 * -(amount / 100))));
          return tinycolor2(rgb2);
        }
        function darken(color2, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl2 = tinycolor2(color2).toHsl();
          hsl2.l -= amount / 100;
          hsl2.l = clamp01(hsl2.l);
          return tinycolor2(hsl2);
        }
        function spin(color2, amount) {
          var hsl2 = tinycolor2(color2).toHsl();
          var hue = (hsl2.h + amount) % 360;
          hsl2.h = hue < 0 ? 360 + hue : hue;
          return tinycolor2(hsl2);
        }
        function complement(color2) {
          var hsl2 = tinycolor2(color2).toHsl();
          hsl2.h = (hsl2.h + 180) % 360;
          return tinycolor2(hsl2);
        }
        function triad(color2) {
          var hsl2 = tinycolor2(color2).toHsl();
          var h2 = hsl2.h;
          return [
            tinycolor2(color2),
            tinycolor2({ h: (h2 + 120) % 360, s: hsl2.s, l: hsl2.l }),
            tinycolor2({ h: (h2 + 240) % 360, s: hsl2.s, l: hsl2.l })
          ];
        }
        function tetrad(color2) {
          var hsl2 = tinycolor2(color2).toHsl();
          var h2 = hsl2.h;
          return [
            tinycolor2(color2),
            tinycolor2({ h: (h2 + 90) % 360, s: hsl2.s, l: hsl2.l }),
            tinycolor2({ h: (h2 + 180) % 360, s: hsl2.s, l: hsl2.l }),
            tinycolor2({ h: (h2 + 270) % 360, s: hsl2.s, l: hsl2.l })
          ];
        }
        function splitcomplement(color2) {
          var hsl2 = tinycolor2(color2).toHsl();
          var h2 = hsl2.h;
          return [
            tinycolor2(color2),
            tinycolor2({ h: (h2 + 72) % 360, s: hsl2.s, l: hsl2.l }),
            tinycolor2({ h: (h2 + 216) % 360, s: hsl2.s, l: hsl2.l })
          ];
        }
        function analogous(color2, results, slices) {
          results = results || 6;
          slices = slices || 30;
          var hsl2 = tinycolor2(color2).toHsl();
          var part = 360 / slices;
          var ret = [tinycolor2(color2)];
          for (hsl2.h = (hsl2.h - (part * results >> 1) + 720) % 360; --results; ) {
            hsl2.h = (hsl2.h + part) % 360;
            ret.push(tinycolor2(hsl2));
          }
          return ret;
        }
        function monochromatic(color2, results) {
          results = results || 6;
          var hsv = tinycolor2(color2).toHsv();
          var h2 = hsv.h, s2 = hsv.s, v2 = hsv.v;
          var ret = [];
          var modification = 1 / results;
          while (results--) {
            ret.push(tinycolor2({ h: h2, s: s2, v: v2 }));
            v2 = (v2 + modification) % 1;
          }
          return ret;
        }
        tinycolor2.mix = function(color1, color2, amount) {
          amount = amount === 0 ? 0 : amount || 50;
          var rgb1 = tinycolor2(color1).toRgb();
          var rgb2 = tinycolor2(color2).toRgb();
          var p2 = amount / 100;
          var rgba2 = {
            r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
            g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
            b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
            a: (rgb2.a - rgb1.a) * p2 + rgb1.a
          };
          return tinycolor2(rgba2);
        };
        tinycolor2.readability = function(color1, color2) {
          var c1 = tinycolor2(color1);
          var c2 = tinycolor2(color2);
          return (Math2.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math2.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
        };
        tinycolor2.isReadable = function(color1, color2, wcag2) {
          var readability = tinycolor2.readability(color1, color2);
          var wcag2Parms, out;
          out = false;
          wcag2Parms = validateWCAG2Parms(wcag2);
          switch (wcag2Parms.level + wcag2Parms.size) {
            case "AAsmall":
            case "AAAlarge":
              out = readability >= 4.5;
              break;
            case "AAlarge":
              out = readability >= 3;
              break;
            case "AAAsmall":
              out = readability >= 7;
              break;
          }
          return out;
        };
        tinycolor2.mostReadable = function(baseColor, colorList, args) {
          var bestColor = null;
          var bestScore = 0;
          var readability;
          var includeFallbackColors, level, size;
          args = args || {};
          includeFallbackColors = args.includeFallbackColors;
          level = args.level;
          size = args.size;
          for (var i2 = 0; i2 < colorList.length; i2++) {
            readability = tinycolor2.readability(baseColor, colorList[i2]);
            if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor2(colorList[i2]);
            }
          }
          if (tinycolor2.isReadable(baseColor, bestColor, { "level": level, "size": size }) || !includeFallbackColors) {
            return bestColor;
          } else {
            args.includeFallbackColors = false;
            return tinycolor2.mostReadable(baseColor, ["#fff", "#000"], args);
          }
        };
        var names = tinycolor2.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        };
        var hexNames = tinycolor2.hexNames = flip(names);
        function flip(o2) {
          var flipped = {};
          for (var i2 in o2) {
            if (o2.hasOwnProperty(i2)) {
              flipped[o2[i2]] = i2;
            }
          }
          return flipped;
        }
        function boundAlpha(a2) {
          a2 = parseFloat(a2);
          if (isNaN(a2) || a2 < 0 || a2 > 1) {
            a2 = 1;
          }
          return a2;
        }
        function bound01(n2, max2) {
          if (isOnePointZero(n2)) {
            n2 = "100%";
          }
          var processPercent = isPercentage(n2);
          n2 = mathMin(max2, mathMax(0, parseFloat(n2)));
          if (processPercent) {
            n2 = parseInt(n2 * max2, 10) / 100;
          }
          if (Math2.abs(n2 - max2) < 1e-6) {
            return 1;
          }
          return n2 % max2 / parseFloat(max2);
        }
        function clamp01(val) {
          return mathMin(1, mathMax(0, val));
        }
        function parseIntFromHex(val) {
          return parseInt(val, 16);
        }
        function isOnePointZero(n2) {
          return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
        }
        function isPercentage(n2) {
          return typeof n2 === "string" && n2.indexOf("%") != -1;
        }
        function pad2(c2) {
          return c2.length == 1 ? "0" + c2 : "" + c2;
        }
        function convertToPercentage(n2) {
          if (n2 <= 1) {
            n2 = n2 * 100 + "%";
          }
          return n2;
        }
        function convertDecimalToHex(d2) {
          return Math2.round(parseFloat(d2) * 255).toString(16);
        }
        function convertHexToDecimal(h2) {
          return parseIntFromHex(h2) / 255;
        }
        var matchers = function() {
          var CSS_INTEGER = "[-\\+]?\\d+%?";
          var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
          var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
          var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          };
        }();
        function isValidCSSUnit(color2) {
          return !!matchers.CSS_UNIT.exec(color2);
        }
        function stringInputToObject(color2) {
          color2 = color2.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
          var named2 = false;
          if (names[color2]) {
            color2 = names[color2];
            named2 = true;
          } else if (color2 == "transparent") {
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
          }
          var match;
          if (match = matchers.rgb.exec(color2)) {
            return { r: match[1], g: match[2], b: match[3] };
          }
          if (match = matchers.rgba.exec(color2)) {
            return { r: match[1], g: match[2], b: match[3], a: match[4] };
          }
          if (match = matchers.hsl.exec(color2)) {
            return { h: match[1], s: match[2], l: match[3] };
          }
          if (match = matchers.hsla.exec(color2)) {
            return { h: match[1], s: match[2], l: match[3], a: match[4] };
          }
          if (match = matchers.hsv.exec(color2)) {
            return { h: match[1], s: match[2], v: match[3] };
          }
          if (match = matchers.hsva.exec(color2)) {
            return { h: match[1], s: match[2], v: match[3], a: match[4] };
          }
          if (match = matchers.hex8.exec(color2)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named2 ? "name" : "hex8"
            };
          }
          if (match = matchers.hex6.exec(color2)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named2 ? "name" : "hex"
            };
          }
          if (match = matchers.hex4.exec(color2)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              a: convertHexToDecimal(match[4] + "" + match[4]),
              format: named2 ? "name" : "hex8"
            };
          }
          if (match = matchers.hex3.exec(color2)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              format: named2 ? "name" : "hex"
            };
          }
          return false;
        }
        function validateWCAG2Parms(parms) {
          var level, size;
          parms = parms || { "level": "AA", "size": "small" };
          level = (parms.level || "AA").toUpperCase();
          size = (parms.size || "small").toLowerCase();
          if (level !== "AA" && level !== "AAA") {
            level = "AA";
          }
          if (size !== "small" && size !== "large") {
            size = "small";
          }
          return { "level": level, "size": size };
        }
        if (module2.exports) {
          module2.exports = tinycolor2;
        } else {
          window.tinycolor = tinycolor2;
        }
      })(Math);
    })(tinycolor);
    const tinyColor = tinycolor.exports;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toConsumableArray$2(arr) {
      return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
    }
    function _arrayWithoutHoles$2(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$2(arr);
    }
    function _iterableToArray$2(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray$2(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray$2(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$2(o2, minLen);
    }
    function _arrayLikeToArray$2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread$2() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ENTROPY = 123;
    var int2HexColor = function int2HexColor2(num) {
      return "#".concat(Math.min(num, Math.pow(2, 24)).toString(16).padStart(6, "0"));
    };
    var rgb2Int = function rgb2Int2(r2, g, b) {
      return (r2 << 16) + (g << 8) + b;
    };
    var colorStr2Int = function colorStr2Int2(str) {
      var _tinyColor$toRgb = tinyColor(str).toRgb(), r2 = _tinyColor$toRgb.r, g = _tinyColor$toRgb.g, b = _tinyColor$toRgb.b;
      return rgb2Int(r2, g, b);
    };
    var checksum = function checksum2(n2, csBits) {
      return n2 * ENTROPY % Math.pow(2, csBits);
    };
    var _default = /* @__PURE__ */ function() {
      function _default2() {
        var csBits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6;
        _classCallCheck(this, _default2);
        this.csBits = csBits;
        this.registry = ["__reserved for background__"];
      }
      _createClass(_default2, [{
        key: "register",
        value: function register(obj) {
          if (this.registry.length >= Math.pow(2, 24 - this.csBits)) {
            return null;
          }
          var idx = this.registry.length;
          var cs = checksum(idx, this.csBits);
          var color2 = int2HexColor(idx + (cs << 24 - this.csBits));
          this.registry.push(obj);
          return color2;
        }
      }, {
        key: "lookup",
        value: function lookup(color2) {
          var n2 = typeof color2 === "string" ? colorStr2Int(color2) : rgb2Int.apply(void 0, _toConsumableArray$2(color2));
          if (!n2)
            return null;
          var idx = n2 & Math.pow(2, 24 - this.csBits) - 1;
          var cs = n2 >> 24 - this.csBits & Math.pow(2, this.csBits) - 1;
          if (checksum(idx, this.csBits) !== cs || idx >= this.registry.length)
            return null;
          return this.registry[idx];
        }
      }]);
      return _default2;
    }();
    function forceCenter(x2, y2, z2) {
      var nodes, strength = 1;
      if (x2 == null)
        x2 = 0;
      if (y2 == null)
        y2 = 0;
      if (z2 == null)
        z2 = 0;
      function force() {
        var i2, n2 = nodes.length, node, sx = 0, sy = 0, sz = 0;
        for (i2 = 0; i2 < n2; ++i2) {
          node = nodes[i2], sx += node.x || 0, sy += node.y || 0, sz += node.z || 0;
        }
        for (sx = (sx / n2 - x2) * strength, sy = (sy / n2 - y2) * strength, sz = (sz / n2 - z2) * strength, i2 = 0; i2 < n2; ++i2) {
          node = nodes[i2];
          if (sx) {
            node.x -= sx;
          }
          if (sy) {
            node.y -= sy;
          }
          if (sz) {
            node.z -= sz;
          }
        }
      }
      force.initialize = function(_2) {
        nodes = _2;
      };
      force.x = function(_2) {
        return arguments.length ? (x2 = +_2, force) : x2;
      };
      force.y = function(_2) {
        return arguments.length ? (y2 = +_2, force) : y2;
      };
      force.z = function(_2) {
        return arguments.length ? (z2 = +_2, force) : z2;
      };
      force.strength = function(_2) {
        return arguments.length ? (strength = +_2, force) : strength;
      };
      return force;
    }
    function tree_add$2(d2) {
      var x2 = +this._x.call(null, d2);
      return add$2(this.cover(x2), x2, d2);
    }
    function add$2(tree, x2, d2) {
      if (isNaN(x2))
        return tree;
      var parent, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, x1 = tree._x1, xm, xp, right, i2, j2;
      if (!node)
        return tree._root = leaf, tree;
      while (node.length) {
        if (right = x2 >= (xm = (x0 + x1) / 2))
          x0 = xm;
        else
          x1 = xm;
        if (parent = node, !(node = node[i2 = +right]))
          return parent[i2] = leaf, tree;
      }
      xp = +tree._x.call(null, node.data);
      if (x2 === xp)
        return leaf.next = node, parent ? parent[i2] = leaf : tree._root = leaf, tree;
      do {
        parent = parent ? parent[i2] = new Array(2) : tree._root = new Array(2);
        if (right = x2 >= (xm = (x0 + x1) / 2))
          x0 = xm;
        else
          x1 = xm;
      } while ((i2 = +right) === (j2 = +(xp >= xm)));
      return parent[j2] = node, parent[i2] = leaf, tree;
    }
    function addAll$2(data) {
      var i2, n2 = data.length, x2, xz = new Array(n2), x0 = Infinity, x1 = -Infinity;
      for (i2 = 0; i2 < n2; ++i2) {
        if (isNaN(x2 = +this._x.call(null, data[i2])))
          continue;
        xz[i2] = x2;
        if (x2 < x0)
          x0 = x2;
        if (x2 > x1)
          x1 = x2;
      }
      if (x0 > x1)
        return this;
      this.cover(x0).cover(x1);
      for (i2 = 0; i2 < n2; ++i2) {
        add$2(this, xz[i2], data[i2]);
      }
      return this;
    }
    function tree_cover$2(x2) {
      if (isNaN(x2 = +x2))
        return this;
      var x0 = this._x0, x1 = this._x1;
      if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x2)) + 1;
      } else {
        var z2 = x1 - x0 || 1, node = this._root, parent, i2;
        while (x0 > x2 || x2 >= x1) {
          i2 = +(x2 < x0);
          parent = new Array(2), parent[i2] = node, node = parent, z2 *= 2;
          switch (i2) {
            case 0:
              x1 = x0 + z2;
              break;
            case 1:
              x0 = x1 - z2;
              break;
          }
        }
        if (this._root && this._root.length)
          this._root = node;
      }
      this._x0 = x0;
      this._x1 = x1;
      return this;
    }
    function tree_data$2() {
      var data = [];
      this.visit(function(node) {
        if (!node.length)
          do
            data.push(node.data);
          while (node = node.next);
      });
      return data;
    }
    function tree_extent$2(_2) {
      return arguments.length ? this.cover(+_2[0][0]).cover(+_2[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
    }
    function Half(node, x0, x1) {
      this.node = node;
      this.x0 = x0;
      this.x1 = x1;
    }
    function tree_find$2(x2, radius) {
      var data, x0 = this._x0, x1, x22, x3 = this._x1, halves = [], node = this._root, q2, i2;
      if (node)
        halves.push(new Half(node, x0, x3));
      if (radius == null)
        radius = Infinity;
      else {
        x0 = x2 - radius;
        x3 = x2 + radius;
      }
      while (q2 = halves.pop()) {
        if (!(node = q2.node) || (x1 = q2.x0) > x3 || (x22 = q2.x1) < x0)
          continue;
        if (node.length) {
          var xm = (x1 + x22) / 2;
          halves.push(
            new Half(node[1], xm, x22),
            new Half(node[0], x1, xm)
          );
          if (i2 = +(x2 >= xm)) {
            q2 = halves[halves.length - 1];
            halves[halves.length - 1] = halves[halves.length - 1 - i2];
            halves[halves.length - 1 - i2] = q2;
          }
        } else {
          var d2 = Math.abs(x2 - +this._x.call(null, node.data));
          if (d2 < radius) {
            radius = d2;
            x0 = x2 - d2;
            x3 = x2 + d2;
            data = node.data;
          }
        }
      }
      return data;
    }
    function tree_remove$2(d2) {
      if (isNaN(x2 = +this._x.call(null, d2)))
        return this;
      var parent, node = this._root, retainer, previous, next, x0 = this._x0, x1 = this._x1, x2, xm, right, i2, j2;
      if (!node)
        return this;
      if (node.length)
        while (true) {
          if (right = x2 >= (xm = (x0 + x1) / 2))
            x0 = xm;
          else
            x1 = xm;
          if (!(parent = node, node = node[i2 = +right]))
            return this;
          if (!node.length)
            break;
          if (parent[i2 + 1 & 1])
            retainer = parent, j2 = i2;
        }
      while (node.data !== d2)
        if (!(previous = node, node = node.next))
          return this;
      if (next = node.next)
        delete node.next;
      if (previous)
        return next ? previous.next = next : delete previous.next, this;
      if (!parent)
        return this._root = next, this;
      next ? parent[i2] = next : delete parent[i2];
      if ((node = parent[0] || parent[1]) && node === (parent[1] || parent[0]) && !node.length) {
        if (retainer)
          retainer[j2] = node;
        else
          this._root = node;
      }
      return this;
    }
    function removeAll$2(data) {
      for (var i2 = 0, n2 = data.length; i2 < n2; ++i2)
        this.remove(data[i2]);
      return this;
    }
    function tree_root$2() {
      return this._root;
    }
    function tree_size$2() {
      var size = 0;
      this.visit(function(node) {
        if (!node.length)
          do
            ++size;
          while (node = node.next);
      });
      return size;
    }
    function tree_visit$2(callback) {
      var halves = [], q2, node = this._root, child, x0, x1;
      if (node)
        halves.push(new Half(node, this._x0, this._x1));
      while (q2 = halves.pop()) {
        if (!callback(node = q2.node, x0 = q2.x0, x1 = q2.x1) && node.length) {
          var xm = (x0 + x1) / 2;
          if (child = node[1])
            halves.push(new Half(child, xm, x1));
          if (child = node[0])
            halves.push(new Half(child, x0, xm));
        }
      }
      return this;
    }
    function tree_visitAfter$2(callback) {
      var halves = [], next = [], q2;
      if (this._root)
        halves.push(new Half(this._root, this._x0, this._x1));
      while (q2 = halves.pop()) {
        var node = q2.node;
        if (node.length) {
          var child, x0 = q2.x0, x1 = q2.x1, xm = (x0 + x1) / 2;
          if (child = node[0])
            halves.push(new Half(child, x0, xm));
          if (child = node[1])
            halves.push(new Half(child, xm, x1));
        }
        next.push(q2);
      }
      while (q2 = next.pop()) {
        callback(q2.node, q2.x0, q2.x1);
      }
      return this;
    }
    function defaultX$2(d2) {
      return d2[0];
    }
    function tree_x$2(_2) {
      return arguments.length ? (this._x = _2, this) : this._x;
    }
    function binarytree(nodes, x2) {
      var tree = new Binarytree(x2 == null ? defaultX$2 : x2, NaN, NaN);
      return nodes == null ? tree : tree.addAll(nodes);
    }
    function Binarytree(x2, x0, x1) {
      this._x = x2;
      this._x0 = x0;
      this._x1 = x1;
      this._root = void 0;
    }
    function leaf_copy$2(leaf) {
      var copy = { data: leaf.data }, next = copy;
      while (leaf = leaf.next)
        next = next.next = { data: leaf.data };
      return copy;
    }
    var treeProto$2 = binarytree.prototype = Binarytree.prototype;
    treeProto$2.copy = function() {
      var copy = new Binarytree(this._x, this._x0, this._x1), node = this._root, nodes, child;
      if (!node)
        return copy;
      if (!node.length)
        return copy._root = leaf_copy$2(node), copy;
      nodes = [{ source: node, target: copy._root = new Array(2) }];
      while (node = nodes.pop()) {
        for (var i2 = 0; i2 < 2; ++i2) {
          if (child = node.source[i2]) {
            if (child.length)
              nodes.push({ source: child, target: node.target[i2] = new Array(2) });
            else
              node.target[i2] = leaf_copy$2(child);
          }
        }
      }
      return copy;
    };
    treeProto$2.add = tree_add$2;
    treeProto$2.addAll = addAll$2;
    treeProto$2.cover = tree_cover$2;
    treeProto$2.data = tree_data$2;
    treeProto$2.extent = tree_extent$2;
    treeProto$2.find = tree_find$2;
    treeProto$2.remove = tree_remove$2;
    treeProto$2.removeAll = removeAll$2;
    treeProto$2.root = tree_root$2;
    treeProto$2.size = tree_size$2;
    treeProto$2.visit = tree_visit$2;
    treeProto$2.visitAfter = tree_visitAfter$2;
    treeProto$2.x = tree_x$2;
    function tree_add$1(d2) {
      const x2 = +this._x.call(null, d2), y2 = +this._y.call(null, d2);
      return add$1(this.cover(x2, y2), x2, y2, d2);
    }
    function add$1(tree, x2, y2, d2) {
      if (isNaN(x2) || isNaN(y2))
        return tree;
      var parent, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i2, j2;
      if (!node)
        return tree._root = leaf, tree;
      while (node.length) {
        if (right = x2 >= (xm = (x0 + x1) / 2))
          x0 = xm;
        else
          x1 = xm;
        if (bottom = y2 >= (ym = (y0 + y1) / 2))
          y0 = ym;
        else
          y1 = ym;
        if (parent = node, !(node = node[i2 = bottom << 1 | right]))
          return parent[i2] = leaf, tree;
      }
      xp = +tree._x.call(null, node.data);
      yp = +tree._y.call(null, node.data);
      if (x2 === xp && y2 === yp)
        return leaf.next = node, parent ? parent[i2] = leaf : tree._root = leaf, tree;
      do {
        parent = parent ? parent[i2] = new Array(4) : tree._root = new Array(4);
        if (right = x2 >= (xm = (x0 + x1) / 2))
          x0 = xm;
        else
          x1 = xm;
        if (bottom = y2 >= (ym = (y0 + y1) / 2))
          y0 = ym;
        else
          y1 = ym;
      } while ((i2 = bottom << 1 | right) === (j2 = (yp >= ym) << 1 | xp >= xm));
      return parent[j2] = node, parent[i2] = leaf, tree;
    }
    function addAll$1(data) {
      var d2, i2, n2 = data.length, x2, y2, xz = new Array(n2), yz = new Array(n2), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (i2 = 0; i2 < n2; ++i2) {
        if (isNaN(x2 = +this._x.call(null, d2 = data[i2])) || isNaN(y2 = +this._y.call(null, d2)))
          continue;
        xz[i2] = x2;
        yz[i2] = y2;
        if (x2 < x0)
          x0 = x2;
        if (x2 > x1)
          x1 = x2;
        if (y2 < y0)
          y0 = y2;
        if (y2 > y1)
          y1 = y2;
      }
      if (x0 > x1 || y0 > y1)
        return this;
      this.cover(x0, y0).cover(x1, y1);
      for (i2 = 0; i2 < n2; ++i2) {
        add$1(this, xz[i2], yz[i2], data[i2]);
      }
      return this;
    }
    function tree_cover$1(x2, y2) {
      if (isNaN(x2 = +x2) || isNaN(y2 = +y2))
        return this;
      var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
      if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x2)) + 1;
        y1 = (y0 = Math.floor(y2)) + 1;
      } else {
        var z2 = x1 - x0 || 1, node = this._root, parent, i2;
        while (x0 > x2 || x2 >= x1 || y0 > y2 || y2 >= y1) {
          i2 = (y2 < y0) << 1 | x2 < x0;
          parent = new Array(4), parent[i2] = node, node = parent, z2 *= 2;
          switch (i2) {
            case 0:
              x1 = x0 + z2, y1 = y0 + z2;
              break;
            case 1:
              x0 = x1 - z2, y1 = y0 + z2;
              break;
            case 2:
              x1 = x0 + z2, y0 = y1 - z2;
              break;
            case 3:
              x0 = x1 - z2, y0 = y1 - z2;
              break;
          }
        }
        if (this._root && this._root.length)
          this._root = node;
      }
      this._x0 = x0;
      this._y0 = y0;
      this._x1 = x1;
      this._y1 = y1;
      return this;
    }
    function tree_data$1() {
      var data = [];
      this.visit(function(node) {
        if (!node.length)
          do
            data.push(node.data);
          while (node = node.next);
      });
      return data;
    }
    function tree_extent$1(_2) {
      return arguments.length ? this.cover(+_2[0][0], +_2[0][1]).cover(+_2[1][0], +_2[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
    }
    function Quad(node, x0, y0, x1, y1) {
      this.node = node;
      this.x0 = x0;
      this.y0 = y0;
      this.x1 = x1;
      this.y1 = y1;
    }
    function tree_find$1(x2, y2, radius) {
      var data, x0 = this._x0, y0 = this._y0, x1, y1, x22, y22, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q2, i2;
      if (node)
        quads.push(new Quad(node, x0, y0, x3, y3));
      if (radius == null)
        radius = Infinity;
      else {
        x0 = x2 - radius, y0 = y2 - radius;
        x3 = x2 + radius, y3 = y2 + radius;
        radius *= radius;
      }
      while (q2 = quads.pop()) {
        if (!(node = q2.node) || (x1 = q2.x0) > x3 || (y1 = q2.y0) > y3 || (x22 = q2.x1) < x0 || (y22 = q2.y1) < y0)
          continue;
        if (node.length) {
          var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2;
          quads.push(
            new Quad(node[3], xm, ym, x22, y22),
            new Quad(node[2], x1, ym, xm, y22),
            new Quad(node[1], xm, y1, x22, ym),
            new Quad(node[0], x1, y1, xm, ym)
          );
          if (i2 = (y2 >= ym) << 1 | x2 >= xm) {
            q2 = quads[quads.length - 1];
            quads[quads.length - 1] = quads[quads.length - 1 - i2];
            quads[quads.length - 1 - i2] = q2;
          }
        } else {
          var dx = x2 - +this._x.call(null, node.data), dy = y2 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
          if (d2 < radius) {
            var d3 = Math.sqrt(radius = d2);
            x0 = x2 - d3, y0 = y2 - d3;
            x3 = x2 + d3, y3 = y2 + d3;
            data = node.data;
          }
        }
      }
      return data;
    }
    function tree_remove$1(d2) {
      if (isNaN(x2 = +this._x.call(null, d2)) || isNaN(y2 = +this._y.call(null, d2)))
        return this;
      var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x2, y2, xm, ym, right, bottom, i2, j2;
      if (!node)
        return this;
      if (node.length)
        while (true) {
          if (right = x2 >= (xm = (x0 + x1) / 2))
            x0 = xm;
          else
            x1 = xm;
          if (bottom = y2 >= (ym = (y0 + y1) / 2))
            y0 = ym;
          else
            y1 = ym;
          if (!(parent = node, node = node[i2 = bottom << 1 | right]))
            return this;
          if (!node.length)
            break;
          if (parent[i2 + 1 & 3] || parent[i2 + 2 & 3] || parent[i2 + 3 & 3])
            retainer = parent, j2 = i2;
        }
      while (node.data !== d2)
        if (!(previous = node, node = node.next))
          return this;
      if (next = node.next)
        delete node.next;
      if (previous)
        return next ? previous.next = next : delete previous.next, this;
      if (!parent)
        return this._root = next, this;
      next ? parent[i2] = next : delete parent[i2];
      if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer)
          retainer[j2] = node;
        else
          this._root = node;
      }
      return this;
    }
    function removeAll$1(data) {
      for (var i2 = 0, n2 = data.length; i2 < n2; ++i2)
        this.remove(data[i2]);
      return this;
    }
    function tree_root$1() {
      return this._root;
    }
    function tree_size$1() {
      var size = 0;
      this.visit(function(node) {
        if (!node.length)
          do
            ++size;
          while (node = node.next);
      });
      return size;
    }
    function tree_visit$1(callback) {
      var quads = [], q2, node = this._root, child, x0, y0, x1, y1;
      if (node)
        quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
      while (q2 = quads.pop()) {
        if (!callback(node = q2.node, x0 = q2.x0, y0 = q2.y0, x1 = q2.x1, y1 = q2.y1) && node.length) {
          var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
          if (child = node[3])
            quads.push(new Quad(child, xm, ym, x1, y1));
          if (child = node[2])
            quads.push(new Quad(child, x0, ym, xm, y1));
          if (child = node[1])
            quads.push(new Quad(child, xm, y0, x1, ym));
          if (child = node[0])
            quads.push(new Quad(child, x0, y0, xm, ym));
        }
      }
      return this;
    }
    function tree_visitAfter$1(callback) {
      var quads = [], next = [], q2;
      if (this._root)
        quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
      while (q2 = quads.pop()) {
        var node = q2.node;
        if (node.length) {
          var child, x0 = q2.x0, y0 = q2.y0, x1 = q2.x1, y1 = q2.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
          if (child = node[0])
            quads.push(new Quad(child, x0, y0, xm, ym));
          if (child = node[1])
            quads.push(new Quad(child, xm, y0, x1, ym));
          if (child = node[2])
            quads.push(new Quad(child, x0, ym, xm, y1));
          if (child = node[3])
            quads.push(new Quad(child, xm, ym, x1, y1));
        }
        next.push(q2);
      }
      while (q2 = next.pop()) {
        callback(q2.node, q2.x0, q2.y0, q2.x1, q2.y1);
      }
      return this;
    }
    function defaultX$1(d2) {
      return d2[0];
    }
    function tree_x$1(_2) {
      return arguments.length ? (this._x = _2, this) : this._x;
    }
    function defaultY$1(d2) {
      return d2[1];
    }
    function tree_y$1(_2) {
      return arguments.length ? (this._y = _2, this) : this._y;
    }
    function quadtree(nodes, x2, y2) {
      var tree = new Quadtree(x2 == null ? defaultX$1 : x2, y2 == null ? defaultY$1 : y2, NaN, NaN, NaN, NaN);
      return nodes == null ? tree : tree.addAll(nodes);
    }
    function Quadtree(x2, y2, x0, y0, x1, y1) {
      this._x = x2;
      this._y = y2;
      this._x0 = x0;
      this._y0 = y0;
      this._x1 = x1;
      this._y1 = y1;
      this._root = void 0;
    }
    function leaf_copy$1(leaf) {
      var copy = { data: leaf.data }, next = copy;
      while (leaf = leaf.next)
        next = next.next = { data: leaf.data };
      return copy;
    }
    var treeProto$1 = quadtree.prototype = Quadtree.prototype;
    treeProto$1.copy = function() {
      var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
      if (!node)
        return copy;
      if (!node.length)
        return copy._root = leaf_copy$1(node), copy;
      nodes = [{ source: node, target: copy._root = new Array(4) }];
      while (node = nodes.pop()) {
        for (var i2 = 0; i2 < 4; ++i2) {
          if (child = node.source[i2]) {
            if (child.length)
              nodes.push({ source: child, target: node.target[i2] = new Array(4) });
            else
              node.target[i2] = leaf_copy$1(child);
          }
        }
      }
      return copy;
    };
    treeProto$1.add = tree_add$1;
    treeProto$1.addAll = addAll$1;
    treeProto$1.cover = tree_cover$1;
    treeProto$1.data = tree_data$1;
    treeProto$1.extent = tree_extent$1;
    treeProto$1.find = tree_find$1;
    treeProto$1.remove = tree_remove$1;
    treeProto$1.removeAll = removeAll$1;
    treeProto$1.root = tree_root$1;
    treeProto$1.size = tree_size$1;
    treeProto$1.visit = tree_visit$1;
    treeProto$1.visitAfter = tree_visitAfter$1;
    treeProto$1.x = tree_x$1;
    treeProto$1.y = tree_y$1;
    function tree_add(d2) {
      var x2 = +this._x.call(null, d2), y2 = +this._y.call(null, d2), z2 = +this._z.call(null, d2);
      return add(this.cover(x2, y2, z2), x2, y2, z2, d2);
    }
    function add(tree, x2, y2, z2, d2) {
      if (isNaN(x2) || isNaN(y2) || isNaN(z2))
        return tree;
      var parent, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, y0 = tree._y0, z0 = tree._z0, x1 = tree._x1, y1 = tree._y1, z1 = tree._z1, xm, ym, zm, xp, yp, zp, right, bottom, deep, i2, j2;
      if (!node)
        return tree._root = leaf, tree;
      while (node.length) {
        if (right = x2 >= (xm = (x0 + x1) / 2))
          x0 = xm;
        else
          x1 = xm;
        if (bottom = y2 >= (ym = (y0 + y1) / 2))
          y0 = ym;
        else
          y1 = ym;
        if (deep = z2 >= (zm = (z0 + z1) / 2))
          z0 = zm;
        else
          z1 = zm;
        if (parent = node, !(node = node[i2 = deep << 2 | bottom << 1 | right]))
          return parent[i2] = leaf, tree;
      }
      xp = +tree._x.call(null, node.data);
      yp = +tree._y.call(null, node.data);
      zp = +tree._z.call(null, node.data);
      if (x2 === xp && y2 === yp && z2 === zp)
        return leaf.next = node, parent ? parent[i2] = leaf : tree._root = leaf, tree;
      do {
        parent = parent ? parent[i2] = new Array(8) : tree._root = new Array(8);
        if (right = x2 >= (xm = (x0 + x1) / 2))
          x0 = xm;
        else
          x1 = xm;
        if (bottom = y2 >= (ym = (y0 + y1) / 2))
          y0 = ym;
        else
          y1 = ym;
        if (deep = z2 >= (zm = (z0 + z1) / 2))
          z0 = zm;
        else
          z1 = zm;
      } while ((i2 = deep << 2 | bottom << 1 | right) === (j2 = (zp >= zm) << 2 | (yp >= ym) << 1 | xp >= xm));
      return parent[j2] = node, parent[i2] = leaf, tree;
    }
    function addAll(data) {
      var d2, i2, n2 = data.length, x2, y2, z2, xz = new Array(n2), yz = new Array(n2), zz = new Array(n2), x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
      for (i2 = 0; i2 < n2; ++i2) {
        if (isNaN(x2 = +this._x.call(null, d2 = data[i2])) || isNaN(y2 = +this._y.call(null, d2)) || isNaN(z2 = +this._z.call(null, d2)))
          continue;
        xz[i2] = x2;
        yz[i2] = y2;
        zz[i2] = z2;
        if (x2 < x0)
          x0 = x2;
        if (x2 > x1)
          x1 = x2;
        if (y2 < y0)
          y0 = y2;
        if (y2 > y1)
          y1 = y2;
        if (z2 < z0)
          z0 = z2;
        if (z2 > z1)
          z1 = z2;
      }
      if (x0 > x1 || y0 > y1 || z0 > z1)
        return this;
      this.cover(x0, y0, z0).cover(x1, y1, z1);
      for (i2 = 0; i2 < n2; ++i2) {
        add(this, xz[i2], yz[i2], zz[i2], data[i2]);
      }
      return this;
    }
    function tree_cover(x2, y2, z2) {
      if (isNaN(x2 = +x2) || isNaN(y2 = +y2) || isNaN(z2 = +z2))
        return this;
      var x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1;
      if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x2)) + 1;
        y1 = (y0 = Math.floor(y2)) + 1;
        z1 = (z0 = Math.floor(z2)) + 1;
      } else {
        var t2 = x1 - x0 || 1, node = this._root, parent, i2;
        while (x0 > x2 || x2 >= x1 || y0 > y2 || y2 >= y1 || z0 > z2 || z2 >= z1) {
          i2 = (z2 < z0) << 2 | (y2 < y0) << 1 | x2 < x0;
          parent = new Array(8), parent[i2] = node, node = parent, t2 *= 2;
          switch (i2) {
            case 0:
              x1 = x0 + t2, y1 = y0 + t2, z1 = z0 + t2;
              break;
            case 1:
              x0 = x1 - t2, y1 = y0 + t2, z1 = z0 + t2;
              break;
            case 2:
              x1 = x0 + t2, y0 = y1 - t2, z1 = z0 + t2;
              break;
            case 3:
              x0 = x1 - t2, y0 = y1 - t2, z1 = z0 + t2;
              break;
            case 4:
              x1 = x0 + t2, y1 = y0 + t2, z0 = z1 - t2;
              break;
            case 5:
              x0 = x1 - t2, y1 = y0 + t2, z0 = z1 - t2;
              break;
            case 6:
              x1 = x0 + t2, y0 = y1 - t2, z0 = z1 - t2;
              break;
            case 7:
              x0 = x1 - t2, y0 = y1 - t2, z0 = z1 - t2;
              break;
          }
        }
        if (this._root && this._root.length)
          this._root = node;
      }
      this._x0 = x0;
      this._y0 = y0;
      this._z0 = z0;
      this._x1 = x1;
      this._y1 = y1;
      this._z1 = z1;
      return this;
    }
    function tree_data() {
      var data = [];
      this.visit(function(node) {
        if (!node.length)
          do
            data.push(node.data);
          while (node = node.next);
      });
      return data;
    }
    function tree_extent(_2) {
      return arguments.length ? this.cover(+_2[0][0], +_2[0][1], +_2[0][2]).cover(+_2[1][0], +_2[1][1], +_2[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
    }
    function Octant(node, x0, y0, z0, x1, y1, z1) {
      this.node = node;
      this.x0 = x0;
      this.y0 = y0;
      this.z0 = z0;
      this.x1 = x1;
      this.y1 = y1;
      this.z1 = z1;
    }
    function tree_find(x2, y2, z2, radius) {
      var data, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1, y1, z1, x22, y22, z22, x3 = this._x1, y3 = this._y1, z3 = this._z1, octs = [], node = this._root, q2, i2;
      if (node)
        octs.push(new Octant(node, x0, y0, z0, x3, y3, z3));
      if (radius == null)
        radius = Infinity;
      else {
        x0 = x2 - radius, y0 = y2 - radius, z0 = z2 - radius;
        x3 = x2 + radius, y3 = y2 + radius, z3 = z2 + radius;
        radius *= radius;
      }
      while (q2 = octs.pop()) {
        if (!(node = q2.node) || (x1 = q2.x0) > x3 || (y1 = q2.y0) > y3 || (z1 = q2.z0) > z3 || (x22 = q2.x1) < x0 || (y22 = q2.y1) < y0 || (z22 = q2.z1) < z0)
          continue;
        if (node.length) {
          var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2, zm = (z1 + z22) / 2;
          octs.push(
            new Octant(node[7], xm, ym, zm, x22, y22, z22),
            new Octant(node[6], x1, ym, zm, xm, y22, z22),
            new Octant(node[5], xm, y1, zm, x22, ym, z22),
            new Octant(node[4], x1, y1, zm, xm, ym, z22),
            new Octant(node[3], xm, ym, z1, x22, y22, zm),
            new Octant(node[2], x1, ym, z1, xm, y22, zm),
            new Octant(node[1], xm, y1, z1, x22, ym, zm),
            new Octant(node[0], x1, y1, z1, xm, ym, zm)
          );
          if (i2 = (z2 >= zm) << 2 | (y2 >= ym) << 1 | x2 >= xm) {
            q2 = octs[octs.length - 1];
            octs[octs.length - 1] = octs[octs.length - 1 - i2];
            octs[octs.length - 1 - i2] = q2;
          }
        } else {
          var dx = x2 - +this._x.call(null, node.data), dy = y2 - +this._y.call(null, node.data), dz = z2 - +this._z.call(null, node.data), d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < radius) {
            var d3 = Math.sqrt(radius = d2);
            x0 = x2 - d3, y0 = y2 - d3, z0 = z2 - d3;
            x3 = x2 + d3, y3 = y2 + d3, z3 = z2 + d3;
            data = node.data;
          }
        }
      }
      return data;
    }
    function tree_remove(d2) {
      if (isNaN(x2 = +this._x.call(null, d2)) || isNaN(y2 = +this._y.call(null, d2)) || isNaN(z2 = +this._z.call(null, d2)))
        return this;
      var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1, x2, y2, z2, xm, ym, zm, right, bottom, deep, i2, j2;
      if (!node)
        return this;
      if (node.length)
        while (true) {
          if (right = x2 >= (xm = (x0 + x1) / 2))
            x0 = xm;
          else
            x1 = xm;
          if (bottom = y2 >= (ym = (y0 + y1) / 2))
            y0 = ym;
          else
            y1 = ym;
          if (deep = z2 >= (zm = (z0 + z1) / 2))
            z0 = zm;
          else
            z1 = zm;
          if (!(parent = node, node = node[i2 = deep << 2 | bottom << 1 | right]))
            return this;
          if (!node.length)
            break;
          if (parent[i2 + 1 & 7] || parent[i2 + 2 & 7] || parent[i2 + 3 & 7] || parent[i2 + 4 & 7] || parent[i2 + 5 & 7] || parent[i2 + 6 & 7] || parent[i2 + 7 & 7])
            retainer = parent, j2 = i2;
        }
      while (node.data !== d2)
        if (!(previous = node, node = node.next))
          return this;
      if (next = node.next)
        delete node.next;
      if (previous)
        return next ? previous.next = next : delete previous.next, this;
      if (!parent)
        return this._root = next, this;
      next ? parent[i2] = next : delete parent[i2];
      if ((node = parent[0] || parent[1] || parent[2] || parent[3] || parent[4] || parent[5] || parent[6] || parent[7]) && node === (parent[7] || parent[6] || parent[5] || parent[4] || parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer)
          retainer[j2] = node;
        else
          this._root = node;
      }
      return this;
    }
    function removeAll(data) {
      for (var i2 = 0, n2 = data.length; i2 < n2; ++i2)
        this.remove(data[i2]);
      return this;
    }
    function tree_root() {
      return this._root;
    }
    function tree_size() {
      var size = 0;
      this.visit(function(node) {
        if (!node.length)
          do
            ++size;
          while (node = node.next);
      });
      return size;
    }
    function tree_visit(callback) {
      var octs = [], q2, node = this._root, child, x0, y0, z0, x1, y1, z1;
      if (node)
        octs.push(new Octant(node, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
      while (q2 = octs.pop()) {
        if (!callback(node = q2.node, x0 = q2.x0, y0 = q2.y0, z0 = q2.z0, x1 = q2.x1, y1 = q2.y1, z1 = q2.z1) && node.length) {
          var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
          if (child = node[7])
            octs.push(new Octant(child, xm, ym, zm, x1, y1, z1));
          if (child = node[6])
            octs.push(new Octant(child, x0, ym, zm, xm, y1, z1));
          if (child = node[5])
            octs.push(new Octant(child, xm, y0, zm, x1, ym, z1));
          if (child = node[4])
            octs.push(new Octant(child, x0, y0, zm, xm, ym, z1));
          if (child = node[3])
            octs.push(new Octant(child, xm, ym, z0, x1, y1, zm));
          if (child = node[2])
            octs.push(new Octant(child, x0, ym, z0, xm, y1, zm));
          if (child = node[1])
            octs.push(new Octant(child, xm, y0, z0, x1, ym, zm));
          if (child = node[0])
            octs.push(new Octant(child, x0, y0, z0, xm, ym, zm));
        }
      }
      return this;
    }
    function tree_visitAfter(callback) {
      var octs = [], next = [], q2;
      if (this._root)
        octs.push(new Octant(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
      while (q2 = octs.pop()) {
        var node = q2.node;
        if (node.length) {
          var child, x0 = q2.x0, y0 = q2.y0, z0 = q2.z0, x1 = q2.x1, y1 = q2.y1, z1 = q2.z1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
          if (child = node[0])
            octs.push(new Octant(child, x0, y0, z0, xm, ym, zm));
          if (child = node[1])
            octs.push(new Octant(child, xm, y0, z0, x1, ym, zm));
          if (child = node[2])
            octs.push(new Octant(child, x0, ym, z0, xm, y1, zm));
          if (child = node[3])
            octs.push(new Octant(child, xm, ym, z0, x1, y1, zm));
          if (child = node[4])
            octs.push(new Octant(child, x0, y0, zm, xm, ym, z1));
          if (child = node[5])
            octs.push(new Octant(child, xm, y0, zm, x1, ym, z1));
          if (child = node[6])
            octs.push(new Octant(child, x0, ym, zm, xm, y1, z1));
          if (child = node[7])
            octs.push(new Octant(child, xm, ym, zm, x1, y1, z1));
        }
        next.push(q2);
      }
      while (q2 = next.pop()) {
        callback(q2.node, q2.x0, q2.y0, q2.z0, q2.x1, q2.y1, q2.z1);
      }
      return this;
    }
    function defaultX(d2) {
      return d2[0];
    }
    function tree_x(_2) {
      return arguments.length ? (this._x = _2, this) : this._x;
    }
    function defaultY(d2) {
      return d2[1];
    }
    function tree_y(_2) {
      return arguments.length ? (this._y = _2, this) : this._y;
    }
    function defaultZ(d2) {
      return d2[2];
    }
    function tree_z(_2) {
      return arguments.length ? (this._z = _2, this) : this._z;
    }
    function octree(nodes, x2, y2, z2) {
      var tree = new Octree(x2 == null ? defaultX : x2, y2 == null ? defaultY : y2, z2 == null ? defaultZ : z2, NaN, NaN, NaN, NaN, NaN, NaN);
      return nodes == null ? tree : tree.addAll(nodes);
    }
    function Octree(x2, y2, z2, x0, y0, z0, x1, y1, z1) {
      this._x = x2;
      this._y = y2;
      this._z = z2;
      this._x0 = x0;
      this._y0 = y0;
      this._z0 = z0;
      this._x1 = x1;
      this._y1 = y1;
      this._z1 = z1;
      this._root = void 0;
    }
    function leaf_copy(leaf) {
      var copy = { data: leaf.data }, next = copy;
      while (leaf = leaf.next)
        next = next.next = { data: leaf.data };
      return copy;
    }
    var treeProto = octree.prototype = Octree.prototype;
    treeProto.copy = function() {
      var copy = new Octree(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), node = this._root, nodes, child;
      if (!node)
        return copy;
      if (!node.length)
        return copy._root = leaf_copy(node), copy;
      nodes = [{ source: node, target: copy._root = new Array(8) }];
      while (node = nodes.pop()) {
        for (var i2 = 0; i2 < 8; ++i2) {
          if (child = node.source[i2]) {
            if (child.length)
              nodes.push({ source: child, target: node.target[i2] = new Array(8) });
            else
              node.target[i2] = leaf_copy(child);
          }
        }
      }
      return copy;
    };
    treeProto.add = tree_add;
    treeProto.addAll = addAll;
    treeProto.cover = tree_cover;
    treeProto.data = tree_data;
    treeProto.extent = tree_extent;
    treeProto.find = tree_find;
    treeProto.remove = tree_remove;
    treeProto.removeAll = removeAll;
    treeProto.root = tree_root;
    treeProto.size = tree_size;
    treeProto.visit = tree_visit;
    treeProto.visitAfter = tree_visitAfter;
    treeProto.x = tree_x;
    treeProto.y = tree_y;
    treeProto.z = tree_z;
    function constant(x2) {
      return function() {
        return x2;
      };
    }
    function jiggle(random) {
      return (random() - 0.5) * 1e-6;
    }
    function index$1(d2) {
      return d2.index;
    }
    function find(nodeById, nodeId) {
      var node = nodeById.get(nodeId);
      if (!node)
        throw new Error("node not found: " + nodeId);
      return node;
    }
    function forceLink(links) {
      var id2 = index$1, strength = defaultStrength, strengths, distance = constant(30), distances, nodes, nDim, count, bias, random, iterations = 1;
      if (links == null)
        links = [];
      function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
      }
      function force(alpha) {
        for (var k2 = 0, n2 = links.length; k2 < iterations; ++k2) {
          for (var i2 = 0, link, source, target, x2 = 0, y2 = 0, z2 = 0, l2, b; i2 < n2; ++i2) {
            link = links[i2], source = link.source, target = link.target;
            x2 = target.x + target.vx - source.x - source.vx || jiggle(random);
            if (nDim > 1) {
              y2 = target.y + target.vy - source.y - source.vy || jiggle(random);
            }
            if (nDim > 2) {
              z2 = target.z + target.vz - source.z - source.vz || jiggle(random);
            }
            l2 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
            l2 = (l2 - distances[i2]) / l2 * alpha * strengths[i2];
            x2 *= l2, y2 *= l2, z2 *= l2;
            target.vx -= x2 * (b = bias[i2]);
            if (nDim > 1) {
              target.vy -= y2 * b;
            }
            if (nDim > 2) {
              target.vz -= z2 * b;
            }
            source.vx += x2 * (b = 1 - b);
            if (nDim > 1) {
              source.vy += y2 * b;
            }
            if (nDim > 2) {
              source.vz += z2 * b;
            }
          }
        }
      }
      function initialize() {
        if (!nodes)
          return;
        var i2, n2 = nodes.length, m2 = links.length, nodeById = new Map(nodes.map((d2, i3) => [id2(d2, i3, nodes), d2])), link;
        for (i2 = 0, count = new Array(n2); i2 < m2; ++i2) {
          link = links[i2], link.index = i2;
          if (typeof link.source !== "object")
            link.source = find(nodeById, link.source);
          if (typeof link.target !== "object")
            link.target = find(nodeById, link.target);
          count[link.source.index] = (count[link.source.index] || 0) + 1;
          count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for (i2 = 0, bias = new Array(m2); i2 < m2; ++i2) {
          link = links[i2], bias[i2] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        }
        strengths = new Array(m2), initializeStrength();
        distances = new Array(m2), initializeDistance();
      }
      function initializeStrength() {
        if (!nodes)
          return;
        for (var i2 = 0, n2 = links.length; i2 < n2; ++i2) {
          strengths[i2] = +strength(links[i2], i2, links);
        }
      }
      function initializeDistance() {
        if (!nodes)
          return;
        for (var i2 = 0, n2 = links.length; i2 < n2; ++i2) {
          distances[i2] = +distance(links[i2], i2, links);
        }
      }
      force.initialize = function(_nodes, ...args) {
        nodes = _nodes;
        random = args.find((arg) => typeof arg === "function") || Math.random;
        nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
        initialize();
      };
      force.links = function(_2) {
        return arguments.length ? (links = _2, initialize(), force) : links;
      };
      force.id = function(_2) {
        return arguments.length ? (id2 = _2, force) : id2;
      };
      force.iterations = function(_2) {
        return arguments.length ? (iterations = +_2, force) : iterations;
      };
      force.strength = function(_2) {
        return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant(+_2), initializeStrength(), force) : strength;
      };
      force.distance = function(_2) {
        return arguments.length ? (distance = typeof _2 === "function" ? _2 : constant(+_2), initializeDistance(), force) : distance;
      };
      return force;
    }
    const a$5 = 1664525;
    const c$2 = 1013904223;
    const m$4 = 4294967296;
    function lcg() {
      let s2 = 1;
      return () => (s2 = (a$5 * s2 + c$2) % m$4) / m$4;
    }
    var MAX_DIMENSIONS = 3;
    function x$2(d2) {
      return d2.x;
    }
    function y$2(d2) {
      return d2.y;
    }
    function z$1(d2) {
      return d2.z;
    }
    var initialRadius = 10, initialAngleRoll = Math.PI * (3 - Math.sqrt(5)), initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221));
    function forceSimulation(nodes, numDimensions) {
      numDimensions = numDimensions || 2;
      var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))), simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch("tick", "end"), random = lcg();
      if (nodes == null)
        nodes = [];
      function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
          stepper.stop();
          event.call("end", simulation);
        }
      }
      function tick(iterations) {
        var i2, n2 = nodes.length, node;
        if (iterations === void 0)
          iterations = 1;
        for (var k2 = 0; k2 < iterations; ++k2) {
          alpha += (alphaTarget - alpha) * alphaDecay;
          forces.forEach(function(force) {
            force(alpha);
          });
          for (i2 = 0; i2 < n2; ++i2) {
            node = nodes[i2];
            if (node.fx == null)
              node.x += node.vx *= velocityDecay;
            else
              node.x = node.fx, node.vx = 0;
            if (nDim > 1) {
              if (node.fy == null)
                node.y += node.vy *= velocityDecay;
              else
                node.y = node.fy, node.vy = 0;
            }
            if (nDim > 2) {
              if (node.fz == null)
                node.z += node.vz *= velocityDecay;
              else
                node.z = node.fz, node.vz = 0;
            }
          }
        }
        return simulation;
      }
      function initializeNodes() {
        for (var i2 = 0, n2 = nodes.length, node; i2 < n2; ++i2) {
          node = nodes[i2], node.index = i2;
          if (node.fx != null)
            node.x = node.fx;
          if (node.fy != null)
            node.y = node.fy;
          if (node.fz != null)
            node.z = node.fz;
          if (isNaN(node.x) || nDim > 1 && isNaN(node.y) || nDim > 2 && isNaN(node.z)) {
            var radius = initialRadius * (nDim > 2 ? Math.cbrt(0.5 + i2) : nDim > 1 ? Math.sqrt(0.5 + i2) : i2), rollAngle = i2 * initialAngleRoll, yawAngle = i2 * initialAngleYaw;
            if (nDim === 1) {
              node.x = radius;
            } else if (nDim === 2) {
              node.x = radius * Math.cos(rollAngle);
              node.y = radius * Math.sin(rollAngle);
            } else {
              node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
              node.y = radius * Math.cos(rollAngle);
              node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
            }
          }
          if (isNaN(node.vx) || nDim > 1 && isNaN(node.vy) || nDim > 2 && isNaN(node.vz)) {
            node.vx = 0;
            if (nDim > 1) {
              node.vy = 0;
            }
            if (nDim > 2) {
              node.vz = 0;
            }
          }
        }
      }
      function initializeForce(force) {
        if (force.initialize)
          force.initialize(nodes, random, nDim);
        return force;
      }
      initializeNodes();
      return simulation = {
        tick,
        restart: function() {
          return stepper.restart(step), simulation;
        },
        stop: function() {
          return stepper.stop(), simulation;
        },
        numDimensions: function(_2) {
          return arguments.length ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_2))), forces.forEach(initializeForce), simulation) : nDim;
        },
        nodes: function(_2) {
          return arguments.length ? (nodes = _2, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },
        alpha: function(_2) {
          return arguments.length ? (alpha = +_2, simulation) : alpha;
        },
        alphaMin: function(_2) {
          return arguments.length ? (alphaMin = +_2, simulation) : alphaMin;
        },
        alphaDecay: function(_2) {
          return arguments.length ? (alphaDecay = +_2, simulation) : +alphaDecay;
        },
        alphaTarget: function(_2) {
          return arguments.length ? (alphaTarget = +_2, simulation) : alphaTarget;
        },
        velocityDecay: function(_2) {
          return arguments.length ? (velocityDecay = 1 - _2, simulation) : 1 - velocityDecay;
        },
        randomSource: function(_2) {
          return arguments.length ? (random = _2, forces.forEach(initializeForce), simulation) : random;
        },
        force: function(name, _2) {
          return arguments.length > 1 ? (_2 == null ? forces.delete(name) : forces.set(name, initializeForce(_2)), simulation) : forces.get(name);
        },
        find: function() {
          var args = Array.prototype.slice.call(arguments);
          var x2 = args.shift() || 0, y2 = (nDim > 1 ? args.shift() : null) || 0, z2 = (nDim > 2 ? args.shift() : null) || 0, radius = args.shift() || Infinity;
          var i2 = 0, n2 = nodes.length, dx, dy, dz, d2, node, closest;
          radius *= radius;
          for (i2 = 0; i2 < n2; ++i2) {
            node = nodes[i2];
            dx = x2 - node.x;
            dy = y2 - (node.y || 0);
            dz = z2 - (node.z || 0);
            d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < radius)
              closest = node, radius = d2;
          }
          return closest;
        },
        on: function(name, _2) {
          return arguments.length > 1 ? (event.on(name, _2), simulation) : event.on(name);
        }
      };
    }
    function forceManyBody() {
      var nodes, nDim, node, random, alpha, strength = constant(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
      function force(_2) {
        var i2, n2 = nodes.length, tree = (nDim === 1 ? binarytree(nodes, x$2) : nDim === 2 ? quadtree(nodes, x$2, y$2) : nDim === 3 ? octree(nodes, x$2, y$2, z$1) : null).visitAfter(accumulate);
        for (alpha = _2, i2 = 0; i2 < n2; ++i2)
          node = nodes[i2], tree.visit(apply);
      }
      function initialize() {
        if (!nodes)
          return;
        var i2, n2 = nodes.length, node2;
        strengths = new Array(n2);
        for (i2 = 0; i2 < n2; ++i2)
          node2 = nodes[i2], strengths[node2.index] = +strength(node2, i2, nodes);
      }
      function accumulate(treeNode) {
        var strength2 = 0, q2, c2, weight = 0, x2, y2, z2, i2;
        var numChildren = treeNode.length;
        if (numChildren) {
          for (x2 = y2 = z2 = i2 = 0; i2 < numChildren; ++i2) {
            if ((q2 = treeNode[i2]) && (c2 = Math.abs(q2.value))) {
              strength2 += q2.value, weight += c2, x2 += c2 * (q2.x || 0), y2 += c2 * (q2.y || 0), z2 += c2 * (q2.z || 0);
            }
          }
          strength2 *= Math.sqrt(4 / numChildren);
          treeNode.x = x2 / weight;
          if (nDim > 1) {
            treeNode.y = y2 / weight;
          }
          if (nDim > 2) {
            treeNode.z = z2 / weight;
          }
        } else {
          q2 = treeNode;
          q2.x = q2.data.x;
          if (nDim > 1) {
            q2.y = q2.data.y;
          }
          if (nDim > 2) {
            q2.z = q2.data.z;
          }
          do
            strength2 += strengths[q2.data.index];
          while (q2 = q2.next);
        }
        treeNode.value = strength2;
      }
      function apply(treeNode, x1, arg1, arg2, arg3) {
        if (!treeNode.value)
          return true;
        var x2 = [arg1, arg2, arg3][nDim - 1];
        var x3 = treeNode.x - node.x, y2 = nDim > 1 ? treeNode.y - node.y : 0, z2 = nDim > 2 ? treeNode.z - node.z : 0, w2 = x2 - x1, l2 = x3 * x3 + y2 * y2 + z2 * z2;
        if (w2 * w2 / theta2 < l2) {
          if (l2 < distanceMax2) {
            if (x3 === 0)
              x3 = jiggle(random), l2 += x3 * x3;
            if (nDim > 1 && y2 === 0)
              y2 = jiggle(random), l2 += y2 * y2;
            if (nDim > 2 && z2 === 0)
              z2 = jiggle(random), l2 += z2 * z2;
            if (l2 < distanceMin2)
              l2 = Math.sqrt(distanceMin2 * l2);
            node.vx += x3 * treeNode.value * alpha / l2;
            if (nDim > 1) {
              node.vy += y2 * treeNode.value * alpha / l2;
            }
            if (nDim > 2) {
              node.vz += z2 * treeNode.value * alpha / l2;
            }
          }
          return true;
        } else if (treeNode.length || l2 >= distanceMax2)
          return;
        if (treeNode.data !== node || treeNode.next) {
          if (x3 === 0)
            x3 = jiggle(random), l2 += x3 * x3;
          if (nDim > 1 && y2 === 0)
            y2 = jiggle(random), l2 += y2 * y2;
          if (nDim > 2 && z2 === 0)
            z2 = jiggle(random), l2 += z2 * z2;
          if (l2 < distanceMin2)
            l2 = Math.sqrt(distanceMin2 * l2);
        }
        do
          if (treeNode.data !== node) {
            w2 = strengths[treeNode.data.index] * alpha / l2;
            node.vx += x3 * w2;
            if (nDim > 1) {
              node.vy += y2 * w2;
            }
            if (nDim > 2) {
              node.vz += z2 * w2;
            }
          }
        while (treeNode = treeNode.next);
      }
      force.initialize = function(_nodes, ...args) {
        nodes = _nodes;
        random = args.find((arg) => typeof arg === "function") || Math.random;
        nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
        initialize();
      };
      force.strength = function(_2) {
        return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant(+_2), initialize(), force) : strength;
      };
      force.distanceMin = function(_2) {
        return arguments.length ? (distanceMin2 = _2 * _2, force) : Math.sqrt(distanceMin2);
      };
      force.distanceMax = function(_2) {
        return arguments.length ? (distanceMax2 = _2 * _2, force) : Math.sqrt(distanceMax2);
      };
      force.theta = function(_2) {
        return arguments.length ? (theta2 = _2 * _2, force) : Math.sqrt(theta2);
      };
      return force;
    }
    function forceRadial(radius, x2, y2, z2) {
      var nodes, nDim, strength = constant(0.1), strengths, radiuses;
      if (typeof radius !== "function")
        radius = constant(+radius);
      if (x2 == null)
        x2 = 0;
      if (y2 == null)
        y2 = 0;
      if (z2 == null)
        z2 = 0;
      function force(alpha) {
        for (var i2 = 0, n2 = nodes.length; i2 < n2; ++i2) {
          var node = nodes[i2], dx = node.x - x2 || 1e-6, dy = (node.y || 0) - y2 || 1e-6, dz = (node.z || 0) - z2 || 1e-6, r2 = Math.sqrt(dx * dx + dy * dy + dz * dz), k2 = (radiuses[i2] - r2) * strengths[i2] * alpha / r2;
          node.vx += dx * k2;
          if (nDim > 1) {
            node.vy += dy * k2;
          }
          if (nDim > 2) {
            node.vz += dz * k2;
          }
        }
      }
      function initialize() {
        if (!nodes)
          return;
        var i2, n2 = nodes.length;
        strengths = new Array(n2);
        radiuses = new Array(n2);
        for (i2 = 0; i2 < n2; ++i2) {
          radiuses[i2] = +radius(nodes[i2], i2, nodes);
          strengths[i2] = isNaN(radiuses[i2]) ? 0 : +strength(nodes[i2], i2, nodes);
        }
      }
      force.initialize = function(initNodes, ...args) {
        nodes = initNodes;
        nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
        initialize();
      };
      force.strength = function(_2) {
        return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant(+_2), initialize(), force) : strength;
      };
      force.radius = function(_2) {
        return arguments.length ? (radius = typeof _2 === "function" ? _2 : constant(+_2), initialize(), force) : radius;
      };
      force.x = function(_2) {
        return arguments.length ? (x2 = +_2, force) : x2;
      };
      force.y = function(_2) {
        return arguments.length ? (y2 = +_2, force) : y2;
      };
      force.z = function(_2) {
        return arguments.length ? (z2 = +_2, force) : z2;
      };
      return force;
    }
    const { abs: abs$1, cos: cos$1, sin: sin$1, acos: acos$1, atan2, sqrt: sqrt$1, pow } = Math;
    function crt(v2) {
      return v2 < 0 ? -pow(-v2, 1 / 3) : pow(v2, 1 / 3);
    }
    const pi$1 = Math.PI, tau = 2 * pi$1, quart = pi$1 / 2, epsilon = 1e-6, nMax = Number.MAX_SAFE_INTEGER || 9007199254740991, nMin = Number.MIN_SAFE_INTEGER || -9007199254740991, ZERO = { x: 0, y: 0, z: 0 };
    const utils = {
      Tvalues: [
        -0.06405689286260563,
        0.06405689286260563,
        -0.1911188674736163,
        0.1911188674736163,
        -0.3150426796961634,
        0.3150426796961634,
        -0.4337935076260451,
        0.4337935076260451,
        -0.5454214713888396,
        0.5454214713888396,
        -0.6480936519369755,
        0.6480936519369755,
        -0.7401241915785544,
        0.7401241915785544,
        -0.820001985973903,
        0.820001985973903,
        -0.8864155270044011,
        0.8864155270044011,
        -0.9382745520027328,
        0.9382745520027328,
        -0.9747285559713095,
        0.9747285559713095,
        -0.9951872199970213,
        0.9951872199970213
      ],
      Cvalues: [
        0.12793819534675216,
        0.12793819534675216,
        0.1258374563468283,
        0.1258374563468283,
        0.12167047292780339,
        0.12167047292780339,
        0.1155056680537256,
        0.1155056680537256,
        0.10744427011596563,
        0.10744427011596563,
        0.09761865210411388,
        0.09761865210411388,
        0.08619016153195327,
        0.08619016153195327,
        0.0733464814110803,
        0.0733464814110803,
        0.05929858491543678,
        0.05929858491543678,
        0.04427743881741981,
        0.04427743881741981,
        0.028531388628933663,
        0.028531388628933663,
        0.0123412297999872,
        0.0123412297999872
      ],
      arcfn: function(t2, derivativeFn) {
        const d2 = derivativeFn(t2);
        let l2 = d2.x * d2.x + d2.y * d2.y;
        if (typeof d2.z !== "undefined") {
          l2 += d2.z * d2.z;
        }
        return sqrt$1(l2);
      },
      compute: function(t2, points, _3d) {
        if (t2 === 0) {
          points[0].t = 0;
          return points[0];
        }
        const order = points.length - 1;
        if (t2 === 1) {
          points[order].t = 1;
          return points[order];
        }
        const mt = 1 - t2;
        let p2 = points;
        if (order === 0) {
          points[0].t = t2;
          return points[0];
        }
        if (order === 1) {
          const ret = {
            x: mt * p2[0].x + t2 * p2[1].x,
            y: mt * p2[0].y + t2 * p2[1].y,
            t: t2
          };
          if (_3d) {
            ret.z = mt * p2[0].z + t2 * p2[1].z;
          }
          return ret;
        }
        if (order < 4) {
          let mt2 = mt * mt, t22 = t2 * t2, a2, b, c2, d2 = 0;
          if (order === 2) {
            p2 = [p2[0], p2[1], p2[2], ZERO];
            a2 = mt2;
            b = mt * t2 * 2;
            c2 = t22;
          } else if (order === 3) {
            a2 = mt2 * mt;
            b = mt2 * t2 * 3;
            c2 = mt * t22 * 3;
            d2 = t2 * t22;
          }
          const ret = {
            x: a2 * p2[0].x + b * p2[1].x + c2 * p2[2].x + d2 * p2[3].x,
            y: a2 * p2[0].y + b * p2[1].y + c2 * p2[2].y + d2 * p2[3].y,
            t: t2
          };
          if (_3d) {
            ret.z = a2 * p2[0].z + b * p2[1].z + c2 * p2[2].z + d2 * p2[3].z;
          }
          return ret;
        }
        const dCpts = JSON.parse(JSON.stringify(points));
        while (dCpts.length > 1) {
          for (let i2 = 0; i2 < dCpts.length - 1; i2++) {
            dCpts[i2] = {
              x: dCpts[i2].x + (dCpts[i2 + 1].x - dCpts[i2].x) * t2,
              y: dCpts[i2].y + (dCpts[i2 + 1].y - dCpts[i2].y) * t2
            };
            if (typeof dCpts[i2].z !== "undefined") {
              dCpts[i2] = dCpts[i2].z + (dCpts[i2 + 1].z - dCpts[i2].z) * t2;
            }
          }
          dCpts.splice(dCpts.length - 1, 1);
        }
        dCpts[0].t = t2;
        return dCpts[0];
      },
      computeWithRatios: function(t2, points, ratios, _3d) {
        const mt = 1 - t2, r2 = ratios, p2 = points;
        let f1 = r2[0], f2 = r2[1], f3 = r2[2], f4 = r2[3], d2;
        f1 *= mt;
        f2 *= t2;
        if (p2.length === 2) {
          d2 = f1 + f2;
          return {
            x: (f1 * p2[0].x + f2 * p2[1].x) / d2,
            y: (f1 * p2[0].y + f2 * p2[1].y) / d2,
            z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z) / d2,
            t: t2
          };
        }
        f1 *= mt;
        f2 *= 2 * mt;
        f3 *= t2 * t2;
        if (p2.length === 3) {
          d2 = f1 + f2 + f3;
          return {
            x: (f1 * p2[0].x + f2 * p2[1].x + f3 * p2[2].x) / d2,
            y: (f1 * p2[0].y + f2 * p2[1].y + f3 * p2[2].y) / d2,
            z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z + f3 * p2[2].z) / d2,
            t: t2
          };
        }
        f1 *= mt;
        f2 *= 1.5 * mt;
        f3 *= 3 * mt;
        f4 *= t2 * t2 * t2;
        if (p2.length === 4) {
          d2 = f1 + f2 + f3 + f4;
          return {
            x: (f1 * p2[0].x + f2 * p2[1].x + f3 * p2[2].x + f4 * p2[3].x) / d2,
            y: (f1 * p2[0].y + f2 * p2[1].y + f3 * p2[2].y + f4 * p2[3].y) / d2,
            z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z + f3 * p2[2].z + f4 * p2[3].z) / d2,
            t: t2
          };
        }
      },
      derive: function(points, _3d) {
        const dpoints = [];
        for (let p2 = points, d2 = p2.length, c2 = d2 - 1; d2 > 1; d2--, c2--) {
          const list = [];
          for (let j2 = 0, dpt; j2 < c2; j2++) {
            dpt = {
              x: c2 * (p2[j2 + 1].x - p2[j2].x),
              y: c2 * (p2[j2 + 1].y - p2[j2].y)
            };
            if (_3d) {
              dpt.z = c2 * (p2[j2 + 1].z - p2[j2].z);
            }
            list.push(dpt);
          }
          dpoints.push(list);
          p2 = list;
        }
        return dpoints;
      },
      between: function(v2, m2, M2) {
        return m2 <= v2 && v2 <= M2 || utils.approximately(v2, m2) || utils.approximately(v2, M2);
      },
      approximately: function(a2, b, precision) {
        return abs$1(a2 - b) <= (precision || epsilon);
      },
      length: function(derivativeFn) {
        const z2 = 0.5, len = utils.Tvalues.length;
        let sum = 0;
        for (let i2 = 0, t2; i2 < len; i2++) {
          t2 = z2 * utils.Tvalues[i2] + z2;
          sum += utils.Cvalues[i2] * utils.arcfn(t2, derivativeFn);
        }
        return z2 * sum;
      },
      map: function(v2, ds, de2, ts, te2) {
        const d1 = de2 - ds, d2 = te2 - ts, v22 = v2 - ds, r2 = v22 / d1;
        return ts + d2 * r2;
      },
      lerp: function(r2, v1, v2) {
        const ret = {
          x: v1.x + r2 * (v2.x - v1.x),
          y: v1.y + r2 * (v2.y - v1.y)
        };
        if (v1.z !== void 0 && v2.z !== void 0) {
          ret.z = v1.z + r2 * (v2.z - v1.z);
        }
        return ret;
      },
      pointToString: function(p2) {
        let s2 = p2.x + "/" + p2.y;
        if (typeof p2.z !== "undefined") {
          s2 += "/" + p2.z;
        }
        return s2;
      },
      pointsToString: function(points) {
        return "[" + points.map(utils.pointToString).join(", ") + "]";
      },
      copy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
      },
      angle: function(o2, v1, v2) {
        const dx1 = v1.x - o2.x, dy1 = v1.y - o2.y, dx2 = v2.x - o2.x, dy2 = v2.y - o2.y, cross = dx1 * dy2 - dy1 * dx2, dot = dx1 * dx2 + dy1 * dy2;
        return atan2(cross, dot);
      },
      round: function(v2, d2) {
        const s2 = "" + v2;
        const pos = s2.indexOf(".");
        return parseFloat(s2.substring(0, pos + 1 + d2));
      },
      dist: function(p1, p2) {
        const dx = p1.x - p2.x, dy = p1.y - p2.y;
        return sqrt$1(dx * dx + dy * dy);
      },
      closest: function(LUT, point) {
        let mdist = pow(2, 63), mpos, d2;
        LUT.forEach(function(p2, idx) {
          d2 = utils.dist(point, p2);
          if (d2 < mdist) {
            mdist = d2;
            mpos = idx;
          }
        });
        return { mdist, mpos };
      },
      abcratio: function(t2, n2) {
        if (n2 !== 2 && n2 !== 3) {
          return false;
        }
        if (typeof t2 === "undefined") {
          t2 = 0.5;
        } else if (t2 === 0 || t2 === 1) {
          return t2;
        }
        const bottom = pow(t2, n2) + pow(1 - t2, n2), top = bottom - 1;
        return abs$1(top / bottom);
      },
      projectionratio: function(t2, n2) {
        if (n2 !== 2 && n2 !== 3) {
          return false;
        }
        if (typeof t2 === "undefined") {
          t2 = 0.5;
        } else if (t2 === 0 || t2 === 1) {
          return t2;
        }
        const top = pow(1 - t2, n2), bottom = pow(t2, n2) + top;
        return top / bottom;
      },
      lli8: function(x1, y1, x2, y2, x3, y3, x4, y4) {
        const nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), d2 = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (d2 == 0) {
          return false;
        }
        return { x: nx / d2, y: ny / d2 };
      },
      lli4: function(p1, p2, p3, p4) {
        const x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, x3 = p3.x, y3 = p3.y, x4 = p4.x, y4 = p4.y;
        return utils.lli8(x1, y1, x2, y2, x3, y3, x4, y4);
      },
      lli: function(v1, v2) {
        return utils.lli4(v1, v1.c, v2, v2.c);
      },
      makeline: function(p1, p2) {
        return new Bezier(
          p1.x,
          p1.y,
          (p1.x + p2.x) / 2,
          (p1.y + p2.y) / 2,
          p2.x,
          p2.y
        );
      },
      findbbox: function(sections) {
        let mx = nMax, my = nMax, MX = nMin, MY = nMin;
        sections.forEach(function(s2) {
          const bbox = s2.bbox();
          if (mx > bbox.x.min)
            mx = bbox.x.min;
          if (my > bbox.y.min)
            my = bbox.y.min;
          if (MX < bbox.x.max)
            MX = bbox.x.max;
          if (MY < bbox.y.max)
            MY = bbox.y.max;
        });
        return {
          x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
          y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
        };
      },
      shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
        if (!utils.bboxoverlap(bbox1, bbox2))
          return [];
        const intersections = [];
        const a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
        const a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
        a1.forEach(function(l1) {
          if (l1.virtual)
            return;
          a2.forEach(function(l2) {
            if (l2.virtual)
              return;
            const iss = l1.intersects(l2, curveIntersectionThreshold);
            if (iss.length > 0) {
              iss.c1 = l1;
              iss.c2 = l2;
              iss.s1 = s1;
              iss.s2 = s2;
              intersections.push(iss);
            }
          });
        });
        return intersections;
      },
      makeshape: function(forward, back, curveIntersectionThreshold) {
        const bpl = back.points.length;
        const fpl = forward.points.length;
        const start2 = utils.makeline(back.points[bpl - 1], forward.points[0]);
        const end = utils.makeline(forward.points[fpl - 1], back.points[0]);
        const shape = {
          startcap: start2,
          forward,
          back,
          endcap: end,
          bbox: utils.findbbox([start2, forward, back, end])
        };
        shape.intersections = function(s2) {
          return utils.shapeintersections(
            shape,
            shape.bbox,
            s2,
            s2.bbox,
            curveIntersectionThreshold
          );
        };
        return shape;
      },
      getminmax: function(curve, d2, list) {
        if (!list)
          return { min: 0, max: 0 };
        let min2 = nMax, max2 = nMin, t2, c2;
        if (list.indexOf(0) === -1) {
          list = [0].concat(list);
        }
        if (list.indexOf(1) === -1) {
          list.push(1);
        }
        for (let i2 = 0, len = list.length; i2 < len; i2++) {
          t2 = list[i2];
          c2 = curve.get(t2);
          if (c2[d2] < min2) {
            min2 = c2[d2];
          }
          if (c2[d2] > max2) {
            max2 = c2[d2];
          }
        }
        return { min: min2, mid: (min2 + max2) / 2, max: max2, size: max2 - min2 };
      },
      align: function(points, line) {
        const tx = line.p1.x, ty = line.p1.y, a2 = -atan2(line.p2.y - ty, line.p2.x - tx), d2 = function(v2) {
          return {
            x: (v2.x - tx) * cos$1(a2) - (v2.y - ty) * sin$1(a2),
            y: (v2.x - tx) * sin$1(a2) + (v2.y - ty) * cos$1(a2)
          };
        };
        return points.map(d2);
      },
      roots: function(points, line) {
        line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
        const order = points.length - 1;
        const aligned = utils.align(points, line);
        const reduce = function(t2) {
          return 0 <= t2 && t2 <= 1;
        };
        if (order === 2) {
          const a3 = aligned[0].y, b2 = aligned[1].y, c3 = aligned[2].y, d3 = a3 - 2 * b2 + c3;
          if (d3 !== 0) {
            const m1 = -sqrt$1(b2 * b2 - a3 * c3), m2 = -a3 + b2, v12 = -(m1 + m2) / d3, v2 = -(-m1 + m2) / d3;
            return [v12, v2].filter(reduce);
          } else if (b2 !== c3 && d3 === 0) {
            return [(2 * b2 - c3) / (2 * b2 - 2 * c3)].filter(reduce);
          }
          return [];
        }
        const pa2 = aligned[0].y, pb2 = aligned[1].y, pc2 = aligned[2].y, pd2 = aligned[3].y;
        let d2 = -pa2 + 3 * pb2 - 3 * pc2 + pd2, a2 = 3 * pa2 - 6 * pb2 + 3 * pc2, b = -3 * pa2 + 3 * pb2, c2 = pa2;
        if (utils.approximately(d2, 0)) {
          if (utils.approximately(a2, 0)) {
            if (utils.approximately(b, 0)) {
              return [];
            }
            return [-c2 / b].filter(reduce);
          }
          const q3 = sqrt$1(b * b - 4 * a2 * c2), a22 = 2 * a2;
          return [(q3 - b) / a22, (-b - q3) / a22].filter(reduce);
        }
        a2 /= d2;
        b /= d2;
        c2 /= d2;
        const p2 = (3 * b - a2 * a2) / 3, p3 = p2 / 3, q2 = (2 * a2 * a2 * a2 - 9 * a2 * b + 27 * c2) / 27, q22 = q2 / 2, discriminant = q22 * q22 + p3 * p3 * p3;
        let u1, v1, x1, x2, x3;
        if (discriminant < 0) {
          const mp3 = -p2 / 3, mp33 = mp3 * mp3 * mp3, r2 = sqrt$1(mp33), t2 = -q2 / (2 * r2), cosphi = t2 < -1 ? -1 : t2 > 1 ? 1 : t2, phi = acos$1(cosphi), crtr = crt(r2), t1 = 2 * crtr;
          x1 = t1 * cos$1(phi / 3) - a2 / 3;
          x2 = t1 * cos$1((phi + tau) / 3) - a2 / 3;
          x3 = t1 * cos$1((phi + 2 * tau) / 3) - a2 / 3;
          return [x1, x2, x3].filter(reduce);
        } else if (discriminant === 0) {
          u1 = q22 < 0 ? crt(-q22) : -crt(q22);
          x1 = 2 * u1 - a2 / 3;
          x2 = -u1 - a2 / 3;
          return [x1, x2].filter(reduce);
        } else {
          const sd2 = sqrt$1(discriminant);
          u1 = crt(-q22 + sd2);
          v1 = crt(q22 + sd2);
          return [u1 - v1 - a2 / 3].filter(reduce);
        }
      },
      droots: function(p2) {
        if (p2.length === 3) {
          const a2 = p2[0], b = p2[1], c2 = p2[2], d2 = a2 - 2 * b + c2;
          if (d2 !== 0) {
            const m1 = -sqrt$1(b * b - a2 * c2), m2 = -a2 + b, v1 = -(m1 + m2) / d2, v2 = -(-m1 + m2) / d2;
            return [v1, v2];
          } else if (b !== c2 && d2 === 0) {
            return [(2 * b - c2) / (2 * (b - c2))];
          }
          return [];
        }
        if (p2.length === 2) {
          const a2 = p2[0], b = p2[1];
          if (a2 !== b) {
            return [a2 / (a2 - b)];
          }
          return [];
        }
        return [];
      },
      curvature: function(t2, d1, d2, _3d, kOnly) {
        let num, dnm, adk, dk2, k2 = 0, r2 = 0;
        const d3 = utils.compute(t2, d1);
        const dd2 = utils.compute(t2, d2);
        const qdsum = d3.x * d3.x + d3.y * d3.y;
        if (_3d) {
          num = sqrt$1(
            pow(d3.y * dd2.z - dd2.y * d3.z, 2) + pow(d3.z * dd2.x - dd2.z * d3.x, 2) + pow(d3.x * dd2.y - dd2.x * d3.y, 2)
          );
          dnm = pow(qdsum + d3.z * d3.z, 3 / 2);
        } else {
          num = d3.x * dd2.y - d3.y * dd2.x;
          dnm = pow(qdsum, 3 / 2);
        }
        if (num === 0 || dnm === 0) {
          return { k: 0, r: 0 };
        }
        k2 = num / dnm;
        r2 = dnm / num;
        if (!kOnly) {
          const pk2 = utils.curvature(t2 - 1e-3, d1, d2, _3d, true).k;
          const nk2 = utils.curvature(t2 + 1e-3, d1, d2, _3d, true).k;
          dk2 = (nk2 - k2 + (k2 - pk2)) / 2;
          adk = (abs$1(nk2 - k2) + abs$1(k2 - pk2)) / 2;
        }
        return { k: k2, r: r2, dk: dk2, adk };
      },
      inflections: function(points) {
        if (points.length < 4)
          return [];
        const p2 = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }), a2 = p2[2].x * p2[1].y, b = p2[3].x * p2[1].y, c2 = p2[1].x * p2[2].y, d2 = p2[3].x * p2[2].y, v1 = 18 * (-3 * a2 + 2 * b + 3 * c2 - d2), v2 = 18 * (3 * a2 - b - 3 * c2), v3 = 18 * (c2 - a2);
        if (utils.approximately(v1, 0)) {
          if (!utils.approximately(v2, 0)) {
            let t2 = -v3 / v2;
            if (0 <= t2 && t2 <= 1)
              return [t2];
          }
          return [];
        }
        const d22 = 2 * v1;
        if (utils.approximately(d22, 0))
          return [];
        const trm = v2 * v2 - 4 * v1 * v3;
        if (trm < 0)
          return [];
        const sq = Math.sqrt(trm);
        return [(sq - v2) / d22, -(v2 + sq) / d22].filter(function(r2) {
          return 0 <= r2 && r2 <= 1;
        });
      },
      bboxoverlap: function(b1, b2) {
        const dims = ["x", "y"], len = dims.length;
        for (let i2 = 0, dim, l2, t2, d2; i2 < len; i2++) {
          dim = dims[i2];
          l2 = b1[dim].mid;
          t2 = b2[dim].mid;
          d2 = (b1[dim].size + b2[dim].size) / 2;
          if (abs$1(l2 - t2) >= d2)
            return false;
        }
        return true;
      },
      expandbox: function(bbox, _bbox) {
        if (_bbox.x.min < bbox.x.min) {
          bbox.x.min = _bbox.x.min;
        }
        if (_bbox.y.min < bbox.y.min) {
          bbox.y.min = _bbox.y.min;
        }
        if (_bbox.z && _bbox.z.min < bbox.z.min) {
          bbox.z.min = _bbox.z.min;
        }
        if (_bbox.x.max > bbox.x.max) {
          bbox.x.max = _bbox.x.max;
        }
        if (_bbox.y.max > bbox.y.max) {
          bbox.y.max = _bbox.y.max;
        }
        if (_bbox.z && _bbox.z.max > bbox.z.max) {
          bbox.z.max = _bbox.z.max;
        }
        bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
        bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
        if (bbox.z) {
          bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
        }
        bbox.x.size = bbox.x.max - bbox.x.min;
        bbox.y.size = bbox.y.max - bbox.y.min;
        if (bbox.z) {
          bbox.z.size = bbox.z.max - bbox.z.min;
        }
      },
      pairiteration: function(c1, c2, curveIntersectionThreshold) {
        const c1b = c1.bbox(), c2b = c2.bbox(), r2 = 1e5, threshold = curveIntersectionThreshold || 0.5;
        if (c1b.x.size + c1b.y.size < threshold && c2b.x.size + c2b.y.size < threshold) {
          return [
            (r2 * (c1._t1 + c1._t2) / 2 | 0) / r2 + "/" + (r2 * (c2._t1 + c2._t2) / 2 | 0) / r2
          ];
        }
        let cc1 = c1.split(0.5), cc2 = c2.split(0.5), pairs = [
          { left: cc1.left, right: cc2.left },
          { left: cc1.left, right: cc2.right },
          { left: cc1.right, right: cc2.right },
          { left: cc1.right, right: cc2.left }
        ];
        pairs = pairs.filter(function(pair) {
          return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
        });
        let results = [];
        if (pairs.length === 0)
          return results;
        pairs.forEach(function(pair) {
          results = results.concat(
            utils.pairiteration(pair.left, pair.right, threshold)
          );
        });
        results = results.filter(function(v2, i2) {
          return results.indexOf(v2) === i2;
        });
        return results;
      },
      getccenter: function(p1, p2, p3) {
        const dx1 = p2.x - p1.x, dy1 = p2.y - p1.y, dx2 = p3.x - p2.x, dy2 = p3.y - p2.y, dx1p = dx1 * cos$1(quart) - dy1 * sin$1(quart), dy1p = dx1 * sin$1(quart) + dy1 * cos$1(quart), dx2p = dx2 * cos$1(quart) - dy2 * sin$1(quart), dy2p = dx2 * sin$1(quart) + dy2 * cos$1(quart), mx1 = (p1.x + p2.x) / 2, my1 = (p1.y + p2.y) / 2, mx2 = (p2.x + p3.x) / 2, my2 = (p2.y + p3.y) / 2, mx1n = mx1 + dx1p, my1n = my1 + dy1p, mx2n = mx2 + dx2p, my2n = my2 + dy2p, arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n), r2 = utils.dist(arc, p1);
        let s2 = atan2(p1.y - arc.y, p1.x - arc.x), m2 = atan2(p2.y - arc.y, p2.x - arc.x), e2 = atan2(p3.y - arc.y, p3.x - arc.x), _2;
        if (s2 < e2) {
          if (s2 > m2 || m2 > e2) {
            s2 += tau;
          }
          if (s2 > e2) {
            _2 = e2;
            e2 = s2;
            s2 = _2;
          }
        } else {
          if (e2 < m2 && m2 < s2) {
            _2 = e2;
            e2 = s2;
            s2 = _2;
          } else {
            e2 += tau;
          }
        }
        arc.s = s2;
        arc.e = e2;
        arc.r = r2;
        return arc;
      },
      numberSort: function(a2, b) {
        return a2 - b;
      }
    };
    class PolyBezier {
      constructor(curves) {
        this.curves = [];
        this._3d = false;
        if (!!curves) {
          this.curves = curves;
          this._3d = this.curves[0]._3d;
        }
      }
      valueOf() {
        return this.toString();
      }
      toString() {
        return "[" + this.curves.map(function(curve) {
          return utils.pointsToString(curve.points);
        }).join(", ") + "]";
      }
      addCurve(curve) {
        this.curves.push(curve);
        this._3d = this._3d || curve._3d;
      }
      length() {
        return this.curves.map(function(v2) {
          return v2.length();
        }).reduce(function(a2, b) {
          return a2 + b;
        });
      }
      curve(idx) {
        return this.curves[idx];
      }
      bbox() {
        const c2 = this.curves;
        var bbox = c2[0].bbox();
        for (var i2 = 1; i2 < c2.length; i2++) {
          utils.expandbox(bbox, c2[i2].bbox());
        }
        return bbox;
      }
      offset(d2) {
        const offset = [];
        this.curves.forEach(function(v2) {
          offset.push(...v2.offset(d2));
        });
        return new PolyBezier(offset);
      }
    }
    const { abs, min, max, cos, sin, acos, sqrt } = Math;
    const pi = Math.PI;
    class Bezier {
      constructor(coords) {
        let args = coords && coords.forEach ? coords : Array.from(arguments).slice();
        let coordlen = false;
        if (typeof args[0] === "object") {
          coordlen = args.length;
          const newargs = [];
          args.forEach(function(point2) {
            ["x", "y", "z"].forEach(function(d2) {
              if (typeof point2[d2] !== "undefined") {
                newargs.push(point2[d2]);
              }
            });
          });
          args = newargs;
        }
        let higher = false;
        const len = args.length;
        if (coordlen) {
          if (coordlen > 4) {
            if (arguments.length !== 1) {
              throw new Error(
                "Only new Bezier(point[]) is accepted for 4th and higher order curves"
              );
            }
            higher = true;
          }
        } else {
          if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
            if (arguments.length !== 1) {
              throw new Error(
                "Only new Bezier(point[]) is accepted for 4th and higher order curves"
              );
            }
          }
        }
        const _3d = this._3d = !higher && (len === 9 || len === 12) || coords && coords[0] && typeof coords[0].z !== "undefined";
        const points = this.points = [];
        for (let idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
          var point = {
            x: args[idx],
            y: args[idx + 1]
          };
          if (_3d) {
            point.z = args[idx + 2];
          }
          points.push(point);
        }
        const order = this.order = points.length - 1;
        const dims = this.dims = ["x", "y"];
        if (_3d)
          dims.push("z");
        this.dimlen = dims.length;
        const aligned = utils.align(points, { p1: points[0], p2: points[order] });
        const baselength = utils.dist(points[0], points[order]);
        this._linear = aligned.reduce((t2, p2) => t2 + abs(p2.y), 0) < baselength / 50;
        this._lut = [];
        this._t1 = 0;
        this._t2 = 1;
        this.update();
      }
      static quadraticFromPoints(p1, p2, p3, t2) {
        if (typeof t2 === "undefined") {
          t2 = 0.5;
        }
        if (t2 === 0) {
          return new Bezier(p2, p2, p3);
        }
        if (t2 === 1) {
          return new Bezier(p1, p2, p2);
        }
        const abc = Bezier.getABC(2, p1, p2, p3, t2);
        return new Bezier(p1, abc.A, p3);
      }
      static cubicFromPoints(S2, B2, E2, t2, d1) {
        if (typeof t2 === "undefined") {
          t2 = 0.5;
        }
        const abc = Bezier.getABC(3, S2, B2, E2, t2);
        if (typeof d1 === "undefined") {
          d1 = utils.dist(B2, abc.C);
        }
        const d2 = d1 * (1 - t2) / t2;
        const selen = utils.dist(S2, E2), lx = (E2.x - S2.x) / selen, ly = (E2.y - S2.y) / selen, bx1 = d1 * lx, by1 = d1 * ly, bx2 = d2 * lx, by2 = d2 * ly;
        const e1 = { x: B2.x - bx1, y: B2.y - by1 }, e2 = { x: B2.x + bx2, y: B2.y + by2 }, A2 = abc.A, v1 = { x: A2.x + (e1.x - A2.x) / (1 - t2), y: A2.y + (e1.y - A2.y) / (1 - t2) }, v2 = { x: A2.x + (e2.x - A2.x) / t2, y: A2.y + (e2.y - A2.y) / t2 }, nc1 = { x: S2.x + (v1.x - S2.x) / t2, y: S2.y + (v1.y - S2.y) / t2 }, nc2 = {
          x: E2.x + (v2.x - E2.x) / (1 - t2),
          y: E2.y + (v2.y - E2.y) / (1 - t2)
        };
        return new Bezier(S2, nc1, nc2, E2);
      }
      static getUtils() {
        return utils;
      }
      getUtils() {
        return Bezier.getUtils();
      }
      static get PolyBezier() {
        return PolyBezier;
      }
      valueOf() {
        return this.toString();
      }
      toString() {
        return utils.pointsToString(this.points);
      }
      toSVG() {
        if (this._3d)
          return false;
        const p2 = this.points, x2 = p2[0].x, y2 = p2[0].y, s2 = ["M", x2, y2, this.order === 2 ? "Q" : "C"];
        for (let i2 = 1, last = p2.length; i2 < last; i2++) {
          s2.push(p2[i2].x);
          s2.push(p2[i2].y);
        }
        return s2.join(" ");
      }
      setRatios(ratios) {
        if (ratios.length !== this.points.length) {
          throw new Error("incorrect number of ratio values");
        }
        this.ratios = ratios;
        this._lut = [];
      }
      verify() {
        const print = this.coordDigest();
        if (print !== this._print) {
          this._print = print;
          this.update();
        }
      }
      coordDigest() {
        return this.points.map(function(c2, pos) {
          return "" + pos + c2.x + c2.y + (c2.z ? c2.z : 0);
        }).join("");
      }
      update() {
        this._lut = [];
        this.dpoints = utils.derive(this.points, this._3d);
        this.computedirection();
      }
      computedirection() {
        const points = this.points;
        const angle = utils.angle(points[0], points[this.order], points[1]);
        this.clockwise = angle > 0;
      }
      length() {
        return utils.length(this.derivative.bind(this));
      }
      static getABC(order = 2, S2, B2, E2, t2 = 0.5) {
        const u2 = utils.projectionratio(t2, order), um = 1 - u2, C2 = {
          x: u2 * S2.x + um * E2.x,
          y: u2 * S2.y + um * E2.y
        }, s2 = utils.abcratio(t2, order), A2 = {
          x: B2.x + (B2.x - C2.x) / s2,
          y: B2.y + (B2.y - C2.y) / s2
        };
        return { A: A2, B: B2, C: C2, S: S2, E: E2 };
      }
      getABC(t2, B2) {
        B2 = B2 || this.get(t2);
        let S2 = this.points[0];
        let E2 = this.points[this.order];
        return Bezier.getABC(this.order, S2, B2, E2, t2);
      }
      getLUT(steps) {
        this.verify();
        steps = steps || 100;
        if (this._lut.length === steps) {
          return this._lut;
        }
        this._lut = [];
        steps++;
        this._lut = [];
        for (let i2 = 0, p2, t2; i2 < steps; i2++) {
          t2 = i2 / (steps - 1);
          p2 = this.compute(t2);
          p2.t = t2;
          this._lut.push(p2);
        }
        return this._lut;
      }
      on(point, error) {
        error = error || 5;
        const lut = this.getLUT(), hits = [];
        for (let i2 = 0, c2, t2 = 0; i2 < lut.length; i2++) {
          c2 = lut[i2];
          if (utils.dist(c2, point) < error) {
            hits.push(c2);
            t2 += i2 / lut.length;
          }
        }
        if (!hits.length)
          return false;
        return t /= hits.length;
      }
      project(point) {
        const LUT = this.getLUT(), l2 = LUT.length - 1, closest = utils.closest(LUT, point), mpos = closest.mpos, t1 = (mpos - 1) / l2, t2 = (mpos + 1) / l2, step = 0.1 / l2;
        let mdist = closest.mdist, t3 = t1, ft = t3, p2;
        mdist += 1;
        for (let d2; t3 < t2 + step; t3 += step) {
          p2 = this.compute(t3);
          d2 = utils.dist(point, p2);
          if (d2 < mdist) {
            mdist = d2;
            ft = t3;
          }
        }
        ft = ft < 0 ? 0 : ft > 1 ? 1 : ft;
        p2 = this.compute(ft);
        p2.t = ft;
        p2.d = mdist;
        return p2;
      }
      get(t2) {
        return this.compute(t2);
      }
      point(idx) {
        return this.points[idx];
      }
      compute(t2) {
        if (this.ratios) {
          return utils.computeWithRatios(t2, this.points, this.ratios, this._3d);
        }
        return utils.compute(t2, this.points, this._3d, this.ratios);
      }
      raise() {
        const p2 = this.points, np = [p2[0]], k2 = p2.length;
        for (let i2 = 1, pi2, pim; i2 < k2; i2++) {
          pi2 = p2[i2];
          pim = p2[i2 - 1];
          np[i2] = {
            x: (k2 - i2) / k2 * pi2.x + i2 / k2 * pim.x,
            y: (k2 - i2) / k2 * pi2.y + i2 / k2 * pim.y
          };
        }
        np[k2] = p2[k2 - 1];
        return new Bezier(np);
      }
      derivative(t2) {
        return utils.compute(t2, this.dpoints[0], this._3d);
      }
      dderivative(t2) {
        return utils.compute(t2, this.dpoints[1], this._3d);
      }
      align() {
        let p2 = this.points;
        return new Bezier(utils.align(p2, { p1: p2[0], p2: p2[p2.length - 1] }));
      }
      curvature(t2) {
        return utils.curvature(t2, this.dpoints[0], this.dpoints[1], this._3d);
      }
      inflections() {
        return utils.inflections(this.points);
      }
      normal(t2) {
        return this._3d ? this.__normal3(t2) : this.__normal2(t2);
      }
      __normal2(t2) {
        const d2 = this.derivative(t2);
        const q2 = sqrt(d2.x * d2.x + d2.y * d2.y);
        return { t: t2, x: -d2.y / q2, y: d2.x / q2 };
      }
      __normal3(t2) {
        const r1 = this.derivative(t2), r2 = this.derivative(t2 + 0.01), q1 = sqrt(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z), q2 = sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
        r1.x /= q1;
        r1.y /= q1;
        r1.z /= q1;
        r2.x /= q2;
        r2.y /= q2;
        r2.z /= q2;
        const c2 = {
          x: r2.y * r1.z - r2.z * r1.y,
          y: r2.z * r1.x - r2.x * r1.z,
          z: r2.x * r1.y - r2.y * r1.x
        };
        const m2 = sqrt(c2.x * c2.x + c2.y * c2.y + c2.z * c2.z);
        c2.x /= m2;
        c2.y /= m2;
        c2.z /= m2;
        const R2 = [
          c2.x * c2.x,
          c2.x * c2.y - c2.z,
          c2.x * c2.z + c2.y,
          c2.x * c2.y + c2.z,
          c2.y * c2.y,
          c2.y * c2.z - c2.x,
          c2.x * c2.z - c2.y,
          c2.y * c2.z + c2.x,
          c2.z * c2.z
        ];
        const n2 = {
          t: t2,
          x: R2[0] * r1.x + R2[1] * r1.y + R2[2] * r1.z,
          y: R2[3] * r1.x + R2[4] * r1.y + R2[5] * r1.z,
          z: R2[6] * r1.x + R2[7] * r1.y + R2[8] * r1.z
        };
        return n2;
      }
      hull(t2) {
        let p2 = this.points, _p = [], q2 = [], idx = 0;
        q2[idx++] = p2[0];
        q2[idx++] = p2[1];
        q2[idx++] = p2[2];
        if (this.order === 3) {
          q2[idx++] = p2[3];
        }
        while (p2.length > 1) {
          _p = [];
          for (let i2 = 0, pt, l2 = p2.length - 1; i2 < l2; i2++) {
            pt = utils.lerp(t2, p2[i2], p2[i2 + 1]);
            q2[idx++] = pt;
            _p.push(pt);
          }
          p2 = _p;
        }
        return q2;
      }
      split(t1, t2) {
        if (t1 === 0 && !!t2) {
          return this.split(t2).left;
        }
        if (t2 === 1) {
          return this.split(t1).right;
        }
        const q2 = this.hull(t1);
        const result = {
          left: this.order === 2 ? new Bezier([q2[0], q2[3], q2[5]]) : new Bezier([q2[0], q2[4], q2[7], q2[9]]),
          right: this.order === 2 ? new Bezier([q2[5], q2[4], q2[2]]) : new Bezier([q2[9], q2[8], q2[6], q2[3]]),
          span: q2
        };
        result.left._t1 = utils.map(0, 0, 1, this._t1, this._t2);
        result.left._t2 = utils.map(t1, 0, 1, this._t1, this._t2);
        result.right._t1 = utils.map(t1, 0, 1, this._t1, this._t2);
        result.right._t2 = utils.map(1, 0, 1, this._t1, this._t2);
        if (!t2) {
          return result;
        }
        t2 = utils.map(t2, t1, 1, 0, 1);
        return result.right.split(t2).left;
      }
      extrema() {
        const result = {};
        let roots = [];
        this.dims.forEach(
          function(dim) {
            let mfn = function(v2) {
              return v2[dim];
            };
            let p2 = this.dpoints[0].map(mfn);
            result[dim] = utils.droots(p2);
            if (this.order === 3) {
              p2 = this.dpoints[1].map(mfn);
              result[dim] = result[dim].concat(utils.droots(p2));
            }
            result[dim] = result[dim].filter(function(t2) {
              return t2 >= 0 && t2 <= 1;
            });
            roots = roots.concat(result[dim].sort(utils.numberSort));
          }.bind(this)
        );
        result.values = roots.sort(utils.numberSort).filter(function(v2, idx) {
          return roots.indexOf(v2) === idx;
        });
        return result;
      }
      bbox() {
        const extrema = this.extrema(), result = {};
        this.dims.forEach(
          function(d2) {
            result[d2] = utils.getminmax(this, d2, extrema[d2]);
          }.bind(this)
        );
        return result;
      }
      overlaps(curve) {
        const lbbox = this.bbox(), tbbox = curve.bbox();
        return utils.bboxoverlap(lbbox, tbbox);
      }
      offset(t2, d2) {
        if (typeof d2 !== "undefined") {
          const c2 = this.get(t2), n2 = this.normal(t2);
          const ret = {
            c: c2,
            n: n2,
            x: c2.x + n2.x * d2,
            y: c2.y + n2.y * d2
          };
          if (this._3d) {
            ret.z = c2.z + n2.z * d2;
          }
          return ret;
        }
        if (this._linear) {
          const nv = this.normal(0), coords = this.points.map(function(p2) {
            const ret = {
              x: p2.x + t2 * nv.x,
              y: p2.y + t2 * nv.y
            };
            if (p2.z && nv.z) {
              ret.z = p2.z + t2 * nv.z;
            }
            return ret;
          });
          return [new Bezier(coords)];
        }
        return this.reduce().map(function(s2) {
          if (s2._linear) {
            return s2.offset(t2)[0];
          }
          return s2.scale(t2);
        });
      }
      simple() {
        if (this.order === 3) {
          const a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
          const a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
          if (a1 > 0 && a2 < 0 || a1 < 0 && a2 > 0)
            return false;
        }
        const n1 = this.normal(0);
        const n2 = this.normal(1);
        let s2 = n1.x * n2.x + n1.y * n2.y;
        if (this._3d) {
          s2 += n1.z * n2.z;
        }
        return abs(acos(s2)) < pi / 3;
      }
      reduce() {
        let i2, t1 = 0, t2 = 0, step = 0.01, segment, pass1 = [], pass2 = [];
        let extrema = this.extrema().values;
        if (extrema.indexOf(0) === -1) {
          extrema = [0].concat(extrema);
        }
        if (extrema.indexOf(1) === -1) {
          extrema.push(1);
        }
        for (t1 = extrema[0], i2 = 1; i2 < extrema.length; i2++) {
          t2 = extrema[i2];
          segment = this.split(t1, t2);
          segment._t1 = t1;
          segment._t2 = t2;
          pass1.push(segment);
          t1 = t2;
        }
        pass1.forEach(function(p1) {
          t1 = 0;
          t2 = 0;
          while (t2 <= 1) {
            for (t2 = t1 + step; t2 <= 1 + step; t2 += step) {
              segment = p1.split(t1, t2);
              if (!segment.simple()) {
                t2 -= step;
                if (abs(t1 - t2) < step) {
                  return [];
                }
                segment = p1.split(t1, t2);
                segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
                segment._t2 = utils.map(t2, 0, 1, p1._t1, p1._t2);
                pass2.push(segment);
                t1 = t2;
                break;
              }
            }
          }
          if (t1 < 1) {
            segment = p1.split(t1, 1);
            segment._t1 = utils.map(t1, 0, 1, p1._t1, p1._t2);
            segment._t2 = p1._t2;
            pass2.push(segment);
          }
        });
        return pass2;
      }
      translate(v2, d1, d2) {
        d2 = typeof d2 === "number" ? d2 : d1;
        const o2 = this.order;
        let d3 = this.points.map((_2, i2) => (1 - i2 / o2) * d1 + i2 / o2 * d2);
        return new Bezier(
          this.points.map((p2, i2) => ({
            x: p2.x + v2.x * d3[i2],
            y: p2.y + v2.y * d3[i2]
          }))
        );
      }
      scale(d2) {
        const order = this.order;
        let distanceFn = false;
        if (typeof d2 === "function") {
          distanceFn = d2;
        }
        if (distanceFn && order === 2) {
          return this.raise().scale(distanceFn);
        }
        const clockwise = this.clockwise;
        const points = this.points;
        if (this._linear) {
          return this.translate(
            this.normal(0),
            distanceFn ? distanceFn(0) : d2,
            distanceFn ? distanceFn(1) : d2
          );
        }
        const r1 = distanceFn ? distanceFn(0) : d2;
        const r2 = distanceFn ? distanceFn(1) : d2;
        const v2 = [this.offset(0, 10), this.offset(1, 10)];
        const np = [];
        const o2 = utils.lli4(v2[0], v2[0].c, v2[1], v2[1].c);
        if (!o2) {
          throw new Error("cannot scale this curve. Try reducing it first.");
        }
        [0, 1].forEach(function(t2) {
          const p2 = np[t2 * order] = utils.copy(points[t2 * order]);
          p2.x += (t2 ? r2 : r1) * v2[t2].n.x;
          p2.y += (t2 ? r2 : r1) * v2[t2].n.y;
        });
        if (!distanceFn) {
          [0, 1].forEach((t2) => {
            if (order === 2 && !!t2)
              return;
            const p2 = np[t2 * order];
            const d3 = this.derivative(t2);
            const p22 = { x: p2.x + d3.x, y: p2.y + d3.y };
            np[t2 + 1] = utils.lli4(p2, p22, o2, points[t2 + 1]);
          });
          return new Bezier(np);
        }
        [0, 1].forEach(function(t2) {
          if (order === 2 && !!t2)
            return;
          var p2 = points[t2 + 1];
          var ov = {
            x: p2.x - o2.x,
            y: p2.y - o2.y
          };
          var rc2 = distanceFn ? distanceFn((t2 + 1) / order) : d2;
          if (distanceFn && !clockwise)
            rc2 = -rc2;
          var m2 = sqrt(ov.x * ov.x + ov.y * ov.y);
          ov.x /= m2;
          ov.y /= m2;
          np[t2 + 1] = {
            x: p2.x + rc2 * ov.x,
            y: p2.y + rc2 * ov.y
          };
        });
        return new Bezier(np);
      }
      outline(d1, d2, d3, d4) {
        d2 = d2 === void 0 ? d1 : d2;
        if (this._linear) {
          const n2 = this.normal(0);
          const start2 = this.points[0];
          const end = this.points[this.points.length - 1];
          let s2, mid, e2;
          if (d3 === void 0) {
            d3 = d1;
            d4 = d2;
          }
          s2 = { x: start2.x + n2.x * d1, y: start2.y + n2.y * d1 };
          e2 = { x: end.x + n2.x * d3, y: end.y + n2.y * d3 };
          mid = { x: (s2.x + e2.x) / 2, y: (s2.y + e2.y) / 2 };
          const fline = [s2, mid, e2];
          s2 = { x: start2.x - n2.x * d2, y: start2.y - n2.y * d2 };
          e2 = { x: end.x - n2.x * d4, y: end.y - n2.y * d4 };
          mid = { x: (s2.x + e2.x) / 2, y: (s2.y + e2.y) / 2 };
          const bline = [e2, mid, s2];
          const ls2 = utils.makeline(bline[2], fline[0]);
          const le3 = utils.makeline(fline[2], bline[0]);
          const segments2 = [ls2, new Bezier(fline), le3, new Bezier(bline)];
          return new PolyBezier(segments2);
        }
        const reduced = this.reduce(), len = reduced.length, fcurves = [];
        let bcurves = [], p2, alen = 0, tlen = this.length();
        const graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";
        function linearDistanceFunction(s2, e2, tlen2, alen2, slen) {
          return function(v2) {
            const f1 = alen2 / tlen2, f2 = (alen2 + slen) / tlen2, d5 = e2 - s2;
            return utils.map(v2, 0, 1, s2 + f1 * d5, s2 + f2 * d5);
          };
        }
        reduced.forEach(function(segment) {
          const slen = segment.length();
          if (graduated) {
            fcurves.push(
              segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
            );
            bcurves.push(
              segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
            );
          } else {
            fcurves.push(segment.scale(d1));
            bcurves.push(segment.scale(-d2));
          }
          alen += slen;
        });
        bcurves = bcurves.map(function(s2) {
          p2 = s2.points;
          if (p2[3]) {
            s2.points = [p2[3], p2[2], p2[1], p2[0]];
          } else {
            s2.points = [p2[2], p2[1], p2[0]];
          }
          return s2;
        }).reverse();
        const fs = fcurves[0].points[0], fe2 = fcurves[len - 1].points[fcurves[len - 1].points.length - 1], bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1], be2 = bcurves[0].points[0], ls = utils.makeline(bs, fs), le2 = utils.makeline(fe2, be2), segments = [ls].concat(fcurves).concat([le2]).concat(bcurves);
        return new PolyBezier(segments);
      }
      outlineshapes(d1, d2, curveIntersectionThreshold) {
        d2 = d2 || d1;
        const outline = this.outline(d1, d2).curves;
        const shapes = [];
        for (let i2 = 1, len = outline.length; i2 < len / 2; i2++) {
          const shape = utils.makeshape(
            outline[i2],
            outline[len - i2],
            curveIntersectionThreshold
          );
          shape.startcap.virtual = i2 > 1;
          shape.endcap.virtual = i2 < len / 2 - 1;
          shapes.push(shape);
        }
        return shapes;
      }
      intersects(curve, curveIntersectionThreshold) {
        if (!curve)
          return this.selfintersects(curveIntersectionThreshold);
        if (curve.p1 && curve.p2) {
          return this.lineIntersects(curve);
        }
        if (curve instanceof Bezier) {
          curve = curve.reduce();
        }
        return this.curveintersects(
          this.reduce(),
          curve,
          curveIntersectionThreshold
        );
      }
      lineIntersects(line) {
        const mx = min(line.p1.x, line.p2.x), my = min(line.p1.y, line.p2.y), MX = max(line.p1.x, line.p2.x), MY = max(line.p1.y, line.p2.y);
        return utils.roots(this.points, line).filter((t2) => {
          var p2 = this.get(t2);
          return utils.between(p2.x, mx, MX) && utils.between(p2.y, my, MY);
        });
      }
      selfintersects(curveIntersectionThreshold) {
        const reduced = this.reduce(), len = reduced.length - 2, results = [];
        for (let i2 = 0, result, left, right; i2 < len; i2++) {
          left = reduced.slice(i2, i2 + 1);
          right = reduced.slice(i2 + 2);
          result = this.curveintersects(left, right, curveIntersectionThreshold);
          results.push(...result);
        }
        return results;
      }
      curveintersects(c1, c2, curveIntersectionThreshold) {
        const pairs = [];
        c1.forEach(function(l2) {
          c2.forEach(function(r2) {
            if (l2.overlaps(r2)) {
              pairs.push({ left: l2, right: r2 });
            }
          });
        });
        let intersections = [];
        pairs.forEach(function(pair) {
          const result = utils.pairiteration(
            pair.left,
            pair.right,
            curveIntersectionThreshold
          );
          if (result.length > 0) {
            intersections = intersections.concat(result);
          }
        });
        return intersections;
      }
      arcs(errorThreshold) {
        errorThreshold = errorThreshold || 0.5;
        return this._iterate(errorThreshold, []);
      }
      _error(pc2, np1, s2, e2) {
        const q2 = (e2 - s2) / 4, c1 = this.get(s2 + q2), c2 = this.get(e2 - q2), ref = utils.dist(pc2, np1), d1 = utils.dist(pc2, c1), d2 = utils.dist(pc2, c2);
        return abs(d1 - ref) + abs(d2 - ref);
      }
      _iterate(errorThreshold, circles) {
        let t_s = 0, t_e = 1, safety;
        do {
          safety = 0;
          t_e = 1;
          let np1 = this.get(t_s), np2, np3, arc, prev_arc;
          let curr_good = false, prev_good = false, done;
          let t_m = t_e, prev_e = 1;
          do {
            prev_good = curr_good;
            prev_arc = arc;
            t_m = (t_s + t_e) / 2;
            np2 = this.get(t_m);
            np3 = this.get(t_e);
            arc = utils.getccenter(np1, np2, np3);
            arc.interval = {
              start: t_s,
              end: t_e
            };
            let error = this._error(arc, np1, t_s, t_e);
            curr_good = error <= errorThreshold;
            done = prev_good && !curr_good;
            if (!done)
              prev_e = t_e;
            if (curr_good) {
              if (t_e >= 1) {
                arc.interval.end = prev_e = 1;
                prev_arc = arc;
                if (t_e > 1) {
                  let d2 = {
                    x: arc.x + arc.r * cos(arc.e),
                    y: arc.y + arc.r * sin(arc.e)
                  };
                  arc.e += utils.angle({ x: arc.x, y: arc.y }, d2, this.get(1));
                }
                break;
              }
              t_e = t_e + (t_e - t_s) / 2;
            } else {
              t_e = t_m;
            }
          } while (!done && safety++ < 100);
          if (safety >= 100) {
            break;
          }
          prev_arc = prev_arc ? prev_arc : arc;
          circles.push(prev_arc);
          t_s = prev_e;
        } while (t_e < 1);
        return circles;
      }
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i2;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
          key = sourceSymbolKeys[i2];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _slicedToArray$1(arr, i2) {
      return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
    }
    function _toConsumableArray$1(arr) {
      return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
    }
    function _arrayWithoutHoles$1(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray$1(arr);
    }
    function _arrayWithHoles$1(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray$1(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _iterableToArrayLimit$1(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e2;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e2 = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e2;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray$1(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray$1(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray$1(o2, minLen);
    }
    function _arrayLikeToArray$1(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread$1() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest$1() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    var index = function() {
      var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var keyAccessors = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var multiItem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var flattenKeys = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      var keys = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [void 0] : [keyAccessors]).map(function(key) {
        return {
          keyAccessor: key,
          isProp: !(key instanceof Function)
        };
      });
      var indexedResult = list.reduce(function(res, item) {
        var iterObj = res;
        var itemVal = item;
        keys.forEach(function(_ref, idx) {
          var keyAccessor = _ref.keyAccessor, isProp = _ref.isProp;
          var key;
          if (isProp) {
            var _itemVal = itemVal, propVal = _itemVal[keyAccessor], rest = _objectWithoutProperties(_itemVal, [keyAccessor].map(_toPropertyKey));
            key = propVal;
            itemVal = rest;
          } else {
            key = keyAccessor(itemVal, idx);
          }
          if (idx + 1 < keys.length) {
            if (!iterObj.hasOwnProperty(key)) {
              iterObj[key] = {};
            }
            iterObj = iterObj[key];
          } else {
            if (multiItem) {
              if (!iterObj.hasOwnProperty(key)) {
                iterObj[key] = [];
              }
              iterObj[key].push(itemVal);
            } else {
              iterObj[key] = itemVal;
            }
          }
        });
        return res;
      }, {});
      if (multiItem instanceof Function) {
        (function reduce(node) {
          var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          if (level === keys.length) {
            Object.keys(node).forEach(function(k2) {
              return node[k2] = multiItem(node[k2]);
            });
          } else {
            Object.values(node).forEach(function(child) {
              return reduce(child, level + 1);
            });
          }
        })(indexedResult);
      }
      var result = indexedResult;
      if (flattenKeys) {
        result = [];
        (function flatten(node) {
          var accKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
          if (accKeys.length === keys.length) {
            result.push({
              keys: accKeys,
              vals: node
            });
          } else {
            Object.entries(node).forEach(function(_ref2) {
              var _ref3 = _slicedToArray$1(_ref2, 2), key = _ref3[0], val = _ref3[1];
              return flatten(val, [].concat(_toConsumableArray$1(accKeys), [key]));
            });
          }
        })(indexedResult);
        if (keyAccessors instanceof Array && keyAccessors.length === 0 && result.length === 1) {
          result[0].keys = [];
        }
      }
      return result;
    };
    function initRange(domain, range) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(domain);
          break;
        default:
          this.range(range).domain(domain);
          break;
      }
      return this;
    }
    const implicit = Symbol("implicit");
    function ordinal() {
      var index2 = new InternMap(), domain = [], range = [], unknown = implicit;
      function scale(d2) {
        let i2 = index2.get(d2);
        if (i2 === void 0) {
          if (unknown !== implicit)
            return unknown;
          index2.set(d2, i2 = domain.push(d2) - 1);
        }
        return range[i2 % range.length];
      }
      scale.domain = function(_2) {
        if (!arguments.length)
          return domain.slice();
        domain = [], index2 = new InternMap();
        for (const value of _2) {
          if (index2.has(value))
            continue;
          index2.set(value, domain.push(value) - 1);
        }
        return scale;
      };
      scale.range = function(_2) {
        return arguments.length ? (range = Array.from(_2), scale) : range.slice();
      };
      scale.unknown = function(_2) {
        return arguments.length ? (unknown = _2, scale) : unknown;
      };
      scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
      };
      initRange.apply(scale, arguments);
      return scale;
    }
    function colors(specifier) {
      var n2 = specifier.length / 6 | 0, colors2 = new Array(n2), i2 = 0;
      while (i2 < n2)
        colors2[i2] = "#" + specifier.slice(i2 * 6, ++i2 * 6);
      return colors2;
    }
    const schemePaired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
    function styleInject(css, ref) {
      if (ref === void 0)
        ref = {};
      var insertAt = ref.insertAt;
      if (!css || typeof document === "undefined") {
        return;
      }
      var head = document.head || document.getElementsByTagName("head")[0];
      var style2 = document.createElement("style");
      style2.type = "text/css";
      if (insertAt === "top") {
        if (head.firstChild) {
          head.insertBefore(style2, head.firstChild);
        } else {
          head.appendChild(style2);
        }
      } else {
        head.appendChild(style2);
      }
      if (style2.styleSheet) {
        style2.styleSheet.cssText = css;
      } else {
        style2.appendChild(document.createTextNode(css));
      }
    }
    var css_248z = ".force-graph-container canvas {\n  display: block;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.force-graph-container .graph-tooltip {\n  position: absolute;\n  top: 0;\n  transform: translate(-50%, 25px);\n  font-family: sans-serif;\n  font-size: 16px;\n  padding: 4px;\n  border-radius: 3px;\n  color: #eee;\n  background: rgba(0,0,0,0.65);\n  visibility: hidden; /* by default */\n}\n\n.force-graph-container .clickable {\n  cursor: pointer;\n}\n\n.force-graph-container .grabbable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.force-graph-container .grabbable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n";
    styleInject(css_248z);
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = null != arguments[i2] ? arguments[i2] : {};
        i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _setPrototypeOf(o2, p2) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
        o3.__proto__ = p3;
        return o3;
      };
      return _setPrototypeOf(o2, p2);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct.bind();
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a2 = [null];
          a2.push.apply(a2, args2);
          var Constructor = Function.bind.apply(Parent2, a2);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _slicedToArray(arr, i2) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i2) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e2;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i2 && _arr.length === i2)
            break;
        }
      } catch (err) {
        _d = true;
        _e2 = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e2;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o2, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var autoColorScale = ordinal(schemePaired);
    function autoColorObjects(objects, colorByAccessor, colorField) {
      if (!colorByAccessor || typeof colorField !== "string")
        return;
      objects.filter(function(obj) {
        return !obj[colorField];
      }).forEach(function(obj) {
        obj[colorField] = autoColorScale(colorByAccessor(obj));
      });
    }
    function getDagDepths(_ref, idAccessor) {
      var nodes = _ref.nodes, links = _ref.links;
      var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$nodeFilter = _ref2.nodeFilter, nodeFilter = _ref2$nodeFilter === void 0 ? function() {
        return true;
      } : _ref2$nodeFilter, _ref2$onLoopError = _ref2.onLoopError, onLoopError = _ref2$onLoopError === void 0 ? function(loopIds) {
        throw "Invalid DAG structure! Found cycle in node path: ".concat(loopIds.join(" -> "), ".");
      } : _ref2$onLoopError;
      var graph = {};
      nodes.forEach(function(node) {
        return graph[idAccessor(node)] = {
          data: node,
          out: [],
          depth: -1,
          skip: !nodeFilter(node)
        };
      });
      links.forEach(function(_ref3) {
        var source = _ref3.source, target = _ref3.target;
        var sourceId = getNodeId(source);
        var targetId = getNodeId(target);
        if (!graph.hasOwnProperty(sourceId))
          throw "Missing source node with id: ".concat(sourceId);
        if (!graph.hasOwnProperty(targetId))
          throw "Missing target node with id: ".concat(targetId);
        var sourceNode = graph[sourceId];
        var targetNode = graph[targetId];
        sourceNode.out.push(targetNode);
        function getNodeId(node) {
          return _typeof(node) === "object" ? idAccessor(node) : node;
        }
      });
      var foundLoops = [];
      traverse(Object.values(graph));
      var nodeDepths = Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(graph).filter(function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), node = _ref5[1];
        return !node.skip;
      }).map(function(_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2), id2 = _ref7[0], node = _ref7[1];
        return _defineProperty({}, id2, node.depth);
      }))));
      return nodeDepths;
      function traverse(nodes2) {
        var nodeStack = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var currentDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        for (var i2 = 0, l2 = nodes2.length; i2 < l2; i2++) {
          var node = nodes2[i2];
          if (nodeStack.indexOf(node) !== -1) {
            var _ret = function() {
              var loop = [].concat(_toConsumableArray(nodeStack.slice(nodeStack.indexOf(node))), [node]).map(function(d2) {
                return idAccessor(d2.data);
              });
              if (!foundLoops.some(function(foundLoop) {
                return foundLoop.length === loop.length && foundLoop.every(function(id2, idx) {
                  return id2 === loop[idx];
                });
              })) {
                foundLoops.push(loop);
                onLoopError(loop);
              }
              return "continue";
            }();
            if (_ret === "continue")
              continue;
          }
          if (currentDepth > node.depth) {
            node.depth = currentDepth;
            traverse(node.out, [].concat(_toConsumableArray(nodeStack), [node]), currentDepth + (node.skip ? 0 : 1));
          }
        }
      }
    }
    var DAG_LEVEL_NODE_RATIO = 2;
    var notifyRedraw = function notifyRedraw2(_2, state) {
      return state.onNeedsRedraw && state.onNeedsRedraw();
    };
    var CanvasForceGraph = index$3({
      props: {
        graphData: {
          "default": {
            nodes: [],
            links: []
          },
          onChange: function onChange(_2, state) {
            state.engineRunning = false;
          }
        },
        dagMode: {
          onChange: function onChange(dagMode, state) {
            !dagMode && (state.graphData.nodes || []).forEach(function(n2) {
              return n2.fx = n2.fy = void 0;
            });
          }
        },
        dagLevelDistance: {},
        dagNodeFilter: {
          "default": function _default2(node) {
            return true;
          }
        },
        onDagError: {
          triggerUpdate: false
        },
        nodeRelSize: {
          "default": 4,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        nodeId: {
          "default": "id"
        },
        nodeVal: {
          "default": "val",
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        nodeColor: {
          "default": "color",
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        nodeAutoColorBy: {},
        nodeCanvasObject: {
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        nodeCanvasObjectMode: {
          "default": function _default2() {
            return "replace";
          },
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        nodeVisibility: {
          "default": true,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkSource: {
          "default": "source"
        },
        linkTarget: {
          "default": "target"
        },
        linkVisibility: {
          "default": true,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkColor: {
          "default": "color",
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkAutoColorBy: {},
        linkLineDash: {
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkWidth: {
          "default": 1,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkCurvature: {
          "default": 0,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkCanvasObject: {
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkCanvasObjectMode: {
          "default": function _default2() {
            return "replace";
          },
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkDirectionalArrowLength: {
          "default": 0,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkDirectionalArrowColor: {
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkDirectionalArrowRelPos: {
          "default": 0.5,
          triggerUpdate: false,
          onChange: notifyRedraw
        },
        linkDirectionalParticles: {
          "default": 0
        },
        linkDirectionalParticleSpeed: {
          "default": 0.01,
          triggerUpdate: false
        },
        linkDirectionalParticleWidth: {
          "default": 4,
          triggerUpdate: false
        },
        linkDirectionalParticleColor: {
          triggerUpdate: false
        },
        globalScale: {
          "default": 1,
          triggerUpdate: false
        },
        d3AlphaMin: {
          "default": 0,
          triggerUpdate: false
        },
        d3AlphaDecay: {
          "default": 0.0228,
          triggerUpdate: false,
          onChange: function onChange(alphaDecay, state) {
            state.forceLayout.alphaDecay(alphaDecay);
          }
        },
        d3AlphaTarget: {
          "default": 0,
          triggerUpdate: false,
          onChange: function onChange(alphaTarget, state) {
            state.forceLayout.alphaTarget(alphaTarget);
          }
        },
        d3VelocityDecay: {
          "default": 0.4,
          triggerUpdate: false,
          onChange: function onChange(velocityDecay, state) {
            state.forceLayout.velocityDecay(velocityDecay);
          }
        },
        warmupTicks: {
          "default": 0,
          triggerUpdate: false
        },
        cooldownTicks: {
          "default": Infinity,
          triggerUpdate: false
        },
        cooldownTime: {
          "default": 15e3,
          triggerUpdate: false
        },
        onUpdate: {
          "default": function _default2() {
          },
          triggerUpdate: false
        },
        onFinishUpdate: {
          "default": function _default2() {
          },
          triggerUpdate: false
        },
        onEngineTick: {
          "default": function _default2() {
          },
          triggerUpdate: false
        },
        onEngineStop: {
          "default": function _default2() {
          },
          triggerUpdate: false
        },
        onNeedsRedraw: {
          triggerUpdate: false
        },
        isShadow: {
          "default": false,
          triggerUpdate: false
        }
      },
      methods: {
        d3Force: function d3Force(state, forceName, forceFn) {
          if (forceFn === void 0) {
            return state.forceLayout.force(forceName);
          }
          state.forceLayout.force(forceName, forceFn);
          return this;
        },
        d3ReheatSimulation: function d3ReheatSimulation(state) {
          state.forceLayout.alpha(1);
          this.resetCountdown();
          return this;
        },
        resetCountdown: function resetCountdown(state) {
          state.cntTicks = 0;
          state.startTickTime = new Date();
          state.engineRunning = true;
          return this;
        },
        isEngineRunning: function isEngineRunning(state) {
          return !!state.engineRunning;
        },
        tickFrame: function tickFrame(state) {
          !state.isShadow && layoutTick();
          paintLinks();
          !state.isShadow && paintArrows();
          !state.isShadow && paintPhotons();
          paintNodes();
          return this;
          function layoutTick() {
            if (state.engineRunning) {
              if (++state.cntTicks > state.cooldownTicks || new Date() - state.startTickTime > state.cooldownTime || state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin) {
                state.engineRunning = false;
                state.onEngineStop();
              } else {
                state.forceLayout.tick();
                state.onEngineTick();
              }
            }
          }
          function paintNodes() {
            var getVisibility = index$2(state.nodeVisibility);
            var getVal = index$2(state.nodeVal);
            var getColor = index$2(state.nodeColor);
            var getNodeCanvasObjectMode = index$2(state.nodeCanvasObjectMode);
            var ctx = state.ctx;
            var padAmount = state.isShadow / state.globalScale;
            var visibleNodes = state.graphData.nodes.filter(getVisibility);
            ctx.save();
            visibleNodes.forEach(function(node) {
              var nodeCanvasObjectMode = getNodeCanvasObjectMode(node);
              if (state.nodeCanvasObject && (nodeCanvasObjectMode === "before" || nodeCanvasObjectMode === "replace")) {
                state.nodeCanvasObject(node, ctx, state.globalScale);
                if (nodeCanvasObjectMode === "replace") {
                  ctx.restore();
                  return;
                }
              }
              var r2 = Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize + padAmount;
              ctx.beginPath();
              ctx.arc(node.x, node.y, r2, 0, 2 * Math.PI, false);
              ctx.fillStyle = getColor(node) || "rgba(31, 120, 180, 0.92)";
              ctx.fill();
              if (state.nodeCanvasObject && nodeCanvasObjectMode === "after") {
                state.nodeCanvasObject(node, state.ctx, state.globalScale);
              }
            });
            ctx.restore();
          }
          function paintLinks() {
            var getVisibility = index$2(state.linkVisibility);
            var getColor = index$2(state.linkColor);
            var getWidth = index$2(state.linkWidth);
            var getLineDash = index$2(state.linkLineDash);
            var getCurvature = index$2(state.linkCurvature);
            var getLinkCanvasObjectMode = index$2(state.linkCanvasObjectMode);
            var ctx = state.ctx;
            var padAmount = state.isShadow * 2;
            var visibleLinks = state.graphData.links.filter(getVisibility);
            visibleLinks.forEach(calcLinkControlPoints);
            var beforeCustomLinks = [], afterCustomLinks = [], defaultPaintLinks = visibleLinks;
            if (state.linkCanvasObject) {
              var replaceCustomLinks = [], otherCustomLinks = [];
              visibleLinks.forEach(function(d2) {
                return ({
                  before: beforeCustomLinks,
                  after: afterCustomLinks,
                  replace: replaceCustomLinks
                }[getLinkCanvasObjectMode(d2)] || otherCustomLinks).push(d2);
              });
              defaultPaintLinks = [].concat(_toConsumableArray(beforeCustomLinks), afterCustomLinks, otherCustomLinks);
              beforeCustomLinks = beforeCustomLinks.concat(replaceCustomLinks);
            }
            ctx.save();
            beforeCustomLinks.forEach(function(link) {
              return state.linkCanvasObject(link, ctx, state.globalScale);
            });
            ctx.restore();
            var linksPerColor = index(defaultPaintLinks, [getColor, getWidth, getLineDash]);
            ctx.save();
            Object.entries(linksPerColor).forEach(function(_ref) {
              var _ref2 = _slicedToArray(_ref, 2), color2 = _ref2[0], linksPerWidth = _ref2[1];
              var lineColor = !color2 || color2 === "undefined" ? "rgba(0,0,0,0.15)" : color2;
              Object.entries(linksPerWidth).forEach(function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2), width = _ref4[0], linesPerLineDash = _ref4[1];
                var lineWidth = (width || 1) / state.globalScale + padAmount;
                Object.entries(linesPerLineDash).forEach(function(_ref5) {
                  var _ref6 = _slicedToArray(_ref5, 2);
                  _ref6[0];
                  var links = _ref6[1];
                  var lineDashSegments = getLineDash(links[0]);
                  ctx.beginPath();
                  links.forEach(function(link) {
                    var start2 = link.source;
                    var end = link.target;
                    if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x"))
                      return;
                    ctx.moveTo(start2.x, start2.y);
                    var controlPoints = link.__controlPoints;
                    if (!controlPoints) {
                      ctx.lineTo(end.x, end.y);
                    } else {
                      ctx[controlPoints.length === 2 ? "quadraticCurveTo" : "bezierCurveTo"].apply(ctx, _toConsumableArray(controlPoints).concat([end.x, end.y]));
                    }
                  });
                  ctx.strokeStyle = lineColor;
                  ctx.lineWidth = lineWidth;
                  ctx.setLineDash(lineDashSegments || []);
                  ctx.stroke();
                });
              });
            });
            ctx.restore();
            ctx.save();
            afterCustomLinks.forEach(function(link) {
              return state.linkCanvasObject(link, ctx, state.globalScale);
            });
            ctx.restore();
            function calcLinkControlPoints(link) {
              var curvature = getCurvature(link);
              if (!curvature) {
                link.__controlPoints = null;
                return;
              }
              var start2 = link.source;
              var end = link.target;
              if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x"))
                return;
              var l2 = Math.sqrt(Math.pow(end.x - start2.x, 2) + Math.pow(end.y - start2.y, 2));
              if (l2 > 0) {
                var a2 = Math.atan2(end.y - start2.y, end.x - start2.x);
                var d2 = l2 * curvature;
                var cp = {
                  x: (start2.x + end.x) / 2 + d2 * Math.cos(a2 - Math.PI / 2),
                  y: (start2.y + end.y) / 2 + d2 * Math.sin(a2 - Math.PI / 2)
                };
                link.__controlPoints = [cp.x, cp.y];
              } else {
                var _d = curvature * 70;
                link.__controlPoints = [end.x, end.y - _d, end.x + _d, end.y];
              }
            }
          }
          function paintArrows() {
            var ARROW_WH_RATIO = 1.6;
            var ARROW_VLEN_RATIO = 0.2;
            var getLength = index$2(state.linkDirectionalArrowLength);
            var getRelPos = index$2(state.linkDirectionalArrowRelPos);
            var getVisibility = index$2(state.linkVisibility);
            var getColor = index$2(state.linkDirectionalArrowColor || state.linkColor);
            var getNodeVal = index$2(state.nodeVal);
            var ctx = state.ctx;
            ctx.save();
            state.graphData.links.filter(getVisibility).forEach(function(link) {
              var arrowLength = getLength(link);
              if (!arrowLength || arrowLength < 0)
                return;
              var start2 = link.source;
              var end = link.target;
              if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x"))
                return;
              var startR = Math.sqrt(Math.max(0, getNodeVal(start2) || 1)) * state.nodeRelSize;
              var endR = Math.sqrt(Math.max(0, getNodeVal(end) || 1)) * state.nodeRelSize;
              var arrowRelPos = Math.min(1, Math.max(0, getRelPos(link)));
              var arrowColor = getColor(link) || "rgba(0,0,0,0.28)";
              var arrowHalfWidth = arrowLength / ARROW_WH_RATIO / 2;
              var bzLine = link.__controlPoints && _construct(Bezier, [start2.x, start2.y].concat(_toConsumableArray(link.__controlPoints), [end.x, end.y]));
              var getCoordsAlongLine = bzLine ? function(t2) {
                return bzLine.get(t2);
              } : function(t2) {
                return {
                  x: start2.x + (end.x - start2.x) * t2 || 0,
                  y: start2.y + (end.y - start2.y) * t2 || 0
                };
              };
              var lineLen = bzLine ? bzLine.length() : Math.sqrt(Math.pow(end.x - start2.x, 2) + Math.pow(end.y - start2.y, 2));
              var posAlongLine = startR + arrowLength + (lineLen - startR - endR - arrowLength) * arrowRelPos;
              var arrowHead = getCoordsAlongLine(posAlongLine / lineLen);
              var arrowTail = getCoordsAlongLine((posAlongLine - arrowLength) / lineLen);
              var arrowTailVertex = getCoordsAlongLine((posAlongLine - arrowLength * (1 - ARROW_VLEN_RATIO)) / lineLen);
              var arrowTailAngle = Math.atan2(arrowHead.y - arrowTail.y, arrowHead.x - arrowTail.x) - Math.PI / 2;
              ctx.beginPath();
              ctx.moveTo(arrowHead.x, arrowHead.y);
              ctx.lineTo(arrowTail.x + arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y + arrowHalfWidth * Math.sin(arrowTailAngle));
              ctx.lineTo(arrowTailVertex.x, arrowTailVertex.y);
              ctx.lineTo(arrowTail.x - arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y - arrowHalfWidth * Math.sin(arrowTailAngle));
              ctx.fillStyle = arrowColor;
              ctx.fill();
            });
            ctx.restore();
          }
          function paintPhotons() {
            var getNumPhotons = index$2(state.linkDirectionalParticles);
            var getSpeed = index$2(state.linkDirectionalParticleSpeed);
            var getDiameter = index$2(state.linkDirectionalParticleWidth);
            var getVisibility = index$2(state.linkVisibility);
            var getColor = index$2(state.linkDirectionalParticleColor || state.linkColor);
            var ctx = state.ctx;
            ctx.save();
            state.graphData.links.filter(getVisibility).forEach(function(link) {
              var numCyclePhotons = getNumPhotons(link);
              if (!link.hasOwnProperty("__photons") || !link.__photons.length)
                return;
              var start2 = link.source;
              var end = link.target;
              if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x"))
                return;
              var particleSpeed = getSpeed(link);
              var photons = link.__photons || [];
              var photonR = Math.max(0, getDiameter(link) / 2) / Math.sqrt(state.globalScale);
              var photonColor = getColor(link) || "rgba(0,0,0,0.28)";
              ctx.fillStyle = photonColor;
              var bzLine = link.__controlPoints ? _construct(Bezier, [start2.x, start2.y].concat(_toConsumableArray(link.__controlPoints), [end.x, end.y])) : null;
              var cyclePhotonIdx = 0;
              var needsCleanup = false;
              photons.forEach(function(photon) {
                var singleHop = !!photon.__singleHop;
                if (!photon.hasOwnProperty("__progressRatio")) {
                  photon.__progressRatio = singleHop ? 0 : cyclePhotonIdx / numCyclePhotons;
                }
                !singleHop && cyclePhotonIdx++;
                photon.__progressRatio += particleSpeed;
                if (photon.__progressRatio >= 1) {
                  if (!singleHop) {
                    photon.__progressRatio = photon.__progressRatio % 1;
                  } else {
                    needsCleanup = true;
                    return;
                  }
                }
                var photonPosRatio = photon.__progressRatio;
                var coords = bzLine ? bzLine.get(photonPosRatio) : {
                  x: start2.x + (end.x - start2.x) * photonPosRatio || 0,
                  y: start2.y + (end.y - start2.y) * photonPosRatio || 0
                };
                ctx.beginPath();
                ctx.arc(coords.x, coords.y, photonR, 0, 2 * Math.PI, false);
                ctx.fill();
              });
              if (needsCleanup) {
                link.__photons = link.__photons.filter(function(photon) {
                  return !photon.__singleHop || photon.__progressRatio <= 1;
                });
              }
            });
            ctx.restore();
          }
        },
        emitParticle: function emitParticle(state, link) {
          if (link) {
            !link.__photons && (link.__photons = []);
            link.__photons.push({
              __singleHop: true
            });
          }
          return this;
        }
      },
      stateInit: function stateInit() {
        return {
          forceLayout: forceSimulation().force("link", forceLink()).force("charge", forceManyBody()).force("center", forceCenter()).force("dagRadial", null).stop(),
          engineRunning: false
        };
      },
      init: function init2(canvasCtx, state) {
        state.ctx = canvasCtx;
      },
      update: function update2(state) {
        state.engineRunning = false;
        state.onUpdate();
        if (state.nodeAutoColorBy !== null) {
          autoColorObjects(state.graphData.nodes, index$2(state.nodeAutoColorBy), state.nodeColor);
        }
        if (state.linkAutoColorBy !== null) {
          autoColorObjects(state.graphData.links, index$2(state.linkAutoColorBy), state.linkColor);
        }
        state.graphData.links.forEach(function(link) {
          link.source = link[state.linkSource];
          link.target = link[state.linkTarget];
        });
        if (!state.isShadow) {
          var linkParticlesAccessor = index$2(state.linkDirectionalParticles);
          state.graphData.links.forEach(function(link) {
            var numPhotons = Math.round(Math.abs(linkParticlesAccessor(link)));
            if (numPhotons) {
              link.__photons = _toConsumableArray(Array(numPhotons)).map(function() {
                return {};
              });
            } else {
              delete link.__photons;
            }
          });
        }
        state.forceLayout.stop().alpha(1).nodes(state.graphData.nodes);
        var linkForce = state.forceLayout.force("link");
        if (linkForce) {
          linkForce.id(function(d2) {
            return d2[state.nodeId];
          }).links(state.graphData.links);
        }
        var nodeDepths = state.dagMode && getDagDepths(state.graphData, function(node) {
          return node[state.nodeId];
        }, {
          nodeFilter: state.dagNodeFilter,
          onLoopError: state.onDagError || void 0
        });
        var maxDepth = Math.max.apply(Math, _toConsumableArray(Object.values(nodeDepths || [])));
        var dagLevelDistance = state.dagLevelDistance || state.graphData.nodes.length / (maxDepth || 1) * DAG_LEVEL_NODE_RATIO * (["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? 0.7 : 1);
        if (state.dagMode) {
          var getFFn = function getFFn2(fix, invert) {
            return function(node) {
              return !fix ? void 0 : (nodeDepths[node[state.nodeId]] - maxDepth / 2) * dagLevelDistance * (invert ? -1 : 1);
            };
          };
          var fxFn = getFFn(["lr", "rl"].indexOf(state.dagMode) !== -1, state.dagMode === "rl");
          var fyFn = getFFn(["td", "bu"].indexOf(state.dagMode) !== -1, state.dagMode === "bu");
          state.graphData.nodes.filter(state.dagNodeFilter).forEach(function(node) {
            node.fx = fxFn(node);
            node.fy = fyFn(node);
          });
        }
        state.forceLayout.force("dagRadial", ["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? forceRadial(function(node) {
          var nodeDepth = nodeDepths[node[state.nodeId]] || -1;
          return (state.dagMode === "radialin" ? maxDepth - nodeDepth : nodeDepth) * dagLevelDistance;
        }).strength(function(node) {
          return state.dagNodeFilter(node) ? 1 : 0;
        }) : null);
        for (var i2 = 0; i2 < state.warmupTicks && !(state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin); i2++) {
          state.forceLayout.tick();
        }
        this.resetCountdown();
        state.onFinishUpdate();
      }
    });
    function linkKapsule(kapsulePropNames, kapsuleType) {
      var propNames = kapsulePropNames instanceof Array ? kapsulePropNames : [kapsulePropNames];
      var dummyK = new kapsuleType();
      return {
        linkProp: function linkProp(prop) {
          return {
            "default": dummyK[prop](),
            onChange: function onChange(v2, state) {
              propNames.forEach(function(propName) {
                return state[propName][prop](v2);
              });
            },
            triggerUpdate: false
          };
        },
        linkMethod: function linkMethod(method) {
          return function(state) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            var returnVals = [];
            propNames.forEach(function(propName) {
              var kapsuleInstance = state[propName];
              var returnVal = kapsuleInstance[method].apply(kapsuleInstance, args);
              if (returnVal !== kapsuleInstance) {
                returnVals.push(returnVal);
              }
            });
            return returnVals.length ? returnVals[0] : this;
          };
        }
      };
    }
    var HOVER_CANVAS_THROTTLE_DELAY = 800;
    var ZOOM2NODES_FACTOR = 4;
    var bindFG = linkKapsule("forceGraph", CanvasForceGraph);
    var bindBoth = linkKapsule(["forceGraph", "shadowGraph"], CanvasForceGraph);
    var linkedProps = Object.assign.apply(Object, _toConsumableArray(["nodeColor", "nodeAutoColorBy", "nodeCanvasObject", "nodeCanvasObjectMode", "linkColor", "linkAutoColorBy", "linkLineDash", "linkWidth", "linkCanvasObject", "linkCanvasObjectMode", "linkDirectionalArrowLength", "linkDirectionalArrowColor", "linkDirectionalArrowRelPos", "linkDirectionalParticles", "linkDirectionalParticleSpeed", "linkDirectionalParticleWidth", "linkDirectionalParticleColor", "dagMode", "dagLevelDistance", "dagNodeFilter", "onDagError", "d3AlphaMin", "d3AlphaDecay", "d3VelocityDecay", "warmupTicks", "cooldownTicks", "cooldownTime", "onEngineTick", "onEngineStop"].map(function(p2) {
      return _defineProperty({}, p2, bindFG.linkProp(p2));
    })).concat(_toConsumableArray(["nodeRelSize", "nodeId", "nodeVal", "nodeVisibility", "linkSource", "linkTarget", "linkVisibility", "linkCurvature"].map(function(p2) {
      return _defineProperty({}, p2, bindBoth.linkProp(p2));
    }))));
    var linkedMethods = Object.assign.apply(Object, _toConsumableArray(["d3Force", "d3ReheatSimulation", "emitParticle"].map(function(p2) {
      return _defineProperty({}, p2, bindFG.linkMethod(p2));
    })));
    function adjustCanvasSize(state) {
      if (state.canvas) {
        var curWidth = state.canvas.width;
        var curHeight = state.canvas.height;
        if (curWidth === 300 && curHeight === 150) {
          curWidth = curHeight = 0;
        }
        var pxScale = window.devicePixelRatio;
        curWidth /= pxScale;
        curHeight /= pxScale;
        [state.canvas, state.shadowCanvas].forEach(function(canvas) {
          canvas.style.width = "".concat(state.width, "px");
          canvas.style.height = "".concat(state.height, "px");
          canvas.width = state.width * pxScale;
          canvas.height = state.height * pxScale;
          if (!curWidth && !curHeight) {
            canvas.getContext("2d").scale(pxScale, pxScale);
          }
        });
        var k2 = transform(state.canvas).k;
        state.zoom.translateBy(state.zoom.__baseElem, (state.width - curWidth) / 2 / k2, (state.height - curHeight) / 2 / k2);
        state.needsRedraw = true;
      }
    }
    function resetTransform(ctx) {
      var pxRatio = window.devicePixelRatio;
      ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
    }
    function clearCanvas(ctx, width, height) {
      ctx.save();
      resetTransform(ctx);
      ctx.clearRect(0, 0, width, height);
      ctx.restore();
    }
    var forceGraph = index$3({
      props: _objectSpread2({
        width: {
          "default": window.innerWidth,
          onChange: function onChange(_2, state) {
            return adjustCanvasSize(state);
          },
          triggerUpdate: false
        },
        height: {
          "default": window.innerHeight,
          onChange: function onChange(_2, state) {
            return adjustCanvasSize(state);
          },
          triggerUpdate: false
        },
        graphData: {
          "default": {
            nodes: [],
            links: []
          },
          onChange: function onChange(d2, state) {
            [{
              type: "Node",
              objs: d2.nodes
            }, {
              type: "Link",
              objs: d2.links
            }].forEach(hexIndex);
            state.forceGraph.graphData(d2);
            state.shadowGraph.graphData(d2);
            function hexIndex(_ref4) {
              var type = _ref4.type, objs = _ref4.objs;
              objs.filter(function(d3) {
                if (!d3.hasOwnProperty("__indexColor"))
                  return true;
                var cur = state.colorTracker.lookup(d3.__indexColor);
                return !cur || !cur.hasOwnProperty("d") || cur.d !== d3;
              }).forEach(function(d3) {
                d3.__indexColor = state.colorTracker.register({
                  type,
                  d: d3
                });
              });
            }
          },
          triggerUpdate: false
        },
        backgroundColor: {
          onChange: function onChange(color2, state) {
            state.canvas && color2 && (state.canvas.style.background = color2);
          },
          triggerUpdate: false
        },
        nodeLabel: {
          "default": "name",
          triggerUpdate: false
        },
        nodePointerAreaPaint: {
          onChange: function onChange(paintFn, state) {
            state.shadowGraph.nodeCanvasObject(!paintFn ? null : function(node, ctx, globalScale) {
              return paintFn(node, node.__indexColor, ctx, globalScale);
            });
            state.flushShadowCanvas && state.flushShadowCanvas();
          },
          triggerUpdate: false
        },
        linkPointerAreaPaint: {
          onChange: function onChange(paintFn, state) {
            state.shadowGraph.linkCanvasObject(!paintFn ? null : function(link, ctx, globalScale) {
              return paintFn(link, link.__indexColor, ctx, globalScale);
            });
            state.flushShadowCanvas && state.flushShadowCanvas();
          },
          triggerUpdate: false
        },
        linkLabel: {
          "default": "name",
          triggerUpdate: false
        },
        linkHoverPrecision: {
          "default": 4,
          triggerUpdate: false
        },
        minZoom: {
          "default": 0.01,
          onChange: function onChange(minZoom, state) {
            state.zoom.scaleExtent([minZoom, state.zoom.scaleExtent()[1]]);
          },
          triggerUpdate: false
        },
        maxZoom: {
          "default": 1e3,
          onChange: function onChange(maxZoom, state) {
            state.zoom.scaleExtent([state.zoom.scaleExtent()[0], maxZoom]);
          },
          triggerUpdate: false
        },
        enableNodeDrag: {
          "default": true,
          triggerUpdate: false
        },
        enableZoomInteraction: {
          "default": true,
          triggerUpdate: false
        },
        enablePanInteraction: {
          "default": true,
          triggerUpdate: false
        },
        enableZoomPanInteraction: {
          "default": true,
          triggerUpdate: false
        },
        enablePointerInteraction: {
          "default": true,
          onChange: function onChange(_2, state) {
            state.hoverObj = null;
          },
          triggerUpdate: false
        },
        autoPauseRedraw: {
          "default": true,
          triggerUpdate: false
        },
        onNodeDrag: {
          "default": function _default2() {
          },
          triggerUpdate: false
        },
        onNodeDragEnd: {
          "default": function _default2() {
          },
          triggerUpdate: false
        },
        onNodeClick: {
          triggerUpdate: false
        },
        onNodeRightClick: {
          triggerUpdate: false
        },
        onNodeHover: {
          triggerUpdate: false
        },
        onLinkClick: {
          triggerUpdate: false
        },
        onLinkRightClick: {
          triggerUpdate: false
        },
        onLinkHover: {
          triggerUpdate: false
        },
        onBackgroundClick: {
          triggerUpdate: false
        },
        onBackgroundRightClick: {
          triggerUpdate: false
        },
        onZoom: {
          triggerUpdate: false
        },
        onZoomEnd: {
          triggerUpdate: false
        },
        onRenderFramePre: {
          triggerUpdate: false
        },
        onRenderFramePost: {
          triggerUpdate: false
        }
      }, linkedProps),
      aliases: {
        stopAnimation: "pauseAnimation"
      },
      methods: _objectSpread2({
        graph2ScreenCoords: function graph2ScreenCoords(state, x2, y2) {
          var t2 = transform(state.canvas);
          return {
            x: x2 * t2.k + t2.x,
            y: y2 * t2.k + t2.y
          };
        },
        screen2GraphCoords: function screen2GraphCoords(state, x2, y2) {
          var t2 = transform(state.canvas);
          return {
            x: (x2 - t2.x) / t2.k,
            y: (y2 - t2.y) / t2.k
          };
        },
        centerAt: function centerAt(state, x2, y2, transitionDuration) {
          if (!state.canvas)
            return null;
          if (x2 !== void 0 || y2 !== void 0) {
            var finalPos = Object.assign({}, x2 !== void 0 ? {
              x: x2
            } : {}, y2 !== void 0 ? {
              y: y2
            } : {});
            if (!transitionDuration) {
              setCenter(finalPos);
            } else {
              new exports.Tween(getCenter()).to(finalPos, transitionDuration).easing(exports.Easing.Quadratic.Out).onUpdate(setCenter).start();
            }
            return this;
          }
          return getCenter();
          function getCenter() {
            var t2 = transform(state.canvas);
            return {
              x: (state.width / 2 - t2.x) / t2.k,
              y: (state.height / 2 - t2.y) / t2.k
            };
          }
          function setCenter(_ref5) {
            var x3 = _ref5.x, y3 = _ref5.y;
            state.zoom.translateTo(state.zoom.__baseElem, x3 === void 0 ? getCenter().x : x3, y3 === void 0 ? getCenter().y : y3);
            state.needsRedraw = true;
          }
        },
        zoom: function zoom2(state, k2, transitionDuration) {
          if (!state.canvas)
            return null;
          if (k2 !== void 0) {
            if (!transitionDuration) {
              setZoom(k2);
            } else {
              new exports.Tween({
                k: getZoom()
              }).to({
                k: k2
              }, transitionDuration).easing(exports.Easing.Quadratic.Out).onUpdate(function(_ref6) {
                var k3 = _ref6.k;
                return setZoom(k3);
              }).start();
            }
            return this;
          }
          return getZoom();
          function getZoom() {
            return transform(state.canvas).k;
          }
          function setZoom(k3) {
            state.zoom.scaleTo(state.zoom.__baseElem, k3);
            state.needsRedraw = true;
          }
        },
        zoomToFit: function zoomToFit(state) {
          var transitionDuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var padding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;
          for (var _len = arguments.length, bboxArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            bboxArgs[_key - 3] = arguments[_key];
          }
          var bbox = this.getGraphBbox.apply(this, bboxArgs);
          if (bbox) {
            var center = {
              x: (bbox.x[0] + bbox.x[1]) / 2,
              y: (bbox.y[0] + bbox.y[1]) / 2
            };
            var zoomK = Math.max(1e-12, Math.min(1e12, (state.width - padding * 2) / (bbox.x[1] - bbox.x[0]), (state.height - padding * 2) / (bbox.y[1] - bbox.y[0])));
            this.centerAt(center.x, center.y, transitionDuration);
            this.zoom(zoomK, transitionDuration);
          }
          return this;
        },
        getGraphBbox: function getGraphBbox(state) {
          var nodeFilter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
            return true;
          };
          var getVal = index$2(state.nodeVal);
          var getR = function getR2(node) {
            return Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize;
          };
          var nodesPos = state.graphData.nodes.filter(nodeFilter).map(function(node) {
            return {
              x: node.x,
              y: node.y,
              r: getR(node)
            };
          });
          return !nodesPos.length ? null : {
            x: [min$1(nodesPos, function(node) {
              return node.x - node.r;
            }), max$1(nodesPos, function(node) {
              return node.x + node.r;
            })],
            y: [min$1(nodesPos, function(node) {
              return node.y - node.r;
            }), max$1(nodesPos, function(node) {
              return node.y + node.r;
            })]
          };
        },
        pauseAnimation: function pauseAnimation(state) {
          if (state.animationFrameRequestId) {
            cancelAnimationFrame(state.animationFrameRequestId);
            state.animationFrameRequestId = null;
          }
          return this;
        },
        resumeAnimation: function resumeAnimation(state) {
          if (!state.animationFrameRequestId) {
            this._animationCycle();
          }
          return this;
        },
        _destructor: function _destructor() {
          this.pauseAnimation();
          this.graphData({
            nodes: [],
            links: []
          });
        }
      }, linkedMethods),
      stateInit: function stateInit() {
        return {
          lastSetZoom: 1,
          zoom: zoom(),
          forceGraph: new CanvasForceGraph(),
          shadowGraph: new CanvasForceGraph().cooldownTicks(0).nodeColor("__indexColor").linkColor("__indexColor").isShadow(true),
          colorTracker: new _default()
        };
      },
      init: function init2(domNode, state) {
        var _this = this;
        domNode.innerHTML = "";
        var container = document.createElement("div");
        container.classList.add("force-graph-container");
        container.style.position = "relative";
        domNode.appendChild(container);
        state.canvas = document.createElement("canvas");
        if (state.backgroundColor)
          state.canvas.style.background = state.backgroundColor;
        container.appendChild(state.canvas);
        state.shadowCanvas = document.createElement("canvas");
        var ctx = state.canvas.getContext("2d");
        var shadowCtx = state.shadowCanvas.getContext("2d");
        var pointerPos = {
          x: -1e12,
          y: -1e12
        };
        var getObjUnderPointer = function getObjUnderPointer2() {
          var obj = null;
          var pxScale = window.devicePixelRatio;
          var px = pointerPos.x > 0 && pointerPos.y > 0 ? shadowCtx.getImageData(pointerPos.x * pxScale, pointerPos.y * pxScale, 1, 1) : null;
          px && (obj = state.colorTracker.lookup(px.data));
          return obj;
        };
        select(state.canvas).call(drag().subject(function() {
          if (!state.enableNodeDrag) {
            return null;
          }
          var obj = getObjUnderPointer();
          return obj && obj.type === "Node" ? obj.d : null;
        }).on("start", function(ev) {
          var obj = ev.subject;
          obj.__initialDragPos = {
            x: obj.x,
            y: obj.y,
            fx: obj.fx,
            fy: obj.fy
          };
          if (!ev.active) {
            obj.fx = obj.x;
            obj.fy = obj.y;
          }
          state.canvas.classList.add("grabbable");
        }).on("drag", function(ev) {
          var obj = ev.subject;
          var initPos = obj.__initialDragPos;
          var dragPos = ev;
          var k2 = transform(state.canvas).k;
          var translate = {
            x: initPos.x + (dragPos.x - initPos.x) / k2 - obj.x,
            y: initPos.y + (dragPos.y - initPos.y) / k2 - obj.y
          };
          ["x", "y"].forEach(function(c2) {
            return obj["f".concat(c2)] = obj[c2] = initPos[c2] + (dragPos[c2] - initPos[c2]) / k2;
          });
          state.forceGraph.d3AlphaTarget(0.3).resetCountdown();
          state.isPointerDragging = true;
          obj.__dragged = true;
          state.onNodeDrag(obj, translate);
        }).on("end", function(ev) {
          var obj = ev.subject;
          var initPos = obj.__initialDragPos;
          var translate = {
            x: obj.x - initPos.x,
            y: obj.y - initPos.y
          };
          if (initPos.fx === void 0) {
            obj.fx = void 0;
          }
          if (initPos.fy === void 0) {
            obj.fy = void 0;
          }
          delete obj.__initialDragPos;
          if (state.forceGraph.d3AlphaTarget()) {
            state.forceGraph.d3AlphaTarget(0).resetCountdown();
          }
          state.canvas.classList.remove("grabbable");
          state.isPointerDragging = false;
          if (obj.__dragged) {
            delete obj.__dragged;
            state.onNodeDragEnd(obj, translate);
          }
        }));
        state.zoom(state.zoom.__baseElem = select(state.canvas));
        state.zoom.__baseElem.on("dblclick.zoom", null);
        state.zoom.filter(function(ev) {
          return !ev.button && state.enableZoomPanInteraction && (state.enableZoomInteraction || ev.type !== "wheel") && (state.enablePanInteraction || ev.type === "wheel");
        }).on("zoom", function(ev) {
          var t2 = ev.transform;
          [ctx, shadowCtx].forEach(function(c2) {
            resetTransform(c2);
            c2.translate(t2.x, t2.y);
            c2.scale(t2.k, t2.k);
          });
          state.onZoom && state.onZoom(_objectSpread2(_objectSpread2({}, t2), _this.centerAt()));
          state.needsRedraw = true;
        }).on("end", function(ev) {
          return state.onZoomEnd && state.onZoomEnd(_objectSpread2(_objectSpread2({}, ev.transform), _this.centerAt()));
        });
        adjustCanvasSize(state);
        state.forceGraph.onNeedsRedraw(function() {
          return state.needsRedraw = true;
        }).onFinishUpdate(function() {
          if (transform(state.canvas).k === state.lastSetZoom && state.graphData.nodes.length) {
            state.zoom.scaleTo(state.zoom.__baseElem, state.lastSetZoom = ZOOM2NODES_FACTOR / Math.cbrt(state.graphData.nodes.length));
            state.needsRedraw = true;
          }
        });
        var toolTipElem = document.createElement("div");
        toolTipElem.classList.add("graph-tooltip");
        container.appendChild(toolTipElem);
        ["pointermove", "pointerdown"].forEach(function(evType) {
          return container.addEventListener(evType, function(ev) {
            if (evType === "pointerdown") {
              state.isPointerPressed = true;
              state.pointerDownEvent = ev;
            }
            !state.isPointerDragging && ev.type === "pointermove" && state.onBackgroundClick && (ev.pressure > 0 || state.isPointerPressed) && (ev.pointerType !== "touch" || ev.movementX === void 0 || [ev.movementX, ev.movementY].some(function(m2) {
              return Math.abs(m2) > 1;
            })) && (state.isPointerDragging = true);
            var offset = getOffset(container);
            pointerPos.x = ev.pageX - offset.left;
            pointerPos.y = ev.pageY - offset.top;
            toolTipElem.style.top = "".concat(pointerPos.y, "px");
            toolTipElem.style.left = "".concat(pointerPos.x, "px");
            function getOffset(el2) {
              var rect = el2.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
              };
            }
          }, {
            passive: true
          });
        });
        container.addEventListener("pointerup", function(ev) {
          state.isPointerPressed = false;
          if (state.isPointerDragging) {
            state.isPointerDragging = false;
            return;
          }
          var cbEvents = [ev, state.pointerDownEvent];
          requestAnimationFrame(function() {
            if (ev.button === 0) {
              if (state.hoverObj) {
                var fn = state["on".concat(state.hoverObj.type, "Click")];
                fn && fn.apply(void 0, [state.hoverObj.d].concat(cbEvents));
              } else {
                state.onBackgroundClick && state.onBackgroundClick.apply(state, cbEvents);
              }
            }
            if (ev.button === 2) {
              if (state.hoverObj) {
                var _fn = state["on".concat(state.hoverObj.type, "RightClick")];
                _fn && _fn.apply(void 0, [state.hoverObj.d].concat(cbEvents));
              } else {
                state.onBackgroundRightClick && state.onBackgroundRightClick.apply(state, cbEvents);
              }
            }
          });
        }, {
          passive: true
        });
        container.addEventListener("contextmenu", function(ev) {
          if (!state.onBackgroundRightClick && !state.onNodeRightClick && !state.onLinkRightClick)
            return true;
          ev.preventDefault();
          return false;
        });
        state.forceGraph(ctx);
        state.shadowGraph(shadowCtx);
        var refreshShadowCanvas = lodash_throttle(function() {
          clearCanvas(shadowCtx, state.width, state.height);
          state.shadowGraph.linkWidth(function(l2) {
            return index$2(state.linkWidth)(l2) + state.linkHoverPrecision;
          });
          var t2 = transform(state.canvas);
          state.shadowGraph.globalScale(t2.k).tickFrame();
        }, HOVER_CANVAS_THROTTLE_DELAY);
        state.flushShadowCanvas = refreshShadowCanvas.flush;
        (this._animationCycle = function animate() {
          var doRedraw = !state.autoPauseRedraw || !!state.needsRedraw || state.forceGraph.isEngineRunning() || state.graphData.links.some(function(d2) {
            return d2.__photons && d2.__photons.length;
          });
          state.needsRedraw = false;
          if (state.enablePointerInteraction) {
            var obj = !state.isPointerDragging ? getObjUnderPointer() : null;
            if (obj !== state.hoverObj) {
              var prevObj = state.hoverObj;
              var prevObjType = prevObj ? prevObj.type : null;
              var objType = obj ? obj.type : null;
              if (prevObjType && prevObjType !== objType) {
                var fn = state["on".concat(prevObjType, "Hover")];
                fn && fn(null, prevObj.d);
              }
              if (objType) {
                var _fn2 = state["on".concat(objType, "Hover")];
                _fn2 && _fn2(obj.d, prevObjType === objType ? prevObj.d : null);
              }
              var tooltipContent = obj ? index$2(state["".concat(obj.type.toLowerCase(), "Label")])(obj.d) || "" : "";
              toolTipElem.style.visibility = tooltipContent ? "visible" : "hidden";
              toolTipElem.innerHTML = tooltipContent;
              state.canvas.classList[obj && state["on".concat(objType, "Click")] || !obj && state.onBackgroundClick ? "add" : "remove"]("clickable");
              state.hoverObj = obj;
            }
            doRedraw && refreshShadowCanvas();
          }
          if (doRedraw) {
            clearCanvas(ctx, state.width, state.height);
            var globalScale = transform(state.canvas).k;
            state.onRenderFramePre && state.onRenderFramePre(ctx, globalScale);
            state.forceGraph.globalScale(globalScale).tickFrame();
            state.onRenderFramePost && state.onRenderFramePost(ctx, globalScale);
          }
          exports.update();
          state.animationFrameRequestId = requestAnimationFrame(animate);
        })();
      },
      update: function updateFn(state) {
      }
    });
    const commonPropTypes = {
      width: propTypes.exports.number,
      height: propTypes.exports.number,
      graphData: propTypes.exports.shape({
        nodes: propTypes.exports.arrayOf(propTypes.exports.object).isRequired,
        links: propTypes.exports.arrayOf(propTypes.exports.object).isRequired
      }),
      backgroundColor: propTypes.exports.string,
      nodeRelSize: propTypes.exports.number,
      nodeId: propTypes.exports.string,
      nodeLabel: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      nodeVal: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      nodeVisibility: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string, propTypes.exports.func]),
      nodeColor: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      nodeAutoColorBy: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      onNodeHover: propTypes.exports.func,
      onNodeClick: propTypes.exports.func,
      linkSource: propTypes.exports.string,
      linkTarget: propTypes.exports.string,
      linkLabel: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      linkVisibility: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string, propTypes.exports.func]),
      linkColor: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      linkAutoColorBy: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      linkWidth: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkCurvature: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalArrowLength: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalArrowColor: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalArrowRelPos: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalParticles: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalParticleSpeed: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalParticleWidth: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkDirectionalParticleColor: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      onLinkHover: propTypes.exports.func,
      onLinkClick: propTypes.exports.func,
      dagMode: propTypes.exports.oneOf(["td", "bu", "lr", "rl", "zin", "zout", "radialin", "radialout"]),
      dagLevelDistance: propTypes.exports.number,
      dagNodeFilter: propTypes.exports.func,
      onDagError: propTypes.exports.func,
      d3AlphaMin: propTypes.exports.number,
      d3AlphaDecay: propTypes.exports.number,
      d3VelocityDecay: propTypes.exports.number,
      warmupTicks: propTypes.exports.number,
      cooldownTicks: propTypes.exports.number,
      cooldownTime: propTypes.exports.number,
      onEngineTick: propTypes.exports.func,
      onEngineStop: propTypes.exports.func,
      getGraphBbox: propTypes.exports.func
    };
    const pointerBasedPropTypes = {
      zoomToFit: propTypes.exports.func,
      onNodeRightClick: propTypes.exports.func,
      onNodeDrag: propTypes.exports.func,
      onNodeDragEnd: propTypes.exports.func,
      onLinkRightClick: propTypes.exports.func,
      linkHoverPrecision: propTypes.exports.number,
      onBackgroundClick: propTypes.exports.func,
      onBackgroundRightClick: propTypes.exports.func,
      enablePointerInteraction: propTypes.exports.bool,
      enableNodeDrag: propTypes.exports.bool
    };
    const threeBasedPropTypes = {
      showNavInfo: propTypes.exports.bool,
      nodeOpacity: propTypes.exports.number,
      nodeResolution: propTypes.exports.number,
      nodeThreeObject: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
      nodeThreeObjectExtend: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string, propTypes.exports.func]),
      linkOpacity: propTypes.exports.number,
      linkResolution: propTypes.exports.number,
      linkCurveRotation: propTypes.exports.oneOfType([propTypes.exports.number, propTypes.exports.string, propTypes.exports.func]),
      linkMaterial: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
      linkThreeObject: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.string, propTypes.exports.func]),
      linkThreeObjectExtend: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string, propTypes.exports.func]),
      linkPositionUpdate: propTypes.exports.func,
      linkDirectionalArrowResolution: propTypes.exports.number,
      linkDirectionalParticleResolution: propTypes.exports.number,
      forceEngine: propTypes.exports.oneOf(["d3", "ngraph"]),
      ngraphPhysics: propTypes.exports.object,
      numDimensions: propTypes.exports.oneOf([1, 2, 3])
    };
    const ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
      linkLineDash: propTypes.exports.oneOfType([propTypes.exports.arrayOf(propTypes.exports.number), propTypes.exports.string, propTypes.exports.func]),
      nodeCanvasObjectMode: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      nodeCanvasObject: propTypes.exports.func,
      nodePointerAreaPaint: propTypes.exports.func,
      linkCanvasObjectMode: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      linkCanvasObject: propTypes.exports.func,
      linkPointerAreaPaint: propTypes.exports.func,
      autoPauseRedraw: propTypes.exports.bool,
      minZoom: propTypes.exports.number,
      maxZoom: propTypes.exports.number,
      enableZoomInteraction: propTypes.exports.bool,
      enablePanInteraction: propTypes.exports.bool,
      onZoom: propTypes.exports.func,
      onZoomEnd: propTypes.exports.func,
      onRenderFramePre: propTypes.exports.func,
      onRenderFramePost: propTypes.exports.func
    });
    Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
      enableNavigationControls: propTypes.exports.bool,
      controlType: propTypes.exports.oneOf(["trackball", "orbit", "fly"]),
      rendererConfig: propTypes.exports.object,
      extraRenderers: propTypes.exports.arrayOf(propTypes.exports.shape({
        render: propTypes.exports.func.isRequired
      }))
    });
    Object.assign({}, commonPropTypes, threeBasedPropTypes, {
      nodeDesc: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func]),
      linkDesc: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.func])
    });
    Object.assign({}, commonPropTypes, threeBasedPropTypes, {
      markerAttrs: propTypes.exports.object,
      yOffset: propTypes.exports.number,
      glScale: propTypes.exports.number
    });
    const ForceGraph2D = index$4(forceGraph, {
      methodNames: [
        "emitParticle",
        "d3Force",
        "d3ReheatSimulation",
        "stopAnimation",
        "pauseAnimation",
        "resumeAnimation",
        "centerAt",
        "zoom",
        "zoomToFit",
        "getGraphBbox",
        "screen2GraphCoords",
        "graph2ScreenCoords"
      ]
    });
    ForceGraph2D.displayName = "ForceGraph2D";
    ForceGraph2D.propTypes = ForceGraph2DPropTypes;
    var i$3 = Object.defineProperty;
    var d$3 = (t2, e2, n2) => e2 in t2 ? i$3(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
    var r$4 = (t2, e2, n2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
    class o$5 {
      constructor() {
        r$4(this, "current", this.detect());
        r$4(this, "handoffState", "pending");
        r$4(this, "currentId", 0);
      }
      set(e2) {
        this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
      }
      reset() {
        this.set(this.detect());
      }
      nextId() {
        return ++this.currentId;
      }
      get isServer() {
        return this.current === "server";
      }
      get isClient() {
        return this.current === "client";
      }
      detect() {
        return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
      }
      handoff() {
        this.handoffState === "pending" && (this.handoffState = "complete");
      }
      get isHandoffComplete() {
        return this.handoffState === "complete";
      }
    }
    let s$7 = new o$5();
    let l$5 = (e2, f2) => {
      s$7.isServer ? react.exports.useEffect(e2, f2) : react.exports.useLayoutEffect(e2, f2);
    };
    function s$6(e2) {
      let r2 = react.exports.useRef(e2);
      return l$5(() => {
        r2.current = e2;
      }, [e2]), r2;
    }
    function t$2(e2) {
      typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
        throw o2;
      }));
    }
    function m$3() {
      let a2 = [], i2 = [], r2 = { enqueue(e2) {
        i2.push(e2);
      }, addEventListener(e2, t2, n2, s2) {
        return e2.addEventListener(t2, n2, s2), r2.add(() => e2.removeEventListener(t2, n2, s2));
      }, requestAnimationFrame(...e2) {
        let t2 = requestAnimationFrame(...e2);
        return r2.add(() => cancelAnimationFrame(t2));
      }, nextFrame(...e2) {
        return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
      }, setTimeout(...e2) {
        let t2 = setTimeout(...e2);
        return r2.add(() => clearTimeout(t2));
      }, microTask(...e2) {
        let t2 = { current: true };
        return t$2(() => {
          t2.current && e2[0]();
        }), r2.add(() => {
          t2.current = false;
        });
      }, add(e2) {
        return a2.push(e2), () => {
          let t2 = a2.indexOf(e2);
          if (t2 >= 0) {
            let [n2] = a2.splice(t2, 1);
            n2();
          }
        };
      }, dispose() {
        for (let e2 of a2.splice(0))
          e2();
      }, async workQueue() {
        for (let e2 of i2.splice(0))
          await e2();
      }, style(e2, t2, n2) {
        let s2 = e2.style.getPropertyValue(t2);
        return Object.assign(e2.style, { [t2]: n2 }), this.add(() => {
          Object.assign(e2.style, { [t2]: s2 });
        });
      } };
      return r2;
    }
    function p$4() {
      let [e2] = react.exports.useState(m$3);
      return react.exports.useEffect(() => () => e2.dispose(), [e2]), e2;
    }
    let o$4 = function(t2) {
      let e2 = s$6(t2);
      return React.useCallback((...r2) => e2.current(...r2), [e2]);
    };
    function l$4() {
      let [e2, f2] = react.exports.useState(s$7.isHandoffComplete);
      return e2 && s$7.isHandoffComplete === false && f2(false), react.exports.useEffect(() => {
        e2 !== true && f2(true);
      }, [e2]), react.exports.useEffect(() => s$7.handoff(), []), e2;
    }
    var o$3;
    let I$2 = (o$3 = React.useId) != null ? o$3 : function() {
      let n2 = l$4(), [e2, u2] = React.useState(n2 ? () => s$7.nextId() : null);
      return l$5(() => {
        e2 === null && u2(s$7.nextId());
      }, [e2]), e2 != null ? "" + e2 : void 0;
    };
    function u$4(r2, n2, ...a2) {
      if (r2 in n2) {
        let e2 = n2[r2];
        return typeof e2 == "function" ? e2(...a2) : e2;
      }
      let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
      throw Error.captureStackTrace && Error.captureStackTrace(t2, u$4), t2;
    }
    function e$2(r2) {
      return s$7.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
    }
    let f$3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
    var L$2 = ((r2) => (r2[r2.First = 1] = "First", r2[r2.Previous = 2] = "Previous", r2[r2.Next = 4] = "Next", r2[r2.Last = 8] = "Last", r2[r2.WrapAround = 16] = "WrapAround", r2[r2.NoScroll = 32] = "NoScroll", r2))(L$2 || {}), N = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(N || {}), T$2 = ((n2) => (n2[n2.Previous = -1] = "Previous", n2[n2.Next = 1] = "Next", n2))(T$2 || {});
    function E$1(e2 = document.body) {
      return e2 == null ? [] : Array.from(e2.querySelectorAll(f$3)).sort((t2, n2) => Math.sign((t2.tabIndex || Number.MAX_SAFE_INTEGER) - (n2.tabIndex || Number.MAX_SAFE_INTEGER)));
    }
    var F$3 = ((n2) => (n2[n2.Strict = 0] = "Strict", n2[n2.Loose = 1] = "Loose", n2))(F$3 || {});
    function h$4(e2, t2 = 0) {
      var n2;
      return e2 === ((n2 = e$2(e2)) == null ? void 0 : n2.body) ? false : u$4(t2, { [0]() {
        return e2.matches(f$3);
      }, [1]() {
        let l2 = e2;
        for (; l2 !== null; ) {
          if (l2.matches(f$3))
            return true;
          l2 = l2.parentElement;
        }
        return false;
      } });
    }
    function S$2(e2) {
      e2 == null || e2.focus({ preventScroll: true });
    }
    let H = ["textarea", "input"].join(",");
    function w$1(e2) {
      var t2, n2;
      return (n2 = (t2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : t2.call(e2, H)) != null ? n2 : false;
    }
    function A$3(e2, t2 = (n2) => n2) {
      return e2.slice().sort((n2, l2) => {
        let o2 = t2(n2), i2 = t2(l2);
        if (o2 === null || i2 === null)
          return 0;
        let r2 = o2.compareDocumentPosition(i2);
        return r2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
      });
    }
    function I$1(e2, t2, { sorted: n2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
      let i2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, r2 = Array.isArray(e2) ? n2 ? A$3(e2) : e2 : E$1(e2);
      o2.length > 0 && r2.length > 1 && (r2 = r2.filter((s2) => !o2.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
      let d2 = (() => {
        if (t2 & 5)
          return 1;
        if (t2 & 10)
          return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
      })(), x2 = (() => {
        if (t2 & 1)
          return 0;
        if (t2 & 2)
          return Math.max(0, r2.indexOf(l2)) - 1;
        if (t2 & 4)
          return Math.max(0, r2.indexOf(l2)) + 1;
        if (t2 & 8)
          return r2.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
      })(), p2 = t2 & 32 ? { preventScroll: true } : {}, c2 = 0, a2 = r2.length, u2;
      do {
        if (c2 >= a2 || c2 + a2 <= 0)
          return 0;
        let s2 = x2 + c2;
        if (t2 & 16)
          s2 = (s2 + a2) % a2;
        else {
          if (s2 < 0)
            return 3;
          if (s2 >= a2)
            return 1;
        }
        u2 = r2[s2], u2 == null || u2.focus(p2), c2 += d2;
      } while (u2 !== i2.activeElement);
      return t2 & 6 && w$1(u2) && u2.select(), u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
    }
    function d$2(e2, r2, n2) {
      let o2 = s$6(r2);
      react.exports.useEffect(() => {
        function t2(u2) {
          o2.current(u2);
        }
        return document.addEventListener(e2, t2, n2), () => document.removeEventListener(e2, t2, n2);
      }, [e2, n2]);
    }
    function L$1(m2, E2, c2 = true) {
      let i2 = react.exports.useRef(false);
      react.exports.useEffect(() => {
        requestAnimationFrame(() => {
          i2.current = c2;
        });
      }, [c2]);
      function f2(e2, o2) {
        if (!i2.current || e2.defaultPrevented)
          return;
        let l2 = function r2(t2) {
          return typeof t2 == "function" ? r2(t2()) : Array.isArray(t2) || t2 instanceof Set ? t2 : [t2];
        }(m2), n2 = o2(e2);
        if (n2 !== null && !!n2.getRootNode().contains(n2)) {
          for (let r2 of l2) {
            if (r2 === null)
              continue;
            let t2 = r2 instanceof HTMLElement ? r2 : r2.current;
            if (t2 != null && t2.contains(n2) || e2.composed && e2.composedPath().includes(t2))
              return;
          }
          return !h$4(n2, F$3.Loose) && n2.tabIndex !== -1 && e2.preventDefault(), E2(e2, n2);
        }
      }
      let u2 = react.exports.useRef(null);
      d$2("mousedown", (e2) => {
        var o2, l2;
        i2.current && (u2.current = ((l2 = (o2 = e2.composedPath) == null ? void 0 : o2.call(e2)) == null ? void 0 : l2[0]) || e2.target);
      }, true), d$2("click", (e2) => {
        !u2.current || (f2(e2, () => u2.current), u2.current = null);
      }, true), d$2("blur", (e2) => f2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
    }
    let u$3 = Symbol();
    function T$1(t2, n2 = true) {
      return Object.assign(t2, { [u$3]: n2 });
    }
    function y$1(...t2) {
      let n2 = react.exports.useRef(t2);
      react.exports.useEffect(() => {
        n2.current = t2;
      }, [t2]);
      let c2 = o$4((e2) => {
        for (let o2 of n2.current)
          o2 != null && (typeof o2 == "function" ? o2(e2) : o2.current = e2);
      });
      return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$3])) ? void 0 : c2;
    }
    function e$1(...n2) {
      return n2.filter(Boolean).join(" ");
    }
    var j$1 = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(j$1 || {}), w = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(w || {});
    function X$1({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: a2, features: s2, visible: n2 = true, name: l2 }) {
      let o2 = h$3(t2, r2);
      if (n2)
        return m$2(o2, e2, a2, l2);
      let u2 = s2 != null ? s2 : 0;
      if (u2 & 2) {
        let { static: i2 = false, ...d2 } = o2;
        if (i2)
          return m$2(d2, e2, a2, l2);
      }
      if (u2 & 1) {
        let { unmount: i2 = true, ...d2 } = o2;
        return u$4(i2 ? 0 : 1, { [0]() {
          return null;
        }, [1]() {
          return m$2({ ...d2, hidden: true, style: { display: "none" } }, e2, a2, l2);
        } });
      }
      return m$2(o2, e2, a2, l2);
    }
    function m$2(r2, t2 = {}, e2, a2) {
      var y2;
      let { as: s2 = e2, children: n2, refName: l2 = "ref", ...o2 } = T(r2, ["unmount", "static"]), u2 = r2.ref !== void 0 ? { [l2]: r2.ref } : {}, i2 = typeof n2 == "function" ? n2(t2) : n2;
      o2.className && typeof o2.className == "function" && (o2.className = o2.className(t2));
      let d2 = {};
      if (t2) {
        let f2 = false, c2 = [];
        for (let [p2, F2] of Object.entries(t2))
          typeof F2 == "boolean" && (f2 = true), F2 === true && c2.push(p2);
        f2 && (d2["data-headlessui-state"] = c2.join(" "));
      }
      if (s2 === react.exports.Fragment && Object.keys(P$2(o2)).length > 0) {
        if (!react.exports.isValidElement(i2) || Array.isArray(i2) && i2.length > 1)
          throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o2).map((p2) => `  - ${p2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p2) => `  - ${p2}`).join(`
`)].join(`
`));
        let f2 = e$1((y2 = i2.props) == null ? void 0 : y2.className, o2.className), c2 = f2 ? { className: f2 } : {};
        return react.exports.cloneElement(i2, Object.assign({}, h$3(i2.props, P$2(T(o2, ["ref"]))), d2, u2, O(i2.ref, u2.ref), c2));
      }
      return react.exports.createElement(s2, Object.assign({}, T(o2, ["ref"]), s2 !== react.exports.Fragment && u2, s2 !== react.exports.Fragment && d2), i2);
    }
    function O(...r2) {
      return { ref: r2.every((t2) => t2 == null) ? void 0 : (t2) => {
        for (let e2 of r2)
          e2 != null && (typeof e2 == "function" ? e2(t2) : e2.current = t2);
      } };
    }
    function h$3(...r2) {
      if (r2.length === 0)
        return {};
      if (r2.length === 1)
        return r2[0];
      let t2 = {}, e2 = {};
      for (let s2 of r2)
        for (let n2 in s2)
          n2.startsWith("on") && typeof s2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(s2[n2])) : t2[n2] = s2[n2];
      if (t2.disabled || t2["aria-disabled"])
        return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((s2) => [s2, void 0])));
      for (let s2 in e2)
        Object.assign(t2, { [s2](n2, ...l2) {
          let o2 = e2[s2];
          for (let u2 of o2) {
            if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
              return;
            u2(n2, ...l2);
          }
        } });
      return t2;
    }
    function V(r2) {
      var t2;
      return Object.assign(react.exports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
    }
    function P$2(r2) {
      let t2 = Object.assign({}, r2);
      for (let e2 in t2)
        t2[e2] === void 0 && delete t2[e2];
      return t2;
    }
    function T(r2, t2 = []) {
      let e2 = Object.assign({}, r2);
      for (let a2 of t2)
        a2 in e2 && delete e2[a2];
      return e2;
    }
    function r$3(n2) {
      let e2 = n2.parentElement, l2 = null;
      for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
        e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
      let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
      return t2 && i$2(l2) ? false : t2;
    }
    function i$2(n2) {
      if (!n2)
        return false;
      let e2 = n2.previousElementSibling;
      for (; e2 !== null; ) {
        if (e2 instanceof HTMLLegendElement)
          return false;
        e2 = e2.previousElementSibling;
      }
      return true;
    }
    let a$4 = "div";
    var s$5 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$5 || {});
    let h$2 = V(function(t2, o2) {
      let { features: e2 = 1, ...r2 } = t2, d2 = { ref: o2, "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
      return X$1({ ourProps: d2, theirProps: r2, slot: {}, defaultTag: a$4, name: "Hidden" });
    });
    let o$2 = react.exports.createContext(null);
    o$2.displayName = "OpenClosedContext";
    var p$3 = ((e2) => (e2[e2.Open = 0] = "Open", e2[e2.Closed = 1] = "Closed", e2))(p$3 || {});
    function s$4() {
      return react.exports.useContext(o$2);
    }
    function C({
      value: t2,
      children: n2
    }) {
      return React.createElement(o$2.Provider, {
        value: t2
      }, n2);
    }
    var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
    function m$1(u2, t2) {
      let e2 = react.exports.useRef([]), r2 = o$4(u2);
      react.exports.useEffect(() => {
        let o2 = [...e2.current];
        for (let [n2, a2] of t2.entries())
          if (e2.current[n2] !== a2) {
            let l2 = r2(t2, o2);
            return e2.current = t2, l2;
          }
      }, [r2, ...t2]);
    }
    function s$3(e2, r2, n2) {
      let o2 = s$6(r2);
      react.exports.useEffect(() => {
        function t2(i2) {
          o2.current(i2);
        }
        return window.addEventListener(e2, t2, n2), () => window.removeEventListener(e2, t2, n2);
      }, [e2, n2]);
    }
    var s$2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(s$2 || {});
    function n$1() {
      let e2 = react.exports.useRef(0);
      return s$3("keydown", (o2) => {
        o2.key === "Tab" && (e2.current = o2.shiftKey ? 1 : 0);
      }, true), e2;
    }
    function f$2() {
      let e2 = react.exports.useRef(false);
      return l$5(() => (e2.current = true, () => {
        e2.current = false;
      }), []), e2;
    }
    function n(...e2) {
      return react.exports.useMemo(() => e$2(...e2), [...e2]);
    }
    function E(n2, e2, a2, t2) {
      let i2 = s$6(a2);
      react.exports.useEffect(() => {
        n2 = n2 != null ? n2 : window;
        function r2(o2) {
          i2.current(o2);
        }
        return n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2);
      }, [n2, e2, t2]);
    }
    let z = "div";
    var A$2 = ((t2) => (t2[t2.None = 1] = "None", t2[t2.InitialFocus = 2] = "InitialFocus", t2[t2.TabLock = 4] = "TabLock", t2[t2.FocusLock = 8] = "FocusLock", t2[t2.RestoreFocus = 16] = "RestoreFocus", t2[t2.All = 30] = "All", t2))(A$2 || {});
    let de = Object.assign(V(function(u2, e2) {
      let l2 = react.exports.useRef(null), a2 = y$1(l2, e2), {
        initialFocus: m2,
        containers: t2,
        features: n$22 = 30,
        ...E2
      } = u2;
      l$4() || (n$22 = 1);
      let s2 = n(l2);
      J$1({
        ownerDocument: s2
      }, Boolean(n$22 & 16));
      let S2 = Q({
        ownerDocument: s2,
        container: l2,
        initialFocus: m2
      }, Boolean(n$22 & 2));
      X({
        ownerDocument: s2,
        container: l2,
        containers: t2,
        previousActiveElement: S2
      }, Boolean(n$22 & 8));
      let H2 = n$1(), R2 = o$4((o2) => {
        let c2 = l2.current;
        if (!c2)
          return;
        ((_2) => _2())(() => {
          u$4(H2.current, {
            [s$2.Forwards]: () => {
              I$1(c2, L$2.First, {
                skipElements: [o2.relatedTarget]
              });
            },
            [s$2.Backwards]: () => {
              I$1(c2, L$2.Last, {
                skipElements: [o2.relatedTarget]
              });
            }
          });
        });
      }), B2 = p$4(), L2 = react.exports.useRef(false), P2 = {
        ref: a2,
        onKeyDown(o2) {
          o2.key == "Tab" && (L2.current = true, B2.requestAnimationFrame(() => {
            L2.current = false;
          }));
        },
        onBlur(o2) {
          let c2 = new Set(t2 == null ? void 0 : t2.current);
          c2.add(l2);
          let p2 = o2.relatedTarget;
          p2 instanceof HTMLElement && p2.dataset.headlessuiFocusGuard !== "true" && (h$1(c2, p2) || (L2.current ? I$1(l2.current, u$4(H2.current, {
            [s$2.Forwards]: () => L$2.Next,
            [s$2.Backwards]: () => L$2.Previous
          }) | L$2.WrapAround, {
            relativeTo: o2.target
          }) : o2.target instanceof HTMLElement && S$2(o2.target)));
        }
      };
      return React.createElement(React.Fragment, null, Boolean(n$22 & 4) && React.createElement(h$2, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": true,
        onFocus: R2,
        features: s$5.Focusable
      }), X$1({
        ourProps: P2,
        theirProps: E2,
        defaultTag: z,
        name: "FocusTrap"
      }), Boolean(n$22 & 4) && React.createElement(h$2, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": true,
        onFocus: R2,
        features: s$5.Focusable
      }));
    }), {
      features: A$2
    });
    function J$1({
      ownerDocument: r2
    }, u2) {
      let e2 = react.exports.useRef(null);
      E(r2 == null ? void 0 : r2.defaultView, "focusout", (a2) => {
        !u2 || e2.current || (e2.current = a2.target);
      }, true), m$1(() => {
        u2 || ((r2 == null ? void 0 : r2.activeElement) === (r2 == null ? void 0 : r2.body) && S$2(e2.current), e2.current = null);
      }, [u2]);
      let l2 = react.exports.useRef(false);
      react.exports.useEffect(() => (l2.current = false, () => {
        l2.current = true, t$2(() => {
          !l2.current || (S$2(e2.current), e2.current = null);
        });
      }), []);
    }
    function Q({
      ownerDocument: r2,
      container: u2,
      initialFocus: e2
    }, l2) {
      let a2 = react.exports.useRef(null), m2 = f$2();
      return m$1(() => {
        if (!l2)
          return;
        let t2 = u2.current;
        !t2 || t$2(() => {
          if (!m2.current)
            return;
          let n2 = r2 == null ? void 0 : r2.activeElement;
          if (e2 != null && e2.current) {
            if ((e2 == null ? void 0 : e2.current) === n2) {
              a2.current = n2;
              return;
            }
          } else if (t2.contains(n2)) {
            a2.current = n2;
            return;
          }
          e2 != null && e2.current ? S$2(e2.current) : I$1(t2, L$2.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a2.current = r2 == null ? void 0 : r2.activeElement;
        });
      }, [l2]), a2;
    }
    function X({
      ownerDocument: r2,
      container: u2,
      containers: e2,
      previousActiveElement: l2
    }, a2) {
      let m2 = f$2();
      E(r2 == null ? void 0 : r2.defaultView, "focus", (t2) => {
        if (!a2 || !m2.current)
          return;
        let n2 = new Set(e2 == null ? void 0 : e2.current);
        n2.add(u2);
        let E2 = l2.current;
        if (!E2)
          return;
        let s2 = t2.target;
        s2 && s2 instanceof HTMLElement ? h$1(n2, s2) ? (l2.current = s2, S$2(s2)) : (t2.preventDefault(), t2.stopPropagation(), S$2(E2)) : S$2(l2.current);
      }, true);
    }
    function h$1(r2, u2) {
      var e2;
      for (let l2 of r2)
        if ((e2 = l2.current) != null && e2.contains(u2))
          return true;
      return false;
    }
    let i$1 = /* @__PURE__ */ new Set(), r$2 = /* @__PURE__ */ new Map();
    function u$2(t2) {
      t2.setAttribute("aria-hidden", "true"), t2.inert = true;
    }
    function l$3(t2) {
      let n2 = r$2.get(t2);
      !n2 || (n2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", n2["aria-hidden"]), t2.inert = n2.inert);
    }
    function M$4(t2, n2 = true) {
      l$5(() => {
        if (!n2 || !t2.current)
          return;
        let o2 = t2.current, a2 = e$2(o2);
        if (!!a2) {
          i$1.add(o2);
          for (let e2 of r$2.keys())
            e2.contains(o2) && (l$3(e2), r$2.delete(e2));
          return a2.querySelectorAll("body > *").forEach((e2) => {
            if (e2 instanceof HTMLElement) {
              for (let f2 of i$1)
                if (e2.contains(f2))
                  return;
              i$1.size === 1 && (r$2.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), u$2(e2));
            }
          }), () => {
            if (i$1.delete(o2), i$1.size > 0)
              a2.querySelectorAll("body > *").forEach((e2) => {
                if (e2 instanceof HTMLElement && !r$2.has(e2)) {
                  for (let f2 of i$1)
                    if (e2.contains(f2))
                      return;
                  r$2.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), u$2(e2);
                }
              });
            else
              for (let e2 of r$2.keys())
                l$3(e2), r$2.delete(e2);
          };
        }
      }, [n2]);
    }
    let e = react.exports.createContext(false);
    function l$2() {
      return react.exports.useContext(e);
    }
    function P$1(o2) {
      return React.createElement(e.Provider, {
        value: o2.force
      }, o2.children);
    }
    function x$1(i2) {
      let u2 = l$2(), o2 = react.exports.useContext(A$1), e2 = n(i2), [r2, f2] = react.exports.useState(() => {
        if (!u2 && o2 !== null || s$7.isServer)
          return null;
        let n2 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
        if (n2)
          return n2;
        if (e2 === null)
          return null;
        let t2 = e2.createElement("div");
        return t2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t2);
      });
      return react.exports.useEffect(() => {
        r2 !== null && (e2 != null && e2.body.contains(r2) || e2 == null || e2.body.appendChild(r2));
      }, [r2, e2]), react.exports.useEffect(() => {
        u2 || o2 !== null && f2(o2.current);
      }, [o2, f2, u2]), r2;
    }
    let _ = react.exports.Fragment, U = V(function(u2, o2) {
      let e2 = u2, r2 = react.exports.useRef(null), f2 = y$1(T$1((a2) => {
        r2.current = a2;
      }), o2), n$12 = n(r2), t2 = x$1(r2), [l2] = react.exports.useState(() => {
        var a2;
        return s$7.isServer ? null : (a2 = n$12 == null ? void 0 : n$12.createElement("div")) != null ? a2 : null;
      }), b = l$4(), p2 = react.exports.useRef(false);
      return l$5(() => {
        if (p2.current = false, !(!t2 || !l2))
          return t2.contains(l2) || (l2.setAttribute("data-headlessui-portal", ""), t2.appendChild(l2)), () => {
            p2.current = true, t$2(() => {
              var a2;
              !p2.current || !t2 || !l2 || (l2 instanceof Node && t2.contains(l2) && t2.removeChild(l2), t2.childNodes.length <= 0 && ((a2 = t2.parentElement) == null || a2.removeChild(t2)));
            });
          };
      }, [t2, l2]), b ? !t2 || !l2 ? null : reactDom.exports.createPortal(X$1({
        ourProps: {
          ref: f2
        },
        theirProps: e2,
        defaultTag: _,
        name: "Portal"
      }), l2) : null;
    }), j = react.exports.Fragment, A$1 = react.exports.createContext(null), F$2 = V(function(u2, o2) {
      let {
        target: e2,
        ...r2
      } = u2, n2 = {
        ref: y$1(o2)
      };
      return /* @__PURE__ */ jsx(A$1.Provider, {
        value: e2,
        children: X$1({
          ourProps: n2,
          theirProps: r2,
          defaultTag: j,
          name: "Popover.Group"
        })
      });
    }), $ = Object.assign(U, {
      Group: F$2
    });
    let d$1 = react.exports.createContext(null);
    function u$1() {
      let n2 = react.exports.useContext(d$1);
      if (n2 === null) {
        let t2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t2, u$1), t2;
      }
      return n2;
    }
    function k() {
      let [n2, t2] = react.exports.useState([]);
      return [n2.length > 0 ? n2.join(" ") : void 0, react.exports.useMemo(() => function(e2) {
        let i2 = o$4((r2) => (t2((o2) => [...o2, r2]), () => t2((o2) => {
          let s2 = o2.slice(), p2 = s2.indexOf(r2);
          return p2 !== -1 && s2.splice(p2, 1), s2;
        }))), a2 = react.exports.useMemo(() => ({
          register: i2,
          slot: e2.slot,
          name: e2.name,
          props: e2.props
        }), [i2, e2.slot, e2.name, e2.props]);
        return React.createElement(d$1.Provider, {
          value: a2
        }, e2.children);
      }, [t2])];
    }
    let S$1 = "p", F$1 = V(function(t2, c2) {
      let e2 = I$2(), {
        id: i2 = `headlessui-description-${e2}`,
        ...a2
      } = t2, r2 = u$1(), o2 = y$1(c2);
      l$5(() => r2.register(i2), [i2, r2.register]);
      let s2 = {
        ref: o2,
        ...r2.props,
        id: i2
      };
      return X$1({
        ourProps: s2,
        theirProps: a2,
        slot: r2.slot || {},
        defaultTag: S$1,
        name: r2.name || "Description"
      });
    });
    let a$3 = react.exports.createContext(() => {
    });
    a$3.displayName = "StackContext";
    var s$1 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s$1 || {});
    function x() {
      return react.exports.useContext(a$3);
    }
    function M$3({
      children: i2,
      onUpdate: r2,
      type: e2,
      element: n2,
      enabled: u2
    }) {
      let l2 = x(), o2 = o$4((...t2) => {
        r2 == null || r2(...t2), l2(...t2);
      });
      return l$5(() => {
        let t2 = u2 === void 0 || u2 === true;
        return t2 && o2(0, e2, n2), () => {
          t2 && o2(1, e2, n2);
        };
      }, [o2, e2, n2, u2]), React.createElement(a$3.Provider, {
        value: o2
      }, i2);
    }
    function i(e2, t2) {
      return e2 === t2 && (e2 !== 0 || 1 / e2 === 1 / t2) || e2 !== e2 && t2 !== t2;
    }
    const d = typeof Object.is == "function" ? Object.is : i, { useState: u, useEffect: h, useLayoutEffect: f$1, useDebugValue: p$2 } = e$3;
    function y(e2, t2, c2) {
      const a2 = t2(), [{ inst: n2 }, o2] = u({ inst: { value: a2, getSnapshot: t2 } });
      return f$1(() => {
        n2.value = a2, n2.getSnapshot = t2, r$1(n2) && o2({ inst: n2 });
      }, [e2, a2, t2]), h(() => (r$1(n2) && o2({ inst: n2 }), e2(() => {
        r$1(n2) && o2({ inst: n2 });
      })), [e2]), p$2(a2), a2;
    }
    function r$1(e2) {
      const t2 = e2.getSnapshot, c2 = e2.value;
      try {
        const a2 = t2();
        return !d(c2, a2);
      } catch {
        return true;
      }
    }
    function t$1(r2, e2, n2) {
      return e2();
    }
    const r = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", s = !r, c$1 = s ? t$1 : y, a$2 = "useSyncExternalStore" in e$3 ? ((n2) => n2.useSyncExternalStore)(e$3) : c$1;
    function S(t2) {
      return a$2(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
    }
    function a$1(o2, r2) {
      let t2 = o2(), n2 = /* @__PURE__ */ new Set();
      return { getSnapshot() {
        return t2;
      }, subscribe(e2) {
        return n2.add(e2), () => n2.delete(e2);
      }, dispatch(e2, ...s2) {
        let i2 = r2[e2].call(t2, ...s2);
        i2 && (t2 = i2, n2.forEach((c2) => c2()));
      } };
    }
    function c() {
      let o2;
      return { before({ doc: e2 }) {
        var l2;
        let n2 = e2.documentElement;
        o2 = ((l2 = e2.defaultView) != null ? l2 : window).innerWidth - n2.clientWidth;
      }, after({ doc: e2, d: n2 }) {
        let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
        n2.style(t2, "paddingRight", `${r2}px`);
      } };
    }
    function o() {
      return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
    }
    function p$1() {
      if (!o())
        return {};
      let o$12;
      return { before() {
        o$12 = window.pageYOffset;
      }, after({ doc: r2, d: l2, meta: s2 }) {
        function i2(e2) {
          return s2.containers.flatMap((t2) => t2()).some((t2) => t2.contains(e2));
        }
        l2.style(r2.body, "marginTop", `-${o$12}px`), window.scrollTo(0, 0);
        let n2 = null;
        l2.addEventListener(r2, "click", (e2) => {
          if (e2.target instanceof HTMLElement)
            try {
              let t2 = e2.target.closest("a");
              if (!t2)
                return;
              let { hash: c2 } = new URL(t2.href), a2 = r2.querySelector(c2);
              a2 && !i2(a2) && (n2 = a2);
            } catch {
            }
        }, true), l2.addEventListener(r2, "touchmove", (e2) => {
          e2.target instanceof HTMLElement && !i2(e2.target) && e2.preventDefault();
        }, { passive: false }), l2.add(() => {
          window.scrollTo(0, window.pageYOffset + o$12), n2 && n2.isConnected && (n2.scrollIntoView({ block: "nearest" }), n2 = null);
        });
      } };
    }
    function l$1() {
      return { before({ doc: e2, d: o2 }) {
        o2.style(e2.documentElement, "overflow", "hidden");
      } };
    }
    function m(e2) {
      let n2 = {};
      for (let t2 of e2)
        Object.assign(n2, t2(n2));
      return n2;
    }
    let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
      var o2;
      let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: m$3(), meta: /* @__PURE__ */ new Set() };
      return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
    }, POP(e2, n2) {
      let t2 = this.get(e2);
      return t2 && (t2.count--, t2.meta.delete(n2)), this;
    }, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
      let o2 = { doc: e2, d: n2, meta: m(t2) }, c$12 = [p$1(), c(), l$1()];
      c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
    }, SCROLL_ALLOW({ d: e2 }) {
      e2.dispose();
    }, TEARDOWN({ doc: e2 }) {
      this.delete(e2);
    } });
    a.subscribe(() => {
      let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
      for (let [t2] of e2)
        n2.set(t2, t2.documentElement.style.overflow);
      for (let t2 of e2.values()) {
        let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
        (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
      }
    });
    function p(e2, r2, n2) {
      let f2 = S(a), o2 = e2 ? f2.get(e2) : void 0, i2 = o2 ? o2.count > 0 : false;
      return l$5(() => {
        if (!(!e2 || !r2))
          return a.dispatch("PUSH", e2, n2), () => a.dispatch("POP", e2, n2);
      }, [r2, e2]), i2;
    }
    var Ee$1 = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(Ee$1 || {}), ve = ((e2) => (e2[e2.SetTitleId = 0] = "SetTitleId", e2))(ve || {});
    let be$1 = {
      [0](r2, e2) {
        return r2.titleId === e2.id ? r2 : {
          ...r2,
          titleId: e2.id
        };
      }
    }, M$2 = react.exports.createContext(null);
    M$2.displayName = "DialogContext";
    function L(r2) {
      let e2 = react.exports.useContext(M$2);
      if (e2 === null) {
        let t2 = new Error(`<${r2} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t2, L), t2;
      }
      return e2;
    }
    function he(r2, e2, t2 = () => [document.body]) {
      p(r2, e2, (d2) => {
        var l2;
        return {
          containers: [...(l2 = d2.containers) != null ? l2 : [], t2]
        };
      });
    }
    function Ce(r2, e2) {
      return u$4(e2.type, be$1, r2, e2);
    }
    let Oe = "div", Se$1 = j$1.RenderStrategy | j$1.Static, Le = V(function(e2, t2) {
      let d2 = I$2(), {
        id: l2 = `headlessui-dialog-${d2}`,
        open: n$12,
        onClose: o2,
        initialFocus: a2,
        __demoMode: c2 = false,
        ...g
      } = e2, [D2, F2] = react.exports.useState(0), i2 = s$4();
      n$12 === void 0 && i2 !== null && (n$12 = u$4(i2, {
        [p$3.Open]: true,
        [p$3.Closed]: false
      }));
      let _2 = react.exports.useRef(/* @__PURE__ */ new Set()), T2 = react.exports.useRef(null), J2 = y$1(T2, t2), U2 = react.exports.useRef(null), P2 = n(T2), $$1 = e2.hasOwnProperty("open") || i2 !== null, N2 = e2.hasOwnProperty("onClose");
      if (!$$1 && !N2)
        throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
      if (!$$1)
        throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
      if (!N2)
        throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
      if (typeof n$12 != "boolean")
        throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n$12}`);
      if (typeof o2 != "function")
        throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o2}`);
      let s2 = n$12 ? 0 : 1, [y2, Q2] = react.exports.useReducer(Ce, {
        titleId: null,
        descriptionId: null,
        panelRef: react.exports.createRef()
      }), R2 = o$4(() => o2(false)), W2 = o$4((p2) => Q2({
        type: 0,
        id: p2
      })), w2 = l$4() ? c2 ? false : s2 === 0 : false, k$12 = D2 > 1, X2 = react.exports.useContext(M$2) !== null, Z2 = k$12 ? "parent" : "leaf";
      M$4(T2, k$12 ? w2 : false);
      let Y2 = o$4(() => {
        var A2, f2;
        return [...Array.from((A2 = P2 == null ? void 0 : P2.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? A2 : []).filter((m2) => !(m2 === document.body || m2 === document.head || !(m2 instanceof HTMLElement) || m2.contains(U2.current) || y2.panelRef.current && m2.contains(y2.panelRef.current))), (f2 = y2.panelRef.current) != null ? f2 : T2.current];
      });
      L$1(() => Y2(), R2, w2 && !k$12), E(P2 == null ? void 0 : P2.defaultView, "keydown", (p2) => {
        p2.defaultPrevented || p2.key === o$1.Escape && s2 === 0 && (k$12 || (p2.preventDefault(), p2.stopPropagation(), R2()));
      }), he(P2, s2 === 0 && !X2, Y2), react.exports.useEffect(() => {
        if (s2 !== 0 || !T2.current)
          return;
        let p2 = new IntersectionObserver((A2) => {
          for (let f2 of A2)
            f2.boundingClientRect.x === 0 && f2.boundingClientRect.y === 0 && f2.boundingClientRect.width === 0 && f2.boundingClientRect.height === 0 && R2();
        });
        return p2.observe(T2.current), () => p2.disconnect();
      }, [s2, T2, R2]);
      let [ee2, te2] = k(), oe2 = react.exports.useMemo(() => [{
        dialogState: s2,
        close: R2,
        setTitleId: W2
      }, y2], [s2, y2, R2, W2]), j2 = react.exports.useMemo(() => ({
        open: s2 === 0
      }), [s2]), re2 = {
        ref: J2,
        id: l2,
        role: "dialog",
        "aria-modal": s2 === 0 ? true : void 0,
        "aria-labelledby": y2.titleId,
        "aria-describedby": ee2
      };
      return React.createElement(M$3, {
        type: "Dialog",
        enabled: s2 === 0,
        element: T2,
        onUpdate: o$4((p2, A2, f2) => {
          A2 === "Dialog" && u$4(p2, {
            [s$1.Add]() {
              _2.current.add(f2), F2((m2) => m2 + 1);
            },
            [s$1.Remove]() {
              _2.current.add(f2), F2((m2) => m2 - 1);
            }
          });
        })
      }, React.createElement(P$1, {
        force: true
      }, React.createElement($, null, React.createElement(M$2.Provider, {
        value: oe2
      }, React.createElement($.Group, {
        target: T2
      }, React.createElement(P$1, {
        force: false
      }, React.createElement(te2, {
        slot: j2,
        name: "Dialog.Description"
      }, /* @__PURE__ */ jsx(de, {
        initialFocus: a2,
        containers: _2,
        features: w2 ? u$4(Z2, {
          parent: de.features.RestoreFocus,
          leaf: de.features.All & ~de.features.FocusLock
        }) : de.features.None,
        children: X$1({
          ourProps: re2,
          theirProps: g,
          slot: j2,
          defaultTag: Oe,
          features: Se$1,
          visible: s2 === 0,
          name: "Dialog"
        })
      }))))))), React.createElement(h$2, {
        features: s$5.Hidden,
        ref: U2
      }));
    }), Fe = "div", ke = V(function(e2, t2) {
      let d2 = I$2(), {
        id: l2 = `headlessui-dialog-overlay-${d2}`,
        ...n2
      } = e2, [{
        dialogState: o2,
        close: a2
      }] = L("Dialog.Overlay"), c2 = y$1(t2), g = o$4((i2) => {
        if (i2.target === i2.currentTarget) {
          if (r$3(i2.currentTarget))
            return i2.preventDefault();
          i2.preventDefault(), i2.stopPropagation(), a2();
        }
      }), D2 = react.exports.useMemo(() => ({
        open: o2 === 0
      }), [o2]);
      return X$1({
        ourProps: {
          ref: c2,
          id: l2,
          "aria-hidden": true,
          onClick: g
        },
        theirProps: n2,
        slot: D2,
        defaultTag: Fe,
        name: "Dialog.Overlay"
      });
    }), Ie = "div", Me = V(function(e2, t2) {
      let d2 = I$2(), {
        id: l2 = `headlessui-dialog-backdrop-${d2}`,
        ...n2
      } = e2, [{
        dialogState: o2
      }, a2] = L("Dialog.Backdrop"), c2 = y$1(t2);
      react.exports.useEffect(() => {
        if (a2.panelRef.current === null)
          throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
      }, [a2.panelRef]);
      let g = react.exports.useMemo(() => ({
        open: o2 === 0
      }), [o2]);
      return /* @__PURE__ */ jsx(P$1, {
        force: true,
        children: /* @__PURE__ */ jsx($, {
          children: X$1({
            ourProps: {
              ref: c2,
              id: l2,
              "aria-hidden": true
            },
            theirProps: n2,
            slot: g,
            defaultTag: Ie,
            name: "Dialog.Backdrop"
          })
        })
      });
    }), _e = "div", we = V(function(e2, t2) {
      let d2 = I$2(), {
        id: l2 = `headlessui-dialog-panel-${d2}`,
        ...n2
      } = e2, [{
        dialogState: o2
      }, a2] = L("Dialog.Panel"), c2 = y$1(t2, a2.panelRef), g = react.exports.useMemo(() => ({
        open: o2 === 0
      }), [o2]), D2 = o$4((i2) => {
        i2.stopPropagation();
      });
      return X$1({
        ourProps: {
          ref: c2,
          id: l2,
          onClick: D2
        },
        theirProps: n2,
        slot: g,
        defaultTag: _e,
        name: "Dialog.Panel"
      });
    }), xe$1 = "h2", He$1 = V(function(e2, t2) {
      let d2 = I$2(), {
        id: l2 = `headlessui-dialog-title-${d2}`,
        ...n2
      } = e2, [{
        dialogState: o2,
        setTitleId: a2
      }] = L("Dialog.Title"), c2 = y$1(t2);
      react.exports.useEffect(() => (a2(l2), () => a2(null)), [l2, a2]);
      let g = react.exports.useMemo(() => ({
        open: o2 === 0
      }), [o2]);
      return X$1({
        ourProps: {
          ref: c2,
          id: l2
        },
        theirProps: n2,
        slot: g,
        defaultTag: xe$1,
        name: "Dialog.Title"
      });
    }), gt = Object.assign(Le, {
      Backdrop: Me,
      Panel: we,
      Overlay: ke,
      Title: He$1,
      Description: F$1
    });
    function l(r2) {
      let e2 = { called: false };
      return (...t2) => {
        if (!e2.called)
          return e2.called = true, r2(...t2);
      };
    }
    function v(t2, ...e2) {
      t2 && e2.length > 0 && t2.classList.add(...e2);
    }
    function f(t2, ...e2) {
      t2 && e2.length > 0 && t2.classList.remove(...e2);
    }
    function F(t2, e2) {
      let n2 = m$3();
      if (!t2)
        return n2.dispose;
      let { transitionDuration: a2, transitionDelay: i2 } = getComputedStyle(t2), [m2, d2] = [a2, i2].map((o2) => {
        let [r2 = 0] = o2.split(",").filter(Boolean).map((l2) => l2.includes("ms") ? parseFloat(l2) : parseFloat(l2) * 1e3).sort((l2, g) => g - l2);
        return r2;
      });
      if (m2 + d2 !== 0) {
        let o2 = n2.addEventListener(t2, "transitionend", (r2) => {
          r2.target === r2.currentTarget && (e2(), o2());
        });
      } else
        e2();
      return n2.add(() => e2()), n2.dispose;
    }
    function M$1(t2, e2, n2, a2) {
      let i2 = n2 ? "enter" : "leave", m2 = m$3(), d2 = a2 !== void 0 ? l(a2) : () => {
      };
      i2 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
      let u2 = u$4(i2, { enter: () => e2.enter, leave: () => e2.leave }), o2 = u$4(i2, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u$4(i2, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
      return f(t2, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), v(t2, ...u2, ...r2), m2.nextFrame(() => {
        f(t2, ...r2), v(t2, ...o2), F(t2, () => (f(t2, ...u2), v(t2, ...e2.entered), d2()));
      }), m2.dispose;
    }
    function D({ container: i2, direction: t2, classes: o2, onStart: s2, onStop: u2 }) {
      let a2 = f$2(), c2 = p$4(), r2 = s$6(t2);
      l$5(() => {
        let e2 = m$3();
        c2.add(e2.dispose);
        let n2 = i2.current;
        if (!!n2 && r2.current !== "idle" && !!a2.current)
          return e2.dispose(), s2.current(r2.current), e2.add(M$1(n2, o2.current, r2.current === "enter", () => {
            e2.dispose(), u2.current(r2.current);
          })), e2.dispose;
      }, [t2]);
    }
    function P(i2 = "") {
      return i2.split(" ").filter((e2) => e2.trim().length > 1);
    }
    let A = react.exports.createContext(null);
    A.displayName = "TransitionContext";
    var ge = ((s2) => (s2.Visible = "visible", s2.Hidden = "hidden", s2))(ge || {});
    function be() {
      let i2 = react.exports.useContext(A);
      if (i2 === null)
        throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
      return i2;
    }
    function Ee() {
      let i2 = react.exports.useContext(M);
      if (i2 === null)
        throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
      return i2;
    }
    let M = react.exports.createContext(null);
    M.displayName = "NestingContext";
    function I(i2) {
      return "children" in i2 ? I(i2.children) : i2.current.filter(({
        el: e2
      }) => e2.current !== null).filter(({
        state: e2
      }) => e2 === "visible").length > 0;
    }
    function ne(i2, e2) {
      let s2 = s$6(i2), n2 = react.exports.useRef([]), m2 = f$2(), y2 = p$4(), b = o$4((l2, r2 = w.Hidden) => {
        let t2 = n2.current.findIndex(({
          el: o2
        }) => o2 === l2);
        t2 !== -1 && (u$4(r2, {
          [w.Unmount]() {
            n2.current.splice(t2, 1);
          },
          [w.Hidden]() {
            n2.current[t2].state = "hidden";
          }
        }), y2.microTask(() => {
          var o2;
          !I(n2) && m2.current && ((o2 = s2.current) == null || o2.call(s2));
        }));
      }), E2 = o$4((l2) => {
        let r2 = n2.current.find(({
          el: t2
        }) => t2 === l2);
        return r2 ? r2.state !== "visible" && (r2.state = "visible") : n2.current.push({
          el: l2,
          state: "visible"
        }), () => b(l2, w.Unmount);
      }), S2 = react.exports.useRef([]), u2 = react.exports.useRef(Promise.resolve()), p2 = react.exports.useRef({
        enter: [],
        leave: [],
        idle: []
      }), d2 = o$4((l2, r2, t2) => {
        S2.current.splice(0), e2 && (e2.chains.current[r2] = e2.chains.current[r2].filter(([o2]) => o2 !== l2)), e2 == null || e2.chains.current[r2].push([l2, new Promise((o2) => {
          S2.current.push(o2);
        })]), e2 == null || e2.chains.current[r2].push([l2, new Promise((o2) => {
          Promise.all(p2.current[r2].map(([f2, a2]) => a2)).then(() => o2());
        })]), r2 === "enter" ? u2.current = u2.current.then(() => e2 == null ? void 0 : e2.wait.current).then(() => t2(r2)) : t2(r2);
      }), v2 = o$4((l2, r2, t2) => {
        Promise.all(p2.current[r2].splice(0).map(([o2, f2]) => f2)).then(() => {
          var o2;
          (o2 = S2.current.shift()) == null || o2();
        }).then(() => t2(r2));
      });
      return react.exports.useMemo(() => ({
        children: n2,
        register: E2,
        unregister: b,
        onStart: d2,
        onStop: v2,
        wait: u2,
        chains: p2
      }), [E2, b, n2, d2, v2, p2, u2]);
    }
    function Se() {
    }
    let xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
    function re(i2) {
      var s2;
      let e2 = {};
      for (let n2 of xe)
        e2[n2] = (s2 = i2[n2]) != null ? s2 : Se;
      return e2;
    }
    function Pe(i2) {
      let e2 = react.exports.useRef(re(i2));
      return react.exports.useEffect(() => {
        e2.current = re(i2);
      }, [i2]), e2;
    }
    let He = "div", ie = j$1.RenderStrategy, oe = V(function(e2, s2) {
      let {
        beforeEnter: n2,
        afterEnter: m2,
        beforeLeave: y2,
        afterLeave: b,
        enter: E2,
        enterFrom: S2,
        enterTo: u2,
        entered: p2,
        leave: d2,
        leaveFrom: v2,
        leaveTo: l2,
        ...r2
      } = e2, t2 = react.exports.useRef(null), o2 = y$1(t2, s2), f2 = r2.unmount ? w.Unmount : w.Hidden, {
        show: a2,
        appear: x2,
        initial: se2
      } = be(), [h2, _2] = react.exports.useState(a2 ? "visible" : "hidden"), K2 = Ee(), {
        register: D$12,
        unregister: V2
      } = K2, j2 = react.exports.useRef(null);
      react.exports.useEffect(() => D$12(t2), [D$12, t2]), react.exports.useEffect(() => {
        if (f2 === w.Hidden && !!t2.current) {
          if (a2 && h2 !== "visible") {
            _2("visible");
            return;
          }
          return u$4(h2, {
            ["hidden"]: () => V2(t2),
            ["visible"]: () => D$12(t2)
          });
        }
      }, [h2, t2, D$12, V2, a2, f2]);
      let U2 = s$6({
        enter: P(E2),
        enterFrom: P(S2),
        enterTo: P(u2),
        entered: P(p2),
        leave: P(d2),
        leaveFrom: P(v2),
        leaveTo: P(l2)
      }), L2 = Pe({
        beforeEnter: n2,
        afterEnter: m2,
        beforeLeave: y2,
        afterLeave: b
      }), k2 = l$4();
      react.exports.useEffect(() => {
        if (k2 && h2 === "visible" && t2.current === null)
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }, [t2, h2, k2]);
      let G2 = se2 && !x2, le2 = (() => !k2 || G2 || j2.current === a2 ? "idle" : a2 ? "enter" : "leave")(), ae2 = o$4((C2) => u$4(C2, {
        enter: () => L2.current.beforeEnter(),
        leave: () => L2.current.beforeLeave(),
        idle: () => {
        }
      })), ue2 = o$4((C2) => u$4(C2, {
        enter: () => L2.current.afterEnter(),
        leave: () => L2.current.afterLeave(),
        idle: () => {
        }
      })), w$12 = ne(() => {
        _2("hidden"), V2(t2);
      }, K2);
      D({
        container: t2,
        classes: U2,
        direction: le2,
        onStart: s$6((C2) => {
          w$12.onStart(t2, C2, ae2);
        }),
        onStop: s$6((C2) => {
          w$12.onStop(t2, C2, ue2), C2 === "leave" && !I(w$12) && (_2("hidden"), V2(t2));
        })
      }), react.exports.useEffect(() => {
        !G2 || (f2 === w.Hidden ? j2.current = null : j2.current = a2);
      }, [a2, G2, h2]);
      let B2 = r2, de2 = {
        ref: o2
      };
      return x2 && a2 && s$7.isServer && (B2 = {
        ...B2,
        className: e$1(r2.className, ...U2.current.enter, ...U2.current.enterFrom)
      }), /* @__PURE__ */ jsx(M.Provider, {
        value: w$12,
        children: /* @__PURE__ */ jsx(C, {
          value: u$4(h2, {
            ["visible"]: p$3.Open,
            ["hidden"]: p$3.Closed
          }),
          children: X$1({
            ourProps: de2,
            theirProps: B2,
            defaultTag: He,
            features: ie,
            visible: h2 === "visible",
            name: "Transition.Child"
          })
        })
      });
    }), J = V(function(e2, s2) {
      let {
        show: n2,
        appear: m2 = false,
        unmount: y2,
        ...b
      } = e2, E2 = react.exports.useRef(null), S2 = y$1(E2, s2);
      l$4();
      let u2 = s$4();
      if (n2 === void 0 && u2 !== null && (n2 = u$4(u2, {
        [p$3.Open]: true,
        [p$3.Closed]: false
      })), ![true, false].includes(n2))
        throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
      let [p2, d2] = react.exports.useState(n2 ? "visible" : "hidden"), v2 = ne(() => {
        d2("hidden");
      }), [l2, r2] = react.exports.useState(true), t2 = react.exports.useRef([n2]);
      l$5(() => {
        l2 !== false && t2.current[t2.current.length - 1] !== n2 && (t2.current.push(n2), r2(false));
      }, [t2, n2]);
      let o2 = react.exports.useMemo(() => ({
        show: n2,
        appear: m2,
        initial: l2
      }), [n2, m2, l2]);
      react.exports.useEffect(() => {
        if (n2)
          d2("visible");
        else if (!I(v2))
          d2("hidden");
        else {
          let a2 = E2.current;
          if (!a2)
            return;
          let x2 = a2.getBoundingClientRect();
          x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && d2("hidden");
        }
      }, [n2, v2]);
      let f2 = {
        unmount: y2
      };
      return /* @__PURE__ */ jsx(M.Provider, {
        value: v2,
        children: /* @__PURE__ */ jsx(A.Provider, {
          value: o2,
          children: X$1({
            ourProps: {
              ...f2,
              as: react.exports.Fragment,
              children: React.createElement(oe, {
                ref: S2,
                ...f2,
                ...b
              })
            },
            theirProps: {},
            defaultTag: react.exports.Fragment,
            features: ie,
            visible: p2 === "visible",
            name: "Transition"
          })
        })
      });
    }), Ne = V(function(e2, s2) {
      let n2 = react.exports.useContext(A) !== null, m2 = s$4() !== null;
      return /* @__PURE__ */ jsx(Fragment, {
        children: !n2 && m2 ? /* @__PURE__ */ jsx(J, {
          ref: s2,
          ...e2
        }) : React.createElement(oe, {
          ref: s2,
          ...e2
        })
      });
    }), Ke = Object.assign(J, {
      Child: Ne,
      Root: J
    });
    function MiniCardOS400DiskUsedPercent({
      collectorHost,
      targetHost
    }) {
      const collectorUrl = "http://localhost:19999/";
      const targetData = "ibmi_remote.asp_used_percent";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-sm font-semibold text-slate-800",
            children: "ASP Utilisation"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "ml-15 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-host": collectorUrl,
            "data-chart-library": "easypiechart",
            "data-title": "Used ASP",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "150px",
            "data-height": "150px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100"
          })
        })]
      });
    }
    function MiniCardOS400({
      collectorHost,
      targetHost
    }) {
      return /* @__PURE__ */ jsx("div", {
        className: "flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4",
        children: /* @__PURE__ */ jsx(MiniCardOS400DiskUsedPercent, {
          collectorHost,
          targetHost
        })
      });
    }
    function MiniCardLINUXDiskUsedPercent({
      collectorHost,
      targetHost
    }) {
      const collectorUrl = "http://localhost:19999/host/" + targetHost;
      const targetData = "disk_space._";
      const targetDataId = collectorHost + "_disk_space__";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-sm font-semibold text-slate-800",
            children: "Disk Utilisation"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "ml-15 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "150px",
            "data-height": "150px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          })
        })]
      });
    }
    function MiniCardLINUX({
      collectorHost,
      targetHost
    }) {
      return /* @__PURE__ */ jsx("div", {
        className: "flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4",
        children: /* @__PURE__ */ jsx(MiniCardLINUXDiskUsedPercent, {
          collectorHost,
          targetHost
        })
      });
    }
    function MiniCardWINDOWSDiskUsedPercent({
      collectorHost,
      targetHost
    }) {
      const collectorUrl = "http://localhost:19999/";
      const targetData = "wmi_" + targetHost + ".logical_disk_C:_space_usage";
      const targetDataId = collectorHost + "_wmi_" + targetHost + "_logical_disk_C:_space_usage";
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "pt-5",
          children: [/* @__PURE__ */ jsx("header", {
            className: "flex items-start justify-between mb-2"
          }), /* @__PURE__ */ jsx("h2", {
            className: "mb-2 text-sm font-semibold text-slate-800",
            children: "Disk Utilisation"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "ml-15 grow",
          children: /* @__PURE__ */ jsx("div", {
            "data-netdata": targetData,
            "data-id": targetDataId,
            "data-host": collectorUrl,
            "data-append-options": "percentage",
            "data-chart-library": "easypiechart",
            "data-title": "Used disk C:",
            "data-units": "%",
            "data-decimal-digits": "0",
            "data-width": "150px",
            "data-height": "150px",
            "data-easypiechart-barcolor": "(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})",
            "data-easypiechart-min-value": "0",
            "data-easypiechart-max-value": "100",
            "data-dimensions": "used"
          })
        })]
      });
    }
    function MiniCardWINDOWS({
      collectorHost,
      targetHost
    }) {
      return /* @__PURE__ */ jsx("div", {
        className: "flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4",
        children: /* @__PURE__ */ jsx(MiniCardWINDOWSDiskUsedPercent, {
          collectorHost,
          targetHost
        })
      });
    }
    function SlidingPanel({
      openPanel,
      setOpenPanel,
      close,
      nodeId,
      nodeLabel,
      nodeOs,
      collectorHost,
      targetHost
    }) {
      const DynamicComponent = nodeOs === "OS400" ? MiniCardOS400 : nodeOs === "LINUX" ? MiniCardLINUX : MiniCardWINDOWS;
      const handleClosePanel = () => {
        NETDATA.pause(function() {
          setSelectedNodeId(false);
          setSelectedNodeLabel(false);
          setSelectedNodeOs(false);
          setCollectorHost(false);
          setTargetHost(false);
        });
      };
      return /* @__PURE__ */ jsx(Ke.Root, {
        show: openPanel,
        as: react.exports.Fragment,
        children: /* @__PURE__ */ jsxs(gt, {
          as: "div",
          className: "relative z-10",
          onClose: setOpenPanel,
          children: [/* @__PURE__ */ jsx("div", {
            className: "fixed inset-0"
          }), /* @__PURE__ */ jsx("div", {
            className: "fixed inset-0 overflow-hidden",
            children: /* @__PURE__ */ jsx("div", {
              className: "absolute inset-0 overflow-hidden",
              children: /* @__PURE__ */ jsx("div", {
                className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                children: /* @__PURE__ */ jsx(Ke.Child, {
                  as: react.exports.Fragment,
                  unmount: false,
                  enter: "transform transition ease-in-out duration-500 sm:duration-700",
                  enterFrom: "translate-x-full",
                  enterTo: "translate-x-0",
                  leave: "transform transition ease-in-out duration-500 sm:duration-700",
                  leaveFrom: "translate-x-0",
                  leaveTo: "translate-x-full",
                  children: /* @__PURE__ */ jsx(gt.Panel, {
                    className: "pointer-events-auto w-screen max-w-md",
                    children: /* @__PURE__ */ jsxs("div", {
                      className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-gray-500 shadow-xl",
                      children: [/* @__PURE__ */ jsxs("div", {
                        className: "flex min-h-0 flex-1 flex-col overflow-y-scroll py-6",
                        children: [/* @__PURE__ */ jsxs("div", {
                          className: "bg-gray-200 mt-6 py-6 px-4 sm:px-6",
                          children: [/* @__PURE__ */ jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [/* @__PURE__ */ jsx(gt.Title, {
                              className: "text-base font-bold text-black",
                              children: "Service details"
                            }), /* @__PURE__ */ jsx("div", {
                              className: "ml-3 flex h-7 items-center",
                              children: /* @__PURE__ */ jsxs("button", {
                                type: "button",
                                className: "rounded-md bg-gray-200 text-black hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-900",
                                onClick: () => handleClosePanel(),
                                children: [/* @__PURE__ */ jsx("span", {
                                  className: "sr-only",
                                  children: "Close panel"
                                }), /* @__PURE__ */ jsx(XMarkIcon$1, {
                                  className: "h-6 w-6",
                                  "aria-hidden": "true"
                                })]
                              })
                            })]
                          }), /* @__PURE__ */ jsx("div", {
                            className: "mt-1",
                            children: /* @__PURE__ */ jsxs("p", {
                              className: "text-xs text-black",
                              children: ["Name: ", nodeId]
                            })
                          }), /* @__PURE__ */ jsx("div", {
                            className: "mt-1",
                            children: /* @__PURE__ */ jsxs("p", {
                              className: "text-xs text-gray-700",
                              children: ["OS: ", nodeOs]
                            })
                          }), /* @__PURE__ */ jsx("div", {
                            className: "mt-1",
                            children: /* @__PURE__ */ jsxs("p", {
                              className: "text-xs text-gray-700",
                              children: ["Type: ", nodeLabel]
                            })
                          }), /* @__PURE__ */ jsxs("div", {
                            className: "inline-flex w-12 pt-0.5 px-1.5 mt-2 mb-1 justify-center text-xs font-semibold text-white uppercase rounded-full bg-sky-500",
                            children: [/* @__PURE__ */ jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 28 28",
                              strokeWidth: "2",
                              stroke: "currentColor",
                              "aria-hidden": "true",
                              className: "-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4",
                              children: /* @__PURE__ */ jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                              })
                            }), PLATFORM.environment]
                          })]
                        }), /* @__PURE__ */ jsx("div", {
                          className: "relative flex-1 px-4 sm:px-6",
                          children: /* @__PURE__ */ jsx(DynamicComponent, {
                            collectorHost,
                            targetHost
                          })
                        })]
                      }), /* @__PURE__ */ jsx("div", {
                        className: "flex flex-shrink-0 justify-end px-4 py-4",
                        children: /* @__PURE__ */ jsx("button", {
                          type: "button",
                          className: "rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                          onClick: () => setOpenPanel(false),
                          children: "Expand"
                        })
                      })]
                    })
                  })
                })
              })
            })
          })]
        })
      });
    }
    function DashboardCardTopology() {
      const [graphData, setGraphData] = react.exports.useState({
        nodes: [],
        links: []
      });
      const [initialCentre, setInitialCentre] = react.exports.useState(true);
      const forceRef = react.exports.useRef();
      const [openPanel, setOpenPanel] = react.exports.useState(false);
      const [selectedNodeId, setSelectedNodeId2] = react.exports.useState(false);
      const [selectedNodeLabel, setSelectedNodeLabel2] = react.exports.useState(false);
      const [selectedNodeOs, setSelectedNodeOs2] = react.exports.useState(false);
      const [collectorHost, setCollectorHost2] = react.exports.useState(false);
      const [targetHost, setTargetHost2] = react.exports.useState(false);
      const handleOpenPanel = (id2, label, os, collectorhost, targethost) => {
        NETDATA.pause(function() {
          setSelectedNodeId2(id2);
          setSelectedNodeLabel2(label);
          setSelectedNodeOs2(os.toUpperCase());
          setCollectorHost2(collectorhost);
          setTargetHost2(targethost);
        });
      };
      const handleClosePanel = () => {
        NETDATA.pause(function() {
          setSelectedNodeId2(false);
          setSelectedNodeLabel2(false);
          setSelectedNodeOs2(false);
          setCollectorHost2(false);
          setTargetHost2(false);
        });
      };
      react.exports.useEffect(() => {
        console.log("DashboardCardTopology os=" + selectedNodeOs);
        NETDATA.unpause();
        if (selectedNodeOs === false) {
          setOpenPanel(false);
        } else {
          setOpenPanel(true);
        }
      }, [selectedNodeId, selectedNodeLabel, selectedNodeOs, collectorHost, targetHost]);
      react.exports.useEffect(() => {
        fetch("/datasets/topology.json").then((res) => res.json()).then((data) => {
          const nodes = data.nodes;
          const links = data.links;
          setGraphData({
            nodes,
            links
          });
        });
      }, []);
      react.exports.useEffect(() => {
        forceRef.current.d3Force("charge").strength(-250);
        forceRef.current.d3Force("link").distance(100);
        forceRef.current.d3Force("charge").distanceMax(100);
      }, []);
      const paintNode = react.exports.useCallback((node, ctx, globalScale) => {
        const nodeid = node.id;
        const fontSize = 10 / globalScale;
        ctx.font = `bold ${fontSize}px Sans-Serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.scale * 3, 0, 2 * Math.PI, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = node.colour;
        ctx.stroke();
        ctx.fillStyle = "gray";
        ctx.fillText(nodeid, node.x, node.y);
      }, []);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex-initial bg-white",
        children: [/* @__PURE__ */ jsx("div", {
          className: "place-content-center",
          children: /* @__PURE__ */ jsx(ForceGraph2D, {
            graphData,
            backgroundColor: "white",
            width: window.innerWidth * 0.6,
            height: window.innerHeight * 0.7,
            ref: forceRef,
            cooldownTicks: 50,
            nodeRelSize: 3,
            linkDirectionalArrowLength: 2,
            linkDirectionalArrowRelPos: 0.5,
            linkCurvature: 0.25,
            linkColor: "gray",
            linkWidth: 1,
            onEngineStop: () => {
              if (initialCentre) {
                forceRef.current.zoomToFit(400, 50);
              }
              setInitialCentre(false);
            },
            nodeCanvasObjectMode: () => "after",
            nodeCanvasObject: paintNode,
            nodeLabel: (node) => `${node.label}`,
            nodeOs: (node) => `${node.os}`,
            onNodeClick: (node) => handleOpenPanel(`${node.id}`, `${node.label}`, `${node.os}`, `${node.collectorhost}`, `${node.targethost}`),
            onNodeDragEnd: (node) => {
              node.fx = node.x;
              node.fy = node.y;
              node.fz = node.z;
            }
          })
        }), /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx(SlidingPanel, {
            openPanel,
            setOpenPanel,
            close: handleClosePanel,
            nodeId: selectedNodeId,
            nodeLabel: selectedNodeLabel,
            nodeOs: selectedNodeOs,
            collectorHost,
            targetHost
          })
        })]
      });
    }
    function Topology() {
      const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-screen overflow-hidden",
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebarOpen,
          setSidebarOpen
        }), /* @__PURE__ */ jsxs("div", {
          className: "relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto",
          children: [/* @__PURE__ */ jsx(Header, {
            sidebarOpen,
            setSidebarOpen
          }), /* @__PURE__ */ jsx("main", {
            className: "min-w-full min-h-full",
            children: /* @__PURE__ */ jsxs("div", {
              className: "min-w-full min-h-full sm:px-2 sm:py-2 lg:px-4 lg:py-4",
              children: [/* @__PURE__ */ jsx("div", {
                className: "mb-2 text-2xl font-bold text-gray-900",
                children: "Infrastructure"
              }), /* @__PURE__ */ jsx("div", {
                className: "mb-3 text-2xl font-light text-gray-500",
                children: "Service map"
              }), /* @__PURE__ */ jsx("div", {
                className: "min-w-full min-h-full px-4 py-8 mx-auto sm:px-6 lg:px-8",
                children: /* @__PURE__ */ jsx(DashboardCardTopology, {})
              })]
            })
          })]
        })]
      });
    }
    function App() {
      const location = useLocation();
      react.exports.useEffect(() => {
        const onPageUnload = () => {
          NETDATA.pause();
        };
        window.addEventListener("beforeunload", onPageUnload);
        return () => {
          window.removeEventListener("beforeunload", onPageUnload);
        };
      }, []);
      react.exports.useEffect(() => {
        const onPageLoad = () => {
          NETDATA.start();
        };
        window.addEventListener("load", onPageLoad);
        window.addEventListener("load", onPageLoad);
        return () => {
          window.removeEventListener("load", onPageLoad);
        };
      }, []);
      react.exports.useEffect(() => {
        document.querySelector("html").style.scrollBehavior = "auto";
        window.scroll({
          top: 0
        });
        document.querySelector("html").style.scrollBehavior = "";
      }, [location.pathname]);
      return /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsxs(Routes, {
          children: [/* @__PURE__ */ jsx(Route, {
            exact: true,
            path: "/",
            element: /* @__PURE__ */ jsx(Topology, {})
          }), /* @__PURE__ */ jsx(Route, {
            exact: true,
            path: "/platform/example",
            element: /* @__PURE__ */ jsx(Dashboard, {})
          }), /* @__PURE__ */ jsx(Route, {
            path: "/platform/ibmi",
            element: /* @__PURE__ */ jsx(ServerIbmi, {})
          }), /* @__PURE__ */ jsx(Route, {
            path: "/platform/serverlinux",
            element: /* @__PURE__ */ jsx(ServerLinux, {})
          }), /* @__PURE__ */ jsx(Route, {
            path: "/platform/serverwindows",
            element: /* @__PURE__ */ jsx(ServerWindows, {})
          }), /* @__PURE__ */ jsx(Route, {
            path: "/platform/serverwindowslarge",
            element: /* @__PURE__ */ jsx(ServerWindowsLarge, {})
          })]
        })
      });
    }
    client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
      children: /* @__PURE__ */ jsx(BrowserRouter, {
        children: /* @__PURE__ */ jsx(App, {})
      })
    }));
  }
});
export default require_index_f4da7346();
