import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  CalendarDays,
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

type Page = 'home' | 'about' | 'technology';

interface ProjectItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  alt?: string;
  repo?: string;
}

interface Certificate {
  name: string;
  provider: string;
  url?: string;
}

interface TechProject {
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  status: 'concluido' | 'em-andamento';
  image: string;
  imageMobile?: string;
  liveUrl?: string;
  repoUrl: string;
}

interface TechPageData {
  slug: string;
  name: string;
  icon: string;
  intro: string;
  skills: string[];
  projects: TechProject[];
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

const techPages: TechPageData[] = [
  {
    slug: 'html-css',
    name: 'HTML + CSS',
    icon: '/assets/HTMLCSSIcon.png',
    intro:
      'Projetos que mostram como estruturo páginas com HTML semântico e construo layouts responsivos com CSS, sem frameworks.',
    skills: ['HTML semântico', 'Flexbox', 'Media queries', 'Layout responsivo'],
    projects: [
      {
        title: 'Cartão de Perfil Responsivo',
        summary: 'Cartão de perfil que se adapta do celular ao desktop.',
        highlights: [
          'Alinhamento e distribuição de elementos com Flexbox',
          'Adaptação do layout a diferentes telas com media queries',
          'Organização semântica do conteúdo',
        ],
        tags: ['Flexbox', 'Responsivo', 'Semântica'],
        status: 'concluido',
        image: '/assets/Cartao_de_Perfil_Responsivo.png',
        repoUrl: 'https://github.com/YuriCardosoSMD/Cartao_de_Perfil_Responsivo_Treino-HTML_CSS',
        // TODO: adicionar liveUrl quando o GitHub Pages do repositório estiver ativo
      },
    ],
  },
  {
    slug: 'typescript-javascript',
    name: 'TypeScript + JavaScript',
    icon: '/assets/JsTsIcon.png',
    intro: '',
    skills: [],
    projects: [],
  },
  {
    slug: 'react',
    name: 'React',
    icon: '/assets/React.png',
    intro: '',
    skills: [],
    projects: [],
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    icon: '/assets/Node.js.png',
    intro: '',
    skills: [],
    projects: [],
  },
  {
    slug: 'python',
    name: 'Python',
    icon: '/assets/PythonIcon.png',
    intro: '',
    skills: [],
    projects: [],
  },
  {
    slug: 'sql-postgresql',
    name: 'SQL / PostgreSQL',
    icon: '/assets/PostgreSQL.png',
    intro: '',
    skills: [],
    projects: [],
  },
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

const certificates: Certificate[] = [
  { name: 'Banco de Dados Oracle Completo 2026: SQL + PLSQL + Modelagem', provider: 'Udemy' },
  { name: 'Aprenda tudo sobre o Linux! Completo e atualizado v2026!', provider: 'Udemy' },
  { name: 'Criando Chatbots com a plataforma BLIP', provider: 'Udemy' },
  { name: 'Curso de IA Generativa Online - 3.0', provider: 'Geração Tech 3.0 IEL Ceará' },
  {
    name: 'Biblioteca de boas práticas de gestão de TI (GSTI/ITSM) v3 (ITIL v3)',
    provider: 'Certificação / Capacitação',
  }, // TODO: informar a instituição emissora
  {
    name: 'Estrutura e Funcionamento das Redes de Computadores',
    provider: 'Coursera Google + CIEE',
  },
  { name: 'Fundamentos do Suporte Técnico', provider: 'Coursera Google + CIEE' },
  {
    name: 'Programa Jovem Aprendiz CIEE',
    provider: 'Centro de Integração Empresa-Escola - CIEE',
  },
];

const events: Certificate[] = [
  {
    name: 'Cocoa Heads Fortaleza',
    provider: 'Comunidade para desenvolvedores de plataformas Apple',
  },
];

function goToSection(id: string) {
  if (window.location.hash === `#${id}`) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.hash = id;
}

function usePage(): [Page, (page: Page) => void, string, string | undefined] {
  const getRoute = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'projetos-html-css') {
      window.history.replaceState(null, '', '#tecnologia/html-css');
      return { page: 'technology' as Page, hash: 'tecnologia/html-css', slug: 'html-css' };
    }
    if (hash === 'sobre') return { page: 'about' as Page, hash, slug: undefined };
    if (hash.startsWith('tecnologia/')) {
      const slug = hash.replace('tecnologia/', '');
      if (techPages.some((tech) => tech.slug === slug)) {
        return { page: 'technology' as Page, hash, slug };
      }
    }
    return { page: 'home' as Page, hash, slug: undefined };
  };

  const initialRoute = getRoute();
  const [page, setPage] = useState<Page>(initialRoute.page);
  const [hash, setHash] = useState(initialRoute.hash);
  const [slug, setSlug] = useState<string | undefined>(initialRoute.slug);

  useEffect(() => {
    const onHashChange = () => {
      const route = getRoute();
      setPage(route.page);
      setHash(route.hash);
      setSlug(route.slug);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return [
    page,
    (next) => {
      window.location.hash =
        next === 'about'
          ? 'sobre'
          : next === 'technology'
            ? `tecnologia/${slug ?? 'html-css'}`
            : 'home';
    },
    hash,
    slug,
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
            {techPages.map((tech) => (
              <button
                key={tech.slug}
                onClick={() => {
                  window.location.hash = `tecnologia/${tech.slug}`;
                }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-600"
              >
                <div className="flex h-48 items-center justify-center bg-slate-100 dark:bg-slate-800">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-24 w-24 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="min-h-[112px] p-6">
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">
                    {tech.name}
                  </span>
                  <span className="mt-2 block text-sm text-slate-600 dark:text-slate-300">
                    {tech.projects.length === 0 ? 'Em breve' : `${tech.projects.length} projeto(s)`}
                  </span>
                </div>
              </button>
            ))}
          </div>
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
        <article className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800 md:col-span-2">
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
        </article>

        <article className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Mail /> Contato
          </h3>
          <p className="mt-5 text-slate-600 dark:text-slate-300">
            <strong>Localização:</strong> Fortaleza, CE
            <br />
            <strong>E-mail:</strong>{' '}
            <a href="mailto:yu.cardoso10@gmail.com" className="hover:underline">
              yu.cardoso10@gmail.com
            </a>
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
        <h3 className="mt-10 text-2xl font-bold text-slate-900 dark:text-white">
          Cursos e Certificações
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certificates.map(({ name, provider, url }) => {
            const content = (
              <>
                <Award className="shrink-0 text-slate-900 dark:text-white" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{provider}</p>
                </div>
              </>
            );

            return url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-slate-900 dark:border-slate-800 dark:hover:border-slate-600"
              >
                {content}
              </a>
            ) : (
              <article
                key={name}
                className="flex gap-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
              >
                {content}
              </article>
            );
          })}
        </div>
        <h3 className="mt-10 text-2xl font-bold text-slate-900 dark:text-white">Eventos</h3>
        <div className="mt-6 grid gap-4">
          {events.map(({ name, provider, url }) => {
            const content = (
              <>
                <CalendarDays className="shrink-0 text-slate-900 dark:text-white" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{provider}</p>
                </div>
              </>
            );

            return url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-slate-900 dark:border-slate-800 dark:hover:border-slate-600"
              >
                {content}
              </a>
            ) : (
              <article
                key={name}
                className="flex gap-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
              >
                {content}
              </article>
            );
          })}
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

function TechPage({ data }: { data: TechPageData }) {
  const [filter, setFilter] = useState('Todos');
  const tags = Array.from(new Set(data.projects.flatMap((project) => project.tags)));
  const visibleProjects =
    filter === 'Todos'
      ? data.projects
      : data.projects.filter((project) => project.tags.includes(filter));
  const currentIndex = techPages.findIndex((tech) => tech.slug === data.slug);
  const previous = currentIndex > 0 ? techPages[currentIndex - 1] : undefined;
  const next = currentIndex < techPages.length - 1 ? techPages[currentIndex + 1] : undefined;
  const githubLink = socialLinks.find((link) => link.label === 'GitHub')?.href;

  useEffect(() => {
    setFilter('Todos');
  }, [data.slug]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <img src={data.icon} alt={data.name} className="h-16 w-16 object-contain" />
        <div className="mt-6">
          <SectionTitle title={`Projetos ${data.name}`} />
        </div>
        {data.intro && (
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            {data.intro}
          </p>
        )}
      </div>

      {data.skills.length > 0 && (
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">O que pratiquei</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {data.projects.length >= 4 && (
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Todos', ...tags].map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter === value
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      )}

      {data.projects.length === 0 ? (
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-200 p-8 text-center dark:border-slate-800">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Projetos em desenvolvimento
          </h3>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Enquanto isso, você pode acompanhar meus estudos no GitHub.
          </p>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              GitHub <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      ) : (
        <div className="mt-12 space-y-6">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center gap-4 bg-slate-100 p-4 dark:bg-slate-800 md:w-2/5">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                  {project.imageMobile && (
                    <img
                      src={project.imageMobile}
                      alt={`${project.title} em dispositivo móvel`}
                      className="h-40 w-auto object-contain"
                    />
                  )}
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                      {project.status === 'concluido' ? 'Concluído' : 'Em andamento'}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>
                  <h4 className="mt-5 font-bold text-slate-900 dark:text-white">Destaques</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                      >
                        Ver ao vivo <ArrowUpRight size={17} />
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:text-white dark:hover:border-slate-300"
                    >
                      Ver código <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <nav className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex-1">
          {previous && (
            <a
              href={`#tecnologia/${previous.slug}`}
              className="font-semibold text-slate-900 hover:underline dark:text-white"
            >
              ← {previous.name}
            </a>
          )}
        </div>
        <button
          onClick={() => goToSection('linguagens')}
          className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Ver outras tecnologias
        </button>
        <div className="flex flex-1 justify-end">
          {next && (
            <a
              href={`#tecnologia/${next.slug}`}
              className="font-semibold text-slate-900 hover:underline dark:text-white"
            >
              {next.name} →
            </a>
          )}
        </div>
      </nav>
    </main>
  );
}

export default function App() {
  const [page, setPage, hash, techSlug] = usePage();
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

  const techPage = techSlug ? techPages.find((tech) => tech.slug === techSlug) : undefined;

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Header dark={dark} setDark={setDark} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <About />}
      {page === 'technology' && techPage && <TechPage data={techPage} />}
      <Footer />
    </div>
  );
}