    // Detectar mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector(".whatsappEnlace").href = "https://api.whatsapp.com/send?phone=543816241279&text=Hola%20Marea%20Gestión,%20necesito%20información";
    }

    // Validaciones
    function validarNombre(input) {
        if (input.value.trim() === "") {
            input.className = "form-control is-invalid"
            return false;
        } else {
            input.className = "form-control is-valid"
            return true;
        }
    }

    function validarEmail(input) {
        if (input.value.trim() === "") {
            input.className = "form-control is-invalid"
            return false;
        } else {
            input.className = "form-control is-valid"
            return true;
        }
    }

    let checkPrivacidad = document.querySelector("#checkbox");
    checkPrivacidad.addEventListener("change", validarCheckbox);

    function validarCheckbox() {
        if (checkPrivacidad.checked) {
            checkPrivacidad.className = "form-check-input is-valid";
            return true;
        } else {
            checkPrivacidad.className = "form-check-input is-invalid";
            return false;
        }
    }

    function validarGeneral(event) {
        event.preventDefault();
        if (validarNombre(document.getElementById("inputName")) &&
            validarEmail(document.getElementById("inputEmail")) &&
            validarCheckbox()) {

            enviarEmail();

        } else {
            document.getElementById("alert").className = "alert alert-danger text-center";
            document.getElementById("alert").innerHTML = "Debes corregir los datos cargados";
        }
    }

    function enviarEmail() {
        emailjs.send("service_t768bpe", "template_vc5x6ep", {
            to_name: document.getElementById("inputName").value,
            from_name: "Administrador",
            message: `Email: ${document.getElementById("inputEmail").value} - Consulta: ${document.getElementById("consulta").value}`
        }).then(function(response) {
            document.getElementById("alert").className = "alert alert-success text-center";
            document.getElementById("alert").innerHTML = "Su mensaje fue enviado correctamente";
            document.getElementById("formulario").reset();
        }, function(error) {
            document.getElementById("alert").className = "alert alert-danger text-center";
            document.getElementById("alert").innerHTML = "Error en el envío. Inténtelo más tarde";
        });

    }


    // CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })