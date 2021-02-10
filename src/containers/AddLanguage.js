import { useDispatch } from 'react-redux';
import { addLang } from '../redux/actions/language';

export default function AddLanguage() {
    const dispatch = useDispatch()

    return <button onClick={() => dispatch(addLang('fran', 'francese'))}>ADD FR</button>
}