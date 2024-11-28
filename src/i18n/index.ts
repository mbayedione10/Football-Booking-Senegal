import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      hero: {
        title: 'Réservez votre terrain de football à Dakar',
        subtitle: 'Trouvez et réservez facilement les meilleurs terrains de football dans toute la ville'
      },
      featured: {
        title: 'Terrains en vedette'
      },
      map: {
        title: 'Trouvez un terrain près de chez vous'
      },
      reviews: 'avis',
      nav: {
        home: 'Accueil',
        fields: 'Terrains',
        bookings: 'Réservations',
        profile: 'Profil'
      }
    }
  },
  wo: {
    translation: {
      hero: {
        title: 'Teranga Football - Terrain yi Dakar',
        subtitle: 'Gis ak réservé terrain yi si Dakar bépp'
      },
      featured: {
        title: 'Terrain yi gënë rafet'
      },
      map: {
        title: 'Wut terrain bu jege sa kër'
      },
      reviews: 'avis yi',
      nav: {
        home: 'Accueil',
        fields: 'Terrain yi',
        bookings: 'Réservation yi',
        profile: 'Profil'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;