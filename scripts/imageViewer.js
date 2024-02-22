// TODO : Allow slideshows

let image_viewer = $('#image-viewer');
let image_viewer_close = $('#image-viewer .close');
let image_viewer_fullimage = $('#full-image');

image_viewer_close.click(function() {
    image_viewer.hide();
});

/**
 * Show  the full image in the image viewer
 * @param {HTML Object} image 
 */
export function showImage(image) {
    image_viewer_fullimage.attr("src", $(image).attr("src"));
    image_viewer.show();
}