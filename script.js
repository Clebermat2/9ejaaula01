document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    // Função para atualizar o link ativo no menu
    const updateActiveLink = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para o menu fixo
            const sectionHeight = section.clientHeight;
            
            // Verifica se a posição de rolagem está dentro da seção atual
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Atualiza a classe 'active' nos links de navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Adiciona o listener de rolagem para chamar a função
    window.addEventListener('scroll', updateActiveLink);
    
    // Chama a função uma vez no carregamento da página
    updateActiveLink();
});
