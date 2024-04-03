const btnCreateAccount = document.getElementById('create-account');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const passwordMatchMessage = document.getElementById('match-password');

btnCreateAccount.addEventListener('click', function(e){
    if(confirmPasswordField.value != passwordField.value || passwordField.value == ""){
        e.preventDefault();
        passwordField.style.border = "1px solid red";
        confirmPasswordField.style.border = "1px solid red";
        passwordMatchMessage.hidden = false;
    } else {
        console.log("Continue")
    }
})