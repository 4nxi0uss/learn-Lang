import './MainContent.scss'

import { Route, Routes } from 'react-router';

import AddSth from '../AddSth/AddSth';
import Category from '../Category/Category';
import Menu from '../Menu/Menu';

const MainContent = () => {

    return (
        <main className='main' >
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/category' element={<Category />} />
            </Routes>
            <AddSth />
        </main>
    );
}

export default MainContent;