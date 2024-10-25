// Importar desde firebase.js 
import { auth, createUserWithEmailAndPassword } from './firebase.js';

// Función para registrar un usuario
function registrarUsuario(email, password) {
  if (!email || !password) {
    console.error("El correo y la contraseña son requeridos.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log("Usuario registrado:", user);

      const usuarioData = {
        id: user.uid, // Usar el ID generado por Firebase
        apellidoMaterno: null,
        apellidoPaterno: null,
        correo: email,
        dni: null,
        nombreUsuario: document.getElementById('userName').value || null,
        nombres: null,
        telefono: document.getElementById('phone').value || null,
        tipo: "Cliente",
        validatorDni: false
      };

      await enviarDatosAlBackend(usuarioData);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error al registrar:", errorMessage);
    });
}

// Función para enviar datos al backend
async function enviarDatosAlBackend(usuarioData) {
  const token = await auth.currentUser.getIdToken(); // Obtener el token de Firebase

  fetch('https://enough-polite-gibbon.ngrok-free.app/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Agregar el token
    },
    body: JSON.stringify(usuarioData),
  })
  .then(response => {
    if (response.ok) {
      console.log("Usuario enviado al backend exitosamente");
      return response.json(); // Procesar la respuesta si es necesario
    } else {
      console.error("Error al enviar usuario al backend:", response.status, response.statusText);
      return response.text().then(text => console.error("Respuesta del servidor:", text));
    }
  })
  .catch(error => {
    console.error("Error en la solicitud:", error);
  });
}

// Agregar el manejador de eventos al formulario después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#userForm form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de envío
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('pass').value;
    registrarUsuario(email, password); // Llama a la función de registro
  });
});
