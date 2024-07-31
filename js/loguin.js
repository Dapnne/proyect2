
const loginButton= document.getElementById("loginButton");

const form_Loguin = document.getElementById("form-loguin")

loginButton.addEventListener("click", (evento) => {

    const email= document.getElementById("email").value.trim()
    const pasword= document.getElementById("password").value.trim()
    evento.preventDefault()
    
    const usuarios_encontrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (email != "" && pasword != "") {
        const encontrados = usuarios_encontrados.find(usu => usu.correo == email && usu.contraseña == pasword)
        if (encontrados) {
            alert("Bienvenido")
            localStorage.setItem("usuarios", JSON.stringify(usuarios_encontrados));
            window.location.href = "tareas.html"
        } else {
            alert("Contraseña y/o correo incorrectos")
        }
    }else{
        alert("ingrese")
    }
})