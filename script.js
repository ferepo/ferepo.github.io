document.addEventListener('DOMContentLoaded', function() {
    // Efecto de aparición al hacer scroll
    function checkScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contador de beneficios
    const benefitsList = document.querySelector('#beneficios ul');
    const benefitsCount = benefitsList.children.length;
    const benefitsCounter = document.createElement('p');
    benefitsCounter.textContent = `Descubre nuestros ${benefitsCount} beneficios clave`;
    benefitsList.parentNode.insertBefore(benefitsCounter, benefitsList);

// Formulario interactivo
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('active');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentNode.classList.remove('active');
        }
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    form.reset();
});

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        form.reset();
    });

    // Botón "Volver arriba"
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});