import { Provider } from "react-redux";
import { createStore } from "redux";
import languageReducer from "./reducers/languageReducer";

const defaultState = {
  defaultLanguage: "it",
  languages: {
    it: "italiano",
    fr: "francese",
    de: "tedesco",
  },
};

const store = createStore(
  languageReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Use it to wrap
export function ReduxProvider({children}) {
    return <Provider store={store}>{children}</Provider>
}