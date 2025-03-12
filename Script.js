// Detecta o evento de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // Verifica se a rolagem é maior que 50px e adiciona ou remove a classe
    if (window.scrollY > 50) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
});