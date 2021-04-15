document.cookie = `counter=0;expires=Sun, 15 Jul 2022 00:00:01 GMT`;
let visits = document.cookie.charAt(8);

visits = parseInt(visits);

function visitCounter() {
    if (!visits) {
        visits = 1;
        document.cookie = `counter=${visits};expires=Sun, 15 Jul 2022 00:00:01 GMT`;
        alert("Welcome to my page!");
    } else {
        visits += 1;
        document.cookie = `counter=${visits};expires=Sun, 15 Jul 2022 00:00:01 GMT`;
        alert("You are coming here since " + visits + " times!!");
    }
}
window.onload = visitCounter();
// local storage vs session storage vs cookie vs sessions