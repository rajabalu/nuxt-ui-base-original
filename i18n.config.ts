export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      nav: {
        features: 'Features',
        pricing: 'Pricing',
        resources: 'Resources'
      },
      hero: {
        title: 'Your all-in-one localization platform',
        subtitle: 'Automate and manage your entire translation workflow in one place.',
        cta: {
          try: 'Try for free',
          demo: 'Book a demo'
        }
      }
    },
    fr: {
      welcome: 'Bienvenue',
      nav: {
        features: 'Fonctionnalités',
        pricing: 'Tarification',
        resources: 'Ressources'
      },
      hero: {
        title: 'Votre plateforme de localisation tout-en-un',
        subtitle: 'Automatisez et gérez l\'ensemble de votre flux de traduction en un seul endroit.',
        cta: {
          try: 'Essayer gratuitement',
          demo: 'Réserver une démo'
        }
      }
    },
    es: {
      welcome: 'Bienvenido',
      nav: {
        features: 'Características',
        pricing: 'Precios',
        resources: 'Recursos'
      },
      hero: {
        title: 'Tu plataforma de localización todo en uno',
        subtitle: 'Automatiza y gestiona todo tu flujo de trabajo de traducción en un solo lugar.',
        cta: {
          try: 'Prueba gratis',
          demo: 'Solicitar demo'
        }
      }
    }
  }
})) 