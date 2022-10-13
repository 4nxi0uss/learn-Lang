import * as React from 'react';
import { useGetCategoriesQuery } from '../../Redux/Services/learnLangApi';
import CategoryRow from '../CategoryRow/CategoryRow';

import './Menu.scss'

const Menu = () => {

    const { data, error, isLoading } = useGetCategoriesQuery(null)
    console.log(data);

    const renderCategories = data?.data.map(({ name }: { name: string }) => <CategoryRow key={name} page='/category' titleText={name} />);

    return (
        <section className='menu'>
            {renderCategories}
        </section>
    );
}

export default Menu;