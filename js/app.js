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
