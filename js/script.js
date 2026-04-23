toggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggle.textContent = "✖";
    } else {
        toggle.textContent = "☰";
    }
});