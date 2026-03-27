// simple scroll animation trigger (optional improvement)
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 50){
            card.style.opacity = "1";
        }
    });
});