let image = document.getElementById('image');
let arr = image.attributes;
image.addEventListener('mouseover', () => {
    image.src = "https://cdn.pixabay.com/photo/2020/07/03/14/28/water-5366496__480.jpg";
});

image.addEventListener('mouseout', () => {
    image.src = "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846__480.jpg";
});