document.getElementById('login-btn').addEventListener('click', function(){
    const inputFieldEmail = document.getElementById('input-email');
    const inputEmail = inputFieldEmail.value;
    const inputFieldPass = document.getElementById('input-password');
    const inputPassword = inputFieldPass.value;
    if(inputEmail == 'alaminrahat12@gmail.com' && inputPassword == 'mybank123'){
        window.location.href = "banking-profile.html";
    }else{
        alert('Login Failed');
    }
})