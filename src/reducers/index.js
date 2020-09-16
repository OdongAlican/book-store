import booksReducer from './books'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    booksReducer
})

export default allReducers;