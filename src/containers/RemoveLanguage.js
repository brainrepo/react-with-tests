import { useDispatch } from 'react-redux';
import { removeLang } from '../redux/actions/language';

export default function AddLanguage() {
    const dispatch = useDispatch()

    return <button onClick={() => dispatch(removeLang('fran'))}>REMOVE FR</button>
}