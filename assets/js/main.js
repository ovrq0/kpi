let form__input = document.getElementById('password-input');

let password_count = 0

function show_hide_password(){
    password_count += 1
    if(password_count == 2){
        password_count = 0
    };
    if(password_count == 0){
        form__input.setAttribute('type', 'password')
    }else{
        form__input.setAttribute('type', 'text')
    };
}