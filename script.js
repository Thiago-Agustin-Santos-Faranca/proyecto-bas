// Animación de scroll suave para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    
    /* ========================================================
       IDEA 1: SCROLL REVEAL (Aparición suave al bajar)
       ======================================================== */
    const elementosOcultos = document.querySelectorAll('.oculto');
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('mostrar');
            }
        });
    }, {
        threshold: 0.15 
    });

    elementosOcultos.forEach((elemento) => {
        observador.observe(elemento);
    });


    /* ========================================================
       IDEA 2: SMART HEADER (El menú cambia al hacer scroll)
       ======================================================== */
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Si el usuario baja más de 50 píxeles, le agregamos la clase "scrolled" al header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // Si vuelve arriba de todo, se la sacamos y vuelve a ser transparente
            header.classList.remove('scrolled');
        }
    });


    /* ========================================================
       IDEA 3: EFECTO 3D TILT EN LAS TARJETAS DE HARDWARE
       ======================================================== */
    // Nos aseguramos de que la librería que pusimos en el HTML haya cargado bien
    if (typeof VanillaTilt !== 'undefined') {
        // Aplicamos el efecto a todas las cajas de tecnología
        VanillaTilt.init(document.querySelectorAll(".tech-box"), {
            max: 15,          // Inclinación máxima en grados (15 es ideal, ni mucho ni poco)
            speed: 400,       // Velocidad del movimiento
            glare: true,      // Activa un reflejo de luz hermoso como si fuera vidrio real
            "max-glare": 0.2, // Qué tan fuerte es la luz (20%)
            scale: 1.05       // Al pasar el mouse, la tarjeta se agranda un 5% hacia adelante
        });
    }

});