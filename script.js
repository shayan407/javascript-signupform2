let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let cPassword = document.getElementById('Confirm Password')
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

function validEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(email,`${capitalLetter(input)} is not valid`)
    }
}

function checkRequired(arrayInputs){
    arrayInputs.forEach(input => {
        if(input.value === ""){
            showError(input,`${capitalLetter(input)} is Required`)
        }else{
            showSuccess(input)
        }
    });
}

function capitalLetter(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function length(input,min,max){
    if(input.value.length < min){
        showError(input,`${capitalLetter(input)} should be atleast ${min}`)
    }else if(input.value.length > max){
        showError(input,`${capitalLetter(input)} should be under ${max}`)
    }else{
        showSuccess(input)
    }
}

function passCompare(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Passwords should be the same`)
    }
}

form.addEventListener('submit',function submit(){
    event.preventDefault()
    checkRequired([username,email,password,cPassword])
    length(username,4,12)
    length(password,6,30)
    validEmail(email)
    passCompare(password,cPassword)
})