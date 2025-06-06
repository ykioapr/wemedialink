/*
 * @Author: Qinver
 * @Url: zibll.com
 * @Date: 2021-04-11 21:36:19
 * @LastEditTime: 2024-10-08 16:03:24
 */
/*
 * https://github.com/kn007/DPlayer-Lite
 * https://dplayer.js.org/zh/
 * 修改内容
 * 1.增加切换视频功能
 * 2.为button按钮html增加 type="button",防止页面被提交
 * 3.修复退出全屏后页面会滚动到顶部的问题
 */
!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module ? (module.exports = t()) : 'function' == typeof define && define.amd ? define('DPlayer', [], t) : 'object' == typeof exports ? (exports.DPlayer = t()) : (e.DPlayer = t());
})(window, function () {
    return (function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = (t[r] = {
                i: r,
                l: !1,
                exports: {},
            });
            return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r,
                    });
            }),
            (n.r = function (e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(e, '__esModule', {
                        value: !0,
                    });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var i in e)
                        n.d(
                            r,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return r;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = '/'),
            n((n.s = 23))
        );
    })([
        function (e, t) {
            function n(e) {
                return (n =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          })(e);
            }
            var r;
            r = (function () {
                return this;
            })();
            try {
                r = r || new Function('return this')();
            } catch (e) {
                'object' === ('undefined' == typeof window ? 'undefined' : n(window)) && (r = window);
            }
            e.exports = r;
        },
        function (e, t, n) {
            'use strict';
            var r = n(4),
                i = n.n(r)()(function (e) {
                    return e[1];
                });
            i.push([e.i, '.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer *{box-sizing:content-box}.dplayer svg{width:100%;height:100%}.dplayer svg circle,.dplayer svg path{fill:#fff}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0;margin:0;padding:0;transform:translate(0)}.dplayer.dplayer-live .dplayer-bar-wrap,.dplayer.dplayer-live .dplayer-controller .dplayer-icons .dplayer-loop,.dplayer.dplayer-live .dplayer-time{display:none}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-hide-controller{cursor:none}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;transform:translateY(100%)}.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%!important;height:100%!important}.dplayer.dplayer-mobile .dplayer-bar-time,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full-in,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume{display:none}.dplayer-web-fullscreen-fix{position:fixed;top:0;left:0;margin:0;padding:0}.dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(2)}}.dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;transform-origin:4px 4px}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;transform:scale(1.2)}50%{opacity:.25;transform:scale(.9)}to{opacity:.25;transform:scale(.85)}}.dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer-controller,.dplayer-controller-mask{position:absolute;bottom:0;transition:all .3s ease}.dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;transition:opacity .1s ease-in-out;word-wrap:normal;word-break:normal;z-index:2;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{background:hsla(0,0%,100%,.4);transition:all .5s ease}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded,.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer-controller .dplayer-icons .dplayer-live-badge,.dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer-controller .dplayer-icons .dplayer-live-dot{display:inline-block;width:6px;height:6px;vertical-align:4%;margin-right:5px;content:"";border-radius:6px}.dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;position:relative;cursor:pointer;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content{transition:all .2s ease-in-out;opacity:.8}.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content{opacity:1}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon{width:43px}.dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 15px 0 -5px;vertical-align:middle;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;transition:all .1s ease;will-change:width}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;transform:scale(0)}.dplayer-controller .dplayer-icons .dplayer-full,.dplayer-controller .dplayer-icons .dplayer-full-in,.dplayer-controller .dplayer-icons .dplayer-loop,.dplayer-icons .dplayer-setting{display:inline-block;height:100%}.dplayer-setting-box.dplayer-setting-box-speed { position: absolute;color:#aaa; left: -11px;transform-origin: bottom; bottom: 40px; transform: scale(0); border-radius: 2px; background: rgba(28, 28, 28, 0.9); padding: 0; transition: all 0.2s ease; overflow: hidden; z-index: 2; width: 70px; }.dplayer-setting-box.dplayer-setting-box-open { transform: scale(1); }.dplayer-setting-speed-item {padding: 7px 10px; box-sizing: border-box; cursor: pointer; position: relative; }.dplayer-setting .dplayer-setting-speed-item:hover { background-color: rgba(255, 255, 255, 0.1); }.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon.dplayer-setting-icon { width: auto; color: #eee; }@media (max-width: 640px){.dplayer-controller .dplayer-icons.dplayer-icons-right { right: 10px; }.dplayer-icons.dplayer-icons-left { left: 6px; }}                                    .dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none}.dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer-mask.dplayer-mask-show{display:block}.dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none}.dplayer-video-wrap .dplayer-video-current{display:block}', '']), (t.a = i);
        },
        function (e, t, n) {
            'use strict';
            e.exports = n(21);
        },
        function (e, t, n) {
            'use strict';
            var r,
                i = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                o = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                a = [];

            function l(e) {
                for (var t = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === e) {
                        t = n;
                        break;
                    }
                return t;
            }

            function s(e, t) {
                for (var n = {}, r = [], i = 0; i < e.length; i++) {
                    var o = e[i],
                        s = t.base ? o[0] + t.base : o[0],
                        c = n[s] || 0,
                        d = ''.concat(s, ' ').concat(c);
                    n[s] = c + 1;
                    var p = l(d),
                        u = {
                            css: o[1],
                            media: o[2],
                            sourceMap: o[3],
                        };
                    -1 !== p
                        ? (a[p].references++, a[p].updater(u))
                        : a.push({
                              identifier: d,
                              updater: v(u, t),
                              references: 1,
                          }),
                        r.push(d);
                }
                return r;
            }

            function c(e) {
                var t = document.createElement('style'),
                    r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i);
                }
                if (
                    (Object.keys(r).forEach(function (e) {
                        t.setAttribute(e, r[e]);
                    }),
                    'function' == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var a = o(e.insert || 'head');
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var d,
                p =
                    ((d = []),
                    function (e, t) {
                        return (d[e] = t), d.filter(Boolean).join('\n');
                    });

            function u(e, t, n, r) {
                var i = n ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
                if (e.styleSheet) e.styleSheet.cssText = p(t, i);
                else {
                    var o = document.createTextNode(i),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
                }
            }

            function y(e, t, n) {
                var r = n.css,
                    i = n.media,
                    o = n.sourceMap;
                if ((i ? e.setAttribute('media', i) : e.removeAttribute('media'), o && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), ' */')), e.styleSheet)) e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var f = null,
                h = 0;

            function v(e, t) {
                var n, r, i;
                if (t.singleton) {
                    var o = h++;
                    (n = f || (f = c(t))), (r = u.bind(null, n, o, !1)), (i = u.bind(null, n, o, !0));
                } else
                    (n = c(t)),
                        (r = y.bind(null, n, t)),
                        (i = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(n);
                        });
                return (
                    r(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            r((e = t));
                        } else i();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = i());
                var n = s((e = e || []), t);
                return function (e) {
                    if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
                        for (var r = 0; r < n.length; r++) {
                            var i = l(n[r]);
                            a[i].references--;
                        }
                        for (var o = s(e, t), c = 0; c < n.length; c++) {
                            var d = l(n[c]);
                            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
                        }
                        n = o;
                    }
                };
            };
        },
        function (e) {
            'use strict';
            e.exports = function (e) {
                var t = [];
                return (
                    (t.toString = function () {
                        return this.map(function (t) {
                            var n = e(t);
                            return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
                        }).join('');
                    }),
                    (t.i = function (e, n, r) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        var i = {};
                        if (r)
                            for (var o = 0; o < this.length; o++) {
                                var a = this[o][0];
                                null != a && (i[a] = !0);
                            }
                        for (var l = 0; l < e.length; l++) {
                            var s = [].concat(e[l]);
                            (r && i[s[0]]) || (n && (s[2] ? (s[2] = ''.concat(n, ' and ').concat(s[2])) : (s[2] = n)), t.push(s));
                        }
                    }),
                    t
                );
            };
        },
        function (e, t, n) {
            'use strict';
            (function (e) {
                var r = n(6),
                    i = n(7);

                function o(e) {
                    return (o =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                              })(e);
                }
                var a = setTimeout;

                function l(e) {
                    return Boolean(e && void 0 !== e.length);
                }

                function s() {}

                function c(e) {
                    if (!(this instanceof c)) throw new TypeError('Promises must be constructed via new');
                    if ('function' != typeof e) throw new TypeError('not a function');
                    (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), h(e, this);
                }

                function d(e, t) {
                    for (; 3 === e._state; ) e = e._value;
                    0 !== e._state
                        ? ((e._handled = !0),
                          c._immediateFn(function () {
                              var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                              if (null !== n) {
                                  var r;
                                  try {
                                      r = n(e._value);
                                  } catch (e) {
                                      return void u(t.promise, e);
                                  }
                                  p(t.promise, r);
                              } else (1 === e._state ? p : u)(t.promise, e._value);
                          }))
                        : e._deferreds.push(t);
                }

                function p(e, t) {
                    try {
                        if (t === e) throw new TypeError('A promise cannot be resolved with itself.');
                        if (t && ('object' === o(t) || 'function' == typeof t)) {
                            var n = t.then;
                            if (t instanceof c) return (e._state = 3), (e._value = t), void y(e);
                            if ('function' == typeof n)
                                return void h(
                                    ((r = n),
                                    (i = t),
                                    function () {
                                        r.apply(i, arguments);
                                    }),
                                    e
                                );
                        }
                        (e._state = 1), (e._value = t), y(e);
                    } catch (t) {
                        u(e, t);
                    }
                    var r, i;
                }

                function u(e, t) {
                    (e._state = 2), (e._value = t), y(e);
                }

                function y(e) {
                    2 === e._state &&
                        0 === e._deferreds.length &&
                        c._immediateFn(function () {
                            e._handled || c._unhandledRejectionFn(e._value);
                        });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) d(e, e._deferreds[t]);
                    e._deferreds = null;
                }

                function f(e, t, n) {
                    (this.onFulfilled = 'function' == typeof e ? e : null), (this.onRejected = 'function' == typeof t ? t : null), (this.promise = n);
                }

                function h(e, t) {
                    var n = !1;
                    try {
                        e(
                            function (e) {
                                n || ((n = !0), p(t, e));
                            },
                            function (e) {
                                n || ((n = !0), u(t, e));
                            }
                        );
                    } catch (e) {
                        if (n) return;
                        (n = !0), u(t, e);
                    }
                }
                (c.prototype.catch = function (e) {
                    return this.then(null, e);
                }),
                    (c.prototype.then = function (e, t) {
                        var n = new this.constructor(s);
                        return d(this, new f(e, t, n)), n;
                    }),
                    (c.prototype.finally = r.a),
                    (c.all = function (e) {
                        return new c(function (t, n) {
                            if (!l(e)) return n(new TypeError('Promise.all accepts an array'));
                            var r = Array.prototype.slice.call(e);
                            if (0 === r.length) return t([]);
                            var i = r.length;

                            function a(e, l) {
                                try {
                                    if (l && ('object' === o(l) || 'function' == typeof l)) {
                                        var s = l.then;
                                        if ('function' == typeof s)
                                            return void s.call(
                                                l,
                                                function (t) {
                                                    a(e, t);
                                                },
                                                n
                                            );
                                    }
                                    (r[e] = l), 0 == --i && t(r);
                                } catch (e) {
                                    n(e);
                                }
                            }
                            for (var s = 0; s < r.length; s++) a(s, r[s]);
                        });
                    }),
                    (c.allSettled = i.a),
                    (c.resolve = function (e) {
                        return e && 'object' === o(e) && e.constructor === c
                            ? e
                            : new c(function (t) {
                                  t(e);
                              });
                    }),
                    (c.reject = function (e) {
                        return new c(function (t, n) {
                            n(e);
                        });
                    }),
                    (c.race = function (e) {
                        return new c(function (t, n) {
                            if (!l(e)) return n(new TypeError('Promise.race accepts an array'));
                            for (var r = 0, i = e.length; r < i; r++) c.resolve(e[r]).then(t, n);
                        });
                    }),
                    (c._immediateFn =
                        ('function' == typeof e &&
                            function (t) {
                                e(t);
                            }) ||
                        function (e) {
                            a(e, 0);
                        }),
                    (c._unhandledRejectionFn = function (e) {
                        'undefined' != typeof console && console && console.warn('Possible Unhandled Promise Rejection:', e);
                    }),
                    (t.a = c);
            }).call(this, n(18).setImmediate);
        },
        function (e, t) {
            'use strict';
            t.a = function (e) {
                var t = this.constructor;
                return this.then(
                    function (n) {
                        return t.resolve(e()).then(function () {
                            return n;
                        });
                    },
                    function (n) {
                        return t.resolve(e()).then(function () {
                            return t.reject(n);
                        });
                    }
                );
            };
        },
        function (e, t) {
            'use strict';

            function r(e) {
                return (r =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          })(e);
            }
            t.a = function (e) {
                return new this(function (t, n) {
                    if (!e || void 0 === e.length) return n(new TypeError(r(e) + ' ' + e + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
                    var i = Array.prototype.slice.call(e);
                    if (0 === i.length) return t([]);
                    var o = i.length;

                    function a(e, n) {
                        if (n && ('object' === r(n) || 'function' == typeof n)) {
                            var l = n.then;
                            if ('function' == typeof l)
                                return void l.call(
                                    n,
                                    function (t) {
                                        a(e, t);
                                    },
                                    function (n) {
                                        (i[e] = {
                                            status: 'rejected',
                                            reason: n,
                                        }),
                                            0 == --o && t(i);
                                    }
                                );
                        }
                        (i[e] = {
                            status: 'fulfilled',
                            value: n,
                        }),
                            0 == --o && t(i);
                    }
                    for (var l = 0; l < i.length; l++) a(l, i[l]);
                });
            };
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>';
        },
        function (e) {
            e.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>';
        },
        function (e, t, n) {
            var r = n(2);
            e.exports = function (e) {
                'use strict';
                var t = '',
                    i = function (e) {
                        return (t += e);
                    },
                    o = (e = e || {}).video,
                    a = e.icons,
                    l = r.$escape,
                    s = e.options,
                    c = e.tran;
                return (t += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    '), i(n(22)(o)), (t += '\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        <span class="diplayer-loading-icon">'), (t += a.loading), (t += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-icons-left">\n        <button type="button" class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">'), (t += a.play), (t += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button type="button" class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">'), (t += a.volumeDown), (t += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: '), (t += l(s.theme)), (t += ';">\n                        <span class="dplayer-thumb" style="background: '), (t += l(s.theme)), (t += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span>\n        </span>\n        '), s.live && ((t += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: '), (t += l(s.theme)), (t += ';"></span>'), (t += l(c('Live'))), (t += '</span>\n        ')), (t += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n <div class="dplayer-setting"> <button class="dplayer-icon dplayer-setting-icon" data-balloon-pos="up"><span class="dplayer-icon-content">' + l(c('speed')) + '</span></button> <div class="dplayer-setting-box dplayer-setting-box-narrow dplayer-setting-box-speed">  <div class="dplayer-setting-speed-panel"> <div class="dplayer-setting-speed-item" data-speed="0.75"> <span class="dplayer-label">0.75x</span> </div> <div class="dplayer-setting-speed-item" data-speed="1"> <span class="dplayer-label">1.0x</span> </div> <div class="dplayer-setting-speed-item" data-speed="1.25"> <span class="dplayer-label">1.25x</span> </div> <div class="dplayer-setting-speed-item" data-speed="1.5"> <span class="dplayer-label">1.5x</span> </div> <div class="dplayer-setting-speed-item" data-speed="2"> <span class="dplayer-label">2.0x</span> </div> </div> </div> </div>       <div class="dplayer-loop">\n            <button type="button" class="dplayer-icon dplayer-loop-icon">\n                <span class="dplayer-icon-content">'), (t += a.loop), (t += '</span>\n            </button>\n        </div>\n        <div class="dplayer-full-in">\n            <button type="button" class="dplayer-icon dplayer-full-in-icon">\n                <span class="dplayer-icon-content">'), (t += a.fullWeb), (t += '</span>\n            </button>\n        </div>\n        <div class="dplayer-full">\n            <button type="button" class="dplayer-icon dplayer-full-icon">\n                <span class="dplayer-icon-content">'), (t += a.full), (t += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: '), (t += l(s.theme)), (t += '">\n                <span class="dplayer-thumb" style="background: '), (t += l(s.theme)), (t += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-notice"></div>');
            };
        },
        function (e, t, n) {
            (function (e) {
                var r = (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
                    i = Function.prototype.apply;

                function o(e, t) {
                    (this._id = e), (this._clearFn = t);
                }
                (t.setTimeout = function () {
                    return new o(i.call(setTimeout, r, arguments), clearTimeout);
                }),
                    (t.setInterval = function () {
                        return new o(i.call(setInterval, r, arguments), clearInterval);
                    }),
                    (t.clearTimeout = t.clearInterval =
                        function (e) {
                            e && e.close();
                        }),
                    (o.prototype.unref = o.prototype.ref = function () {}),
                    (o.prototype.close = function () {
                        this._clearFn.call(r, this._id);
                    }),
                    (t.enroll = function (e, t) {
                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
                    }),
                    (t.unenroll = function (e) {
                        clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
                    }),
                    (t._unrefActive = t.active =
                        function (e) {
                            clearTimeout(e._idleTimeoutId);
                            var t = e._idleTimeout;
                            t >= 0 &&
                                (e._idleTimeoutId = setTimeout(function () {
                                    e._onTimeout && e._onTimeout();
                                }, t));
                        }),
                    n(19),
                    (t.setImmediate = ('undefined' != typeof self && self.setImmediate) || (void 0 !== e && e.setImmediate) || (this && this.setImmediate)),
                    (t.clearImmediate = ('undefined' != typeof self && self.clearImmediate) || (void 0 !== e && e.clearImmediate) || (this && this.clearImmediate));
            }).call(this, n(0));
        },
        function (e, t, n) {
            (function (e, t) {
                !(function (e) {
                    'use strict';
                    if (!e.setImmediate) {
                        var r,
                            i,
                            o,
                            a,
                            l,
                            s = 1,
                            c = {},
                            d = !1,
                            p = e.document,
                            u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        (u = u && u.setTimeout ? u : e),
                            '[object process]' === {}.toString.call(e.process)
                                ? (r = function (e) {
                                      t.nextTick(function () {
                                          f(e);
                                      });
                                  })
                                : !(function () {
                                      if (e.postMessage && !e.importScripts) {
                                          var t = !0,
                                              n = e.onmessage;
                                          return (
                                              (e.onmessage = function () {
                                                  t = !1;
                                              }),
                                              e.postMessage('', '*'),
                                              (e.onmessage = n),
                                              t
                                          );
                                      }
                                  })()
                                ? e.MessageChannel
                                    ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                                          f(e.data);
                                      }),
                                      (r = function (e) {
                                          o.port2.postMessage(e);
                                      }))
                                    : p && 'onreadystatechange' in p.createElement('script')
                                    ? ((i = p.documentElement),
                                      (r = function (e) {
                                          var t = p.createElement('script');
                                          (t.onreadystatechange = function () {
                                              f(e), (t.onreadystatechange = null), i.removeChild(t), (t = null);
                                          }),
                                              i.appendChild(t);
                                      }))
                                    : (r = function (e) {
                                          setTimeout(f, 0, e);
                                      })
                                : ((a = 'setImmediate$' + Math.random() + '$'),
                                  (l = function (t) {
                                      t.source === e && 'string' == typeof t.data && 0 === t.data.indexOf(a) && f(+t.data.slice(a.length));
                                  }),
                                  e.addEventListener ? e.addEventListener('message', l, !1) : e.attachEvent('onmessage', l),
                                  (r = function (t) {
                                      e.postMessage(a + t, '*');
                                  })),
                            (u.setImmediate = function (e) {
                                'function' != typeof e && (e = new Function('' + e));
                                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                                var i = {
                                    callback: e,
                                    args: t,
                                };
                                return (c[s] = i), r(s), s++;
                            }),
                            (u.clearImmediate = y);
                    }

                    function y(e) {
                        delete c[e];
                    }

                    function f(e) {
                        if (d) setTimeout(f, 0, e);
                        else {
                            var t = c[e];
                            if (t) {
                                d = !0;
                                try {
                                    !(function (e) {
                                        var t = e.callback,
                                            n = e.args;
                                        switch (n.length) {
                                            case 0:
                                                t();
                                                break;
                                            case 1:
                                                t(n[0]);
                                                break;
                                            case 2:
                                                t(n[0], n[1]);
                                                break;
                                            case 3:
                                                t(n[0], n[1], n[2]);
                                                break;
                                            default:
                                                t.apply(void 0, n);
                                        }
                                    })(t);
                                } finally {
                                    y(e), (d = !1);
                                }
                            }
                        }
                    }
                })('undefined' == typeof self ? (void 0 === e ? this : e) : self);
            }).call(this, n(0), n(20));
        },
        function (e) {
            var n,
                r,
                i = (e.exports = {});

            function o() {
                throw new Error('setTimeout has not been defined');
            }

            function a() {
                throw new Error('clearTimeout has not been defined');
            }

            function l(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
                try {
                    return n(e, 0);
                } catch (t) {
                    try {
                        return n.call(null, e, 0);
                    } catch (t) {
                        return n.call(this, e, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = 'function' == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                    n = o;
                }
                try {
                    r = 'function' == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                    r = a;
                }
            })();
            var s,
                c = [],
                d = !1,
                p = -1;

            function u() {
                d && s && ((d = !1), s.length ? (c = s.concat(c)) : (p = -1), c.length && y());
            }

            function y() {
                if (!d) {
                    var e = l(u);
                    d = !0;
                    for (var t = c.length; t; ) {
                        for (s = c, c = []; ++p < t; ) s && s[p].run();
                        (p = -1), (t = c.length);
                    }
                    (s = null),
                        (d = !1),
                        (function (e) {
                            if (r === clearTimeout) return clearTimeout(e);
                            if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                            try {
                                r(e);
                            } catch (t) {
                                try {
                                    return r.call(null, e);
                                } catch (t) {
                                    return r.call(this, e);
                                }
                            }
                        })(e);
                }
            }

            function f(e, t) {
                (this.fun = e), (this.array = t);
            }

            function h() {}
            (i.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new f(e, t)), 1 !== c.length || d || l(y);
            }),
                (f.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (i.title = 'browser'),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ''),
                (i.versions = {}),
                (i.on = h),
                (i.addListener = h),
                (i.once = h),
                (i.off = h),
                (i.removeListener = h),
                (i.removeAllListeners = h),
                (i.emit = h),
                (i.prependListener = h),
                (i.prependOnceListener = h),
                (i.listeners = function () {
                    return [];
                }),
                (i.binding = function () {
                    throw new Error('process.binding is not supported');
                }),
                (i.cwd = function () {
                    return '/';
                }),
                (i.chdir = function () {
                    throw new Error('process.chdir is not supported');
                }),
                (i.umask = function () {
                    return 0;
                });
        },
        function (e, t, n) {
            'use strict';
            (function (t) {
                var n = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== t ? t : {},
                    r = Object.create(n),
                    i = /["&'<>]/;
                (r.$escape = function (e) {
                    return (function (e) {
                        var t = '' + e,
                            n = i.exec(t);
                        if (!n) return e;
                        var r = '',
                            o = void 0,
                            a = void 0,
                            l = void 0;
                        for (o = n.index, a = 0; o < t.length; o++) {
                            switch (t.charCodeAt(o)) {
                                case 34:
                                    l = '&#34;';
                                    break;
                                case 38:
                                    l = '&#38;';
                                    break;
                                case 39:
                                    l = '&#39;';
                                    break;
                                case 60:
                                    l = '&#60;';
                                    break;
                                case 62:
                                    l = '&#62;';
                                    break;
                                default:
                                    continue;
                            }
                            a !== o && (r += t.substring(a, o)), (a = o + 1), (r += l);
                        }
                        return a !== o ? r + t.substring(a, o) : r;
                    })(
                        (function e(t) {
                            'string' != typeof t && (t = null == t ? '' : 'function' == typeof t ? e(t.call(t)) : JSON.stringify(t));
                            return t;
                        })(e)
                    );
                }),
                    (r.$each = function (e, t) {
                        if (Array.isArray(e)) for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
                        else for (var i in e) t(e[i], i);
                    }),
                    (e.exports = r);
            }).call(this, n(0));
        },
        function (e, t, n) {
            var r = n(2);
            e.exports = function (e) {
                'use strict';
                var t = '',
                    n = (e = e || {}).pic,
                    i = r.$escape,
                    o = e.preload,
                    a = e.url;
                return (t += '<video class="dplayer-video dplayer-video-current" webkit-playsinline playsinline'), n && ((t += ' poster="'), (t += i(n)), (t += '"')), o && ((t += ' preload="'), (t += i(o)), (t += '"')), a && ((t += ' src="'), (t += i(a)), (t += '"')), (t += '></video>');
            };
        },
        function (e, t, n) {
            'use strict';
            n.r(t);
            var r = n(3),
                i = n.n(r),
                o = n(1),
                a = {
                    insert: 'head',
                    singleton: !1,
                },
                l = (i()(o.a, a), o.a.locals, n(5)),
                s = /mobile/i.test(window.navigator.userAgent),
                c = {
                    secondToTime: function (e) {
                        if (0 === (e = e || 0) || e === 1 / 0 || 'NaN' === e.toString()) return '00:00';
                        var t = Math.floor(e / 3600),
                            n = Math.floor((e - 3600 * t) / 60),
                            r = Math.floor(e - 3600 * t - 60 * n);
                        return (t > 0 ? [t, n, r] : [n, r])
                            .map(function (e) {
                                return e < 10 ? '0' + e : '' + e;
                            })
                            .join(':');
                    },
                    getElementViewLeft: function (e) {
                        var t = e.offsetLeft,
                            n = e.offsetParent,
                            r = document.body.scrollLeft + document.documentElement.scrollLeft;
                        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) for (; null !== n && n !== e; ) (t += n.offsetLeft), (n = n.offsetParent);
                        else for (; null !== n; ) (t += n.offsetLeft), (n = n.offsetParent);
                        return t - r;
                    },
                    getBoundingClientRectViewLeft: function (e) {
                        var t = window.scrollY || window.pageYOffset || document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0);
                        if (e.getBoundingClientRect) {
                            if ('number' != typeof this.getBoundingClientRectViewLeft.offset) {
                                var n = document.createElement('div');
                                (n.style.cssText = 'position:absolute;top:0;left:0;'), document.body.appendChild(n), (this.getBoundingClientRectViewLeft.offset = -n.getBoundingClientRect().top - t), document.body.removeChild(n), (n = null);
                            }
                            var r = e.getBoundingClientRect(),
                                i = this.getBoundingClientRectViewLeft.offset;
                            return r.left + i;
                        }
                        return this.getElementViewLeft(e);
                    },
                    getScrollPosition: function () {
                        return {
                            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                        };
                    },
                    setScrollPosition: function (e) {
                        var t = e.left,
                            n = void 0 === t ? 0 : t,
                            r = e.top,
                            i = void 0 === r ? 0 : r;
                        this.isFirefox ? ((document.documentElement.scrollLeft = n), (document.documentElement.scrollTop = i)) : window.scrollTo(n, i);
                    },
                    isMobile: s,
                    isFirefox: /firefox/i.test(window.navigator.userAgent),
                    isChrome: /chrome/i.test(window.navigator.userAgent),
                    nameMap: {
                        dragStart: s ? 'touchstart' : 'mousedown',
                        dragMove: s ? 'touchmove' : 'mousemove',
                        dragEnd: s ? 'touchend' : 'mouseup',
                    },
                };
            var d = {
                    'zh-cn': {
                        'Video load failed': '视频加载失败',
                        'Go forward': '快进',
                        'Go back': '快退',
                        seconds: '秒',
                        Volume: '音量',
                        Live: '直播',
                        speed: '倍速',
                    },
                    'zh-tw': {
                        'Video load failed': '視頻加載失敗',
                        'Go forward': '快進',
                        'Go back': '快退',
                        seconds: '秒',
                        Volume: '音量',
                        Live: '直播',
                        speed: '倍速',
                    },
                },
                p = function (e) {
                    var t = this;
                    (this.lang = e),
                        (this.tran = function (e) {
                            return d[t.lang] && d[t.lang][e] ? d[t.lang][e] : e;
                        });
                },
                u = n(8),
                y = n.n(u),
                f = n(9),
                h = n.n(f),
                v = n(10),
                m = n.n(v),
                g = n(11),
                b = n.n(g),
                w = n(12),
                k = n.n(w),
                x = n(13),
                T = n.n(x),
                E = n(14),
                L = n.n(E),
                S = n(15),
                M = n.n(S),
                z = n(16),
                B = n.n(z),
                q = {
                    play: y.a,
                    pause: h.a,
                    loop: m.a,
                    volumeUp: b.a,
                    volumeDown: k.a,
                    volumeOff: T.a,
                    full: L.a,
                    fullWeb: M.a,
                    loading: B.a,
                },
                F = n(17),
                j = n.n(F);

            function _(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var O = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.container = t.container),
                        (this.options = t.options),
                        (this.tran = t.tran),
                        this.init();
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'init',
                            value: function () {
                                (this.container.innerHTML = j()({
                                    options: this.options,
                                    tran: this.tran,
                                    icons: q,
                                    video: {
                                        pic: this.options.video.pic,
                                        preload: this.options.preload,
                                        url: this.options.video.url,
                                    },
                                })),
                                    (this.volumeBar = this.container.querySelector('.dplayer-volume-bar-inner')),
                                    (this.volumeBarWrap = this.container.querySelector('.dplayer-volume-bar')),
                                    (this.volumeBarWrapWrap = this.container.querySelector('.dplayer-volume-bar-wrap')),
                                    (this.volumeButton = this.container.querySelector('.dplayer-volume')),
                                    (this.volumeButtonIcon = this.container.querySelector('.dplayer-volume-icon')),
                                    (this.volumeIcon = this.container.querySelector('.dplayer-volume-icon .dplayer-icon-content')),
                                    (this.playedBar = this.container.querySelector('.dplayer-played')),
                                    (this.loadedBar = this.container.querySelector('.dplayer-loaded')),
                                    (this.playedBarWrap = this.container.querySelector('.dplayer-bar-wrap')),
                                    (this.playedBarTime = this.container.querySelector('.dplayer-bar-time')),
                                    (this.video = this.container.querySelector('.dplayer-video-current')),
                                    (this.bezel = this.container.querySelector('.dplayer-bezel-icon')),
                                    (this.playButton = this.container.querySelector('.dplayer-play-icon')),
                                    (this.videoWrap = this.container.querySelector('.dplayer-video-wrap')),
                                    (this.controllerMask = this.container.querySelector('.dplayer-controller-mask')),
                                    (this.ptime = this.container.querySelector('.dplayer-ptime')),
                                    (this.loopButton = this.container.querySelector('.dplayer-loop-icon')),
                                    (this.loopIcon = this.container.querySelector('.dplayer-loop-icon .dplayer-icon-content')),
                                    (this.dtime = this.container.querySelector('.dplayer-dtime')),
                                    (this.browserFullButton = this.container.querySelector('.dplayer-full-icon')),
                                    (this.webFullButton = this.container.querySelector('.dplayer-full-in-icon')),
                                    //添加变速按钮
                                    (this.settingBox = this.container.querySelector('.dplayer-setting-box')),
                                    (this.settingButton = this.container.querySelector('.dplayer-setting-icon')),
                                    (this.speedItem = this.container.querySelectorAll('.dplayer-setting-speed-item')),
                                    (this.notice = this.container.querySelector('.dplayer-notice'));
                            },
                        },
                    ]) && _(t.prototype, n),
                    r && _(t, r),
                    e
                );
            })();

            function C(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var A = (function () {
                function e() {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.events = {}),
                        (this.videoEvents = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting']),
                        (this.playerEvents = ['loop_enable', 'loop_disable', 'notice_show', 'notice_hide', 'destroy', 'resize', 'fullscreen', 'fullscreen_cancel', 'webfullscreen', 'webfullscreen_cancel']);
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'on',
                            value: function (e, t) {
                                this.type(e) && 'function' == typeof t && (this.events[e] || (this.events[e] = []), this.events[e].push(t));
                            },
                        },
                        {
                            key: 'trigger',
                            value: function (e, t) {
                                if (this.events[e] && this.events[e].length) for (var n = 0; n < this.events[e].length; n++) this.events[e][n](t);
                            },
                        },
                        {
                            key: 'type',
                            value: function (e) {
                                return -1 !== this.playerEvents.indexOf(e) ? 'player' : -1 !== this.videoEvents.indexOf(e) ? 'video' : (console.error('Unknown event name: '.concat(e)), null);
                            },
                        },
                    ]) && C(t.prototype, n),
                    r && C(t, r),
                    e
                );
            })();

            function P(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var I = (function () {
                function e(t) {
                    var n = this;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.player = t),
                        (this.lastScrollPosition = {
                            left: 0,
                            top: 0,
                        }),
                        this.player.events.on('webfullscreen', function () {
                            n.player.resize();
                        }),
                        this.player.events.on('webfullscreen_cancel', function () {
                            n.player.resize(), c.setScrollPosition(n.lastScrollPosition);
                        });
                    var r = function () {
                            n.player.resize(), n.isFullScreen('browser') ? n.player.events.trigger('fullscreen') : ( n.player.events.trigger('fullscreen_cancel'));
                        },
                        i = function () {
                            var e = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                            (e && e !== n.player.container) || (n.player.resize(), e ? n.player.events.trigger('fullscreen') : (c.setScrollPosition(n.lastScrollPosition), n.player.events.trigger('fullscreen_cancel')));
                        };
                    /Firefox/.test(navigator.userAgent) ? (document.addEventListener('mozfullscreenchange', i), document.addEventListener('fullscreenchange', i)) : (this.player.container.addEventListener('fullscreenchange', r), this.player.container.addEventListener('webkitfullscreenchange', r), document.addEventListener('msfullscreenchange', i), document.addEventListener('MSFullscreenChange', i));
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'isFullScreen',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'browser';
                                switch (e) {
                                    case 'browser':
                                        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                                    case 'web':
                                        return this.player.container.classList.contains('dplayer-fulled');
                                }
                            },
                        },
                        {
                            key: 'request',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'browser',
                                    t = 'browser' === e ? 'web' : 'browser',
                                    n = this.isFullScreen(t);
                                switch ((n || (this.lastScrollPosition = c.getScrollPosition()), e)) {
                                    case 'browser':
                                        this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen ? this.player.video.webkitEnterFullscreen() : this.player.video.webkitEnterFullScreen ? this.player.video.webkitEnterFullScreen() : this.player.container.msRequestFullscreen && this.player.container.msRequestFullscreen();
                                        break;
                                    case 'web':
                                        this.player.container.classList.add('dplayer-fulled'), document.body.classList.add('dplayer-web-fullscreen-fix'), this.player.events.trigger('webfullscreen');
                                }
                                n && this.cancel(t);
                            },
                        },
                        {
                            key: 'cancel',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'browser';
                                switch (e) {
                                    case 'browser':
                                        document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitCancelFullscreen ? document.webkitCancelFullscreen() : document.msCancelFullScreen ? document.msCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
                                        break;
                                    case 'web':
                                        this.player.container.classList.remove('dplayer-fulled'), document.body.classList.remove('dplayer-web-fullscreen-fix'), this.player.events.trigger('webfullscreen_cancel');
                                }
                            },
                        },
                        {
                            key: 'toggle',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'browser';
                                this.isFullScreen(e) ? this.cancel(e) : this.request(e);
                            },
                        },
                    ]) && P(t.prototype, n),
                    r && P(t, r),
                    e
                );
            })();

            function W(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var R = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.elements = {}),
                        (this.elements.volume = t.volumeBar),
                        (this.elements.played = t.playedBar),
                        (this.elements.loaded = t.loadedBar);
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'set',
                            value: function (e, t, n) {
                                (t = Math.max(t, 0)), (t = Math.min(t, 1)), (this.elements[e].style[n] = 100 * t + '%');
                            },
                        },
                        {
                            key: 'get',
                            value: function (e) {
                                return parseFloat(this.elements[e].style.width) / 100;
                            },
                        },
                    ]) && W(t.prototype, n),
                    r && W(t, r),
                    e
                );
            })();

            function H(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var V = (function () {
                function e(t) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.player = t),
                        (window.requestAnimationFrame =
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function (e) {
                                window.setTimeout(e, 1e3 / 60);
                            }),
                        (this.types = ['loading']),
                        this.init();
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'init',
                            value: function () {
                                var e = this;
                                this.types.map(function (t) {
                                    return e['init'.concat(t, 'Checker')](), t;
                                });
                            },
                        },
                        {
                            key: 'initloadingChecker',
                            value: function () {
                                var e = this,
                                    t = 0,
                                    n = 0,
                                    r = !1;
                                this.loadingChecker = setInterval(function () {
                                    e.enableloadingChecker && ((n = e.player.video.currentTime), r || n !== t || e.player.video.paused || (e.player.container.classList.add('dplayer-loading'), (r = !0)), r && n > t && !e.player.video.paused && (e.player.container.classList.remove('dplayer-loading'), (r = !1)), (t = n));
                                }, 100);
                            },
                        },
                        {
                            key: 'enable',
                            value: function (e) {
                                this['enable'.concat(e, 'Checker')] = !0;
                            },
                        },
                        {
                            key: 'disable',
                            value: function (e) {
                                this['enable'.concat(e, 'Checker')] = !1;
                            },
                        },
                        {
                            key: 'destroy',
                            value: function () {
                                var e = this;
                                this.types.map(function (t) {
                                    return (e['enable'.concat(t, 'Checker')] = !1), e[''.concat(t, 'Checker')] && clearInterval(e[''.concat(t, 'Checker')]), t;
                                });
                            },
                        },
                    ]) && H(t.prototype, n),
                    r && H(t, r),
                    e
                );
            })();

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var U = (function () {
                function e(t) {
                    var n = this;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.container = t),
                        this.container.addEventListener('animationend', function () {
                            n.container.classList.remove('dplayer-bezel-transition');
                        });
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'switch',
                            value: function (e) {
                                (this.container.innerHTML = e), this.container.classList.add('dplayer-bezel-transition');
                            },
                        },
                    ]) && D(t.prototype, n),
                    r && D(t, r),
                    e
                );
            })();

            function N(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var X = (function () {
                function e(t) {
                    var n = this;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.player = t),
                        (this.autoHideTimer = 0),
                        c.isMobile ||
                            this.player.container.addEventListener('mousemove', function () {
                                n.setAutoHide();
                            }),
                        this.player.container.addEventListener('click', function () {
                            n.setAutoHide();
                        }),
                        this.player.on('play', function () {
                            n.setAutoHide();
                            n.hideSetting();
                        }),
                        this.player.on('pause', function () {
                            n.setAutoHide();
                        }),
                        this.initPlayButton(),
                        this.initPlayedBar(),
                        this.initFullButton(),
                        c.isMobile || this.initVolumeButton();

                    //添加变速-注册事件
                    n.player.template.settingButton.addEventListener('click', function () {
                        n.toggleSetting();
                    });

                    for (var i = 0; i < n.player.template.speedItem.length; i++) {
                        n.player.template.speedItem[i].addEventListener('click', function () {
                            n.player.speed(this.getAttribute('data-speed'));
                            n.hideSetting();
                        });
                    }
                }
                var t, n, r;
                return (
                    (t = e),
                    (n = [
                        {
                            key: 'initPlayButton',
                            value: function () {
                                var e = this;
                                this.player.template.playButton.addEventListener('click', function () {
                                    e.player.toggle();
                                }),
                                    c.isMobile
                                        ? (this.player.template.videoWrap.addEventListener('click', function () {
                                              e.toggle();
                                          }),
                                          this.player.template.controllerMask.addEventListener('click', function () {
                                              e.toggle();
                                          }))
                                        : (this.player.template.videoWrap.addEventListener('click', function () {
                                              e.player.toggle();
                                          }),
                                          this.player.template.controllerMask.addEventListener('click', function () {
                                              e.player.toggle();
                                          }));
                            },
                        },
                        {
                            key: 'initPlayedBar',
                            value: function () {
                                var e = this,
                                    t = function (t) {
                                        var n = ((t.clientX || t.changedTouches[0].clientX) - c.getBoundingClientRectViewLeft(e.player.template.playedBarWrap)) / e.player.template.playedBarWrap.clientWidth;
                                        (n = Math.max(n, 0)), (n = Math.min(n, 1)), e.player.bar.set('played', n, 'width'), (e.player.template.ptime.innerHTML = c.secondToTime(n * e.player.video.duration));
                                    },
                                    n = function n(r) {
                                        document.removeEventListener(c.nameMap.dragEnd, n), document.removeEventListener(c.nameMap.dragMove, t);
                                        var i = ((r.clientX || r.changedTouches[0].clientX) - c.getBoundingClientRectViewLeft(e.player.template.playedBarWrap)) / e.player.template.playedBarWrap.clientWidth;
                                        (i = Math.max(i, 0)), (i = Math.min(i, 1)), e.player.bar.set('played', i, 'width'), e.player.seek(e.player.bar.get('played') * e.player.video.duration), e.player.timer.enable('progress');
                                    };
                                this.player.template.playedBarWrap.addEventListener(c.nameMap.dragStart, function () {
                                    e.player.timer.disable('progress'), document.addEventListener(c.nameMap.dragMove, t), document.addEventListener(c.nameMap.dragEnd, n);
                                }),
                                    this.player.template.playedBarWrap.addEventListener(c.nameMap.dragMove, function (t) {
                                        if (e.player.video.duration) {
                                            var n = e.player.template.playedBarWrap.getBoundingClientRect().left,
                                                r = (t.clientX || t.changedTouches[0].clientX) - n;
                                            if (r < 0 || r > e.player.template.playedBarWrap.offsetWidth) return;
                                            var i = e.player.video.duration * (r / e.player.template.playedBarWrap.offsetWidth);
                                            (e.player.template.playedBarTime.style.left = ''.concat(r - (i >= 3600 ? 25 : 20), 'px')), (e.player.template.playedBarTime.innerText = c.secondToTime(i)), e.player.template.playedBarTime.classList.remove('hidden');
                                        }
                                        e.setAutoHide();
                                    }),
                                    c.isMobile ||
                                        (this.player.template.playedBarWrap.addEventListener('mouseenter', function () {
                                            e.player.video.duration && e.player.template.playedBarTime.classList.remove('hidden');
                                        }),
                                        this.player.template.playedBarWrap.addEventListener('mouseleave', function () {
                                            e.player.video.duration && e.player.template.playedBarTime.classList.add('hidden');
                                        }));
                            },
                        },
                        {
                            key: 'initFullButton',
                            value: function () {
                                var e = this;
                                this.player.template.browserFullButton.addEventListener('click', function () {
                                    e.player.fullScreen.toggle('browser');
                                }),
                                    this.player.template.webFullButton.addEventListener('click', function () {
                                        e.player.fullScreen.toggle('web');
                                    });
                            },
                        },
                        {
                            key: 'initVolumeButton',
                            value: function () {
                                var e = this,
                                    t = function (t) {
                                        var n = t || window.event,
                                            r = ((n.clientX || n.changedTouches[0].clientX) - c.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap) - 5.5) / 35;
                                        e.player.volume(r);
                                    },
                                    n = function n() {
                                        document.removeEventListener(c.nameMap.dragEnd, n), document.removeEventListener(c.nameMap.dragMove, t), e.player.template.volumeButton.classList.remove('dplayer-volume-active');
                                    };
                                this.player.template.volumeBarWrapWrap.addEventListener('click', function (t) {
                                    var n = t || window.event,
                                        r = ((n.clientX || n.changedTouches[0].clientX) - c.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap) - 5.5) / 35;
                                    e.player.volume(r);
                                }),
                                    this.player.template.volumeBarWrapWrap.addEventListener(c.nameMap.dragStart, function () {
                                        document.addEventListener(c.nameMap.dragMove, t), document.addEventListener(c.nameMap.dragEnd, n), e.player.template.volumeButton.classList.add('dplayer-volume-active');
                                    }),
                                    this.player.template.volumeButtonIcon.addEventListener('click', function () {
                                        e.player.video.muted ? ((e.player.video.muted = !1), e.player.switchVolumeIcon(), e.player.bar.set('volume', e.player.volume(), 'width')) : ((e.player.video.muted = !0), (e.player.template.volumeIcon.innerHTML = q.volumeOff), e.player.bar.set('volume', 0, 'width'));
                                    });
                            },
                        },
                        {
                            key: 'setAutoHide',
                            value: function () {
                                var e = this;
                                this.show(),
                                    clearTimeout(this.autoHideTimer),
                                    (this.autoHideTimer = setTimeout(function () {
                                        e.player.video.played.length && e.hide();
                                    }, 3e3));
                            },
                        },
                        {
                            key: 'show',
                            value: function () {
                                this.player.container.classList.remove('dplayer-hide-controller');
                            },
                        },
                        {
                            key: 'hide',
                            value: function () {
                                this.player.container.classList.add('dplayer-hide-controller');
                            },
                        },
                        {
                            key: 'isShow',
                            value: function () {
                                return !this.player.container.classList.contains('dplayer-hide-controller');
                            },
                        },
                        {
                            key: 'toggle',
                            value: function () {
                                this.isShow() ? this.hide() : this.show();
                            },
                        },
                        {
                            key: 'destroy',
                            value: function () {
                                clearTimeout(this.autoHideTimer);
                            },
                        },

                        //添加变速播放

                        {
                            key: 'showSetting',
                            value: function () {
                                this.player.template.settingBox.classList.add('dplayer-setting-box-open');
                            },
                        },
                        {
                            key: 'hideSetting',
                            value: function () {
                                this.player.template.settingBox.classList.remove('dplayer-setting-box-open');
                            },
                        },
                        {
                            key: 'toggleSetting',
                            value: function () {
                                this.player.template.settingBox.classList.contains('dplayer-setting-box-open') ? this.hideSetting() : this.showSetting();
                            },
                        },
                    ]) && N(t.prototype, n),
                    r && N(t, r),
                    e
                );
            })();
            var $ = function e(t) {
                !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, e),
                    document.addEventListener('keydown', function (e) {
                        if (t.focus) {
                            var n,
                                r = e || window.event;
                            switch (r.keyCode) {
                                case 27:
                                    t.fullScreen.isFullScreen('web') && t.fullScreen.cancel('web');
                                    break;
                                case 32:
                                    r.preventDefault(), t.toggle(), t.controller.setAutoHide();
                                    break;
                                case 37:
                                    if ((r.preventDefault(), t.options.live)) break;
                                    t.seek(t.video.currentTime - 3, !0);
                                    break;
                                case 39:
                                    if ((r.preventDefault(), t.options.live)) break;
                                    t.seek(t.video.currentTime + 3, !0);
                                    break;
                                case 38:
                                    r.preventDefault(), (n = t.volume() + 0.01), t.volume(n, !0);
                                    break;
                                case 40:
                                    r.preventDefault(), (n = t.volume() - 0.01), t.volume(n, !0);
                            }
                        }
                    });
            };

            function G(e, t) {
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

            function Y(e, t, n) {
                return (
                    t in e
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

            function J(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var Q = [],
                Z = (function () {
                    function e(t) {
                        var n = this;
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, e),
                            (this.options = (function (e) {
                                var t = {
                                    container: e.element || document.getElementsByClassName('dplayer')[0],
                                    live: !1,
                                    autoplay: !1,
                                    theme: '#b7daff',
                                    loop: !1,
                                    lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                                    preload: 'auto',
                                    volume: 1,
                                    video: {},
                                    mutex: !0,
                                    pluginOptions: {
                                        hls: {},
                                        flv: {},
                                        dash: {},
                                        webtorrent: {},
                                    },
                                };
                                for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
                                return e.video && !e.video.type && (e.video.type = 'auto'), e.lang && (e.lang = e.lang.toLowerCase()), e;
                            })(
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2
                                            ? G(Object(n), !0).forEach(function (t) {
                                                  Y(e, t, n[t]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                            : G(Object(n)).forEach(function (t) {
                                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                              });
                                    }
                                    return e;
                                })(
                                    {
                                        preload: 'webtorrent' === t.video.type ? 'none' : 'metadata',
                                    },
                                    t
                                )
                            )),
                            (this.tran = new p(this.options.lang).tran),
                            (this.events = new A()),
                            (this.container = this.options.container),
                            this.container.classList.add('dplayer'),
                            this.options.live ? this.container.classList.add('dplayer-live') : this.container.classList.remove('dplayer-live'),
                            c.isMobile && this.container.classList.add('dplayer-mobile'),
                            (this.template = new O({
                                container: this.container,
                                options: this.options,
                                tran: this.tran,
                            })),
                            (this.video = this.template.video),
                            (this.bar = new R(this.template)),
                            (this.bezel = new U(this.template.bezel)),
                            (this.fullScreen = new I(this)),
                            (this.controller = new X(this)),
                            (this.plugins = {}),
                            document.addEventListener(
                                'click',
                                function () {
                                    n.focus = !1;
                                },
                                !0
                            ),
                            this.container.addEventListener(
                                'click',
                                function () {
                                    n.focus = !0;
                                },
                                !0
                            ),
                            (this.paused = !0),
                            (this.timer = new V(this)),
                            (this.hotkey = new $(this)),
                            this.initVideo(this.video, this.options.video.type),
                            (this.loop = this.options.loop);
                        n.events.on('loop_enable', function () {
                            n.template.loopIcon.style.opacity = '';
                        }),
                            n.events.on('loop_disable', function () {
                                n.template.loopIcon.style.opacity = '0.4';
                            }),
                            n.template.loopButton.addEventListener('click', function () {
                                (n.loop = !n.loop), n.loop ? n.events.trigger('loop_enable') : n.events.trigger('loop_disable');
                            }),
                            this.loop ? this.events.trigger('loop_enable') : this.events.trigger('loop_disable'),
                            this.options.autoplay && this.play(),
                            this.container.addEventListener('contextmenu', function (e) {
                                (e || window.event).preventDefault();
                            }),
                            Q.push(this);
                    }
                    var t, n, r;
                    return (
                        (t = e),
                        (n = [
                            {
                                key: 'seek',
                                value: function (e, t) {
                                    (e = Math.max(e, 0)),
                                        this.video.duration && (e = Math.min(e, this.video.duration)),
                                        this.video.currentTime < e && t
                                            ? this.notice(
                                                  ''
                                                      .concat(this.tran('Go forward'), ' ')
                                                      .concat((e - this.video.currentTime).toFixed(0), ' ')
                                                      .concat(this.tran('seconds'))
                                              )
                                            : this.video.currentTime > e &&
                                              t &&
                                              this.notice(
                                                  ''
                                                      .concat(this.tran('Go back'), ' ')
                                                      .concat((this.video.currentTime - e).toFixed(0), ' ')
                                                      .concat(this.tran('seconds'))
                                              ),
                                        (this.video.currentTime = e),
                                        this.bar.set('played', e / this.video.duration, 'width'),
                                        (this.template.ptime.innerHTML = c.secondToTime(e));
                                },
                            },
                            {
                                key: 'play',
                                value: function (e) {
                                    var t = this;
                                    if (
                                        ((this.paused = !1),
                                        this.video.paused && this.bezel.switch(q.play),
                                        (this.template.playButton.innerHTML = q.pause),
                                        e ||
                                            l.a
                                                .resolve(this.video.play())
                                                .catch(function () {
                                                    t.pause();
                                                })
                                                .then(function () {}),
                                        this.timer.enable('loading'),
                                        this.container.classList.add('dplayer-playing'),
                                        this.options.mutex)
                                    )
                                        for (var n = 0; n < Q.length; n++) this !== Q[n] && Q[n].pause();
                                },
                            },
                            {
                                key: 'pause',
                                value: function (e) {
                                    (this.paused = !0), this.container.classList.remove('dplayer-loading'), this.video.paused || this.bezel.switch(q.pause), (this.template.playButton.innerHTML = q.play), e || this.video.pause(), this.timer.disable('loading'), this.container.classList.remove('dplayer-playing');
                                },
                            },
                            {
                                key: 'switchVolumeIcon',
                                value: function () {
                                    this.volume() >= 0.8 ? (this.template.volumeIcon.innerHTML = q.volumeUp) : this.volume() > 0 ? (this.template.volumeIcon.innerHTML = q.volumeDown) : (this.template.volumeIcon.innerHTML = q.volumeOff);
                                },
                            },
                            {
                                key: 'volume',
                                value: function (e, t) {
                                    return (e = parseFloat(e)), isNaN(e) || ((e = Math.max(e, 0)), (e = Math.min(e, 1)), this.bar.set('volume', e, 'width'), t && this.notice(''.concat(this.tran('Volume'), ' ').concat((100 * e).toFixed(0), '%')), (this.video.volume = e), this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()), this.video.volume;
                                },
                            },
                            {
                                key: 'toggle',
                                value: function () {
                                    this.video.paused ? this.play() : this.pause();
                                },
                            },
                            {
                                key: 'on',
                                value: function (e, t) {
                                    this.events.on(e, t);
                                },
                            },

                            //添加变速播放
                            {
                                key: 'speed',
                                value: function (n) {
                                    this.video.playbackRate = n;
                                    n = n % 1 === 0 ? n + '.0' : n.toString();
                                    this.template.settingButton.innerHTML = n + 'x';
                                },
                            },
                            //增加切换视频功能
                            {
                                key: 'switchVideo',
                                value: function (e, t) {
                                    var speed = this.video.playbackRate;
                                    this.pause(), (this.video.poster = e.pic ? e.pic : ''), (this.video.src = e.url), this.initMSE(this.video, e.type || 'auto'), t && ((this.template.danmakuLoading.style.display = 'block'), this.bar.set('played', 0, 'width'), this.bar.set('loaded', 0, 'width'), (this.template.ptime.innerHTML = '00:00'), (this.template.danmaku.innerHTML = ''));
                                    this.speed(speed);
                                },
                            },
                            {
                                key: 'initMSE',
                                value: function (e, t) {
                                    var n = this;
                                    if (((this.type = t), this.options.video.customType && this.options.video.customType[t])) '[object Function]' === Object.prototype.toString.call(this.options.video.customType[t]) ? this.options.video.customType[t](this.video, this) : console.error('Illegal customType: '.concat(t));
                                    else
                                        switch (('auto' === this.type && (/m3u8(#|\?|$)/i.exec(e.src) ? (this.type = 'hls') : /.flv(#|\?|$)/i.exec(e.src) ? (this.type = 'flv') : /.mpd(#|\?|$)/i.exec(e.src) ? (this.type = 'dash') : (this.type = 'normal')), 'hls' === this.type && (e.canPlayType('application/x-mpegURL') || e.canPlayType('application/vnd.apple.mpegURL')) && (this.type = 'normal'), this.type)) {
                                            case 'hls':
                                                if (window.Hls)
                                                    if (window.Hls.isSupported()) {
                                                        var r = this.options.pluginOptions.hls,
                                                            i = new window.Hls(r);
                                                        (this.plugins.hls = i),
                                                            i.loadSource(e.src),
                                                            i.attachMedia(e),
                                                            this.events.on('destroy', function () {
                                                                i.destroy(), delete n.plugins.hls;
                                                            });
                                                    } else this.notice('Error: Hls is not supported.');
                                                else this.notice("Error: Can't find Hls.");
                                                break;
                                            case 'flv':
                                                if (window.flvjs)
                                                    if (window.flvjs.isSupported()) {
                                                        var o = window.flvjs.createPlayer(
                                                            Object.assign(this.options.pluginOptions.flv.mediaDataSource || {}, {
                                                                type: 'flv',
                                                                url: e.src,
                                                            }),
                                                            this.options.pluginOptions.flv.config
                                                        );
                                                        (this.plugins.flvjs = o),
                                                            o.attachMediaElement(e),
                                                            o.load(),
                                                            this.events.on('destroy', function () {
                                                                o.unload(), o.detachMediaElement(), o.destroy(), delete n.plugins.flvjs;
                                                            });
                                                    } else this.notice('Error: flvjs is not supported.');
                                                else this.notice("Error: Can't find flvjs.");
                                                break;
                                            case 'dash':
                                                if (window.dashjs) {
                                                    var a = window.dashjs.MediaPlayer().create().initialize(e, e.src, !1),
                                                        l = this.options.pluginOptions.dash;
                                                    a.updateSettings(l),
                                                        (this.plugins.dash = a),
                                                        this.events.on('destroy', function () {
                                                            window.dashjs.MediaPlayer().reset(), delete n.plugins.dash;
                                                        });
                                                } else this.notice("Error: Can't find dashjs.");
                                                break;
                                            case 'webtorrent':
                                                if (window.WebTorrent)
                                                    if (window.WebTorrent.WEBRTC_SUPPORT) {
                                                        this.container.classList.add('dplayer-loading');
                                                        var s = this.options.pluginOptions.webtorrent,
                                                            c = new window.WebTorrent(s);
                                                        this.plugins.webtorrent = c;
                                                        var d = e.src;
                                                        (e.src = ''),
                                                            (e.preload = 'metadata'),
                                                            e.addEventListener(
                                                                'durationchange',
                                                                function () {
                                                                    return n.container.classList.remove('dplayer-loading');
                                                                },
                                                                {
                                                                    once: !0,
                                                                }
                                                            ),
                                                            c.add(d, function (e) {
                                                                e.files
                                                                    .find(function (e) {
                                                                        return e.name.endsWith('.mp4');
                                                                    })
                                                                    .renderTo(n.video, {
                                                                        autoplay: n.options.autoplay,
                                                                        controls: !1,
                                                                    });
                                                            }),
                                                            this.events.on('destroy', function () {
                                                                c.remove(d), c.destroy(), delete n.plugins.webtorrent;
                                                            });
                                                    } else this.notice('Error: Webtorrent is not supported.');
                                                else this.notice("Error: Can't find Webtorrent.");
                                        }
                                },
                            },
                            {
                                key: 'initVideo',
                                value: function (e, t) {
                                    var n = this;
                                    this.initMSE(e, t),
                                        this.on('durationchange', function () {
                                            1 !== e.duration && e.duration !== 1 / 0 && (n.template.dtime.innerHTML = c.secondToTime(e.duration));
                                        }),
                                        this.on('progress', function () {
                                            var t = e.buffered.length ? e.buffered.end(e.buffered.length - 1) / e.duration : 0;
                                            n.bar.set('loaded', t, 'width');
                                        }),
                                        this.on('error', function () {
                                            n.video.error && n.tran && n.notice && 'webtorrent' !== n.type && n.notice(n.tran('Video load failed'), -1);
                                        }),
                                        this.on('ended', function () {
                                            n.bar.set('played', 1, 'width'), n.loop ? (n.seek(0), n.play()) : n.pause();
                                        }),
                                        this.on('play', function () {
                                            n.paused && n.play(!0);
                                        }),
                                        this.on('pause', function () {
                                            n.paused || n.pause(!0);
                                        }),
                                        this.on('timeupdate', function () {
                                            n.bar.set('played', n.video.currentTime / n.video.duration, 'width');
                                            var e = c.secondToTime(n.video.currentTime);
                                            n.template.ptime.innerHTML !== e && (n.template.ptime.innerHTML = e);
                                        });
                                    for (
                                        var r = function (t) {
                                                e.addEventListener(n.events.videoEvents[t], function () {
                                                    n.events.trigger(n.events.videoEvents[t]);
                                                });
                                            },
                                            i = 0;
                                        i < this.events.videoEvents.length;
                                        i++
                                    )
                                        r(i);
                                    this.volume(this.options.volume);
                                },
                            },
                            {
                                key: 'notice',
                                value: function (e) {
                                    var t = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.8;
                                    (this.template.notice.innerHTML = e),
                                        (this.template.notice.style.opacity = r),
                                        this.noticeTime && clearTimeout(this.noticeTime),
                                        this.events.trigger('notice_show', e),
                                        n > 0 &&
                                            (this.noticeTime = setTimeout(function () {
                                                (t.template.notice.style.opacity = 0), t.events.trigger('notice_hide');
                                            }, n));
                                },
                            },
                            {
                                key: 'resize',
                                value: function () {
                                    this.events.trigger('resize');
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    Q.splice(Q.indexOf(this), 1), this.pause(), this.controller.destroy(), this.timer.destroy(), (this.video.src = ''), (this.container.innerHTML = ''), this.events.trigger('destroy');
                                },
                            },
                        ]) && J(t.prototype, n),
                        r && J(t, r),
                        e
                    );
                })();
            t.default = Z;
        },
    ]).default;
});
