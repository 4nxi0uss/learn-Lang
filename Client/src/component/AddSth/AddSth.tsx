import './AddSth.scss'

const AddSth = () => {

    return (
        <section className='add' onClick={(e) => { console.log(e.target); }}>
            <div className='add__horizontal'></div>
            <div className='add__vertical'></div>
            <div className='add__addText'>Dodaj!</div>
        </section>
    );
}

export default AddSth;