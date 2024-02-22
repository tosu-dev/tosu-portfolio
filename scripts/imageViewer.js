// TODO : Allow slideshows

let image_viewer = $('#image-viewer');
let image_viewer_close = $('#image-viewer .close');
let image_viewer_fullimage = $('#full-image');
let zoom = 1;

image_viewer_close.click(function() {
    image_viewer.hide();
});

image_viewer.bind('mousewheel DOMMouseScroll', function(event) 
{
    if(event.ctrlKey == true)
    {
        event.preventDefault();
        if(event.originalEvent.deltaY < 0) { // UP
            zoom += 0.1;
            zoom = Math.min(4, zoom);
        }
        else { // DOWN
            zoom -= 0.1,
            zoom = Math.max(0.5, zoom);
        }
        zoomImage();
    }
});

function zoomImage() {
    image_viewer_fullimage.css("transform", `translate(-50%, -50%) scale(${zoom})`);
}

/**
 * Show  the full image in the image viewer
 * @param {HTML Object} image 
 */
export function showImage(image) {
    zoom = 1;
    zoomImage();
    image_viewer_fullimage.attr("src", $(image).attr("src"));
    image_viewer.show();
}