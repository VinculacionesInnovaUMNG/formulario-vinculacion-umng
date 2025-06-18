
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
const datos = {
    nombreDocente: document.querySelector("#nombreDocente").value,
    correo: document.querySelector("#correo").value,
    tipoServicio: document.querySelector("#tipoServicio").value,
    sede: document.querySelector("#sede").value,
    facultad: document.querySelector("#facultad").value,
    programa: document.querySelector("#programa").value,
    destinoPresupuestal: document.querySelector("#destinoPresupuestal").value,
    cuentaPresupuestal: document.querySelector("#cuentaPresupuestal").value,
    planAccion: document.querySelector("#planAccion").value,
    codigoDane: document.querySelector("#codigoDane").value,
    recurso: document.querySelector("#recurso").value,
    nombreJoven: document.querySelector("#nombreJoven").value,
    documentoJoven: document.querySelector("#documentoJoven").value,
    correoJoven: document.querySelector("#correoJoven").value,
    nivelAcademico: document.querySelector("#nivelAcademico").value,
    fechaInicio: document.querySelector("#fechaInicio").value,
    fechaFin: document.querySelector("#fechaFin").value,
    montoMensual: document.querySelector("#montoMensual").value,
  };

  fetch("https://script.google.com/macros/s/AKfycbzV0W5YOj9JrUnhT9uFEfR1t-hy_kTwJ_g-EBvJRkkQ61-J5bVPK_vrN4TFL9-3s9YT4w/exec", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => console.error(err));
});
