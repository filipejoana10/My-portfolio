document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        pt: {
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',
            'experience.title': 'Experiência Profissional',
            'exp1.title': 'Assistente Virtual',
            'exp2.title': 'Representante de Vendas Call Center',
            'exp3.title': 'Suporte ao Cliente e Suporte de Vendas',
            'education.title': 'Educação',
            'education.course': 'Técnico em Informática',
            'education.period': '2024 - Presente',

            // CATEGORIAS DA TUA LISTA
            'skills.customer': 'Suporte ao Cliente',
            'skills.sales': 'Vendas e CRM',
            'skills.remote': 'Operações Remotas',

            // ITENS DA TUA LISTA (TRADUZIDOS)
            'skill.success': 'Sucesso do Cliente',
            'skill.retention': 'Retenção de Clientes',
            'skill.resolution': 'Resolução de Problemas',
            'skill.multichannel': 'Comunicação Multicanal',
            'skill.phone': 'Suporte Telefónico',
            'skill.email': 'Suporte por E-mail',
            'skill.chat': 'Suporte por Chat',
            'skill.calls': 'Chamadas Inbound/Outbound',
            'skill.crm_mng': 'Gestão de CRM',
            'skill.searches': 'Pesquisas',
            'skill.complaint': 'Resolução de Reclamações',
            'skill.satisfaction': 'Satisfação do Cliente',
            'skill.lead_gen': 'Geração de Leads',
            'skill.lead_follow': 'Acompanhamento de Leads',
            'skill.conversion': 'Conversão de Vendas',
            'skill.kpi': 'Acompanhamento de KPIs',
            'skill.performance': 'Gestão de Performance',
            'skill.sales_sup': 'Apoio a Vendas',
            'skill.order': 'Processamento de Encomendas',
            'skill.postsales': 'Acompanhamento Pós-venda',
            'skill.consultative': 'Vendas Consultivas',
            'skill.remote_work': 'Trabalho Remoto',
            'skill.admin': 'Suporte Administrativo',
            'skill.virtual': 'Assistência Virtual',
            'skill.tools': 'Ferramentas Digitais',
            'skill.wfh': 'Configuração Home Office',
            'skill.time': 'Gestão de Tempo',
            'skill.task': 'Coordenação de Tarefas',
            'skill.workflow': 'Gestão de Fluxo de Trabalho',
            'skill.deadline': 'Cumprimento de Prazos',
            'skill.research': 'Pesquisa Estratégica',

            'tools.title': 'Ferramentas que Domino',
            'languages.title': 'Idiomas',
            'lang.pt': 'Português',
            'lang.lingala': 'Lingala',
            'lang.french': 'Francês',
            'lang.english': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico',
            'contact.title': 'Contacto',
            'contact.availability': 'Seg-Sex (9h-18h) | Sáb (9h-12h) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados'
        },
        en: {
            // ... (O inglês mantém os termos técnicos que enviaste)
            'skills.customer': 'Customer Support',
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
            'skill.lead_gen': 'Lead Generation',
            'skill.lead_follow': 'Lead Follow-up',
            'skill.conversion': 'Sales Conversion',
            'skill.kpi': 'KPI Tracking',
            'skill.performance': 'Performance Tracking',
            'skill.sales_sup': 'Sales Support',
            'skill.order': 'Order Processing',
            'skill.postsales': 'Post-sales Follow-up',
            'skill.consultative': 'Consultative Sales',
            'skill.remote_work': 'Remote Work',
            'skill.admin': 'Administrative Support',
            'skill.virtual': 'Virtual Assistance',
            'skill.tools': 'Digital Tools',
            'skill.wfh': 'WFH Setup',
            'skill.time': 'Time Management',
            'skill.task': 'Task Coordination',
            'skill.workflow': 'Workflow Management',
            'skill.deadline': 'Deadline Compliance',
            'skill.research': 'Strategic Research'
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        localStorage.setItem('language', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(localStorage.getItem('language') || 'pt');

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
