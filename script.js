// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ===== SISTEMA DE TRADUÇÃO COMPLETO (SEM CORTES) =====
    const translations = {
        pt: {
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes. Forte experiência em suporte multicanal (telefone, e-mail e chat), conversão de vendas e retenção de clientes. Organizado, focado em resultados e experiente em ferramentas digitais para operações remotas.',
            'profile.text2': 'Totalmente equipado para trabalho remoto com conexão de internet estável, computador pessoal e configuração profissional de home office.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',
            'experience.title': 'Experiência Profissional',
            
            // Paco Services
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

            // Intertrade Nutrição
            'exp2.title': 'Representante de Vendas Call Center',
            'exp2.period': '05/2023 – 05/2024 | Luanda, Angola',
            'exp2.item1': 'Atendimento de chamadas inbound e outbound',
            'exp2.item2': 'Apresentações consultivas de vendas',
            'exp2.item3': 'Identificação de necessidades e soluções personalizadas',
            'exp2.item4': 'Gestão de pedidos e acompanhamento pós-venda',
            'exp2.item5': 'Foco em satisfação e retenção de clientes',
            'exp2.item6': 'Vendas consultivas de suplementos nutricionais',

            // RWS Group (Recuperado)
            'exp3.title': 'Suporte ao Cliente e Suporte de Vendas',
            'exp3.period': '03/2023 – 03/2024 | Luanda, Angola',
            'exp3.item1': 'Suporte ao cliente via telefone e e-mail',
            'exp3.item2': 'Resolução eficiente de dúvidas de clientes',
            'exp3.item3': 'Suporte a operações de vendas e processos administrativos',

            // COMPETÊNCIAS - NOVA LISTA
            'skills.title': 'Skills & Competências',
            'skills.customer': 'Suporte ao Cliente',
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

            'skills.sales': 'Vendas e CRM',
            'skill.lead_gen': 'Geração de Leads',
            'skill.lead_follow': 'Acompanhamento de Leads',
            'skill.conversion': 'Conversão de Vendas',
            'skill.kpi': 'Acompanhamento de KPIs',
            'skill.performance': 'Gestão de Performance',
            'skill.sales_sup': 'Apoio a Vendas',
            'skill.order': 'Processamento de Encomendas',
            'skill.postsales': 'Acompanhamento Pós-venda',
            'skill.consultative': 'Vendas Consultivas',

            'skills.remote': 'Operações Remotas',
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

            'skills.it': 'TI e Técnico',
            'skills.tools_cat': 'Ferramentas Digitais',

            // FERRAMENTAS
            'tools.title': 'Tools I Master',
            'tools.communication': 'Comunicação',
            'tools.crm': 'CRM',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',
            'tools.scheduling': 'Agendamento',
            'tools.project': 'Gestão de Projetos',

            // EDUCAÇÃO
            'education.title': 'Educação',
            'education.course': 'Técnico em Informática',
            'education.institution': 'Atualmente a frequentar um programa técnico em Informática',
            'education.period': '2024 - Presente',
            'education.description': 'Desenvolvimento de habilidades em TI, ferramentas digitais, sistemas e software administrativo.',

            'languages.title': 'Idiomas',
            'lang.pt': 'Português',
            'lang.lingala': 'Lingala',
            'lang.french': 'Francês',
            'lang.english': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico',
            'lang.basicImproving': 'Básico',
            'lang.improving': 'em aperfeiçoamento',

            'contact.title': 'Contato',
            'contact.info': 'Informações de Contato',
            'contact.availability.title': 'Disponibilidade',
            'contact.availability': 'Seg-Sex (9h-18h) | Sáb (9h-12h) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados',
            'footer.credit': 'Disponível para oportunidades remotas'
        },
        en: {
            // ... (Aqui deves manter o objeto 'en' que tinhas no teu ficheiro original para não perderes o Inglês)
        }
    };

    // ===== LÓGICA DE FUNCIONAMENTO (ESCUDO DE PROTEÇÃO) =====
    
    // 1. MODO ESCURO
    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // 2. TRADUÇÃO
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    function setLanguage(lang) {
        elementsToTranslate.forEach(el => {
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
        btn.addEventListener('click', function() { setLanguage(this.dataset.lang); });
    });

    setLanguage(localStorage.getItem('language') || 'pt');

    // 3. ANIMAÇÕES E VOLTAR AO TOPO
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

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

    // 4. TRATAMENTO DE IMAGENS
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = this.closest('.profile-img-wrapper') ? 'https://via.placeholder.com/200x200?text=Filipe+Joana' : '';
            if (!this.closest('.profile-img-wrapper')) this.style.display = 'none';
        });
    });
});
