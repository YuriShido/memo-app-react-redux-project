import { ADD_CONTENTS, SET_CONTENTS } from './actions'

const INITIAL_STATE = {
    memoList: [
        {
            // id:"",
            title: "Test",
            contents: "料理レシピ",

        },
        {
            // id:"",
            title: "Check2",
            contents: "Difficult",

        }
    ],
    currentMemo: {
        title: "",
        contents: ""
    }
}
//action stateの中身をarrayに変える
// console.log(INITIAL_STATE.currentMemo);
const ContentsReducer = (state = INITIAL_STATE, action) => {
    console.log("HAHAHA ", state.currentMemo);
    switch (action.type) {
        case ADD_CONTENTS:
            const newState = { ...state }
            newState.memoList.push(action.payload)
            console.log("STATE IN ADD: ", newState);
            // console.log("SSTTAATTEE: ", state);
            // return {
            //     ...state,
            //     ...newState
            // }
            return {
                ...state,
                memoList: [...state.memoList, action.payload]
            }

        // ...state, 
        //     memoList: [...state.memoList, action.payload]
        //         {title: addContents(state.title),
        //         contents: addContents(state.contents)}]

        case SET_CONTENTS:

            return {
                ...state,
                currentMemo: {
                    title: action.payload.title,
                    contents: action.payload.contents
                }
            }

        default:
            return state;
    }
}

export default ContentsReducer