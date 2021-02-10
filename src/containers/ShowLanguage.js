import { useSelector, useStore } from "react-redux"

export default function ShowLanguage() {
    const languages = useSelector(state => state.languages);
    //const state = useStore().getState();
    //console.log(state)

    return <div>languages:
        <ul>
            { Object.keys(languages).map(e => <div key={e}>{languages[e]}</div>)} 
        </ul>
    </div>
}