// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Select elements
const elements = document.querySelectorAll(".services, .about, .card");

// Add hidden initially
elements.forEach(el => {
    el.classList.add("hidden");
});

// Scroll animation
window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("show");
        }
    });
});