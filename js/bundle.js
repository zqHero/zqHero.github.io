!function () {
    "use strict";
    var e = document.querySelector("html"), o = document.querySelector("body"),
        t = document.querySelector(".menu-toggle"), c = document.querySelector(".icon-menu"),
        n = document.querySelector(".site-menu"), l = document.querySelector(".social-menu"),
        r = document.querySelector(".to-top");
    t && t.addEventListener("click", function () {
        n.classList.toggle("collapsed"), l.classList.toggle("collapsed"), c.classList.toggle("icon-menu"), c.classList.toggle("icon-close")
    });
    !function () {
        var e = document.getElementsByClassName("error-emoji")[0],
            o = ["\\(o_o)/", "(o^^)o", "(˚Δ˚)b", "(^-^*)", "(≥o≤)", "(^_^)b", "(·_·)", "(='X'=)", "(>_<)", "(;-;)", "\\(^Д^)/"];
        if (e) {
            var t = o[Math.floor(Math.random() * o.length)];
            e.appendChild(document.createTextNode(t))
        }
    }(), objectFitImages("img.post-cover");
    var s = 0, i = !1;
    window.addEventListener("scroll", function () {
        s = 0 === o.scrollTop ? e.scrollTop : o.scrollTop, i || window.requestAnimationFrame(function () {
            s >= 600 ? r.classList.remove("is-hide") : r.classList.add("is-hide"), i = !1
        }), i = !0
    });
    var a = new SmoothScroll('a[href*="#"]');
    r.addEventListener("click", function () {
        a.animateScroll(0)
    })
}();
//# sourceMappingURL=bundle.js.map
