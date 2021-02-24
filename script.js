const form = document.getElementById('form');
const inputDiv = document.getElementById('input');
const emailTextbox = document.getElementById('email');
const err_text = document.getElementById('error-text');

form.addEventListener('submit', (e) => {
    if (emailTextbox.value.trim() === "") {

        e.preventDefault();
        err_text.textContent = "Please enter email";
        inputDiv.classList.add('error');

    } else if (!validate()) {

        e.preventDefault();
        err_text.textContent = "Please provide valid email";
        inputDiv.classList.add('error');

    } else {

        inputDiv.classList.remove('error');
        return true;

    }

});

function validate() {
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailformat.test(emailTextbox.value.trim());
}