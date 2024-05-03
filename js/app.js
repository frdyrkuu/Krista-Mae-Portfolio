function initSplide() {
    var e = window.matchMedia("(max-width: 767px)").matches ? 2 : 4;
    splide && splide.destroy(), (splide = new Splide(".splide", { type: "loop", focus: "center", autoplay: !0, height: "15rem", perPage: e })).mount();

}
window.addEventListener("load", function () {
    initSplide();
    console.log("content loaded");
}),



    window.addEventListener("resize", function () {
        initSplide();
    });

var splide,
    macy = Macy({ container: "#macy", trueOrder: !1, waitForImages: !1, margin: 24, columns: 4, breakAt: { 1200: 4, 940: 2, 520: 2, 400: 2 } });
function hamburger() {
    var e = document.getElementById("body"),
        s = document.getElementById("hamburger"),
        t = document.getElementById("hamburger_content");
    s.onclick &&
        (t.classList.contains("invisible")
            ? (t.classList.remove("invisible"), t.classList.add("flex"), e.classList.add("overflow-y-hidden"), e.classList.add("h-[100%]"))
            : (t.classList.add("invisible"), t.classList.remove("flex"), e.classList.remove("overflow-y-hidden"), e.classList.remove("h-[100%]")));
}
document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("header");
    window.addEventListener("scroll", function s() {
        window.scrollY > 0
            ? (e.classList.remove("bg-transparent"), e.classList.add("bg-[#F6E0ED]"), e.classList.add("bg-[shadow-lg]"))
            : (e.classList.remove("bg-[#F6E0ED]"), e.classList.remove("shadow-lg"), e.classList.add("bg-transparent"));
    });
});

