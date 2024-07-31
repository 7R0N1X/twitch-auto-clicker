function reclamarBonificacionTwitch() {
  const botonReclamar = document.querySelector('button[aria-label="Reclamar bonificación"]');
  if (botonReclamar) botonReclamar.click();
}

setInterval(reclamarBonificacionTwitch, 300000);

reclamarBonificacionTwitch();