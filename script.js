// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ===== TRADUÇÕES =====
    const translations = {
        pt: {
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes. Forte experiência em suporte multicanal (telefone, e-mail e chat), conversão de vendas e retenção de clientes. Organizado, focado em resultados e experiente em ferramentas digitais para operações remotas.',
            'profile.text2': 'Totalmente equipado para trabalho remoto com conexão de internet estável, computador pessoal e configuração profissional de home office.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',
            'experience.title': 'Experiência Profissional',
            'exp1.title': 'Assistente Virtual',
            'exp1.period': '02/2025 – 01/2026 | Luanda, Angola',
            'exp1.item1': 'Gestão de comunicação com clientes e fornecedores em ambiente remoto',
            'exp1.item2': 'Organização e manutenção de dados estruturados usando Google Workspace',
            'exp1.item3': 'Coordenação de fluxo de trabalho e acompanhamento de tarefas com Trello',
            'exp1.item4': 'Pesquisa e organização de informações estratégicas',
            'exp1.item5': 'Suporte administrativo remoto para otimização de operações',
            'exp1.item6': 'Coordenação de horários, reservas e comunicação digital.',
            'exp1.item7': 'Apoio ao processo de vendas: criação de anúncios (OLX, Vinted)',
            'exp1.item8': 'Gestão de calendário e agendamento de clientes',
            'exp2.title': 'Representante de Vendas Call Center',
            'exp2.period': '05/2023 – 03/2024 | Luanda, Angola',
            'exp2.item1': 'Atendimento de chamadas inbound e outbound',
            'exp2.item2': 'Apresentações consultivas de vendas',
            'exp2.item3': 'Identificação de necessidades e soluções personalizadas',
            'exp2.item4': 'Gestão de pedidos e acompanhamento pós-venda',
            'exp2.item5': 'Foco em satisfação e retenção de clientes',
            'exp2.item6': 'Vendas consultivas de suplementos nutricionais, focando nas necessidades do cliente',
            'exp2.item7': 'Elaboração e envio de relatórios de atividades através de ferramentas digitais Telegram',
            'exp3.title': 'Suporte ao Cliente e Suporte de Vendas',
            'exp3.period': '03/2022 – 02/2023 | Luanda, Angola',
            'exp3.item1': 'Suporte ao cliente via telefone e e-mail',
            'exp3.item2': 'Resolução eficiente de dúvidas de clientes',
            'exp3.item3': 'Suporte a operações de vendas e processos administrativos',
            'exp3.item4': 'Comunicação e colaboração com a equipa através de plataformas internas (Workplace by Facebook)',
            'exp3.item5': 'Suporte em tarefas administrativas e organização de processos internos',
            'skills.title': 'Competências',
            'skills.customer': 'Suporte ao Cliente',
            'skills.sales': 'Vendas e CRM',
            'skills.remote': 'Operações Remotas',
            'skills.it': 'TI e Técnico',
            'skills.tools': 'Ferramentas Digitais',
            'skills.languages': 'Idiomas',
            'tools.title': 'Ferramentas',
            'tools.communication': 'Comunicação',
            'tools.crm': 'CRM',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',
            'tools.scheduling': 'Agendamento',
            'tools.project': 'Gestão de Projetos',
            'education.title': 'Formação',
            'education.course': 'Curso Técnico em Informática',
            'education.period': '2024 – Presente',
            'education.description': 'Atualmente cursando um programa técnico em Informática, desenvolvendo habilidades em tecnologia da informação, ferramentas digitais, sistemas de computadores e aplicações de software administrativo. Focado em conhecimento prático de TI para apoiar ambientes de trabalho remoto e operações empresariais.',
            'certifications.title': 'Certificações',
            'cert.security': 'Segurança da Informação',
            'cert.inprogress': 'Em andamento',
            'languages.title': 'Idiomas',
            'lang.pt': 'Português',
            'lang.native': 'Nativo',
            'lang.lingala': 'Lingala',
            'lang.fluent': 'Fluente',
            'lang.english': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico',
            'lang.basicImproving': 'Básico',
            'lang.improving': 'em aperfeiçoamento',
            'contact.title': 'Contato',
            'contact.info': 'Informações',
            'contact.availability.title': 'Disponibilidade',
            'contact.availability': 'Seg-Sex (9h-18h) | Sáb (9h-12h) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados',
            'footer.credit': 'Disponível para oportunidades remotas',
            'skill.customer_support': 'Suporte ao Cliente',
            'skill.customer_success': 'Sucesso do Cliente',
            'skill.customer_retention': 'Retenção de Clientes',
            'skill.problem_resolution': 'Resolução de Problemas',
            'skill.multichannel_communication': 'Comunicação Multicanal',
            'skill.phone_support': 'Suporte Telefônico',
            'skill.email_support': 'Suporte por Email',
            'skill.chat_support': 'Suporte por Chat',
            'skill.inbound_outbound_calls': 'Chamadas Inbound/Outbound',
            'skill.crm_management': 'Gestão de CRM',
            'skill.searches': 'Pesquisas',
            'skill.complaint_resolution': 'Resolução de Reclamações',
            'skill.customer_satisfaction': 'Satisfação do Cliente',
            'skill.pipedrive': 'Pipedrive',
            'skill.hubspot': 'HubSpot',
            'skill.lead_generation': 'Geração de Leads',
            'skill.lead_follow_up': 'Acompanhamento de Leads',
            'skill.sales_conversion': 'Conversão de Vendas',
            'skill.kpi_tracking': 'Acompanhamento de KPI',
            'skill.performance_tracking': 'Acompanhamento de Performance',
            'skill.sales_support': 'Suporte de Vendas',
            'skill.order_processing': 'Processamento de Pedidos',
            'skill.post_sales_follow_up': 'Acompanhamento Pós-Venda',
            'skill.consultative_sales': 'Vendas Consultivas',
            'skill.remote_work': 'Trabalho Remoto',
            'skill.administrative_support': 'Suporte Administrativo',
            'skill.virtual_assistance': 'Assistência Virtual',
            'skill.digital_tools': 'Ferramentas Digitais',
            'skill.wfh_setup': 'Configuração WFH',
            'skill.time_management': 'Gestão de Tempo',
            'skill.task_coordination': 'Coordenação de Tarefas',
            'skill.workflow_management': 'Gestão de Fluxo de Trabalho',
            'skill.deadline_compliance': 'Cumprimento de Prazos',
            'skill.strategic_research': 'Pesquisa Estratégica'
        },
        en: {
            'title': 'Customer Support | Call Center | CRM | Virtual Assistant',
            'profile.title': 'Profile',
            'profile.text1': 'Customer Support and Call Center professional with experience in remote environments, CRM management, lead follow-up, and customer relationship development. Strong background in multichannel support (phone, email, and chat), sales conversion, and customer retention. Organized, results-driven, and experienced in digital tools for remote operations.',
            'profile.text2': 'Fully equipped for remote work with stable internet connection, personal computer, and professional home office setup.',
            'profile.available': 'Available for remote work • Immediate start',
            'experience.title': 'Professional Experience',
            'exp1.title': 'Virtual Assistant',
            'exp1.period': '02/2025 – 01/2026 | Luanda, Angola',
            'exp1.item1': 'Managed communication with clients and suppliers in a remote environment',
            'exp1.item2': 'Organized and maintained structured business data using Google Workspace',
            'exp1.item3': 'Coordinated workflow and tracked tasks using Trello',
            'exp1.item4': 'Conducted research and organized strategic information',
            'exp1.item5': 'Provided remote administrative support',
            'exp1.item6': 'Coordination of schedules, reservations and digital communication.',
            'exp1.item7': 'Sales process support: creation of ads (OLX, Vinted)',
            'exp1.item8': 'Calendar management and customer scheduling',
            'exp2.title': 'Call Center Sales Representative',
            'exp2.period': '05/2023 – 03/2024 | Luanda, Angola',
            'exp2.item1': 'Handled inbound and outbound calls',
            'exp2.item2': 'Delivered consultative sales presentations',
            'exp2.item3': 'Identified customer needs and provided tailored solutions',
            'exp2.item4': 'Managed order processing and post-sales follow-up',
            'exp2.item5': 'Focused on customer satisfaction and retention',
            'exp2.item6': 'Consultative sales of nutritional supplements, focusing on customer needs',
            'exp2.item7': 'Preparation and sending of activity reports through digital tools Telegram',
            'exp3.title': 'Customer Support & Sales Support',
            'exp3.period': '03/2022 – 02/2023 | Luanda, Angola',
            'exp3.item1': 'Provided customer support via phone and email',
            'exp3.item2': 'Resolved customer inquiries efficiently',
            'exp3.item3': 'Supported sales operations and administrative processes',
            'exp3.item4': 'Communication and collaboration with the team through internal platforms (Workplace by Facebook)',
            'exp3.item5': 'Support in administrative tasks and organization of internal processes',
            'skills.title': 'Skills',
            'skills.customer': 'Customer Support',
            'skills.sales': 'Sales & CRM',
            'skills.remote': 'Remote Operations',
            'skills.it': 'IT & Technical',
            'skills.tools': 'Digital Tools',
            'skills.languages': 'Languages',
            'tools.title': 'Tools',
            'tools.communication': 'Communication',
            'tools.crm': 'CRM',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',
            'tools.scheduling': 'Scheduling',
            'tools.project': 'Project Management',
            'education.title': 'Education',
            'education.course': 'Technical Course in Informatics',
            'education.period': '2024 – Present',
            'education.description': 'Currently pursuing a technical program in Informatics, developing skills in information technology, digital tools, computer systems, and administrative software applications. Focused on practical IT knowledge to support remote work environments and business operations.',
            'certifications.title': 'Certifications',
            'cert.security': 'Information Security',
            'cert.inprogress': 'In progress',
            'languages.title': 'Languages',
            'lang.pt': 'Portuguese',
            'lang.native': 'Native',
            'lang.lingala': 'Lingala',
            'lang.fluent': 'Fluent',
            'lang.english': 'English',
            'lang.native': 'Native',
            'lang.basic': 'Basic',
            'lang.basicImproving': 'Basic',
            'lang.improving': 'improving',
            'contact.title': 'Contact',
            'contact.info': 'Contact Info',
            'contact.availability.title': 'Availability',
            'contact.availability': 'Mon-Fri (9am-6pm) | Sat (9am-12pm) - Luanda GMT+1',
            'footer.rights': 'All rights reserved',
            'footer.credit': 'Available for remote opportunities',
            'skill.customer_support': 'Customer Support',
            'skill.customer_success': 'Customer Success',
            'skill.customer_retention': 'Customer Retention',
            'skill.problem_resolution': 'Problem Resolution',
            'skill.multichannel_communication': 'Multichannel Communication',
            'skill.phone_support': 'Phone Support',
            'skill.email_support': 'Email Support',
            'skill.chat_support': 'Chat Support',
            'skill.inbound_outbound_calls': 'Inbound/Outbound Calls',
            'skill.crm_management': 'CRM Management',
            'skill.searches': 'Searches',
            'skill.complaint_resolution': 'Complaint resolution',
            'skill.customer_satisfaction': 'Customer Satisfaction',
            'skill.pipedrive': 'Pipedrive',
            'skill.hubspot': 'HubSpot',
            'skill.lead_generation': 'Lead Generation',
            'skill.lead_follow_up': 'Lead Follow-up',
            'skill.sales_conversion': 'Sales Conversion',
            'skill.kpi_tracking': 'KPI Tracking',
            'skill.performance_tracking': 'Performance Tracking',
            'skill.sales_support': 'Sales Support',
            'skill.order_processing': 'Order Processing',
            'skill.post_sales_follow_up': 'Post-sales Follow-up',
            'skill.consultative_sales': 'Consultative Sales',
            'skill.remote_work': 'Remote Work',
            'skill.administrative_support': 'Administrative Support',
            'skill.virtual_assistance': 'Virtual Assistance',
            'skill.digital_tools': 'Digital Tools',
            'skill.wfh_setup': 'WFH Setup',
            'skill.time_management': 'Time Management',
            'skill.task_coordination': 'Task Coordination',
            'skill.workflow_management': 'Workflow Management',
            'skill.deadline_compliance': 'Deadline Compliance',
            'skill.strategic_research': 'Strategic Research'
        }
    };

    // ===== MODO ESCURO/CLARO =====
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Verifica preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Salva preferência
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // ===== OBFUSCAÇÃO DE EMAIL E TELEFONE =====
    function setupObfuscatedContacts() {
        const email = String.fromCharCode(...[102,105,108,105,112,101,106,97,110,110,121]) + '@' + String.fromCharCode(...[104,111,116,109,97,105,108,46,99,111,109]);
        const phone = String.fromCharCode(...[43,50,52,52,57,52,54,55,56,55,49,49,55]);

        const emailLinks = document.querySelectorAll('[data-obfuscate="email"]');
        emailLinks.forEach(link => {
            link.href = 'mailto:' + email;
            link.setAttribute('aria-label', 'Email');
            if (!link.querySelector('i')) {
                link.textContent = email;
            }
        });

        const phoneLinks = document.querySelectorAll('[data-obfuscate="phone"]');
        phoneLinks.forEach(link => {
            link.href = 'tel:' + phone;
            link.setAttribute('aria-label', 'Phone');
            if (!link.querySelector('i')) {
                link.textContent = '+244 946 787 117';
            }
        });
    }
    setupObfuscatedContacts();

    // ===== TRADUÇÃO =====
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
    // Carrega idioma salvo
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);
    
    // Atualiza botões ativos
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    
    // Event listeners para botões de idioma
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('language', lang);
            
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function setLanguage(lang) {
        elementsToTranslate.forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        // Update page title
        if (translations[lang] && translations[lang]['title']) {
            document.title = 'Filipe Joana | ' + translations[lang]['title'];
        }
    }

    // ===== BOTÃO VOLTAR AO TOPO =====
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== ANIMAÇÃO DE SCROLL =====
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(section);
    });

    // ===== TRATAMENTO DE ERRO DE IMAGENS =====
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Imagem não encontrada: ${this.src}`);
            
            // Se for uma imagem de ferramenta, esconde
            if (this.closest('.tool-item')) {
                this.style.display = 'none';
            }
            
            // Se for a imagem de perfil, usa placeholder
            if (this.closest('.profile-img-wrapper')) {
                this.src = 'https://via.placeholder.com/200x200?text=Filipe+Joana';
            }
        });
        
        // Adiciona loading lazy para melhor performance
        img.loading = 'lazy';
    });

    // ===== WHATSAPP BUTTON TRACKING (opcional) =====
    const whatsappBtn = document.querySelector('.whatsapp-btn a');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            console.log('WhatsApp button clicked');
            // Aqui podes adicionar analytics se quiseres
        });
    }

    // ===== LINKS EXTERNOS =====
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`External link clicked: ${this.href}`);
        });
    });

    // ===== BEM-VINDO AO CONSOLE =====
    console.log('🚀 Site de Filipe Joana carregado!');
    console.log('📧 Contato disponível no rodapé');
    console.log('💼 Disponível para oportunidades remotas');
});
