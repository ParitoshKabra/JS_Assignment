let date = new Date();
let d = date.getTime();
let expdays = d + 365 * 24 * 60 * 60 * 1000;

if (!document.cookie.startsWith('counter')) {
    alert("Cookie is reset");
    document.cookie = `counter=0;expires=${expdays};path=/`;
}

let x = document.cookie.indexOf(';');
console.log(x);
let visits = document.cookie.substring(8, x);
console.log(visits);
visits = parseInt(visits);

function visitCounter() {
    if (!visits) {
        visits = 1;
        document.cookie = `counter=${visits};expires=${expdays}`;
        alert("Welcome to my page!");
        document.write(`<h1>Whoaa!! You came here for the first time!!</h1><p style="color:red;font-weight:bold; font-size:30px">Cyborg welcomes you :)</p>`);
    } else {
        visits += 1;
        document.cookie = `counter=${visits};expires=${expdays}`;
        alert("You are coming here since " + visits + " times!!");
        if (visits == 2) {
            document.write(`<h1>Whoaa!! You came here for the ${visits}<sup>nd</sup> time!!</h1>`);
        } else if (visits == 3) {
            document.write(`<h1>Whoaa!! You came here for the ${visits}<sup>rd</sup> time!!</h1>`);
        } else {
            document.write(`<h1>Whoaa!! You came here for the ${visits}<sup>th</sup> time!!</h1>`);

        }

    }
}
window.onload = visitCounter();
// local storage vs session storage vs cookie vs sessions
// local storage vs session storage vs cookie vs sessions