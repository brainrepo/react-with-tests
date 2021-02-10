export default function languageReducer(state, action) {
    switch(action.type){
        case "ADD_LANGUAGE":
            return {...state, languages: { ...state.languages, [action.payload.name]:action.payload.value}}
        case "REMOVE_LANGUAGE":
            delete state.languages[action.payload.name];
            return ({...state, languages: state.languages});
        default:
            return state
    }
}
