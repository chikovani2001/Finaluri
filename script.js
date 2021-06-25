document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};

    let form = event.target; 


    //username
    let username = form.querySelector('[name="username"]').value;

    if (!username.length) {
        errors.username = 'სახელის შეყვანა აუცილებელია!!!';
    }

    //password
    let email = form.querySelector('[name="email"]').value;

    if (email.length < 3) {
        errors.password = 'შეიყვანეთ მეილი სწორად';
    }
    


    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = ' ';
    });

    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error_' + name);

        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name];
        }
    }

})