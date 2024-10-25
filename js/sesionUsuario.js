// Importar funciones de Firebase
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Función para iniciar sesión
async function iniciarSesion(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Aquí puedes redirigir al usuario a la página correspondiente
        // Por ejemplo, verifica si es un cliente o proveedor si tienes esa lógica
        window.location.href = "cliente.html"; // O la URL que desees
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
}

// Agregar el manejador de eventos al formulario
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto
        const email = document.getElementById('userEmail').value;
        const password = document.getElementById('pass').value;
        iniciarSesion(email, password); // Llama a la función de inicio de sesión
    });
});
