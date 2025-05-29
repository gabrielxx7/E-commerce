document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Observa o viewport
        rootMargin: '0px',
        threshold: 0.2 // A seção é considerada visível quando 20% dela entra no viewport
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' para acionar a animação
                entry.target.classList.add('is-visible');
                // Opcional: Para animações que só devem acontecer uma vez
                // observer.unobserve(entry.target);
            } else {
                // Opcional: Remove a classe para resetar a animação se a seção sair do viewport
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Animação para imagens de galeria (opcional, pode ser feito apenas com CSS)
    const galeriaItems = document.querySelectorAll('.galeria-item');
    galeriaItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.08) rotate(2deg)';
            item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});