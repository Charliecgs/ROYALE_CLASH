import { useContext } from 'react';
import { languageContext } from '../../context/LanguagesContext';

const SelectLanguages = () => {
  const { handleLanguage } = useContext(languageContext);
  return (
    <select onChange={handleLanguage}>
      <option value="es-ES">Spanish</option>

      <option value="en-US">English</option>
    </select>
  );
};

export default SelectLanguages;
