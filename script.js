document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        pt: {
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes. Forte experiência em suporte multicanal (telefone, e-mail e chat), conversão de vendas e retenção de clientes.',
            'profile.text2': 'Totalmente equipado para trabalho remoto com conexão de internet estável, computador pessoal e configuração profissional de home office.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',

            'experience.title': 'Experiência Profissional',
            // Paco Services - Exatamente como no teu HTML
            'exp1.title': 'Assistente Virtual',
            'exp1.period': '02/2025 – 01/2026 | Luanda, Angola',
            'exp1.item1': 'Gestão de comunicação com clientes e fornecedores em ambiente remoto',
            'exp1.item2': 'Organização e manutenção de dados estruturados usando Google Workspace',
            'exp1.item3': 'Coordenação de fluxo de trabalho e acompanhamento de tarefas com Trello',
            'exp1.item4': 'Pesquisa e organização de informações estratégicas',
            'exp1.item5': 'Suporte administrativo remoto para otimização de operações',
            'exp1.item6': 'Coordenação de agenda e comunicação digital',
            'exp1.item7': 'Apoio em vendas: criação de anúncios (OLX, Vinted)',
            'exp1.item8': 'Gestão de calendário e agendamento de clientes',

            // Intertrade
            'exp2.title': 'Representante de Vendas Call Center',
            'exp2.period': '05/2023 – 05/2024 | Luanda, Angola',
            'exp2.item1': 'Atendimento de chamadas inbound e outbound',
            'exp2.item2': 'Apresentações consultivas de vendas',
            'exp2.item3': 'Identificação de necessidades e soluções personalizadas',
            'exp2.item4': 'Gestão de pedidos e acompanhamento pós-venda',
            'exp2.item5': 'Foco em satisfação e retenção de clientes',
            'exp2.item6': 'Vendas consultivas de suplementos nutricionais',

            // RWS
            'exp3.title': 'Suporte ao Cliente e Suporte de Vendas',
            'exp3.period': '03/2023 – 03/2024 | Luanda, Angola',
            'exp3.item1': 'Suporte ao cliente via telefone e e-mail',
            'exp3.item2': 'Resolução eficiente de dúvidas de clientes',
            'exp3.item3': 'Suporte a operações de vendas e processos administrativos',

            'education.title': 'Educação',
            'education.course': 'Técnico em Informática',
            'education.institution': 'Atualmente a frequentar curso técnico de Informática',
            'education.period': 'Presente',
            'education.description': 'Desenvolvimento de competências em TI, ferramentas digitais e sistemas.',

            'tools.title': 'Ferramentas',
            'tools.communication': 'Comunicação',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',

            'languages.title': 'Idiomas',
            'lang.pt': 'Português',
            'lang.lingala': 'Lingala',
            'lang.french': 'Francês',
            'lang.english': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico',
            'lang.basicImproving': 'Básico (em aperfeiçoamento)',

            'contact.title': 'Contacto',
            'contact.availability.title': 'Disponibilidade',
            'contact.availability': 'Seg-Sex (9h-18h) | Sáb (9h-12h) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados',
            'footer.credit': 'Disponível para oportunidades remotas'
        },
        en: {
            'title': 'Customer Support | Call Center | CRM | Virtual Assistant',
            'profile.title': 'Profile',
            'profile.text1': 'Customer Support and Call Center professional with experience in remote environments, CRM management, lead follow-up, and customer relationship development...',
            'profile.available': 'Available for remote work • Immediate start',
            'experience.title': 'Professional Experience',
            'exp1.title': 'Virtual Assistant',
            'exp1.period': '02/2025 – 01/2026 | Luanda, Angola',
            'exp1.item1': 'Managed communication with clients and suppliers in a remote environment',
            'exp1.item2': 'Organized and maintained structured business data using Google Workspace',
            'exp1.item3': 'Coordinated workflow and tracked tasks using Trello',
            'exp1.item4': 'Research and organization of strategic information',
            'exp1.item5': 'Provided remote administrative support',
            'exp1.item6': 'Schedule coordination and digital communication',
            'exp1.item7': 'Sales process support: ad creation (OLX, Vinted)',
            'exp1.item8': 'Calendar management and client scheduling',
            // ... (Restantes campos em Inglês)
        }
    };

    // --- MODO ESCURO ---
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        sunIcon.style.display = isDark ? 'inline-block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'inline-block';
    });

    // --- TRADUÇÃO ---
    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(localStorage.getItem('language') || 'pt');

    // --- VOLTAR AO TOPO ---
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
