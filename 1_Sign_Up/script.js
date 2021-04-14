let message = document.getElementById('reg-message');
let form = {
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    age: document.getElementById('age'),
    gender: document.getElementById('gender'),
    email: document.getElementById('email'),
    password: document.getElementById('word'),
    cword: document.getElementById('cword'),
    city: document.getElementById('city')
};
// console.log(form);
let regExp = {
    name: /^.*\s+?.*$/,
    phone: /^[6-9]\d{9}$/,
    age: /^\d{1,3}$/,
    gender: /\b(male|female|other).*/,
    email: /[^\s@\W]+\.?_?\.?[a-z]?@[^\s@\W]+\.?[^\s@\W]+?\.?[^\s@\W]+?\.?(com|in|edu)/,
    password: /(?=.^{8,}$)(?=.*\d)(?=.*[@#$%&*!]+)(?=[A-Za-z]+)/,
    cword: /[\w]+[@$#%&*]+[0-9]+/,
    city: /\b\w+\b/
};
let labels = {
    name: "name. Should include only alphabets and one whitespace",
    phone: "phone number",
    age: "age",
    gender: "gender-option",
    email: "email-syntax",
    password: "password format. Must include atleast a digit and special character and atleast 8 characters.",
    cword: "",
    city: "city-name. Should containe only words."
};
let ul = document.getElementById('reg-message');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function regCheck() {
    let ul = document.getElementById('reg-message');

    removeAllChildNodes(ul);
    for (const key in form) {
        if (form[key].value.length == 0) {
            let li = document.createElement('li');
            let textNode = document.createTextNode(key + " field is empty!");
            let ul = document.getElementById('reg-message');
            ul.appendChild(li);
            li.appendChild(textNode);
            ul.style.display = 'block';
        } else {
            if (key == 'cword') {
                if (form[key].value != form["password"].value) {
                    let li = document.createElement('li');
                    let textNode = document.createTextNode("Password entered does not match when confirmed");
                    let ul = document.getElementById('reg-message');
                    ul.appendChild(li);
                    li.appendChild(textNode);
                    ul.style.display = 'block';
                }
            } else {

                if (!regExp[key].test(form[key].value)) {
                    let li = document.createElement('li');
                    let textNode = document.createTextNode("Invalid " + labels[key]);
                    let ul = document.getElementById('reg-message');
                    ul.appendChild(li);
                    li.appendChild(textNode);
                    ul.style.display = 'block';
                    console.log(key);
                }

            }
        }
    }
}