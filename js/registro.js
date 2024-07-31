//-----------campos de entrada---------//
const form_registro = document.getElementById("form-registro");
const user_value = document.getElementById("input-user");
const correo_value = document.getElementById("input-email");
const contraseña_value = document.getElementById("input-contraseña");
const boton_cerrar = document.getElementById('cerra-boton');
const modal = document.getElementById('modal');

boton_cerrar.addEventListener('click', () => {
  modal.close()
})

// agregar usuarios
form_registro.addEventListener("submit", (evento) => {
  const usuarios_guardaddos =
    JSON.parse(localStorage.getItem("usuarios")) || [];
  evento.preventDefault();

  if (user_value.value.trim() == "" || correo_value.value.trim() == "" || contraseña_value.value.trim() == '') {
    modal.showModal()
  }
  if (user_value.value.trim() != "" && correo_value.value.trim() != "" && contraseña_value.value.trim() != "") {
    const usuario = {
      nombre: user_value.value,
      correo: correo_value.value,
      contraseña: contraseña_value.value,
    };
    usuarios_guardaddos.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios_guardaddos));
    form_registro.reset();
    alert("Registro exitoso")
    window.location.href = "loguin.html"
  }
});