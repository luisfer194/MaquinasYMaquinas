document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.querySelector('.brands-viewport');
  const track = document.querySelector('.brands-track');
  const items = Array.from(track.children);
  if (!items.length) return;

  // 🔁 Duplicamos los elementos para hacer un loop infinito
  track.innerHTML += track.innerHTML;
  const total = items.length;

  // ⚙️ Configuración
  const speed = 2000; // cada 2 segundos se mueve
  const duration = 500; // duración de la transición (ms)
  let index = 0;
  let timer;

  // 📏 Calcula el ancho del item actual (según el responsive)
  const getItemWidth = () => track.children[0].offsetWidth;

  // 🚚 Mueve el carrusel un paso
  const move = () => {
    index++;
    track.style.transition = `transform ${duration}ms ease`;
    track.style.transform = `translateX(-${index * getItemWidth()}px)`;

    // Cuando llegamos al final, reiniciamos suavemente
    track.addEventListener('transitionend', function handler() {
      if (index >= total) {
        track.style.transition = 'none';
        index = 0;
        track.style.transform = 'translateX(0)';
      }
      track.removeEventListener('transitionend', handler);
    });
  };

  // ▶️ Iniciar movimiento automático
  const start = () => {
    if (timer) return;
    timer = setInterval(move, speed);
  };

  // ⏸️ Detener movimiento
  const stop = () => {
    clearInterval(timer);
    timer = null;
  };

  // 🎯 Pausar al pasar el mouse o enfocar
  viewport.addEventListener('mouseenter', stop);
  viewport.addEventListener('mouseleave', start);
  viewport.addEventListener('focusin', stop);
  viewport.addEventListener('focusout', start);

  // 🔄 Ajustar posición al redimensionar la ventana
  window.addEventListener('resize', () => {
    track.style.transition = 'none';
    track.style.transform = `translateX(-${index * getItemWidth()}px)`;
  });

  // 🧠 Respeta configuración del usuario (reduce motion)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    start();
  }
});
