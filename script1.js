let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let cPassword = document.getElementById('cPassword')
let form = document.getElementById('form')

function showError(input,message){
    let formControl = input.parentElement;
    formControl.className = "form-control invalid";
    let errorMsg = formControl.querySelector('small');
    errorMsg.innerText = message;
}
function showSuccess(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}
function validEmail(email){
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
}

form.addEventListener('submit',function submit(){
    event.preventDefault()
    if(username.value == ""){
        showError(username,"Username is Required")
    }else{
        showSuccess(username)
    }
    if(email.value == ""){
        showError(email,"Email is Required")
    }else if(!validEmail == email.value){
        showError(email,"email is invalid")
    }else{
        showSuccess(email)
    }
    if(password.value === ""){
        showError(password,"Password is Required")
    }else{
        showSuccess(password)
    }
    if(cPassword.value == ""){
        showError(cPassword,"Confirm Password is Required")
    }else{
        showSuccess(cPassword)
    }
})