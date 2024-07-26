document.addEventListener('DOMContentLoaded', function() {
    // Selecciona los elementos del DOM
    const loginButton = document.getElementById('loginButton');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Función para validar los campos de entrada del formulario
    function validateForm() {
        const email = emailInput.value;
        const password = passwordInput.value;

        // Validación simple para comprobar si los campos están vacíos
        if (email === '' || password === '') {
            alert('No dejes nada en blanco :)');
            return false;
        }

        return true;
    }

    // Función para comprobar si el usuario y la contraseña son correctos
    function authenticateUser(email, password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        return users.find(user => user.email === email && user.password === password);
    }

    // Función para manejar el inicio de sesión
    function loginUser(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Valida el formulario
        if (!validateForm()) {
            return; // Si la validación falla, termina la ejecución de la función
        }

        // Obtiene los valores de los campos de entrada del formulario
        const email = emailInput.value;
        const password = passwordInput.value;

        // Comprueba si el usuario y la contraseña son correctos
        if (authenticateUser(email, password)) {
            alert('BIENVENIDO')
            window.location.href="http://127.0.0.1:5500/tareas.html"
            // Si la autenticación es exitosa, redirige a la página deseada
            window.location.href = 'google.com';//edita esto con la pagina donde eswtan las tareas y eventos entre las comillas simples va la pagina
        } else {
            // Si la autenticación falla, muestra una alerta
            alert('Email o Password Incorrectos :)');
        }
    }

    // Añade un detector de eventos al botón de login para ejecutar la función loginUser cuando se haga clic
    loginButton.addEventListener('click', loginUser);
});
