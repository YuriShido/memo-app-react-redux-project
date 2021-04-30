import { ADD_CONTENTS, SET_CONTENTS, UPDATE_CONTENTS, DELETE_ITEM} from './actions'

const INITIAL_STATE = {
    memoList: [
        {
            id:0,
            title: "Test",
            contents: "料理レシピ",

        },
        {
            id:1,
            title: "Check2",
            contents: "Difficult",

        }
    ],
    currentMemo: {
        id: "",
        title: "",
        contents: ""
    },

    isNew: true
}
//action stateの中身をarrayに変える
console.log("INITIIAL",INITIAL_STATE);
const ContentsReducer = (state = INITIAL_STATE, action) => {
    console.log("HAHAHA ", state.currentMemo);
    switch (action.type) {
        case ADD_CONTENTS:
            // const newState = { ...state }
            // newState.memoList.push(action.payload)
            // console.log("STATE IN ADD: ", newState);
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
                    id: action.payload.id,
                    title: action.payload.title,
                    contents: action.payload.contents
                },
                isNew: true
                
            }
        
        case UPDATE_CONTENTS:

        const newState2 = {...state}
        // newState2.memoList[action.payload.id].title = action.payload.title
        // newState2.memoList[action.payload.id].contents = action.payload.contents

        return {
            // ...state,
            // memoList: {
            //     title: action.payload.title,
            //     contents: action.payload.contents
            // },
            // isNew: false

            ...state,
            memoList: [{...state.memoList[action.payload.id],
              
                title: action.payload.title,
                contents: action.payload.contents}],
                isNew: action.payload.boolean
                // title: action.payload.title,
                // contents: action.payload.contents
            

            
            // ...newState2


        }

        case DELETE_ITEM: 
            console.log(action.payload,
                state.memoList);
            return {
                ...state,
                memoList: state.memoList.filter(memo => memo.id !== action.payload.id)
            }

        //     case CLEAR_FROM_CART:
        //     return {
        //     ...state,
        //     cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        // }
        default:
            return state;
    }
}

export default ContentsReducer