function show_alert(){
    alert("this alert comes from javascript!!");
}
const form = document.getElementById('elformulario');

form.addEventListener("submit",function(lala){
    lala.preventDefault();
    validate_form();
})

function validate_email(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)}

function validate_form(){
    const input = document.getElementById('email');
    const input_value = input.value 

    if (!validate_email(input_value)){
        alert("por favor ingrese un correo electronico valido.")
    }
    else{
        alert("correo elecrtonico enviado correctamente.")
    }
}
let boton = document.getElementById("boton_pal_menu")
    document.querySelector("nav-link-responsive")
        addEventListener("click", function(boton) {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")
})