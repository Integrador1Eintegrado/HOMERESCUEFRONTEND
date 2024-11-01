// storage.js
import { storage } from './firebase.js'; // Asegúrate de tener esto importado
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';

import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

export async function subirFoto(file, userId) {
    // Crear una referencia a la carpeta de usuarios
    const storageRef = ref(storage, `usuarios/${userId}/fotoPerfil.jpg`);
    try {
        await uploadBytes(storageRef, file); // Sube el archivo
        console.log("Foto subida exitosamente");

        // Obtén la URL de descarga
        const url = await getDownloadURL(storageRef);
        console.log("URL de la foto:", url);
        return url; // Puedes guardar esta URL si la necesitas
    } catch (error) {
        console.error("Error al subir la foto:", error);
    }
}

// Manejo del evento para mostrar la previsualización y subir la foto
document.getElementById('providerPhoto').addEventListener('change', async function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('photoPreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result; // Establece la fuente de la imagen
            preview.style.display = 'block'; // Muestra la previsualización
        };
        reader.readAsDataURL(file);
        
        // Aquí deberías obtener el UID del usuario de alguna manera
        const userId = firebase.auth().currentUser.uid; // Cambia esto por el ID del usuario registrado
        await subirFoto(file, userId); // Llama a la función para subir la foto
    }
});
