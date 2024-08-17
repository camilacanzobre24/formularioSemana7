document.getElementById('regBtn').addEventListener('click', function () {
    let campos = document.getElementsByClassName("form-label");
    let camposArreglo = Array.from(campos);
    let hayCamposVacios = false;
    camposArreglo.forEach(function(campo) {
        if(campo.value.trim()=== ""){
            hayCamposVacios = true;
        }
    });
    if(hayCamposVacios){
        showAlertError();
    }
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}