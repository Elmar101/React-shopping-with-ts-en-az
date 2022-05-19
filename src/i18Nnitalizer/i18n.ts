import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getDataFromStorage } from '../shared/storage/srorage';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        az: {
            translations: {
                "HOME": "ESAS SEYFE",
                "Add to basket": "Sebete Elave et",
                "Remove Basket": "Sebetinden Sil"
            }
        },
        en: {
            translations: {
                "HOME": "HOME",
                "Add to basket": "Add to basket",
                "Remove Basket": "Remove Basket"
            }
        }
    },
    fallbackLng: getDataFromStorage("language") ||'en',
    ns: ['translations'],
    debug: true,
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;