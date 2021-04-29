import { combineReducers } from 'redux'
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import ContentsReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contents']
}
const rootReducer = combineReducers({
    contents: ContentsReducer
})


export default persistReducer(persistConfig, rootReducer)
// export default rootReducer