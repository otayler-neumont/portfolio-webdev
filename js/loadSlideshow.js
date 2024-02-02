// load second image, first image is preloaded
let currentImage = 2;
const maxImages = 3;

function setImage() {
    if(currentImage > maxImages)
        currentImage = 1;

    document.getElementById('slideShowImg').setAttribute('src', 'images/' + currentImage.toString() + '.jpg');
    currentImage++;
}
setInterval(setImage, 10000);