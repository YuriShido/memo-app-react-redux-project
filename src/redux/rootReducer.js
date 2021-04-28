import { combineReducers } from 'redux'

import ContentsReducer from './reducers'

const rootReducer = combineReducers({
    contents: ContentsReducer
})

export default rootReducer