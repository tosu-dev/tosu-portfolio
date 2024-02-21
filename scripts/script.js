function flipCard(card) {
    if (card.hasClass("is-flipped")) {
        card.removeClass("is-flipped");
    }
    else {
        card.addClass("is-flipped");
    }
}

// DOCUMENT READY
$(() => {

    let project_cards = $(".projects .card");
    let project_card_links = $(".projects .card .link");
    let project_card_previews = $(".projects .card .preview")

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

});

