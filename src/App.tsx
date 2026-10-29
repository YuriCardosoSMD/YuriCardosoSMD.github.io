import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft, ArrowUpRight, Check, Code2, Database,
  Github, Globe, GraduationCap, Linkedin, Mail, Menu, Moon, Palette, Phone,
  Server, Sun, Terminal, Users, X,
} from 'lucide-react';

type Page = 'home' | 'about' | 'htmlcss';
type Filter = 'todos' | 'html' | 'css' | 'flexbox';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuri-da-silva-cardoso-515886215/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/YuriCardosoSMD?tab=repositories', icon: Github },
  { label: 'E-mail', href: 'mailto:yu.cardoso10@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/5585996855241', icon: Phone },
];

const technologies = [
  { name: 'HTML + CSS', image: '/assets/HTMLCSSIcon.png', filter: 'html' as Filter, available: true },
  { name: 'TypeScript + JavaScript', image: '/assets/JsTsIcon.png', filter: 'todos' as Filter, available: false },
  { name: 'React', image: '/assets/React.png', filter: 'todos' as Filter, available: false },
  { name: 'Node.js', image: '/assets/Node.js.png', filter: 'todos' as Filter, available: false },
  { name: 'Python', image: '/assets/PythonIcon.png', filter: 'todos' as Filter, available: false },
  { name: 'SQL / PostgreSQL', image: '/assets/PostgresSQL.png', filter: 'todos' as Filter, available: false },
];

const certificates = [
  ['Banco de Dados Oracle Completo 2026: SQL + PLSQL + Modelagem', 'Udemy'],
  ['Banco de Dados Oracle 2024 Completo: SQL + PLSQL + Modelagem', 'Udemy'],
  ['Aprenda tudo sobre o Linux! Completo e atualizado v2026!', 'Udemy'],
  ['Criando Chatbots com a plataforma BLIP', 'Udemy'],
  ['Curso de IA Generativa Online - 3.0', 'Geração Tech 3.0 IEL Ceará'],
  ['Biblioteca de boas práticas de gestão de TI (GSTI/ITSM) v3 (ITIL v3)', 'Certificação / Capacitação'],
  ['Estrutura e Funcionamento das Redes de Computadores Google', 'Coursera Google + CIEE'],
  ['Fundamentos do Suporte Técnico', 'Coursera Google + CIEE'],
  ['Programa Jovem Aprendiz CIEE', 'Centro de Integração Empresa-Escola - CIEE'],
  ['Cocoa Heads Fortaleza', 'Comunidade para desenvolvedores de plataformas Apple (Evento)'],
];

function usePage(): [Page, (page: Page) => void] {
  const getPage = (): Page => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'sobre' ? 'about' : hash === 'projetos-html-css' ? 'htmlcss' : 'home';
  };
  const [page, setPage] = useState<Page>(getPage);
  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return [page, (next) => {
    window.location.hash = next === 'about' ? 'sobre' : next === 'htmlcss' ? 'projetos-html-css' : 'home';
  }];
}

function Header({ setPage, dark, setDark }: { setPage: (page: Page) => void; dark: boolean; setDark: (dark: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [['home', 'Início'], ['sobre', 'Sobre Mim'], ['projetos', 'Projetos'], ['linguagens', 'Tecnologias']] as const;
  const navigate = (target: string) => {
    setPage('home');
    setMenuOpen(false);
    window.setTimeout(() => {
      const section = document.getElementById(target);
      if (!section) return;
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - headerHeight,
        behavior: 'smooth',
      });
    }, 0);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => navigate('home')} className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
          Yuri <span className="text-slate-900 dark:text-white">Cardoso</span>
        </button>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-2 border-b bg-white p-6 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0 dark:bg-slate-950 md:dark:bg-transparent`}>
          {links.map(([target, label]) => (
            <button key={target} onClick={() => navigate(target)} className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300">
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'} onClick={() => setDark(!dark)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-12 dark:border-slate-800 dark:bg-slate-950">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
      <div className="flex gap-4">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="rounded-full bg-slate-200 p-3 text-slate-700 transition hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-300"><Icon size={20} /></a>)}</div>
      <p className="text-sm text-slate-500">© 2026 Yuri Cardoso | Todos os Direitos Reservados</p>
    </div>
  </footer>;
}

function Home({ setPage }: { setPage: (page: Page) => void }) {
  const [notice, setNotice] = useState('');
  return <main>
    <section id="home" className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl scroll-mt-24 flex-col justify-center px-6 py-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl dark:text-white">Olá, eu sou <span className="text-slate-900 dark:text-white">Yuri Cardoso</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Desenvolvedor web full stack em formação, com foco em TypeScript, Node.js e bancos de dados. Aqui você encontra meus principais projetos e os estudos que fiz em cada tecnologia.</p>
        <div className="mt-10 flex flex-wrap gap-4"><a href="#projetos" className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700">Ver projetos</a></div>
      </div>
      <div className="mt-12 flex gap-4">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400"><Icon /></a>)}</div>
    </section>
    <section id="sobre" className="min-h-[calc(100vh-73px)] scroll-mt-24 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"><div><SectionTitle first="Sobre" second="Mim" /><h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">Em resumo</h3><p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">Sou o <strong>Yuri Cardoso</strong>, tenho 22 anos e estou cursando Sistemas e Mídias Digitais na Universidade Federal do Ceará. Comecei na área no curso técnico em Informática do Instituto Federal do Ceará e desde então venho desenvolvendo projetos acadêmicos e pessoais.</p><p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">Hoje meu foco é o <strong>desenvolvimento web full stack com TypeScript</strong>, principalmente back-end e bancos de dados. Trabalho com HTML, CSS, TypeScript, React, Node.js, Python e SQL.</p><button onClick={() => setPage('about')} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-slate-700">Leia mais <ArrowUpRight size={18} /></button></div><img src="/assets/foto.jpeg" alt="Foto de Yuri Cardoso" className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-2xl" /></div></section>
    <section id="projetos" className="min-h-[calc(100vh-73px)] scroll-mt-24 mx-auto max-w-6xl px-6 py-24"><SectionTitle first="" second="Projetos" /><p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">Projetos em que trabalhei, do design de interfaces ao back-end. Cada um tem uma descrição, as tecnologias usadas e o link para o repositório.</p><div className="mt-12 grid gap-6 md:grid-cols-3">{[['Design de Sites', 'Interfaces responsivas para aplicações web, desenvolvidas com HTML e CSS.', Code2], ['Sistema de Estoque', 'Aplicação para gerenciamento de estoque.', Database], ['Design Gráfico', 'Elementos visuais, layouts e materiais para projetos digitais.', Palette], ['Documentação', 'Organização e criação de documentação para projetos.', Terminal], ['Mandacaru Games', 'Projeto de interface para jogos digitais.', Globe], ['Desenvolvimento Web', 'Aplicações modernas de front-end e back-end.', Server]].map(([title, text, Icon], i) => <article key={String(title)} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">{i === 1 ? <img src="/assets/projeto-estoque.png" alt="Tela do Sistema de Estoque" className="h-48 w-full object-cover" /> : i === 4 ? <img src="/assets/projeto-mandacaru.png" alt="Tela do Mandacaru Games" className="h-48 w-full object-cover" /> : <div className="flex h-48 items-center justify-center bg-slate-100 dark:bg-slate-800"><Icon size={48} className="text-slate-900 transition group-hover:scale-110" /></div>}<div className="p-6"><h3 className="text-xl font-bold text-slate-900 dark:text-white">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{String(text)}</p>{(i === 1 || i === 4) && <a href={i === 1 ? 'https://github.com/Equipe-Simplificando/sistema-de-estoque.git' : 'https://github.com/YuriCardosoSMD/DIGinterfacecompleta.git'} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-semibold text-slate-900">Ver no GitHub <ArrowUpRight size={16} /></a>}</div></article>)}</div></section>
    <section id="linguagens" className="min-h-[calc(100vh-73px)] scroll-mt-24 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"><div className="mx-auto max-w-6xl"><SectionTitle first="" second="Tecnologias" /><p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">Tecnologias que uso no desenvolvimento web, do front-end ao banco de dados. Clique em uma delas para ver os projetos feitos com ela.</p><div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">{technologies.map((tech) => <button key={tech.name} onClick={() => tech.available ? setPage('htmlcss') : setNotice(`Ainda não há projetos publicados com ${tech.name}.`)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"><div className="flex h-48 items-center justify-center bg-slate-100 dark:bg-slate-800"><img src={tech.image} alt={tech.name} className="h-24 w-24 object-contain transition group-hover:scale-110" /></div><div className="min-h-[112px] p-6"><span className="block text-xl font-bold text-slate-900 dark:text-white">{tech.name}</span></div></button>)}</div>{notice && <div role="status" className="mx-auto mt-8 flex max-w-md items-center justify-between rounded-xl bg-slate-100 p-4 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-100">{notice}<button onClick={() => setNotice('')} aria-label="Fechar aviso"><X size={18} /></button></div>}</div></section>
  </main>;
}

function SectionTitle({ first, second }: { first: string; second: string }) { return <h2 className="text-center text-4xl font-black tracking-tight text-slate-900 dark:text-white">{first} <span className="text-slate-900 dark:text-white">{second}</span></h2>; }

function About() {
  const experiences = [['Assistente de Curadoria de Chatbot', 'Lanlink Informática LTDA', 'Maio de 2025 – Atualmente'], ['Técnico de Apoio ao Usuário de Informática (Helpdesk)', 'Lanlink Serviços de Informática SA', 'Junho de 2024 – Maio de 2025'], ['Jovem Aprendiz', 'Centro Cearense de Oftalmologia / CCO - CLDO', 'Fevereiro de 2023 – Maio de 2024']];
  return <main className="mx-auto max-w-6xl px-6 py-20"><SectionTitle first="Mais sobre" second="Mim" /><div className="mt-12 grid gap-8 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800"><h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white"><Users className="text-slate-900" /> Perfil & Atuação Atual</h3><p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">Atuando atualmente como <strong>Assistente de Curadoria de Chatbot</strong>, desempenho funções essenciais para a otimização e evolução dos Assistentes Virtuais, garantindo uma experiência de atendimento eficiente e alinhada às necessidades dos clientes.</p></article><article className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800"><h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white"><Globe className="text-slate-900" /> Idiomas</h3><ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300"><li><strong>Inglês:</strong> Avançado</li><li><strong>Espanhol:</strong> Básico</li><li><strong>Francês:</strong> Básico</li></ul><p className="mt-6 text-slate-600 dark:text-slate-300"><strong>Localização:</strong> Fortaleza, CE<br /><strong>E-mail:</strong> yu.cardoso10@gmail.com<br /><strong>Telefone:</strong> (85) 99685-5241</p></article></div><section className="mt-24"><SectionTitle first="Experiências" second="Profissionais" /><div className="mt-10 space-y-5">{experiences.map(([role, company, period]) => <article key={role} className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800"><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><h3 className="text-xl font-bold text-slate-900 dark:text-white">{role}</h3><h4 className="mt-1 text-slate-900">{company}</h4></div><span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">{period}</span></div><p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">Atuação com suporte, análise, curadoria de diálogos, melhoria de fluxos e colaboração com equipes para aprimorar a experiência do usuário.</p></article>)}</div></section><section className="mt-24"><SectionTitle first="Formação" second="Acadêmica" /><div className="mt-10 grid gap-6 md:grid-cols-2">{[['2024 – Atualmente', 'Curso Superior em Sistemas e Mídias Digitais', 'Universidade Federal do Ceará (UFC)'], ['2019 – 2023', 'Curso Técnico em Informática', 'Instituto Federal do Ceará (IFCE)']].map(([period, course, institution]) => <article key={course} className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800"><GraduationCap className="text-slate-900" /><span className="mt-4 inline-block text-sm font-semibold text-slate-900">{period}</span><h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{course}</h3><p className="mt-2 text-slate-600 dark:text-slate-300">{institution}</p></article>)}</div></section><section className="mt-24"><SectionTitle first="Cursos, Certificações" second="e Eventos" /><div className="mt-10 grid gap-4 sm:grid-cols-2">{certificates.map(([name, provider]) => <article key={name} className="flex gap-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"><Check className="shrink-0 text-slate-900" /><div><h3 className="font-semibold text-slate-900 dark:text-white">{name}</h3><p className="mt-1 text-sm text-slate-500">{provider}</p></div></article>)}</div></section><a href="#home" className="mx-auto mt-16 flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-slate-700"><ArrowLeft size={18} /> Voltar para o portfólio</a></main>;
}

function HtmlCssProjects() {
  const [filter, setFilter] = useState<Filter>('todos');
  const projects = [{ title: 'Cartão de Perfil Responsivo', description: 'Cartão de perfil digital com foto, biografia e links para redes profissionais. Layout responsivo com Flexbox e media queries.', tags: ['html', 'css', 'flexbox'], image: '/assets/Cartao_de_Perfil_Responsivo.png', href: 'https://github.com/YuriCardosoSMD/Cartao_de_Perfil_Responsivo_Treino-HTML_CSS' }];
  const visible = useMemo(() => filter === 'todos' ? projects : projects.filter((project) => project.tags.includes(filter)), [filter]);
  return <main className="mx-auto max-w-6xl px-6 py-20"><SectionTitle first="Projetos" second="HTML & CSS" /><p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">Páginas construídas apenas com HTML e CSS, com foco em estrutura semântica, layout responsivo e acessibilidade.</p><div className="mt-10 flex flex-wrap justify-center gap-3">{(['todos', 'html', 'css', 'flexbox'] as Filter[]).map((value) => <button key={value} onClick={() => setFilter(value)} className={`rounded-full px-4 py-2 text-sm font-bold capitalize ${filter === value ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{value}</button>)}</div><div className="mt-10 grid gap-6 md:grid-cols-2">{visible.map((project) => <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"><img src={project.image} alt={`Tela do projeto ${project.title}`} className="h-64 w-full object-cover" /><div className="p-6"><h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-900 dark:bg-slate-800 dark:text-slate-100">{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-slate-900">Repositório <ArrowUpRight size={17} /></a></div></article>)}</div><a href="#home" className="mx-auto mt-12 flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:bg-slate-700"><ArrowLeft size={18} /> Voltar para tecnologias</a></main>;
}

export default function App() {
  const [page, setPage] = usePage();
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'ativado');
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('darkMode', dark ? 'ativado' : 'desativado'); }, [dark]);
  useEffect(() => {
    if (page !== 'home' || window.location.hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [page]);
  return <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white"><Header setPage={setPage} dark={dark} setDark={setDark} />{page === 'home' && <Home setPage={setPage} />}{page === 'about' && <About />}{page === 'htmlcss' && <HtmlCssProjects />}<Footer /></div>;
}
