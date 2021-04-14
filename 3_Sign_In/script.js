function myFunction() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response);
            alert("Your JSON token is: " + response["token"]);
        }
    }

    xhttp.open("POST", "https://reqres.in/api/login", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Read about headers :) --> to be continued
    xhttp.send(`email=${email.value}&password=${password.value}`);
}