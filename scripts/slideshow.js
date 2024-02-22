/*

Slideshow HTML :

    <div class="slideshow" slideshow-name="name">
        <div class="slide">
            <img src="path" alt="...">
        </div>
        <div class="slide">
            <img src="path" alt="...">
        </div>
        <a class="slideshow-prev">&#10094;</a>
        <a class="slideshow-next">&#10095;</a>
    </div>

*/


/**
 * Add a raw slideshow to the collection
 * @param {HTML} rawSlideshow : The HTML Object
 */
function addSlideshow(rawSlideshow) {
    let slideshow = {
        name: $(rawSlideshow).attr("slideshow-name"), 
        slides: $(rawSlideshow).find(".slide"), 
        current: 0
    };
    slideshows.push(slideshow);
    showSlide(slideshow, slideshow.current);
}

/**
 * Pass n slides of a slideshow
 * @param {Event} e 
 * @param {Int} n : The number of slides you want to pass
 */
function plusSlides(e, n) {
    console.log(e);
    let slideshow = getSlideshowByName($(e.target).parent().attr("slideshow-name"));
    showSlide(slideshow, slideshow.current + n);
}

/**
 * Get a slideshow object by his name
 * @param {String} name
 * @returns The slideshow object
 */
function getSlideshowByName(name) {
    return slideshows.find(s => s.name === name);
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

let slideshows = []
let prevs = $(".slideshow-prev")
let nexts = $(".slideshow-next");

$.each($(".slideshow"), function(i, slideshow) {
    addSlideshow(slideshow);
});

prevs.click(function(e) {
    e.stopPropagation();
    plusSlides(e, -1);
});

nexts.click(function(e) {
    e.stopPropagation();
    plusSlides(e, 1);
});