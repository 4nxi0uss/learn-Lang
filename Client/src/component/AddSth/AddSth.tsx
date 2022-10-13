import { useNavigate } from 'react-router';

import './AddSth.scss'

const AddSth = () => {

    const navigate = useNavigate()

    return (
        <section className='add' onClick={(e) => { console.log(e.target); navigate('/add') }}>
            <div className='add__horizontal'></div>
            <div className='add__vertical'></div>
            <div className='add__addText'>Dodaj!</div>
        </section>
    );
}

export default AddSth;