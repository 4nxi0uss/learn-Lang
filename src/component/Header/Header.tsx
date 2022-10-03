import Style from './Header.module.scss'
import block from 'bem-css-modules'

const b = block(Style)

const Header = () => {
    return (
        <header className={b()}>
            <h1 className={b('title')}>LearnLang</h1>
        </header>
    );
}

export default Header;