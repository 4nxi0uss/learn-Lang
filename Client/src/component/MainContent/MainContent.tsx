import Style from './MainContent.module.scss'
import Block from 'bem-css-modules'

import CategoryRow from '../CategoryRow/CategoryRow';
import AddSth from '../AddSth/AddSth';

const b = Block(Style)

const MainContent = () => {
    return (
        <main className={b()} >
            <CategoryRow titleText='Human' />
            <CategoryRow titleText='Vehicle' />
            <CategoryRow titleText='Sport' />
            <CategoryRow titleText='Brain' />
            <AddSth />
        </main>
    );
}

export default MainContent;