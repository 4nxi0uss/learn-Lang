import Style from './MainContent.module.scss'
import Block from 'bem-css-modules'

import Category from '../Category/Category';
import AddSth from '../AddSth/AddSth';

const b = Block(Style)

const MainContent = () => {
    return (
        <main className={b()} >
            <Category titleText='Human' />
            <Category titleText='Vehicle' />
            <Category titleText='Sport' />
            <Category titleText='Brain' />
            <AddSth />
        </main>
    );
}

export default MainContent;