function setCookie(name, value, exDays) {
    let date = new Date();
    date.setTime(date.getTime() + exDays * 24 * 60 * 60 * 1000);
    date = date.toUTCString();
    document.cookie = `${name}=${value}; expires = ${date}; path=/;`;
}

setCookie("counter", "0", 200);

function visitCounter() {
    let visits = (document.cookie).charAt(8);
    visits = parseInt(visits);
    if (visits == 0) {
        visits = 1;
        setCookie("counter", visits.toString(), 200);
        alert("Welcome to my page, you visited for the first time!");
    } else {
        visits += 1;
        alert("You came here for time " + visits);
        setCookie("counter", visits.toString(), 200);
        console.log((document.cookie).charAt(8));
    }
}
window.onload = visitCounter();