import { ADD_CONTENTS, SET_CONTENTS, UPDATE_CONTENTS, DELETE_ITEM} from './actions'

const INITIAL_STATE = {
    memoList: [
        {
            id:0,
            title: "Test",
            contents: "Do landry",

        },
        {
            id:1,
            title: "Check2",
            contents: "Why this is so Difficult!!!!!",

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
            console.log("payload: ", action.payload);
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

        const newMemoList = state.memoList.map((memo) => {
            if(memo.id === action.payload.id){
                console.log("Memo;",memo) // --> {id: 1, title: "Check2", contents: "Difficult"}
                console.log("action", action.payload);  // --> {title: "Check1", contents: "yoyoyoyoyoyoyoyorhfw9hrfpr", id: 1}contents: "yoyoyoyoyoyoyoyorhfw9hrfpr"id: 1title: "Check1"__proto__: Object

                return{
                    ...memo,
                    // [action.payload]: action.payload
                    ...action.payload
                }
            } else {
                return {
                    ...memo
                }
            }
        })

        return {
            ...state,
            memoList: newMemoList
        }


        case DELETE_ITEM: 
            console.log(action.payload,
                state.memoList);
            return {
                ...state,
                memoList: state.memoList.filter(memo => memo.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export default ContentsReducer