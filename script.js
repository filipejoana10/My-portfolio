document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        pt: {
            // Header e Perfil
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes. Forte experiência em suporte multicanal (telefone, e-mail e chat), conversão de vendas e retenção de clientes.',
            'profile.text2': 'Totalmente equipado para trabalho remoto com conexão de internet estável, computador pessoal e configuração profissional de home office.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',

            // Experiências (TODAS AS INFORMAÇÕES DE VOLTA)
            'experience.title': 'Experiência Profissional',
            'exp1.title': 'Assistente Virtual',
            'exp1.period': '02/2025 – 01/2026',
            'exp1.item1': 'Gestão de comunicação com clientes e fornecedores em ambiente remoto',
            'exp1.item2': 'Organização e manutenção de dados estruturados usando Google Workspace',
            'exp1.item3': 'Coordenação de fluxo de trabalho e acompanhamento de tarefas com Trello',
            'exp1.item4': 'Pesquisa e organização de informações estratégicas',
            'exp1.item5': 'Suporte administrativo remoto para otimização de operações',
            'exp1.item6': 'Coordenação de agenda e comunicação digital',
            'exp1.item7': 'Apoio em vendas: criação de anúncios (OLX, Vinted)',
            'exp1.item8': 'Gestão de calendário e agendamento de clientes',

            'exp2.title': 'Operador de Call Center (Vendas)',
            'exp2.item1': 'Gestão de chamadas inbound e outbound',
            'exp2.item2': 'Apresentações de vendas consultivas',
            'exp2.item3': 'Identificação de necessidades e soluções personalizadas',
            'exp2.item4': 'Gestão de encomendas e acompanhamento pós-venda',
            'exp2.item5': 'Foco na satisfação e retenção de clientes',
            'exp2.item6': 'Vendas consultivas de suplementos nutricionais',

            'exp3.title': 'Suporte ao Cliente e Apoio a Vendas',
            'exp3.item1': 'Suporte ao cliente via telefone e e-mail',
            'exp3.item2': 'Resolução eficiente de dúvidas de clientes',
            'exp3.item3': 'Apoio a operações de vendas e processos administrativos',

            // COMPETÊNCIAS (CONECTADAS AOS TEUS IDS)
            'skills.title': 'Skills & Competências',
            'skills.customer': 'Suporte ao Cliente',
            'skill.success': 'Customer Success',
            'skill.retention': 'Customer Retention',
            'skill.resolution': 'Problem Resolution',
            'skill.multichannel': 'Multichannel Communication',
            'skill.phone': 'Phone Support',
            'skill.email': 'Email Support',
            'skill.chat': 'Chat Support',
            'skill.calls': 'Inbound/Outbound Calls',
            'skill.crm_mng': 'CRM Management',
            'skill.searches': 'Searches',
            'skill.complaint': 'Complaint resolution',
            'skill.satisfaction': 'Customer Satisfaction',

            'skills.sales': 'Vendas e CRM',
            'skill.lead_gen': 'Lead Generation',
            'skill.lead_follow': 'Lead Follow-up',
            'skill.conversion': 'Sales Conversion',
            'skill.kpi': 'KPI Tracking',
            'skill.performance': 'Performance Tracking',
            'skill.sales_sup': 'Sales Support',
            'skill.order': 'Order Processing',
            'skill.postsales': 'Post-sales Follow-up',
            'skill.consultative': 'Consultative Sales',

            'skills.remote': 'Operações Remotas',
            'skill.remote_work': 'Remote Work',
            'skill.admin': 'Administrative Support',
            'skill.virtual': 'Virtual Assistance',
            'skill.tools': 'Digital Tools',
            'skill.wfh': 'WFH Setup',
            'skill.time': 'Time Management',
            'skill.task': 'Task Coordination',
            'skill.workflow': 'Workflow Management',
            'skill.deadline': 'Deadline Compliance',
            'skill.research': 'Strategic Research',

            'skills.it': 'TI e Técnico',
            'skills.networking': 'Networking (Routers/Switches)',
            'skills.ensp': 'Huawei eNSP',
            'skills.virtualbox': 'Oracle VirtualBox',
            'skills.linux': 'Linux (Sudo)',

            // Educação e Outros
            'education.title': 'Educação',
            'education.course': 'Técnico em Informática',
            'education.period': '2024 - Presente',
            'languages.title': 'Idiomas',
            'lang.pt': 'Português',
            'lang.en': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico (em aperfeiçoamento)',
            'contact.title': 'Contacto',
            'contact.availability': 'Seg-Sex (9h-18h) | Sáb (9h-12h) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados'
        },
        en: {
            // ... (As traduções em Inglês devem seguir o mesmo padrão acima)
            'skills.title': 'Skills & Competencies',
            'skills.customer': 'Customer Support',
            'skill.success': 'Customer Success',
            // [Repete todos os termos técnicos aqui em inglês]
        }
    };

    // --- LÓGICA DO SITE ---
    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        localStorage.setItem('language', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    }

    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
    setLanguage(localStorage.getItem('language') || 'pt');

    // Botão Voltar ao Topo
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none');
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Animações de Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(section);
    });
});
