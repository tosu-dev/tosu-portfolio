import { showContent } from "./imageViewer.js";

/**
 * Flip a card thanks to the class "is-flipped"
 * @param {Jquery Object} card 
 */
function flipCard(card) {
    if (card.hasClass("is-flipped")) {
        card.removeClass("is-flipped");
    }
    else {
        card.addClass("is-flipped");
    }
}

let project_cards = $(".projects .card");
let project_card_links = $(".projects .card .link");
let project_card_previews = $(".projects .card .card-face.front > .preview");
let project_card_slideshows =  $(".projects .card .card-face.front > .slideshow");

project_cards.click(function() {
    flipCard($(this));
});

project_card_links.click(function(e) {
    e.stopPropagation();
});

project_card_previews.click(function(e) {
    e.stopPropagation();
    showContent(this);
});

project_card_slideshows.click(function(e) {
    e.stopPropagation();
    showContent(this);
});
