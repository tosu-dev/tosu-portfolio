import { setCurrentSlide, setSlides, getSlideshowByName, plusSlides } from "./slideshow.js";

const image_viewer = $("#image-viewer");
const image_viewer_close = $("#image-viewer .close");
const image_viewer_content = $("#image-viewer .modal-content")


image_viewer_close.click(function() {
    image_viewer.hide();
});

image_viewer.click(function() {
    image_viewer.hide();
})


/**
 * Show the content in the modal (like an image or a slideshow)
 * @param {HTML Element} content 
 */
export function showContent(content) {
    const newContent = content.cloneNode(true);

    // if slideshow
    if (newContent.className.includes("slideshow")) {
        // change name
        $(newContent).attr("slideshow-name", "image-viewer-slideshow");
        // set slides
        setSlides("image-viewer-slideshow", $(newContent).find(".slide"));
        setCurrentSlide("image-viewer-slideshow", getSlideshowByName($(content).attr("slideshow-name")).current)
        // onclick event because it is a clone content
        $(newContent).children(".slideshow-prev").click(function(e) {
            e.stopPropagation();
            plusSlides(e, -1);
        });
        $(newContent).children(".slideshow-next").click(function(e) {
            e.stopPropagation();
            plusSlides(e, 1);
        });
    }

    image_viewer_content.html(newContent);
    image_viewer.show();

    const image_viewer_img = $("#image-viewer .modal-content img")
    image_viewer_img.click(function(e) {
        e.stopPropagation();
    })
}
