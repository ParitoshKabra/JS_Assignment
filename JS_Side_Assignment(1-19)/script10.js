let images = document.querySelectorAll('.image');
let array = new Array(3);
for (let i = 0; i < array.length; i++) {
    array[i] = images[i].src;

}
let newArr = ["https://media.istockphoto.com/photos/morning-view-at-holy-ghats-of-varanasi-india-picture-id540842160?k=6&m=540842160&s=612x612&w=0&h=e_XpUZDo3SQEHZHNwU2bKirnU0yB8AGDe9bdr5Ui8YI=", "https://media.istockphoto.com/photos/interior-of-mosque-jama-masjid-delhi-india-picture-id520494070?k=6&m=520494070&s=612x612&w=0&h=D0P2hGwBouw61gwTYNXrue2WF4gRBKWUPHMP5rESiw8=", "https://cdn.pixabay.com/photo/2021/04/05/13/10/cherry-blossoms-6153384__480.jpg"];
images[3].addEventListener('mouseover', () => {
    for (let i = 0; i < array.length; i++) {
        images[i].src = newArr[i];
    }
});
images[3].addEventListener('mouseout', () => {
    for (let i = 0; i < array.length; i++) {
        images[i].src = array[i];
    }
});