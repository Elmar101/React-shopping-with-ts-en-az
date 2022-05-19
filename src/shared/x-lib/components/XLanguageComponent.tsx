import { useTranslation } from 'react-i18next';
import { setDataToStorage } from '../../storage/srorage';

const XLanguageSelector = () => {
    const { i18n } = useTranslation();

    const onChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setDataToStorage("language",`${language}`);
    }
    
    return (
        <div  style={{margin: "16px auto"}}>
            <img 
                src="http://www.geognos.com/api/en/countries/flag/AZ.png" 
                alt="Azerbaijan" 
                style={{width: "60px", marginRight: "16px", cursor: "progress", height: "36px"}}
                onClick={() => onChangeLanguage('az') }
                />
            <img 
                src="http://www.geognos.com/api/en/countries/flag/GB.png" 
                alt="English" 
                style={{width: "60px", cursor: "progress", height: "36px"}}
                onClick={() => onChangeLanguage('en') }
                />
        </div>
    )
}

export default XLanguageSelector;