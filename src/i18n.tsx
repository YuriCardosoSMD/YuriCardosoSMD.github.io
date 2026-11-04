import { createContext, useContext, type ReactNode } from 'react';

export const supportedLanguages = ['pt-BR', 'en-US'] as const;
export type Language = (typeof supportedLanguages)[number];

export type TranslationKey = keyof typeof translations['pt-BR'];

const translations = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.about': 'Sobre Mim',
    'nav.projects': 'Projetos',
    'nav.technologies': 'Tecnologias',
    'nav.main': 'Navegação principal',
    'theme.light': 'Ativar modo claro',
    'theme.dark': 'Ativar modo escuro',
    'menu.open': 'Abrir menu',
    'menu.close': 'Fechar menu',
    'hero.title': 'Olá, eu sou Yuri Cardoso',
    'hero.description':
      'Desenvolvedor full stack focado em back-end com TypeScript e Node.js, em Fortaleza – CE. Aqui você encontra meus principais projetos e os estudos que fiz em cada tecnologia.',
    'hero.projects': 'Ver projetos',
    'home.about': 'Sobre Mim',
    'home.summary': 'Em resumo',
    'home.summaryOne':
      'Sou o Yuri Cardoso, estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará. Comecei na área no curso técnico em Informática do Instituto Federal do Ceará e desde então venho desenvolvendo projetos acadêmicos e pessoais.',
    'home.summaryTwo':
      'Hoje meu foco é o desenvolvimento web full stack com TypeScript, principalmente back-end e bancos de dados. Trabalho com HTML, CSS, TypeScript, React, Node.js, Python e SQL.',
    'home.readMore': 'Leia mais',
    'home.email': 'Fale comigo por e-mail',
    'home.linkedin': 'LinkedIn',
    'projects.description':
      'Projetos em que trabalhei, do design de interfaces ao back-end. Cada um tem uma descrição, as tecnologias usadas e o link para o repositório.',
    'projects.backend': 'Destaque de back-end',
    'projects.repository': 'Ver repositório',
    'projects.github': 'Ver no GitHub',
    'projects.pending': 'Pendente',
    'projects.comingSoon': 'Em breve',
    'technologies.description':
      'Tecnologias que uso no desenvolvimento web, do front-end ao banco de dados. Clique em uma delas para ver os projetos feitos com ela.',
    'technologies.comingSoon': 'Em breve · estudos em andamento',
    'technologies.projectCount': 'projeto(s)',
    'about.title': 'Mais sobre Mim',
    'about.profile': 'Perfil & Atuação Atual',
    'about.profileText':
      'Atuando atualmente como Assistente de Curadoria de Chatbot, desempenho funções essenciais para a otimização e evolução dos Assistentes Virtuais, garantindo uma experiência de atendimento eficiente e alinhada às necessidades dos clientes.',
    'about.languages': 'Idiomas',
    'about.contact': 'Contato',
    'about.location': 'Localização',
    'about.experiences': 'Experiências Profissionais',
    'about.education': 'Formação Acadêmica',
    'about.courses': 'Cursos, Certificações e Eventos',
    'about.certifications': 'Cursos e Certificações',
    'about.events': 'Eventos',
    'about.back': 'Voltar para o portfólio',
    'resume.download': 'Baixar currículo (PDF)',
    'tech.whatPracticed': 'O que pratiquei',
    'tech.inProgressTitle': 'Estudos em andamento',
    'tech.inProgressText':
      'Ainda estou organizando projetos com esta tecnologia. Enquanto isso, você pode acompanhar meus estudos no GitHub.',
    'tech.repositoryPlaceholder': 'TODO: adicionar link do repositório específico',
    'tech.ts.repositoryPlaceholder':
      'TODO: adicionar link do repositório específico de TypeScript e JavaScript',
    'tech.previous': '← Anterior',
    'tech.other': 'Ver outras tecnologias',
    'tech.next': 'Próxima →',
    'tech.highlights': 'Destaques',
    'footer.rights': 'Todos os Direitos Reservados',
    'social.email': 'E-mail',
    'language.selector': 'Selecionar idioma',
    'language.pt': 'PT-BR',
    'language.en': 'EN-US',
    'status.completed': 'Concluído',
    'status.inProgress': 'Em andamento',
    'alt.profile': 'Foto de Yuri Cardoso',
    'alt.stock': 'Tela do Sistema de Estoque',
    'alt.mandacaru': 'Tela do Mandacaru Games',
    'alt.technology': 'Ícone de tecnologia',
    'alt.project': 'Imagem do projeto',
    'period.present': 'Atualmente',
    'period.may': 'Maio',
    'period.june': 'Junho',
    'period.february': 'Fevereiro',
    'level.advanced': 'Avançado',
    'level.basic': 'Básico',
    'language.english': 'Inglês',
    'language.spanish': 'Espanhol',
    'language.french': 'Francês',
    'project.stock.title': 'Sistema de Estoque',
    'project.stock.description':
      'Aplicação para gerenciamento de estoque, com foco em uma rotina de back-end organizada e persistência de dados.',
    'project.mandacaru.title': 'Mandacaru Games',
    'project.mandacaru.description': 'Projeto de interface para jogos digitais.',
    'experience.assistant.role': 'Assistente de Curadoria de Chatbot',
    'experience.assistant.period': 'Maio de 2025 – Atualmente',
    'experience.assistant.description':
      'Atuação na curadoria de diálogos, ajuste de fluxos conversacionais, análise de métricas de desempenho e colaboração com equipes para aprimorar a experiência do usuário.',
    'experience.helpdesk.role': 'Técnico de Apoio ao Usuário de Informática (Helpdesk)',
    'experience.helpdesk.period': 'Junho de 2024 – Maio de 2025',
    'experience.helpdesk.description':
      'Suporte técnico a usuários, diagnóstico e resolução de incidentes de hardware e software, acompanhamento de chamados e aplicação de boas práticas de atendimento.',
    'experience.apprentice.role': 'Jovem Aprendiz',
    'experience.apprentice.period': 'Fevereiro de 2023 – Maio de 2024',
    'experience.apprentice.description':
      'Apoio às rotinas de TI e suporte interno, manutenção de equipamentos, auxílio aos colaboradores e organização da infraestrutura tecnológica.',
    'education.degree.period': '2024 – Atualmente',
    'education.technical.period': '2019 – 2023',
    'education.degree.course': 'Curso Superior em Sistemas e Mídias Digitais',
    'education.technical.course': 'Curso Técnico em Informática',
    'event.apple.description': 'Comunidade para desenvolvedores de plataformas Apple',
    'certificate.database': 'Banco de Dados',
    'certificate.networks': 'Redes',
    'certificate.ai': 'IA',
    'certificate.support': 'Suporte e infraestrutura',
    'tech.html.intro':
      'Projetos que mostram como estruturo páginas com HTML semântico e construo layouts responsivos com CSS, sem frameworks.',
    'tech.html.skill.semantic': 'HTML semântico',
    'tech.html.skill.flex': 'Flexbox',
    'tech.html.skill.media': 'Media queries',
    'tech.html.skill.responsive': 'Layout responsivo',
    'tech.html.project.summary':
      'Cartão de perfil que se adapta do celular ao desktop, à procura de experiência profissional.',
    'tech.html.highlight.flex': 'Alinhamento e distribuição de elementos com Flexbox',
    'tech.html.highlight.media': 'Adaptação do layout a diferentes telas com media queries',
    'tech.html.highlight.semantic': 'Organização semântica do conteúdo',
  },
  'en-US': {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.technologies': 'Technologies',
    'nav.main': 'Main navigation',
    'theme.light': 'Enable light mode',
    'theme.dark': 'Enable dark mode',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'hero.title': 'Hello, I am Yuri Cardoso',
    'hero.description':
      'Full-stack developer focused on back-end development with TypeScript and Node.js, based in Fortaleza, CE. Here you can find my main projects and studies in each technology.',
    'hero.projects': 'View projects',
    'home.about': 'About Me',
    'home.summary': 'In summary',
    'home.summaryOne':
      'I am Yuri Cardoso, a Systems and Digital Media student at the Federal University of Ceará. I started in the field through a technical course in Computer Science at the Federal Institute of Ceará and have been developing academic and personal projects ever since.',
    'home.summaryTwo':
      'My current focus is full-stack web development with TypeScript, especially back-end development and databases. I work with HTML, CSS, TypeScript, React, Node.js, Python, and SQL.',
    'home.readMore': 'Read more',
    'home.email': 'Contact me by email',
    'home.linkedin': 'LinkedIn',
    'projects.description':
      'Projects I have worked on, from interface design to back-end development. Each one includes a description, technologies, and a repository link.',
    'projects.backend': 'Back-end highlight',
    'projects.repository': 'View repository',
    'projects.github': 'View on GitHub',
    'projects.pending': 'Pending',
    'projects.comingSoon': 'Coming soon',
    'technologies.description':
      'Technologies I use for web development, from front-end to databases. Select one to see the projects built with it.',
    'technologies.comingSoon': 'Coming soon · studying',
    'technologies.projectCount': 'project(s)',
    'about.title': 'More about Me',
    'about.profile': 'Profile & Current Role',
    'about.profileText':
      'As a Chatbot Curation Assistant, I perform essential work to optimize and evolve Virtual Assistants, ensuring an efficient service experience aligned with client needs.',
    'about.languages': 'Languages',
    'about.contact': 'Contact',
    'about.location': 'Location',
    'about.experiences': 'Professional Experience',
    'about.education': 'Education',
    'about.courses': 'Courses, Certifications and Events',
    'about.certifications': 'Courses and Certifications',
    'about.events': 'Events',
    'about.back': 'Back to portfolio',
    'resume.download': 'Download resume (PDF)',
    'tech.whatPracticed': 'What I practiced',
    'tech.inProgressTitle': 'Studies in progress',
    'tech.inProgressText':
      'I am still organizing projects with this technology. In the meantime, you can follow my studies on GitHub.',
    'tech.repositoryPlaceholder': 'TODO: add the specific repository link',
    'tech.ts.repositoryPlaceholder':
      'TODO: add the specific TypeScript and JavaScript repository link',
    'tech.previous': '← Previous',
    'tech.other': 'View other technologies',
    'tech.next': 'Next →',
    'tech.highlights': 'Highlights',
    'footer.rights': 'All Rights Reserved',
    'social.email': 'Email',
    'language.selector': 'Select language',
    'language.pt': 'PT-BR',
    'language.en': 'EN-US',
    'status.completed': 'Completed',
    'status.inProgress': 'In progress',
    'alt.profile': 'Photo of Yuri Cardoso',
    'alt.stock': 'Stock Management System screen',
    'alt.mandacaru': 'Mandacaru Games screen',
    'alt.technology': 'Technology icon',
    'alt.project': 'Project image',
    'period.present': 'Present',
    'period.may': 'May',
    'period.june': 'June',
    'period.february': 'February',
    'level.advanced': 'Advanced',
    'level.basic': 'Basic',
    'language.english': 'English',
    'language.spanish': 'Spanish',
    'language.french': 'French',
    'project.stock.title': 'Stock Management System',
    'project.stock.description':
      'An inventory management application focused on an organized back-end workflow and data persistence.',
    'project.mandacaru.title': 'Mandacaru Games',
    'project.mandacaru.description': 'Interface project for digital games.',
    'experience.assistant.role': 'Chatbot Curation Assistant',
    'experience.assistant.period': 'May 2025 – Present',
    'experience.assistant.description':
      'Work focused on dialogue curation, conversational flow adjustments, performance metrics analysis, and collaboration with teams to improve the user experience.',
    'experience.helpdesk.role': 'IT User Support Technician (Helpdesk)',
    'experience.helpdesk.period': 'June 2024 – May 2025',
    'experience.helpdesk.description':
      'Technical user support, hardware and software incident diagnosis and resolution, ticket follow-up, and application of good service practices.',
    'experience.apprentice.role': 'Apprentice',
    'experience.apprentice.period': 'February 2023 – May 2024',
    'experience.apprentice.description':
      'Support for IT routines and internal users, equipment maintenance, employee assistance, and technology infrastructure organization.',
    'education.degree.period': '2024 – Present',
    'education.technical.period': '2019 – 2023',
    'education.degree.course': 'Higher Education in Systems and Digital Media',
    'education.technical.course': 'Technical Course in Computer Science',
    'event.apple.description': 'Community for Apple platform developers',
    'certificate.database': 'Databases',
    'certificate.networks': 'Networking',
    'certificate.ai': 'AI',
    'certificate.support': 'Support and infrastructure',
    'tech.html.intro':
      'Projects that show how I structure semantic HTML pages and build responsive CSS layouts without frameworks.',
    'tech.html.skill.semantic': 'Semantic HTML',
    'tech.html.skill.flex': 'Flexbox',
    'tech.html.skill.media': 'Media queries',
    'tech.html.skill.responsive': 'Responsive layout',
    'tech.html.project.summary':
      'A profile card that adapts from mobile to desktop, created while seeking professional experience.',
    'tech.html.highlight.flex': 'Element alignment and distribution with Flexbox',
    'tech.html.highlight.media': 'Layout adaptation to different screen sizes with media queries',
    'tech.html.highlight.semantic': 'Semantic content organization',
  },
} as const;

type Translator = (key: TranslationKey) => string;

export function getTranslations(language: Language): Record<TranslationKey, string> {
  return translations[language];
}

export function isLanguage(value: string | null): value is Language {
  return value === 'pt-BR' || value === 'en-US';
}

export function createTranslator(language: Language): Translator {
  const dictionary = getTranslations(language);
  return (key) => dictionary[key];
}

export function assertTranslationParity(): void {
  const portugueseKeys = Object.keys(translations['pt-BR']).sort();
  const englishKeys = Object.keys(translations['en-US']).sort();
  if (portugueseKeys.join('|') !== englishKeys.join('|')) {
    throw new Error('Os dicionários de idioma precisam ter as mesmas chaves.');
  }
}

assertTranslationParity();

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translator;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageContext.Provider.');
  }
  return context;
}

export function LanguageProvider({
  language,
  setLanguage,
  children,
}: Omit<LanguageContextValue, 't'> & { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: createTranslator(language) }}>
      {children}
    </LanguageContext.Provider>
  );
}
