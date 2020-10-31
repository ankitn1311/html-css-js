var path = document.getElementById('path');
var image = document.getElementById('image-name');
var opacity = document.getElementById('opacity');
var blur = document.getElementById('blur');

opacity.value = 100;
blur.value = 0;
image.style.filter = `blur(${blur.value}px)`; 
image.src = 'image.jpg';

path.addEventListener('change',() => {
    image.src = document.getElementById('path').value;
});
opacity.addEventListener('mouseup', onOpacityChange);

function onOpacityChange() {

    var op = opacity.value / 100; 
    console.log(op);

    image.style.opacity = op;
}