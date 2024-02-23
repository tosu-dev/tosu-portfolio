import { setSlides, plusSlides } from "./slideshow.js";

let image_viewer = $("#image-viewer");
let image_viewer_close = $("#image-viewer .close");
let image_viewer_content = $("#image-viewer .modal-content")


image_viewer_close.click(function() {
    image_viewer.hide();
});


/**
 * Show the content in the modal (like an image or a slideshow)
 * @param {HTML Element} content 
 */
export function showContent(content) {
    let newContent = content.cloneNode(true);

    // if slideshow
    if (newContent.className.includes("slideshow")) {
        // change name
        $(newContent).attr("slideshow-name", "image-viewer-slideshow");
        // set slides
        setSlides("image-viewer-slideshow", $(newContent).find(".slide"));
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
}
