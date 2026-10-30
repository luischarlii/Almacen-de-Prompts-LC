
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => {
        console.log("Almacen de Prompts: aplicación preparada");
      })
      .catch((error) => {
        console.error("Error al registrar la aplicación:", error);
      });
  });
}
