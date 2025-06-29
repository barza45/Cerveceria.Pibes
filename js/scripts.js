
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(f => observer.observe(f));

  // Validación formulario
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const nombre = document.getElementById('nombre')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const mensaje = document.getElementById('mensaje')?.value.trim();
      if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert('Por favor, completá todos los campos antes de enviar.');
      }
    });
  }
});
