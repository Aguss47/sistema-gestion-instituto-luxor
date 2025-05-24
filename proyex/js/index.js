// Funcion, toque para activar/desacrivar el modo oscuro
function toggleModo() {
    document.body.classList.toggle("modo-oscuro");
}


////////////////////////////////////////////FUNCION TEXTTYPING////////////////////////////////////////////
// Array con textos de cada testimonio
const textosTestimonios = [
    "Gracias a Luxor, hoy lidero operaciones en tres continentes",
    "Luxor me dio las herramientas para crecer personal y profesionalmente",
    "Una experiencia transformadora que cambió mi forma de ver el mundo"
];

// Función efecto máquina de escribir para un elemento específico
function efectoTextTyping(elemento, texto, i = 0) {
    if (!elemento) return; // Asegúrate de que el elemento exista

    // Limpia el contenido del elemento antes de iniciar la animación
    elemento.textContent = "";

    let currentIndex = 0;
    const interval = setInterval(() => {
        if (currentIndex < texto.length) {
            elemento.textContent += texto[currentIndex];
            currentIndex++;
        } else {
            clearInterval(interval); // Detiene el intervalo cuando el texto está completo
        }
    }, 50); // Puedes ajustar la velocidad aquí
}

// Obtener una referencia al carrusel de testimonios
const testimonialCarousel = document.getElementById('testimonialCarousel');

// Escuchar el evento 'slid.bs.carousel' (cuando la transición del carrusel ha terminado)
testimonialCarousel.addEventListener('slid.bs.carousel', function () {
    // Obtener el slide activo (el que se acaba de mostrar)
    const activeItem = this.querySelector('.carousel-item.active');

    // Obtener el índice del slide activo
    const activeIndex = Array.from(this.querySelectorAll('.carousel-item')).indexOf(activeItem);

    // Seleccionar el elemento <p> dentro del slide activo donde se mostrará el texto
    // Usamos el `activeItem` para buscar solo dentro del slide actual
    const textElement = activeItem.querySelector('p[class^="text"]');

    // Asegurarse de que el elemento y el texto existan para el índice actual
    if (textElement && textosTestimonios[activeIndex]) {
        // Ejecutar la animación de texto para el testimonio actual
        efectoTextTyping(textElement, textosTestimonios[activeIndex]);
    }
});

// Ejecutar la animación para el primer testimonio al cargar la página
// Esto asegura que la animación se vea al principio
document.addEventListener('DOMContentLoaded', () => {
    const firstTextElement = document.querySelector('.carousel-item.active p[class^="text"]');
    if (firstTextElement && textosTestimonios[0]) {
        efectoTextTyping(firstTextElement, textosTestimonios[0]);
    }
});
////////////////////////////////////////////FUNCION TEXTTYPING////////////////////////////////////////////