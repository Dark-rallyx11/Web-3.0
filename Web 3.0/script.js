document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = document.getElementById("response");
    response.textContent = `Gracias, ${name}. Hemos recibido tu mensaje: "${message}". Te responderemos pronto a ${email}.`;
});
