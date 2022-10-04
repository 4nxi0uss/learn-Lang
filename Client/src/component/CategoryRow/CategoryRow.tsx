import { useLocation, useNavigate } from 'react-router'

import './CategoryRow.scss'


const CategoryRow = ({ titleText }: { titleText: string }) => {

    const Location = useLocation();
    const navigate = useNavigate();

    return (
        <section className='category' onClick={() => { console.log(titleText); console.log(Location); navigate(titleText) }}>
            <h2 className='category__title'>{titleText}</h2>
        </section>
    );
}

export default CategoryRow;