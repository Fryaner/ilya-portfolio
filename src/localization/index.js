import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'RU',
  messages: {
    RU: {
      brand_tagline: 'Поток творчества и кода',

      navigation: {
        nav_about: 'Обо мне',
        nav_skills: 'Навыки',
        nav_portfolio: 'Проекты',
        nav_calculator: 'Калькулятор',
        nav_experience: 'Опыт',
        nav_contact: 'Контакты',
      },

      hero: {
        hero_role: 'Frontend-разработчик',
        hero_description:
          'Создаю современные веб-приложения с опытом работы 3 года. Работа со мной — это быстро, качественно и понятно.',
        hero_contact_btn: 'Связаться со мной',
        hero_projects_btn: 'Посмотреть проекты',
      },

      about: {
        about_title: 'Обо мне',
        about_subtitle: 'Frontend-разработчик с 3-летним опытом',
        about_description:
          'Специализируюсь на создании современных веб-приложений, используя передовые технологии и инструменты. Имею опыт работы с различными подходами к разработке — от классического программирования до использования нейросетей и CMS-систем.',
        about_projects: 'Проектов',
        about_clients: 'Клиентов',
        about_programming_title: 'Программирование',
        about_programming_desc:
          'Разработка сайтов с использованием современных языков программирования',
        about_ai_title: 'ИИ-технологии',
        about_ai_desc: 'Использование нейросетей для оптимизации процессов разработки',
        about_cms_title: 'CMS разработка',
        about_cms_desc: 'Создание сайтов на платформе Tilda CMS',
      },

      skills: {
        skills_title: 'Технический стек',
        skills_frontend: 'Frontend',
        skills_backend: 'Backend',
        skills_styling: 'Стилизация',
        skills_tools: 'Инструменты',
      },

      portfolio: {
        portfolio_title: 'Мои проекты',
        portfolio_subtitle: 'Реальные кейсы для бизнеса',
        portfolio_filter_all: 'Все',
      },

      calculator: {
        calc_title: 'Калькулятор стоимости',
        calc_subtitle: 'Рассчитайте примерную стоимость вашего проекта',
        calc_project_type_short: 'Проект',
        calc_design: 'Дизайн',
        calc_timeline_short: 'Сроки',
        calc_additional_short: 'Доп. услуги',
        calc_landing: 'Лендинг',
        calc_landing_desc: 'Одностраничный сайт',
        calc_corporate: 'Корпоративный сайт',
        calc_corporate_desc: 'Многостраничный сайт',
        calc_ecommerce: 'Интернет-магазин',
        calc_ecommerce_desc: 'E-commerce решение',
        calc_webapp: 'Веб-приложение',
        calc_webapp_desc: 'SPA с базой данных',
        calc_ready_design: '🎨 Готовый дизайн',
        calc_ready_design_desc: 'Из библиотеки шаблонов',
        calc_custom_design: '✨ Авторский дизайн',
        calc_custom_design_desc: 'Уникальный под бренд',
        calc_premium_design: '💎 Премиум дизайн',
        calc_premium_design_desc: '+ UX исследование',
        calc_express: '1-2 недели',
        calc_express_desc: 'Экспресс-разработка',
        calc_optimal: '3-4 недели',
        calc_optimal_desc: 'Оптимальные сроки',
        calc_standard: '1-1.5 месяца',
        calc_standard_desc: 'Стандартные сроки',
        calc_extended: '2+ месяца',
        calc_extended_desc: 'Без спешки',
        calc_base_price: 'Базовая цена',
        calc_result_title: 'Итоговая стоимость',
        calc_timeline_info: 'Сроки:',
        calc_disclaimer: 'Точная стоимость определяется после детального обсуждения проекта',
        calc_discuss_btn: 'Обсудить проект',
        calc_order_btn: 'Заказать расчет',
        calc_total: 'Итого:',
        calc_seo: '🔍 SEO-оптимизация',
        calc_chatbot: '🤖 Чат-бот интеграция',
        calc_analytics: '📊 Яндекс.Метрика + GA4',
        calc_payments: '💳 Онлайн-платежи',
        calc_multilang: '🌐 Многоязычность',
        calc_support: '🛠️ Техподдержка (6 мес)',
      },

      experience: {
        exp_title: 'Опыт работы',
        exp_role: 'Frontend-разработчик',
        exp_company: 'Фрилансер',
        exp_period: '2022 - настоящее время',
        exp_task1: 'Разработка современных веб-приложений на Vue.js',
        exp_task2: 'Создание адаптивных интерфейсов с использованием CSS/SCSS',
        exp_task3: 'Работа с TypeScript для повышения надежности кода',
        exp_task4: 'Интеграция ИИ-инструментов в процесс разработки',
        exp_task5: 'Разработка сайтов на платформе Tilda CMS',
        exp_years: 'года опыта',
        exp_projects: 'завершенных проектов',
        exp_clients: 'довольных клиентов',
      },

      contact: {
        contact_title: 'Свяжитесь со мной',
        contact_subtitle: 'Давайте работать вместе',
        contact_description:
          'Готов обсудить ваш проект и предложить оптимальные решения. Связывайтесь любым удобным способом!',
        contact_form_name: 'Имя',
        contact_form_email: 'Email',
        contact_form_message: 'Сообщение',
        contact_form_submit: 'Отправить сообщение',
      },

      footer: {
        footer_role: 'Frontend-разработчик',
        footer_rights: '© 2025 Илья Орлов. Все права защищены.',
      },

      photo: {
        modal_photo_title: 'Илья Орлов',
        modal_photo_subtitle: 'Frontend-разработчик',
      },

      contactModal: {
        contact_modal_title: 'Связаться со мной',
        contact_modal_description: 'Выберите удобный способ связи или напишите мне прямо сейчас',
        contact_status_online: 'Онлайн',
        contact_status_fast: 'Быстрый ответ',
        contact_status_detailed: 'Для детального обсуждения',
        contact_status_social: 'Соц. сеть',
        contact_status_organized: 'Структурированно',
        contact_response_time: 'Отвечаю в течение 2-4 часов',
      },

      contactForm: {
        contact_form_option_title: 'Оставить заявку',
        contact_form_option_desc: 'Заполните форму с деталями проекта',
        contact_form_back: 'Назад к контактам',
        contact_form_title: 'Оставить заявку на проект',
        contact_form_subtitle: 'Расскажите о своём проекте, и я свяжусь с вами в течение 2-4 часов',
      },

      form: {
        form_first_name: 'Имя',
        form_last_name: 'Фамилия',
        form_phone: 'Номер телефона',
        form_email: 'Email',
        form_project_type: 'Тип проекта',
        form_select_project: 'Выберите тип проекта',
        form_project_landing: 'Лендинг (одностраничный сайт)',
        form_project_corporate: 'Корпоративный сайт',
        form_project_ecommerce: 'Интернет-магазин',
        form_project_webapp: 'Веб-приложение',
        form_project_redesign: 'Редизайн существующего сайта',
        form_project_other: 'Другое',
        form_budget: 'Бюджет проекта',
        form_select_budget: 'Выберите бюджет',
        form_budget_discuss: 'Обсудим индивидуально',
        form_timeline: 'Желаемые сроки',
        form_select_timeline: 'Выберите сроки',
        form_timeline_express: '1-2 недели (экспресс)',
        form_timeline_optimal: '3-4 недели (оптимально)',
        form_timeline_standard: '1-2 месяца (стандарт)',
        form_timeline_flexible: 'Гибкие сроки',
        form_description: 'Описание проекта',
        form_additional_services: 'Дополнительные услуги',
      },

      sevices: {
        form_service_seo: 'SEO-оптимизация',
        form_service_analytics: 'Аналитика (GA4, Яндекс.Метрика)',
        form_service_chatbot: 'Чат-бот интеграция',
        form_service_payments: 'Онлайн-платежи',
        form_service_multilang: 'Многоязычность',
        form_service_support: 'Техподдержка (6 мес)',
      },

      form_submit: 'Отправить заявку',
      form_success: 'Заявка отправлена! Свяжусь с вами в ближайшее время.',
      form_error: 'Ошибка отправки. Попробуйте связаться другим способом.',

      themeAndLang: {
        theme_tooltip_light: 'Темная тема',
        theme_tooltip_dark: 'Светлая тема',
        lang_tooltip: 'Switch to English',
      },

      loader: {
        loader_loading: 'Загрузка портфолио...',
        loader_subtext: 'Frontend-разработчик',
      },
    },
    EN: {
      brand_tagline: 'Flow of creativity and code',

      navigation: {
        nav_about: 'About',
        nav_skills: 'Skills',
        nav_portfolio: 'Portfolio',
        nav_calculator: 'Calculator',
        nav_experience: 'Experience',
        nav_contact: 'Contact',
      },

      hero: {
        hero_role: 'Frontend Developer',
        hero_description:
          'Creating modern web applications with 3 years of experience. Working with me means fast, high-quality, and clear results.',
        hero_contact_btn: 'Contact Me',
        hero_projects_btn: 'View Projects',
      },

      about: {
        about_title: 'About Me',
        about_subtitle: 'Frontend Developer with 3 years of experience',
        about_description:
          'I specialize in creating modern web applications using cutting-edge technologies and tools. I have experience with various development approaches — from traditional programming to using neural networks and CMS systems.',
        about_projects: 'Projects',
        about_clients: 'Clients',
        about_programming_title: 'Programming',
        about_programming_desc: 'Website development using modern programming languages',
        about_ai_title: 'AI Technologies',
        about_ai_desc: 'Using neural networks to optimize development processes',
        about_cms_title: 'CMS Development',
        about_cms_desc: 'Creating websites on the Tilda CMS platform',
      },

      skills: {
        skills_title: 'Tech Stack',
        skills_frontend: 'Frontend',
        skills_backend: 'Backend',
        skills_styling: 'Styling',
        skills_tools: 'Tools',
      },

      portfolio: {
        portfolio_title: 'My Projects',
        portfolio_subtitle: 'Real business cases',
        portfolio_filter_all: 'All',
      },

      calculator: {
        calc_title: 'Cost Calculator',
        calc_subtitle: 'Calculate the approximate cost of your project',
        calc_project_type_short: 'Project',
        calc_design: 'Design',
        calc_timeline_short: 'Timeline',
        calc_additional_short: 'Add-ons',
        calc_landing: 'Landing Page',
        calc_landing_desc: 'Single-page website',
        calc_corporate: 'Corporate Website',
        calc_corporate_desc: 'Multi-page website',
        calc_ecommerce: 'E-commerce Store',
        calc_ecommerce_desc: 'E-commerce solution',
        calc_webapp: 'Web Application',
        calc_webapp_desc: 'SPA with database',
        calc_ready_design: '🎨 Ready Design',
        calc_ready_design_desc: 'From template library',
        calc_custom_design: '✨ Custom Design',
        calc_custom_design_desc: 'Unique for your brand',
        calc_premium_design: '💎 Premium Design',
        calc_premium_design_desc: '+ UX research',
        calc_express: '1-2 weeks',
        calc_express_desc: 'Express development',
        calc_optimal: '3-4 weeks',
        calc_optimal_desc: 'Optimal timeline',
        calc_standard: '1-1.5 months',
        calc_standard_desc: 'Standard timeline',
        calc_extended: '2+ months',
        calc_extended_desc: 'No rush',
        calc_base_price: 'Base price',
        calc_result_title: 'Total Cost',
        calc_timeline_info: 'Timeline:',
        calc_disclaimer: 'Exact cost is determined after detailed project discussion',
        calc_discuss_btn: 'Discuss Project',
        calc_order_btn: 'Order Quote',
        calc_total: 'Total:',
        calc_seo: '🔍 SEO Optimization',
        calc_chatbot: '🤖 Chatbot Integration',
        calc_analytics: '📊 Yandex.Metrica + GA4',
        calc_payments: '💳 Online Payments',
        calc_multilang: '🌐 Multi-language',
        calc_support: '🛠️ Tech Support (6 months)',
      },

      experience: {
        exp_title: 'Work Experience',
        exp_role: 'Frontend Developer',
        exp_company: 'Freelancer',
        exp_period: '2022 - present',
        exp_task1: 'Developing modern web applications with Vue.js',
        exp_task2: 'Creating responsive interfaces using CSS/SCSS',
        exp_task3: 'Working with TypeScript to improve code reliability',
        exp_task4: 'Integrating AI tools into the development process',
        exp_task5: 'Developing websites on the Tilda CMS platform',
        exp_years: 'years of experience',
        exp_projects: 'completed projects',
        exp_clients: 'satisfied clients',
      },

      contact: {
        contact_title: 'Contact Me',
        contact_subtitle: "Let's work together",
        contact_description:
          'Ready to discuss your project and offer optimal solutions. Contact me in any convenient way!',
        contact_form_name: 'Name',
        contact_form_email: 'Email',
        contact_form_message: 'Message',
        contact_form_submit: 'Send Message',
      },

      footer: {
        footer_role: 'Frontend Developer',
        footer_rights: '© 2025 Ilya Orlov. All rights reserved.',
      },

      photo: {
        modal_photo_title: 'Ilya Orlov',
        modal_photo_subtitle: 'Frontend Developer',
      },

      contactModal: {
        contact_modal_title: 'Contact Me',
        contact_modal_description: 'Choose a convenient way to contact or write to me right now',
        contact_status_online: 'Online',
        contact_status_fast: 'Quick response',
        contact_status_detailed: 'For detailed discussion',
        contact_status_social: 'Social network',
        contact_status_organized: 'Organized',
        contact_response_time: 'I respond within 2-4 hours',
      },

      contactForm: {
        contact_form_option_title: 'Submit Request',
        contact_form_option_desc: 'Fill out form with project details',
        contact_form_back: 'Back to contacts',
        contact_form_title: 'Submit Project Request',
        contact_form_subtitle: "Tell me about your project, and I'll contact you within 2-4 hours",
      },

      form: {
        form_first_name: 'First Name',
        form_last_name: 'Last Name',
        form_phone: 'Phone Number',
        form_email: 'Email',
        form_project_type: 'Project Type',
        form_select_project: 'Select project type',
        form_project_landing: 'Landing Page (single page website)',
        form_project_corporate: 'Corporate Website',
        form_project_ecommerce: 'E-commerce Store',
        form_project_webapp: 'Web Application',
        form_project_redesign: 'Existing Website Redesign',
        form_project_other: 'Other',
        form_budget: 'Project Budget',
        form_select_budget: 'Select budget',
        form_budget_discuss: 'Discuss individually',
        form_timeline: 'Desired Timeline',
        form_select_timeline: 'Select timeline',
        form_timeline_express: '1-2 weeks (express)',
        form_timeline_optimal: '3-4 weeks (optimal)',
        form_timeline_standard: '1-2 months (standard)',
        form_timeline_flexible: 'Flexible timeline',
        form_description: 'Project Description',
        form_additional_services: 'Additional Services',
      },

      services: {
        form_service_seo: 'SEO Optimization',
        form_service_analytics: 'Analytics (GA4, Yandex.Metrica)',
        form_service_chatbot: 'Chatbot Integration',
        form_service_payments: 'Online Payments',
        form_service_multilang: 'Multi-language',
        form_service_support: 'Tech Support (6 months)',
      },

      form_submit: 'Submit Request',
      form_success: "Request submitted! I'll contact you soon.",
      form_error: 'Submission error. Please try contacting another way.',

      themeAndLang: {
        theme_tooltip_light: 'Dark theme',
        theme_tooltip_dark: 'Light theme',
        lang_tooltip: 'Переключить на русский',
      },

      loader: {
        loader_loading: 'Loading portfolio...',
        loader_subtext: 'Frontend Developer',
      },
    },
  },
})
