window.addEventListener("load", function () {
    const loaded = document.getElementById("sample-works");
    const loader = document.getElementById("loader");

    const script = document.createElement("script");
    script.src = "./js/macy.js";
    
    script.onload = function() {
        // Script is loaded
        loaded.classList.remove("hidden");
        loaded.classList.add("visible");

        loader.classList.remove("flex");
        loader.classList.add("hidden");

        console.log("Script loaded");
    };

    document.head.appendChild(script);
});


    document.addEventListener("DOMContentLoaded", function () {
        let e = document.getElementById("header");
        window.addEventListener("scroll", function s() {
            window.scrollY > 0
                ? (e.classList.remove("bg-transparent"), e.classList.add("bg-[#F6E0ED]"), e.classList.add("bg-[shadow-lg]"))
                : (e.classList.remove("bg-[#F6E0ED]"), e.classList.remove("shadow-lg"), e.classList.add("bg-transparent"));
        });
    });

var macy = Macy({
    container: '#macy',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 4,
    breakAt: {
        1200: 3,
        940: 3,
        520: 2,
        400: 2
    }
});