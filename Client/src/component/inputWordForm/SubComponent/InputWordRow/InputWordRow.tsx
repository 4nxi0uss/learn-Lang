import './InputWordRow.scss'

const InputWordRow = ({ fun, id, firstLang, secondLang }: { fun: any, id: number, firstLang?: string, secondLang?: string }) => {

    return (
        <div>
            <>
                <label htmlFor="pl">PL</label>
                <input type="text" name='firstLang' id='pl' onChange={(e) => fun(e, id)} value={firstLang} />
            </>
            <span> - </span>
            <>
                <label htmlFor="eng">ENG</label>
                <input type="text" name='secondLang' id='eng' onChange={(e) => fun(e, id)} value={secondLang} />
            </>
        </div>
    );
}

export default InputWordRow;