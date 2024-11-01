// Importar desde firebase.js 
import { auth, createUserWithEmailAndPassword } from './firebase.js';
import { subirFoto } from './storage.js'; // Asegúrate de tener storage.js importado

// Función para registrar un usuario
async function registrarUsuario(email, password, tipoUsuario, nombreCompleto, telefono, foto) {
  if (!email || !password) {
    console.error("El correo y la contraseña son requeridos.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario registrado:", user);

    const usuarioData = {
      id: user.uid,
      apellidoMaterno: null,
      apellidoPaterno: null,
      correo: email,
      dni: null,
      nombreUsuario: nombreCompleto || null,
      nombres: null,
      telefono: telefono || null,
      tipo: tipoUsuario,
      validatorDni: false
    };

    await enviarDatosAlBackend(usuarioData);

    // Subir la foto si se proporcionó
    if (foto) {
      await subirFoto(foto, user.uid); // Subir la foto usando el UID del usuario
    }

  } catch (error) {
    console.error("Error al registrar:", error.message);
  }
}

// Función para enviar datos al backend
async function enviarDatosAlBackend(usuarioData) {
  const token = await auth.currentUser.getIdToken(); // Obtener el token de Firebase

  fetch('https://awake-bursting-parakeet.ngrok-free.app/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(usuarioData),
  })
  .then(response => {
    if (response.ok) {
      console.log("Usuario enviado al backend exitosamente");
      return response.json();
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
  // Manejo para el formulario de proveedor
  document.querySelector('#basicInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de envío
    const nombreCompleto = document.querySelector('#basicInfoForm input[type="text"]').value;
    const telefono = document.querySelector('#basicInfoForm input[type="tel"]').value;
    const email = document.querySelector('#basicInfoForm input[type="email"]').value;
    const password = document.querySelector('#basicInfoForm input[type="password"]').value;
    const foto = document.getElementById('providerPhoto').files[0]; // Obtener la foto seleccionada

    registrarUsuario(email, password, "Proveedor", nombreCompleto, telefono, foto); // Registro para proveedor
  });

  // Manejo para el formulario de cliente
  document.querySelector('#userForm form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de envío
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('pass').value;
    const nombreCompleto = document.getElementById('userName').value;
    const telefono = document.getElementById('phone').value;

    registrarUsuario(email, password, "Cliente", nombreCompleto, telefono, null); // Sin foto por ahora
  });
});
