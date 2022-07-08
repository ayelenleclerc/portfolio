const inputs = document.querySelectorAll("input");
const enviar = document.getElementById("enviar");

function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El campo debe tener un máximo de 300 caracteres",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  sendMail();
});
function sendMail() {
  let params = {
    from_name: document.getElementById("nombre").value,
    email_id: document.getElementById("email_id").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_zaxucbk", "template_91rwok8", params)
    .then(function (res) {
      Swal.fire("Mensaje enviado!", "Muchas gracias", "success");
      console.log(res.status);
    });
}
