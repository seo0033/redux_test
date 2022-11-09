import { configureStore, createSlice } from "@reduxjs/toolkit";

const word = createSlice({
    name: '천재로 만들기',
    initialState: 1,
    reducers: {
        up: state => state + 1
    }
})

const { up } = word.actions;
export { up }


const changeMode = createSlice({
    name: '다크모드',
    initialState: false,
    reducers: {
        change: state => !state
    }
});

export const { change } = changeMode.actions;

const createInput = createSlice({
    name: '포함한 값받기',
    initialState: [],
    reducers: {
        //immer는 어떻게 작동하는가??? 객체 불변성을 무시하는 방법... 
        //immer사용상의 규약 같은 거네... {} 를 써줘야 불변성을 무시하고 작동함...
        //create: (state, action) => { state.push(action.payload) }
        //create: (state, action) => [...state, action.payload]
        //create: (state, action) => { return [...state, action.payload] }
        create: (state, action) => { state.push(action.payload) }
    }
})

export const { create } = createInput.actions;




const store = configureStore({
    reducer: {
        word: word.reducer,
        changeMode: changeMode.reducer,
        createInput: createInput.reducer
    }
});

export default store