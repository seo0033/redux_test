import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up, change, create } from './store';


const Sub = () => {
    const { word, createInput } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(createInput)
    return (
        <div>
            장서영 {word}
            <button onClick={
                () => dispatch(up())
            }>숫자올리기</button>

            <button onClick={
                () => dispatch(change())
            }>
                change mode
            </button>
            <button onClick={
                () => dispatch(create('장서영 바보'))
            }>
                값 전달하기
            </button>

        </div>
    )
}

export default Sub