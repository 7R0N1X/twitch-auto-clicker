function reclamarBonificacionTwitch() {
  const botonReclamar = document.querySelector('button[aria-label="Reclamar bonificación"]')
  if (botonReclamar) botonReclamar.click()
}

function observeDOMChanges() {
  const targetNode = document.body;

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        reclamarBonificacionTwitch()
      }
    }
  });

  observer.observe(targetNode, { childList: true, subtree: true })
}

observeDOMChanges()