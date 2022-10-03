import Style from './AddSth.module.scss'
import Block from 'bem-css-modules'

const b = Block(Style)

const AddSth = () => {


    return (
        <section className={b()} onClick={(e) => {
            console.log(e.target);
        }}>
            <div className={b('horizontal')}></div>

            <div className={b('vertical')}></div>
            <div className={b('addText')}>Dodaj!</div>
        </section>
    );
}

export default AddSth;