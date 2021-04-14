let arr = ["https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "https://cdn.pixabay.com/photo/2014/07/31/22/56/balls-407081__480.jpg", "https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010__480.jpg", "https://cdn.pixabay.com/photo/2017/05/14/17/14/red-2312548__480.jpg", "https://cdn.pixabay.com/photo/2016/01/06/21/42/light-bulbs-1125016__480.jpg"];

// let lastIndex = arr.length - 1;
let frontIndex = 0;
let image = document.getElementById('image');
let next1 = document.getElementById('1');
let previous = document.getElementById('2');

function prev() {
    if (frontIndex - 1 < 0) {
        previous.style.display = 'none';
    } else {
        frontIndex--;
        next1.style.display = 'inline';
        image.src = arr[frontIndex];
        console.log(frontIndex);
    }
}

function next() {
    if (frontIndex + 1 > arr.length - 1) {
        next1.style.display = 'none';
    } else {
        frontIndex++;
        previous.style.display = 'inline';
        image.src = arr[frontIndex];
        console.log(frontIndex);
    }
}