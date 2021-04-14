let images = document.querySelectorAll('.image');
let arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
    arr[i] = images[i].src;

}
images[0].addEventListener('mouseover', () => {
    images[0].src = "https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830__180.jpg";
});
images[0].addEventListener('mouseout', () => {
    images[0].src = arr[0];
});

images[1].addEventListener('mouseover', () => {
    images[1].src = "https://cdn.pixabay.com/photo/2021/04/07/02/38/waterfall-6157891__480.jpg"
});
images[1].addEventListener('mouseout', () => {
    images[1].src = arr[1];
});

images[2].addEventListener('mouseover', () => {
    images[2].src = "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__180.jpg"
});
images[2].addEventListener('mouseout', () => {
    images[2].src = arr[2];
});