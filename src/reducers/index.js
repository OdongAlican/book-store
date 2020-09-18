import booksReducer from './books'
import filterReducer from './filter'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    booksReducer,
    filterReducer
})

export default allReducers;