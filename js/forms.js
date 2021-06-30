document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = [];

    let form = event.target;


    //userName
    let username = form.querySelector('[name="username"]').value;

    if(!username.length){
        errors.username = 'სახელის შეყვანა აუცილებელია!';
    }

    //password
    let password = form.querySelector('[name="password"]').value;
    let password_match = form.querySelector('[name="password_match"]').value;

    if(password.length < 3){
        errors.password = 'პაროლი ძალიან სუსტია';
    }
    if(password != password_match){
        errors.password = 'პაროლები არ ემთხვევა!';
    }

    //checkbox 
    let agreeTerms = form.querySelector('[name="agree"]').checked;

    if(!agreeTerms)
        errors.agree = 'დაეთანხმეთ ჩვენ წესებს';

    //radio
    let Gender = false;

    form.querySelectorAll('[name="Gender"]').forEach(element => {
        if(element.checked)
            Gender = true;        

    });

    if(!Gender)
        errors.Gender = 'აირჩიეთ ერთ-ერთი!';



    //errors
    form.querySelectorAll('.error-text').forEach(element => {
        element.textContent = ' ';
    });

    for(let name in errors){
        let erroH = document.getElementById('error_' + name);

        if(erroH){
            erroH.textContent = errors[name];
        }
    }

    if(Object.keys(errors).length === 0){
        
        document.getElementById('auth').addEventListener('click',function(){
            window.location.pathname = "/index.html";
        })
    }
});
// document.getElementById('auth').addEventListener('click',function(){
//     window.location.pathname = "/index.html";
// })