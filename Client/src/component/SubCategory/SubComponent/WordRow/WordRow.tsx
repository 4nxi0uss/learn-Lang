import './WordRow.scss'

const WordRow = ({ firstLang, secondLang }: { firstLang: string, secondLang: string }) => {

    return (
        <div className='word-row'>
            <div>{firstLang}</div>
            <span> - </span>
            <div>{secondLang}</div>
        </div>
    );
}

export default WordRow;