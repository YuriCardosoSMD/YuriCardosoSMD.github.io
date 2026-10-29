interface Window {
    mostrarAlerta: () => void;
}

document.addEventListener('DOMContentLoaded', () => {
    /* ======================================================================
       1. MODO ESCURO
       O botão (#darkmode-toggle) contém um <i> com o ícone. As classes
       bx-moon / bx-sun são trocadas no ícone, não no botão.
       ====================================================================== */
    const darkModeToggle = document.querySelector<HTMLButtonElement>('#darkmode-toggle');
    const darkModeIcon = darkModeToggle?.querySelector<HTMLElement>('i') ?? null;
    const body = document.body;

    const aplicarTema = (escuro: boolean): void => {
        body.classList.toggle('dark-mode', escuro);

        if (darkModeIcon) {
            darkModeIcon.classList.toggle('bx-sun', escuro);
            darkModeIcon.classList.toggle('bx-moon', !escuro);
        }

        if (darkModeToggle) {
            darkModeToggle.setAttribute('aria-pressed', String(escuro));
            darkModeToggle.setAttribute('aria-label', escuro ? 'Ativar modo claro' : 'Ativar modo escuro');
        }
    };

    aplicarTema(localStorage.getItem('darkMode') === 'ativado');

    darkModeToggle?.addEventListener('click', () => {
        const escuro = !body.classList.contains('dark-mode');
        aplicarTema(escuro);
        localStorage.setItem('darkMode', escuro ? 'ativado' : 'desativado');
    });

    /* ======================================================================
       2. MENU MOBILE
       Como agora é um <button>, Enter e Espaço já funcionam nativamente.
       ====================================================================== */
    const menuBtn = document.querySelector<HTMLButtonElement>('#menu-icon');
    const menuIcon = menuBtn?.querySelector<HTMLElement>('i') ?? null;
    const navbar = document.querySelector<HTMLElement>('.navbar');

    if (menuBtn && navbar) {
        const definirMenu = (aberto: boolean): void => {
            navbar.classList.toggle('active', aberto);

            if (menuIcon) {
                menuIcon.classList.toggle('bx-x', aberto);
                menuIcon.classList.toggle('bx-menu', !aberto);
            }

            menuBtn.setAttribute('aria-expanded', String(aberto));
            menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
        };

        menuBtn.addEventListener('click', () => {
            definirMenu(!navbar.classList.contains('active'));
        });

        navbar.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
            link.addEventListener('click', () => definirMenu(false));
        });

        // Fecha o menu com Esc e devolve o foco ao botão
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape' && navbar.classList.contains('active')) {
                definirMenu(false);
                menuBtn.focus();
            }
        });
    }

    /* ======================================================================
       3. MENU ATIVO CONFORME A ROLAGEM
       Só considera links da própria página (href="#..."). Nas páginas
       internas os links são "index.html#...", então o destaque definido
       no HTML (class="active") é mantido.
       ====================================================================== */
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const linksInternos = Array.from(
        document.querySelectorAll<HTMLAnchorElement>('.navbar a')
    ).filter(link => (link.getAttribute('href') ?? '').startsWith('#'));

    if (sections.length && linksInternos.length) {
        const atualizarMenuAtivo = (): void => {
            let currentSection = '';
            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                    currentSection = section.id;
                }
            });

            linksInternos.forEach(link => {
                const ativo = link.getAttribute('href') === `#${currentSection}`;
                link.classList.toggle('active', ativo);
                if (ativo) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        };

        window.addEventListener('scroll', atualizarMenuAtivo, { passive: true });
        atualizarMenuAtivo();
    }

    /* ======================================================================
       4. PÁGINAS DE PROJETOS POR TECNOLOGIA
       - Mensagem de "sem projetos" quando a grade está vazia.
       - Filtros: só rodam se a página tiver botões .filtro-btn.
       ====================================================================== */
    const projetoCards = document.querySelectorAll<HTMLElement>('.projeto-tech-card');
    const semProjetosMsg = document.getElementById('sem-projetos-msg');
    const filtroBtns = document.querySelectorAll<HTMLButtonElement>('.filtro-btn');

    if (semProjetosMsg && document.getElementById('projetos-grid')) {
        semProjetosMsg.hidden = projetoCards.length > 0;
    }

    if (filtroBtns.length && projetoCards.length) {
        filtroBtns.forEach(btn => {
            btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));

            btn.addEventListener('click', () => {
                filtroBtns.forEach(button => {
                    button.classList.remove('active');
                    button.setAttribute('aria-pressed', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');

                const filtroSelecionado = btn.dataset.filter ?? 'todos';
                let projetosVisiveis = 0;

                projetoCards.forEach(card => {
                    const techsDoCard = (card.dataset.tech ?? '').split(' ');
                    const deveExibir = filtroSelecionado === 'todos' || techsDoCard.includes(filtroSelecionado);

                    card.hidden = !deveExibir;
                    if (deveExibir) {
                        projetosVisiveis++;
                    }
                });

                if (semProjetosMsg) {
                    semProjetosMsg.hidden = projetosVisiveis > 0;
                }
            });
        });
    }
});

window.mostrarAlerta = (): void => {
    alert('Desculpe, ainda não há nada por aqui. Estamos trabalhando para preencher esse espaço. Por favor, por enquanto, continue explorando as outras opções.');
};