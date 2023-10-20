
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const dniInput = document.getElementById("dni");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");

function validateShipment() {
  // validacion nombre
  if (nombreInput.value.length < 3) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Por favor escriba su Nombre completo",
      })
    document.validation.nombre.focus();
    return;
  }
  // validacion apellido
  if (apellidoInput.value.length < 2) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Por favor escriba su Apellido completo",
      })
    document.validation.apellido.focus();
    return;
  }
  // validacion dni que no sea vacio
  if (dniInput.value == 1) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Por favor ingrese su dni",
      })
    dniInput.focus();
    return;
  }

  // validacion email que sea valido
  const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!validateEmail.test(emailInput.value)) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Por favor ingrese un email valido",
      })
    emailInput.focus();
    return;
  }

  if (telefonoInput.value.length <= 7) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Por favor ingrese un telefono valido.",
      })
    telefonoInput.focus();
    return;
  }
  if (telefonoInput.value.length >= 11) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Por favor ingrese un telefono valido, puede que hayas puesto numeros de mas en tu telefono.",
      })
    telefonoInput.focus();
    return;
  }
  Swal.fire({
    icon: 'success',
    title: 'Gracias',
    text: "En breve un administrador del Club se pondra en contacto contigo.",
    showConfirmButton: false,
    timer: 2000
  })
  nombreInput.value = ""
  apellidoInput.value = ""
  dniInput.value = ""
  emailInput.value = ""
  telefonoInput.value = ""
}

if (telefonoInput) {
  telefonoInput.addEventListener("input", function (event) {
    const input = event.target;
    if (/\D/.test(input.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Por favor, ingrese solo números para el teléfono.",
          })
          input.value = input.value.replace(/\D/g, "");
    }
  });
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validateShipment()
});
