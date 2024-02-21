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

/**
 * Get a slideshow object by his name
 * @param {String} name
 * @returns The slideshow object
 */
function getSlideshowByName(name) {
    return project_card_slideshows.find(s => s.name === name);
}

/**
 * Pass n slides of a slideshow
 * @param {Event} e 
 * @param {Int} n : The number of slides you want to pass
 */
function plusSlides(e, n) {
    e.stopPropagation();
    let slideshow = getSlideshowByName($(e.target).parent().attr("slideshow-name"));
    showSlide(slideshow, slideshow.current + n);
}

/**
 * Show the n slide of a slideshow
 * @param {Object} slideshow : The slideshow
 * @param {Int} n : The number of the slide you want to show
 */
function showSlide(slideshow, n) {
    n %= slideshow.slides.length;
    slideshow.current = Math.abs(n);
    for (let i = 0; i < slideshow.slides.length; i++) {
        $(slideshow.slides[i]).hide();
    }
    $(slideshow.slides[slideshow.current]).show();
}

let project_cards = $(".projects .card");
let project_card_links = $(".projects .card .link");
let project_card_previews = $(".projects .card .preview")
let project_card_slideshows = []
$.each($(".projects .card .preview-slideshow"), function(i, previewSlideshow) {
    let slideshow = {
        name: $(previewSlideshow).attr("slideshow-name"), 
        slides: $(previewSlideshow).find(".slide"), 
        current: 0
    };
    project_card_slideshows.push(slideshow);
    showSlide(slideshow, 0);
});

let image_viewer = $('#image-viewer');
let image_viewer_close = $('#image-viewer .close');
let image_viewer_fullimage = $('#full-image');


project_cards.click(function() {
    flipCard($(this));
});

project_card_links.click(function(e) {
    e.stopPropagation();
});

project_card_previews.click(function(e) {
    e.stopPropagation();
    image_viewer_fullimage.attr("src", $(this).attr("src"));
    image_viewer.show();
});
    
image_viewer_close.click(function() {
    image_viewer.hide();
});


