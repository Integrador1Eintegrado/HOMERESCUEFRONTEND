// Ocultamos el formulario de registro inicialmente
document.getElementById('providerForm').classList.add('d-none');

// Botones de navegación manual (cuando seleccionan cada paso)
document.getElementById('btnBasicInfo').addEventListener('click', function() {
  document.querySelector('.formularioproveedor').classList.add('d-none');
  document.getElementById('providerForm').classList.remove('d-none');
  showStep('basicInfoStep');
});

document.getElementById('btnDniConfirmation').addEventListener('click', function() {
  document.querySelector('.formularioproveedor').classList.add('d-none');
  document.getElementById('providerForm').classList.remove('d-none');
  showStep('dniStep');
});

document.getElementById('btnCertificate').addEventListener('click', function() {
  document.querySelector('.formularioproveedor').classList.add('d-none');
  document.getElementById('providerForm').classList.remove('d-none');
  showStep('certificateStep');
});

document.getElementById('btnCatalog').addEventListener('click', function() {
  document.querySelector('.formularioproveedor').classList.add('d-none');
  document.getElementById('providerForm').classList.remove('d-none');
  showStep('catalogStep');
});

// Función para mostrar la sección seleccionada
function showStep(stepId) {
  // Ocultamos todas las secciones primero
  const steps = document.querySelectorAll('.step');
  steps.forEach(function(step) {
    step.classList.add('d-none');
  });
  
  // Mostramos la sección seleccionada
  document.getElementById(stepId).classList.remove('d-none');
}





// Regresar al inicio desde el modal
document.getElementById('returnHome').addEventListener('click', function() {
  window.location.href = 'index.html';  // Cambia la URL a la página de inicio
});

// Añadir funcionalidad de subir foto
document.getElementById('addPhoto').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el botón recargue la página
    document.getElementById('photoRequirements').classList.remove('d-none');
});


// Abrir modal de recomendaciones de la foto
document.getElementById('addPhoto').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el botón recargue la página
    var photoModal = new bootstrap.Modal(document.getElementById('photoRequirementsModal'));
    photoModal.show(); // Mostrar el modal con las recomendaciones
});

// Funcionalidad del botón "Usar Cámara"
document.getElementById('openCamera').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar recargar la página
    alert("Simulando apertura de la cámara..."); 
    // Aquí podrías integrar la funcionalidad de cámara o usar la API de dispositivos
    // Cerrar el modal después de elegir
    var photoModal = bootstrap.Modal.getInstance(document.getElementById('photoRequirementsModal'));
    photoModal.hide();
});

// Funcionalidad del botón "Abrir Galería"
document.getElementById('openGallery').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar recargar la página
    alert("Simulando apertura de la galería...");
    // Aquí podrías integrar la funcionalidad de abrir la galería
    // Cerrar el modal después de elegir
    var photoModal = bootstrap.Modal.getInstance(document.getElementById('photoRequirementsModal'));
    photoModal.hide();
});








    // Al hacer clic en el botón de iniciar sesión, abre el modal
    document.getElementById('loginButton').addEventListener('click', function() {
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
    
    // Muestra la sección de recuperación de contraseña
    document.getElementById('forgotPasswordLink').addEventListener('click', function() {
        // Ocultar formulario de inicio de sesión
        document.getElementById('loginForm').style.display = 'none';

        // Mostrar formulario de recuperación de contraseña
        document.getElementById('forgotPasswordSection').style.display = 'block';
    });

    // Al hacer clic en el botón "Enviar Código de Verificación", muestra la sección del código
    document.getElementById('sendVerificationCode').addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe

        // Mostrar campo para ingresar el código de verificación
        document.getElementById('verificationCodeSection').style.display = 'block';
    });

   
  
         // Mostrar formulario de usuario y ocultar el paso 1
document.getElementById('userButton').addEventListener('click', function() {
  document.getElementById('step1').classList.add('d-none'); // Oculta la selección
  document.getElementById('userForm').classList.remove('d-none'); // Muestra el formulario de usuario
});





    
// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar los elementos
  const providerButton = document.getElementById("providerButton");
  const providerForm = document.querySelector(".formularioproveedor");
  const userForm = document.getElementById("userForm");
  const step1 = document.getElementById("step1");
  const backButton = document.getElementById("btnBack");
  const basicInfoStep = document.getElementById("basicInfoStep");

  // Ocultar los formularios al principio
  providerForm.classList.add("d-none");
  basicInfoStep.classList.add("d-none");

  // Mostrar el formulario del proveedor cuando se presiona el botón
  providerButton.addEventListener("click", function() {
      step1.classList.add("d-none");
      providerForm.classList.remove("d-none");
  });

  // Volver al paso inicial cuando se presiona el botón "Volver"
  backButton.addEventListener("click", function() {
      providerForm.classList.add("d-none");
      step1.classList.remove("d-none");
  });

// Volver al paso inicial cuando se presiona el botón "Aceptar"
basicInfoNext.addEventListener("click", function() {
  basicInfoStep.classList.add("d-none");
  providerForm.classList.remove("d-none");
});
document.getElementById('uploadDniFile').addEventListener('click', function(e) {
  e.preventDefault();  // Evita el envío del formulario
  // Aquí va tu lógica para simular la carga de archivo
  alert('Archivo subido correctamente');
});


document.getElementById('uploadCertFile').addEventListener('click', function(e) {
  e.preventDefault();  // Evita el envío del formulario
  // Simula la carga de archivo
  alert('Certificado subido correctamente');
});



// Volver al paso inicial cuando se presiona el botón "Volver"
backToBasicInfo.addEventListener("click", function() {
  dniStep.classList.add("d-none");
  providerForm.classList.remove("d-none");
});

// Volver al paso inicial cuando se presiona el botón "Volver"
backToDniStep.addEventListener("click", function() {
  certificateStep.classList.add("d-none");
  providerForm.classList.remove("d-none");
});
// Volver al paso inicial cuando se presiona el botón "Volver"
backButtonUser.addEventListener("click", function() {
    userForm.classList.add("d-none");
    step1.classList.remove("d-none");
  });

// Volver al paso inicial cuando se presiona el botón "Volver"
backToCertificateStep.addEventListener("click", function() {
  catalogStep.classList.add("d-none");
  providerForm.classList.remove("d-none");
});

document.getElementById('uploadDniFile').addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el reinicio de la página
  // Aquí va el código para manejar la subida del archivo de DNI
});

document.getElementById('uploadCertFile').addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir el reinicio de la página
  // Aquí va el código para manejar la subida del archivo de Certificado de Antecedentes
});


// Volver al paso inicial cuando se presiona el botón "Volver"
catalogNext.addEventListener("click", function() {
  catalogStep.classList.add("d-none");
  providerForm.classList.remove("d-none");
});
document.getElementById("catalogNext").addEventListener("click", function(event) {
  // Prevenir el envío del formulario y la recarga de la página
  event.preventDefault();

  // Ocultar la sección actual (catálogo de servicios)
  document.getElementById("catalogStep").classList.add("d-none");

  // Mostrar el providerForm
  document.getElementById("providerForm").classList.remove("d-none");
});



document.getElementById("btnSubmit").addEventListener("click", function(event) {
  // Prevenir el comportamiento por defecto del botón o formulario
  event.preventDefault();

  // Ocultar todo el formulario del proveedor
  document.querySelector(".formularioproveedor").classList.add("d-none");

  // También ocultar el providerForm en caso de que siga visible
  document.getElementById("providerForm").classList.add("d-none");

  // Mostrar únicamente el modal de registro completado
  document.getElementById("registrationCompleteModal").classList.remove("d-none");
});








});
    document.getElementById('submitForm').addEventListener('click', function(event) {
        event.preventDefault();
        if (!document.getElementById('submitForm').disabled) {
            document.getElementById('registrationCompleteModal').classList.remove('d-none'); // Mostrar el modal
            document.getElementById('finalStep').classList.add('d-none'); // Ocultar el último paso del formulario
        }
    });

    document.getElementById('submitForm').addEventListener('click', function(event) {
        event.preventDefault();
        if (!document.getElementById('submitForm').disabled) {
            var modal = new bootstrap.Modal(document.getElementById('registrationCompleteModal'), {});
            modal.show(); // Mostrar el modal
            document.getElementById('finalStep').classList.add('d-none'); // Ocultar el último paso del formulario
        }
    });

    
// Esperar a que el DOM esté listo para los toggles
document.addEventListener("DOMContentLoaded", function() {

    // Función para cambiar el toggle de off a on
    function toggleStep(stepId) {
        const stepElement = document.querySelector(`#${stepId} img`);
        if (stepElement) {
            stepElement.src = "img/toggle-on.png";  // Cambia la imagen del toggle a "on"
        } else {
            console.error(`No se pudo encontrar el elemento con el id: ${stepId}`);
        }
    }
  
    // Evento para el botón "Aceptar" en la Información Básica
    const basicInfoNext = document.getElementById("basicInfoNext");
    if (basicInfoNext) {
        basicInfoNext.addEventListener('click', function() {
            console.log("Botón 'Aceptar' de Información Básica clickeado");
            toggleStep('btnBasicInfo');  // Cambia el toggle del paso de Información Básica
        });
    }
  
    // Evento para el botón "Subir Archivo" de Confirmación de DNI
    const uploadDniFileBtn = document.getElementById("uploadDniFile");
    if (uploadDniFileBtn) {
        uploadDniFileBtn.addEventListener('click', function() {
            console.log("Botón 'Subir Archivo' de DNI clickeado");
            toggleStep('btnDniConfirmation');  // Cambia el toggle del paso de Confirmación de DNI
        });
    }
  
    // Evento para el botón "Aceptar" de Certificado de Antecedentes
    const certConfirmNext = document.getElementById("certConfirmNext");
    if (certConfirmNext) {
        certConfirmNext.addEventListener('click', function() {
            console.log("Botón 'Aceptar' de Certificado de Antecedentes clickeado");
            toggleStep('btnCertificate');  // Cambia el toggle del paso de Certificado
        });
    }
  
    // Evento para el botón "Aceptar" del Catálogo de Servicios
    const catalogNext = document.getElementById("catalogNext");
    if (catalogNext) {
        catalogNext.addEventListener('click', function() {
            console.log("Botón 'Aceptar' del Catálogo de Servicios clickeado");
            toggleStep('btnCatalog');  // Cambia el toggle del paso de Catálogo de Servicios
        });
    }
  });
  


  





   
    
    
