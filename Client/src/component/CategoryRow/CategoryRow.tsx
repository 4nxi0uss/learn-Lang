import { useLocation, useNavigate } from 'react-router'

import Style from './Category.module.scss'
import Block from 'bem-css-modules'

const b = Block(Style);

const Category = ({ titleText }: { titleText: string }) => {

    const Location = useLocation();
    const navigate = useNavigate();

    return (
        <section className={b()} onClick={() => { console.log(titleText); console.log(Location); navigate(titleText) }}>
            <h2 className={b('title')}>{titleText}</h2>
        </section>
    );
}

export default Category;