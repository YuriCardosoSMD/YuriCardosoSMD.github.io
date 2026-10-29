"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;
    const darkModeSalvo = localStorage.getItem('darkMode');
    if (darkModeSalvo === 'ativado' && darkModeToggle) {
        body.classList.add('dark-mode');
        darkModeToggle.classList.replace('bx-moon', 'bx-sun');
    }
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.classList.replace('bx-moon', 'bx-sun');
                localStorage.setItem('darkMode', 'ativado');
            }
            else {
                darkModeToggle.classList.replace('bx-sun', 'bx-moon');
                localStorage.setItem('darkMode', 'desativado');
            }
        });
    }
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menuIcon && navbar) {
        const toggleMenu = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
            const menuAberto = navbar.classList.contains('active');
            menuIcon.setAttribute('aria-label', menuAberto ? 'Fechar menu' : 'Abrir menu');
        };
        menuIcon.addEventListener('click', toggleMenu);
        menuIcon.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleMenu();
            }
        });
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
                menuIcon.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    if (sections.length && navLinks.length) {
        const atualizarMenuAtivo = () => {
            let currentSection = '';
            const scrollPosition = window.scrollY + 200;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id') ?? '';
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', atualizarMenuAtivo);
        atualizarMenuAtivo();
    }
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const projetoCards = document.querySelectorAll('.projeto-tech-card');
    const semProjetosMsg = document.getElementById('sem-projetos-msg');
    if (filtroBtns.length && projetoCards.length) {
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filtroBtns.forEach(button => button.classList.remove('active'));
                btn.classList.add('active');
                const filtroSelecionado = btn.getAttribute('data-filter');
                let projetosVisiveis = 0;
                projetoCards.forEach(card => {
                    const techsDoCard = (card.getAttribute('data-tech') ?? '').split(' ');
                    const deveExibir = filtroSelecionado === 'todos'
                        || (filtroSelecionado !== null && techsDoCard.includes(filtroSelecionado));
                    card.style.display = deveExibir ? 'flex' : 'none';
                    if (deveExibir) {
                        projetosVisiveis++;
                    }
                });
                if (semProjetosMsg) {
                    semProjetosMsg.style.display = projetosVisiveis === 0 ? 'block' : 'none';
                }
            });
        });
    }
});
window.mostrarAlerta = () => {
    alert('Desculpe, ainda não há nada por aqui. Estamos trabalhando para preencher esse espaço. Por favor, por enquanto, continue explorando as outras opções.');
};
