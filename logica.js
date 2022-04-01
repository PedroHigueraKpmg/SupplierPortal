//* Inicio code lógica conexión
function login(){
    var name = document.getElementById("name").value;
    var job = document.getElementById("job").value;


    fetch('https://reqres.in/api/users', {
        "name": name,
        "job": job
    }).then(function(response){
        console.log(response);
    });

}
//* Fin code lógica conexión


//! Inicio code animación movimiento input.
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
//! Fin Code animación movimiento input.