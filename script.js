// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Suscription Form
document.getElementById('suscripcion-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por suscribirte!');
});
