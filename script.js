document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------------------------------------
       LÓGICA DO MODO ESCURO (DARK MODE)
    ------------------------------------------------------------- */
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;

    // 1. Verifica se o usuário já havia escolhido o modo escuro na última visita
    const darkModeSalvo = localStorage.getItem('darkMode');

    if (darkModeSalvo === 'ativado') {
        body.classList.add('dark-mode');
        darkModeToggle.classList.replace('bx-moon', 'bx-sun');
    }

    // 2. Alterna os modos ao clicar no botão
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Verifica se a classe dark-mode está presente agora
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.classList.replace('bx-moon', 'bx-sun');
                localStorage.setItem('darkMode', 'ativado'); // Salva a preferência
            } else {
                darkModeToggle.classList.replace('bx-sun', 'bx-moon');
                localStorage.setItem('darkMode', 'desativado'); // Salva a preferência
            }
        });
    }

    /* -------------------------------------------------------------
       LÓGICA DO MENU MOBILE (HAMBÚRGUER)
    ------------------------------------------------------------- */
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        
        // Alterna entre abrir e fechar o menu adicionando/removendo a classe 'active'
        const toggleMenu = () => {
            menuIcon.classList.toggle('bx-x'); // Transforma o hambúrguer em um X
            navbar.classList.toggle('active');
            
            // Atualiza atributos de acessibilidade (ARIA)
            const menuAberto = navbar.classList.contains('active');
            menuIcon.setAttribute('aria-label', menuAberto ? 'Fechar menu' : 'Abrir menu');
        };

        // Escuta tanto cliques com mouse quanto ativações pelo teclado
        menuIcon.addEventListener('click', toggleMenu);
        menuIcon.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
            }
        });

        /* Fecha o menu mobile automaticamente sempre que um link for clicado. */
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
                menuIcon.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }

    /* -------------------------------------------------------------
       SCROLL SPY (Destacar o link do menu correspondente á seção atual)
    ------------------------------------------------------------- */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    if (sections.length && navLinks.length) {
        
        const atualizarMenuAtivo = () => {
            let currentSection = '';
            // Define o ponto de cálculo (deslocamento para engatilhar a transição)
            const scrollPosition = window.scrollY + 200;

            // Verifica em qual seção a janela de visualização está focada
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                }
            });

            // Atualiza a classe 'active' nos links de navegação do Header
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', atualizarMenuAtivo);
        // Chamada inicial para garantir a marcação correta no carregamento da página
        atualizarMenuAtivo();
    }
});

/* -------------------------------------------------------------
   LÓGICA DOS CARDS DE LINGUAGEM
------------------------------------------------------------- */
window.mostrarAlerta = function() {
    alert("Desculpe, ainda não há nada por aqui. Estamos trabalhando para preencher esse espaço. Por favor, por enquanto, continue explorando as outras opções.");
};