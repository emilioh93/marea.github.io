// Detectar mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Cambio link
    document.querySelector("#whatsapp").href = "https://api.whatsapp.com/send?phone=543816241279&text=Hola%20Marea%20Gestión,%20 necesito%20información";
} else {
    document.querySelector("#whatsapp").href = "https://web.whatsapp.com/send?phone=543816241279&text=Hola%20Marea%20Gestión,%20 necesito%20información";
}