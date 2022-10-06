import * as React from 'react';

import './Category.scss'

import { useAppSelector } from '../../Redux/Hooks/Hooks';
import { useGetSubCategoriesQuery } from '../../Redux/Services/learnLangApi';

import CategoryRow from '../CategoryRow/CategoryRow';

const Category = () => {

    const category = useAppSelector((state) => state.category.cat)

    const { data, isLoading, isError, error } = useGetSubCategoriesQuery(1)

    isError && console.warn(error);

    const renderSubCategories = data?.data.map(({ name }: { name: string }) => {
        console.log(name);

        return <CategoryRow key={name} titleText={name} page='/sub-category' />
    })

    return (
        <section className='cat'>
            {!isLoading && renderSubCategories}
        </section>
    );
}

export default Category;