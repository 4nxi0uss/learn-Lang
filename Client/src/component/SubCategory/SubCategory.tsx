import { usePatchWordPLtoENGQuery } from '../../Redux/Services/learnLangApi';
import Loader from '../Loader/Loader';

import './SubCategory.scss'
import WordRow from './SubComponent/WordRow/WordRow';

const SubCategory = () => {
    const { data, isLoading, error } = usePatchWordPLtoENGQuery(1)

    console.log(data);
    console.log(error);
    const renderWordRow = data?.data.map(({ id, subCategoryId, wordPl, wordEng }: any) => (<WordRow key={id} firstLang={wordPl} secondLang={wordEng} />))

    return (<>
        {isLoading && <Loader />}
        {!isLoading && <section className='sub-category'>
            <header className='sub-category__header'>
                <div className='sub-category__header__first-lang'>pl</div>
                <div className='sub-category__header__second-lang'>eng</div>
            </header>
            {renderWordRow}
        </section>}
    </>
    );
}

export default SubCategory;