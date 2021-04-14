let images = document.querySelectorAll('.image');
let array = new Array(6);
array[0] = images[0];
array[1] = images[1];
array[2] = images[2];
array[3] = images[6];
array[4] = images[5];
array[5] = images[3];
let ball = document.getElementById('ball');
let i = 0;
let id;
let j = 0;
let b = false;

function start() {

    if (i > array.length - 1) {
        i = 0;
    }
    ball.style.position = 'absolute';
    ball.style.top = array[i].offsetTop + 9 + 'px';
    ball.style.left = array[i].offsetLeft + 9 + 'px';
    i++;

    id = setTimeout(start, 500);
    j++;


}

function stop() {
    clearTimeout(id);
}