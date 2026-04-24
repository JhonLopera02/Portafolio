//  Mensaje de bienvenida
window.addEventListener("DOMContentLoaded", () => {
  alert("Bienvenido a mi portafolio 🚀");
});

//  Cambiar texto
const botonCambiar = document.getElementById("btn-cambiar");
const texto = document.getElementById("texto");

botonCambiar.addEventListener("click", () => {
  texto.textContent = "¡El texto ha sido cambiado dinámicamente!";
});

// ✅ Mostrar / ocultar contenido
const botonToggle = document.getElementById("btn-toggle");
const extra = document.getElementById("extra");

botonToggle.addEventListener("click", () => {
  if (extra.style.display === "none") {
    extra.style.display = "block";
  } else {
    extra.style.display = "none";
  }
});

botonToggle.addEventListener("click", () => {
  extra.classList.toggle("oculto");
});