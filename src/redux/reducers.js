import {addContents, ADD_CONTENTS} from './actions'

const INITIAL_STATE = {
    memoList:[
        {
            // id:"",
            title:"Test",
            contants:"料理レシピ",
            Time: ""
        },
        {
            // id:"",
            title:"Check2",
            contants:"Difficult",
            Time: ""
        }
    ]
}
//action stateの中身をarrayに変える
console.log(INITIAL_STATE.memoList);
const ContentsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_CONTENTS: 
        return {
            ...state, 
                memoList: [...state.memoList, action.payload]
                    // {title: addContents(state.title),
                    // contents: addContents(state.contents)}]
            
        }

        default: 
        return state;
    }
}

export default ContentsReducer