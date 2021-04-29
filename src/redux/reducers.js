import { ADD_CONTENTS, SET_CONTENTS} from './actions'

const INITIAL_STATE = {
    memoList:[
        {
            // id:"",
            title:"Test",
            contents:"料理レシピ",
           
        },
        {
            // id:"",
            title:"Check2",
            contents:"Difficult",
           
        }
    ],
    currentMemo: {
        title:"",
        contents: ""
    }
}
//action stateの中身をarrayに変える
// console.log(INITIAL_STATE.currentMemo);
const ContentsReducer = (state = INITIAL_STATE, action) => {
    console.log("HAHAHA ", state.currentMemo);
    switch(action.type) {
        case ADD_CONTENTS: 
            const newState = {...state}
            newState.memoList.push(action.payload)
            console.log("STATE IN ADD: ", newState);
            // console.log("LISTTT: ", state.memoList[0]);
            // console.log("LISTTT: ", state.memoList[1]);
            // console.log("LISTTT: ", state.memoList[2]);
            // console.log("SSTTAATTEE: ", state);
            // return {
            //     ...state,
            //     cartItems: addItemToCart(state.cartItems, action.payload),
            //   }
            // console.log("sttttaatt",state);
            return {
                ...state,
                ...newState
            }
            
            // ...state, 
            //     memoList: [...state.memoList, action.payload]
            //         {title: addContents(state.title),
            //         contents: addContents(state.contents)}]
        
        case SET_CONTENTS: 
            const newState2 = {...state}
            console.log('state;',{...state});
            // console.log("CURRENTMEMO ", state.currentMemo);
            state.currentMemo.title = action.payload.title
            state.currentMemo.contents = action.payload.contents
            return {
                ...state,
                ...newState2
            }

        default: 
        return state;
    }
}

export default ContentsReducer