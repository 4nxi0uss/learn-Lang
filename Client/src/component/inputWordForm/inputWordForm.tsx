import { useEffect, useState } from 'react';

import './inputWordForm.scss'

import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/Hooks';
import { usePostWordsMutation } from '../../Redux/Services/learnLangApi';
import { inputFormRowData } from '../../Redux/Slice/inputRowSlice';

import InputWordRow from './SubComponent/InputWordRow/InputWordRow';

const InputWordForm = () => {

    const inputData = useAppSelector((state) => state.inputForm.inputFormData)
    console.log(Object.keys(inputData).length - 1);

    const [count, setCount] = useState<number>(Object.keys(inputData).length)

    const [updatePost, { status, isLoading }] = usePostWordsMutation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        count === 0 && dispatch(inputFormRowData({ [0]: {} }))

        count === 0 && setCount(1)
    }, [])

    const handleInputData = (e: any, id: number) => {
        e.preventDefault()

        dispatch(inputFormRowData({ ...inputData, [id]: { ...inputData?.[id], [e.target.name]: e.target.value } }))
    }

    const renderForm2 = () => {
        return Object.entries(inputData).map(([key, value]: any) => {
            return <InputWordRow key={key} id={key} firstLang={value?.firstLang} secondLang={value?.secondLang} fun={handleInputData} />
        })
    }

    const lenghtCondition = count < 10

    return (
        <section>
            <form >

                {renderForm2()}

                {lenghtCondition && <button onClick={(e) => {
                    e.preventDefault();

                    if (lenghtCondition) {

                        setCount(prev => {
                            return prev + 1
                        })

                        dispatch(inputFormRowData({ ...inputData, [count]: {} }))
                    }

                    console.log('kliok');
                }}>add next </button>}

                <button onClick={(e) => {
                    e.preventDefault();
                    console.log('send', inputData);
                    updatePost(inputData)
                }}>Send</button>

            </form>
        </section >
    );
}

export default InputWordForm;