function sendMail(contactForm) {
    emailjs.send("smtp_server","information", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "information_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        }, 
        function(error) {
            console.log("Failed", error);
        });
    return false;
}