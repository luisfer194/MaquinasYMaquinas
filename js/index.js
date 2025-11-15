const counters = document.querySelectorAll('.counter');
const speed = 100; // menor = más rápido

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const prefix = counter.getAttribute('data-prefix') || '';
    const suffix = counter.getAttribute('data-suffix') || '';

    const updateCount = () => {
      const count = +counter.innerText.replace(/\D/g, ''); // limpia signos
      const increment = target / speed;

      if (count < target) {
        counter.innerText = prefix + Math.ceil(count + increment) + suffix;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = prefix + target + suffix;
      }
    };

    updateCount();
  });
};

// Animar cuando la sección entra en pantalla
const section = document.querySelector('.stats-section');
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.disconnect();
  }
});
observer.observe(section);

const links = document.querySelectorAll('.nav-link');
const current = window.location.pathname.split('/').pop();

links.forEach((link) => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});
