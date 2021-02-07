import { act, render, screen, fireEvent, cleanup } from '@testing-library/react';
import {I18nContextProvider, useI18nState, useI18nSet} from "../i18nContext"
 
const Comp = () => {
    const lang = useI18nState()
    const set = useI18nSet()
    return <div>
        <div>Configuration label: {lang['menu.configurations']}</div>
        <button onClick={()=> set("it")}>Ita</button>
    </div>
}

beforeEach(() => {
    render(<I18nContextProvider>
        <Comp />
    </I18nContextProvider>);
})
afterEach(() => cleanup())

describe('<I18Context/>', () => {
    it('can be loaded', () => { 
        const lang = screen.getByText("Configuration label: Configurations");
        expect(lang).toBeVisible();
    });
    it('can be be modifiable', () => {
        const butt = screen.getByText("Ita");
        act(() => {
            fireEvent.click(butt)
        })
        expect(screen.getByText("Configuration label: Configurazioni")).toBeVisible();
    });
})