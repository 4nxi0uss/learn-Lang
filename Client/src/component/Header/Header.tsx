import { useNavigate } from 'react-router';

import './Header.scss'

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className='header'>
            <h1 className='header__title' onClick={() => { navigate('/') }}>LearnLang</h1>
        </header>
    );
}

export default Header;