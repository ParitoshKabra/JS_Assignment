let i = 1;

function func() {
    if (i == 1) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let obj = JSON.parse(this.response);

                let users = document.querySelectorAll('.username>.para');
                let userEmail = document.querySelectorAll('.username>.para1');
                console.log(users);
                let userAvatar = document.querySelectorAll('.username>img');
                console.log(users);
                console.log(obj);
                let array = obj["data"];

                for (let i = 0; i < array.length; i++) {
                    let node = document.createTextNode("Id " + array[i]["id"] + ": " + array[i]["first_name"] + " " + array[i]["last_name"]);
                    let node1 = document.createTextNode(`Email:` + array[i]["email"]);
                    users[i].appendChild(node);
                    userEmail[i].appendChild(node1);
                    userAvatar[i].src = array[i]["avatar"];
                }

            }
        }
        xhttp.open("GET", "https://reqres.in/api/users", true);
        xhttp.send();
        let element = document.querySelector('.container');
        element.classList.add('visible');
        i--;
    }
}