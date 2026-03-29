document.addEventListener('DOMContentLoaded', function() {
    // ===== TRADUÇÕES COMPLETAS =====
    const translations = {
        pt: {
            // HEADER & PERFIL
            'title': 'Suporte ao Cliente | Call Center | CRM | Assistente Virtual',
            'profile.title': 'Perfil',
            'profile.text1': 'Profissional de Suporte ao Cliente e Call Center com experiência em ambientes remotos, gestão de CRM, acompanhamento de leads e desenvolvimento de relacionamento com clientes. Sólida formação em ferramentas digitais e processos administrativos.',            'profile.text2': 'Totalmente equipado para trabalho remoto com conexão de internet estável, computador pessoal e configuração profissional de home office.',
            'profile.available': 'Disponível para trabalho remoto • Início imediato',

            // EXPERIÊNCIA
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

            'exp2.title': 'Representante de Vendas Call Center',
            'exp2.period': '05/2023 – 05/2024 | Luanda, Angola',
            'exp2.item1': 'Atendimento de chamadas inbound e outbound',
            'exp2.item2': 'Apresentações consultivas de vendas',
            'exp2.item3': 'Identificação de necessidades e soluções personalizadas',
            'exp2.item4': 'Gestão de pedidos e acompanhamento pós-venda',
            'exp2.item5': 'Foco em satisfação e retenção de clientes',
            'exp2.item6': 'Vendas consultivas de suplementos nutricionais',

            'exp3.title': 'Suporte ao Cliente e Suporte de Vendas',
            'exp3.period': '03/2023 – 03/2024 | Luanda, Angola',
            'exp3.item1': 'Suporte ao cliente via telefone e e-mail',
            'exp3.item2': 'Resolução eficiente de dúvidas de clientes',
            'exp3.item3': 'Suporte a operações de vendas e processos administrativos',

            // EDUCAÇÃO
            'education.title': 'Educação',
            'education.course': 'Técnico em Informática',
            'education.institution': 'Atualmente a frequentar curso técnico de Informática',
            'education.period': 'Presente',
            'education.description': 'Desenvolvimento de competências em TI, ferramentas digitais e sistemas.',

            // FERRAMENTAS
            'tools.title': 'Ferramentas que Domino',
            'tools.communication': 'Comunicação',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',

            // IDIOMAS
            'languages.title': 'Idiomas',
            'lang.pt': 'Português',
            'lang.lingala': 'Lingala',
            'lang.french': 'Francês',
            'lang.english': 'Inglês',
            'lang.native': 'Nativo',
            'lang.basic': 'Básico',
            'lang.basicImproving': 'Básico (em aperfeiçoamento)',

            // CONTACTO & FOOTER
            'contact.title': 'Contacto',
            'contact.availability.title': 'Disponibilidade',
            'contact.availability': 'Seg-Sex (9h-18h) | Sáb (9h-12h) - Luanda GMT+1',
            'footer.rights': 'Todos os direitos reservados',
            'footer.credit': 'Disponível para oportunidades remotas'
        },
        en: {
            // HEADER & PERFIL
            'title': 'Customer Support | Call Center | CRM | Virtual Assistant',
            'profile.title': 'Profile',
            'profile.text1': 'Customer Support and Call Center professional with experience in remote environments, CRM management, lead follow-up, and customer relationship development. Strong background in digital tools and administrative processes.',
            'profile.text1': 'Customer Support and Call Center professional with experience in remote environments, CRM management, lead follow-up, and customer relationship development. Strong background in digital tools and administrative processes.',            

            // EXPERIÊNCIA
            'experience.title': 'Professional Experience',
            'exp1.title': 'Virtual Assistant',
            'exp1.period': '02/2025 – 01/2026 | Luanda, Angola',
            'exp1.item1': 'Managed communication with clients and suppliers in a remote environment',
            'exp1.item2': 'Organized and maintained structured business data using Google Workspace',
            'exp1.item3': 'Coordinated workflow and tracked tasks using Trello',
            'exp1.item4': 'Research and organization of strategic information',
            'exp1.item5': 'Provided remote administrative support to optimize operations',
            'exp1.item6': 'Schedule coordination and digital communication',
            'exp1.item7': 'Sales process support: ad creation (OLX, Vinted)',
            'exp1.item8': 'Calendar management and client scheduling',

            'exp2.title': 'Call Center Sales Representative',
            'exp2.period': '05/2023 – 05/2024 | Luanda, Angola',
            'exp2.item1': 'Handled inbound and outbound calls',
            'exp2.item2': 'Delivered consultative sales presentations',
            'exp2.item3': 'Identified customer needs and provided tailored solutions',
            'exp2.item4': 'Managed order processing and follow-up',
            'exp2.item5': 'Focused on customer satisfaction and retention',
            'exp2.item6': 'Consultative sales of nutritional supplements',

            'exp3.title': 'Customer Support & Sales Support',
            'exp3.period': '03/2023 – 03/2024 | Luanda, Angola',
            'exp3.item1': 'Provided customer support via phone and email',
            'exp3.item2': 'Resolved customer inquiries efficiently',
            'exp3.item3': 'Supported sales operations and administrative processes',

            // EDUCAÇÃO
            'education.title': 'Education',
            'education.course': 'Technical Program in Informatics',
            'education.institution': 'Currently pursuing a technical program in Informatics',
            'education.period': 'Present',
            'education.description': 'Developing skills in information technology, digital tools, and systems.',

            // FERRAMENTAS
            'tools.title': 'Tools I Master',
            'tools.communication': 'Communication',
            'tools.google': 'Google Workspace',
            'tools.microsoft': 'Microsoft Office',

            // IDIOMAS
            'languages.title': 'Languages',
            'lang.pt': 'Portuguese',
            'lang.lingala': 'Lingala',
            'lang.french': 'French',
            'lang.english': 'English',
            'lang.native': 'Native',
            'lang.basic': 'Basic',
            'lang.basicImproving': 'Basic (improving)',

            // CONTACTO & FOOTER
            'contact.title': 'Contact',
            'contact.availability.title': 'Availability',
            'contact.availability': 'Mon-Fri (9am-6pm) | Sat (9am-12pm) - Luanda GMT+1',
            'footer.rights': 'All rights reserved',
            'footer.credit': 'Available for remote opportunities'
        }
    };

    // ===== MODO ESCURO / DARK MODE =====
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');

    function updateThemeIcons(isDark) {
        if (isDark) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        } else {
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }
    }

    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcons(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcons(false);
    }

    // Toggle tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcons(isDark);
    });

    // ===== SISTEMA DE TRADUÇÃO / TRANSLATION SYSTEM =====
    function setLanguage(lang) {
        // Atualizar todos os elementos com data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Salvar idioma no localStorage
        localStorage.setItem('language', lang);
        
        // Atualizar estado dos botões de idioma
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Atualizar atributo lang do HTML
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }

    // Event listeners para botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });

    // Carregar idioma salvo ou padrão (português)
    const savedLanguage = localStorage.getItem('language') || 'pt';
    setLanguage(savedLanguage);

    // ===== VOLTAR AO TOPO / BACK TO TOP =====
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.style.display = 'flex';
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.display = 'none';
            backToTop.style.opacity = '0';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== SMOOTH SCROLL PARA LINKS INTERNOS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===== ANIMAÇÃO DE ENTRADA PARA ELEMENTOS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar observador a cards de experiência e outras seções
    document.querySelectorAll('.exp-card, .edu-card, .language-card, .tool-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // ===== VALIDAÇÃO E FEEDBACK (OPCIONAL) =====
    // Se houver um formulário de contacto no futuro
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Adicionar lógica de envio aqui
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }

    console.log('Script carregado com sucesso! / Script loaded successfully!');
});
