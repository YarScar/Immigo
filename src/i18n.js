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
        ,
        disclaimer: 'This information is for educational purposes only and does not constitute legal advice. Please consult with a qualified immigration attorney for specific legal matters.'
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
        ,
        visitWebsite: 'Visit Website →',
        noteTitle: 'Note',
        noteContent: 'Resource information may change. Please verify contact information and services before reaching out.'
      },
      
      help: {
        title: 'Paperwork Help',
        subtitle: 'Guidance on Common Immigration Forms',
        description: 'Get help understanding and filling out common immigration forms and applications.',
        commonFormsTitle: 'Common Immigration Forms',
        viewFormLabel: 'View Form →',
        tipsTitle: 'Tips for Filling Out Forms',
  tips: {
          tip1: 'Read all instructions carefully before filling out the form.',
          tip2: 'Use black ink and print clearly or type your answers.',
          tip3: 'Answer all questions truthfully and completely.',
          tip4: 'Keep copies of all forms and supporting documents.',
          tip5: 'Consider consulting with an immigration attorney if you have questions.',
          tip6: 'Double-check all information before submitting.'
        },
        chatbotSectionTitle: 'Need Help? Ask Our AI Assistant',
        chatbotSectionDescription: 'Use our AI chatbot (available in the bottom right corner) to get answers to questions about immigration forms and procedures.'
      ,
        disclaimerText: 'This information is for guidance only. Immigration forms and requirements can change. Always check the official USCIS website for the most current information and consider consulting with an immigration attorney for legal advice.'
      },
      about: {
        title: 'About Immigo',
        subtitle: 'Empowering Immigrants with Information',
        description: 'Immigo is dedicated to helping immigrants understand their rights and access resources, regardless of language or documentation status.',
        missionTitle: 'Our Mission',
        whatWeOfferTitle: 'What We Offer',
        features: {
          rightsLabel: 'Know Your Rights',
          resourceFinderLabel: 'Resource Finder',
          paperworkHelpLabel: 'Paperwork Help',
          aiAssistantLabel: 'AI Assistant',
          multilingualSupportLabel: 'Multilingual Support'
        },
        disclaimerTitle: 'Disclaimer',
        contactTitle: 'Contact'
        ,
        disclaimerText: 'Immigo is an informational resource and does not provide legal advice. The information on this website is for educational purposes only and should not be used as a substitute for professional legal counsel.',
        contactText: 'If you have questions or suggestions about Immigo, please reach out through our chatbot or contact your local immigration legal services organization.'
      },
      chatbot: {
        title: 'AI Assistant',
        placeholder: 'Ask a question about immigration...',
        send: 'Send',
        thinking: 'Thinking...',
        error: 'Sorry, an error occurred. Please try again.',
        apiKeyMissing: '⚠️ Please set VITE_GEMINI_API_KEY in your .env file to use the chatbot.',
        welcomeGreeting: '👋 AI Assistant',
        welcomePrompt: 'Ask me anything about immigration rights, laws, or resources!',
        toggleAria: 'Toggle chatbot',
        closeAria: 'Close chatbot',
        systemPrompt: 'You are a helpful assistant that provides information about immigration rights, laws, and resources in the United States. Provide accurate, helpful, and supportive information. Always remind users that you are not a substitute for legal advice and they should consult with an immigration attorney for specific legal matters.'
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
        ,
        disclaimer: 'Esta información es solo para fines educativos y no constituye asesoramiento legal. Consulte con un abogado de inmigración calificado para asuntos legales específicos.'
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
        ,
        visitWebsite: 'Visitar Sitio →',
        noteTitle: 'Nota',
        noteContent: 'La información de los recursos puede cambiar. Verifique la información de contacto y los servicios antes de comunicarse.'
      },
      help: {
        title: 'Ayuda con Documentos',
        subtitle: 'Guía sobre Formularios de Inmigración Comunes',
        description: 'Obtén ayuda para entender y completar formularios y solicitudes de inmigración comunes.',
        commonFormsTitle: 'Formularios Comunes de Inmigración',
        viewFormLabel: 'Ver Formulario →',
        tipsTitle: 'Consejos para Completar Formularios',
        tips: {
          tip1: 'Lee todas las instrucciones cuidadosamente antes de completar el formulario.',
          tip2: 'Usa tinta negra y escribe claramente o escribe tus respuestas.',
          tip3: 'Responde todas las preguntas con verdad y completamente.',
          tip4: 'Conserva copias de todos los formularios y documentos de respaldo.',
          tip5: 'Considera consultar con un abogado de inmigración si tienes preguntas.',
          tip6: 'Verifica toda la información antes de enviar.'
        },
        chatbotSectionTitle: '¿Necesitas ayuda? Pregunta a nuestro asistente IA',
        chatbotSectionDescription: 'Usa nuestro chatbot de IA (disponible en la esquina inferior derecha) para obtener respuestas sobre formularios y procedimientos de inmigración.',
        disclaimerText: 'Esta información es solo una guía. Los formularios y requisitos de inmigración pueden cambiar. Consulte siempre el sitio oficial de USCIS para la información más actual y considere consultar con un abogado de inmigración.'
      },
      about: {
        title: 'Acerca de Immigo',
        subtitle: 'Empoderando Inmigrantes con Información',
        description: 'Immigo está dedicado a ayudar a inmigrantes a entender sus derechos y acceder a recursos, sin importar el idioma o el estado de documentación.',
        missionTitle: 'Nuestra Misión',
        whatWeOfferTitle: 'Lo Que Ofrecemos',
        features: {
          rightsLabel: 'Conoce Tus Derechos',
          resourceFinderLabel: 'Buscador de Recursos',
          paperworkHelpLabel: 'Ayuda con Documentos',
          aiAssistantLabel: 'Asistente IA',
          multilingualSupportLabel: 'Soporte Multilingüe'
        },
        disclaimerTitle: 'Aviso Legal',
        contactTitle: 'Contacto',
        disclaimerText: 'Immigo es un recurso informativo y no proporciona asesoramiento legal. La información en este sitio web es solo para fines educativos y no debe utilizarse como sustituto del asesoramiento legal profesional.',
        contactText: 'Si tiene preguntas o sugerencias sobre Immigo, comuníquese a través de nuestro chatbot o contacte a la organización local de servicios legales de inmigración.'
      },
      chatbot: {
        title: 'Asistente IA',
        placeholder: 'Haz una pregunta sobre inmigración...',
        send: 'Enviar',
        thinking: 'Pensando...',
        error: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.',
        apiKeyMissing: '⚠️ Por favor establezca VITE_GEMINI_API_KEY en su archivo .env para usar el chatbot.',
        welcomeGreeting: '👋 Asistente IA',
        welcomePrompt: '¡Pregúntame cualquier cosa sobre derechos, leyes o recursos de inmigración!',
        toggleAria: 'Alternar chatbot',
        closeAria: 'Cerrar chatbot',
        systemPrompt: 'Eres un asistente útil que proporciona información sobre derechos, leyes y recursos de inmigración. Proporciona información precisa, útil y solidaria. Recuerda siempre a los usuarios que no eres un sustituto del asesoramiento legal y que deben consultar con un abogado de inmigración para asuntos legales específicos.'
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
        subtitle: 'Comprendre Vos Droits en tant qu\'Immigrant',
        disclaimer: 'Ces informations sont fournies à titre éducatif et ne constituent pas un avis juridique. Veuillez consulter un avocat spécialisé en immigration pour des questions juridiques spécifiques.'
      },
      resources: {
        title: 'Ressources',
        subtitle: 'Aide Juridique et Ressources Communautaires'
      ,
        visitWebsite: 'Visiter le Site →',
        noteTitle: 'Remarque',
        noteContent: 'Les informations sur les ressources peuvent changer. Veuillez vérifier les coordonnées et les services avant de contacter.'
      },
      help: {
        title: 'Aide aux Documents',
        subtitle: 'Guide sur les Formulaires d\'Immigration Courants',
        description: 'Obtenez de l\'aide pour comprendre et remplir les formulaires et demandes d\'immigration courants.',
        commonFormsTitle: 'Formulaires d\'Immigration Courants',
        viewFormLabel: 'Voir le Formulaire →',
        tipsTitle: 'Conseils pour Remplir les Formulaires',
        tips: {
          tip1: 'Lisez toutes les instructions attentivement avant de remplir le formulaire.',
          tip2: 'Utilisez de l\'encre noire et écrivez clairement ou tapez vos réponses.',
          tip3: 'Répondez à toutes les questions honnêtement et complètement.',
          tip4: 'Conservez des copies de tous les formulaires et des documents justificatifs.',
          tip5: 'Envisagez de consulter un avocat spécialisé en immigration si vous avez des questions.',
          tip6: 'Vérifiez toutes les informations avant de soumettre.'
        },
  chatbotSectionTitle: 'Besoin d\'aide ? Demandez à notre Assistant IA',
  chatbotSectionDescription: 'Utilisez notre chatbot IA (disponible dans le coin inférieur droit) pour obtenir des réponses sur les formulaires et procédures d\'immigration.',
  disclaimerText: 'Ces informations sont fournies à titre indicatif. Les formulaires et exigences d\'immigration peuvent changer. Consultez toujours le site officiel de l\'USCIS pour les informations les plus récentes et envisagez de consulter un avocat spécialisé en immigration.'
      },
      about: {
        title: 'À Propos d\'Immigo',
        subtitle: 'Autonomiser les Immigrants avec des Informations',
        missionTitle: 'Notre Mission',
        whatWeOfferTitle: 'Ce Que Nous Offrons',
        features: {
          rightsLabel: 'Connaissez Vos Droits',
          resourceFinderLabel: 'Recherche de Ressources',
          paperworkHelpLabel: 'Aide aux Documents',
          aiAssistantLabel: 'Assistant IA',
          multilingualSupportLabel: 'Support Multilingue'
        },
  disclaimerTitle: 'Avertissement',
  contactTitle: 'Contact',
  disclaimerText: 'Immigo est une ressource d\'information et ne fournit pas de conseils juridiques. Les informations sur ce site sont à titre éducatif et ne remplacent pas un avis juridique professionnel.',
  contactText: 'Si vous avez des questions ou des suggestions concernant Immigo, veuillez nous contacter via notre chatbot ou contacter une organisation locale de services juridiques en immigration.'
      },
      chatbot: {
        title: 'Assistant IA',
        placeholder: 'Posez une question sur l\'immigration...',
        send: 'Envoyer',
        thinking: 'Réflexion...',
        error: 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
        apiKeyMissing: '⚠️ Veuillez définir VITE_GEMINI_API_KEY dans votre fichier .env pour utiliser le chatbot.',
        welcomeGreeting: '👋 Assistant IA',
        welcomePrompt: 'Posez-moi n\'importe quelle question sur les droits, lois ou ressources d\'immigration!',
        toggleAria: 'Basculer le chatbot',
        closeAria: 'Fermer le chatbot',
        systemPrompt: 'Vous êtes un assistant utile qui fournit des informations sur les droits, les lois et les ressources en matière d\'immigration. Fournissez des informations précises, utiles et solidaires. Rappelez toujours aux utilisateurs que vous ne remplacez pas un avis juridique et qu\'ils doivent consulter un avocat spécialisé en immigration pour des questions juridiques spécifiques.'
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
        ,
        visitWebsite: 'زيارة الموقع →',
        noteTitle: 'ملاحظة',
        noteContent: 'قد تتغير معلومات الموارد. يرجى التحقق من معلومات الاتصال والخدمات قبل التواصل.'
      },
      help: {
        title: 'مساعدة بالأوراق',
        subtitle: 'إرشادات حول نماذج الهجرة الشائعة',
        description: 'احصل على مساعدة لفهم وملء نماذج وطلبات الهجرة الشائعة.'
        ,
        commonFormsTitle: 'النماذج الشائعة للهجرة',
        viewFormLabel: 'عرض النموذج →',
        tipsTitle: 'نصائح لملء النماذج',
        tips: {
          tip1: 'اقرأ جميع التعليمات بعناية قبل ملء النموذج.',
          tip2: 'استخدم حبرًا أسود واكتب بوضوح أو اكتب إجاباتك.',
          tip3: 'أجب عن جميع الأسئلة بصدق وبشكل كامل.',
          tip4: 'احتفظ بنسخ من جميع النماذج والمستندات الداعمة.',
          tip5: 'فكر في استشارة محامٍ متخصص في الهجرة إذا كانت لديك أسئلة.',
          tip6: 'تحقق من جميع المعلومات قبل الإرسال.'
        },
        chatbotSectionTitle: 'هل تحتاج مساعدة؟ اسأل مساعدنا الذكي',
        chatbotSectionDescription: 'استخدم روبوت المحادثة الذكي (متوفر في الزاوية السفلية اليمنى) للحصول على إجابات حول النماذج وإجراءات الهجرة.',
        disclaimerText: 'هذه المعلومات لأغراض إرشادية فقط. قد تتغير نماذج ومتطلبات الهجرة. راجع دائمًا موقع USCIS الرسمي للحصول على أحدث المعلومات وفكر في استشارة محامٍ متخصص في الهجرة.'
      },
      about: {
        title: 'حول Immigo',
        subtitle: 'تمكين المهاجرين بالمعلومات',
        description: 'تلتزم Immigo بمساعدة المهاجرين على فهم حقوقهم والوصول إلى الموارد، بغض النظر عن اللغة أو حالة الوثائق.'
        ,
        missionTitle: 'مهمتنا',
        whatWeOfferTitle: 'ما الذي نقدمه',
        features: {
          rightsLabel: 'اعرف حقوقك',
          resourceFinderLabel: 'أداة البحث عن الموارد',
          paperworkHelpLabel: 'مساعدة بالأوراق',
          aiAssistantLabel: 'المساعد الذكي',
          multilingualSupportLabel: 'دعم متعدد اللغات'
        },
        disclaimerTitle: 'إخلاء المسؤولية',
        contactTitle: 'اتصل',
        disclaimerText: 'Immigo مورد معلوماتي ولا يقدم نصائح قانونية. المعلومات على هذا الموقع لأغراض تعليمية فقط ولا تحل محل المشورة القانونية المهنية.',
        contactText: 'إذا كانت لديك أسئلة أو اقتراحات حول Immigo، يرجى التواصل عبر روبوت المحادثة الخاص بنا أو الاتصال بمنظمة الخدمات القانونية المحلية المختصة بالهجرة.'
      },
      chatbot: {
        title: 'المساعد الذكي',
        placeholder: 'اسأل سؤالًا عن الهجرة...',
        send: 'إرسال',
        thinking: 'جاري التفكير...',
        error: 'عذرًا، حدث خطأ. يرجى المحاولة مرة أخرى.',
        apiKeyMissing: '⚠️ يرجى تعيين VITE_GEMINI_API_KEY في ملف .env الخاص بك لاستخدام روبوت المحادثة.',
        welcomeGreeting: '👋 المساعد الذكي',
        welcomePrompt: 'اطرح عليَّ أي سؤال عن حقوق الهجرة أو القوانين أو الموارد!',
        toggleAria: 'تبديل روبوت المحادثة',
        closeAria: 'إغلاق روبوت المحادثة',
        systemPrompt: 'أنت مساعد مفيد يقدم معلومات حول حقوق الهجرة والقوانين والموارد. قدّم معلومات دقيقة ومفيدة وداعمة. ذكر المستخدمين دائمًا بأنك لست بديلاً عن الاستشارة القانونية وأنه يجب عليهم استشارة محامٍ في شؤون الهجرة للمسائل القانونية المحددة.'
      },
      footer: {
        description: 'تمكين المهاجرين بالمعرفة والموارد.',
        rights: 'جميع الحقوق محفوظة.'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        rights: '权利',
        resources: '资源',
        help: '帮助',
        about: '关于'
      },
      home: {
        title: '欢迎来到 Immigo',
        subtitle: '您移民权利和资源的指南',
        description: '通过了解自己的权利、法律信息和社区资源来赋予移民权力。',
        getStarted: '开始',
        features: {
          rights: {
            title: '了解你的权利',
            description: '了解作为有文件或无文件移民的权利。'
          },
          resources: {
            title: '查找资源',
            description: '访问您所在地区可靠的法律和社区资源。'
          },
          chatbot: {
            title: 'AI 助手',
            description: '通过我们的 AI 聊天机器人获取有关移民问题的答案。'
          }
        }
      },
      rights: {
        title: '你的权利',
        subtitle: '了解你作为移民的权利',
        section1: {
          title: '保持沉默的权利',
          content: '你有权保持沉默，不回答有关你移民身份的问题。你可以说“我希望保持沉默”或“我想咨询律师”。'
        },
        section2: {
          title: '律师权利',
          content: '在回答任何问题之前，你有权与律师交谈。如果你负担不起律师费，你可能有资格获得免费的法律援助。'
        },
        section3: {
          title: '拒绝搜查的权利',
          content: '在没有搜查令的情况下，除非发生紧急情况或你自愿同意，否则你有权拒绝对你的住所或物品进行搜查。'
        },
        section4: {
          title: '文件权利',
          content: '你有权携带身份证明，但除非在合法拘留或逮捕的情况下，否则你没有义务出示。'
        }
        ,
        disclaimer: '这些信息仅用于教育目的，并不构成法律建议。有关具体法律事务，请咨询合格的移民律师。'
      },
      resources: {
        title: '资源',
        subtitle: '法律援助和社区资源',
        legalAid: {
          title: '法律援助组织',
          description: '在您所在地区寻找免费或低成本的法律援助。'
        },
        hotlines: {
          title: '紧急热线',
          description: '24/7 热线提供即时援助和支持。'
        },
        community: {
          title: '社区组织',
          description: '提供支持和资源的地方组织。'
        }
        ,
        visitWebsite: '访问网站 →',
        noteTitle: '注意',
        noteContent: '资源信息可能会更改。请在联系之前验证联系信息和服务。'
      },
      
      help: {
        title: '表格帮助',
        subtitle: '关于常见移民表格的指导',
        description: '获取有关理解和填写常见移民表格和申请的帮助。',
        commonFormsTitle: '常见移民表格',
        viewFormLabel: '查看表格 →',
        tipsTitle: '填写表格的提示',
  tips: {
          tip1: '在填写表格之前，请仔细阅读所有说明。',
          tip2: '使用黑色墨水，清晰打印或输入您的答案。',
          tip3: '如实完整地回答所有问题。',
          tip4: '保留所有表格和支持文件的副本。',
          tip5: '如果您有疑问，请考虑咨询移民律师。',
          tip6: '在提交之前仔细检查所有信息。'
        },
        chatbotSectionTitle: '需要帮助吗？问我们的 AI 助手',
        chatbotSectionDescription: '使用我们的 AI 聊天机器人（在右下角可用）获取有关移民表格和程序的问题的答案。'
      ,
        disclaimerText: '这些信息仅供参考。移民表格和要求可能会更改。请始终查看 USCIS 官方网站以获取最新信息，并考虑咨询移民律师以获取法律建议。'
      },
      about: {
        title: '关于 Immigo',
        subtitle: '通过信息赋能移民',
        description: 'Immigo 致力于帮助移民了解他们的权利并获取资源，无论语言或文件状态如何。',
        missionTitle: '我们的使命',
        whatWeOfferTitle: '我们提供什么',
        features: {
          rightsLabel: '了解你的权利',
          resourceFinderLabel: '资源查找器',
          paperworkHelpLabel: '表格帮助',
          aiAssistantLabel: 'AI 助手',
          multilingualSupportLabel: '多语言支持'
        },
        disclaimerTitle: '免责声明',
        contactTitle: '联系'
        ,
        disclaimerText: 'Immigo 是一个信息资源，不提供法律建议。 本网站上的信息仅用于教育目的，不应作为专业法律顾问的替代品。',
        contactText: '如果您对 Immigo 有任何疑问或建议，请通过我们的聊天机器人与我们联系，或联系您当地的移民法律服务机构。'
      },
      chatbot: {
        title: 'AI 助手',
        placeholder: '输入你的移民问题...',
        send: '发送',
        thinking: '思考中...',
        error: '抱歉，发生错误。 请再试一次。',
        apiKeyMissing: '⚠️ 请在您的 .env 文件中设置 VITE_GEMINI_API_KEY 以使用聊天机器人。',
        welcomeGreeting: '👋 AI 助手',
        welcomePrompt: '询问我有关移民权利、法律或资源的任何问题！',
        toggleAria: '切换聊天机器人',
        closeAria: '关闭聊天机器人',
        systemPrompt: '您是一个提供有关美国移民权利、法律和资源的信息的有用助手。 提供准确、有帮助和支持性的信息。 始终提醒用户您不是法律建议的替代品，他们应咨询移民律师以获取具体法律事务的建议。'
      },
      footer: {
        description: '通过知识和资源赋能移民。',
        rights: '保留所有权利。'
      }
    }
  },
  ja: {
    translation: {
      nav: {
        home: 'ホーム',
        rights: '権利',
        resources: 'リソース',
        help: 'ヘルプ',
        about: '私たちについて'
      },
      home: {
        title: 'ようこそ Immigo へ',
        subtitle: '移民の権利とリソースへのガイド',
        description: '移民が自分の権利、法律情報、コミュニティリソースについての知識を得ることで、力を与えます。',
        getStarted: '始める',
        features: {
          rights: {
            title: 'あなたの権利を知る',
            description: '書類のある移民または書類のない移民としての権利について学びます。'
          },
          resources: {
            title: 'リソースを見つける',
            description: '地域の信頼できる法律およびコミュニティリソースにアクセスします。'
          },
          chatbot: {
            title: 'AI アシスタント',
            description: 'AI チャットボットを使って移民に関する質問に答えます。'
          }
        }
      },
      rights: {
        title: 'あなたの権利',
        subtitle: '移民としての権利を理解する',
        section1: {
          title: '沈黙する権利',
          content: '移民ステータスに関する質問に答えず、沈黙を保つ権利があります。「沈黙を保ちたい」または「弁護士と話したい」と言うことができます。'
        },
        section2: {
          title: '弁護士を求める権利',
          content: '質問に答える前に弁護士と話す権利があります。弁護士を雇う余裕がない場合は、無料の法的支援を受ける資格があるかもしれません。'
        },
        section3: {
          title: '捜索を拒否する権利',
          content: '緊急事態がない限り、または同意しない限り、令状なしに自宅や所持品の捜索を拒否する権利があります。'
        },
        section4: {
          title: '文書の権利',
          content: '身分証明書を携帯する権利がありますが、法的に拘束または逮捕されている場合を除いて、提示する必要はありません。'
        }
        ,
        disclaimer: 'この情報は教育目的のみであり、法的助言を構成するものではありません。具体的な法的事項については、資格のある移民弁護士に相談してください。'
      },
      resources: {
        title: 'リソース',
        subtitle: '法的支援とコミュニティリソース',
        legalAid: {
          title: '法的支援団体',
          description: '地域で無料または低料金の法的支援を見つけます。'
        },
        hotlines: {
          title: '緊急ホットライン',
          description: '24 時間年中無休のホットラインで、即時の支援とサポートを提供します。'
        },
        community: {
          title: 'コミュニティ組織',
          description: 'サポートとリソースを提供する地域の組織。'
        }
        ,
        visitWebsite: 'ウェブサイトを訪問 →',
        noteTitle: '注意',
        noteContent: 'リソース情報は変更される可能性があります。連絡先情報とサービスを確認してからお問い合わせください。'
      },
      
      help: {
        title: '書類の手伝い',
        subtitle: '一般的な移民フォームに関するガイダンス',
        description: '一般的な移民フォームや申請書の理解と記入を手伝います。',
        commonFormsTitle: '一般的な移民フォーム',
        viewFormLabel: 'フォームを見る →',
        tipsTitle: 'フォーム記入のヒント',
  tips: {
          tip1: 'フォームに記入する前に、すべての指示を注意深くお読みください。',
          tip2: '黒インクを使用し、回答を明確に印刷または入力してください。',
          tip3: 'すべての質問に対して真実かつ完全に回答してください。',
          tip4: 'すべてのフォームとサポート文書のコピーを保管してください。',
          tip5: '質問がある場合は、移民弁護士に相談することを検討してください。',
          tip6: '提出する前にすべての情報を再確認してください。'
        },
        chatbotSectionTitle: 'ヘルプが必要ですか？ AI アシスタントに聞いてみてください',
        chatbotSectionDescription: '右下隅にある AI チャットボットを使用して、移民フォームや手続きに関する質問に対する回答を取得します。'
      ,
        disclaimerText: 'この情報はあくまでガイドです。移民フォームや要件は変更される可能性があります。最新の情報については、必ず USCIS の公式ウェブサイトを確認し、法的助言については移民弁護士に相談してください。'
      },
      about: {
        title: 'Immigo について',
        subtitle: '情報を通じて移民に力を与える',
        description: 'Immigo は、言語や書類の状況に関係なく、移民が権利を理解し、リソースにアクセスできるよう支援することに専念しています。',
        missionTitle: '私たちの使命',
        whatWeOfferTitle: '私たちが提供するもの',
        features: {
          rightsLabel: 'あなたの権利を知る',
          resourceFinderLabel: 'リソース検索',
          paperworkHelpLabel: '書類の手伝い',
          aiAssistantLabel: 'AI アシスタント',
          multilingualSupportLabel: '多言語サポート'
        },
        disclaimerTitle: '免責事項',
        contactTitle: 'お問い合わせ',
        disclaimerText: 'Immigo は情報リソースであり、法的助言を提供するものではありません。このウェブサイトの情報は教育目的のみであり、専門の法的助言の代わりに使用されるべきではありません。',
        contactText: 'Immigo に関する質問や提案がある場合は、チャットボットを通じてお問い合わせいただくか、地元の移民法律サービス機関にお問い合わせください。'
      },
      chatbot: {
        title: 'AI アシスタント',
        placeholder: '移民に関する質問を入力してください...',
        send: '送信',
        thinking: '考えています...',
        error: '申し訳ありませんが、エラーが発生しました。再試行してください。',
        apiKeyMissing: '⚠️ チャットボットを使用するには、.env ファイルに VITE_GEMINI_API_KEY を設定してください。',
        welcomeGreeting: '👋 AI アシスタント',
        welcomePrompt: '移民の権利、法律、またはリソースに関する質問を何でも聞いてください！',
        toggleAria: 'チャットボットを切り替える',
        closeAria: 'チャットボットを閉じる',
        systemPrompt: 'あなたは、米国の移民権、法律、およびリソースに関する情報を提供する有益なアシスタントです。 正確で役立つサポート情報を提供してください。 ユーザーに対して、あなたが法的助言の代わりではなく、特定の法的事項について移民弁護士に相談する必要があることを常に思い出させてください。'
      },
      footer: {
        description: '移民に知識とリソースを提供する。',
        rights: 'すべての権利を保留します。'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: resources.en,
      es: resources.es,
      fr: resources.fr,
      ar: resources.ar,
      zh: resources.zh, // add zh into your existing resources object
      ja: resources.ja
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

