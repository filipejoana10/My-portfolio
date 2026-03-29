document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        pt: {
            // HEADER & PERFIL
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes. Forte experiência em suporte multicanal (telefone, e-mail e chat), conversão de vendas e retenção de clientes. Organizado, focado em resultados e experiente em ferramentas digitais para operações remotas.',
            'profile.text2': 'Totalmente equipado para trabalho remoto com conexão de internet estável, computador pessoal e configuração profissional de home office.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',

            // EXPERIÊNCIA: PACO SERVICES
            'experience.title': 'Experiência Profissional',
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

            // EXPERIÊNCIA: INTERTRADE
            'exp2.title': 'Call Center Sales Representative',
            'exp2.period': '05/2023 – 05/2024 | Luanda, Angola',
            'exp2.item1': 'Handled inbound and outbound calls',
            'exp2.item2': 'Delivered consultative sales presentations',
            'exp2.item3': 'Identified customer needs and provided tailored solutions',
            'exp2.item4': 'Managed order processing and follow-up',
            'exp2.item5': 'Focused on customer satisfaction and retention',
            'exp2.item6': 'Consultative sales of nutritional supplements',

            // EXPERIÊNCIA: RWS GROUP
            'exp3.title': 'Customer Support & Sales Support',
            'exp3.period': '03/2023 – 03/2024 | Luanda, Angola',
            'exp3.item1': 'Provided customer support via phone and email',
            'exp3.item2': 'Resolved customer inquiries efficiently',
            'exp3.item3': 'Supported sales operations and administrative processes',

            // EDUCAÇÃO & FORMAÇÃO (IMPP E HUAWEI)
            'education.title': 'Educação',
            'education.course': 'Technical Program in Informatics',
            'education.institution': 'Currently pursuing a technical program in Informatics (IMPP)',
            'education.period': 'Present',
            'education.description': 'Developing skills in information technology, digital tools, and systems.',
            'edu.cert1.title': 'Huawei HCIA-Datacom Training',
            'edu.cert1.description': 'Treino intensivo em redes, roteamento e eNSP (Março 2026).',

            // FERRAMENTAS
            'tools.title': 'Tools I Master',
            'tools.communication': 'Communication',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',

            // IDIOMAS
            'languages.title': 'Languages',
            'lang.pt': 'Português',
            'lang.lingala': 'Lingala',
            'lang.french': 'Francês',
            'lang.english': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico',
            'lang.basicImproving': 'Básico (em aperfeiçoamento)',

            // CONTACTO & FOOTER
            'contact.title': 'Contact',
            'contact.availability.title': 'Availability',
            'contact.availability': 'Mon-Fri (9am-6pm) | Sat (9am-12pm) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados',
            'footer.credit': 'Disponível para oportunidades remotas'
        },
        en: {
            'title': 'Customer Support | Call Center | CRM | Virtual Assistant',
            'profile.title': 'Profile',
            'profile.text1': 'Customer Support and Call Center professional with experience in remote environments...',
            'profile.text2': 'Fully equipped for remote work...',
            'profile.available': 'Available for remote work • Immediate start',
            'experience.title': 'Professional Experience',
            'exp1.title': 'Virtual Assistant',
            'exp1.period': '02/2025 – 01/2026',
            'exp1.item1': 'Managed communication with clients and suppliers in a remote environment',
            'exp2.title': 'Call Center Sales Representative',
            'exp3.title': 'Customer Support & Sales Support',
            'education.title': 'Education',
            'education.course': 'Technical Program in Informatics',
            'languages.title': 'Languages',
            'lang.pt': 'Portuguese',
            'lang.lingala': 'Lingala',
            'lang.french': 'French',
            'lang.english': 'English',
            'contact.title': 'Contact',
            'footer.rights': 'All rights reserved'
        }
    };

    // --- MODO ESCURO ---
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(moonIcon) moonIcon.style.display = 'none';
        if(sunIcon) sunIcon.style.display = 'inline-block';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if(moonIcon) moonIcon.style.display = isDark ? 'none' : 'inline-block';
        if(sunIcon) sunIcon.style.display = isDark ? 'inline-block' : 'none';
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
        if (backToTop) backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
