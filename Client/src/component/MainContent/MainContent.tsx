import './MainContent.scss'

import CategoryRow from '../CategoryRow/CategoryRow';
import AddSth from '../AddSth/AddSth';

const MainContent = () => {
    return (
        <main className='main' >
            <CategoryRow titleText='Human' />
            <CategoryRow titleText='Vehicle' />
            <CategoryRow titleText='Sport' />
            <CategoryRow titleText='Brain' />
            <AddSth />
        </main>
    );
}

export default MainContent;