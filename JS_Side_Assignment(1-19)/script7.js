var user = prompt("Enter your name");
var arr = new Array(3);
for (let index = 0; index < arr.length; index++) {
    arr[index] = prompt("Enter word: " + (index + 1));
}
var bgcolor = prompt("Enter a color for highlight");
document.write(`<h1>Hello ${user}</h1>`);
document.write(`<p>Today a named came to our school to talk to us about her job. She said the most important skill you need to know to do her job is to be able to around
    <span style= "background-color: ${bgcolor}">${arr[0]}</span>
    . She said it was easy for her to learn her job because she loved to when she was my age--and that helps a lot! If you're considering her profession, I hope you can be near
    <span style= "background-color: ${bgcolor}">${arr[1]}</span>
    . That's very important! If you get too distracted in that situation you won't be able to next to
    <span style= "background-color: ${bgcolor}">${arr[2]}</span>
    </p>`);