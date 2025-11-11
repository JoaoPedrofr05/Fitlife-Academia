// Animação simples no scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.feature, .class, .plan');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Formulário de contato (simulação)
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
});