function myFunction() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let eRegex = /[^\s@\W]+\.?_?\.?[a-z]?@[^\s@\W]+\.?[^\s@\W]+?\.?[^\s@\W]+?\.?(com|in|edu)/;
    if (eRegex.test(email.value)) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.response);
                alert("Your JSON token is: " + response["token"]);
            } else if (this.readyState == 4 && this.status == 400) {
                alert("User not found");
            }
        }

        xhttp.open("POST", "https://reqres.in/api/login", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Read about headers :) --> to be continued
        xhttp.send(`email=${email.value}&password=${password.value}`);
    } else {
        alert(`Enter a valid email...`);
    }
}
let element = document.getElementById(btn);
email.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        btn.click();
    }
});
password.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        btn.click();
    }
});