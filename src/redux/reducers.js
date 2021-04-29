import {addContents, ADD_CONTENTS} from './actions'

const INITIAL_STATE = {
    memoList:[
        {
            // id:"",
            title:"Test",
            contents:"料理レシピ",
            Time: ""
        },
        {
            // id:"",
            title:"Check2",
            contents:"Difficult",
            Time: ""
        }
    ]
}
//action stateの中身をarrayに変える
// console.log(INITIAL_STATE.memoList);
const ContentsReducer = (state = INITIAL_STATE, action) => {
    // console.log("HAHAHA ", action.type);
    switch(action.type) {
        case ADD_CONTENTS: 
        const newState = {...state}
        state.memoList.push(action.payload)
        // console.log("LISTTT: ", state.memoList[0]);
        // console.log("LISTTT: ", state.memoList[1]);
        // console.log("LISTTT: ", state.memoList[2]);
        // console.log("SSTTAATTEE: ", state);
        return {...state}
            
            // ...state, 
            //     memoList: [...state.memoList, action.payload]
                    // {title: addContents(state.title),
                    // contents: addContents(state.contents)}]
        

        default: 
        return state;
    }
}

export default ContentsReducer