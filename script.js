/* 
 * Configuração Inicial do Formspree (Serviço de Formulário).
 * Declarado globalmente para garantir que o SDK do Formspree funcione 
 * corretamente ao ser invocado pelo HTML ou por scripts externos.
 */
window.formspree = window.formspree || function () {
    (formspree.q = formspree.q || []).push(arguments);
};

// Vincula as configurações da conta Formspree ao formulário presente na página
formspree('initForm', {
    formElement: '#contact-form',
    formId: 'mgavkvke'
});

/* 
 * EventListener principal que aguarda o carregamento completo do DOM (Estrutura HTML).
 * Isso garante que tentaremos manipular elementos que já existem na tela.
 */
document.addEventListener('DOMContentLoaded', () => {

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
       SCROLL SPY (Destacar o link do menu correspondente à seção atual)
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

    /* -------------------------------------------------------------
       VALIDAÇÃO DE FORMULÁRIO: CAMPO TELEFONE (Apenas números)
    ------------------------------------------------------------- */
    const telefoneInput = document.querySelector('#telefone');
    if (telefoneInput) {
        // Intercepta qualquer digitação e remove via Regex o que não for número (\D)
        telefoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    /* -------------------------------------------------------------
       TRADUÇÃO DE MENSAGENS (FORMSPREE)
    ------------------------------------------------------------- */
    /* 
     * O SDK do Formspree injeta a mensagem padrão "Thank you!" no DOM.
     * Como não temos controle direto na biblioteca, usamos um MutationObserver
     * para "vigiar" o HTML e traduzir o texto assim que ele for injetado.
     */
    const observer = new MutationObserver(() => {
        const successDiv = document.querySelector('[data-fs-success]');
        if (successDiv && successDiv.textContent.trim() === 'Thank you!') {
            successDiv.textContent = 'Obrigado! Sua mensagem foi enviada.';
        }
    });

    // Inicia a observação no body inteiro em busca de alterações de elementos e texto
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
});