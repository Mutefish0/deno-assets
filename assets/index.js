/*! For license information please see node-web-audio.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["node-web-audio"] = t())
    : (e["node-web-audio"] = t());
})(this, () =>
  (() => {
    var e,
      t = {
        8801: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          var s = n(5616),
            p = (n(8955).toSanitizedSequence, n(4019)),
            d = (p.isFunction, p.kEnumerableProperty),
            y = n(4407).throwSanitizedError,
            h = n(9439),
            b = h.kNapiObj,
            v = (h.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = (function (n) {
              function a(n, i) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, a),
                  arguments.length < 1)
                )
                  throw new TypeError(
                    "Failed to construct 'AnalyserNode': 1 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.BaseAudioContext))
                  throw new TypeError(
                    "Failed to construct 'AnalyserNode': argument 1 is not of type BaseAudioContext"
                  );
                var c,
                  l = {};
                if (i && "object" !== o(i))
                  throw new TypeError(
                    "Failed to construct 'AnalyserNode': argument 2 is not of type 'AnalyserOptions'"
                  );
                i && void 0 !== i.fftSize
                  ? (l.fftSize = s["unsigned long"](i.fftSize, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'AnalyserNode': Failed to read the 'fftSize' property from AnalyserOptions: The provided value (".concat(
                          i.fftSize,
                          "})"
                        ),
                    }))
                  : (l.fftSize = 2048),
                  i && void 0 !== i.maxDecibels
                    ? (l.maxDecibels = s.double(i.maxDecibels, {
                        context:
                          "Failed to construct 'AnalyserNode': Failed to read the 'maxDecibels' property from AnalyserOptions: The provided value (".concat(
                            i.maxDecibels,
                            "})"
                          ),
                      }))
                    : (l.maxDecibels = -30),
                  i && void 0 !== i.minDecibels
                    ? (l.minDecibels = s.double(i.minDecibels, {
                        context:
                          "Failed to construct 'AnalyserNode': Failed to read the 'minDecibels' property from AnalyserOptions: The provided value (".concat(
                            i.minDecibels,
                            "})"
                          ),
                      }))
                    : (l.minDecibels = -100),
                  i && void 0 !== i.smoothingTimeConstant
                    ? (l.smoothingTimeConstant = s.double(
                        i.smoothingTimeConstant,
                        {
                          context:
                            "Failed to construct 'AnalyserNode': Failed to read the 'smoothingTimeConstant' property from AnalyserOptions: The provided value (".concat(
                              i.smoothingTimeConstant,
                              "})"
                            ),
                        }
                      ))
                    : (l.smoothingTimeConstant = 0.8),
                  i &&
                    void 0 !== i.channelCount &&
                    (l.channelCount = s["unsigned long"](i.channelCount, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'AnalyserNode': Failed to read the 'channelCount' property from AnalyserOptions: The provided value '".concat(
                          i.channelCount,
                          "'"
                        ),
                    })),
                  i &&
                    void 0 !== i.channelCountMode &&
                    (l.channelCountMode = s.DOMString(i.channelCountMode, {
                      context:
                        "Failed to construct 'AnalyserNode': Failed to read the 'channelCount' property from AnalyserOptions: The provided value '".concat(
                          i.channelCountMode,
                          "'"
                        ),
                    })),
                  i &&
                    void 0 !== i.channelInterpretation &&
                    (l.channelInterpretation = s.DOMString(
                      i.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'AnalyserNode': Failed to read the 'channelInterpretation' property from AnalyserOptions: The provided value '".concat(
                            i.channelInterpretation,
                            "'"
                          ),
                      }
                    ));
                try {
                  c = new t.AnalyserNode(n[b], l);
                } catch (e) {
                  y(e);
                }
                return u(this, a, [n, r({}, b, c)]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(a, n),
                (c = a),
                (l = [
                  {
                    key: "fftSize",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      return this[b].fftSize;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      e = s["unrestricted double"](e, {
                        context:
                          "Failed to set the 'fftSize' property on 'AnalyserNode': Value",
                      });
                      try {
                        this[b].fftSize = e;
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "frequencyBinCount",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      return this[b].frequencyBinCount;
                    },
                  },
                  {
                    key: "minDecibels",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      return this[b].minDecibels;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      e = s.double(e, {
                        context:
                          "Failed to set the 'minDecibels' property on 'AnalyserNode': Value",
                      });
                      try {
                        this[b].minDecibels = e;
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "maxDecibels",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      return this[b].maxDecibels;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      e = s.double(e, {
                        context:
                          "Failed to set the 'maxDecibels' property on 'AnalyserNode': Value",
                      });
                      try {
                        this[b].maxDecibels = e;
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "smoothingTimeConstant",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      return this[b].smoothingTimeConstant;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      e = s.double(e, {
                        context:
                          "Failed to set the 'smoothingTimeConstant' property on 'AnalyserNode': Value",
                      });
                      try {
                        this[b].smoothingTimeConstant = e;
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "getFloatFrequencyData",
                    value: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'getFloatFrequencyData' on 'AnalyserNode': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(e instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'getFloatFrequencyData' on 'AnalyserNode': Parameter 1 is not of type 'Float32Array'"
                        );
                      try {
                        return this[b].getFloatFrequencyData(e);
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "getByteFrequencyData",
                    value: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'getByteFrequencyData' on 'AnalyserNode': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(e instanceof Uint8Array))
                        throw new TypeError(
                          "Failed to execute 'getByteFrequencyData' on 'AnalyserNode': Parameter 1 is not of type 'Uint8Array'"
                        );
                      try {
                        return this[b].getByteFrequencyData(e);
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "getFloatTimeDomainData",
                    value: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'getFloatTimeDomainData' on 'AnalyserNode': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(e instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'getFloatTimeDomainData' on 'AnalyserNode': Parameter 1 is not of type 'Float32Array'"
                        );
                      try {
                        return this[b].getFloatTimeDomainData(e);
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "getByteTimeDomainData",
                    value: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AnalyserNode'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'getByteTimeDomainData' on 'AnalyserNode': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(e instanceof Uint8Array))
                        throw new TypeError(
                          "Failed to execute 'getByteTimeDomainData' on 'AnalyserNode': Parameter 1 is not of type 'Uint8Array'"
                        );
                      try {
                        return this[b].getByteTimeDomainData(e);
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                ]),
                l && i(c.prototype, l),
                Object.defineProperty(c, "prototype", { writable: !1 }),
                c
              );
              var c, l;
            })(v);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r(
                              r(
                                r(
                                  r({}, Symbol.toStringTag, {
                                    __proto__: null,
                                    writable: !1,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: "AnalyserNode",
                                  }),
                                  "fftSize",
                                  d
                                ),
                                "frequencyBinCount",
                                d
                              ),
                              "minDecibels",
                              d
                            ),
                            "maxDecibels",
                            d
                          ),
                          "smoothingTimeConstant",
                          d
                        ),
                        "getFloatFrequencyData",
                        d
                      ),
                      "getByteFrequencyData",
                      d
                    ),
                    "getFloatTimeDomainData",
                    d
                  ),
                  "getByteTimeDomainData",
                  d
                )
              ),
              n
            );
          };
        },
        6258: (e, t, n) => {
          function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function o(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? r(Object(n), !0).forEach(function (t) {
                    i(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : r(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          }
          function i(e, t, n) {
            return (
              (t = c(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function a(e) {
            return (
              (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              a(e)
            );
          }
          function u(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, c(r.key), r);
            }
          }
          function c(e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != a(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == a(t) ? t : t + "";
          }
          var l = n(5616),
            f = n(4407).throwSanitizedError,
            s = n(4019),
            p = s.kEnumerableProperty,
            d = s.kHiddenProperty,
            y = n(9439).kNapiObj;
          e.exports = function (e, t) {
            var n = (function () {
              function e(n) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  arguments.length < 1)
                )
                  throw new TypeError(
                    "Failed to construct 'AudioBuffer': 1 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if ("object" !== a(n))
                  throw new TypeError(
                    "Failed to construct 'AudioBuffer': argument 1 is not of type 'AudioBufferOptions'"
                  );
                if (y in n)
                  Object.defineProperty(this, y, o({ value: n[y] }, d));
                else {
                  var r,
                    i = {};
                  if (
                    (void 0 !== n.numberOfChannels
                      ? (i.numberOfChannels = l["unsigned long"](
                          n.numberOfChannels,
                          {
                            enforceRange: !0,
                            context:
                              "Failed to construct 'AudioBuffer': Failed to read the 'numberOfChannels' property from AudioBufferOptions: numberOfCHannels",
                          }
                        ))
                      : (i.numberOfChannels = 1),
                    void 0 === n.length)
                  )
                    throw new TypeError(
                      "Failed to construct 'AudioBuffer': Failed to read the 'numberOfChannels' property from AudioBufferOptions: required member is undefined"
                    );
                  if (
                    ((i.length = l["unsigned long"](n.length, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'AudioBuffer': Failed to read the 'length' property from AudioBufferOptions: length",
                    })),
                    void 0 === n.sampleRate)
                  )
                    throw new TypeError(
                      "Failed to construct 'AudioBuffer': Failed to read the 'numberOfChannels' property from AudioBufferOptions: required member is undefined"
                    );
                  i.sampleRate = l.float(n.sampleRate, {
                    context:
                      "Failed to construct 'AudioBuffer': Failed to read the 'sampleRate' property from AudioBufferOptions: sampleRate",
                  });
                  try {
                    r = new t.AudioBuffer(i);
                  } catch (e) {
                    f(e);
                  }
                  Object.defineProperty(this, y, o({ value: r }, d));
                }
              }
              return (
                (n = e),
                (r = [
                  {
                    key: "sampleRate",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      return this[y].sampleRate;
                    },
                  },
                  {
                    key: "duration",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      return this[y].duration;
                    },
                  },
                  {
                    key: "length",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      return this[y].length;
                    },
                  },
                  {
                    key: "numberOfChannels",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      return this[y].numberOfChannels;
                    },
                  },
                  {
                    key: "copyFromChannel",
                    value: function (t, n) {
                      var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0;
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      if (arguments.length < 2)
                        throw new TypeError(
                          "Failed to execute 'copyFromChannel' on 'AudioBuffer': 2 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(t instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'copyFromChannel' on 'AudioBuffer': parameter 1 is not of type 'Float32Array'"
                        );
                      if (n < 0)
                        throw new DOMException(
                          "Failed to execute 'copyFromChannel' on 'AudioBuffer': channelNumber must equal or greater than 0",
                          "IndexSizeError"
                        );
                      (n = l["unsigned long"](n, {
                        context:
                          "Failed to execute 'copyFromChannel' on 'AudioBuffer': channelNumber",
                      })),
                        (r = l["unsigned long"](r, {
                          context:
                            "Failed to execute 'copyFromChannel' on 'AudioBuffer': bufferOffset",
                        }));
                      try {
                        this[y].copyFromChannel(t, n, r);
                      } catch (e) {
                        f(e);
                      }
                    },
                  },
                  {
                    key: "copyToChannel",
                    value: function (t, n) {
                      var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0;
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      if (arguments.length < 2)
                        throw new TypeError(
                          "Failed to execute 'copyToChannel' on 'AudioBuffer': 2 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(t instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'copyToChannel' on 'AudioBuffer': source is not of type 'Float32Array'"
                        );
                      if (n < 0)
                        throw new DOMException(
                          "Failed to execute 'copyToChannel' on 'AudioBuffer': channelNumber must equal or greater than 0",
                          "IndexSizeError"
                        );
                      (n = l["unsigned long"](n, {
                        context:
                          "Failed to execute 'copyToChannel' on 'AudioBuffer': channelNumber",
                      })),
                        (r = l["unsigned long"](r, {
                          context:
                            "Failed to execute 'copyToChannel' on 'AudioBuffer': bufferOffset",
                        }));
                      try {
                        this[y].copyToChannel(t, n, r);
                      } catch (e) {
                        f(e);
                      }
                    },
                  },
                  {
                    key: "getChannelData",
                    value: function (t) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioBuffer'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'getChannelData' on 'AudioBuffer': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (t < 0)
                        throw new DOMException(
                          "Failed to execute 'getChannelData' on 'AudioBuffer': channel must equal or greater than 0",
                          "IndexSizeError"
                        );
                      t = l["unsigned long"](t, {
                        context:
                          "Failed to execute 'getChannelData' on 'AudioBuffer': channel",
                      });
                      try {
                        return this[y].getChannelData(t);
                      } catch (e) {
                        f(e);
                      }
                    },
                  },
                ]),
                r && u(n.prototype, r),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, r;
            })();
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                i(
                  i(
                    i(
                      i(
                        i(
                          i(
                            i(
                              i({}, Symbol.toStringTag, {
                                __proto__: null,
                                writable: !1,
                                enumerable: !1,
                                configurable: !0,
                                value: "AudioBuffer",
                              }),
                              "sampleRate",
                              p
                            ),
                            "duration",
                            p
                          ),
                          "length",
                          p
                        ),
                        "numberOfChannels",
                        p
                      ),
                      "copyFromChannel",
                      p
                    ),
                    "copyToChannel",
                    p
                  ),
                  "getChannelData",
                  p
                )
              ),
              n
            );
          };
        },
        2455: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function p(e, t) {
            return e.get(y(e, t));
          }
          function d(e, t, n) {
            return e.set(y(e, t), n), n;
          }
          function y(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var h = n(5616),
            b = (n(8955).toSanitizedSequence, n(4019)),
            v = (b.isFunction, b.kEnumerableProperty),
            m = n(4407).throwSanitizedError,
            w = n(9439),
            g = w.kNapiObj,
            O = w.kAudioBuffer,
            T = n(7140);
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = new WeakMap(),
              c = (function (c) {
                function l(i, c) {
                  var f;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, l),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'AudioBufferSourceNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'AudioBufferSourceNode': argument 1 is not of type BaseAudioContext"
                    );
                  var p,
                    y = {};
                  if (c && "object" !== o(c))
                    throw new TypeError(
                      "Failed to construct 'AudioBufferSourceNode': argument 2 is not of type 'AudioBufferSourceOptions'"
                    );
                  if (c && void 0 !== c.buffer)
                    if (null !== c.buffer) {
                      if (!(c.buffer instanceof e.AudioBuffer))
                        throw new TypeError(
                          "Failed to construct 'AudioBufferSourceNode': Failed to read the 'buffer' property from AudioBufferSourceOptions: The provided value cannot be converted to 'AudioBuffer'"
                        );
                      y.buffer = c.buffer[g];
                    } else y.buffer = null;
                  else y.buffer = null;
                  c && void 0 !== c.detune
                    ? (y.detune = h.float(c.detune, {
                        context:
                          "Failed to construct 'AudioBufferSourceNode': Failed to read the 'detune' property from AudioBufferSourceOptions: The provided value (".concat(
                            c.detune,
                            "})"
                          ),
                      }))
                    : (y.detune = 0),
                    c && void 0 !== c.loop
                      ? (y.loop = h.boolean(c.loop, {
                          context:
                            "Failed to construct 'AudioBufferSourceNode': Failed to read the 'loop' property from AudioBufferSourceOptions: The provided value (".concat(
                              c.loop,
                              "})"
                            ),
                        }))
                      : (y.loop = !1),
                    c && void 0 !== c.loopEnd
                      ? (y.loopEnd = h.double(c.loopEnd, {
                          context:
                            "Failed to construct 'AudioBufferSourceNode': Failed to read the 'loopEnd' property from AudioBufferSourceOptions: The provided value (".concat(
                              c.loopEnd,
                              "})"
                            ),
                        }))
                      : (y.loopEnd = 0),
                    c && void 0 !== c.loopStart
                      ? (y.loopStart = h.double(c.loopStart, {
                          context:
                            "Failed to construct 'AudioBufferSourceNode': Failed to read the 'loopStart' property from AudioBufferSourceOptions: The provided value (".concat(
                              c.loopStart,
                              "})"
                            ),
                        }))
                      : (y.loopStart = 0),
                    c && void 0 !== c.playbackRate
                      ? (y.playbackRate = h.float(c.playbackRate, {
                          context:
                            "Failed to construct 'AudioBufferSourceNode': Failed to read the 'playbackRate' property from AudioBufferSourceOptions: The provided value (".concat(
                              c.playbackRate,
                              "})"
                            ),
                        }))
                      : (y.playbackRate = 1);
                  try {
                    p = new t.AudioBufferSourceNode(i[g], y);
                  } catch (e) {
                    m(e);
                  }
                  return (
                    s((f = u(this, l, [i, r({}, g, p)])), n, null),
                    s(f, a, null),
                    Object.defineProperty(f, O, {
                      __proto__: null,
                      enumerable: !1,
                      writable: !0,
                      value: null,
                    }),
                    c && void 0 !== c.buffer && (f[O] = c.buffer),
                    d(n, f, new e.AudioParam(r({}, g, f[g].playbackRate))),
                    d(a, f, new e.AudioParam(r({}, g, f[g].detune))),
                    f
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(l, c),
                  (y = l),
                  (b = [
                    {
                      key: "playbackRate",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        return p(n, this);
                      },
                    },
                    {
                      key: "detune",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        return p(a, this);
                      },
                    },
                    {
                      key: "buffer",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        return this[O];
                      },
                      set: function (e) {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        if (null !== e) {
                          if (!(g in e))
                            throw new TypeError(
                              "Failed to set the 'buffer' property on 'AudioBufferSourceNode': Failed to convert value to 'AudioBuffer'"
                            );
                          try {
                            this[g].buffer = e[g];
                          } catch (e) {
                            m(e);
                          }
                          this[O] = e;
                        } else
                          console.warn(
                            "Setting the 'buffer' property on 'AudioBufferSourceNode' to 'null' is not supported yet"
                          );
                      },
                    },
                    {
                      key: "loop",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        return this[g].loop;
                      },
                      set: function (e) {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        e = h.boolean(e, {
                          context:
                            "Failed to set the 'loop' property on 'AudioBufferSourceNode': Value",
                        });
                        try {
                          this[g].loop = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "loopStart",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        return this[g].loopStart;
                      },
                      set: function (e) {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'loopStart' property on 'AudioBufferSourceNode': Value",
                        });
                        try {
                          this[g].loopStart = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "loopEnd",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        return this[g].loopEnd;
                      },
                      set: function (e) {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'loopEnd' property on 'AudioBufferSourceNode': Value",
                        });
                        try {
                          this[g].loopEnd = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "start",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : null,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : null;
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioBufferSourceNode'"
                          );
                        0 !== e &&
                          (e = h.double(e, {
                            context:
                              "Failed to execute 'start' on 'AudioBufferSourceNode': Parameter 1",
                          })),
                          null !== t &&
                            (t = h.double(t, {
                              context:
                                "Failed to execute 'start' on 'AudioBufferSourceNode': Parameter 2",
                            })),
                          null !== n &&
                            (n = h.double(n, {
                              context:
                                "Failed to execute 'start' on 'AudioBufferSourceNode': Parameter 3",
                            }));
                        try {
                          return this[g].start(e, t, n);
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                  ]),
                  b && i(y.prototype, b),
                  Object.defineProperty(y, "prototype", { writable: !1 }),
                  y
                );
                var y, b;
              })(T);
            return (
              Object.defineProperties(c, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                c.prototype,
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r(
                              r({}, Symbol.toStringTag, {
                                __proto__: null,
                                writable: !1,
                                enumerable: !1,
                                configurable: !0,
                                value: "AudioBufferSourceNode",
                              }),
                              "playbackRate",
                              v
                            ),
                            "detune",
                            v
                          ),
                          "buffer",
                          v
                        ),
                        "loop",
                        v
                      ),
                      "loopStart",
                      v
                    ),
                    "loopEnd",
                    v
                  ),
                  "start",
                  v
                )
              ),
              c
            );
          };
        },
        7789: (e, t, n) => {
          function r() {
            "use strict";
            r = function () {
              return t;
            };
            var e,
              t = {},
              n = Object.prototype,
              o = n.hasOwnProperty,
              i =
                Object.defineProperty ||
                function (e, t, n) {
                  e[t] = n.value;
                },
              a = "function" == typeof Symbol ? Symbol : {},
              c = a.iterator || "@@iterator",
              l = a.asyncIterator || "@@asyncIterator",
              f = a.toStringTag || "@@toStringTag";
            function s(e, t, n) {
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              s({}, "");
            } catch (e) {
              s = function (e, t, n) {
                return (e[t] = n);
              };
            }
            function p(e, t, n, r) {
              var o = t && t.prototype instanceof w ? t : w,
                a = Object.create(o.prototype),
                u = new C(r || []);
              return i(a, "_invoke", { value: A(e, n, u) }), a;
            }
            function d(e, t, n) {
              try {
                return { type: "normal", arg: e.call(t, n) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            t.wrap = p;
            var y = "suspendedStart",
              h = "suspendedYield",
              b = "executing",
              v = "completed",
              m = {};
            function w() {}
            function g() {}
            function O() {}
            var T = {};
            s(T, c, function () {
              return this;
            });
            var E = Object.getPrototypeOf,
              P = E && E(E(_([])));
            P && P !== n && o.call(P, c) && (T = P);
            var S = (O.prototype = w.prototype = Object.create(T));
            function x(e) {
              ["next", "throw", "return"].forEach(function (t) {
                s(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function j(e, t) {
              function n(r, i, a, c) {
                var l = d(e[r], e, i);
                if ("throw" !== l.type) {
                  var f = l.arg,
                    s = f.value;
                  return s && "object" == u(s) && o.call(s, "__await")
                    ? t.resolve(s.__await).then(
                        function (e) {
                          n("next", e, a, c);
                        },
                        function (e) {
                          n("throw", e, a, c);
                        }
                      )
                    : t.resolve(s).then(
                        function (e) {
                          (f.value = e), a(f);
                        },
                        function (e) {
                          return n("throw", e, a, c);
                        }
                      );
                }
                c(l.arg);
              }
              var r;
              i(this, "_invoke", {
                value: function (e, o) {
                  function i() {
                    return new t(function (t, r) {
                      n(e, o, t, r);
                    });
                  }
                  return (r = r ? r.then(i, i) : i());
                },
              });
            }
            function A(t, n, r) {
              var o = y;
              return function (i, a) {
                if (o === b) throw Error("Generator is already running");
                if (o === v) {
                  if ("throw" === i) throw a;
                  return { value: e, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                  var u = r.delegate;
                  if (u) {
                    var c = F(u, r);
                    if (c) {
                      if (c === m) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (o === y) throw ((o = v), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  o = b;
                  var l = d(t, n, r);
                  if ("normal" === l.type) {
                    if (((o = r.done ? v : h), l.arg === m)) continue;
                    return { value: l.arg, done: r.done };
                  }
                  "throw" === l.type &&
                    ((o = v), (r.method = "throw"), (r.arg = l.arg));
                }
              };
            }
            function F(t, n) {
              var r = n.method,
                o = t.iterator[r];
              if (o === e)
                return (
                  (n.delegate = null),
                  ("throw" === r &&
                    t.iterator.return &&
                    ((n.method = "return"),
                    (n.arg = e),
                    F(t, n),
                    "throw" === n.method)) ||
                    ("return" !== r &&
                      ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method"
                      )))),
                  m
                );
              var i = d(o, t.iterator, n.arg);
              if ("throw" === i.type)
                return (
                  (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
                );
              var a = i.arg;
              return a
                ? a.done
                  ? ((n[t.resultName] = a.value),
                    (n.next = t.nextLoc),
                    "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                    (n.delegate = null),
                    m)
                  : a
                : ((n.method = "throw"),
                  (n.arg = new TypeError("iterator result is not an object")),
                  (n.delegate = null),
                  m);
            }
            function k(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function I(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function C(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(k, this),
                this.reset(!0);
            }
            function _(t) {
              if (t || "" === t) {
                var n = t[c];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var r = -1,
                    i = function n() {
                      for (; ++r < t.length; )
                        if (o.call(t, r))
                          return (n.value = t[r]), (n.done = !1), n;
                      return (n.value = e), (n.done = !0), n;
                    };
                  return (i.next = i);
                }
              }
              throw new TypeError(u(t) + " is not iterable");
            }
            return (
              (g.prototype = O),
              i(S, "constructor", { value: O, configurable: !0 }),
              i(O, "constructor", { value: g, configurable: !0 }),
              (g.displayName = s(O, f, "GeneratorFunction")),
              (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === g || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (t.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, O)
                    : ((e.__proto__ = O), s(e, f, "GeneratorFunction")),
                  (e.prototype = Object.create(S)),
                  e
                );
              }),
              (t.awrap = function (e) {
                return { __await: e };
              }),
              x(j.prototype),
              s(j.prototype, l, function () {
                return this;
              }),
              (t.AsyncIterator = j),
              (t.async = function (e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(p(e, n, r, o), i);
                return t.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              x(S),
              s(S, f, "Generator"),
              s(S, c, function () {
                return this;
              }),
              s(S, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (e) {
                var t = Object(e),
                  n = [];
                for (var r in t) n.push(r);
                return (
                  n.reverse(),
                  function e() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in t) return (e.value = r), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = _),
              (C.prototype = {
                constructor: C,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(I),
                    !t)
                  )
                    for (var n in this)
                      "t" === n.charAt(0) &&
                        o.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = e);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var n = this;
                  function r(r, o) {
                    return (
                      (u.type = "throw"),
                      (u.arg = t),
                      (n.next = r),
                      o && ((n.method = "next"), (n.arg = e)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      u = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                      var c = o.call(a, "catchLoc"),
                        l = o.call(a, "finallyLoc");
                      if (c && l) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      } else {
                        if (!l)
                          throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      o.call(r, "finallyLoc") &&
                      this.prev < r.finallyLoc
                    ) {
                      var i = r;
                      break;
                    }
                  }
                  i &&
                    ("break" === e || "continue" === e) &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    m
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), I(n), m;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var o = r.arg;
                        I(n);
                      }
                      return o;
                    }
                  }
                  throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                  return (
                    (this.delegate = {
                      iterator: _(t),
                      resultName: n,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = e),
                    m
                  );
                },
              }),
              t
            );
          }
          function o(e, t, n, r, o, i, a) {
            try {
              var u = e[i](a),
                c = u.value;
            } catch (e) {
              return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
          }
          function i(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, i) {
                var a = e.apply(t, n);
                function u(e) {
                  o(a, r, i, u, c, "next", e);
                }
                function c(e) {
                  o(a, r, i, u, c, "throw", e);
                }
                u(void 0);
              });
            };
          }
          function a(e, t, n) {
            return (
              (t = l(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function u(e) {
            return (
              (u =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              u(e)
            );
          }
          function c(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, l(r.key), r);
            }
          }
          function l(e) {
            var t = (function (e, t) {
              if ("object" != u(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != u(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == u(t) ? t : t + "";
          }
          function f(e, t, n) {
            return (
              (t = p(t)),
              (function (e, t) {
                if (t && ("object" == u(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                s()
                  ? Reflect.construct(t, n || [], p(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function s() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (s = function () {
              return !!e;
            })();
          }
          function p(e) {
            return (
              (p = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              p(e)
            );
          }
          function d(e, t) {
            return (
              (d = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              d(e, t)
            );
          }
          function y(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function h(e, t) {
            return e.get(v(e, t));
          }
          function b(e, t, n) {
            return e.set(v(e, t), n), n;
          }
          function v(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var m = n(5616),
            w = n(4407).throwSanitizedError,
            g = n(4019),
            O = g.isFunction,
            T = g.kEnumerableProperty,
            E = n(9439),
            P = E.kNapiObj,
            S = E.kOnStateChange,
            x = E.kOnSinkChange,
            j = E.kWorkletRelease,
            A = n(2873).propagateEvent,
            F = 0;
          e.exports = function (e, t) {
            var n,
              o = new WeakMap(),
              l = new WeakMap(),
              s = new WeakMap(),
              p = (function (n) {
                function p() {
                  var n,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, p),
                    "object" !== u(r))
                  )
                    throw new TypeError(
                      "Failed to construct 'AudioContext': The provided value is not of type 'AudioContextOptions'"
                    );
                  var i,
                    c = {};
                  if (
                    (void 0 !== r.latencyHint
                      ? ["balanced", "interactive", "playback"].includes(
                          r.latencyHint
                        )
                        ? (c.latencyHint = m.DOMString(r.latencyHint))
                        : (c.latencyHint = m.double(r.latencyHint, {
                            context:
                              "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions: The provided value (".concat(
                                r.latencyHint,
                                ")"
                              ),
                          }))
                      : (c.latencyHint = "interactive"),
                    void 0 !== r.sampleRate
                      ? (c.sampleRate = m.float(r.sampleRate, {
                          context:
                            "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions: The provided value (".concat(
                              r.sampleRate,
                              ")"
                            ),
                        }))
                      : (c.sampleRate = null),
                    void 0 !== r.sinkId)
                  )
                    if ("object" === u(r.sinkId)) {
                      if (!("type" in r.sinkId) || "none" !== r.sinkId.type)
                        throw TypeError(
                          "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions: Failed to read the 'type' property from 'AudioSinkOptions': The provided value (".concat(
                            r.sinkId.type,
                            ") is not a valid enum value of type AudioSinkType."
                          )
                        );
                      c.sinkId = "none";
                    } else
                      c.sinkId = m.DOMString(r.sinkId, {
                        context:
                          "Failed to construct 'AudioContext': Failed to read the 'sinkId' property from AudioNodeOptions:  Failed to read the 'type' property from 'AudioSinkOptions': The provided value (".concat(
                            r.sinkId,
                            ")"
                          ),
                      });
                  else c.sinkId = "";
                  try {
                    i = new t.AudioContext(c);
                  } catch (e) {
                    w(e);
                  }
                  y((n = f(this, p, [a({}, P, i)])), o, ""),
                    y(n, l, null),
                    y(n, s, null),
                    void 0 !== r.sinkId && b(o, n, r.sinkId),
                    b(
                      l,
                      n,
                      new e.AudioRenderCapacity(a({}, P, n[P].renderCapacity))
                    ),
                    (n[P][S] = function (e, t) {
                      var n = new Event(t.type);
                      A(this, n);
                    }.bind(n)),
                    (n[P][x] = function (e, t) {
                      var n = new Event(t.type);
                      A(this, n);
                    }.bind(n)),
                    n[P].listen_to_events();
                  var d = F++,
                    h = Symbol("node-web-audio-api:audio-context-".concat(d));
                  Object.defineProperty(process, h, {
                    __proto__: null,
                    enumerable: !1,
                    configurable: !0,
                    value: n,
                  });
                  var v = setInterval(function () {}, 1e4);
                  return (
                    n.addEventListener("statechange", function () {
                      "closed" === n.state &&
                        (delete process[h], clearTimeout(v));
                    }),
                    process.WPT_TEST_RUNNER &&
                      process.WPT_TEST_RUNNER.once("cleanup", function () {
                        return n.close();
                      }),
                    n
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && d(e, t);
                  })(p, n),
                  (v = p),
                  (g = [
                    {
                      key: "baseLatency",
                      get: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        return this[P].baseLatency;
                      },
                    },
                    {
                      key: "outputLatency",
                      get: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        return this[P].outputLatency;
                      },
                    },
                    {
                      key: "sinkId",
                      get: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        return h(o, this);
                      },
                    },
                    {
                      key: "renderCapacity",
                      get: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        return h(l, this);
                      },
                    },
                    {
                      key: "onsinkchange",
                      get: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        return h(s, this);
                      },
                      set: function (e) {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        (O(e) || null === e) && b(s, this, e);
                      },
                    },
                    {
                      key: "getOutputTimestamp",
                      value: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        throw new Error(
                          "AudioContext::getOutputTimestamp is not yet implemented"
                        );
                      },
                    },
                    {
                      key: "resume",
                      value:
                        ((I = i(
                          r().mark(function e() {
                            return r().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this instanceof p) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                                      );
                                    case 2:
                                      return (e.next = 4), this[P].resume();
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function () {
                          return I.apply(this, arguments);
                        }),
                    },
                    {
                      key: "suspend",
                      value:
                        ((k = i(
                          r().mark(function e() {
                            return r().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this instanceof p) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                                      );
                                    case 2:
                                      return (e.next = 4), this[P].suspend();
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function () {
                          return k.apply(this, arguments);
                        }),
                    },
                    {
                      key: "close",
                      value:
                        ((E = i(
                          r().mark(function e() {
                            return r().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this instanceof p) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                                      );
                                    case 2:
                                      return (
                                        (e.next = 4), this.audioWorklet[j]()
                                      );
                                    case 4:
                                      return (e.next = 6), this[P].close();
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function () {
                          return E.apply(this, arguments);
                        }),
                    },
                    {
                      key: "setSinkId",
                      value:
                        ((T = i(
                          r().mark(function e(t) {
                            var n,
                              i = arguments;
                            return r().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this instanceof p) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                                      );
                                    case 2:
                                      if (!(i.length < 1)) {
                                        e.next = 4;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Failed to execute 'setSinkId' on 'AudioContext': 1 argument required, but only ".concat(
                                          i.length,
                                          " present"
                                        )
                                      );
                                    case 4:
                                      if (((n = ""), "object" !== u(t))) {
                                        e.next = 11;
                                        break;
                                      }
                                      if ("type" in t && "none" === t.type) {
                                        e.next = 8;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Failed to execute 'setSinkId' on 'AudioContext': Failed to read the 'type' property from 'AudioSinkOptions': The provided value '".concat(
                                          t.type,
                                          "' is not a valid enum value of type AudioSinkType."
                                        )
                                      );
                                    case 8:
                                      (n = "none"), (e.next = 12);
                                      break;
                                    case 11:
                                      n = m.DOMString(t, {
                                        context:
                                          "Failed to execute 'setSinkId' on 'AudioContext': Failed to read the 'type' property from 'AudioSinkOptions': The provided value '".concat(
                                            t.type,
                                            "'"
                                          ),
                                      });
                                    case 12:
                                      b(o, this, t);
                                      try {
                                        this[P].setSinkId(n);
                                      } catch (e) {
                                        w(e);
                                      }
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        )),
                        function (e) {
                          return T.apply(this, arguments);
                        }),
                    },
                    {
                      key: "createMediaStreamSource",
                      value: function (t) {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        if (arguments.length < 1)
                          throw new TypeError(
                            "Failed to execute 'createMediaStreamSource' on 'AudioContext': 1 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        var n = { mediaStream: t };
                        return new e.MediaStreamAudioSourceNode(this, n);
                      },
                    },
                    {
                      key: "createMediaElementSource",
                      value: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        throw new Error(
                          "AudioContext::createMediaElementSource() is not yet implemented, cf. https://github.com/ircam-ismm/node-web-audio-api/issues/91 for more information"
                        );
                      },
                    },
                    {
                      key: "createMediaStreamTrackSource",
                      value: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        throw new Error(
                          "AudioContext::createMediaStreamTrackSource() is not yet implemented, cf. https://github.com/ircam-ismm/node-web-audio-api/issues/91 for more information"
                        );
                      },
                    },
                    {
                      key: "createMediaStreamDestination",
                      value: function () {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioContext'"
                          );
                        throw new Error(
                          "AudioContext::createMediaStreamDestination() is not yet implemented, cf. https://github.com/ircam-ismm/node-web-audio-api/issues/91 for more information"
                        );
                      },
                    },
                  ]),
                  g && c(v.prototype, g),
                  Object.defineProperty(v, "prototype", { writable: !1 }),
                  v
                );
                var v, g, T, E, k, I;
              })(e.BaseAudioContext);
            return (
              Object.defineProperties(p, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 0,
                },
              }),
              Object.defineProperties(
                p.prototype,
                (a(
                  a(
                    a(
                      a(
                        a(
                          a(
                            a(
                              a(
                                a(
                                  a((n = {}), Symbol.toStringTag, {
                                    __proto__: null,
                                    writable: !1,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: "AudioContext",
                                  }),
                                  "baseLatency",
                                  T
                                ),
                                "outputLatency",
                                T
                              ),
                              "sinkId",
                              T
                            ),
                            "renderCapacity",
                            T
                          ),
                          "onsinkchange",
                          T
                        ),
                        "getOutputTimestamp",
                        T
                      ),
                      "resume",
                      T
                    ),
                    "suspend",
                    T
                  ),
                  "close",
                  T
                ),
                a(
                  a(
                    a(
                      a(a(n, "setSinkId", T), "createMediaStreamSource", T),
                      "createMediaElementSource",
                      T
                    ),
                    "createMediaStreamTrackSource",
                    T
                  ),
                  "createMediaStreamDestination",
                  T
                ))
              ),
              p
            );
          };
        },
        9626: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          var s = n(9439).kNapiObj,
            p = n(4019).kEnumerableProperty,
            d = (function (e) {
              function t(e, n) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  "object" !== o(n) ||
                    !(s in n) ||
                    "AudioDestinationNode" !== n[s]["Symbol.toStringTag"])
                )
                  throw new TypeError("Illegal constructor");
                return u(this, t, [e, r({}, s, n[s])]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(t, e),
                (n = t),
                (a = [
                  {
                    key: "maxChannelCount",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioDestinationNode'"
                        );
                      return this[s].maxChannelCount;
                    },
                  },
                ]) && i(n.prototype, a),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, a;
            })(n(8536));
          Object.defineProperties(d, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              d.prototype,
              r(
                r({}, Symbol.toStringTag, {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: "AudioDestinationNode",
                }),
                "maxChannelCount",
                p
              )
            ),
            (e.exports = d);
        },
        2584: (e, t, n) => {
          var r;
          function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function i(e, t, n) {
            return (
              (t = c(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function a(e) {
            return (
              (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              a(e)
            );
          }
          function u(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, c(r.key), r);
            }
          }
          function c(e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != a(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == a(t) ? t : t + "";
          }
          function l(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function f(e, t) {
            return e.get(p(e, t));
          }
          function s(e, t, n) {
            return e.set(p(e, t), n), n;
          }
          function p(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var d = n(5616),
            y = n(4407).throwSanitizedError,
            h = n(4019),
            b = h.kEnumerableProperty,
            v = h.kHiddenProperty,
            m = n(9439).kNapiObj,
            w = n(5071),
            g = new WeakMap(),
            O = new WeakMap(),
            T = new WeakMap(),
            E = new WeakMap(),
            P = new WeakMap(),
            S = new WeakMap(),
            x = new WeakMap(),
            j = new WeakMap(),
            A = new WeakMap(),
            F = (function () {
              function e(t) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  l(this, g, null),
                  l(this, O, null),
                  l(this, T, null),
                  l(this, E, null),
                  l(this, P, null),
                  l(this, S, null),
                  l(this, x, null),
                  l(this, j, null),
                  l(this, A, null),
                  "object" !== a(t) ||
                    !(m in t) ||
                    "AudioListener" !== t[m]["Symbol.toStringTag"])
                )
                  throw new TypeError("Illegal constructor");
                Object.defineProperty(
                  this,
                  m,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? o(Object(n), !0).forEach(function (t) {
                            i(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : o(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({ value: t[m] }, v)
                ),
                  s(g, this, new w(i({}, m, this[m].positionX))),
                  s(O, this, new w(i({}, m, this[m].positionY))),
                  s(T, this, new w(i({}, m, this[m].positionZ))),
                  s(E, this, new w(i({}, m, this[m].forwardX))),
                  s(P, this, new w(i({}, m, this[m].forwardY))),
                  s(S, this, new w(i({}, m, this[m].forwardZ))),
                  s(x, this, new w(i({}, m, this[m].upX))),
                  s(j, this, new w(i({}, m, this[m].upY))),
                  s(A, this, new w(i({}, m, this[m].upZ)));
              }
              return (
                (t = e),
                (n = [
                  {
                    key: "positionX",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(g, this);
                    },
                  },
                  {
                    key: "positionY",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(O, this);
                    },
                  },
                  {
                    key: "positionZ",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(T, this);
                    },
                  },
                  {
                    key: "forwardX",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(E, this);
                    },
                  },
                  {
                    key: "forwardY",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(P, this);
                    },
                  },
                  {
                    key: "forwardZ",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(S, this);
                    },
                  },
                  {
                    key: "upX",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(x, this);
                    },
                  },
                  {
                    key: "upY",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(j, this);
                    },
                  },
                  {
                    key: "upZ",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      return f(A, this);
                    },
                  },
                  {
                    key: "setPosition",
                    value: function (t, n, r) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      if (arguments.length < 3)
                        throw new TypeError(
                          "Failed to execute 'setPosition' on 'AudioListener': 3 arguments required, but only 0 present."
                        );
                      (t = d.float(t, {
                        context:
                          "Failed to execute 'setPosition' on 'AudioListener': The provided float value",
                      })),
                        (n = d.float(n, {
                          context:
                            "Failed to execute 'setPosition' on 'AudioListener': The provided float value",
                        })),
                        (r = d.float(r, {
                          context:
                            "Failed to execute 'setPosition' on 'AudioListener': The provided float value",
                        }));
                      try {
                        this[m].setPosition(t, n, r);
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "setOrientation",
                    value: function (t, n, r, o, i, a) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioListener'"
                        );
                      if (arguments.length < 6)
                        throw new TypeError(
                          "Failed to execute 'setOrientation' on 'AudioListener': 6 arguments required, but only 0 present."
                        );
                      (t = d.float(t, {
                        context:
                          "Failed to execute 'setOrientation' on 'AudioListener': The provided float value",
                      })),
                        (n = d.float(n, {
                          context:
                            "Failed to execute 'setOrientation' on 'AudioListener': The provided float value",
                        })),
                        (r = d.float(r, {
                          context:
                            "Failed to execute 'setOrientation' on 'AudioListener': The provided float value",
                        })),
                        (o = d.float(o, {
                          context:
                            "Failed to execute 'setOrientation' on 'AudioListener': The provided float value",
                        })),
                        (i = d.float(i, {
                          context:
                            "Failed to execute 'setOrientation' on 'AudioListener': The provided float value",
                        })),
                        (a = d.float(a, {
                          context:
                            "Failed to execute 'setOrientation' on 'AudioListener': The provided float value",
                        }));
                      try {
                        this[m].setOrientation(t, n, r, o, i, a);
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                ]),
                n && u(t.prototype, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
              var t, n;
            })();
          Object.defineProperties(F, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              F.prototype,
              (i(
                i(
                  i(
                    i(
                      i(
                        i(
                          i(
                            i(
                              i(
                                i((r = {}), Symbol.toStringTag, {
                                  __proto__: null,
                                  writable: !1,
                                  enumerable: !1,
                                  configurable: !0,
                                  value: "AudioListener",
                                }),
                                "positionX",
                                b
                              ),
                              "positionY",
                              b
                            ),
                            "positionZ",
                            b
                          ),
                          "forwardX",
                          b
                        ),
                        "forwardY",
                        b
                      ),
                      "forwardZ",
                      b
                    ),
                    "upX",
                    b
                  ),
                  "upY",
                  b
                ),
                "upZ",
                b
              ),
              i(i(r, "setPosition", b), "setOrientation", b))
            ),
            (e.exports = F);
        },
        8536: (e, t, n) => {
          function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function o(e, t, n) {
            return (
              (t = u(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function i(e) {
            return (
              (i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              i(e)
            );
          }
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, u(r.key), r);
            }
          }
          function u(e) {
            var t = (function (e, t) {
              if ("object" != i(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != i(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == i(t) ? t : t + "";
          }
          function c(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (
              (c = function (e) {
                if (
                  null === e ||
                  !(function (e) {
                    try {
                      return (
                        -1 !==
                        Function.toString.call(e).indexOf("[native code]")
                      );
                    } catch (t) {
                      return "function" == typeof e;
                    }
                  })(e)
                )
                  return e;
                if ("function" != typeof e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, n);
                }
                function n() {
                  return (function (e, t, n) {
                    if (l()) return Reflect.construct.apply(null, arguments);
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new (e.bind.apply(e, r))();
                    return n && f(o, n.prototype), o;
                  })(e, arguments, s(this).constructor);
                }
                return (
                  (n.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  f(n, e)
                );
              }),
              c(e)
            );
          }
          function l() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (l = function () {
              return !!e;
            })();
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e) {
            return (
              (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              s(e)
            );
          }
          function p(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var d = n(5616),
            y = n(4407).throwSanitizedError,
            h = n(4019),
            b = h.kEnumerableProperty,
            v = h.kHiddenProperty,
            m = n(9439).kNapiObj,
            w = n(5071),
            g = new WeakMap(),
            O = (function (e) {
              function t(e, n) {
                var a, u, c, f;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  "object" !== i(n) || !(m in n))
                )
                  throw new TypeError("Illegal constructor");
                return (
                  (function (e, t, n) {
                    (function (e, t) {
                      if (t.has(e))
                        throw new TypeError(
                          "Cannot initialize the same private elements twice on an object"
                        );
                    })(e, t),
                      t.set(e, n);
                  })(
                    (a = (function (e, t, n) {
                      return (
                        (t = s(t)),
                        (function (e, t) {
                          if (t && ("object" == i(t) || "function" == typeof t))
                            return t;
                          if (void 0 !== t)
                            throw new TypeError(
                              "Derived constructors may only return object or undefined"
                            );
                          return (function (e) {
                            if (void 0 === e)
                              throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                              );
                            return e;
                          })(e);
                        })(
                          e,
                          l()
                            ? Reflect.construct(t, n || [], s(e).constructor)
                            : t.apply(e, n)
                        )
                      );
                    })(this, t, [n[m]])),
                    g,
                    null
                  ),
                  (c = a),
                  (f = e),
                  (u = g).set(p(u, c), f),
                  Object.defineProperty(
                    a,
                    m,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? r(Object(n), !0).forEach(function (t) {
                              o(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : r(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    })({ value: n[m] }, v)
                  ),
                  a
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(t, e),
                (n = t),
                (u = [
                  {
                    key: "context",
                    get: function () {
                      return (e = g).get(p(e, this));
                      var e;
                    },
                  },
                  {
                    key: "numberOfInputs",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      return this[m].numberOfInputs;
                    },
                  },
                  {
                    key: "numberOfOutputs",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      return this[m].numberOfOutputs;
                    },
                  },
                  {
                    key: "channelCount",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      return this[m].channelCount;
                    },
                    set: function (e) {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      e = d["unsigned long"](e, {
                        context:
                          "Failed to set the 'channelCount' property on 'AudioNode': Value",
                      });
                      try {
                        this[m].channelCount = e;
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                  {
                    key: "channelCountMode",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      return this[m].channelCountMode;
                    },
                    set: function (e) {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      if (["max", "clamped-max", "explicit"].includes(e))
                        try {
                          this[m].channelCountMode = e;
                        } catch (e) {
                          y(e);
                        }
                      else
                        console.warn(
                          "Failed to set the 'channelCountMode' property on 'AudioNode': Value '".concat(
                            e,
                            "' is not a valid 'ChannelCountMode' enum value"
                          )
                        );
                    },
                  },
                  {
                    key: "channelInterpretation",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      return this[m].channelInterpretation;
                    },
                    set: function (e) {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      if (["speakers", "discrete"].includes(e))
                        try {
                          this[m].channelInterpretation = e;
                        } catch (e) {
                          y(e);
                        }
                      else
                        console.warn(
                          "Failed to set the 'channelInterpretation' property on 'AudioNode': Value '".concat(
                            e,
                            "' is not a valid 'ChannelInterpretation' enum value"
                          )
                        );
                    },
                  },
                  {
                    key: "connect",
                    value: function () {
                      for (
                        var e = arguments.length, n = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'connect' on 'AudioNode': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      var o, i, a;
                      if (n[0] instanceof t)
                        (o = n[0][m]),
                          (i =
                            void 0 !== n[1]
                              ? d["unsigned long"](n[1], {
                                  enforceRange: !0,
                                  context:
                                    "Failed to execute 'connect' on 'AudioNode':",
                                })
                              : 0),
                          (a =
                            void 0 !== n[2]
                              ? d["unsigned long"](n[2], {
                                  enforceRange: !0,
                                  context:
                                    "Failed to execute 'connect' on 'AudioNode':",
                                })
                              : 0);
                      else {
                        if (!(n[0] instanceof w))
                          throw new TypeError(
                            "Failed to execute 'connect' on 'AudioNode': Overload resolution failed"
                          );
                        if (arguments.length > 2)
                          throw new TypeError(
                            "Failed to execute 'connect' on 'AudioNode': parameter 1 is not of type 'AudioNode'"
                          );
                        (o = n[0][m]),
                          (i =
                            void 0 !== n[1]
                              ? d["unsigned long"](n[1], {
                                  enforceRange: !0,
                                  context:
                                    "Failed to execute 'connect' on 'AudioNode':",
                                })
                              : 0),
                          (a = 0);
                      }
                      try {
                        this[m].connect(o, i, a);
                      } catch (e) {
                        y(e);
                      }
                      return n[0];
                    },
                  },
                  {
                    key: "disconnect",
                    value: function () {
                      for (
                        var e = arguments.length, n = new Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioNode'"
                        );
                      if (arguments.length > 2) {
                        if (!(n[0] instanceof t))
                          throw new TypeError(
                            "Failed to execute 'disconnect' on 'AudioNode': : Overload resolution failed"
                          );
                        var o = n[0][m],
                          i = d["unsigned long"](n[1], {
                            enforceRange: !0,
                            context:
                              "Failed to execute 'disconnect' on 'AudioNode':",
                          }),
                          a = d["unsigned long"](n[2], {
                            enforceRange: !0,
                            context:
                              "Failed to execute 'disconnect' on 'AudioNode':",
                          });
                        try {
                          return this[m].disconnect(o, i, a);
                        } catch (e) {
                          y(e);
                        }
                      } else if (2 === arguments.length) {
                        if (!(n[0] instanceof t || n[0] instanceof w))
                          throw new TypeError(
                            "Failed to execute 'disconnect' on 'AudioNode': : Overload resolution failed"
                          );
                        var u = n[0][m],
                          c = d["unsigned long"](n[1], {
                            enforceRange: !0,
                            context:
                              "Failed to execute 'disconnect' on 'AudioNode':",
                          });
                        try {
                          return this[m].disconnect(u, c);
                        } catch (e) {
                          y(e);
                        }
                      } else if (1 === arguments.length)
                        if (n[0] instanceof t || n[0] instanceof w) {
                          var l = n[0][m];
                          try {
                            return this[m].disconnect(l);
                          } catch (e) {
                            y(e);
                          }
                        } else if (Number.isFinite(n[0])) {
                          var f = d["unsigned long"](n[0], {
                            enforceRange: !0,
                            context:
                              "Failed to execute 'disconnect' on 'AudioNode':",
                          });
                          try {
                            return this[m].disconnect(f);
                          } catch (e) {
                            y(e);
                          }
                        }
                      try {
                        this[m].disconnect();
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                ]),
                u && a(n.prototype, u),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, u;
            })(c(EventTarget));
          Object.defineProperties(O, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              O.prototype,
              o(
                o(
                  o(
                    o(
                      o(
                        o(
                          o(
                            o(
                              o({}, Symbol.toStringTag, {
                                __proto__: null,
                                writable: !1,
                                enumerable: !1,
                                configurable: !0,
                                value: "AudioNode",
                              }),
                              "context",
                              b
                            ),
                            "numberOfInputs",
                            b
                          ),
                          "numberOfOutputs",
                          b
                        ),
                        "channelCount",
                        b
                      ),
                      "channelCountMode",
                      b
                    ),
                    "channelInterpretation",
                    b
                  ),
                  "connect",
                  b
                ),
                "disconnect",
                b
              )
            ),
            (e.exports = O);
        },
        5071: (e, t, n) => {
          var r;
          function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function i(e, t, n) {
            return (
              (t = c(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function a(e) {
            return (
              (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              a(e)
            );
          }
          function u(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, c(r.key), r);
            }
          }
          function c(e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != a(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == a(t) ? t : t + "";
          }
          var l = n(5616),
            f = n(8955).toSanitizedSequence,
            s = n(4407).throwSanitizedError,
            p = n(4019),
            d = p.kEnumerableProperty,
            y = p.kHiddenProperty,
            h = n(9439).kNapiObj,
            b = (function () {
              function e(t) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                  "object" !== a(t) ||
                    !(h in t) ||
                    "AudioParam" !== t[h]["Symbol.toStringTag"])
                )
                  throw new TypeError("Illegal constructor");
                Object.defineProperty(
                  this,
                  h,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? o(Object(n), !0).forEach(function (t) {
                            i(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : o(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({ value: t[h] }, y)
                );
              }
              return (
                (t = e),
                (n = [
                  {
                    key: "value",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      return this[h].value;
                    },
                    set: function (t) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      t = l.float(t, {
                        context:
                          "Failed to set the 'value' property on 'AudioParam': The provided float value",
                      });
                      try {
                        this[h].value = t;
                      } catch (e) {
                        s(e);
                      }
                    },
                  },
                  {
                    key: "automationRate",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      return this[h].automationRate;
                    },
                    set: function (t) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (["a-rate", "k-rate"].includes(t))
                        try {
                          this[h].automationRate = t;
                        } catch (e) {
                          s(e);
                        }
                      else
                        console.warn(
                          "Failed to set the 'automationRate' property on 'AudioParam': Value '".concat(
                            t,
                            "' is not a valid 'AutomationRate' enum value"
                          )
                        );
                    },
                  },
                  {
                    key: "defaultValue",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      return this[h].defaultValue;
                    },
                  },
                  {
                    key: "minValue",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      return this[h].minValue;
                    },
                  },
                  {
                    key: "maxValue",
                    get: function () {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      return this[h].maxValue;
                    },
                  },
                  {
                    key: "setValueAtTime",
                    value: function (t, n) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 2)
                        throw new TypeError(
                          "Failed to execute 'setValueAtTime' on 'AudioParam': 2 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      (t = l.float(t, {
                        context:
                          "Failed to execute 'setValueAtTime' on 'AudioParam': Parameter 1",
                      })),
                        (n = l.double(n, {
                          context:
                            "Failed to execute 'setValueAtTime' on 'AudioParam': Parameter 2",
                        }));
                      try {
                        this[h].setValueAtTime(t, n);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                  {
                    key: "linearRampToValueAtTime",
                    value: function (t, n) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 2)
                        throw new TypeError(
                          "Failed to execute 'linearRampToValueAtTime' on 'AudioParam': 2 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      (t = l.float(t, {
                        context:
                          "Failed to execute 'linearRampToValueAtTime' on 'AudioParam': Parameter 1",
                      })),
                        (n = l.double(n, {
                          context:
                            "Failed to execute 'linearRampToValueAtTime' on 'AudioParam': Parameter 2",
                        }));
                      try {
                        this[h].linearRampToValueAtTime(t, n);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                  {
                    key: "exponentialRampToValueAtTime",
                    value: function (t, n) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 2)
                        throw new TypeError(
                          "Failed to execute 'exponentialRampToValueAtTime' on 'AudioParam': 2 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      (t = l.float(t, {
                        context:
                          "Failed to execute 'exponentialRampToValueAtTime' on 'AudioParam': Parameter 1",
                      })),
                        (n = l.double(n, {
                          context:
                            "Failed to execute 'exponentialRampToValueAtTime' on 'AudioParam': Parameter 2",
                        }));
                      try {
                        this[h].exponentialRampToValueAtTime(t, n);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                  {
                    key: "setTargetAtTime",
                    value: function (t, n, r) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 3)
                        throw new TypeError(
                          "Failed to execute 'setTargetAtTime' on 'AudioParam': 3 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      (t = l.float(t, {
                        context:
                          "Failed to execute 'setTargetAtTime' on 'AudioParam': Parameter 1",
                      })),
                        (n = l.double(n, {
                          context:
                            "Failed to execute 'setTargetAtTime' on 'AudioParam': Parameter 2",
                        })),
                        (r = l.float(r, {
                          context:
                            "Failed to execute 'setTargetAtTime' on 'AudioParam': Parameter 3",
                        }));
                      try {
                        this[h].setTargetAtTime(t, n, r);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                  {
                    key: "setValueCurveAtTime",
                    value: function (t, n, r) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 3)
                        throw new TypeError(
                          "Failed to execute 'setValueCurveAtTime' on 'AudioParam': 3 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      try {
                        t = f(t, Float32Array);
                      } catch (e) {
                        throw new TypeError(
                          "Failed to execute 'setValueCurveAtTime': Parameter 1 ".concat(
                            e.message
                          )
                        );
                      }
                      (n = l.double(n, {
                        context:
                          "Failed to execute 'setValueCurveAtTime' on 'AudioParam': Parameter 2",
                      })),
                        (r = l.double(r, {
                          context:
                            "Failed to execute 'setValueCurveAtTime' on 'AudioParam': Parameter 3",
                        }));
                      try {
                        this[h].setValueCurveAtTime(t, n, r);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                  {
                    key: "cancelScheduledValues",
                    value: function (t) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'cancelScheduledValues' on 'AudioParam': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      t = l.double(t, {
                        context:
                          "Failed to execute 'cancelScheduledValues' on 'AudioParam': Parameter 1",
                      });
                      try {
                        this[h].cancelScheduledValues(t);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                  {
                    key: "cancelAndHoldAtTime",
                    value: function (t) {
                      if (!(this instanceof e))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioParam'"
                        );
                      if (arguments.length < 1)
                        throw new TypeError(
                          "Failed to execute 'cancelAndHoldAtTime' on 'AudioParam': 1 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      t = l.double(t, {
                        context:
                          "Failed to execute 'cancelAndHoldAtTime' on 'AudioParam': Parameter 1",
                      });
                      try {
                        this[h].cancelAndHoldAtTime(t);
                      } catch (e) {
                        s(e);
                      }
                      return this;
                    },
                  },
                ]),
                n && u(t.prototype, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
              var t, n;
            })();
          Object.defineProperties(b, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              b.prototype,
              (i(
                i(
                  i(
                    i(
                      i(
                        i(
                          i(
                            i(
                              i(
                                i((r = {}), Symbol.toStringTag, {
                                  __proto__: null,
                                  writable: !1,
                                  enumerable: !1,
                                  configurable: !0,
                                  value: "AudioParam",
                                }),
                                "value",
                                d
                              ),
                              "automationRate",
                              d
                            ),
                            "defaultValue",
                            d
                          ),
                          "minValue",
                          d
                        ),
                        "maxValue",
                        d
                      ),
                      "setValueAtTime",
                      d
                    ),
                    "linearRampToValueAtTime",
                    d
                  ),
                  "exponentialRampToValueAtTime",
                  d
                ),
                "setTargetAtTime",
                d
              ),
              i(
                i(i(r, "setValueCurveAtTime", d), "cancelScheduledValues", d),
                "cancelAndHoldAtTime",
                d
              ))
            ),
            (e.exports = b);
        },
        5249: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t) {
            return e.get(c(e, t));
          }
          function c(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var l = n(9439).kPrivateConstructor,
            f = n(4019).kEnumerableProperty,
            s = new WeakMap(),
            p = (function () {
              return (
                (e = function e(t) {
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })(this, s, null),
                    "object" !== o(t) || !0 !== t[l])
                  )
                    throw new TypeError("Illegal constructor");
                  var n, r;
                  (n = s), (r = t.parameters), n.set(c(n, this), r);
                }),
                (t = [
                  {
                    key: "size",
                    get: function () {
                      return u(s, this).size;
                    },
                  },
                  {
                    key: "entries",
                    value: function () {
                      return u(s, this).entries();
                    },
                  },
                  {
                    key: "keys",
                    value: function () {
                      return u(s, this).keys();
                    },
                  },
                  {
                    key: "values",
                    value: function () {
                      return u(s, this).values();
                    },
                  },
                  {
                    key: "forEach",
                    value: function (e) {
                      return u(s, this).forEach(e);
                    },
                  },
                  {
                    key: "get",
                    value: function (e) {
                      return u(s, this).get(e);
                    },
                  },
                  {
                    key: "has",
                    value: function (e) {
                      return u(s, this).has(e);
                    },
                  },
                ]) && i(e.prototype, t),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
              );
              var e, t;
            })();
          Object.defineProperties(p, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              p.prototype,
              r(
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r(
                              r({}, Symbol.toStringTag, {
                                __proto__: null,
                                writable: !1,
                                enumerable: !1,
                                configurable: !0,
                                value: "AudioParamMap",
                              }),
                              Symbol.iterator,
                              {
                                value: p.prototype.entries,
                                enumerable: !1,
                                configurable: !0,
                                writable: !0,
                              }
                            ),
                            "size",
                            {
                              __proto__: null,
                              enumerable: !0,
                              configurable: !0,
                            }
                          ),
                          "entries",
                          f
                        ),
                        "keys",
                        f
                      ),
                      "values",
                      f
                    ),
                    "forEach",
                    f
                  ),
                  "get",
                  f
                ),
                "has",
                f
              )
            ),
            (e.exports = p);
        },
        1568: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (
              (u = function (e) {
                if (
                  null === e ||
                  !(function (e) {
                    try {
                      return (
                        -1 !==
                        Function.toString.call(e).indexOf("[native code]")
                      );
                    } catch (t) {
                      return "function" == typeof e;
                    }
                  })(e)
                )
                  return e;
                if ("function" != typeof e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, n);
                }
                function n() {
                  return (function (e, t, n) {
                    if (c()) return Reflect.construct.apply(null, arguments);
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new (e.bind.apply(e, r))();
                    return n && l(o, n.prototype), o;
                  })(e, arguments, f(this).constructor);
                }
                return (
                  (n.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  l(n, e)
                );
              }),
              u(e)
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e, t) {
            return (
              (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              l(e, t)
            );
          }
          function f(e) {
            return (
              (f = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              f(e)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = n(9439),
            y = d.kNapiObj,
            h = d.kOnUpdate,
            b = n(4019).kEnumerableProperty,
            v = n(2873).propagateEvent,
            m = n(8461).AudioRenderCapacityEvent,
            w = new WeakMap(),
            g = (function (e) {
              function t(e) {
                var n;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  "object" !== o(e) ||
                    !(y in e) ||
                    "AudioRenderCapacity" !== e[y]["Symbol.toStringTag"])
                )
                  throw new TypeError("Illegal constructor");
                return (
                  (function (e, t, n) {
                    (function (e, t) {
                      if (t.has(e))
                        throw new TypeError(
                          "Cannot initialize the same private elements twice on an object"
                        );
                    })(e, t),
                      t.set(e, n);
                  })(
                    (n = (function (e, t, n) {
                      return (
                        (t = f(t)),
                        (function (e, t) {
                          if (t && ("object" == o(t) || "function" == typeof t))
                            return t;
                          if (void 0 !== t)
                            throw new TypeError(
                              "Derived constructors may only return object or undefined"
                            );
                          return (function (e) {
                            if (void 0 === e)
                              throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                              );
                            return e;
                          })(e);
                        })(
                          e,
                          c()
                            ? Reflect.construct(t, n || [], f(e).constructor)
                            : t.apply(e, n)
                        )
                      );
                    })(this, t)),
                    w,
                    null
                  ),
                  (n[y] = e[y]),
                  (n[y][h] = function (e, t) {
                    var n = new m("update", t);
                    v(this, n);
                  }.bind(n)),
                  n[y].listen_to_events(),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && l(e, t);
                })(t, e),
                (n = t),
                (r = [
                  {
                    key: "onupdate",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioRenderCapacity'"
                        );
                      return (e = w).get(s(e, this));
                      var e;
                    },
                    set: function (e) {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioRenderCapacity'"
                        );
                      var n, r;
                      (isFunction(e) || null === e) &&
                        ((r = e), (n = w).set(s(n, this), r));
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioRenderCapacity'"
                        );
                      var n = {};
                      if ("object" === o(e) && null !== e) {
                        if (!("updateInterval" in e))
                          throw new TypeError(
                            "Failed to execute 'start' on 'AudioRenderCapacity': Failed to read the 'updateInterval' property on 'AudioRenderCapacityOptions'"
                          );
                        n.updateInterval = p.double(e.updateInterval, {
                          context:
                            "Failed to execute 'start' on 'AudioRenderCapacity': Failed to read the 'updateInterval' property on 'AudioRenderCapacityOptions': The provided value ()",
                        });
                      } else n.updateInterval = 1;
                      return this[y].start(n);
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioRenderCapacity'"
                        );
                      return this[y].start();
                    },
                  },
                ]),
                r && i(n.prototype, r),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, r;
            })(u(EventTarget));
          Object.defineProperties(g, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              g.prototype,
              r(
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "AudioRenderCapacity",
                    }),
                    "onupdate",
                    b
                  ),
                  "stop",
                  b
                ),
                "stop",
                b
              )
            ),
            (e.exports = g);
        },
        7140: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = n(4407).throwSanitizedError,
            y = n(2873).propagateEvent,
            h = n(4019),
            b = h.isFunction,
            v = h.kEnumerableProperty,
            m = n(9439),
            w = m.kNapiObj,
            g = m.kOnEnded,
            O = n(8536),
            T = new WeakMap(),
            E = (function (e) {
              function t(e, n) {
                var r;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  "object" !== o(n) || !(w in n))
                )
                  throw new TypeError("Illegal constructor");
                return (
                  (function (e, t, n) {
                    (function (e, t) {
                      if (t.has(e))
                        throw new TypeError(
                          "Cannot initialize the same private elements twice on an object"
                        );
                    })(e, t),
                      t.set(e, n);
                  })((r = u(this, t, [e, n])), T, null),
                  (r[w][g] = function (e, t) {
                    var n = new Event(t.type);
                    y(this, n);
                  }.bind(r)),
                  r
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(t, e),
                (n = t),
                (r = [
                  {
                    key: "onended",
                    get: function () {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioScheduledSourceNode'"
                        );
                      return (e = T).get(s(e, this));
                      var e;
                    },
                    set: function (e) {
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioScheduledSourceNode'"
                        );
                      var n, r;
                      (b(e) || null === e) &&
                        ((r = e), (n = T).set(s(n, this), r));
                    },
                  },
                  {
                    key: "start",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioScheduledSourceNode'"
                        );
                      e = p.double(e, {
                        context:
                          "Failed to execute 'start' on 'AudioScheduledSourceNode': Parameter 1",
                      });
                      try {
                        return this[w].start(e);
                      } catch (e) {
                        d(e);
                      }
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'AudioScheduledSourceNode'"
                        );
                      e = p.double(e, {
                        context:
                          "Failed to execute 'stop' on 'AudioScheduledSourceNode': Parameter 1",
                      });
                      try {
                        return this[w].stop(e);
                      } catch (e) {
                        d(e);
                      }
                    },
                  },
                ]),
                r && i(n.prototype, r),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                n
              );
              var n, r;
            })(O);
          Object.defineProperties(E, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              E.prototype,
              r(
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "AudioScheduledSourceNode",
                    }),
                    "onended",
                    v
                  ),
                  "start",
                  v
                ),
                "stop",
                v
              )
            ),
            (e.exports = E);
        },
        6868: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            c(e, t), t.set(e, n);
          }
          function c(e, t) {
            if (t.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          }
          function l(e, t) {
            return e.get(s(e, t));
          }
          function f(e, t, n) {
            return e.set(s(e, t), n), n;
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          function p() {
            "use strict";
            p = function () {
              return t;
            };
            var e,
              t = {},
              n = Object.prototype,
              r = n.hasOwnProperty,
              i =
                Object.defineProperty ||
                function (e, t, n) {
                  e[t] = n.value;
                },
              a = "function" == typeof Symbol ? Symbol : {},
              u = a.iterator || "@@iterator",
              c = a.asyncIterator || "@@asyncIterator",
              l = a.toStringTag || "@@toStringTag";
            function f(e, t, n) {
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              f({}, "");
            } catch (e) {
              f = function (e, t, n) {
                return (e[t] = n);
              };
            }
            function s(e, t, n, r) {
              var o = t && t.prototype instanceof w ? t : w,
                a = Object.create(o.prototype),
                u = new C(r || []);
              return i(a, "_invoke", { value: A(e, n, u) }), a;
            }
            function d(e, t, n) {
              try {
                return { type: "normal", arg: e.call(t, n) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            t.wrap = s;
            var y = "suspendedStart",
              h = "suspendedYield",
              b = "executing",
              v = "completed",
              m = {};
            function w() {}
            function g() {}
            function O() {}
            var T = {};
            f(T, u, function () {
              return this;
            });
            var E = Object.getPrototypeOf,
              P = E && E(E(_([])));
            P && P !== n && r.call(P, u) && (T = P);
            var S = (O.prototype = w.prototype = Object.create(T));
            function x(e) {
              ["next", "throw", "return"].forEach(function (t) {
                f(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function j(e, t) {
              function n(i, a, u, c) {
                var l = d(e[i], e, a);
                if ("throw" !== l.type) {
                  var f = l.arg,
                    s = f.value;
                  return s && "object" == o(s) && r.call(s, "__await")
                    ? t.resolve(s.__await).then(
                        function (e) {
                          n("next", e, u, c);
                        },
                        function (e) {
                          n("throw", e, u, c);
                        }
                      )
                    : t.resolve(s).then(
                        function (e) {
                          (f.value = e), u(f);
                        },
                        function (e) {
                          return n("throw", e, u, c);
                        }
                      );
                }
                c(l.arg);
              }
              var a;
              i(this, "_invoke", {
                value: function (e, r) {
                  function o() {
                    return new t(function (t, o) {
                      n(e, r, t, o);
                    });
                  }
                  return (a = a ? a.then(o, o) : o());
                },
              });
            }
            function A(t, n, r) {
              var o = y;
              return function (i, a) {
                if (o === b) throw Error("Generator is already running");
                if (o === v) {
                  if ("throw" === i) throw a;
                  return { value: e, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                  var u = r.delegate;
                  if (u) {
                    var c = F(u, r);
                    if (c) {
                      if (c === m) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (o === y) throw ((o = v), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  o = b;
                  var l = d(t, n, r);
                  if ("normal" === l.type) {
                    if (((o = r.done ? v : h), l.arg === m)) continue;
                    return { value: l.arg, done: r.done };
                  }
                  "throw" === l.type &&
                    ((o = v), (r.method = "throw"), (r.arg = l.arg));
                }
              };
            }
            function F(t, n) {
              var r = n.method,
                o = t.iterator[r];
              if (o === e)
                return (
                  (n.delegate = null),
                  ("throw" === r &&
                    t.iterator.return &&
                    ((n.method = "return"),
                    (n.arg = e),
                    F(t, n),
                    "throw" === n.method)) ||
                    ("return" !== r &&
                      ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method"
                      )))),
                  m
                );
              var i = d(o, t.iterator, n.arg);
              if ("throw" === i.type)
                return (
                  (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
                );
              var a = i.arg;
              return a
                ? a.done
                  ? ((n[t.resultName] = a.value),
                    (n.next = t.nextLoc),
                    "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                    (n.delegate = null),
                    m)
                  : a
                : ((n.method = "throw"),
                  (n.arg = new TypeError("iterator result is not an object")),
                  (n.delegate = null),
                  m);
            }
            function k(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function I(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function C(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(k, this),
                this.reset(!0);
            }
            function _(t) {
              if (t || "" === t) {
                var n = t[u];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var i = -1,
                    a = function n() {
                      for (; ++i < t.length; )
                        if (r.call(t, i))
                          return (n.value = t[i]), (n.done = !1), n;
                      return (n.value = e), (n.done = !0), n;
                    };
                  return (a.next = a);
                }
              }
              throw new TypeError(o(t) + " is not iterable");
            }
            return (
              (g.prototype = O),
              i(S, "constructor", { value: O, configurable: !0 }),
              i(O, "constructor", { value: g, configurable: !0 }),
              (g.displayName = f(O, l, "GeneratorFunction")),
              (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === g || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (t.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, O)
                    : ((e.__proto__ = O), f(e, l, "GeneratorFunction")),
                  (e.prototype = Object.create(S)),
                  e
                );
              }),
              (t.awrap = function (e) {
                return { __await: e };
              }),
              x(j.prototype),
              f(j.prototype, c, function () {
                return this;
              }),
              (t.AsyncIterator = j),
              (t.async = function (e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(s(e, n, r, o), i);
                return t.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              x(S),
              f(S, l, "Generator"),
              f(S, u, function () {
                return this;
              }),
              f(S, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (e) {
                var t = Object(e),
                  n = [];
                for (var r in t) n.push(r);
                return (
                  n.reverse(),
                  function e() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in t) return (e.value = r), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = _),
              (C.prototype = {
                constructor: C,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(I),
                    !t)
                  )
                    for (var n in this)
                      "t" === n.charAt(0) &&
                        r.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = e);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var n = this;
                  function o(r, o) {
                    return (
                      (u.type = "throw"),
                      (u.arg = t),
                      (n.next = r),
                      o && ((n.method = "next"), (n.arg = e)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      u = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                      var c = r.call(a, "catchLoc"),
                        l = r.call(a, "finallyLoc");
                      if (c && l) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      } else {
                        if (!l)
                          throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (
                      o.tryLoc <= this.prev &&
                      r.call(o, "finallyLoc") &&
                      this.prev < o.finallyLoc
                    ) {
                      var i = o;
                      break;
                    }
                  }
                  i &&
                    ("break" === e || "continue" === e) &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    m
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), I(n), m;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var o = r.arg;
                        I(n);
                      }
                      return o;
                    }
                  }
                  throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                  return (
                    (this.delegate = {
                      iterator: _(t),
                      resultName: n,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = e),
                    m
                  );
                },
              }),
              t
            );
          }
          function d(e, t, n, r, o, i, a) {
            try {
              var u = e[i](a),
                c = u.value;
            } catch (e) {
              return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
          }
          function y(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, o) {
                var i = e.apply(t, n);
                function a(e) {
                  d(i, r, o, a, u, "next", e);
                }
                function u(e) {
                  d(i, r, o, a, u, "throw", e);
                }
                a(void 0);
              });
            };
          }
          var h = n(4573).resolveObjectURL,
            b = n(3024).promises,
            v = n(3024).existsSync,
            m = n(6760),
            w = n(5919),
            g = w.Worker,
            O = w.MessageChannel,
            T = n(9439),
            E = T.kProcessorRegistered,
            P = T.kGetParameterDescriptors,
            S = T.kCreateProcessor,
            x = T.kPrivateConstructor,
            j = T.kWorkletRelease,
            A = T.kCheckProcessorsCreated,
            F = n(4019).kEnumerableProperty,
            k = n(8350),
            I = function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return n
                .e(115)
                .then(n.bind(n, 3115))
                .then(function (e) {
                  return e.default.apply(void 0, t);
                });
            },
            C = (function () {
              var e = y(
                p().mark(function e(t) {
                  var n, r, o, i, a, u, c, l, f, s, d, y, w, g;
                  return p().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!v(t)) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (r = t), (e.prev = 2), (e.next = 5), b.readFile(r)
                            );
                          case 5:
                            (o = e.sent), (n = o.toString()), (e.next = 12);
                            break;
                          case 9:
                            throw (
                              ((e.prev = 9),
                              (e.t0 = e.catch(2)),
                              new Error(
                                "Failed to execute 'addModule' on 'AudioWorklet': ".concat(
                                  e.t0.message
                                )
                              ))
                            );
                          case 12:
                          case 27:
                          case 40:
                          case 57:
                          case 73:
                            e.next = 76;
                            break;
                          case 14:
                            if (!t.startsWith("http")) {
                              e.next = 29;
                              break;
                            }
                            return (e.prev = 15), (e.next = 18), I(t);
                          case 18:
                            return (i = e.sent), (e.next = 21), i.text();
                          case 21:
                            (n = e.sent), (e.next = 27);
                            break;
                          case 24:
                            throw (
                              ((e.prev = 24),
                              (e.t1 = e.catch(15)),
                              new Error(
                                "Failed to execute 'addModule' on 'AudioWorklet': ".concat(
                                  e.t1.message
                                )
                              ))
                            );
                          case 29:
                            if (!t.startsWith("blob:")) {
                              e.next = 42;
                              break;
                            }
                            return (
                              (e.prev = 30), (a = h(t)), (e.next = 34), a.text()
                            );
                          case 34:
                            (n = e.sent), (e.next = 40);
                            break;
                          case 37:
                            throw (
                              ((e.prev = 37),
                              (e.t2 = e.catch(30)),
                              new Error(
                                "Failed to execute 'addModule' on 'AudioWorklet': ".concat(
                                  e.t2.message
                                )
                              ))
                            );
                          case 42:
                            if (!(u = k(2)).startsWith("http")) {
                              e.next = 59;
                              break;
                            }
                            return (
                              t.startsWith("/")
                                ? ((l = new URL(baseUrl).origin), (c = l + t))
                                : ((f = u.substr(0, u.lastIndexOf("/"))),
                                  (c = f + "/" + t)),
                              (e.prev = 45),
                              (e.next = 48),
                              I(c)
                            );
                          case 48:
                            return (s = e.sent), (e.next = 51), s.text();
                          case 51:
                            (n = e.sent), (e.next = 57);
                            break;
                          case 54:
                            throw (
                              ((e.prev = 54),
                              (e.t3 = e.catch(45)),
                              new Error(
                                "Failed to execute 'addModule' on 'AudioWorklet': ".concat(
                                  e.t3.message
                                )
                              ))
                            );
                          case 59:
                            if (
                              ((d = u.substr(0, u.lastIndexOf(m.sep))),
                              (y = d.replace("file://", "")),
                              (w = m.join(y, t)),
                              !v(w))
                            ) {
                              e.next = 75;
                              break;
                            }
                            return (e.prev = 63), (e.next = 66), b.readFile(w);
                          case 66:
                            (g = e.sent), (n = g.toString()), (e.next = 73);
                            break;
                          case 70:
                            throw (
                              ((e.prev = 70),
                              (e.t4 = e.catch(63)),
                              new Error(
                                "Failed to execute 'addModule' on 'AudioWorklet': ".concat(
                                  e.t4.message
                                )
                              ))
                            );
                          case 75:
                            throw new Error(
                              "Failed to execute 'addModule' on 'AudioWorklet': Cannot resolve module ".concat(
                                t
                              )
                            );
                          case 76:
                            return e.abrupt("return", n);
                          case 77:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [2, 9],
                      [15, 24],
                      [30, 37],
                      [45, 54],
                      [63, 70],
                    ]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            _ = new WeakMap(),
            N = new WeakMap(),
            B = new WeakMap(),
            M = new WeakMap(),
            D = new WeakMap(),
            R = new WeakMap(),
            V = new WeakMap(),
            W = new WeakSet(),
            q = (function () {
              return (
                (e = function e(t) {
                  var n;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e),
                    c(this, (n = W)),
                    n.add(this),
                    u(this, _, null),
                    u(this, N, null),
                    u(this, B, null),
                    u(this, M, new Map()),
                    u(this, D, 0),
                    u(this, R, new Map()),
                    u(this, V, new Set()),
                    "object" !== o(t) || !0 !== t[x])
                  )
                    throw new TypeError("Illegal constructor");
                  f(_, this, t.workletId), f(N, this, t.sampleRate);
                }),
                (t = [
                  {
                    key: "port",
                    get: function () {
                      return l(B, this);
                    },
                  },
                  {
                    key: "addModule",
                    value:
                      ((a = y(
                        p().mark(function e(t) {
                          var n,
                            r,
                            o,
                            i,
                            a = this;
                          return p().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), C(t);
                                  case 2:
                                    if (((o = e.sent), l(B, this))) {
                                      e.next = 6;
                                      break;
                                    }
                                    return (
                                      (e.next = 6),
                                      new Promise(function (e) {
                                        var t = m.join(
                                          __dirname,
                                          "AudioWorkletGlobalScope.js"
                                        );
                                        f(
                                          B,
                                          a,
                                          new g(t, {
                                            workerData: {
                                              workletId: l(_, a),
                                              sampleRate: l(N, a),
                                            },
                                          })
                                        ),
                                          l(B, a).on("online", e),
                                          s(W, a, L).call(a);
                                      })
                                    );
                                  case 6:
                                    return (
                                      f(
                                        D,
                                        this,
                                        ((n = l(D, this)), (r = n++), n)
                                      ),
                                      (i = r),
                                      (e.next = 9),
                                      new Promise(function (e, t) {
                                        l(M, a).set(i, {
                                          resolve: e,
                                          reject: t,
                                        }),
                                          l(B, a).postMessage({
                                            cmd: "node-web-audio-api:worklet:add-module",
                                            code: o,
                                            promiseId: i,
                                          });
                                      })
                                    );
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function (e) {
                        return a.apply(this, arguments);
                      }),
                  },
                  {
                    key: A,
                    value:
                      ((r = y(
                        p().mark(function e() {
                          var t = this;
                          return p().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt(
                                    "return",
                                    new Promise(
                                      (function () {
                                        var e = y(
                                          p().mark(function e(n) {
                                            return p().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (0 === l(V, t).size) {
                                                      e.next = 5;
                                                      break;
                                                    }
                                                    return (
                                                      (e.next = 3),
                                                      new Promise(function (e) {
                                                        return setTimeout(e, 0);
                                                      })
                                                    );
                                                  case 3:
                                                    e.next = 0;
                                                    break;
                                                  case 5:
                                                    n();
                                                  case 6:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                  );
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )),
                      function () {
                        return r.apply(this, arguments);
                      }),
                  },
                  {
                    key: E,
                    value: function (e) {
                      return Array.from(l(R, this).keys()).includes(e);
                    },
                  },
                  {
                    key: P,
                    value: function (e) {
                      return l(R, this).get(e);
                    },
                  },
                  {
                    key: S,
                    value: function (e, t, n) {
                      l(V, this).add(n);
                      var r = new O(),
                        o = r.port1,
                        i = r.port2;
                      return (
                        l(B, this).postMessage(
                          {
                            cmd: "node-web-audio-api:worklet:create-processor",
                            name: e,
                            id: n,
                            options: t,
                            port: i,
                          },
                          [i]
                        ),
                        o
                      );
                    },
                  },
                  {
                    key: j,
                    value:
                      ((n = y(
                        p().mark(function e() {
                          var t = this;
                          return p().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!l(B, this)) {
                                      e.next = 3;
                                      break;
                                    }
                                    return (
                                      (e.next = 3),
                                      new Promise(function (e) {
                                        l(B, t).on("exit", e),
                                          l(B, t).postMessage({
                                            cmd: "node-web-audio-api:worklet:exit",
                                          });
                                      })
                                    );
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function () {
                        return n.apply(this, arguments);
                      }),
                  },
                ]),
                t && i(e.prototype, t),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                e
              );
              var e, t, n, r, a;
            })();
          function L() {
            var e = this;
            l(B, this).on("message", function (t) {
              switch (t.cmd) {
                case "node-web-audio-api:worklet:module-added":
                  var n = t.promiseId,
                    r = l(M, e).get(n).resolve;
                  l(M, e).delete(n), r();
                  break;
                case "node-web-audio-api:worklet:add-module-failed":
                  var o = t.promiseId,
                    i = t.ctor,
                    a = t.name,
                    u = t.message,
                    c = l(M, e).get(o).reject;
                  l(M, e).delete(o), c(new globalThis[i](u, a));
                  break;
                case "node-web-audio-api:worlet:processor-registered":
                  var f = t.name,
                    s = t.parameterDescriptors;
                  l(R, e).set(f, s);
                  break;
                case "node-web-audio-api:worklet:processor-created":
                  var p = t.id;
                  l(V, e).delete(p);
              }
            });
          }
          Object.defineProperties(q, {
            length: {
              __proto__: null,
              writable: !1,
              enumerable: !1,
              configurable: !0,
              value: 0,
            },
          }),
            Object.defineProperties(
              q.prototype,
              r(
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "AudioWorklet",
                  }),
                  "addModule",
                  F
                ),
                "port",
                F
              )
            ),
            (e.exports = q);
        },
        5364: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = c(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    u = [],
                    c = !0,
                    l = !1;
                  try {
                    if (((i = (n = n.call(e)).next), 0 === t)) {
                      if (Object(n) !== n) return;
                      c = !1;
                    } else
                      for (
                        ;
                        !(c = (r = i.call(n)).done) &&
                        (u.push(r.value), u.length !== t);
                        c = !0
                      );
                  } catch (e) {
                    (l = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !c &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return u;
                }
              })(e, t) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return i(e, t);
                  var n = {}.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? i(e, t)
                      : void 0
                  );
                }
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function a(e) {
            return (
              (a =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              a(e)
            );
          }
          function u(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, c(r.key), r);
            }
          }
          function c(e) {
            var t = (function (e, t) {
              if ("object" != a(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != a(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == a(t) ? t : t + "";
          }
          function l(e, t, n) {
            return (
              (t = s(t)),
              (function (e, t) {
                if (t && ("object" == a(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                f()
                  ? Reflect.construct(t, n || [], s(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function f() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (f = function () {
              return !!e;
            })();
          }
          function s(e) {
            return (
              (s = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              s(e)
            );
          }
          function p(e, t) {
            return (
              (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              p(e, t)
            );
          }
          function d(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function y(e, t) {
            return e.get(b(e, t));
          }
          function h(e, t, n) {
            return e.set(b(e, t), n), n;
          }
          function b(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var v = n(5616),
            m = n(8955).toSanitizedSequence,
            w = n(4407).throwSanitizedError,
            g = n(9439),
            O = g.kNapiObj,
            T = g.kProcessorRegistered,
            E = g.kGetParameterDescriptors,
            P = g.kPrivateConstructor,
            S = g.kCreateProcessor,
            x = n(4019).kEnumerableProperty,
            j = n(2873).propagateEvent,
            A = n(8461).ErrorEvent,
            F = n(8536),
            k = n(5249);
          e.exports = function (e, t) {
            var n = new WeakMap(),
              i = new WeakMap(),
              c = (function (c) {
                function f(u, c, s) {
                  var p;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, f),
                    arguments.length < 2)
                  )
                    throw new TypeError(
                      "Failed to construct 'AudioWorkletNode': 2 arguments required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(u instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'AudioWorkletNode': argument 1 is not of type BaseAudioContext"
                    );
                  var b = v.DOMString(c, {
                    context:
                      "Failed to construct 'AudioWorkletNode': The given 'AudioWorkletProcessor' name",
                  });
                  if (!u.audioWorklet[T](b))
                    throw new DOMException(
                      "Failed to construct 'AudioWorkletNode': processor '".concat(
                        b,
                        "' is not registered in 'AudioWorklet'"
                      ),
                      "InvalidStateError"
                    );
                  var g = {};
                  if (s && ("object" !== a(s) || null === s))
                    throw new TypeError(
                      "Failed to construct 'AudioWorkletNode': argument 3 is not of type 'AudioWorkletNodeOptions'"
                    );
                  if (
                    (s && void 0 !== s.numberOfInputs
                      ? (g.numberOfInputs = v["unsigned long"](
                          s.numberOfInputs,
                          {
                            enforceRange: !0,
                            context:
                              "Failed to construct 'AudioWorkletNode': Failed to read the 'numberOfInputs' property from AudioWorkletNodeOptions: The provided value (".concat(
                                s.numberOfInputs,
                                "})"
                              ),
                          }
                        ))
                      : (g.numberOfInputs = 1),
                    s && void 0 !== s.numberOfOutputs
                      ? (g.numberOfOutputs = v["unsigned long"](
                          s.numberOfOutputs,
                          {
                            enforceRange: !0,
                            context:
                              "Failed to construct 'AudioWorkletNode': Failed to read the 'numberOfOutputs' property from AudioWorkletNodeOptions: The provided value (".concat(
                                s.numberOfOutputs,
                                "})"
                              ),
                          }
                        ))
                      : (g.numberOfOutputs = 1),
                    s && void 0 !== s.outputChannelCount)
                  ) {
                    try {
                      g.outputChannelCount = m(
                        s.outputChannelCount,
                        Uint32Array
                      );
                    } catch (e) {
                      throw new TypeError(
                        "Failed to construct 'AudioWorkletNode': Failed to read the 'outputChannelCount' property from AudioWorkletNodeOptions: The provided value ".concat(
                          e.message
                        )
                      );
                    }
                    if (
                      (g.outputChannelCount.forEach(function (e, t) {
                        if (e <= 0 || e > 32)
                          throw new DOMException(
                            "Failed to construct 'AudioWorkletNode': Invalid 'outputChannelCount' property from AudioWorkletNodeOptions: Value at index ".concat(
                              t,
                              " in outside supported range [1, 32]"
                            ),
                            "NotSupportedError"
                          );
                      }),
                      g.numberOfOutputs !== g.outputChannelCount.length)
                    )
                      throw new DOMException(
                        "Failed to construct 'AudioWorkletNode': Invalid 'outputChannelCount' property from AudioWorkletNodeOptions: 'outputChannelCount' length ("
                          .concat(
                            g.outputChannelCount.length,
                            ") does not equal 'numberOfOutputs' ("
                          )
                          .concat(g.numberOfOutputs, ")"),
                        "IndexSizeError"
                      );
                  } else
                    1 === g.numberOfInputs && 1 === g.numberOfOutputs
                      ? (g.outputChannelCount = new Uint32Array(0))
                      : ((g.outputChannelCount = new Uint32Array(
                          g.numberOfOutputs
                        )),
                        g.outputChannelCount.fill(1));
                  if (s && void 0 !== s.parameterData) {
                    if (
                      "object" !== a(s.parameterData) ||
                      null === s.parameterData
                    )
                      throw new TypeError(
                        "Failed to construct 'AudioWorkletNode': Invalid 'parameterData' property from AudioWorkletNodeOptions: 'outputChannelCount' length ("
                          .concat(
                            g.outputChannelCount.length,
                            ") does not equal 'numberOfOutputs' ("
                          )
                          .concat(g.numberOfOutputs, ")")
                      );
                    for (var x in ((g.parameterData = {}),
                    Object.entries(s.parameterData))) {
                      var F = o(x, 2),
                        I = F[0],
                        C = F[1],
                        _ = v.DOMString(I, {
                          context:
                            "Failed to construct 'AudioWorkletNode': Invalid 'parameterData' property from AudioWorkletNodeOptions: Invalid key (".concat(
                              I,
                              ")"
                            ),
                        }),
                        N = v.double(C, {
                          context:
                            "Failed to construct 'AudioWorkletNode': Invalid 'parameterData' property from AudioWorkletNodeOptions: Invalid value for key ".concat(
                              _
                            ),
                        });
                      g.parameterData[_] = N;
                    }
                  } else g.parameterData = {};
                  if (s && void 0 !== s.processorOptions) {
                    if (
                      "object" !== a(s.processorOptions) ||
                      null === s.processorOptions
                    )
                      throw new TypeError(
                        "Failed to construct 'AudioWorkletNode': Invalid 'processorOptions' property from AudioWorkletNodeOptions: 'processorOptions' is not an object"
                      );
                    g.processorOptions = Object.assign({}, s.processorOptions);
                  } else g.processorOptions = {};
                  if (
                    s &&
                    void 0 !== s.channelCount &&
                    ((g.channelCount = v["unsigned long"](s.channelCount, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'AudioWorkletNode': Failed to read the 'channelCount' property from AudioWorkletNodeOptions: The provided value '".concat(
                          s.channelCount,
                          "'"
                        ),
                    })),
                    g.channelCount <= 0 || g.channelCount > 32)
                  )
                    throw new DOMException(
                      "Failed to construct 'AudioWorkletNode': Invalid 'channelCount' property: Number of channels: ".concat(
                        g.channelCount,
                        " is outside range [1, 32]"
                      ),
                      "NotSupportedError"
                    );
                  if (s && void 0 !== s.channelCountMode) {
                    if (
                      !["max", "clamped-max", "explicit"].includes(
                        s.channelCountMode
                      )
                    )
                      throw new TypeError(
                        "Failed to construct 'AudioWorkletNode': Failed to read the 'channelCountMode' property from 'AudioNodeOptions': The provided value '".concat(
                          s.channelCountMode,
                          "' is not a valid enum value of type ChannelCountMode"
                        )
                      );
                    g.channelCountMode = v.DOMString(s.channelCountMode, {
                      context:
                        "Failed to construct 'AudioWorkletNode': Failed to read the 'channelCount' property from AudioWorkletNodeOptions: The provided value '".concat(
                          s.channelCountMode,
                          "'"
                        ),
                    });
                  }
                  if (s && void 0 !== s.channelInterpretation) {
                    if (
                      !["speakers", "discrete"].includes(
                        s.channelInterpretation
                      )
                    )
                      throw new TypeError(
                        "Failed to construct 'AudioWorkletNode': Failed to read the 'channelInterpretation' property from 'AudioNodeOptions': The provided value '".concat(
                          s.channelInterpretation,
                          "' is not a valid enum value of type ChannelCountMode"
                        )
                      );
                    g.channelInterpretation = v.DOMString(
                      s.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'AudioWorkletNode': Failed to read the 'channelInterpretation' property from AudioWorkletNodeOptions: The provided value '".concat(
                            s.channelInterpretation,
                            "'"
                          ),
                      }
                    );
                  }
                  var B,
                    M = u.audioWorklet[E](b);
                  try {
                    B = new t.AudioWorkletNode(u[O], b, g, M);
                  } catch (e) {
                    w(e);
                  }
                  d((p = l(this, f, [u, r({}, O, B)])), n, null), d(p, i, {});
                  var D = new Map();
                  for (var R in p[O].parameters) {
                    var V = new e.AudioParam(r({}, O, p[O].parameters[R]));
                    D.set(R, V);
                  }
                  return (
                    h(i, p, new k(r(r({}, P, !0), "parameters", D))),
                    h(n, p, u.audioWorklet[S](b, g, B.id)),
                    y(n, p).on("message", function (e) {
                      switch (e.cmd) {
                        case "node-web-audio-api:worklet:ctor-error":
                          var t = "Failed to construct '"
                              .concat(b, "' AudioWorkletProcessor: ")
                              .concat(e.err.message),
                            n = new A("processorerror", {
                              message: t,
                              error: e.err,
                            });
                          j(p, n);
                          break;
                        case "node-web-audio-api:worklet:process-invalid":
                          var r = "Failed to execute 'process' on '"
                              .concat(b, "' AudioWorkletProcessor: ")
                              .concat(e.err.message),
                            o = new TypeError(r);
                          o.stack = e.err.stack.replace(e.err.message, r);
                          var i = new A("processorerror", {
                            message: r,
                            error: o,
                          });
                          j(p, i);
                          break;
                        case "node-web-audio-api:worklet:process-error":
                          var a = "Failed to execute 'process' on '"
                              .concat(b, "' AudioWorkletProcessor: ")
                              .concat(e.err.message),
                            u = new A("processorerror", {
                              message: a,
                              error: e.err,
                            });
                          j(p, u);
                      }
                    }),
                    p
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && p(e, t);
                  })(f, c),
                  (s = f),
                  (b = [
                    {
                      key: "parameters",
                      get: function () {
                        if (!(this instanceof f))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioWorkletNode'"
                          );
                        return y(i, this);
                      },
                    },
                    {
                      key: "port",
                      get: function () {
                        if (!(this instanceof f))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'AudioWorkletNode'"
                          );
                        return y(n, this);
                      },
                    },
                  ]) && u(s.prototype, b),
                  Object.defineProperty(s, "prototype", { writable: !1 }),
                  s
                );
                var s, b;
              })(F);
            return (
              Object.defineProperties(c, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 2,
                },
              }),
              Object.defineProperties(
                c.prototype,
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "AudioWorkletNode",
                    }),
                    "parameters",
                    x
                  ),
                  "port",
                  x
                )
              ),
              c
            );
          };
        },
        796: (e, t, n) => {
          function r() {
            "use strict";
            r = function () {
              return t;
            };
            var e,
              t = {},
              n = Object.prototype,
              o = n.hasOwnProperty,
              i =
                Object.defineProperty ||
                function (e, t, n) {
                  e[t] = n.value;
                },
              a = "function" == typeof Symbol ? Symbol : {},
              c = a.iterator || "@@iterator",
              l = a.asyncIterator || "@@asyncIterator",
              f = a.toStringTag || "@@toStringTag";
            function s(e, t, n) {
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              s({}, "");
            } catch (e) {
              s = function (e, t, n) {
                return (e[t] = n);
              };
            }
            function p(e, t, n, r) {
              var o = t && t.prototype instanceof w ? t : w,
                a = Object.create(o.prototype),
                u = new C(r || []);
              return i(a, "_invoke", { value: A(e, n, u) }), a;
            }
            function d(e, t, n) {
              try {
                return { type: "normal", arg: e.call(t, n) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            t.wrap = p;
            var y = "suspendedStart",
              h = "suspendedYield",
              b = "executing",
              v = "completed",
              m = {};
            function w() {}
            function g() {}
            function O() {}
            var T = {};
            s(T, c, function () {
              return this;
            });
            var E = Object.getPrototypeOf,
              P = E && E(E(_([])));
            P && P !== n && o.call(P, c) && (T = P);
            var S = (O.prototype = w.prototype = Object.create(T));
            function x(e) {
              ["next", "throw", "return"].forEach(function (t) {
                s(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function j(e, t) {
              function n(r, i, a, c) {
                var l = d(e[r], e, i);
                if ("throw" !== l.type) {
                  var f = l.arg,
                    s = f.value;
                  return s && "object" == u(s) && o.call(s, "__await")
                    ? t.resolve(s.__await).then(
                        function (e) {
                          n("next", e, a, c);
                        },
                        function (e) {
                          n("throw", e, a, c);
                        }
                      )
                    : t.resolve(s).then(
                        function (e) {
                          (f.value = e), a(f);
                        },
                        function (e) {
                          return n("throw", e, a, c);
                        }
                      );
                }
                c(l.arg);
              }
              var r;
              i(this, "_invoke", {
                value: function (e, o) {
                  function i() {
                    return new t(function (t, r) {
                      n(e, o, t, r);
                    });
                  }
                  return (r = r ? r.then(i, i) : i());
                },
              });
            }
            function A(t, n, r) {
              var o = y;
              return function (i, a) {
                if (o === b) throw Error("Generator is already running");
                if (o === v) {
                  if ("throw" === i) throw a;
                  return { value: e, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                  var u = r.delegate;
                  if (u) {
                    var c = F(u, r);
                    if (c) {
                      if (c === m) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (o === y) throw ((o = v), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  o = b;
                  var l = d(t, n, r);
                  if ("normal" === l.type) {
                    if (((o = r.done ? v : h), l.arg === m)) continue;
                    return { value: l.arg, done: r.done };
                  }
                  "throw" === l.type &&
                    ((o = v), (r.method = "throw"), (r.arg = l.arg));
                }
              };
            }
            function F(t, n) {
              var r = n.method,
                o = t.iterator[r];
              if (o === e)
                return (
                  (n.delegate = null),
                  ("throw" === r &&
                    t.iterator.return &&
                    ((n.method = "return"),
                    (n.arg = e),
                    F(t, n),
                    "throw" === n.method)) ||
                    ("return" !== r &&
                      ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method"
                      )))),
                  m
                );
              var i = d(o, t.iterator, n.arg);
              if ("throw" === i.type)
                return (
                  (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
                );
              var a = i.arg;
              return a
                ? a.done
                  ? ((n[t.resultName] = a.value),
                    (n.next = t.nextLoc),
                    "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                    (n.delegate = null),
                    m)
                  : a
                : ((n.method = "throw"),
                  (n.arg = new TypeError("iterator result is not an object")),
                  (n.delegate = null),
                  m);
            }
            function k(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function I(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function C(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(k, this),
                this.reset(!0);
            }
            function _(t) {
              if (t || "" === t) {
                var n = t[c];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var r = -1,
                    i = function n() {
                      for (; ++r < t.length; )
                        if (o.call(t, r))
                          return (n.value = t[r]), (n.done = !1), n;
                      return (n.value = e), (n.done = !0), n;
                    };
                  return (i.next = i);
                }
              }
              throw new TypeError(u(t) + " is not iterable");
            }
            return (
              (g.prototype = O),
              i(S, "constructor", { value: O, configurable: !0 }),
              i(O, "constructor", { value: g, configurable: !0 }),
              (g.displayName = s(O, f, "GeneratorFunction")),
              (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === g || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (t.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, O)
                    : ((e.__proto__ = O), s(e, f, "GeneratorFunction")),
                  (e.prototype = Object.create(S)),
                  e
                );
              }),
              (t.awrap = function (e) {
                return { __await: e };
              }),
              x(j.prototype),
              s(j.prototype, l, function () {
                return this;
              }),
              (t.AsyncIterator = j),
              (t.async = function (e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(p(e, n, r, o), i);
                return t.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              x(S),
              s(S, f, "Generator"),
              s(S, c, function () {
                return this;
              }),
              s(S, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (e) {
                var t = Object(e),
                  n = [];
                for (var r in t) n.push(r);
                return (
                  n.reverse(),
                  function e() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in t) return (e.value = r), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = _),
              (C.prototype = {
                constructor: C,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(I),
                    !t)
                  )
                    for (var n in this)
                      "t" === n.charAt(0) &&
                        o.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = e);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var n = this;
                  function r(r, o) {
                    return (
                      (u.type = "throw"),
                      (u.arg = t),
                      (n.next = r),
                      o && ((n.method = "next"), (n.arg = e)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      u = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                      var c = o.call(a, "catchLoc"),
                        l = o.call(a, "finallyLoc");
                      if (c && l) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      } else {
                        if (!l)
                          throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      o.call(r, "finallyLoc") &&
                      this.prev < r.finallyLoc
                    ) {
                      var i = r;
                      break;
                    }
                  }
                  i &&
                    ("break" === e || "continue" === e) &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    m
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), I(n), m;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var o = r.arg;
                        I(n);
                      }
                      return o;
                    }
                  }
                  throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                  return (
                    (this.delegate = {
                      iterator: _(t),
                      resultName: n,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = e),
                    m
                  );
                },
              }),
              t
            );
          }
          function o(e, t, n, r, o, i, a) {
            try {
              var u = e[i](a),
                c = u.value;
            } catch (e) {
              return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
          }
          function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function a(e, t, n) {
            return (
              (t = l(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function u(e) {
            return (
              (u =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              u(e)
            );
          }
          function c(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, l(r.key), r);
            }
          }
          function l(e) {
            var t = (function (e, t) {
              if ("object" != u(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != u(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == u(t) ? t : t + "";
          }
          function f(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (
              (f = function (e) {
                if (
                  null === e ||
                  !(function (e) {
                    try {
                      return (
                        -1 !==
                        Function.toString.call(e).indexOf("[native code]")
                      );
                    } catch (t) {
                      return "function" == typeof e;
                    }
                  })(e)
                )
                  return e;
                if ("function" != typeof e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, n);
                }
                function n() {
                  return (function (e, t, n) {
                    if (s()) return Reflect.construct.apply(null, arguments);
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new (e.bind.apply(e, r))();
                    return n && p(o, n.prototype), o;
                  })(e, arguments, d(this).constructor);
                }
                return (
                  (n.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  p(n, e)
                );
              }),
              f(e)
            );
          }
          function s() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (s = function () {
              return !!e;
            })();
          }
          function p(e, t) {
            return (
              (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              p(e, t)
            );
          }
          function d(e) {
            return (
              (d = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              d(e)
            );
          }
          function y(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function h(e, t) {
            return e.get(v(e, t));
          }
          function b(e, t, n) {
            return e.set(v(e, t), n), n;
          }
          function v(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var m = n(4019),
            w = m.isFunction,
            g = m.kEnumerableProperty,
            O = m.kHiddenProperty,
            T = n(9439),
            E = T.kNapiObj,
            P = T.kPrivateConstructor,
            S = n(6868);
          e.exports = function (e, t) {
            var n,
              l = new WeakMap(),
              v = new WeakMap(),
              m = new WeakMap(),
              T = (function (t) {
                function n(t) {
                  var r;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, n),
                    "object" !== u(t) || !(E in t))
                  )
                    throw new TypeError("Illegal constructor");
                  return (
                    y(
                      (r = (function (e, t, n) {
                        return (
                          (t = d(t)),
                          (function (e, t) {
                            if (
                              t &&
                              ("object" == u(t) || "function" == typeof t)
                            )
                              return t;
                            if (void 0 !== t)
                              throw new TypeError(
                                "Derived constructors may only return object or undefined"
                              );
                            return (function (e) {
                              if (void 0 === e)
                                throw new ReferenceError(
                                  "this hasn't been initialised - super() hasn't been called"
                                );
                              return e;
                            })(e);
                          })(
                            e,
                            s()
                              ? Reflect.construct(t, n || [], d(e).constructor)
                              : t.apply(e, n)
                          )
                        );
                      })(this, n)),
                      l,
                      null
                    ),
                    y(r, v, null),
                    y(r, m, null),
                    Object.defineProperty(
                      r,
                      E,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? i(Object(n), !0).forEach(function (t) {
                                a(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : i(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({ value: t[E] }, O)
                    ),
                    b(
                      l,
                      r,
                      new S(
                        a(
                          a(a({}, P, !0), "workletId", r[E].workletId),
                          "sampleRate",
                          r[E].sampleRate
                        )
                      )
                    ),
                    b(
                      v,
                      r,
                      new e.AudioDestinationNode(r, a({}, E, r[E].destination))
                    ),
                    r
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && p(e, t);
                  })(n, t),
                  (f = n),
                  (g = [
                    {
                      key: "audioWorklet",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return h(l, this);
                      },
                    },
                    {
                      key: "destination",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return h(v, this);
                      },
                    },
                    {
                      key: "listener",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return (
                          null === h(m, this) &&
                            b(
                              m,
                              this,
                              new e.AudioListener(a({}, E, this[E].listener))
                            ),
                          h(m, this)
                        );
                      },
                    },
                    {
                      key: "sampleRate",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return this[E].sampleRate;
                      },
                    },
                    {
                      key: "currentTime",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return this[E].currentTime;
                      },
                    },
                    {
                      key: "state",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return this[E].state;
                      },
                    },
                    {
                      key: "onstatechange",
                      get: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return this._statechange || null;
                      },
                      set: function (e) {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        (w(e) || null === e) && (this._statechange = e);
                      },
                    },
                    {
                      key: "decodeAudioData",
                      value:
                        ((T = r().mark(function t(o) {
                          var i,
                            u,
                            c,
                            l,
                            f,
                            s = arguments;
                          return r().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((i =
                                        s.length > 1 && void 0 !== s[1]
                                          ? s[1]
                                          : void 0),
                                      (u =
                                        s.length > 2 && void 0 !== s[2]
                                          ? s[2]
                                          : void 0),
                                      this instanceof n)
                                    ) {
                                      t.next = 4;
                                      break;
                                    }
                                    throw new TypeError(
                                      "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                                    );
                                  case 4:
                                    if (!(s.length < 1)) {
                                      t.next = 6;
                                      break;
                                    }
                                    throw new TypeError(
                                      "Failed to execute 'decodeAudioData' on 'BaseAudioContext': 1 argument required, but only ".concat(
                                        s.length,
                                        " present"
                                      )
                                    );
                                  case 6:
                                    if (o instanceof ArrayBuffer) {
                                      t.next = 8;
                                      break;
                                    }
                                    throw new TypeError(
                                      'Failed to execute "decodeAudioData": parameter 1 is not of type "ArrayBuffer"'
                                    );
                                  case 8:
                                    return (
                                      (t.prev = 8),
                                      (t.next = 11),
                                      this[E].decodeAudioData(o)
                                    );
                                  case 11:
                                    if (
                                      ((c = t.sent),
                                      (l = new e.AudioBuffer(a({}, E, c))),
                                      !w(i))
                                    ) {
                                      t.next = 17;
                                      break;
                                    }
                                    i(l), (t.next = 18);
                                    break;
                                  case 17:
                                    return t.abrupt("return", l);
                                  case 18:
                                    t.next = 28;
                                    break;
                                  case 20:
                                    if (
                                      ((t.prev = 20),
                                      (t.t0 = t.catch(8)),
                                      (f = new DOMException(
                                        "Failed to execute 'decodeAudioData': ".concat(
                                          t.t0.message
                                        ),
                                        "EncodingError"
                                      )),
                                      !w(u))
                                    ) {
                                      t.next = 27;
                                      break;
                                    }
                                    u(f), (t.next = 28);
                                    break;
                                  case 27:
                                    throw f;
                                  case 28:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            this,
                            [[8, 20]]
                          );
                        })),
                        (x = function () {
                          var e = this,
                            t = arguments;
                          return new Promise(function (n, r) {
                            var i = T.apply(e, t);
                            function a(e) {
                              o(i, n, r, a, u, "next", e);
                            }
                            function u(e) {
                              o(i, n, r, a, u, "throw", e);
                            }
                            a(void 0);
                          });
                        }),
                        function (e) {
                          return x.apply(this, arguments);
                        }),
                    },
                    {
                      key: "createBuffer",
                      value: function (t, r, o) {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        if (arguments.length < 3)
                          throw new TypeError(
                            "Failed to execute 'createBuffer' on 'BaseAudioContext': 3 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        var i = {};
                        return (
                          void 0 !== t && (i.numberOfChannels = t),
                          void 0 !== r && (i.length = r),
                          void 0 !== o && (i.sampleRate = o),
                          new e.AudioBuffer(i)
                        );
                      },
                    },
                    {
                      key: "createPeriodicWave",
                      value: function (t, r) {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        if (arguments.length < 2)
                          throw new TypeError(
                            "Failed to execute 'createPeriodicWave' on 'BaseAudioContext': 2 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        var o = {};
                        return (
                          void 0 !== t && (o.real = t),
                          void 0 !== r && (o.imag = r),
                          new e.PeriodicWave(this, o)
                        );
                      },
                    },
                    {
                      key: "createScriptProcessor",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 2,
                          o =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : 2;
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        var i = {
                          bufferSize: t,
                          numberOfInputChannels: r,
                          numberOfOutputChannels: o,
                        };
                        return new e.ScriptProcessorNode(this, i);
                      },
                    },
                    {
                      key: "createAnalyser",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.AnalyserNode(this, {});
                      },
                    },
                    {
                      key: "createBufferSource",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.AudioBufferSourceNode(this, {});
                      },
                    },
                    {
                      key: "createBiquadFilter",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.BiquadFilterNode(this, {});
                      },
                    },
                    {
                      key: "createChannelMerger",
                      value: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 6;
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        var r = { numberOfInputs: t };
                        return new e.ChannelMergerNode(this, r);
                      },
                    },
                    {
                      key: "createChannelSplitter",
                      value: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 6;
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        var r = { numberOfOutputs: t };
                        return new e.ChannelSplitterNode(this, r);
                      },
                    },
                    {
                      key: "createConstantSource",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.ConstantSourceNode(this, {});
                      },
                    },
                    {
                      key: "createConvolver",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.ConvolverNode(this, {});
                      },
                    },
                    {
                      key: "createDelay",
                      value: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1;
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        var r = { maxDelayTime: t };
                        return new e.DelayNode(this, r);
                      },
                    },
                    {
                      key: "createDynamicsCompressor",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.DynamicsCompressorNode(this, {});
                      },
                    },
                    {
                      key: "createGain",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.GainNode(this, {});
                      },
                    },
                    {
                      key: "createIIRFilter",
                      value: function (t, r) {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        var o = { feedforward: t, feedback: r };
                        return new e.IIRFilterNode(this, o);
                      },
                    },
                    {
                      key: "createOscillator",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.OscillatorNode(this, {});
                      },
                    },
                    {
                      key: "createPanner",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.PannerNode(this, {});
                      },
                    },
                    {
                      key: "createStereoPanner",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.StereoPannerNode(this, {});
                      },
                    },
                    {
                      key: "createWaveShaper",
                      value: function () {
                        if (!(this instanceof n))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BaseAudioContext'"
                          );
                        return new e.WaveShaperNode(this, {});
                      },
                    },
                  ]),
                  g && c(f.prototype, g),
                  Object.defineProperty(f, "prototype", { writable: !1 }),
                  f
                );
                var f, g, T, x;
              })(f(EventTarget));
            return (
              Object.defineProperties(T, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 0,
                },
              }),
              Object.defineProperties(
                T.prototype,
                (a(
                  a(
                    a(
                      a(
                        a(
                          a(
                            a(
                              a(
                                a(
                                  a((n = {}), Symbol.toStringTag, {
                                    __proto__: null,
                                    writable: !1,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: "BaseAudioContext",
                                  }),
                                  "createScriptProcessor",
                                  g
                                ),
                                "createAnalyser",
                                g
                              ),
                              "createBufferSource",
                              g
                            ),
                            "createBiquadFilter",
                            g
                          ),
                          "createChannelMerger",
                          g
                        ),
                        "createChannelSplitter",
                        g
                      ),
                      "createConstantSource",
                      g
                    ),
                    "createConvolver",
                    g
                  ),
                  "createDelay",
                  g
                ),
                a(
                  a(
                    a(
                      a(
                        a(
                          a(
                            a(
                              a(
                                a(
                                  a(n, "createDynamicsCompressor", g),
                                  "createGain",
                                  g
                                ),
                                "createIIRFilter",
                                g
                              ),
                              "createOscillator",
                              g
                            ),
                            "createPanner",
                            g
                          ),
                          "createStereoPanner",
                          g
                        ),
                        "createWaveShaper",
                        g
                      ),
                      "listener",
                      g
                    ),
                    "destination",
                    g
                  ),
                  "sampleRate",
                  g
                ),
                a(
                  a(
                    a(
                      a(
                        a(a(n, "currentTime", g), "state", g),
                        "onstatechange",
                        g
                      ),
                      "decodeAudioData",
                      g
                    ),
                    "createBuffer",
                    g
                  ),
                  "createPeriodicWave",
                  g
                ))
              ),
              T
            );
          };
        },
        8440: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function p(e, t) {
            return e.get(y(e, t));
          }
          function d(e, t, n) {
            return e.set(y(e, t), n), n;
          }
          function y(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var h = n(5616),
            b = (n(8955).toSanitizedSequence, n(4019)),
            v = (b.isFunction, b.kEnumerableProperty),
            m = n(4407).throwSanitizedError,
            w = n(9439),
            g = w.kNapiObj,
            O = (w.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = new WeakMap(),
              c = new WeakMap(),
              l = new WeakMap(),
              y = (function (y) {
                function b(i, f) {
                  var p;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, b),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'BiquadFilterNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'BiquadFilterNode': argument 1 is not of type BaseAudioContext"
                    );
                  var y,
                    v = {};
                  if (f && "object" !== o(f))
                    throw new TypeError(
                      "Failed to construct 'BiquadFilterNode': argument 2 is not of type 'BiquadFilterOptions'"
                    );
                  if (f && void 0 !== f.type) {
                    if (
                      ![
                        "lowpass",
                        "highpass",
                        "bandpass",
                        "lowshelf",
                        "highshelf",
                        "peaking",
                        "notch",
                        "allpass",
                      ].includes(f.type)
                    )
                      throw new TypeError(
                        "Failed to construct 'BiquadFilterNode': Failed to read the 'type' property from BiquadFilterOptions: The provided value '".concat(
                          f.type,
                          "' is not a valid enum value of type BiquadFilterType"
                        )
                      );
                    v.type = h.DOMString(f.type, {
                      context:
                        "Failed to construct 'BiquadFilterNode': Failed to read the 'type' property from BiquadFilterOptions: The provided value '".concat(
                          f.type,
                          "'"
                        ),
                    });
                  } else v.type = "lowpass";
                  f && void 0 !== f.Q
                    ? (v.Q = h.float(f.Q, {
                        context:
                          "Failed to construct 'BiquadFilterNode': Failed to read the 'Q' property from BiquadFilterOptions: The provided value (".concat(
                            f.Q,
                            "})"
                          ),
                      }))
                    : (v.Q = 1),
                    f && void 0 !== f.detune
                      ? (v.detune = h.float(f.detune, {
                          context:
                            "Failed to construct 'BiquadFilterNode': Failed to read the 'detune' property from BiquadFilterOptions: The provided value (".concat(
                              f.detune,
                              "})"
                            ),
                        }))
                      : (v.detune = 0),
                    f && void 0 !== f.frequency
                      ? (v.frequency = h.float(f.frequency, {
                          context:
                            "Failed to construct 'BiquadFilterNode': Failed to read the 'frequency' property from BiquadFilterOptions: The provided value (".concat(
                              f.frequency,
                              "})"
                            ),
                        }))
                      : (v.frequency = 350),
                    f && void 0 !== f.gain
                      ? (v.gain = h.float(f.gain, {
                          context:
                            "Failed to construct 'BiquadFilterNode': Failed to read the 'gain' property from BiquadFilterOptions: The provided value (".concat(
                              f.gain,
                              "})"
                            ),
                        }))
                      : (v.gain = 0),
                    f &&
                      void 0 !== f.channelCount &&
                      (v.channelCount = h["unsigned long"](f.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'BiquadFilterNode': Failed to read the 'channelCount' property from BiquadFilterOptions: The provided value '".concat(
                            f.channelCount,
                            "'"
                          ),
                      })),
                    f &&
                      void 0 !== f.channelCountMode &&
                      (v.channelCountMode = h.DOMString(f.channelCountMode, {
                        context:
                          "Failed to construct 'BiquadFilterNode': Failed to read the 'channelCount' property from BiquadFilterOptions: The provided value '".concat(
                            f.channelCountMode,
                            "'"
                          ),
                      })),
                    f &&
                      void 0 !== f.channelInterpretation &&
                      (v.channelInterpretation = h.DOMString(
                        f.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'BiquadFilterNode': Failed to read the 'channelInterpretation' property from BiquadFilterOptions: The provided value '".concat(
                              f.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    y = new t.BiquadFilterNode(i[g], v);
                  } catch (e) {
                    m(e);
                  }
                  return (
                    s((p = u(this, b, [i, r({}, g, y)])), n, null),
                    s(p, a, null),
                    s(p, c, null),
                    s(p, l, null),
                    d(n, p, new e.AudioParam(r({}, g, p[g].frequency))),
                    d(a, p, new e.AudioParam(r({}, g, p[g].detune))),
                    d(c, p, new e.AudioParam(r({}, g, p[g].Q))),
                    d(l, p, new e.AudioParam(r({}, g, p[g].gain))),
                    p
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(b, y),
                  (v = b),
                  (w = [
                    {
                      key: "frequency",
                      get: function () {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        return p(n, this);
                      },
                    },
                    {
                      key: "detune",
                      get: function () {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        return p(a, this);
                      },
                    },
                    {
                      key: "Q",
                      get: function () {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        return p(c, this);
                      },
                    },
                    {
                      key: "gain",
                      get: function () {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        return p(l, this);
                      },
                    },
                    {
                      key: "type",
                      get: function () {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        return this[g].type;
                      },
                      set: function (e) {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        if (
                          [
                            "lowpass",
                            "highpass",
                            "bandpass",
                            "lowshelf",
                            "highshelf",
                            "peaking",
                            "notch",
                            "allpass",
                          ].includes(e)
                        )
                          try {
                            this[g].type = e;
                          } catch (e) {
                            m(e);
                          }
                        else
                          console.warn(
                            "Failed to set the 'type' property on 'BiquadFilterNode': Value '".concat(
                              e,
                              "' is not a valid 'BiquadFilterType' enum value"
                            )
                          );
                      },
                    },
                    {
                      key: "getFrequencyResponse",
                      value: function (e, t, n) {
                        if (!(this instanceof b))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'BiquadFilterNode'"
                          );
                        if (arguments.length < 3)
                          throw new TypeError(
                            "Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': 3 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        if (!(e instanceof Float32Array))
                          throw new TypeError(
                            "Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': Parameter 1 is not of type 'Float32Array'"
                          );
                        if (!(t instanceof Float32Array))
                          throw new TypeError(
                            "Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': Parameter 2 is not of type 'Float32Array'"
                          );
                        if (!(n instanceof Float32Array))
                          throw new TypeError(
                            "Failed to execute 'getFrequencyResponse' on 'BiquadFilterNode': Parameter 3 is not of type 'Float32Array'"
                          );
                        try {
                          return this[g].getFrequencyResponse(e, t, n);
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                  ]),
                  w && i(v.prototype, w),
                  Object.defineProperty(v, "prototype", { writable: !1 }),
                  v
                );
                var v, w;
              })(O);
            return (
              Object.defineProperties(y, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                y.prototype,
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r({}, Symbol.toStringTag, {
                              __proto__: null,
                              writable: !1,
                              enumerable: !1,
                              configurable: !0,
                              value: "BiquadFilterNode",
                            }),
                            "frequency",
                            v
                          ),
                          "detune",
                          v
                        ),
                        "Q",
                        v
                      ),
                      "gain",
                      v
                    ),
                    "type",
                    v
                  ),
                  "getFrequencyResponse",
                  v
                )
              ),
              y
            );
          };
        },
        9599: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = i(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function a(e, t, n) {
            return (
              (t = c(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                u()
                  ? Reflect.construct(t, n || [], c(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function u() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (u = function () {
              return !!e;
            })();
          }
          function c(e) {
            return (
              (c = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              c(e)
            );
          }
          function l(e, t) {
            return (
              (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              l(e, t)
            );
          }
          var f = n(5616),
            s = (n(8955).toSanitizedSequence, n(4019)),
            p =
              (s.isFunction,
              s.kEnumerableProperty,
              n(4407).throwSanitizedError),
            d = n(9439),
            y = d.kNapiObj,
            h = (d.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = (function (n) {
              function i(n, u) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, i),
                  arguments.length < 1)
                )
                  throw new TypeError(
                    "Failed to construct 'ChannelMergerNode': 1 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.BaseAudioContext))
                  throw new TypeError(
                    "Failed to construct 'ChannelMergerNode': argument 1 is not of type BaseAudioContext"
                  );
                var c,
                  l = {};
                if (u && "object" !== o(u))
                  throw new TypeError(
                    "Failed to construct 'ChannelMergerNode': argument 2 is not of type 'ChannelMergerOptions'"
                  );
                u && void 0 !== u.numberOfInputs
                  ? (l.numberOfInputs = f["unsigned long"](u.numberOfInputs, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'ChannelMergerNode': Failed to read the 'numberOfInputs' property from ChannelMergerOptions: The provided value (".concat(
                          u.numberOfInputs,
                          "})"
                        ),
                    }))
                  : (l.numberOfInputs = 6),
                  u &&
                    void 0 !== u.channelCount &&
                    (l.channelCount = f["unsigned long"](u.channelCount, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'ChannelMergerNode': Failed to read the 'channelCount' property from ChannelMergerOptions: The provided value '".concat(
                          u.channelCount,
                          "'"
                        ),
                    })),
                  u &&
                    void 0 !== u.channelCountMode &&
                    (l.channelCountMode = f.DOMString(u.channelCountMode, {
                      context:
                        "Failed to construct 'ChannelMergerNode': Failed to read the 'channelCount' property from ChannelMergerOptions: The provided value '".concat(
                          u.channelCountMode,
                          "'"
                        ),
                    })),
                  u &&
                    void 0 !== u.channelInterpretation &&
                    (l.channelInterpretation = f.DOMString(
                      u.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'ChannelMergerNode': Failed to read the 'channelInterpretation' property from ChannelMergerOptions: The provided value '".concat(
                            u.channelInterpretation,
                            "'"
                          ),
                      }
                    ));
                try {
                  c = new t.ChannelMergerNode(n[y], l);
                } catch (e) {
                  p(e);
                }
                return a(this, i, [n, r({}, y, c)]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && l(e, t);
                })(i, n),
                (u = i),
                Object.defineProperty(u, "prototype", { writable: !1 }),
                u
              );
              var u;
            })(h);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r({}, Symbol.toStringTag, {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: "ChannelMergerNode",
                })
              ),
              n
            );
          };
        },
        2610: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = i(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function a(e, t, n) {
            return (
              (t = c(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                u()
                  ? Reflect.construct(t, n || [], c(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function u() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (u = function () {
              return !!e;
            })();
          }
          function c(e) {
            return (
              (c = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              c(e)
            );
          }
          function l(e, t) {
            return (
              (l = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              l(e, t)
            );
          }
          var f = n(5616),
            s = (n(8955).toSanitizedSequence, n(4019)),
            p =
              (s.isFunction,
              s.kEnumerableProperty,
              n(4407).throwSanitizedError),
            d = n(9439),
            y = d.kNapiObj,
            h = (d.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = (function (n) {
              function i(n, u) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, i),
                  arguments.length < 1)
                )
                  throw new TypeError(
                    "Failed to construct 'ChannelSplitterNode': 1 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.BaseAudioContext))
                  throw new TypeError(
                    "Failed to construct 'ChannelSplitterNode': argument 1 is not of type BaseAudioContext"
                  );
                var c,
                  l = {};
                if (u && "object" !== o(u))
                  throw new TypeError(
                    "Failed to construct 'ChannelSplitterNode': argument 2 is not of type 'ChannelSplitterOptions'"
                  );
                u && void 0 !== u.numberOfOutputs
                  ? (l.numberOfOutputs = f["unsigned long"](u.numberOfOutputs, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'ChannelSplitterNode': Failed to read the 'numberOfOutputs' property from ChannelSplitterOptions: The provided value (".concat(
                          u.numberOfOutputs,
                          "})"
                        ),
                    }))
                  : (l.numberOfOutputs = 6),
                  u &&
                    void 0 !== u.channelCount &&
                    (l.channelCount = f["unsigned long"](u.channelCount, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'ChannelSplitterNode': Failed to read the 'channelCount' property from ChannelSplitterOptions: The provided value '".concat(
                          u.channelCount,
                          "'"
                        ),
                    })),
                  u &&
                    void 0 !== u.channelCountMode &&
                    (l.channelCountMode = f.DOMString(u.channelCountMode, {
                      context:
                        "Failed to construct 'ChannelSplitterNode': Failed to read the 'channelCount' property from ChannelSplitterOptions: The provided value '".concat(
                          u.channelCountMode,
                          "'"
                        ),
                    })),
                  u &&
                    void 0 !== u.channelInterpretation &&
                    (l.channelInterpretation = f.DOMString(
                      u.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'ChannelSplitterNode': Failed to read the 'channelInterpretation' property from ChannelSplitterOptions: The provided value '".concat(
                            u.channelInterpretation,
                            "'"
                          ),
                      }
                    ));
                try {
                  c = new t.ChannelSplitterNode(n[y], l);
                } catch (e) {
                  p(e);
                }
                return a(this, i, [n, r({}, y, c)]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && l(e, t);
                })(i, n),
                (u = i),
                Object.defineProperty(u, "prototype", { writable: !1 }),
                u
              );
              var u;
            })(h);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r({}, Symbol.toStringTag, {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: "ChannelSplitterNode",
                })
              ),
              n
            );
          };
        },
        9925: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = (n(8955).toSanitizedSequence, n(4019)),
            y = (d.isFunction, d.kEnumerableProperty),
            h = n(4407).throwSanitizedError,
            b = n(9439),
            v = b.kNapiObj,
            m = (b.kAudioBuffer, n(7140));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = (function (a) {
                function c(i, a) {
                  var l;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, c),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'ConstantSourceNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'ConstantSourceNode': argument 1 is not of type BaseAudioContext"
                    );
                  var f,
                    d,
                    y,
                    b,
                    m = {};
                  if (a && "object" !== o(a))
                    throw new TypeError(
                      "Failed to construct 'ConstantSourceNode': argument 2 is not of type 'ConstantSourceOptions'"
                    );
                  a && void 0 !== a.offset
                    ? (m.offset = p.float(a.offset, {
                        context:
                          "Failed to construct 'ConstantSourceNode': Failed to read the 'offset' property from ConstantSourceOptions: The provided value (".concat(
                            a.offset,
                            "})"
                          ),
                      }))
                    : (m.offset = 1);
                  try {
                    f = new t.ConstantSourceNode(i[v], m);
                  } catch (e) {
                    h(e);
                  }
                  return (
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })((l = u(this, c, [i, r({}, v, f)])), n, null),
                    (d = n),
                    (y = l),
                    (b = new e.AudioParam(r({}, v, l[v].offset))),
                    d.set(s(d, y), b),
                    l
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(c, a),
                  (l = c),
                  (d = [
                    {
                      key: "offset",
                      get: function () {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'ConstantSourceNode'"
                          );
                        return (e = n).get(s(e, this));
                        var e;
                      },
                    },
                  ]) && i(l.prototype, d),
                  Object.defineProperty(l, "prototype", { writable: !1 }),
                  l
                );
                var l, d;
              })(m);
            return (
              Object.defineProperties(a, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                a.prototype,
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "ConstantSourceNode",
                  }),
                  "offset",
                  y
                )
              ),
              a
            );
          };
        },
        4104: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          var s = n(5616),
            p = (n(8955).toSanitizedSequence, n(4019)),
            d = (p.isFunction, p.kEnumerableProperty),
            y = n(4407).throwSanitizedError,
            h = n(9439),
            b = h.kNapiObj,
            v = h.kAudioBuffer,
            m = n(8536);
          e.exports = function (e, t) {
            var n = (function (n) {
              function a(n, i) {
                var c;
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, a),
                  arguments.length < 1)
                )
                  throw new TypeError(
                    "Failed to construct 'ConvolverNode': 1 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.BaseAudioContext))
                  throw new TypeError(
                    "Failed to construct 'ConvolverNode': argument 1 is not of type BaseAudioContext"
                  );
                var l,
                  f = {};
                if (i && "object" !== o(i))
                  throw new TypeError(
                    "Failed to construct 'ConvolverNode': argument 2 is not of type 'ConvolverOptions'"
                  );
                if (i && void 0 !== i.buffer)
                  if (null !== i.buffer) {
                    if (!(i.buffer instanceof e.AudioBuffer))
                      throw new TypeError(
                        "Failed to construct 'ConvolverNode': Failed to read the 'buffer' property from ConvolverOptions: The provided value cannot be converted to 'AudioBuffer'"
                      );
                    f.buffer = i.buffer[b];
                  } else f.buffer = null;
                else f.buffer = null;
                i && void 0 !== i.disableNormalization
                  ? (f.disableNormalization = s.boolean(
                      i.disableNormalization,
                      {
                        context:
                          "Failed to construct 'ConvolverNode': Failed to read the 'disableNormalization' property from ConvolverOptions: The provided value (".concat(
                            i.disableNormalization,
                            "})"
                          ),
                      }
                    ))
                  : (f.disableNormalization = !1),
                  i &&
                    void 0 !== i.channelCount &&
                    (f.channelCount = s["unsigned long"](i.channelCount, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'ConvolverNode': Failed to read the 'channelCount' property from ConvolverOptions: The provided value '".concat(
                          i.channelCount,
                          "'"
                        ),
                    })),
                  i &&
                    void 0 !== i.channelCountMode &&
                    (f.channelCountMode = s.DOMString(i.channelCountMode, {
                      context:
                        "Failed to construct 'ConvolverNode': Failed to read the 'channelCount' property from ConvolverOptions: The provided value '".concat(
                          i.channelCountMode,
                          "'"
                        ),
                    })),
                  i &&
                    void 0 !== i.channelInterpretation &&
                    (f.channelInterpretation = s.DOMString(
                      i.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'ConvolverNode': Failed to read the 'channelInterpretation' property from ConvolverOptions: The provided value '".concat(
                            i.channelInterpretation,
                            "'"
                          ),
                      }
                    ));
                try {
                  l = new t.ConvolverNode(n[b], f);
                } catch (e) {
                  y(e);
                }
                return (
                  (c = u(this, a, [n, r({}, b, l)])),
                  Object.defineProperty(c, v, {
                    __proto__: null,
                    enumerable: !1,
                    writable: !0,
                    value: null,
                  }),
                  i && void 0 !== i.buffer && (c[v] = i.buffer),
                  c
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(a, n),
                (c = a),
                (l = [
                  {
                    key: "buffer",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'ConvolverNode'"
                        );
                      return this[v];
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'ConvolverNode'"
                        );
                      if (null !== e) {
                        if (!(b in e))
                          throw new TypeError(
                            "Failed to set the 'buffer' property on 'ConvolverNode': Failed to convert value to 'AudioBuffer'"
                          );
                        try {
                          this[b].buffer = e[b];
                        } catch (e) {
                          y(e);
                        }
                        this[v] = e;
                      } else
                        console.warn(
                          "Setting the 'buffer' property on 'ConvolverNode' to 'null' is not supported yet"
                        );
                    },
                  },
                  {
                    key: "normalize",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'ConvolverNode'"
                        );
                      return this[b].normalize;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'ConvolverNode'"
                        );
                      e = s.boolean(e, {
                        context:
                          "Failed to set the 'normalize' property on 'ConvolverNode': Value",
                      });
                      try {
                        this[b].normalize = e;
                      } catch (e) {
                        y(e);
                      }
                    },
                  },
                ]) && i(c.prototype, l),
                Object.defineProperty(c, "prototype", { writable: !1 }),
                c
              );
              var c, l;
            })(m);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "ConvolverNode",
                    }),
                    "buffer",
                    d
                  ),
                  "normalize",
                  d
                )
              ),
              n
            );
          };
        },
        6341: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = (n(8955).toSanitizedSequence, n(4019)),
            y = (d.isFunction, d.kEnumerableProperty),
            h = n(4407).throwSanitizedError,
            b = n(9439),
            v = b.kNapiObj,
            m = (b.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = (function (a) {
                function c(i, a) {
                  var l;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, c),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'DelayNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'DelayNode': argument 1 is not of type BaseAudioContext"
                    );
                  var f,
                    d,
                    y,
                    b,
                    m = {};
                  if (a && "object" !== o(a))
                    throw new TypeError(
                      "Failed to construct 'DelayNode': argument 2 is not of type 'DelayOptions'"
                    );
                  a && void 0 !== a.maxDelayTime
                    ? (m.maxDelayTime = p.double(a.maxDelayTime, {
                        context:
                          "Failed to construct 'DelayNode': Failed to read the 'maxDelayTime' property from DelayOptions: The provided value (".concat(
                            a.maxDelayTime,
                            "})"
                          ),
                      }))
                    : (m.maxDelayTime = 1),
                    a && void 0 !== a.delayTime
                      ? (m.delayTime = p.double(a.delayTime, {
                          context:
                            "Failed to construct 'DelayNode': Failed to read the 'delayTime' property from DelayOptions: The provided value (".concat(
                              a.delayTime,
                              "})"
                            ),
                        }))
                      : (m.delayTime = 0),
                    a &&
                      void 0 !== a.channelCount &&
                      (m.channelCount = p["unsigned long"](a.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'DelayNode': Failed to read the 'channelCount' property from DelayOptions: The provided value '".concat(
                            a.channelCount,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelCountMode &&
                      (m.channelCountMode = p.DOMString(a.channelCountMode, {
                        context:
                          "Failed to construct 'DelayNode': Failed to read the 'channelCount' property from DelayOptions: The provided value '".concat(
                            a.channelCountMode,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelInterpretation &&
                      (m.channelInterpretation = p.DOMString(
                        a.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'DelayNode': Failed to read the 'channelInterpretation' property from DelayOptions: The provided value '".concat(
                              a.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    f = new t.DelayNode(i[v], m);
                  } catch (e) {
                    h(e);
                  }
                  return (
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })((l = u(this, c, [i, r({}, v, f)])), n, null),
                    (d = n),
                    (y = l),
                    (b = new e.AudioParam(r({}, v, l[v].delayTime))),
                    d.set(s(d, y), b),
                    l
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(c, a),
                  (l = c),
                  (d = [
                    {
                      key: "delayTime",
                      get: function () {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DelayNode'"
                          );
                        return (e = n).get(s(e, this));
                        var e;
                      },
                    },
                  ]) && i(l.prototype, d),
                  Object.defineProperty(l, "prototype", { writable: !1 }),
                  l
                );
                var l, d;
              })(m);
            return (
              Object.defineProperties(a, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                a.prototype,
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "DelayNode",
                  }),
                  "delayTime",
                  y
                )
              ),
              a
            );
          };
        },
        8391: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function p(e, t) {
            return e.get(y(e, t));
          }
          function d(e, t, n) {
            return e.set(y(e, t), n), n;
          }
          function y(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var h = n(5616),
            b = (n(8955).toSanitizedSequence, n(4019)),
            v = (b.isFunction, b.kEnumerableProperty),
            m = n(4407).throwSanitizedError,
            w = n(9439),
            g = w.kNapiObj,
            O = (w.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = new WeakMap(),
              c = new WeakMap(),
              l = new WeakMap(),
              y = new WeakMap(),
              b = (function (b) {
                function v(i, f) {
                  var p;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, v),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'DynamicsCompressorNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'DynamicsCompressorNode': argument 1 is not of type BaseAudioContext"
                    );
                  var b,
                    w = {};
                  if (f && "object" !== o(f))
                    throw new TypeError(
                      "Failed to construct 'DynamicsCompressorNode': argument 2 is not of type 'DynamicsCompressorOptions'"
                    );
                  f && void 0 !== f.attack
                    ? (w.attack = h.float(f.attack, {
                        context:
                          "Failed to construct 'DynamicsCompressorNode': Failed to read the 'attack' property from DynamicsCompressorOptions: The provided value (".concat(
                            f.attack,
                            "})"
                          ),
                      }))
                    : (w.attack = 0.003),
                    f && void 0 !== f.knee
                      ? (w.knee = h.float(f.knee, {
                          context:
                            "Failed to construct 'DynamicsCompressorNode': Failed to read the 'knee' property from DynamicsCompressorOptions: The provided value (".concat(
                              f.knee,
                              "})"
                            ),
                        }))
                      : (w.knee = 30),
                    f && void 0 !== f.ratio
                      ? (w.ratio = h.float(f.ratio, {
                          context:
                            "Failed to construct 'DynamicsCompressorNode': Failed to read the 'ratio' property from DynamicsCompressorOptions: The provided value (".concat(
                              f.ratio,
                              "})"
                            ),
                        }))
                      : (w.ratio = 12),
                    f && void 0 !== f.release
                      ? (w.release = h.float(f.release, {
                          context:
                            "Failed to construct 'DynamicsCompressorNode': Failed to read the 'release' property from DynamicsCompressorOptions: The provided value (".concat(
                              f.release,
                              "})"
                            ),
                        }))
                      : (w.release = 0.25),
                    f && void 0 !== f.threshold
                      ? (w.threshold = h.float(f.threshold, {
                          context:
                            "Failed to construct 'DynamicsCompressorNode': Failed to read the 'threshold' property from DynamicsCompressorOptions: The provided value (".concat(
                              f.threshold,
                              "})"
                            ),
                        }))
                      : (w.threshold = -24),
                    f &&
                      void 0 !== f.channelCount &&
                      (w.channelCount = h["unsigned long"](f.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'DynamicsCompressorNode': Failed to read the 'channelCount' property from DynamicsCompressorOptions: The provided value '".concat(
                            f.channelCount,
                            "'"
                          ),
                      })),
                    f &&
                      void 0 !== f.channelCountMode &&
                      (w.channelCountMode = h.DOMString(f.channelCountMode, {
                        context:
                          "Failed to construct 'DynamicsCompressorNode': Failed to read the 'channelCount' property from DynamicsCompressorOptions: The provided value '".concat(
                            f.channelCountMode,
                            "'"
                          ),
                      })),
                    f &&
                      void 0 !== f.channelInterpretation &&
                      (w.channelInterpretation = h.DOMString(
                        f.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'DynamicsCompressorNode': Failed to read the 'channelInterpretation' property from DynamicsCompressorOptions: The provided value '".concat(
                              f.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    b = new t.DynamicsCompressorNode(i[g], w);
                  } catch (e) {
                    m(e);
                  }
                  return (
                    s((p = u(this, v, [i, r({}, g, b)])), n, null),
                    s(p, a, null),
                    s(p, c, null),
                    s(p, l, null),
                    s(p, y, null),
                    d(n, p, new e.AudioParam(r({}, g, p[g].threshold))),
                    d(a, p, new e.AudioParam(r({}, g, p[g].knee))),
                    d(c, p, new e.AudioParam(r({}, g, p[g].ratio))),
                    d(l, p, new e.AudioParam(r({}, g, p[g].attack))),
                    d(y, p, new e.AudioParam(r({}, g, p[g].release))),
                    p
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(v, b),
                  (w = v),
                  (O = [
                    {
                      key: "threshold",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DynamicsCompressorNode'"
                          );
                        return p(n, this);
                      },
                    },
                    {
                      key: "knee",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DynamicsCompressorNode'"
                          );
                        return p(a, this);
                      },
                    },
                    {
                      key: "ratio",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DynamicsCompressorNode'"
                          );
                        return p(c, this);
                      },
                    },
                    {
                      key: "attack",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DynamicsCompressorNode'"
                          );
                        return p(l, this);
                      },
                    },
                    {
                      key: "release",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DynamicsCompressorNode'"
                          );
                        return p(y, this);
                      },
                    },
                    {
                      key: "reduction",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'DynamicsCompressorNode'"
                          );
                        return this[g].reduction;
                      },
                    },
                  ]) && i(w.prototype, O),
                  Object.defineProperty(w, "prototype", { writable: !1 }),
                  w
                );
                var w, O;
              })(O);
            return (
              Object.defineProperties(b, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                b.prototype,
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r({}, Symbol.toStringTag, {
                              __proto__: null,
                              writable: !1,
                              enumerable: !1,
                              configurable: !0,
                              value: "DynamicsCompressorNode",
                            }),
                            "threshold",
                            v
                          ),
                          "knee",
                          v
                        ),
                        "ratio",
                        v
                      ),
                      "attack",
                      v
                    ),
                    "release",
                    v
                  ),
                  "reduction",
                  v
                )
              ),
              b
            );
          };
        },
        8461: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = c(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, c(r.key), r);
            }
          }
          function u(e, t, n) {
            return (
              t && a(e.prototype, t),
              n && a(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          function c(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function l(e, t, n) {
            return (
              (t = y(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                p()
                  ? Reflect.construct(t, n || [], y(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function f(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && d(e, t);
          }
          function s(e) {
            var t = "function" == typeof Map ? new Map() : void 0;
            return (
              (s = function (e) {
                if (
                  null === e ||
                  !(function (e) {
                    try {
                      return (
                        -1 !==
                        Function.toString.call(e).indexOf("[native code]")
                      );
                    } catch (t) {
                      return "function" == typeof e;
                    }
                  })(e)
                )
                  return e;
                if ("function" != typeof e)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, n);
                }
                function n() {
                  return (function (e, t, n) {
                    if (p()) return Reflect.construct.apply(null, arguments);
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new (e.bind.apply(e, r))();
                    return n && d(o, n.prototype), o;
                  })(e, arguments, y(this).constructor);
                }
                return (
                  (n.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  d(n, e)
                );
              }),
              s(e)
            );
          }
          function p() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (p = function () {
              return !!e;
            })();
          }
          function d(e, t) {
            return (
              (d = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              d(e, t)
            );
          }
          function y(e) {
            return (
              (y = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              y(e)
            );
          }
          function h(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function b(e, t) {
            return e.get(m(e, t));
          }
          function v(e, t, n) {
            return e.set(m(e, t), n), n;
          }
          function m(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var w = n(4019).kEnumerableProperty,
            g = new WeakMap(),
            O = (function (e) {
              function t(e, n) {
                var r;
                if (
                  (i(this, t),
                  h((r = l(this, t, [e])), g, null),
                  "object" !== o(n) || null === n || !("renderedBuffer" in n))
                )
                  throw TypeError(
                    "Failed to construct 'OfflineAudioCompletionEvent': Invalid 'OfflineAudioCompletionEventInit' dict given"
                  );
                return v(g, r, n.renderedBuffer), r;
              }
              return (
                f(t, e),
                u(t, [
                  {
                    key: "renderedBuffer",
                    get: function () {
                      return b(g, this);
                    },
                  },
                ])
              );
            })(s(Event));
          Object.defineProperties(
            O.prototype,
            r(
              r({}, Symbol.toStringTag, {
                __proto__: null,
                writable: !1,
                enumerable: !1,
                configurable: !0,
                value: "OfflineAudioCompletionEvent",
              }),
              "renderedBuffer",
              w
            )
          );
          var T = new WeakMap(),
            E = new WeakMap(),
            P = new WeakMap(),
            S = (function (e) {
              function t(e, n) {
                var r;
                if (
                  (i(this, t),
                  "object" !== o(n) ||
                    null === n ||
                    !("playbackTime" in n) ||
                    !("inputBuffer" in n) ||
                    !("outputBuffer" in n))
                )
                  throw TypeError(
                    "Failed to construct 'AudioProcessingEvent': Invalid 'AudioProcessingEventInit' dict given"
                  );
                return (
                  h((r = l(this, t, [e])), T, null),
                  h(r, E, null),
                  h(r, P, null),
                  v(T, r, n.playbackTime),
                  v(E, r, n.inputBuffer),
                  v(P, r, n.outputBuffer),
                  r
                );
              }
              return (
                f(t, e),
                u(t, [
                  {
                    key: "playbackTime",
                    get: function () {
                      return b(T, this);
                    },
                  },
                  {
                    key: "inputBuffer",
                    get: function () {
                      return b(E, this);
                    },
                  },
                  {
                    key: "outputBuffer",
                    get: function () {
                      return b(P, this);
                    },
                  },
                ])
              );
            })(s(Event));
          Object.defineProperties(
            S.prototype,
            r(
              r(
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "AudioProcessingEvent",
                  }),
                  "playbackTime",
                  w
                ),
                "inputBuffer",
                w
              ),
              "outputBuffer",
              w
            )
          );
          var x = new WeakMap(),
            j = new WeakMap(),
            A = new WeakMap(),
            F = new WeakMap(),
            k = (function (e) {
              function t(e, n) {
                var r;
                if (
                  (i(this, t),
                  !(
                    "object" === o(n) &&
                    null !== n &&
                    "timestamp" in n &&
                    "averageLoad" in n &&
                    "peakLoad" in n &&
                    "underrunRatio" in n
                  ))
                )
                  throw TypeError(
                    "Failed to construct 'AudioRenderCapacityEvent': Invalid 'AudioRenderCapacityEventInit' dict given"
                  );
                return (
                  h((r = l(this, t, [e])), x, 0),
                  h(r, j, 0),
                  h(r, A, 0),
                  h(r, F, 0),
                  v(x, r, n.timestamp),
                  v(j, r, n.averageLoad),
                  v(A, r, n.peakLoad),
                  v(F, r, n.underrunRatio),
                  r
                );
              }
              return (
                f(t, e),
                u(t, [
                  {
                    key: "timestamp",
                    get: function () {
                      return b(x, this);
                    },
                  },
                  {
                    key: "averageLoad",
                    get: function () {
                      return b(j, this);
                    },
                  },
                  {
                    key: "peakLoad",
                    get: function () {
                      return b(A, this);
                    },
                  },
                  {
                    key: "underrunRatio",
                    get: function () {
                      return b(F, this);
                    },
                  },
                ])
              );
            })(s(Event));
          Object.defineProperties(
            k.prototype,
            r(
              r(
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "AudioRenderCapacityEvent",
                    }),
                    "timestamp",
                    w
                  ),
                  "averageLoad",
                  w
                ),
                "peakLoad",
                w
              ),
              "underrunRatio",
              w
            )
          );
          var I = new WeakMap(),
            C = new WeakMap(),
            _ = new WeakMap(),
            N = new WeakMap(),
            B = new WeakMap(),
            M = (function (e) {
              function t(e) {
                var n,
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return (
                  i(this, t),
                  h((n = l(this, t, [e])), I, ""),
                  h(n, C, ""),
                  h(n, _, 0),
                  h(n, N, 0),
                  h(n, B, void 0),
                  r && "string" == typeof r.message && v(I, n, r.message),
                  r && "string" == typeof r.filename && v(C, n, r.filename),
                  r && Number.isFinite(r.lineno) && v(_, n, r.lineno),
                  r && Number.isFinite(r.colno) && v(N, n, r.colno),
                  r && r.error instanceof Error && v(B, n, r.error),
                  n
                );
              }
              return (
                f(t, e),
                u(t, [
                  {
                    key: "message",
                    get: function () {
                      return b(I, this);
                    },
                  },
                  {
                    key: "filename",
                    get: function () {
                      return b(C, this);
                    },
                  },
                  {
                    key: "lineno",
                    get: function () {
                      return b(_, this);
                    },
                  },
                  {
                    key: "colno",
                    get: function () {
                      return b(N, this);
                    },
                  },
                  {
                    key: "error",
                    get: function () {
                      return b(B, this);
                    },
                  },
                ])
              );
            })(s(Event));
          Object.defineProperties(
            M.prototype,
            r(
              r(
                r(
                  r(
                    r(
                      r({}, Symbol.toStringTag, {
                        __proto__: null,
                        writable: !1,
                        enumerable: !1,
                        configurable: !0,
                        value: "ErrorEvent",
                      }),
                      "message",
                      w
                    ),
                    "filename",
                    w
                  ),
                  "lineno",
                  w
                ),
                "colno",
                w
              ),
              "error",
              w
            )
          ),
            (e.exports.OfflineAudioCompletionEvent = O),
            (e.exports.AudioProcessingEvent = S),
            (e.exports.AudioRenderCapacityEvent = k),
            (e.exports.ErrorEvent = M);
        },
        5395: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = (n(8955).toSanitizedSequence, n(4019)),
            y = (d.isFunction, d.kEnumerableProperty),
            h = n(4407).throwSanitizedError,
            b = n(9439),
            v = b.kNapiObj,
            m = (b.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = (function (a) {
                function c(i, a) {
                  var l;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, c),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'GainNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'GainNode': argument 1 is not of type BaseAudioContext"
                    );
                  var f,
                    d,
                    y,
                    b,
                    m = {};
                  if (a && "object" !== o(a))
                    throw new TypeError(
                      "Failed to construct 'GainNode': argument 2 is not of type 'GainOptions'"
                    );
                  a && void 0 !== a.gain
                    ? (m.gain = p.float(a.gain, {
                        context:
                          "Failed to construct 'GainNode': Failed to read the 'gain' property from GainOptions: The provided value (".concat(
                            a.gain,
                            "})"
                          ),
                      }))
                    : (m.gain = 1),
                    a &&
                      void 0 !== a.channelCount &&
                      (m.channelCount = p["unsigned long"](a.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'GainNode': Failed to read the 'channelCount' property from GainOptions: The provided value '".concat(
                            a.channelCount,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelCountMode &&
                      (m.channelCountMode = p.DOMString(a.channelCountMode, {
                        context:
                          "Failed to construct 'GainNode': Failed to read the 'channelCount' property from GainOptions: The provided value '".concat(
                            a.channelCountMode,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelInterpretation &&
                      (m.channelInterpretation = p.DOMString(
                        a.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'GainNode': Failed to read the 'channelInterpretation' property from GainOptions: The provided value '".concat(
                              a.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    f = new t.GainNode(i[v], m);
                  } catch (e) {
                    h(e);
                  }
                  return (
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })((l = u(this, c, [i, r({}, v, f)])), n, null),
                    (d = n),
                    (y = l),
                    (b = new e.AudioParam(r({}, v, l[v].gain))),
                    d.set(s(d, y), b),
                    l
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(c, a),
                  (l = c),
                  (d = [
                    {
                      key: "gain",
                      get: function () {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'GainNode'"
                          );
                        return (e = n).get(s(e, this));
                        var e;
                      },
                    },
                  ]) && i(l.prototype, d),
                  Object.defineProperty(l, "prototype", { writable: !1 }),
                  l
                );
                var l, d;
              })(m);
            return (
              Object.defineProperties(a, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                a.prototype,
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "GainNode",
                  }),
                  "gain",
                  y
                )
              ),
              a
            );
          };
        },
        6960: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          var s = n(5616),
            p = n(8955).toSanitizedSequence,
            d = n(4019),
            y = (d.isFunction, d.kEnumerableProperty),
            h = n(4407).throwSanitizedError,
            b = n(9439),
            v = b.kNapiObj,
            m = (b.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = (function (n) {
              function a(n, i) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, a),
                  arguments.length < 2)
                )
                  throw new TypeError(
                    "Failed to construct 'IIRFilterNode': 2 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.BaseAudioContext))
                  throw new TypeError(
                    "Failed to construct 'IIRFilterNode': argument 1 is not of type BaseAudioContext"
                  );
                var c,
                  l = {};
                if (i && "object" !== o(i))
                  throw new TypeError(
                    "Failed to construct 'IIRFilterNode': argument 2 is not of type 'IIRFilterOptions'"
                  );
                if ("object" !== o(i) || (i && void 0 === i.feedforward))
                  throw new TypeError(
                    "Failed to construct 'IIRFilterNode': Failed to read the 'feedforward' property from IIRFilterOptions: Required member is undefined"
                  );
                if (i && void 0 !== i.feedforward)
                  try {
                    l.feedforward = p(i.feedforward, Float64Array);
                  } catch (e) {
                    throw new TypeError(
                      "Failed to construct 'IIRFilterNode': Failed to read the 'feedforward' property from IIRFilterOptions: The provided value ".concat(
                        e.message
                      )
                    );
                  }
                else l.feedforward = null;
                if ("object" !== o(i) || (i && void 0 === i.feedback))
                  throw new TypeError(
                    "Failed to construct 'IIRFilterNode': Failed to read the 'feedback' property from IIRFilterOptions: Required member is undefined"
                  );
                if (i && void 0 !== i.feedback)
                  try {
                    l.feedback = p(i.feedback, Float64Array);
                  } catch (e) {
                    throw new TypeError(
                      "Failed to construct 'IIRFilterNode': Failed to read the 'feedback' property from IIRFilterOptions: The provided value ".concat(
                        e.message
                      )
                    );
                  }
                else l.feedback = null;
                i &&
                  void 0 !== i.channelCount &&
                  (l.channelCount = s["unsigned long"](i.channelCount, {
                    enforceRange: !0,
                    context:
                      "Failed to construct 'IIRFilterNode': Failed to read the 'channelCount' property from IIRFilterOptions: The provided value '".concat(
                        i.channelCount,
                        "'"
                      ),
                  })),
                  i &&
                    void 0 !== i.channelCountMode &&
                    (l.channelCountMode = s.DOMString(i.channelCountMode, {
                      context:
                        "Failed to construct 'IIRFilterNode': Failed to read the 'channelCount' property from IIRFilterOptions: The provided value '".concat(
                          i.channelCountMode,
                          "'"
                        ),
                    })),
                  i &&
                    void 0 !== i.channelInterpretation &&
                    (l.channelInterpretation = s.DOMString(
                      i.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'IIRFilterNode': Failed to read the 'channelInterpretation' property from IIRFilterOptions: The provided value '".concat(
                            i.channelInterpretation,
                            "'"
                          ),
                      }
                    ));
                try {
                  c = new t.IIRFilterNode(n[v], l);
                } catch (e) {
                  h(e);
                }
                return u(this, a, [n, r({}, v, c)]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(a, n),
                (c = a),
                (l = [
                  {
                    key: "getFrequencyResponse",
                    value: function (e, t, n) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'IIRFilterNode'"
                        );
                      if (arguments.length < 3)
                        throw new TypeError(
                          "Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': 3 argument required, but only ".concat(
                            arguments.length,
                            " present"
                          )
                        );
                      if (!(e instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': Parameter 1 is not of type 'Float32Array'"
                        );
                      if (!(t instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': Parameter 2 is not of type 'Float32Array'"
                        );
                      if (!(n instanceof Float32Array))
                        throw new TypeError(
                          "Failed to execute 'getFrequencyResponse' on 'IIRFilterNode': Parameter 3 is not of type 'Float32Array'"
                        );
                      try {
                        return this[v].getFrequencyResponse(e, t, n);
                      } catch (e) {
                        h(e);
                      }
                    },
                  },
                ]),
                l && i(c.prototype, l),
                Object.defineProperty(c, "prototype", { writable: !1 }),
                c
              );
              var c, l;
            })(m);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 2,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "IIRFilterNode",
                  }),
                  "getFrequencyResponse",
                  y
                )
              ),
              n
            );
          };
        },
        4283: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          n(5616), n(8955).toSanitizedSequence;
          var s = n(4019),
            p = (s.isFunction, s.kEnumerableProperty),
            d = n(4407).throwSanitizedError,
            y = n(9439),
            h = y.kNapiObj,
            b = (y.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = (function (n) {
              function a(n, i) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, a),
                  arguments.length < 2)
                )
                  throw new TypeError(
                    "Failed to construct 'MediaStreamAudioSourceNode': 2 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.AudioContext))
                  throw new TypeError(
                    "Failed to construct 'MediaStreamAudioSourceNode': argument 1 is not of type AudioContext"
                  );
                var c,
                  l = {};
                if (i && "object" !== o(i))
                  throw new TypeError(
                    "Failed to construct 'MediaStreamAudioSourceNode': argument 2 is not of type 'MediaStreamAudioSourceOptions'"
                  );
                if ("object" !== o(i) || (i && void 0 === i.mediaStream))
                  throw new TypeError(
                    "Failed to construct 'MediaStreamAudioSourceNode': Failed to read the 'mediaStream' property from MediaStreamAudioSourceOptions: Required member is undefined"
                  );
                l.mediaStream = i.mediaStream;
                try {
                  c = new t.MediaStreamAudioSourceNode(n[h], l);
                } catch (e) {
                  d(e);
                }
                return u(this, a, [n, r({}, h, c)]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(a, n),
                (c = a),
                (l = [
                  {
                    key: "mediaStream",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'MediaStreamAudioSourceNode'"
                        );
                      return this[h].mediaStream;
                    },
                  },
                ]) && i(c.prototype, l),
                Object.defineProperty(c, "prototype", { writable: !1 }),
                c
              );
              var c, l;
            })(b);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 2,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "MediaStreamAudioSourceNode",
                  }),
                  "mediaStream",
                  p
                )
              ),
              n
            );
          };
        },
        6624: (e, t, n) => {
          function r() {
            "use strict";
            r = function () {
              return t;
            };
            var e,
              t = {},
              n = Object.prototype,
              o = n.hasOwnProperty,
              i =
                Object.defineProperty ||
                function (e, t, n) {
                  e[t] = n.value;
                },
              a = "function" == typeof Symbol ? Symbol : {},
              u = a.iterator || "@@iterator",
              l = a.asyncIterator || "@@asyncIterator",
              f = a.toStringTag || "@@toStringTag";
            function s(e, t, n) {
              return (
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                e[t]
              );
            }
            try {
              s({}, "");
            } catch (e) {
              s = function (e, t, n) {
                return (e[t] = n);
              };
            }
            function p(e, t, n, r) {
              var o = t && t.prototype instanceof w ? t : w,
                a = Object.create(o.prototype),
                u = new C(r || []);
              return i(a, "_invoke", { value: A(e, n, u) }), a;
            }
            function d(e, t, n) {
              try {
                return { type: "normal", arg: e.call(t, n) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            t.wrap = p;
            var y = "suspendedStart",
              h = "suspendedYield",
              b = "executing",
              v = "completed",
              m = {};
            function w() {}
            function g() {}
            function O() {}
            var T = {};
            s(T, u, function () {
              return this;
            });
            var E = Object.getPrototypeOf,
              P = E && E(E(_([])));
            P && P !== n && o.call(P, u) && (T = P);
            var S = (O.prototype = w.prototype = Object.create(T));
            function x(e) {
              ["next", "throw", "return"].forEach(function (t) {
                s(e, t, function (e) {
                  return this._invoke(t, e);
                });
              });
            }
            function j(e, t) {
              function n(r, i, a, u) {
                var l = d(e[r], e, i);
                if ("throw" !== l.type) {
                  var f = l.arg,
                    s = f.value;
                  return s && "object" == c(s) && o.call(s, "__await")
                    ? t.resolve(s.__await).then(
                        function (e) {
                          n("next", e, a, u);
                        },
                        function (e) {
                          n("throw", e, a, u);
                        }
                      )
                    : t.resolve(s).then(
                        function (e) {
                          (f.value = e), a(f);
                        },
                        function (e) {
                          return n("throw", e, a, u);
                        }
                      );
                }
                u(l.arg);
              }
              var r;
              i(this, "_invoke", {
                value: function (e, o) {
                  function i() {
                    return new t(function (t, r) {
                      n(e, o, t, r);
                    });
                  }
                  return (r = r ? r.then(i, i) : i());
                },
              });
            }
            function A(t, n, r) {
              var o = y;
              return function (i, a) {
                if (o === b) throw Error("Generator is already running");
                if (o === v) {
                  if ("throw" === i) throw a;
                  return { value: e, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                  var u = r.delegate;
                  if (u) {
                    var c = F(u, r);
                    if (c) {
                      if (c === m) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (o === y) throw ((o = v), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  o = b;
                  var l = d(t, n, r);
                  if ("normal" === l.type) {
                    if (((o = r.done ? v : h), l.arg === m)) continue;
                    return { value: l.arg, done: r.done };
                  }
                  "throw" === l.type &&
                    ((o = v), (r.method = "throw"), (r.arg = l.arg));
                }
              };
            }
            function F(t, n) {
              var r = n.method,
                o = t.iterator[r];
              if (o === e)
                return (
                  (n.delegate = null),
                  ("throw" === r &&
                    t.iterator.return &&
                    ((n.method = "return"),
                    (n.arg = e),
                    F(t, n),
                    "throw" === n.method)) ||
                    ("return" !== r &&
                      ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "The iterator does not provide a '" + r + "' method"
                      )))),
                  m
                );
              var i = d(o, t.iterator, n.arg);
              if ("throw" === i.type)
                return (
                  (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
                );
              var a = i.arg;
              return a
                ? a.done
                  ? ((n[t.resultName] = a.value),
                    (n.next = t.nextLoc),
                    "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                    (n.delegate = null),
                    m)
                  : a
                : ((n.method = "throw"),
                  (n.arg = new TypeError("iterator result is not an object")),
                  (n.delegate = null),
                  m);
            }
            function k(e) {
              var t = { tryLoc: e[0] };
              1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function I(e) {
              var t = e.completion || {};
              (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function C(e) {
              (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(k, this),
                this.reset(!0);
            }
            function _(t) {
              if (t || "" === t) {
                var n = t[u];
                if (n) return n.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var r = -1,
                    i = function n() {
                      for (; ++r < t.length; )
                        if (o.call(t, r))
                          return (n.value = t[r]), (n.done = !1), n;
                      return (n.value = e), (n.done = !0), n;
                    };
                  return (i.next = i);
                }
              }
              throw new TypeError(c(t) + " is not iterable");
            }
            return (
              (g.prototype = O),
              i(S, "constructor", { value: O, configurable: !0 }),
              i(O, "constructor", { value: g, configurable: !0 }),
              (g.displayName = s(O, f, "GeneratorFunction")),
              (t.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                  !!t &&
                  (t === g || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (t.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, O)
                    : ((e.__proto__ = O), s(e, f, "GeneratorFunction")),
                  (e.prototype = Object.create(S)),
                  e
                );
              }),
              (t.awrap = function (e) {
                return { __await: e };
              }),
              x(j.prototype),
              s(j.prototype, l, function () {
                return this;
              }),
              (t.AsyncIterator = j),
              (t.async = function (e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new j(p(e, n, r, o), i);
                return t.isGeneratorFunction(n)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              x(S),
              s(S, f, "Generator"),
              s(S, u, function () {
                return this;
              }),
              s(S, "toString", function () {
                return "[object Generator]";
              }),
              (t.keys = function (e) {
                var t = Object(e),
                  n = [];
                for (var r in t) n.push(r);
                return (
                  n.reverse(),
                  function e() {
                    for (; n.length; ) {
                      var r = n.pop();
                      if (r in t) return (e.value = r), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (t.values = _),
              (C.prototype = {
                constructor: C,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = e),
                    this.tryEntries.forEach(I),
                    !t)
                  )
                    for (var n in this)
                      "t" === n.charAt(0) &&
                        o.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = e);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var n = this;
                  function r(r, o) {
                    return (
                      (u.type = "throw"),
                      (u.arg = t),
                      (n.next = r),
                      o && ((n.method = "next"), (n.arg = e)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      u = a.completion;
                    if ("root" === a.tryLoc) return r("end");
                    if (a.tryLoc <= this.prev) {
                      var c = o.call(a, "catchLoc"),
                        l = o.call(a, "finallyLoc");
                      if (c && l) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      } else if (c) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      } else {
                        if (!l)
                          throw Error("try statement without catch or finally");
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      o.call(r, "finallyLoc") &&
                      this.prev < r.finallyLoc
                    ) {
                      var i = r;
                      break;
                    }
                  }
                  i &&
                    ("break" === e || "continue" === e) &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    m
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), I(n), m;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var o = r.arg;
                        I(n);
                      }
                      return o;
                    }
                  }
                  throw Error("illegal catch attempt");
                },
                delegateYield: function (t, n, r) {
                  return (
                    (this.delegate = {
                      iterator: _(t),
                      resultName: n,
                      nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = e),
                    m
                  );
                },
              }),
              t
            );
          }
          function o(e, t, n, r, o, i, a) {
            try {
              var u = e[i](a),
                c = u.value;
            } catch (e) {
              return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, o);
          }
          function i(e) {
            return function () {
              var t = this,
                n = arguments;
              return new Promise(function (r, i) {
                var a = e.apply(t, n);
                function u(e) {
                  o(a, r, i, u, c, "next", e);
                }
                function c(e) {
                  o(a, r, i, u, c, "throw", e);
                }
                u(void 0);
              });
            };
          }
          function a(e, t, n) {
            return (
              (t = f(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          function c(e) {
            return (
              (c =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              c(e)
            );
          }
          function l(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, f(r.key), r);
            }
          }
          function f(e) {
            var t = (function (e, t) {
              if ("object" != c(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != c(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == c(t) ? t : t + "";
          }
          function s(e, t, n) {
            return (
              (t = d(t)),
              (function (e, t) {
                if (t && ("object" == c(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                p()
                  ? Reflect.construct(t, n || [], d(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function p() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (p = function () {
              return !!e;
            })();
          }
          function d(e) {
            return (
              (d = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              d(e)
            );
          }
          function y(e, t) {
            return (
              (y = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              y(e, t)
            );
          }
          function h(e, t, n) {
            return e.set(v(e, t), n), n;
          }
          function b(e, t) {
            return e.get(v(e, t));
          }
          function v(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var m = n(5616),
            w = n(2873).propagateEvent,
            g = n(4407).throwSanitizedError,
            O = n(4019),
            T = O.isFunction,
            E = O.kEnumerableProperty,
            P = n(9439),
            S = P.kNapiObj,
            x = P.kWorkletRelease,
            j = P.kOnStateChange,
            A = P.kOnComplete,
            F = P.kCheckProcessorsCreated;
          e.exports = function (e, t) {
            var n = new WeakMap(),
              o = (function (o) {
                function f() {
                  for (
                    var r, o = arguments.length, i = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    i[l] = arguments[l];
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, f),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'OfflineAudioContext': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (1 === arguments.length) {
                    var p = i[0];
                    if ("object" !== c(p))
                      throw new TypeError(
                        "Failed to construct 'OfflineAudioContext': argument 1 is not of type 'OfflineAudioContextOptions'"
                      );
                    if (void 0 === p.length)
                      throw new TypeError(
                        "Failed to construct 'OfflineAudioContext': Failed to read the 'length' property from 'OfflineAudioContextOptions': Required member is undefined."
                      );
                    if (void 0 === p.sampleRate)
                      throw new TypeError(
                        "Failed to construct 'OfflineAudioContext': Failed to read the 'sampleRate' property from 'OfflineAudioContextOptions': Required member is undefined."
                      );
                    void 0 === p.numberOfChannels && (p.numberOfChannels = 1),
                      (i = [p.numberOfChannels, p.length, p.sampleRate]);
                  }
                  var d,
                    y = (function (e, t) {
                      return (
                        (function (e) {
                          if (Array.isArray(e)) return e;
                        })(e) ||
                        (function (e, t) {
                          var n =
                            null == e
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                          if (null != n) {
                            var r,
                              o,
                              i,
                              a,
                              u = [],
                              c = !0,
                              l = !1;
                            try {
                              if (((i = (n = n.call(e)).next), 0 === t)) {
                                if (Object(n) !== n) return;
                                c = !1;
                              } else
                                for (
                                  ;
                                  !(c = (r = i.call(n)).done) &&
                                  (u.push(r.value), u.length !== t);
                                  c = !0
                                );
                            } catch (e) {
                              (l = !0), (o = e);
                            } finally {
                              try {
                                if (
                                  !c &&
                                  null != n.return &&
                                  ((a = n.return()), Object(a) !== a)
                                )
                                  return;
                              } finally {
                                if (l) throw o;
                              }
                            }
                            return u;
                          }
                        })(e, t) ||
                        (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? u(e, t)
                                : void 0
                            );
                          }
                        })(e, t) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                      );
                    })(i, 3),
                    v = y[0],
                    O = y[1],
                    T = y[2];
                  (v = m["unsigned long"](v, {
                    enforceRange: !0,
                    context:
                      "Failed to construct 'OfflineAudioContext': Failed to read the 'numberOfChannels' property from OfflineContextOptions; The provided value (".concat(
                        v,
                        ")"
                      ),
                  })),
                    (O = m["unsigned long"](O, {
                      enforceRange: !0,
                      context:
                        "Failed to construct 'OfflineAudioContext': Failed to read the 'length' property from OfflineContextOptions; The provided value (".concat(
                          O,
                          ")"
                        ),
                    })),
                    (T = m.float(T, {
                      context:
                        "Failed to construct 'OfflineAudioContext': Failed to read the 'sampleRate' property from OfflineContextOptions; The provided value (".concat(
                          T,
                          ")"
                        ),
                    }));
                  try {
                    d = new t.OfflineAudioContext(v, O, T);
                  } catch (e) {
                    g(e);
                  }
                  return (
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })((r = s(this, f, [a({}, S, d)])), n, null),
                    (r[S][j] = function (e, t) {
                      var n = new Event(t.type);
                      w(this, n);
                    }.bind(r)),
                    (r[S][A] = function (t, r) {
                      null === b(n, this) &&
                        h(
                          n,
                          this,
                          new e.AudioBuffer(a({}, S, r.renderedBuffer))
                        );
                      var o = new e.OfflineAudioCompletionEvent(r.type, {
                        renderedBuffer: b(n, this),
                      });
                      w(this, o);
                    }.bind(r)),
                    r
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && y(e, t);
                  })(f, o),
                  (p = f),
                  (d = [
                    {
                      key: "length",
                      get: function () {
                        if (!(this instanceof f))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'"
                          );
                        return this[S].length;
                      },
                    },
                    {
                      key: "oncomplete",
                      get: function () {
                        if (!(this instanceof f))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'"
                          );
                        return this._complete || null;
                      },
                      set: function (e) {
                        if (!(this instanceof f))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'"
                          );
                        (T(e) || null === e) && (this._complete = e);
                      },
                    },
                    {
                      key: "startRendering",
                      value:
                        ((E = i(
                          r().mark(function t() {
                            var o;
                            return r().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (this instanceof f) {
                                        t.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'"
                                      );
                                    case 2:
                                      return (
                                        (t.next = 4), this.audioWorklet[F]()
                                      );
                                    case 4:
                                      return (
                                        (t.prev = 4),
                                        (t.next = 7),
                                        this[S].startRendering()
                                      );
                                    case 7:
                                      (o = t.sent), (t.next = 13);
                                      break;
                                    case 10:
                                      (t.prev = 10),
                                        (t.t0 = t.catch(4)),
                                        g(t.t0);
                                    case 13:
                                      return (
                                        (t.next = 15), this.audioWorklet[x]()
                                      );
                                    case 15:
                                      return (
                                        null === b(n, this) &&
                                          h(
                                            n,
                                            this,
                                            new e.AudioBuffer(a({}, S, o))
                                          ),
                                        t.abrupt("return", b(n, this))
                                      );
                                    case 17:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [[4, 10]]
                            );
                          })
                        )),
                        function () {
                          return E.apply(this, arguments);
                        }),
                    },
                    {
                      key: "resume",
                      value:
                        ((O = i(
                          r().mark(function e() {
                            return r().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this instanceof f) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'"
                                      );
                                    case 2:
                                      return (
                                        (e.prev = 2),
                                        (e.next = 5),
                                        this[S].resume()
                                      );
                                    case 5:
                                      e.next = 10;
                                      break;
                                    case 7:
                                      (e.prev = 7),
                                        (e.t0 = e.catch(2)),
                                        g(e.t0);
                                    case 10:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 7]]
                            );
                          })
                        )),
                        function () {
                          return O.apply(this, arguments);
                        }),
                    },
                    {
                      key: "suspend",
                      value:
                        ((v = i(
                          r().mark(function e(t) {
                            var n = arguments;
                            return r().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this instanceof f) {
                                        e.next = 2;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Invalid Invocation: Value of 'this' must be of type 'OfflineAudioContext'"
                                      );
                                    case 2:
                                      if (!(n.length < 1)) {
                                        e.next = 4;
                                        break;
                                      }
                                      throw new TypeError(
                                        "Failed to execute 'suspend' on 'OfflineAudioContext': 1 argument required, but only ".concat(
                                          n.length,
                                          " present"
                                        )
                                      );
                                    case 4:
                                      return (
                                        (t = m.double(t, {
                                          context:
                                            "Failed to execute 'suspend' on 'OfflineAudioContext': argument 1",
                                        })),
                                        (e.prev = 5),
                                        (e.next = 8),
                                        this[S].suspend(t)
                                      );
                                    case 8:
                                      e.next = 13;
                                      break;
                                    case 10:
                                      (e.prev = 10),
                                        (e.t0 = e.catch(5)),
                                        g(e.t0);
                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[5, 10]]
                            );
                          })
                        )),
                        function (e) {
                          return v.apply(this, arguments);
                        }),
                    },
                  ]),
                  d && l(p.prototype, d),
                  Object.defineProperty(p, "prototype", { writable: !1 }),
                  p
                );
                var p, d, v, O, E;
              })(e.BaseAudioContext);
            return (
              Object.defineProperties(o, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                o.prototype,
                a(
                  a(
                    a(
                      a(
                        a(
                          a({}, Symbol.toStringTag, {
                            __proto__: null,
                            writable: !1,
                            enumerable: !1,
                            configurable: !0,
                            value: "OfflineAudioContext",
                          }),
                          "length",
                          E
                        ),
                        "oncomplete",
                        E
                      ),
                      "startRendering",
                      E
                    ),
                    "resume",
                    E
                  ),
                  "suspend",
                  E
                )
              ),
              o
            );
          };
        },
        5950: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function p(e, t) {
            return e.get(y(e, t));
          }
          function d(e, t, n) {
            return e.set(y(e, t), n), n;
          }
          function y(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var h = n(5616),
            b = (n(8955).toSanitizedSequence, n(4019)),
            v = (b.isFunction, b.kEnumerableProperty),
            m = n(4407).throwSanitizedError,
            w = n(9439),
            g = w.kNapiObj,
            O = (w.kAudioBuffer, n(7140));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = new WeakMap(),
              c = (function (c) {
                function l(i, c) {
                  var f;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, l),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'OscillatorNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'OscillatorNode': argument 1 is not of type BaseAudioContext"
                    );
                  var p,
                    y = {};
                  if (c && "object" !== o(c))
                    throw new TypeError(
                      "Failed to construct 'OscillatorNode': argument 2 is not of type 'OscillatorOptions'"
                    );
                  if (c && void 0 !== c.type) {
                    if (
                      ![
                        "sine",
                        "square",
                        "sawtooth",
                        "triangle",
                        "custom",
                      ].includes(c.type)
                    )
                      throw new TypeError(
                        "Failed to construct 'OscillatorNode': Failed to read the 'type' property from OscillatorOptions: The provided value '".concat(
                          c.type,
                          "' is not a valid enum value of type OscillatorType"
                        )
                      );
                    y.type = h.DOMString(c.type, {
                      context:
                        "Failed to construct 'OscillatorNode': Failed to read the 'type' property from OscillatorOptions: The provided value '".concat(
                          c.type,
                          "'"
                        ),
                    });
                  } else y.type = "sine";
                  if (
                    (c && void 0 !== c.frequency
                      ? (y.frequency = h.float(c.frequency, {
                          context:
                            "Failed to construct 'OscillatorNode': Failed to read the 'frequency' property from OscillatorOptions: The provided value (".concat(
                              c.frequency,
                              "})"
                            ),
                        }))
                      : (y.frequency = 440),
                    c && void 0 !== c.detune
                      ? (y.detune = h.float(c.detune, {
                          context:
                            "Failed to construct 'OscillatorNode': Failed to read the 'detune' property from OscillatorOptions: The provided value (".concat(
                              c.detune,
                              "})"
                            ),
                        }))
                      : (y.detune = 0),
                    c && void 0 !== c.periodicWave)
                  ) {
                    if (!(c.periodicWave instanceof e.PeriodicWave))
                      throw new TypeError(
                        "Failed to construct 'OscillatorNode': Failed to read the 'periodicWave' property from OscillatorOptions: The provided value '".concat(
                          c.periodicWave,
                          "' is not an instance of PeriodicWave"
                        )
                      );
                    y.periodicWave = c.periodicWave[g];
                  } else y.periodicWave = null;
                  if ("custom" === y.type && null === y.periodicWave)
                    throw new DOMException(
                      "Failed to construct 'OscillatorNode': A PeriodicWave must be specified if the type is set to 'custom'",
                      "InvalidStateError"
                    );
                  null !== y.periodicWave && (y.type = "custom"),
                    c &&
                      void 0 !== c.channelCount &&
                      (y.channelCount = h["unsigned long"](c.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'OscillatorNode': Failed to read the 'channelCount' property from OscillatorOptions: The provided value '".concat(
                            c.channelCount,
                            "'"
                          ),
                      })),
                    c &&
                      void 0 !== c.channelCountMode &&
                      (y.channelCountMode = h.DOMString(c.channelCountMode, {
                        context:
                          "Failed to construct 'OscillatorNode': Failed to read the 'channelCount' property from OscillatorOptions: The provided value '".concat(
                            c.channelCountMode,
                            "'"
                          ),
                      })),
                    c &&
                      void 0 !== c.channelInterpretation &&
                      (y.channelInterpretation = h.DOMString(
                        c.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'OscillatorNode': Failed to read the 'channelInterpretation' property from OscillatorOptions: The provided value '".concat(
                              c.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    p = new t.OscillatorNode(i[g], y);
                  } catch (e) {
                    m(e);
                  }
                  return (
                    s((f = u(this, l, [i, r({}, g, p)])), n, null),
                    s(f, a, null),
                    d(n, f, new e.AudioParam(r({}, g, f[g].frequency))),
                    d(a, f, new e.AudioParam(r({}, g, f[g].detune))),
                    f
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(l, c),
                  (y = l),
                  (b = [
                    {
                      key: "frequency",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OscillatorNode'"
                          );
                        return p(n, this);
                      },
                    },
                    {
                      key: "detune",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OscillatorNode'"
                          );
                        return p(a, this);
                      },
                    },
                    {
                      key: "type",
                      get: function () {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OscillatorNode'"
                          );
                        return this[g].type;
                      },
                      set: function (e) {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OscillatorNode'"
                          );
                        if (
                          [
                            "sine",
                            "square",
                            "sawtooth",
                            "triangle",
                            "custom",
                          ].includes(e)
                        )
                          try {
                            this[g].type = e;
                          } catch (e) {
                            m(e);
                          }
                        else
                          console.warn(
                            "Failed to set the 'type' property on 'OscillatorNode': Value '".concat(
                              e,
                              "' is not a valid 'OscillatorType' enum value"
                            )
                          );
                      },
                    },
                    {
                      key: "setPeriodicWave",
                      value: function (t) {
                        if (!(this instanceof l))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'OscillatorNode'"
                          );
                        if (arguments.length < 1)
                          throw new TypeError(
                            "Failed to execute 'setPeriodicWave' on 'OscillatorNode': 1 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        if (!(t instanceof e.PeriodicWave))
                          throw new TypeError(
                            "Failed to execute 'setPeriodicWave' on 'OscillatorNode': Parameter 1 is not of type 'PeriodicWave'"
                          );
                        t = t[g];
                        try {
                          return this[g].setPeriodicWave(t);
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                  ]),
                  b && i(y.prototype, b),
                  Object.defineProperty(y, "prototype", { writable: !1 }),
                  y
                );
                var y, b;
              })(O);
            return (
              Object.defineProperties(c, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                c.prototype,
                r(
                  r(
                    r(
                      r(
                        r({}, Symbol.toStringTag, {
                          __proto__: null,
                          writable: !1,
                          enumerable: !1,
                          configurable: !0,
                          value: "OscillatorNode",
                        }),
                        "frequency",
                        v
                      ),
                      "detune",
                      v
                    ),
                    "type",
                    v
                  ),
                  "setPeriodicWave",
                  v
                )
              ),
              c
            );
          };
        },
        6436: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, n);
          }
          function p(e, t) {
            return e.get(y(e, t));
          }
          function d(e, t, n) {
            return e.set(y(e, t), n), n;
          }
          function y(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var h = n(5616),
            b = (n(8955).toSanitizedSequence, n(4019)),
            v = (b.isFunction, b.kEnumerableProperty),
            m = n(4407).throwSanitizedError,
            w = n(9439),
            g = w.kNapiObj,
            O = (w.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n,
              a = new WeakMap(),
              c = new WeakMap(),
              l = new WeakMap(),
              y = new WeakMap(),
              b = new WeakMap(),
              w = new WeakMap(),
              T = (function (n) {
                function v(n, i) {
                  var f;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, v),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'PannerNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(n instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'PannerNode': argument 1 is not of type BaseAudioContext"
                    );
                  var p,
                    O = {};
                  if (i && "object" !== o(i))
                    throw new TypeError(
                      "Failed to construct 'PannerNode': argument 2 is not of type 'PannerOptions'"
                    );
                  if (i && void 0 !== i.panningModel) {
                    if (!["equalpower", "HRTF"].includes(i.panningModel))
                      throw new TypeError(
                        "Failed to construct 'PannerNode': Failed to read the 'panningModel' property from PannerOptions: The provided value '".concat(
                          i.panningModel,
                          "' is not a valid enum value of type PanningModelType"
                        )
                      );
                    O.panningModel = h.DOMString(i.panningModel, {
                      context:
                        "Failed to construct 'PannerNode': Failed to read the 'panningModel' property from PannerOptions: The provided value '".concat(
                          i.panningModel,
                          "'"
                        ),
                    });
                  } else O.panningModel = "equalpower";
                  if (i && void 0 !== i.distanceModel) {
                    if (
                      !["linear", "inverse", "exponential"].includes(
                        i.distanceModel
                      )
                    )
                      throw new TypeError(
                        "Failed to construct 'PannerNode': Failed to read the 'distanceModel' property from PannerOptions: The provided value '".concat(
                          i.distanceModel,
                          "' is not a valid enum value of type DistanceModelType"
                        )
                      );
                    O.distanceModel = h.DOMString(i.distanceModel, {
                      context:
                        "Failed to construct 'PannerNode': Failed to read the 'distanceModel' property from PannerOptions: The provided value '".concat(
                          i.distanceModel,
                          "'"
                        ),
                    });
                  } else O.distanceModel = "inverse";
                  i && void 0 !== i.positionX
                    ? (O.positionX = h.float(i.positionX, {
                        context:
                          "Failed to construct 'PannerNode': Failed to read the 'positionX' property from PannerOptions: The provided value (".concat(
                            i.positionX,
                            "})"
                          ),
                      }))
                    : (O.positionX = 0),
                    i && void 0 !== i.positionY
                      ? (O.positionY = h.float(i.positionY, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'positionY' property from PannerOptions: The provided value (".concat(
                              i.positionY,
                              "})"
                            ),
                        }))
                      : (O.positionY = 0),
                    i && void 0 !== i.positionZ
                      ? (O.positionZ = h.float(i.positionZ, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'positionZ' property from PannerOptions: The provided value (".concat(
                              i.positionZ,
                              "})"
                            ),
                        }))
                      : (O.positionZ = 0),
                    i && void 0 !== i.orientationX
                      ? (O.orientationX = h.float(i.orientationX, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'orientationX' property from PannerOptions: The provided value (".concat(
                              i.orientationX,
                              "})"
                            ),
                        }))
                      : (O.orientationX = 1),
                    i && void 0 !== i.orientationY
                      ? (O.orientationY = h.float(i.orientationY, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'orientationY' property from PannerOptions: The provided value (".concat(
                              i.orientationY,
                              "})"
                            ),
                        }))
                      : (O.orientationY = 0),
                    i && void 0 !== i.orientationZ
                      ? (O.orientationZ = h.float(i.orientationZ, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'orientationZ' property from PannerOptions: The provided value (".concat(
                              i.orientationZ,
                              "})"
                            ),
                        }))
                      : (O.orientationZ = 0),
                    i && void 0 !== i.refDistance
                      ? (O.refDistance = h.double(i.refDistance, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'refDistance' property from PannerOptions: The provided value (".concat(
                              i.refDistance,
                              "})"
                            ),
                        }))
                      : (O.refDistance = 1),
                    i && void 0 !== i.maxDistance
                      ? (O.maxDistance = h.double(i.maxDistance, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'maxDistance' property from PannerOptions: The provided value (".concat(
                              i.maxDistance,
                              "})"
                            ),
                        }))
                      : (O.maxDistance = 1e4),
                    i && void 0 !== i.rolloffFactor
                      ? (O.rolloffFactor = h.double(i.rolloffFactor, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'rolloffFactor' property from PannerOptions: The provided value (".concat(
                              i.rolloffFactor,
                              "})"
                            ),
                        }))
                      : (O.rolloffFactor = 1),
                    i && void 0 !== i.coneInnerAngle
                      ? (O.coneInnerAngle = h.double(i.coneInnerAngle, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'coneInnerAngle' property from PannerOptions: The provided value (".concat(
                              i.coneInnerAngle,
                              "})"
                            ),
                        }))
                      : (O.coneInnerAngle = 360),
                    i && void 0 !== i.coneOuterAngle
                      ? (O.coneOuterAngle = h.double(i.coneOuterAngle, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'coneOuterAngle' property from PannerOptions: The provided value (".concat(
                              i.coneOuterAngle,
                              "})"
                            ),
                        }))
                      : (O.coneOuterAngle = 360),
                    i && void 0 !== i.coneOuterGain
                      ? (O.coneOuterGain = h.double(i.coneOuterGain, {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'coneOuterGain' property from PannerOptions: The provided value (".concat(
                              i.coneOuterGain,
                              "})"
                            ),
                        }))
                      : (O.coneOuterGain = 0),
                    i &&
                      void 0 !== i.channelCount &&
                      (O.channelCount = h["unsigned long"](i.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'PannerNode': Failed to read the 'channelCount' property from PannerOptions: The provided value '".concat(
                            i.channelCount,
                            "'"
                          ),
                      })),
                    i &&
                      void 0 !== i.channelCountMode &&
                      (O.channelCountMode = h.DOMString(i.channelCountMode, {
                        context:
                          "Failed to construct 'PannerNode': Failed to read the 'channelCount' property from PannerOptions: The provided value '".concat(
                            i.channelCountMode,
                            "'"
                          ),
                      })),
                    i &&
                      void 0 !== i.channelInterpretation &&
                      (O.channelInterpretation = h.DOMString(
                        i.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'PannerNode': Failed to read the 'channelInterpretation' property from PannerOptions: The provided value '".concat(
                              i.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    p = new t.PannerNode(n[g], O);
                  } catch (e) {
                    m(e);
                  }
                  return (
                    s((f = u(this, v, [n, r({}, g, p)])), a, null),
                    s(f, c, null),
                    s(f, l, null),
                    s(f, y, null),
                    s(f, b, null),
                    s(f, w, null),
                    d(a, f, new e.AudioParam(r({}, g, f[g].positionX))),
                    d(c, f, new e.AudioParam(r({}, g, f[g].positionY))),
                    d(l, f, new e.AudioParam(r({}, g, f[g].positionZ))),
                    d(y, f, new e.AudioParam(r({}, g, f[g].orientationX))),
                    d(b, f, new e.AudioParam(r({}, g, f[g].orientationY))),
                    d(w, f, new e.AudioParam(r({}, g, f[g].orientationZ))),
                    f
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(v, n),
                  (O = v),
                  (T = [
                    {
                      key: "positionX",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return p(a, this);
                      },
                    },
                    {
                      key: "positionY",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return p(c, this);
                      },
                    },
                    {
                      key: "positionZ",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return p(l, this);
                      },
                    },
                    {
                      key: "orientationX",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return p(y, this);
                      },
                    },
                    {
                      key: "orientationY",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return p(b, this);
                      },
                    },
                    {
                      key: "orientationZ",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return p(w, this);
                      },
                    },
                    {
                      key: "panningModel",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].panningModel;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        if (["equalpower", "HRTF"].includes(e))
                          try {
                            this[g].panningModel = e;
                          } catch (e) {
                            m(e);
                          }
                        else
                          console.warn(
                            "Failed to set the 'panningModel' property on 'PannerNode': Value '".concat(
                              e,
                              "' is not a valid 'PanningModelType' enum value"
                            )
                          );
                      },
                    },
                    {
                      key: "distanceModel",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].distanceModel;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        if (["linear", "inverse", "exponential"].includes(e))
                          try {
                            this[g].distanceModel = e;
                          } catch (e) {
                            m(e);
                          }
                        else
                          console.warn(
                            "Failed to set the 'distanceModel' property on 'PannerNode': Value '".concat(
                              e,
                              "' is not a valid 'DistanceModelType' enum value"
                            )
                          );
                      },
                    },
                    {
                      key: "refDistance",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].refDistance;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'refDistance' property on 'PannerNode': Value",
                        });
                        try {
                          this[g].refDistance = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "maxDistance",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].maxDistance;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'maxDistance' property on 'PannerNode': Value",
                        });
                        try {
                          this[g].maxDistance = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "rolloffFactor",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].rolloffFactor;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'rolloffFactor' property on 'PannerNode': Value",
                        });
                        try {
                          this[g].rolloffFactor = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "coneInnerAngle",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].coneInnerAngle;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'coneInnerAngle' property on 'PannerNode': Value",
                        });
                        try {
                          this[g].coneInnerAngle = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "coneOuterAngle",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].coneOuterAngle;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'coneOuterAngle' property on 'PannerNode': Value",
                        });
                        try {
                          this[g].coneOuterAngle = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "coneOuterGain",
                      get: function () {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        return this[g].coneOuterGain;
                      },
                      set: function (e) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        e = h.double(e, {
                          context:
                            "Failed to set the 'coneOuterGain' property on 'PannerNode': Value",
                        });
                        try {
                          this[g].coneOuterGain = e;
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "setPosition",
                      value: function (e, t, n) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        if (arguments.length < 3)
                          throw new TypeError(
                            "Failed to execute 'setPosition' on 'PannerNode': 3 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        (e = h.float(e, {
                          context:
                            "Failed to execute 'setPosition' on 'PannerNode': Parameter 1",
                        })),
                          (t = h.float(t, {
                            context:
                              "Failed to execute 'setPosition' on 'PannerNode': Parameter 2",
                          })),
                          (n = h.float(n, {
                            context:
                              "Failed to execute 'setPosition' on 'PannerNode': Parameter 3",
                          }));
                        try {
                          return this[g].setPosition(e, t, n);
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                    {
                      key: "setOrientation",
                      value: function (e, t, n) {
                        if (!(this instanceof v))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'PannerNode'"
                          );
                        if (arguments.length < 3)
                          throw new TypeError(
                            "Failed to execute 'setOrientation' on 'PannerNode': 3 argument required, but only ".concat(
                              arguments.length,
                              " present"
                            )
                          );
                        (e = h.float(e, {
                          context:
                            "Failed to execute 'setOrientation' on 'PannerNode': Parameter 1",
                        })),
                          (t = h.float(t, {
                            context:
                              "Failed to execute 'setOrientation' on 'PannerNode': Parameter 2",
                          })),
                          (n = h.float(n, {
                            context:
                              "Failed to execute 'setOrientation' on 'PannerNode': Parameter 3",
                          }));
                        try {
                          return this[g].setOrientation(e, t, n);
                        } catch (e) {
                          m(e);
                        }
                      },
                    },
                  ]),
                  T && i(O.prototype, T),
                  Object.defineProperty(O, "prototype", { writable: !1 }),
                  O
                );
                var O, T;
              })(O);
            return (
              Object.defineProperties(T, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                T.prototype,
                (r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r(
                              r(
                                r(
                                  r((n = {}), Symbol.toStringTag, {
                                    __proto__: null,
                                    writable: !1,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: "PannerNode",
                                  }),
                                  "positionX",
                                  v
                                ),
                                "positionY",
                                v
                              ),
                              "positionZ",
                              v
                            ),
                            "orientationX",
                            v
                          ),
                          "orientationY",
                          v
                        ),
                        "orientationZ",
                        v
                      ),
                      "panningModel",
                      v
                    ),
                    "distanceModel",
                    v
                  ),
                  "refDistance",
                  v
                ),
                r(
                  r(
                    r(
                      r(
                        r(
                          r(r(n, "maxDistance", v), "rolloffFactor", v),
                          "coneInnerAngle",
                          v
                        ),
                        "coneOuterAngle",
                        v
                      ),
                      "coneOuterGain",
                      v
                    ),
                    "setPosition",
                    v
                  ),
                  "setOrientation",
                  v
                ))
              ),
              T
            );
          };
        },
        2864: (e, t, n) => {
          function r(e) {
            return (
              (r =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              r(e)
            );
          }
          function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
            }
            return n;
          }
          function i(e, t, n) {
            return (
              (t = c(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, c(r.key), r);
            }
          }
          function u(e, t, n) {
            return (
              t && a(e.prototype, t),
              n && a(e, n),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              e
            );
          }
          function c(e) {
            var t = (function (e, t) {
              if ("object" != r(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var o = n.call(e, "string");
                if ("object" != r(o)) return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == r(t) ? t : t + "";
          }
          var l = n(5616),
            f = n(4407).throwSanitizedError,
            s = n(8955).toSanitizedSequence,
            p = n(9439).kNapiObj,
            d = n(4019).kHiddenProperty;
          e.exports = function (e, t) {
            var n = u(function n(r, a) {
              if (
                ((function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, n),
                arguments.length < 1)
              )
                throw new TypeError(
                  "Failed to construct 'PeriodicWave': 1 argument required, but only ".concat(
                    arguments.length,
                    " present"
                  )
                );
              if (!(r instanceof e.BaseAudioContext))
                throw new TypeError(
                  "Failed to construct 'PeriodicWave': argument 1 is not of type BaseAudioContext"
                );
              var u = {};
              if (a && "real" in a)
                try {
                  u.real = s(a.real, Float32Array);
                } catch (e) {
                  throw new TypeError(
                    "Failed to construct 'PeriodicWave': Failed to read the 'real' property from PeriodicWaveOptions: The provided value ".concat(
                      e.message
                    )
                  );
                }
              if (a && "imag" in a)
                try {
                  u.imag = s(a.imag, Float32Array);
                } catch (e) {
                  throw new TypeError(
                    "Failed to construct 'PeriodicWave': Failed to read the 'imag' property from PeriodicWaveOptions: The provided value ".concat(
                      e.message
                    )
                  );
                }
              a && "disableNormalization" in a
                ? (u.disableNormalization = l.boolean(a.disableNormalization, {
                    context:
                      "Failed to construct 'PeriodicWave': Failed to read the 'imag' property from PeriodicWaveOptions: The provided value",
                  }))
                : u.disableNormalization;
              try {
                var c = new t.PeriodicWave(r[p], u);
                Object.defineProperty(
                  this,
                  p,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? o(Object(n), !0).forEach(function (t) {
                            i(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : o(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({ value: c }, d)
                );
              } catch (e) {
                f(e);
              }
            });
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                i({}, Symbol.toStringTag, {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: "PeriodicWave",
                })
              ),
              n
            );
          };
        },
        3679: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = (n(8955).toSanitizedSequence, n(4019)),
            y = d.isFunction,
            h = d.kEnumerableProperty,
            b = n(4407).throwSanitizedError,
            v = n(9439),
            m = v.kNapiObj,
            w = (v.kAudioBuffer, v.kOnAudioProcess),
            g = n(2873).propagateEvent,
            O = n(8536);
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = (function (a) {
                function c(i, a) {
                  var l;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, c),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'ScriptProcessorNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'ScriptProcessorNode': argument 1 is not of type BaseAudioContext"
                    );
                  var f,
                    s = {};
                  if (a && "object" !== o(a))
                    throw new TypeError(
                      "Failed to construct 'ScriptProcessorNode': argument 2 is not of type 'ScriptProcessorNodeOptions'"
                    );
                  a && void 0 !== a.bufferSize && 0 !== a.bufferSize
                    ? (s.bufferSize = p["unsigned long"](a.bufferSize, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'ScriptProcessorNode': Failed to read the 'bufferSize' property from ScriptProcessorNodeOptions: The provided value '".concat(
                            a.bufferSize,
                            "'"
                          ),
                      }))
                    : (s.bufferSize = 256),
                    a && void 0 !== a.numberOfInputChannels
                      ? (s.numberOfInputChannels = p["unsigned long"](
                          a.numberOfInputChannels,
                          {
                            enforceRange: !0,
                            context:
                              "Failed to construct 'ScriptProcessorNode': Failed to read the 'numberOfInputChannels' property from ScriptProcessorNodeOptions: The provided value '".concat(
                                a.numberOfInputChannels,
                                "'"
                              ),
                          }
                        ))
                      : (s.numberOfInputChannels = 2),
                    a && void 0 !== a.numberOfOutputChannels
                      ? (s.numberOfOutputChannels = p["unsigned long"](
                          a.numberOfOutputChannels,
                          {
                            enforceRange: !0,
                            context:
                              "Failed to construct 'ScriptProcessorNode': Failed to read the 'numberOfOutputChannels' property from ScriptProcessorNodeOptions: The provided value '".concat(
                                a.numberOfOutputChannels,
                                "'"
                              ),
                          }
                        ))
                      : (s.numberOfOutputChannels = 2),
                    a &&
                      void 0 !== a.channelCount &&
                      (s.channelCount = p["unsigned long"](a.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'ScriptProcessorNode': Failed to read the 'channelCount' property from ScriptProcessorNodeOptions: The provided value '".concat(
                            a.channelCount,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelCountMode &&
                      (s.channelCountMode = p.DOMString(a.channelCountMode, {
                        context:
                          "Failed to construct 'ScriptProcessorNode': Failed to read the 'channelCount' property from ScriptProcessorNodeOptions: The provided value '".concat(
                            a.channelCountMode,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelInterpretation &&
                      (s.channelInterpretation = p.DOMString(
                        a.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'ScriptProcessorNode': Failed to read the 'channelInterpretation' property from ScriptProcessorNodeOptions: The provided value '".concat(
                              a.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    f = new t.ScriptProcessorNode(i[m], s);
                  } catch (e) {
                    b(e);
                  }
                  return (
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })((l = u(this, c, [i, r({}, m, f)])), n, null),
                    (l[m][w] = function (t, n) {
                      var o = {
                          playbackTime: n.playbackTime,
                          inputBuffer: new e.AudioBuffer(
                            r({}, m, n.inputBuffer)
                          ),
                          outputBuffer: new e.AudioBuffer(
                            r({}, m, n.outputBuffer)
                          ),
                        },
                        i = new e.AudioProcessingEvent("audioprocess", o);
                      g(this, i);
                    }.bind(l)),
                    l[m].listen_to_events(),
                    l
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(c, a),
                  (l = c),
                  (d = [
                    {
                      key: "bufferSize",
                      get: function () {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'ScriptProcessorNode'"
                          );
                        return this[m].bufferSize;
                      },
                    },
                    {
                      key: "onaudioprocess",
                      get: function () {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'ScriptProcessorNode'"
                          );
                        return (e = n).get(s(e, this));
                        var e;
                      },
                      set: function (e) {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'ScriptProcessorNode'"
                          );
                        var t, r;
                        (y(e) || null === e) &&
                          ((r = e), (t = n).set(s(t, this), r));
                      },
                    },
                  ]) && i(l.prototype, d),
                  Object.defineProperty(l, "prototype", { writable: !1 }),
                  l
                );
                var l, d;
              })(O);
            return (
              Object.defineProperties(a, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 0,
                },
              }),
              Object.defineProperties(
                a.prototype,
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "ScriptProcessorNode",
                    }),
                    "bufferSize",
                    h
                  ),
                  "onaudioprocess",
                  h
                )
              ),
              a
            );
          };
        },
        3616: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          function s(e, t, n) {
            if ("function" == typeof e ? e === t : e.has(t))
              return arguments.length < 3 ? t : n;
            throw new TypeError(
              "Private element is not present on this object"
            );
          }
          var p = n(5616),
            d = (n(8955).toSanitizedSequence, n(4019)),
            y = (d.isFunction, d.kEnumerableProperty),
            h = n(4407).throwSanitizedError,
            b = n(9439),
            v = b.kNapiObj,
            m = (b.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = new WeakMap(),
              a = (function (a) {
                function c(i, a) {
                  var l;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, c),
                    arguments.length < 1)
                  )
                    throw new TypeError(
                      "Failed to construct 'StereoPannerNode': 1 argument required, but only ".concat(
                        arguments.length,
                        " present"
                      )
                    );
                  if (!(i instanceof e.BaseAudioContext))
                    throw new TypeError(
                      "Failed to construct 'StereoPannerNode': argument 1 is not of type BaseAudioContext"
                    );
                  var f,
                    d,
                    y,
                    b,
                    m = {};
                  if (a && "object" !== o(a))
                    throw new TypeError(
                      "Failed to construct 'StereoPannerNode': argument 2 is not of type 'StereoPannerOptions'"
                    );
                  a && void 0 !== a.pan
                    ? (m.pan = p.float(a.pan, {
                        context:
                          "Failed to construct 'StereoPannerNode': Failed to read the 'pan' property from StereoPannerOptions: The provided value (".concat(
                            a.pan,
                            "})"
                          ),
                      }))
                    : (m.pan = 0),
                    a &&
                      void 0 !== a.channelCount &&
                      (m.channelCount = p["unsigned long"](a.channelCount, {
                        enforceRange: !0,
                        context:
                          "Failed to construct 'StereoPannerNode': Failed to read the 'channelCount' property from StereoPannerOptions: The provided value '".concat(
                            a.channelCount,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelCountMode &&
                      (m.channelCountMode = p.DOMString(a.channelCountMode, {
                        context:
                          "Failed to construct 'StereoPannerNode': Failed to read the 'channelCount' property from StereoPannerOptions: The provided value '".concat(
                            a.channelCountMode,
                            "'"
                          ),
                      })),
                    a &&
                      void 0 !== a.channelInterpretation &&
                      (m.channelInterpretation = p.DOMString(
                        a.channelInterpretation,
                        {
                          context:
                            "Failed to construct 'StereoPannerNode': Failed to read the 'channelInterpretation' property from StereoPannerOptions: The provided value '".concat(
                              a.channelInterpretation,
                              "'"
                            ),
                        }
                      ));
                  try {
                    f = new t.StereoPannerNode(i[v], m);
                  } catch (e) {
                    h(e);
                  }
                  return (
                    (function (e, t, n) {
                      (function (e, t) {
                        if (t.has(e))
                          throw new TypeError(
                            "Cannot initialize the same private elements twice on an object"
                          );
                      })(e, t),
                        t.set(e, n);
                    })((l = u(this, c, [i, r({}, v, f)])), n, null),
                    (d = n),
                    (y = l),
                    (b = new e.AudioParam(r({}, v, l[v].pan))),
                    d.set(s(d, y), b),
                    l
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t && f(e, t);
                  })(c, a),
                  (l = c),
                  (d = [
                    {
                      key: "pan",
                      get: function () {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Invalid Invocation: Value of 'this' must be of type 'StereoPannerNode'"
                          );
                        return (e = n).get(s(e, this));
                        var e;
                      },
                    },
                  ]) && i(l.prototype, d),
                  Object.defineProperty(l, "prototype", { writable: !1 }),
                  l
                );
                var l, d;
              })(m);
            return (
              Object.defineProperties(a, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                a.prototype,
                r(
                  r({}, Symbol.toStringTag, {
                    __proto__: null,
                    writable: !1,
                    enumerable: !1,
                    configurable: !0,
                    value: "StereoPannerNode",
                  }),
                  "pan",
                  y
                )
              ),
              a
            );
          };
        },
        544: (e, t, n) => {
          function r(e, t, n) {
            return (
              (t = a(t)) in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              o(e)
            );
          }
          function i(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, a(r.key), r);
            }
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != o(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" == o(t) ? t : t + "";
          }
          function u(e, t, n) {
            return (
              (t = l(t)),
              (function (e, t) {
                if (t && ("object" == o(t) || "function" == typeof t)) return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(e);
              })(
                e,
                c()
                  ? Reflect.construct(t, n || [], l(e).constructor)
                  : t.apply(e, n)
              )
            );
          }
          function c() {
            try {
              var e = !Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
            } catch (e) {}
            return (c = function () {
              return !!e;
            })();
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function f(e, t) {
            return (
              (f = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              f(e, t)
            );
          }
          var s = n(5616),
            p = n(8955).toSanitizedSequence,
            d = n(4019),
            y = (d.isFunction, d.kEnumerableProperty),
            h = n(4407).throwSanitizedError,
            b = n(9439),
            v = b.kNapiObj,
            m = (b.kAudioBuffer, n(8536));
          e.exports = function (e, t) {
            var n = (function (n) {
              function a(n, i) {
                if (
                  ((function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, a),
                  arguments.length < 1)
                )
                  throw new TypeError(
                    "Failed to construct 'WaveShaperNode': 1 argument required, but only ".concat(
                      arguments.length,
                      " present"
                    )
                  );
                if (!(n instanceof e.BaseAudioContext))
                  throw new TypeError(
                    "Failed to construct 'WaveShaperNode': argument 1 is not of type BaseAudioContext"
                  );
                var c,
                  l = {};
                if (i && "object" !== o(i))
                  throw new TypeError(
                    "Failed to construct 'WaveShaperNode': argument 2 is not of type 'WaveShaperOptions'"
                  );
                if (i && void 0 !== i.curve)
                  try {
                    l.curve = p(i.curve, Float32Array);
                  } catch (e) {
                    throw new TypeError(
                      "Failed to construct 'WaveShaperNode': Failed to read the 'curve' property from WaveShaperOptions: The provided value ".concat(
                        e.message
                      )
                    );
                  }
                else l.curve = null;
                if (i && void 0 !== i.oversample) {
                  if (!["none", "2x", "4x"].includes(i.oversample))
                    throw new TypeError(
                      "Failed to construct 'WaveShaperNode': Failed to read the 'oversample' property from WaveShaperOptions: The provided value '".concat(
                        i.oversample,
                        "' is not a valid enum value of type OverSampleType"
                      )
                    );
                  l.oversample = s.DOMString(i.oversample, {
                    context:
                      "Failed to construct 'WaveShaperNode': Failed to read the 'oversample' property from WaveShaperOptions: The provided value '".concat(
                        i.oversample,
                        "'"
                      ),
                  });
                } else l.oversample = "none";
                i &&
                  void 0 !== i.channelCount &&
                  (l.channelCount = s["unsigned long"](i.channelCount, {
                    enforceRange: !0,
                    context:
                      "Failed to construct 'WaveShaperNode': Failed to read the 'channelCount' property from WaveShaperOptions: The provided value '".concat(
                        i.channelCount,
                        "'"
                      ),
                  })),
                  i &&
                    void 0 !== i.channelCountMode &&
                    (l.channelCountMode = s.DOMString(i.channelCountMode, {
                      context:
                        "Failed to construct 'WaveShaperNode': Failed to read the 'channelCount' property from WaveShaperOptions: The provided value '".concat(
                          i.channelCountMode,
                          "'"
                        ),
                    })),
                  i &&
                    void 0 !== i.channelInterpretation &&
                    (l.channelInterpretation = s.DOMString(
                      i.channelInterpretation,
                      {
                        context:
                          "Failed to construct 'WaveShaperNode': Failed to read the 'channelInterpretation' property from WaveShaperOptions: The provided value '".concat(
                            i.channelInterpretation,
                            "'"
                          ),
                      }
                    ));
                try {
                  c = new t.WaveShaperNode(n[v], l);
                } catch (e) {
                  h(e);
                }
                return u(this, a, [n, r({}, v, c)]);
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t && f(e, t);
                })(a, n),
                (c = a),
                (l = [
                  {
                    key: "curve",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'WaveShaperNode'"
                        );
                      return this[v].curve;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'WaveShaperNode'"
                        );
                      if (null !== e) {
                        if (!(e instanceof Float32Array))
                          throw new TypeError(
                            "Failed to set the 'curve' property on 'WaveShaperNode': Value is not a valid 'Float32Array' value"
                          );
                        try {
                          this[v].curve = e;
                        } catch (e) {
                          h(e);
                        }
                      } else
                        console.warn(
                          "Setting the 'curve' property on 'WaveShaperNode' to 'null' is not supported yet"
                        );
                    },
                  },
                  {
                    key: "oversample",
                    get: function () {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'WaveShaperNode'"
                        );
                      return this[v].oversample;
                    },
                    set: function (e) {
                      if (!(this instanceof a))
                        throw new TypeError(
                          "Invalid Invocation: Value of 'this' must be of type 'WaveShaperNode'"
                        );
                      if (["none", "2x", "4x"].includes(e))
                        try {
                          this[v].oversample = e;
                        } catch (e) {
                          h(e);
                        }
                      else
                        console.warn(
                          "Failed to set the 'oversample' property on 'WaveShaperNode': Value '".concat(
                            e,
                            "' is not a valid 'OverSampleType' enum value"
                          )
                        );
                    },
                  },
                ]) && i(c.prototype, l),
                Object.defineProperty(c, "prototype", { writable: !1 }),
                c
              );
              var c, l;
            })(m);
            return (
              Object.defineProperties(n, {
                length: {
                  __proto__: null,
                  writable: !1,
                  enumerable: !1,
                  configurable: !0,
                  value: 1,
                },
              }),
              Object.defineProperties(
                n.prototype,
                r(
                  r(
                    r({}, Symbol.toStringTag, {
                      __proto__: null,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                      value: "WaveShaperNode",
                    }),
                    "curve",
                    y
                  ),
                  "oversample",
                  y
                )
              ),
              n
            );
          };
        },
        8955: (e, t) => {
          t.toSanitizedSequence = function (e, t) {
            if (
              !(
                (e.buffer && e.buffer instanceof ArrayBuffer) ||
                Array.isArray(e)
              )
            )
              throw new TypeError(
                "cannot be converted to sequence of ".concat(t)
              );
            e = new t(e);
            for (var n = 0; n < e.length; n++)
              if (!Number.isFinite(e[n]))
                throw new TypeError("should contain only finite values");
            return e;
          };
        },
        4407: (e, t, n) => {
          var r = n(857).EOL,
            o = n(6928).join("node-web-audio-api", "js"),
            i = new RegExp(o);
          function a(e, t) {
            for (
              var n = e.stack.replace(e.message, t.message).split(r),
                o = n.length - 1;
              o > 0;
              o--
            ) {
              var a = n[o];
              i.test(a) && n.splice(o, 1);
            }
            t.stack = n.join(r);
          }
          t.throwSanitizedError = function (e) {
            var t = e.message;
            if (
              (t = (t = (t = t.replace(
                "assertion `left != right` failed: ",
                ""
              )).replace("assertion `left == right` failed: ", "")).split(
                r
              )[0]).startsWith("TypeError")
            ) {
              var n = t.replace(/^TypeError - /, ""),
                o = new TypeError(n);
              throw (a(e, o), o);
            }
            if (t.startsWith("RangeError")) {
              var i = t.replace(/^RangeError - /, ""),
                u = new RangeError(i);
              throw (a(e, u), u);
            }
            if (t.startsWith("NotSupportedError")) {
              var c = t.replace(/^NotSupportedError - /, ""),
                l = new DOMException(c, "NotSupportedError");
              throw (a(e, l), l);
            }
            if (t.startsWith("InvalidStateError")) {
              var f = t.replace(/^InvalidStateError - /, ""),
                s = new DOMException(f, "InvalidStateError");
              throw (a(e, s), s);
            }
            if (t.startsWith("IndexSizeError")) {
              var p = t.replace(/^IndexSizeError - /, ""),
                d = new DOMException(p, "IndexSizeError");
              throw (a(e, d), d);
            }
            if (t.startsWith("InvalidAccessError")) {
              var y = t.replace(/^InvalidAccessError - /, ""),
                h = new DOMException(y, "InvalidAccessError");
              throw (a(e, h), h);
            }
            if (t.startsWith("NotFoundError")) {
              var b = t.replace(/^NotFoundError - /, ""),
                v = new DOMException(b, "NotFoundError");
              throw (a(e, v), v);
            }
            throw (console.warn("[lib/errors.js] Unexpected Rust error", e), e);
          };
        },
        2873: (e, t, n) => {
          var r = n(4019).isFunction;
          e.exports.propagateEvent = function (e, t) {
            r(e["on".concat(t.type)]) && e["on".concat(t.type)](t),
              e.dispatchEvent(t);
          };
        },
        9439: (e) => {
          (e.exports.kNapiObj = Symbol("node-web-audio-api:napi-obj")),
            (e.exports.kAudioBuffer = Symbol(
              "node-web-audio-api:audio-buffer"
            )),
            (e.exports.kPrivateConstructor = Symbol(
              "node-web-audio-api:private-constructor"
            )),
            (e.exports.kCreateProcessor = Symbol(
              "node-web-audio-api:create-processor"
            )),
            (e.exports.kProcessorRegistered = Symbol(
              "node-web-audio-api:processor-registered"
            )),
            (e.exports.kGetParameterDescriptors = Symbol(
              "node-web-audio-api:get-parameter-descriptors"
            )),
            (e.exports.kWorkletRelease = Symbol(
              "node-web-audio-api:worklet-release"
            )),
            (e.exports.kCheckProcessorsCreated = Symbol(
              "node-web-audio-api:check-processor-created"
            )),
            (e.exports.kOnStateChange = Symbol.for(
              "node-web-audio-api:onstatechange"
            )),
            (e.exports.kOnSinkChange = Symbol.for(
              "node-web-audio-api:onsinkchange"
            )),
            (e.exports.kOnComplete = Symbol.for(
              "node-web-audio-api:oncomplete"
            )),
            (e.exports.kOnEnded = Symbol.for("node-web-audio-api:onended")),
            (e.exports.kOnAudioProcess = Symbol.for(
              "node-web-audio-api:onaudioprocess"
            )),
            (e.exports.kOnUpdate = Symbol.for("node-web-audio-api:onupdate"));
        },
        4019: (e, t) => {
          t.isFunction = function (e) {
            return (
              "[object Function]" == Object.prototype.toString.call(e) ||
              "[object AsyncFunction]" == Object.prototype.toString.call(e)
            );
          };
          var n = { __proto__: null, enumerable: !0 };
          Object.freeze(n), (t.kEnumerableProperty = n);
          var r = { __proto__: null, enumerable: !1 };
          Object.freeze(r), (t.kHiddenProperty = r);
        },
        8350: (e, t, n) => {
          "use strict";
          var r = n(2613);
          e.exports = function (e) {
            var t, n, o, i, a;
            for (
              t = Error.prepareStackTrace,
                Error.prepareStackTrace = function (e, n) {
                  return (Error.prepareStackTrace = t), n;
                },
                n = new Error().stack,
                a = 0;
              a < n.length && n[a].getFileName() !== __filename;

            )
              a++;
            r(
              a < n.length,
              "Unexpected: unable to find caller/index.js in the stack"
            ),
              (e = !e || isNaN(e) ? 1 : e > n.length - 2 ? n.length - 2 : e),
              (n = n.slice(a + e + 1));
            do {
              o = (i = n.shift()) && i.getFileName();
            } while (n.length && "module.js" === o);
            return o;
          };
        },
        5616: (e, t) => {
          "use strict";
          function n(e, t, n) {
            return (
              n.globals && (e = n.globals[e.name]),
              new e(`${n.context ? n.context : "Value"} ${t}.`)
            );
          }
          function r(e, t) {
            if ("bigint" == typeof e)
              throw n(
                TypeError,
                "is a BigInt which cannot be converted to a number",
                t
              );
            return t.globals ? t.globals.Number(e) : Number(e);
          }
          function o(e) {
            return u(
              (e > 0 && e % 1 == 0.5 && !(1 & e)) ||
                (e < 0 && e % 1 == -0.5 && !(1 & ~e))
                ? Math.floor(e)
                : Math.round(e)
            );
          }
          function i(e) {
            return u(Math.trunc(e));
          }
          function a(e) {
            return e < 0 ? -1 : 1;
          }
          function u(e) {
            return 0 === e ? 0 : e;
          }
          function c(e, { unsigned: t }) {
            let c, l;
            t
              ? ((c = 0), (l = 2 ** e - 1))
              : ((c = -(2 ** (e - 1))), (l = 2 ** (e - 1) - 1));
            const f = 2 ** e,
              s = 2 ** (e - 1);
            return (e, p = {}) => {
              let d = r(e, p);
              if (((d = u(d)), p.enforceRange)) {
                if (!Number.isFinite(d))
                  throw n(TypeError, "is not a finite number", p);
                if (((d = i(d)), d < c || d > l))
                  throw n(
                    TypeError,
                    `is outside the accepted range of ${c} to ${l}, inclusive`,
                    p
                  );
                return d;
              }
              return !Number.isNaN(d) && p.clamp
                ? ((d = Math.min(Math.max(d, c), l)), (d = o(d)), d)
                : Number.isFinite(d) && 0 !== d
                ? ((d = i(d)),
                  d >= c && d <= l
                    ? d
                    : ((d = (function (e, t) {
                        const n = e % t;
                        return a(t) !== a(n) ? n + t : n;
                      })(d, f)),
                      !t && d >= s ? d - f : d))
                : 0;
            };
          }
          function l(e, { unsigned: t }) {
            const a = Number.MAX_SAFE_INTEGER,
              c = t ? 0 : Number.MIN_SAFE_INTEGER,
              l = t ? BigInt.asUintN : BigInt.asIntN;
            return (t, f = {}) => {
              let s = r(t, f);
              if (((s = u(s)), f.enforceRange)) {
                if (!Number.isFinite(s))
                  throw n(TypeError, "is not a finite number", f);
                if (((s = i(s)), s < c || s > a))
                  throw n(
                    TypeError,
                    `is outside the accepted range of ${c} to ${a}, inclusive`,
                    f
                  );
                return s;
              }
              if (!Number.isNaN(s) && f.clamp)
                return (s = Math.min(Math.max(s, c), a)), (s = o(s)), s;
              if (!Number.isFinite(s) || 0 === s) return 0;
              let p = BigInt(i(s));
              return (p = l(e, p)), Number(p);
            };
          }
          (t.any = (e) => e),
            (t.undefined = () => {}),
            (t.boolean = (e) => Boolean(e)),
            (t.byte = c(8, { unsigned: !1 })),
            (t.octet = c(8, { unsigned: !0 })),
            (t.short = c(16, { unsigned: !1 })),
            (t["unsigned short"] = c(16, { unsigned: !0 })),
            (t.long = c(32, { unsigned: !1 })),
            (t["unsigned long"] = c(32, { unsigned: !0 })),
            (t["long long"] = l(64, { unsigned: !1 })),
            (t["unsigned long long"] = l(64, { unsigned: !0 })),
            (t.double = (e, t = {}) => {
              const o = r(e, t);
              if (!Number.isFinite(o))
                throw n(TypeError, "is not a finite floating-point value", t);
              return o;
            }),
            (t["unrestricted double"] = (e, t = {}) => r(e, t)),
            (t.float = (e, t = {}) => {
              const o = r(e, t);
              if (!Number.isFinite(o))
                throw n(TypeError, "is not a finite floating-point value", t);
              if (Object.is(o, -0)) return o;
              const i = Math.fround(o);
              if (!Number.isFinite(i))
                throw n(
                  TypeError,
                  "is outside the range of a single-precision floating-point value",
                  t
                );
              return i;
            }),
            (t["unrestricted float"] = (e, t = {}) => {
              const n = r(e, t);
              return isNaN(n) || Object.is(n, -0) ? n : Math.fround(n);
            }),
            (t.DOMString = (e, t = {}) => {
              if (t.treatNullAsEmptyString && null === e) return "";
              if ("symbol" == typeof e)
                throw n(
                  TypeError,
                  "is a symbol, which cannot be converted to a string",
                  t
                );
              return (t.globals ? t.globals.String : String)(e);
            }),
            (t.ByteString = (e, r = {}) => {
              const o = t.DOMString(e, r);
              let i;
              for (let e = 0; void 0 !== (i = o.codePointAt(e)); ++e)
                if (i > 255) throw n(TypeError, "is not a valid ByteString", r);
              return o;
            }),
            (t.USVString = (e, n = {}) => {
              const r = t.DOMString(e, n),
                o = r.length,
                i = [];
              for (let e = 0; e < o; ++e) {
                const t = r.charCodeAt(e);
                if (t < 55296 || t > 57343) i.push(String.fromCodePoint(t));
                else if (56320 <= t && t <= 57343)
                  i.push(String.fromCodePoint(65533));
                else if (e === o - 1) i.push(String.fromCodePoint(65533));
                else {
                  const n = r.charCodeAt(e + 1);
                  if (56320 <= n && n <= 57343) {
                    const r = 1023 & t,
                      o = 1023 & n;
                    i.push(String.fromCodePoint(65536 + 1024 * r + o)), ++e;
                  } else i.push(String.fromCodePoint(65533));
                }
              }
              return i.join("");
            }),
            (t.object = (e, t = {}) => {
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                throw n(TypeError, "is not an object", t);
              return e;
            });
          const f = Object.getOwnPropertyDescriptor(
              ArrayBuffer.prototype,
              "byteLength"
            ).get,
            s =
              "function" == typeof SharedArrayBuffer
                ? Object.getOwnPropertyDescriptor(
                    SharedArrayBuffer.prototype,
                    "byteLength"
                  ).get
                : null;
          function p(e) {
            try {
              return f.call(e), !0;
            } catch {
              return !1;
            }
          }
          function d(e) {
            try {
              return s.call(e), !0;
            } catch {
              return !1;
            }
          }
          function y(e) {
            try {
              return new Uint8Array(e), !1;
            } catch {
              return !0;
            }
          }
          t.ArrayBuffer = (e, t = {}) => {
            if (!p(e)) {
              if (t.allowShared && !d(e))
                throw n(
                  TypeError,
                  "is not an ArrayBuffer or SharedArrayBuffer",
                  t
                );
              throw n(TypeError, "is not an ArrayBuffer", t);
            }
            if (y(e)) throw n(TypeError, "is a detached ArrayBuffer", t);
            return e;
          };
          const h = Object.getOwnPropertyDescriptor(
            DataView.prototype,
            "byteLength"
          ).get;
          t.DataView = (e, t = {}) => {
            try {
              h.call(e);
            } catch (e) {
              throw n(TypeError, "is not a DataView", t);
            }
            if (!t.allowShared && d(e.buffer))
              throw n(
                TypeError,
                "is backed by a SharedArrayBuffer, which is not allowed",
                t
              );
            if (y(e.buffer))
              throw n(TypeError, "is backed by a detached ArrayBuffer", t);
            return e;
          };
          const b = Object.getOwnPropertyDescriptor(
            Object.getPrototypeOf(Uint8Array).prototype,
            Symbol.toStringTag
          ).get;
          [
            Int8Array,
            Int16Array,
            Int32Array,
            Uint8Array,
            Uint16Array,
            Uint32Array,
            Uint8ClampedArray,
            Float32Array,
            Float64Array,
          ].forEach((e) => {
            const { name: r } = e,
              o = /^[AEIOU]/u.test(r) ? "an" : "a";
            t[r] = (e, t = {}) => {
              if (!ArrayBuffer.isView(e) || b.call(e) !== r)
                throw n(TypeError, `is not ${o} ${r} object`, t);
              if (!t.allowShared && d(e.buffer))
                throw n(
                  TypeError,
                  "is a view on a SharedArrayBuffer, which is not allowed",
                  t
                );
              if (y(e.buffer))
                throw n(TypeError, "is a view on a detached ArrayBuffer", t);
              return e;
            };
          }),
            (t.ArrayBufferView = (e, t = {}) => {
              if (!ArrayBuffer.isView(e))
                throw n(
                  TypeError,
                  "is not a view on an ArrayBuffer or SharedArrayBuffer",
                  t
                );
              if (!t.allowShared && d(e.buffer))
                throw n(
                  TypeError,
                  "is a view on a SharedArrayBuffer, which is not allowed",
                  t
                );
              if (y(e.buffer))
                throw n(TypeError, "is a view on a detached ArrayBuffer", t);
              return e;
            }),
            (t.BufferSource = (e, t = {}) => {
              if (ArrayBuffer.isView(e)) {
                if (!t.allowShared && d(e.buffer))
                  throw n(
                    TypeError,
                    "is a view on a SharedArrayBuffer, which is not allowed",
                    t
                  );
                if (y(e.buffer))
                  throw n(TypeError, "is a view on a detached ArrayBuffer", t);
                return e;
              }
              if (!t.allowShared && !p(e))
                throw n(TypeError, "is not an ArrayBuffer or a view on one", t);
              if (t.allowShared && !d(e) && !p(e))
                throw n(
                  TypeError,
                  "is not an ArrayBuffer, SharedArrayBuffer, or a view on one",
                  t
                );
              if (y(e)) throw n(TypeError, "is a detached ArrayBuffer", t);
              return e;
            }),
            (t.DOMTimeStamp = t["unsigned long long"]);
        },
        3568: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.darwin-arm64.node");
        },
        8270: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.darwin-x64.node");
        },
        4193: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.linux-arm-gnueabihf.node");
        },
        7428: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.linux-arm64-gnu.node");
        },
        7866: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.linux-x64-gnu.node");
        },
        7912: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.win32-arm64-msvc.node");
        },
        2382: (e) => {
          "use strict";
          e.exports = require("./node-web-audio-api.win32-x64-msvc.node");
        },
        2613: (e) => {
          "use strict";
          e.exports = require("assert");
        },
        181: (e) => {
          "use strict";
          e.exports = require("buffer");
        },
        4573: (e) => {
          "use strict";
          e.exports = require("node:buffer");
        },
        3024: (e) => {
          "use strict";
          e.exports = require("node:fs");
        },
        7067: (e) => {
          "use strict";
          e.exports = require("node:http");
        },
        4708: (e) => {
          "use strict";
          e.exports = require("node:https");
        },
        7030: (e) => {
          "use strict";
          e.exports = require("node:net");
        },
        6760: (e) => {
          "use strict";
          e.exports = require("node:path");
        },
        1708: (e) => {
          "use strict";
          e.exports = require("node:process");
        },
        7075: (e) => {
          "use strict";
          e.exports = require("node:stream");
        },
        7830: (e) => {
          "use strict";
          e.exports = require("node:stream/web");
        },
        3136: (e) => {
          "use strict";
          e.exports = require("node:url");
        },
        7975: (e) => {
          "use strict";
          e.exports = require("node:util");
        },
        5919: (e) => {
          "use strict";
          e.exports = require("node:worker_threads");
        },
        8522: (e) => {
          "use strict";
          e.exports = require("node:zlib");
        },
        857: (e) => {
          "use strict";
          e.exports = require("os");
        },
        6928: (e) => {
          "use strict";
          e.exports = require("path");
        },
        8167: (e) => {
          "use strict";
          e.exports = require("worker_threads");
        },
        7143: (e, t, n) => {
          const r = n(1403),
            o = {};
          (o.OfflineAudioCompletionEvent = n(8461).OfflineAudioCompletionEvent),
            (o.AudioProcessingEvent = n(8461).AudioProcessingEvent),
            (o.AudioRenderCapacityEvent = n(8461).AudioRenderCapacityEvent),
            (o.BaseAudioContext = n(796)(o, r)),
            (o.AudioContext = n(7789)(o, r)),
            (o.OfflineAudioContext = n(6624)(o, r)),
            (o.ScriptProcessorNode = n(3679)(o, r)),
            (o.AudioWorkletNode = n(5364)(o, r)),
            (o.AnalyserNode = n(8801)(o, r)),
            (o.AudioBufferSourceNode = n(2455)(o, r)),
            (o.BiquadFilterNode = n(8440)(o, r)),
            (o.ChannelMergerNode = n(9599)(o, r)),
            (o.ChannelSplitterNode = n(2610)(o, r)),
            (o.ConstantSourceNode = n(9925)(o, r)),
            (o.ConvolverNode = n(4104)(o, r)),
            (o.DelayNode = n(6341)(o, r)),
            (o.DynamicsCompressorNode = n(8391)(o, r)),
            (o.GainNode = n(5395)(o, r)),
            (o.IIRFilterNode = n(6960)(o, r)),
            (o.MediaStreamAudioSourceNode = n(4283)(o, r)),
            (o.OscillatorNode = n(5950)(o, r)),
            (o.PannerNode = n(6436)(o, r)),
            (o.StereoPannerNode = n(3616)(o, r)),
            (o.WaveShaperNode = n(544)(o, r)),
            (o.AudioNode = n(8536)),
            (o.AudioScheduledSourceNode = n(7140)),
            (o.AudioParam = n(5071)),
            (o.AudioDestinationNode = n(9626)),
            (o.AudioListener = n(2584)),
            (o.AudioWorklet = n(6868)),
            (o.AudioParamMap = n(5249)),
            (o.AudioRenderCapacity = n(1568)),
            (o.PeriodicWave = n(2864)(o, r)),
            (o.AudioBuffer = n(6258)(o, r)),
            (o.mediaDevices = {});
          const i = r.mediaDevices.enumerateDevices;
          o.mediaDevices.enumerateDevices = async function () {
            const e = i();
            return Promise.resolve(e);
          };
          const a = r.mediaDevices.getUserMedia;
          (o.mediaDevices.getUserMedia = async function (e) {
            if (void 0 === e)
              throw new TypeError(
                'Failed to execute "getUserMedia" on "MediaDevices": audio must be requested'
              );
            const t = a(e);
            return Promise.resolve(t);
          }),
            (e.exports = o);
        },
        1403: (e, t, n) => {
          const { platform: r, arch: o } = process;
          let i = null,
            a = null;
          switch (r) {
            case "win32":
              switch (o) {
                case "x64":
                  try {
                    i = n(2382);
                  } catch (e) {
                    a = e;
                  }
                  break;
                case "arm64":
                  try {
                    i = n(7912);
                  } catch (e) {
                    a = e;
                  }
                  break;
                default:
                  throw new Error(`Unsupported architecture on Windows: ${o}`);
              }
              break;
            case "darwin":
              switch (o) {
                case "x64":
                  try {
                    i = n(8270);
                  } catch (e) {
                    a = e;
                  }
                  break;
                case "arm64":
                  try {
                    i = n(3568);
                  } catch (e) {
                    a = e;
                  }
                  break;
                default:
                  throw new Error(`Unsupported architecture on macOS: ${o}`);
              }
              break;
            case "linux":
              switch (o) {
                case "x64":
                  try {
                    i = n(7866);
                  } catch (e) {
                    a = e;
                  }
                  break;
                case "arm64":
                  try {
                    i = n(7428);
                  } catch (e) {
                    a = e;
                  }
                  break;
                case "arm":
                  try {
                    i = n(4193);
                  } catch (e) {
                    a = e;
                  }
                  break;
                default:
                  throw new Error(`Unsupported architecture on Linux: ${o}`);
              }
              break;
            default:
              throw new Error(`Unsupported OS: ${r}, architecture: ${o}`);
          }
          if (!i) {
            if (a) throw a;
            throw new Error(
              `Failed to load native binding for OS: ${r}, architecture: ${o}`
            );
          }
          e.exports = i;
        },
      },
      n = {};
    function r(e) {
      var o = n[e];
      if (void 0 !== o) return o.exports;
      var i = (n[e] = { exports: {} });
      return t[e].call(i.exports, i, i.exports, r), i.exports;
    }
    return (
      (r.m = t),
      (r.d = (e, t) => {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.f = {}),
      (r.e = (e) =>
        Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
      (r.u = (e) => e + ".node-web-audio.js"),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (e = { 792: 1 }),
      (r.f.require = (t, n) => {
        e[t] ||
          ((t) => {
            var n = t.modules,
              o = t.ids,
              i = t.runtime;
            for (var a in n) r.o(n, a) && (r.m[a] = n[a]);
            i && i(r);
            for (var u = 0; u < o.length; u++) e[o[u]] = 1;
          })(require("./" + r.u(t)));
      }),
      r(7143)
    );
  })()
);
