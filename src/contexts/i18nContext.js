import {createContext, useContext, useState} from 'react';

import it from "../assets/i18n/it.json";
import en from "../assets/i18n/en.json";
import fr from "../assets/i18n/fr.json";

const langs = {en, fr, it}

const I18nStateContext = createContext();
const I18nSetContext = createContext();

function I18nContextProvider({children}) {
    const [lang, setLang] = useState("en");
    return (
      <I18nStateContext.Provider value={lang}>
          <I18nSetContext.Provider value={setLang}>
              {children}
          </I18nSetContext.Provider>
      </I18nStateContext.Provider>
    )
}

function useI18nState() {
    const context = useContext(I18nStateContext);

    if (context === undefined) {
        throw new Error("useI18nState must be used inside a I18nContext provider")
    }

    return langs[context];
}

function useI18nSet() {
    const context = useContext(I18nSetContext);

    if (context === undefined) {
        throw new Error("useI18nState must be used inside a I18nContext provider")
    }

    return context;
}

function useI18n(){
    return [useI18nState(), useI18nSet()]
}

export {I18nContextProvider, useI18nState, useI18nSet, useI18n}
