import { useNavigate } from 'react-router'
import { categoryName } from '../../Redux/Slice/categorySlice';
import { useAppDispatch } from '../../Redux/Hooks/Hooks';

import './CategoryRow.scss'

const CategoryRow = ({ titleText, page }: { titleText: string, page: string }) => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate();

    return (
        <section className='category' onClick={() => { console.log(titleText); navigate(page); dispatch(categoryName(titleText)) }}>
            <h2 className='category__title'>{titleText}</h2>
        </section>
    );
}

export default CategoryRow;