let form = {
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    age: document.getElementById('age'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    cword: document.getElementById('cword'),
    city: document.getElementById('city')
};
// console.log(form);
let regExp = {
    name: /^(Dr.|Mr.|Mrs.)?[A-Za-z]+'?\.?\s?[A-Za-z]*'?\.?\s?[A-Za-z]*$/,
    phone: /^((\+?(91)?-?)|(0?))[6-9]\d{9}$/,
    age: /^\d\d?\d?$/,
    email: /[^\s@\W]+\.?_?\.?[a-z]?@[^\s@\W]+\.?[^\s@\W]+?\.?[^\s@\W]+?\.?(com|in|edu)/,
    password: /(?=.{8,})(?=.*\d+)(?=.*\W+)(?=[A-Za-z]+)/,
    cword: /(?=.{8,})(?=.*\d+)(?=.*\W+)(?=[A-Za-z]+)/,
    city: /^([a-zA-Z]+'?\s?)*$/
};
let labels = {
    name: "name. Should include only alphabets.",
    phone: "phone number",
    age: "age",
    email: "email-syntax",
    password: "password format. Must include atleast a digit and special character and atleast 8 characters.",
    cword: "form. Passowrd should match when confirmed",
    city: "city-name. Should contain only words."
};
let errorP = document.querySelectorAll('.error');
let error = {
    name: errorP[0],
    phone: errorP[1],
    age: errorP[2],
    email: errorP[3],
    password: errorP[4],
    cword: errorP[5],
    city: errorP[6]
}
let inputs = document.querySelectorAll('.inputF');

function regCheck() {
    let b = false;

    for (const key in form) {
        if (!regExp[key].test(form[key].value)) {
            b = true;
        }
    }
    if (b) {
        alert("Some credentials are invalid! Please recheck");
    }
}
document.querySelectorAll('.inputF').forEach(item => {
    item.addEventListener('change', () => {
        error[item.id].innerHTML = "";
        if (item.value.length == 0) {
            error[item.id].style.display = 'none';
        } else {
            if (item.id == 'cword') {
                console.log(item.id);
                if (form['cword'].value != form['password'].value) {
                    let text = document.createTextNode("Invalid " + labels[item.id]);
                    error[item.id].appendChild(text);
                    error[item.id].style.display = 'block';
                } else {
                    error[item.id].style.display = 'none';

                }
            } else if (!regExp[item.id].test(form[item.id].value)) {
                let text = document.createTextNode("Invalid, " + labels[item.id]);
                error[item.id].appendChild(text);
                error[item.id].style.display = 'block';

            } else {
                error[item.id].style.display = 'none';

            }

        }
    })
})