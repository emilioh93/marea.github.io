// FUNCION DEL BOTÓN VER MÁS
function verMas() {
    console.log("desde la función verMas");
    // Buscar el elemento padre que necesita el nuevo párrafo
    let div1 = document.querySelector("#divCard1");
    console.log(div1[0]);
    // Buscar botón
    let boton = document.getElementById("btnVerMas1");
    console.log(boton);

    if (boton.innerHTML === "Ver Más") {
        div1[1].innerHTML += `<p class="card-text">Hacemos todo tipo de estudios y análisis sobre las condiciones de tus productos y servicios, tus costes y tu mercado.</p>
        <p>Detectamos las amenazas y las oportunidades de mejora, y diseñamos soluciones específicas a medida.</p>
        <p>Generamos información de calidad para que puedas tomar las decisiones correctas y hacer que tu empresa sea más rentable y afronte los nuevos retos con seguridad.</p>`;

        // Cambiar estética del botón
        boton.innerHTML = "Mostrar Menos";
        boton.className = "btn btn-danger";
    } else {
        console.log("aquí debo borrar mi párrafo.");
        // Eliminar elemento DOM
        if (div1[1].hasChildNodes() && div1[1].children.length > 2) {
            console.log(div1[1].children[2]);
            div1[0].removeChild(div1[1].children[2]);
            boton.innerHTML = "Ver Más";
            boton.className = "btn btn-primary";
        }
    }
}