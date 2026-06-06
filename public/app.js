const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn");

mensaje.textContent = "La pagina cargo muy chevere.";

btn.addEventListener("click", () => {
  mensaje.textContent = "¡Hiciste clic! " + new Date().toLocaleTimeString();
});
