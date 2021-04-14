let arr = ["https://cdn.pixabay.com/photo/2017/10/29/11/11/fantasy-2899453__480.jpg", "https://cdn.pixabay.com/photo/2017/12/05/20/28/fantasy-3000308__480.jpg", "https://cdn.pixabay.com/photo/2021/03/24/10/00/thunderstorm-6119738__480.jpg", "https://cdn.pixabay.com/photo/2018/05/20/22/55/thunderstorm-3417042__480.jpg"];

let image = document.getElementById('image');
let i = 0;
image.addEventListener('mousedown', () => {
    if (i > 3) {
        image.src = "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846__480.jpg";
        i = 0;
    } else {
        image.src = arr[i];
        i++;
    }
    console.log(i);
});