/*
 Color animation 1.6.0
 http://www.bitstorm.org/jquery/color-animation/
 Copyright 2011, 2013 Edwin Martin
 Released under the MIT and GPL licenses.
*/
'use strict'; (function (d) {
    function h(a, b, e) { var c = "rgb" + (d.support.rgba ? "a" : "") + "(" + parseInt(a[0] + e * (b[0] - a[0]), 10) + "," + parseInt(a[1] + e * (b[1] - a[1]), 10) + "," + parseInt(a[2] + e * (b[2] - a[2]), 10); d.support.rgba && (c += "," + (a && b ? parseFloat(a[3] + e * (b[3] - a[3])) : 1)); return c + ")" } function f(a) {
        var b; return (b = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a)) ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16), 1] : (b = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a)) ? [17 * parseInt(b[1], 16), 17 * parseInt(b[2],
            16), 17 * parseInt(b[3], 16), 1] : (b = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a)) ? [parseInt(b[1]), parseInt(b[2]), parseInt(b[3]), 1] : (b = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a)) ? [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10), parseFloat(b[4])] : l[a]
    } d.extend(!0, d, {
        support: {
            rgba: function () {
                var a = d("script:first"), b = a.css("color"), e = !1; if (/^rgba/.test(b)) e = !0; else try {
                    e = b != a.css("color", "rgba(0, 0, 0, 0.5)").css("color"),
                    a.css("color", b)
                } catch (c) { } return e
            }()
        }
    }); var k = "color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" "); d.each(k, function (a, b) { d.Tween.propHooks[b] = { get: function (a) { return d(a.elem).css(b) }, set: function (a) { var c = a.elem.style, g = f(d(a.elem).css(b)), m = f(a.end); a.run = function (a) { c[b] = h(g, m, a) } } } }); d.Tween.propHooks.borderColor = {
        set: function (a) {
            var b = a.elem.style, e = [], c = k.slice(2, 6); d.each(c, function (b, c) { e[c] = f(d(a.elem).css(c)) }); var g = f(a.end);
            a.run = function (a) { d.each(c, function (d, c) { b[c] = h(e[c], g, a) }) }
        }
    }; var l = {
        aqua: [0, 255, 255, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], black: [0, 0, 0, 1], blue: [0, 0, 255, 1], brown: [165, 42, 42, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgrey: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkviolet: [148, 0, 211, 1], fuchsia: [255,
            0, 255, 1], gold: [255, 215, 0, 1], green: [0, 128, 0, 1], indigo: [75, 0, 130, 1], khaki: [240, 230, 140, 1], lightblue: [173, 216, 230, 1], lightcyan: [224, 255, 255, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], navy: [0, 0, 128, 1], olive: [128, 128, 0, 1], orange: [255, 165, 0, 1], pink: [255, 192, 203, 1], purple: [128, 0, 128, 1], violet: [128, 0, 128, 1], red: [255, 0, 0, 1], silver: [192, 192, 192, 1], white: [255, 255, 255, 1], yellow: [255, 255,
                0, 1], transparent: [255, 255, 255, 0]
    }
})(jQuery);
