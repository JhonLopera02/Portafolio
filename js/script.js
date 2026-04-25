// MENÚ RESPONSIVE
document.getElementById('menu-toggle').addEventListener('click', () => {
  console.log("test");
});

// MENSAJE DE BIENVENIDA
window.onload = () => {
    alert("Bienvenido a mi portafolio ");
};

// CAMBIAR TEXTO
document.getElementById('btn-texto').addEventListener('click', () => {
    document.getElementById('texto-cambiable').textContent =
        "Ahora estoy aprendiendo JavaScript y creando sitios dinámicos ";
});

// MOSTRAR / OCULTAR PROYECTOS
document.getElementById('btn-toggle').addEventListener('click', () => {
    const proyectos = document.getElementById('lista-proyectos');

    if (proyectos.style.display === "none") {
        proyectos.style.display = "grid";
    } else {
        proyectos.style.display = "none";
    }
});