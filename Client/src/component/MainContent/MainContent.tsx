import './MainContent.scss'

import { Route, Routes } from 'react-router';

import AddSth from '../AddSth/AddSth';
import Category from '../Category/Category';
import Menu from '../Menu/Menu';
import SubCategory from '../SubCategory/SubCategory';
import InputWordForm from '../inputWordForm/inputWordForm';

const MainContent = () => {

    return (
        <main className='main' >
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/category' element={<Category />} />
                <Route path='/sub-category' element={<SubCategory />} />
                <Route path='/add' element={<InputWordForm />} />
            </Routes>

            <AddSth />
        </main>
    );
}

export default MainContent;