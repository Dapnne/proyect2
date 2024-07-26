   document.addEventListener('DOMContentLoaded', function() {
    // Este evento se dispara cuando el DOM se ha cargado completamente, asegurando que todos los elementos
    // del HTML están disponibles para ser seleccionados y manipulados.

    // Selecciona el formulario y el botón de registro del DOM usando selectores CSS
    const form = document.querySelector('form');
    const registerButton = document.querySelector('.click');

    // Función para validar los campos de entrada del formulario
    function validateForm() {
        // Obtiene los valores de los campos de entrada
        const email = document.querySelector('.imail').value;
        const name = document.querySelector('.boton').value;
        const password = document.querySelector('.boton').value;

        // Validación simple para comprobar si los campos están vacíos
        if (email === '' || name === '' || password === '') {
            alert('Todos los campos son necesarios.'); // Muestra una alerta si algún campo está vacío
            return false; // Retorna false si la validación falla
        }

        // Aquí se pueden agregar validaciones adicionales (por ejemplo, formato de email, fortaleza de la contraseña)
        return true; // Retorna true si la validación es exitosa
    }

    // Función para comprobar si el usuario ya existe
    function userExists(email, name) {
        // Obtiene la lista de usuarios del local storage, o inicializa un arreglo vacío si no hay usuarios
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Comprueba si algún usuario en el arreglo tiene el mismo email o nombre
        return users.some(user => user.email === email || user.name === name);
    }

    // Función para registrar al usuario
    function registerUser(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario (enviar y recargar la página)

        // Valida el formulario
        if (!validateForm()) {
            return; // Si la validación falla, termina la ejecución de la función
        }

        // Obtiene los valores de los campos de entrada del formulario
        const email = document.querySelector('.imail').value;
        const name = document.querySelector('.boton').value;
        const password = document.querySelector('.boton').value;

        // Comprueba si el usuario ya existe
        if (userExists(email, name)) {
            alert('El usuario o correo ya esta registrado '); // Muestra una alerta si el usuario ya existe
            return; // Termina la ejecución de la función si el usuario ya existe
        }

        // Crea un objeto de usuario con los datos del formulario
        const user = {
            email: email,
            name: name,
            password: password
        };

        // Obtiene la lista de usuarios del local storage, o inicializa un arreglo vacío si no hay usuarios
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Agrega el nuevo usuario al arreglo de usuarios
        users.push(user);

        // Guarda la lista actualizada de usuarios en el local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Limpia el formulario
        form.reset();

        // Muestra una notificación o alerta de registro exitoso
        alert('Registro Exitoso');
    }

    // Agrega un detector de eventos al botón de registro para ejecutar la función registerUser cuando se haga clic
    registerButton.addEventListener('click', registerUser);
    
});

