import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        rights: 'Know Your Rights',
        resources: 'Resources',
        help: 'Paperwork Help',
        about: 'About'
      },
      home: {
        title: 'Welcome to Immigo',
        subtitle: 'Your Guide to Immigrant Rights & Resources',
        description: 'Empowering immigrants with knowledge about their rights, legal information, and community resources.',
        getStarted: 'Get Started',
        features: {
          rights: {
            title: 'Know Your Rights',
            description: 'Learn about your rights as a documented or undocumented immigrant.'
          },
          resources: {
            title: 'Find Resources',
            description: 'Access reliable legal and community resources in your area.'
          },
          chatbot: {
            title: 'AI Assistant',
            description: 'Get answers to your immigration questions with our AI chatbot.'
          }
        }
      },
      rights: {
        title: 'Know Your Rights',
        subtitle: 'Understanding Your Rights as an Immigrant',
        section1: {
          title: 'Right to Remain Silent',
          content: 'You have the right to remain silent and not answer questions about your immigration status. You can say "I wish to remain silent" or "I want to speak to a lawyer."'
        },
        section2: {
          title: 'Right to an Attorney',
          content: 'You have the right to speak with an attorney before answering any questions. If you cannot afford one, you may be eligible for free legal assistance.'
        },
        section3: {
          title: 'Right to Refuse Search',
          content: 'You have the right to refuse a search of your home or belongings without a warrant, unless there is an emergency or you give consent.'
        },
        section4: {
          title: 'Right to Documentation',
          content: 'You have the right to carry identification, but you do not have to show it unless you are being lawfully detained or arrested.'
        }
      },
      resources: {
        title: 'Resources',
        subtitle: 'Legal Aid & Community Resources',
        legalAid: {
          title: 'Legal Aid Organizations',
          description: 'Find free or low-cost legal assistance in your area.'
        },
        hotlines: {
          title: 'Emergency Hotlines',
          description: '24/7 hotlines for immediate assistance and support.'
        },
        community: {
          title: 'Community Organizations',
          description: 'Local organizations that provide support and resources.'
        }
      },
      help: {
        title: 'Paperwork Help',
        subtitle: 'Guidance on Common Immigration Forms',
        description: 'Get help understanding and filling out common immigration forms and applications.'
      },
      about: {
        title: 'About Immigo',
        subtitle: 'Empowering Immigrants with Information',
        description: 'Immigo is dedicated to helping immigrants understand their rights and access resources, regardless of language or documentation status.'
      },
      chatbot: {
        title: 'AI Assistant',
        placeholder: 'Ask a question about immigration...',
        send: 'Send',
        thinking: 'Thinking...',
        error: 'Sorry, an error occurred. Please try again.'
      },
      footer: {
        description: 'Empowering immigrants with knowledge and resources.',
        rights: 'All rights reserved.'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        rights: 'Conoce Tus Derechos',
        resources: 'Recursos',
        help: 'Ayuda con Documentos',
        about: 'Acerca de'
      },
      home: {
        title: 'Bienvenido a Immigo',
        subtitle: 'Tu Guía de Derechos y Recursos para Inmigrantes',
        description: 'Empoderando a inmigrantes con conocimiento sobre sus derechos, información legal y recursos comunitarios.',
        getStarted: 'Comenzar',
        features: {
          rights: {
            title: 'Conoce Tus Derechos',
            description: 'Aprende sobre tus derechos como inmigrante documentado o indocumentado.'
          },
          resources: {
            title: 'Encuentra Recursos',
            description: 'Accede a recursos legales y comunitarios confiables en tu área.'
          },
          chatbot: {
            title: 'Asistente IA',
            description: 'Obtén respuestas a tus preguntas de inmigración con nuestro chatbot de IA.'
          }
        }
      },
      rights: {
        title: 'Conoce Tus Derechos',
        subtitle: 'Entendiendo Tus Derechos como Inmigrante',
        section1: {
          title: 'Derecho a Permanecer en Silencio',
          content: 'Tienes derecho a permanecer en silencio y no responder preguntas sobre tu estado migratorio. Puedes decir "Deseo permanecer en silencio" o "Quiero hablar con un abogado."'
        },
        section2: {
          title: 'Derecho a un Abogado',
          content: 'Tienes derecho a hablar con un abogado antes de responder cualquier pregunta. Si no puedes pagar uno, puedes ser elegible para asistencia legal gratuita.'
        },
        section3: {
          title: 'Derecho a Negarse a una Búsqueda',
          content: 'Tienes derecho a negarte a una búsqueda de tu hogar o pertenencias sin una orden judicial, a menos que haya una emergencia o des tu consentimiento.'
        },
        section4: {
          title: 'Derecho a Documentación',
          content: 'Tienes derecho a portar identificación, pero no tienes que mostrarla a menos que seas detenido o arrestado legalmente.'
        }
      },
      resources: {
        title: 'Recursos',
        subtitle: 'Asistencia Legal y Recursos Comunitarios',
        legalAid: {
          title: 'Organizaciones de Asistencia Legal',
          description: 'Encuentra asistencia legal gratuita o de bajo costo en tu área.'
        },
        hotlines: {
          title: 'Líneas de Emergencia',
          description: 'Líneas directas 24/7 para asistencia y apoyo inmediato.'
        },
        community: {
          title: 'Organizaciones Comunitarias',
          description: 'Organizaciones locales que brindan apoyo y recursos.'
        }
      },
      help: {
        title: 'Ayuda con Documentos',
        subtitle: 'Guía sobre Formularios de Inmigración Comunes',
        description: 'Obtén ayuda para entender y completar formularios y solicitudes de inmigración comunes.'
      },
      about: {
        title: 'Acerca de Immigo',
        subtitle: 'Empoderando Inmigrantes con Información',
        description: 'Immigo está dedicado a ayudar a inmigrantes a entender sus derechos y acceder a recursos, sin importar el idioma o el estado de documentación.'
      },
      chatbot: {
        title: 'Asistente IA',
        placeholder: 'Haz una pregunta sobre inmigración...',
        send: 'Enviar',
        thinking: 'Pensando...',
        error: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.'
      },
      footer: {
        description: 'Empoderando inmigrantes con conocimiento y recursos.',
        rights: 'Todos los derechos reservados.'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        rights: 'Connaissez Vos Droits',
        resources: 'Ressources',
        help: 'Aide aux Documents',
        about: 'À Propos'
      },
      home: {
        title: 'Bienvenue sur Immigo',
        subtitle: 'Votre Guide des Droits et Ressources pour Immigrants',
        description: 'Autonomiser les immigrants avec des connaissances sur leurs droits, informations légales et ressources communautaires.',
        getStarted: 'Commencer',
        features: {
          rights: {
            title: 'Connaissez Vos Droits',
            description: 'Apprenez vos droits en tant qu\'immigrant documenté ou non documenté.'
          },
          resources: {
            title: 'Trouver des Ressources',
            description: 'Accédez à des ressources juridiques et communautaires fiables dans votre région.'
          },
          chatbot: {
            title: 'Assistant IA',
            description: 'Obtenez des réponses à vos questions sur l\'immigration avec notre chatbot IA.'
          }
        }
      },
      rights: {
        title: 'Connaissez Vos Droits',
        subtitle: 'Comprendre Vos Droits en tant qu\'Immigrant'
      },
      resources: {
        title: 'Ressources',
        subtitle: 'Aide Juridique et Ressources Communautaires'
      },
      help: {
        title: 'Aide aux Documents',
        subtitle: 'Guide sur les Formulaires d\'Immigration Courants'
      },
      about: {
        title: 'À Propos d\'Immigo',
        subtitle: 'Autonomiser les Immigrants avec des Informations'
      },
      chatbot: {
        title: 'Assistant IA',
        placeholder: 'Posez une question sur l\'immigration...',
        send: 'Envoyer',
        thinking: 'Réflexion...',
        error: 'Désolé, une erreur s\'est produite. Veuillez réessayer.'
      },
      footer: {
        description: 'Autonomiser les immigrants avec des connaissances et des ressources.',
        rights: 'Tous droits réservés.'
      }
    }
  }
  ,
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        rights: 'اعرف حقوقك',
        resources: 'الموارد',
        help: 'مساعدة بالأوراق',
        about: 'حول'
      },
      home: {
        title: 'مرحبًا بك في Immigo',
        subtitle: 'دليلك لحقوق وموارد المهاجرين',
        description: 'تمكين المهاجرين من خلال المعرفة حول حقوقهم والمعلومات القانونية والموارد المجتمعية.',
        getStarted: 'ابدأ الآن',
        features: {
          rights: {
            title: 'اعرف حقوقك',
            description: 'تعرّف على حقوقك كمهاجر سواء كنت موثقًا أم لا.'
          },
          resources: {
            title: 'ابحث عن موارد',
            description: 'الوصول إلى موارد قانونية ومجتمعية موثوقة في منطقتك.'
          },
          chatbot: {
            title: 'المساعد الذكي',
            description: 'احصل على إجابات عن أسئلتك حول الهجرة باستخدام روبوت المحادثة الذكي.'
          }
        }
      },
      rights: {
        title: 'اعرف حقوقك',
        subtitle: 'فهم حقوقك كمهاجر',
        section1: {
          title: 'الحق في البقاء صامتًا',
          content: 'لديك الحق في البقاء صامتًا وعدم الإجابة عن أسئلة حول وضعك الهجري. يمكنك أن تقول "أرغب في البقاء صامتًا" أو "أريد التحدث إلى محامٍ."'
        },
        section2: {
          title: 'الحق في محامٍ',
          content: 'لديك الحق في التحدث إلى محامٍ قبل الإجابة على أي أسئلة. إذا لم تتمكن من دفع أتعاب، فقد تكون مؤهلاً للحصول على مساعدة قانونية مجانية.'
        },
        section3: {
          title: 'الحق في رفض التفتيش',
          content: 'لديك الحق في رفض تفتيش منزلك أو متعلقاتك دون مذكرة تفتيش، إلا في حالات الطوارئ أو إذا منحت الموافقة.'
        },
        section4: {
          title: 'الحق في الوثائق',
          content: 'لديك الحق في حمل هوية، لكنك لست مضطرًا لعرضها إلا إذا تم توقيفك أو اعتقالك قانونيًا.'
        }
      },
      resources: {
        title: 'الموارد',
        subtitle: 'المساعدة القانونية والموارد المجتمعية',
        legalAid: {
          title: 'منظمات المساعدة القانونية',
          description: 'ابحث عن مساعدة قانونية مجانية أو منخفضة التكلفة في منطقتك.'
        },
        hotlines: {
          title: 'الخطوط الساخنة الطارئة',
          description: 'خطوط مباشرة على مدار الساعة للمساعدة والدعم الفوري.'
        },
        community: {
          title: 'المنظمات المجتمعية',
          description: 'المنظمات المحلية التي تقدم الدعم والموارد.'
        }
      },
      help: {
        title: 'مساعدة بالأوراق',
        subtitle: 'إرشادات حول نماذج الهجرة الشائعة',
        description: 'احصل على مساعدة لفهم وملء نماذج وطلبات الهجرة الشائعة.'
      },
      about: {
        title: 'حول Immigo',
        subtitle: 'تمكين المهاجرين بالمعلومات',
        description: 'تلتزم Immigo بمساعدة المهاجرين على فهم حقوقهم والوصول إلى الموارد، بغض النظر عن اللغة أو حالة الوثائق.'
      },
      chatbot: {
        title: 'المساعد الذكي',
        placeholder: 'اسأل سؤالًا عن الهجرة...',
        send: 'إرسال',
        thinking: 'جاري التفكير...',
        error: 'عذرًا، حدث خطأ. يرجى المحاولة مرة أخرى.'
      },
      footer: {
        description: 'تمكين المهاجرين بالمعرفة والموارد.',
        rights: 'جميع الحقوق محفوظة.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

