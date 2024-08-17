document.getElementById('regBtn').addEventListener('click', function () {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();
    let terminos = document.getElementById("terminos").checked;

    if(!nombre || !apellido || email || password1 || password2 || terminos ){
        showAlertError();
    }

    if(password1.lenght < 5){
        showAlertError();
    }
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}