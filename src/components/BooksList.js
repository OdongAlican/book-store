import React from 'react'
import { connect } from 'react-redux'
import Book from '../containers/Book'
import { deleteBook, changeFilter } from '../actions/index'
import CategoryFilter from './CategoryFilter'
// import { useSelector } from 'react-redux'

const BooksList = ({ books, deleteBook, changeFilter, filter }) => {

    // const books = useSelector( state  => state.booksReducer)
    const handleRemoveBook = book => {
        deleteBook(book)
    }

    const handleFilterChange = e => {
        changeFilter(e.target.value);
      };

    return(
        <div>
            <CategoryFilter changeFilter={handleFilterChange}/>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
               <tbody>
                   {
                       books.filter(book => book.category === filter || filter === 'All').map( book => (
                        <Book book = {book} key={book.id} handleRemove = { handleRemoveBook }/>
                       ))
                   }
                </tbody> 
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.booksReducer,
    filter: state.filterReducer
})

const mapDispatchToProps = dispatch => ({
    deleteBook: book => {
        dispatch(deleteBook(book))
    },
    changeFilter: filter => {
        dispatch(changeFilter(filter));
      },
})

const BooksListConnect = connect(mapStateToProps, mapDispatchToProps)(BooksList)

export default BooksListConnect;