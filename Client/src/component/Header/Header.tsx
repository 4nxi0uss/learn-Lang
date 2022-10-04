import Style from './Header.module.scss'
import Block from 'bem-css-modules'

const b = Block(Style)

const Header = () => {
    return (
        <header className={b()}>
            <h1 className={b('title')}>LearnLang</h1>
        </header>
    );
}

export default Header;