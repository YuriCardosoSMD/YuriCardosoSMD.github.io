import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Server,
  Sun,
  Terminal,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';

type Page = 'home' | 'about' | 'htmlcss';
type Filter = 'todos' | 'html' | 'css' | 'flexbox';

interface ProjectItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  alt?: string;
  repo?: string;
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuri-da-silva-cardoso-515886215/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/YuriCardosoSMD?tab=repositories', icon: Github },
  { label: 'E-mail', href: 'mailto:yu.cardoso10@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/5585996855241', icon: Phone },
];

const mainProjects: ProjectItem[] = [
  {
    title: 'Design de Sites',
    description: 'Interfaces responsivas para aplicações web, desenvolvidas com HTML e CSS.',
    icon: Code2,
  },
  {
    title: 'Sistema de Estoque',
    description: 'Aplicação para gerenciamento de estoque.',
    icon: Database,
    image: '/assets/projeto-estoque.png',
    alt: 'Tela do Sistema de Estoque',
    repo: 'https://github.com/Equipe-Simplificando/sistema-de-estoque.git',
  },
  {
    title: 'Design Gráfico',
    description: 'Elementos visuais, layouts e materiais para projetos digitais.',
    icon: Palette,
  },
  {
    title: 'Documentação',
    description: 'Organização e criação de documentação para projetos.',
    icon: Terminal,
  },
  {
    title: 'Mandacaru Games',
    description: 'Projeto de interface para jogos digitais.',
    icon: Globe,
    image: '/assets/projeto-mandacaru.png',
    alt: 'Tela do Mandacaru Games',
    repo: 'https://github.com/YuriCardosoSMD/DIGinterfacecompleta.git',
  },
  {
    title: 'Desenvolvimento Web',
    description: 'Aplicações modernas de front-end e back-end.',
    icon: Server,
  },
];

const technologies = [
  { name: 'HTML + CSS', image: '/assets/HTMLCSSIcon.png', available: true },
  { name: 'TypeScript + JavaScript', image: '/assets/JsTsIcon.png', available: false },
  { name: 'React', image: '/assets/React.png', available: false },
  { name: 'Node.js', image: '/assets/Node.js.png', available: false },
  { name: 'Python', image: '/assets/PythonIcon.png', available: false },
  { name: 'SQL / PostgreSQL', image: '/assets/PostgreSQL.png', available: false },
];

const experiences = [
  {
    role: 'Assistente de Curadoria de Chatbot',
    company: 'Lanlink Informática LTDA',
    period: 'Maio de 2025 – Atualmente',
    description:
      'Atuação na curadoria de diálogos, ajuste de fluxos conversacionais, análise de métricas de desempenho e colaboração com equipes para aprimorar a experiência do usuário.',
  },
  {
    role: 'Técnico de Apoio ao Usuário de Informática (Helpdesk)',
    company: 'Lanlink Serviços de Informática SA',
    period: 'Junho de 2024 – Maio de 2025',
    description:
      'Suporte técnico a usuários, diagnóstico e resolução de incidentes de hardware e software, acompanhamento de chamados e aplicação de boas práticas de atendimento.',
  },
  {
    role: 'Jovem Aprendiz',
    company: 'Centro Cearense de Oftalmologia / CCO - CLDO',
    period: 'Fevereiro de 2023 – Maio de 2024',
    description:
      'Apoio às rotinas de TI e suporte interno, manutenção de equipamentos, auxílio aos colaboradores e organização da infraestrutura tecnológica.',
  },
];

const education = [
  {
    period: '2024 – Atualmente',
    course: 'Curso Superior em Sistemas e Mídias Digitais',
    institution: 'Universidade Federal do Ceará (UFC)',
  },
  {
    period: '2019 – 2023',
    course: 'Curso Técnico em Informática',
    institution: 'Instituto Federal do Ceará (IFCE)',
  },
];

const certificates = [
  ['Banco de Dados Oracle Completo 2026: SQL + PLSQL + Modelagem', 'Udemy'],
  ['Aprenda tudo sobre o Linux! Completo e atualizado v2026!', 'Udemy'],
  ['Criando Chatbots com a plataforma BLIP', 'Udemy'],
  ['Curso de IA Generativa Online - 3.0', 'Geração Tech 3.0 IEL Ceará'],
  ['Biblioteca de boas práticas de gestão de TI (GSTI/ITSM) v3 (ITIL v3)', 'Certificação / Capacitação'],
  ['Estrutura e Funcionamento das Redes de Computadores Google', 'Coursera Google + CIEE'],
  ['Fundamentos do Suporte Técnico', 'Coursera Google + CIEE'],
  ['Programa Jovem Aprendiz CIEE', 'Centro de Integração Empresa-Escola - CIEE'],
  ['Cocoa Heads Fortaleza', 'Comunidade para desenvolvedores de plataformas Apple (Evento)'],
] as const;

const htmlCssProjects = [
  {
    title: 'Cartão de Perfil Responsivo',
    description:
      'Cartão de perfil digital com foto, biografia e links para redes profissionais. Layout responsivo com Flexbox e media queries.',
    tags: ['html', 'css', 'flexbox'] as Filter[],
    image: '/assets/Cartao_de_Perfil_Responsivo.png',
    href: 'https://github.com/YuriCardosoSMD/Cartao_de_Perfil_Responsivo_Treino-HTML_CSS',
  },
];

function goToSection(id: string) {
  if (window.location.hash === `#${id}`) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.hash = id;
}

function usePage(): [Page, (page: Page) => void, string] {
  const getPage = (): Page => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'sobre' ? 'about' : hash === 'projetos-html-css' ? 'htmlcss' : 'home';
  };

  const [page, setPage] = useState<Page>(getPage);
  const [hash, setHash] = useState(() => window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage());
      setHash(window.location.hash.replace('#', ''));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return [
    page,
    (next) => {
      window.location.hash =
        next === 'about' ? 'sobre' : next === 'htmlcss' ? 'projetos-html-css' : 'home';
    },
    hash,
  ];
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-center text-4xl font-black tracking-tight text-slate-900 dark:text-white">
      {title}
    </h2>
  );
}

function Header({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['home', 'Início'],
    ['resumo', 'Sobre Mim'],
    ['projetos', 'Projetos'],
    ['linguagens', 'Tecnologias'],
  ] as const;

  const navigate = (target: string) => {
    setMenuOpen(false);
    goToSection(target);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate('home')}
          className="text-xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          Yuri Cardoso
        </button>

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 top-full w-full flex-col gap-2 border-b border-slate-200 bg-white p-6 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0 dark:border-slate-800 dark:bg-slate-950 md:dark:bg-transparent`}
        >
          {links.map(([target, label]) => (
            <button
              key={target}
              onClick={() => navigate(target)}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            onClick={() => setDark(!dark)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-full bg-slate-200 p-3 text-slate-700 transition hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-900"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 Yuri Cardoso | Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
}

function Home({ setPage }: { setPage: (page: Page) => void }) {
  const [notice, setNotice] = useState('');

  return (
    <main>
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl scroll-mt-24 flex-col justify-center px-6 py-24"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl dark:text-white">
            Olá, eu sou Yuri Cardoso
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Desenvolvedor web full stack em formação, com foco em TypeScript, Node.js e bancos de
            dados. Aqui você encontra meus principais projetos e os estudos que fiz em cada
            tecnologia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>

      <section
        id="resumo"
        className="min-h-[calc(100vh-73px)] scroll-mt-24 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTitle title="Sobre Mim" />
            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">Em resumo</h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Sou o <strong>Yuri Cardoso</strong>, tenho 22 anos e estou cursando Sistemas e Mídias
              Digitais na Universidade Federal do Ceará. Comecei na área no curso técnico em
              Informática do Instituto Federal do Ceará e desde então venho desenvolvendo projetos
              acadêmicos e pessoais.
            </p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Hoje meu foco é o <strong>desenvolvimento web full stack com TypeScript</strong>,
              principalmente back-end e bancos de dados. Trabalho com HTML, CSS, TypeScript, React,
              Node.js, Python e SQL.
            </p>
            <button
              onClick={() => setPage('about')}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Leia mais <ArrowUpRight size={18} />
            </button>
          </div>

          <img
            src="/assets/foto.jpeg"
            alt="Foto de Yuri Cardoso"
            className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </section>

      <section
        id="projetos"
        className="mx-auto min-h-[calc(100vh-73px)] max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <SectionTitle title="Projetos" />
        <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">
          Projetos em que trabalhei, do design de interfaces ao back-end. Cada um tem uma descrição,
          as tecnologias usadas e o link para o repositório.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {mainProjects.map(({ title, description, icon: Icon, image, alt, repo }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
            >
              {image ? (
                <img src={image} alt={alt ?? title} className="h-48 w-full object-cover" />
              ) : (
                <div className="flex h-48 items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <Icon
                    size={48}
                    className="text-slate-900 transition group-hover:scale-110 dark:text-white"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {description}
                </p>
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-slate-900 hover:underline dark:text-white"
                  >
                    Ver no GitHub <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="linguagens"
        className="min-h-[calc(100vh-73px)] scroll-mt-24 bg-slate-50 px-6 py-24 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Tecnologias" />
          <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">
            Tecnologias que uso no desenvolvimento web, do front-end ao banco de dados. Clique em
            uma delas para ver os projetos feitos com ela.
          </p>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <button
                key={tech.name}
                onClick={() =>
                  tech.available
                    ? setPage('htmlcss')
                    : setNotice(`Ainda não há projetos publicados com ${tech.name}.`)
                }
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-600"
              >
                <div className="flex h-48 items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-24 w-24 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="min-h-[112px] p-6">
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">
                    {tech.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {notice && (
            <div
              role="status"
              className="mx-auto mt-8 flex max-w-md items-center justify-between rounded-xl bg-slate-200/80 p-4 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-100"
            >
              {notice}
              <button onClick={() => setNotice('')} aria-label="Fechar aviso">
                <X size={18} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Mais sobre Mim" />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Users /> Perfil & Atuação Atual
          </h3>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            Atuando atualmente como <strong>Assistente de Curadoria de Chatbot</strong>, desempenho
            funções essenciais para a otimização e evolução dos Assistentes Virtuais, garantindo uma
            experiência de atendimento eficiente e alinhada às necessidades dos clientes.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Globe /> Idiomas
          </h3>
          <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
            <li>
              <strong>Inglês:</strong> Avançado
            </li>
            <li>
              <strong>Espanhol:</strong> Básico
            </li>
            <li>
              <strong>Francês:</strong> Básico
            </li>
          </ul>
          <p className="mt-6 text-slate-600 dark:text-slate-300">
            <strong>Localização:</strong> Fortaleza, CE
            <br />
            <strong>E-mail:</strong> yu.cardoso10@gmail.com
            <br />
            <strong>Telefone:</strong> (85) 99685-5241
          </p>
        </article>
      </div>

      <section className="mt-24">
        <SectionTitle title="Experiências Profissionais" />
        <div className="mt-10 space-y-5">
          {experiences.map(({ role, company, period, description }) => (
            <article
              key={role}
              className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800"
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{role}</h3>
                  <h4 className="mt-1 font-medium text-slate-700 dark:text-slate-300">{company}</h4>
                </div>
                <span className="h-fit w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                  {period}
                </span>
              </div>
              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle title="Formação Acadêmica" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map(({ period, course, institution }) => (
            <article
              key={course}
              className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800"
            >
              <GraduationCap className="text-slate-900 dark:text-white" />
              <span className="mt-4 inline-block text-sm font-semibold text-slate-700 dark:text-slate-300">
                {period}
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{course}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{institution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle title="Cursos, Certificações e Eventos" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certificates.map(([name, provider]) => (
            <article
              key={name}
              className="flex gap-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
            >
              <Check className="shrink-0 text-slate-900 dark:text-white" />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{provider}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <a
        href="#home"
        className="mx-auto mt-16 flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        <ArrowLeft size={18} /> Voltar para o portfólio
      </a>
    </main>
  );
}

function HtmlCssProjects() {
  const [filter, setFilter] = useState<Filter>('todos');
  const visible =
    filter === 'todos'
      ? htmlCssProjects
      : htmlCssProjects.filter((project) => project.tags.includes(filter));

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle title="Projetos HTML & CSS" />
      <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">
        Páginas construídas apenas com HTML e CSS, com foco em estrutura semântica, layout
        responsivo e acessibilidade.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {(['todos', 'html', 'css', 'flexbox'] as Filter[]).map((value) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`rounded-full px-4 py-2 text-sm font-bold capitalize transition ${
              filter === value
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              src={project.image}
              alt={`Tela do projeto ${project.title}`}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-bold text-slate-900 hover:underline dark:text-white"
              >
                Repositório <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={() => goToSection('linguagens')}
        className="mx-auto mt-12 flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        <ArrowLeft size={18} /> Voltar para tecnologias
      </button>
    </main>
  );
}

export default function App() {
  const [page, setPage, hash] = usePage();
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'ativado');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('darkMode', dark ? 'ativado' : 'desativado');
  }, [dark]);

  useEffect(() => {
    if (page !== 'home') {
      window.scrollTo({ top: 0 });
      return;
    }
    window.requestAnimationFrame(() => {
      const id = hash || 'home';
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [page, hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Header dark={dark} setDark={setDark} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <About />}
      {page === 'htmlcss' && <HtmlCssProjects />}
      <Footer />
    </div>
  );
}