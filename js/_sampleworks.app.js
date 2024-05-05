window.addEventListener("load", function () {
    const loaded = document.getElementById("sample-works");
    const loader = document.getElementById("loader");


    // Script is loaded
    loaded.classList.remove("hidden");
    loaded.classList.add("visible");

    loader.classList.remove("flex");
    loader.classList.add("hidden");

    console.log("Script loaded");

    let e = document.getElementById("header");
    window.addEventListener("scroll", function s() {
        window.scrollY > 0
            ? (e.classList.remove("bg-transparent"), e.classList.add("bg-[#F6E0ED]"), e.classList.add("bg-[shadow-lg]"))
            : (e.classList.remove("bg-[#F6E0ED]"), e.classList.remove("shadow-lg"), e.classList.add("bg-transparent"));
    });



});