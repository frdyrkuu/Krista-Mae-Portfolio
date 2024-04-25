var splide;

document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll("img[data-src]");
    var loadedImages = 0;

    images.forEach(function (img) {
        var src = img.getAttribute("data-src");
        var tempImg = new Image();
        tempImg.onload = function () {
            loadedImages++;
            if (loadedImages === images.length) {
                // All images are loaded, do something if needed
            }
            img.setAttribute("src", src); // Display the image once loaded
        };
        tempImg.src = src; // Start loading the image
    });
});


// Function to initialize Splide with appropriate perPage value
function initSplide() {
    var perPageValue = window.matchMedia("(max-width: 767px)").matches ? 2 : 4;

    if (splide) {
        splide.destroy();
    }

    splide = new Splide('.splide', {
        type: 'loop',
        perPage: perPageValue,
        autoplay: true,
    });

    splide.mount();
}

// Initialize Splide on page load
window.addEventListener('load', function () {
    initSplide();
});

// Reinitialize Splide when the window size changes
window.addEventListener('resize', function () {
    initSplide();
});
var macy = Macy({
    container: '#macy',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 4,
    breakAt: {
        1200: 5,
        940: 3,
        520: 2,
        400: 1
    }
});



// Wrap the script in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    // Select the header element
    const header = document.getElementById('header');
    function handleScroll() {
        if (window.scrollY > 0) {
            header.classList.remove('bg-transparent');
            header.classList.add('bg-[#F6E0ED]');
            header.classList.add('bg-[shadow-lg]');

        } else {
            header.classList.remove('bg-[#F6E0ED]');
            header.classList.remove('shadow-lg');
            header.classList.add('bg-transparent');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

function hamburger() {
    var body = document.getElementById('body');
    var button = document.getElementById('hamburger');
    var content = document.getElementById('hamburger_content');

    if (button.onclick) {
        if (content.classList.contains("invisible")) {
            // to open the hamburger content
            content.classList.remove("invisible")
            content.classList.add("flex")
            body.classList.add("overflow-y-hidden")
            body.classList.add("h-[100%]")
        } else {
            // to close the hamburger content
            content.classList.add("invisible")
            content.classList.remove("flex")
            body.classList.remove("overflow-y-hidden")
            body.classList.remove("h-[100%]")
        }
    }
}