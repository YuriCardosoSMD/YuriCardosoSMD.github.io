import { useEffect, useState } from 'react';
import {
  LanguageProvider,
  createTranslator,
  isLanguage,
  useLanguage,
  supportedLanguages,
  type Language,
  type TranslationKey,
} from './i18n';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  CalendarDays,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Image,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Palette,
  Play,
  Server,
  Sun,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';

type Page = 'home' | 'about' | 'technology';

interface ProjectItem {
  key: string;
  status: 'ativo' | 'pendente';
  title?: string;
  description?: string;
  technologies?: string[];
  icon: LucideIcon;
  image?: string;
  alt?: string;
  repo?: string;
  demoUrl?: string;
  featured?: boolean;
}

interface Certificate {
  key?: string;
  group?: 'database' | 'networks' | 'ai' | 'support';
  name: string;
  provider: string;
  url?: string;
}

interface TechProject {
  key: string;
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
  status: 'concluido' | 'em-breve';
  repoUrl?: string;
}

const REPO_BASE =
  'https://github.com/YuriCardosoSMD/YuriCardosoSMD.github.io/tree/main/public/demos';
const demoUrl = (folder: string) => `/demos/${folder}/index.html`;
const demoRepo = (folder: string) => `${REPO_BASE}/${folder}`;

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuri-da-silva-cardoso-515886215/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/YuriCardosoSMD?tab=repositories', icon: Github },
  { label: 'E-mail', href: 'mailto:yu.cardoso10@gmail.com', icon: Mail },
];

const mainProjects: ProjectItem[] = [
  {
    key: 'stock',
    status: 'ativo',
    description: 'project.stock.description',
    technologies: ['JavaScript', 'Node.js', 'Banco de dados'],
    icon: Database,
    image: '/assets/projeto-estoque.png',
    alt: 'Tela do Sistema de Estoque',
    repo: 'https://github.com/Equipe-Simplificando/sistema-de-estoque.git',
    featured: true,
  },
  {
    key: 'mandacaru',
    status: 'ativo',
    description: 'project.mandacaru.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Globe,
    image: '/assets/projeto-mandacaru.png',
    alt: 'Tela do Mandacaru Games',
    repo: 'https://github.com/YuriCardosoSMD/DIGinterfacecompleta.git',
  },
  {
    key: 'memoryGame',
    status: 'ativo',
    description: 'project.memoryGame.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Code2,
    image: '/assets/site-jogo.png',
    alt: 'project.memoryGame.alt',
    repo: demoRepo('site-jogo'),
    demoUrl: demoUrl('site-jogo'),
  },
  {
    key: 'quiz',
    status: 'ativo',
    description: 'project.quiz.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Palette,
    image: '/assets/site-quiz.png',
    alt: 'project.quiz.alt',
    repo: demoRepo('site-quiz'),
    demoUrl: demoUrl('site-quiz'),
  },
  {
    key: 'event',
    status: 'ativo',
    description: 'project.event.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Globe,
    image: '/assets/site-evento.png',
    alt: 'project.event.alt',
    repo: demoRepo('site-evento'),
    demoUrl: demoUrl('site-evento'),
  },
];

const techPages: TechPageData[] = [
  {
    slug: 'html-css',
    name: 'HTML + CSS',
    icon: '/assets/HTMLCSSIcon.png',
    intro: 'tech.html.intro',
    skills: ['tech.html.skill.semantic', 'tech.html.skill.flex', 'tech.html.skill.media', 'tech.html.skill.responsive'],
    status: 'concluido',
    projects: [
      {
        key: 'profileCard',
        title: 'project.profileCard.title',
        summary: 'tech.html.project.summary',
        highlights: ['tech.html.highlight.flex', 'tech.html.highlight.media', 'tech.html.highlight.semantic'],
        tags: ['tag.flex', 'tag.responsive', 'tag.semantic'],
        status: 'concluido',
        image: '/assets/Cartao_de_Perfil_Responsivo.png',
        repoUrl: 'https://github.com/YuriCardosoSMD/Cartao_de_Perfil_Responsivo_Treino-HTML_CSS',
      },
      {
        key: 'landingpage',
        title: 'project.landingpage.title',
        summary: 'project.landingpage.description',
        highlights: ['project.landingpage.highlight.1', 'project.landingpage.highlight.2', 'project.landingpage.highlight.3'],
        tags: ['tag.scss', 'tag.animations', 'tag.responsive'],
        status: 'concluido',
        image: '/assets/atividade-landingpage.png',
        liveUrl: demoUrl('atividade-landingpage'),
        repoUrl: demoRepo('atividade-landingpage'),
      },
      {
        key: 'googleClone',
        title: 'project.googleClone.title',
        summary: 'project.googleClone.description',
        highlights: ['project.googleClone.highlight.1', 'project.googleClone.highlight.2', 'project.googleClone.highlight.3'],
        tags: ['tag.dom', 'tag.events', 'tag.responsive'],
        status: 'concluido',
        image: '/assets/site-clonedesite.png',
        liveUrl: demoUrl('site-clonedesite'),
        repoUrl: demoRepo('site-clonedesite'),
      },
      {
        key: 'photography',
        title: 'project.photography.title',
        summary: 'project.photography.description',
        highlights: ['project.photography.highlight.1', 'project.photography.highlight.2', 'project.photography.highlight.3'],
        tags: ['tag.html', 'tag.css', 'tag.responsive'],
        status: 'concluido',
        image: '/assets/site-fotografia.png',
        liveUrl: demoUrl('site-fotografia'),
        repoUrl: demoRepo('site-fotografia'),
      },
      {
        key: 'blog',
        title: 'project.blog.title',
        summary: 'project.blog.description',
        highlights: ['project.blog.highlight.1', 'project.blog.highlight.2', 'project.blog.highlight.3'],
        tags: ['tag.html', 'tag.css', 'tag.darkMode'],
        status: 'concluido',
        image: '/assets/site-blog.png',
        liveUrl: demoUrl('site-blog'),
        repoUrl: demoRepo('site-blog'),
      },
    ],
  },
  {
    slug: 'typescript-javascript',
    name: 'TypeScript + JavaScript',
    icon: '/assets/JsTsIcon.png',
    intro: 'tech.ts.intro',
    skills: ['tech.ts.skill.dom', 'tech.ts.skill.events', 'tech.ts.skill.api', 'tech.ts.skill.storage'],
    projects: [
      {
        key: 'currency',
        title: 'project.currency.title',
        summary: 'project.currency.description',
        highlights: ['project.currency.highlight.1', 'project.currency.highlight.2', 'project.currency.highlight.3'],
        tags: ['tag.dom', 'tag.api', 'tag.async'],
        status: 'concluido',
        image: '/assets/conversor-de-moedas.png',
        liveUrl: demoUrl('conversor-de-moedas'),
        repoUrl: demoRepo('conversor-de-moedas'),
      },
      {
        key: 'weather',
        title: 'project.weather.title',
        summary: 'project.weather.description',
        highlights: ['project.weather.highlight.1', 'project.weather.highlight.2', 'project.weather.highlight.3'],
        tags: ['tag.api', 'tag.async', 'tag.dom'],
        status: 'concluido',
        image: '/assets/site-climetempoapi.png',
        liveUrl: demoUrl('site-climetempoapi'),
        repoUrl: demoRepo('site-climetempoapi'),
      },
      {
        key: 'dashboard',
        title: 'project.dashboard.title',
        summary: 'project.dashboard.description',
        highlights: ['project.dashboard.highlight.1', 'project.dashboard.highlight.2', 'project.dashboard.highlight.3'],
        tags: ['tag.dom', 'tag.responsive', 'tag.js'],
        status: 'concluido',
        image: '/assets/site-dashboard.png',
        liveUrl: demoUrl('site-dashboard'),
        repoUrl: demoRepo('site-dashboard'),
      },
    ],
    status: 'concluido',
  },
  {
    slug: 'react',
    name: 'React',
    icon: '/assets/React.png',
    intro: '',
    skills: [],
    projects: [],
    status: 'em-breve',
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    icon: '/assets/Node.js.png',
    intro: '',
    skills: [],
    projects: [],
    status: 'em-breve',
  },
  {
    slug: 'python',
    name: 'Python',
    icon: '/assets/PythonIcon.png',
    intro: '',
    skills: [],
    projects: [],
    status: 'em-breve',
  },
  {
    slug: 'sql-postgresql',
    name: 'SQL / PostgreSQL',
    icon: '/assets/PostgreSQL.png',
    intro: '',
    skills: [],
    projects: [],
    status: 'em-breve',
  },
];

const experiences = [
  {
    key: 'assistant',
    role: 'Assistente de Curadoria de Chatbot',
    company: 'Lanlink Informática LTDA',
    period: 'Maio de 2025 – Atualmente',
    description:
      'Atuação na curadoria de diálogos, ajuste de fluxos conversacionais, análise de métricas de desempenho e colaboração com equipes para aprimorar a experiência do usuário.',
  },
  {
    key: 'helpdesk',
    role: 'Técnico de Apoio ao Usuário de Informática (Helpdesk)',
    company: 'Lanlink Serviços de Informática SA',
    period: 'Junho de 2024 – Maio de 2025',
    description:
      'Suporte técnico a usuários, diagnóstico e resolução de incidentes de hardware e software, acompanhamento de chamados e aplicação de boas práticas de atendimento.',
  },
  {
    key: 'apprentice',
    role: 'Jovem Aprendiz',
    company: 'Centro Cearense de Oftalmologia / CCO - CLDO',
    period: 'Fevereiro de 2023 – Maio de 2024',
    description:
      'Apoio às rotinas de TI e suporte interno, manutenção de equipamentos, auxílio aos colaboradores e organização da infraestrutura tecnológica.',
  },
];

const education = [
  {
    key: 'degree',
    period: '2024 – Atualmente',
    course: 'Curso Superior em Sistemas e Mídias Digitais',
    institution: 'Universidade Federal do Ceará (UFC)',
  },
  {
    key: 'technical',
    period: '2019 – 2023',
    course: 'Curso Técnico em Informática',
    institution: 'Instituto Federal do Ceará (IFCE)',
  },
];

const certificates: Certificate[] = [
  { key: 'oracle', group: 'database', name: 'certificate.oracle.name', provider: 'Udemy' },
  { key: 'linux', group: 'support', name: 'certificate.linux.name', provider: 'Udemy' },
  { key: 'blip', group: 'ai', name: 'certificate.blip.name', provider: 'Udemy' },
  { key: 'genai', group: 'ai', name: 'certificate.genai.name', provider: 'Geração Tech 3.0 IEL Ceará' },
  { key: 'itil', group: 'support', name: 'certificate.itil.name', provider: 'certificate.itil.provider' },
  { key: 'networks', group: 'networks', name: 'certificate.networks.name', provider: 'Coursera Google + CIEE' },
  { key: 'support', group: 'support', name: 'certificate.support.name', provider: 'Coursera Google + CIEE' },
  { key: 'apprentice', group: 'support', name: 'certificate.apprentice.name', provider: 'Centro de Integração Empresa-Escola - CIEE' },
];

const certificateGroups = [
  ...(['database', 'networks', 'ai', 'support'] as const).map((key) => ({
    key,
    items: certificates.filter((certificate) => certificate.group === key),
  })),
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

function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 ${className}`}>
        <Image size={40} aria-hidden="true" />
        <span className="sr-only">{alt}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />;
}

function Header({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ['home', t('nav.home')],
    ['resumo', t('nav.about')],
    ['projetos', t('nav.projects')],
    ['linguagens', t('nav.technologies')],
  ] as const;

  const navigate = (target: string) => {
    setMenuOpen(false);
    goToSection(target);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/70 bg-[#e9edf2]/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate('home')}
          className="cursor-pointer rounded-lg text-xl font-black tracking-tight text-slate-900 transition hover:text-slate-600 focus-visible:outline focus-visible:outline-2 dark:text-white dark:hover:text-slate-300"
        >
          Yuri Cardoso
        </button>

        <nav
          aria-label={t('nav.main')}
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 top-full w-full flex-col gap-2 border-b border-slate-300 bg-[#e9edf2] p-6 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0 dark:border-slate-800 dark:bg-slate-950 md:dark:bg-transparent`}
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
            aria-label={dark ? t('theme.light') : t('theme.dark')}
            onClick={() => setDark(!dark)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            aria-label={menuOpen ? t('menu.close') : t('menu.open')}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="flex items-center rounded-lg border border-slate-300 p-1 dark:border-slate-700" aria-label={t('language.selector')}>
            {supportedLanguages.map((option) => (
              <button
                key={option}
                type="button"
                aria-label={option === 'pt-BR' ? t('language.pt') : t('language.en')}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`rounded-md px-2 py-1 text-xs font-bold transition ${
                  language === option
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {option === 'pt-BR' ? t('language.pt') : t('language.en')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-300 bg-[#e9edf2] px-6 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label === 'E-mail' ? t('social.email') : label}
              title={label === 'E-mail' ? t('social.email') : label}
              className="rounded-full bg-slate-200 p-3 text-slate-700 transition hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-900"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 Yuri Cardoso | {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

function Home({ setPage }: { setPage: (page: Page) => void }) {
  const { t } = useLanguage();
  const featuredProject = mainProjects.find((project) => project.featured);
  const secondaryProjects = mainProjects.filter((project) => !project.featured);

  return (
    <main>
      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl grid-cols-1 items-center gap-10 scroll-mt-24 px-6 py-24 lg:grid-cols-2"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl dark:text-white">
            {t('hero.title')}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('hero.projects')}
            </a>
          </div>

        </div>
        <div
            aria-hidden="true"
            className="w-full max-w-xl justify-self-center rounded-3xl border border-slate-300 bg-[#f3f5f8] p-8 font-mono text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-6 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600" />
            </div>
            <p className="text-slate-500 dark:text-slate-400">const foco = {'{'}</p>
            <p className="pl-4 text-slate-700 dark:text-slate-200">backEnd: ['TypeScript', 'Node.js'],</p>
            <p className="pl-4 text-slate-700 dark:text-slate-200">dados: 'SQL',</p>
            <p className="text-slate-500 dark:text-slate-400">{'}'};</p>
          </div>

        <div className="flex gap-4 lg:col-start-1 lg:row-start-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label === 'E-mail' ? t('social.email') : label}
              title={label === 'E-mail' ? t('social.email') : label}
              className="cursor-pointer rounded-lg text-slate-500 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 dark:text-slate-400 dark:hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>

      <section
        id="resumo"
        className="min-h-[calc(100vh-73px)] scroll-mt-24 bg-[#dde3ea] px-6 py-24 dark:bg-slate-900/50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTitle title={t('home.about')} />
            <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">{t('home.summary')}</h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {t('home.summaryOne')}
            </p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {t('home.summaryTwo')}
            </p>
            <button
              onClick={() => setPage('about')}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('home.readMore')} <ArrowUpRight size={18} />
            </button>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
              <a href="mailto:yu.cardoso10@gmail.com" className="hover:underline">
                {t('home.email')}
              </a>
              <a
                href="https://www.linkedin.com/in/yuri-da-silva-cardoso-515886215/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('home.linkedin')}
              </a>
            </div>
          </div>

          <img
            src="/assets/foto.jpeg"
            alt={t('alt.profile')}
            width={640}
            height={640}
            loading="lazy"
            className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </section>

      <section
        id="projetos"
        className="mx-auto min-h-[calc(100vh-73px)] max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <SectionTitle title={t('nav.projects')} />
        <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">
          {t('projects.description')}
        </p>

        {featuredProject && (
          <article className="mt-12 overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-900 text-white shadow-lg dark:border-slate-200 dark:bg-slate-100 dark:text-slate-900">
            <div className="grid items-center md:grid-cols-2">
              <ProjectImage
                src={featuredProject.image ?? ''}
                alt={featuredProject.key === 'stock' ? t('alt.stock') : t((featuredProject.alt ?? 'alt.project') as TranslationKey)}
                className="h-full min-h-64 w-full object-cover"
              />
              <div className="p-8">
                <p className="text-sm font-bold uppercase tracking-widest opacity-70">{t('projects.backend')}</p>
                <h3 className="mt-3 text-3xl font-black">
                  {t(`project.${featuredProject.key}.title` as TranslationKey)}
                </h3>
                <p className="mt-4 leading-7 opacity-80">
                  {t((featuredProject.description ?? 'projects.description') as TranslationKey)}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.technologies?.map((technology) => (
                    <span key={technology} className="rounded-full border border-current px-3 py-1 text-sm font-semibold">
                      {technology}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.repo ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-bold underline"
                >
                  {t('projects.repository')} <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </article>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map(({ key, status, description, technologies, icon: Icon, image, alt, repo, demoUrl }, index) => (
            <article
              key={`${status}-${key}-${index}`}
              className="group overflow-hidden rounded-2xl border border-slate-300 bg-[#f3f5f8] shadow-sm transition hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:border-slate-900 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
            >
              {image ? (
                <ProjectImage
                  src={image}
                  alt={key === 'mandacaru' ? t('alt.mandacaru') : t((alt ?? 'alt.project') as TranslationKey)}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="flex h-48 items-center justify-center bg-[#f3f5f8] dark:bg-slate-800">
                  <Icon
                    size={48}
                    className="text-slate-900 transition group-hover:scale-110 dark:text-white"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t(`project.${key}.title` as TranslationKey)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {t((description ?? 'projects.comingSoon') as TranslationKey)}
                </p>
                {technologies && <div className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>}
                {status === 'ativo' && repo && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {demoUrl && (
                      <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t(`project.${key}.title` as TranslationKey)} - ${t('projects.demo')}`} className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                        {t('projects.demo')} <Play size={16} />
                      </a>
                    )}
                    <a href={repo} target="_blank" rel="noopener noreferrer" aria-label={`${t(`project.${key}.title` as TranslationKey)} - ${t('projects.code')}`} className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-900 transition hover:border-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-slate-700 dark:text-white dark:hover:border-slate-300">
                      {demoUrl ? t('projects.code') : t('projects.repository')} <Code2 size={16} />
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="linguagens"
        className="min-h-[calc(100vh-73px)] scroll-mt-24 bg-[#dde3ea] px-6 py-24 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-6xl">
          <SectionTitle title={t('nav.technologies')} />
          <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-slate-600 dark:text-slate-300">
            {t('technologies.description')}
          </p>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techPages.map((tech) => (
              <button
                key={tech.slug}
                onClick={() => {
                  window.location.hash = `tecnologia/${tech.slug}`;
                }}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-[#f3f5f8] text-left shadow-sm transition hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:border-slate-900 hover:shadow-md dark:bg-slate-950 dark:hover:border-slate-600 ${
                  tech.status === 'em-breve'
                    ? 'border-slate-300/70 opacity-75 dark:border-slate-800/70'
                    : 'border-slate-300 dark:border-slate-800'
                }`}
              >
                <div className="flex h-48 items-center justify-center bg-[#f3f5f8] dark:bg-slate-800">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="h-24 w-24 object-contain transition group-hover:scale-110"
                  />
                </div>
                <div className="min-h-[112px] p-6">
                  <span className="block text-xl font-bold text-slate-900 dark:text-white">
                    {tech.name}
                  </span>
                  <span className="mt-2 block text-sm text-slate-600 dark:text-slate-300">
                    {tech.status === 'em-breve'
                      ? t('technologies.comingSoon')
                      : `${tech.projects.length} ${t('technologies.projectCount')}`}
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
  const { t } = useLanguage();
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="sr-only">{t('about.title')}</h1>
      <SectionTitle title={t('about.title')} />
      <a
        href="/curriculo-yuri-cardoso.pdf"
        download
        className="mx-auto mt-8 flex w-fit cursor-pointer rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {t('resume.download')}
      </a>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-300 bg-[#f3f5f8] p-8 dark:border-slate-800 dark:bg-slate-900 md:col-span-2">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Users /> {t('about.profile')}
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-200">
            {t('about.profileText')}
          </p>
        </article>

        <article className="rounded-2xl border border-slate-300 bg-[#f3f5f8] p-8 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Globe /> {t('about.languages')}
          </h3>
          <ul className="mt-5 space-y-3 text-base text-slate-700 dark:text-slate-200">
            <li>
              <strong>{t('language.english')}:</strong> {t('level.advanced')}
            </li>
            <li>
              <strong>{t('language.spanish')}:</strong> {t('level.basic')}
            </li>
            <li>
              <strong>{t('language.french')}:</strong> {t('level.basic')}
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-300 bg-[#f3f5f8] p-8 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
            <Mail /> {t('about.contact')}
          </h3>
          <p className="mt-5 text-base text-slate-700 dark:text-slate-200">
            <strong>{t('about.location')}:</strong> Fortaleza, CE
            <br />
            <strong>E-mail:</strong>{' '}
            <a href="mailto:yu.cardoso10@gmail.com" className="hover:underline">
              yu.cardoso10@gmail.com
            </a>
          </p>
        </article>
      </div>

      <section className="mt-24">
        <SectionTitle title={t('about.experiences')} />
        <div className="relative mt-10 space-y-8 border-l-2 border-slate-300 pl-6 dark:border-slate-800 sm:pl-10">
          {experiences.map(({ key, company }) => (
            <article
              key={key}
              className="relative rounded-2xl border border-slate-300 bg-[#f3f5f8] p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            >
              <span className="absolute -left-[2.05rem] top-8 h-4 w-4 rounded-full border-4 border-[#e9edf2] bg-slate-900 dark:-left-[2.55rem] dark:border-slate-950 dark:bg-white" />
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t(`experience.${key}.role` as TranslationKey)}
                  </h3>
                  <h4 className="mt-1 font-medium text-slate-700 dark:text-slate-300">{company}</h4>
                </div>
                <span className="h-fit w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                  {t(`experience.${key}.period` as TranslationKey)}
                </span>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-700 dark:text-slate-200">
                {t(`experience.${key}.description` as TranslationKey)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle title={t('about.education')} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map(({ key, institution }) => (
            <article
              key={key}
              className="rounded-2xl border border-slate-300 bg-[#f3f5f8] p-8 dark:border-slate-800 dark:bg-slate-900"
            >
              <GraduationCap className="text-slate-900 dark:text-white" />
              <span className="mt-4 inline-block text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t(`education.${key}.period` as TranslationKey)}
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                {t(`education.${key}.course` as TranslationKey)}
              </h3>
              <p className="mt-2 text-base text-slate-700 dark:text-slate-200">{institution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle title={t('about.courses')} />
        <h3 className="mt-10 text-2xl font-bold text-slate-900 dark:text-white">{t('about.certifications')}</h3>
        <div className="mt-6 space-y-10">
          {certificateGroups.map(({ key, items }) => (
            <section key={key}>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {t(`certificate.${key}` as TranslationKey)}
              </h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {items.map(({ key, name, provider, url }) => {
                  const content = (
                    <>
                      <Award className="shrink-0 text-slate-900 dark:text-white" />
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-white">{key ? t(name as TranslationKey) : name}</h5>
                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                          {key && provider.startsWith('certificate.') ? t(provider as TranslationKey) : provider}
                        </p>
                      </div>
                    </>
                  );

                  return url ? (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 rounded-xl border border-slate-300 bg-[#f3f5f8] p-5 transition hover:border-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
                    >
                      {content}
                    </a>
                  ) : (
                    <article
                      key={name}
                      className="flex gap-4 rounded-xl border border-slate-300 bg-[#f3f5f8] p-5 dark:border-slate-800 dark:bg-slate-900"
                    >
                      {content}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <h3 className="mt-10 text-2xl font-bold text-slate-900 dark:text-white">{t('about.events')}</h3>
        <div className="mt-6 grid gap-4">
          {events.map(({ name, provider, url }) => {
            const content = (
              <>
                <CalendarDays className="shrink-0 text-slate-900 dark:text-white" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {name === 'Cocoa Heads Fortaleza' ? t('event.apple.description') : provider}
                  </p>
                </div>
              </>
            );

            return url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-xl border border-slate-300 bg-[#f3f5f8] p-5 transition hover:border-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
              >
                {content}
              </a>
            ) : (
              <article
                key={name}
                className="flex gap-4 rounded-xl border border-slate-300 bg-[#f3f5f8] p-5 dark:border-slate-800 dark:bg-slate-900"
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
        <ArrowLeft size={18} /> {t('about.back')}
      </a>
    </main>
  );
}

function TechPage({ data }: { data: TechPageData }) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const tags = Array.from(new Set(data.projects.flatMap((project) => project.tags)));
  const visibleProjects =
    filter === 'all'
      ? data.projects
      : data.projects.filter((project) => project.tags.includes(filter));
  const currentIndex = techPages.findIndex((tech) => tech.slug === data.slug);
  const previous = currentIndex > 0 ? techPages[currentIndex - 1] : undefined;
  const next = currentIndex < techPages.length - 1 ? techPages[currentIndex + 1] : undefined;

  useEffect(() => {
    setFilter('all');
  }, [data.slug]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="sr-only">{t('nav.projects')} {data.name}</h1>
      <div className="flex flex-col items-center text-center">
        <img src={data.icon} alt={data.name} width={64} height={64} className="h-16 w-16 object-contain" />
        <div className="mt-6">
          <SectionTitle title={`${t('nav.projects')} ${data.name}`} />
        </div>
        {data.intro && (
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            {t(data.intro as TranslationKey)}
          </p>
        )}
      </div>

      {data.skills.length > 0 && (
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('tech.whatPracticed')}</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100"
              >
                {t(skill as TranslationKey)}
              </span>
            ))}
          </div>
        </section>
      )}

      {data.projects.length >= 4 && (
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['all', ...tags].map((value) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter === value
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {value === 'all' ? t('tech.filter.all') : t(value as TranslationKey)}
            </button>
          ))}
        </div>
      )}

      {data.projects.length === 0 ? (
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-300 bg-[#f3f5f8] p-8 text-center dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('tech.inProgressTitle')}
          </h3>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            {t('tech.inProgressText')}
          </p>
          {data.repoUrl ? (
            <a
              href={data.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('projects.repository')} <ArrowUpRight size={18} />
            </a>
          ) : (
            <a
              href="https://github.com/YuriCardosoSMD?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:text-white dark:hover:border-slate-300"
            >
              {t('tech.github')} <Github size={18} />
            </a>
          )}
        </div>
      ) : (
        <div className="mt-12 space-y-6">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-300 bg-[#f3f5f8] dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center gap-4 bg-[#f3f5f8] p-4 dark:bg-slate-800 md:w-2/5">
                  <ProjectImage
                    src={project.image}
                    alt={t(`project.${project.key}.title` as TranslationKey)}
                    className="h-64 w-full object-cover"
                  />
                  {project.imageMobile && (
                    <ProjectImage
                      src={project.imageMobile}
                      alt={`${t(`project.${project.key}.title` as TranslationKey)} mobile view`}
                      className="h-40 w-auto object-contain"
                    />
                  )}
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {t(`project.${project.key}.title` as TranslationKey)}
                    </h3>
                    <span className="rounded-full bg-[#f3f5f8] px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                      {project.status === 'concluido'
                        ? t('status.completed')
                        : t('status.inProgress')}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {t(project.summary as TranslationKey)}
                  </p>
                  <h4 className="mt-5 font-bold text-slate-900 dark:text-white">
                    {t('tech.highlights')}
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        {t(highlight as TranslationKey)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f3f5f8] px-3 py-1 text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                      >
                        {t(tag as TranslationKey)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                      >
                        {t('projects.demo')} <Play size={17} />
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-900 transition hover:border-slate-900 dark:border-slate-700 dark:text-white dark:hover:border-slate-300"
                    >
                      {project.liveUrl ? t('projects.code') : t('projects.repository')} <Code2 size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <nav className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-1 justify-start">
          {previous && (
            <a
              href={`#tecnologia/${previous.slug}`}
              className="cursor-pointer rounded font-semibold text-slate-900 underline transition hover:text-slate-500 focus-visible:outline focus-visible:outline-2 dark:text-white"
            >
              {t('tech.previous')}
            </a>
          )}
        </div>
        <button
          onClick={() => goToSection('linguagens')}
          className="rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          {t('tech.other')}
        </button>
        <div className="flex flex-1 justify-end">
          {next && (
            <a
              href={`#tecnologia/${next.slug}`}
              className="cursor-pointer rounded font-semibold text-slate-900 underline transition hover:text-slate-500 focus-visible:outline focus-visible:outline-2 dark:text-white"
            >
              {t('tech.next')}
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
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return isLanguage(storedLanguage) ? storedLanguage : 'pt-BR';
  });
  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem('language', nextLanguage);
  };
  const techPage = techSlug ? techPages.find((tech) => tech.slug === techSlug) : undefined;
  const t = createTranslator(language);

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

  const appContent = (
    <>
      <Header dark={dark} setDark={setDark} />
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <About />}
      {page === 'technology' && techPage && <TechPage data={techPage} />}
      <Footer />
    </>
  );

  useEffect(() => {
    document.documentElement.lang = language;
    const title = techPage
      ? `${techPage.name} | Yuri Cardoso`
      : page === 'about'
        ? `${t('about.title')} | Portfólio`
        : 'Yuri Cardoso | Portfólio';
    const description = techPage
      ? `${t('tech.whatPracticed')} ${techPage.name}.`
      : page === 'about'
        ? t('about.profileText')
        : t('hero.description');
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [language, page, techPage, t]);

  return (
    <LanguageProvider language={language} setLanguage={setLanguage}>
      <div className="min-h-screen bg-[#e9edf2] text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
        {appContent}
      </div>
    </LanguageProvider>
  );
}