// =============================================
// MAIN JS — Dra. Sandra Molano
// =============================================

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== PARTÍCULAS DORADAS (Hero) =====
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';

    // Posición y tamaño aleatorios
    const size  = Math.random() * 3 + 1;
    const left  = Math.random() * 100;
    const top   = Math.random() * 100;
    const dur   = Math.random() * 8 + 6;
    const delay = Math.random() * 6;

    p.style.cssText = `
      left: ${left}%;
      top: ${top}%;
      width: ${size}px;
      height: ${size}px;
      --dur: ${dur}s;
      --delay: ${delay}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      background: ${Math.random() > 0.5 ? '#D4A017' : '#B8860B'};
    `;
    container.appendChild(p);
  }
}
initParticles();

// ===== ANIMACIONES DE ENTRADA (Intersection Observer) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.treatment-card, .testimonial-card, .ba-card, .gallery-item, .about-grid, .contact-grid'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// ===== FORMULARIO DE CONTACTO =====
const form    = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre   = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();

    if (!nombre || !telefono) {
      showFormMsg('Por favor completa los campos requeridos.', '#e07070');
      return;
    }

    // Integración con Formspree: cambia la action del form a tu endpoint
    // <form action="https://formspree.io/f/TU_ID" method="POST">
    // O usa EmailJS aquí:
    // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form)

    showFormMsg('¡Mensaje enviado! Te contactaremos pronto.', '#D4A017');
    form.reset();
  });
}

function showFormMsg(text, color) {
  formMsg.textContent = text;
  formMsg.style.color = color;
  formMsg.style.opacity = '1';
  setTimeout(() => {
    formMsg.style.opacity = '0';
    setTimeout(() => { formMsg.textContent = ''; }, 400);
  }, 5000);
}

