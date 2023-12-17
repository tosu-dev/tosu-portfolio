window.onload = () => {

    projects_cards = document.querySelectorAll(".projects .card");

    projects_cards.forEach(card => {
        card.onclick = () => {
            if (card.classList.contains("is-flipped")) {
                card.classList.remove("is-flipped");
            }
            else {
                card.classList.add("is-flipped");
            }
        }
    });

}